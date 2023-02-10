import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthenticationService } from 'src/app/authentication/service/authentication/authentication-service.interface';

@Injectable()
export class JwtTokenInterceptor implements HttpInterceptor {
	constructor(private authenticationService: AuthenticationService) {}

	intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
		const token = this.authenticationService.getToken();

		if (token === null) {
			return next.handle(request);
		}
		const clonedRequest = request.clone({ setHeaders: { Authorization: token } });

		return next.handle(clonedRequest);
	}
}
