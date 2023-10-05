import { Component , OnInit } from '@angular/core';
import { ApiService } from 'src/app/serviceap/api.service';
import {  Router } from '@angular/router';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit{
    
  
  constructor(public api:ApiService ,public r:Router){}
  ngOnInit(): void {
    
  }
     public student={fname:"", username:"",email:"",password:"", phone:" ",}
     public msg :any;
     public clr={red:false,green:false}
     rec(){
      const data=new FormData()
      data .append("fname",this.student.fname)
      data .append("lname",this.student.username)
      data .append("email",this.student.email)
      data .append("pwd",this.student.password)
      data .append("ph",this.student.phone)

      this.api.student_register(data).
      subscribe((res:any) => {
      
        console.log(res)
        this.msg=res.message;
        if(res.status===1){
          this.clr={red:false,green:true}
          setTimeout(()=>{
            this.r.navigate(['/login'])
          },2000)
         
        }
        else{
          this.clr={red:true,green:false}
        }
      })
      
     }
}
