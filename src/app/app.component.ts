import { Component } from '@angular/core';
import { HeaderComponent } from './ui/shared/header/header.component';
import { NavigationComponent } from './ui/shared/navigation/navigation.component';
import { FooterComponent } from './ui/shared/footer/footer.component';
import { DataParticipeComponent } from "./ui/pages/content/pages/data-participe/data-participe.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, NavigationComponent, FooterComponent, DataParticipeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'onboarding';
}
