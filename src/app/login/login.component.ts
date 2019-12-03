import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = fb.group({
      "username": ["", Validators.compose([Validators.required])],
      "password": ["", Validators.compose([Validators.required])],
    });  
  }

  ngOnInit() {
  }

  onSubmit(values) {
    console.log(values);

  }
}
