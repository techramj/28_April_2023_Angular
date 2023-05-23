import { Component, OnInit, SimpleChanges, OnChanges, Input } from '@angular/core';

@Component({
  selector: 'app-page3',
  templateUrl: './page3.component.html',
  styleUrls: ['./page3.component.css']
})
export class Page3Component implements OnInit, OnChanges {

  @Input() msg:string = 'Bye';

  constructor() { 
    this.msg = 'ABC';
    console.log('constructor called!!!!');
  }

  ngOnInit(): void {
     console.log('init called!!!')
  }

  ngOnChanges(changes:any){
    console.log("ngOnChangesCalled!!!!", changes);
   
  }

 

}
