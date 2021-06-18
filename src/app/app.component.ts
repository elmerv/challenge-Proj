import { Component } from '@angular/core';
import { ArrayComponent } from './array/array.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  arrComp: ArrayComponent = new ArrayComponent(); 
  title = 'challenge-Proj';
}

function addToList(){ 
  let appComp = new AppComponent(); 
  appComp.arrComp.ListAdd("hello"); 
}