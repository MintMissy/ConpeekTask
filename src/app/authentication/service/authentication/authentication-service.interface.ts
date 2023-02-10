import { Observable } from 'rxjs';

export type LoginCredentials = {
	email: string;
	password: string;
};

export type NonceResponse = {
	nonce: string;
};
export type LoginResponse = {};

export abstract class AuthenticationService {
	abstract getNonce(credentials: LoginCredentials): Observable<NonceResponse>;

	abstract login(credentials: LoginCredentials, nonce: string): Observable<LoginResponse>;

	abstract logout(): Observable<void>;

	abstract getToken(): string | null;
}
