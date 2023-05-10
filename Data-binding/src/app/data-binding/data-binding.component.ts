import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.scss']
})
export class DataBindingComponent implements OnInit {

  url: string = 'http://loiane.com';
  urlImagem = 'http://lorempixel.com.br/100/50/?2';
  valorAtual: string = '';
  valorSalvo = '';
  isMouseOver: boolean = false;
  valorInicial = 15
  nomeDoCurso: string = 'Angular';
  nome: string = 'abc'

  pessoa: any = {
    nome: 'diego',
    idade: 24
  }

  getValor () {
    return 1;
  };

  botaoClicado() {
    alert('botão clicado')
  }
  onKeyUp(evento: KeyboardEvent) {
    this.valorAtual = (<HTMLInputElement>evento.target).value;
  }
  salvarValor(valor: any) {
    this.valorSalvo = valor;
  }

  OnMouseOverOut() {
    this.isMouseOver = !this.isMouseOver;
  }
  onMudouValor(evento: any) {  
    console.log(evento.novoValor)
  }
  

  constructor() { }

  ngOnInit(): void {
  }

}