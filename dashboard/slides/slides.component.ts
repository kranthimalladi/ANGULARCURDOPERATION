import { Component,OnInit } from '@angular/core';
import { RouterConfigOptions } from '@angular/router';
import { ApiService } from 'src/app/serviceap/api.service';

@Component({
  selector: 'app-slides',
  templateUrl: './slides.component.html',
  styleUrls: ['./slides.component.css']
})
export class SlidesComponent implements OnInit {
  public student={fname:"", lname:"",email:"", phone:" ", user_id:""}
  public msg:any;
  public dmsg:any;
  public umsg:any;
  public clr={green:false,red:false}
  constructor(public api:ApiService ){}
  ngOnInit(): void {
    this.getusers()
  }

  getusers(){
    this.api.student_getusers().subscribe((res:any)=>{
      console.log(res.data)
      this.msg=res.data;
    })
  }
 

udate(id:any){

let d=this.msg.filter((user:any)=>{
  return user.user_id===id
})
console.log(d)
this.student.user_id=d[0].user_id
this.student.fname=d[0].user_fname
this.student.lname=d[0].user_lname
this.student.email=d[0].user_email
this.student.phone=d[0].user_phone
}
update(){
  this.umsg=""
  const data=new FormData()
  data.append("user_id",this.student.user_id)
  data.append("user_fname",this.student.fname)
  data.append("user_lname",this.student.lname)
  data.append("user_email",this.student.email)
  data.append("user_phone",this.student.phone)
  this.api. student_update(data).subscribe((res:any)=>{
   console.log(res) 
  this.umsg=res.message
  
    this.getusers()
 
  
  })
}
del(id:any){

 if(confirm(`Are you sure? `)) {
  const data=new FormData()
  data.append("u_id",id)
  this.api. student_delete(data).subscribe((res:any)=>{
    console.log(res)
    this.dmsg=res.message;
    this.getusers()
  })
 }

}








}
