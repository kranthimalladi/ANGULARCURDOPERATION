import { Component, OnInit  } from '@angular/core';
import { FormGroup,FormControl,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/serviceap/api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit  {


  constructor(public api:ApiService ,public r:Router){}
  ngOnInit(): void {
   
  }
  public msg :any;
  public clr={red:false,green:false}
  issubmit:any=false;
  loginform:any= new FormGroup({

   email:new FormControl('', Validators.required),
   password:new FormControl('', Validators.required)

  })
  login(){
    this.issubmit=true;
  
    console.log(this.loginform.value)
    const data=new FormData()
     
      data .append("userEmail",this.loginform.value.email)
      data .append("userPassword",this.loginform.value.password)
     
      this.api.student_login(data).
      subscribe((res:any) => {
      
        console.log(res)
        this.msg=res.message;
        if(res.status===1){
          localStorage.setItem("email",this.loginform.value.email)
          localStorage.setItem("user",JSON.stringify(res.data[0]))
             setTimeout(()=>{
              this.r.navigate(['/dashboard'])
             },2000) 
            
             this.clr={red:false,green:true}
        }
        else{
          this.clr={red:true,green:false}
        }
      })
  }
  get f(){
    return this.loginform.controls
  }
 
     
     
      
      
     
}
