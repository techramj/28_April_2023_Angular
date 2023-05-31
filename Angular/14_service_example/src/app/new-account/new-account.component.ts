import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css']
})
export class NewAccountComponent implements OnInit {

  @Output() accoutAdded = new EventEmitter<{name:string,status:string}>();
  constructor() { }

  ngOnInit(): void {
  }

  addAccount(name:string, status:string){
    console.log("status Added/updated to: " +status+" at "+new Date() );
    //this.accoutAdded.emit({name:name, status:status});
    this.accoutAdded.emit({name,status});
  }

}
