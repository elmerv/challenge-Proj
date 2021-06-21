import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-array',
  templateUrl: './array.component.html',
  styleUrls: ['./array.component.css']
})
export class ArrayComponent implements OnInit {
  public list: String[] = [];
  constructor() {
    this.list = [];
  }
 
  ngOnInit(): void {

  }
  ListAdd(word:String) {
    this.list.push(word);
  }
}
