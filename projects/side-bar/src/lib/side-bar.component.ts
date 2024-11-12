import { Component, input, output } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

export enum TitleColor {
  red = 'text-red-500',
  green = 'text-green-500',
  blue = 'text-blue-500',
  purple = 'text-purple-500',
}

@Component({
  selector: 'lib-side-bar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './side-bar.component.html',
})
export class SideBarComponent {
  public title = input<string>('Company');
  public subTitle = input<string>('Dashboard');
  public isAuthenticated = input<boolean>(false);
  public titleColor = input<TitleColor>(TitleColor.blue);

  public onSignOut = output();
  public onSignIn = output();
}
