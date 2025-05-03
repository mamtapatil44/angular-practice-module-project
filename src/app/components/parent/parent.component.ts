import { Component, Input, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';

export class Address {
  street!: string;
  city!: string;
  zipCode!: string;
}
@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.scss'
})
export class ParentComponent implements OnInit{
  constructor(private userService :UserService){

  }
  message: string = '';
  @Input() addresses: Address[] = [
    { street: 'Third Avenue', city: 'New York', zipCode: '10001' },
    { street: 'Constitution Avenue', city: 'Washington', zipCode: '20001' }
  ];
  receiveMessage($event: string){
    console.log("recering message")
    this.message = $event;
  }

  pipeData = "usepipe"

  ngOnInit(): void {
    const obj ={
      name:"mamta",
      age:"20"
    }
    this.userService.addUser(obj).subscribe((data)=>{
      console.log("data ",data)
    })
  }
}
