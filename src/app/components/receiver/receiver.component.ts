import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-receiver',
  templateUrl: './receiver.component.html',
  styleUrl: './receiver.component.scss',
})
export class ReceiverComponent implements OnInit {
  username: string = '';
  userData:any
  constructor(private userService: UserService) {}
  ngOnInit(): void {
    this.userService.userSource$.subscribe((name) => {
      this.username = name;
    });
    this.userService.userData$.subscribe((data) => {
      console.log("data" ,data)
      this.userData = data;
    });
  }
}
