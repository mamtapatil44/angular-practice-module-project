import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Address } from '../parent/parent.component';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrl: './child.component.scss'
})
export class ChildComponent {
  @Input() address!: Address;
 
}
