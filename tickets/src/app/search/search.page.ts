import { Component, OnInit, Input, Inject, forwardRef, ɵSWITCH_VIEW_CONTAINER_REF_FACTORY__POST_R3__ } from '@angular/core';
import { Globals } from '../globals';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {
  searchedEvents: any;

  private eventsList: any;
  private sub: any;

  constructor(@Inject(forwardRef(() => Globals)) public events: Globals, private dataService: DataService) {
    this.eventsList = this.events.events;
  }

  ngOnInit() {
    this.sub = this.dataService.data.subscribe(data => {
      this.getEventsFromSearch(data);
    });
  }

  getEventsFromSearch(value: any) {
    console.log(value);
    this.searchedEvents = this.eventsList.filter(e => e.name.includes(value));
    console.log(this.searchedEvents)
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
