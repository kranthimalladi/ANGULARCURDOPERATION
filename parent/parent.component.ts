import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent {
  public obj:any={name:"iam a parent tag in second time ",loc:"hyderbad",add:"6-62"}
  public name:any="angle by god grace"
  public msg :any
  val:any=true

  reciveData (x:any){
 this.msg=x
  }
   frist:any="ilander"
  data(x:any){
    this.frist=x
  }

  stop1(){
    this.val=false
  }
}
