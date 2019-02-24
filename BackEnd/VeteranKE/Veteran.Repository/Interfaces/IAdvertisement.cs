using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using Veteran.Api.Helpers;
using Veteran.Repository.DTOs;
using Veteran.Repository.Models;

namespace Veteran.Repository.Interfaces
{
    public interface IAdvertisement
    {
        void Add<T>(T entity) where T : class;
        void Delete<T>(T entity) where T : class;
        Task<bool> SaveAll();

        Task<Advertisement> CreateNew(Advertisement advertisement);
        Task<PagedList<Advertisement>> GetAdvertisements(AdvParams advParams);
        Task<Advertisement> GetAdvertisement(int id);

        Task<IEnumerable<Category>> GetCategories();


    }
}
