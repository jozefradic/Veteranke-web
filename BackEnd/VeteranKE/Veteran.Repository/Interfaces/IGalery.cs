using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using Veteran.Repository.Models;

namespace Veteran.Repository.Interfaces
{
    public interface IGalery
    {
        Task<IEnumerable<Album>> GetAlbums();
    }
}
