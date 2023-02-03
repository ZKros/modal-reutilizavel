import { Injectable, Type } from '@angular/core';
import { Subject } from 'rxjs';
import { ModalComponent } from '../modal.component';

@Injectable({
	providedIn: 'root'
})
export class ModalService {
	private modals: ModalComponent[] = [];
	protected onClosed = new Subject<any>();

	constructor() { }

	open(id: number) {
		const modal = this.modals.find(x => x.id === id);

		if (!modal) {
			throw new Error(`modal ${id} não foi encontrado`);
		}

		modal.open();
	}

	close(data?: any) {
		const modal = this.modals.find(x => x.isOpen);
		modal?.close();

		this.onClosed.next(data)
	}

	beforeClosed = (): Subject<any> => this.onClosed;

	add(modal: ModalComponent) {
		if (!modal.id || this.modals.find(x => x.id === modal.id)) {
			throw new Error('O modal precisa de um id único');
		}

		this.modals.push(modal);
	}

	remove(modal: ModalComponent) {
		this.modals = this.modals.filter(x => x === modal);
	}


}
