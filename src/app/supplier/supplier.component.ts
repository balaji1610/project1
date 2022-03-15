import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-supplier',
  template: `
    <p class="template">
      Inline Template
    </p>
  `,
  styleUrls: ['./supplier.component.css']
})
export class SupplierComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
