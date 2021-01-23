import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-activity',
  templateUrl: './activity.component.html',
  styleUrls: ['./activity.component.scss']
})
export class ActivityComponent implements OnInit {

  activatedTab: any;
  closeToolSec: boolean;

  constructor() { }

  ngOnInit() {
    this.activatedTab = 'user';
    this.closeToolSec = false;
  }
  closeTools() {
    this.closeToolSec = !this.closeToolSec;
  }
  changeNav(tab) {
    this.activatedTab = tab;
  }

}
