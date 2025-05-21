namespace TrackApply.Models
{
    public class JobApplication
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public string Company { get; set; }
        public string Link { get; set; }
        public string Status { get; set; } = "Applied";
        public string Notes { get; set; }
        public DateTime AppliedOn { get; set; } = DateTime.UtcNow;
        public int UserId { get; set; }
        public User User { get; set; }
    }
}
