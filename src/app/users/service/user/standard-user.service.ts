import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { StandardUserService } from './users-service.interface';

@Injectable()
export class StandardUserServiceImpl implements StandardUserService {
	constructor(private httpClient: HttpClient) {}
}
