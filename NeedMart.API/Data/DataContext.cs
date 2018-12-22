using NeedMart.API.Models;
using Microsoft.EntityFrameworkCore;

namespace NeedMart.API.Data
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions<DataContext> options) : base(options) { }

        public DbSet<User> Users { get; set; }
        public DbSet<Machine> Machines { get; set; }
        public DbSet<JobCard> JobCards { get; set; }
    }
}