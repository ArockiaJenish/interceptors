import { SimpleService } from './services/simple.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private serv: SimpleService){}

  names: any;
  
  OnInit(){
    this.serv.getDetails().subscribe(res => {
      console.log(res);
      this.names = res;
    }, err => console.log(err)
    )
  }

}
