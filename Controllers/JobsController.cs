using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Authorization;
using System.Security.Claims;
using TrackApply.Data;
using TrackApply.Models;
using TrackApply.DTOs;

namespace TrackApply.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    [Authorize]
    public class JobsController : ControllerBase
    {
        private readonly AppDbContext _context;

        public JobsController(AppDbContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<ActionResult<List<JobApplication>>> Get()
        {
            var userId = int.Parse(User.FindFirst(ClaimTypes.NameIdentifier).Value);
            return await _context.JobApplications.Where(j => j.UserId == userId).ToListAsync();
        }

        [HttpPost]
        public async Task<ActionResult<JobApplication>> Create(JobApplicationDto dto)
        {
            var userId = int.Parse(User.FindFirst(ClaimTypes.NameIdentifier).Value);

            var job = new JobApplication
            {
                Title = dto.Title,
                Company = dto.Company,
                Link = dto.Link,
                Status = dto.Status ?? "Applied",
                Notes = dto.Notes,
                UserId = userId
            };

            _context.JobApplications.Add(job);
            await _context.SaveChangesAsync();
            return job;
        }
    }
}
