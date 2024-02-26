import { Component, OnInit } from '@angular/core';
import PSPDFKit from 'pspdfkit';
import { Observable, Observer } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { switchMap, take, takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  showDoc: boolean = false;
  IsResume: boolean = false;
  title: string = 'ng2-pdf-viewer';
  src: string = 'assets/Resume.pdf';
  formCaption: string = 'Resume'
  profilePic = '/src/assets/images/REMYA.jpg'

  constructor(
    private httpClient: HttpClient,
  ) { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {

  }

  showResume(event: any) {
    this.showDoc = true;
    this.IsResume = true
  }

  closeDoc(status: any) {
    this.showDoc = false;

  }

  home() {
    this.IsResume = false
  }

  getResume(): Observable<any> {
    return this.httpClient.get(this.src, { observe: 'response', responseType: 'blob' });
  }

  download() {
    this.getResume().pipe(take(1)).subscribe((file: any) => {
      const link = document.createElement('a');
      link.href = window.URL.createObjectURL(file.body);
      link.download = "Remya-Resume.pdf";
      link.dispatchEvent(new MouseEvent('click'));
    });
  }

}
