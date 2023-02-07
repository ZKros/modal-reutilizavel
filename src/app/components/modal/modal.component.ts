import {
	animate, style, transition, trigger
} from '@angular/animations';
import { Component, ElementRef, Input, OnDestroy, OnInit } from '@angular/core';
import { ModalService } from './service/modal.service';
import { ModalSize } from './types/size-type';

@Component({
	selector: 'modal',
	templateUrl: 'modal.component.html',
	styleUrls: ['modal.component.scss'],
	animations: [
		trigger('overlay', [
			transition(':enter', [
				style({ opacity: 0 }),
				animate('250ms', style({ opacity: .5 })),
			]),
			transition(':leave', [
				animate('250ms', style({ opacity: 0 }))
			])
		]),
		trigger('modal', [
			transition(':enter', [
				style({ top: -999 }),
				animate('500ms', style({ top: '50%' })),
			]),
			transition(':leave', [
				animate('250ms', style({ top: -999 }))
			])
		]),
	]
})
export class ModalComponent implements OnInit, OnDestroy {
	@Input() size: ModalSize = 'md'
	@Input() id?: number;
	public isOpen = false;
	private el: any;

	constructor(private modal: ModalService, element: ElementRef) {
		this.el = element.nativeElement
	}


	ngOnInit() {
		this.modal.add(this);

		document.body.appendChild(this.el);
	}

	ngOnDestroy() {
		this.modal.remove(this);
		this.el.remove();
	}

	open() {
		this.el.style.display = 'block';
		document.body.classList.add('modal-open');
		this.isOpen = true;
	}

	close() {
		this.el.style.display = 'none';
		document.body.classList.remove('modal-open');
		this.isOpen = false;
	}
}