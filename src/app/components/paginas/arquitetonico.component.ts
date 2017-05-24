import { Component, AfterViewInit } from '@angular/core';

@Component({
  selector: 'na-arquitetonico',
  templateUrl: '../../templates/paginas/arquitetonico.html'
})
export class ArquitetonicoComponent {
  tiles = [
    { text: 'One', cols: 3, rows: 4, color: 'lightgrey', directive: { height: 200, width: 200 } },
    { text: 'Two', cols: 1, rows: 2, color: 'lightgreen' },
    { text: 'Three', cols: 1, rows: 1, color: 'lightpink' },
    { text: 'Four', cols: 2, rows: 1, color: '#DDBDF1' },
  ];
}