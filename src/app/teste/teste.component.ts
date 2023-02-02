import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ModalService } from '../components/modal/service/modal.service';

@Component({
	selector: 'app-teste',
	templateUrl: './teste.component.html',
	styleUrls: ['./teste.component.css']
})
export class TesteComponent {
	public form!: FormGroup

	constructor(private modal: ModalService, private fb: FormBuilder) {

	}
	ngOnInit() {
		this.form = this.fb.group({
			teste: ''
		})
	}

	close(data?: string) {
		this.modal.close(data)
	}


	get teste() {
		return this.form.get('teste')?.value
	}
}
