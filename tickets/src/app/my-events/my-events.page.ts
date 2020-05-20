import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-events',
  templateUrl: './my-events.page.html',
  styleUrls: ['./my-events.page.scss'],
})
export class MyEventsPage implements OnInit {
  public events = [
    {
      name: 'My event 1',
      date: '31 May 2020',
      price: '5$'
    },
    {
      name: 'My event 2',
      date: '01 June 2020',
      price: '15$'
    },
    {
      name: 'My event 3',
      date: '31 July 2020',
      price: '5.40$'
    },
    {
      name: 'My event 4',
      date: '01 October 2020',
      price: '75$'
    }
  ];

  ngOnInit() {
  }

}
