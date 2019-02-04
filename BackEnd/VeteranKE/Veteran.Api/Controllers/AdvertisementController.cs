using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Veteran.Repository.Interfaces;
using Veteran.Repository.Models;

namespace Veteran.Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AdvertisementController : ControllerBase
    {
        private readonly IAdvertisement _advertisement;

        public AdvertisementController(IAdvertisement advertisement)
        {
            _advertisement = advertisement;
        }
        // GET: api/Advertisement
        [HttpGet]
        public async Task<IActionResult> GetAll()
        {
            var advertisements = await _advertisement.GetAdvertisements();
            return Ok(advertisements);
        }

        // GET: api/Advertisement/5
        [HttpGet("{id}", Name = "Get")]
        public async Task<IActionResult> GetOne(int id)
        {
            var advertisement = await _advertisement.GetAdvertisement(id);
            return Ok(advertisement);
        }

        // POST: api/Advertisement
        [HttpPost]
        public async Task<IActionResult> CreateNew([FromBody] Advertisement advertisement)
        {
            var createdAdvertisement = await _advertisement.CreateNew(advertisement);

            return Ok(createdAdvertisement);
        }

        // PUT: api/Advertisement/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE: api/ApiWithActions/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
