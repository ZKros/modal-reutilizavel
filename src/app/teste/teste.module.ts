import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { TesteComponent } from './teste.component';
import { ModalModule } from '../components/modal/modal.module';



@NgModule({
	declarations: [TesteComponent],
	imports: [
		CommonModule,
		ModalModule,
		ReactiveFormsModule
	],
	exports: [TesteComponent]
})
export class TesteModule { }
