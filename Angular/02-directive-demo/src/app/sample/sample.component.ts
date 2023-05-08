import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sample',
  template: '<p>Sample componenet works!</p>',
  styleUrls: ['./sample.component.css']
})
export class SampleComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
