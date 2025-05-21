// ✅ Services: job.service.ts
// src/app/services/job.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Job } from '../models/job.model';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class JobService {
  baseUrl = 'http://localhost:5062/api/jobs';

  constructor(private http: HttpClient) {}

  getJobs(): Observable<Job[]> {
    return this.http.get<Job[]>(this.baseUrl);
  }

  createJob(job: Job) {
    return this.http.post(this.baseUrl, job);
  }
}