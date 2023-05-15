import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-event-another-example',
  templateUrl: './event-another-example.component.html',
  styleUrls: ['./event-another-example.component.css']
})
export class EventAnotherExampleComponent {

   title:string = 'Event Bindiing with output decorator example';

   @Output() buttonEvent:EventEmitter<string> = new EventEmitter<string>();

   onButtonClick(){
     this.buttonEvent.emit(this.title);
   }

}
