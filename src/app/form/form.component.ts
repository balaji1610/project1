import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms'; // Form
// import { FormGroup, FormControl, FormArray } from '@angular/forms'

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  displayData:any
  GetDataForm (data:NgForm){
   this.displayData = data;
  }
show=true;
Toggle(){
this.show != this.show;
}
  constructor() { }

  ngOnInit(): void {
  }

}
