import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  //Angular Doc -- START

  canClick = false;

  link = 'https://www.javatpoint.com/typescript-type-annotation';

  color = '#D32F2F';

  age() {
    var age: number = 44;

    return 'hello ' + age + ' years old';
  }

  message() {
    alert('hello');
  }
  textMsg: string = 'Pls Click';
  condition = false;
  angularImage =
    'https://repository-images.githubusercontent.com/24195339/87018c00-694b-11e9-8b5f-c34826306d36';

  NodeImage =
    'https://e7.pngegg.com/pngimages/540/810/png-clipart-node-js-javascript-npm-computer-icons-web-application-others-miscellaneous-text.png';
  clickimage() {
    this.condition = !this.condition;
  }

  //Angular Doc -- END

  title = 'project1';
  name = 'balaji';

  getvalue() {
    // Interpolation Databinding

    return 'Sun Rise';
  }
  num = 15; // calculation

  newClass = 'class01'; // binding assign class

  currentItem = 'Angular 13 tutorial';

  ifCondition() {
    var votingage = 18;

    if (votingage >= 18) {
      return 'You Eligible For Vote';
    } else {
      return 'Your Not Eligble For';
    }
  }
} // End
