using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using NeedMart.API.Models;

namespace NeedMart.API.Data
{
    public class EntityRepository : IEntityRepository
    {
        private readonly DataContext _context;
        public EntityRepository(DataContext context)
        {
            _context = context;

        }
        public void Add<T>(T entity) where T : class
        {
            _context.Add(entity);
            _context.SaveChanges();
        }

        public void Delete<T>(T entity) where T : class
        {
            _context.Remove(entity);
            _context.SaveChanges();
        }

        public void Edit<T>(T entity) where T : class
        {
            _context.Set<T>().Update(entity);
            _context.SaveChanges();
        }
        public async Task<Machine> GetMachine(int Id)
        {
            var machine = await _context.Machines.Include(x => x.JobCards).FirstOrDefaultAsync(m => m.Id == Id);
            return machine;
        }

        public async Task<IEnumerable<Machine>> GetMachines(int loggedInUserId)
        {
            var machines = await _context.Machines.Where(x => x.UserId == loggedInUserId).Include(x => x.JobCards).ToListAsync();
            return machines;
        }

        public async Task<bool> SaveAll()
        {
            return await _context.SaveChangesAsync() > 0;
        }

        public async Task<IEnumerable<Machine>> GetAllMachines()
        {
            var allMachines = await _context.Machines.Include(x => x.JobCards).ToListAsync();
            return allMachines;
        }

        public async Task<IEnumerable<User>> GetAllUsers()
        {
            var allUsers = await _context.Users.ToListAsync();
            return allUsers;
        }

        public async Task<JobCard> GetJobCard(int Id)
        {
            var jobCard = await _context.JobCards.FirstOrDefaultAsync(m => m.Id == Id);
            return jobCard;
        }
    }
}