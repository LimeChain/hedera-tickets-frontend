import { Component, OnInit, Inject, forwardRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Globals } from '../globals';

@Component({
  selector: 'booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.scss'],
})
export class BookingComponent implements OnInit {
  id: number;
  event: any;

  private eventsList: any;
  private sub: any;

  constructor(private route: ActivatedRoute, @Inject(forwardRef(() => Globals)) public events: Globals) { }

  ngOnInit() {
    this.eventsList = this.events.events;
    this.sub = this.route.params.subscribe(params => {
      this.id = +params['id']; // (+) converts string 'id' to a number

      // In a real app: dispatch action to load the details here.
    });

    this.event = this.eventsList.find(e => e.id = this.id);
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
