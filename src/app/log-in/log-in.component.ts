import { Component, OnInit} from '@angular/core';
import {   FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent  implements OnInit {

  
  formGroup: FormGroup; 
  username:string;  
  constructor(private formBuilder: FormBuilder, private router:Router) { }

  ngOnInit() {
    this.createForm();

  }
 
   createForm() {
    this.formGroup = this.formBuilder.group({
      'username': ['', Validators.required],
      'password': ['', Validators.required],
    });
  }
  getError(el) {
    switch (el) {
      case 'user':
        if (this.formGroup.get('username').hasError('required')) {
          return 'Username required';
        }
        break;
      case 'pass':
        if (this.formGroup.get('password').hasError('required')) {
          return 'Password required';
        }
        break;
      default:
        return '';
    }
  }

  onSubmit(post) {
    localStorage.setItem('username', this.username);
    this.router.navigate(['dashbord']);

    // this.post = post;
  }



}
