import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-small-card',
  standalone: false,
  templateUrl: './small-card.component.html',
  styleUrl: './small-card.component.css'
})
export class SmallCardComponent {
  @Input() image: string = '';
  @Input() title_card: string = '';
  @Input() emissor: string = '';
  @Input() data: string = '';
  @Input() title_image: string = '';

}
