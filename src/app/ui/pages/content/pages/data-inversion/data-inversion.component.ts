import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzSpaceModule } from 'ng-zorro-antd/space';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzFormLayoutType, NzFormModule } from 'ng-zorro-antd/form';
import { NzSelectModule } from 'ng-zorro-antd/select';

@Component({
  selector: 'app-data-inversion',
  standalone: true,
  imports: [CommonModule,NzSpaceModule,NzGridModule,NzIconModule, NzButtonModule,NzCardModule,NzInputModule,NzFormModule,NzSelectModule],
  templateUrl: './data-inversion.component.html',
  styleUrl: './data-inversion.component.scss',
})
export class DataInversionComponent implements OnInit {

  ngOnInit(): void {}

  elegirTipoParticipe(tipo_participe:number){
    console.log(tipo_participe);
  }

  elegirTipoMoneda(tipo_moneda:number){
    console.log(tipo_moneda);
  }
}
