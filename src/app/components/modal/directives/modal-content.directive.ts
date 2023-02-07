import { Directive, TemplateRef } from '@angular/core';

@Directive({
	selector: '[appModalContent]'
})
export class ModalContentDirective {

	constructor(public templateRef: TemplateRef<any>) { }

}
