import { Component,OnInit } from '@angular/core';
import { ApiService } from 'src/app/serviceap/api.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
 public data:any
 public filepath:any
 constructor(public api:ApiService ){}
  ngOnInit(): void {
    this.api.get_active().subscribe((res:any)=>{
      console.log(res)
      this.data=res.data
      this.filepath=res.filepath
    })
    
  }

 
 
 
 }




