import { Component, AfterViewInit } from '@angular/core';

@Component({
  selector: 'na-servicos-gerais',
  templateUrl: '../../templates/tabs.html'
})
export class ServicosGeraisComponent {
  tiles = [
    {text: 'One', cols: 3, rows: 4, color: 'lightgrey'},
    {text: 'Two', cols: 1, rows: 2, color: 'lightgreen'},
    {text: 'Three', cols: 1, rows: 1, color: 'lightpink'},
    {text: 'Four', cols: 2, rows: 1, color: '#DDBDF1'},
  ];
}