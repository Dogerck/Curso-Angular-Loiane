import { Component, OnInit } from '@angular/core';
import { CursosService } from '../cursos/cursos.service';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.scss']
})
export class ListaComponent implements OnInit {

  nomePortal: string;

  cursos: string[] = ['Java', 'Ext JS', 'Angular'];

  constructor(private cursosService: CursosService) { 
    this.nomePortal = 'http://loiane.training';

    var servico = new CursosService();
    this.cursos = this.cursosService.getCursos();
  }

  

  ngOnInit(): void {
  }

}
