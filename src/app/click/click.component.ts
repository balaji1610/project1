import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-click',
  templateUrl: './click.component.html',
  styleUrls: ['./click.component.css'],
})
export class ClickComponent implements OnInit {
  getDataName() {
    alert('Hello');
  }
  getDataName2(Name: string) {
    alert(Name);
  }
  keyUp() {
    alert('KeyUp Is Working');
  }

  keyDown() {
    alert('Keydown Is Working');
  }

  mouseOver() {
    alert('Mouse Over Is Working');
  }

  voteingAge() {
    let yourAge: any = prompt('Enter Your age', ' ');

    let decideAge: any;
    if (yourAge >= 18) {
      return (decideAge = alert('Your Age ' + yourAge + ' ' + ' is  eligible'));
    } else {
      return (decideAge = alert(
        'Your Age ' + yourAge + ' ' + 'is Not eligible'
      ));
    }
  }

  constructor() {}

  ngOnInit(): void {}
}
