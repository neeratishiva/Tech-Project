import { Component, OnInit, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CrossFieldErrorMatcher } from '../models/field-error';
import { passwordsDoNotMatch } from '../models/password-validator';
import { FormComponentBase } from '../models/form-component-base';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent extends FormComponentBase implements OnInit, AfterViewInit {
  // @ts-ignore
  @ViewChild('email') firstItem: ElementRef;

  form!: FormGroup;
  username:string; 
  Email:string;
  Pass:string;
  hidePassword: boolean = true;
  errorMatcher = new CrossFieldErrorMatcher();

  constructor(private formBuilder: FormBuilder, private router:Router) {
    super();

    this.validationMessages = {
      userName: {
        required: 'User name is required.',
        minlength: 'User name minimum length is 6.',
        maxlength: 'User name maximum length is 15.',
        pattern: 'User name minimum length 6, allowed characters letters, numbers only. No spaces.'
      },
      password: {
        required: 'Password is required.',
        minlength: 'Password minimum length is 6.',
        maxlength: 'Password maximum length is 15.',
        pattern: 'Password minimum length 6, requires one letter, one number, one special character !@#$%^&* no spaces.'
      },
      confirmPassword: {
        required: 'Confirm password is required.',
        minlength: 'Confirm password minimum length is 6.',
        maxlength: 'Confirm password maximum length is 15.',
        pattern: 'Confirm password minimum length 6, requires one letter, one number, one special character !@#$%^&* no spaces.',
        passwordsDoNotMatch: 'Passwords must match.'
      },
      email: {
        required: 'Email is required.',
        email: 'Email is not properly formatted.',
      },
      passwordsGroup: {
        passwordsDoNotMatch: 'Passwords must match.'
      }
    };

    this.formErrors = {
      userName: '',
      Email: '',
      password: '',
      confirmPassword: '',
      passwordsGroup: ''
    };
  }

  ngOnInit() {
    this.form = this.formBuilder.group({
      userName: ['', [
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(15),
        Validators.pattern('^[a-zA-Z0-9]*$')]],
      email: ['', [
        Validators.required,
        Validators.email]],
      passwordsGroup: this.formBuilder.group({
        password: ['', [
          Validators.required,
          Validators.maxLength(15),
          Validators.pattern('^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,}$')]],
        confirmPassword: ['', [
          Validators.required,
          Validators.maxLength(15),
          Validators.pattern('^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,}$')]],
      }, { validators: passwordsDoNotMatch })
    });
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.firstItem.nativeElement.focus();
    }, 250);
    this.startControlMonitoring(this.form);
  }

  registerClicked(): void {
    if (this.form.invalid) {
      return;
    }
    var obj:any={};
    obj.email=this.Email;


    obj.username=this.username;
    obj.password=this.Pass;

    alert('Registration Complete');
    localStorage.setItem('username', this.username);
    this.router.navigate(['dashbord']);
    console.log(obj);
    
  }
}










  




  



