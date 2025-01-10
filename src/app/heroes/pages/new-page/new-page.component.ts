import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-new-page',
  imports: [],
  template: `<p>new-page works!</p>`,
  styleUrl: './new-page.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NewPageComponent { }
