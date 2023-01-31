import { Component } from "@angular/core";

@Component({
	selector: 'app-modal-content',
	template: `
			<div class="modal-body">
					<ng-content></ng-content>
			</div>
`
})
export class ModalContentComponent { }
