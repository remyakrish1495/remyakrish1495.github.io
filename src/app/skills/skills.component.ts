import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  about1: any
  


  constructor() { }

  ngOnInit() {
    this.about1 = `React, Angular, HTML, CSS, .NET Core, SQL Server`
  }

}
