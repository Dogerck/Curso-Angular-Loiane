import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef, asNativeElements } from '@angular/core';

@Component({
  selector: 'contador',
  templateUrl: './output-property.component.html',
  styleUrls: ['./output-property.component.scss']
})
export class OutputPropertyComponent implements OnInit {

  @Input() valor: number = 0;

  @Output() mudouValor =  new EventEmitter();

  @ViewChild('campoInput',{static:false}) campoValorInput!: ElementRef;

  incrementa (): void {
    this.campoValorInput.nativeElement.value++;
    this.mudouValor.emit( {novoValor: this.valor} )
  }
  decrementa () {
    this.campoValorInput.nativeElement.value--;
    this.mudouValor.emit( {novoValor: this.valor} )
  }
  

  constructor() { }

  ngOnInit(): void {
  }

}
