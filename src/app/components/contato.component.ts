import { Component } from '@angular/core';

@Component({
  selector: 'na-contato',
  templateUrl: '../templates/contato.html',
  styleUrls: ['../templates/scss/contato.scss']
})
export class ContatoComponent {
  tiles = [
    {text: 'One', cols: 2, rows: 2, color: 'lightgrey'},
    {text: 'Two', cols: 2, rows: 2, color: 'lightgreen'},
    {text: 'Three', cols: 2, rows: 2, color: 'lightpink'},
    {text: 'Four', cols: 2, rows: 2, color: '#DDBDF1'},
  ];
}