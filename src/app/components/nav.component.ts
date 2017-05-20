import { Component, AfterViewInit } from '@angular/core';
import { RouterModule, Router,Routes } from '@angular/router';
@Component({
  selector: 'na-nav',
  templateUrl: '../templates/nav.html',
  styleUrls: ['../templates/css/nav.css']
})

export class NavComponent {
   routeLinks:any[];
  activeLinkIndex = 0;
  constructor(private router: Router) {
    this.routeLinks = [
    {label: 'Home', link: ''},
    {label: 'Contatos', link: 'contatos'}];

  }
}