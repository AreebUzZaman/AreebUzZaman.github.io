import { Component } from '@angular/core';
import {MatTabsModule} from '@angular/material/tabs';
import { MatGridListModule } from '@angular/material/grid-list';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [MatTabsModule,MatGridListModule],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {
  }
