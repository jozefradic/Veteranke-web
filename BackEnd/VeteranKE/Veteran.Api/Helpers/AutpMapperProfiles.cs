using AutoMapper;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Veteran.Repository.DTOs;
using Veteran.Repository.Models;
using Veteran.Repository.Models.UserModels;

namespace Veteran.Api.Helpers
{
    public class AutpMapperProfiles : Profile
    {
        public AutpMapperProfiles()
        {
            CreateMap<User, UserListDto>()
                .ForMember(dest => dest.PhotoUrl, opt =>
                {
                    opt.MapFrom(src => src.Photos.FirstOrDefault().Url);
                });
                
            CreateMap<User, UserForDetailedDto>()
                .ForMember(dest => dest.PhotoUrl, opt =>
                {
                    opt.MapFrom(src => src.Photos.FirstOrDefault().Url);
                });
            CreateMap<UserForRegistrationDto, User>();

            CreateMap<Photo, PhotosForDetailedDto>();
            CreateMap<UserForUpdateDto, User>();
            CreateMap<Photo, PhotoForReturnDto>();
            CreateMap<PhotoForCreationDto, Photo>();

            CreateMap<Advertisement, AdvertisementForDetailDto>();
            CreateMap<AdvertisementForCreationDto, Advertisement>();
            CreateMap<AdvertisementForUpdateDto, Advertisement>();

            CreateMap<CategoryForUpdateDto, Category>();
        }
    }
}
