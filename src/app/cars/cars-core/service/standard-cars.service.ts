import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { StandardCarsService } from './cars-service.interface';

@Injectable({
  providedIn: 'root'
})
export class StandardCarsServiceImpl implements StandardCarsService {
	constructor(private httpClient: HttpClient) {}
}
