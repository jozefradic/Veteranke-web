using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Text;
using Veteran.Repository.Models;

namespace Veteran.Repository.Data
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions<DataContext> options) 
            : base(options){}

        public DbSet<Values> Values { get; set; }
    }
}
