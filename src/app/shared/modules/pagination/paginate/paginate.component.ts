import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-paginate, paginate',
  templateUrl: './paginate.component.html',
  styleUrls: ['./paginate.component.scss']
})
export class PaginateComponent implements OnInit, OnChanges {

  @Input() data: any;
  @Input() pageType = '';

  pages: any = [];

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
  }

  ngOnChanges() {
    this.calculatePages();
  }

  pageChange(page) {
    this.setUrlParams = page;
  }

  calculatePages() {
    if (!this.data) { return; }
    this.pages = [];
    // tslint:disable-next-line:one-variable-per-declaration
    const current: any = this.data.current_page,
      last = this.data.total_pages,
      delta = 4,
      left = current - delta,
      right = current + delta + 1,
      range = [],
      rangeWithDots = [];
    let l;

    for (let i = 1; i <= last; i++) {
      if (i === 1 || i === last || i >= left && i < right) {
        range.push(i);
      }
    }

    for (const i of range) {
      if (l) {
        if (i - l === 2) {
          rangeWithDots.push(l + 1);
        } else if (i - l !== 1) {
          rangeWithDots.push('...');
        }
      }
      rangeWithDots.push(i);
      l = i;
    }

    this.pages = rangeWithDots;
  }

  isNaN(v: any) {
    return isNaN(v) ? true : false;
  }

  set setUrlParams(page) {
    this.router.navigate([],
      {
        relativeTo: this.activatedRoute,
        queryParams: { page, pageType: this.pageType },
        queryParamsHandling: 'merge'
      });
  }

}
