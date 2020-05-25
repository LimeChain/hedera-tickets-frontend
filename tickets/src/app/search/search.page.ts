import { Component, Inject, forwardRef } from '@angular/core';
import { Globals } from '../globals';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage {
  searchedEvents: any;

  private eventsList: any;
  private sub: any;

  constructor(@Inject(forwardRef(() => Globals)) public events: Globals, private dataService: DataService) {
    this.eventsList = this.events.events;

    this.sub = this.dataService.data.subscribe(data => {
      this.getEventsFromSearch(data);
    });
  }

  getEventsFromSearch(value: any) {
    this.searchedEvents = this.eventsList.filter(e => e.name.includes(value));
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
