import {MatTableModule, MatPaginatorModule, MatSortModule, } from '@angular/material';
import { NgModule } from '@angular/core';


@NgModule({
    imports: [MatTableModule, MatPaginatorModule, MatSortModule, ],
    exports: [MatTableModule, MatPaginatorModule, MatSortModule, ],
})
export class MaterialModule{}