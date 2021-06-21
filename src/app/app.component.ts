import { Component } from '@angular/core';
import { ArrayComponent } from './array/array.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  val : String; 

  arrComp: ArrayComponent = new ArrayComponent(); 
  title = 'challenge-Proj';

  constructor(){
    this.val = '';
  }

addToList(){ 
  this.arrComp.ListAdd(this.val); 
  console.log(this.arrComp.list);
  this.val = '';
}
}
