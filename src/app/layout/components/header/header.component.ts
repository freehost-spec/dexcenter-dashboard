import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {

  subscription: Subscription;
  activeUrl: any;

  constructor(private router: Router) {
    // router.events.subscribe((url: any) => console.log(url));
    // this.activeUrl = router.url;
    this.subscription = this.router.events.subscribe(s => {
      if (s instanceof NavigationEnd) {
        if (s.urlAfterRedirects.includes('queue-info')) {
          this.activeUrl = 'Queue Information';
        } else {
          this.activeUrl = null;
        }
      }
    });
  }
  ngOnInit() {

  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  goToHome() {
    this.router.navigate(['/']);
  }

}
