import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/serviceap/api.service';
interface courses{
  id:number,
  img:string,
  name:string,
    dueration:string,
    timings:string,
    fee:number,
    join:boolean
}
@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css']
})
export class ServiceComponent implements OnInit{


  constructor(public api:ApiService){}
  ngOnInit(): void {

  }

  public Allthe:courses[]=[
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

  add(course:any){
    console.log(course)
    this.api.addtocart(course)
  }
}
