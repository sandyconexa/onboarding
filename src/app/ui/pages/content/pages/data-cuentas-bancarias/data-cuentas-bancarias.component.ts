import { Component } from '@angular/core';
import { NzFormLayoutType, NzFormModule } from 'ng-zorro-antd/form';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzSpaceModule } from 'ng-zorro-antd/space';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzInputModule } from 'ng-zorro-antd/input';


@Component({
  selector: 'app-data-cuentas-bancarias',
  standalone: true,
  imports: [ NzFormModule, NzGridModule, NzSpaceModule, NzSelectModule, NzInputModule ],
  templateUrl: './data-cuentas-bancarias.component.html',
  styleUrl: './data-cuentas-bancarias.component.scss'
})
export class DataCuentasBancariasComponent {





}
