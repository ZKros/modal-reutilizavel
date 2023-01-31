import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TesteComponent } from './teste/teste.component';
import { SharedModule } from '../shared/shared.module';
import { ModalModule } from '../shared/modal/modal.module';



@NgModule({
	declarations: [
		TesteComponent
	],
	imports: [
		CommonModule,
		ModalModule
	],
	exports: [TesteComponent]
})
export class ComponentsModule { }
