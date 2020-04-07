import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    
  title = 'begin-app';
  ngOnInit(): void{
    this.addNumber(3,3);
    
  }
  addNumber(one,two){
    console.log(one*two)
  }
}
