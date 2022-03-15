import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-click',
  templateUrl: './click.component.html',
  styleUrls: ['./click.component.css']
})
export class ClickComponent implements OnInit {
  getDataName(){

    alert("Hello")
  }

  constructor() { }

  ngOnInit(): void {
  }

}
