import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { TesteComponent } from './teste.component';



@NgModule({
	declarations: [TesteComponent],
	imports: [
		CommonModule,
		ReactiveFormsModule
	],
	exports: [TesteComponent]
})
export class TesteModule { }
