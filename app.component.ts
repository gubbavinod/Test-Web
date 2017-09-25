import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  //styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  public fname = 'vinod';
  public lname = 'kumar';
  onclick(val: any){
    console.log("Button Clicked");
    console.log(val.test);
    
  }
  onsubmit(){
    console.log("submit Clicked");
  }
  
}
