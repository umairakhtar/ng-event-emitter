import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'appchild',
  template: `<button class='btn btn-primary' (click)="valueChanged()">Click me</button>`,
  styleUrls: ['./appchild.component.scss']
})
export class AppchildComponent implements OnInit {

  @Output() valueChange = new EventEmitter();
    counter = 0;

  constructor() { }
  valueChanged() { 

    this.counter = this.counter + 1;
    this.valueChange.emit(this.counter);
}
  ngOnInit() {
  }

}
