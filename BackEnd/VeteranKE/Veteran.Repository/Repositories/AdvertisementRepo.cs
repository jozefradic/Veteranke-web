using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using Veteran.Repository.Data;
using Veteran.Repository.Interfaces;
using Veteran.Repository.Models;

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
                .FirstOrDefaultAsync(adv => adv.Id == id);

            return advertisement;
        }

        public async Task<IEnumerable<Advertisement>> GetAdvertisements()
        {
            var advertisements = await _context.Advertisements.ToListAsync();

            return advertisements;
        }
    }
}
