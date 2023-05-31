import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {

  @Input() account:{name:string,status:string}={name:'',status:''};
  @Input() id:number = 0;
  @Output() statusChanged = new EventEmitter<{id:number,newStatus:string}>()

  constructor() { }

  ngOnInit(): void {
  }

  setStatus(newstatus:string){
    console.log("status Added/updated to: " +newstatus+" at "+new Date() );
    this.statusChanged.emit({id:this.id,newStatus:newstatus});
  }

}
