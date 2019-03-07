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
using Veteran.Api.Helpers;

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
                .Include(c=>c.Category)
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

        public async Task<PagedList<Advertisement>> GetAdvertisements(AdvParams advParams)
        {
            var advertisements = _context.Advertisements
                .Include(u => u.User)
                .Include(c => c.Category).AsQueryable();

            if (!(string.IsNullOrEmpty(advParams.CategoryId.ToString())))
            {
                advertisements = advertisements.Where(adv => adv.CategoryId == advParams.CategoryId);
            }

            return await PagedList<Advertisement>.CreateAsync(advertisements, advParams.PageNumber, advParams.PageSize);
        }

        public async Task<bool> SaveAll()
        {
            return await _context.SaveChangesAsync() > 0;
        }

        public async Task<IEnumerable<Category>> GetCategories()
        {
            var categories = await _context.Categories.ToListAsync();

            return categories;
        }

        public async Task<Category> CreateNewCategory(Category category)
        {
            await _context.Categories.AddAsync(category);
            await _context.SaveChangesAsync();

            return category;
        }

        public async Task<Category> GetCategory(int id)
        {
            var category = await _context.Categories.FirstOrDefaultAsync(cat => cat.Id == id);

            return category;
        }

    }
}
