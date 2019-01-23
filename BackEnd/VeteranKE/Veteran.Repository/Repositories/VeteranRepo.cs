using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using Veteran.Repository.Data;
using Veteran.Repository.Interfaces;
using Veteran.Repository.Models.UserModels;

namespace Veteran.Repository.Repositories
{
    public class VeteranRepo : IVeteranCrud
    {
        private readonly DataContext _context;

        public VeteranRepo(DataContext context)
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

        public async Task<User> GetUser(int id)
        {
            var user = await _context.Users.Include(p => p.Photos)
                .FirstOrDefaultAsync(u => u.Id == id);

            return user;
        }

        public async Task<IEnumerable<User>> GetUsers()
        {
            var user = await _context.Users.Include(p => p.Photos).ToListAsync();

            return user;
        }

        public async Task<bool> SaveAll()
        {
            return await _context.SaveChangesAsync() > 0;
        }
    }
}
