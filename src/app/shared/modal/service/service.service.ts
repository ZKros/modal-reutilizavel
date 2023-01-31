import { Injectable } from '@angular/core';
import { ComponentType } from '@angular/cdk/overlay';
import { IModalConfig } from '../interface/modal.interface';

@Injectable({
	providedIn: 'root'
})
export class ModalService {

	constructor() { }


	open<T>(ref: string | ComponentType<T>, settings?: IModalConfig) {

	}

	close(data?:any){
		
	}
}
