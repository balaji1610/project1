import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loop',
  templateUrl: './loop.component.html',
  styleUrls: ['./loop.component.css']
})
export class LoopComponent implements OnInit {


  booldata = true;
  booldata2 = false;
  mark =15;
  animal = 'Money'
  constructor() { }

  ngOnInit(): void {
  }

}
