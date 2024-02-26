import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  about1: any
  about2: any

  constructor() { }

  ngOnInit() {
    this.about1 = `A passionate and creative web developer dedicated to crafting engaging and user-friendly digital experiences.
     With a love for coding and a keen eye for design, I strive to bring ideas to life on the web.
    I specialize in both front-end and back-end development, ensuring a seamless and cohesive user experience from the first click to the
     final interaction. Proficient in a range of technologies, including HTML, CSS, TypeScript, React, Angular,.NET Core, MS SQL. 
     I stay up-to-date with the latest trends and technologies to deliver cutting-edge solutions.
     Ever since my journey began in the world of web development, I've had the privilege of working on diverse projects, 
     Each project is an opportunity for me to blend creativity with functionality, resulting in a digital presence that stands out.`
    // this.about2 = "Lover of innovation and everything related to generate new knowledge.Face problems with a smile and solve them as soon as possible. Very calculated about the time I spend and work I do."
    // resumeurl = "https://docs.google.com/document/d/1WODFuhIzQw2AXPsjt6f3rs-EDWhdhT8s89fOTrGRh70/edit?usp=sharing"
  }

}
