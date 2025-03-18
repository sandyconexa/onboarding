import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzStepsModule } from 'ng-zorro-antd/steps';
import { NzTimelineModule } from 'ng-zorro-antd/timeline';
import { NzSpaceModule } from 'ng-zorro-antd/space';

@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [NzStepsModule,NzTimelineModule ,NzGridModule,NzSpaceModule, CommonModule],
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.scss'

})
export class NavigationComponent {

}
