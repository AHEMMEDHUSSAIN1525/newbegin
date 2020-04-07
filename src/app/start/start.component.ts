import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.css']
})
export class StartComponent implements OnInit {
 titleFromApi;
 counter = 0;
  interval:any;
  ngOnInit(): void {
    // Make an Api call to back end

    // Fetch the response

    // Handle response

    this.titleFromApi="my customer dashboard";

    /*setTimeout(()=>{
      this.titleFromApi="Guest dashboard";
    },3000);*/

    this.interval= setInterval(()=>{
      this.counter++;
      this.listencounter();
    },1000);
  }
  listencounter(){
    if(this.counter===10){
      this.interval.clearinterval();
    }
  }
}
