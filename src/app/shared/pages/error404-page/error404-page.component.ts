import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-error404-page',
  imports: [],
  template: `<p>error404-page works!</p>`,
  styleUrl: './error404-page.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Error404PageComponent { }
