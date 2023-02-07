import { Directive, TemplateRef } from '@angular/core';

@Directive({
	selector: '[appModalTitle]'
})
export class ModalTitleDirective {

	constructor(public templateRef: TemplateRef<any>) { }

}
