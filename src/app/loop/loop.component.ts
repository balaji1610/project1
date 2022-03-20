import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loop',
  templateUrl: './loop.component.html',
  styleUrls: ['./loop.component.css'],
})
export class LoopComponent implements OnInit {
  booldata = true;
  booldata2 = false;
  mark = 15;
  animal = 'Money';

  userarray = ['Name', 'Area', 'Job'];

  userarray2 = [
    {
      name: 'Balaji',
      area: 'Chennai',
      job: 'Web Developer',
      skillset: ['angular', 'react', 'php'],
    },
    {
      name: 'Alex',
      area: 'Chennai',
      job: 'Angular Developer',
      skillset: ['HTML', 'CSS', 'BOOTSTRAP'],
    },
    {
      name: 'Chitra',
      area: 'Chennai',
      job: 'React Developer',
      skillset: ['Sql', 'Angular'],
    },
  ];

  color = 'red';
  font = '23px;';
  twoday = '';
  constructor() {}

  ngOnInit(): void {}
}
