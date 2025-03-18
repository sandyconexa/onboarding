import { Component } from '@angular/core';
import { HeaderComponent } from './ui/shared/header/header.component';
import { FooterComponent } from './ui/shared/footer/footer.component';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzStepsModule } from 'ng-zorro-antd/steps';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { DataParticipeComponent } from "./ui/pages/content/pages/data-participe/data-participe.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, NzGridModule, NzStepsModule, NzIconModule, DataParticipeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'onboarding';
  index = 0;

  cambiar(e:any){
    console.log(e);
    this.index = e;
  }
}
