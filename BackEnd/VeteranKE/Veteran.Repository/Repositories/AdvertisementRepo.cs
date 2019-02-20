using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using Veteran.Repository.Data;
using Veteran.Repository.DTOs;
using Veteran.Repository.Interfaces;
using Veteran.Repository.Models;
using System.Linq;

namespace Veteran.Repository.Repositories
{
    public class AdvertisementRepo : IAdvertisement
    {
        private readonly DataContext _context;

        public AdvertisementRepo(DataContext context)
        {
            _context = context;
        }

        public void Add<T>(T entity) where T : class
        {
            _context.Add(entity);
        }

        public void Delete<T>(T entity) where T : class
        {
            _context.Remove(entity);
        }

        public async Task<Advertisement> CreateNew(Advertisement advertisement)
        {
            await _context.Advertisements.AddAsync(advertisement);
            await _context.SaveChangesAsync();

            return advertisement;
        }


        public async Task<Advertisement> GetAdvertisement(int id)
        {
            var advertisement = await _context.Advertisements
                .Include(u => u.User)
                .FirstOrDefaultAsync(adv => adv.Id == id);

            //(from user in _context.Users
            // orderby user.UserName
            // select new
            // {
            //     Id = user.Id,
            //     UserName = user.UserName,
            //     Roles = (from userRole in user.UserRoles
            //              join role in _context.Roles
            //              on userRole.RoleId
            //              equals role.Id
            //              select role.Name).ToList()
            // }).ToListAsync();

            //var advertisement = await (from adv in _context.Advertisements
            //                           join usr in _context.Users on adv.UserId equals usr.Id
            //                           where adv.Id == id
            //                           select  Advertisement);
            return advertisement;
        }

        public async Task<IEnumerable<Advertisement>> GetAdvertisements()
        {
            var advertisements = await _context.Advertisements
                .Include(u => u.User)
                .ToListAsync();

            //var advertisement = await (from adv in _context.Advertisements
            //                           join usr in _context.Users on adv.UserId equals usr.Id
            //                           select new
            //                           {
            //                               adv
            //                           }).ToListAsync();

            return advertisements;
        }

        public async Task<bool> SaveAll()
        {
            return await _context.SaveChangesAsync() > 0;
        }
    }
}
