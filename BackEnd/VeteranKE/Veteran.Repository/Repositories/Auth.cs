using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Veteran.Repository.Data;
using Veteran.Repository.Interfaces;
using Veteran.Repository.Models.UserModels;

namespace Veteran.Repository.Repositories
{
    public class Auth : IAuth
    {
        private readonly DataContext _context;

        public Auth(DataContext context)
        {
            _context = context;
        }

        public async Task<User> Login(string username, string password)
        {
            var user = await _context.Users.FirstOrDefaultAsync(x =>x.UserName == username);

            if (user == null)
                return null;
            //if (!VerifyPasswordHashes(password, user.PasswordHash, user.PasswordSalt))
            //    return null;

            return user;
        }

        private bool VerifyPasswordHashes(string password, byte[] passwordHash, byte[] passwordSalt)
        {
            using(var hmac = new System.Security.Cryptography.HMACSHA512(passwordSalt))
            {
                var computedHash = hmac.ComputeHash(System.Text.Encoding.UTF8.GetBytes(password));
                for(int i = 0; i <computedHash.Length; i++)
                {
                    if (computedHash[i] != passwordHash[i]) return false;
                }
                return true;

            }
        }

        public async Task<User> Register(User user, string password)
        {
            byte[] passwordHash, passwordSalt;
            CreatePassword(password, out passwordHash, out passwordSalt);

            //user.PasswordHash = passwordHash;
            //user.PasswordSalt = passwordSalt;
            await _context.Users.AddAsync(user);
            await _context.SaveChangesAsync();

            return user;
        }

        private void CreatePassword(string password, out byte[] passwordHash, out byte[] passwordSalt)
        {
            // -computes hash code(hash- based message auth code- HMAC)
            // -initialize a new instance of class with specified key data
            // -give us key (passwordSalt) and we use this key to unlock passwordHash
            // -comparing, we use passwordSalt to unlock passwordHash 
            // (password hash and salt stored in db),and computed hash of user input password
            // -deeper inherittance contains Dispose(), to call this method as soon as we are finished
            // is to surround using statement
            using(var hmac = new System.Security.Cryptography.HMACSHA512())
            {
                passwordSalt = hmac.Key;
                passwordHash = hmac.ComputeHash(System.Text.Encoding.UTF8.GetBytes(password));
            }
        }

        public async Task<bool> UserExists(string username)
        {
            if (await _context.Users.AnyAsync(x => x.UserName == username))
                return true;
            return false;
        }
    }
}
