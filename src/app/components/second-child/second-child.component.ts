import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-second-child',
  templateUrl: './second-child.component.html',
  styleUrl: './second-child.component.scss'
})
export class SecondChildComponent {
  @Output() messageEvent = new EventEmitter<string>();


  sendMessage() {
    console.log("emmitting values")
    this.messageEvent.emit('Hello Data From Parent! 👋');
  }
}
