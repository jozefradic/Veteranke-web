using System;
using System.Collections.Generic;
using System.Text;
using Veteran.Repository.Models;
using Veteran.Repository.Models.UserModels;

namespace Veteran.Repository.DTOs
{
    public class UserForDetailedDto
    {
        public int Id { get; set; }
        public string Name { get; set; }
        
        public int Age { get; set; }
        public DateTime Created { get; set; }
        public DateTime LastActive { get; set; }
        public string City { get; set; }
        public string Country { get; set; }

        public string PhotoUrl { get; set; }
        public ICollection<PhotosForDetailedDto> Photos { get; set; }
        public ICollection<AdvertisementForDetailDto> Advertisements { get; set; }
    }
}
