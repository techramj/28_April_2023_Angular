import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers-example',
  templateUrl: './servers-example.component.html',
  styleUrls: ['./servers-example.component.css']
})
export class ServersExampleComponent {
  sampleServers:{name:string,status:string}[] =[
    {name:'Exchange Rate server', status:'online'},
    {name:'ShareMarket server', status:'offline'},
    {name:'Trading Server', status:'online'},
  ];

  addServer(ob:any){
    this.sampleServers.push(ob);
  }

}
