using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Veteran.Repository.Interfaces;
using Veteran.Repository.Repositories;

namespace Veteran.Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class GaleryController : ControllerBase
    {
        private readonly IGalery _repo;

        public GaleryController(IGalery repo)
        {
            _repo = repo;
        }
        // GET: api/Galery
        [HttpGet]
        public async Task<IActionResult> GetGalery()
        {
            var Albums = await _repo.GetAlbums();
            return Ok (Albums);
        }


    }
    
}
