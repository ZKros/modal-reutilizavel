import { Directive, TemplateRef } from '@angular/core';

@Directive({
	selector: '[appModalHeader]'
})
export class ModalHeaderDirective {

	constructor(public templateRef: TemplateRef<any>) { }

}
