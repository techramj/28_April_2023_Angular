import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.css']
})
export class AccountsComponent {

  accounts:{name:string,status:string}[] = [
    {name:'User Account', status:'active'},
    {name:'DB Account', status:'active'},
    {name:'Service Account', status:'inactive'},
  ]
  //{id:2,newStatus:'active'}
  onStatusChanged(updatedAccount:{id:number,newStatus:string}){
    this.accounts[updatedAccount.id].status = updatedAccount.newStatus;
  }

  addAccount(newAccount: {name:string,status:string}){
    this.accounts.push(newAccount);
  }

}
