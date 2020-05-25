import { Component, OnInit, forwardRef, Inject } from '@angular/core';
import { Globals } from '../globals';
import { UserService } from '../services/user.services';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-my-events',
  templateUrl: './my-events.page.html',
  styleUrls: ['./my-events.page.scss'],
  providers: [Globals]
})
export class MyEventsPage implements OnInit {
  public userData;
  public userCollectionDataSubscription: Subscription;

  constructor(@Inject(forwardRef(() => Globals)) public events: Globals, public userService: UserService) {
    this.userCollectionDataSubscription = this.userService.userCollectionData.subscribe((userData) => {
      this.userData = userData;
    });
  }

  ngOnInit() {
    this.events = this.events.events;
  }

}
