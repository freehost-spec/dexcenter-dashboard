import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { CommonService } from 'src/app/services/common.service';
@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent implements OnInit, OnDestroy {

  showNav: boolean;
  navList: any;
  fabList: any[] = [];
  subscription: Subscription;

  constructor(
    private router: Router,
    private commonService: CommonService
  ) {
    this.subscription = this.commonService.getData().subscribe(data => {
      if (data) {
        this.fabList = data.data;
      } else {
        this.fabList = [];
      }
    });
  }

  ngOnInit() {
    this.showNav = false;

    this.navList = [
      { name: 'Sessions', route: '/' },
      { name: 'User Activation', route: '/' },
      { name: 'User Management', route: '/' },
      { name: 'Logging', route: '/' },
      { name: 'Diagnostic', route: '/' },
      { name: 'Workflow', route: '/' },
      { name: 'Database Management', route: '/' },
      { name: 'Datastores', route: '/' },
      { name: 'Reports', route: '/' },
      { name: 'Queue Information', route: '/queue-info' },
      { name: 'System Connection', route: '/' },
    ];
  }

  openNav() {
    this.showNav = !this.showNav;
  }

  goToPage(route) {
    this.router.navigate([route]);
    this.showNav = false;
  }

  ngOnDestroy() {
    // unsubscribe to ensure no memory leaks
    this.subscription.unsubscribe();
  }

}
