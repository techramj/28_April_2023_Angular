import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-event-example',
  templateUrl: './event-example.component.html',
  styleUrls: ['./event-example.component.css']
})
export class EventExampleComponent  {

  @Output() buttonEvent:EventEmitter<any> = new EventEmitter();


  onButtonClick(){
    console.log("onButtonClick method called!!!!");
    this.buttonEvent.emit();
  }

}
