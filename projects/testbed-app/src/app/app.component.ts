import { Component, signal } from '@angular/core';

import { SideBarComponent, TitleColor } from 'side-bar';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [SideBarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  public title = 'testbed-app';
  public TitleColor = TitleColor;
  public isAuthenticated = signal(true);
}
