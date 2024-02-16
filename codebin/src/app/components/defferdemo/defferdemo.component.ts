import { Component } from '@angular/core';
import { HeavyComponent } from '../heavy/heavy.component';

@Component({
  selector: 'app-defferdemo',
  standalone: true,
  imports: [HeavyComponent],
  templateUrl: './defferdemo.component.html',
  styleUrl: './defferdemo.component.css'
})
export class DefferdemoComponent {

}
