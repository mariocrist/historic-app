import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HistoricTramosComponent } from '../components/historic-tramos-table/historic-tramos.component';
import { HttpClientModule } from '@angular/common/http';
import { TableModule } from 'primeng/table';
import { CalendarModule } from 'primeng/calendar';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DropdownModule } from 'primeng/dropdown';




@NgModule({
    declarations: [
        HistoricTramosComponent
    ],
    imports: [
        CommonModule,
        HttpClientModule,
        TableModule,
        ReactiveFormsModule,
        DropdownModule,
        CalendarModule,
        FormsModule,
        BrowserAnimationsModule
    ],
    exports: [
        HistoricTramosComponent
    ]
})
export class HistoricModule { }
