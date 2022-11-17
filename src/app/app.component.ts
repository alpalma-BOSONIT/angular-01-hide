import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  componentIsVisible: boolean = false;

  toggleVisibility(event: boolean): void {
    this.componentIsVisible = event;
  }
}
