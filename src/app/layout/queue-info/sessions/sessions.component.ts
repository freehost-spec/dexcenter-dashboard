import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-sessions',
  templateUrl: './sessions.component.html',
  styleUrls: ['./sessions.component.scss']
})
export class SessionsComponent implements OnInit {

  @Input() data: any;
  showList: boolean;

  constructor() { }

  ngOnInit() {
    this.showList = false;
  }

  getList() {
    this.showList = !this.showList;
  }

}
