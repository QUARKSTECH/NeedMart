using System.Collections.Generic;
using AutoMapper;
using NeedMart.API.Dtos;
using NeedMart.API.Models;

namespace NeedMart.API.Helpers
{
    public class AutoMapperProfiles : Profile
    {
        public AutoMapperProfiles()
        {
            CreateMap<Machine, MachineDto>();
            CreateMap<MachineDto, Machine>();

            CreateMap<JobCard, JobCardDto>();
            CreateMap<JobCardDto, JobCard>();

            CreateMap<User, UserDto>();
            CreateMap<UserDto, User>();
        }
    }
}