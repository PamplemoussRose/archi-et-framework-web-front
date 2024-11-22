import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'archi-et-framework-web-front';
}

/*
@Component({
  selector: 'app-root',
  imports:[RouterOutlet],
  template: `
    <section (mousedown)="onMouseDown()" (mouseup)="onMouseUp()">
      There's a secret message for you, hover to reveal 👀
      {{ message }}
    </section>
    <button (click)="greet()">bouton</button>
  `,
  standalone: true
})
export class AppComponent {
  message = '';
  greet() {console.log('Hello, there 👋');}

  onMouseDown() {
    this.message = 'Way to go 🚀';
  }
  onMouseUp() {
    this.message = '';
  }
}
*/
