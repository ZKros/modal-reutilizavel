import { ContentChild, Directive } from '@angular/core';
import { ModalContentDirective } from './modal-content.directive';
import { ModalHeaderDirective } from './modal-header.directive';
import { ModalTitleDirective } from './modal-title.directive';

@Directive({
	// eslint-disable-next-line @angular-eslint/directive-selector
	selector: 'modal'
})
export class ModalDirective {
	@ContentChild(ModalContentDirective)
	content!: ModalContentDirective

	@ContentChild(ModalTitleDirective)
	title!: ModalTitleDirective

	@ContentChild(ModalHeaderDirective)
	customHeader!: ModalHeaderDirective
}
