import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ViewEmployeeComponent } from './view-employee/view-employee.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FormsModule } from '@angular/forms';
import { SearchemployeeComponent } from './searchemployee/searchemployee.component';



const myRoute:Routes=[
  {
    path:"",
    component:AddEmployeeComponent
  },
  {
    path:"view",
    component:ViewEmployeeComponent
  },
  {
    path:"search",
    component:SearchemployeeComponent
  }
]



@NgModule({
  declarations: [
    AppComponent,
    ViewEmployeeComponent,
    AddEmployeeComponent,
    NavbarComponent,
    SearchemployeeComponent,
   
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
   RouterModule.forRoot(myRoute),
   FormsModule,
   HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
