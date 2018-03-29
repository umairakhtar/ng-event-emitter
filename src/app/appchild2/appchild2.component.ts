import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'appchild2',
  // templateUrl: './appchild2.component.html',
  template: `
      Say {{childMessage}}
  `,
  styleUrls: ['./appchild2.component.scss']
})
export class Appchild2Component implements OnInit {
  @Input() childMessage: string;

  constructor() { }
  
  ngOnInit() {
  }

}
