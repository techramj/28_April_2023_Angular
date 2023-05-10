import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-sample',
  templateUrl: './sample.component.html',
  styleUrls: ['./sample.component.css']
})
export class SampleComponent {

  @Input() name:string = 'Sam';
  @Input() age:number = 23;



}
