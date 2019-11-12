import { Injectable } from '@angular/core';
import {
	HttpEvent, HttpInterceptor, HttpHandler, HttpRequest
} from '@angular/common/http';
import { environment } from '../../environments/environment';

import { Observable } from 'rxjs';

/** Pass untouched request through to the next request handler. */
@Injectable()
export class ApiUrlInterceptor implements HttpInterceptor {

	private static apiUrl = environment.apiUrl;

	intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
		const clonedReq = req.clone({
			url: ApiUrlInterceptor.apiUrl + req.url,
			withCredentials: true
		});

		return next.handle(clonedReq);
	}
}
