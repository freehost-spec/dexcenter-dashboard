function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["queue-info-queue-info-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/queue-info/config-modal/config-modal.component.html":
  /*!******************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layout/queue-info/config-modal/config-modal.component.html ***!
    \******************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppLayoutQueueInfoConfigModalConfigModalComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ng-container *ngIf=\"!confirmation\">\n  <div class=\"modal-container\">\n    <div class=\"modal-header\">\n      <p class=\"ml-20 font-l\">Change Configuration</p>\n      <img src=\"https://freehost-spec.github.io/dexcenter-dashboard/assets/images/icons/icon-close.svg\"\n        class=\"icons-xs mr-30 cp\" (click)=\"closeModal(configData)\" alt=\" close \">\n    </div>\n    <div class=\"info-container p-20\">\n      <div class=\"info-data pl-10\">\n        <div class=\"head\">\n          <div class=\"name\">\n            <input type=\"checkbox\" class=\"ml-10\" />\n            <div class=\"pl-10 font-m font-bold\">\n              System Name\n            </div>\n          </div>\n          <div class=\"session font-m font-bold\" (click)=\"editJobs()\">\n            Max job\n            <img src=\"https://freehost-spec.github.io/dexcenter-dashboard/assets/images/icons/edit-black.svg\"\n              class=\"icons-s ml-5\" alt=\" profile \">\n          </div>\n          <div class=\"session font-m font-bold\" (click)=\"editThread()\">\n            Max Thread\n            <img src=\"https://freehost-spec.github.io/dexcenter-dashboard/assets/images/icons/edit-black.svg\"\n              class=\"icons-s ml-5\" alt=\" profile \">\n          </div>\n        </div>\n      </div>\n      <ng-container *ngFor=\"let list of configData.data\">\n        <div class=\"info-data data-list ml-10 mr-10 p-10\">\n          <div class=\"name ml-30\">\n            {{list.name}}\n          </div>\n          <div class=\"session font-m ml-5\">\n            <input *ngIf=\"jobEdit\" class=\"p-5\" type=\"number\" onkeypress=\"return event.charCode >= 48\" min=\"1\"\n              [(ngModel)]=\"list.max_job\" />\n            <div *ngIf=\"!jobEdit\">\n              {{list.max_job}}\n            </div>\n          </div>\n          <div class=\"session font-m ml-5\">\n            <input *ngIf=\"threadEdit\" class=\"p-5\" type=\"number\" onkeypress=\"return event.charCode >= 48\" min=\"1\"\n              [(ngModel)]=\"list.max_thread\" />\n            <div *ngIf=\"!threadEdit\">\n              {{list.max_thread}}\n            </div>\n          </div>\n        </div>\n      </ng-container>\n      <div class=\"cancel-yes-container mt-20 mb-20\">\n        <button class=\"cancel-btn cp\" (click)=\"closeModal('true')\">Cancel</button>\n        <button class=\"yes-btn cp ml-10\" (click)=\"openConfirmation()\">Yes</button>\n      </div>\n    </div>\n  </div>\n</ng-container>\n\n<ng-container *ngIf=\"confirmation\">\n  <div class=\"confirmation\">\n    <div class=\"confirmation-header\">\n      <div class=\"confirmation-header-left\">\n        <img src=\"https://freehost-spec.github.io/dexcenter-dashboard/assets/images/icons/info-red.svg\"\n          class=\"icons-s ml-15 mr-5 cp\" (click)=\"closeModal('true')\" alt=\" alert \">\n        <p>Restart</p>\n      </div>\n      <img src=\"https://freehost-spec.github.io/dexcenter-dashboard/assets/images/icons/icon-close.svg\"\n        class=\"icons-xs mr-15 cp\" (click)=\"closeModal('true')\" alt=\" close \">\n    </div>\n    <p class=\"confirmation-message pt-30 pb-10\">Do you want to restart the\n      <br>\n      <b>JBoss server</b></p>\n    <div class=\"cancel-yes-container mt-20 mb-30\">\n      <button class=\"cancel-btn cp\" (click)=\"closeModal('true')\">Cancel</button>\n      <button class=\"yes-btn cp ml-10 pl-10 pr-10\" (click)=\"closeModal(configData)\">Yes, Please</button>\n    </div>\n  </div>\n</ng-container>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/queue-info/config/config.component.html":
  /*!******************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layout/queue-info/config/config.component.html ***!
    \******************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppLayoutQueueInfoConfigConfigComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<p>config works!</p>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/queue-info/confirmation/confirmation.component.html":
  /*!******************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layout/queue-info/confirmation/confirmation.component.html ***!
    \******************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppLayoutQueueInfoConfirmationConfirmationComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"confirmation\">\n\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/queue-info/queue/queue.component.html":
  /*!****************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layout/queue-info/queue/queue.component.html ***!
    \****************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppLayoutQueueInfoQueueQueueComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"m-50\">\n    <p class=\"font-xl\"><b>Queue Information</b></p>\n    <div class=\"queue-actions mb-20 mt-20\">\n        <div class=\"search-box mr-10\">\n            <input type=\"text\" placeholder=\"Search..\" name=\"search\" [(ngModel)]=\"searchKey\"\n                (ngModelChange)=\"searchData(searchKey)\">\n            <img src=\"https://freehost-spec.github.io/dexcenter-dashboard/assets/images/icons/icon-search.svg\"\n                alt=\"search\" class=\"icons-xs\">\n        </div>\n        <div class=\"settings\">\n            <div class=\"job-setting font-m\">\n                <div class=\"count pl-10 pr-10\">\n                    {{configData ? configData.max_job: '10'}}\n                </div>\n                <div class=\"text pl-10 pr-10\">\n                    Max Job\n                </div>\n            </div>\n            <div class=\"thread-setting font-m ml-10 mr-20\">\n                <div class=\"count pl-10 pr-10\">\n                    {{configData ? configData.max_thread: '10'}}\n                </div>\n                <div class=\"text pl-10 pr-10\">\n                    Max Thread\n                </div>\n            </div>\n            <button class=\"primary-btn conf-button font-m\" (click)=\"openConfig()\">\n                <img src=\"https://freehost-spec.github.io/dexcenter-dashboard/assets/images/icons/settings-24px.svg\"\n                    alt=\"\" class=\"pr-10\">Change Configuration\n            </button>\n        </div>\n    </div>\n    <div class=\"info-container\">\n        <div class=\" info-data pl-10 head\">\n            <input type=\"checkbox\" class=\"ml-10\" />\n            <div class=\"name pl-20 font-m font-bold\">\n                Queue Name\n            </div>\n            <div class=\"session font-m font-bold\">\n                Number of sessions\n            </div>\n            <div class=\"summary font-m font-bold\">\n                Summary\n            </div>\n        </div>\n        <ng-container *ngFor=\"let list of filteredData let i = index\">\n            <div class=\"info-data\">\n                <div class=\"name\">\n                    <input type=\"checkbox\" />\n                    <div class=\"pl-20 font-m\">{{list.name}}</div>\n                </div>\n                <div id=\"s-name\" class=\"session font-m ml-10\">\n                    <div class=\"session-count\" (click)=\"getList(i)\">\n                        <div class=\"count\">\n                            {{list.sessions}}\n                        </div>\n                    </div>\n                    <div class=\"sessions-name\" *ngIf=\"showList && i === selectedIndex\">\n                        <app-sessions [data]=\"list\"></app-sessions>\n                    </div>\n                </div>\n                <div class=\"summary font-m\">\n                    <app-summary [data]=\"list\"></app-summary>\n                </div>\n            </div>\n        </ng-container>\n        <ng-container>\n            <div class=\"page-container\">\n                <div class=\"pt-5 pb-5 page-content\">\n                    <div class=\"pagination-left pl-20 pb-5 pt-5 font-s\">\n                        Viewing 07 of 200 Records\n                    </div>\n                    <div class=\"pagination-right font-s mr-30\">\n                        <div class=\"pb-5 pt-5\">\n                            <img src=\"https://freehost-spec.github.io/dexcenter-dashboard/assets/images/icons/skip_first.svg\"\n                                alt=\"\" class=\"icons-xs\">\n                        </div>\n                        <div class=\"pb-5 pt-5\">\n                            <img src=\"https://freehost-spec.github.io/dexcenter-dashboard/assets/images/icons/skip_previous.svg\"\n                                alt=\"\" class=\"icons-xs mr-10 ml-10\">\n                        </div>\n                        <div class=\"page-details\">\n                            <p>Page</p>\n                            <input type=\"text\" class=\"page-number ml-5 mr-5 p-5\" size=\"6\" value=\"1\">\n                            <p>of 76</p>\n                        </div>\n                        <div class=\"pb-5 pt-5\">\n                            <img src=\"https://freehost-spec.github.io/dexcenter-dashboard/assets/images/icons/skip_next.svg\"\n                                alt=\"\" class=\"icons-xs mr-10 ml-10\">\n                        </div>\n                        <div class=\"pb-5 pt-5\">\n                            <img src=\"https://freehost-spec.github.io/dexcenter-dashboard/assets/images/icons/skip_last.svg\"\n                                alt=\"\" class=\"icons-xs\">\n                        </div>\n                    </div>\n                </div>\n\n            </div>\n        </ng-container>\n    </div>\n</div>\n<ng-container *ngIf=\"loadingData\">\n    <div class=\"loading\">\n        <img src=\"https://freehost-spec.github.io/dexcenter-dashboard/assets/images/icons/Loader.svg\" alt=\"Loading\"\n            class=\"icons-2xl\">\n        <div class=\"pt-20px loading-message font-2xl mt-20\">\n            <p class=\"font-2xl\"> Please wait,</p>\n            <p class=\"font-2xl\">JBoss is restarting...</p>\n        </div>\n    </div>\n</ng-container>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/queue-info/sessions/sessions.component.html":
  /*!**********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layout/queue-info/sessions/sessions.component.html ***!
    \**********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppLayoutQueueInfoSessionsSessionsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"session-container\">\n  <ng-container>\n    <div class=\"session-list\">\n      <div class=\"triangle-left\"></div>\n      <div class=\"session-item\">\n        <ng-container *ngFor=\"let list of [].constructor(data.sessions) let i = index\">\n          <div class=\"item-name name p-10 cp\" (click)=\"showWorkFlow(i)\">\n            Session {{i + 1}} <span *ngIf=\"i === 1 || i === 2\" class=\"pl-10 name\">></span>\n          </div>\n          <div class=\"workflow-container\">\n            <ng-container *ngIf=\"workFlow && i === selectedIndex\">\n              <div class=\"session-list\">\n                <div class=\"triangle-left\"></div>\n                <div class=\"session-item\">\n                  <ng-container *ngFor=\"let list of [].constructor(data.sessions) let i = index\">\n                    <div class=\"item-name p-10\">\n                      Workflow {{i + 1}} - Task\n                    </div>\n                  </ng-container>\n                </div>\n              </div>\n            </ng-container>\n          </div>\n        </ng-container>\n      </div>\n    </div>\n  </ng-container>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/queue-info/summary/summary.component.html":
  /*!********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layout/queue-info/summary/summary.component.html ***!
    \********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppLayoutQueueInfoSummarySummaryComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ng-container *ngIf=\"data\">\n  <div class=\"progress-circle p{{data?.summary}}\"\n    [ngClass]=\"data.status === 'failed' ? 'failed' : data.status === 'completed' ? 'completed' : 'circle-color'\">\n    <span>{{data?.summary}}%</span>\n    <div class=\"left-half-clipper\">\n      <div class=\"first50-bar\"></div>\n      <div class=\"value-bar\"\n        [ngClass]=\"data.status === 'failed' ? 'value-failed' : data.status === 'completed' ? 'value-completed' : 'value-color'\">\n      </div>\n    </div>\n  </div>\n</ng-container>\n";
    /***/
  },

  /***/
  "./src/app/layout/queue-info/config-modal/config-modal.component.scss":
  /*!****************************************************************************!*\
    !*** ./src/app/layout/queue-info/config-modal/config-modal.component.scss ***!
    \****************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppLayoutQueueInfoConfigModalConfigModalComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".modal-container {\n  width: 600px;\n}\n.modal-container .modal-header {\n  width: 100%;\n  background: #dfe2ee 0% 0% no-repeat padding-box;\n  border-radius: 4px 4px 0px 0px;\n  display: flex;\n  justify-content: space-between;\n  height: 50px;\n  align-items: center;\n}\n.modal-container .info-container .info-data {\n  display: flex;\n}\n.modal-container .info-container .info-data .name {\n  width: 40%;\n  display: flex;\n  justify-content: left;\n  align-items: center !important;\n}\n.modal-container .info-container .info-data .session {\n  width: 30%;\n  text-align: left !important;\n  display: flex;\n  align-items: center;\n}\n.modal-container .info-container .info-data .session > input {\n  width: 60%;\n}\n.modal-container .info-container .info-data .thread-setting {\n  color: white;\n  text-align: center;\n  border: 1px solid #35aff8;\n  background: #35aff8 0% 0% no-repeat padding-box;\n  border-radius: 2px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.modal-container .info-container .info-data .thread-setting > input {\n  outline: none;\n  width: 35px;\n  color: #fff;\n  border: none;\n  border-bottom: 1px solid #fff;\n  background-color: #35aff8;\n}\n.modal-container .info-container .info-data .thread-setting .thread-button {\n  background: #ffffff 0% 0% no-repeat padding-box;\n  border: 1px solid #35aff8;\n  border-radius: 2px;\n  color: #35aff8;\n  display: flex;\n  align-items: center;\n}\n.modal-container .info-container .data-list {\n  border-bottom: 1px solid #ddd;\n}\n.modal-container .info-container .head {\n  justify-content: space-between;\n  text-align: left;\n  background-color: #dfe2ee !important;\n  border: none;\n  width: 100%;\n  display: flex;\n  align-items: center;\n  padding: 5px;\n}\n.modal-container .cancel-yes-container {\n  display: flex;\n  justify-content: flex-end;\n}\n.confirmation {\n  width: 400px;\n}\n.confirmation .confirmation-header {\n  width: 100%;\n  background: #dfe2ee 0% 0% no-repeat padding-box;\n  border-radius: 4px 4px 0px 0px;\n  display: flex;\n  justify-content: space-between;\n  height: 50px;\n  align-items: center;\n}\n.confirmation .confirmation-header .confirmation-header-left {\n  display: flex;\n  justify-content: left;\n  align-items: center !important;\n}\n.confirmation .confirmation-message {\n  text-align: center;\n}\n.confirmation .cancel-yes-container {\n  display: flex;\n  justify-content: center;\n}\n.confirmation .cancel-yes-container .yes-btn {\n  width: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hcHBsZS9wcm9qZWN0L2RleGNlbnRlci1kYXNoYm9hcmQvc3JjL2FwcC9sYXlvdXQvcXVldWUtaW5mby9jb25maWctbW9kYWwvY29uZmlnLW1vZGFsLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9sYXlvdXQvcXVldWUtaW5mby9jb25maWctbW9kYWwvY29uZmlnLW1vZGFsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBQTtBQ0NGO0FEQUU7RUFDRSxXQUFBO0VBQ0EsK0NBQUE7RUFDQSw4QkFBQTtFQUNBLGFBQUE7RUFDQSw4QkFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtBQ0VKO0FEQ0k7RUFDRSxhQUFBO0FDQ047QURBTTtFQUNFLFVBQUE7RUFDQSxhQUFBO0VBQ0EscUJBQUE7RUFDQSw4QkFBQTtBQ0VSO0FEQU07RUFDRSxVQUFBO0VBQ0EsMkJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7QUNFUjtBRERRO0VBQ0UsVUFBQTtBQ0dWO0FEQU07RUFDRSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtFQUNBLCtDQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtBQ0VSO0FERFE7RUFDRSxhQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsNkJBQUE7RUFDQSx5QkFBQTtBQ0dWO0FERFE7RUFDRSwrQ0FBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0FDR1Y7QURDSTtFQUNFLDZCQUFBO0FDQ047QURDSTtFQUNFLDhCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxvQ0FBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtBQ0NOO0FERUU7RUFDRSxhQUFBO0VBQ0EseUJBQUE7QUNBSjtBRElBO0VBQ0UsWUFBQTtBQ0RGO0FERUU7RUFDRSxXQUFBO0VBQ0EsK0NBQUE7RUFDQSw4QkFBQTtFQUNBLGFBQUE7RUFDQSw4QkFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtBQ0FKO0FEQ0k7RUFDRSxhQUFBO0VBQ0EscUJBQUE7RUFDQSw4QkFBQTtBQ0NOO0FERUU7RUFDRSxrQkFBQTtBQ0FKO0FERUU7RUFDRSxhQUFBO0VBQ0EsdUJBQUE7QUNBSjtBRENJO0VBQ0UsV0FBQTtBQ0NOIiwiZmlsZSI6InNyYy9hcHAvbGF5b3V0L3F1ZXVlLWluZm8vY29uZmlnLW1vZGFsL2NvbmZpZy1tb2RhbC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tb2RhbC1jb250YWluZXIge1xuICB3aWR0aDogNjAwcHg7XG4gIC5tb2RhbC1oZWFkZXIge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJhY2tncm91bmQ6ICNkZmUyZWUgMCUgMCUgbm8tcmVwZWF0IHBhZGRpbmctYm94O1xuICAgIGJvcmRlci1yYWRpdXM6IDRweCA0cHggMHB4IDBweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBoZWlnaHQ6IDUwcHg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgfVxuICAuaW5mby1jb250YWluZXIge1xuICAgIC5pbmZvLWRhdGEge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIC5uYW1lIHtcbiAgICAgICAgd2lkdGg6IDQwJTtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBsZWZ0O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyICFpbXBvcnRhbnQ7XG4gICAgICB9XG4gICAgICAuc2Vzc2lvbiB7XG4gICAgICAgIHdpZHRoOiAzMCU7XG4gICAgICAgIHRleHQtYWxpZ246IGxlZnQgIWltcG9ydGFudDtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgJiA+IGlucHV0IHtcbiAgICAgICAgICB3aWR0aDogNjAlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICAudGhyZWFkLXNldHRpbmcge1xuICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgIzM1YWZmODtcbiAgICAgICAgYmFja2dyb3VuZDogIzM1YWZmOCAwJSAwJSBuby1yZXBlYXQgcGFkZGluZy1ib3g7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAmID4gaW5wdXQge1xuICAgICAgICAgIG91dGxpbmU6IG5vbmU7XG4gICAgICAgICAgd2lkdGg6IDM1cHg7XG4gICAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZmZmO1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMzNWFmZjg7XG4gICAgICAgIH1cbiAgICAgICAgLnRocmVhZC1idXR0b24ge1xuICAgICAgICAgIGJhY2tncm91bmQ6ICNmZmZmZmYgMCUgMCUgbm8tcmVwZWF0IHBhZGRpbmctYm94O1xuICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICMzNWFmZjg7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogMnB4O1xuICAgICAgICAgIGNvbG9yOiAjMzVhZmY4O1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICAuZGF0YS1saXN0IHtcbiAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZGRkO1xuICAgIH1cbiAgICAuaGVhZCB7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2RmZTJlZSAhaW1wb3J0YW50O1xuICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIHBhZGRpbmc6IDVweDtcbiAgICB9XG4gIH1cbiAgLmNhbmNlbC15ZXMtY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gIH1cbn1cblxuLmNvbmZpcm1hdGlvbiB7XG4gIHdpZHRoOiA0MDBweDtcbiAgLmNvbmZpcm1hdGlvbi1oZWFkZXIge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJhY2tncm91bmQ6ICNkZmUyZWUgMCUgMCUgbm8tcmVwZWF0IHBhZGRpbmctYm94O1xuICAgIGJvcmRlci1yYWRpdXM6IDRweCA0cHggMHB4IDBweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBoZWlnaHQ6IDUwcHg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAuY29uZmlybWF0aW9uLWhlYWRlci1sZWZ0IHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGxlZnQ7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyICFpbXBvcnRhbnQ7XG4gICAgfVxuICB9XG4gIC5jb25maXJtYXRpb24tbWVzc2FnZSB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG4gIC5jYW5jZWwteWVzLWNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAueWVzLWJ0biB7XG4gICAgICB3aWR0aDogYXV0bztcbiAgICB9XG4gIH1cbn1cbiIsIi5tb2RhbC1jb250YWluZXIge1xuICB3aWR0aDogNjAwcHg7XG59XG4ubW9kYWwtY29udGFpbmVyIC5tb2RhbC1oZWFkZXIge1xuICB3aWR0aDogMTAwJTtcbiAgYmFja2dyb3VuZDogI2RmZTJlZSAwJSAwJSBuby1yZXBlYXQgcGFkZGluZy1ib3g7XG4gIGJvcmRlci1yYWRpdXM6IDRweCA0cHggMHB4IDBweDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBoZWlnaHQ6IDUwcHg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4ubW9kYWwtY29udGFpbmVyIC5pbmZvLWNvbnRhaW5lciAuaW5mby1kYXRhIHtcbiAgZGlzcGxheTogZmxleDtcbn1cbi5tb2RhbC1jb250YWluZXIgLmluZm8tY29udGFpbmVyIC5pbmZvLWRhdGEgLm5hbWUge1xuICB3aWR0aDogNDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGxlZnQ7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXIgIWltcG9ydGFudDtcbn1cbi5tb2RhbC1jb250YWluZXIgLmluZm8tY29udGFpbmVyIC5pbmZvLWRhdGEgLnNlc3Npb24ge1xuICB3aWR0aDogMzAlO1xuICB0ZXh0LWFsaWduOiBsZWZ0ICFpbXBvcnRhbnQ7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4ubW9kYWwtY29udGFpbmVyIC5pbmZvLWNvbnRhaW5lciAuaW5mby1kYXRhIC5zZXNzaW9uID4gaW5wdXQge1xuICB3aWR0aDogNjAlO1xufVxuLm1vZGFsLWNvbnRhaW5lciAuaW5mby1jb250YWluZXIgLmluZm8tZGF0YSAudGhyZWFkLXNldHRpbmcge1xuICBjb2xvcjogd2hpdGU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYm9yZGVyOiAxcHggc29saWQgIzM1YWZmODtcbiAgYmFja2dyb3VuZDogIzM1YWZmOCAwJSAwJSBuby1yZXBlYXQgcGFkZGluZy1ib3g7XG4gIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLm1vZGFsLWNvbnRhaW5lciAuaW5mby1jb250YWluZXIgLmluZm8tZGF0YSAudGhyZWFkLXNldHRpbmcgPiBpbnB1dCB7XG4gIG91dGxpbmU6IG5vbmU7XG4gIHdpZHRoOiAzNXB4O1xuICBjb2xvcjogI2ZmZjtcbiAgYm9yZGVyOiBub25lO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2ZmZjtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzM1YWZmODtcbn1cbi5tb2RhbC1jb250YWluZXIgLmluZm8tY29udGFpbmVyIC5pbmZvLWRhdGEgLnRocmVhZC1zZXR0aW5nIC50aHJlYWQtYnV0dG9uIHtcbiAgYmFja2dyb3VuZDogI2ZmZmZmZiAwJSAwJSBuby1yZXBlYXQgcGFkZGluZy1ib3g7XG4gIGJvcmRlcjogMXB4IHNvbGlkICMzNWFmZjg7XG4gIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgY29sb3I6ICMzNWFmZjg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4ubW9kYWwtY29udGFpbmVyIC5pbmZvLWNvbnRhaW5lciAuZGF0YS1saXN0IHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkZGQ7XG59XG4ubW9kYWwtY29udGFpbmVyIC5pbmZvLWNvbnRhaW5lciAuaGVhZCB7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2RmZTJlZSAhaW1wb3J0YW50O1xuICBib3JkZXI6IG5vbmU7XG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nOiA1cHg7XG59XG4ubW9kYWwtY29udGFpbmVyIC5jYW5jZWwteWVzLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG59XG5cbi5jb25maXJtYXRpb24ge1xuICB3aWR0aDogNDAwcHg7XG59XG4uY29uZmlybWF0aW9uIC5jb25maXJtYXRpb24taGVhZGVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGJhY2tncm91bmQ6ICNkZmUyZWUgMCUgMCUgbm8tcmVwZWF0IHBhZGRpbmctYm94O1xuICBib3JkZXItcmFkaXVzOiA0cHggNHB4IDBweCAwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgaGVpZ2h0OiA1MHB4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLmNvbmZpcm1hdGlvbiAuY29uZmlybWF0aW9uLWhlYWRlciAuY29uZmlybWF0aW9uLWhlYWRlci1sZWZ0IHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBsZWZ0O1xuICBhbGlnbi1pdGVtczogY2VudGVyICFpbXBvcnRhbnQ7XG59XG4uY29uZmlybWF0aW9uIC5jb25maXJtYXRpb24tbWVzc2FnZSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5jb25maXJtYXRpb24gLmNhbmNlbC15ZXMtY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG4uY29uZmlybWF0aW9uIC5jYW5jZWwteWVzLWNvbnRhaW5lciAueWVzLWJ0biB7XG4gIHdpZHRoOiBhdXRvO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/layout/queue-info/config-modal/config-modal.component.ts":
  /*!**************************************************************************!*\
    !*** ./src/app/layout/queue-info/config-modal/config-modal.component.ts ***!
    \**************************************************************************/

  /*! exports provided: ConfigModalComponent */

  /***/
  function srcAppLayoutQueueInfoConfigModalConfigModalComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ConfigModalComponent", function () {
      return ConfigModalComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/esm2015/dialog.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var ConfigModalComponent = /*#__PURE__*/function () {
      function ConfigModalComponent(dialog, dialogRef, data // @Inject(MAT_DIALOG_DATA) public data: any, @Inject(MatDialogRef) public dialogRef: MatDialogRef<ConfigModalComponent>
      ) {
        _classCallCheck(this, ConfigModalComponent);

        this.dialog = dialog;
        this.dialogRef = dialogRef;
        this.data = data;
      }

      _createClass(ConfigModalComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.threadEdit = false;
          this.jobEdit = false;
          this.confirmation = false;
          this.configData = {
            max_thread: 12,
            data: [{
              id: 1,
              name: 'DXS',
              max_job: 10,
              max_thread: 10,
              status: 'failed'
            }, {
              id: 2,
              name: 'DTS1',
              max_job: 10,
              max_thread: 10,
              status: 'in-progress'
            }, {
              id: 3,
              name: 'DTS2',
              max_job: 10,
              max_thread: 10,
              status: 'completed'
            }, {
              id: 4,
              name: 'DTS3',
              max_job: 3,
              max_thread: 10,
              status: 'in-progress'
            }, {
              id: 5,
              name: 'DTS4',
              max_job: 3,
              max_thread: 10,
              status: 'failed'
            }, {
              id: 6,
              name: 'DTS5',
              max_job: 3,
              max_thread: 9,
              status: 'in-progress'
            }, {
              id: 7,
              name: 'DTS6',
              max_job: 3,
              max_thread: 9,
              status: 'in-progress'
            }, {
              id: 8,
              name: 'DTS7',
              max_job: 3,
              max_thread: 9,
              status: 'in-progress'
            }]
          };
        }
      }, {
        key: "closeModal",
        value: function closeModal(data) {
          this.confirmation = false;
          this.dialogRef.close(data);
        }
      }, {
        key: "editThread",
        value: function editThread() {
          this.threadEdit = !this.threadEdit;
        }
      }, {
        key: "editJobs",
        value: function editJobs() {
          this.jobEdit = !this.jobEdit;
        }
      }, {
        key: "openConfirmation",
        value: function openConfirmation() {
          this.confirmation = true;
        }
      }]);

      return ConfigModalComponent;
    }();

    ConfigModalComponent.ctorParameters = function () {
      return [{
        type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialog"]
      }, {
        type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]
      }, {
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"],
          args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]]
        }]
      }];
    };

    ConfigModalComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
      selector: 'app-config-modal',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./config-modal.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/queue-info/config-modal/config-modal.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./config-modal.component.scss */
      "./src/app/layout/queue-info/config-modal/config-modal.component.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"])(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]))], ConfigModalComponent);
    /***/
  },

  /***/
  "./src/app/layout/queue-info/config/config.component.scss":
  /*!****************************************************************!*\
    !*** ./src/app/layout/queue-info/config/config.component.scss ***!
    \****************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppLayoutQueueInfoConfigConfigComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xheW91dC9xdWV1ZS1pbmZvL2NvbmZpZy9jb25maWcuY29tcG9uZW50LnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/layout/queue-info/config/config.component.ts":
  /*!**************************************************************!*\
    !*** ./src/app/layout/queue-info/config/config.component.ts ***!
    \**************************************************************/

  /*! exports provided: ConfigComponent */

  /***/
  function srcAppLayoutQueueInfoConfigConfigComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ConfigComponent", function () {
      return ConfigComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var ConfigComponent = /*#__PURE__*/function () {
      function ConfigComponent() {
        _classCallCheck(this, ConfigComponent);
      }

      _createClass(ConfigComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ConfigComponent;
    }();

    ConfigComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-config',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./config.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/queue-info/config/config.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./config.component.scss */
      "./src/app/layout/queue-info/config/config.component.scss"))["default"]]
    })], ConfigComponent);
    /***/
  },

  /***/
  "./src/app/layout/queue-info/confirmation/confirmation.component.scss":
  /*!****************************************************************************!*\
    !*** ./src/app/layout/queue-info/confirmation/confirmation.component.scss ***!
    \****************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppLayoutQueueInfoConfirmationConfirmationComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".confirmation {\n  width: 400px;\n}\n.confirmation .confirmation-header {\n  width: 100%;\n  background: #dfe2ee 0% 0% no-repeat padding-box;\n  border-radius: 4px 4px 0px 0px;\n  display: flex;\n  justify-content: space-between;\n  height: 50px;\n  align-items: center;\n}\n.confirmation .confirmation-header .confirmation-header-left {\n  display: flex;\n  justify-content: left;\n  align-items: center !important;\n}\n.confirmation .confirmation-message {\n  text-align: center;\n}\n.confirmation .cancel-yes-container {\n  display: flex;\n  justify-content: center;\n}\n.confirmation .cancel-yes-container .yes-btn {\n  width: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hcHBsZS9wcm9qZWN0L2RleGNlbnRlci1kYXNoYm9hcmQvc3JjL2FwcC9sYXlvdXQvcXVldWUtaW5mby9jb25maXJtYXRpb24vY29uZmlybWF0aW9uLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9sYXlvdXQvcXVldWUtaW5mby9jb25maXJtYXRpb24vY29uZmlybWF0aW9uLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksWUFBQTtBQ0NKO0FEQUk7RUFDSSxXQUFBO0VBQ0EsK0NBQUE7RUFDQSw4QkFBQTtFQUNBLGFBQUE7RUFDQSw4QkFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtBQ0VSO0FERFE7RUFDSSxhQUFBO0VBQ0EscUJBQUE7RUFDQSw4QkFBQTtBQ0daO0FEQUk7RUFDRyxrQkFBQTtBQ0VQO0FEQUk7RUFDSSxhQUFBO0VBQ0EsdUJBQUE7QUNFUjtBRERRO0VBQ0ksV0FBQTtBQ0daIiwiZmlsZSI6InNyYy9hcHAvbGF5b3V0L3F1ZXVlLWluZm8vY29uZmlybWF0aW9uL2NvbmZpcm1hdGlvbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb25maXJtYXRpb257XG4gICAgd2lkdGg6IDQwMHB4O1xuICAgIC5jb25maXJtYXRpb24taGVhZGVye1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgYmFja2dyb3VuZDogI2RmZTJlZSAwJSAwJSBuby1yZXBlYXQgcGFkZGluZy1ib3g7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDRweCA0cHggMHB4IDBweDtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICBoZWlnaHQ6IDUwcHg7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIC5jb25maXJtYXRpb24taGVhZGVyLWxlZnR7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBsZWZ0O1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlciAhaW1wb3J0YW50O1xuICAgICAgICB9XG4gICAgfVxuICAgIC5jb25maXJtYXRpb24tbWVzc2FnZXtcbiAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgfVxuICAgIC5jYW5jZWwteWVzLWNvbnRhaW5lciB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAueWVzLWJ0bntcbiAgICAgICAgICAgIHdpZHRoOiBhdXRvO1xuICAgICAgICB9XG4gICAgfVxufSIsIi5jb25maXJtYXRpb24ge1xuICB3aWR0aDogNDAwcHg7XG59XG4uY29uZmlybWF0aW9uIC5jb25maXJtYXRpb24taGVhZGVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGJhY2tncm91bmQ6ICNkZmUyZWUgMCUgMCUgbm8tcmVwZWF0IHBhZGRpbmctYm94O1xuICBib3JkZXItcmFkaXVzOiA0cHggNHB4IDBweCAwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgaGVpZ2h0OiA1MHB4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLmNvbmZpcm1hdGlvbiAuY29uZmlybWF0aW9uLWhlYWRlciAuY29uZmlybWF0aW9uLWhlYWRlci1sZWZ0IHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBsZWZ0O1xuICBhbGlnbi1pdGVtczogY2VudGVyICFpbXBvcnRhbnQ7XG59XG4uY29uZmlybWF0aW9uIC5jb25maXJtYXRpb24tbWVzc2FnZSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5jb25maXJtYXRpb24gLmNhbmNlbC15ZXMtY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG4uY29uZmlybWF0aW9uIC5jYW5jZWwteWVzLWNvbnRhaW5lciAueWVzLWJ0biB7XG4gIHdpZHRoOiBhdXRvO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/layout/queue-info/confirmation/confirmation.component.ts":
  /*!**************************************************************************!*\
    !*** ./src/app/layout/queue-info/confirmation/confirmation.component.ts ***!
    \**************************************************************************/

  /*! exports provided: ConfirmationComponent */

  /***/
  function srcAppLayoutQueueInfoConfirmationConfirmationComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ConfirmationComponent", function () {
      return ConfirmationComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var ConfirmationComponent = /*#__PURE__*/function () {
      function ConfirmationComponent() {
        _classCallCheck(this, ConfirmationComponent);
      }

      _createClass(ConfirmationComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ConfirmationComponent;
    }();

    ConfirmationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-confirmation',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./confirmation.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/queue-info/confirmation/confirmation.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./confirmation.component.scss */
      "./src/app/layout/queue-info/confirmation/confirmation.component.scss"))["default"]]
    })], ConfirmationComponent);
    /***/
  },

  /***/
  "./src/app/layout/queue-info/queue-info.module.ts":
  /*!********************************************************!*\
    !*** ./src/app/layout/queue-info/queue-info.module.ts ***!
    \********************************************************/

  /*! exports provided: QueueInfoModule */

  /***/
  function srcAppLayoutQueueInfoQueueInfoModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "QueueInfoModule", function () {
      return QueueInfoModule;
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


    var _queue_queue_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./queue/queue.component */
    "./src/app/layout/queue-info/queue/queue.component.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _sessions_sessions_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./sessions/sessions.component */
    "./src/app/layout/queue-info/sessions/sessions.component.ts");
    /* harmony import */


    var _summary_summary_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./summary/summary.component */
    "./src/app/layout/queue-info/summary/summary.component.ts");
    /* harmony import */


    var _config_config_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./config/config.component */
    "./src/app/layout/queue-info/config/config.component.ts");
    /* harmony import */


    var _config_modal_config_modal_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./config-modal/config-modal.component */
    "./src/app/layout/queue-info/config-modal/config-modal.component.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _confirmation_confirmation_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./confirmation/confirmation.component */
    "./src/app/layout/queue-info/confirmation/confirmation.component.ts");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/esm2015/material.js");

    var routes = [{
      path: '',
      component: _queue_queue_component__WEBPACK_IMPORTED_MODULE_3__["QueueComponent"]
    }, {
      path: '**',
      pathMatch: 'full',
      redirectTo: ''
    }];

    var QueueInfoModule = function QueueInfoModule() {
      _classCallCheck(this, QueueInfoModule);
    };

    QueueInfoModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_queue_queue_component__WEBPACK_IMPORTED_MODULE_3__["QueueComponent"], _sessions_sessions_component__WEBPACK_IMPORTED_MODULE_5__["SessionsComponent"], _summary_summary_component__WEBPACK_IMPORTED_MODULE_6__["SummaryComponent"], _config_config_component__WEBPACK_IMPORTED_MODULE_7__["ConfigComponent"], _config_modal_config_modal_component__WEBPACK_IMPORTED_MODULE_8__["ConfigModalComponent"], _confirmation_confirmation_component__WEBPACK_IMPORTED_MODULE_10__["ConfirmationComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes), _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatDialogModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"]],
      providers: [{
        provide: _angular_material__WEBPACK_IMPORTED_MODULE_11__["MAT_DIALOG_DATA"],
        useValue: {}
      }, {
        provide: _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatDialogRef"],
        useValue: {}
      }],
      entryComponents: [_config_modal_config_modal_component__WEBPACK_IMPORTED_MODULE_8__["ConfigModalComponent"], _confirmation_confirmation_component__WEBPACK_IMPORTED_MODULE_10__["ConfirmationComponent"]]
    })], QueueInfoModule);
    /***/
  },

  /***/
  "./src/app/layout/queue-info/queue/queue.component.scss":
  /*!**************************************************************!*\
    !*** ./src/app/layout/queue-info/queue/queue.component.scss ***!
    \**************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppLayoutQueueInfoQueueQueueComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".queue-actions {\n  display: flex;\n  justify-content: space-between;\n}\n.queue-actions .search-box {\n  width: 25%;\n  display: flex;\n  position: relative;\n}\n.queue-actions .search-box > input {\n  width: 100%;\n  padding: 8px 12px;\n}\n.queue-actions .search-box > img {\n  position: absolute;\n  right: 10px;\n  top: 10px;\n}\n.queue-actions .settings {\n  display: flex;\n}\n.queue-actions .settings .job-setting {\n  display: flex;\n}\n.queue-actions .settings .job-setting > .count {\n  background-color: #034ea2;\n  color: white;\n  display: flex;\n  align-items: center;\n}\n.queue-actions .settings .job-setting > .text {\n  text-align: center;\n  border: 1px solid #034ea2;\n  color: #034ea2;\n  display: flex;\n  align-items: center;\n}\n.queue-actions .settings .thread-setting {\n  display: flex;\n}\n.queue-actions .settings .thread-setting > .count {\n  background-color: #35aff8;\n  color: white;\n  display: flex;\n  align-items: center;\n}\n.queue-actions .settings .thread-setting > .text {\n  text-align: center;\n  border: 1px solid #35aff8;\n  color: #35aff8;\n  display: flex;\n  align-items: center;\n}\n.queue-actions .settings .conf-button {\n  color: white;\n  border: 1px solid #35aff8;\n  background-color: #35aff8;\n  display: flex;\n  align-items: center;\n}\n.queue-actions .settings .conf-button > img {\n  width: 28px;\n}\ndiv .search-setting {\n  display: flex;\n}\ndiv .search-setting .settings {\n  display: flex;\n}\ndiv .info-container .info-data {\n  display: flex;\n  justify-content: space-between;\n  background: #ffffff 0% 0% no-repeat padding-box;\n  border: 1px solid #c1c3c9;\n  padding: 4px 20px;\n}\ndiv .info-container .info-data > .name {\n  width: 30%;\n  display: flex;\n  justify-content: left;\n  align-items: center !important;\n}\ndiv .info-container .info-data > .session {\n  width: 50%;\n  text-align: left !important;\n  display: flex;\n  align-items: center;\n  position: relative;\n}\ndiv .info-container .info-data > .session > .session-count {\n  display: flex;\n  text-align: left;\n  background-color: #35aff8;\n  padding: 5px;\n  align-items: center;\n  justify-content: center;\n  width: 50px;\n  color: #fff;\n  border-radius: 3px;\n  cursor: pointer;\n}\ndiv .info-container .info-data > .session > .sessions-name {\n  position: absolute;\n  left: 50px;\n  top: 0px;\n  display: flex;\n}\ndiv .info-container .info-data > .summary {\n  width: 20%;\n  display: flex;\n  justify-content: center !important;\n}\ndiv .info-container .head {\n  display: flex;\n  justify-content: space-between;\n  text-align: left;\n  padding-top: 12px !important;\n  padding-bottom: 12px !important;\n  background-color: #dfe2ee !important;\n  border-radius: 4px 4px 0px 0px;\n  border: none;\n}\n.loading {\n  height: 100vh;\n  background-color: #000;\n  opacity: 0.9;\n  width: 100vw;\n  position: fixed;\n  top: 0;\n  left: 0px;\n  z-index: 10;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n}\n.loading .loading-message {\n  text-align: center;\n  color: white;\n  opacity: 0.7;\n  letter-spacing: 0.6px;\n}\n.page-container {\n  background-color: #dfe2ee !important;\n  border: 1px solid #c1c3c9;\n  border-radius: 0px 0px 4px 4px;\n}\n.page-container .page-content {\n  display: flex;\n  justify-content: space-between;\n  text-align: left;\n  align-items: center;\n  color: #333333;\n}\n.page-container .page-content > .pagination-left {\n  width: 30%;\n}\n.page-container .page-content > .pagination-right {\n  width: 22%;\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-end;\n  align-items: center;\n}\n.page-container .page-content > .pagination-right .page-details {\n  display: flex;\n  flex-direction: row;\n  justify-content: center !important;\n  align-items: center;\n}\n.page-container .page-content > .pagination-right .page-details .page-number {\n  color: #333333;\n  border: 1px solid #c1c3c9;\n}\n.page-container .page-content > .pagination-right .page-details .page-number:focus {\n  outline-style: none;\n  color: #333333;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hcHBsZS9wcm9qZWN0L2RleGNlbnRlci1kYXNoYm9hcmQvc3JjL2FwcC9sYXlvdXQvcXVldWUtaW5mby9xdWV1ZS9xdWV1ZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbGF5b3V0L3F1ZXVlLWluZm8vcXVldWUvcXVldWUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFBO0VBQ0EsOEJBQUE7QUNDSjtBREFJO0VBQ0ksVUFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtBQ0VSO0FERFE7RUFDSSxXQUFBO0VBQ0EsaUJBQUE7QUNHWjtBRERRO0VBQ0ksa0JBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtBQ0daO0FEQUk7RUFDSSxhQUFBO0FDRVI7QUREUTtFQUNJLGFBQUE7QUNHWjtBREZZO0VBQ0kseUJBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0FDSWhCO0FERlk7RUFDSSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EsY0FBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtBQ0loQjtBRERRO0VBQ0ksYUFBQTtBQ0daO0FERlk7RUFDSSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7QUNJaEI7QURGWTtFQUNJLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxjQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0FDSWhCO0FERFE7RUFDSSxZQUFBO0VBQ0EseUJBQUE7RUFDQSx5QkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtBQ0daO0FERlk7RUFDSSxXQUFBO0FDSWhCO0FER0k7RUFDSSxhQUFBO0FDQVI7QURDUTtFQUNJLGFBQUE7QUNDWjtBREdRO0VBQ0ksYUFBQTtFQUNBLDhCQUFBO0VBQ0EsK0NBQUE7RUFDQSx5QkFBQTtFQUNBLGlCQUFBO0FDRFo7QURFWTtFQUNJLFVBQUE7RUFDQSxhQUFBO0VBQ0EscUJBQUE7RUFDQSw4QkFBQTtBQ0FoQjtBREVZO0VBQ0ksVUFBQTtFQUNBLDJCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUNBaEI7QURDZ0I7RUFDSSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7QUNDcEI7QURDZ0I7RUFDSSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxRQUFBO0VBQ0EsYUFBQTtBQ0NwQjtBREVZO0VBQ0ksVUFBQTtFQUNBLGFBQUE7RUFDQSxrQ0FBQTtBQ0FoQjtBREdRO0VBQ0ksYUFBQTtFQUNBLDhCQUFBO0VBQ0EsZ0JBQUE7RUFDQSw0QkFBQTtFQUNBLCtCQUFBO0VBQ0Esb0NBQUE7RUFDQSw4QkFBQTtFQUNBLFlBQUE7QUNEWjtBRE1BO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsTUFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtBQ0hKO0FESUk7RUFDSSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EscUJBQUE7QUNGUjtBRE1BO0VBQ0ksb0NBQUE7RUFDQSx5QkFBQTtFQUNBLDhCQUFBO0FDSEo7QURJSTtFQUNJLGFBQUE7RUFDQSw4QkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0FDRlI7QURHUTtFQUNJLFVBQUE7QUNEWjtBREdRO0VBQ0ksVUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7QUNEWjtBREVZO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0NBQUE7RUFDQSxtQkFBQTtBQ0FoQjtBRENnQjtFQUNJLGNBQUE7RUFDQSx5QkFBQTtBQ0NwQjtBRENnQjtFQUNJLG1CQUFBO0VBQ0EsY0FBQTtBQ0NwQiIsImZpbGUiOiJzcmMvYXBwL2xheW91dC9xdWV1ZS1pbmZvL3F1ZXVlL3F1ZXVlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnF1ZXVlLWFjdGlvbnMge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIC5zZWFyY2gtYm94IHtcbiAgICAgICAgd2lkdGg6IDI1JTtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAmPmlucHV0IHtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgcGFkZGluZzogOHB4IDEycHg7XG4gICAgICAgIH1cbiAgICAgICAgJj5pbWcge1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgcmlnaHQ6IDEwcHg7XG4gICAgICAgICAgICB0b3A6IDEwcHg7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLnNldHRpbmdzIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgLmpvYi1zZXR0aW5nIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAmPi5jb3VudCB7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzAzNGVhMjtcbiAgICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgJj4udGV4dCB7XG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICMwMzRlYTI7XG4gICAgICAgICAgICAgICAgY29sb3I6ICMwMzRlYTI7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC50aHJlYWQtc2V0dGluZyB7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgJj4uY291bnQge1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMzNWFmZjg7XG4gICAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgICY+LnRleHQge1xuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjMzVhZmY4O1xuICAgICAgICAgICAgICAgIGNvbG9yOiAjMzVhZmY4O1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAuY29uZi1idXR0b24ge1xuICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgIzM1YWZmODtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMzNWFmZjg7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgICY+aW1nIHtcbiAgICAgICAgICAgICAgICB3aWR0aDogMjhweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cblxuZGl2IHtcbiAgICAuc2VhcmNoLXNldHRpbmcge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAuc2V0dGluZ3Mge1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgfVxuICAgIH1cbiAgICAuaW5mby1jb250YWluZXIge1xuICAgICAgICAuaW5mby1kYXRhIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmZmZmIDAlIDAlIG5vLXJlcGVhdCBwYWRkaW5nLWJveDtcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNjMWMzYzk7XG4gICAgICAgICAgICBwYWRkaW5nOiA0cHggMjBweDtcbiAgICAgICAgICAgICY+Lm5hbWUge1xuICAgICAgICAgICAgICAgIHdpZHRoOiAzMCU7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGxlZnQ7XG4gICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlciAhaW1wb3J0YW50O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgJj4uc2Vzc2lvbiB7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDUwJTtcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgICAgICAmPi5zZXNzaW9uLWNvdW50IHtcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzM1YWZmODtcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogNXB4O1xuICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDUwcHg7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAzcHg7XG4gICAgICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgJj4uc2Vzc2lvbnMtbmFtZSB7XG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICAgICAgbGVmdDogNTBweDtcbiAgICAgICAgICAgICAgICAgICAgdG9wOiAwcHg7XG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgJj4uc3VtbWFyeSB7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDIwJTtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLmhlYWQge1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICAgICAgICBwYWRkaW5nLXRvcDogMTJweCAhaW1wb3J0YW50O1xuICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDEycHggIWltcG9ydGFudDtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNkZmUyZWUgIWltcG9ydGFudDtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDRweCA0cHggMHB4IDBweDtcbiAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuLmxvYWRpbmcge1xuICAgIGhlaWdodDogMTAwdmg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDtcbiAgICBvcGFjaXR5OiAwLjk7XG4gICAgd2lkdGg6IDEwMHZ3O1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogMHB4O1xuICAgIHotaW5kZXg6IDEwO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIC5sb2FkaW5nLW1lc3NhZ2Uge1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgb3BhY2l0eTogMC43O1xuICAgICAgICBsZXR0ZXItc3BhY2luZzogMC42cHg7XG4gICAgfVxufVxuXG4ucGFnZS1jb250YWluZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNkZmUyZWUgIWltcG9ydGFudDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjYzFjM2M5O1xuICAgIGJvcmRlci1yYWRpdXM6IDBweCAwcHggNHB4IDRweDtcbiAgICAucGFnZS1jb250ZW50IHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBjb2xvcjogIzMzMzMzMztcbiAgICAgICAgJj4ucGFnaW5hdGlvbi1sZWZ0IHtcbiAgICAgICAgICAgIHdpZHRoOiAzMCU7XG4gICAgICAgIH1cbiAgICAgICAgJj4ucGFnaW5hdGlvbi1yaWdodCB7XG4gICAgICAgICAgICB3aWR0aDogMjIlO1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgIC5wYWdlLWRldGFpbHMge1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlciAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgLnBhZ2UtbnVtYmVyIHtcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICMzMzMzMzM7XG4gICAgICAgICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNjMWMzYzk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC5wYWdlLW51bWJlcjpmb2N1cyB7XG4gICAgICAgICAgICAgICAgICAgIG91dGxpbmUtc3R5bGU6IG5vbmU7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjMzMzMzMzO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn0iLCIucXVldWUtYWN0aW9ucyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cbi5xdWV1ZS1hY3Rpb25zIC5zZWFyY2gtYm94IHtcbiAgd2lkdGg6IDI1JTtcbiAgZGlzcGxheTogZmxleDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLnF1ZXVlLWFjdGlvbnMgLnNlYXJjaC1ib3ggPiBpbnB1dCB7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiA4cHggMTJweDtcbn1cbi5xdWV1ZS1hY3Rpb25zIC5zZWFyY2gtYm94ID4gaW1nIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMTBweDtcbiAgdG9wOiAxMHB4O1xufVxuLnF1ZXVlLWFjdGlvbnMgLnNldHRpbmdzIHtcbiAgZGlzcGxheTogZmxleDtcbn1cbi5xdWV1ZS1hY3Rpb25zIC5zZXR0aW5ncyAuam9iLXNldHRpbmcge1xuICBkaXNwbGF5OiBmbGV4O1xufVxuLnF1ZXVlLWFjdGlvbnMgLnNldHRpbmdzIC5qb2Itc2V0dGluZyA+IC5jb3VudCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMzRlYTI7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5xdWV1ZS1hY3Rpb25zIC5zZXR0aW5ncyAuam9iLXNldHRpbmcgPiAudGV4dCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYm9yZGVyOiAxcHggc29saWQgIzAzNGVhMjtcbiAgY29sb3I6ICMwMzRlYTI7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4ucXVldWUtYWN0aW9ucyAuc2V0dGluZ3MgLnRocmVhZC1zZXR0aW5nIHtcbiAgZGlzcGxheTogZmxleDtcbn1cbi5xdWV1ZS1hY3Rpb25zIC5zZXR0aW5ncyAudGhyZWFkLXNldHRpbmcgPiAuY291bnQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzVhZmY4O1xuICBjb2xvcjogd2hpdGU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4ucXVldWUtYWN0aW9ucyAuc2V0dGluZ3MgLnRocmVhZC1zZXR0aW5nID4gLnRleHQge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJvcmRlcjogMXB4IHNvbGlkICMzNWFmZjg7XG4gIGNvbG9yOiAjMzVhZmY4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLnF1ZXVlLWFjdGlvbnMgLnNldHRpbmdzIC5jb25mLWJ1dHRvbiB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYm9yZGVyOiAxcHggc29saWQgIzM1YWZmODtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzM1YWZmODtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5xdWV1ZS1hY3Rpb25zIC5zZXR0aW5ncyAuY29uZi1idXR0b24gPiBpbWcge1xuICB3aWR0aDogMjhweDtcbn1cblxuZGl2IC5zZWFyY2gtc2V0dGluZyB7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG5kaXYgLnNlYXJjaC1zZXR0aW5nIC5zZXR0aW5ncyB7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG5kaXYgLmluZm8tY29udGFpbmVyIC5pbmZvLWRhdGEge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGJhY2tncm91bmQ6ICNmZmZmZmYgMCUgMCUgbm8tcmVwZWF0IHBhZGRpbmctYm94O1xuICBib3JkZXI6IDFweCBzb2xpZCAjYzFjM2M5O1xuICBwYWRkaW5nOiA0cHggMjBweDtcbn1cbmRpdiAuaW5mby1jb250YWluZXIgLmluZm8tZGF0YSA+IC5uYW1lIHtcbiAgd2lkdGg6IDMwJTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBsZWZ0O1xuICBhbGlnbi1pdGVtczogY2VudGVyICFpbXBvcnRhbnQ7XG59XG5kaXYgLmluZm8tY29udGFpbmVyIC5pbmZvLWRhdGEgPiAuc2Vzc2lvbiB7XG4gIHdpZHRoOiA1MCU7XG4gIHRleHQtYWxpZ246IGxlZnQgIWltcG9ydGFudDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuZGl2IC5pbmZvLWNvbnRhaW5lciAuaW5mby1kYXRhID4gLnNlc3Npb24gPiAuc2Vzc2lvbi1jb3VudCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzNWFmZjg7XG4gIHBhZGRpbmc6IDVweDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHdpZHRoOiA1MHB4O1xuICBjb2xvcjogI2ZmZjtcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5kaXYgLmluZm8tY29udGFpbmVyIC5pbmZvLWRhdGEgPiAuc2Vzc2lvbiA+IC5zZXNzaW9ucy1uYW1lIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiA1MHB4O1xuICB0b3A6IDBweDtcbiAgZGlzcGxheTogZmxleDtcbn1cbmRpdiAuaW5mby1jb250YWluZXIgLmluZm8tZGF0YSA+IC5zdW1tYXJ5IHtcbiAgd2lkdGg6IDIwJTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXIgIWltcG9ydGFudDtcbn1cbmRpdiAuaW5mby1jb250YWluZXIgLmhlYWQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIHBhZGRpbmctdG9wOiAxMnB4ICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmctYm90dG9tOiAxMnB4ICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQtY29sb3I6ICNkZmUyZWUgIWltcG9ydGFudDtcbiAgYm9yZGVyLXJhZGl1czogNHB4IDRweCAwcHggMHB4O1xuICBib3JkZXI6IG5vbmU7XG59XG5cbi5sb2FkaW5nIHtcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDtcbiAgb3BhY2l0eTogMC45O1xuICB3aWR0aDogMTAwdnc7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwcHg7XG4gIHotaW5kZXg6IDEwO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cbi5sb2FkaW5nIC5sb2FkaW5nLW1lc3NhZ2Uge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgb3BhY2l0eTogMC43O1xuICBsZXR0ZXItc3BhY2luZzogMC42cHg7XG59XG5cbi5wYWdlLWNvbnRhaW5lciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNkZmUyZWUgIWltcG9ydGFudDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2MxYzNjOTtcbiAgYm9yZGVyLXJhZGl1czogMHB4IDBweCA0cHggNHB4O1xufVxuLnBhZ2UtY29udGFpbmVyIC5wYWdlLWNvbnRlbnQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGNvbG9yOiAjMzMzMzMzO1xufVxuLnBhZ2UtY29udGFpbmVyIC5wYWdlLWNvbnRlbnQgPiAucGFnaW5hdGlvbi1sZWZ0IHtcbiAgd2lkdGg6IDMwJTtcbn1cbi5wYWdlLWNvbnRhaW5lciAucGFnZS1jb250ZW50ID4gLnBhZ2luYXRpb24tcmlnaHQge1xuICB3aWR0aDogMjIlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLnBhZ2UtY29udGFpbmVyIC5wYWdlLWNvbnRlbnQgPiAucGFnaW5hdGlvbi1yaWdodCAucGFnZS1kZXRhaWxzIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXIgIWltcG9ydGFudDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5wYWdlLWNvbnRhaW5lciAucGFnZS1jb250ZW50ID4gLnBhZ2luYXRpb24tcmlnaHQgLnBhZ2UtZGV0YWlscyAucGFnZS1udW1iZXIge1xuICBjb2xvcjogIzMzMzMzMztcbiAgYm9yZGVyOiAxcHggc29saWQgI2MxYzNjOTtcbn1cbi5wYWdlLWNvbnRhaW5lciAucGFnZS1jb250ZW50ID4gLnBhZ2luYXRpb24tcmlnaHQgLnBhZ2UtZGV0YWlscyAucGFnZS1udW1iZXI6Zm9jdXMge1xuICBvdXRsaW5lLXN0eWxlOiBub25lO1xuICBjb2xvcjogIzMzMzMzMztcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/layout/queue-info/queue/queue.component.ts":
  /*!************************************************************!*\
    !*** ./src/app/layout/queue-info/queue/queue.component.ts ***!
    \************************************************************/

  /*! exports provided: QueueComponent */

  /***/
  function srcAppLayoutQueueInfoQueueQueueComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "QueueComponent", function () {
      return QueueComponent;
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


    var _config_modal_config_modal_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../config-modal/config-modal.component */
    "./src/app/layout/queue-info/config-modal/config-modal.component.ts");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/esm2015/dialog.js");

    var QueueComponent = /*#__PURE__*/function () {
      function QueueComponent(dialog) {
        _classCallCheck(this, QueueComponent);

        this.dialog = dialog;
        this.thisElementClicked = false;
      }

      _createClass(QueueComponent, [{
        key: "onGlobalClick",
        value: function onGlobalClick(event) {
          if (event.target.className.includes('name') || event.target.className.includes('count') || event.target.className.includes('session')) {} else {
            this.selectedIndex = null;
            this.showList = false;
          }
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          this.showList = false;
          this.selectedIndex = null;
          this.loadingData = false;
          this.queueData = [{
            id: 1,
            name: 'Queued for Pre-Processing',
            sessions: 34,
            summary: '100',
            status: 'failed'
          }, {
            id: 2,
            name: 'Pre-processing',
            sessions: 24,
            summary: '90',
            status: 'in-progress'
          }, {
            id: 3,
            name: 'Queued for Processing',
            sessions: 14,
            summary: '60',
            status: 'completed'
          }, {
            id: 4,
            name: 'Processing',
            sessions: 30,
            summary: '60',
            status: 'in-progress'
          }, {
            id: 5,
            name: 'Post-Processing',
            sessions: 13,
            summary: '100',
            status: 'failed'
          }, {
            id: 6,
            name: 'Queue for Batch',
            sessions: 19,
            summary: '90',
            status: 'in-progress'
          }, {
            id: 7,
            name: 'Queue for Approval',
            sessions: 104,
            summary: '90',
            status: 'in-progress'
          }];
          this.filteredData = this.queueData;
        }
      }, {
        key: "openConfig",
        value: function openConfig() {
          var _this = this;

          var data = [];
          var dialogRef = this.dialog.open(_config_modal_config_modal_component__WEBPACK_IMPORTED_MODULE_2__["ConfigModalComponent"], {
            data: data
          });
          dialogRef.afterClosed().subscribe(function (res) {
            if (res === 'true') {
              _this.loadingData = false;
            } else {
              _this.configData = res.data[0];
              _this.loadingData = true;
              setTimeout(function () {
                _this.loadingData = false;
              }, 1000);
            }
          });
        }
      }, {
        key: "getList",
        value: function getList(i) {
          this.selectedIndex = i;
          this.showList = !this.showList;
        }
      }, {
        key: "searchData",
        value: function searchData(e) {
          if (e && (e !== undefined || e !== null || e !== '')) {
            this.filteredData = this.queueData.filter(function (x) {
              return x.name.toLowerCase().includes(e.toLowerCase());
            });
          } else {
            this.filteredData = this.queueData;
          }
        }
      }]);

      return QueueComponent;
    }();

    QueueComponent.ctorParameters = function () {
      return [{
        type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialog"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('document:mousedown', ['$event'])], QueueComponent.prototype, "onGlobalClick", null);
    QueueComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-queue',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./queue.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/queue-info/queue/queue.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./queue.component.scss */
      "./src/app/layout/queue-info/queue/queue.component.scss"))["default"]]
    })], QueueComponent);
    /***/
  },

  /***/
  "./src/app/layout/queue-info/sessions/sessions.component.scss":
  /*!********************************************************************!*\
    !*** ./src/app/layout/queue-info/sessions/sessions.component.scss ***!
    \********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppLayoutQueueInfoSessionsSessionsComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".session-container {\n  position: relative;\n}\n.session-container > .session-list {\n  display: flex;\n}\n.session-container > .session-list > .triangle-left {\n  width: 0;\n  height: 0;\n  border-top: 8px solid transparent;\n  border-right: 12px solid #333333;\n  border-bottom: 8px solid transparent;\n  position: relative;\n  top: 5px;\n}\n.session-container > .session-list > .session-item {\n  background-color: #333333;\n  color: #fff;\n  height: 200px;\n  width: 120px;\n  overflow: hidden;\n  overflow-y: scroll;\n}\n.session-container > .session-list > .session-item > .item-name {\n  cursor: pointer;\n}\n.session-container > .session-list > .session-item > .item-name:hover {\n  background-color: #666;\n}\n.workflow-container {\n  position: absolute;\n  left: 130px;\n}\n.workflow-container > .session-list {\n  display: flex;\n}\n.workflow-container > .session-list > .triangle-left {\n  width: 0;\n  height: 0;\n  border-top: 8px solid transparent;\n  border-right: 12px solid #333333;\n  border-bottom: 8px solid transparent;\n  position: relative;\n  top: 5px;\n}\n.workflow-container > .session-list > .session-item {\n  background-color: #333333;\n  color: #fff;\n  height: 200px;\n  width: 140px;\n  overflow: hidden;\n  overflow-y: scroll;\n}\n.workflow-container > .session-list > .session-item > .item-name {\n  cursor: pointer;\n}\n.workflow-container > .session-list > .session-item > .item-name:hover {\n  background-color: #666;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hcHBsZS9wcm9qZWN0L2RleGNlbnRlci1kYXNoYm9hcmQvc3JjL2FwcC9sYXlvdXQvcXVldWUtaW5mby9zZXNzaW9ucy9zZXNzaW9ucy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbGF5b3V0L3F1ZXVlLWluZm8vc2Vzc2lvbnMvc2Vzc2lvbnMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBQTtBQ0NGO0FEQ0U7RUFDRSxhQUFBO0FDQ0o7QURBSTtFQUNFLFFBQUE7RUFDQSxTQUFBO0VBQ0EsaUNBQUE7RUFDQSxnQ0FBQTtFQUNBLG9DQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0FDRU47QURBSTtFQUNFLHlCQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQ0VOO0FERE07RUFDRSxlQUFBO0FDR1I7QURETTtFQUNFLHNCQUFBO0FDR1I7QURHQTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtBQ0FGO0FEQ0U7RUFDRSxhQUFBO0FDQ0o7QURBSTtFQUNFLFFBQUE7RUFDQSxTQUFBO0VBQ0EsaUNBQUE7RUFDQSxnQ0FBQTtFQUNBLG9DQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0FDRU47QURBSTtFQUNFLHlCQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQ0VOO0FERE07RUFDRSxlQUFBO0FDR1I7QURETTtFQUNFLHNCQUFBO0FDR1IiLCJmaWxlIjoic3JjL2FwcC9sYXlvdXQvcXVldWUtaW5mby9zZXNzaW9ucy9zZXNzaW9ucy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zZXNzaW9uLWNvbnRhaW5lciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcblxuICAmID4gLnNlc3Npb24tbGlzdCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICAmID4gLnRyaWFuZ2xlLWxlZnQge1xuICAgICAgd2lkdGg6IDA7XG4gICAgICBoZWlnaHQ6IDA7XG4gICAgICBib3JkZXItdG9wOiA4cHggc29saWQgdHJhbnNwYXJlbnQ7XG4gICAgICBib3JkZXItcmlnaHQ6IDEycHggc29saWQgIzMzMzMzMztcbiAgICAgIGJvcmRlci1ib3R0b206IDhweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgIHRvcDogNXB4O1xuICAgIH1cbiAgICAmID4gLnNlc3Npb24taXRlbSB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzMzMzMzO1xuICAgICAgY29sb3I6ICNmZmY7XG4gICAgICBoZWlnaHQ6IDIwMHB4O1xuICAgICAgd2lkdGg6IDEyMHB4O1xuICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcbiAgICAgICYgPiAuaXRlbS1uYW1lIHtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgfVxuICAgICAgJiA+IC5pdGVtLW5hbWU6aG92ZXIge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjY2O1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG4ud29ya2Zsb3ctY29udGFpbmVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAxMzBweDtcbiAgJiA+IC5zZXNzaW9uLWxpc3Qge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgJiA+IC50cmlhbmdsZS1sZWZ0IHtcbiAgICAgIHdpZHRoOiAwO1xuICAgICAgaGVpZ2h0OiAwO1xuICAgICAgYm9yZGVyLXRvcDogOHB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICAgICAgYm9yZGVyLXJpZ2h0OiAxMnB4IHNvbGlkICMzMzMzMzM7XG4gICAgICBib3JkZXItYm90dG9tOiA4cHggc29saWQgdHJhbnNwYXJlbnQ7XG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICB0b3A6IDVweDtcbiAgICB9XG4gICAgJiA+IC5zZXNzaW9uLWl0ZW0ge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzMzMzMzMztcbiAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgaGVpZ2h0OiAyMDBweDtcbiAgICAgIHdpZHRoOiAxNDBweDtcbiAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICBvdmVyZmxvdy15OiBzY3JvbGw7XG4gICAgICAmID4gLml0ZW0tbmFtZSB7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgIH1cbiAgICAgICYgPiAuaXRlbS1uYW1lOmhvdmVyIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzY2NjtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiIsIi5zZXNzaW9uLWNvbnRhaW5lciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5zZXNzaW9uLWNvbnRhaW5lciA+IC5zZXNzaW9uLWxpc3Qge1xuICBkaXNwbGF5OiBmbGV4O1xufVxuLnNlc3Npb24tY29udGFpbmVyID4gLnNlc3Npb24tbGlzdCA+IC50cmlhbmdsZS1sZWZ0IHtcbiAgd2lkdGg6IDA7XG4gIGhlaWdodDogMDtcbiAgYm9yZGVyLXRvcDogOHB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICBib3JkZXItcmlnaHQ6IDEycHggc29saWQgIzMzMzMzMztcbiAgYm9yZGVyLWJvdHRvbTogOHB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogNXB4O1xufVxuLnNlc3Npb24tY29udGFpbmVyID4gLnNlc3Npb24tbGlzdCA+IC5zZXNzaW9uLWl0ZW0ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzMzMzMzO1xuICBjb2xvcjogI2ZmZjtcbiAgaGVpZ2h0OiAyMDBweDtcbiAgd2lkdGg6IDEyMHB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBvdmVyZmxvdy15OiBzY3JvbGw7XG59XG4uc2Vzc2lvbi1jb250YWluZXIgPiAuc2Vzc2lvbi1saXN0ID4gLnNlc3Npb24taXRlbSA+IC5pdGVtLW5hbWUge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4uc2Vzc2lvbi1jb250YWluZXIgPiAuc2Vzc2lvbi1saXN0ID4gLnNlc3Npb24taXRlbSA+IC5pdGVtLW5hbWU6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjY2O1xufVxuXG4ud29ya2Zsb3ctY29udGFpbmVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAxMzBweDtcbn1cbi53b3JrZmxvdy1jb250YWluZXIgPiAuc2Vzc2lvbi1saXN0IHtcbiAgZGlzcGxheTogZmxleDtcbn1cbi53b3JrZmxvdy1jb250YWluZXIgPiAuc2Vzc2lvbi1saXN0ID4gLnRyaWFuZ2xlLWxlZnQge1xuICB3aWR0aDogMDtcbiAgaGVpZ2h0OiAwO1xuICBib3JkZXItdG9wOiA4cHggc29saWQgdHJhbnNwYXJlbnQ7XG4gIGJvcmRlci1yaWdodDogMTJweCBzb2xpZCAjMzMzMzMzO1xuICBib3JkZXItYm90dG9tOiA4cHggc29saWQgdHJhbnNwYXJlbnQ7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiA1cHg7XG59XG4ud29ya2Zsb3ctY29udGFpbmVyID4gLnNlc3Npb24tbGlzdCA+IC5zZXNzaW9uLWl0ZW0ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzMzMzMzO1xuICBjb2xvcjogI2ZmZjtcbiAgaGVpZ2h0OiAyMDBweDtcbiAgd2lkdGg6IDE0MHB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBvdmVyZmxvdy15OiBzY3JvbGw7XG59XG4ud29ya2Zsb3ctY29udGFpbmVyID4gLnNlc3Npb24tbGlzdCA+IC5zZXNzaW9uLWl0ZW0gPiAuaXRlbS1uYW1lIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLndvcmtmbG93LWNvbnRhaW5lciA+IC5zZXNzaW9uLWxpc3QgPiAuc2Vzc2lvbi1pdGVtID4gLml0ZW0tbmFtZTpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM2NjY7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/layout/queue-info/sessions/sessions.component.ts":
  /*!******************************************************************!*\
    !*** ./src/app/layout/queue-info/sessions/sessions.component.ts ***!
    \******************************************************************/

  /*! exports provided: SessionsComponent */

  /***/
  function srcAppLayoutQueueInfoSessionsSessionsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SessionsComponent", function () {
      return SessionsComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var SessionsComponent = /*#__PURE__*/function () {
      function SessionsComponent() {
        _classCallCheck(this, SessionsComponent);
      }

      _createClass(SessionsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.showList = false;
          this.workFlow = false;
          this.selectedIndex = null;
        }
      }, {
        key: "getList",
        value: function getList() {
          this.showList = !this.showList;
        }
      }, {
        key: "showWorkFlow",
        value: function showWorkFlow(i) {
          if (i === 1 || i === 2) {
            this.selectedIndex = i;
            this.workFlow = !this.workFlow;
          }
        }
      }]);

      return SessionsComponent;
    }();

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], SessionsComponent.prototype, "data", void 0);
    SessionsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-sessions',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./sessions.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/queue-info/sessions/sessions.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./sessions.component.scss */
      "./src/app/layout/queue-info/sessions/sessions.component.scss"))["default"]]
    })], SessionsComponent);
    /***/
  },

  /***/
  "./src/app/layout/queue-info/summary/summary.component.scss":
  /*!******************************************************************!*\
    !*** ./src/app/layout/queue-info/summary/summary.component.scss ***!
    \******************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppLayoutQueueInfoSummarySummaryComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".progress-circle {\n  font-size: 12px;\n  position: relative;\n  /* so that children can be absolutely positioned */\n  padding: 0;\n  width: 40px;\n  height: 40px;\n  background-color: #f2e9e1;\n  border-radius: 50%;\n  line-height: 50px;\n}\n\n.progress-circle:after {\n  border: none;\n  position: absolute;\n  top: 5px;\n  left: 5px;\n  text-align: center;\n  display: block;\n  border-radius: 50%;\n  width: 30px;\n  height: 30px;\n  background-color: white;\n  content: \" \";\n}\n\n/* Text inside the control */\n\n.progress-circle span {\n  position: absolute;\n  line-height: 40px;\n  width: 40px;\n  text-align: center;\n  display: block;\n  z-index: 2;\n}\n\n.left-half-clipper {\n  /* a round circle */\n  border-radius: 50%;\n  width: 40px;\n  height: 40px;\n  position: absolute;\n  /* needed for clipping */\n  clip: rect(0, 50px, 50px, 25px);\n  /* clips the whole left half*/\n}\n\n/* when p>50, don't clip left half*/\n\n.progress-circle.over50 .left-half-clipper {\n  clip: rect(auto, auto, auto, auto);\n}\n\n.value-color {\n  border: 0.45em solid #f2e9e1;\n}\n\n.circle-color {\n  color: #e1d904;\n  background-color: #e1d904;\n}\n\n.value-failed {\n  border: 0.45em solid #f2e9e1;\n}\n\n.failed {\n  color: #ff0000;\n  background-color: #ff0000;\n}\n\n.completed {\n  color: #8dbf22;\n  background-color: #8dbf22;\n}\n\n.value-completed {\n  border: 0.45em solid #f2e9e1;\n}\n\n.value-bar {\n  /*This is an overlayed square, that is made round with the border radius,\n  then it is cut to display only the left half, then rotated clockwise\n  to escape the outer clipping path.*/\n  position: absolute;\n  /*needed for clipping*/\n  clip: rect(0, 25px, 50px, 0);\n  width: 40px;\n  height: 40px;\n  border-radius: 50%;\n  /*The border is 0.35 but making it larger removes visual artifacts */\n  /*background-color: #4D642D;*/\n  /* for debug */\n  box-sizing: border-box;\n}\n\n/* Progress bar filling the whole right half for values above 50% */\n\n.progress-circle.over50 .first50-bar {\n  /*Progress bar for the first 50%, filling the whole right half*/\n  position: absolute;\n  /*needed for clipping*/\n  clip: rect(0, 50px, 50px, 25px);\n  background-color: #53777a;\n  border-radius: 50%;\n  width: 40px;\n  height: 40px;\n}\n\n.progress-circle:not(.over50) .first50-bar {\n  display: none;\n}\n\n/* Progress bar rotation position */\n\n.progress-circle.p0 .value-bar {\n  display: none;\n}\n\n.progress-circle.p1 .value-bar {\n  transform: rotate(4deg);\n}\n\n.progress-circle.p2 .value-bar {\n  transform: rotate(7deg);\n}\n\n.progress-circle.p3 .value-bar {\n  transform: rotate(11deg);\n}\n\n.progress-circle.p4 .value-bar {\n  transform: rotate(14deg);\n}\n\n.progress-circle.p5 .value-bar {\n  transform: rotate(18deg);\n}\n\n.progress-circle.p6 .value-bar {\n  transform: rotate(22deg);\n}\n\n.progress-circle.p7 .value-bar {\n  transform: rotate(25deg);\n}\n\n.progress-circle.p8 .value-bar {\n  transform: rotate(29deg);\n}\n\n.progress-circle.p9 .value-bar {\n  transform: rotate(32deg);\n}\n\n.progress-circle.p10 .value-bar {\n  transform: rotate(36deg);\n}\n\n.progress-circle.p11 .value-bar {\n  transform: rotate(40deg);\n}\n\n.progress-circle.p12 .value-bar {\n  transform: rotate(43deg);\n}\n\n.progress-circle.p13 .value-bar {\n  transform: rotate(47deg);\n}\n\n.progress-circle.p14 .value-bar {\n  transform: rotate(50deg);\n}\n\n.progress-circle.p15 .value-bar {\n  transform: rotate(54deg);\n}\n\n.progress-circle.p16 .value-bar {\n  transform: rotate(58deg);\n}\n\n.progress-circle.p17 .value-bar {\n  transform: rotate(61deg);\n}\n\n.progress-circle.p18 .value-bar {\n  transform: rotate(65deg);\n}\n\n.progress-circle.p19 .value-bar {\n  transform: rotate(68deg);\n}\n\n.progress-circle.p20 .value-bar {\n  transform: rotate(72deg);\n}\n\n.progress-circle.p21 .value-bar {\n  transform: rotate(76deg);\n}\n\n.progress-circle.p22 .value-bar {\n  transform: rotate(79deg);\n}\n\n.progress-circle.p23 .value-bar {\n  transform: rotate(83deg);\n}\n\n.progress-circle.p24 .value-bar {\n  transform: rotate(86deg);\n}\n\n.progress-circle.p25 .value-bar {\n  transform: rotate(90deg);\n}\n\n.progress-circle.p26 .value-bar {\n  transform: rotate(94deg);\n}\n\n.progress-circle.p27 .value-bar {\n  transform: rotate(97deg);\n}\n\n.progress-circle.p28 .value-bar {\n  transform: rotate(101deg);\n}\n\n.progress-circle.p29 .value-bar {\n  transform: rotate(104deg);\n}\n\n.progress-circle.p30 .value-bar {\n  transform: rotate(108deg);\n}\n\n.progress-circle.p31 .value-bar {\n  transform: rotate(112deg);\n}\n\n.progress-circle.p32 .value-bar {\n  transform: rotate(115deg);\n}\n\n.progress-circle.p33 .value-bar {\n  transform: rotate(119deg);\n}\n\n.progress-circle.p34 .value-bar {\n  transform: rotate(122deg);\n}\n\n.progress-circle.p35 .value-bar {\n  transform: rotate(126deg);\n}\n\n.progress-circle.p36 .value-bar {\n  transform: rotate(130deg);\n}\n\n.progress-circle.p37 .value-bar {\n  transform: rotate(133deg);\n}\n\n.progress-circle.p38 .value-bar {\n  transform: rotate(137deg);\n}\n\n.progress-circle.p39 .value-bar {\n  transform: rotate(140deg);\n}\n\n.progress-circle.p40 .value-bar {\n  transform: rotate(144deg);\n}\n\n.progress-circle.p41 .value-bar {\n  transform: rotate(148deg);\n}\n\n.progress-circle.p42 .value-bar {\n  transform: rotate(151deg);\n}\n\n.progress-circle.p43 .value-bar {\n  transform: rotate(155deg);\n}\n\n.progress-circle.p44 .value-bar {\n  transform: rotate(158deg);\n}\n\n.progress-circle.p45 .value-bar {\n  transform: rotate(162deg);\n}\n\n.progress-circle.p46 .value-bar {\n  transform: rotate(166deg);\n}\n\n.progress-circle.p47 .value-bar {\n  transform: rotate(169deg);\n}\n\n.progress-circle.p48 .value-bar {\n  transform: rotate(173deg);\n}\n\n.progress-circle.p49 .value-bar {\n  transform: rotate(176deg);\n}\n\n.progress-circle.p50 .value-bar {\n  transform: rotate(180deg);\n}\n\n.progress-circle.p51 .value-bar {\n  transform: rotate(184deg);\n}\n\n.progress-circle.p52 .value-bar {\n  transform: rotate(187deg);\n}\n\n.progress-circle.p53 .value-bar {\n  transform: rotate(191deg);\n}\n\n.progress-circle.p54 .value-bar {\n  transform: rotate(194deg);\n}\n\n.progress-circle.p55 .value-bar {\n  transform: rotate(198deg);\n}\n\n.progress-circle.p56 .value-bar {\n  transform: rotate(202deg);\n}\n\n.progress-circle.p57 .value-bar {\n  transform: rotate(205deg);\n}\n\n.progress-circle.p58 .value-bar {\n  transform: rotate(209deg);\n}\n\n.progress-circle.p59 .value-bar {\n  transform: rotate(212deg);\n}\n\n.progress-circle.p60 .value-bar {\n  transform: rotate(216deg);\n}\n\n.progress-circle.p61 .value-bar {\n  transform: rotate(220deg);\n}\n\n.progress-circle.p62 .value-bar {\n  transform: rotate(223deg);\n}\n\n.progress-circle.p63 .value-bar {\n  transform: rotate(227deg);\n}\n\n.progress-circle.p64 .value-bar {\n  transform: rotate(230deg);\n}\n\n.progress-circle.p65 .value-bar {\n  transform: rotate(234deg);\n}\n\n.progress-circle.p66 .value-bar {\n  transform: rotate(238deg);\n}\n\n.progress-circle.p67 .value-bar {\n  transform: rotate(241deg);\n}\n\n.progress-circle.p68 .value-bar {\n  transform: rotate(245deg);\n}\n\n.progress-circle.p69 .value-bar {\n  transform: rotate(248deg);\n}\n\n.progress-circle.p70 .value-bar {\n  transform: rotate(252deg);\n}\n\n.progress-circle.p71 .value-bar {\n  transform: rotate(256deg);\n}\n\n.progress-circle.p72 .value-bar {\n  transform: rotate(259deg);\n}\n\n.progress-circle.p73 .value-bar {\n  transform: rotate(263deg);\n}\n\n.progress-circle.p74 .value-bar {\n  transform: rotate(266deg);\n}\n\n.progress-circle.p75 .value-bar {\n  transform: rotate(270deg);\n}\n\n.progress-circle.p76 .value-bar {\n  transform: rotate(274deg);\n}\n\n.progress-circle.p77 .value-bar {\n  transform: rotate(277deg);\n}\n\n.progress-circle.p78 .value-bar {\n  transform: rotate(281deg);\n}\n\n.progress-circle.p79 .value-bar {\n  transform: rotate(284deg);\n}\n\n.progress-circle.p80 .value-bar {\n  transform: rotate(288deg);\n}\n\n.progress-circle.p81 .value-bar {\n  transform: rotate(292deg);\n}\n\n.progress-circle.p82 .value-bar {\n  transform: rotate(295deg);\n}\n\n.progress-circle.p83 .value-bar {\n  transform: rotate(299deg);\n}\n\n.progress-circle.p84 .value-bar {\n  transform: rotate(302deg);\n}\n\n.progress-circle.p85 .value-bar {\n  transform: rotate(306deg);\n}\n\n.progress-circle.p86 .value-bar {\n  transform: rotate(310deg);\n}\n\n.progress-circle.p87 .value-bar {\n  transform: rotate(313deg);\n}\n\n.progress-circle.p88 .value-bar {\n  transform: rotate(317deg);\n}\n\n.progress-circle.p89 .value-bar {\n  transform: rotate(320deg);\n}\n\n.progress-circle.p90 .value-bar {\n  transform: rotate(324deg);\n}\n\n.progress-circle.p91 .value-bar {\n  transform: rotate(328deg);\n}\n\n.progress-circle.p92 .value-bar {\n  transform: rotate(331deg);\n}\n\n.progress-circle.p93 .value-bar {\n  transform: rotate(335deg);\n}\n\n.progress-circle.p94 .value-bar {\n  transform: rotate(338deg);\n}\n\n.progress-circle.p95 .value-bar {\n  transform: rotate(342deg);\n}\n\n.progress-circle.p96 .value-bar {\n  transform: rotate(346deg);\n}\n\n.progress-circle.p97 .value-bar {\n  transform: rotate(349deg);\n}\n\n.progress-circle.p98 .value-bar {\n  transform: rotate(353deg);\n}\n\n.progress-circle.p99 .value-bar {\n  transform: rotate(356deg);\n}\n\n.progress-circle.p100 .value-bar {\n  transform: rotate(360deg);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hcHBsZS9wcm9qZWN0L2RleGNlbnRlci1kYXNoYm9hcmQvc3JjL2FwcC9sYXlvdXQvcXVldWUtaW5mby9zdW1tYXJ5L3N1bW1hcnkuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2xheW91dC9xdWV1ZS1pbmZvL3N1bW1hcnkvc3VtbWFyeS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGVBQUE7RUFDQSxrQkFBQTtFQUFvQixrREFBQTtFQUNwQixVQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7QUNFRjs7QURDQTtFQUNFLFlBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHVCQUFBO0VBQ0EsWUFBQTtBQ0VGOztBREFBLDRCQUFBOztBQUNBO0VBQ0Usa0JBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxVQUFBO0FDR0Y7O0FEQUE7RUFDRSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUFvQix3QkFBQTtFQUNwQiwrQkFBQTtFQUFpQyw2QkFBQTtBQ0tuQzs7QURIQSxtQ0FBQTs7QUFDQTtFQUNFLGtDQUFBO0FDTUY7O0FESEE7RUFDRSw0QkFBQTtBQ01GOztBREhBO0VBQ0UsY0FBQTtFQUNBLHlCQUFBO0FDTUY7O0FESEE7RUFDRSw0QkFBQTtBQ01GOztBREhBO0VBQ0UsY0FBQTtFQUNBLHlCQUFBO0FDTUY7O0FESEE7RUFDRSxjQUFBO0VBQ0EseUJBQUE7QUNNRjs7QURIQTtFQUNFLDRCQUFBO0FDTUY7O0FESEE7RUFDRTs7cUNBQUE7RUFHQSxrQkFBQTtFQUFvQixzQkFBQTtFQUNwQiw0QkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxvRUFBQTtFQUNBLDZCQUFBO0VBQStCLGNBQUE7RUFDL0Isc0JBQUE7QUNRRjs7QUROQSxtRUFBQTs7QUFDQTtFQUNFLCtEQUFBO0VBQ0Esa0JBQUE7RUFBb0Isc0JBQUE7RUFDcEIsK0JBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUNVRjs7QURSQTtFQUNFLGFBQUE7QUNXRjs7QURSQSxtQ0FBQTs7QUFDQTtFQUNFLGFBQUE7QUNXRjs7QURUQTtFQUNFLHVCQUFBO0FDWUY7O0FEVkE7RUFDRSx1QkFBQTtBQ2FGOztBRFhBO0VBQ0Usd0JBQUE7QUNjRjs7QURaQTtFQUNFLHdCQUFBO0FDZUY7O0FEYkE7RUFDRSx3QkFBQTtBQ2dCRjs7QURkQTtFQUNFLHdCQUFBO0FDaUJGOztBRGZBO0VBQ0Usd0JBQUE7QUNrQkY7O0FEaEJBO0VBQ0Usd0JBQUE7QUNtQkY7O0FEakJBO0VBQ0Usd0JBQUE7QUNvQkY7O0FEbEJBO0VBQ0Usd0JBQUE7QUNxQkY7O0FEbkJBO0VBQ0Usd0JBQUE7QUNzQkY7O0FEcEJBO0VBQ0Usd0JBQUE7QUN1QkY7O0FEckJBO0VBQ0Usd0JBQUE7QUN3QkY7O0FEdEJBO0VBQ0Usd0JBQUE7QUN5QkY7O0FEdkJBO0VBQ0Usd0JBQUE7QUMwQkY7O0FEeEJBO0VBQ0Usd0JBQUE7QUMyQkY7O0FEekJBO0VBQ0Usd0JBQUE7QUM0QkY7O0FEMUJBO0VBQ0Usd0JBQUE7QUM2QkY7O0FEM0JBO0VBQ0Usd0JBQUE7QUM4QkY7O0FENUJBO0VBQ0Usd0JBQUE7QUMrQkY7O0FEN0JBO0VBQ0Usd0JBQUE7QUNnQ0Y7O0FEOUJBO0VBQ0Usd0JBQUE7QUNpQ0Y7O0FEL0JBO0VBQ0Usd0JBQUE7QUNrQ0Y7O0FEaENBO0VBQ0Usd0JBQUE7QUNtQ0Y7O0FEakNBO0VBQ0Usd0JBQUE7QUNvQ0Y7O0FEbENBO0VBQ0Usd0JBQUE7QUNxQ0Y7O0FEbkNBO0VBQ0Usd0JBQUE7QUNzQ0Y7O0FEcENBO0VBQ0UseUJBQUE7QUN1Q0Y7O0FEckNBO0VBQ0UseUJBQUE7QUN3Q0Y7O0FEdENBO0VBQ0UseUJBQUE7QUN5Q0Y7O0FEdkNBO0VBQ0UseUJBQUE7QUMwQ0Y7O0FEeENBO0VBQ0UseUJBQUE7QUMyQ0Y7O0FEekNBO0VBQ0UseUJBQUE7QUM0Q0Y7O0FEMUNBO0VBQ0UseUJBQUE7QUM2Q0Y7O0FEM0NBO0VBQ0UseUJBQUE7QUM4Q0Y7O0FENUNBO0VBQ0UseUJBQUE7QUMrQ0Y7O0FEN0NBO0VBQ0UseUJBQUE7QUNnREY7O0FEOUNBO0VBQ0UseUJBQUE7QUNpREY7O0FEL0NBO0VBQ0UseUJBQUE7QUNrREY7O0FEaERBO0VBQ0UseUJBQUE7QUNtREY7O0FEakRBO0VBQ0UseUJBQUE7QUNvREY7O0FEbERBO0VBQ0UseUJBQUE7QUNxREY7O0FEbkRBO0VBQ0UseUJBQUE7QUNzREY7O0FEcERBO0VBQ0UseUJBQUE7QUN1REY7O0FEckRBO0VBQ0UseUJBQUE7QUN3REY7O0FEdERBO0VBQ0UseUJBQUE7QUN5REY7O0FEdkRBO0VBQ0UseUJBQUE7QUMwREY7O0FEeERBO0VBQ0UseUJBQUE7QUMyREY7O0FEekRBO0VBQ0UseUJBQUE7QUM0REY7O0FEMURBO0VBQ0UseUJBQUE7QUM2REY7O0FEM0RBO0VBQ0UseUJBQUE7QUM4REY7O0FENURBO0VBQ0UseUJBQUE7QUMrREY7O0FEN0RBO0VBQ0UseUJBQUE7QUNnRUY7O0FEOURBO0VBQ0UseUJBQUE7QUNpRUY7O0FEL0RBO0VBQ0UseUJBQUE7QUNrRUY7O0FEaEVBO0VBQ0UseUJBQUE7QUNtRUY7O0FEakVBO0VBQ0UseUJBQUE7QUNvRUY7O0FEbEVBO0VBQ0UseUJBQUE7QUNxRUY7O0FEbkVBO0VBQ0UseUJBQUE7QUNzRUY7O0FEcEVBO0VBQ0UseUJBQUE7QUN1RUY7O0FEckVBO0VBQ0UseUJBQUE7QUN3RUY7O0FEdEVBO0VBQ0UseUJBQUE7QUN5RUY7O0FEdkVBO0VBQ0UseUJBQUE7QUMwRUY7O0FEeEVBO0VBQ0UseUJBQUE7QUMyRUY7O0FEekVBO0VBQ0UseUJBQUE7QUM0RUY7O0FEMUVBO0VBQ0UseUJBQUE7QUM2RUY7O0FEM0VBO0VBQ0UseUJBQUE7QUM4RUY7O0FENUVBO0VBQ0UseUJBQUE7QUMrRUY7O0FEN0VBO0VBQ0UseUJBQUE7QUNnRkY7O0FEOUVBO0VBQ0UseUJBQUE7QUNpRkY7O0FEL0VBO0VBQ0UseUJBQUE7QUNrRkY7O0FEaEZBO0VBQ0UseUJBQUE7QUNtRkY7O0FEakZBO0VBQ0UseUJBQUE7QUNvRkY7O0FEbEZBO0VBQ0UseUJBQUE7QUNxRkY7O0FEbkZBO0VBQ0UseUJBQUE7QUNzRkY7O0FEcEZBO0VBQ0UseUJBQUE7QUN1RkY7O0FEckZBO0VBQ0UseUJBQUE7QUN3RkY7O0FEdEZBO0VBQ0UseUJBQUE7QUN5RkY7O0FEdkZBO0VBQ0UseUJBQUE7QUMwRkY7O0FEeEZBO0VBQ0UseUJBQUE7QUMyRkY7O0FEekZBO0VBQ0UseUJBQUE7QUM0RkY7O0FEMUZBO0VBQ0UseUJBQUE7QUM2RkY7O0FEM0ZBO0VBQ0UseUJBQUE7QUM4RkY7O0FENUZBO0VBQ0UseUJBQUE7QUMrRkY7O0FEN0ZBO0VBQ0UseUJBQUE7QUNnR0Y7O0FEOUZBO0VBQ0UseUJBQUE7QUNpR0Y7O0FEL0ZBO0VBQ0UseUJBQUE7QUNrR0Y7O0FEaEdBO0VBQ0UseUJBQUE7QUNtR0Y7O0FEakdBO0VBQ0UseUJBQUE7QUNvR0Y7O0FEbEdBO0VBQ0UseUJBQUE7QUNxR0Y7O0FEbkdBO0VBQ0UseUJBQUE7QUNzR0Y7O0FEcEdBO0VBQ0UseUJBQUE7QUN1R0Y7O0FEckdBO0VBQ0UseUJBQUE7QUN3R0Y7O0FEdEdBO0VBQ0UseUJBQUE7QUN5R0Y7O0FEdkdBO0VBQ0UseUJBQUE7QUMwR0Y7O0FEeEdBO0VBQ0UseUJBQUE7QUMyR0Y7O0FEekdBO0VBQ0UseUJBQUE7QUM0R0Y7O0FEMUdBO0VBQ0UseUJBQUE7QUM2R0Y7O0FEM0dBO0VBQ0UseUJBQUE7QUM4R0Y7O0FENUdBO0VBQ0UseUJBQUE7QUMrR0YiLCJmaWxlIjoic3JjL2FwcC9sYXlvdXQvcXVldWUtaW5mby9zdW1tYXJ5L3N1bW1hcnkuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucHJvZ3Jlc3MtY2lyY2xlIHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7IC8qIHNvIHRoYXQgY2hpbGRyZW4gY2FuIGJlIGFic29sdXRlbHkgcG9zaXRpb25lZCAqL1xuICBwYWRkaW5nOiAwO1xuICB3aWR0aDogNDBweDtcbiAgaGVpZ2h0OiA0MHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjJlOWUxO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGxpbmUtaGVpZ2h0OiA1MHB4O1xufVxuXG4ucHJvZ3Jlc3MtY2lyY2xlOmFmdGVyIHtcbiAgYm9yZGVyOiBub25lO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNXB4O1xuICBsZWZ0OiA1cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgd2lkdGg6IDMwcHg7XG4gIGhlaWdodDogMzBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIGNvbnRlbnQ6ICcgJztcbn1cbi8qIFRleHQgaW5zaWRlIHRoZSBjb250cm9sICovXG4ucHJvZ3Jlc3MtY2lyY2xlIHNwYW4ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxpbmUtaGVpZ2h0OiA0MHB4O1xuICB3aWR0aDogNDBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBkaXNwbGF5OiBibG9jaztcbiAgei1pbmRleDogMjtcbn1cblxuLmxlZnQtaGFsZi1jbGlwcGVyIHtcbiAgLyogYSByb3VuZCBjaXJjbGUgKi9cbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICB3aWR0aDogNDBweDtcbiAgaGVpZ2h0OiA0MHB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7IC8qIG5lZWRlZCBmb3IgY2xpcHBpbmcgKi9cbiAgY2xpcDogcmVjdCgwLCA1MHB4LCA1MHB4LCAyNXB4KTsgLyogY2xpcHMgdGhlIHdob2xlIGxlZnQgaGFsZiovXG59XG4vKiB3aGVuIHA+NTAsIGRvbid0IGNsaXAgbGVmdCBoYWxmKi9cbi5wcm9ncmVzcy1jaXJjbGUub3ZlcjUwIC5sZWZ0LWhhbGYtY2xpcHBlciB7XG4gIGNsaXA6IHJlY3QoYXV0bywgYXV0bywgYXV0bywgYXV0byk7XG59XG5cbi52YWx1ZS1jb2xvciB7XG4gIGJvcmRlcjogMC40NWVtIHNvbGlkICNmMmU5ZTE7XG59XG5cbi5jaXJjbGUtY29sb3Ige1xuICBjb2xvcjogI2UxZDkwNDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2UxZDkwNDtcbn1cblxuLnZhbHVlLWZhaWxlZCB7XG4gIGJvcmRlcjogMC40NWVtIHNvbGlkICNmMmU5ZTE7XG59XG5cbi5mYWlsZWQge1xuICBjb2xvcjogI2ZmMDAwMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmMDAwMDtcbn1cblxuLmNvbXBsZXRlZCB7XG4gIGNvbG9yOiAjOGRiZjIyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjOGRiZjIyO1xufVxuXG4udmFsdWUtY29tcGxldGVkIHtcbiAgYm9yZGVyOiAwLjQ1ZW0gc29saWQgI2YyZTllMTtcbn1cblxuLnZhbHVlLWJhciB7XG4gIC8qVGhpcyBpcyBhbiBvdmVybGF5ZWQgc3F1YXJlLCB0aGF0IGlzIG1hZGUgcm91bmQgd2l0aCB0aGUgYm9yZGVyIHJhZGl1cyxcbiAgdGhlbiBpdCBpcyBjdXQgdG8gZGlzcGxheSBvbmx5IHRoZSBsZWZ0IGhhbGYsIHRoZW4gcm90YXRlZCBjbG9ja3dpc2VcbiAgdG8gZXNjYXBlIHRoZSBvdXRlciBjbGlwcGluZyBwYXRoLiovXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTsgLypuZWVkZWQgZm9yIGNsaXBwaW5nKi9cbiAgY2xpcDogcmVjdCgwLCAyNXB4LCA1MHB4LCAwKTtcbiAgd2lkdGg6IDQwcHg7XG4gIGhlaWdodDogNDBweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAvKlRoZSBib3JkZXIgaXMgMC4zNSBidXQgbWFraW5nIGl0IGxhcmdlciByZW1vdmVzIHZpc3VhbCBhcnRpZmFjdHMgKi9cbiAgLypiYWNrZ3JvdW5kLWNvbG9yOiAjNEQ2NDJEOyovIC8qIGZvciBkZWJ1ZyAqL1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuLyogUHJvZ3Jlc3MgYmFyIGZpbGxpbmcgdGhlIHdob2xlIHJpZ2h0IGhhbGYgZm9yIHZhbHVlcyBhYm92ZSA1MCUgKi9cbi5wcm9ncmVzcy1jaXJjbGUub3ZlcjUwIC5maXJzdDUwLWJhciB7XG4gIC8qUHJvZ3Jlc3MgYmFyIGZvciB0aGUgZmlyc3QgNTAlLCBmaWxsaW5nIHRoZSB3aG9sZSByaWdodCBoYWxmKi9cbiAgcG9zaXRpb246IGFic29sdXRlOyAvKm5lZWRlZCBmb3IgY2xpcHBpbmcqL1xuICBjbGlwOiByZWN0KDAsIDUwcHgsIDUwcHgsIDI1cHgpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTM3NzdhO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIHdpZHRoOiA0MHB4O1xuICBoZWlnaHQ6IDQwcHg7XG59XG4ucHJvZ3Jlc3MtY2lyY2xlOm5vdCgub3ZlcjUwKSAuZmlyc3Q1MC1iYXIge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4vKiBQcm9ncmVzcyBiYXIgcm90YXRpb24gcG9zaXRpb24gKi9cbi5wcm9ncmVzcy1jaXJjbGUucDAgLnZhbHVlLWJhciB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG4ucHJvZ3Jlc3MtY2lyY2xlLnAxIC52YWx1ZS1iYXIge1xuICB0cmFuc2Zvcm06IHJvdGF0ZSg0ZGVnKTtcbn1cbi5wcm9ncmVzcy1jaXJjbGUucDIgLnZhbHVlLWJhciB7XG4gIHRyYW5zZm9ybTogcm90YXRlKDdkZWcpO1xufVxuLnByb2dyZXNzLWNpcmNsZS5wMyAudmFsdWUtYmFyIHtcbiAgdHJhbnNmb3JtOiByb3RhdGUoMTFkZWcpO1xufVxuLnByb2dyZXNzLWNpcmNsZS5wNCAudmFsdWUtYmFyIHtcbiAgdHJhbnNmb3JtOiByb3RhdGUoMTRkZWcpO1xufVxuLnByb2dyZXNzLWNpcmNsZS5wNSAudmFsdWUtYmFyIHtcbiAgdHJhbnNmb3JtOiByb3RhdGUoMThkZWcpO1xufVxuLnByb2dyZXNzLWNpcmNsZS5wNiAudmFsdWUtYmFyIHtcbiAgdHJhbnNmb3JtOiByb3RhdGUoMjJkZWcpO1xufVxuLnByb2dyZXNzLWNpcmNsZS5wNyAudmFsdWUtYmFyIHtcbiAgdHJhbnNmb3JtOiByb3RhdGUoMjVkZWcpO1xufVxuLnByb2dyZXNzLWNpcmNsZS5wOCAudmFsdWUtYmFyIHtcbiAgdHJhbnNmb3JtOiByb3RhdGUoMjlkZWcpO1xufVxuLnByb2dyZXNzLWNpcmNsZS5wOSAudmFsdWUtYmFyIHtcbiAgdHJhbnNmb3JtOiByb3RhdGUoMzJkZWcpO1xufVxuLnByb2dyZXNzLWNpcmNsZS5wMTAgLnZhbHVlLWJhciB7XG4gIHRyYW5zZm9ybTogcm90YXRlKDM2ZGVnKTtcbn1cbi5wcm9ncmVzcy1jaXJjbGUucDExIC52YWx1ZS1iYXIge1xuICB0cmFuc2Zvcm06IHJvdGF0ZSg0MGRlZyk7XG59XG4ucHJvZ3Jlc3MtY2lyY2xlLnAxMiAudmFsdWUtYmFyIHtcbiAgdHJhbnNmb3JtOiByb3RhdGUoNDNkZWcpO1xufVxuLnByb2dyZXNzLWNpcmNsZS5wMTMgLnZhbHVlLWJhciB7XG4gIHRyYW5zZm9ybTogcm90YXRlKDQ3ZGVnKTtcbn1cbi5wcm9ncmVzcy1jaXJjbGUucDE0IC52YWx1ZS1iYXIge1xuICB0cmFuc2Zvcm06IHJvdGF0ZSg1MGRlZyk7XG59XG4ucHJvZ3Jlc3MtY2lyY2xlLnAxNSAudmFsdWUtYmFyIHtcbiAgdHJhbnNmb3JtOiByb3RhdGUoNTRkZWcpO1xufVxuLnByb2dyZXNzLWNpcmNsZS5wMTYgLnZhbHVlLWJhciB7XG4gIHRyYW5zZm9ybTogcm90YXRlKDU4ZGVnKTtcbn1cbi5wcm9ncmVzcy1jaXJjbGUucDE3IC52YWx1ZS1iYXIge1xuICB0cmFuc2Zvcm06IHJvdGF0ZSg2MWRlZyk7XG59XG4ucHJvZ3Jlc3MtY2lyY2xlLnAxOCAudmFsdWUtYmFyIHtcbiAgdHJhbnNmb3JtOiByb3RhdGUoNjVkZWcpO1xufVxuLnByb2dyZXNzLWNpcmNsZS5wMTkgLnZhbHVlLWJhciB7XG4gIHRyYW5zZm9ybTogcm90YXRlKDY4ZGVnKTtcbn1cbi5wcm9ncmVzcy1jaXJjbGUucDIwIC52YWx1ZS1iYXIge1xuICB0cmFuc2Zvcm06IHJvdGF0ZSg3MmRlZyk7XG59XG4ucHJvZ3Jlc3MtY2lyY2xlLnAyMSAudmFsdWUtYmFyIHtcbiAgdHJhbnNmb3JtOiByb3RhdGUoNzZkZWcpO1xufVxuLnByb2dyZXNzLWNpcmNsZS5wMjIgLnZhbHVlLWJhciB7XG4gIHRyYW5zZm9ybTogcm90YXRlKDc5ZGVnKTtcbn1cbi5wcm9ncmVzcy1jaXJjbGUucDIzIC52YWx1ZS1iYXIge1xuICB0cmFuc2Zvcm06IHJvdGF0ZSg4M2RlZyk7XG59XG4ucHJvZ3Jlc3MtY2lyY2xlLnAyNCAudmFsdWUtYmFyIHtcbiAgdHJhbnNmb3JtOiByb3RhdGUoODZkZWcpO1xufVxuLnByb2dyZXNzLWNpcmNsZS5wMjUgLnZhbHVlLWJhciB7XG4gIHRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcbn1cbi5wcm9ncmVzcy1jaXJjbGUucDI2IC52YWx1ZS1iYXIge1xuICB0cmFuc2Zvcm06IHJvdGF0ZSg5NGRlZyk7XG59XG4ucHJvZ3Jlc3MtY2lyY2xlLnAyNyAudmFsdWUtYmFyIHtcbiAgdHJhbnNmb3JtOiByb3RhdGUoOTdkZWcpO1xufVxuLnByb2dyZXNzLWNpcmNsZS5wMjggLnZhbHVlLWJhciB7XG4gIHRyYW5zZm9ybTogcm90YXRlKDEwMWRlZyk7XG59XG4ucHJvZ3Jlc3MtY2lyY2xlLnAyOSAudmFsdWUtYmFyIHtcbiAgdHJhbnNmb3JtOiByb3RhdGUoMTA0ZGVnKTtcbn1cbi5wcm9ncmVzcy1jaXJjbGUucDMwIC52YWx1ZS1iYXIge1xuICB0cmFuc2Zvcm06IHJvdGF0ZSgxMDhkZWcpO1xufVxuLnByb2dyZXNzLWNpcmNsZS5wMzEgLnZhbHVlLWJhciB7XG4gIHRyYW5zZm9ybTogcm90YXRlKDExMmRlZyk7XG59XG4ucHJvZ3Jlc3MtY2lyY2xlLnAzMiAudmFsdWUtYmFyIHtcbiAgdHJhbnNmb3JtOiByb3RhdGUoMTE1ZGVnKTtcbn1cbi5wcm9ncmVzcy1jaXJjbGUucDMzIC52YWx1ZS1iYXIge1xuICB0cmFuc2Zvcm06IHJvdGF0ZSgxMTlkZWcpO1xufVxuLnByb2dyZXNzLWNpcmNsZS5wMzQgLnZhbHVlLWJhciB7XG4gIHRyYW5zZm9ybTogcm90YXRlKDEyMmRlZyk7XG59XG4ucHJvZ3Jlc3MtY2lyY2xlLnAzNSAudmFsdWUtYmFyIHtcbiAgdHJhbnNmb3JtOiByb3RhdGUoMTI2ZGVnKTtcbn1cbi5wcm9ncmVzcy1jaXJjbGUucDM2IC52YWx1ZS1iYXIge1xuICB0cmFuc2Zvcm06IHJvdGF0ZSgxMzBkZWcpO1xufVxuLnByb2dyZXNzLWNpcmNsZS5wMzcgLnZhbHVlLWJhciB7XG4gIHRyYW5zZm9ybTogcm90YXRlKDEzM2RlZyk7XG59XG4ucHJvZ3Jlc3MtY2lyY2xlLnAzOCAudmFsdWUtYmFyIHtcbiAgdHJhbnNmb3JtOiByb3RhdGUoMTM3ZGVnKTtcbn1cbi5wcm9ncmVzcy1jaXJjbGUucDM5IC52YWx1ZS1iYXIge1xuICB0cmFuc2Zvcm06IHJvdGF0ZSgxNDBkZWcpO1xufVxuLnByb2dyZXNzLWNpcmNsZS5wNDAgLnZhbHVlLWJhciB7XG4gIHRyYW5zZm9ybTogcm90YXRlKDE0NGRlZyk7XG59XG4ucHJvZ3Jlc3MtY2lyY2xlLnA0MSAudmFsdWUtYmFyIHtcbiAgdHJhbnNmb3JtOiByb3RhdGUoMTQ4ZGVnKTtcbn1cbi5wcm9ncmVzcy1jaXJjbGUucDQyIC52YWx1ZS1iYXIge1xuICB0cmFuc2Zvcm06IHJvdGF0ZSgxNTFkZWcpO1xufVxuLnByb2dyZXNzLWNpcmNsZS5wNDMgLnZhbHVlLWJhciB7XG4gIHRyYW5zZm9ybTogcm90YXRlKDE1NWRlZyk7XG59XG4ucHJvZ3Jlc3MtY2lyY2xlLnA0NCAudmFsdWUtYmFyIHtcbiAgdHJhbnNmb3JtOiByb3RhdGUoMTU4ZGVnKTtcbn1cbi5wcm9ncmVzcy1jaXJjbGUucDQ1IC52YWx1ZS1iYXIge1xuICB0cmFuc2Zvcm06IHJvdGF0ZSgxNjJkZWcpO1xufVxuLnByb2dyZXNzLWNpcmNsZS5wNDYgLnZhbHVlLWJhciB7XG4gIHRyYW5zZm9ybTogcm90YXRlKDE2NmRlZyk7XG59XG4ucHJvZ3Jlc3MtY2lyY2xlLnA0NyAudmFsdWUtYmFyIHtcbiAgdHJhbnNmb3JtOiByb3RhdGUoMTY5ZGVnKTtcbn1cbi5wcm9ncmVzcy1jaXJjbGUucDQ4IC52YWx1ZS1iYXIge1xuICB0cmFuc2Zvcm06IHJvdGF0ZSgxNzNkZWcpO1xufVxuLnByb2dyZXNzLWNpcmNsZS5wNDkgLnZhbHVlLWJhciB7XG4gIHRyYW5zZm9ybTogcm90YXRlKDE3NmRlZyk7XG59XG4ucHJvZ3Jlc3MtY2lyY2xlLnA1MCAudmFsdWUtYmFyIHtcbiAgdHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKTtcbn1cbi5wcm9ncmVzcy1jaXJjbGUucDUxIC52YWx1ZS1iYXIge1xuICB0cmFuc2Zvcm06IHJvdGF0ZSgxODRkZWcpO1xufVxuLnByb2dyZXNzLWNpcmNsZS5wNTIgLnZhbHVlLWJhciB7XG4gIHRyYW5zZm9ybTogcm90YXRlKDE4N2RlZyk7XG59XG4ucHJvZ3Jlc3MtY2lyY2xlLnA1MyAudmFsdWUtYmFyIHtcbiAgdHJhbnNmb3JtOiByb3RhdGUoMTkxZGVnKTtcbn1cbi5wcm9ncmVzcy1jaXJjbGUucDU0IC52YWx1ZS1iYXIge1xuICB0cmFuc2Zvcm06IHJvdGF0ZSgxOTRkZWcpO1xufVxuLnByb2dyZXNzLWNpcmNsZS5wNTUgLnZhbHVlLWJhciB7XG4gIHRyYW5zZm9ybTogcm90YXRlKDE5OGRlZyk7XG59XG4ucHJvZ3Jlc3MtY2lyY2xlLnA1NiAudmFsdWUtYmFyIHtcbiAgdHJhbnNmb3JtOiByb3RhdGUoMjAyZGVnKTtcbn1cbi5wcm9ncmVzcy1jaXJjbGUucDU3IC52YWx1ZS1iYXIge1xuICB0cmFuc2Zvcm06IHJvdGF0ZSgyMDVkZWcpO1xufVxuLnByb2dyZXNzLWNpcmNsZS5wNTggLnZhbHVlLWJhciB7XG4gIHRyYW5zZm9ybTogcm90YXRlKDIwOWRlZyk7XG59XG4ucHJvZ3Jlc3MtY2lyY2xlLnA1OSAudmFsdWUtYmFyIHtcbiAgdHJhbnNmb3JtOiByb3RhdGUoMjEyZGVnKTtcbn1cbi5wcm9ncmVzcy1jaXJjbGUucDYwIC52YWx1ZS1iYXIge1xuICB0cmFuc2Zvcm06IHJvdGF0ZSgyMTZkZWcpO1xufVxuLnByb2dyZXNzLWNpcmNsZS5wNjEgLnZhbHVlLWJhciB7XG4gIHRyYW5zZm9ybTogcm90YXRlKDIyMGRlZyk7XG59XG4ucHJvZ3Jlc3MtY2lyY2xlLnA2MiAudmFsdWUtYmFyIHtcbiAgdHJhbnNmb3JtOiByb3RhdGUoMjIzZGVnKTtcbn1cbi5wcm9ncmVzcy1jaXJjbGUucDYzIC52YWx1ZS1iYXIge1xuICB0cmFuc2Zvcm06IHJvdGF0ZSgyMjdkZWcpO1xufVxuLnByb2dyZXNzLWNpcmNsZS5wNjQgLnZhbHVlLWJhciB7XG4gIHRyYW5zZm9ybTogcm90YXRlKDIzMGRlZyk7XG59XG4ucHJvZ3Jlc3MtY2lyY2xlLnA2NSAudmFsdWUtYmFyIHtcbiAgdHJhbnNmb3JtOiByb3RhdGUoMjM0ZGVnKTtcbn1cbi5wcm9ncmVzcy1jaXJjbGUucDY2IC52YWx1ZS1iYXIge1xuICB0cmFuc2Zvcm06IHJvdGF0ZSgyMzhkZWcpO1xufVxuLnByb2dyZXNzLWNpcmNsZS5wNjcgLnZhbHVlLWJhciB7XG4gIHRyYW5zZm9ybTogcm90YXRlKDI0MWRlZyk7XG59XG4ucHJvZ3Jlc3MtY2lyY2xlLnA2OCAudmFsdWUtYmFyIHtcbiAgdHJhbnNmb3JtOiByb3RhdGUoMjQ1ZGVnKTtcbn1cbi5wcm9ncmVzcy1jaXJjbGUucDY5IC52YWx1ZS1iYXIge1xuICB0cmFuc2Zvcm06IHJvdGF0ZSgyNDhkZWcpO1xufVxuLnByb2dyZXNzLWNpcmNsZS5wNzAgLnZhbHVlLWJhciB7XG4gIHRyYW5zZm9ybTogcm90YXRlKDI1MmRlZyk7XG59XG4ucHJvZ3Jlc3MtY2lyY2xlLnA3MSAudmFsdWUtYmFyIHtcbiAgdHJhbnNmb3JtOiByb3RhdGUoMjU2ZGVnKTtcbn1cbi5wcm9ncmVzcy1jaXJjbGUucDcyIC52YWx1ZS1iYXIge1xuICB0cmFuc2Zvcm06IHJvdGF0ZSgyNTlkZWcpO1xufVxuLnByb2dyZXNzLWNpcmNsZS5wNzMgLnZhbHVlLWJhciB7XG4gIHRyYW5zZm9ybTogcm90YXRlKDI2M2RlZyk7XG59XG4ucHJvZ3Jlc3MtY2lyY2xlLnA3NCAudmFsdWUtYmFyIHtcbiAgdHJhbnNmb3JtOiByb3RhdGUoMjY2ZGVnKTtcbn1cbi5wcm9ncmVzcy1jaXJjbGUucDc1IC52YWx1ZS1iYXIge1xuICB0cmFuc2Zvcm06IHJvdGF0ZSgyNzBkZWcpO1xufVxuLnByb2dyZXNzLWNpcmNsZS5wNzYgLnZhbHVlLWJhciB7XG4gIHRyYW5zZm9ybTogcm90YXRlKDI3NGRlZyk7XG59XG4ucHJvZ3Jlc3MtY2lyY2xlLnA3NyAudmFsdWUtYmFyIHtcbiAgdHJhbnNmb3JtOiByb3RhdGUoMjc3ZGVnKTtcbn1cbi5wcm9ncmVzcy1jaXJjbGUucDc4IC52YWx1ZS1iYXIge1xuICB0cmFuc2Zvcm06IHJvdGF0ZSgyODFkZWcpO1xufVxuLnByb2dyZXNzLWNpcmNsZS5wNzkgLnZhbHVlLWJhciB7XG4gIHRyYW5zZm9ybTogcm90YXRlKDI4NGRlZyk7XG59XG4ucHJvZ3Jlc3MtY2lyY2xlLnA4MCAudmFsdWUtYmFyIHtcbiAgdHJhbnNmb3JtOiByb3RhdGUoMjg4ZGVnKTtcbn1cbi5wcm9ncmVzcy1jaXJjbGUucDgxIC52YWx1ZS1iYXIge1xuICB0cmFuc2Zvcm06IHJvdGF0ZSgyOTJkZWcpO1xufVxuLnByb2dyZXNzLWNpcmNsZS5wODIgLnZhbHVlLWJhciB7XG4gIHRyYW5zZm9ybTogcm90YXRlKDI5NWRlZyk7XG59XG4ucHJvZ3Jlc3MtY2lyY2xlLnA4MyAudmFsdWUtYmFyIHtcbiAgdHJhbnNmb3JtOiByb3RhdGUoMjk5ZGVnKTtcbn1cbi5wcm9ncmVzcy1jaXJjbGUucDg0IC52YWx1ZS1iYXIge1xuICB0cmFuc2Zvcm06IHJvdGF0ZSgzMDJkZWcpO1xufVxuLnByb2dyZXNzLWNpcmNsZS5wODUgLnZhbHVlLWJhciB7XG4gIHRyYW5zZm9ybTogcm90YXRlKDMwNmRlZyk7XG59XG4ucHJvZ3Jlc3MtY2lyY2xlLnA4NiAudmFsdWUtYmFyIHtcbiAgdHJhbnNmb3JtOiByb3RhdGUoMzEwZGVnKTtcbn1cbi5wcm9ncmVzcy1jaXJjbGUucDg3IC52YWx1ZS1iYXIge1xuICB0cmFuc2Zvcm06IHJvdGF0ZSgzMTNkZWcpO1xufVxuLnByb2dyZXNzLWNpcmNsZS5wODggLnZhbHVlLWJhciB7XG4gIHRyYW5zZm9ybTogcm90YXRlKDMxN2RlZyk7XG59XG4ucHJvZ3Jlc3MtY2lyY2xlLnA4OSAudmFsdWUtYmFyIHtcbiAgdHJhbnNmb3JtOiByb3RhdGUoMzIwZGVnKTtcbn1cbi5wcm9ncmVzcy1jaXJjbGUucDkwIC52YWx1ZS1iYXIge1xuICB0cmFuc2Zvcm06IHJvdGF0ZSgzMjRkZWcpO1xufVxuLnByb2dyZXNzLWNpcmNsZS5wOTEgLnZhbHVlLWJhciB7XG4gIHRyYW5zZm9ybTogcm90YXRlKDMyOGRlZyk7XG59XG4ucHJvZ3Jlc3MtY2lyY2xlLnA5MiAudmFsdWUtYmFyIHtcbiAgdHJhbnNmb3JtOiByb3RhdGUoMzMxZGVnKTtcbn1cbi5wcm9ncmVzcy1jaXJjbGUucDkzIC52YWx1ZS1iYXIge1xuICB0cmFuc2Zvcm06IHJvdGF0ZSgzMzVkZWcpO1xufVxuLnByb2dyZXNzLWNpcmNsZS5wOTQgLnZhbHVlLWJhciB7XG4gIHRyYW5zZm9ybTogcm90YXRlKDMzOGRlZyk7XG59XG4ucHJvZ3Jlc3MtY2lyY2xlLnA5NSAudmFsdWUtYmFyIHtcbiAgdHJhbnNmb3JtOiByb3RhdGUoMzQyZGVnKTtcbn1cbi5wcm9ncmVzcy1jaXJjbGUucDk2IC52YWx1ZS1iYXIge1xuICB0cmFuc2Zvcm06IHJvdGF0ZSgzNDZkZWcpO1xufVxuLnByb2dyZXNzLWNpcmNsZS5wOTcgLnZhbHVlLWJhciB7XG4gIHRyYW5zZm9ybTogcm90YXRlKDM0OWRlZyk7XG59XG4ucHJvZ3Jlc3MtY2lyY2xlLnA5OCAudmFsdWUtYmFyIHtcbiAgdHJhbnNmb3JtOiByb3RhdGUoMzUzZGVnKTtcbn1cbi5wcm9ncmVzcy1jaXJjbGUucDk5IC52YWx1ZS1iYXIge1xuICB0cmFuc2Zvcm06IHJvdGF0ZSgzNTZkZWcpO1xufVxuLnByb2dyZXNzLWNpcmNsZS5wMTAwIC52YWx1ZS1iYXIge1xuICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xufVxuIiwiLnByb2dyZXNzLWNpcmNsZSB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAvKiBzbyB0aGF0IGNoaWxkcmVuIGNhbiBiZSBhYnNvbHV0ZWx5IHBvc2l0aW9uZWQgKi9cbiAgcGFkZGluZzogMDtcbiAgd2lkdGg6IDQwcHg7XG4gIGhlaWdodDogNDBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YyZTllMTtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBsaW5lLWhlaWdodDogNTBweDtcbn1cblxuLnByb2dyZXNzLWNpcmNsZTphZnRlciB7XG4gIGJvcmRlcjogbm9uZTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDVweDtcbiAgbGVmdDogNXB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIHdpZHRoOiAzMHB4O1xuICBoZWlnaHQ6IDMwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBjb250ZW50OiBcIiBcIjtcbn1cblxuLyogVGV4dCBpbnNpZGUgdGhlIGNvbnRyb2wgKi9cbi5wcm9ncmVzcy1jaXJjbGUgc3BhbiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGluZS1oZWlnaHQ6IDQwcHg7XG4gIHdpZHRoOiA0MHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB6LWluZGV4OiAyO1xufVxuXG4ubGVmdC1oYWxmLWNsaXBwZXIge1xuICAvKiBhIHJvdW5kIGNpcmNsZSAqL1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIHdpZHRoOiA0MHB4O1xuICBoZWlnaHQ6IDQwcHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgLyogbmVlZGVkIGZvciBjbGlwcGluZyAqL1xuICBjbGlwOiByZWN0KDAsIDUwcHgsIDUwcHgsIDI1cHgpO1xuICAvKiBjbGlwcyB0aGUgd2hvbGUgbGVmdCBoYWxmKi9cbn1cblxuLyogd2hlbiBwPjUwLCBkb24ndCBjbGlwIGxlZnQgaGFsZiovXG4ucHJvZ3Jlc3MtY2lyY2xlLm92ZXI1MCAubGVmdC1oYWxmLWNsaXBwZXIge1xuICBjbGlwOiByZWN0KGF1dG8sIGF1dG8sIGF1dG8sIGF1dG8pO1xufVxuXG4udmFsdWUtY29sb3Ige1xuICBib3JkZXI6IDAuNDVlbSBzb2xpZCAjZjJlOWUxO1xufVxuXG4uY2lyY2xlLWNvbG9yIHtcbiAgY29sb3I6ICNlMWQ5MDQ7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlMWQ5MDQ7XG59XG5cbi52YWx1ZS1mYWlsZWQge1xuICBib3JkZXI6IDAuNDVlbSBzb2xpZCAjZjJlOWUxO1xufVxuXG4uZmFpbGVkIHtcbiAgY29sb3I6ICNmZjAwMDA7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZjAwMDA7XG59XG5cbi5jb21wbGV0ZWQge1xuICBjb2xvcjogIzhkYmYyMjtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzhkYmYyMjtcbn1cblxuLnZhbHVlLWNvbXBsZXRlZCB7XG4gIGJvcmRlcjogMC40NWVtIHNvbGlkICNmMmU5ZTE7XG59XG5cbi52YWx1ZS1iYXIge1xuICAvKlRoaXMgaXMgYW4gb3ZlcmxheWVkIHNxdWFyZSwgdGhhdCBpcyBtYWRlIHJvdW5kIHdpdGggdGhlIGJvcmRlciByYWRpdXMsXG4gIHRoZW4gaXQgaXMgY3V0IHRvIGRpc3BsYXkgb25seSB0aGUgbGVmdCBoYWxmLCB0aGVuIHJvdGF0ZWQgY2xvY2t3aXNlXG4gIHRvIGVzY2FwZSB0aGUgb3V0ZXIgY2xpcHBpbmcgcGF0aC4qL1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIC8qbmVlZGVkIGZvciBjbGlwcGluZyovXG4gIGNsaXA6IHJlY3QoMCwgMjVweCwgNTBweCwgMCk7XG4gIHdpZHRoOiA0MHB4O1xuICBoZWlnaHQ6IDQwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgLypUaGUgYm9yZGVyIGlzIDAuMzUgYnV0IG1ha2luZyBpdCBsYXJnZXIgcmVtb3ZlcyB2aXN1YWwgYXJ0aWZhY3RzICovXG4gIC8qYmFja2dyb3VuZC1jb2xvcjogIzRENjQyRDsqL1xuICAvKiBmb3IgZGVidWcgKi9cbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxuLyogUHJvZ3Jlc3MgYmFyIGZpbGxpbmcgdGhlIHdob2xlIHJpZ2h0IGhhbGYgZm9yIHZhbHVlcyBhYm92ZSA1MCUgKi9cbi5wcm9ncmVzcy1jaXJjbGUub3ZlcjUwIC5maXJzdDUwLWJhciB7XG4gIC8qUHJvZ3Jlc3MgYmFyIGZvciB0aGUgZmlyc3QgNTAlLCBmaWxsaW5nIHRoZSB3aG9sZSByaWdodCBoYWxmKi9cbiAgcG9zaXRpb246IGFic29sdXRlO1xuICAvKm5lZWRlZCBmb3IgY2xpcHBpbmcqL1xuICBjbGlwOiByZWN0KDAsIDUwcHgsIDUwcHgsIDI1cHgpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTM3NzdhO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIHdpZHRoOiA0MHB4O1xuICBoZWlnaHQ6IDQwcHg7XG59XG5cbi5wcm9ncmVzcy1jaXJjbGU6bm90KC5vdmVyNTApIC5maXJzdDUwLWJhciB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi8qIFByb2dyZXNzIGJhciByb3RhdGlvbiBwb3NpdGlvbiAqL1xuLnByb2dyZXNzLWNpcmNsZS5wMCAudmFsdWUtYmFyIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuLnByb2dyZXNzLWNpcmNsZS5wMSAudmFsdWUtYmFyIHtcbiAgdHJhbnNmb3JtOiByb3RhdGUoNGRlZyk7XG59XG5cbi5wcm9ncmVzcy1jaXJjbGUucDIgLnZhbHVlLWJhciB7XG4gIHRyYW5zZm9ybTogcm90YXRlKDdkZWcpO1xufVxuXG4ucHJvZ3Jlc3MtY2lyY2xlLnAzIC52YWx1ZS1iYXIge1xuICB0cmFuc2Zvcm06IHJvdGF0ZSgxMWRlZyk7XG59XG5cbi5wcm9ncmVzcy1jaXJjbGUucDQgLnZhbHVlLWJhciB7XG4gIHRyYW5zZm9ybTogcm90YXRlKDE0ZGVnKTtcbn1cblxuLnByb2dyZXNzLWNpcmNsZS5wNSAudmFsdWUtYmFyIHtcbiAgdHJhbnNmb3JtOiByb3RhdGUoMThkZWcpO1xufVxuXG4ucHJvZ3Jlc3MtY2lyY2xlLnA2IC52YWx1ZS1iYXIge1xuICB0cmFuc2Zvcm06IHJvdGF0ZSgyMmRlZyk7XG59XG5cbi5wcm9ncmVzcy1jaXJjbGUucDcgLnZhbHVlLWJhciB7XG4gIHRyYW5zZm9ybTogcm90YXRlKDI1ZGVnKTtcbn1cblxuLnByb2dyZXNzLWNpcmNsZS5wOCAudmFsdWUtYmFyIHtcbiAgdHJhbnNmb3JtOiByb3RhdGUoMjlkZWcpO1xufVxuXG4ucHJvZ3Jlc3MtY2lyY2xlLnA5IC52YWx1ZS1iYXIge1xuICB0cmFuc2Zvcm06IHJvdGF0ZSgzMmRlZyk7XG59XG5cbi5wcm9ncmVzcy1jaXJjbGUucDEwIC52YWx1ZS1iYXIge1xuICB0cmFuc2Zvcm06IHJvdGF0ZSgzNmRlZyk7XG59XG5cbi5wcm9ncmVzcy1jaXJjbGUucDExIC52YWx1ZS1iYXIge1xuICB0cmFuc2Zvcm06IHJvdGF0ZSg0MGRlZyk7XG59XG5cbi5wcm9ncmVzcy1jaXJjbGUucDEyIC52YWx1ZS1iYXIge1xuICB0cmFuc2Zvcm06IHJvdGF0ZSg0M2RlZyk7XG59XG5cbi5wcm9ncmVzcy1jaXJjbGUucDEzIC52YWx1ZS1iYXIge1xuICB0cmFuc2Zvcm06IHJvdGF0ZSg0N2RlZyk7XG59XG5cbi5wcm9ncmVzcy1jaXJjbGUucDE0IC52YWx1ZS1iYXIge1xuICB0cmFuc2Zvcm06IHJvdGF0ZSg1MGRlZyk7XG59XG5cbi5wcm9ncmVzcy1jaXJjbGUucDE1IC52YWx1ZS1iYXIge1xuICB0cmFuc2Zvcm06IHJvdGF0ZSg1NGRlZyk7XG59XG5cbi5wcm9ncmVzcy1jaXJjbGUucDE2IC52YWx1ZS1iYXIge1xuICB0cmFuc2Zvcm06IHJvdGF0ZSg1OGRlZyk7XG59XG5cbi5wcm9ncmVzcy1jaXJjbGUucDE3IC52YWx1ZS1iYXIge1xuICB0cmFuc2Zvcm06IHJvdGF0ZSg2MWRlZyk7XG59XG5cbi5wcm9ncmVzcy1jaXJjbGUucDE4IC52YWx1ZS1iYXIge1xuICB0cmFuc2Zvcm06IHJvdGF0ZSg2NWRlZyk7XG59XG5cbi5wcm9ncmVzcy1jaXJjbGUucDE5IC52YWx1ZS1iYXIge1xuICB0cmFuc2Zvcm06IHJvdGF0ZSg2OGRlZyk7XG59XG5cbi5wcm9ncmVzcy1jaXJjbGUucDIwIC52YWx1ZS1iYXIge1xuICB0cmFuc2Zvcm06IHJvdGF0ZSg3MmRlZyk7XG59XG5cbi5wcm9ncmVzcy1jaXJjbGUucDIxIC52YWx1ZS1iYXIge1xuICB0cmFuc2Zvcm06IHJvdGF0ZSg3NmRlZyk7XG59XG5cbi5wcm9ncmVzcy1jaXJjbGUucDIyIC52YWx1ZS1iYXIge1xuICB0cmFuc2Zvcm06IHJvdGF0ZSg3OWRlZyk7XG59XG5cbi5wcm9ncmVzcy1jaXJjbGUucDIzIC52YWx1ZS1iYXIge1xuICB0cmFuc2Zvcm06IHJvdGF0ZSg4M2RlZyk7XG59XG5cbi5wcm9ncmVzcy1jaXJjbGUucDI0IC52YWx1ZS1iYXIge1xuICB0cmFuc2Zvcm06IHJvdGF0ZSg4NmRlZyk7XG59XG5cbi5wcm9ncmVzcy1jaXJjbGUucDI1IC52YWx1ZS1iYXIge1xuICB0cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XG59XG5cbi5wcm9ncmVzcy1jaXJjbGUucDI2IC52YWx1ZS1iYXIge1xuICB0cmFuc2Zvcm06IHJvdGF0ZSg5NGRlZyk7XG59XG5cbi5wcm9ncmVzcy1jaXJjbGUucDI3IC52YWx1ZS1iYXIge1xuICB0cmFuc2Zvcm06IHJvdGF0ZSg5N2RlZyk7XG59XG5cbi5wcm9ncmVzcy1jaXJjbGUucDI4IC52YWx1ZS1iYXIge1xuICB0cmFuc2Zvcm06IHJvdGF0ZSgxMDFkZWcpO1xufVxuXG4ucHJvZ3Jlc3MtY2lyY2xlLnAyOSAudmFsdWUtYmFyIHtcbiAgdHJhbnNmb3JtOiByb3RhdGUoMTA0ZGVnKTtcbn1cblxuLnByb2dyZXNzLWNpcmNsZS5wMzAgLnZhbHVlLWJhciB7XG4gIHRyYW5zZm9ybTogcm90YXRlKDEwOGRlZyk7XG59XG5cbi5wcm9ncmVzcy1jaXJjbGUucDMxIC52YWx1ZS1iYXIge1xuICB0cmFuc2Zvcm06IHJvdGF0ZSgxMTJkZWcpO1xufVxuXG4ucHJvZ3Jlc3MtY2lyY2xlLnAzMiAudmFsdWUtYmFyIHtcbiAgdHJhbnNmb3JtOiByb3RhdGUoMTE1ZGVnKTtcbn1cblxuLnByb2dyZXNzLWNpcmNsZS5wMzMgLnZhbHVlLWJhciB7XG4gIHRyYW5zZm9ybTogcm90YXRlKDExOWRlZyk7XG59XG5cbi5wcm9ncmVzcy1jaXJjbGUucDM0IC52YWx1ZS1iYXIge1xuICB0cmFuc2Zvcm06IHJvdGF0ZSgxMjJkZWcpO1xufVxuXG4ucHJvZ3Jlc3MtY2lyY2xlLnAzNSAudmFsdWUtYmFyIHtcbiAgdHJhbnNmb3JtOiByb3RhdGUoMTI2ZGVnKTtcbn1cblxuLnByb2dyZXNzLWNpcmNsZS5wMzYgLnZhbHVlLWJhciB7XG4gIHRyYW5zZm9ybTogcm90YXRlKDEzMGRlZyk7XG59XG5cbi5wcm9ncmVzcy1jaXJjbGUucDM3IC52YWx1ZS1iYXIge1xuICB0cmFuc2Zvcm06IHJvdGF0ZSgxMzNkZWcpO1xufVxuXG4ucHJvZ3Jlc3MtY2lyY2xlLnAzOCAudmFsdWUtYmFyIHtcbiAgdHJhbnNmb3JtOiByb3RhdGUoMTM3ZGVnKTtcbn1cblxuLnByb2dyZXNzLWNpcmNsZS5wMzkgLnZhbHVlLWJhciB7XG4gIHRyYW5zZm9ybTogcm90YXRlKDE0MGRlZyk7XG59XG5cbi5wcm9ncmVzcy1jaXJjbGUucDQwIC52YWx1ZS1iYXIge1xuICB0cmFuc2Zvcm06IHJvdGF0ZSgxNDRkZWcpO1xufVxuXG4ucHJvZ3Jlc3MtY2lyY2xlLnA0MSAudmFsdWUtYmFyIHtcbiAgdHJhbnNmb3JtOiByb3RhdGUoMTQ4ZGVnKTtcbn1cblxuLnByb2dyZXNzLWNpcmNsZS5wNDIgLnZhbHVlLWJhciB7XG4gIHRyYW5zZm9ybTogcm90YXRlKDE1MWRlZyk7XG59XG5cbi5wcm9ncmVzcy1jaXJjbGUucDQzIC52YWx1ZS1iYXIge1xuICB0cmFuc2Zvcm06IHJvdGF0ZSgxNTVkZWcpO1xufVxuXG4ucHJvZ3Jlc3MtY2lyY2xlLnA0NCAudmFsdWUtYmFyIHtcbiAgdHJhbnNmb3JtOiByb3RhdGUoMTU4ZGVnKTtcbn1cblxuLnByb2dyZXNzLWNpcmNsZS5wNDUgLnZhbHVlLWJhciB7XG4gIHRyYW5zZm9ybTogcm90YXRlKDE2MmRlZyk7XG59XG5cbi5wcm9ncmVzcy1jaXJjbGUucDQ2IC52YWx1ZS1iYXIge1xuICB0cmFuc2Zvcm06IHJvdGF0ZSgxNjZkZWcpO1xufVxuXG4ucHJvZ3Jlc3MtY2lyY2xlLnA0NyAudmFsdWUtYmFyIHtcbiAgdHJhbnNmb3JtOiByb3RhdGUoMTY5ZGVnKTtcbn1cblxuLnByb2dyZXNzLWNpcmNsZS5wNDggLnZhbHVlLWJhciB7XG4gIHRyYW5zZm9ybTogcm90YXRlKDE3M2RlZyk7XG59XG5cbi5wcm9ncmVzcy1jaXJjbGUucDQ5IC52YWx1ZS1iYXIge1xuICB0cmFuc2Zvcm06IHJvdGF0ZSgxNzZkZWcpO1xufVxuXG4ucHJvZ3Jlc3MtY2lyY2xlLnA1MCAudmFsdWUtYmFyIHtcbiAgdHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKTtcbn1cblxuLnByb2dyZXNzLWNpcmNsZS5wNTEgLnZhbHVlLWJhciB7XG4gIHRyYW5zZm9ybTogcm90YXRlKDE4NGRlZyk7XG59XG5cbi5wcm9ncmVzcy1jaXJjbGUucDUyIC52YWx1ZS1iYXIge1xuICB0cmFuc2Zvcm06IHJvdGF0ZSgxODdkZWcpO1xufVxuXG4ucHJvZ3Jlc3MtY2lyY2xlLnA1MyAudmFsdWUtYmFyIHtcbiAgdHJhbnNmb3JtOiByb3RhdGUoMTkxZGVnKTtcbn1cblxuLnByb2dyZXNzLWNpcmNsZS5wNTQgLnZhbHVlLWJhciB7XG4gIHRyYW5zZm9ybTogcm90YXRlKDE5NGRlZyk7XG59XG5cbi5wcm9ncmVzcy1jaXJjbGUucDU1IC52YWx1ZS1iYXIge1xuICB0cmFuc2Zvcm06IHJvdGF0ZSgxOThkZWcpO1xufVxuXG4ucHJvZ3Jlc3MtY2lyY2xlLnA1NiAudmFsdWUtYmFyIHtcbiAgdHJhbnNmb3JtOiByb3RhdGUoMjAyZGVnKTtcbn1cblxuLnByb2dyZXNzLWNpcmNsZS5wNTcgLnZhbHVlLWJhciB7XG4gIHRyYW5zZm9ybTogcm90YXRlKDIwNWRlZyk7XG59XG5cbi5wcm9ncmVzcy1jaXJjbGUucDU4IC52YWx1ZS1iYXIge1xuICB0cmFuc2Zvcm06IHJvdGF0ZSgyMDlkZWcpO1xufVxuXG4ucHJvZ3Jlc3MtY2lyY2xlLnA1OSAudmFsdWUtYmFyIHtcbiAgdHJhbnNmb3JtOiByb3RhdGUoMjEyZGVnKTtcbn1cblxuLnByb2dyZXNzLWNpcmNsZS5wNjAgLnZhbHVlLWJhciB7XG4gIHRyYW5zZm9ybTogcm90YXRlKDIxNmRlZyk7XG59XG5cbi5wcm9ncmVzcy1jaXJjbGUucDYxIC52YWx1ZS1iYXIge1xuICB0cmFuc2Zvcm06IHJvdGF0ZSgyMjBkZWcpO1xufVxuXG4ucHJvZ3Jlc3MtY2lyY2xlLnA2MiAudmFsdWUtYmFyIHtcbiAgdHJhbnNmb3JtOiByb3RhdGUoMjIzZGVnKTtcbn1cblxuLnByb2dyZXNzLWNpcmNsZS5wNjMgLnZhbHVlLWJhciB7XG4gIHRyYW5zZm9ybTogcm90YXRlKDIyN2RlZyk7XG59XG5cbi5wcm9ncmVzcy1jaXJjbGUucDY0IC52YWx1ZS1iYXIge1xuICB0cmFuc2Zvcm06IHJvdGF0ZSgyMzBkZWcpO1xufVxuXG4ucHJvZ3Jlc3MtY2lyY2xlLnA2NSAudmFsdWUtYmFyIHtcbiAgdHJhbnNmb3JtOiByb3RhdGUoMjM0ZGVnKTtcbn1cblxuLnByb2dyZXNzLWNpcmNsZS5wNjYgLnZhbHVlLWJhciB7XG4gIHRyYW5zZm9ybTogcm90YXRlKDIzOGRlZyk7XG59XG5cbi5wcm9ncmVzcy1jaXJjbGUucDY3IC52YWx1ZS1iYXIge1xuICB0cmFuc2Zvcm06IHJvdGF0ZSgyNDFkZWcpO1xufVxuXG4ucHJvZ3Jlc3MtY2lyY2xlLnA2OCAudmFsdWUtYmFyIHtcbiAgdHJhbnNmb3JtOiByb3RhdGUoMjQ1ZGVnKTtcbn1cblxuLnByb2dyZXNzLWNpcmNsZS5wNjkgLnZhbHVlLWJhciB7XG4gIHRyYW5zZm9ybTogcm90YXRlKDI0OGRlZyk7XG59XG5cbi5wcm9ncmVzcy1jaXJjbGUucDcwIC52YWx1ZS1iYXIge1xuICB0cmFuc2Zvcm06IHJvdGF0ZSgyNTJkZWcpO1xufVxuXG4ucHJvZ3Jlc3MtY2lyY2xlLnA3MSAudmFsdWUtYmFyIHtcbiAgdHJhbnNmb3JtOiByb3RhdGUoMjU2ZGVnKTtcbn1cblxuLnByb2dyZXNzLWNpcmNsZS5wNzIgLnZhbHVlLWJhciB7XG4gIHRyYW5zZm9ybTogcm90YXRlKDI1OWRlZyk7XG59XG5cbi5wcm9ncmVzcy1jaXJjbGUucDczIC52YWx1ZS1iYXIge1xuICB0cmFuc2Zvcm06IHJvdGF0ZSgyNjNkZWcpO1xufVxuXG4ucHJvZ3Jlc3MtY2lyY2xlLnA3NCAudmFsdWUtYmFyIHtcbiAgdHJhbnNmb3JtOiByb3RhdGUoMjY2ZGVnKTtcbn1cblxuLnByb2dyZXNzLWNpcmNsZS5wNzUgLnZhbHVlLWJhciB7XG4gIHRyYW5zZm9ybTogcm90YXRlKDI3MGRlZyk7XG59XG5cbi5wcm9ncmVzcy1jaXJjbGUucDc2IC52YWx1ZS1iYXIge1xuICB0cmFuc2Zvcm06IHJvdGF0ZSgyNzRkZWcpO1xufVxuXG4ucHJvZ3Jlc3MtY2lyY2xlLnA3NyAudmFsdWUtYmFyIHtcbiAgdHJhbnNmb3JtOiByb3RhdGUoMjc3ZGVnKTtcbn1cblxuLnByb2dyZXNzLWNpcmNsZS5wNzggLnZhbHVlLWJhciB7XG4gIHRyYW5zZm9ybTogcm90YXRlKDI4MWRlZyk7XG59XG5cbi5wcm9ncmVzcy1jaXJjbGUucDc5IC52YWx1ZS1iYXIge1xuICB0cmFuc2Zvcm06IHJvdGF0ZSgyODRkZWcpO1xufVxuXG4ucHJvZ3Jlc3MtY2lyY2xlLnA4MCAudmFsdWUtYmFyIHtcbiAgdHJhbnNmb3JtOiByb3RhdGUoMjg4ZGVnKTtcbn1cblxuLnByb2dyZXNzLWNpcmNsZS5wODEgLnZhbHVlLWJhciB7XG4gIHRyYW5zZm9ybTogcm90YXRlKDI5MmRlZyk7XG59XG5cbi5wcm9ncmVzcy1jaXJjbGUucDgyIC52YWx1ZS1iYXIge1xuICB0cmFuc2Zvcm06IHJvdGF0ZSgyOTVkZWcpO1xufVxuXG4ucHJvZ3Jlc3MtY2lyY2xlLnA4MyAudmFsdWUtYmFyIHtcbiAgdHJhbnNmb3JtOiByb3RhdGUoMjk5ZGVnKTtcbn1cblxuLnByb2dyZXNzLWNpcmNsZS5wODQgLnZhbHVlLWJhciB7XG4gIHRyYW5zZm9ybTogcm90YXRlKDMwMmRlZyk7XG59XG5cbi5wcm9ncmVzcy1jaXJjbGUucDg1IC52YWx1ZS1iYXIge1xuICB0cmFuc2Zvcm06IHJvdGF0ZSgzMDZkZWcpO1xufVxuXG4ucHJvZ3Jlc3MtY2lyY2xlLnA4NiAudmFsdWUtYmFyIHtcbiAgdHJhbnNmb3JtOiByb3RhdGUoMzEwZGVnKTtcbn1cblxuLnByb2dyZXNzLWNpcmNsZS5wODcgLnZhbHVlLWJhciB7XG4gIHRyYW5zZm9ybTogcm90YXRlKDMxM2RlZyk7XG59XG5cbi5wcm9ncmVzcy1jaXJjbGUucDg4IC52YWx1ZS1iYXIge1xuICB0cmFuc2Zvcm06IHJvdGF0ZSgzMTdkZWcpO1xufVxuXG4ucHJvZ3Jlc3MtY2lyY2xlLnA4OSAudmFsdWUtYmFyIHtcbiAgdHJhbnNmb3JtOiByb3RhdGUoMzIwZGVnKTtcbn1cblxuLnByb2dyZXNzLWNpcmNsZS5wOTAgLnZhbHVlLWJhciB7XG4gIHRyYW5zZm9ybTogcm90YXRlKDMyNGRlZyk7XG59XG5cbi5wcm9ncmVzcy1jaXJjbGUucDkxIC52YWx1ZS1iYXIge1xuICB0cmFuc2Zvcm06IHJvdGF0ZSgzMjhkZWcpO1xufVxuXG4ucHJvZ3Jlc3MtY2lyY2xlLnA5MiAudmFsdWUtYmFyIHtcbiAgdHJhbnNmb3JtOiByb3RhdGUoMzMxZGVnKTtcbn1cblxuLnByb2dyZXNzLWNpcmNsZS5wOTMgLnZhbHVlLWJhciB7XG4gIHRyYW5zZm9ybTogcm90YXRlKDMzNWRlZyk7XG59XG5cbi5wcm9ncmVzcy1jaXJjbGUucDk0IC52YWx1ZS1iYXIge1xuICB0cmFuc2Zvcm06IHJvdGF0ZSgzMzhkZWcpO1xufVxuXG4ucHJvZ3Jlc3MtY2lyY2xlLnA5NSAudmFsdWUtYmFyIHtcbiAgdHJhbnNmb3JtOiByb3RhdGUoMzQyZGVnKTtcbn1cblxuLnByb2dyZXNzLWNpcmNsZS5wOTYgLnZhbHVlLWJhciB7XG4gIHRyYW5zZm9ybTogcm90YXRlKDM0NmRlZyk7XG59XG5cbi5wcm9ncmVzcy1jaXJjbGUucDk3IC52YWx1ZS1iYXIge1xuICB0cmFuc2Zvcm06IHJvdGF0ZSgzNDlkZWcpO1xufVxuXG4ucHJvZ3Jlc3MtY2lyY2xlLnA5OCAudmFsdWUtYmFyIHtcbiAgdHJhbnNmb3JtOiByb3RhdGUoMzUzZGVnKTtcbn1cblxuLnByb2dyZXNzLWNpcmNsZS5wOTkgLnZhbHVlLWJhciB7XG4gIHRyYW5zZm9ybTogcm90YXRlKDM1NmRlZyk7XG59XG5cbi5wcm9ncmVzcy1jaXJjbGUucDEwMCAudmFsdWUtYmFyIHtcbiAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/layout/queue-info/summary/summary.component.ts":
  /*!****************************************************************!*\
    !*** ./src/app/layout/queue-info/summary/summary.component.ts ***!
    \****************************************************************/

  /*! exports provided: SummaryComponent */

  /***/
  function srcAppLayoutQueueInfoSummarySummaryComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SummaryComponent", function () {
      return SummaryComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var SummaryComponent = /*#__PURE__*/function () {
      function SummaryComponent() {
        _classCallCheck(this, SummaryComponent);
      }

      _createClass(SummaryComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return SummaryComponent;
    }();

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], SummaryComponent.prototype, "data", void 0);
    SummaryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-summary',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./summary.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/queue-info/summary/summary.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./summary.component.scss */
      "./src/app/layout/queue-info/summary/summary.component.scss"))["default"]]
    })], SummaryComponent);
    /***/
  }
}]);
//# sourceMappingURL=queue-info-queue-info-module-es5.js.map