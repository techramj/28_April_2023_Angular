import { Injectable } from '@angular/core';
import { LogService } from './LogService';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  accounts:{name:string,status:string}[] = [
    {name:'User Account', status:'active'},
    {name:'DB Account', status:'active'},
    {name:'Service Account', status:'inactive'},
  ]

  constructor(private logService: LogService) { }


  addAccount(newAccount:{name:string,status:string}){
    this.logService.addAccountLog(newAccount.status);
    this.accounts.push(newAccount);
  }

  updateStatus(updateAccount:{id:number, newStatus:string}){
    this.logService.addAccountLog(updateAccount.newStatus);
    this.accounts[updateAccount.id].status = updateAccount.newStatus;
  }

}
