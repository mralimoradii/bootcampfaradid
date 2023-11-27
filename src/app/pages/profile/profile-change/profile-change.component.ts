import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-profile-change',
  standalone: true,
  imports: [CommonModule,RouterLink],
  templateUrl: './profile-change.component.html',
  styleUrl: './profile-change.component.css'
})
export class ProfileChangeComponent {

}
