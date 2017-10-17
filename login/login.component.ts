import { Component } from '@angular/core';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
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