import { Component } from '@angular/core';
import {MatTabsModule} from '@angular/material/tabs';
import {MatListModule} from '@angular/material/list';
import { MatGridListModule } from '@angular/material/grid-list';

@Component({
  selector: 'app-education-component',
  standalone: true,
  imports: [MatTabsModule,MatGridListModule,MatListModule],
  templateUrl: './education-component.component.html',
  styleUrl: './education-component.component.css'
})
export class EducationComponentComponent {
  urls=[];
  imageUrls: string[] = [
    './assets/images/portfolio/p1.jpg',
    'https://example.com/image2.jpg',
    'https://example.com/image3.jpg',
    // Add more image URLs as needed
  ];
}


