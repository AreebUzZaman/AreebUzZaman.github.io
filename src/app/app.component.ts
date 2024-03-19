import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BodyHeaderComponent } from './component/body-header/body-header.component';
import { BodySectionComponent } from './component/body-section/body-section.component';
import { FullRemainingBodyComponent } from './component/full-remaining-body/full-remaining-body.component';
import { HeaderComponent } from './component/header/header.component';
import { AboutmeComponent } from './component/aboutme/aboutme.component';
import { EducationComponentComponent } from './component/education-component/education-component.component';
import { SkillComponentComponent } from './component/skill-component/skill-component.component';
import { ExperianceComponentComponent } from './component/experiance-component/experiance-component.component';
import { ProfileComponent } from './component/profile/profile.component';
import { PortfolioComponent } from './component/portfolio/portfolio.component';
import { ClientComponent } from './component/client/client.component';
import { ContactComponent } from './component/contact/contact.component';
import { FooterComponent } from './component/footer/footer.component';
import { RouterLink } from '@angular/router';
import { RouterLinkActive } from '@angular/router';
import {MatTabsModule} from '@angular/material/tabs';
import {MatListModule} from '@angular/material/list';
import { MatGridListModule } from '@angular/material/grid-list';
import { CarouselComponent } from './carousel/carousel.component';
import { HomeComponent } from './component/home/home.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterLink,
    RouterLinkActive,
    RouterOutlet,
    BodyHeaderComponent,
    BodySectionComponent,
    FullRemainingBodyComponent,
    HeaderComponent,AboutmeComponent,
    EducationComponentComponent,
    SkillComponentComponent,
    ExperianceComponentComponent,
    ProfileComponent,
    PortfolioComponent,
    ClientComponent,
    ContactComponent,
    FooterComponent,
    MatTabsModule,
    MatListModule,
    MatGridListModule,
    CarouselComponent,HomeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  title = 'website new';
  // images = [
  //   {
  //     imageSrc: './assets/images/carousel/Featured_Slide_Work00001.jpg',
  //     imageAlt: 'nature1',
  //   },
  //   {
  //     imageSrc: './assets/images/carousel/Featured_Slide_Work00002.jpg',
  //     imageAlt: 'nature2',
  //   },
  //   {
  //     imageSrc: './assets/images/carousel/Featured_Slide_Work00003.png',
  //     imageAlt: 'nature1',
  //   },
  //   {
  //     imageSrc: './assets/images/carousel/Featured_Slide_Work00004.png',
  //     imageAlt: 'nature1',
  //   },
  //   {
  //     imageSrc: './assets/images/carousel/Featured_Slide_Work00005.png',
  //     imageAlt: 'nature1',
  //   },
  //   {
  //     imageSrc: './assets/images/carousel/Featured_Slide_Work00006.jpg',
  //     imageAlt: 'nature1',
  //   },
  //   {
  //     imageSrc: './assets/images/carousel/Featured_Slide_Work00007.png',
  //     imageAlt: 'nature1',
  //   },
  //   {
  //     imageSrc: './assets/images/carousel/Featured_Slide_Work00008.png',
  //     imageAlt: 'nature1',
  //   },
  //   {
  //     imageSrc: './assets/images/carousel/Featured_Slide_Work00009.png',
  //     imageAlt: 'nature1',
  //   }
    
  // ]
  
  images = [
    {
   //   imageSrc:'./assets/images/carousel/c1.png',
   imageSrc:'./assets/images/carousel/Another-Artist-6-2048x2048-1-1600x1600-1.jpg',   
   imageAlt: 'nature1',
    },
    {
      imageSrc:'./assets/images/carousel/66f1bd35837a25f07b32893d8e72d531.jpg',
      imageAlt: 'nature2',
    },
    {
      imageSrc:'./assets/images/carousel/06_model.jpg',
      imageAlt: 'person1',
    }
  ]
}




