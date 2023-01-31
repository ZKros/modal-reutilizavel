import { Component } from "@angular/core";
import { ModalService } from "../service/service.service";

@Component({
	selector: 'app-modal-header',
	template: `
			<div class="modal-header">
			<ng-content></ng-content>
			<button type="button" (click)="close()">
				<i class="ri-close-line"></i>
			</button>
		</div>
	`
})

export class ModalHeaderComponent {

	constructor(private service: ModalService) { }

	close = () => this.service.close();

}