import { Component } from '@angular/core';
import { ThemeService } from '../theme.service';
import { DataService } from '../data.service';
@Component({
  selector: 'app-who-are-you',
  templateUrl: './who-are-you.component.html',
  styleUrl: './who-are-you.component.css'
})
export class WhoAreYouComponent {
  demo:any;
  constructor(public dataservice:DataService){
  
  }
  ngOnInit(){
    this.dataservice.getJsonData().subscribe(data=>{
      this.demo=data.welcome
      console.log(this.demo);
    })
  }
  
}
