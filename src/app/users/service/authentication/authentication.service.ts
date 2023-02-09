import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthenticationService } from './authentication-service.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationServiceImpl implements AuthenticationService  {
	constructor(private httpClient: HttpClient) {}
}
