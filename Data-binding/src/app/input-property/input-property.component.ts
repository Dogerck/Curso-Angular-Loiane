import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-curso',
  templateUrl: './input-property.component.html',
  styleUrls: ['./input-property.component.scss'],
  // inputs: ['nomeCurso:nme']
})
export class InputPropertyComponent implements OnInit {


  @Input('nome')nomeCurso: string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
