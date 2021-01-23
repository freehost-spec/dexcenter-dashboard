import { Component, OnInit, HostListener } from '@angular/core';
import { ConfigModalComponent } from '../config-modal/config-modal.component';
import { MatDialog } from '@angular/material/dialog';
@Component({
  selector: 'app-queue',
  templateUrl: './queue.component.html',
  styleUrls: ['./queue.component.scss'],
})
export class QueueComponent implements OnInit {

  queueData: any;
  showList: boolean;
  selectedIndex: any;
  configData: any;
  loadingData: any;
  filteredData: any;
  searchKey: any;
  thisElementClicked: boolean = false;
  elementRef: any;


  constructor(
    public dialog: MatDialog
  ) { }

  @HostListener('document:mousedown', ['$event'])
  onGlobalClick(event): void {
    if (event.target.className.includes('name') || event.target.className.includes('count') || event.target.className.includes('session')) {
    } else {
      this.selectedIndex = null;
      this.showList = false;
    }
  }

  ngOnInit() {
    this.showList = false;
    this.selectedIndex = null;
    this.loadingData = false;
    this.queueData = [
      { id: 1, name: 'Queued for Pre-Processing', sessions: 34, summary: '100', status: 'failed' },
      { id: 2, name: 'Pre-processing', sessions: 24, summary: '90', status: 'in-progress' },
      { id: 3, name: 'Queued for Processing', sessions: 14, summary: '60', status: 'completed' },
      { id: 4, name: 'Processing', sessions: 30, summary: '60', status: 'in-progress' },
      { id: 5, name: 'Post-Processing', sessions: 13, summary: '100', status: 'failed' },
      { id: 6, name: 'Queue for Batch', sessions: 19, summary: '90', status: 'in-progress' },
      { id: 7, name: 'Queue for Approval', sessions: 104, summary: '90', status: 'in-progress' },
    ];
    this.filteredData = this.queueData;
  }

  openConfig() {
    const data = [];
    const dialogRef = this.dialog.open(ConfigModalComponent, { data });
    dialogRef.afterClosed().subscribe(res => {
      if (res === 'true') {
        this.loadingData = false;
      } else {
        this.configData = res.data[0];
        this.loadingData = true;
        setTimeout(() => {
          this.loadingData = false;
        }, 1000);
      }
    });
  }

  getList(i) {
    this.selectedIndex = i;
    this.showList = !this.showList;
  }

  searchData(e) {
    if (e && (e !== undefined || e !== null || e !== '')) {
      this.filteredData = this.queueData.filter(x => x.name.toLowerCase().includes(e.toLowerCase()));
    } else {
      this.filteredData = this.queueData;
    }
  }

}
