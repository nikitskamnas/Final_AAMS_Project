import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-commonpage',
  templateUrl: './commonpage.component.html',
  styleUrls: ['./commonpage.component.css']
})
export class CommonpageComponent implements OnInit {

  constructor(private $rout:Router) { }

  ngOnInit(): void {
   //this.$rout.navigate(['cattle-info/dashboard']);

  }

}
