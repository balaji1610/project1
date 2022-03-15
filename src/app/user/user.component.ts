import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  template: `
    <p class="allTemplate">
      user works!
    </p>
  `,
  styles: [
    '.allTemplate{color:red}'
  ]
})
export class UserComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
