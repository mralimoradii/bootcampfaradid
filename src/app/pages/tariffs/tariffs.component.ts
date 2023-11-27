import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-tariffs',
  standalone: true,
  imports: [CommonModule , RouterOutlet],
  templateUrl: './tariffs.component.html',
  styleUrls: ['./tariffs.component.css']
})
export class TariffsComponent {

}
