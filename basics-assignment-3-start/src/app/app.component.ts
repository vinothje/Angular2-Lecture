import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  count: number = 1;
  notes: any = [];
  toggle: boolean = true;

  displayDetails() {
    this.notes.push(this.count++);
    this.toggle = !this.toggle;
  }

  displayText() {
    return this.toggle;
  }

  getColor() {
    return this.count > 5 ? "blue" : "transparent";
  }
}
