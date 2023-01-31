import { Component, Input, OnInit } from '@angular/core';

@Component({
	selector: 'app-modal',
	templateUrl: './modal.component.html',
	styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {
	@Input() ref!: string;
	@Input() data: any;
	@Input() size: string = 'style:';

	constructor() { }

	ngOnInit(): void {
	}

}
