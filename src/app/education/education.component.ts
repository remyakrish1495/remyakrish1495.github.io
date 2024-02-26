import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {

  about1: any
  about2: Array<any> = [];
  about3: any;
  about4: Array<any> = [];


  constructor() { }

  ngOnInit() {
    this.about1 = `Master's Degree - NSS College of Engineering, Palakkad -Aug 2018 - Aug 2020`
    this.about2 = [
      { point: 'Post Graduated in communication Engineering' },
      { point: 'Attained first class with 8.27 CGPA' },]
    this.about3 = `Bachelor's Degree - Thejus Engineering College - Jun 2013 - Jun 2017`
    this.about4 = [
      { point: 'Graduated in Electronics andCommunication Engineering' },
      { point: ' Attained first class with 7.78 CGPA.' },
    ]
  }

}
