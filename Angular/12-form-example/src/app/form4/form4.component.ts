import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-form4',
  templateUrl: './form4.component.html',
  styleUrls: ['./form4.component.css']
})
export class Form4Component {

  @ViewChild('f') form:NgForm;

  questioniare:{question:string, desc:string}[] =[
    {question:'teacher', desc:'Favourite Teacher'},
    {question:'framework', desc:'Favourite Framework'},
    {question:'subject', desc:'Favouadfjadskjadsfkjkdsafjkrite Subject'}
  ];

  defaultQuestion:string ='framework';
  answer:string= '';
  gender:string[] =['female','male'];

  onSubmit(){
    console.log(this.form);
    let name= this.form.value.username;
    let email = this.form.value.email;
    let selectedQuestion = this.form.value.question;
    console.log(name,email,selectedQuestion);
    console.log('default question: ', this.defaultQuestion);
  }

}
