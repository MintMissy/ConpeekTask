import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { LoginCredentials } from '../../model/user.model';
import { EncryptService } from '../encrypt/encrypt-service.interface';
import { AuthenticationService, LoginResponse, NonceResponse } from './authentication-service.interface';

@Injectable({
	providedIn: 'root',
})
export class AuthenticationServiceImpl implements AuthenticationService {
	readonly API_URL = 'https://api-carrental.nightly.conpeek.com/user';

	constructor(private httpClient: HttpClient, private encryptService: EncryptService) {}

	getNonce(credentials: LoginCredentials): Observable<NonceResponse> {
		return this.httpClient.post<NonceResponse>(`${this.API_URL}/login`, { login: credentials.email });
	}

	login(credentials: LoginCredentials, nonce: string): Observable<LoginResponse> {
		let encryptedPassword = this.encryptService.encrypt(credentials.password);
		encryptedPassword = this.encryptService.encrypt(encryptedPassword + nonce);

		const payload = { login: credentials.email, password: encryptedPassword };

		// TODO get token from response
		return this.httpClient
			.post<LoginResponse>(`${this.API_URL}/login`, payload)
			.pipe(tap((response) => this.saveToken('')));
	}

	getToken(): string | null {
		return localStorage.getItem('token');
	}

	saveToken(token: string): void {
		localStorage.getItem('token');
	}
}
