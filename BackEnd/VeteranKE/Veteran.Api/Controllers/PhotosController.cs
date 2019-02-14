using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;
using AutoMapper;
using CloudinaryDotNet;
using CloudinaryDotNet.Actions;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Options;
using Veteran.Api.Helpers;
using Veteran.Repository.DTOs;
using Veteran.Repository.Interfaces;
using Veteran.Repository.Models.UserModels;
using System.IO;

namespace Veteran.Api.Controllers
{
    [Route("api/{route}/{userId}/photos")]
    [ApiController]
    public class PhotosController : ControllerBase
    {
        private readonly IVeteranCrud _repo;
        private readonly IMapper _mapper;
        private readonly IOptions<CloudinarySettings> _cloudinaryConfig;
        private Cloudinary _cloudinary;
        public PhotosController(IVeteranCrud repo, IMapper mapper, IOptions<CloudinarySettings> cloudinaryConfig)
        {
            _repo = repo;
            _mapper = mapper;
            _cloudinaryConfig = cloudinaryConfig;

            Account acc = new Account(
            _cloudinaryConfig.Value.CloudName,
            _cloudinaryConfig.Value.ApiKey,
            _cloudinaryConfig.Value.ApiSecret);

            _cloudinary = new Cloudinary(acc);
        }

        [HttpGet("{id}", Name = "GetPhoto")]
        public async Task<IActionResult> GetPhoto(int id)
        {
            var photoFromRepo = await _repo.GetPhoto(id);

            var photo = _mapper.Map<PhotoForReturnDto>(photoFromRepo);

            return Ok(photo);
        }

        [HttpPost]
        public async Task<IActionResult> AddPhotoForUser(int userId, 
            [FromForm]PhotoForCreationDto photoForCreationDto)
        {
            if (userId != int.Parse(User.FindFirst(ClaimTypes.NameIdentifier).Value))
                return Unauthorized();

            var userFromRepo = await _repo.GetUser(userId);

            var file = photoForCreationDto.File;
            // instance of image, cloudinary classses
            var uploadResult = new ImageUploadResult();
            //chceck file lenght
            if (file.Length > 0)
            {
                using (var stream = file.OpenReadStream())
                {
                    string path = Path.GetTempPath() + file.FileName;
                    //Path.GetTem
                    using (FileStream fs = new FileStream(path, FileMode.CreateNew, FileAccess.ReadWrite))
                    {
                        //fs.CopyTo(stream);
                        stream.CopyTo(fs);
                    }


                    //var uploadParams = new ImageUploadParams()
                    //{
                    //    File = new FileDescription(file.Name, stream),
                    //    Transformation = new Transformation()
                    //    .Width(500).Height(500).Crop("fill").Gravity("face")
                    //};
                    ////cloudinary upload method
                    //uploadResult = _cloudinary.Upload(uploadParams);
                }
            }
            photoForCreationDto.Url = uploadResult.Uri.ToString();
            photoForCreationDto.PublicId = uploadResult.PublicId;

            var photo = _mapper.Map<Photo>(photoForCreationDto);

            // add the photo
            userFromRepo.Photos.Add(photo);

            if(await _repo.SaveAll())
            {
                var photoToReturn = _mapper.Map<PhotoForReturnDto>(photo);

                return CreatedAtRoute("GetPhoto", new { id = photo.Id }, photoToReturn);
            }

            return BadRequest("Could not add the photo");
        }
        
        

    }
}