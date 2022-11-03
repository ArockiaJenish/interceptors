import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SimpleService {

  isLoading = new Subject<boolean>();

  constructor(private http: HttpClient) { }

  url: string = 'https://jsonplaceholder.typicode.com/todos';

  getDetails(){
    return this.http.get(this.url);
  }

  show(){
    this.isLoading.next(true);
  }

  hide(){
    this.isLoading.next(false);
  }
}
