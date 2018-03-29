import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  // templateUrl: './app.component.html',
  template: `<appchild (valueChange)='displayCounter($event)'></appchild>`,
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  displayCounter(count) {
    console.log(count);
}
}
