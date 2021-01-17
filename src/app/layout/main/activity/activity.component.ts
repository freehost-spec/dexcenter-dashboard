import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-activity',
  templateUrl: './activity.component.html',
  styleUrls: ['./activity.component.scss']
})
export class ActivityComponent implements OnInit {

  activatedTab: any;

  constructor() { }

  ngOnInit() {
    this.activatedTab = 'user';
  }

  changeNav(tab) {
    this.activatedTab = tab;
  }

}
