using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Text;
using Veteran.Repository.Models;
using Veteran.Repository.Models.UserModels;

namespace Veteran.Repository.Data
{
    public class DataContext : IdentityDbContext<User, Role, int, IdentityUserClaim<int>, UserRole, 
        IdentityUserLogin<int>, IdentityRoleClaim<int>, IdentityUserToken<int>>
    {
        public DataContext(DbContextOptions<DataContext> options) 
            : base(options){}

        

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);
            // many to many
            modelBuilder.Entity<UserRole>(userRole =>
            {
                userRole.HasKey(ur => new { ur.UserId, ur.RoleId });

                userRole.HasOne(ur => ur.Role)
                    .WithMany(r => r.UserRoles)
                    .HasForeignKey(ur => ur.RoleId)
                    .IsRequired();

                userRole.HasOne(ur => ur.User)
                    .WithMany(r => r.UserRoles)
                    .HasForeignKey(ur => ur.UserId)
                    .IsRequired();
            });

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

            //modelBuilder.Entity<Category>()
            //    .HasMany(a => a.Advertisements)
            //    .WithOne(a => a.Category)
            //    .OnDelete(DeleteBehavior.Cascade)
            //    .HasForeignKey(fk => fk.CategoryId);

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

            modelBuilder.Entity<User>()
                .HasMany(adv => adv.Advertisements)
                .WithOne(a => a.User)
                .OnDelete(DeleteBehavior.Cascade)
                .HasForeignKey(fk => fk.UserId);

            modelBuilder.Entity<User>()
                .HasMany(adv => adv.Articles)
                .WithOne(a => a.User)
                .OnDelete(DeleteBehavior.Cascade)
                .HasForeignKey(fk => fk.UserId);

        }

        public DbSet<Values> Values { get; set; }
        public DbSet<Photo> Photos { get; set; }

        public DbSet<Advertisement> Advertisements { get; set; }
        public DbSet<Album> Albums { get; set; }
        public DbSet<Article> Articles { get; set; }

        public DbSet<Category> Categories { get; set; }
    }
}
