import { Component } from '@angular/core';
import { ModalService } from './components/modal/service/modal.service';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {
	title = 'modal-reutilizavel';
	constructor(private service: ModalService) { }
	openDialog() {
		this.service.create()
	}
}
