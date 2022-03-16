import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property',
  templateUrl: './property.component.html',
  styleUrls: ['./property.component.css']
})
export class PropertyComponent implements OnInit {
  type01 = "Property Binding"
  type02 ="Normal Binding"
  bool = false;
  constructor() { }

  ngOnInit(): void {
  }

}
