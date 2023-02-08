import { Component } from '@angular/core';
import { ModalService } from './components/modal/service/modal.service';


@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {
	constructor(private modal: ModalService) { }

	open(id: string) {
		if (id === 'modal-1') {
			this.modal.open(id)
		} else if (id === 'modal-2') {
			this.modal.open(id)
		}


		this.modal.beforeClosed().subscribe((res) => {

			console.log(res)
		})

	}

}
