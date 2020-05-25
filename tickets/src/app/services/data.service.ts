import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private dataSubject: Subject<Object>;
  public data: Observable<Object>;

  constructor() {
    this.dataSubject = new Subject<Object>();
    this.data = this.dataSubject.asObservable();
  }

  addData(value: any) {
    this.dataSubject.next(value);
  }
}
