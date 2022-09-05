import { Component, OnInit } from '@angular/core';
import { CursosService } from './cursos.service';
import {FormControl} from '@angular/forms';
import {MatTooltipModule, TooltipPosition} from '@angular/material/tooltip';


@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.scss']
})
export class CursosComponent implements OnInit {

  nomePortal: string;

  constructor() { 

    this.nomePortal = 'http://loiane.training';

    var servico = new CursosService();
  }

  ngOnInit(): void {
  }

}
