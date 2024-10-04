import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NxWelcomeComponent } from './nx-welcome.component';
import { TranslateModule } from '@ngx-translate/core';
import { translationService } from '@shreylearnings/common';

@Component({
  standalone: true,
  imports: [NxWelcomeComponent, RouterModule, TranslateModule],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'gradebook-host';
  /**
   *
   */
  constructor(private ts: translationService) {}
}
