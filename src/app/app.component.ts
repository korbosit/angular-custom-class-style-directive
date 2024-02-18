import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ClassDirective } from './CustomDirectives/class.directive';
import { StyleDirective } from './CustomDirectives/style.directive';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ClassDirective, StyleDirective],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'angular-custom-class-style-directive';

  active: boolean = false;
}
