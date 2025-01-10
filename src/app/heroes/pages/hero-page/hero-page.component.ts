import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-hero-page',
  imports: [],
  template: `<p>hero-page works!</p>`,
  styleUrl: './hero-page.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeroPageComponent { }
