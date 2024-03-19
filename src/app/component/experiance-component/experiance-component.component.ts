import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-experiance-component',
  standalone: true,
  imports:[CommonModule],
  templateUrl: './experiance-component.component.html',
  styleUrl: './experiance-component.component.css'
})
export class ExperianceComponentComponent {
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
