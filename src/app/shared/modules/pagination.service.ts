import { Injectable } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Injectable()
export class PaginationService {

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { }


  addQueryParams(data) {
    this.router.navigate([],
      {
        relativeTo: this.activatedRoute,
        queryParams: data,
        queryParamsHandling: 'merge'
      });
  }


  removeQueryParams(...keys) {
    let queryParams = (<any>this.router).rawUrlTree.queryParams;
    queryParams = JSON.parse(JSON.stringify(queryParams));
    for (const key of keys) {
      delete queryParams[key];
    }
    this.router.navigate([],
      {
        relativeTo: this.activatedRoute,
        queryParams,
      }
    );
  }

  refresh() {
    this.router.navigate([],
      {
        relativeTo: this.activatedRoute,
        queryParams: { _r: this.rand },
        queryParamsHandling: 'merge'
      });
  }


  get rand() {
    return Date.now().toString(34);
  }

}
