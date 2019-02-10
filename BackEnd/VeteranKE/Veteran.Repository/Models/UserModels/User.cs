using Microsoft.AspNetCore.Identity;
using System;
using System.Collections.Generic;
using System.Text;

namespace Veteran.Repository.Models.UserModels
{
    public class User : IdentityUser<int>
    {
        public DateTime DateOfBirth { get; set; }
        public DateTime Created { get; set; }
        public DateTime LastActive { get; set; }
        public string City { get; set; }
        public string Country { get; set; }

        public ICollection<Photo> Photos { get; set; }

        public ICollection<Advertisement> Advertisements { get; set; }
        public ICollection<Article> Articles { get; set; }

        public ICollection<UserRole> UserRoles { get; set; }


    }
}
