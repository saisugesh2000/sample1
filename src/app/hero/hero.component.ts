import { Component } from '@angular/core';
import { ThemeService } from '../theme.service';
import { DataService } from '../data.service';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {
demo:any;
image: any;
Rightside: any;
constructor(public dataservice:DataService){

}
ngOnInit(){
  this.dataservice.getJsonData().subscribe(data=>{
    this.demo=data.welcome
    console.log(this.demo);
  })
  
}
}
