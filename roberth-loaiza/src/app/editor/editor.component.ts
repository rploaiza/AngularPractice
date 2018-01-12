import {Component, OnInit, Inject} from '@angular/core';
import {ApiItemsService} from '../api-items/api-items.service';
import {Item} from '../api-items/item.model';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material';

@Component({
    selector: 'app-material',
    templateUrl: './editor.component.html',
    styleUrls: ['./editor.component.css']
})
export class EditorComponent implements OnInit {
    items: Item[];

    constructor(private apiItemsService: ApiItemsService, public dialog: MatDialog) {
    }

    ngOnInit(): void {
        this.apiItemsService.getAllItems().subscribe(items => this.items = items);
        this.apiItemsService.getReadItem().subscribe(item => this.dialog.open(InfoDialogComponent, {
            data: {
                id: item.id,
                name: item.name,
                description: item.description
            }
        }));
        this.apiItemsService.getUpdateItem().subscribe(item => this.dialog.open(UpdateDialogComponent, {
            data: {
                id: item.id,
                name: item.name,
                description: item.description
            }
        }));
    }


    delete(id: number) {
        this.dialog.open(DeleteDialogComponent, {
            data: {
                id: id
            }
        });
    }

    read(id: number) {
        this.apiItemsService.read(id);
    }

    prepareUpdate(id: number) {
        this.apiItemsService.prepareUpdate(id);
    }

}

@Component({
    templateUrl: './info-dialog.component.html',
    styleUrls: ['./editor.component.css']
})
export class InfoDialogComponent {
    constructor(@Inject(MAT_DIALOG_DATA) public data: any, public dialog: MatDialog) {
    }

    closeDialog(): void {
        this.dialog.closeAll();
    }
}

@Component({
    templateUrl: './update-dialog.component.html'
})
export class UpdateDialogComponent {

    constructor(@Inject(MAT_DIALOG_DATA) public data: any, public dialog: MatDialog, private apiItemsService: ApiItemsService) {
    }

    closeDialog(): void {
        this.dialog.closeAll();
    }

    saveDialog() {
        this.apiItemsService.update(this.data);
        this.dialog.closeAll();
    }
}

@Component({
    templateUrl: './delete-dialog.component.html'
})
export class DeleteDialogComponent {
    constructor(@Inject(MAT_DIALOG_DATA) public data: any, public dialog: MatDialog, private apiItemsService: ApiItemsService) {
    }

    deleteDialog() {
        this.apiItemsService.delete(this.data.id);
        this.dialog.closeAll();
    }

    closeDialog(): void {
        this.dialog.closeAll();
    }
}
