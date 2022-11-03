import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { SimpleService } from '../services/simple.service';
import { finalize } from 'rxjs/operators';

@Injectable()
export class SimpleInterceptor implements HttpInterceptor {

  constructor(private simpService: SimpleService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    this.simpService.show();

    return next.handle(request).pipe(
      finalize(() => this.simpService.hide())
    )
  }
}
