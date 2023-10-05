import { Component,DoCheck,EventEmitter,Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-chlid',
  templateUrl: './chlid.component.html',
  styleUrls: ['./chlid.component.css']
})
export class ChlidComponent implements OnInit,OnChanges,OnDestroy,DoCheck {
  

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes)
  }
  ngDoCheck(): void {
    console.log("do check method")
  }
  ngOnDestroy(): void {
    console.log("error stop the data")
  }
  @Input() frist1:any;
  ngOnInit(): void {
    console.log("ng oninit fire")
    
  }
 
 
  
}
