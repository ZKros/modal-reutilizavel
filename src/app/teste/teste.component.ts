import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ModalService } from '../components/modal/service/modal.service';
import { IdModal } from '../shared/constantes/modal-enum';

@Component({
	selector: 'app-teste',
	templateUrl: './teste.component.html',
	styleUrls: ['./teste.component.css']
})
export class TesteComponent {
	public form!: FormGroup
	public id = IdModal
	constructor(private modalService: ModalService, private fb: FormBuilder) {

	}
	ngOnInit() {
		this.form = this.fb.group({
			teste: ''
		})
	}
	open(id: string) {
		this.modalService.open(id)
	}

	close(data?: string) {
		this.modalService.close(data)
	}


	get teste() {
		return this.form.get('teste')?.value
	}
}
