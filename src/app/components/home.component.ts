import { Component, AfterViewInit , ElementRef,Renderer2} from '@angular/core';

@Component({
  selector: 'na-home',
  templateUrl: '../templates/home.html',
  styleUrls: ['../templates/scss/home.scss']
})
export class HomeComponent {

  numCols = 5;
  tiles = [
    { text: 'Projetos Hidráulicos', src: './assets/imgs/photo_01.jpg', route: '/hidraulico' },
    { text: 'Projetos Arquitetonicos', src: './assets/imgs/photo_01.jpg', route: '/arquitetonico' },
    { text: 'Projetos Elétricos', src: './assets/imgs/photo_01.jpg', route: '/eletrico' },
    { text: 'Projetos Estruturais', src: './assets/imgs/photo_01.jpg', route: '/estrutural' },
    { text: 'Serviços Gerais', src: './assets/imgs/photo_01.jpg', route: '/servicos-gerais' }
  ];
}