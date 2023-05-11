import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent  {

   @Input() servers:{name:string,status:string}[] = [];


   addServer(){
      let name = 'Server-'+ (this.servers.length+1);
      let status = Math.random()>0.5?'online':'ofline';
      this.servers.push({name,status});
   }

   deleteServer(){
     this.servers.pop();
   }


}
