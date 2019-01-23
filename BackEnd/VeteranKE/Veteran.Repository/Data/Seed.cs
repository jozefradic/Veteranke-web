using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Text;
using Veteran.Repository.Models.UserModels;

namespace Veteran.Repository.Data
{
    public class Seed
    {
        private readonly DataContext _context;

        public Seed(DataContext context)
        {
            _context = context;
        }

        public void SeedUsers()
        {
            var userData = System.IO.File.ReadAllText("../Veteran.Repository/Data/UserSeedData.json");

            //serialize data from text to object

            var users = JsonConvert.DeserializeObject<List<User>>(userData);

            foreach (var user in users)
            {
                byte[] passwordHash, passwordSalt;
                CreatePassword("password", out passwordHash, out passwordSalt);

                user.PasswordHash = passwordHash;
                user.PasswordSalt = passwordSalt;

                user.Name = user.Name.ToLower();

                _context.Users.Add(user);
            }

            _context.SaveChanges();
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
            using (var hmac = new System.Security.Cryptography.HMACSHA512())
            {
                passwordSalt = hmac.Key;
                passwordHash = hmac.ComputeHash(System.Text.Encoding.UTF8.GetBytes(password));
            }
        }
    }
}
