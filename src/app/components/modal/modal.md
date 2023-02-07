<h2> Modal </h2>

É possível utilizar o modal conforme abaixo.

Para utilizar é necessário injetar o serviço `ModalService`.

Selector: `app-modal`

Module: `ModalModule`

Os Parâmetros abaixo são aplicados no HTML ao app-modal caso Modal seja adicionado via HTML.

Parâmetros:

```Typescript
//app-modal
id: string;
size: ModalSize = 'md'
```

Types:

```Typescript
declare type Size = 'sm' | 'md' | 'lg'
```

Funções:

```Typescript
open(id: string): void
close(data?: any): void
beforeClosed(): Subject<any>;
add(modal: ModalComponent): void
remove(modal: ModalComponent): void
```

Exemplo de utilização via HTML

```HTML
<div>
  <div>
	<h1> Modal <h1>
	<button (click)="open('modal-1')"> Abrir Modal</button>
	</div>

	<app-modal id='modal-1' [size]="'lg'">
	<ng-template #component> </ng-template>
	</app-modal>
</div>
</code>
```

```Typescript
export class PaiComponent{
	public ref!: ComponentRef<FilhoComponent>
	@ViewChild("component", {read: ViewContainerRef}) vcr!: ViewContainerRef;

constructor(private modal: ModalService) {}

  open(id: string){
    this.modal.open(id)
    this.ref = this.vcr.createComponent(FilhoComponent)

    this.modal.beforeClosed().subscribe((res) => {
    	console.log(res);
    	this.removeComponent();
    })
  }

  removeComponent(){
    const index = this.vcr.indexOf(this.ref.hostView)

    if(index != 1){
    this.vcr.remove(index)
    }
  }

}
```

Componente do Modal há ser criado na chamado no `open()`

```Typescript
@Component({
	selector: 'app-modal',
	template: `
	<ng-container *ngIf="isOpen">
  <div class="modal" @modal [class]="size">
    <ng-content></ng-content>
  </div>
  <div @overlay class="overlay"></div>
  </ng-container>
	`,
	animations: [
		trigger('overlay', [
			transition(':enter', [
				style({ opacity: 0 }),
				animate('250ms', style({ opacity: .5 })),
			]),
			transition(':leave', [
				animate('250ms', style({ opacity: 0 }))
			])
		]),
		trigger('modal', [
			transition(':enter', [
				style({ top: -999 }),
				animate('500ms', style({ top: '50%' })),
			]),
			transition(':leave', [
				animate('250ms', style({ top: -999 }))
			])
		]),
	]
})
```