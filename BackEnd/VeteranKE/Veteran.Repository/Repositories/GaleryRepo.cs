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
    public class GaleryRepo : IGalery
    {
        private readonly DataContext _context;

        public GaleryRepo(DataContext context)
        {
            _context = context;
        }

        public async Task<IEnumerable<Album>> GetAlbums()
        {
            var albums = await _context.Albums.Include(a => a.Photos).ToListAsync();
            return albums;
        }      
    }
}
