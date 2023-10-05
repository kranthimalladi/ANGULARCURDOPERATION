import { Component ,OnInit} from '@angular/core';
import { ApiService } from 'src/app/serviceap/api.service';
@Component({
  selector: 'app-sliders',
  templateUrl: './sliders.component.html',
  styleUrls: ['./sliders.component.css']
})
export class SlidersComponent implements OnInit{
  public amsg:any;
  public msg:any;
  public gmsg:any;
  public dmsg:any;
  public upd:any;
  slider={ uid:"",status:""}
  public filepath:any;
  constructor(public api:ApiService){}

  ngOnInit(): void {
    this.getsliders()
  }



  upload(e:any){
    console.log(e.target.files[0])
    this.msg=e.target.files[0]

  }

  addslider(){

  const data= new FormData()
  data.append("servicesImage",this.msg)
  this.api.sliders_add(data).subscribe((res:any)=>{
    console.log (res)
    this.amsg=res.message
  })
  }
  getsliders(){
    this.api.sliders_get().subscribe((resp:any)=>{
      console.log(resp)
      this.gmsg=resp.data
      this.filepath=resp.filepath
    })
   
  }
  del(id:any){
    this.dmsg=""
     if(confirm("Are you sure?")) {
    const data=new FormData()
    data.append("slider_id",id)
    this.api.sliders_del(data).subscribe((res:any)=>{
      console.log(res)
      this.dmsg=res.message
      this.getsliders()
    })
  } 
  }
  edit(id:any){
    this.upd=""
let img=this.gmsg.filter((img:any)=>{
  return img.slider_id==id
  this.getsliders()
})
this.slider.uid=img[0].slider_id
  this.slider.status=img[0].slider_status
  

  }

  updateslider(){
    
    const data=new FormData()
    data.append("slider_id",this.slider.uid)
    data.append("slider_image",this.filepath)
    data.append("slider_status",this.slider.status)

    this.api.sliders_up(data).subscribe((res:any)=>{
      console.log(res)
      this.upd=res. message
      this.getsliders()
    })
     
    console.log(this.slider)
  }
}



