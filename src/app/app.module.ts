import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { ModalModule } from './components/modal/modal.module';
import { TesteModule } from './teste/teste.module';
import { ZeroComponent } from './zero/zero.component';


@NgModule({
	imports: [
		BrowserModule,
		BrowserAnimationsModule,
		FormsModule,
		ModalModule,
		TesteModule,
		ReactiveFormsModule

	],
	declarations: [AppComponent, ZeroComponent],
	bootstrap: [AppComponent]
})
export class AppModule { }