import { Component } from '@angular/core';
import { HeaderComponent } from './ui/shared/header/header.component';
import { FooterComponent } from './ui/shared/footer/footer.component';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzStepsModule } from 'ng-zorro-antd/steps';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { DataInversionComponent } from './ui/pages/content/pages/data-inversion/data-inversion.component';
import { NzSpaceModule } from 'ng-zorro-antd/space';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { DataParticipeComponent } from './ui/pages/content/pages/data-participe/data-participe.component';
import { DataCuentasBancariasComponent } from "./ui/pages/content/pages/data-cuentas-bancarias/data-cuentas-bancarias.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    HeaderComponent,
    FooterComponent,
    DataInversionComponent,
    NzGridModule,
    NzStepsModule,
    NzIconModule,
    NzSpaceModule,
    NzButtonModule,
    DataParticipeComponent,
    DataCuentasBancariasComponent
],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'onboarding';
  index = 0;

  cambiar(e: any) {
    console.log(e);
    this.index = e;
  }

  retroceder() {
    this.index -= 1;
  }
  avanzar() {
    this.index += 1;
  }
}
