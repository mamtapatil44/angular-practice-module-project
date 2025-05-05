import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectCounter } from '../../store/counter.selectors';
import { Observable } from 'rxjs';
import { decrement, increment, reset } from '../../store/counter.actions';
import { loadProducts } from '../../store/product/product.actions';

@Component({
  selector: 'app-counter-parent',
  templateUrl: './counter-parent.component.html',
  styleUrl: './counter-parent.component.scss',
})
export class CounterParentComponent {
  counter$!: Observable<number>;
  constructor(private store: Store) {}
  ngOnInit() {
    console.log("counter parent")
    this.counter$ = this.store.select(selectCounter);
    console.log('Dispatching loadProducts action');
    this.store.dispatch(loadProducts())
  }
  onIncrement(){

   this.store.dispatch(increment())
  }
  onDecrement(){
    this.store.dispatch(decrement())
  }
  onReset(){
    this.store.dispatch(reset())
  }
}
