import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({ providedIn: 'root' })
export class translationService {
  constructor(private ts: TranslateService) {
    this.ts.addLangs(['en', 'de']);
    this.ts.setDefaultLang('en');
  }
}
