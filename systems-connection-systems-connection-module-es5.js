function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["systems-connection-systems-connection-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/systems-connection/box-list/box-list.component.html":
  /*!******************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layout/systems-connection/box-list/box-list.component.html ***!
    \******************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppLayoutSystemsConnectionBoxListBoxListComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"box-list-container mt-20\">\n    <div class=\"dxs-container\">\n        <div class=\"dxs-icons pt-10 pl-15 pr-2\">\n            <img src=\" https://freehost-spec.github.io/dexcenter-dashboard/assets/images/icons/icon-dxs.svg \" alt=\" \" class=\"icons-5xl \">\n            <img src=\" https://freehost-spec.github.io/dexcenter-dashboard/assets/images/icons/ellipse-w.svg\" alt=\" \" class=\"icons-xs \">\n        </div>\n        <div class=\"dxs-icons pt-5 pl-15 pr-5\">\n            <div class=\"font-l font-white\">DXS</div>\n            <img src=\" https://freehost-spec.github.io/dexcenter-dashboard/assets/images/icons/icon-on-green.svg \" alt=\" \" class=\"icons-l \">\n        </div>\n    </div>\n    <div class=\"box-list\">\n        <app-box></app-box>\n    </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/systems-connection/box/box.component.html":
  /*!********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layout/systems-connection/box/box.component.html ***!
    \********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppLayoutSystemsConnectionBoxBoxComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"box-container\">\n    <div class=\"box-left ml-20\">\n        <div class=\"dxs-container mr-10\">\n            <div class=\"dxs-icons pt-10 pl-15 pr-2\">\n                <img src=\" https://freehost-spec.github.io/dexcenter-dashboard/assets/images/icons/icon-db.svg \" alt=\" \" class=\"icons-2xl \">\n                <img src=\" https://freehost-spec.github.io/dexcenter-dashboard/assets/images/icons/ellipse-b.svg\" alt=\" \" class=\"icons-xs \">\n            </div>\n            <div class=\"dxs-icons pt-15 pl-15 pr-5\">\n                <div class=\"font-l font-blue\">DB</div>\n                <img src=\" https://freehost-spec.github.io/dexcenter-dashboard/assets/images/icons/icon-on-green.svg \" alt=\" \" class=\"icons-l \">\n            </div>\n        </div>\n        <div class=\"dxs-container\">\n            <div class=\"dxs-icons pt-10 pl-15 pr-2\">\n                <img src=\" https://freehost-spec.github.io/dexcenter-dashboard/assets/images/icons/icon-ds.svg \" alt=\" \" class=\"icons-2xl \">\n                <img src=\" https://freehost-spec.github.io/dexcenter-dashboard/assets/images/icons/ellipse-b.svg\" alt=\" \" class=\"icons-xs \">\n            </div>\n            <div class=\"dxs-icons pt-15 pl-15 pr-5\">\n                <div class=\"font-l font-blue\">DS</div>\n                <img src=\" https://freehost-spec.github.io/dexcenter-dashboard/assets/images/icons/icon-on-green.svg \" alt=\" \" class=\"icons-l \">\n            </div>\n        </div>\n    </div>\n    <div class=\"divider ml-20 mr-20\"></div>\n    <div class=\"box-scroll\">\n        <ng-container *ngFor=\"let item of dts\">\n            <div class=\"box-right mr-10\">\n                <div class=\"dxs-container\">\n                    <div class=\"dxs-icons pt-10 pl-15 pr-2\">\n                        <img src=\" https://freehost-spec.github.io/dexcenter-dashboard/assets/images/icons/icon-dts.svg \" alt=\" \" class=\"icons-xl mt-10 \">\n                        <img src=\" https://freehost-spec.github.io/dexcenter-dashboard/assets/images/icons/ellipse-b.svg\" alt=\" \" class=\"icons-xs \">\n                    </div>\n                    <div class=\"dxs-icons pt-10 pl-15 pr-5\">\n                        <div class=\"font-l font-blue\">{{item.dtsname}}</div>\n                        <img src=\" https://freehost-spec.github.io/dexcenter-dashboard/assets/images/icons/icon-on-green.svg \" alt=\" \" class=\"icons-l \">\n                    </div>\n                </div>\n            </div>\n        </ng-container>\n    </div>\n\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/systems-connection/connection-table/connection-table.component.html":
  /*!**********************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layout/systems-connection/connection-table/connection-table.component.html ***!
    \**********************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppLayoutSystemsConnectionConnectionTableConnectionTableComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"connection-container mt-10\">\n    <div class=\"p-20 connection-content\">\n        <div class=\"connection-header\">\n            <div class=\"font-xl fw-500\">Systems Connections</div>\n            <div class=\"search-box mr-10\">\n                <div>\n                    <img src=\"https://freehost-spec.github.io/dexcenter-dashboard/assets/images/icons/icon-search.svg\" alt=\"Home\" class=\"icons-xxs\">\n                    <input type=\"text\" placeholder=\"Search\" name=\"search\">\n                </div>\n                <img src=\"https://freehost-spec.github.io/dexcenter-dashboard/assets/images/icons/icon-close.svg\" alt=\"Home\" class=\"icons-xxxs\">\n            </div>\n        </div>\n        <div class=\"connection-body mt-20 font-m\">\n            <!-- Table header -->\n            <div class=\"connection-rowtitle\">\n                <div class=\"system-name ml-50 fw-500\">System Name ↕</div>\n                <div class=\"parent-name fw-500\">Parent system Name ↕</div>\n                <div class=\"connection-number fw-500\">No of connection ↕</div>\n                <div class=\"fail-connection fw-500\">Connection Fail ↕</div>\n                <div class=\"utilisation fw-500\">Utilisation %↕</div>\n                <div class=\"state fw-500\">State↕</div>\n            </div>\n            <!-- Filter row -->\n            <div class=\"filter\">\n                <div class=\"filter-system-name ml-50\">\n                    <div class=\"filter-box\">\n                        <input type=\"text \" placeholder=\"Filter\" name=\"filter \">\n                        <img src=\" https://freehost-spec.github.io/dexcenter-dashboard/assets/images/icons/arrow_drop_down-24px.svg \" alt=\" \" class=\"icons-xs \">\n                    </div>\n                </div>\n                <div class=\"filter-parent-name\">\n                    <div class=\"filter-box\">\n                        <input type=\"text \" placeholder=\"Filter\" name=\"filter \">\n                        <img src=\" https://freehost-spec.github.io/dexcenter-dashboard/assets/images/icons/arrow_drop_down-24px.svg \" alt=\" \" class=\"icons-xs \">\n                    </div>\n                </div>\n                <div class=\"filter-connection-number\">\n                    <div class=\"filter-box\">\n                        <input type=\"text \" placeholder=\"Filter\" name=\"filter \">\n                        <img src=\" https://freehost-spec.github.io/dexcenter-dashboard/assets/images/icons/arrow_drop_down-24px.svg \" alt=\" \" class=\"icons-xs \">\n                    </div>\n                </div>\n                <div class=\"filter-fail-connection\">\n                    <div class=\"filter-box\">\n                        <input type=\"text \" placeholder=\"Filter\" name=\"filter \">\n                        <img src=\" https://freehost-spec.github.io/dexcenter-dashboard/assets/images/icons/arrow_drop_down-24px.svg \" alt=\" \" class=\"icons-xs \">\n                    </div>\n                </div>\n                <div class=\"filter-utilisation\">\n                    <div class=\"filter-box\">\n                        <input type=\"text \" placeholder=\"Filter\" name=\"filter \">\n                        <img src=\" https://freehost-spec.github.io/dexcenter-dashboard/assets/images/icons/arrow_drop_down-24px.svg \" alt=\" \" class=\"icons-xs \">\n                    </div>\n                </div>\n                <div class=\"filter-state\">\n                    <div class=\"filter-box\">\n                        <input type=\"text \" placeholder=\"Filter\" name=\"filter \">\n                        <img src=\" https://freehost-spec.github.io/dexcenter-dashboard/assets/images/icons/arrow_drop_down-24px.svg \" alt=\" \" class=\"icons-xs \">\n                    </div>\n                </div>\n            </div>\n            <!-- table descriptions -->\n            <ng-container *ngFor=\"let item of connectiondata\">\n                <div class=\"connection-tr\">\n                    <div class=\"connection-rowtitle connection-td\">\n                        <div class=\"system-name  ml-50\">{{item.systemname}}</div>\n                        <div class=\"parent-name\">{{item.parentname}}</div>\n                        <div class=\"connection-number\">{{item.connectionnumber}}</div>\n                        <div class=\"fail-connection\">{{item.failconnection}}</div>\n                        <div class=\"utilisation\">{{item.utilisation}}</div>\n                        <div class=\"state\">{{item.state}}</div>\n                    </div>\n                    <div class=\"ml-50 divider\">\n                        <hr>\n                    </div>\n                </div>\n            </ng-container>\n            <!-- Paggination -->\n            <ng-container>\n                <div class=\"page-container\">\n                    <div class=\"pt-5 pb-5 page-content\">\n                        <div class=\"pagination-left pl-20 pb-5 pt-5 font-s\">\n                            Viewing 07 of 200 Records\n                        </div>\n                        <div class=\"pagination-right font-s mr-30\">\n                            <div class=\"pb-5 pt-5\">\n                                <img src=\"https://freehost-spec.github.io/dexcenter-dashboard/assets/images/icons/skip_first.svg\" alt=\"\" class=\"icons-xs\">\n                            </div>\n                            <div class=\"pb-5 pt-5\">\n                                <img src=\"https://freehost-spec.github.io/dexcenter-dashboard/assets/images/icons/skip_previous.svg\" alt=\"\" class=\"icons-xs mr-10 ml-10\">\n                            </div>\n                            <div class=\"page-details\">\n                                <p>Page</p>\n                                <input type=\"text\" class=\"page-number ml-5 mr-5 p-5\" size=\"6\" value=\"1\">\n                                <p>of 76</p>\n                            </div>\n                            <div class=\"pb-5 pt-5\">\n                                <img src=\"https://freehost-spec.github.io/dexcenter-dashboard/assets/images/icons/skip_next.svg\" alt=\"\" class=\"icons-xs mr-10 ml-10\">\n                            </div>\n                            <div class=\"pb-5 pt-5\">\n                                <img src=\"https://freehost-spec.github.io/dexcenter-dashboard/assets/images/icons/skip_last.svg\" alt=\"\" class=\"icons-xs\">\n                            </div>\n                        </div>\n                    </div>\n\n                </div>\n            </ng-container>\n        </div>\n    </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/systems-connection/diagram-view/diagram-view.component.html":
  /*!**************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layout/systems-connection/diagram-view/diagram-view.component.html ***!
    \**************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppLayoutSystemsConnectionDiagramViewDiagramViewComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"system-diagram\">\n  <div class=\"outer-circle\">\n    <div class=\"inner-circle-1\"></div>\n    <div class=\"inner-circle-2\"></div>\n    <div class=\"inner-circle-3\"></div>\n  </div>\n</div>\n<ng-container>\n  <div class=\"direct-connect\">\n    <div class=\"direct-connect-header\">\n      <div class=\"direct-connect-header font-l ml-20\">\n        DTS5- Direct connect\n      </div>\n      <img src=\"https://freehost-spec.github.io/dexcenter-dashboard/assets/images/icons/icon-close.svg\" class=\"icons-xs mr-20 cp\" (click)=\"closeModal('true')\"\n        alt=\" close \">\n    </div>\n    <div class=\"direct-connect-container\">\n      <div class=\"container-left\">left</div>\n      <div class=\"container-right bg-white-color\">right</div>\n    </div>\n  </div>\n</ng-container>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/systems-connection/systems-connections.component.html":
  /*!********************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layout/systems-connection/systems-connections.component.html ***!
    \********************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppLayoutSystemsConnectionSystemsConnectionsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"system-connection-container m-20 pl-10 \">\n    <div class=\"font-xl fw-500 mb-20\">\n        Systems Connection\n    </div>\n\n    <!-- <div class=\"system-connection-content \" *ngIf=\"!closeToolSec \">\n        <div>\n            <button class=\"primary-btn \">Tabular View</button>\n            <button class=\"primary-btn \">Diagram View</button>\n        </div>\n        <ng-container>\n            <app-tabular-view></app-tabular-view>\n        </ng-container>\n        <ng-container>\n            <app-diagram-view></app-diagram-view>\n        </ng-container>\n    </div> -->\n\n\n    <div class=\"connection-view-content\" *ngIf=\"!closeToolSec \">\n        <div>\n            <button class=\"primary-btn \" (click)=\"changeNav( 'tabular') \" [ngClass]=\"activatedTab==='tabular' ? 'selected' : '' \">Tabular View</button>\n            <button class=\"primary-btn \" (click)=\"changeNav( 'diagram') \" [ngClass]=\"activatedTab==='diagram' ? 'selected' : '' \">Diagram View</button>\n        </div>\n        <ng-container *ngIf=\"activatedTab==='tabular' \">\n            <app-tabular-view></app-tabular-view>\n        </ng-container>\n        <ng-container *ngIf=\"activatedTab==='diagram' \">\n            <app-diagram-view></app-diagram-view>\n        </ng-container>\n    </div>\n\n\n\n    <ng-container>\n        <app-connection-table></app-connection-table>\n    </ng-container>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/systems-connection/tabular-view/tabular-view.component.html":
  /*!**************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layout/systems-connection/tabular-view/tabular-view.component.html ***!
    \**************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppLayoutSystemsConnectionTabularViewTabularViewComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-box-list></app-box-list>\n\n\n<!-- table -->\n";
    /***/
  },

  /***/
  "./src/app/layout/systems-connection/box-list/box-list.component.scss":
  /*!****************************************************************************!*\
    !*** ./src/app/layout/systems-connection/box-list/box-list.component.scss ***!
    \****************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppLayoutSystemsConnectionBoxListBoxListComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".box-list-container {\n  display: flex;\n  flex-direction: column;\n}\n.box-list-container .dxs-container {\n  width: 106px;\n  height: 78px;\n  background-color: #034EA2;\n  box-shadow: 0px 3px 0px #034EA2;\n  border: 1px solid #034EA2;\n  border-radius: 8px 8px 0px 0px;\n}\n.box-list-container .dxs-container .dxs-icons {\n  display: flex;\n  justify-content: space-between;\n}\n.box-list-container .box-list {\n  width: 100%;\n  height: 154px;\n  border: 1px solid #CCCCCC;\n  border-radius: 0px 7px 7px 7px;\n  background-color: white;\n  display: flex;\n  align-items: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hcHBsZS9wcm9qZWN0L2RleGNlbnRlci1kYXNoYm9hcmQvc3JjL2FwcC9sYXlvdXQvc3lzdGVtcy1jb25uZWN0aW9uL2JveC1saXN0L2JveC1saXN0LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9sYXlvdXQvc3lzdGVtcy1jb25uZWN0aW9uL2JveC1saXN0L2JveC1saXN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0FDQ0o7QURBSTtFQUNJLFlBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7RUFDQSwrQkFBQTtFQUNBLHlCQUFBO0VBQ0EsOEJBQUE7QUNFUjtBRERRO0VBQ0ksYUFBQTtFQUNBLDhCQUFBO0FDR1o7QURBSTtFQUNJLFdBQUE7RUFDQSxhQUFBO0VBQ0EseUJBQUE7RUFDQSw4QkFBQTtFQUNBLHVCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0FDRVIiLCJmaWxlIjoic3JjL2FwcC9sYXlvdXQvc3lzdGVtcy1jb25uZWN0aW9uL2JveC1saXN0L2JveC1saXN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJveC1saXN0LWNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIC5keHMtY29udGFpbmVyIHtcbiAgICAgICAgd2lkdGg6IDEwNnB4O1xuICAgICAgICBoZWlnaHQ6IDc4cHg7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMwMzRFQTI7XG4gICAgICAgIGJveC1zaGFkb3c6IDBweCAzcHggMHB4ICMwMzRFQTI7XG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICMwMzRFQTI7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDhweCA4cHggMHB4IDBweDtcbiAgICAgICAgLmR4cy1pY29ucyB7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICB9XG4gICAgfVxuICAgIC5ib3gtbGlzdCB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBoZWlnaHQ6IDE1NHB4O1xuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjQ0NDQ0NDO1xuICAgICAgICBib3JkZXItcmFkaXVzOiAwcHggN3B4IDdweCA3cHg7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIH1cbn0iLCIuYm94LWxpc3QtY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cbi5ib3gtbGlzdC1jb250YWluZXIgLmR4cy1jb250YWluZXIge1xuICB3aWR0aDogMTA2cHg7XG4gIGhlaWdodDogNzhweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAzNEVBMjtcbiAgYm94LXNoYWRvdzogMHB4IDNweCAwcHggIzAzNEVBMjtcbiAgYm9yZGVyOiAxcHggc29saWQgIzAzNEVBMjtcbiAgYm9yZGVyLXJhZGl1czogOHB4IDhweCAwcHggMHB4O1xufVxuLmJveC1saXN0LWNvbnRhaW5lciAuZHhzLWNvbnRhaW5lciAuZHhzLWljb25zIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuLmJveC1saXN0LWNvbnRhaW5lciAuYm94LWxpc3Qge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxNTRweDtcbiAgYm9yZGVyOiAxcHggc29saWQgI0NDQ0NDQztcbiAgYm9yZGVyLXJhZGl1czogMHB4IDdweCA3cHggN3B4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/layout/systems-connection/box-list/box-list.component.ts":
  /*!**************************************************************************!*\
    !*** ./src/app/layout/systems-connection/box-list/box-list.component.ts ***!
    \**************************************************************************/

  /*! exports provided: BoxListComponent */

  /***/
  function srcAppLayoutSystemsConnectionBoxListBoxListComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BoxListComponent", function () {
      return BoxListComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var BoxListComponent = /*#__PURE__*/function () {
      function BoxListComponent() {
        _classCallCheck(this, BoxListComponent);
      }

      _createClass(BoxListComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return BoxListComponent;
    }();

    BoxListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-box-list',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./box-list.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/systems-connection/box-list/box-list.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./box-list.component.scss */
      "./src/app/layout/systems-connection/box-list/box-list.component.scss"))["default"]]
    })], BoxListComponent);
    /***/
  },

  /***/
  "./src/app/layout/systems-connection/box/box.component.scss":
  /*!******************************************************************!*\
    !*** ./src/app/layout/systems-connection/box/box.component.scss ***!
    \******************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppLayoutSystemsConnectionBoxBoxComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".box-container {\n  display: flex;\n  align-items: center;\n}\n.box-container .box-left {\n  display: flex;\n}\n.box-container .box-left .dxs-container {\n  width: 106px;\n  height: 88px;\n  background-color: #F6F8F9;\n  box-shadow: 0px 3px 0px #034EA2;\n  border: 1px solid #034EA2;\n  border-radius: 8px;\n}\n.box-container .box-left .dxs-container .dxs-icons {\n  display: flex;\n  justify-content: space-between;\n}\n.box-container .divider {\n  border: 1px solid #034EA2;\n  height: 88px;\n}\n.box-container .box-scroll {\n  display: flex;\n  max-width: 1041px;\n  overflow: auto;\n  margin-top: 15px;\n}\n.box-container .box-scroll .box-right {\n  height: 92px;\n}\n.box-container .box-scroll .box-right .dxs-container {\n  width: 106px;\n  height: 88px;\n  background-color: #F6F8F9;\n  box-shadow: 0px 3px 0px #034EA2;\n  border: 1px solid #034EA2;\n  border-radius: 8px;\n}\n.box-container .box-scroll .box-right .dxs-container .dxs-icons {\n  display: flex;\n  justify-content: space-between;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hcHBsZS9wcm9qZWN0L2RleGNlbnRlci1kYXNoYm9hcmQvc3JjL2FwcC9sYXlvdXQvc3lzdGVtcy1jb25uZWN0aW9uL2JveC9ib3guY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2xheW91dC9zeXN0ZW1zLWNvbm5lY3Rpb24vYm94L2JveC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtBQ0NKO0FEQUk7RUFDSSxhQUFBO0FDRVI7QUREUTtFQUNJLFlBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7RUFDQSwrQkFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7QUNHWjtBREZZO0VBQ0ksYUFBQTtFQUNBLDhCQUFBO0FDSWhCO0FEQUk7RUFDSSx5QkFBQTtFQUNBLFlBQUE7QUNFUjtBREFJO0VBQ0ksYUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0FDRVI7QUREUTtFQUNJLFlBQUE7QUNHWjtBREZZO0VBQ0ksWUFBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtFQUNBLCtCQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtBQ0loQjtBREhnQjtFQUNJLGFBQUE7RUFDQSw4QkFBQTtBQ0twQiIsImZpbGUiOiJzcmMvYXBwL2xheW91dC9zeXN0ZW1zLWNvbm5lY3Rpb24vYm94L2JveC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ib3gtY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgLmJveC1sZWZ0IHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgLmR4cy1jb250YWluZXIge1xuICAgICAgICAgICAgd2lkdGg6IDEwNnB4O1xuICAgICAgICAgICAgaGVpZ2h0OiA4OHB4O1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0Y2RjhGOTtcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IDBweCAzcHggMHB4ICMwMzRFQTI7XG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjMDM0RUEyO1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogOHB4O1xuICAgICAgICAgICAgLmR4cy1pY29ucyB7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgLmRpdmlkZXIge1xuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjMDM0RUEyO1xuICAgICAgICBoZWlnaHQ6IDg4cHg7XG4gICAgfVxuICAgIC5ib3gtc2Nyb2xsIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgbWF4LXdpZHRoOiAxMDQxcHg7XG4gICAgICAgIG92ZXJmbG93OiBhdXRvO1xuICAgICAgICBtYXJnaW4tdG9wOiAxNXB4O1xuICAgICAgICAuYm94LXJpZ2h0IHtcbiAgICAgICAgICAgIGhlaWdodDogOTJweDtcbiAgICAgICAgICAgIC5keHMtY29udGFpbmVyIHtcbiAgICAgICAgICAgICAgICB3aWR0aDogMTA2cHg7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiA4OHB4O1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNGNkY4Rjk7XG4gICAgICAgICAgICAgICAgYm94LXNoYWRvdzogMHB4IDNweCAwcHggIzAzNEVBMjtcbiAgICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjMDM0RUEyO1xuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgICAgICAgICAgICAgICAuZHhzLWljb25zIHtcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn0iLCIuYm94LWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4uYm94LWNvbnRhaW5lciAuYm94LWxlZnQge1xuICBkaXNwbGF5OiBmbGV4O1xufVxuLmJveC1jb250YWluZXIgLmJveC1sZWZ0IC5keHMtY29udGFpbmVyIHtcbiAgd2lkdGg6IDEwNnB4O1xuICBoZWlnaHQ6IDg4cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGNkY4Rjk7XG4gIGJveC1zaGFkb3c6IDBweCAzcHggMHB4ICMwMzRFQTI7XG4gIGJvcmRlcjogMXB4IHNvbGlkICMwMzRFQTI7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbn1cbi5ib3gtY29udGFpbmVyIC5ib3gtbGVmdCAuZHhzLWNvbnRhaW5lciAuZHhzLWljb25zIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuLmJveC1jb250YWluZXIgLmRpdmlkZXIge1xuICBib3JkZXI6IDFweCBzb2xpZCAjMDM0RUEyO1xuICBoZWlnaHQ6IDg4cHg7XG59XG4uYm94LWNvbnRhaW5lciAuYm94LXNjcm9sbCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIG1heC13aWR0aDogMTA0MXB4O1xuICBvdmVyZmxvdzogYXV0bztcbiAgbWFyZ2luLXRvcDogMTVweDtcbn1cbi5ib3gtY29udGFpbmVyIC5ib3gtc2Nyb2xsIC5ib3gtcmlnaHQge1xuICBoZWlnaHQ6IDkycHg7XG59XG4uYm94LWNvbnRhaW5lciAuYm94LXNjcm9sbCAuYm94LXJpZ2h0IC5keHMtY29udGFpbmVyIHtcbiAgd2lkdGg6IDEwNnB4O1xuICBoZWlnaHQ6IDg4cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGNkY4Rjk7XG4gIGJveC1zaGFkb3c6IDBweCAzcHggMHB4ICMwMzRFQTI7XG4gIGJvcmRlcjogMXB4IHNvbGlkICMwMzRFQTI7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbn1cbi5ib3gtY29udGFpbmVyIC5ib3gtc2Nyb2xsIC5ib3gtcmlnaHQgLmR4cy1jb250YWluZXIgLmR4cy1pY29ucyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/layout/systems-connection/box/box.component.ts":
  /*!****************************************************************!*\
    !*** ./src/app/layout/systems-connection/box/box.component.ts ***!
    \****************************************************************/

  /*! exports provided: BoxComponent */

  /***/
  function srcAppLayoutSystemsConnectionBoxBoxComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BoxComponent", function () {
      return BoxComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var BoxComponent = /*#__PURE__*/function () {
      function BoxComponent() {
        _classCallCheck(this, BoxComponent);
      }

      _createClass(BoxComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.dts = [{
            id: 1,
            dtsname: 'DTS1'
          }, {
            id: 2,
            dtsname: 'DTS2'
          }, {
            id: 3,
            dtsname: 'DTS3'
          }, {
            id: 4,
            dtsname: 'DTS4'
          }, {
            id: 5,
            dtsname: 'DTS5'
          }, {
            id: 6,
            dtsname: 'DTS6'
          }, {
            id: 7,
            dtsname: 'DTS7'
          }, {
            id: 8,
            dtsname: 'DTS8'
          }, {
            id: 9,
            dtsname: 'DTS9'
          }, {
            id: 10,
            dtsname: 'DTS10'
          }];
        }
      }]);

      return BoxComponent;
    }();

    BoxComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-box',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./box.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/systems-connection/box/box.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./box.component.scss */
      "./src/app/layout/systems-connection/box/box.component.scss"))["default"]]
    })], BoxComponent);
    /***/
  },

  /***/
  "./src/app/layout/systems-connection/connection-table/connection-table.component.scss":
  /*!********************************************************************************************!*\
    !*** ./src/app/layout/systems-connection/connection-table/connection-table.component.scss ***!
    \********************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppLayoutSystemsConnectionConnectionTableConnectionTableComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".connection-container {\n  width: 100%;\n  height: 520px;\n  border: 1px solid #CCCCCC;\n  border-radius: 0px 7px 7px 7px;\n  background-color: white;\n}\n.connection-container .connection-content {\n  display: flex;\n  flex-direction: column;\n}\n.connection-container .connection-content .connection-header {\n  display: flex;\n  justify-content: space-between;\n  color: #111111;\n}\n.connection-container .connection-content .connection-header .search-box {\n  position: relative;\n  width: 288px;\n  height: 30px;\n}\n.connection-container .connection-content .connection-header .search-box div {\n  width: 100%;\n  display: flex;\n}\n.connection-container .connection-content .connection-header .search-box div > input {\n  width: 100%;\n  padding: 6px 12px;\n  text-indent: 20px;\n}\n.connection-container .connection-content .connection-header .search-box div > img {\n  position: absolute;\n  transform: rotate(270deg);\n  left: 10px;\n  top: 8px;\n}\n.connection-container .connection-content .connection-header .search-box > img {\n  position: absolute;\n  right: 10px;\n  top: 8px;\n}\n.connection-container .connection-content .connection-body {\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n}\n.connection-container .connection-content .connection-body .connection-rowtitle {\n  display: flex;\n  align-items: center;\n  text-align: left;\n  padding-top: 12px;\n  padding-bottom: 12px;\n  background-color: #dfe2ee;\n  border-radius: 4px 4px 0px 0px;\n  border: none;\n}\n.connection-container .connection-content .connection-body .connection-rowtitle .system-name {\n  width: 16%;\n}\n.connection-container .connection-content .connection-body .connection-rowtitle .parent-name {\n  width: 16%;\n}\n.connection-container .connection-content .connection-body .connection-rowtitle .connection-number {\n  width: 16%;\n}\n.connection-container .connection-content .connection-body .connection-rowtitle .fail-connection {\n  width: 16%;\n}\n.connection-container .connection-content .connection-body .connection-rowtitle .utilisation {\n  width: 15%;\n}\n.connection-container .connection-content .connection-body .connection-rowtitle .state {\n  width: 15%;\n}\n.connection-container .connection-content .connection-body .filter {\n  width: 100%;\n  background-color: white;\n  display: flex;\n  height: 50px;\n  align-items: center;\n  border: 1px solid #E7E7EC;\n}\n.connection-container .connection-content .connection-body .filter .filter-system-name {\n  width: 16%;\n}\n.connection-container .connection-content .connection-body .filter .filter-system-name .filter-box {\n  width: 40%;\n}\n.connection-container .connection-content .connection-body .filter .filter-parent-name {\n  width: 16%;\n}\n.connection-container .connection-content .connection-body .filter .filter-parent-name .filter-box {\n  width: 40%;\n}\n.connection-container .connection-content .connection-body .filter .filter-connection-number {\n  width: 16%;\n}\n.connection-container .connection-content .connection-body .filter .filter-connection-number .filter-box {\n  width: 35%;\n}\n.connection-container .connection-content .connection-body .filter .filter-fail-connection {\n  width: 16%;\n}\n.connection-container .connection-content .connection-body .filter .filter-fail-connection .filter-box {\n  width: 35%;\n}\n.connection-container .connection-content .connection-body .filter .filter-utilisation {\n  width: 15%;\n}\n.connection-container .connection-content .connection-body .filter .filter-utilisation .filter-box {\n  width: 35%;\n}\n.connection-container .connection-content .connection-body .filter .filter-state {\n  width: 15%;\n}\n.connection-container .connection-content .connection-body .filter .filter-state .filter-box {\n  width: 35%;\n}\n.connection-container .connection-content .connection-body .connection-tr {\n  display: flex;\n  flex-direction: column;\n  background-color: white;\n  border-left: 1px solid #E7E7EC;\n  border-right: 1px solid #E7E7EC;\n}\n.connection-container .connection-content .connection-body .connection-tr .connection-td {\n  width: 100%;\n  height: 34px;\n  border-radius: 0px;\n  background-color: white;\n  font-size: 13px;\n}\n.connection-container .connection-content .connection-body .connection-tr .divider {\n  width: 93%;\n}\n.connection-container .connection-content .connection-body .connection-tr .divider hr {\n  border-top: 1px solid #E7E7EC;\n}\n.connection-container .connection-content .connection-body .page-container {\n  background-color: #dfe2ee !important;\n  border: 1px solid #c1c3c9;\n  border-radius: 0px 0px 4px 4px;\n}\n.connection-container .connection-content .connection-body .page-container .page-content {\n  display: flex;\n  justify-content: space-between;\n  text-align: left;\n  align-items: center;\n  color: #333333;\n}\n.connection-container .connection-content .connection-body .page-container .page-content > .pagination-left {\n  width: 30%;\n}\n.connection-container .connection-content .connection-body .page-container .page-content > .pagination-right {\n  width: 22%;\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-end;\n  align-items: center;\n}\n.connection-container .connection-content .connection-body .page-container .page-content > .pagination-right .page-details {\n  display: flex;\n  flex-direction: row;\n  justify-content: center !important;\n  align-items: center;\n}\n.connection-container .connection-content .connection-body .page-container .page-content > .pagination-right .page-details .page-number {\n  color: #333333;\n  border: 1px solid #c1c3c9;\n}\n.connection-container .connection-content .connection-body .page-container .page-content > .pagination-right .page-details .page-number:focus {\n  outline-style: none;\n  color: #333333;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hcHBsZS9wcm9qZWN0L2RleGNlbnRlci1kYXNoYm9hcmQvc3JjL2FwcC9sYXlvdXQvc3lzdGVtcy1jb25uZWN0aW9uL2Nvbm5lY3Rpb24tdGFibGUvY29ubmVjdGlvbi10YWJsZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbGF5b3V0L3N5c3RlbXMtY29ubmVjdGlvbi9jb25uZWN0aW9uLXRhYmxlL2Nvbm5lY3Rpb24tdGFibGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBd0JBO0VBQ0ksV0FBQTtFQUNBLGFBQUE7RUFDQSx5QkFBQTtFQUNBLDhCQUFBO0VBQ0EsdUJBQUE7QUN2Qko7QUR3Qkk7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7QUN0QlI7QUR1QlE7RUFDSSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxjQUFBO0FDckJaO0FEc0JZO0VBQ0ksa0JBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtBQ3BCaEI7QURxQmdCO0VBQ0ksV0FBQTtFQUNBLGFBQUE7QUNuQnBCO0FEb0JvQjtFQUNJLFdBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0FDbEJ4QjtBRG9Cb0I7RUFDSSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EsVUFBQTtFQUNBLFFBQUE7QUNsQnhCO0FEcUJnQjtFQUNJLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFFBQUE7QUNuQnBCO0FEdUJRO0VBQ0ksV0FBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtBQ3JCWjtBRHVCWTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxvQkFBQTtFQUNBLHlCQUFBO0VBQ0EsOEJBQUE7RUFDQSxZQUFBO0FDckJoQjtBRHNCZ0I7RUE1RVosVUFBQTtBQ3lESjtBRHNCZ0I7RUEzRVosVUFBQTtBQ3dESjtBRHNCZ0I7RUExRVosVUFBQTtBQ3VESjtBRHNCZ0I7RUF6RVosVUFBQTtBQ3NESjtBRHNCZ0I7RUF4RVosVUFBQTtBQ3FESjtBRHNCZ0I7RUF2RVosVUFBQTtBQ29ESjtBRHdCWTtFQUNJLFdBQUE7RUFDQSx1QkFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtBQ3RCaEI7QUR1QmdCO0VBdkdaLFVBQUE7QUNtRko7QURzQm9CO0VBQ0ksVUFBQTtBQ3BCeEI7QUR1QmdCO0VBekdaLFVBQUE7QUNxRko7QURzQm9CO0VBQ0ksVUFBQTtBQ3BCeEI7QUR1QmdCO0VBM0daLFVBQUE7QUN1Rko7QURzQm9CO0VBQ0ksVUFBQTtBQ3BCeEI7QUR1QmdCO0VBN0daLFVBQUE7QUN5Rko7QURzQm9CO0VBQ0ksVUFBQTtBQ3BCeEI7QUR1QmdCO0VBL0daLFVBQUE7QUMyRko7QURzQm9CO0VBQ0ksVUFBQTtBQ3BCeEI7QUR1QmdCO0VBakhaLFVBQUE7QUM2Rko7QURzQm9CO0VBQ0ksVUFBQTtBQ3BCeEI7QUR5Qlk7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLDhCQUFBO0VBQ0EsK0JBQUE7QUN2QmhCO0FEd0JnQjtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSx1QkFBQTtFQUNBLGVBQUE7QUN0QnBCO0FEd0JnQjtFQUNJLFVBQUE7QUN0QnBCO0FEdUJvQjtFQUNJLDZCQUFBO0FDckJ4QjtBRDBCWTtFQUNJLG9DQUFBO0VBQ0EseUJBQUE7RUFDQSw4QkFBQTtBQ3hCaEI7QUR5QmdCO0VBQ0ksYUFBQTtFQUNBLDhCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7QUN2QnBCO0FEd0JvQjtFQUNJLFVBQUE7QUN0QnhCO0FEd0JvQjtFQUNJLFVBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0FDdEJ4QjtBRHVCd0I7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQ0FBQTtFQUNBLG1CQUFBO0FDckI1QjtBRHNCNEI7RUFDSSxjQUFBO0VBQ0EseUJBQUE7QUNwQmhDO0FEc0I0QjtFQUNJLG1CQUFBO0VBQ0EsY0FBQTtBQ3BCaEMiLCJmaWxlIjoic3JjL2FwcC9sYXlvdXQvc3lzdGVtcy1jb25uZWN0aW9uL2Nvbm5lY3Rpb24tdGFibGUvY29ubmVjdGlvbi10YWJsZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBtaXhpbiB0YWJsZS1jb2wxIHtcbiAgICB3aWR0aDogMTYlO1xufVxuXG5AbWl4aW4gdGFibGUtY29sMiB7XG4gICAgd2lkdGg6IDE2JTtcbn1cblxuQG1peGluIHRhYmxlLWNvbDMge1xuICAgIHdpZHRoOiAxNiU7XG59XG5cbkBtaXhpbiB0YWJsZS1jb2w0IHtcbiAgICB3aWR0aDogMTYlO1xufVxuXG5AbWl4aW4gdGFibGUtY29sNSB7XG4gICAgd2lkdGg6IDE1JTtcbn1cblxuQG1peGluIHRhYmxlLWNvbDYge1xuICAgIHdpZHRoOiAxNSU7XG59XG5cbi5jb25uZWN0aW9uLWNvbnRhaW5lciB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiA1MjBweDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjQ0NDQ0NDO1xuICAgIGJvcmRlci1yYWRpdXM6IDBweCA3cHggN3B4IDdweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICAuY29ubmVjdGlvbi1jb250ZW50IHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgLmNvbm5lY3Rpb24taGVhZGVyIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgICAgICBjb2xvcjogIzExMTExMTtcbiAgICAgICAgICAgIC5zZWFyY2gtYm94IHtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDI4OHB4O1xuICAgICAgICAgICAgICAgIGhlaWdodDogMzBweDtcbiAgICAgICAgICAgICAgICBkaXYge1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICAgICAgJj5pbnB1dCB7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDZweCAxMnB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1pbmRlbnQ6IDIwcHg7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgJj5pbWcge1xuICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMjcwZGVnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxlZnQ6IDEwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICB0b3A6IDhweDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAmPmltZyB7XG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICAgICAgcmlnaHQ6IDEwcHg7XG4gICAgICAgICAgICAgICAgICAgIHRvcDogOHB4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAuY29ubmVjdGlvbi1ib2R5IHtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgICAvLyB0YWJsZS1yb3dzIGFuZCBoZWFkZXJcbiAgICAgICAgICAgIC5jb25uZWN0aW9uLXJvd3RpdGxlIHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgICAgICAgICAgICBwYWRkaW5nLXRvcDogMTJweDtcbiAgICAgICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMTJweDtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGZlMmVlO1xuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDRweCA0cHggMHB4IDBweDtcbiAgICAgICAgICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgICAgICAgICAgICAgLnN5c3RlbS1uYW1lIHtcbiAgICAgICAgICAgICAgICAgICAgQGluY2x1ZGUgdGFibGUtY29sMTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLnBhcmVudC1uYW1lIHtcbiAgICAgICAgICAgICAgICAgICAgQGluY2x1ZGUgdGFibGUtY29sMjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLmNvbm5lY3Rpb24tbnVtYmVyIHtcbiAgICAgICAgICAgICAgICAgICAgQGluY2x1ZGUgdGFibGUtY29sMztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLmZhaWwtY29ubmVjdGlvbiB7XG4gICAgICAgICAgICAgICAgICAgIEBpbmNsdWRlIHRhYmxlLWNvbDQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC51dGlsaXNhdGlvbiB7XG4gICAgICAgICAgICAgICAgICAgIEBpbmNsdWRlIHRhYmxlLWNvbDU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC5zdGF0ZSB7XG4gICAgICAgICAgICAgICAgICAgIEBpbmNsdWRlIHRhYmxlLWNvbDY7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gZmlsdGVyIHJvd1xuICAgICAgICAgICAgLmZpbHRlciB7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDUwcHg7XG4gICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjRTdFN0VDO1xuICAgICAgICAgICAgICAgIC5maWx0ZXItc3lzdGVtLW5hbWUge1xuICAgICAgICAgICAgICAgICAgICBAaW5jbHVkZSB0YWJsZS1jb2wxO1xuICAgICAgICAgICAgICAgICAgICAuZmlsdGVyLWJveCB7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogNDAlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC5maWx0ZXItcGFyZW50LW5hbWUge1xuICAgICAgICAgICAgICAgICAgICBAaW5jbHVkZSB0YWJsZS1jb2wyO1xuICAgICAgICAgICAgICAgICAgICAuZmlsdGVyLWJveCB7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogNDAlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC5maWx0ZXItY29ubmVjdGlvbi1udW1iZXIge1xuICAgICAgICAgICAgICAgICAgICBAaW5jbHVkZSB0YWJsZS1jb2wzO1xuICAgICAgICAgICAgICAgICAgICAuZmlsdGVyLWJveCB7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMzUlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC5maWx0ZXItZmFpbC1jb25uZWN0aW9uIHtcbiAgICAgICAgICAgICAgICAgICAgQGluY2x1ZGUgdGFibGUtY29sNDtcbiAgICAgICAgICAgICAgICAgICAgLmZpbHRlci1ib3gge1xuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDM1JTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAuZmlsdGVyLXV0aWxpc2F0aW9uIHtcbiAgICAgICAgICAgICAgICAgICAgQGluY2x1ZGUgdGFibGUtY29sNTtcbiAgICAgICAgICAgICAgICAgICAgLmZpbHRlci1ib3gge1xuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDM1JTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAuZmlsdGVyLXN0YXRlIHtcbiAgICAgICAgICAgICAgICAgICAgQGluY2x1ZGUgdGFibGUtY29sNjtcbiAgICAgICAgICAgICAgICAgICAgLmZpbHRlci1ib3gge1xuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDM1JTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vICB0YWJsZSBkZXNjcmlwdGlvblxuICAgICAgICAgICAgLmNvbm5lY3Rpb24tdHIge1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgICAgICBib3JkZXItbGVmdDogMXB4IHNvbGlkICNFN0U3RUM7XG4gICAgICAgICAgICAgICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgI0U3RTdFQztcbiAgICAgICAgICAgICAgICAuY29ubmVjdGlvbi10ZCB7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDM0cHg7XG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDBweDtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLmRpdmlkZXIge1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogOTMlO1xuICAgICAgICAgICAgICAgICAgICBociB7XG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItdG9wOiAxcHggc29saWQgI0U3RTdFQztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIHBhZ2luYXRpb25cbiAgICAgICAgICAgIC5wYWdlLWNvbnRhaW5lciB7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2RmZTJlZSAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNjMWMzYzk7XG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMHB4IDBweCA0cHggNHB4O1xuICAgICAgICAgICAgICAgIC5wYWdlLWNvbnRlbnQge1xuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjMzMzMzMzO1xuICAgICAgICAgICAgICAgICAgICAmPi5wYWdpbmF0aW9uLWxlZnQge1xuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDMwJTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAmPi5wYWdpbmF0aW9uLXJpZ2h0IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAyMiU7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgICAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gICAgICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgLnBhZ2UtZGV0YWlscyB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAucGFnZS1udW1iZXIge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzMzMzMzMztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2MxYzNjOTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLnBhZ2UtbnVtYmVyOmZvY3VzIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3V0bGluZS1zdHlsZTogbm9uZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICMzMzMzMzM7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufSIsIi5jb25uZWN0aW9uLWNvbnRhaW5lciB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDUyMHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjQ0NDQ0NDO1xuICBib3JkZXItcmFkaXVzOiAwcHggN3B4IDdweCA3cHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xufVxuLmNvbm5lY3Rpb24tY29udGFpbmVyIC5jb25uZWN0aW9uLWNvbnRlbnQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuLmNvbm5lY3Rpb24tY29udGFpbmVyIC5jb25uZWN0aW9uLWNvbnRlbnQgLmNvbm5lY3Rpb24taGVhZGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBjb2xvcjogIzExMTExMTtcbn1cbi5jb25uZWN0aW9uLWNvbnRhaW5lciAuY29ubmVjdGlvbi1jb250ZW50IC5jb25uZWN0aW9uLWhlYWRlciAuc2VhcmNoLWJveCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDI4OHB4O1xuICBoZWlnaHQ6IDMwcHg7XG59XG4uY29ubmVjdGlvbi1jb250YWluZXIgLmNvbm5lY3Rpb24tY29udGVudCAuY29ubmVjdGlvbi1oZWFkZXIgLnNlYXJjaC1ib3ggZGl2IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG4uY29ubmVjdGlvbi1jb250YWluZXIgLmNvbm5lY3Rpb24tY29udGVudCAuY29ubmVjdGlvbi1oZWFkZXIgLnNlYXJjaC1ib3ggZGl2ID4gaW5wdXQge1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogNnB4IDEycHg7XG4gIHRleHQtaW5kZW50OiAyMHB4O1xufVxuLmNvbm5lY3Rpb24tY29udGFpbmVyIC5jb25uZWN0aW9uLWNvbnRlbnQgLmNvbm5lY3Rpb24taGVhZGVyIC5zZWFyY2gtYm94IGRpdiA+IGltZyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdHJhbnNmb3JtOiByb3RhdGUoMjcwZGVnKTtcbiAgbGVmdDogMTBweDtcbiAgdG9wOiA4cHg7XG59XG4uY29ubmVjdGlvbi1jb250YWluZXIgLmNvbm5lY3Rpb24tY29udGVudCAuY29ubmVjdGlvbi1oZWFkZXIgLnNlYXJjaC1ib3ggPiBpbWcge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAxMHB4O1xuICB0b3A6IDhweDtcbn1cbi5jb25uZWN0aW9uLWNvbnRhaW5lciAuY29ubmVjdGlvbi1jb250ZW50IC5jb25uZWN0aW9uLWJvZHkge1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cbi5jb25uZWN0aW9uLWNvbnRhaW5lciAuY29ubmVjdGlvbi1jb250ZW50IC5jb25uZWN0aW9uLWJvZHkgLmNvbm5lY3Rpb24tcm93dGl0bGUge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBwYWRkaW5nLXRvcDogMTJweDtcbiAgcGFkZGluZy1ib3R0b206IDEycHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNkZmUyZWU7XG4gIGJvcmRlci1yYWRpdXM6IDRweCA0cHggMHB4IDBweDtcbiAgYm9yZGVyOiBub25lO1xufVxuLmNvbm5lY3Rpb24tY29udGFpbmVyIC5jb25uZWN0aW9uLWNvbnRlbnQgLmNvbm5lY3Rpb24tYm9keSAuY29ubmVjdGlvbi1yb3d0aXRsZSAuc3lzdGVtLW5hbWUge1xuICB3aWR0aDogMTYlO1xufVxuLmNvbm5lY3Rpb24tY29udGFpbmVyIC5jb25uZWN0aW9uLWNvbnRlbnQgLmNvbm5lY3Rpb24tYm9keSAuY29ubmVjdGlvbi1yb3d0aXRsZSAucGFyZW50LW5hbWUge1xuICB3aWR0aDogMTYlO1xufVxuLmNvbm5lY3Rpb24tY29udGFpbmVyIC5jb25uZWN0aW9uLWNvbnRlbnQgLmNvbm5lY3Rpb24tYm9keSAuY29ubmVjdGlvbi1yb3d0aXRsZSAuY29ubmVjdGlvbi1udW1iZXIge1xuICB3aWR0aDogMTYlO1xufVxuLmNvbm5lY3Rpb24tY29udGFpbmVyIC5jb25uZWN0aW9uLWNvbnRlbnQgLmNvbm5lY3Rpb24tYm9keSAuY29ubmVjdGlvbi1yb3d0aXRsZSAuZmFpbC1jb25uZWN0aW9uIHtcbiAgd2lkdGg6IDE2JTtcbn1cbi5jb25uZWN0aW9uLWNvbnRhaW5lciAuY29ubmVjdGlvbi1jb250ZW50IC5jb25uZWN0aW9uLWJvZHkgLmNvbm5lY3Rpb24tcm93dGl0bGUgLnV0aWxpc2F0aW9uIHtcbiAgd2lkdGg6IDE1JTtcbn1cbi5jb25uZWN0aW9uLWNvbnRhaW5lciAuY29ubmVjdGlvbi1jb250ZW50IC5jb25uZWN0aW9uLWJvZHkgLmNvbm5lY3Rpb24tcm93dGl0bGUgLnN0YXRlIHtcbiAgd2lkdGg6IDE1JTtcbn1cbi5jb25uZWN0aW9uLWNvbnRhaW5lciAuY29ubmVjdGlvbi1jb250ZW50IC5jb25uZWN0aW9uLWJvZHkgLmZpbHRlciB7XG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgZGlzcGxheTogZmxleDtcbiAgaGVpZ2h0OiA1MHB4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBib3JkZXI6IDFweCBzb2xpZCAjRTdFN0VDO1xufVxuLmNvbm5lY3Rpb24tY29udGFpbmVyIC5jb25uZWN0aW9uLWNvbnRlbnQgLmNvbm5lY3Rpb24tYm9keSAuZmlsdGVyIC5maWx0ZXItc3lzdGVtLW5hbWUge1xuICB3aWR0aDogMTYlO1xufVxuLmNvbm5lY3Rpb24tY29udGFpbmVyIC5jb25uZWN0aW9uLWNvbnRlbnQgLmNvbm5lY3Rpb24tYm9keSAuZmlsdGVyIC5maWx0ZXItc3lzdGVtLW5hbWUgLmZpbHRlci1ib3gge1xuICB3aWR0aDogNDAlO1xufVxuLmNvbm5lY3Rpb24tY29udGFpbmVyIC5jb25uZWN0aW9uLWNvbnRlbnQgLmNvbm5lY3Rpb24tYm9keSAuZmlsdGVyIC5maWx0ZXItcGFyZW50LW5hbWUge1xuICB3aWR0aDogMTYlO1xufVxuLmNvbm5lY3Rpb24tY29udGFpbmVyIC5jb25uZWN0aW9uLWNvbnRlbnQgLmNvbm5lY3Rpb24tYm9keSAuZmlsdGVyIC5maWx0ZXItcGFyZW50LW5hbWUgLmZpbHRlci1ib3gge1xuICB3aWR0aDogNDAlO1xufVxuLmNvbm5lY3Rpb24tY29udGFpbmVyIC5jb25uZWN0aW9uLWNvbnRlbnQgLmNvbm5lY3Rpb24tYm9keSAuZmlsdGVyIC5maWx0ZXItY29ubmVjdGlvbi1udW1iZXIge1xuICB3aWR0aDogMTYlO1xufVxuLmNvbm5lY3Rpb24tY29udGFpbmVyIC5jb25uZWN0aW9uLWNvbnRlbnQgLmNvbm5lY3Rpb24tYm9keSAuZmlsdGVyIC5maWx0ZXItY29ubmVjdGlvbi1udW1iZXIgLmZpbHRlci1ib3gge1xuICB3aWR0aDogMzUlO1xufVxuLmNvbm5lY3Rpb24tY29udGFpbmVyIC5jb25uZWN0aW9uLWNvbnRlbnQgLmNvbm5lY3Rpb24tYm9keSAuZmlsdGVyIC5maWx0ZXItZmFpbC1jb25uZWN0aW9uIHtcbiAgd2lkdGg6IDE2JTtcbn1cbi5jb25uZWN0aW9uLWNvbnRhaW5lciAuY29ubmVjdGlvbi1jb250ZW50IC5jb25uZWN0aW9uLWJvZHkgLmZpbHRlciAuZmlsdGVyLWZhaWwtY29ubmVjdGlvbiAuZmlsdGVyLWJveCB7XG4gIHdpZHRoOiAzNSU7XG59XG4uY29ubmVjdGlvbi1jb250YWluZXIgLmNvbm5lY3Rpb24tY29udGVudCAuY29ubmVjdGlvbi1ib2R5IC5maWx0ZXIgLmZpbHRlci11dGlsaXNhdGlvbiB7XG4gIHdpZHRoOiAxNSU7XG59XG4uY29ubmVjdGlvbi1jb250YWluZXIgLmNvbm5lY3Rpb24tY29udGVudCAuY29ubmVjdGlvbi1ib2R5IC5maWx0ZXIgLmZpbHRlci11dGlsaXNhdGlvbiAuZmlsdGVyLWJveCB7XG4gIHdpZHRoOiAzNSU7XG59XG4uY29ubmVjdGlvbi1jb250YWluZXIgLmNvbm5lY3Rpb24tY29udGVudCAuY29ubmVjdGlvbi1ib2R5IC5maWx0ZXIgLmZpbHRlci1zdGF0ZSB7XG4gIHdpZHRoOiAxNSU7XG59XG4uY29ubmVjdGlvbi1jb250YWluZXIgLmNvbm5lY3Rpb24tY29udGVudCAuY29ubmVjdGlvbi1ib2R5IC5maWx0ZXIgLmZpbHRlci1zdGF0ZSAuZmlsdGVyLWJveCB7XG4gIHdpZHRoOiAzNSU7XG59XG4uY29ubmVjdGlvbi1jb250YWluZXIgLmNvbm5lY3Rpb24tY29udGVudCAuY29ubmVjdGlvbi1ib2R5IC5jb25uZWN0aW9uLXRyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIGJvcmRlci1sZWZ0OiAxcHggc29saWQgI0U3RTdFQztcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgI0U3RTdFQztcbn1cbi5jb25uZWN0aW9uLWNvbnRhaW5lciAuY29ubmVjdGlvbi1jb250ZW50IC5jb25uZWN0aW9uLWJvZHkgLmNvbm5lY3Rpb24tdHIgLmNvbm5lY3Rpb24tdGQge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAzNHB4O1xuICBib3JkZXItcmFkaXVzOiAwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBmb250LXNpemU6IDEzcHg7XG59XG4uY29ubmVjdGlvbi1jb250YWluZXIgLmNvbm5lY3Rpb24tY29udGVudCAuY29ubmVjdGlvbi1ib2R5IC5jb25uZWN0aW9uLXRyIC5kaXZpZGVyIHtcbiAgd2lkdGg6IDkzJTtcbn1cbi5jb25uZWN0aW9uLWNvbnRhaW5lciAuY29ubmVjdGlvbi1jb250ZW50IC5jb25uZWN0aW9uLWJvZHkgLmNvbm5lY3Rpb24tdHIgLmRpdmlkZXIgaHIge1xuICBib3JkZXItdG9wOiAxcHggc29saWQgI0U3RTdFQztcbn1cbi5jb25uZWN0aW9uLWNvbnRhaW5lciAuY29ubmVjdGlvbi1jb250ZW50IC5jb25uZWN0aW9uLWJvZHkgLnBhZ2UtY29udGFpbmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2RmZTJlZSAhaW1wb3J0YW50O1xuICBib3JkZXI6IDFweCBzb2xpZCAjYzFjM2M5O1xuICBib3JkZXItcmFkaXVzOiAwcHggMHB4IDRweCA0cHg7XG59XG4uY29ubmVjdGlvbi1jb250YWluZXIgLmNvbm5lY3Rpb24tY29udGVudCAuY29ubmVjdGlvbi1ib2R5IC5wYWdlLWNvbnRhaW5lciAucGFnZS1jb250ZW50IHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBjb2xvcjogIzMzMzMzMztcbn1cbi5jb25uZWN0aW9uLWNvbnRhaW5lciAuY29ubmVjdGlvbi1jb250ZW50IC5jb25uZWN0aW9uLWJvZHkgLnBhZ2UtY29udGFpbmVyIC5wYWdlLWNvbnRlbnQgPiAucGFnaW5hdGlvbi1sZWZ0IHtcbiAgd2lkdGg6IDMwJTtcbn1cbi5jb25uZWN0aW9uLWNvbnRhaW5lciAuY29ubmVjdGlvbi1jb250ZW50IC5jb25uZWN0aW9uLWJvZHkgLnBhZ2UtY29udGFpbmVyIC5wYWdlLWNvbnRlbnQgPiAucGFnaW5hdGlvbi1yaWdodCB7XG4gIHdpZHRoOiAyMiU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4uY29ubmVjdGlvbi1jb250YWluZXIgLmNvbm5lY3Rpb24tY29udGVudCAuY29ubmVjdGlvbi1ib2R5IC5wYWdlLWNvbnRhaW5lciAucGFnZS1jb250ZW50ID4gLnBhZ2luYXRpb24tcmlnaHQgLnBhZ2UtZGV0YWlscyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyICFpbXBvcnRhbnQ7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4uY29ubmVjdGlvbi1jb250YWluZXIgLmNvbm5lY3Rpb24tY29udGVudCAuY29ubmVjdGlvbi1ib2R5IC5wYWdlLWNvbnRhaW5lciAucGFnZS1jb250ZW50ID4gLnBhZ2luYXRpb24tcmlnaHQgLnBhZ2UtZGV0YWlscyAucGFnZS1udW1iZXIge1xuICBjb2xvcjogIzMzMzMzMztcbiAgYm9yZGVyOiAxcHggc29saWQgI2MxYzNjOTtcbn1cbi5jb25uZWN0aW9uLWNvbnRhaW5lciAuY29ubmVjdGlvbi1jb250ZW50IC5jb25uZWN0aW9uLWJvZHkgLnBhZ2UtY29udGFpbmVyIC5wYWdlLWNvbnRlbnQgPiAucGFnaW5hdGlvbi1yaWdodCAucGFnZS1kZXRhaWxzIC5wYWdlLW51bWJlcjpmb2N1cyB7XG4gIG91dGxpbmUtc3R5bGU6IG5vbmU7XG4gIGNvbG9yOiAjMzMzMzMzO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/layout/systems-connection/connection-table/connection-table.component.ts":
  /*!******************************************************************************************!*\
    !*** ./src/app/layout/systems-connection/connection-table/connection-table.component.ts ***!
    \******************************************************************************************/

  /*! exports provided: ConnectionTableComponent */

  /***/
  function srcAppLayoutSystemsConnectionConnectionTableConnectionTableComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ConnectionTableComponent", function () {
      return ConnectionTableComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var ConnectionTableComponent = /*#__PURE__*/function () {
      function ConnectionTableComponent() {
        _classCallCheck(this, ConnectionTableComponent);
      }

      _createClass(ConnectionTableComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.connectiondata = [{
            id: 2,
            systemname: 'DB',
            parentname: 'DXS',
            connectionnumber: '10',
            failconnection: '0',
            utilisation: '100%',
            state: 'Working'
          }, {
            id: 1,
            systemname: 'DXS',
            parentname: 'DXS',
            connectionnumber: '10',
            failconnection: '0',
            utilisation: '40%',
            state: 'Working'
          }, {
            id: 3,
            systemname: 'DS',
            parentname: 'DXS',
            connectionnumber: '10',
            failconnection: '0',
            utilisation: '100%',
            state: 'Working'
          }, {
            id: 4,
            systemname: 'DTS1',
            parentname: 'DXS,DB,DS',
            connectionnumber: '03',
            failconnection: '0',
            utilisation: '100%',
            state: 'Fail'
          }, {
            id: 5,
            systemname: 'DTS2',
            parentname: 'DXS,DB,DS',
            connectionnumber: '03',
            failconnection: '0',
            utilisation: '30%',
            state: 'Working'
          }, {
            id: 6,
            systemname: 'DTS3',
            parentname: 'DXS,DB,DS',
            connectionnumber: '03',
            failconnection: '0',
            utilisation: '60%',
            state: 'Fail'
          }, {
            id: 7,
            systemname: 'DTS4',
            parentname: 'DXS,DB,DS',
            connectionnumber: '03',
            failconnection: '0',
            utilisation: '100%',
            state: 'Working'
          }, {
            id: 8,
            systemname: 'DTS5',
            parentname: 'DXS,DB,DS',
            connectionnumber: '03',
            failconnection: '0',
            utilisation: '100%',
            state: 'Working'
          }];
        }
      }]);

      return ConnectionTableComponent;
    }();

    ConnectionTableComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-connection-table',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./connection-table.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/systems-connection/connection-table/connection-table.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./connection-table.component.scss */
      "./src/app/layout/systems-connection/connection-table/connection-table.component.scss"))["default"]]
    })], ConnectionTableComponent);
    /***/
  },

  /***/
  "./src/app/layout/systems-connection/diagram-view/diagram-view.component.scss":
  /*!************************************************************************************!*\
    !*** ./src/app/layout/systems-connection/diagram-view/diagram-view.component.scss ***!
    \************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppLayoutSystemsConnectionDiagramViewDiagramViewComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".system-diagram > .outer-circle {\n  position: relative;\n  border-radius: 50%;\n  width: 800px;\n  height: 800px;\n  background-color: #fff;\n  border: 1px solid #989898;\n}\n.system-diagram > .outer-circle > .inner-circle-1 {\n  transform: translate(85%, 85%);\n  width: 300px;\n  height: 300px;\n  background-color: #ddd;\n  border-radius: 50%;\n}\n.system-diagram > .outer-circle > .inner-circle-2 {\n  transform: translate(152%, 2%);\n  width: 200px;\n  height: 200px;\n  background-color: #ccc;\n  border-radius: 50%;\n}\n.system-diagram > .outer-circle > .inner-circle-3 {\n  transform: translate(354%, -146%);\n  width: 100px;\n  height: 100px;\n  background-color: #034ea2;\n  border-radius: 50%;\n}\n.direct-connect {\n  width: 645px;\n  height: 560px;\n}\n.direct-connect .direct-connect-header {\n  width: 100%;\n  height: 50px;\n  background-color: #dfe2ee;\n  border-radius: 0px 4px 0px 0px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.direct-connect .direct-connect-header .direct-connect-header {\n  letter-spacing: 0.48px;\n  color: #121111;\n}\n.direct-connect .direct-connect-container {\n  display: flex;\n}\n.direct-connect .direct-connect-container .container-left {\n  width: 45%;\n  height: 510px;\n  background-color: #eef2f5;\n}\n.direct-connect .direct-connect-container .container-right {\n  background-color: white;\n  height: 510px;\n  width: 55%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hcHBsZS9wcm9qZWN0L2RleGNlbnRlci1kYXNoYm9hcmQvc3JjL2FwcC9sYXlvdXQvc3lzdGVtcy1jb25uZWN0aW9uL2RpYWdyYW0tdmlldy9kaWFncmFtLXZpZXcuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2xheW91dC9zeXN0ZW1zLWNvbm5lY3Rpb24vZGlhZ3JhbS12aWV3L2RpYWdyYW0tdmlldy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDRTtFQUNFLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EseUJBQUE7QUNBSjtBRENJO0VBQ0UsOEJBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7QUNDTjtBRENJO0VBQ0UsOEJBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7QUNDTjtBRENJO0VBQ0UsaUNBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7QUNDTjtBREdBO0VBQ0UsWUFBQTtFQUNBLGFBQUE7QUNBRjtBRENFO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtFQUNBLDhCQUFBO0VBQ0EsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7QUNDSjtBREFJO0VBQ0Usc0JBQUE7RUFDQSxjQUFBO0FDRU47QURDRTtFQUNFLGFBQUE7QUNDSjtBREFJO0VBQ0UsVUFBQTtFQUNBLGFBQUE7RUFDQSx5QkFBQTtBQ0VOO0FEQUk7RUFDRSx1QkFBQTtFQUNBLGFBQUE7RUFDQSxVQUFBO0FDRU4iLCJmaWxlIjoic3JjL2FwcC9sYXlvdXQvc3lzdGVtcy1jb25uZWN0aW9uL2RpYWdyYW0tdmlldy9kaWFncmFtLXZpZXcuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc3lzdGVtLWRpYWdyYW0ge1xuICAmID4gLm91dGVyLWNpcmNsZSB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICB3aWR0aDogODAwcHg7XG4gICAgaGVpZ2h0OiA4MDBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICM5ODk4OTg7XG4gICAgJiA+IC5pbm5lci1jaXJjbGUtMSB7XG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSg4NSUsIDg1JSk7XG4gICAgICB3aWR0aDogMzAwcHg7XG4gICAgICBoZWlnaHQ6IDMwMHB4O1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2RkZDtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICB9XG4gICAgJiA+IC5pbm5lci1jaXJjbGUtMiB7XG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgxNTIlLCAyJSk7XG4gICAgICB3aWR0aDogMjAwcHg7XG4gICAgICBoZWlnaHQ6IDIwMHB4O1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2NjYztcbiAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICB9XG4gICAgJiA+IC5pbm5lci1jaXJjbGUtMyB7XG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgzNTQlLCAtMTQ2JSk7XG4gICAgICB3aWR0aDogMTAwcHg7XG4gICAgICBoZWlnaHQ6IDEwMHB4O1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzAzNGVhMjtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICB9XG4gIH1cbn1cbi5kaXJlY3QtY29ubmVjdCB7XG4gIHdpZHRoOiA2NDVweDtcbiAgaGVpZ2h0OiA1NjBweDtcbiAgLmRpcmVjdC1jb25uZWN0LWhlYWRlciB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiA1MHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNkZmUyZWU7XG4gICAgYm9yZGVyLXJhZGl1czogMHB4IDRweCAwcHggMHB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgLmRpcmVjdC1jb25uZWN0LWhlYWRlciB7XG4gICAgICBsZXR0ZXItc3BhY2luZzogMC40OHB4O1xuICAgICAgY29sb3I6ICMxMjExMTE7XG4gICAgfVxuICB9XG4gIC5kaXJlY3QtY29ubmVjdC1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgLmNvbnRhaW5lci1sZWZ0IHtcbiAgICAgIHdpZHRoOiA0NSU7XG4gICAgICBoZWlnaHQ6IDUxMHB4O1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2VlZjJmNTtcbiAgICB9XG4gICAgLmNvbnRhaW5lci1yaWdodCB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICAgIGhlaWdodDogNTEwcHg7XG4gICAgICB3aWR0aDogNTUlO1xuICAgIH1cbiAgfVxufVxuIiwiLnN5c3RlbS1kaWFncmFtID4gLm91dGVyLWNpcmNsZSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICB3aWR0aDogODAwcHg7XG4gIGhlaWdodDogODAwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIGJvcmRlcjogMXB4IHNvbGlkICM5ODk4OTg7XG59XG4uc3lzdGVtLWRpYWdyYW0gPiAub3V0ZXItY2lyY2xlID4gLmlubmVyLWNpcmNsZS0xIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoODUlLCA4NSUpO1xuICB3aWR0aDogMzAwcHg7XG4gIGhlaWdodDogMzAwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNkZGQ7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbn1cbi5zeXN0ZW0tZGlhZ3JhbSA+IC5vdXRlci1jaXJjbGUgPiAuaW5uZXItY2lyY2xlLTIge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgxNTIlLCAyJSk7XG4gIHdpZHRoOiAyMDBweDtcbiAgaGVpZ2h0OiAyMDBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2NjYztcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xufVxuLnN5c3RlbS1kaWFncmFtID4gLm91dGVyLWNpcmNsZSA+IC5pbm5lci1jaXJjbGUtMyB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKDM1NCUsIC0xNDYlKTtcbiAgd2lkdGg6IDEwMHB4O1xuICBoZWlnaHQ6IDEwMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDM0ZWEyO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG59XG5cbi5kaXJlY3QtY29ubmVjdCB7XG4gIHdpZHRoOiA2NDVweDtcbiAgaGVpZ2h0OiA1NjBweDtcbn1cbi5kaXJlY3QtY29ubmVjdCAuZGlyZWN0LWNvbm5lY3QtaGVhZGVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNTBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2RmZTJlZTtcbiAgYm9yZGVyLXJhZGl1czogMHB4IDRweCAwcHggMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4uZGlyZWN0LWNvbm5lY3QgLmRpcmVjdC1jb25uZWN0LWhlYWRlciAuZGlyZWN0LWNvbm5lY3QtaGVhZGVyIHtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuNDhweDtcbiAgY29sb3I6ICMxMjExMTE7XG59XG4uZGlyZWN0LWNvbm5lY3QgLmRpcmVjdC1jb25uZWN0LWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG4uZGlyZWN0LWNvbm5lY3QgLmRpcmVjdC1jb25uZWN0LWNvbnRhaW5lciAuY29udGFpbmVyLWxlZnQge1xuICB3aWR0aDogNDUlO1xuICBoZWlnaHQ6IDUxMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVmMmY1O1xufVxuLmRpcmVjdC1jb25uZWN0IC5kaXJlY3QtY29ubmVjdC1jb250YWluZXIgLmNvbnRhaW5lci1yaWdodCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBoZWlnaHQ6IDUxMHB4O1xuICB3aWR0aDogNTUlO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/layout/systems-connection/diagram-view/diagram-view.component.ts":
  /*!**********************************************************************************!*\
    !*** ./src/app/layout/systems-connection/diagram-view/diagram-view.component.ts ***!
    \**********************************************************************************/

  /*! exports provided: DiagramViewComponent */

  /***/
  function srcAppLayoutSystemsConnectionDiagramViewDiagramViewComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DiagramViewComponent", function () {
      return DiagramViewComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var DiagramViewComponent = /*#__PURE__*/function () {
      function DiagramViewComponent() {
        _classCallCheck(this, DiagramViewComponent);
      }

      _createClass(DiagramViewComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return DiagramViewComponent;
    }();

    DiagramViewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-diagram-view',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./diagram-view.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/systems-connection/diagram-view/diagram-view.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./diagram-view.component.scss */
      "./src/app/layout/systems-connection/diagram-view/diagram-view.component.scss"))["default"]]
    })], DiagramViewComponent);
    /***/
  },

  /***/
  "./src/app/layout/systems-connection/systems-connection.module.ts":
  /*!************************************************************************!*\
    !*** ./src/app/layout/systems-connection/systems-connection.module.ts ***!
    \************************************************************************/

  /*! exports provided: SystemsConnectionModule */

  /***/
  function srcAppLayoutSystemsConnectionSystemsConnectionModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SystemsConnectionModule", function () {
      return SystemsConnectionModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _systems_connections_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./systems-connections.component */
    "./src/app/layout/systems-connection/systems-connections.component.ts");
    /* harmony import */


    var _tabular_view_tabular_view_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./tabular-view/tabular-view.component */
    "./src/app/layout/systems-connection/tabular-view/tabular-view.component.ts");
    /* harmony import */


    var _diagram_view_diagram_view_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./diagram-view/diagram-view.component */
    "./src/app/layout/systems-connection/diagram-view/diagram-view.component.ts");
    /* harmony import */


    var _box_box_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./box/box.component */
    "./src/app/layout/systems-connection/box/box.component.ts");
    /* harmony import */


    var _box_list_box_list_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./box-list/box-list.component */
    "./src/app/layout/systems-connection/box-list/box-list.component.ts");
    /* harmony import */


    var _connection_table_connection_table_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./connection-table/connection-table.component */
    "./src/app/layout/systems-connection/connection-table/connection-table.component.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var routes = [{
      path: '',
      component: _systems_connections_component__WEBPACK_IMPORTED_MODULE_3__["SystemsConnectionsComponent"]
    }, {
      path: '**',
      pathMatch: 'full',
      redirectTo: ''
    }];

    var SystemsConnectionModule = function SystemsConnectionModule() {
      _classCallCheck(this, SystemsConnectionModule);
    };

    SystemsConnectionModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_systems_connections_component__WEBPACK_IMPORTED_MODULE_3__["SystemsConnectionsComponent"], _tabular_view_tabular_view_component__WEBPACK_IMPORTED_MODULE_4__["TabularViewComponent"], _diagram_view_diagram_view_component__WEBPACK_IMPORTED_MODULE_5__["DiagramViewComponent"], _box_box_component__WEBPACK_IMPORTED_MODULE_6__["BoxComponent"], _box_list_box_list_component__WEBPACK_IMPORTED_MODULE_7__["BoxListComponent"], _connection_table_connection_table_component__WEBPACK_IMPORTED_MODULE_8__["ConnectionTableComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_9__["RouterModule"].forChild(routes)]
    })], SystemsConnectionModule);
    /***/
  },

  /***/
  "./src/app/layout/systems-connection/systems-connections.component.scss":
  /*!******************************************************************************!*\
    !*** ./src/app/layout/systems-connection/systems-connections.component.scss ***!
    \******************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppLayoutSystemsConnectionSystemsConnectionsComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".selected {\n  border: 1px solid #00a1d8;\n  background-color: #00a1d8;\n  color: #fff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hcHBsZS9wcm9qZWN0L2RleGNlbnRlci1kYXNoYm9hcmQvc3JjL2FwcC9sYXlvdXQvc3lzdGVtcy1jb25uZWN0aW9uL3N5c3RlbXMtY29ubmVjdGlvbnMuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2xheW91dC9zeXN0ZW1zLWNvbm5lY3Rpb24vc3lzdGVtcy1jb25uZWN0aW9ucy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHlCQUFBO0VBQ0EseUJBQUE7RUFDQSxXQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9sYXlvdXQvc3lzdGVtcy1jb25uZWN0aW9uL3N5c3RlbXMtY29ubmVjdGlvbnMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2VsZWN0ZWQge1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICMwMGExZDg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwYTFkODtcbiAgICBjb2xvcjogI2ZmZjtcbn0iLCIuc2VsZWN0ZWQge1xuICBib3JkZXI6IDFweCBzb2xpZCAjMDBhMWQ4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDBhMWQ4O1xuICBjb2xvcjogI2ZmZjtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/layout/systems-connection/systems-connections.component.ts":
  /*!****************************************************************************!*\
    !*** ./src/app/layout/systems-connection/systems-connections.component.ts ***!
    \****************************************************************************/

  /*! exports provided: SystemsConnectionsComponent */

  /***/
  function srcAppLayoutSystemsConnectionSystemsConnectionsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SystemsConnectionsComponent", function () {
      return SystemsConnectionsComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var SystemsConnectionsComponent = /*#__PURE__*/function () {
      function SystemsConnectionsComponent() {
        _classCallCheck(this, SystemsConnectionsComponent);
      }

      _createClass(SystemsConnectionsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.activatedTab = 'tabular';
        }
      }, {
        key: "changeNav",
        value: function changeNav(tab) {
          this.activatedTab = tab;
        }
      }]);

      return SystemsConnectionsComponent;
    }();

    SystemsConnectionsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-systems-connections',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./systems-connections.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/systems-connection/systems-connections.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./systems-connections.component.scss */
      "./src/app/layout/systems-connection/systems-connections.component.scss"))["default"]]
    })], SystemsConnectionsComponent);
    /***/
  },

  /***/
  "./src/app/layout/systems-connection/tabular-view/tabular-view.component.scss":
  /*!************************************************************************************!*\
    !*** ./src/app/layout/systems-connection/tabular-view/tabular-view.component.scss ***!
    \************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppLayoutSystemsConnectionTabularViewTabularViewComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xheW91dC9zeXN0ZW1zLWNvbm5lY3Rpb24vdGFidWxhci12aWV3L3RhYnVsYXItdmlldy5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/layout/systems-connection/tabular-view/tabular-view.component.ts":
  /*!**********************************************************************************!*\
    !*** ./src/app/layout/systems-connection/tabular-view/tabular-view.component.ts ***!
    \**********************************************************************************/

  /*! exports provided: TabularViewComponent */

  /***/
  function srcAppLayoutSystemsConnectionTabularViewTabularViewComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TabularViewComponent", function () {
      return TabularViewComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var TabularViewComponent = /*#__PURE__*/function () {
      function TabularViewComponent() {
        _classCallCheck(this, TabularViewComponent);
      }

      _createClass(TabularViewComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return TabularViewComponent;
    }();

    TabularViewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-tabular-view',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./tabular-view.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/systems-connection/tabular-view/tabular-view.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./tabular-view.component.scss */
      "./src/app/layout/systems-connection/tabular-view/tabular-view.component.scss"))["default"]]
    })], TabularViewComponent);
    /***/
  }
}]);
//# sourceMappingURL=systems-connection-systems-connection-module-es5.js.map