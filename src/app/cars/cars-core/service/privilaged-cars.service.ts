import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PrivilegedCarsService } from './cars-service.interface';

@Injectable({
  providedIn: 'root'
})
export class PrivilegedCarsServiceImpl implements PrivilegedCarsService {
	constructor(private httpClient: HttpClient) {}
}
