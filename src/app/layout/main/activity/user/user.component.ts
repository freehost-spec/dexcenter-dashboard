import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  userdata: any;

  constructor() { }

  ngOnInit() {
    this.userdata = [
      { id: 1, activity: 'Work flow restart dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt', updatedon:'04/30/20,00:12:22 EDT', updatedby: 'Admin' },
      { id: 2, activity: 'Task stop sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt', updatedon: '04/30/20,00:12:22 EDT', updatedby: 'Admin' },
      { id: 3, activity: 'QAdmin 4 Users Active dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt', updatedon: '04/30/20,00:12:22 EDT', updatedby: 'Admin'},
      { id: 4, activity: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt', updatedon: '04/30/20,00:12:22 EDT', updatedby: 'Admin'},
      { id: 5, activity: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt', updatedon: '04/30/20,00:12:22 EDT', updatedby: 'Admin'},
    ];
  }
}
