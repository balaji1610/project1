import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
})
export class ChildComponent implements OnInit {
  // @Input() item: any = '';


  // @Input() item = ''; // decorate the property with @Input()
  constructor() { }

  ngOnInit(): void {
  }

}
