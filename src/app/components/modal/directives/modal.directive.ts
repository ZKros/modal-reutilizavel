import { ContentChild, Directive, Input } from '@angular/core';
import { ModalContentDirective } from './modal-content.directive';
import { ModalHeaderDirective } from './modal-header.directive';
import { ModalTitleDirective } from './modal-title.directive';

@Directive({
	selector: '[appModal]'
})
export class ModalDirective {
	@Input() title: string = ""

	@ContentChild(ModalContentDirective)
	content!: ModalContentDirective

	@ContentChild(ModalTitleDirective)
	customTitle!: ModalTitleDirective

	@ContentChild(ModalHeaderDirective)
	customHeader!: ModalHeaderDirective
}
