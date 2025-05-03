import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ParentComponent } from './components/parent/parent.component';
import { ChildComponent } from './components/child/child.component';
import { SecondChildComponent } from './components/second-child/second-child.component';
import { TitleCase } from './pipes/titlecase.pipe';
import { HighLight } from './directives/highlight.directive';
import { HasPermission } from './directives/hasPermission.directive';

@NgModule({
  declarations: [
    AppComponent,
    ParentComponent,
    ChildComponent,
    SecondChildComponent,
    TitleCase,
    HighLight,
    HasPermission
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
