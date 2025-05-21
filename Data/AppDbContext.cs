using Microsoft.EntityFrameworkCore;
using TrackApply.Models;

namespace TrackApply.Data
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) { }

        public DbSet<User> Users { get; set; }
        public DbSet<JobApplication> JobApplications { get; set; }
    }
}
