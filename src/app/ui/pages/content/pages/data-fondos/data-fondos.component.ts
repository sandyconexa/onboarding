import { Component } from '@angular/core';
import { NzFormLayoutType, NzFormModule } from 'ng-zorro-antd/form';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzSpaceModule } from 'ng-zorro-antd/space';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzRadioModule } from 'ng-zorro-antd/radio';


@Component({
  selector: 'app-data-fondos',
  standalone: true,
  imports: [ NzFormModule, NzGridModule, NzSpaceModule, NzSelectModule, NzInputModule, NzRadioModule ],
  templateUrl: './data-fondos.component.html',
  styleUrl: './data-fondos.component.scss'
})
export class DataFondosComponent {

}
