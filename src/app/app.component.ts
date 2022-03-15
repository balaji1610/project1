import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'project1';
  name = "balaji";

  getvalue(){  // Interpolation Databinding

    return 'Sun Rise'
  }
  num=15;  // calculation

  newClass='class01'  // binding assign class

  ifCondition(){

    var votingage = 18;

    if(votingage>=18){

      return "You Eligible For Vote"
    }else{
      return "Your Not Eligble For"
    }
  }




}// End
