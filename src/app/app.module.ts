import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestingComponent } from './testing/testing.component';
import { CustomerComponent } from './customer/customer.component';
import { SupplierComponent } from './supplier/supplier.component';
import { UserComponent } from './user/user.component';
import { UserAuthModule } from './user-auth/user-auth.module';  //apply moduleng
import { ClickComponent } from './click/click.component';
import { TestComponent } from './test/test.component';
import { BindingComponent } from './binding/binding.component';
import { PropertyComponent } from './property/property.component';
import { LoopComponent } from './loop/loop.component';
import { FormComponent } from './form/form.component';
import {FormsModule} from "@angular/forms";
import { MaterialComponent } from './material/material.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations' // FormsModule
import { MatSliderModule } from '@angular/material/slider';
import { ChildComponent } from './child/child.component';
import { PipeComponent } from './pipe/pipe.component';
import { RevisionComponent } from './revision/revision.component'; 

@NgModule({
  declarations: [
    AppComponent,
    TestingComponent,
    CustomerComponent,
    SupplierComponent,
    UserComponent,
    ClickComponent,
    TestComponent,
    BindingComponent,
    PropertyComponent,
    LoopComponent,
    FormComponent,
    MaterialComponent,
    ChildComponent,
    PipeComponent,
    RevisionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UserAuthModule,
    FormsModule,
    BrowserAnimationsModule,
    MatSliderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
