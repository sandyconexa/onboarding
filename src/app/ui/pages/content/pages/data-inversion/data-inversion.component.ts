import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzSpaceModule } from 'ng-zorro-antd/space';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzFormLayoutType, NzFormModule } from 'ng-zorro-antd/form';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { InversionForm } from '../../../../core/inversion.form';
import { AsesorForm } from '../../../../core/asesor.form';

@Component({
  selector: 'app-data-inversion',
  standalone: true,
  imports: [
    CommonModule,
    NzSpaceModule,
    NzGridModule,
    NzIconModule,
    NzButtonModule,
    NzCardModule,
    NzInputModule,
    NzFormModule,
    NzSelectModule,
    ReactiveFormsModule,
  ],
  templateUrl: './data-inversion.component.html',
  styleUrl: './data-inversion.component.scss',
})
export class DataInversionComponent implements OnInit {
  @Input()
  inversion!: FormGroup<InversionForm>;

  @Input()
  asesor!: FormGroup<AsesorForm>;

  ngOnInit(): void {
    // this.inversion.controls.modalidad_inversion.setValue(1);
  }

  elegirTipoParticipe(tipo_participe: number) {
    this.inversion.controls.tipo_participe.setValue(tipo_participe);
    
    console.log(tipo_participe);
  }
  
  elegirTipoMoneda(tipo_moneda: number) {
    this.inversion.controls.moneda_inversion.setValue(tipo_moneda);
    console.log(tipo_moneda);
  }
}
