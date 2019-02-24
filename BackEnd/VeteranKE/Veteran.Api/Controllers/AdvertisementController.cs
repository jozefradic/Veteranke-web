using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;
using AutoMapper;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Veteran.Api.Helpers;
using Veteran.Repository.DTOs;
using Veteran.Repository.Interfaces;
using Veteran.Repository.Models;

namespace Veteran.Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AdvertisementController : ControllerBase
    {
        private readonly IAdvertisement _advertisement;
        private readonly IMapper _mapper;

        public AdvertisementController(IAdvertisement advertisement, IMapper mapper)
        {
            _advertisement = advertisement;
            _mapper = mapper;
        }
        // GET: api/Advertisement
        [AllowAnonymous]
        [HttpGet]
        public async Task<IActionResult> GetAll([FromQuery]AdvParams advParams)
        {
            var advertisements = await _advertisement.GetAdvertisements(advParams);

            Response.AddPagination(advertisements.CurrentPage, advertisements.PageSize,
                advertisements.TotalCount, advertisements.TotalPages);

            return Ok(advertisements);
        }

        // GET: api/Advertisement/5
        [AllowAnonymous]
        [HttpGet("{id}", Name = "Get")]
        public async Task<IActionResult> GetOne(int id)
        {
            var advertisement = await _advertisement.GetAdvertisement(id);
            return Ok(advertisement);
        }

        // POST: api/Advertisement
        [HttpPost]
        public async Task<IActionResult> CreateNew([FromBody] AdvertisementForCreationDto advertisementForCreationDto)
        {
            var advertisement =_mapper.Map<Advertisement>(advertisementForCreationDto);
            var createdAdvertisement = await _advertisement.CreateNew(advertisement);

            return Ok(createdAdvertisement);
        }

        // PUT: api/Advertisement/5
        [Route("{id}/edit")]
        [HttpPut("{id}/edit")]
        public async Task<IActionResult> UpdateAdvertisement(int id, AdvertisementForUpdateDto advertisementForUpdateDto)
        {
            //if (advertisementForCreationDto.UserId != int.Parse(User.FindFirst(ClaimTypes.NameIdentifier).Value))
            //    return Unauthorized();

            var advertisementFromRepo = await _advertisement.GetAdvertisement(id);

            _mapper.Map(advertisementForUpdateDto, advertisementFromRepo);

            if (await _advertisement.SaveAll())
                return NoContent();
            throw new Exception($"Updating user {id} failed on save");
        }

        // DELETE: api/ApiWithActions/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }

        // GET api/values
        [AllowAnonymous]
        [HttpGet("categories")]
        public async Task<IActionResult> GetAdvertisementCategories()
        {
            var categories = await _advertisement.GetCategories();
            

            return Ok(categories);
        }
    }
}
