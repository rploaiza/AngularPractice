import {Component, OnInit} from '@angular/core';
import {Item} from './item.model';
import {ApiItemsService} from '../api-items/api-items.service';

@Component({
    selector: 'app-api-items',
    templateUrl: './api-items.component.html',
    styleUrls: ['./api-items.component.css']
})
export class ApiItemsComponent implements OnInit {
    updateItem: Item;
    creationItem: Item;

    constructor(private apiItemsService: ApiItemsService) {
    }

    ngOnInit(): void {
        this.updateItem = {id: 0, name: '', description: ''};
        this.creationItem = {id: 0, name: '', description: ''};
    }

    creates() {
        this.apiItemsService.create(this.creationItem);
        this.creationItem = {name: '', description: ' '};
    }

    saves() {
        this.apiItemsService.update(this.updateItem);
        this.updateItem = {id: this.updateItem.id, name: ' ', description: ' '};
    }
}

