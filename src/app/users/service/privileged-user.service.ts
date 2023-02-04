import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PrivilegedUserService } from './users-service.interface';

@Injectable()
export class PrivilegedUserServiceImpl implements PrivilegedUserService {
	constructor(private httpClient: HttpClient) {}
}
