import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-array',
  templateUrl: './array.component.html',
  styleUrls: ['./array.component.css']
})
export class ArrayComponent implements OnInit {
  public list: string[] = [];
  constructor() {
    this.list = [];
  }
 
  ngOnInit(): void {

  }
  ListAdd(word:string) {
    this.list.push(word);
  }
}
