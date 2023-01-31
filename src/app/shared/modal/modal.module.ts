import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ModalContentComponent } from './modal-parts/modal-content.component';
import { ModalFooterComponent } from './modal-parts/modal-footer.component';
import { ModalHeaderComponent } from './modal-parts/modal-header.component';
import { ModalComponent } from './modal.component';

const components = [
	ModalComponent,
	ModalContentComponent,
	ModalHeaderComponent,
	ModalFooterComponent

]

@NgModule({
	imports: [CommonModule],
	declarations: [components],
	exports: [components]
})
export class ModalModule { }
