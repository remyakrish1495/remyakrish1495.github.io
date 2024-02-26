import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-references',
  templateUrl: './references.component.html',
  styleUrls: ['./references.component.css']
})
export class ReferencesComponent implements OnInit {

  about1: any
  about2: Array<any> = [];
  about3: any;
  about4: Array<any> = [];


  constructor() { }

  ngOnInit() {
    this.about1 = `Linto C Antony - Deputy Manager, GramPro Business Services`
    this.about3 = 'Soumya Ramachandran - Deputy Manager, GramPro Business Services '
  }

}
