import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  // templateUrl: './app.component.html',
  template: `<appchild (valueChange)='displayCounter($event)'></appchild><br>
             <appchild2 [childMessage]="parentMessage"></appchild2>`,
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  parentMessage = "message from parent"
  displayCounter(count) {
    console.log(count);
}

}
