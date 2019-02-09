﻿using System;
using System.Collections.Generic;
using System.Text;
using Veteran.Repository.Models.UserModels;

namespace Veteran.Repository.DTOs
{
    public class AdvertisementForCreationDto
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public DateTime CreatedDate { get; set; }

        public int? UserId { get; set; }

        public AdvertisementForCreationDto()
        {
            CreatedDate = DateTime.Now;
        }

    }
}