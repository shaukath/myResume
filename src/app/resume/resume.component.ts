import { Component, OnInit } from '@angular/core';
import { ResumeService } from './resume.service';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css']
})
export class ResumeComponent implements OnInit {

resume: any;

  constructor(private resumeService: ResumeService) { }

  ngOnInit() {
    this.getResume();
  }

  getResume() {
    this.resumeService.getResumeDetails().subscribe(data => {
      this.resume = data;
      console.log(data);
      console.log(this.resume.basics.name);
    });
  }

}
