import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { loadProducts } from '../../store/product/product.actions';
import { selectProducts } from '../../store/product/product.selectors';
import { ProductState } from '../../store/product/product.reducer';

@Component({
  selector: 'app-counter-child',
  templateUrl: './counter-child.component.html',
  styleUrl: './counter-child.component.scss'
})
export class CounterChildComponent implements OnInit {
  producstData:any
  constructor(private store : Store<{ product: ProductState }>){

  }
  ngOnInit(): void {
   this.store.select(selectProducts).
    subscribe((products) => {
      this.producstData = products;  

      console.log("l")
    });

  }

}
