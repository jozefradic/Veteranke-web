using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;

namespace Veteran.Repository.DTOs
{
    public class UserForRegistrationDto
    {
        [Required]
        public string Username { get; set; }

        [Required]
        [StringLength(8,MinimumLength =4,ErrorMessage ="Password must be between 4 and 8 characters")]
        public string Password { get; set; }
        [Required]
        public string FirstName { get; set; }
        [Required]
        public string LastName { get; set; }

        [Required]
        public string City { get; set; }
        [Required]
        public string Country { get; set; }

        public DateTime Created { get; set; }
        public DateTime LastActive { get; set; }
        [Required]
        public string Email { get; set; }
        [Required]
        public int Phone { get; set; }

        public UserForRegistrationDto()
        {
            Created = DateTime.Now;
            LastActive = DateTime.Now;
        }
    }
}
