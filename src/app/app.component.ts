import { Component } from '@angular/core';
import { HeaderComponent } from './ui/shared/header/header.component';
import { FooterComponent } from './ui/shared/footer/footer.component';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzStepsModule } from 'ng-zorro-antd/steps';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { DataInversionComponent } from './ui/pages/content/pages/data-inversion/data-inversion.component';
import { NzSpaceModule } from 'ng-zorro-antd/space';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzFormModule } from 'ng-zorro-antd/form';

import { DataParticipeComponent } from './ui/pages/content/pages/data-participe/data-participe.component';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { FormularioForm } from './ui/core/formulario.form';
import { InversionForm } from './ui/core/inversion.form';
import { AsesorForm } from './ui/core/asesor.form';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    HeaderComponent,
    FooterComponent,
    DataInversionComponent,
    NzGridModule,
    NzStepsModule,
    NzIconModule,
    NzSpaceModule,
    NzButtonModule,
    NzFormModule,
    DataParticipeComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'onboarding';
  index = 0;

  formulario = new FormGroup<FormularioForm>({
    inversion: new FormGroup<InversionForm>({
      frecuencia_inversion: new FormControl(null,[Validators.required]),
      modalidad_inversion: new FormControl(1,[Validators.required]),
      monto_inversion: new FormControl(0,[Validators.required,Validators.min(0)]),
      plazo_inversion: new FormControl(null,[Validators.required]),
      moneda_inversion: new FormControl(null,[Validators.required]),
      tipo_participe: new FormControl(null,[Validators.required])
    }),
    asesor: new FormGroup<AsesorForm>({
      nombres_asesor: new FormControl(null),
      correo_asesor: new FormControl(null),
      nro_doc_asesor: new FormControl(null),
    }),
  }
  );

  cambiar(e: any) {
    this.index = e;
  }

  retroceder() {
    this.index -= 1;
  }
  avanzar() {
    console.log(this.formulario.controls.inversion.controls.frecuencia_inversion.getRawValue());
    console.log(this.formulario.controls.inversion.controls.modalidad_inversion.getRawValue());
    console.log(this.formulario.controls.inversion.controls.monto_inversion.getRawValue());
    console.log(this.formulario.controls.inversion.controls.plazo_inversion.getRawValue());
    console.log(this.formulario.controls.inversion.controls.moneda_inversion.getRawValue());
    console.log(this.formulario.controls.inversion.controls.tipo_participe.getRawValue());
    
    this.index += 1;
  }
}
