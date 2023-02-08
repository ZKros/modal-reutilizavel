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
    <h1>Modal</h1>
    <button (click)="open('modal-1')">Open Modal 1</button>
  </div>

	<!--Default Header-->
  <app-modal id="modal-1" [size]="'lg'">
    <modal>
      <ng-template appModalTitle>
        <h1>Modal Teste</h1>
        <i class="ri-home-fill"></i>
      </ng-template>

      <ng-template appModalContent>
        <app-filhoComponent></app-filhoComponent>
      </ng-template>
    </modal>
  </app-modal>

	<!--Custom Header-->
	  <app-modal id="modal-1" [size]="'lg'">
    <modal>
      <ng-template appModalHeader>
				<header>
        <h1>Modal Teste</h1>
        <i class="ri-home-fill"></i>
				 </header>
      </ng-template>

      <ng-template appModalContent>
        <app-filhoComponent></app-filhoComponent>
      </ng-template>
    </modal>
  </app-modal>
</div>
```

```Typescript
export class PaiComponent{

  constructor(private modal: ModalService) {}

  open(id: string){
    this.modal.open(id)

    this.modal.beforeClosed().subscribe((res) => {
    	console.log(res);
    })
  }
}
```

Componente do Modal há ser criado na chamado no `open()`

```Typescript
@Component({
	selector: 'app-modal',
	template: `
<ng-container *ngIf="isOpen">
  <section class="modal" @modal>
    <div class="modal__item" [class]="size" *ngFor="let modal of modals">
      <ng-container
        [ngTemplateOutlet]="modal?.customHeader?.templateRef || defaultHeader"
      ></ng-container>

      <ng-template #defaultHeader>
        <header class="modal__header">
          <button class="close" (click)="modalService.close()">
            <i class="ri-close-line"></i>
          </button>
          <ng-container *ngTemplateOutlet="modal.title.templateRef">
          </ng-container>
        </header>
      </ng-template>

      <div class="modal__content">
        <ng-container
          *ngTemplateOutlet="modal.content.templateRef"
        ></ng-container>
      </div>
    </div>
  </section>
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
