import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-sessions',
  templateUrl: './sessions.component.html',
  styleUrls: ['./sessions.component.scss']
})
export class SessionsComponent implements OnInit {

  @Input() data: any;
  showList: boolean;
  workFlow: boolean;
  selectedIndex: any;

  constructor() { }

  ngOnInit() {
    this.showList = false;
    this.workFlow = false;
    this.selectedIndex = null;
  }

  getList() {
    this.showList = !this.showList;
  }

  showWorkFlow(i) {
    if (i === 1 || i === 2) {
      this.selectedIndex = i;
      this.workFlow = !this.workFlow;
    }
  }

}
