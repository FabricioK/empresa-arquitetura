import { Component, AfterViewInit } from '@angular/core';

@Component({
  selector: 'na-footer',
  templateUrl: '../templates/footer.html',
  styleUrls: ['../templates/scss/footer.scss']
})
export class FooterComponent {
  date: string;
  constructor() {
        this.date = new Date().getFullYear().toString();
  }

}