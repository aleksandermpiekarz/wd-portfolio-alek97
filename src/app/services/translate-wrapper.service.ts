import { inject, Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({ providedIn: 'root' })
export class translateWrapperService {
  private translate = inject(TranslateService);

  public getCurrentLanguage(): string {
    return this.translate.getCurrentLang();
  }

  public toggleAndReturnLanguage(): string {
    const goToLanguage = this.translate.getCurrentLang() === 'pl' ? 'en' : 'psl';

    this.translate.use(goToLanguage);

    return goToLanguage;
  }
}
