import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EncryptService } from './service/encrypt/encrypt-service.interface';
import { Sha256EncryptService } from './service/encrypt/sha256-encrypt.service';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
	providers: [{ provide: EncryptService, useClass: Sha256EncryptService }],

})
export class AuthenticationModule { }
