import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
})
export class ChildComponent implements OnInit {
  @Input() item: any = '';
  constructor() {}

<<<<<<< HEAD
  @Input() item = ''; // decorate the property with @Input()
  constructor() { }

  ngOnInit(): void {
  }

=======
  ngOnInit(): void {}
>>>>>>> b159f95efbc61b7609d38ea5e3478d89c031f2c9
}
