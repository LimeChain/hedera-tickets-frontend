import { Component, Input } from '@angular/core';

@Component({
  selector: 'searched-event',
  templateUrl: './searched-event.component.html',
  styleUrls: ['./searched-event.component.scss'],
})

export class SearchedEventComponent {
  @Input()
  id: number;

  @Input()
  name: string;

  @Input()
  date: string;

  @Input()
  price: string

  @Input()
  picture: string
}
