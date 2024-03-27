import { Component } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
 data :any[] =[]
  constructor(private dataservice:DataService){
    this.dataservice.getJsonData().subscribe((res: any)=>{
    this.data =res;
    });
  }
}
