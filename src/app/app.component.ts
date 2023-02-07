import { Component, ComponentRef, ViewChild, ViewContainerRef } from '@angular/core';
import { ModalService } from './components/modal/service/modal.service';
import { IdModal } from './shared/constantes/modal-enum';
import { TesteComponent } from './teste/teste.component';
import { ZeroComponent } from './zero/zero.component';


@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {
	@ViewChild("component", { read: ViewContainerRef }) vcr!: ViewContainerRef;
	@ViewChild("component2", { read: ViewContainerRef }) vcr2!: ViewContainerRef;
	refTeste!: ComponentRef<TesteComponent>
	refZero!: ComponentRef<ZeroComponent>
	constructor(private modal: ModalService) { }

	open(id: string) {
		if (id === 'modal-1') {
			this.modal.open(id)
			this.refTeste = this.vcr.createComponent(TesteComponent)
		} else if (id === 'modal-2') {
			this.modal.open(id)
			this.refZero = this.vcr2.createComponent(ZeroComponent)
		}


		this.modal.beforeClosed().subscribe((res) => {
			this.removeComponent()
			console.log(res)
		})
	}

	removeComponent() {
		const index = this.vcr.indexOf(this.refZero.hostView)

		if (index != 1) {
			this.vcr.remove(index)
		}
	}
}
