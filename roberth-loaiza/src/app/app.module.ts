import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {HttpService} from './core/http.service';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
    MatAutocompleteModule, MatButtonModule, MatButtonToggleModule,
    MatCardModule, MatCheckboxModule, MatChipsModule,
    MatDatepickerModule, MatDialogModule, MatExpansionModule,
    MatGridListModule, MatIconModule, MatInputModule,
    MatListModule, MatMenuModule, MatNativeDateModule,
    MatPaginatorModule, MatProgressBarModule, MatProgressSpinnerModule,
    MatRadioModule, MatRippleModule, MatSelectModule,
    MatSidenavModule, MatSliderModule, MatSlideToggleModule,
    MatSnackBarModule, MatSortModule, MatTableModule,
    MatTabsModule, MatToolbarModule, MatTooltipModule,
    MatStepperModule,
} from '@angular/material';
import {ApiItemsComponent} from './api-items/api-items.componet';
import {ApiItemsService, ConectionDialogComponent} from './api-items/api-items.service';
import {EditorComponent, InfoDialogComponent, UpdateDialogComponent, DeleteDialogComponent} from './editor/editor.component';
import {CdkTableModule} from '@angular/cdk/table';
import {FlexLayoutModule} from '@angular/flex-layout';

@NgModule({
    exports: [
        CdkTableModule,
        MatAutocompleteModule,
        MatButtonModule,
        MatButtonToggleModule,
        MatCardModule,
        MatCheckboxModule,
        MatChipsModule,
        MatStepperModule,
        MatDatepickerModule,
        MatDialogModule,
        MatExpansionModule,
        MatGridListModule,
        MatIconModule,
        MatInputModule,
        MatListModule,
        MatMenuModule,
        MatNativeDateModule,
        MatPaginatorModule,
        MatProgressBarModule,
        MatProgressSpinnerModule,
        MatRadioModule,
        MatRippleModule,
        MatSelectModule,
        MatSidenavModule,
        MatSliderModule,
        MatSlideToggleModule,
        MatSnackBarModule,
        MatSortModule,
        MatTableModule,
        MatTabsModule,
        MatToolbarModule,
        MatTooltipModule,
    ]
})
export class DemoMaterialModule {
}

@NgModule({
    imports: [
        BrowserModule, FormsModule, HttpModule, ReactiveFormsModule,
        BrowserAnimationsModule,
        DemoMaterialModule,
        MatNativeDateModule,
        FlexLayoutModule
    ],
    entryComponents: [EditorComponent, InfoDialogComponent, ConectionDialogComponent, UpdateDialogComponent, DeleteDialogComponent],
    declarations: [
        AppComponent, ApiItemsComponent, EditorComponent, InfoDialogComponent, ConectionDialogComponent, UpdateDialogComponent,
        DeleteDialogComponent
    ],
    bootstrap: [AppComponent],
    providers: [HttpService, ApiItemsService]

})
export class AppModule {
}

