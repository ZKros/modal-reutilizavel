import { ContentChild, Directive, Input } from '@angular/core';
import { IconPosition } from '../types/icon-position.type';
import { ModalContentDirective } from './modal-content.directive';
import { ModalHeaderDirective } from './modal-header.directive';

@Directive({
	// eslint-disable-next-line @angular-eslint/directive-selector
	selector: 'modal'
})
export class ModalDirective {
	@Input() title: string = ''
	@Input() subTitle: string = ''
	@Input() icon: string = ''
	@Input() iconPosition: IconPosition = 'right'

	@ContentChild(ModalContentDirective)
	content!: ModalContentDirective

	@ContentChild(ModalHeaderDirective)
	customHeader!: ModalHeaderDirective
}
