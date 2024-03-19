import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { RouterLinkActive } from '@angular/router';
import { RouterOutlet } from '@angular/router';




@Component({
  selector: 'app-body-header',
  standalone: true,
  imports: [RouterOutlet,RouterLink,RouterLinkActive],
  templateUrl: './body-header.component.html',
  styleUrl: './body-header.component.css'
})
export class BodyHeaderComponent {

}
