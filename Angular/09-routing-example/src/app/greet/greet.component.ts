import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-greet',
  templateUrl: './greet.component.html',
  styleUrls: ['./greet.component.css']
})
export class GreetComponent implements OnInit {
  name:string = null;
  constructor(private route:ActivatedRoute,
    private router: Router
    ) { }

  ngOnInit(): void {
    //this.name = this.route.snapshot.paramMap.get('name') || '';
    this.name = this.route.snapshot.paramMap.get('name');
    if(this.name == 'bye'){
      //redirect to farewell page
      this.router.navigateByUrl("/bye");
    }
  }

}
