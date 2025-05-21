import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common'; // ✅ Needed for *ngFor
import { JobService } from '../../services/job.service';
import { Job } from '../../models/job.model';

@Component({
  selector: 'app-jobs',
  standalone: true,
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.css'],
  imports: [CommonModule] // ✅ Add this here
})
export class JobsComponent implements OnInit {
  jobs: Job[] = [];
  private jobService = inject(JobService);

  ngOnInit(): void {
    this.jobService.getJobs().subscribe({
      next: (data: Job[]) => this.jobs = data,
      error: (_err: any) => alert('Failed to load jobs')
    });
  }
}
