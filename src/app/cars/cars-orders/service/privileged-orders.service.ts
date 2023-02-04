import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PrivilegedOrdersService } from './orders-service.interface';

@Injectable()
export class PrivilegedOrdersServiceImpl implements PrivilegedOrdersService {
	constructor(private httpClient: HttpClient) {}
}
