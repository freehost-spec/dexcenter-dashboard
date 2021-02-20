(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["workflow-workflow-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/workflow/diagram-view/dia-task-info/dia-task-info.component.html":
/*!*******************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layout/workflow/diagram-view/dia-task-info/dia-task-info.component.html ***!
  \*******************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"task-info bg-white-color\">\n    <div class=\"dia-container font-sm\">\n        <div class=\"row-one\">\n            <div class=\"circle\">\n                <div class=\"circle-dia mt-25 ml-20\"></div>\n                <div class=\"mt-5 ml-20\">GetInfo</div>\n            </div>\n            <img src=\"https://freehost-spec.github.io/dexcenter-dashboard/assets/images/icons/fwrd-arrow-m.svg \"\n                alt=\"forward arrow\">\n            <ng-container *ngFor=\"let item of firstRow\">\n                <div class=\"box\">\n                    <div class=\"box-name ml-10 mt-10\">\n                        <div class=\"name\" (click)=\"openConfig()\">{{item.boxName}}</div>\n                        <img src=\"https://freehost-spec.github.io/dexcenter-dashboard/assets/images/icons/more_v_black.svg\"\n                            alt=\"more\" class=\"icons-s\" (click)=\"showInfo()\">\n                    </div>\n                    <div class=\" ml-10 mt-10 box-icons\">\n                        <img src=\"https://freehost-spec.github.io/dexcenter-dashboard/assets/images/icons/icon-workflow.svg \"\n                            alt=\"Full Sreen \" class=\"icons-l\">\n                        <img src=\"https://freehost-spec.github.io/dexcenter-dashboard/assets/images/icons/warning.svg\"\n                            alt=\"Full Sreen \" width=\"38px\" heigh=\"35px\" (click)=\"warnInfo()\">\n                    </div>\n                </div>\n                <div>\n                    <img src=\" https://freehost-spec.github.io/dexcenter-dashboard/assets/images/icons/fwrd-arrow-s.svg \"\n                        alt=\"Full Sreen \">\n                </div>\n            </ng-container>\n        </div>\n        <div class=\"row-two \">\n            <img src=\"https://freehost-spec.github.io/dexcenter-dashboard/assets/images/icons/fwrd-z-arrow.svg \"\n                alt=\"more\">\n        </div>\n        <div class=\"row-three mt-60\">\n            <div class=\"box \">\n                <div class=\"box-name ml-10 mt-10 \">\n                    <div class=\"name \">SetSession StatusYCS</div>\n                    <img src=\"https://freehost-spec.github.io/dexcenter-dashboard/assets/images/icons/more_v_black.svg \"\n                        alt=\"more \" class=\"icons-s \">\n                </div>\n                <div class=\"ml-10 mt-10 \">\n                    <img src=\"https://freehost-spec.github.io/dexcenter-dashboard/assets/images/icons/icon-workflow.svg \"\n                        alt=\"Full Sreen \" class=\"icons-l \">\n                </div>\n            </div>\n            <div><img src=\"https://freehost-spec.github.io/dexcenter-dashboard/assets/images/icons/fwrd-arrow-m.svg \"\n                    alt=\"Full Sreen \"></div>\n            <div class=\"split\">\n                <div class=\"mb-5\" style=\"white-space: nowrap;\">Approval YCS</div>\n                <div class=\"diamond-box\">\n                    <img src=\"https://freehost-spec.github.io/dexcenter-dashboard/assets/images/icons/icon-close.svg \"\n                        alt=\"more \" class=\"icons-xl \">\n                </div>\n            </div>\n            <div><img src=\"https://freehost-spec.github.io/dexcenter-dashboard/assets/images/icons/fwrd-arrow-m.svg \"\n                    alt=\"Full Sreen \"></div>\n            <div class=\"box \">\n                <div class=\"box-name ml-10 mt-10 \">\n                    <div class=\"name \">QueueFor ApprovalYCS</div>\n                    <img src=\"https://freehost-spec.github.io/dexcenter-dashboard/assets/images/icons/more_v_black.svg \"\n                        alt=\"more \" class=\"icons-s \">\n                </div>\n                <div class=\"ml-10 mt-10 \">\n                    <img src=\"https://freehost-spec.github.io/dexcenter-dashboard/assets/images/icons/icon-workflow.svg \"\n                        alt=\"Full Sreen \" class=\"icons-l \">\n                </div>\n            </div>\n            <div><img src=\"https://freehost-spec.github.io/dexcenter-dashboard/assets/images/icons/fwrd-arrow-m.svg \"\n                    alt=\"Full Sreen \"></div>\n            <div class=\"circle\">\n                <div class=\"circle-dia mt-20 mr-20\"></div>\n                <div class=\"\">Output Condition</div>\n            </div>\n        </div>\n        <div class=\"row-four \">\n            <div><img src=\"https://freehost-spec.github.io/dexcenter-dashboard/assets/images/icons/fwrd-l-arrow.svg \"\n                    alt=\"Full Sreen \" class=\"t-b\"></div>\n            <div><img src=\"https://freehost-spec.github.io/dexcenter-dashboard/assets/images/icons/fwrd-l1-arrow.svg \"\n                    alt=\"Full Sreen \" class=\"b-t\"></div>\n        </div>\n        <div class=\"row-five mt-30 \">\n            <div class=\"box \">\n                <div class=\"box-name ml-10 mt-10 \">\n                    <div class=\"name \">QueueJobes YCS</div>\n                    <img src=\"https://freehost-spec.github.io/dexcenter-dashboard/assets/images/icons/more_v_black.svg \"\n                        alt=\"more \" class=\"icons-xs \">\n                </div>\n                <div class=\"ml-10 mt-10 box-icons \">\n                    <img src=\"https://freehost-spec.github.io/dexcenter-dashboard/assets/images/icons/icon-workflow.svg \"\n                        alt=\"Full Sreen \" class=\"icons-l \" (click)=\"openConfirmation() \">\n                    <img src=\"https://freehost-spec.github.io/dexcenter-dashboard/assets/images/icons/error-icon.svg \"\n                        alt=\"Full Sreen \" class=\"icons-xs mr-6\">\n                </div>\n            </div>\n        </div>\n    </div>\n    <div class=\" zoom \">\n        <img src=\"https://freehost-spec.github.io/dexcenter-dashboard/assets/images/icons/Full Screen.svg \"\n            alt=\"Full Sreen \" class=\"icons-2xl \">\n        <img src=\"https://freehost-spec.github.io/dexcenter-dashboard/assets/images/icons/Zoom in.svg \" alt=\"Zoom in \"\n            class=\"icons-2xl mt-10 mb-10 \">\n        <img src=\"https://freehost-spec.github.io/dexcenter-dashboard/assets/images/icons/Zoom out.svg \" alt=\"Zoom out \"\n            class=\"icons-2xl \">\n    </div>\n</div>\n\n\n<!-- More Info -->\n<div *ngIf=\"viewInfo \">\n    <div class=\"viewInfo font-m \">\n        <div class=\"triangle-left \"></div>\n        <div class=\"items \">\n            <div class=\"item-name mt-10 fw-400 \">\n                <div class=\"ml-15 mr-15 item-data \">\n                    <img src=\"https://freehost-spec.github.io/dexcenter-dashboard/assets/images/icons/pause.svg \"\n                        alt=\"Full Sreen \" class=\"icons-xss mr-10 \">\n                    <div>Pause</div>\n                </div>\n                <hr class=\"ml-15 mr-15 mb-5 mt-5 \">\n                <div class=\"ml-15 mr-15 item-data \">\n                    <img src=\"https://freehost-spec.github.io/dexcenter-dashboard/assets/images/icons/resume.svg \"\n                        alt=\"Full Sreen \" class=\"icons-xss mr-10 \">\n                    <div>Resume</div>\n                </div>\n                <hr class=\"ml-15 mr-15 mb-5 mt-5 \">\n                <div class=\"ml-15 mr-15 item-data \">\n                    <img src=\"https://freehost-spec.github.io/dexcenter-dashboard/assets/images/icons/restart.svg \"\n                        alt=\"Full Sreen \" class=\"icons-xss mr-10 \">\n                    <div>Restart</div>\n                </div>\n                <hr class=\"ml-15 mr-15 mb-5 mt-5 \">\n                <div class=\"ml-15 mr-15 item-data \">\n                    <img src=\"https://freehost-spec.github.io/dexcenter-dashboard/assets/images/icons/stop.svg \"\n                        alt=\"Full Sreen \" class=\"icons-xss mr-10 \">\n                    <div>Stop</div>\n                </div>\n                <hr class=\"ml-15 mr-15 mb-5 mt-5 \">\n                <div class=\"ml-15 mr-15 item-data \">\n                    <img src=\"https://freehost-spec.github.io/dexcenter-dashboard/assets/images/icons/info.svg \"\n                        alt=\"Full Sreen \" class=\"icons-xss mr-10 \">\n                    <div>Process Info</div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n\n\n\n<div *ngIf=\"warningInfo\">\n    <div class=\"warning-info font-m fw-400\">\n        <div class=\"triangle-left\"></div>\n        <div class=\"items\">\n            <div class=\"item-name mt-10\">\n                <div class=\"item-data\">\n                    <img src=\"https://freehost-spec.github.io/dexcenter-dashboard/assets/images/icons/warning.svg \"\n                        alt=\"Full Sreen \" class=\"ml-10\" width=\"38px\" heigh=\"35px\">\n                    <div class=\"fw-500\">Warning</div>\n                </div>\n                <img src=\"https://freehost-spec.github.io/dexcenter-dashboard/assets/images/icons/icon-close.svg \"\n                    alt=\"Full Sreen \" class=\"icons-xss mr-10 \">\n            </div>\n            <div class=\"mt-10 ml-50 mr-15 font-s\">\n                Disk is at 90% of capacity. Recommend that additional space be allocated or a second DS be added.\n            </div>\n            <div class=\"font-s-blue font-m fw-500 mt-10 ml-50\"><u>View</u>\n            </div>\n        </div>\n    </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/workflow/diagram-view/diagram-nav/diagram-nav.component.html":
/*!***************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layout/workflow/diagram-view/diagram-nav/diagram-nav.component.html ***!
  \***************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"nav-container\">\n    <div class=\"search-box mt-15 ml-20\">\n        <div>\n            <img src=\"https://freehost-spec.github.io/dexcenter-dashboard/assets/images/icons/icon-search.svg\"\n                alt=\"Home\" class=\"icons-xxs\">\n            <input type=\"text\" placeholder=\"Search\" name=\"search\">\n        </div>\n        <img src=\"https://freehost-spec.github.io/dexcenter-dashboard/assets/images/icons/icon-close.svg\" alt=\"Home\"\n            class=\"icons-xxxs\">\n    </div>\n    <div class=\"mt-15 mb-15 workflow-ls\">\n        <ng-container *ngFor=\"let item of connectionsData\">\n            <div class=\"rows font-sm ml-30\">\n                <div class=\"min-max\">\n                    <img src=\"https://freehost-spec.github.io/dexcenter-dashboard/assets/images/icons/minus.svg \"\n                        alt=\"more \" width=\"8px\" height=\"8px\">\n                </div>\n                <div class=\"dash\">&middot;&middot;&middot;&middot;</div>\n                <div class=\"status {{item.status}}\"></div>\n                <div class=\"ml-5 fw-500 item-name\">{{item.name}}</div>\n            </div>\n            <div class=\"db-data\">\n                <ng-container *ngFor=\"let item of item.data\">\n                    <div class=\"rows font-sm\">\n                        <div class=\" min-max \">\n                            <img src=\"https://freehost-spec.github.io/dexcenter-dashboard/assets/images/icons/minus.svg \"\n                                alt=\"more \" width=\"8px \" height=\"8px \">\n                        </div>\n                        <div class=\"dash \">&middot;&middot;&middot;&middot;</div>\n                        <div class=\"status {{item.status}} \"></div>\n                        <div class=\"ml-5 fw-500 item-name\">{{item.name}}</div>\n                    </div>\n                    <div class=\"ds-data\">\n                        <ng-container *ngFor=\"let item of item.data \">\n                            <div class=\"rows font-sm\" style=\"margin-left:10px;\">\n                                <div class=\"dash \">&middot;&middot;&middot;&middot;</div>\n                                <div class=\"status {{item.status}} \"></div>\n                                <div class=\"ml-5 item-name\">{{item.name}}</div>\n                            </div>\n                        </ng-container>\n                    </div>\n                </ng-container>\n            </div>\n        </ng-container>\n    </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/workflow/diagram-view/diagram-view.component.html":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layout/workflow/diagram-view/diagram-view.component.html ***!
  \****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"diagram-container mt-15\">\n    <div class=\"nav mr-20 bg-white-color\">\n        <ng-container>\n            <app-diagram-nav></app-diagram-nav>\n        </ng-container>\n    </div>\n    <div class=\"content\">\n        <ng-container>\n            <app-engine-info></app-engine-info>\n        </ng-container>\n        <p class=\"font-xl mt-15 mb-15\">Workflow Task Information</p>\n        <ng-container>\n            <app-dia-task-info></app-dia-task-info>\n        </ng-container>\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/workflow/engine-info/engine-info.component.html":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layout/workflow/engine-info/engine-info.component.html ***!
  \**************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"engine-info bg-white-color font-d-grey font-m\">\n    <div class=\"font-xl ml-20 mr-50 font-m-grey\">Engine Information :</div>\n    <div class=\"user-inputs mr-15\">\n        <div class=\"mr-5\">License:</div>\n        <input type=\"email\" value=\"12345@asdffg5\">\n    </div>\n    <div class=\"user-inputs mr-15\">\n        <div class=\"mr-5\">DXS:</div>\n        <input type=\"text\" value=\"ITI100234\">\n    </div>\n    <div class=\"user-inputs\">\n        <div class=\"mr-5\">DTS:</div>\n        <input type=\"text\" value=\"NONE\">\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/workflow/tabular-view/tabular-nav/tabular-nav.component.html":
/*!***************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layout/workflow/tabular-view/tabular-nav/tabular-nav.component.html ***!
  \***************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"table-nav ml-10 mr-10 bg-white-color\">\n  <div class=\"\">Session :</div>\n  <div class=\"container-details mt-10\">\n    <div class=\"search pt-10 pb-10\">\n      <div class=\"selection ml-10\">\n        <input type=\"checkbox\" (click)=\"selectAll()\">\n        <div class=\"font-s-blue font-m pl-10\">Select All</div>\n      </div>\n      <div class=\"search-box mr-5\">\n        <input type=\"text\" placeholder=\"Search Session\" name=\"search\" class=\"pt-5 pb-5 pl-30 font-sm\">\n        <img src=\"https://freehost-spec.github.io/dexcenter-dashboard/assets/images/icons/icon-search.svg\" alt=\"search\"\n          class=\"icons-xxs\">\n      </div>\n    </div>\n    <div class=\"list-main-container\">\n      <ng-container *ngFor=\"let item of sessions\">\n        <div class=\"lists-container\">\n          <div class=\"sessions-ls ml-10\" [ngClass]=\"item.selected ? 'selected' : ''\">\n            <input type=\"checkbox\" [(ngModel)]=\"item.selected\" />\n            <div class=\"font-m pl-10\">{{item.sessionlist}}</div>\n          </div>\n          <div class=\"more-icon mr-20\">\n            <img src=\"https://freehost-spec.github.io/dexcenter-dashboard/assets/images/icons/more_v_black.svg\"\n              alt=\"more\" class=\"icons-s\">\n          </div>\n        </div>\n      </ng-container>\n    </div>\n    <div class=\"buttons mt-15 mb-10\">\n      <button class=\"nav-btn pl-10 pr-10\">Pause</button>\n      <button class=\"nav-btn pl-10 pr-10 ml-10 mr-10\">Restart</button>\n      <button class=\"nav-btn pl-10 pr-10\">Cancel</button>\n    </div>\n  </div>\n  <div class=\"mt-10\">Workflow :</div>\n  <div class=\"container-details mt-10\">\n    <div class=\"search pt-10 pb-10\">\n      <div class=\"selection ml-10\">\n        <input type=\"checkbox\" (click)=selectAllWf()>\n        <div class=\"font-s-blue font-m pl-10\">Select All</div>\n      </div>\n      <div class=\"search-box mr-5\">\n        <input type=\"text\" placeholder=\"Search Session\" name=\"search\" class=\"pt-5 pb-5 pl-30 font-sm\">\n        <img src=\"https://freehost-spec.github.io/dexcenter-dashboard/assets/images/icons/icon-search.svg\" alt=\"search\"\n          class=\"icons-xxs\">\n      </div>\n    </div>\n    <div class=\"list-main-container \">\n      <ng-container *ngFor=\"let item of workflow\">\n        <div class=\"lists-container\">\n          <div class=\"sessions-ls ml-10\" [ngClass]=\"item.selected ? 'selected' : ''\">\n            <input type=\"checkbox\" [(ngModel)]=\"item.selected\">\n            <div class=\"font-m pl-10\">{{item.workflowlist}}</div>\n          </div>\n          <div class=\"more-icon mr-20\">\n            <img src=\"https://freehost-spec.github.io/dexcenter-dashboard/assets/images/icons/more_v_black.svg\"\n              alt=\"more\" class=\"icons-s\">\n          </div>\n        </div>\n      </ng-container>\n    </div>\n    <div class=\"buttons mt-15 mb-10\">\n      <button class=\"nav-btn pl-10 pr-10\">Pause</button>\n      <button class=\"nav-btn pl-10 pr-10 ml-10 mr-10\">Restart</button>\n      <button class=\"nav-btn pl-10 pr-10\">Cancel</button>\n    </div>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/workflow/tabular-view/tabular-task-info/tabular-task-info.component.html":
/*!***************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layout/workflow/tabular-view/tabular-task-info/tabular-task-info.component.html ***!
  \***************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"task-info bg-white-color\">\n  <div class=\"info-nav\">\n    <div class=\"container-details\">\n      <div class=\"search\">\n        <div class=\"search-box\">\n          <input type=\"text\" placeholder=\"Search Session\" name=\"search\" class=\"pt-5 pb-5 pl-30 font-sm\">\n          <img src=\"https://freehost-spec.github.io/dexcenter-dashboard/assets/images/icons/icon-search.svg\"\n            alt=\"search\" class=\"icons-xxs\">\n        </div>\n      </div>\n      <div class=\"selection ml-10 mt-15 mb-10\">\n        <input type=\"checkbox\" (click)=\"selectAll()\">\n        <div class=\"font-s-blue font-m pl-10\">Select All</div>\n      </div>\n      <div class=\"list-main-container\">\n        <ng-container *ngFor=\"let item of taskinfo\">\n          <div class=\"lists-container\">\n            <div class=\"sessions-ls ml-10\" [ngClass]=\"item.selected ? 'selected' : ''\">\n              <input type=\"checkbox\" [(ngModel)]=\"item.selected\">\n              <div class=\"font-m pl-10\">{{item.infolist}}</div>\n            </div>\n            <div class=\"more-icon mr-20\">\n              <img src=\"https://freehost-spec.github.io/dexcenter-dashboard/assets/images/icons/more_v_black.svg\"\n                alt=\"more\" class=\"icons-s\">\n            </div>\n          </div>\n        </ng-container>\n      </div>\n    </div>\n  </div>\n  <div class=\"information-container font-m pl-40 pt-40\">\n    <div class=\"input-lable\">\n      <div class=\"lable-name pr-10\">Task ID:</div>\n      <input type=\"text\" value='-'>\n    </div>\n    <div class=\"input-lable\">\n      <div class=\"lable-name\">Task Name:</div>\n      <input type=\"text\" value='-'>\n    </div>\n    <div class=\"input-lable\">\n      <div class=\"lable-name\">Task Status:</div>\n      <input type=\"text\" value='-'>\n    </div>\n    <div class=\"input-lable\">\n      <div class=\"lable-name\">Task Engine:</div>\n      <input type=\"text\" value='-'>\n    </div>\n    <div class=\"input-lable\">\n      <div class=\"lable-name\">Task Period:</div>\n      <input type=\"text\" value='-'>\n    </div>\n    <div class=\"input-lable\">\n      <div class=\"lable-name\">Execution Parameters</div>\n      <textarea placeholder='-' rows=\" 2 \" cols=\"20 \" wrap=\"hard \"></textarea>\n    </div>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/workflow/tabular-view/tabular-view.component.html":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layout/workflow/tabular-view/tabular-view.component.html ***!
  \****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"tabular-container mt-15\">\n  <div class=\"nav mr-20 bg-white-color\">\n    <div class=\"nav-container pt-10\">\n      <!-- <img src=\"https://freehost-spec.github.io/dexcenter-dashboard/assets/images/icons/close.svg\" alt=\"Minimise\" width=\"20px\" height=\"20px\"> -->\n      <app-tabular-nav></app-tabular-nav>\n    </div>\n  </div>\n  <div class=\"content\">\n    <ng-container>\n      <app-engine-info></app-engine-info>\n    </ng-container>\n    <p class=\"font-xl mt-15 mb-15 font-m-grey\">Workflow Task Information</p>\n    <ng-container>\n      <app-tabular-task-info></app-tabular-task-info>\n    </ng-container>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/workflow/workflow-modal/workflow-modal.component.html":
/*!********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layout/workflow/workflow-modal/workflow-modal.component.html ***!
  \********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ng-container>\n    <div class=\"modal\">\n        <div class=\"modal-header\">\n            <div class=\"font-l ml-20\">\n                Process Info\n            </div>\n            <img src=\"https://freehost-spec.github.io/dexcenter-dashboard/assets/images/icons/icon-close.svg\"\n                class=\"icons-xs mr-20 cp\" (click)=\"closeModal('true')\" alt=\" close \">\n        </div>\n        <div class=\"modal-content font-m mt-40\">\n            <div class=\"content-left\">\n                <div class=\"mt-15 ml-20 workflow-ls\">\n                    <div class=\"rows\">\n                        <div class=\"min-max\">\n                            <img src=\"https://freehost-spec.github.io/dexcenter-dashboard/assets/images/icons/minus.svg \"\n                                alt=\"more \" width=\"8px\" height=\"8px\">\n                        </div>\n                        <div class=\"dash\">&middot;&middot;&middot;</div>\n                        <div class=\"ml-5 font-sm\">Wildfly-service.exe</div>\n                    </div>\n                </div>\n                <div class=\"expand\">\n                    <span>&middot;&middot;&middot;&middot;&middot;</span>\n                </div>\n                <div class=\"workflow-ls\" style=\"margin-top:12px; margin-left:28px;\">\n                    <div class=\"rows font-sm\">\n                        <div class=\"dash\">&middot;&middot;&middot;&middot;&middot;&middot;&middot;&middot;&middot;</div>\n                        <div class=\"font-sm\">conhost.exe</div>\n                    </div>\n                </div>\n                <div class=\"expand\" style=\"margin-top:-3px;\">\n                    <span>&middot;&middot;&middot;&middot;&middot;</span>\n                </div>\n                <div class=\"mt-10 ml-30 workflow-ls\">\n                    <div class=\"rows font-sm\">\n                        <div class=\"dash\">&middot;&middot;&middot;&middot;&middot;&middot;&middot;&middot;&middot;</div>\n                        <div class=\"workflow-ls\">\n                            <div class=\"rows\">\n                                <div class=\"min-max\">\n                                    <img src=\"https://freehost-spec.github.io/dexcenter-dashboard/assets/images/icons/minus.svg \"\n                                        alt=\"more \" width=\"8px\" height=\"8px\">\n                                </div>\n                                <div class=\"dash\">&middot;&middot;&middot;</div>\n                                <div class=\"ml-5 font-sm\">cmd</div>\n                            </div>\n                        </div>\n\n                    </div>\n                </div>\n                <div class=\"expand ml-40\">\n                    <span>&middot;&middot;&middot;&middot;&middot;</span>\n                </div>\n                <div class=\"workflow-ls\" style=\"margin-left: 70px;\n                margin-top: 8px;\">\n                    <div class=\"rows font-sm\">\n                        <div class=\"dash\">&middot;&middot;&middot;&middot;&middot;&middot;&middot;&middot;&middot;</div>\n                        <div class=\"font-sm\">Java</div>\n                    </div>\n                </div>\n            </div>\n            <hr class=\"verticle-line ml-10 mr-10\">\n            <div class=\"content-right\">\n                <ng-container *ngFor=\"let item of processInfo\">\n                    <div class=\"process-info mt-10\">\n                        <div>{{item.service}}</div>\n                        <div class=\"ml-30\">{{item.time}}</div>\n                        <div class=\"ml-30\">{{item.software}}</div>\n                        <div class=\"ml-20 mr-15\">{{item.location}}</div>\n                    </div>\n                </ng-container>\n            </div>\n        </div>\n    </div>\n</ng-container>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/workflow/workflow.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layout/workflow/workflow.component.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"workflow-container m-20 pl-10 \">\n    <div class=\"font-xl fw-500 mb-20\">\n        Workflow\n    </div>\n    <div class=\"connection-view-content\" *ngIf=\"!closeToolSec \">\n        <div>\n            <button class=\"primary-btn \" (click)=\"changeNav( 'tabular') \" [ngClass]=\"activatedTab==='tabular' ? 'selected' : '' \">Tabular View</button>\n            <button class=\"primary-btn \" (click)=\"changeNav( 'diagram') \" [ngClass]=\"activatedTab==='diagram' ? 'selected' : '' \">Diagram View</button>\n        </div>\n        <ng-container *ngIf=\"activatedTab==='tabular' \">\n            <app-tabular-view></app-tabular-view>\n        </ng-container>\n        <ng-container *ngIf=\"activatedTab==='diagram' \">\n            <app-diagram-view></app-diagram-view>\n        </ng-container>\n    </div>\n</div>");

/***/ }),

/***/ "./src/app/layout/workflow/diagram-view/dia-task-info/dia-task-info.component.scss":
/*!*****************************************************************************************!*\
  !*** ./src/app/layout/workflow/diagram-view/dia-task-info/dia-task-info.component.scss ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".task-info {\n  width: 100%;\n  height: 525px;\n  border: 1px solid #CCCCCC;\n  position: relative;\n}\n.task-info .dia-container {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  margin-top: 100px;\n}\n.task-info .dia-container .row-one,\n.task-info .dia-container .row-two,\n.task-info .dia-container .row-three,\n.task-info .dia-container .row-four,\n.task-info .dia-container .row-five {\n  display: flex;\n  align-items: center;\n}\n.task-info .dia-container .row-two {\n  position: relative;\n}\n.task-info .dia-container .row-two img {\n  position: absolute;\n  left: -200px;\n  top: 0px;\n}\n.task-info .dia-container .row-four {\n  position: relative;\n}\n.task-info .dia-container .row-four .b-t {\n  position: absolute;\n  left: 120px;\n  top: -45px;\n}\n.task-info .dia-container .row-four .t-b {\n  position: absolute;\n  right: -22px;\n  top: -15px;\n}\n.task-info .dia-container .row-five {\n  margin-left: 150px;\n}\n.task-info .dia-container .circle {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  width: 60px;\n  height: 88px;\n}\n.task-info .dia-container .circle .circle-dia {\n  width: 36px;\n  height: 36px;\n  background-color: #F6F8F9;\n  border: 1px solid #666666;\n  border-radius: 50%;\n}\n.task-info .dia-container .circle .circle-name {\n  text-align: center;\n}\n.task-info .dia-container .box {\n  width: 106px;\n  height: 88px;\n  display: flex;\n  flex-direction: column;\n  box-shadow: 0px 3px 0px #989898;\n  border: 1px solid #707070;\n  background-color: #F6F8F9;\n  border-radius: 8px;\n}\n.task-info .dia-container .box .box-name {\n  display: flex;\n}\n.task-info .dia-container .box .box-name .name {\n  overflow: hidden;\n}\n.task-info .dia-container .box .box-icons {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.task-info .split {\n  width: 62px;\n  height: 87px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n.task-info .split .diamond-box {\n  width: 45px;\n  height: 45px;\n  transform: rotateY(0deg) rotate(45deg);\n  background-color: #F6F8F9;\n  border: 1px solid #666666;\n  border-radius: 8px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.task-info .split .diamond-box img {\n  transform: rotateY(0deg) rotate(45deg);\n}\n.zoom {\n  display: flex;\n  flex-direction: column;\n  position: absolute;\n  bottom: 30px;\n  right: 20px;\n}\n.box {\n  position: relative;\n}\n.viewInfo {\n  display: flex;\n  flex-direction: column;\n  position: absolute;\n  top: 400px;\n  left: 762px;\n}\n.viewInfo > .triangle-left {\n  width: 0;\n  height: 0;\n  border-top: 8px solid transparent;\n  border-right: 8px solid transparent;\n  border-bottom: 12px solid #333333;\n  border-left: 8px solid transparent;\n  position: relative;\n  top: 0px;\n  left: 40px;\n}\n.viewInfo > .items {\n  background-color: #333333;\n  color: #fff;\n  height: 147px;\n  width: 143px;\n  z-index: 5;\n  overflow: hidden;\n  display: flex;\n  flex-direction: column;\n  box-shadow: 0px 3px 6px #00000029;\n  border: 1px solid #000000;\n  opacity: 0.94;\n  border-radius: 4px;\n}\n.viewInfo > .items > .item-name {\n  cursor: pointer;\n  display: flex;\n  flex-direction: column;\n  height: 30px;\n}\n.viewInfo > .items > .item-name > .item-data {\n  display: flex;\n  align-items: center;\n}\n.viewInfo > .items > .item-name > hr {\n  border-bottom: #E5E8E8;\n}\n.viewInfo > .items > .item-name:hover {\n  background-color: #666;\n}\n.warning-info {\n  display: flex;\n  flex-direction: column;\n  position: absolute;\n  top: 448px;\n  left: 753px;\n}\n.warning-info > .triangle-left {\n  width: 0;\n  height: 0;\n  border-top: 8px solid transparent;\n  border-right: 8px solid transparent;\n  border-bottom: 12px solid #333333;\n  border-left: 8px solid transparent;\n  position: relative;\n  top: 0px;\n  left: 40px;\n}\n.warning-info > .items {\n  width: 253px;\n  height: 152px;\n  display: flex;\n  flex-direction: column;\n  color: #fff;\n  background-color: #333333;\n  box-shadow: 0px 3px 6px #00000029;\n  border: 1px solid #000000;\n  border-radius: 4px;\n  z-index: 5;\n  opacity: 0.94;\n  overflow: hidden;\n}\n.warning-info > .items > .item-name {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  height: 30px;\n}\n.warning-info > .items > .item-name > .item-data {\n  display: flex;\n  align-items: center;\n}\n.warning-info > .items > .item-name:hover {\n  background-color: #666;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hcHBsZS9wcm9qZWN0L2RleGNlbnRlci1kYXNoYm9hcmQvc3JjL2FwcC9sYXlvdXQvd29ya2Zsb3cvZGlhZ3JhbS12aWV3L2RpYS10YXNrLWluZm8vZGlhLXRhc2staW5mby5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbGF5b3V0L3dvcmtmbG93L2RpYWdyYW0tdmlldy9kaWEtdGFzay1pbmZvL2RpYS10YXNrLWluZm8uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxXQUFBO0VBQ0EsYUFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7QUNDSjtBREFJO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtBQ0VSO0FERFE7Ozs7O0VBS0ksYUFBQTtFQUNBLG1CQUFBO0FDR1o7QURBUTtFQUNJLGtCQUFBO0FDRVo7QUREWTtFQUNJLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFFBQUE7QUNHaEI7QURLUTtFQUNJLGtCQUFBO0FDSFo7QURJWTtFQUNJLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7QUNGaEI7QURJWTtFQUNJLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7QUNGaEI7QURLUTtFQUNJLGtCQUFBO0FDSFo7QURLUTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUNIWjtBRElZO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7QUNGaEI7QURJWTtFQUNJLGtCQUFBO0FDRmhCO0FES1E7RUFDSSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLCtCQUFBO0VBQ0EseUJBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0FDSFo7QURJWTtFQUNJLGFBQUE7QUNGaEI7QURHZ0I7RUFDSSxnQkFBQTtBQ0RwQjtBRElZO0VBQ0ksYUFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7QUNGaEI7QURNSTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7QUNKUjtBREtRO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxzQ0FBQTtFQUNBLHlCQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0FDSFo7QURJWTtFQUNJLHNDQUFBO0FDRmhCO0FEUUE7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FDTEo7QURRQTtFQUNJLGtCQUFBO0FDTEo7QURRQTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7QUNMSjtBRE1JO0VBQ0ksUUFBQTtFQUNBLFNBQUE7RUFDQSxpQ0FBQTtFQUNBLG1DQUFBO0VBQ0EsaUNBQUE7RUFDQSxrQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFVBQUE7QUNKUjtBRE1JO0VBQ0kseUJBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxpQ0FBQTtFQUNBLHlCQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0FDSlI7QURLUTtFQUNJLGVBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxZQUFBO0FDSFo7QURJWTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtBQ0ZoQjtBRElZO0VBQ0ksc0JBQUE7QUNGaEI7QURLUTtFQUNJLHNCQUFBO0FDSFo7QURRQTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7QUNMSjtBRE1JO0VBQ0ksUUFBQTtFQUNBLFNBQUE7RUFDQSxpQ0FBQTtFQUNBLG1DQUFBO0VBQ0EsaUNBQUE7RUFDQSxrQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFVBQUE7QUNKUjtBRE1JO0VBQ0ksWUFBQTtFQUNBLGFBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxXQUFBO0VBQ0EseUJBQUE7RUFDQSxpQ0FBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0FDSlI7QURLUTtFQUNJLGFBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtBQ0haO0FESVk7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7QUNGaEI7QURLUTtFQUNJLHNCQUFBO0FDSFoiLCJmaWxlIjoic3JjL2FwcC9sYXlvdXQvd29ya2Zsb3cvZGlhZ3JhbS12aWV3L2RpYS10YXNrLWluZm8vZGlhLXRhc2staW5mby5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi50YXNrLWluZm8ge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogNTI1cHg7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI0NDQ0NDQztcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgLmRpYS1jb250YWluZXIge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBtYXJnaW4tdG9wOiAxMDBweDtcbiAgICAgICAgLnJvdy1vbmUsXG4gICAgICAgIC5yb3ctdHdvLFxuICAgICAgICAucm93LXRocmVlLFxuICAgICAgICAucm93LWZvdXIsXG4gICAgICAgIC5yb3ctZml2ZSB7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgfVxuICAgICAgICAucm93LW9uZSB7fVxuICAgICAgICAucm93LXR3byB7XG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICBpbWcge1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICBsZWZ0OiAtMjAwcHg7XG4gICAgICAgICAgICAgICAgdG9wOiAwcHg7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLnJvdy10aHJlZSB7XG4gICAgICAgICAgICAuY2lyY2xlIHtcbiAgICAgICAgICAgICAgICAuY2lyY2xlLWRpYSB7fVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC5yb3ctZm91ciB7XG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICAuYi10IHtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgbGVmdDogMTIwcHg7XG4gICAgICAgICAgICAgICAgdG9wOiAtNDVweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC50LWIge1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICByaWdodDogLTIycHg7XG4gICAgICAgICAgICAgICAgdG9wOiAtMTVweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAucm93LWZpdmUge1xuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDE1MHB4O1xuICAgICAgICB9XG4gICAgICAgIC5jaXJjbGUge1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgd2lkdGg6IDYwcHg7XG4gICAgICAgICAgICBoZWlnaHQ6IDg4cHg7XG4gICAgICAgICAgICAuY2lyY2xlLWRpYSB7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDM2cHg7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAzNnB4O1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNGNkY4Rjk7XG4gICAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgIzY2NjY2NjtcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuY2lyY2xlLW5hbWUge1xuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAuYm94IHtcbiAgICAgICAgICAgIHdpZHRoOiAxMDZweDtcbiAgICAgICAgICAgIGhlaWdodDogODhweDtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgICAgYm94LXNoYWRvdzogMHB4IDNweCAwcHggIzk4OTg5ODtcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICM3MDcwNzA7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjZGOEY5O1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogOHB4O1xuICAgICAgICAgICAgLmJveC1uYW1lIHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgIC5uYW1lIHtcbiAgICAgICAgICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuYm94LWljb25zIHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIC5zcGxpdCB7XG4gICAgICAgIHdpZHRoOiA2MnB4O1xuICAgICAgICBoZWlnaHQ6IDg3cHg7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIC5kaWFtb25kLWJveCB7XG4gICAgICAgICAgICB3aWR0aDogNDVweDtcbiAgICAgICAgICAgIGhlaWdodDogNDVweDtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlWSgwZGVnKSByb3RhdGUoNDVkZWcpO1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0Y2RjhGOTtcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICM2NjY2NjY7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA4cHg7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgICAgaW1nIHtcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZVkoMGRlZykgcm90YXRlKDQ1ZGVnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cblxuLnpvb20ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYm90dG9tOiAzMHB4O1xuICAgIHJpZ2h0OiAyMHB4O1xufVxuXG4uYm94IHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi52aWV3SW5mbyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDQwMHB4O1xuICAgIGxlZnQ6IDc2MnB4O1xuICAgICY+LnRyaWFuZ2xlLWxlZnQge1xuICAgICAgICB3aWR0aDogMDtcbiAgICAgICAgaGVpZ2h0OiAwO1xuICAgICAgICBib3JkZXItdG9wOiA4cHggc29saWQgdHJhbnNwYXJlbnQ7XG4gICAgICAgIGJvcmRlci1yaWdodDogOHB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICAgICAgICBib3JkZXItYm90dG9tOiAxMnB4IHNvbGlkICMzMzMzMzM7XG4gICAgICAgIGJvcmRlci1sZWZ0OiA4cHggc29saWQgdHJhbnNwYXJlbnQ7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgdG9wOiAwcHg7XG4gICAgICAgIGxlZnQ6IDQwcHg7XG4gICAgfVxuICAgICY+Lml0ZW1zIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzMzMzMzMztcbiAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgIGhlaWdodDogMTQ3cHg7XG4gICAgICAgIHdpZHRoOiAxNDNweDtcbiAgICAgICAgei1pbmRleDogNTtcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgYm94LXNoYWRvdzogMHB4IDNweCA2cHggIzAwMDAwMDI5O1xuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjMDAwMDAwO1xuICAgICAgICBvcGFjaXR5OiAwLjk0O1xuICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgICAgICY+Lml0ZW0tbmFtZSB7XG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICAgIGhlaWdodDogMzBweDtcbiAgICAgICAgICAgICY+Lml0ZW0tZGF0YSB7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgJj5ociB7XG4gICAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogI0U1RThFODtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAmPi5pdGVtLW5hbWU6aG92ZXIge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzY2NjtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuLndhcm5pbmctaW5mbyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDQ0OHB4O1xuICAgIGxlZnQ6IDc1M3B4O1xuICAgICY+LnRyaWFuZ2xlLWxlZnQge1xuICAgICAgICB3aWR0aDogMDtcbiAgICAgICAgaGVpZ2h0OiAwO1xuICAgICAgICBib3JkZXItdG9wOiA4cHggc29saWQgdHJhbnNwYXJlbnQ7XG4gICAgICAgIGJvcmRlci1yaWdodDogOHB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICAgICAgICBib3JkZXItYm90dG9tOiAxMnB4IHNvbGlkICMzMzMzMzM7XG4gICAgICAgIGJvcmRlci1sZWZ0OiA4cHggc29saWQgdHJhbnNwYXJlbnQ7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgdG9wOiAwcHg7XG4gICAgICAgIGxlZnQ6IDQwcHg7XG4gICAgfVxuICAgICY+Lml0ZW1zIHtcbiAgICAgICAgd2lkdGg6IDI1M3B4O1xuICAgICAgICBoZWlnaHQ6IDE1MnB4O1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzMzMzMzMztcbiAgICAgICAgYm94LXNoYWRvdzogMHB4IDNweCA2cHggIzAwMDAwMDI5O1xuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjMDAwMDAwO1xuICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgICAgIHotaW5kZXg6IDU7XG4gICAgICAgIG9wYWNpdHk6IDAuOTQ7XG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgICY+Lml0ZW0tbmFtZSB7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgIGhlaWdodDogMzBweDtcbiAgICAgICAgICAgICY+Lml0ZW0tZGF0YSB7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgICY+Lml0ZW0tbmFtZTpob3ZlciB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjY2O1xuICAgICAgICB9XG4gICAgfVxufSIsIi50YXNrLWluZm8ge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA1MjVweDtcbiAgYm9yZGVyOiAxcHggc29saWQgI0NDQ0NDQztcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLnRhc2staW5mbyAuZGlhLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIG1hcmdpbi10b3A6IDEwMHB4O1xufVxuLnRhc2staW5mbyAuZGlhLWNvbnRhaW5lciAucm93LW9uZSxcbi50YXNrLWluZm8gLmRpYS1jb250YWluZXIgLnJvdy10d28sXG4udGFzay1pbmZvIC5kaWEtY29udGFpbmVyIC5yb3ctdGhyZWUsXG4udGFzay1pbmZvIC5kaWEtY29udGFpbmVyIC5yb3ctZm91cixcbi50YXNrLWluZm8gLmRpYS1jb250YWluZXIgLnJvdy1maXZlIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi50YXNrLWluZm8gLmRpYS1jb250YWluZXIgLnJvdy10d28ge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4udGFzay1pbmZvIC5kaWEtY29udGFpbmVyIC5yb3ctdHdvIGltZyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogLTIwMHB4O1xuICB0b3A6IDBweDtcbn1cbi50YXNrLWluZm8gLmRpYS1jb250YWluZXIgLnJvdy1mb3VyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLnRhc2staW5mbyAuZGlhLWNvbnRhaW5lciAucm93LWZvdXIgLmItdCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMTIwcHg7XG4gIHRvcDogLTQ1cHg7XG59XG4udGFzay1pbmZvIC5kaWEtY29udGFpbmVyIC5yb3ctZm91ciAudC1iIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogLTIycHg7XG4gIHRvcDogLTE1cHg7XG59XG4udGFzay1pbmZvIC5kaWEtY29udGFpbmVyIC5yb3ctZml2ZSB7XG4gIG1hcmdpbi1sZWZ0OiAxNTBweDtcbn1cbi50YXNrLWluZm8gLmRpYS1jb250YWluZXIgLmNpcmNsZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHdpZHRoOiA2MHB4O1xuICBoZWlnaHQ6IDg4cHg7XG59XG4udGFzay1pbmZvIC5kaWEtY29udGFpbmVyIC5jaXJjbGUgLmNpcmNsZS1kaWEge1xuICB3aWR0aDogMzZweDtcbiAgaGVpZ2h0OiAzNnB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjZGOEY5O1xuICBib3JkZXI6IDFweCBzb2xpZCAjNjY2NjY2O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG59XG4udGFzay1pbmZvIC5kaWEtY29udGFpbmVyIC5jaXJjbGUgLmNpcmNsZS1uYW1lIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLnRhc2staW5mbyAuZGlhLWNvbnRhaW5lciAuYm94IHtcbiAgd2lkdGg6IDEwNnB4O1xuICBoZWlnaHQ6IDg4cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGJveC1zaGFkb3c6IDBweCAzcHggMHB4ICM5ODk4OTg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICM3MDcwNzA7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGNkY4Rjk7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbn1cbi50YXNrLWluZm8gLmRpYS1jb250YWluZXIgLmJveCAuYm94LW5hbWUge1xuICBkaXNwbGF5OiBmbGV4O1xufVxuLnRhc2staW5mbyAuZGlhLWNvbnRhaW5lciAuYm94IC5ib3gtbmFtZSAubmFtZSB7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG4udGFzay1pbmZvIC5kaWEtY29udGFpbmVyIC5ib3ggLmJveC1pY29ucyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi50YXNrLWluZm8gLnNwbGl0IHtcbiAgd2lkdGg6IDYycHg7XG4gIGhlaWdodDogODdweDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi50YXNrLWluZm8gLnNwbGl0IC5kaWFtb25kLWJveCB7XG4gIHdpZHRoOiA0NXB4O1xuICBoZWlnaHQ6IDQ1cHg7XG4gIHRyYW5zZm9ybTogcm90YXRlWSgwZGVnKSByb3RhdGUoNDVkZWcpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjZGOEY5O1xuICBib3JkZXI6IDFweCBzb2xpZCAjNjY2NjY2O1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuLnRhc2staW5mbyAuc3BsaXQgLmRpYW1vbmQtYm94IGltZyB7XG4gIHRyYW5zZm9ybTogcm90YXRlWSgwZGVnKSByb3RhdGUoNDVkZWcpO1xufVxuXG4uem9vbSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAzMHB4O1xuICByaWdodDogMjBweDtcbn1cblxuLmJveCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLnZpZXdJbmZvIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDQwMHB4O1xuICBsZWZ0OiA3NjJweDtcbn1cbi52aWV3SW5mbyA+IC50cmlhbmdsZS1sZWZ0IHtcbiAgd2lkdGg6IDA7XG4gIGhlaWdodDogMDtcbiAgYm9yZGVyLXRvcDogOHB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICBib3JkZXItcmlnaHQ6IDhweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgYm9yZGVyLWJvdHRvbTogMTJweCBzb2xpZCAjMzMzMzMzO1xuICBib3JkZXItbGVmdDogOHB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogMHB4O1xuICBsZWZ0OiA0MHB4O1xufVxuLnZpZXdJbmZvID4gLml0ZW1zIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzMzMzMzMztcbiAgY29sb3I6ICNmZmY7XG4gIGhlaWdodDogMTQ3cHg7XG4gIHdpZHRoOiAxNDNweDtcbiAgei1pbmRleDogNTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYm94LXNoYWRvdzogMHB4IDNweCA2cHggIzAwMDAwMDI5O1xuICBib3JkZXI6IDFweCBzb2xpZCAjMDAwMDAwO1xuICBvcGFjaXR5OiAwLjk0O1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG59XG4udmlld0luZm8gPiAuaXRlbXMgPiAuaXRlbS1uYW1lIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBoZWlnaHQ6IDMwcHg7XG59XG4udmlld0luZm8gPiAuaXRlbXMgPiAuaXRlbS1uYW1lID4gLml0ZW0tZGF0YSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4udmlld0luZm8gPiAuaXRlbXMgPiAuaXRlbS1uYW1lID4gaHIge1xuICBib3JkZXItYm90dG9tOiAjRTVFOEU4O1xufVxuLnZpZXdJbmZvID4gLml0ZW1zID4gLml0ZW0tbmFtZTpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM2NjY7XG59XG5cbi53YXJuaW5nLWluZm8ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNDQ4cHg7XG4gIGxlZnQ6IDc1M3B4O1xufVxuLndhcm5pbmctaW5mbyA+IC50cmlhbmdsZS1sZWZ0IHtcbiAgd2lkdGg6IDA7XG4gIGhlaWdodDogMDtcbiAgYm9yZGVyLXRvcDogOHB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICBib3JkZXItcmlnaHQ6IDhweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgYm9yZGVyLWJvdHRvbTogMTJweCBzb2xpZCAjMzMzMzMzO1xuICBib3JkZXItbGVmdDogOHB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogMHB4O1xuICBsZWZ0OiA0MHB4O1xufVxuLndhcm5pbmctaW5mbyA+IC5pdGVtcyB7XG4gIHdpZHRoOiAyNTNweDtcbiAgaGVpZ2h0OiAxNTJweDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgY29sb3I6ICNmZmY7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzMzMzMzM7XG4gIGJveC1zaGFkb3c6IDBweCAzcHggNnB4ICMwMDAwMDAyOTtcbiAgYm9yZGVyOiAxcHggc29saWQgIzAwMDAwMDtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICB6LWluZGV4OiA1O1xuICBvcGFjaXR5OiAwLjk0O1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuLndhcm5pbmctaW5mbyA+IC5pdGVtcyA+IC5pdGVtLW5hbWUge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGhlaWdodDogMzBweDtcbn1cbi53YXJuaW5nLWluZm8gPiAuaXRlbXMgPiAuaXRlbS1uYW1lID4gLml0ZW0tZGF0YSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4ud2FybmluZy1pbmZvID4gLml0ZW1zID4gLml0ZW0tbmFtZTpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM2NjY7XG59Il19 */");

/***/ }),

/***/ "./src/app/layout/workflow/diagram-view/dia-task-info/dia-task-info.component.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/layout/workflow/diagram-view/dia-task-info/dia-task-info.component.ts ***!
  \***************************************************************************************/
/*! exports provided: DiaTaskInfoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DiaTaskInfoComponent", function() { return DiaTaskInfoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm2015/dialog.js");
/* harmony import */ var _workflow_modal_workflow_modal_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../workflow-modal/workflow-modal.component */ "./src/app/layout/workflow/workflow-modal/workflow-modal.component.ts");





let DiaTaskInfoComponent = class DiaTaskInfoComponent {
    constructor(dialog, dialogRef, data) {
        this.dialog = dialog;
        this.dialogRef = dialogRef;
        this.data = data;
    }
    ngOnInit() {
        this.firstRow = [
            { id: 1, boxName: 'DBSetSession StatusYCS', state: 'warining', icon: '' },
            { id: 2, boxName: 'Translate Preprocessi..', state: 'Working', icon: '' },
            { id: 3, boxName: 'CadFileInfo YCS', state: 'Working', icon: '' },
            { id: 4, boxName: 'Translate Preproces...', state: 'Warining', icon: 'icon-ds' },
            { id: 5, boxName: 'Translate Preprocessing..', state: 'Working', icon: '' },
        ];
        this.secondRow = [
            { id: 1, boxName: 'SetSession StatusYCS', state: 'warining', icon: '' },
            { id: 2, boxName: 'QueueFor ApprovalYCS', state: 'Working', icon: '' },
        ];
        this.thirdRow = [
            { id: 1, boxName: 'QueueJobes YCS', state: 'Warining', icon: 'icon-ds' },
        ];
        this.confirmation = false;
    }
    openConfirmation() {
        this.confirmation = true;
    }
    showInfo() {
        this.viewInfo = !this.viewInfo;
    }
    warnInfo() {
        this.warningInfo = !this.warningInfo;
    }
    openConfig() {
        const data = [];
        const dialogRef = this.dialog.open(_workflow_modal_workflow_modal_component__WEBPACK_IMPORTED_MODULE_3__["WorkflowModalComponent"], { data });
        dialogRef.afterClosed().subscribe(res => {
        });
    }
};
DiaTaskInfoComponent.ctorParameters = () => [
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"] },
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"],] }] }
];
DiaTaskInfoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-dia-task-info',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./dia-task-info.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/workflow/diagram-view/dia-task-info/dia-task-info.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./dia-task-info.component.scss */ "./src/app/layout/workflow/diagram-view/dia-task-info/dia-task-info.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]))
], DiaTaskInfoComponent);



/***/ }),

/***/ "./src/app/layout/workflow/diagram-view/diagram-nav/diagram-nav.component.scss":
/*!*************************************************************************************!*\
  !*** ./src/app/layout/workflow/diagram-view/diagram-nav/diagram-nav.component.scss ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".nav-container {\n  display: flex;\n  flex-direction: column;\n}\n.nav-container .search-box {\n  position: relative;\n  width: 85%;\n  height: 30px;\n}\n.nav-container .search-box div {\n  width: 100%;\n  display: flex;\n}\n.nav-container .search-box div > input {\n  width: 100%;\n  padding: 6px 12px;\n  text-indent: 20px;\n  border: 1px solid #707070;\n  border-radius: 2px;\n}\n.nav-container .search-box div > img {\n  position: absolute;\n  transform: rotate(270deg);\n  left: 10px;\n  top: 8px;\n}\n.nav-container .search-box > img {\n  position: absolute;\n  right: 10px;\n  top: 8px;\n}\n.nav-container .workflow-ls {\n  display: flex;\n  flex-direction: column;\n}\n.nav-container .workflow-ls .rows {\n  display: flex;\n  align-items: center;\n  color: #444444;\n  position: relative;\n  padding-bottom: 10px;\n  left: -10px;\n}\n.nav-container .workflow-ls .rows .min-max {\n  width: 19px;\n  height: 19px;\n  background-color: #cccccc;\n  border-radius: 50%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.nav-container .workflow-ls .rows .item-name {\n  overflow: hidden;\n}\n.nav-container .workflow-ls .rows .status {\n  background-color: #dfe2ee;\n  width: 11px;\n  height: 11px;\n  border-radius: 50%;\n}\n.nav-container .workflow-ls .rows .success {\n  background-color: #A5CF4D;\n}\n.nav-container .workflow-ls .rows .warning {\n  background-color: #FDB913;\n}\n.nav-container .workflow-ls .rows .failed {\n  background-color: #FD1313;\n}\n.nav-container .workflow-ls .rows .in-progress {\n  background-color: #35AFF8;\n}\n.nav-container .workflow-ls .db-data {\n  margin-left: 28px;\n  border-left: 2px dotted #666;\n  margin-top: -25px;\n  padding-top: 30px;\n}\n.nav-container .workflow-ls .ds-data {\n  margin-left: 28px;\n  margin-top: -25px;\n  padding-top: 30px;\n  border-left: 2px dotted #666;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hcHBsZS9wcm9qZWN0L2RleGNlbnRlci1kYXNoYm9hcmQvc3JjL2FwcC9sYXlvdXQvd29ya2Zsb3cvZGlhZ3JhbS12aWV3L2RpYWdyYW0tbmF2L2RpYWdyYW0tbmF2LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9sYXlvdXQvd29ya2Zsb3cvZGlhZ3JhbS12aWV3L2RpYWdyYW0tbmF2L2RpYWdyYW0tbmF2LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0FDQ0o7QURBSTtFQUNJLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7QUNFUjtBRERRO0VBQ0ksV0FBQTtFQUNBLGFBQUE7QUNHWjtBREZZO0VBQ0ksV0FBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0FDSWhCO0FERlk7RUFDSSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EsVUFBQTtFQUNBLFFBQUE7QUNJaEI7QUREUTtFQUNJLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFFBQUE7QUNHWjtBREFJO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0FDRVI7QUREUTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLG9CQUFBO0VBQ0EsV0FBQTtBQ0daO0FERlk7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQ0loQjtBREZZO0VBQ0ksZ0JBQUE7QUNJaEI7QURGWTtFQUNJLHlCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQ0loQjtBREZZO0VBQ0kseUJBQUE7QUNJaEI7QURGWTtFQUNJLHlCQUFBO0FDSWhCO0FERlk7RUFDSSx5QkFBQTtBQ0loQjtBREZZO0VBQ0kseUJBQUE7QUNJaEI7QUREUTtFQUNJLGlCQUFBO0VBQ0EsNEJBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0FDR1o7QUREUTtFQUNJLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLDRCQUFBO0FDR1oiLCJmaWxlIjoic3JjL2FwcC9sYXlvdXQvd29ya2Zsb3cvZGlhZ3JhbS12aWV3L2RpYWdyYW0tbmF2L2RpYWdyYW0tbmF2LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm5hdi1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAuc2VhcmNoLWJveCB7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgd2lkdGg6IDg1JTtcbiAgICAgICAgaGVpZ2h0OiAzMHB4O1xuICAgICAgICBkaXYge1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgJj5pbnB1dCB7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgcGFkZGluZzogNnB4IDEycHg7XG4gICAgICAgICAgICAgICAgdGV4dC1pbmRlbnQ6IDIwcHg7XG4gICAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgIzcwNzA3MDtcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAycHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAmPmltZyB7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDI3MGRlZyk7XG4gICAgICAgICAgICAgICAgbGVmdDogMTBweDtcbiAgICAgICAgICAgICAgICB0b3A6IDhweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAmPmltZyB7XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICByaWdodDogMTBweDtcbiAgICAgICAgICAgIHRvcDogOHB4O1xuICAgICAgICB9XG4gICAgfVxuICAgIC53b3JrZmxvdy1scyB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgIC5yb3dzIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgY29sb3I6ICM0NDQ0NDQ7XG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbiAgICAgICAgICAgIGxlZnQ6IC0xMHB4O1xuICAgICAgICAgICAgLm1pbi1tYXgge1xuICAgICAgICAgICAgICAgIHdpZHRoOiAxOXB4O1xuICAgICAgICAgICAgICAgIGhlaWdodDogMTlweDtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2NjY2NjO1xuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuaXRlbS1uYW1lIHtcbiAgICAgICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLnN0YXR1cyB7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2RmZTJlZTtcbiAgICAgICAgICAgICAgICB3aWR0aDogMTFweDtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDExcHg7XG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLnN1Y2Nlc3Mge1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNBNUNGNEQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAud2FybmluZyB7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0ZEQjkxMztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5mYWlsZWQge1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNGRDEzMTM7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuaW4tcHJvZ3Jlc3Mge1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMzNUFGRjg7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLmRiLWRhdGEge1xuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDI4cHg7XG4gICAgICAgICAgICBib3JkZXItbGVmdDogMnB4IGRvdHRlZCAjNjY2O1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogLTI1cHg7XG4gICAgICAgICAgICBwYWRkaW5nLXRvcDogMzBweDtcbiAgICAgICAgfVxuICAgICAgICAuZHMtZGF0YSB7XG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogMjhweDtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IC0yNXB4O1xuICAgICAgICAgICAgcGFkZGluZy10b3A6IDMwcHg7XG4gICAgICAgICAgICBib3JkZXItbGVmdDogMnB4IGRvdHRlZCAjNjY2O1xuICAgICAgICB9XG4gICAgfVxufSIsIi5uYXYtY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cbi5uYXYtY29udGFpbmVyIC5zZWFyY2gtYm94IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogODUlO1xuICBoZWlnaHQ6IDMwcHg7XG59XG4ubmF2LWNvbnRhaW5lciAuc2VhcmNoLWJveCBkaXYge1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbn1cbi5uYXYtY29udGFpbmVyIC5zZWFyY2gtYm94IGRpdiA+IGlucHV0IHtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDZweCAxMnB4O1xuICB0ZXh0LWluZGVudDogMjBweDtcbiAgYm9yZGVyOiAxcHggc29saWQgIzcwNzA3MDtcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xufVxuLm5hdi1jb250YWluZXIgLnNlYXJjaC1ib3ggZGl2ID4gaW1nIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0cmFuc2Zvcm06IHJvdGF0ZSgyNzBkZWcpO1xuICBsZWZ0OiAxMHB4O1xuICB0b3A6IDhweDtcbn1cbi5uYXYtY29udGFpbmVyIC5zZWFyY2gtYm94ID4gaW1nIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMTBweDtcbiAgdG9wOiA4cHg7XG59XG4ubmF2LWNvbnRhaW5lciAud29ya2Zsb3ctbHMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuLm5hdi1jb250YWluZXIgLndvcmtmbG93LWxzIC5yb3dzIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgY29sb3I6ICM0NDQ0NDQ7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgcGFkZGluZy1ib3R0b206IDEwcHg7XG4gIGxlZnQ6IC0xMHB4O1xufVxuLm5hdi1jb250YWluZXIgLndvcmtmbG93LWxzIC5yb3dzIC5taW4tbWF4IHtcbiAgd2lkdGg6IDE5cHg7XG4gIGhlaWdodDogMTlweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2NjY2NjYztcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5uYXYtY29udGFpbmVyIC53b3JrZmxvdy1scyAucm93cyAuaXRlbS1uYW1lIHtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbi5uYXYtY29udGFpbmVyIC53b3JrZmxvdy1scyAucm93cyAuc3RhdHVzIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2RmZTJlZTtcbiAgd2lkdGg6IDExcHg7XG4gIGhlaWdodDogMTFweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xufVxuLm5hdi1jb250YWluZXIgLndvcmtmbG93LWxzIC5yb3dzIC5zdWNjZXNzIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0E1Q0Y0RDtcbn1cbi5uYXYtY29udGFpbmVyIC53b3JrZmxvdy1scyAucm93cyAud2FybmluZyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGREI5MTM7XG59XG4ubmF2LWNvbnRhaW5lciAud29ya2Zsb3ctbHMgLnJvd3MgLmZhaWxlZCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGRDEzMTM7XG59XG4ubmF2LWNvbnRhaW5lciAud29ya2Zsb3ctbHMgLnJvd3MgLmluLXByb2dyZXNzIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzM1QUZGODtcbn1cbi5uYXYtY29udGFpbmVyIC53b3JrZmxvdy1scyAuZGItZGF0YSB7XG4gIG1hcmdpbi1sZWZ0OiAyOHB4O1xuICBib3JkZXItbGVmdDogMnB4IGRvdHRlZCAjNjY2O1xuICBtYXJnaW4tdG9wOiAtMjVweDtcbiAgcGFkZGluZy10b3A6IDMwcHg7XG59XG4ubmF2LWNvbnRhaW5lciAud29ya2Zsb3ctbHMgLmRzLWRhdGEge1xuICBtYXJnaW4tbGVmdDogMjhweDtcbiAgbWFyZ2luLXRvcDogLTI1cHg7XG4gIHBhZGRpbmctdG9wOiAzMHB4O1xuICBib3JkZXItbGVmdDogMnB4IGRvdHRlZCAjNjY2O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/layout/workflow/diagram-view/diagram-nav/diagram-nav.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/layout/workflow/diagram-view/diagram-nav/diagram-nav.component.ts ***!
  \***********************************************************************************/
/*! exports provided: DiagramNavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DiagramNavComponent", function() { return DiagramNavComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let DiagramNavComponent = class DiagramNavComponent {
    constructor() { }
    ngOnInit() {
        this.connectionsData = [
            {
                name: 'Session1',
                status: 'in-progress',
                data: [
                    {
                        name: 'TRANSLATE_PREPROCESSING',
                        status: 'in-progress',
                        data: [
                            {
                                name: 'GetInfo',
                                status: 'in-progress',
                            },
                            {
                                name: 'SetSessionStatusYCS',
                                status: 'in-progress',
                            },
                            {
                                name: 'TranslatePreprocessing_PrepareFilesYCS',
                                status: 'in-progress',
                            },
                            {
                                name: 'CadFileInfoYCS',
                                status: 'in-progress',
                            },
                            {
                                name: 'TranslatePreprocessing_DT_PS_YCS',
                                status: 'warning',
                            },
                            {
                                name: 'TranslatePreprocessing_PrepareJobsYCS',
                                status: 'in-progress',
                            },
                            {
                                name: 'ApprovalYCS',
                                status: 'in-progress',
                            },
                            {
                                name: 'QueueJobsYCS',
                                status: 'success',
                            },
                            {
                                name: 'QueueForApprovalYCS',
                                status: 'failed',
                            },
                            {
                                name: 'OutputCondition',
                                status: 'in-progress',
                            },
                        ]
                    },
                    {
                        name: 'TRANSLATE_US_NX10_TO_GENERIC...',
                        status: 'in-progress',
                        data: [
                            {
                                name: 'GetInfo',
                                status: 'in-progress',
                            },
                            {
                                name: 'SetRecipientSubsessionStatusYCS',
                                status: 'in-progress',
                            },
                            {
                                name: 'SetSessionStatusYCS',
                                status: 'in-progress',
                            },
                            {
                                name: 'WorkflowDispatcherYCS',
                                status: 'in-progress',
                            },
                            {
                                name: 'WorkflowDispatcherYCS',
                                status: 'in-progress',
                            },
                            {
                                name: 'WorkflowDispatcherYCS',
                                status: 'in-progress',
                            },
                            {
                                name: 'SetVisibilityYCS',
                                status: 'in-progress',
                            },
                            {
                                name: 'TranslateProcessingFinishYCS',
                                status: 'in-progress',
                            },
                            {
                                name: 'ApprovalYCS',
                                status: 'in-progress',
                            },
                            {
                                name: 'QueueForApprovalYCS',
                                status: 'in-progress',
                            },
                            {
                                name: 'QueueJobsYCS',
                                status: 'in-progress',
                            },
                            {
                                name: 'OutputCondition',
                                status: 'in-progress',
                            }
                        ]
                    },
                    {
                        name: 'Ug_nx10_cadiq',
                        status: 'in-progress',
                        data: [
                            {
                                name: 'GetInfo',
                                status: 'in-progress',
                            },
                            {
                                name: 'CadProcessYCS_ug_nx10_cadiq',
                                status: 'in-progress',
                            },
                            {
                                name: 'OutputCondition',
                                status: 'in-progress',
                            },
                        ]
                    },
                    {
                        name: 'Ug_nx10_cadiq',
                        status: 'in-progress',
                        data: [
                            {
                                name: 'GetInfo',
                                status: 'in-progress',
                            },
                            {
                                name: 'CadProcessYCS_ug_nx10_to_step',
                                status: 'in-progress',
                            },
                            {
                                name: 'OutputCondition',
                                status: 'in-progress',
                            }
                        ]
                    },
                    {
                        name: 'Step_cadiq',
                        status: 'in-progress',
                        data: [
                            {
                                name: 'GetInfo',
                                status: 'in-progress',
                            },
                            {
                                name: 'CadProcessYCS_step_cadiq',
                                status: 'in-progress',
                            },
                            {
                                name: 'OutputCondition',
                                status: 'in-progress',
                            }
                        ]
                    },
                    {
                        name: 'TRANSLATE_POSTPROCESSING',
                        status: 'in-progress',
                        data: [
                            {
                                name: 'GetInfo',
                                status: 'in-progress',
                            },
                            {
                                name: 'SetRecipientSubsessionStatusYCS',
                                status: 'in-progress',
                            },
                            {
                                name: 'SetVisibilityYCS',
                                status: 'in-progress',
                            },
                            {
                                name: 'CompressYCS',
                                status: 'in-progress',
                            },
                            {
                                name: 'DeliverResultsYCS',
                                status: 'in-progress',
                            },
                            {
                                name: 'SetSessionStatusYCS',
                                status: 'in-progress',
                            },
                            {
                                name: 'OutputCondition',
                                status: 'in-progress',
                            },
                        ]
                    },
                ]
            }
        ];
    }
};
DiagramNavComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-diagram-nav',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./diagram-nav.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/workflow/diagram-view/diagram-nav/diagram-nav.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./diagram-nav.component.scss */ "./src/app/layout/workflow/diagram-view/diagram-nav/diagram-nav.component.scss")).default]
    })
], DiagramNavComponent);



/***/ }),

/***/ "./src/app/layout/workflow/diagram-view/diagram-view.component.scss":
/*!**************************************************************************!*\
  !*** ./src/app/layout/workflow/diagram-view/diagram-view.component.scss ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".diagram-container {\n  display: flex;\n}\n.diagram-container .nav {\n  width: 334px;\n  height: auto;\n}\n.diagram-container .nav .nav-container {\n  width: 100%;\n}\n.diagram-container .nav .nav-container .nav-session {\n  display: flex;\n  justify-content: space-between;\n}\n.diagram-container .content {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hcHBsZS9wcm9qZWN0L2RleGNlbnRlci1kYXNoYm9hcmQvc3JjL2FwcC9sYXlvdXQvd29ya2Zsb3cvZGlhZ3JhbS12aWV3L2RpYWdyYW0tdmlldy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbGF5b3V0L3dvcmtmbG93L2RpYWdyYW0tdmlldy9kaWFncmFtLXZpZXcuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFBO0FDQ0o7QURBSTtFQUNJLFlBQUE7RUFDQSxZQUFBO0FDRVI7QUREUTtFQUNJLFdBQUE7QUNHWjtBREZZO0VBQ0ksYUFBQTtFQUNBLDhCQUFBO0FDSWhCO0FEQUk7RUFDSSxXQUFBO0FDRVIiLCJmaWxlIjoic3JjL2FwcC9sYXlvdXQvd29ya2Zsb3cvZGlhZ3JhbS12aWV3L2RpYWdyYW0tdmlldy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5kaWFncmFtLWNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICAubmF2IHtcbiAgICAgICAgd2lkdGg6IDMzNHB4O1xuICAgICAgICBoZWlnaHQ6IGF1dG87XG4gICAgICAgIC5uYXYtY29udGFpbmVyIHtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgLm5hdi1zZXNzaW9uIHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICAuY29udGVudCB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgIH1cbn0iLCIuZGlhZ3JhbS1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xufVxuLmRpYWdyYW0tY29udGFpbmVyIC5uYXYge1xuICB3aWR0aDogMzM0cHg7XG4gIGhlaWdodDogYXV0bztcbn1cbi5kaWFncmFtLWNvbnRhaW5lciAubmF2IC5uYXYtY29udGFpbmVyIHtcbiAgd2lkdGg6IDEwMCU7XG59XG4uZGlhZ3JhbS1jb250YWluZXIgLm5hdiAubmF2LWNvbnRhaW5lciAubmF2LXNlc3Npb24ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG4uZGlhZ3JhbS1jb250YWluZXIgLmNvbnRlbnQge1xuICB3aWR0aDogMTAwJTtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/layout/workflow/diagram-view/diagram-view.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/layout/workflow/diagram-view/diagram-view.component.ts ***!
  \************************************************************************/
/*! exports provided: DiagramViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DiagramViewComponent", function() { return DiagramViewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let DiagramViewComponent = class DiagramViewComponent {
    constructor() { }
    ngOnInit() {
    }
};
DiagramViewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-diagram-view',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./diagram-view.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/workflow/diagram-view/diagram-view.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./diagram-view.component.scss */ "./src/app/layout/workflow/diagram-view/diagram-view.component.scss")).default]
    })
], DiagramViewComponent);



/***/ }),

/***/ "./src/app/layout/workflow/engine-info/engine-info.component.scss":
/*!************************************************************************!*\
  !*** ./src/app/layout/workflow/engine-info/engine-info.component.scss ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".engine-info {\n  width: 100%;\n  height: 62px;\n  border: 1px solid #CCCCCC;\n  border-radius: 7px;\n  display: flex;\n  align-items: center;\n}\n.engine-info .user-inputs {\n  display: flex;\n  align-items: center;\n}\n.engine-info .user-inputs input {\n  height: 30px;\n  width: 175px;\n  border: 1px solid #87898B;\n  border-radius: 3px;\n}\n.engine-info .user-inputs input[type=text],\n.engine-info .user-inputs input[type=email] {\n  padding-left: 10px;\n  color: #333333;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hcHBsZS9wcm9qZWN0L2RleGNlbnRlci1kYXNoYm9hcmQvc3JjL2FwcC9sYXlvdXQvd29ya2Zsb3cvZW5naW5lLWluZm8vZW5naW5lLWluZm8uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2xheW91dC93b3JrZmxvdy9lbmdpbmUtaW5mby9lbmdpbmUtaW5mby5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtBQ0NKO0FEQUk7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7QUNFUjtBRERRO0VBQ0ksWUFBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0FDR1o7QUREUTs7RUFFSSxrQkFBQTtFQUNBLGNBQUE7QUNHWiIsImZpbGUiOiJzcmMvYXBwL2xheW91dC93b3JrZmxvdy9lbmdpbmUtaW5mby9lbmdpbmUtaW5mby5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5lbmdpbmUtaW5mbyB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiA2MnB4O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNDQ0NDQ0M7XG4gICAgYm9yZGVyLXJhZGl1czogN3B4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAudXNlci1pbnB1dHMge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBpbnB1dCB7XG4gICAgICAgICAgICBoZWlnaHQ6IDMwcHg7XG4gICAgICAgICAgICB3aWR0aDogMTc1cHg7XG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjODc4OThCO1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogM3B4O1xuICAgICAgICB9XG4gICAgICAgIGlucHV0W3R5cGU9J3RleHQnXSxcbiAgICAgICAgaW5wdXRbdHlwZT0nZW1haWwnXSB7XG4gICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gICAgICAgICAgICBjb2xvcjogIzMzMzMzMztcbiAgICAgICAgfVxuICAgIH1cbn0iLCIuZW5naW5lLWluZm8ge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA2MnB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjQ0NDQ0NDO1xuICBib3JkZXItcmFkaXVzOiA3cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4uZW5naW5lLWluZm8gLnVzZXItaW5wdXRzIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5lbmdpbmUtaW5mbyAudXNlci1pbnB1dHMgaW5wdXQge1xuICBoZWlnaHQ6IDMwcHg7XG4gIHdpZHRoOiAxNzVweDtcbiAgYm9yZGVyOiAxcHggc29saWQgIzg3ODk4QjtcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xufVxuLmVuZ2luZS1pbmZvIC51c2VyLWlucHV0cyBpbnB1dFt0eXBlPXRleHRdLFxuLmVuZ2luZS1pbmZvIC51c2VyLWlucHV0cyBpbnB1dFt0eXBlPWVtYWlsXSB7XG4gIHBhZGRpbmctbGVmdDogMTBweDtcbiAgY29sb3I6ICMzMzMzMzM7XG59Il19 */");

/***/ }),

/***/ "./src/app/layout/workflow/engine-info/engine-info.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/layout/workflow/engine-info/engine-info.component.ts ***!
  \**********************************************************************/
/*! exports provided: EngineInfoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EngineInfoComponent", function() { return EngineInfoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let EngineInfoComponent = class EngineInfoComponent {
    constructor() { }
    ngOnInit() {
    }
};
EngineInfoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-engine-info',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./engine-info.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/workflow/engine-info/engine-info.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./engine-info.component.scss */ "./src/app/layout/workflow/engine-info/engine-info.component.scss")).default]
    })
], EngineInfoComponent);



/***/ }),

/***/ "./src/app/layout/workflow/tabular-view/tabular-nav/tabular-nav.component.scss":
/*!*************************************************************************************!*\
  !*** ./src/app/layout/workflow/tabular-view/tabular-nav/tabular-nav.component.scss ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".table-nav {\n  display: flex;\n  flex-direction: column;\n}\n.table-nav .container-details {\n  width: 313px;\n  height: 247px;\n  box-shadow: 0px 3px 6px #00000029;\n  border: 1px solid #cccccc;\n  border-radius: 4px;\n  display: flex;\n  flex-direction: column;\n}\n.table-nav .container-details .search {\n  height: 40px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  border-bottom: 1px solid #cccccc;\n}\n.table-nav .container-details .search .selection {\n  display: flex;\n  align-items: center;\n}\n.table-nav .container-details .search .selection input[type=checkbox] {\n  border-radius: 4px;\n  width: 16px;\n  height: 16px;\n}\n.table-nav .container-details .search .search-box {\n  width: 50%;\n  display: flex;\n  position: relative;\n}\n.table-nav .container-details .search .search-box > input {\n  width: 100%;\n  color: #cccccc;\n  border-radius: 4px;\n  border: 1px solid #cccccc;\n}\n.table-nav .container-details .search .search-box > img {\n  position: absolute;\n  left: 10px;\n  top: 6px;\n}\n.table-nav .container-details .list-main-container {\n  height: 155px;\n  overflow: overlay;\n}\n.table-nav .container-details .lists-container {\n  height: 30px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.table-nav .container-details .lists-container .sessions-ls {\n  display: flex;\n}\n.table-nav .container-details .lists-container .sessions-ls input[type=checkbox] {\n  border-radius: 4px;\n  width: 16px;\n  height: 16px;\n}\n.table-nav .container-details .buttons {\n  display: flex;\n  justify-content: center;\n}\n.selected {\n  background-color: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hcHBsZS9wcm9qZWN0L2RleGNlbnRlci1kYXNoYm9hcmQvc3JjL2FwcC9sYXlvdXQvd29ya2Zsb3cvdGFidWxhci12aWV3L3RhYnVsYXItbmF2L3RhYnVsYXItbmF2LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9sYXlvdXQvd29ya2Zsb3cvdGFidWxhci12aWV3L3RhYnVsYXItbmF2L3RhYnVsYXItbmF2LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0FDQ0Y7QURBRTtFQUNFLFlBQUE7RUFDQSxhQUFBO0VBQ0EsaUNBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0FDRUo7QURESTtFQUNFLFlBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtFQUNBLGdDQUFBO0FDR047QURGTTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtBQ0lSO0FESFE7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FDS1Y7QURGTTtFQUNFLFVBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7QUNJUjtBREhRO0VBQ0UsV0FBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0FDS1Y7QURIUTtFQUNFLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFFBQUE7QUNLVjtBRERJO0VBQ0UsYUFBQTtFQUNBLGlCQUFBO0FDR047QURESTtFQUNFLFlBQUE7RUFDQSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtBQ0dOO0FERk07RUFDRSxhQUFBO0FDSVI7QURIUTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUNLVjtBRERJO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0FDR047QURFQTtFQUNFLG1CQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9sYXlvdXQvd29ya2Zsb3cvdGFidWxhci12aWV3L3RhYnVsYXItbmF2L3RhYnVsYXItbmF2LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRhYmxlLW5hdiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIC5jb250YWluZXItZGV0YWlscyB7XG4gICAgd2lkdGg6IDMxM3B4O1xuICAgIGhlaWdodDogMjQ3cHg7XG4gICAgYm94LXNoYWRvdzogMHB4IDNweCA2cHggIzAwMDAwMDI5O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2NjY2M7XG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAuc2VhcmNoIHtcbiAgICAgIGhlaWdodDogNDBweDtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNjY2NjY2M7XG4gICAgICAuc2VsZWN0aW9uIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgaW5wdXRbdHlwZT0nY2hlY2tib3gnXSB7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgICAgICAgIHdpZHRoOiAxNnB4O1xuICAgICAgICAgIGhlaWdodDogMTZweDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgLnNlYXJjaC1ib3gge1xuICAgICAgICB3aWR0aDogNTAlO1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICYgPiBpbnB1dCB7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgY29sb3I6ICNjY2NjY2M7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2NjY2M7XG4gICAgICAgIH1cbiAgICAgICAgJiA+IGltZyB7XG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgIGxlZnQ6IDEwcHg7XG4gICAgICAgICAgdG9wOiA2cHg7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgLmxpc3QtbWFpbi1jb250YWluZXIge1xuICAgICAgaGVpZ2h0OiAxNTVweDtcbiAgICAgIG92ZXJmbG93OiBvdmVybGF5O1xuICAgIH1cbiAgICAubGlzdHMtY29udGFpbmVyIHtcbiAgICAgIGhlaWdodDogMzBweDtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgLnNlc3Npb25zLWxzIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgaW5wdXRbdHlwZT0nY2hlY2tib3gnXSB7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgICAgICAgIHdpZHRoOiAxNnB4O1xuICAgICAgICAgIGhlaWdodDogMTZweDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICAuYnV0dG9ucyB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgfVxuICB9XG59XG5cbi5zZWxlY3RlZCB7XG4gIGJhY2tncm91bmQtY29sb3I6IGJsdWUoJGNvbG9yOiAjMDAwMDAwKTtcbn1cbiIsIi50YWJsZS1uYXYge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuLnRhYmxlLW5hdiAuY29udGFpbmVyLWRldGFpbHMge1xuICB3aWR0aDogMzEzcHg7XG4gIGhlaWdodDogMjQ3cHg7XG4gIGJveC1zaGFkb3c6IDBweCAzcHggNnB4ICMwMDAwMDAyOTtcbiAgYm9yZGVyOiAxcHggc29saWQgI2NjY2NjYztcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuLnRhYmxlLW5hdiAuY29udGFpbmVyLWRldGFpbHMgLnNlYXJjaCB7XG4gIGhlaWdodDogNDBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2NjY2NjYztcbn1cbi50YWJsZS1uYXYgLmNvbnRhaW5lci1kZXRhaWxzIC5zZWFyY2ggLnNlbGVjdGlvbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4udGFibGUtbmF2IC5jb250YWluZXItZGV0YWlscyAuc2VhcmNoIC5zZWxlY3Rpb24gaW5wdXRbdHlwZT1jaGVja2JveF0ge1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIHdpZHRoOiAxNnB4O1xuICBoZWlnaHQ6IDE2cHg7XG59XG4udGFibGUtbmF2IC5jb250YWluZXItZGV0YWlscyAuc2VhcmNoIC5zZWFyY2gtYm94IHtcbiAgd2lkdGg6IDUwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLnRhYmxlLW5hdiAuY29udGFpbmVyLWRldGFpbHMgLnNlYXJjaCAuc2VhcmNoLWJveCA+IGlucHV0IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGNvbG9yOiAjY2NjY2NjO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNjY2NjY2M7XG59XG4udGFibGUtbmF2IC5jb250YWluZXItZGV0YWlscyAuc2VhcmNoIC5zZWFyY2gtYm94ID4gaW1nIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAxMHB4O1xuICB0b3A6IDZweDtcbn1cbi50YWJsZS1uYXYgLmNvbnRhaW5lci1kZXRhaWxzIC5saXN0LW1haW4tY29udGFpbmVyIHtcbiAgaGVpZ2h0OiAxNTVweDtcbiAgb3ZlcmZsb3c6IG92ZXJsYXk7XG59XG4udGFibGUtbmF2IC5jb250YWluZXItZGV0YWlscyAubGlzdHMtY29udGFpbmVyIHtcbiAgaGVpZ2h0OiAzMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4udGFibGUtbmF2IC5jb250YWluZXItZGV0YWlscyAubGlzdHMtY29udGFpbmVyIC5zZXNzaW9ucy1scyB7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG4udGFibGUtbmF2IC5jb250YWluZXItZGV0YWlscyAubGlzdHMtY29udGFpbmVyIC5zZXNzaW9ucy1scyBpbnB1dFt0eXBlPWNoZWNrYm94XSB7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgd2lkdGg6IDE2cHg7XG4gIGhlaWdodDogMTZweDtcbn1cbi50YWJsZS1uYXYgLmNvbnRhaW5lci1kZXRhaWxzIC5idXR0b25zIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5zZWxlY3RlZCB7XG4gIGJhY2tncm91bmQtY29sb3I6IDA7XG59Il19 */");

/***/ }),

/***/ "./src/app/layout/workflow/tabular-view/tabular-nav/tabular-nav.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/layout/workflow/tabular-view/tabular-nav/tabular-nav.component.ts ***!
  \***********************************************************************************/
/*! exports provided: TabularNavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabularNavComponent", function() { return TabularNavComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let TabularNavComponent = class TabularNavComponent {
    constructor() { }
    ngOnInit() {
        this.sessions = [
            { id: 1, sessionlist: 'Session 1', selected: false },
            { id: 2, sessionlist: 'Session 2', selected: false },
            { id: 3, sessionlist: 'Session 3', selected: false },
            { id: 4, sessionlist: 'Session 4', selected: false },
            { id: 5, sessionlist: 'Session 5', selected: false },
            { id: 6, sessionlist: 'Session 6', selected: false }
        ];
        this.workflow = [
            { id: 1, workflowlist: 'TRANSLATE_PREPROCESSING', selected: false },
            { id: 2, workflowlist: 'TRANSLATE_US_NX10_TO_GENE..', selected: false },
            { id: 3, workflowlist: 'Ug_nx10_cadiq', selected: false },
            { id: 4, workflowlist: 'Ug_nx10_to_step', selected: false },
            { id: 5, workflowlist: 'Step_cadiq', selected: false },
            { id: 6, workflowlist: 'TRANSLATE_POSTPROCESSING', selected: false }
        ];
        this.allSelected = false;
        this.allSelectedWf = false;
    }
    selectAll() {
        this.allSelected = !this.allSelected;
        for (const item of this.sessions) {
            if (this.allSelected) {
                item.selected = true;
            }
            else {
                item.selected = false;
            }
        }
    }
    selectAllWf() {
        this.allSelectedWf = !this.allSelectedWf;
        for (const item of this.workflow) {
            if (this.allSelectedWf) {
                item.selected = true;
            }
            else {
                item.selected = false;
            }
        }
    }
};
TabularNavComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-tabular-nav',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./tabular-nav.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/workflow/tabular-view/tabular-nav/tabular-nav.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./tabular-nav.component.scss */ "./src/app/layout/workflow/tabular-view/tabular-nav/tabular-nav.component.scss")).default]
    })
], TabularNavComponent);



/***/ }),

/***/ "./src/app/layout/workflow/tabular-view/tabular-task-info/tabular-task-info.component.scss":
/*!*************************************************************************************************!*\
  !*** ./src/app/layout/workflow/tabular-view/tabular-task-info/tabular-task-info.component.scss ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".task-info {\n  width: 100%;\n  height: 514px;\n  border: 1px solid #CCCCCC;\n  display: flex;\n}\n.task-info .info-nav {\n  display: flex;\n  flex-direction: column;\n  background-color: #F1F1F1;\n  border-right: 1px solid #CCCCCC;\n}\n.task-info .info-nav .container-details {\n  width: 275px;\n  height: 100%;\n  box-shadow: 0px 3px 6px #00000029;\n  border: 1px solid #CCCCCC;\n  display: flex;\n  flex-direction: column;\n}\n.task-info .info-nav .container-details .search {\n  height: 50px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-bottom: 1px solid #CCCCCC;\n}\n.task-info .info-nav .container-details .search .search-box {\n  width: 90%;\n  display: flex;\n  position: relative;\n}\n.task-info .info-nav .container-details .search .search-box > input {\n  width: 100%;\n  color: #CCCCCC;\n  border-radius: 4px;\n  border: 1px solid #CCCCCC;\n}\n.task-info .info-nav .container-details .search .search-box > img {\n  position: absolute;\n  left: 10px;\n  top: 6px;\n}\n.task-info .info-nav .container-details .selection {\n  display: flex;\n  align-items: center;\n}\n.task-info .info-nav .container-details .selection input[type=checkbox] {\n  border-radius: 4px;\n  width: 16px;\n  height: 16px;\n}\n.task-info .info-nav .container-details .list-main-container {\n  overflow: overlay;\n}\n.task-info .info-nav .container-details .lists-container {\n  height: 36px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.task-info .info-nav .container-details .lists-container .sessions-ls {\n  display: flex;\n}\n.task-info .info-nav .container-details .lists-container .sessions-ls input[type=checkbox] {\n  border-radius: 4px;\n  width: 16px;\n  height: 16px;\n}\n.task-info .information-container {\n  display: flex;\n  flex-direction: column;\n}\n.task-info .information-container .input-lable {\n  display: flex;\n  align-items: center;\n  margin-bottom: 20px;\n  color: #333333;\n}\n.task-info .information-container .input-lable .lable-name {\n  width: 115px;\n  text-align: left;\n}\n.task-info .information-container .input-lable input[type=text],\n.task-info .information-container .input-lable textarea {\n  width: 300px;\n  border: 1px solid #87898B;\n  border-radius: 3px;\n  background-color: white;\n  padding-left: 10px;\n  color: #333333;\n}\n.task-info .information-container .input-lable input[type=text] {\n  height: 30px;\n}\n.task-info .information-container .input-lable textarea {\n  height: 90px;\n  padding-top: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hcHBsZS9wcm9qZWN0L2RleGNlbnRlci1kYXNoYm9hcmQvc3JjL2FwcC9sYXlvdXQvd29ya2Zsb3cvdGFidWxhci12aWV3L3RhYnVsYXItdGFzay1pbmZvL3RhYnVsYXItdGFzay1pbmZvLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9sYXlvdXQvd29ya2Zsb3cvdGFidWxhci12aWV3L3RhYnVsYXItdGFzay1pbmZvL3RhYnVsYXItdGFzay1pbmZvLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksV0FBQTtFQUNBLGFBQUE7RUFDQSx5QkFBQTtFQUNBLGFBQUE7QUNDSjtBREFJO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0VBQ0EseUJBQUE7RUFDQSwrQkFBQTtBQ0VSO0FERFE7RUFDSSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGlDQUFBO0VBQ0EseUJBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7QUNHWjtBREZZO0VBQ0ksWUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsZ0NBQUE7QUNJaEI7QURIZ0I7RUFDSSxVQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0FDS3BCO0FESm9CO0VBQ0ksV0FBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0FDTXhCO0FESm9CO0VBQ0ksa0JBQUE7RUFDQSxVQUFBO0VBQ0EsUUFBQTtBQ014QjtBREZZO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0FDSWhCO0FESGdCO0VBQ0ksa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQ0twQjtBREZZO0VBQ0ksaUJBQUE7QUNJaEI7QURGWTtFQUNJLFlBQUE7RUFDQSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtBQ0loQjtBREhnQjtFQUNJLGFBQUE7QUNLcEI7QURKb0I7RUFDSSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FDTXhCO0FEQUk7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7QUNFUjtBRERRO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0FDR1o7QURGWTtFQUNJLFlBQUE7RUFDQSxnQkFBQTtBQ0loQjtBREZZOztFQUVJLFlBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7QUNJaEI7QURGWTtFQUNJLFlBQUE7QUNJaEI7QURGWTtFQUNJLFlBQUE7RUFDQSxnQkFBQTtBQ0loQiIsImZpbGUiOiJzcmMvYXBwL2xheW91dC93b3JrZmxvdy90YWJ1bGFyLXZpZXcvdGFidWxhci10YXNrLWluZm8vdGFidWxhci10YXNrLWluZm8uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGFzay1pbmZvIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDUxNHB4O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNDQ0NDQ0M7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICAuaW5mby1uYXYge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjFGMUYxO1xuICAgICAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjQ0NDQ0NDO1xuICAgICAgICAuY29udGFpbmVyLWRldGFpbHMge1xuICAgICAgICAgICAgd2lkdGg6IDI3NXB4O1xuICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgICAgYm94LXNoYWRvdzogMHB4IDNweCA2cHggIzAwMDAwMDI5O1xuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI0NDQ0NDQztcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgICAgLnNlYXJjaCB7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiA1MHB4O1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI0NDQ0NDQztcbiAgICAgICAgICAgICAgICAuc2VhcmNoLWJveCB7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiA5MCU7XG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgICAgICAgICAgJj5pbnB1dCB7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjQ0NDQ0NDO1xuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI0NDQ0NDQztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAmPmltZyB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZWZ0OiAxMHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgdG9wOiA2cHg7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuc2VsZWN0aW9uIHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgaW5wdXRbdHlwZT0nY2hlY2tib3gnXSB7XG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDE2cHg7XG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTZweDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAubGlzdC1tYWluLWNvbnRhaW5lciB7XG4gICAgICAgICAgICAgICAgb3ZlcmZsb3c6IG92ZXJsYXk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAubGlzdHMtY29udGFpbmVyIHtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDM2cHg7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAuc2Vzc2lvbnMtbHMge1xuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgICAgICBpbnB1dFt0eXBlPSdjaGVja2JveCddIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxNnB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxNnB4O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIC5pbmZvcm1hdGlvbi1jb250YWluZXIge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAuaW5wdXQtbGFibGUge1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICAgICAgICAgICAgY29sb3I6ICMzMzMzMzM7XG4gICAgICAgICAgICAubGFibGUtbmFtZSB7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDExNXB4O1xuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpbnB1dFt0eXBlPVwidGV4dFwiXSxcbiAgICAgICAgICAgIHRleHRhcmVhIHtcbiAgICAgICAgICAgICAgICB3aWR0aDogMzAwcHg7XG4gICAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgIzg3ODk4QjtcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAzcHg7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICAgICAgICAgICAgICAgIGNvbG9yOiAjMzMzMzMzO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaW5wdXRbdHlwZT1cInRleHRcIl0ge1xuICAgICAgICAgICAgICAgIGhlaWdodDogMzBweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRleHRhcmVhIHtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDkwcHg7XG4gICAgICAgICAgICAgICAgcGFkZGluZy10b3A6IDVweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn0iLCIudGFzay1pbmZvIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNTE0cHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNDQ0NDQ0M7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG4udGFzay1pbmZvIC5pbmZvLW5hdiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGJhY2tncm91bmQtY29sb3I6ICNGMUYxRjE7XG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNDQ0NDQ0M7XG59XG4udGFzay1pbmZvIC5pbmZvLW5hdiAuY29udGFpbmVyLWRldGFpbHMge1xuICB3aWR0aDogMjc1cHg7XG4gIGhlaWdodDogMTAwJTtcbiAgYm94LXNoYWRvdzogMHB4IDNweCA2cHggIzAwMDAwMDI5O1xuICBib3JkZXI6IDFweCBzb2xpZCAjQ0NDQ0NDO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuLnRhc2staW5mbyAuaW5mby1uYXYgLmNvbnRhaW5lci1kZXRhaWxzIC5zZWFyY2gge1xuICBoZWlnaHQ6IDUwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI0NDQ0NDQztcbn1cbi50YXNrLWluZm8gLmluZm8tbmF2IC5jb250YWluZXItZGV0YWlscyAuc2VhcmNoIC5zZWFyY2gtYm94IHtcbiAgd2lkdGg6IDkwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLnRhc2staW5mbyAuaW5mby1uYXYgLmNvbnRhaW5lci1kZXRhaWxzIC5zZWFyY2ggLnNlYXJjaC1ib3ggPiBpbnB1dCB7XG4gIHdpZHRoOiAxMDAlO1xuICBjb2xvcjogI0NDQ0NDQztcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjQ0NDQ0NDO1xufVxuLnRhc2staW5mbyAuaW5mby1uYXYgLmNvbnRhaW5lci1kZXRhaWxzIC5zZWFyY2ggLnNlYXJjaC1ib3ggPiBpbWcge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDEwcHg7XG4gIHRvcDogNnB4O1xufVxuLnRhc2staW5mbyAuaW5mby1uYXYgLmNvbnRhaW5lci1kZXRhaWxzIC5zZWxlY3Rpb24ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLnRhc2staW5mbyAuaW5mby1uYXYgLmNvbnRhaW5lci1kZXRhaWxzIC5zZWxlY3Rpb24gaW5wdXRbdHlwZT1jaGVja2JveF0ge1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIHdpZHRoOiAxNnB4O1xuICBoZWlnaHQ6IDE2cHg7XG59XG4udGFzay1pbmZvIC5pbmZvLW5hdiAuY29udGFpbmVyLWRldGFpbHMgLmxpc3QtbWFpbi1jb250YWluZXIge1xuICBvdmVyZmxvdzogb3ZlcmxheTtcbn1cbi50YXNrLWluZm8gLmluZm8tbmF2IC5jb250YWluZXItZGV0YWlscyAubGlzdHMtY29udGFpbmVyIHtcbiAgaGVpZ2h0OiAzNnB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4udGFzay1pbmZvIC5pbmZvLW5hdiAuY29udGFpbmVyLWRldGFpbHMgLmxpc3RzLWNvbnRhaW5lciAuc2Vzc2lvbnMtbHMge1xuICBkaXNwbGF5OiBmbGV4O1xufVxuLnRhc2staW5mbyAuaW5mby1uYXYgLmNvbnRhaW5lci1kZXRhaWxzIC5saXN0cy1jb250YWluZXIgLnNlc3Npb25zLWxzIGlucHV0W3R5cGU9Y2hlY2tib3hdIHtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICB3aWR0aDogMTZweDtcbiAgaGVpZ2h0OiAxNnB4O1xufVxuLnRhc2staW5mbyAuaW5mb3JtYXRpb24tY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cbi50YXNrLWluZm8gLmluZm9ybWF0aW9uLWNvbnRhaW5lciAuaW5wdXQtbGFibGUge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICBjb2xvcjogIzMzMzMzMztcbn1cbi50YXNrLWluZm8gLmluZm9ybWF0aW9uLWNvbnRhaW5lciAuaW5wdXQtbGFibGUgLmxhYmxlLW5hbWUge1xuICB3aWR0aDogMTE1cHg7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG59XG4udGFzay1pbmZvIC5pbmZvcm1hdGlvbi1jb250YWluZXIgLmlucHV0LWxhYmxlIGlucHV0W3R5cGU9dGV4dF0sXG4udGFzay1pbmZvIC5pbmZvcm1hdGlvbi1jb250YWluZXIgLmlucHV0LWxhYmxlIHRleHRhcmVhIHtcbiAgd2lkdGg6IDMwMHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjODc4OThCO1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gIGNvbG9yOiAjMzMzMzMzO1xufVxuLnRhc2staW5mbyAuaW5mb3JtYXRpb24tY29udGFpbmVyIC5pbnB1dC1sYWJsZSBpbnB1dFt0eXBlPXRleHRdIHtcbiAgaGVpZ2h0OiAzMHB4O1xufVxuLnRhc2staW5mbyAuaW5mb3JtYXRpb24tY29udGFpbmVyIC5pbnB1dC1sYWJsZSB0ZXh0YXJlYSB7XG4gIGhlaWdodDogOTBweDtcbiAgcGFkZGluZy10b3A6IDVweDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/layout/workflow/tabular-view/tabular-task-info/tabular-task-info.component.ts":
/*!***********************************************************************************************!*\
  !*** ./src/app/layout/workflow/tabular-view/tabular-task-info/tabular-task-info.component.ts ***!
  \***********************************************************************************************/
/*! exports provided: TabularTaskInfoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabularTaskInfoComponent", function() { return TabularTaskInfoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let TabularTaskInfoComponent = class TabularTaskInfoComponent {
    constructor() { }
    ngOnInit() {
        this.taskinfo = [
            { id: 1, infolist: 'GetInfo', selected: false },
            { id: 2, infolist: 'SetSessionStatusYCS', selected: false },
            { id: 3, infolist: 'TranslatePreprocessing_Pre...', selected: false },
            { id: 4, infolist: 'Add file to database1', selected: false },
            { id: 5, infolist: 'CadFileInfoYCS', selected: false },
            { id: 6, infolist: 'TranslatePreprocessing_DT....', selected: false },
            { id: 7, infolist: 'TranslatePreprocessing_Pre...', selected: false },
            { id: 8, infolist: 'ApprovalYCS', selected: false },
            { id: 9, infolist: 'QueueJobsYCS', selected: false },
            { id: 10, infolist: 'OutputCondition', selected: false },
        ];
        this.allSelected = false;
    }
    selectAll() {
        this.allSelected = !this.allSelected;
        for (const item of this.taskinfo) {
            if (this.allSelected) {
                item.selected = true;
            }
            else {
                item.selected = false;
            }
        }
    }
};
TabularTaskInfoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-tabular-task-info',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./tabular-task-info.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/workflow/tabular-view/tabular-task-info/tabular-task-info.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./tabular-task-info.component.scss */ "./src/app/layout/workflow/tabular-view/tabular-task-info/tabular-task-info.component.scss")).default]
    })
], TabularTaskInfoComponent);



/***/ }),

/***/ "./src/app/layout/workflow/tabular-view/tabular-view.component.scss":
/*!**************************************************************************!*\
  !*** ./src/app/layout/workflow/tabular-view/tabular-view.component.scss ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".tabular-container {\n  display: flex;\n}\n.tabular-container .nav {\n  width: 334px;\n  height: auto;\n}\n.tabular-container .nav .nav-container {\n  width: 100%;\n}\n.tabular-container .content {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hcHBsZS9wcm9qZWN0L2RleGNlbnRlci1kYXNoYm9hcmQvc3JjL2FwcC9sYXlvdXQvd29ya2Zsb3cvdGFidWxhci12aWV3L3RhYnVsYXItdmlldy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbGF5b3V0L3dvcmtmbG93L3RhYnVsYXItdmlldy90YWJ1bGFyLXZpZXcuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFBO0FDQ0o7QURBSTtFQUNJLFlBQUE7RUFDQSxZQUFBO0FDRVI7QUREUTtFQUNJLFdBQUE7QUNHWjtBREFJO0VBQ0ksV0FBQTtBQ0VSIiwiZmlsZSI6InNyYy9hcHAvbGF5b3V0L3dvcmtmbG93L3RhYnVsYXItdmlldy90YWJ1bGFyLXZpZXcuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGFidWxhci1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgLm5hdiB7XG4gICAgICAgIHdpZHRoOiAzMzRweDtcbiAgICAgICAgaGVpZ2h0OiBhdXRvO1xuICAgICAgICAubmF2LWNvbnRhaW5lciB7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAuY29udGVudCB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgIH1cbn0iLCIudGFidWxhci1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xufVxuLnRhYnVsYXItY29udGFpbmVyIC5uYXYge1xuICB3aWR0aDogMzM0cHg7XG4gIGhlaWdodDogYXV0bztcbn1cbi50YWJ1bGFyLWNvbnRhaW5lciAubmF2IC5uYXYtY29udGFpbmVyIHtcbiAgd2lkdGg6IDEwMCU7XG59XG4udGFidWxhci1jb250YWluZXIgLmNvbnRlbnQge1xuICB3aWR0aDogMTAwJTtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/layout/workflow/tabular-view/tabular-view.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/layout/workflow/tabular-view/tabular-view.component.ts ***!
  \************************************************************************/
/*! exports provided: TabularViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabularViewComponent", function() { return TabularViewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let TabularViewComponent = class TabularViewComponent {
    constructor() { }
    ngOnInit() {
    }
};
TabularViewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-tabular-view',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./tabular-view.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/workflow/tabular-view/tabular-view.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./tabular-view.component.scss */ "./src/app/layout/workflow/tabular-view/tabular-view.component.scss")).default]
    })
], TabularViewComponent);



/***/ }),

/***/ "./src/app/layout/workflow/workflow-modal/workflow-modal.component.scss":
/*!******************************************************************************!*\
  !*** ./src/app/layout/workflow/workflow-modal/workflow-modal.component.scss ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".modal {\n  width: 100%;\n  height: 563px;\n  display: flex;\n  flex-direction: column;\n}\n.modal .modal-header {\n  width: 100%;\n  height: 50px;\n  background-color: #dfe2ee;\n  border-radius: 0px 4px 0px 0px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  letter-spacing: 0.48px;\n  color: #121111;\n}\n.modal .modal-content {\n  display: flex;\n}\n.modal .modal-content .content-left {\n  width: 15%;\n}\n.modal .modal-content .content-left .workflow-ls {\n  display: flex;\n  flex-direction: column;\n}\n.modal .modal-content .content-left .workflow-ls .rows {\n  display: flex;\n  align-items: center;\n}\n.modal .modal-content .content-left .workflow-ls .rows .min-max {\n  width: 19px;\n  height: 19px;\n  background-color: #cccccc;\n  border-radius: 50%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.modal .modal-content .content-left .workflow-ls .rows .dash {\n  color: #707070;\n}\n.modal .modal-content .content-left .workflow-ls .rows .status {\n  background-color: #dfe2ee;\n  width: 11px;\n  height: 11px;\n  border-radius: 50%;\n}\n.modal .modal-content .content-left .expand {\n  position: relative;\n}\n.modal .modal-content .content-left .expand span {\n  color: #707070;\n  position: absolute;\n  transform: rotate(90deg);\n  left: 21px;\n}\n.modal .modal-content .content-right {\n  display: flex;\n  flex-direction: column;\n}\n.modal .modal-content .content-right .process-info {\n  display: flex;\n}\n::ng-deep.cdk-overlay-pane {\n  max-width: 93vw !important;\n}\n::ng-deep.cdk-global-scrollblock {\n  overflow: auto !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hcHBsZS9wcm9qZWN0L2RleGNlbnRlci1kYXNoYm9hcmQvc3JjL2FwcC9sYXlvdXQvd29ya2Zsb3cvd29ya2Zsb3ctbW9kYWwvd29ya2Zsb3ctbW9kYWwuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2xheW91dC93b3JrZmxvdy93b3JrZmxvdy1tb2RhbC93b3JrZmxvdy1tb2RhbC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQUE7RUFDQSxhQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0FDQ0o7QURBSTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7RUFDQSw4QkFBQTtFQUNBLGFBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7RUFDQSxjQUFBO0FDRVI7QURBSTtFQUNJLGFBQUE7QUNFUjtBRERRO0VBQ0ksVUFBQTtBQ0daO0FERlk7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7QUNJaEI7QURIZ0I7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7QUNLcEI7QURKb0I7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQ014QjtBREpvQjtFQUNJLGNBQUE7QUNNeEI7QURKb0I7RUFDSSx5QkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUNNeEI7QURGWTtFQUNJLGtCQUFBO0FDSWhCO0FESGdCO0VBQ0ksY0FBQTtFQUNBLGtCQUFBO0VBQ0Esd0JBQUE7RUFDQSxVQUFBO0FDS3BCO0FEQVE7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7QUNFWjtBRERZO0VBQ0ksYUFBQTtBQ0doQjtBREdBO0VBQ0ksMEJBQUE7QUNBSjtBREdBO0VBQ0kseUJBQUE7QUNBSiIsImZpbGUiOiJzcmMvYXBwL2xheW91dC93b3JrZmxvdy93b3JrZmxvdy1tb2RhbC93b3JrZmxvdy1tb2RhbC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tb2RhbCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiA1NjNweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgLm1vZGFsLWhlYWRlciB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBoZWlnaHQ6IDUwcHg7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNkZmUyZWU7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDBweCA0cHggMHB4IDBweDtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBsZXR0ZXItc3BhY2luZzogMC40OHB4O1xuICAgICAgICBjb2xvcjogIzEyMTExMTtcbiAgICB9XG4gICAgLm1vZGFsLWNvbnRlbnQge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAuY29udGVudC1sZWZ0IHtcbiAgICAgICAgICAgIHdpZHRoOiAxNSU7XG4gICAgICAgICAgICAud29ya2Zsb3ctbHMge1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICAgICAgICAucm93cyB7XG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgICAgIC5taW4tbWF4IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxOXB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxOXB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2NjY2NjYztcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLmRhc2gge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICM3MDcwNzA7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLnN0YXR1cyB7XG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGZlMmVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDExcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDExcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuZXhwYW5kIHtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICAgICAgc3BhbiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjNzA3MDcwO1xuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcbiAgICAgICAgICAgICAgICAgICAgbGVmdDogMjFweDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLnZlcnRpY2xlLWxpbmUge31cbiAgICAgICAgLmNvbnRlbnQtcmlnaHQge1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgICAucHJvY2Vzcy1pbmZvIHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuXG46Om5nLWRlZXAuY2RrLW92ZXJsYXktcGFuZSB7XG4gICAgbWF4LXdpZHRoOiA5M3Z3ICFpbXBvcnRhbnQ7XG59XG5cbjo6bmctZGVlcC5jZGstZ2xvYmFsLXNjcm9sbGJsb2NrIHtcbiAgICBvdmVyZmxvdzogYXV0byAhaW1wb3J0YW50O1xufSIsIi5tb2RhbCB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDU2M3B4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuLm1vZGFsIC5tb2RhbC1oZWFkZXIge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA1MHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGZlMmVlO1xuICBib3JkZXItcmFkaXVzOiAwcHggNHB4IDBweCAwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuNDhweDtcbiAgY29sb3I6ICMxMjExMTE7XG59XG4ubW9kYWwgLm1vZGFsLWNvbnRlbnQge1xuICBkaXNwbGF5OiBmbGV4O1xufVxuLm1vZGFsIC5tb2RhbC1jb250ZW50IC5jb250ZW50LWxlZnQge1xuICB3aWR0aDogMTUlO1xufVxuLm1vZGFsIC5tb2RhbC1jb250ZW50IC5jb250ZW50LWxlZnQgLndvcmtmbG93LWxzIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cbi5tb2RhbCAubW9kYWwtY29udGVudCAuY29udGVudC1sZWZ0IC53b3JrZmxvdy1scyAucm93cyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4ubW9kYWwgLm1vZGFsLWNvbnRlbnQgLmNvbnRlbnQtbGVmdCAud29ya2Zsb3ctbHMgLnJvd3MgLm1pbi1tYXgge1xuICB3aWR0aDogMTlweDtcbiAgaGVpZ2h0OiAxOXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2NjY2NjO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLm1vZGFsIC5tb2RhbC1jb250ZW50IC5jb250ZW50LWxlZnQgLndvcmtmbG93LWxzIC5yb3dzIC5kYXNoIHtcbiAgY29sb3I6ICM3MDcwNzA7XG59XG4ubW9kYWwgLm1vZGFsLWNvbnRlbnQgLmNvbnRlbnQtbGVmdCAud29ya2Zsb3ctbHMgLnJvd3MgLnN0YXR1cyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNkZmUyZWU7XG4gIHdpZHRoOiAxMXB4O1xuICBoZWlnaHQ6IDExcHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbn1cbi5tb2RhbCAubW9kYWwtY29udGVudCAuY29udGVudC1sZWZ0IC5leHBhbmQge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4ubW9kYWwgLm1vZGFsLWNvbnRlbnQgLmNvbnRlbnQtbGVmdCAuZXhwYW5kIHNwYW4ge1xuICBjb2xvcjogIzcwNzA3MDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XG4gIGxlZnQ6IDIxcHg7XG59XG4ubW9kYWwgLm1vZGFsLWNvbnRlbnQgLmNvbnRlbnQtcmlnaHQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuLm1vZGFsIC5tb2RhbC1jb250ZW50IC5jb250ZW50LXJpZ2h0IC5wcm9jZXNzLWluZm8ge1xuICBkaXNwbGF5OiBmbGV4O1xufVxuXG46Om5nLWRlZXAuY2RrLW92ZXJsYXktcGFuZSB7XG4gIG1heC13aWR0aDogOTN2dyAhaW1wb3J0YW50O1xufVxuXG46Om5nLWRlZXAuY2RrLWdsb2JhbC1zY3JvbGxibG9jayB7XG4gIG92ZXJmbG93OiBhdXRvICFpbXBvcnRhbnQ7XG59Il19 */");

/***/ }),

/***/ "./src/app/layout/workflow/workflow-modal/workflow-modal.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/layout/workflow/workflow-modal/workflow-modal.component.ts ***!
  \****************************************************************************/
/*! exports provided: WorkflowModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorkflowModalComponent", function() { return WorkflowModalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm2015/dialog.js");




let WorkflowModalComponent = class WorkflowModalComponent {
    constructor(dialog, dialogRef, data) {
        this.dialog = dialog;
        this.dialogRef = dialogRef;
        this.data = data;
    }
    ngOnInit() {
        this.processInfo = [
            { id: 1,
                service: '< 0.01 Commons Daemon Service Runner',
                time: '36560 11:34:45 AM 10/01/2020',
                software: 'Apache Software For..',
                location: 'C:\dexcenter12308mysql\wildfly\bin\services\amd64\\wildfly-services.exe' },
            { id: 2,
                service: '< 0.01 Commons Daemon Service Runner',
                time: '36560 11:34:45 AM 10/01/2020',
                software: 'Apache Software For..',
                location: 'C:\dexcenter12308mysql\wildfly\bin\services\amd64\\wildfly-services.exe' },
            { id: 3,
                service: '< 0.01 Commons Daemon Service Runner',
                time: '36560 11:34:45 AM 10/01/2020',
                software: 'Apache Software For..',
                location: 'C:\dexcenter12308mysql\wildfly\bin\services\amd64\\wildfly-services.exe' },
            { id: 4,
                service: '< 0.01 Commons Daemon Service Runner',
                time: '36560 11:34:45 AM 10/01/2020',
                software: 'Apache Software For..',
                location: 'C:\dexcenter12308mysql\wildfly\bin\services\amd64\\wildfly-services.exe' },
        ];
    }
    closeModal(data) {
        this.dialogRef.close(data);
    }
};
WorkflowModalComponent.ctorParameters = () => [
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"] },
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"],] }] }
];
WorkflowModalComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-workflow-modal',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./workflow-modal.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/workflow/workflow-modal/workflow-modal.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./workflow-modal.component.scss */ "./src/app/layout/workflow/workflow-modal/workflow-modal.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]))
], WorkflowModalComponent);



/***/ }),

/***/ "./src/app/layout/workflow/workflow.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/layout/workflow/workflow.component.scss ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".selected {\n  border: 1px solid #00a1d8;\n  background-color: #00a1d8;\n  color: #fff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hcHBsZS9wcm9qZWN0L2RleGNlbnRlci1kYXNoYm9hcmQvc3JjL2FwcC9sYXlvdXQvd29ya2Zsb3cvd29ya2Zsb3cuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2xheW91dC93b3JrZmxvdy93b3JrZmxvdy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHlCQUFBO0VBQ0EseUJBQUE7RUFDQSxXQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9sYXlvdXQvd29ya2Zsb3cvd29ya2Zsb3cuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2VsZWN0ZWQge1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICMwMGExZDg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwYTFkODtcbiAgICBjb2xvcjogI2ZmZjtcbn0iLCIuc2VsZWN0ZWQge1xuICBib3JkZXI6IDFweCBzb2xpZCAjMDBhMWQ4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDBhMWQ4O1xuICBjb2xvcjogI2ZmZjtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/layout/workflow/workflow.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/layout/workflow/workflow.component.ts ***!
  \*******************************************************/
/*! exports provided: WorkflowComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorkflowComponent", function() { return WorkflowComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let WorkflowComponent = class WorkflowComponent {
    constructor() { }
    ngOnInit() {
        this.activatedTab = 'tabular';
    }
    changeNav(tab) {
        this.activatedTab = tab;
    }
};
WorkflowComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-workflow',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./workflow.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/workflow/workflow.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./workflow.component.scss */ "./src/app/layout/workflow/workflow.component.scss")).default]
    })
], WorkflowComponent);



/***/ }),

/***/ "./src/app/layout/workflow/workflow.module.ts":
/*!****************************************************!*\
  !*** ./src/app/layout/workflow/workflow.module.ts ***!
  \****************************************************/
/*! exports provided: WorkflowModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorkflowModule", function() { return WorkflowModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _workflow_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./workflow.component */ "./src/app/layout/workflow/workflow.component.ts");
/* harmony import */ var _engine_info_engine_info_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./engine-info/engine-info.component */ "./src/app/layout/workflow/engine-info/engine-info.component.ts");
/* harmony import */ var _diagram_view_diagram_view_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./diagram-view/diagram-view.component */ "./src/app/layout/workflow/diagram-view/diagram-view.component.ts");
/* harmony import */ var _tabular_view_tabular_view_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tabular-view/tabular-view.component */ "./src/app/layout/workflow/tabular-view/tabular-view.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _diagram_view_dia_task_info_dia_task_info_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./diagram-view/dia-task-info/dia-task-info.component */ "./src/app/layout/workflow/diagram-view/dia-task-info/dia-task-info.component.ts");
/* harmony import */ var _tabular_view_tabular_task_info_tabular_task_info_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./tabular-view/tabular-task-info/tabular-task-info.component */ "./src/app/layout/workflow/tabular-view/tabular-task-info/tabular-task-info.component.ts");
/* harmony import */ var _diagram_view_diagram_nav_diagram_nav_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./diagram-view/diagram-nav/diagram-nav.component */ "./src/app/layout/workflow/diagram-view/diagram-nav/diagram-nav.component.ts");
/* harmony import */ var _tabular_view_tabular_nav_tabular_nav_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./tabular-view/tabular-nav/tabular-nav.component */ "./src/app/layout/workflow/tabular-view/tabular-nav/tabular-nav.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _workflow_modal_workflow_modal_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./workflow-modal/workflow-modal.component */ "./src/app/layout/workflow/workflow-modal/workflow-modal.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");















const routes = [
    { path: '', component: _workflow_component__WEBPACK_IMPORTED_MODULE_3__["WorkflowComponent"], },
    { path: '**', pathMatch: 'full', redirectTo: '' }
];
let WorkflowModule = class WorkflowModule {
};
WorkflowModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _workflow_component__WEBPACK_IMPORTED_MODULE_3__["WorkflowComponent"],
            _engine_info_engine_info_component__WEBPACK_IMPORTED_MODULE_4__["EngineInfoComponent"],
            _diagram_view_diagram_view_component__WEBPACK_IMPORTED_MODULE_5__["DiagramViewComponent"],
            _tabular_view_tabular_view_component__WEBPACK_IMPORTED_MODULE_6__["TabularViewComponent"],
            _diagram_view_dia_task_info_dia_task_info_component__WEBPACK_IMPORTED_MODULE_8__["DiaTaskInfoComponent"],
            _tabular_view_tabular_task_info_tabular_task_info_component__WEBPACK_IMPORTED_MODULE_9__["TabularTaskInfoComponent"],
            _diagram_view_diagram_nav_diagram_nav_component__WEBPACK_IMPORTED_MODULE_10__["DiagramNavComponent"],
            _tabular_view_tabular_nav_tabular_nav_component__WEBPACK_IMPORTED_MODULE_11__["TabularNavComponent"],
            _workflow_modal_workflow_modal_component__WEBPACK_IMPORTED_MODULE_13__["WorkflowModalComponent"]
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterModule"].forChild(routes),
            _angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormsModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatDialogModule"]
        ],
        providers: [
            { provide: _angular_material__WEBPACK_IMPORTED_MODULE_14__["MAT_DIALOG_DATA"], useValue: {} },
            { provide: _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatDialogRef"], useValue: {} }
        ],
        entryComponents: [_workflow_modal_workflow_modal_component__WEBPACK_IMPORTED_MODULE_13__["WorkflowModalComponent"]]
    })
], WorkflowModule);



/***/ })

}]);
//# sourceMappingURL=workflow-workflow-module-es2015.js.map