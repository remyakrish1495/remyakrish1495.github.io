import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  about1: any
  maxStars: number = 5
  stars: number[] = [];

  constructor() { }

  ngOnInit() {
    this.stars = Array(this.maxStars).fill(0).map((_, i) => i + 1);
    this.about1 = `React, Angular, HTML, CSS, .NET Core, SQL Server`
  }

}
