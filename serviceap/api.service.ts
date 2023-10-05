import { Injectable,OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService implements OnInit {
  
  public course:any=[
    {
      id:1,
      img:"img.1.webp",
      name:"Angular",
      dueration:"30days",
      timings:"Lorem ipsum dolor sit amet consectetur adipisicing eliRecusandae odit repellat voluptate quasi deleniti quaerat hic error explicabo ducimus nam facere ab impedit eligendi",
      fee:50000,
      join:true
    },
    {
      id:2,
      img:"img2.webp",
      name:"ReactJs",
      dueration:"30days",
      timings:"Lorem ipsum dolor sit amet consectetur adipisicing eliRecusandae odit repellat voluptate quasi deleniti quaerat hic error explicabo ducimus nam facere ab impedit eligendi",
      fee:10000,
      join:true
    },
    {
      id:3,
      img:"img3.webp",
      name:"Javascript",
      dueration:"30days",
      timings:"Lorem ipsum dolor sit amet consectetur adipisicing eliRecusandae odit repellat voluptate quasi deleniti quaerat hic error explicabo ducimus nam facere ab impedit eligendi",
      fee:150000,
      join:true
    },
    {
      id:4,
      img:"img4.png",
      name:"Html&css",
      dueration:"30days",
      timings:"Lorem ipsum dolor sit amet consectetur adipisicing eliRecusandae odit repellat voluptate quasi deleniti quaerat hic error explicabo ducimus nam facere ab impedit eligendi",
      fee:250000,
      join:true
    },
    {
      id:5,
      img:"img2.webp",
      name:"ReactJs",
      dueration:"30days",
      timings:"Lorem ipsum dolor sit amet consectetur adipisicing eliRecusandae odit repellat voluptate quasi deleniti quaerat hic error explicabo ducimus nam facere ab impedit eligendi",
      fee:10000,
      join:true
    },
    {
      id:6,
      img:"img3.webp",
      name:"Javascript",
      dueration:"30days",
      timings:"Lorem ipsum dolor sit amet consectetur adipisicing eliRecusandae odit repellat voluptate quasi deleniti quaerat hic error explicabo ducimus nam facere ab impedit eligendi",
      fee:150000,
      join:true
    },
    {
      id:7,
      img:"img4.png",
      name:"Html&css",
      dueration:"30days",
      timings:"Lorem ipsum dolor sit amet consectetur adipisicing eliRecusandae odit repellat voluptate quasi deleniti quaerat hic error explicabo ducimus nam facere ab impedit eligendi",
      fee:250000,
      join:true
    },
    {
      id:8,
      img:"img4.png",
      name:"Html&css",
      dueration:"30days",
      timings:"Lorem ipsum dolor sit amet consectetur adipisicing eliRecusandae odit repellat voluptate quasi deleniti quaerat hic error explicabo ducimus nam facere ab impedit eligendi",
      fee:250000,
      join:true
    },
    {
      id:9,
      img:"img2.webp",
      name:"ReactJs",
      dueration:"30days",
      timings:"Lorem ipsum dolor sit amet consectetur adipisicing eliRecusandae odit repellat voluptate quasi deleniti quaerat hic error explicabo ducimus nam facere ab impedit eligendi",
      fee:10000,
      join:true
    },
    {
      id:10,
      img:"img3.webp",
      name:"Javascript",
      dueration:"30days",
      timings:"Lorem ipsum dolor sit amet consectetur adipisicing eliRecusandae odit repellat voluptate quasi deleniti quaerat hic error explicabo ducimus nam facere ab impedit eligendi",
      fee:150000,
      join:true
    },
    {
      id:11,
      img:"img4.png",
      name:"Html&css",
      dueration:"30days",
      timings:"Lorem ipsum dolor sit amet consectetur adipisicing eliRecusandae odit repellat voluptate quasi deleniti quaerat hic error explicabo ducimus nam facere ab impedit eligendi",
      fee:250000,
      join:true
    },
    {
      id:12,
      img:"img4.png",
      name:"Html&css",
      dueration:"30days",
      timings:"Lorem ipsum dolor sit amet consectetur adipisicing eliRecusandae odit repellat voluptate quasi deleniti quaerat hic error explicabo ducimus nam facere ab impedit eligendi",
      fee:250000,
      join:true
    },
    {
      id:13,
      img:"img2.webp",
      name:"ReactJs",
      dueration:"30days",
      timings:"Lorem ipsum dolor sit amet consectetur adipisicing eliRecusandae odit repellat voluptate quasi deleniti quaerat hic error explicabo ducimus nam facere ab impedit eligendi",
      fee:10000,
      join:true
    },
    {
      id:14,
      img:"img3.webp",
      name:"Javascript",
      dueration:"30days",
      timings:"Lorem ipsum dolor sit amet consectetur adipisicing eliRecusandae odit repellat voluptate quasi deleniti quaerat hic error explicabo ducimus nam facere ab impedit eligendi",
      fee:150000,
      join:true
    },
    {
      id:15,
      img:"img4.png",
      name:"Html&css",
      dueration:"30days",
      timings:"Lorem ipsum dolor sit amet consectetur adipisicing eliRecusandae odit repellat voluptate quasi deleniti quaerat hic error explicabo ducimus nam facere ab impedit eligendi",
      fee:250000,
      join:true
    },
    {
      id:16,
      img:"img4.png",
      name:"Html&css",
      dueration:"30days",
      timings:"Lorem ipsum dolor sit amet consectetur adipisicing eliRecusandae odit repellat voluptate quasi deleniti quaerat hic error explicabo ducimus nam facere ab impedit eligendi",
      fee:250000,
      join:true
    },
    {
      id:17,
      img:"img2.webp",
      name:"ReactJs",
      dueration:"30days",
      timings:"Lorem ipsum dolor sit amet consectetur adipisicing eliRecusandae odit repellat voluptate quasi deleniti quaerat hic error explicabo ducimus nam facere ab impedit eligendi",
      fee:10000,
      join:true
    },
    {
      id:18,
      img:"img3.webp",
      name:"Javascript",
      dueration:"30days",
      timings:"Lorem ipsum dolor sit amet consectetur adipisicing eliRecusandae odit repellat voluptate quasi deleniti quaerat hic error explicabo ducimus nam facere ab impedit eligendi",
      fee:150000,
      join:true
    },
    {
      id:19,
      img:"img4.png",
      name:"Html&css",
      dueration:"30days",
      timings:"Lorem ipsum dolor sit amet consectetur adipisicing eliRecusandae odit repellat voluptate quasi deleniti quaerat hic error explicabo ducimus nam facere ab impedit eligendi",
      fee:250000,
      join:true
    },
    {
      id:19,
      img:"img4.png",
      name:"Html&css",
      dueration:"30days",
      timings:"Lorem ipsum dolor sit amet consectetur adipisicing eliRecusandae odit repellat voluptate quasi deleniti quaerat hic error explicabo ducimus nam facere ab impedit eligendi",
      fee:250000,
      join:true
    },
    {
      id:20,
      img:"img2.webp",
      name:"ReactJs",
      dueration:"30days",
      timings:"Lorem ipsum dolor sit amet consectetur adipisicing eliRecusandae odit repellat voluptate quasi deleniti quaerat hic error explicabo ducimus nam facere ab impedit eligendi",
      fee:10000,
      join:true
    },
    {
      id:21,
      img:"img3.webp",
      name:"Javascript",
      dueration:"30days",
      timings:"Lorem ipsum dolor sit amet consectetur adipisicing eliRecusandae odit repellat voluptate quasi deleniti quaerat hic error explicabo ducimus nam facere ab impedit eligendi",
      fee:150000,
      join:true
    },
    {
      id:22,
      img:"img4.png",
      name:"Html&css",
      dueration:"30days",
      timings:"Lorem ipsum dolor sit amet consectetur adipisicing eliRecusandae odit repellat voluptate quasi deleniti quaerat hic error explicabo ducimus nam facere ab impedit eligendi",
      fee:250000,
      join:true
    },
  ]
   
  public api:any=`http://ilandertech.com/api/index.php/welcome/`
  constructor(public htt:HttpClient) { }
  ngOnInit(): void {
  }
  student_register(data:any){
    return this.htt.post(this.api+"AddStuRegister",data)

  }
  student_login(data:any){
    return this.htt.post(this.api+"StuLogin",data)

  }
  student_update(data:any){
    return this.htt.post(this.api+"updateStuUsers",data)
  }
  student_delete(data:any){
    return this.htt.post(this.api+"DeleteStuUsers",data)
  }

student_getusers(){
  return this.htt.get(this.api+"getStuUsers")
}
sliders_add(data:any){
  return this.htt.post(this.api+"AddStuSliders",data)
}
sliders_del(data:any){
  return this.htt.post(this.api+"DeleteStuSlider",data)
}
sliders_up(data:any){
  return this.htt.post(this.api+"updateStuSlider",data)
}
sliders_get(){
  return this.htt.get(this.api+"GetStuSlider")
}
get_active(){
  return this.htt.get(this.api+"GetStuSliderActive")
}


  cartdata :any=[]

  addtocart(data:any){
    this.cartdata.push(data)
  }
  getcartdata(){
    return this.cartdata;
  }
  getproduct(){
    return this .course;
  }
}