import { 
  Component, 
  OnInit, 
  OnChanges, 
  DoCheck, 
  AfterContentInit, 
  AfterContentChecked, 
  AfterViewInit, 
  AfterViewChecked, 
  OnDestroy, 
  Input} from '@angular/core';

@Component({
  selector: 'app-ciclo',
  templateUrl: './ciclo.component.html',
  styleUrls: ['./ciclo.component.scss']
})
export class CicloComponent implements OnInit {

  @Input() valorInicial: number = 10;

  constructor() {
    this.log('constructor');
  }
   
   ngOnChanges() {
    this.log('ngOnChanges');
  }

  ngOnInit() {
    this.log('ngOnInit');
  }
  
  DoCheck() {
    this.log('DoCheck');
  }

  AfterContentInit(){
    this.log('AfterContentInit');
  }

  AfterContentChecked(){
    this.log('AfterContentChecked');
  }

  AfterViewInit(){
    this.log('AfterViewInit');
  }

  AfterViewChecked(){
    this.log('AfterViewChecked');
  }

  OnDestroy(){
    this.log('OnDestroy');
  }

  private log(hook: string) {
    console.log(hook);
    
  }

}
