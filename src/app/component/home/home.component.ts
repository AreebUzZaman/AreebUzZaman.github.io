import { Component } from '@angular/core';
import {MatTabsModule} from '@angular/material/tabs';
import {MatListModule} from '@angular/material/list';
import { MatGridListModule } from '@angular/material/grid-list';
import { CommonModule } from '@angular/common';
import { CarouselComponent } from '../../carousel/carousel.component';
import { PortfolioComponent } from '../portfolio/portfolio.component';
import { EducationComponentComponent } from '../education-component/education-component.component';
import { SkillComponentComponent } from '../skill-component/skill-component.component';

// import { CarouselComponent } from './carousel/carousel.component';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MatTabsModule,MatListModule,MatGridListModule,CommonModule,CarouselComponent,PortfolioComponent,EducationComponentComponent,SkillComponentComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  images = [
    {
      imageSrc: './assets/images/carousel/Featured_Slide_Work00001.jpg',
      imageAlt: 'nature1',
    },
    {
      imageSrc: './assets/images/carousel/Featured_Slide_Work00002.jpg',
      imageAlt: 'nature2',
    },
    {
      imageSrc: './assets/images/carousel/Featured_Slide_Work00003.png',
      imageAlt: 'nature1',
    },
    {
      imageSrc: './assets/images/carousel/Featured_Slide_Work00004.png',
      imageAlt: 'nature1',
    },
    {
      imageSrc: './assets/images/carousel/Featured_Slide_Work00005.png',
      imageAlt: 'nature1',
    },
    {
      imageSrc: './assets/images/carousel/Featured_Slide_Work00006.jpg',
      imageAlt: 'nature1',
    },
    {
      imageSrc: './assets/images/carousel/Featured_Slide_Work00007.png',
      imageAlt: 'nature1',
    },
    {
      imageSrc: './assets/images/carousel/Featured_Slide_Work00008.png',
      imageAlt: 'nature1',
    },
    {
      imageSrc: './assets/images/carousel/Featured_Slide_Work00009.png',
      imageAlt: 'nature1',
    }
    
  ]
  id:any='';
  accordion(ids:any)
  {
    if(this.id == ids)
    {
      this.id='';
    }
    else
    {
      this.id=ids;
    }
    
  }
  
}