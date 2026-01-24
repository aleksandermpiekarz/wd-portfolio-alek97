import { Component, computed, inject, signal } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { interval } from 'rxjs';
import { TranslatePipe } from '@ngx-translate/core';
import { translateWrapperService } from '../../services/translate-wrapper.service';
import { TitleCasePipe } from '@angular/common';

@Component({
  selector: 'app-taskbar',
  imports: [TranslatePipe, TitleCasePipe],
  templateUrl: './taskbar.component.html',
  styleUrl: './taskbar.component.scss',
})
export class TaskbarComponent {
  private translateWrapper = inject(translateWrapperService);

  public currentLanguage = signal(this.translateWrapper.getCurrentLanguage());

  public time = computed(() =>
    this.now().toLocaleTimeString('pl-PL', { hour: '2-digit', minute: '2-digit' }),
  );

  private now = signal(new Date());

  constructor() {
    interval(1000)
      .pipe(takeUntilDestroyed())
      .subscribe(() => this.now.set(new Date()));
  }

  public changeLanguage() {
    const newLanguage = this.translateWrapper.toggleAndReturnLanguage();
    this.currentLanguage.set(newLanguage);
  }
}
