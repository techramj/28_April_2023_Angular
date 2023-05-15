import { Component, EventEmitter, Input , Output} from '@angular/core';

@Component({
  selector: 'app-button-counter',
  templateUrl: './button-counter.component.html',
  styleUrls: ['./button-counter.component.css']
})
export class ButtonCounterComponent  {

  @Input() buttonCount:number = 0;

  @Output() clickEvent:EventEmitter<any> = new EventEmitter();


  onButtonClick(){
   this.clickEvent.emit();
  }

}
