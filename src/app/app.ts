import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TaskbarComponent } from './features/taskbar/taskbar.component';
import { TranslateService } from '@ngx-translate/core';
import { WindowsGeneratorComponent } from './features/windows-generator/windows-generator.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, TaskbarComponent, WindowsGeneratorComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  private translate = inject(TranslateService);

  constructor() {
    this.translate.addLangs(['pl', 'en']);
    this.translate.use('en');
  }
}
