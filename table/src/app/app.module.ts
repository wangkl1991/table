import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'

import { AppComponent } from './app.component';
import { TableService } from './table.service';
import { HttpModule } from '@angular/http';
import { FilterPipe } from './filter.pipe';



@NgModule({
  declarations: [
    AppComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule
  ],
  providers: [
    TableService,

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
