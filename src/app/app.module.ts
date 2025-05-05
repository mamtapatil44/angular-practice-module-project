import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ParentComponent } from './components/parent/parent.component';
import { ChildComponent } from './components/child/child.component';
import { SecondChildComponent } from './components/second-child/second-child.component';
import { TitleCase } from './pipes/titlecase.pipe';
import { HighLight } from './directives/highlight.directive';
import { HasPermission } from './directives/hasPermission.directive';
import { HttpClientModule } from '@angular/common/http';
import { SenderComponent } from './components/sender/sender.component';
import { ReceiverComponent } from './components/receiver/receiver.component';
import { FormsModule } from '@angular/forms';
import { TableComponent } from './components/table/table.component';
import { CounterParentComponent } from './components/counter-parent/counter-parent.component';
import { CounterChildComponent } from './components/counter-child/counter-child.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { counterReducer } from './store/counter.reducer';

import { productReducer } from './store/product/product.reducer';
import { ProductEffects } from './store/product/product.effects';

@NgModule({
  declarations: [
    AppComponent,
    ParentComponent,
    ChildComponent,
    SecondChildComponent,
    TitleCase,
    HighLight,
    HasPermission,
    SenderComponent,
    ReceiverComponent,
    TableComponent,
    CounterParentComponent,
    CounterChildComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    StoreModule.forRoot({ product:productReducer}),
    EffectsModule.forRoot([ProductEffects]),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
