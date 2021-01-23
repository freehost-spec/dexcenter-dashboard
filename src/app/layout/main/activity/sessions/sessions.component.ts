import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sessions',
  templateUrl: './sessions.component.html',
  styleUrls: ['./sessions.component.scss']
})
export class SessionsComponent implements OnInit {
  session: any;

  constructor() { }

  ngOnInit() {
    this.session = [
      { id: 1, sessionid: 1994923456, sessiontitle: 'Session [30-April-2020 00:02:12-0400]-SLW19-after fix', recipientcompanies: 'ITI',sender:'--',createdon:'04/30/20, 00:12:22 EDT',status:'Completed', jobtype:'Translate Model Files', originatedsession:'True'},
      { id: 2, sessionid: 1994923456, sessiontitle: 'Session [30-April-2020 00:02:12-0400]-SLW19-after fix', recipientcompanies: 'ITI',sender:'--',createdon:'04/30/20, 00:12:22 EDT',status:'Completed', jobtype:'Translate Model Files', originatedsession:'True'},
      { id: 3, sessionid: 1994923456, sessiontitle: 'Session [30-April-2020 00:02:12-0400]-SLW19-after fix', recipientcompanies: 'ITI', sender:'--',createdon:'04/30/20, 00:12:22 EDT',status:'Completed', jobtype:'Translate Model Files', originatedsession:'True'},
      { id: 4, sessionid: 1994923456, sessiontitle: 'Session [30-April-2020 00:02:12-0400]-SLW19-after fix', recipientcompanies: 'ITI', sender:'--',createdon:'04/30/20, 00:12:22 EDT',status:'Completed', jobtype:'Translate Model Files', originatedsession:'True'},
      { id: 5, sessionid: 1994923456, sessiontitle: 'Session [30-April-2020 00:02:12-0400]-SLW19-after fix', recipientcompanies: 'ITI', sender:'--', createdon:'04/30/20, 00:12:22 EDT',status:'Completed', jobtype:'Translate Model Files', originatedsession:'True'},
    ];
  }

}
