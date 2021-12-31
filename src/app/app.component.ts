import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'blog';
  displayVal = '';

  // getName(name: string) {
  //   console.log(name)
  // }

  // getValue(v: string) {
  //   this.displayVal = v;

  // }

  show = 'two';
  users = ['a', 'b', 'c', 'd', 'e', 'e']

}
