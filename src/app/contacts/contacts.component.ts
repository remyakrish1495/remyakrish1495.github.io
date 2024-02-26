import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {

  about1: any
  about2: any
  about3: any;
  about4: Array<any> = [];


  constructor() { }

  ngOnInit() {
    this.about1 = `Phone Number :- +91 8281937321`
    this.about2 = 'Professional Email Address :- remyakrishnaraj1519@gmail.com'
    this.about3 = 'Linkedin :- linkedin.com/in/remyaa'
  }

}
