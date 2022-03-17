import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms'; // Form

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
  constructor() { }

  ngOnInit(): void {
  }

}
