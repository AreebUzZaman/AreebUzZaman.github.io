import { RouterModule, Routes } from '@angular/router';
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
import { HomeComponent } from './component/home/home.component';
import {MatTabsModule} from '@angular/material/tabs';
import { MatGridListModule } from '@angular/material/grid-list';
import { Component, NgModule } from '@angular/core';


export const routes: Routes = [

    //{title : 'GIAN | HOME BASIC',path: '' , redirectTo: '/Home', pathMatch:'full'},
    { path: '', redirectTo: '/Home', pathMatch: 'full' },
    //{title : 'GIAN | HOME not basic',path: '' , component : HomeComponent},
    { path: 'Home', component: HomeComponent },
    //{title : 'GIAN | HOME BASIC',path: 'Home' , component : HomeComponent},
    {title : 'GIAN | Header', path:'header',component: BodyHeaderComponent},
    {title : 'GIAN | EDUCATION',path:'EDUCATION',component: EducationComponentComponent},
    {title : 'GIAN | SKILLS',path:'SKILLS',component: SkillComponentComponent},
    {title : 'GIAN | PROFILE',path:'EXPERIENCE',component: ExperianceComponentComponent},
    {title : 'GIAN | PROFILE',path:'PROFILE',component: ProfileComponent},
    {title : 'GIAN | PORTFOLIO',path:'PORTFOLIO',component: PortfolioComponent},
    {title : 'GIAN | CLIENTS',path:'CLIENTS',component: ClientComponent},
    {title : 'GIAN | CONTACT',path:'CONTACT',component: ContactComponent}

];
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }
