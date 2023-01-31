import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ModalComponent } from './modal.component';
import { MatDialogModule } from '@angular/material/dialog';

const components = [
	ModalComponent,

]

@NgModule({
	imports: [CommonModule, MatDialogModule],
	declarations: [components],
	exports: [components]
})
export class ModalModule { }
