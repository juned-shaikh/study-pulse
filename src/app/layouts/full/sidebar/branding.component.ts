import { Component } from '@angular/core';

@Component({
  selector: 'app-branding',
  template: `
    <div class="branding" style="display:flex;justify-content:center;align-items:center">
      <a href="/">
        <img
          src="assets/images/logos/favicon.png"
          class="align-middle mt-6"
          alt="logo"
        />
      </a>
      <h2>STUDY PULSE</h2>
    </div>
  `,
})
export class BrandingComponent {
  constructor() {}
}
