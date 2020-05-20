import { Component, Input } from '@angular/core';

@Component({
  selector: 'event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.scss'],
})
export class EventComponent {
  @Input()
  name: string;

  @Input()
  date: string;

  @Input()
  price: string
}
