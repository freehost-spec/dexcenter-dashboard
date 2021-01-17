import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  activity: any;

  constructor() { }

  ngOnInit() {
    this.activity = [
      { id: 1, name: 'Queued for Pre-Processing', sessions: 34, summary: '100', status: 'failed' },
      { id: 2, name: 'Pre-processing', sessions: 34, summary: '90', status: 'in-progress' },
      { id: 3, name: 'Queued for Processing', sessions: 34, summary: '60', status: 'completed' },
      { id: 4, name: 'Processing', sessions: 34, summary: '60', status: 'in-progress' },
      { id: 5, name: 'Post-Processing', sessions: 34, summary: '100', status: 'failed' },
      { id: 6, name: 'Queue for Batch', sessions: 34, summary: '90', status: 'in-progress' },
      { id: 7, name: 'Queue for Approval', sessions: 34, summary: '90', status: 'in-progress' },
    ];
  }
}
