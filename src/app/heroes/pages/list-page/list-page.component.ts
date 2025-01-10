import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-list-page',
  imports: [],
  template: `<p>list-page works!</p>`,
  styleUrl: './list-page.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListPageComponent { }
