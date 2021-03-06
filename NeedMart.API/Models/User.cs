using System;
using System.Collections.Generic;

namespace NeedMart.API.Models
{
    public class User
    {
        public int Id { get; set; }
        public string UserName { get; set; }
        public string CompanyName { get; set; }
        public string Email { get; set; }
        public string ContactNumber { get; set; }
        public byte[] PasswordHash { get; set; }
        public byte[] PasswordSalt { get; set; }
        public DateTime CreatedDate { get; set; }
        public ICollection<Machine> Machines { get; set; }
    }
}