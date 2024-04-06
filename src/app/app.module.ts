import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import  {MatCardModule} from '@angular/material/card';
import { Table1Component } from './table1/table1.component';
import {MatTableModule} from '@angular/material/table';
import { Table2Component } from './table2/table2.component';
import { RecComponent } from './rec/rec.component';








@NgModule({
  declarations: [
    AppComponent,
    Table1Component,
    Table2Component,
    RecComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,MatButtonModule,MatIconModule,
    ReactiveFormsModule,HttpClientModule,MatCardModule,
    MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
