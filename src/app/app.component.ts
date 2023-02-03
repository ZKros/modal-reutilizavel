import { Component, ComponentRef, ViewChild, ViewContainerRef } from '@angular/core';
import { ModalComponent } from './components/modal/modal.component';
import { ModalService } from './components/modal/service/modal.service';
import { TesteComponent } from './teste/teste.component';


@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {

	@ViewChild("component", { read: ViewContainerRef }) vcr!: ViewContainerRef;
	ref!: ComponentRef<TesteComponent>
	constructor(private modal: ModalService) { }

	open(id: number) {
		this.modal.open(id)
		this.ref = this.vcr.createComponent(TesteComponent)

		this.modal.beforeClosed().subscribe((res) => {
			const index = this.vcr.indexOf(this.ref.hostView)

			if (index != -1) {
				console.log(res)
				this.vcr.remove(index)
			}
		})
	}

}
