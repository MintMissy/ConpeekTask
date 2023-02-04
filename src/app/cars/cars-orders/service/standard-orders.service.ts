import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { StandardOrdersService } from './orders-service.interface';

@Injectable()
export class StandardOrdersServiceImpl implements StandardOrdersService {
	constructor(private httpClient: HttpClient) {}
}
