using System;
using System.Collections.Generic;
using System.Text;
using Veteran.Repository.Models.UserModels;

namespace Veteran.Repository.DTOs
{
    public class AdvertisementForDetailDto
    {
        public int Id { get; set; }
        public string Name { get; set; }

        public ICollection<PhotosForDetailedDto> Photos { get; set; }
    }
}
