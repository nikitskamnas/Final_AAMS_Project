import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private $rout:Router) { }

  ngOnInit(): void {
  }

  onDashboard(){
    window.location.href="cattle-info/dashboard";
   //this.$rout.navigate(['dashboard']);
  }

}
