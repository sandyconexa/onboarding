import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-inversion',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './data-inversion.component.html',
  styleUrl: './data-inversion.component.scss',
})
export class DataInversionComponent implements OnInit {

  ngOnInit(): void {}
}
