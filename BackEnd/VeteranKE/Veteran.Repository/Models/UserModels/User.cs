using System;
using System.Collections.Generic;
using System.Text;

namespace Veteran.Repository.Models.UserModels
{
    public class User
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public byte[] PasswordHash { get; set; }
        public byte[] PasswordSalt { get; set; }
        public DateTime DateOfBirth { get; set; }
        public DateTime Created { get; set; }
        public DateTime LastActive { get; set; }
        public string City { get; set; }
        public string Country { get; set; }

        public ICollection<Photo> Photos { get; set; }

        public ICollection<Advertisement> Advertisements { get; set; }
        public ICollection<Article> Articles { get; set; }


    }
}
