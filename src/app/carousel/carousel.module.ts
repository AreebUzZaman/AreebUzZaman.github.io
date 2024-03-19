import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselComponent } from './carousel.component';
import {provideClientHydration} from '@angular/platform-browser';

@NgModule({
  declarations: [],
  providers: [provideClientHydration()],
  imports: [
    CommonModule,CarouselComponent
  ],
  exports:[]
})
export class CarouselModule { }
