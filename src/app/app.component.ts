import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  showFiller = false;
  centered = false;
  disabled = false;
  unbounded = false;

  radius: number;
  color: string;
}

