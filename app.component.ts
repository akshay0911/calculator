import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'calculator';
  public a:number;
  public b:number;
  public c:number;
  add()
  {
    this.c=this.a+this.b;
  }
  sub()
  {
    this.c=this.a-this.b;
  }
  mul()
  {
    this.c=this.a*this.b;
  }
  div()
  {
    this.c=this.a/this.b;
  }
  
  
 
}
