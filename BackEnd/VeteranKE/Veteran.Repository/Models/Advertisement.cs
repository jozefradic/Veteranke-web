using System;
using System.Collections.Generic;
using System.Text;
using Veteran.Repository.Models.UserModels;

namespace Veteran.Repository.Models
{
    public class Advertisement
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public DateTime CreatedDate { get; set; }

        public User User { get; set; }
        public int? UserId { get; set; }

        public ICollection<Photo> Photos { get; set; }

    }
}
