using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Text;
using Veteran.Repository.Models;
using Veteran.Repository.Models.UserModels;

namespace Veteran.Repository.Data
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions<DataContext> options) 
            : base(options){}

        public DbSet<Values> Values { get; set; }
        public DbSet<User> Users { get; set; }
        public DbSet<Photo> Photos { get; set; }

        public DbSet<Advertisement> Advertisements { get; set; }
        public DbSet<Album> Albums { get; set; }
        public DbSet<Article> Articles { get; set; }
    }
}
