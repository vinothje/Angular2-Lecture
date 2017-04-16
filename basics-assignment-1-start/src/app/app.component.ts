import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  disable_button: boolean = true;
  username: string = '';

  reset_username() {
    this.username = '';
    this.disable_button = true;
  }

  check_username() {
    if(this.username != null) {
      this.disable_button = false;
    } else {
      this.disable_button = true;
    }
  }
}
