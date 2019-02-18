import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatButtonModule,
  MatToolbarModule,
  MatRippleModule,
  MatBadgeModule,
  MatCardModule,
  MatSlideToggleModule,
  MatSidenavModule,
} from '@angular/material';

@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatRippleModule,
    MatBadgeModule,
    MatCardModule,
    MatToolbarModule,
    MatSidenavModule
  ],
  exports: [
    CommonModule,
    MatSlideToggleModule,
    MatButtonModule,
    MatRippleModule,
    MatBadgeModule,
    MatCardModule,
    MatToolbarModule,
    MatSidenavModule
    ]
})
export class SharedModuleModule { }
