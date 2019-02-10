using System;
using System.Collections.Generic;
using System.Text;

namespace Veteran.Repository.DTOs
{
    public class UserListDto
    {
        public int Id { get; set; }
        public string UserName { get; set; }        
        public int Age { get; set; }
        public DateTime Created { get; set; }
        public DateTime LastActive { get; set; }
        public string PhotoUrl { get; set; }
    }
}
