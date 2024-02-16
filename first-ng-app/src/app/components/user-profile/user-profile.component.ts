import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, ElementRef, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges, ViewChild, booleanAttribute, input, numberAttribute } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { User } from '../../../models/user';
import { ContryCodePipe } from '../../pipes/contry-code.pipe';
import { HighlightDirective } from '../../directives/highlight.directive';

function formatName(value:string){
   return "Hi "+value
}

@Component({
  selector: 'app-user-profile',
  standalone: true,
  imports: [FormsModule,CommonModule,ContryCodePipe,HighlightDirective],
  templateUrl: './user-profile.component.html',
  styleUrl: './user-profile.component.css'
})
export class UserProfileComponent implements OnInit ,OnDestroy,OnChanges,AfterViewInit{

  // @Input({alias:"userName"}) name = "";
  name = input("",{
    alias:"userName",
  })
  @Input({transform:booleanAttribute}) isSingle!:boolean;
  @Input({transform:numberAttribute}) salary!:number;

  @Output() myEvent = new EventEmitter<User>()
  sendData(){
    this.myEvent.emit({name:this.name(),newSalary:25000})
  }

  @ViewChild("myheading") heading?:ElementRef


  constructor(){
    // init properties
    // dependency injection
    // event listener register
    console.log("constructor called",this.name)
    console.log("constructor",this.heading?.nativeElement.textContent)

  }
  ngAfterViewInit(): void {
    console.log("ngAfterViewInit",this.heading?.nativeElement.textContent)
  }
  

  ngOnChanges(changes: SimpleChanges): void {
    console.log("ngOnChanges",changes)
    console.log("ngOnChanges",this.heading?.nativeElement.textContent)
  }

  ngOnInit(){
    // init properties
    // event listener register
    // initial api call
    console.log("ngOnInt called",this.name())
    console.log("ngOnInt called",this.heading?.nativeElement.textContent)
  }

  ngOnDestroy(){
    // unregsier event listner
    console.log("componet destroyed")
  }



  

  //  name = "ramesh"
   // status = "single"
   // phoneno = 123456789
  //  salary = 40000
    //isBtnDisabled = true
   //inputVal = "test"

  //   users = [
  //    {name:"ramesh",isSingle:true,salary:10000},
  //    {name:"suresh",isSingle:false,salary:60000},
  //    {name:"nitesh",isSingle:true,salary:90000},
  //  ]

  //  onChange(e:Event){
  //     const value = (e.target as HTMLInputElement).value
  //    this.inputVal = value
  //  }
}
