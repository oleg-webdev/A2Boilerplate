import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import {ListItemInterface} from "./interfaces/item.interface";

@Component({
	selector: 'new-item',
	template: `
		<div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
			<input class="mdl-textfield__input" type="text" id="item-name" [(ngModel)]="item.name">
			<label class="mdl-textfield__label" for="item-name">Item Name</label>
		</div>
		<div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
			<input class="mdl-textfield__input" type="text" id="item-amount" [(ngModel)]="item.amount">
			<label class="mdl-textfield__label" for="item-amount">Amount</label>
		</div>
		<button (click)="handleAddItem()" type="button" class="mdl-button mdl-js-button mdl-button--raised">Add</button>
	`
})

export class NewitemComponent implements OnInit {

	item = {name: '', amount: 0, showEdit: false};

	@Output() addedItem = new EventEmitter<ListItemInterface>();

	handleAddItem(): void {
		this.addedItem.emit(this.item);
		this.item = {name: '', amount: 0, showEdit: false};
	}

	constructor() {}

	ngOnInit() {}

}