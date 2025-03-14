import { Component } from '@angular/core';
import { HeaderComponent } from './ui/shared/header/header.component';
import { NavigationComponent } from './ui/shared/navigation/navigation.component';
import { FooterComponent } from './ui/shared/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ HeaderComponent, NavigationComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'onboarding';
}
