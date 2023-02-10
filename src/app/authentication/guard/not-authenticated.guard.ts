import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthenticationService } from '../service/authentication/authentication-service.interface';

@Injectable({
	providedIn: 'root',
})
export class NotAuthenticatedGuard implements CanActivate {
	constructor(private authenticationService: AuthenticationService) {}

	canActivate(
		route: ActivatedRouteSnapshot,
		state: RouterStateSnapshot
	): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
		return !this.authenticationService.isLoggedIn();
	}
}
