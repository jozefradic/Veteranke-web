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

        

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);
            //One-to-Many relationships
            modelBuilder.Entity<User>()
                .HasMany(p => p.Photos)
                .WithOne(a => a.User)
                .OnDelete(DeleteBehavior.Cascade)
                .HasForeignKey(fk => fk.UserId);

            modelBuilder.Entity<Advertisement>()
                .HasMany(p => p.Photos)
                .WithOne(a => a.Advertisement)
                .OnDelete(DeleteBehavior.Cascade)
                .HasForeignKey(fk => fk.AdvertisementId);

            modelBuilder.Entity<Album>()
                .HasMany(p => p.Photos)
                .WithOne(a => a.Album)
                .OnDelete(DeleteBehavior.Cascade)
                .HasForeignKey(fk => fk.AlbumId);

            modelBuilder.Entity<Article>()
                .HasMany(p => p.Photos)
                .WithOne(a => a.Article)
                .OnDelete(DeleteBehavior.Cascade)
                .HasForeignKey(fk => fk.AlbumId);


        }

        public DbSet<Values> Values { get; set; }
        public DbSet<User> Users { get; set; }
        public DbSet<Photo> Photos { get; set; }

        public DbSet<Advertisement> Advertisements { get; set; }
        public DbSet<Album> Albums { get; set; }
        public DbSet<Article> Articles { get; set; }
    }
}
