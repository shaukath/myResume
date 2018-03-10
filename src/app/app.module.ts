import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import 'hammerjs';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ResumeComponent } from './resume/resume.component';

import {MatCardModule} from '@angular/material/card';
import { ResumeService } from './resume/resume.service';



@NgModule({
  declarations: [
    AppComponent,
    ResumeComponent
  ],
  imports: [
    BrowserModule, MatCardModule, HttpClientModule
  ],
  providers: [ResumeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
