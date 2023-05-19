import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-queryparam',
  templateUrl: './queryparam.component.html',
  styleUrls: ['./queryparam.component.css']
})
export class QueryparamComponent implements OnInit {
   email:string ='abc@gmail.com';
   password:string = 'abc';
   confirmPassword = 'def';

  constructor(private route:ActivatedRoute) {
   }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => console.log(params));

  }


  login(){
      console.log(this.email, this.password, this.confirmPassword);
  }

}
