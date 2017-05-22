import { Component, AfterViewInit } from '@angular/core';

import { HidraulicoComponent }  from '../components/hidraulico.component';
import { ArquitetonicoComponent }  from '../components/arquitetonico.component';
import { EstruturalComponent }  from '../components/estrutural.component';
import { EletricoComponent }  from '../components/eletrico.component';
import { ServicosGeraisComponent }  from '../components/servicos-gerais.component';


@Component({
  selector: 'na-home',
  templateUrl: '../templates/home.html',  
  styleUrls: ['../templates/scss/home.scss']
})
export class HomeComponent {
  numCols = 5;
  tiles = [
    {text: 'Projetos Hidráulicos', cols: 3, rows: 4, color: 'lightgrey',src : './assets/photo_01.jpg'},
    {text: 'Projetos Hidráulicos', cols: 1, rows: 2, color: 'lightgreen',src : './assets/photo_01.jpg'},
    {text: 'Projetos Hidráulicos', cols: 1, rows: 1, color: 'lightpink',src : './assets/photo_01.jpg'},
    {text: 'Projetos Hidráulicos', cols: 2, rows: 1, color: '#DDBDF1',src : './assets/photo_01.jpg'},    
    {text: 'Projetos Hidráulicos', cols: 2, rows: 1, color: '#DDBDF1',src : './assets/photo_01.jpg'}
  ];
}