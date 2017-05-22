import { Component, AfterViewInit , ElementRef,Renderer2} from '@angular/core';

import { HidraulicoComponent } from '../components/hidraulico.component';
import { ArquitetonicoComponent } from '../components/arquitetonico.component';
import { EstruturalComponent } from '../components/estrutural.component';
import { EletricoComponent } from '../components/eletrico.component';
import { ServicosGeraisComponent } from '../components/servicos-gerais.component';


@Component({
  selector: 'na-home',
  templateUrl: '../templates/home.html',
  styleUrls: ['../templates/scss/home.scss']
})
export class HomeComponent {

  numCols = 5;
  tiles = [
    { text: 'Projetos Hidráulicos', src: './assets/photo_01.jpg', route: '/hidraulico' },
    { text: 'Projetos Arquitetonicos', src: './assets/photo_01.jpg', route: '/arquitetonico' },
    { text: 'Projetos Elétricos', src: './assets/photo_01.jpg', route: '/eletrico' },
    { text: 'Projetos Estruturais', src: './assets/photo_01.jpg', route: '/estrutural' },
    { text: 'Serviços Gerais', src: './assets/photo_01.jpg', route: '/servicos-gerais' }
  ];
}