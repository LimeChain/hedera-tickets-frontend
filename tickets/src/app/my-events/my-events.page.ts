import { Component, OnInit, forwardRef, Inject } from '@angular/core';
import { Globals } from '../globals';

@Component({
  selector: 'app-my-events',
  templateUrl: './my-events.page.html',
  styleUrls: ['./my-events.page.scss'],
  providers: [Globals]
})
export class MyEventsPage implements OnInit {
  constructor(@Inject(forwardRef(() => Globals)) public events: Globals) { }

  ngOnInit() {
    this.events = this.events.events;
  }

}
