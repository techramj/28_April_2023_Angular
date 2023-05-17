import { Component, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent  {

   @Input() servers:{name:string,status:string}[] =[];

   @Output() buttonEvent: EventEmitter<{name:string, status:string}> = new EventEmitter<{name:string, status:string}>()


   onButtonClick(){
    console.log('onButtonClick clicked');
    let name = 'Server-'+(this.servers.length+1);
    let status = Math.random()>0.5?'online':'offline';
    this.buttonEvent.emit({name,status});
   }


}
