import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss'
})
export class TableComponent implements OnInit {
  constructor(private userService:UserService){}
ngOnInit(): void {
  this.getUsers()
}
tableData = [{name:"",email:'',website:''}];

getUsers(){
  this.userService.getUsers().subscribe((data)=>{
    this.tableData = data;
    console.log()
  })
}
}
