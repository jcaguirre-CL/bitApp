import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// My imports
import {  MatButtonModule,
          MatToolbarModule,
          MatInputModule,
          MatProgressSpinnerModule,
          MatCardModule,
          MatTabsModule,
          MatSidenavModule,
          MatGridListModule,
          MatTableModule,
          MatTooltipModule,
          MatIconModule,
          MatCheckboxModule,
          MatSelectModule,
          MatSnackBarModule
          // MatPaginator,
          // MatSort,
          // MatTableDataSource
        } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    MatToolbarModule,
    MatInputModule,
    MatProgressSpinnerModule,
    MatCardModule,
    MatTabsModule,
    MatSidenavModule,
    MatGridListModule,
    MatTableModule,
    MatTooltipModule,
    MatIconModule,
    MatCheckboxModule,
    MatSelectModule,
    MatSnackBarModule
    // MatPaginator,
    // MatSort,
    // MatTableDataSource
  ],
  exports: [
    MatButtonModule,
    MatToolbarModule,
    MatInputModule,
    MatProgressSpinnerModule,
    MatCardModule,
    MatTabsModule,
    MatSidenavModule,
    MatGridListModule,
    MatTableModule,
    MatTooltipModule,
    MatIconModule,
    MatCheckboxModule,
    MatSelectModule,
    MatSnackBarModule
    // MatPaginator,
    // MatSort,
    // MatTableDataSource
  ],
  declarations: []
})
export class MaterialModule { }
