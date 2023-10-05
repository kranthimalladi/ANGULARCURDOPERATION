import { Component ,OnInit} from '@angular/core';
import { ApiService } from 'src/app/serviceap/api.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-ucourses',
  templateUrl: './ucourses.component.html',
  styleUrls: ['./ucourses.component.css']
})
export class UcoursesComponent implements OnInit {
public course:any
public cid:any
public pro:any
  constructor(public api: ApiService,public route:ActivatedRoute){}

  ngOnInit(): void {
    this.cid=this.route.snapshot.paramMap.get("id")
    console.log(this.cid)
    console.log(this.api.course)
    this.pro=this.course.getproduct()
   this. course=this.pro.find((c:any)=>
      {c.id==this.cid})
    
  

}
  
}
