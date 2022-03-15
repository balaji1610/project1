import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  template: `
    <p class="allTemplate">
      user works!
    </p>
    <h1>{{testfunction()}}</h1>

  `,
  styles: [
    '.allTemplate{color:red}'
  ]
})
export class UserComponent implements OnInit {


  testfunction(){
    var a = "Inline Style Inline Template"

    return a;
  }


constructor() { }

  ngOnInit(): void {
  }



}
