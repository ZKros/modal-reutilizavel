import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ModalContentDirective } from './directives/modal-content.directive';
import { ModalHeaderDirective } from './directives/modal-header.directive';
import { ModalTitleDirective } from './directives/modal-title.directive';
import { ModalDirective } from './directives/modal.directive';
import { ModalComponent } from './modal.component';

@NgModule({
	declarations: [
		ModalComponent,
		ModalDirective,
		ModalHeaderDirective,
		ModalTitleDirective,
		ModalContentDirective
	],
	imports: [
		CommonModule,
	],
	exports: [
		ModalComponent,
		ModalDirective,
		ModalHeaderDirective,
		ModalTitleDirective,
		ModalContentDirective
	]
})
export class ModalModule {

}