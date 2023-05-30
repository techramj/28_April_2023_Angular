import { Component } from '@angular/core';
import {FormsModule, NgForm} from '@angular/forms'

@Component({
  selector: 'app-form2',
  templateUrl: './form2.component.html',
  styleUrls: ['./form2.component.css']
})
export class Form2Component {

  onSubmit(form: NgForm){
    console.log("form submitted", form);
    let name= form.value.username;
    let email = form.value.email;
    console.log(name,email);
  }

}
