import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-binding',
  templateUrl: './binding.component.html',
  styleUrls: ['./binding.component.css']
})
export class BindingComponent implements OnInit {

  Enttext:string='';
  GetddataA(Hello2:string){
this.Enttext= Hello2;
  }
  display:string='';
  GetddataANew(Hello3:string){

    this.display = Hello3;
  }
  inputtext03:number=0;
  setData(name:string){

    name == 'add' ? this.inputtext03++:this.inputtext03--;
  }
  constructor() { }

  ngOnInit(): void {
  }

}
