import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MyEventsPage } from './my-events.page';
import { BookingComponent } from '../booking/booking.component';

const routes: Routes = [
  {
    path: '',
    component: MyEventsPage
  },
  {
    path: 'booking/:id',
    component: BookingComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MyEventsPageRoutingModule { }
