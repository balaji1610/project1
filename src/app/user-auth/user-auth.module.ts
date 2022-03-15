import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './register/register.component';
import { OneComponent } from './one/one.component';



@NgModule({
  declarations: [
    RegisterComponent,
    OneComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    RegisterComponent,
    OneComponent
  ]
})
export class UserAuthModule { }
