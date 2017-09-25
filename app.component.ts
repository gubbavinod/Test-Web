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
  onclick(){
    console.log("Button Clicked");
  }
  onsubmit(){
    console.log("submit Clicked");
  }
}
