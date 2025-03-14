import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NzStepsModule } from 'ng-zorro-antd/steps';

@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [NzStepsModule, CommonModule],
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.scss'

})
export class NavigationComponent {

}
