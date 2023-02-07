import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ModalComponent } from './modal.component';
import { ModalHeaderDirective } from './directives/modal-header.directive';
import { ModalContentDirective } from './directives/modal-content.directive';
import { ModalDirective } from './directives/modal.directive';
import { ModalTitleDirective } from './directives/modal-title.directive';

@NgModule({
	declarations: [
		ModalComponent,
  ModalHeaderDirective,
  ModalContentDirective,
  ModalDirective,
  ModalTitleDirective,
	],
	imports: [
		CommonModule,
	],
	exports: [
		ModalComponent,
	]
})
export class ModalModule {

}