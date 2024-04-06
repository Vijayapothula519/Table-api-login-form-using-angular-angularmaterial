import { Component } from '@angular/core';
import {FormControl, Validators, FormsModule, ReactiveFormsModule, FormGroup} from '@angular/forms';
import {NgIf} from '@angular/common';
import { Router } from '@angular/router';
import { DataService } from './data.service';
DataService

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'table';
  constructor(private apiservice: DataService,public Dashboard:Router){}
  Username:string="";
  password:string="";

  email = new FormControl('', [Validators.required, Validators.email]);
  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }
  hide = true;
  passemail=new FormGroup({
    email : new FormControl('',Validators.email),
    password : new FormControl('',Validators.required),
  })
  pass(){
    console.log(this.passemail.value);
    this.apiservice.getdata(this.passemail.value)
    
    
  }
}


