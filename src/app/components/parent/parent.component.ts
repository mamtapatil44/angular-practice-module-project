import { Component, Input } from '@angular/core';

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
export class ParentComponent {
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
}
