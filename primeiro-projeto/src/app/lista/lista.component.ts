import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.scss']
})
export class ListaComponent implements OnInit {

  nomePortal: string;

  cursos: string[] = ['Java', 'Ext JS', 'Angular'];

  constructor() { 
    this.nomePortal = 'http://loiane.training';
  }

  ngOnInit(): void {
  }

}
