import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class ResumeService {

  constructor(private http: HttpClient) { }

  getResumeDetails() {
    const apiURL = 'https://registry.jsonresume.org/json/resume.json';
    return this.http.get(apiURL);
  }

}
