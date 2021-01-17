import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-tools',
  templateUrl: './tools.component.html',
  styleUrls: ['./tools.component.scss']
})
export class ToolsComponent implements OnInit {

  tools: any;
  selectedTools: any;
  closeToolSec: boolean;

  constructor(
    private commonService: CommonService
  ) { }

  ngOnInit() {
    this.tools = [
      { id: 1, name: 'System Connection', selected: false },
      { id: 2, name: 'Diagnostics', selected: false },
      { id: 3, name: 'Workflow', selected: false },
      { id: 4, name: 'User Management', selected: false },
      { id: 5, name: 'Reports', selected: false },
      { id: 6, name: 'Queue Info', selected: false },
      { id: 7, name: 'Datastores', selected: false },
      { id: 8, name: 'Log Files', selected: false },
      { id: 9, name: 'Sessions', selected: false },
      { id: 10, name: 'Machine Info', selected: false }
    ];

    this.selectedTools = [];
    this.closeToolSec = false;
  }

  closeTools() {
    this.closeToolSec = !this.closeToolSec;
  }

  selectTool(item) {
    if (item.selected) {
      this.selectedTools.push(item);
      this.sendData(this.selectedTools);
    } else if (this.selectedTools.length) {
      const index = this.selectedTools.findIndex(x => x.id === item.id);
      this.selectedTools.splice(index, 1);
      this.sendData(this.selectedTools);
    } else {
      return;
    }
  }

  sendData(data): void {
    this.commonService.setData(data);
  }

}
