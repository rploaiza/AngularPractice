import {Component, Inject, Injectable} from '@angular/core';
import {HttpService} from '../core/http.service';
import {Item} from '../api-items/item.model';
import {Observable} from 'rxjs/Observable';
import {Subject} from 'rxjs/Subject';
import {MAT_DIALOG_DATA, MatDialog} from '@angular/material';

@Injectable()
export class ApiItemsService {


    static URI = '/items';

    private readItem: Subject<Item> = new Subject();

    private updateItem: Subject<Item> = new Subject();

    private allItems: Subject<Item[]> = new Subject();

    constructor(private httpService: HttpService, public dialog: MatDialog) {
    }

    getAllItems(): Observable<Item[]> {
        this.readAll();
        return this.allItems.asObservable();
    }

    getUpdateItem(): Observable<Item> {
        return this.updateItem.asObservable();
    }

    prepareUpdate(id: number) {
        this.httpService.get(ApiItemsService.URI + '/' + id).subscribe(
            (itemValue: Item) => this.updateItem.next(itemValue),
            error => this.dialog.open(ConectionDialogComponent, {
                data: {
                    message: 'Internal server error. Please, retry it later',
                    error: error
                }
            })
        );
    }

    getReadItem(): Observable<Item> {
        return this.readItem.asObservable();
    }

    read(id: number) {
        this.httpService.get(ApiItemsService.URI + '/' + id).subscribe(
            (itemValue: Item) => this.readItem.next(itemValue),
            error => this.dialog.open(ConectionDialogComponent, {
                data: {
                    message: 'Internal server error. Please, retry it later',
                    error: error
                }
            })
        );
    }

    private readAll() {
        this.httpService.get(ApiItemsService.URI).subscribe(
            (itemsArray: Item[]) => this.allItems.next(itemsArray),
            error => this.dialog.open(ConectionDialogComponent, {
                data: {
                    message: 'Internal server error. Please, retry it later',
                    error: error
                }
            })
        );
    }

    delete(id: number) {
        this.httpService.delete(ApiItemsService.URI + '/' + id).subscribe(
            () => this.readAll(),
            error => this.dialog.open(ConectionDialogComponent, {
                data: {
                    message: 'Internal server error. Please, retry it later',
                    error: error
                }
            })
        );
    }

    create(item: Item) {
        this.httpService.post(ApiItemsService.URI, item).subscribe(
            () => this.readAll(),
            error => this.dialog.open(ConectionDialogComponent, {
                data: {
                    message: 'Internal server error. Please, retry it later',
                    error: error
                }
            })
        );
    }

    update(item: Item) {
        this.httpService.put(ApiItemsService.URI + '/' + item.id, item).subscribe(
            () => this.readAll(),
            error => this.dialog.open(ConectionDialogComponent, {
                data: {
                    message: 'Internal server error. Please create the item since there is no such identifier',
                    error: error
                }
            })
        );
    }
}

@Component({
    templateUrl: './conection-dialog.component.html',
    styleUrls: ['./api-items.component.css']
})
export class ConectionDialogComponent {

    constructor(@Inject(MAT_DIALOG_DATA) public data: any, public dialog: MatDialog) {
    }

    closeDialog(): void {
        this.dialog.closeAll();
    }

}
