import { Component, ComponentRef, ViewChild, ViewContainerRef } from '@angular/core';
import { ModalService } from './components/modal/service/modal.service';
import { TesteComponent } from './teste/teste.component';


@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {

	@ViewChild("viewContainerRef", { read: ViewContainerRef }) vcr!: ViewContainerRef;
	ref!: ComponentRef<TesteComponent>
	constructor(private modal: ModalService) {

	}

	openModal() {
		this.modal.open()

		this.modal.beforeClosed().subscribe((res) => console.log(res))
	}

	addChild() {
		this.ref = this.vcr.createComponent(TesteComponent)
	}

	removeChild() {
		const index = this.vcr.indexOf(this.ref.hostView)
		if (index != -1) this.vcr.remove(index)
	}
}
