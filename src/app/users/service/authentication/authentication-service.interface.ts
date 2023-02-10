import { Observable } from "rxjs";
import { LoginCredentials } from "../../model/user.model";

export type NonceResponse = {
	nonce: string;
}
export type LoginResponse = {};

export abstract class AuthenticationService {
	abstract getNonce(credentials: LoginCredentials): Observable<NonceResponse>;

	abstract login(credentials: LoginCredentials, nonce: string): Observable<LoginResponse>;

	abstract getToken(): string | null;
}
