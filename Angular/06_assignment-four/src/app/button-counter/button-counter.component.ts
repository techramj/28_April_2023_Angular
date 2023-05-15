import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button-counter',
  templateUrl: './button-counter.component.html',
  styleUrls: ['./button-counter.component.css']
})
export class ButtonCounterComponent  {

   @Input() buttonCounter:number = 0;


   updateButtonCOunt(){
    this.buttonCounter++;
   }

}
