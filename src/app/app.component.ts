import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-root',
  template: `<main>
    <header class="brand-name">
      <img
        src="/assets/logo.svg"
        alt="logo"
        class="brand-logo"
        aria-hidden="true"
      />

      <section class="content">
        <router-outlet></router-outlet>
      </section>
    </header>
  </main> `,
  styleUrls: ['./app.component.css'],
  imports: [RouterOutlet],
})
export class AppComponent {
  title = 'homes';
}
