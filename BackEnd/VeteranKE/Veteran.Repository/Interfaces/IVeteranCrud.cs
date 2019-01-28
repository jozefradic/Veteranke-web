using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using Veteran.Repository.Models.UserModels;

namespace Veteran.Repository.Interfaces
{
    public interface IVeteranCrud
    {
        // generic method, prijme typ"T"(add type of user/ photo) and enitiy as parameter,
        // where T is class
        void Add<T>(T entity) where T : class;
        void Delete<T>(T entity) where T : class;

        Task<bool> SaveAll();
        Task<IEnumerable<User>> GetUsers();
        Task<User> GetUser(int id);

        Task<Photo> GetPhoto(int id);
    }
}
