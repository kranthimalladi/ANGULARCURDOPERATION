import { Component, OnInit } from '@angular/core';
interface courses{
  name:string,
    dueration:string,
    timings:string,
    fee:number,
    join:boolean
}

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  private name:string="ilander in Angular"
  public  numb:number=123
  public ready:boolean=true
  public name1:string="angle by god grace"
  
  constructor(){}
  ngOnInit(): void {
   
 
    console.log(this.numb)
    console.log(this.ready)
    console.log(this.name1)
    console.log(this.coures[0])
    
  }
  public coures:string[]=["Angular","Reactjs","Viewjs","Nodejs"]
  public courses:courses= {
  
    name:"Angular",
    dueration:"30days",
    timings:"only1hour",
    fee:50000,
    join:true
  }
  public Allcouses:courses[]=[
    {
      name:"Angular",
      dueration:"30days",
      timings:"only1hour",
      fee:50000,
      join:true
    },
    {
      name:"ReactJs",
      dueration:"30days",
      timings:"only1hour",
      fee:10000,
      join:true
    },
    {
      name:"Javascript",
      dueration:"30days",
      timings:"only1hour",
      fee:150000,
      join:true
    },
    {
      name:"Html&css",
      dueration:"30days",
      timings:"only1hour",
      fee:250000,
      join:true
    },
  ]
  public img:string="img2.webp"
  rec(x:any){
    alert(x)
  }
}
