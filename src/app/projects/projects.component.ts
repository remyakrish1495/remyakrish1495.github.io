import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  about1: any
  about2: Array<any> = [];
  about3: any;
  about4: Array<any> = [];


  constructor() { }

  ngOnInit() {
    this.about1 = `EWEB`
    this.about2 = [
      { point: 'Working as a frond-end developer.' },
      { point: 'Core application of ESAF bank that used for their branch communications' },
      { point: 'Handled different modules using React Technology' },]
    this.about3 = 'HRMS'
    this.about4 = [
      { point: 'Core project of the firm and the client is ESAF Bank and its different entities' },
      { point: 'Main aim of the project is managing the Recruitment and onboarding purposes of a company.' },
      { point: 'Created master pages of the application.;' },
      { point: 'Handled recruitment module for recruiting candidates  which includes the selection process.' },
      { point: 'Handled employee management module for enrolling and managing the employees' },
      { point: 'Handled the leave module for crediting and processing the different types of leaves.' },
      { point: 'Developed using Angular 12 for Frontend, .NET Core for Backend and Database MS SQL' }
    ]
  }

}
