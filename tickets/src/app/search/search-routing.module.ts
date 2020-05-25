import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SearchPage } from './search.page';
import { BookingComponent } from '../booking/booking.component';

const routes: Routes = [
  {
    path: '',
    component: SearchPage
  },
  {
    path: '/booking/:id',
    component: BookingComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SearchPageRoutingModule { }
