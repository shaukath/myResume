import { Component, OnInit } from '@angular/core';
import { ResumeService } from './resume.service';
import { Resume, Profile, Work, Skill, Education, Reference } from './resume';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css']
})
export class ResumeComponent implements OnInit {

resume = new Resume();
resumeData: any;

  constructor(private resumeService: ResumeService) { }

  ngOnInit() {
    this.getResume();
  }

  getResume() {
    this.resumeService.getResumeDetails().subscribe(data => {
      this.resumeData = data;
      let profile: Profile;
      let work: Work;
      let skill: Skill;
      let education: Education;
      let reference: Reference;
      this.resume.basics = this.resumeData.basics;
      // console.log(data);
      console.log(this.resumeData.basics.profiles);
      if (this.resumeData.basics.profiles.length > 0) {
        this.resumeData.basics.profiles.forEach(element => {
          profile = new Profile();
          profile.network = element.network;
          profile.url = element.url;
          profile.username = element.username;
          this.resume.profiles.push(profile);
          console.log(this.resume.profiles[0].username);
        });
      }

      if (this.resumeData.work.length > 0) {
        this.resumeData.work.forEach(element => {
          work = new Work();
          work.company = element.company;
          work.position = element.position;
          work.website = element.website;
          work.startDate = element.startDate;
          work.endDate = element.endDate;
          work.summary = element.summary;
          work.highlights = element.highlights;
          this.resume.works.push(work);
          console.log(element.highlights);
          console.log(this.resume.works[0].highlights[1]);
        });
      }

      if (this.resumeData.skills.length > 0) {
        this.resumeData.skills.forEach(element => {
          skill = new Skill();
          skill.name = element.name;
          skill.keywords = element.keywords;
          this.resume.skills.push(skill);
          console.log(element.keywords);
          console.log(this.resume.skills[0].name);
        });
      }

      if (this.resumeData.education.length > 0) {
        this.resumeData.education.forEach(element => {
          education = new Education();
          education.institution = element.institution;
          education.area = element.area;
          education.studyType = element.studyType;
          education.startDate = element.startDate;
          education.endDate = element.endDate;
          this.resume.education.push(education);
          console.log(element.studyType);
          console.log(this.resume.education[0].studyType);
        });
      }

      if (this.resumeData.references.length > 0) {
        this.resumeData.references.forEach(element => {
          reference = new Reference();
          reference.name = element.name;
          reference.reference = element.reference;
          this.resume.references.push(reference);
          console.log(element.reference);
          console.log(this.resume.references[0].reference);
        });
      }
    });
  }

}
