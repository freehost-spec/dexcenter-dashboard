import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  private subject = new Subject<any>();

  constructor() { }

  setData(data: any) {
    this.subject.next({ data });
  }

  getData(): Observable<any> {
    return this.subject.asObservable();
  }
}


