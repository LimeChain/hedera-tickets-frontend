import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MyEventsPageRoutingModule } from './my-events-routing.module';

import { MyEventsPage } from './my-events.page';
import { EventComponent } from '../event/event.component';
import { BookingComponent } from '../booking/booking.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MyEventsPageRoutingModule,
  ],
  declarations: [MyEventsPage, EventComponent, BookingComponent]
})
export class MyEventsPageModule { }
