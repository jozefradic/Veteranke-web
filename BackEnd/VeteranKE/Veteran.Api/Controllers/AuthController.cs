using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;
using Veteran.Repository.DTOs;
using Veteran.Repository.Interfaces;
using Veteran.Repository.Models.UserModels;

namespace Veteran.Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AuthController : ControllerBase
    {
        private readonly IAuth _repo;
        private readonly IConfiguration _config;

        public AuthController(IAuth repo, IConfiguration config)
        {
            _repo = repo;
            _config = config;
        }

        [HttpPost("register")]
        public async Task<IActionResult> Register(UserForRegistrationDto userForRegistrationDto)
        {
            userForRegistrationDto.Username = userForRegistrationDto.Username.ToLower();

            if (await _repo.UserExists(userForRegistrationDto.Username))
                return BadRequest("Username already exists");

            var userToCreate = new User
            {
                Name = userForRegistrationDto.Username
            };

            var createdUser = await _repo.Register(userToCreate, userForRegistrationDto.Password);

            return StatusCode(201);
        }

        [HttpPost("login")]
        public async Task<IActionResult> Login(UserForLoginDto userForLoginDto)
        {
            // find concrete user
            var userFromRepo = await _repo.Login(userForLoginDto.Username.ToLower(), userForLoginDto.Password);
            
            if (userFromRepo == null)
            {
                return Unauthorized();
            }

            // create token, add username and password to it
            // claims store id and username in payload
            var claims = new[]
            {
                new Claim(ClaimTypes.NameIdentifier, userFromRepo.Id.ToString()),
                new Claim(ClaimTypes.Name, userFromRepo.Name)
            };

            // key to sign token, hashed, token validator key
            var key = new SymmetricSecurityKey(Encoding.UTF8
                .GetBytes(_config.GetSection("AppSettings:Token").Value));

            //signing credential key
            var creds = new SigningCredentials(key, SecurityAlgorithms.HmacSha512Signature);

            //token descriptor, contain claims, signin credential, exp date
            var tokenDescriptor = new SecurityTokenDescriptor
            {
                Subject = new ClaimsIdentity(claims),
                Expires = DateTime.Now.AddDays(1),
                SigningCredentials = creds
            };

            var tokenHandler = new JwtSecurityTokenHandler();

            var token = tokenHandler.CreateToken(tokenDescriptor);

            return Ok(new
            {
                token = tokenHandler.WriteToken(token)
            });
        }
    }
}