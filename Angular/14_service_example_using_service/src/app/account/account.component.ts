import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { LogService } from '../services/LogService';
import { AccountService } from '../services/account.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {

  @Input() account:{name:string,status:string}={name:'',status:''};
  @Input() id:number = 0;

  constructor(private logService:LogService,
    private accountService:AccountService) { }

  ngOnInit(): void {
  }

  setStatus(newstatus:string){
    //this.logService.addAccountLog(newstatus);
    this.accountService.updateStatus({id:this.id,newStatus:newstatus});
  }

}
