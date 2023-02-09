import { Injectable } from '@angular/core';
import shajs from 'sha.js';
import { EncryptService } from './encrypt-service.interface';

@Injectable()
export class Sha256EncryptService implements EncryptService {
	encrypt(string: string): string {
		return shajs('sha256').update(string).digest('hex');
	}
}
