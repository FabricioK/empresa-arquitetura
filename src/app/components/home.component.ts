import { Component, AfterViewInit , ElementRef,Renderer2} from '@angular/core';

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