import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { LogService } from '../services/LogService';
import { AccountService } from '../services/account.service';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css']
})
export class NewAccountComponent implements OnInit {


  constructor(private logService: LogService,
    private accountService: AccountService) { }

  ngOnInit(): void {
  }

  addAccount(name:string, status:string){
    //this.logService.addAccountLog(status);
    //this.accoutAdded.emit({name,status});
    this.accountService.addAccount({name,status});
  }

}
