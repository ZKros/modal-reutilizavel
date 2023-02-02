import {
	animate, style, transition, trigger
} from '@angular/animations';
import { Component, ElementRef, Input, OnInit } from '@angular/core';
import { ModalService } from './service/modal.service';
import { ModalSize } from './types/size-types';

@Component({
	selector: 'app-modal',
	templateUrl: 'modal.component.html',
	styleUrls: ['modal.component.scss'],
	animations: [
		trigger('overlay', [
			transition(':enter', [
				style({ opacity: 0 }),
				animate('250ms', style({ opacity: .5 })),
			]),
			transition(':leave', [
				animate('500ms', style({ opacity: 0 }))
			])
		]),
		trigger('modal', [
			transition(':enter', [
				style({ top: -999 }),
				animate('500ms', style({ top: '50%' })),
			]),
			transition(':leave', [
				animate('500ms', style({ top: -999 }))
			])
		]),
	]
})
export class ModalComponent implements OnInit {
	@Input() size: ModalSize = 'md'
	@Input() id?: string;
	public isOpen = false;
	private element: any;

	constructor(private modal: ModalService, private el: ElementRef) {
		this.element = el.nativeElement;
	}

	ngOnInit() {
		this.modal.add(this);
		console.log(this.modal)
	}

	ngOnDestroy() {
		this.modal.remove(this);
		this.element.remove()
	}

	open() {
		this.element.style.display = 'block';
		this.isOpen = true;
	}

	close() {
		this.element.style.display = 'none';
		this.isOpen = false;
	}
}