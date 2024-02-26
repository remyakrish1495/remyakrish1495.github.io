import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {

  about1: any
  about2: any


  constructor() { }

  ngOnInit() {
    this.about1 = `WEB DEVELOPER`
    // this.about2 = [
    //   { point: 'Working as full stack developer.' },
    //   { point: 'Responsible for handling frond-end and back-end,database management' },
    //   { point: 'Developed and maintained dynamic web applications with a focus on scalability, usability, and security.' },
    //   { point: 'Collaborated closely with cross-functional teams, including designers and product managers, to translate design mockups into functional web applications.' },
    //   { point: 'Conducted thorough code reviews and implemented best practices to ensure code quality, maintainability, and performance optimization.' },
    //   { point: 'Technologies :- Angular, React, HTML, CSS, .NET Core, MS SQL' }]
    this.about2 = `As a full stack developer I'm responsible for handling frond-end and back-end,database management. 
    In my web development carrer i have developed and maintained dynamic web applications with a focus on scalability, usability, and security.
    Collaborated closely with cross-functional teams, including designers and product managers, to translate design mockups into functional web applications.
    Conducted thorough code reviews and implemented best practices to ensure code quality, maintainability, and performance optimization.
    Technologies used are Angular, React, HTML, CSS, .NET Core, MS SQL. `
  }



}
