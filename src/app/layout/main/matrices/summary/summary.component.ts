import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss']
})
export class SummaryComponent implements OnInit {
  usagesummary:any;
  constructor() { }

  ngOnInit() {
    this.usagesummary=[
      {id:1, name:"MBs Exchanged", value:3009},
      {id:2, name:"Files Exchanged", value:2309},
      {id:3, name:"Sessions", value:231},
      {id:4, name:"Outside Companies", value:1},
      {id:5, name:"ITI Sites", value:1},
      {id:6, name:"Registered Users", value:11},
    ]
  }

}
