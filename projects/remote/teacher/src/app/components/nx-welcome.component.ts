import { Component, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-nx-welcome',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  template: `<h1>
    This is the remote app {{ 'login.username' | translate }}
  </h1>`,
  styles: [],
  encapsulation: ViewEncapsulation.None,
})
export class NxWelcomeComponent {}
