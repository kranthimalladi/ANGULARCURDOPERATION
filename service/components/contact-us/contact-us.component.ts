import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {


  constructor(){}
  ngOnInit(): void {
    
  }

 counter=0;
 inc(){
  this.counter=this.counter+1
 }
 dec(){
  this.counter=this.counter-1>0?this.counter-1:0
 }
}
