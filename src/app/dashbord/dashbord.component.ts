import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashbord',
  templateUrl: './dashbord.component.html',
  styleUrls: ['./dashbord.component.css']
})
export class DashbordComponent implements OnInit {

  constructor() { }
  loginUserName;
  //username:string;
  ngOnInit() {
    this.loginUserName=localStorage.getItem('username');
  }
  


}
