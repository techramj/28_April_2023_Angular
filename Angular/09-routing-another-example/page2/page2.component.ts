import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-page2',
  templateUrl: './page2.component.html',
  styleUrls: ['./page2.component.css']
})
export class Page2Component implements OnInit, OnDestroy {

  constructor() { }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    console.log("Page2Component destroyed!!!");
  }

}
