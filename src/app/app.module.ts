import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { ModalService } from './components/modal/service/modal.service';


@NgModule({
	declarations: [
		AppComponent
	],
	imports: [
		BrowserModule,
		RouterModule,
	],
	providers: [ModalService],
	bootstrap: [AppComponent]
})
export class AppModule { }
