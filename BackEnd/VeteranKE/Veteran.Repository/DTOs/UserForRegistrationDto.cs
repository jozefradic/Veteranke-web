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
    }
}
