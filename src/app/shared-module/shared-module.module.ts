import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatButtonModule,
  MatDrawer,
  MatDrawerContainer,
  MatDrawerContent,
  MatToolbar,
  MatToolbarRow,
  MatSidenav,
  MatToolbarModule,
  MatRippleModule,
  MatBadgeModule,
  MatCardModule,
  MatSlideToggleModule,
  MatSidenavModule,
  MatSlideToggle,
  MatButton
} from '@angular/material';

@NgModule({
  declarations: [
    // MatSlideToggle,
    // MatDrawer,
    // MatSidenav,
    // MatDrawerContainer,
    // MatDrawerContent,
    // MatToolbar,
    // MatToolbarRow,
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
