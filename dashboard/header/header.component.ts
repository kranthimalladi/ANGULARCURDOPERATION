import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{
    

public email:any;
  constructor(public r:Router){}
  ngOnInit(): void {
this.email=localStorage.getItem("email")

  if(!localStorage.getItem("email")){
    this.r.navigate(['/login'])
  }
}
  logout(){
    this.r.navigate(['/login'])
    localStorage.clear()
  }
}