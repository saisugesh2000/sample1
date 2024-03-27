import { Component } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-newabout',
  templateUrl: './newabout.component.html',
  styleUrl: './newabout.component.css'
})
export class NewaboutComponent {
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
