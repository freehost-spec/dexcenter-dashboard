import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-matrices',
  templateUrl: './matrices.component.html',
  styleUrls: ['./matrices.component.scss'],
})
export class MatricesComponent implements OnInit {
  activatedTab: any;
  closeToolSec: boolean;

  constructor(
  ) {
  }

  ngOnInit() {
    this.activatedTab = 'summary';
    this.closeToolSec = false;
  }

  closeTools() {
    this.closeToolSec = !this.closeToolSec;
  }

  changeNav(tab) {
    this.activatedTab = tab;
  }

}

