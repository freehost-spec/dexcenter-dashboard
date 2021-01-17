import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QueueComponent } from './queue/queue.component';
import { Routes, RouterModule } from '@angular/router';
import { SessionsComponent } from './sessions/sessions.component';
import { SummaryComponent } from './summary/summary.component';
import { ConfigComponent } from './config/config.component';
import { ConfigModalComponent } from './config-modal/config-modal.component';
import { FormsModule } from '@angular/forms';
import { ConfirmationComponent } from './confirmation/confirmation.component';
import { MatDialogModule, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';

const routes: Routes = [
  {
    path: '',
    component: QueueComponent,
  },
  { path: '**', pathMatch: 'full', redirectTo: '' }
];

@NgModule({
  declarations: [
    QueueComponent,
    SessionsComponent,
    SummaryComponent,
    ConfigComponent,
    ConfigModalComponent,
    ConfirmationComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatDialogModule,
    FormsModule
  ],
  providers: [
    { provide: MAT_DIALOG_DATA, useValue: {} },
    { provide: MatDialogRef, useValue: {} }
  ],
  entryComponents: [ConfigModalComponent, ConfirmationComponent]
})
export class QueueInfoModule { }

