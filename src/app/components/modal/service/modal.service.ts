import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';


@Injectable({
	providedIn: 'root'
})
export class ModalService {
	public dialogObservable$!: Observable<any>;
	private dialogSubject: Subject<any> = new Subject<any>();

	constructor(private modal: MatDialog) {
		this.dialogObservable$ = this.dialogSubject.asObservable();
	}


	create() {

	}
}
