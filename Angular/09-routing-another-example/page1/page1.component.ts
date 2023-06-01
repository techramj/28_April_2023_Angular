import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-page1',
  templateUrl: './page1.component.html',
  styleUrls: ['./page1.component.css']
})
export class Page1Component implements OnInit,OnDestroy {

  message:string ="Good morning";

  constructor() { }

  ngOnInit(): void {
    console.log('Page1Component nginit called');
    this.message = "Good evening";
  }


  changeMessage(){
    this.message = "Bye";
  }

  ngOnDestroy(): void {
    console.log("Page1Component destroyed!!!");
  }

}
