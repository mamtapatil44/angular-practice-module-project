import { Component } from '@angular/core';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-sender',
  templateUrl: './sender.component.html',
  styleUrl: './sender.component.scss'
})
export class SenderComponent {
  constructor( private userService: UserService){

  }
  name : string =''
  lastname :string =''
  sendData(){
    this.userService.updateUserSource(this.name);
  }
  sendUserData(){
    const obj ={
      firstname :this.name,
      lastname:this.lastname
    }
    this.userService.updateUserData(obj)

  }
}
