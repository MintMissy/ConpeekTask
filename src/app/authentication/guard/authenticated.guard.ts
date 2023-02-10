import { Injectable } from '@angular/core';
import { CanMatch, Route, UrlSegment, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthenticationService } from '../service/authentication/authentication-service.interface';

@Injectable({
	providedIn: 'root',
})
export class AuthenticatedGuard implements CanMatch {
	constructor(private authenticationService: AuthenticationService) {}

	canMatch(
		route: Route,
		segments: UrlSegment[]
	): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
		return this.authenticationService.isLoggedIn();
	}
}
