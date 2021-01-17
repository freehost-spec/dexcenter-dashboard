import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Component, OnInit, Inject } from '@angular/core';
import { inject } from '@angular/core/testing';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-config-modal',
  templateUrl: './config-modal.component.html',
  styleUrls: ['./config-modal.component.scss']
})
export class ConfigModalComponent implements OnInit {

  configData: any;
  threadEdit: any;
  jobEdit: any;
  confirmation: any;

  constructor(
    public dialog: MatDialog,
    public dialogRef: MatDialogRef<ConfigModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
    // @Inject(MAT_DIALOG_DATA) public data: any, @Inject(MatDialogRef) public dialogRef: MatDialogRef<ConfigModalComponent>
  ) { }

  ngOnInit() {
    this.threadEdit = false;
    this.jobEdit = false;
    this.confirmation = false;
    this.configData = {
      max_thread: 12,
      data: [
        { id: 1, name: 'DXS', max_job: 10, max_thread: 10, status: 'failed' },
        { id: 2, name: 'DTS1', max_job: 10, max_thread: 10, status: 'in-progress' },
        { id: 3, name: 'DTS2', max_job: 10, max_thread: 10, status: 'completed' },
        { id: 4, name: 'DTS3', max_job: 3, max_thread: 10, status: 'in-progress' },
        { id: 5, name: 'DTS4', max_job: 3, max_thread: 10, status: 'failed' },
        { id: 6, name: 'DTS5', max_job: 3, max_thread: 9, status: 'in-progress' },
        { id: 7, name: 'DTS6', max_job: 3, max_thread: 9, status: 'in-progress' },
        { id: 8, name: 'DTS7', max_job: 3, max_thread: 9, status: 'in-progress' },
      ]
    };
  }

  closeModal(data) {
    this.confirmation = false;
    this.dialogRef.close(data);
  }

  editThread() {
    this.threadEdit = !this.threadEdit;
  }

  editJobs() {
    this.jobEdit = !this.jobEdit;
  }

  openConfirmation() {
    this.confirmation = true;
  }

}

