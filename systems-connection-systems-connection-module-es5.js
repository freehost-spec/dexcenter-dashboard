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


    __webpack_exports__["default"] = "<div class=\"box-list-container mt-20\">\n  <div class=\"dxs-container\" (click)=\"dxsInformation()\">\n    <div class=\" dxs-icons pt-10 pl-15 pr-2 \">\n      <img src=\" https://freehost-spec.github.io/dexcenter-dashboard/assets/images/icons/icon-dxs.svg \" alt=\" \"\n        class=\"icons-5xl \">\n      <img src=\" https://freehost-spec.github.io/dexcenter-dashboard/assets/images/icons/ellipse-w.svg \" alt=\" \"\n        class=\"icons-xs \">\n    </div>\n    <div class=\"dxs-icons pt-5 pl-15 pr-5 \">\n      <div class=\"font-l font-white \">DXS</div>\n      <img src=\" https://freehost-spec.github.io/dexcenter-dashboard/assets/images/icons/icon-on-green.svg \" alt=\" \"\n        class=\"icons-l \">\n    </div>\n  </div>\n  <div class=\"box-list \">\n    <div class=\"box-container ml-20 \">\n      <ng-container *ngFor=\"let item of dbs \">\n        <app-box [data]=\"item \"></app-box>\n      </ng-container>\n      <div class=\"divider ml-10 mr-20 \"></div>\n    </div>\n\n    <div class=\"box-item \">\n      <ng-container *ngFor=\"let item of dts \">\n        <app-box [data]=\"item \"></app-box>\n      </ng-container>\n    </div>\n  </div>\n</div>\n\n<div *ngIf=\"dxsInfo\">\n  <div class=\"boxInfo font-m\">\n    <div class=\"triangle-right\"></div>\n    <div class=\"session-item\">\n      <div class=\"item-name pl-20 pr-20 mt-10\">\n        <div>Usage summary</div>\n        <div class=\"item-data font-xl\" (click)=\"dxsmoreInformation()\">></div>\n      </div>\n      <div class=\"item-name pl-20 pr-20\">\n        <div>Queued For Processing</div>\n        <div class=\"item-data\">20</div>\n      </div>\n      <div class=\"item-name pl-20 pr-20\">\n        <div>Sessions Processing</div>\n        <div class=\"item-data\">20</div>\n      </div>\n      <div class=\"item-name pl-20 pr-20\">\n        <div>Sessions Complete</div>\n        <div class=\"item-data\">20</div>\n      </div>\n      <div class=\"item-name pl-20 pr-20\">\n        <div>Connectivity Speed to DS</div>\n        <div class=\"item-data\">2.5mb</div>\n      </div>\n      <div class=\"item-name pl-20 pr-20\">\n        <div>Connectivity Speed to DB</div>\n        <div class=\"item-data\">2.5mb</div>\n      </div>\n    </div>\n  </div>\n</div>\n\n\n<div *ngIf=\"dxsmoreInfo && dxsInfo\">\n  <div class=\"boxmoreInfo font-m\">\n    <div class=\"triangle-right\"></div>\n    <div class=\"session-item\">\n      <div class=\"item-name pl-20 pr-20 mt-10 fw-500\">\n        <div>Usage summary</div>\n        <div class=\"item-data font-m\">10/1/2020 <span class=\"font-xl ml-5 d-arrow\">&#8964;</span></div>\n      </div>\n      <div class=\"item-name pl-20 pr-20 mt-10\">\n        <div>MBs Exchanged:</div>\n        <div class=\"item-data font-m\">280353</div>\n      </div>\n      <hr class=\"ml-20 mr-20\">\n      <div class=\"item-name pl-20 pr-20\">\n        <div>Files Exchanged:</div>\n        <div class=\"item-data\">60065</div>\n      </div>\n      <hr class=\"ml-20 mr-20\">\n      <div class=\"item-name pl-20 pr-20\">\n        <div>Sessions:</div>\n        <div class=\"item-data\">6407</div>\n      </div>\n      <hr class=\"ml-20 mr-20\">\n      <div class=\"item-name pl-20 pr-20\">\n        <div>Outside Companies:</div>\n        <div class=\"item-data\">5065</div>\n      </div>\n      <hr class=\"ml-20 mr-20\">\n      <div class=\"item-name pl-20 pr-20\">\n        <div>Company Sites:</div>\n        <div class=\"item-data\">289</div>\n      </div>\n      <hr class=\"ml-20 mr-20\">\n      <div class=\"item-name pl-20 pr-20\">\n        <div>Registered Users:</div>\n        <div class=\"item-data\">14797</div>\n      </div>\n      <hr class=\"ml-20 mr-20\">\n      <div class=\"item-name pl-20 pr-20\">\n        <div>Company Users:</div>\n        <div class=\"item-data\">7184</div>\n      </div>\n      <hr class=\"ml-20 mr-20\">\n      <div class=\"item-name pl-20 pr-20\">\n        <div>New Registered Users:</div>\n        <div class=\"item-data\">188</div>\n      </div>\n    </div>\n  </div>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/systems-connection/box-modal/box-modal.component.html":
  /*!********************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layout/systems-connection/box-modal/box-modal.component.html ***!
    \********************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppLayoutSystemsConnectionBoxModalBoxModalComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ng-container>\n    <div class=\"direct-connect\">\n        <div class=\"direct-connect-header\">\n            <div class=\"direct-connect-header font-l ml-20\">\n                DTS5- Direct connect\n            </div>\n            <img src=\"https://freehost-spec.github.io/dexcenter-dashboard/assets/images/icons/icon-close.svg\"\n                class=\"icons-xs mr-20 cp\" (click)=\"closeModal('true')\" alt=\" close \">\n        </div>\n        <div class=\"direct-connect-container\">\n            <div class=\"container-left\">\n                <img src=\"https://freehost-spec.github.io/dexcenter-dashboard/assets/images/icons/direct-connect.png\"\n                    width=\"250\" height=\"280\" alt=\"direct connect diagram\">\n            </div>\n            <div class=\"container-right bg-white-color\">\n                <div class=\"task-container mt-10 ml-20 mr-20 fw-500\">\n                    <div class=\"font-l ml-10\">DTS5- SubTask Detail</div>\n                    <div class=\"content\">\n                        <div class=\"header mt-15 mb-5 ml-15 mr-15 font-m\">\n                            <div>DXS Component Name</div>\n                            <div class=\"mr-50\">Status</div>\n                        </div>\n                        <hr class=\"divider ml-15 mr-15\">\n                        <div class=\"description mt-7 mb-7 ml-15 mr-15 fw-400 font-m\">\n                            <div>CADScript</div>\n                            <div class=\"des-right ml-10\">\n                                <img src=\"https://freehost-spec.github.io/dexcenter-dashboard/assets/images/icons/check-circle.svg\"\n                                    alt=\"checked\">\n                                <div class=\"ml-5\">Installed</div>\n                            </div>\n                        </div>\n                        <hr class=\"divider ml-15 mr-15\">\n                        <div class=\"description mt-7 mb-7 ml-15 mr-15 fw-400 font-m\">\n                            <div>CADIQ</div>\n                            <div class=\"des-right ml-10\">\n                                <img src=\"https://freehost-spec.github.io/dexcenter-dashboard/assets/images/icons/check-circle.svg\"\n                                    alt=\"checked\">\n                                <div class=\"ml-5\">Installed</div>\n                            </div>\n                        </div>\n                        <hr class=\"divider ml-15 mr-15\">\n                        <div class=\"description mt-7 mb-7 ml-15 mr-15 fw-400 font-m\">\n                            <div>CAD System</div>\n                            <div class=\"des-right ml-15\">\n                                <img src=\"https://freehost-spec.github.io/dexcenter-dashboard/assets/images/icons/check-circle.svg\"\n                                    alt=\"checked\">\n                                <div class=\"ml-5\">Installed</div>\n                            </div>\n                        </div>\n                        <hr class=\"divider ml-15 mr-15\">\n                        <div class=\"description mt-7 mb-7 ml-15 mr-15 fw-400 font-m\">\n                            <div>Anark</div>\n                            <div class=\"des-right ml-15\">\n                                <img src=\"https://freehost-spec.github.io/dexcenter-dashboard/assets/images/icons/check-circle.svg\"\n                                    alt=\"checked\">\n                                <div class=\"ml-5\">Installed</div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"host-container fw-500 mt-10 ml-20 mr-20 \">\n                    <div class=\"font-l mt-15 ml-15\">DTS5- Host Detail</div>\n                    <div class=\"content\">\n                        <div class=\"description mt-10 mb-7 ml-15 mr-15 fw-400 font-m\">\n                            <div class=\"host-details\">Host-Name<span>:</span></div>\n                            <div class=\"des-right mr-10\">\n                                <div class=\"ml-5 fw-500\">Abc def</div>\n                            </div>\n                        </div>\n                        <hr class=\"divider ml-15 mr-15\">\n                        <div class=\"description mt-7 mb-7 ml-15 mr-15 fw-400 font-m\">\n                            <div class=\"host-details\">Doman Name <span>:</span></div>\n                            <div class=\"des-right mr-10\">\n                                <div class=\"ml-5 fw-500\">EF1234567888</div>\n                            </div>\n                        </div>\n                        <hr class=\"divider ml-15 mr-15\">\n                        <div class=\"description mt-7 mb-20 ml-15 mr-15 fw-400 font-m\">\n                            <div class=\"host-details\">IP address <span>:</span></div>\n                            <div class=\"des-right mr-10\">\n                                <div class=\"ml-5 fw-500\">P12345688</div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"log-container mt-10 ml-20 mr-20 fw-500\">\n                    <div class=\"font-l ml-15\">Log File</div>\n                    <div class=\"content\">\n                        <div class=\"header mt-10 mb-5 ml-15 mr-15 font-m\">\n                            <div>Current Level- INFO</div>\n                        </div>\n                        <div class=\"description mt-7 mb-7 ml-15 pr-10 fw-400 font-m\">\n                            <div>Download AdminConsole Log</div>\n                            <div class=\"des-right mr-10\">\n                                <img src=\"https://freehost-spec.github.io/dexcenter-dashboard/assets/images/icons/download.svg\"\n                                    alt=\"download\" class=\"ml-50\">\n                            </div>\n                        </div>\n                        <hr class=\"divider ml-15 mr-15\">\n                        <div class=\"description mt-7 mb-7 ml-15 pr-10 fw-400 font-m\">\n                            <div>Download DEXcenter App Log</div>\n                            <div class=\"des-right mr-10\">\n                                <img src=\"https://freehost-spec.github.io/dexcenter-dashboard/assets/images/icons/download.svg\"\n                                    alt=\"download\" class=\"ml-50\">\n                            </div>\n                        </div>\n                        <hr class=\"divider ml-15 mr-15\">\n                        <div class=\"description mt-7 mb-7 ml-15 pr-10 fw-400 font-m\">\n                            <div>Download DEXRESTAPI Log</div>\n                            <div class=\"des-right mr-10\">\n                                <img src=\"https://freehost-spec.github.io/dexcenter-dashboard/assets/images/icons/download.svg\"\n                                    alt=\"download\" class=\"ml-50\">\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</ng-container>";
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


    __webpack_exports__["default"] = "<div class=\"box\">\n    <div class=\"box-container\">\n        <div class=\"box-scroll\">\n            <div class=\"box-right mr-10\">\n                <div class=\"dxs-container cp\">\n                    <div class=\"dxs-icons pt-10 pl-15 pr-2\">\n                        <img *ngIf=\"data.icon\"\n                            src=\" https://freehost-spec.github.io/dexcenter-dashboard/assets/images/icons/{{data.icon}}.svg \"\n                            alt=\" \" class=\"icons-xl mt-10 cp\">\n                        <img *ngIf=\"!data.icon\"\n                            src=\" https://freehost-spec.github.io/dexcenter-dashboard/assets/images/icons/icon-dts.svg \"\n                            alt=\" \" class=\"icons-xl mt-10 cp\" (click)=\"openConfig()\">\n                        <img src=\" https://freehost-spec.github.io/dexcenter-dashboard/assets/images/icons/ellipse-b.svg\"\n                            alt=\"more\" class=\"icons-xs cp\" (click)=\"showInfo()\">\n                    </div>\n                    <div class=\"dxs-icons pt-10 pl-15 pr-5\">\n                        <div class=\"font-l font-blue\" (click)=\"boxInformation()\">{{data.dtsname}}</div>\n                        <div class=\"state\">\n                            <div class=\"status-indicator {{data.state}}\"></div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n\n    <div *ngIf=\"boxInfo\">\n        <div class=\"boxInfo font-m\">\n            <div class=\"triangle-top\"></div>\n            <div class=\"session-item\">\n                <div class=\"item-name pl-20 pr-20 mt-10\">\n                    <div>Job Available</div>\n                    <div class=\"item-data\">12</div>\n                </div>\n                <div class=\"item-name pl-20 pr-20\">\n                    <div>Job in Use</div>\n                    <div class=\"item-data\">43</div>\n                </div>\n                <div class=\"item-name pl-20 pr-20\">\n                    <div>Connectivity Speed to DS</div>\n                    <div class=\"item-data\">2.5mb</div>\n                </div>\n                <div class=\"item-name pl-20 pr-20\">\n                    <div>Connectivity Speed to DB</div>\n                    <div class=\"item-data\">2.5mb</div>\n                </div>\n            </div>\n        </div>\n    </div>\n\n    <div *ngIf=\"viewInfo\">\n        <div class=\"viewInfo font-m\">\n            <div class=\"triangle-left\"></div>\n            <div class=\"session-item\">\n                <div class=\"item-name pl-20 pr-20 mt-10\">\n                    <div>CATIA V5</div>\n                </div>\n                <div class=\"item-name pl-20 pr-20\">\n                    <div>CIQ</div>\n                </div>\n                <div class=\"item-name pl-20 pr-20\">\n                    <div>https://domainname.com</div>\n                </div>\n                <div class=\"item-name pl-20 pr-20\">\n                    <div>Logs</div>\n                    <!-- <img src=\" https://freehost-spec.github.io/dexcenter-dashboard/assets/images/icons/arrow_right-24px.svg\" alt=\"more\"> -->\n                    <div class=\"font-xl\">></div>\n                </div>\n                <div class=\"item-name pl-20 pr-20\">\n                    <div>Host</div>\n                    <!-- <img src=\" https://freehost-spec.github.io/dexcenter-dashboard/assets/images/icons/arrow_right-24px.svg\" alt=\"more\"> -->\n                    <div class=\"font-xl\">></div>\n                </div>\n                <div class=\"item-name pl-20 pr-20\">\n                    <div>User App</div>\n                </div>\n            </div>\n        </div>\n    </div>\n\n</div>";
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


    __webpack_exports__["default"] = "<div class=\"connection-container mt-10\">\n    <div class=\"p-20 connection-content\">\n        <div class=\"connection-header\">\n            <div class=\"font-xl fw-500\">Systems Connections</div>\n            <div class=\"search-box mr-10\">\n                <div>\n                    <img src=\"https://freehost-spec.github.io/dexcenter-dashboard/assets/images/icons/icon-search.svg\"\n                        alt=\"Home\" class=\"icons-xxs\">\n                    <input type=\"text\" placeholder=\"Search\" name=\"search\">\n                </div>\n                <img src=\"https://freehost-spec.github.io/dexcenter-dashboard/assets/images/icons/icon-close.svg\"\n                    alt=\"Home\" class=\"icons-xxxs\">\n            </div>\n        </div>\n        <div class=\"connection-body mt-20 font-m\">\n            <!-- Table header -->\n            <div class=\"connection-rowtitle\">\n                <div class=\"system-name ml-50 fw-500\">System Name ↕</div>\n                <div class=\"parent-name fw-500\">Parent system Name ↕</div>\n                <div class=\"connection-number fw-500\">No of connection ↕</div>\n                <div class=\"fail-connection fw-500\">Connection Fail ↕</div>\n                <div class=\"utilisation fw-500\">Utilisation %↕</div>\n                <div class=\"state fw-500\">State↕</div>\n            </div>\n            <!-- Filter row -->\n            <div class=\"filter\">\n                <div class=\"filter-system-name ml-50\">\n                    <div class=\"filter-box\">\n                        <input type=\"text \" placeholder=\"Filter\" name=\"filter \">\n                        <img src=\" https://freehost-spec.github.io/dexcenter-dashboard/assets/images/icons/arrow_drop_down-24px.svg \"\n                            alt=\" \" class=\"icons-xs \">\n                    </div>\n                </div>\n                <div class=\"filter-parent-name\">\n                    <div class=\"filter-box\">\n                        <input type=\"text \" placeholder=\"Filter\" name=\"filter \">\n                        <img src=\" https://freehost-spec.github.io/dexcenter-dashboard/assets/images/icons/arrow_drop_down-24px.svg \"\n                            alt=\" \" class=\"icons-xs \">\n                    </div>\n                </div>\n                <div class=\"filter-connection-number\">\n                    <div class=\"filter-box\">\n                        <input type=\"text \" placeholder=\"Filter\" name=\"filter \">\n                        <img src=\" https://freehost-spec.github.io/dexcenter-dashboard/assets/images/icons/arrow_drop_down-24px.svg \"\n                            alt=\" \" class=\"icons-xs \">\n                    </div>\n                </div>\n                <div class=\"filter-fail-connection\">\n                    <div class=\"filter-box\">\n                        <input type=\"text \" placeholder=\"Filter\" name=\"filter \">\n                        <img src=\" https://freehost-spec.github.io/dexcenter-dashboard/assets/images/icons/arrow_drop_down-24px.svg \"\n                            alt=\" \" class=\"icons-xs \">\n                    </div>\n                </div>\n                <div class=\"filter-utilisation\">\n                    <div class=\"filter-box\">\n                        <input type=\"text \" placeholder=\"Filter\" name=\"filter \">\n                        <img src=\" https://freehost-spec.github.io/dexcenter-dashboard/assets/images/icons/arrow_drop_down-24px.svg \"\n                            alt=\" \" class=\"icons-xs \">\n                    </div>\n                </div>\n                <div class=\"filter-state\">\n                    <div class=\"filter-box\">\n                        <input type=\"text \" placeholder=\"Filter\" name=\"filter \">\n                        <img src=\" https://freehost-spec.github.io/dexcenter-dashboard/assets/images/icons/arrow_drop_down-24px.svg \"\n                            alt=\" \" class=\"icons-xs \">\n                    </div>\n                </div>\n            </div>\n            <!-- table descriptions -->\n            <ng-container *ngFor=\"let item of connectiondata\">\n                <div class=\"connection-tr\">\n                    <div class=\"connection-rowtitle connection-td\">\n                        <div class=\"system-name  ml-50\">{{item.systemname}}</div>\n                        <div class=\"parent-name\">{{item.parentname}}</div>\n                        <div class=\"connection-number\">{{item.connectionnumber}}</div>\n                        <div class=\"fail-connection\">{{item.failconnection}}</div>\n                        <div class=\"utilisation\">{{item.utilisation}}</div>\n                        <div class=\"state\">\n                            <div class=\"status-indicator mr-10 {{item.state}}\">\n                            </div>\n                            <p>{{item.state}}</p>\n                        </div>\n                    </div>\n                    <div class=\"ml-50 divider\">\n                        <hr>\n                    </div>\n                </div>\n            </ng-container>\n            <!-- Paggination -->\n            <ng-container>\n                <div class=\"page-container\">\n                    <div class=\"pt-5 pb-5 page-content\">\n                        <div class=\"pagination-left pl-20 pb-5 pt-5 font-s\">\n                            Viewing 07 of 200 Records\n                        </div>\n                        <div class=\"pagination-right font-s mr-30\">\n                            <div class=\"pb-5 pt-5\">\n                                <img src=\"https://freehost-spec.github.io/dexcenter-dashboard/assets/images/icons/skip_first.svg\"\n                                    alt=\"\" class=\"icons-xs\">\n                            </div>\n                            <div class=\"pb-5 pt-5\">\n                                <img src=\"https://freehost-spec.github.io/dexcenter-dashboard/assets/images/icons/skip_previous.svg\"\n                                    alt=\"\" class=\"icons-xs mr-10 ml-10\">\n                            </div>\n                            <div class=\"page-details\">\n                                <p>Page</p>\n                                <input type=\"text\" class=\"page-number ml-5 mr-5 p-5\" size=\"6\" value=\"1\">\n                                <p>of 76</p>\n                            </div>\n                            <div class=\"pb-5 pt-5\">\n                                <img src=\"https://freehost-spec.github.io/dexcenter-dashboard/assets/images/icons/skip_next.svg\"\n                                    alt=\"\" class=\"icons-xs mr-10 ml-10\">\n                            </div>\n                            <div class=\"pb-5 pt-5\">\n                                <img src=\"https://freehost-spec.github.io/dexcenter-dashboard/assets/images/icons/skip_last.svg\"\n                                    alt=\"\" class=\"icons-xs\">\n                            </div>\n                        </div>\n                    </div>\n\n                </div>\n            </ng-container>\n        </div>\n    </div>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/systems-connection/diagram-view/connection-info/connection-info.component.html":
  /*!*********************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layout/systems-connection/diagram-view/connection-info/connection-info.component.html ***!
    \*********************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppLayoutSystemsConnectionDiagramViewConnectionInfoConnectionInfoComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ng-container>\n  <app-info></app-info>\n</ng-container>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/systems-connection/diagram-view/connections/connections.component.html":
  /*!*************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layout/systems-connection/diagram-view/connections/connections.component.html ***!
    \*************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppLayoutSystemsConnectionDiagramViewConnectionsConnectionsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<p>connections works!</p>\n";
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


    __webpack_exports__["default"] = "<div class=\"connection-view\">\n  <div class=\"filter\">\n    <app-connections></app-connections>\n  </div>\n  <div class=\"circle\">\n    <app-diagram></app-diagram>\n  </div>\n  <div class=\"info\">\n    <app-connection-info></app-connection-info>\n  </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/systems-connection/diagram-view/diagram/diagram.component.html":
  /*!*****************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layout/systems-connection/diagram-view/diagram/diagram.component.html ***!
    \*****************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppLayoutSystemsConnectionDiagramViewDiagramDiagramComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"system-diagram\">\n  <div class=\"outer-circle\">\n    <div class=\"inner-circle-1\">\n      <div class=\"circle-content\">\n        <img src=\"https://freehost-spec.github.io/dexcenter-dashboard/assets/images/icons/icon-db.svg \" alt=\"dxs\"\n          class=\"icons-xss mt-3 mb-2\">\n        <div class=\"font-m font-blue ml-5 mr-5\">DS</div>\n        <img src=\"https://freehost-spec.github.io/dexcenter-dashboard/assets/images/icons/icon-on-green.svg \"\n          alt=\"status\" class=\"icons-xss\">\n      </div>\n      <img src=\"https://freehost-spec.github.io/dexcenter-dashboard/assets/images/icons/ellipse-b.svg\" alt=\"more\"\n        class=\"icons-s horizontal-logo mb-5\">\n    </div>\n    <div class=\"inner-circle-2\">\n      <div class=\"circle-content\">\n        <img src=\"https://freehost-spec.github.io/dexcenter-dashboard/assets/images/icons/icon-db.svg \" alt=\"dxs\"\n          class=\"icons-xss mt-3 mb-2\">\n        <div class=\"font-m font-blue ml-5 mr-5\">DB</div>\n        <img src=\"https://freehost-spec.github.io/dexcenter-dashboard/assets/images/icons/icon-on-green.svg \"\n          alt=\"status\" class=\"icons-xss\">\n      </div>\n      <img src=\"https://freehost-spec.github.io/dexcenter-dashboard/assets/images/icons/ellipse-b.svg\" alt=\"more\"\n        class=\"icons-s horizontal-logo mb-5\">\n    </div>\n    <div class=\"inner-circle-3\">\n      <img src=\"https://freehost-spec.github.io/dexcenter-dashboard/assets/images/icons/icon-on-green.svg \" alt=\"status\"\n        class=\"icons-xss mt-5\">\n      <img src=\"https://freehost-spec.github.io/dexcenter-dashboard/assets/images/icons/icon-dxs.svg \" alt=\"dxs\"\n        class=\"icons-4xl mt-3 mb-2\">\n      <div class=\"font-l font-white\">DXS</div>\n      <img src=\"https://freehost-spec.github.io/dexcenter-dashboard/assets/images/icons/ellipse-w.svg \" alt=\"more\"\n        class=\"icons-s horizontal-logo mb-5\">\n    </div>\n  </div>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/systems-connection/diagram-view/info/info.component.html":
  /*!***********************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layout/systems-connection/diagram-view/info/info.component.html ***!
    \***********************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppLayoutSystemsConnectionDiagramViewInfoInfoComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<p>info works!</p>\n";
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


    __webpack_exports__["default"] = "<div class=\"system-connection-container m-20 pl-10 \">\n  <div class=\"font-xl fw-500 mb-20\">\n    Systems Connection\n  </div>\n  <div>\n    <div>\n      <button class=\"primary-btn \" (click)=\"changeNav( 'tabular') \"\n        [ngClass]=\"activatedTab==='tabular' ? 'selected' : '' \">Tabular View</button>\n      <button class=\"primary-btn \" (click)=\"changeNav( 'diagram') \"\n        [ngClass]=\"activatedTab==='diagram' ? 'selected' : '' \">Diagram View</button>\n    </div>\n    <ng-container *ngIf=\"activatedTab==='tabular' \">\n      <app-tabular-view></app-tabular-view>\n    </ng-container>\n    <ng-container *ngIf=\"activatedTab==='diagram' \">\n      <app-diagram-view></app-diagram-view>\n    </ng-container>\n  </div>\n</div>\n";
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


    __webpack_exports__["default"] = "<app-box-list></app-box-list>\n<app-connection-table></app-connection-table>\n";
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


    __webpack_exports__["default"] = ".box-list-container {\n  display: flex;\n  flex-direction: column;\n}\n.box-list-container .dxs-container {\n  width: 106px;\n  height: 78px;\n  background-color: #034ea2;\n  box-shadow: 0px 3px 0px #034ea2;\n  border: 1px solid #034ea2;\n  border-radius: 8px 8px 0px 0px;\n}\n.box-list-container .dxs-container .dxs-icons {\n  display: flex;\n  justify-content: space-between;\n}\n.box-list-container .box-list {\n  width: 100%;\n  height: 154px;\n  border: 1px solid #cccccc;\n  border-radius: 0px 7px 7px 7px;\n  background-color: white;\n  display: flex;\n  align-items: center;\n}\n.box-item {\n  width: calc(100% - 300px);\n  display: flex;\n}\n.box-container {\n  display: flex;\n  align-items: center;\n}\n.box-container .box-left {\n  display: flex;\n}\n.box-container .box-left .dxs-container {\n  width: 106px;\n  height: 88px;\n  background-color: #f6f8f9;\n  box-shadow: 0px 3px 0px #034ea2;\n  border: 1px solid #034ea2;\n  border-radius: 8px;\n}\n.box-container .box-left .dxs-container .dxs-icons {\n  display: flex;\n  justify-content: space-between;\n}\n.box-container .divider {\n  border: 1px solid #034ea2;\n  height: 88px;\n}\n.boxInfo {\n  display: flex;\n  flex-direction: column;\n  position: absolute;\n  top: 150px;\n  left: 188px;\n}\n.boxInfo > .triangle-right {\n  width: 0;\n  height: 0;\n  border-top: 8px solid transparent;\n  border-right: 12px solid #333333;\n  border-bottom: 8px solid transparent;\n  border-left: 8px solid transparent;\n  position: relative;\n  top: 50px;\n  right: 20px;\n}\n.boxInfo > .session-item {\n  background-color: #333333;\n  color: #fff;\n  height: 215px;\n  width: 265px;\n  z-index: 5;\n  display: flex;\n  flex-direction: column;\n  box-shadow: 0px 3px 6px #00000029;\n  border: 1px solid #000000;\n  opacity: 0.94;\n  border-radius: 4px;\n}\n.boxInfo > .session-item > .item-name {\n  cursor: pointer;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  height: 30px;\n}\n.boxInfo > .session-item > .item-name > .item-data {\n  color: #43b6fb;\n}\n.boxInfo > .session-item > .item-name:hover {\n  background-color: #666;\n}\n.boxmoreInfo {\n  display: flex;\n  flex-direction: column;\n  position: absolute;\n  top: 150px;\n  left: 465px;\n}\n.boxmoreInfo > .triangle-right {\n  width: 0;\n  height: 0;\n  border-top: 8px solid transparent;\n  border-right: 12px solid #333333;\n  border-bottom: 8px solid transparent;\n  border-left: 8px solid transparent;\n  position: relative;\n  top: 35px;\n  right: 20px;\n}\n.boxmoreInfo > .session-item {\n  background-color: #333333;\n  color: #fff;\n  height: 300px;\n  width: 250px;\n  z-index: 5;\n  overflow: hidden;\n  display: flex;\n  flex-direction: column;\n  box-shadow: 0px 3px 6px #00000029;\n  border: 1px solid #000000;\n  opacity: 0.94;\n  border-radius: 4px;\n}\n.boxmoreInfo > .session-item > .item-name {\n  cursor: pointer;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  height: 30px;\n}\n.boxmoreInfo > .session-item > .item-name > .item-data {\n  color: #43b6fb;\n}\n.boxmoreInfo > .session-item > .item-name:hover {\n  background-color: #666;\n}\n.boxmoreInfo > .session-item > hr {\n  border-bottom: #989898;\n}\n.d-arrow {\n  position: relative;\n  bottom: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hcHBsZS9wcm9qZWN0L2RleGNlbnRlci1kYXNoYm9hcmQvc3JjL2FwcC9sYXlvdXQvc3lzdGVtcy1jb25uZWN0aW9uL2JveC1saXN0L2JveC1saXN0LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9sYXlvdXQvc3lzdGVtcy1jb25uZWN0aW9uL2JveC1saXN0L2JveC1saXN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0FDQ0Y7QURBRTtFQUNFLFlBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7RUFDQSwrQkFBQTtFQUNBLHlCQUFBO0VBQ0EsOEJBQUE7QUNFSjtBRERJO0VBQ0UsYUFBQTtFQUNBLDhCQUFBO0FDR047QURBRTtFQUNFLFdBQUE7RUFDQSxhQUFBO0VBQ0EseUJBQUE7RUFDQSw4QkFBQTtFQUNBLHVCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0FDRUo7QURFQTtFQUNFLHlCQUFBO0VBQ0EsYUFBQTtBQ0NGO0FERUE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7QUNDRjtBREFFO0VBQ0UsYUFBQTtBQ0VKO0FEREk7RUFDRSxZQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0VBQ0EsK0JBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0FDR047QURGTTtFQUNFLGFBQUE7RUFDQSw4QkFBQTtBQ0lSO0FEQUU7RUFDRSx5QkFBQTtFQUNBLFlBQUE7QUNFSjtBREVBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtBQ0NGO0FEQUU7RUFDRSxRQUFBO0VBQ0EsU0FBQTtFQUNBLGlDQUFBO0VBQ0EsZ0NBQUE7RUFDQSxvQ0FBQTtFQUNBLGtDQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtBQ0VKO0FEQUU7RUFDRSx5QkFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7RUFFQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxpQ0FBQTtFQUNBLHlCQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0FDQ0o7QURBSTtFQUNFLGVBQUE7RUFDQSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7QUNFTjtBRERNO0VBQ0UsY0FBQTtBQ0dSO0FEQUk7RUFDRSxzQkFBQTtBQ0VOO0FER0E7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0FDQUY7QURDRTtFQUNFLFFBQUE7RUFDQSxTQUFBO0VBQ0EsaUNBQUE7RUFDQSxnQ0FBQTtFQUNBLG9DQUFBO0VBQ0Esa0NBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0FDQ0o7QURDRTtFQUNFLHlCQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsaUNBQUE7RUFDQSx5QkFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtBQ0NKO0FEQUk7RUFDRSxlQUFBO0VBQ0EsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0FDRU47QURETTtFQUNFLGNBQUE7QUNHUjtBREFJO0VBQ0Usc0JBQUE7QUNFTjtBREFJO0VBQ0Usc0JBQUE7QUNFTjtBREdBO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0FDQUYiLCJmaWxlIjoic3JjL2FwcC9sYXlvdXQvc3lzdGVtcy1jb25uZWN0aW9uL2JveC1saXN0L2JveC1saXN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJveC1saXN0LWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIC5keHMtY29udGFpbmVyIHtcbiAgICB3aWR0aDogMTA2cHg7XG4gICAgaGVpZ2h0OiA3OHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMzRlYTI7XG4gICAgYm94LXNoYWRvdzogMHB4IDNweCAwcHggIzAzNGVhMjtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjMDM0ZWEyO1xuICAgIGJvcmRlci1yYWRpdXM6IDhweCA4cHggMHB4IDBweDtcbiAgICAuZHhzLWljb25zIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgfVxuICB9XG4gIC5ib3gtbGlzdCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxNTRweDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjY2NjY2NjO1xuICAgIGJvcmRlci1yYWRpdXM6IDBweCA3cHggN3B4IDdweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIH1cbn1cblxuLmJveC1pdGVtIHtcbiAgd2lkdGg6IGNhbGMoMTAwJSAtIDMwMHB4KTtcbiAgZGlzcGxheTogZmxleDtcbn1cblxuLmJveC1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAuYm94LWxlZnQge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgLmR4cy1jb250YWluZXIge1xuICAgICAgd2lkdGg6IDEwNnB4O1xuICAgICAgaGVpZ2h0OiA4OHB4O1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2Y2ZjhmOTtcbiAgICAgIGJveC1zaGFkb3c6IDBweCAzcHggMHB4ICMwMzRlYTI7XG4gICAgICBib3JkZXI6IDFweCBzb2xpZCAjMDM0ZWEyO1xuICAgICAgYm9yZGVyLXJhZGl1czogOHB4O1xuICAgICAgLmR4cy1pY29ucyB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgLmRpdmlkZXIge1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICMwMzRlYTI7XG4gICAgaGVpZ2h0OiA4OHB4O1xuICB9XG59XG5cbi5ib3hJbmZvIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDE1MHB4O1xuICBsZWZ0OiAxODhweDtcbiAgJiA+IC50cmlhbmdsZS1yaWdodCB7XG4gICAgd2lkdGg6IDA7XG4gICAgaGVpZ2h0OiAwO1xuICAgIGJvcmRlci10b3A6IDhweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgICBib3JkZXItcmlnaHQ6IDEycHggc29saWQgIzMzMzMzMztcbiAgICBib3JkZXItYm90dG9tOiA4cHggc29saWQgdHJhbnNwYXJlbnQ7XG4gICAgYm9yZGVyLWxlZnQ6IDhweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgdG9wOiA1MHB4O1xuICAgIHJpZ2h0OiAyMHB4O1xuICB9XG4gICYgPiAuc2Vzc2lvbi1pdGVtIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzMzMzMzO1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIGhlaWdodDogMjE1cHg7XG4gICAgd2lkdGg6IDI2NXB4O1xuICAgIHotaW5kZXg6IDU7XG4gICAgLy8gb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYm94LXNoYWRvdzogMHB4IDNweCA2cHggIzAwMDAwMDI5O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICMwMDAwMDA7XG4gICAgb3BhY2l0eTogMC45NDtcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgJiA+IC5pdGVtLW5hbWUge1xuICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICBoZWlnaHQ6IDMwcHg7XG4gICAgICAmID4gLml0ZW0tZGF0YSB7XG4gICAgICAgIGNvbG9yOiAjNDNiNmZiO1xuICAgICAgfVxuICAgIH1cbiAgICAmID4gLml0ZW0tbmFtZTpob3ZlciB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjY2O1xuICAgIH1cbiAgfVxufVxuXG4uYm94bW9yZUluZm8ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMTUwcHg7XG4gIGxlZnQ6IDQ2NXB4O1xuICAmID4gLnRyaWFuZ2xlLXJpZ2h0IHtcbiAgICB3aWR0aDogMDtcbiAgICBoZWlnaHQ6IDA7XG4gICAgYm9yZGVyLXRvcDogOHB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICAgIGJvcmRlci1yaWdodDogMTJweCBzb2xpZCAjMzMzMzMzO1xuICAgIGJvcmRlci1ib3R0b206IDhweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgICBib3JkZXItbGVmdDogOHB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB0b3A6IDM1cHg7XG4gICAgcmlnaHQ6IDIwcHg7XG4gIH1cbiAgJiA+IC5zZXNzaW9uLWl0ZW0ge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMzMzMzMzM7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgaGVpZ2h0OiAzMDBweDtcbiAgICB3aWR0aDogMjUwcHg7XG4gICAgei1pbmRleDogNTtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBib3gtc2hhZG93OiAwcHggM3B4IDZweCAjMDAwMDAwMjk7XG4gICAgYm9yZGVyOiAxcHggc29saWQgIzAwMDAwMDtcbiAgICBvcGFjaXR5OiAwLjk0O1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICAmID4gLml0ZW0tbmFtZSB7XG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIGhlaWdodDogMzBweDtcbiAgICAgICYgPiAuaXRlbS1kYXRhIHtcbiAgICAgICAgY29sb3I6ICM0M2I2ZmI7XG4gICAgICB9XG4gICAgfVxuICAgICYgPiAuaXRlbS1uYW1lOmhvdmVyIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICM2NjY7XG4gICAgfVxuICAgICYgPiBociB7XG4gICAgICBib3JkZXItYm90dG9tOiAjOTg5ODk4O1xuICAgIH1cbiAgfVxufVxuXG4uZC1hcnJvdyB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYm90dG9tOiA1cHg7XG59XG4iLCIuYm94LWxpc3QtY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cbi5ib3gtbGlzdC1jb250YWluZXIgLmR4cy1jb250YWluZXIge1xuICB3aWR0aDogMTA2cHg7XG4gIGhlaWdodDogNzhweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAzNGVhMjtcbiAgYm94LXNoYWRvdzogMHB4IDNweCAwcHggIzAzNGVhMjtcbiAgYm9yZGVyOiAxcHggc29saWQgIzAzNGVhMjtcbiAgYm9yZGVyLXJhZGl1czogOHB4IDhweCAwcHggMHB4O1xufVxuLmJveC1saXN0LWNvbnRhaW5lciAuZHhzLWNvbnRhaW5lciAuZHhzLWljb25zIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuLmJveC1saXN0LWNvbnRhaW5lciAuYm94LWxpc3Qge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxNTRweDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2NjY2NjYztcbiAgYm9yZGVyLXJhZGl1czogMHB4IDdweCA3cHggN3B4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmJveC1pdGVtIHtcbiAgd2lkdGg6IGNhbGMoMTAwJSAtIDMwMHB4KTtcbiAgZGlzcGxheTogZmxleDtcbn1cblxuLmJveC1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLmJveC1jb250YWluZXIgLmJveC1sZWZ0IHtcbiAgZGlzcGxheTogZmxleDtcbn1cbi5ib3gtY29udGFpbmVyIC5ib3gtbGVmdCAuZHhzLWNvbnRhaW5lciB7XG4gIHdpZHRoOiAxMDZweDtcbiAgaGVpZ2h0OiA4OHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjZmOGY5O1xuICBib3gtc2hhZG93OiAwcHggM3B4IDBweCAjMDM0ZWEyO1xuICBib3JkZXI6IDFweCBzb2xpZCAjMDM0ZWEyO1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG59XG4uYm94LWNvbnRhaW5lciAuYm94LWxlZnQgLmR4cy1jb250YWluZXIgLmR4cy1pY29ucyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cbi5ib3gtY29udGFpbmVyIC5kaXZpZGVyIHtcbiAgYm9yZGVyOiAxcHggc29saWQgIzAzNGVhMjtcbiAgaGVpZ2h0OiA4OHB4O1xufVxuXG4uYm94SW5mbyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAxNTBweDtcbiAgbGVmdDogMTg4cHg7XG59XG4uYm94SW5mbyA+IC50cmlhbmdsZS1yaWdodCB7XG4gIHdpZHRoOiAwO1xuICBoZWlnaHQ6IDA7XG4gIGJvcmRlci10b3A6IDhweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgYm9yZGVyLXJpZ2h0OiAxMnB4IHNvbGlkICMzMzMzMzM7XG4gIGJvcmRlci1ib3R0b206IDhweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgYm9yZGVyLWxlZnQ6IDhweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IDUwcHg7XG4gIHJpZ2h0OiAyMHB4O1xufVxuLmJveEluZm8gPiAuc2Vzc2lvbi1pdGVtIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzMzMzMzMztcbiAgY29sb3I6ICNmZmY7XG4gIGhlaWdodDogMjE1cHg7XG4gIHdpZHRoOiAyNjVweDtcbiAgei1pbmRleDogNTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYm94LXNoYWRvdzogMHB4IDNweCA2cHggIzAwMDAwMDI5O1xuICBib3JkZXI6IDFweCBzb2xpZCAjMDAwMDAwO1xuICBvcGFjaXR5OiAwLjk0O1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG59XG4uYm94SW5mbyA+IC5zZXNzaW9uLWl0ZW0gPiAuaXRlbS1uYW1lIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGhlaWdodDogMzBweDtcbn1cbi5ib3hJbmZvID4gLnNlc3Npb24taXRlbSA+IC5pdGVtLW5hbWUgPiAuaXRlbS1kYXRhIHtcbiAgY29sb3I6ICM0M2I2ZmI7XG59XG4uYm94SW5mbyA+IC5zZXNzaW9uLWl0ZW0gPiAuaXRlbS1uYW1lOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzY2Njtcbn1cblxuLmJveG1vcmVJbmZvIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDE1MHB4O1xuICBsZWZ0OiA0NjVweDtcbn1cbi5ib3htb3JlSW5mbyA+IC50cmlhbmdsZS1yaWdodCB7XG4gIHdpZHRoOiAwO1xuICBoZWlnaHQ6IDA7XG4gIGJvcmRlci10b3A6IDhweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgYm9yZGVyLXJpZ2h0OiAxMnB4IHNvbGlkICMzMzMzMzM7XG4gIGJvcmRlci1ib3R0b206IDhweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgYm9yZGVyLWxlZnQ6IDhweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IDM1cHg7XG4gIHJpZ2h0OiAyMHB4O1xufVxuLmJveG1vcmVJbmZvID4gLnNlc3Npb24taXRlbSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzMzMzMzM7XG4gIGNvbG9yOiAjZmZmO1xuICBoZWlnaHQ6IDMwMHB4O1xuICB3aWR0aDogMjUwcHg7XG4gIHotaW5kZXg6IDU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGJveC1zaGFkb3c6IDBweCAzcHggNnB4ICMwMDAwMDAyOTtcbiAgYm9yZGVyOiAxcHggc29saWQgIzAwMDAwMDtcbiAgb3BhY2l0eTogMC45NDtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xufVxuLmJveG1vcmVJbmZvID4gLnNlc3Npb24taXRlbSA+IC5pdGVtLW5hbWUge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgaGVpZ2h0OiAzMHB4O1xufVxuLmJveG1vcmVJbmZvID4gLnNlc3Npb24taXRlbSA+IC5pdGVtLW5hbWUgPiAuaXRlbS1kYXRhIHtcbiAgY29sb3I6ICM0M2I2ZmI7XG59XG4uYm94bW9yZUluZm8gPiAuc2Vzc2lvbi1pdGVtID4gLml0ZW0tbmFtZTpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM2NjY7XG59XG4uYm94bW9yZUluZm8gPiAuc2Vzc2lvbi1pdGVtID4gaHIge1xuICBib3JkZXItYm90dG9tOiAjOTg5ODk4O1xufVxuXG4uZC1hcnJvdyB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYm90dG9tOiA1cHg7XG59Il19 */";
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
        value: function ngOnInit() {
          this.dts = [{
            id: 1,
            dtsname: 'DTS1',
            state: 'Fail'
          }, {
            id: 2,
            dtsname: 'DTS2',
            state: 'Working'
          }, {
            id: 3,
            dtsname: 'DTS3',
            state: 'Fail'
          }, {
            id: 4,
            dtsname: 'DTS4',
            state: 'Working'
          }, {
            id: 5,
            dtsname: 'DTS5',
            state: 'Working'
          }, {
            id: 6,
            dtsname: 'DTS6',
            state: 'Working'
          }, {
            id: 7,
            dtsname: 'DTS7',
            state: 'Working'
          }, {
            id: 8,
            dtsname: 'DTS8',
            state: 'Working'
          }, {
            id: 9,
            dtsname: 'DTS9',
            state: 'Working'
          }];
          this.dbs = [{
            id: 1,
            dtsname: 'DB',
            state: 'Fail',
            icon: 'icon-db'
          }, {
            id: 2,
            dtsname: 'DS',
            state: 'Working',
            icon: 'icon-ds'
          }];
        }
      }, {
        key: "dxsInformation",
        value: function dxsInformation() {
          this.dxsInfo = !this.dxsInfo;
        }
      }, {
        key: "dxsmoreInformation",
        value: function dxsmoreInformation() {
          this.dxsmoreInfo = !this.dxsmoreInfo;
        }
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
  "./src/app/layout/systems-connection/box-modal/box-modal.component.scss":
  /*!******************************************************************************!*\
    !*** ./src/app/layout/systems-connection/box-modal/box-modal.component.scss ***!
    \******************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppLayoutSystemsConnectionBoxModalBoxModalComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".direct-connect {\n  width: 645px;\n  height: 560px;\n}\n.direct-connect .direct-connect-header {\n  width: 100%;\n  height: 50px;\n  background-color: #dfe2ee;\n  border-radius: 0px 4px 0px 0px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.direct-connect .direct-connect-header .direct-connect-header {\n  letter-spacing: 0.48px;\n  color: #121111;\n}\n.direct-connect .direct-connect-container {\n  display: flex;\n}\n.direct-connect .direct-connect-container .container-left {\n  width: 45%;\n  height: 510px;\n  background-color: #eef2f5;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.direct-connect .direct-connect-container .container-right {\n  background-color: white;\n  height: 510px;\n  width: 55%;\n  display: flex;\n  flex-direction: column;\n}\n.direct-connect .direct-connect-container .container-right .task-container,\n.direct-connect .direct-connect-container .container-right .host-container,\n.direct-connect .direct-connect-container .container-right .log-container {\n  display: flex;\n  flex-direction: column;\n}\n.direct-connect .direct-connect-container .container-right .task-container .content,\n.direct-connect .direct-connect-container .container-right .host-container .content,\n.direct-connect .direct-connect-container .container-right .log-container .content {\n  display: flex;\n  flex-direction: column;\n}\n.direct-connect .direct-connect-container .container-right .task-container .content .header,\n.direct-connect .direct-connect-container .container-right .host-container .content .header,\n.direct-connect .direct-connect-container .container-right .log-container .content .header {\n  display: flex;\n  justify-content: space-between;\n}\n.direct-connect .direct-connect-container .container-right .task-container .content .divider,\n.direct-connect .direct-connect-container .container-right .host-container .content .divider,\n.direct-connect .direct-connect-container .container-right .log-container .content .divider {\n  border-bottom: #CCCCCC;\n}\n.direct-connect .direct-connect-container .container-right .task-container .content .description,\n.direct-connect .direct-connect-container .container-right .host-container .content .description,\n.direct-connect .direct-connect-container .container-right .log-container .content .description {\n  display: flex;\n  justify-content: space-between;\n}\n.direct-connect .direct-connect-container .container-right .task-container .content .description .des-right,\n.direct-connect .direct-connect-container .container-right .host-container .content .description .des-right,\n.direct-connect .direct-connect-container .container-right .log-container .content .description .des-right {\n  display: flex;\n  width: 32%;\n}\n.direct-connect .direct-connect-container .container-right .task-container .content .description .host-details,\n.direct-connect .direct-connect-container .container-right .host-container .content .description .host-details,\n.direct-connect .direct-connect-container .container-right .log-container .content .description .host-details {\n  width: 110px;\n  display: flex;\n  justify-content: space-between;\n}\n.direct-connect .direct-connect-container .host-container {\n  background-color: #EEF2F5;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hcHBsZS9wcm9qZWN0L2RleGNlbnRlci1kYXNoYm9hcmQvc3JjL2FwcC9sYXlvdXQvc3lzdGVtcy1jb25uZWN0aW9uL2JveC1tb2RhbC9ib3gtbW9kYWwuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2xheW91dC9zeXN0ZW1zLWNvbm5lY3Rpb24vYm94LW1vZGFsL2JveC1tb2RhbC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFlBQUE7RUFDQSxhQUFBO0FDQ0o7QURBSTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7RUFDQSw4QkFBQTtFQUNBLGFBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0FDRVI7QUREUTtFQUNJLHNCQUFBO0VBQ0EsY0FBQTtBQ0daO0FEQUk7RUFDSSxhQUFBO0FDRVI7QUREUTtFQUNJLFVBQUE7RUFDQSxhQUFBO0VBQ0EseUJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBQ0daO0FERFE7RUFDSSx1QkFBQTtFQUNBLGFBQUE7RUFDQSxVQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0FDR1o7QURGWTs7O0VBR0ksYUFBQTtFQUNBLHNCQUFBO0FDSWhCO0FESGdCOzs7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7QUNPcEI7QUROb0I7OztFQUNJLGFBQUE7RUFDQSw4QkFBQTtBQ1V4QjtBRFJvQjs7O0VBQ0ksc0JBQUE7QUNZeEI7QURWb0I7OztFQUNJLGFBQUE7RUFDQSw4QkFBQTtBQ2N4QjtBRGJ3Qjs7O0VBQ0ksYUFBQTtFQUNBLFVBQUE7QUNpQjVCO0FEZndCOzs7RUFDSSxZQUFBO0VBQ0EsYUFBQTtFQUNBLDhCQUFBO0FDbUI1QjtBRGJRO0VBQ0kseUJBQUE7QUNlWiIsImZpbGUiOiJzcmMvYXBwL2xheW91dC9zeXN0ZW1zLWNvbm5lY3Rpb24vYm94LW1vZGFsL2JveC1tb2RhbC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5kaXJlY3QtY29ubmVjdCB7XG4gICAgd2lkdGg6IDY0NXB4O1xuICAgIGhlaWdodDogNTYwcHg7XG4gICAgLmRpcmVjdC1jb25uZWN0LWhlYWRlciB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBoZWlnaHQ6IDUwcHg7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNkZmUyZWU7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDBweCA0cHggMHB4IDBweDtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAuZGlyZWN0LWNvbm5lY3QtaGVhZGVyIHtcbiAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAwLjQ4cHg7XG4gICAgICAgICAgICBjb2xvcjogIzEyMTExMTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAuZGlyZWN0LWNvbm5lY3QtY29udGFpbmVyIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgLmNvbnRhaW5lci1sZWZ0IHtcbiAgICAgICAgICAgIHdpZHRoOiA0NSU7XG4gICAgICAgICAgICBoZWlnaHQ6IDUxMHB4O1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2VlZjJmNTtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIH1cbiAgICAgICAgLmNvbnRhaW5lci1yaWdodCB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgIGhlaWdodDogNTEwcHg7XG4gICAgICAgICAgICB3aWR0aDogNTUlO1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgICAudGFzay1jb250YWluZXIsXG4gICAgICAgICAgICAuaG9zdC1jb250YWluZXIsXG4gICAgICAgICAgICAubG9nLWNvbnRhaW5lciB7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgICAgICAgIC5jb250ZW50IHtcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICAgICAgICAgICAgLmhlYWRlciB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC5kaXZpZGVyIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1ib3R0b206ICNDQ0NDQ0M7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLmRlc2NyaXB0aW9uIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgICAgICAgICAgICAgICAgICAuZGVzLXJpZ2h0IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAzMiU7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAuaG9zdC1kZXRhaWxzIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTEwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLmhvc3QtY29udGFpbmVyIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNFRUYyRjU7XG4gICAgICAgIH1cbiAgICB9XG59IiwiLmRpcmVjdC1jb25uZWN0IHtcbiAgd2lkdGg6IDY0NXB4O1xuICBoZWlnaHQ6IDU2MHB4O1xufVxuLmRpcmVjdC1jb25uZWN0IC5kaXJlY3QtY29ubmVjdC1oZWFkZXIge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA1MHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGZlMmVlO1xuICBib3JkZXItcmFkaXVzOiAwcHggNHB4IDBweCAwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5kaXJlY3QtY29ubmVjdCAuZGlyZWN0LWNvbm5lY3QtaGVhZGVyIC5kaXJlY3QtY29ubmVjdC1oZWFkZXIge1xuICBsZXR0ZXItc3BhY2luZzogMC40OHB4O1xuICBjb2xvcjogIzEyMTExMTtcbn1cbi5kaXJlY3QtY29ubmVjdCAuZGlyZWN0LWNvbm5lY3QtY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbn1cbi5kaXJlY3QtY29ubmVjdCAuZGlyZWN0LWNvbm5lY3QtY29udGFpbmVyIC5jb250YWluZXItbGVmdCB7XG4gIHdpZHRoOiA0NSU7XG4gIGhlaWdodDogNTEwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlZWYyZjU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuLmRpcmVjdC1jb25uZWN0IC5kaXJlY3QtY29ubmVjdC1jb250YWluZXIgLmNvbnRhaW5lci1yaWdodCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBoZWlnaHQ6IDUxMHB4O1xuICB3aWR0aDogNTUlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuLmRpcmVjdC1jb25uZWN0IC5kaXJlY3QtY29ubmVjdC1jb250YWluZXIgLmNvbnRhaW5lci1yaWdodCAudGFzay1jb250YWluZXIsXG4uZGlyZWN0LWNvbm5lY3QgLmRpcmVjdC1jb25uZWN0LWNvbnRhaW5lciAuY29udGFpbmVyLXJpZ2h0IC5ob3N0LWNvbnRhaW5lcixcbi5kaXJlY3QtY29ubmVjdCAuZGlyZWN0LWNvbm5lY3QtY29udGFpbmVyIC5jb250YWluZXItcmlnaHQgLmxvZy1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuLmRpcmVjdC1jb25uZWN0IC5kaXJlY3QtY29ubmVjdC1jb250YWluZXIgLmNvbnRhaW5lci1yaWdodCAudGFzay1jb250YWluZXIgLmNvbnRlbnQsXG4uZGlyZWN0LWNvbm5lY3QgLmRpcmVjdC1jb25uZWN0LWNvbnRhaW5lciAuY29udGFpbmVyLXJpZ2h0IC5ob3N0LWNvbnRhaW5lciAuY29udGVudCxcbi5kaXJlY3QtY29ubmVjdCAuZGlyZWN0LWNvbm5lY3QtY29udGFpbmVyIC5jb250YWluZXItcmlnaHQgLmxvZy1jb250YWluZXIgLmNvbnRlbnQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuLmRpcmVjdC1jb25uZWN0IC5kaXJlY3QtY29ubmVjdC1jb250YWluZXIgLmNvbnRhaW5lci1yaWdodCAudGFzay1jb250YWluZXIgLmNvbnRlbnQgLmhlYWRlcixcbi5kaXJlY3QtY29ubmVjdCAuZGlyZWN0LWNvbm5lY3QtY29udGFpbmVyIC5jb250YWluZXItcmlnaHQgLmhvc3QtY29udGFpbmVyIC5jb250ZW50IC5oZWFkZXIsXG4uZGlyZWN0LWNvbm5lY3QgLmRpcmVjdC1jb25uZWN0LWNvbnRhaW5lciAuY29udGFpbmVyLXJpZ2h0IC5sb2ctY29udGFpbmVyIC5jb250ZW50IC5oZWFkZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG4uZGlyZWN0LWNvbm5lY3QgLmRpcmVjdC1jb25uZWN0LWNvbnRhaW5lciAuY29udGFpbmVyLXJpZ2h0IC50YXNrLWNvbnRhaW5lciAuY29udGVudCAuZGl2aWRlcixcbi5kaXJlY3QtY29ubmVjdCAuZGlyZWN0LWNvbm5lY3QtY29udGFpbmVyIC5jb250YWluZXItcmlnaHQgLmhvc3QtY29udGFpbmVyIC5jb250ZW50IC5kaXZpZGVyLFxuLmRpcmVjdC1jb25uZWN0IC5kaXJlY3QtY29ubmVjdC1jb250YWluZXIgLmNvbnRhaW5lci1yaWdodCAubG9nLWNvbnRhaW5lciAuY29udGVudCAuZGl2aWRlciB7XG4gIGJvcmRlci1ib3R0b206ICNDQ0NDQ0M7XG59XG4uZGlyZWN0LWNvbm5lY3QgLmRpcmVjdC1jb25uZWN0LWNvbnRhaW5lciAuY29udGFpbmVyLXJpZ2h0IC50YXNrLWNvbnRhaW5lciAuY29udGVudCAuZGVzY3JpcHRpb24sXG4uZGlyZWN0LWNvbm5lY3QgLmRpcmVjdC1jb25uZWN0LWNvbnRhaW5lciAuY29udGFpbmVyLXJpZ2h0IC5ob3N0LWNvbnRhaW5lciAuY29udGVudCAuZGVzY3JpcHRpb24sXG4uZGlyZWN0LWNvbm5lY3QgLmRpcmVjdC1jb25uZWN0LWNvbnRhaW5lciAuY29udGFpbmVyLXJpZ2h0IC5sb2ctY29udGFpbmVyIC5jb250ZW50IC5kZXNjcmlwdGlvbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cbi5kaXJlY3QtY29ubmVjdCAuZGlyZWN0LWNvbm5lY3QtY29udGFpbmVyIC5jb250YWluZXItcmlnaHQgLnRhc2stY29udGFpbmVyIC5jb250ZW50IC5kZXNjcmlwdGlvbiAuZGVzLXJpZ2h0LFxuLmRpcmVjdC1jb25uZWN0IC5kaXJlY3QtY29ubmVjdC1jb250YWluZXIgLmNvbnRhaW5lci1yaWdodCAuaG9zdC1jb250YWluZXIgLmNvbnRlbnQgLmRlc2NyaXB0aW9uIC5kZXMtcmlnaHQsXG4uZGlyZWN0LWNvbm5lY3QgLmRpcmVjdC1jb25uZWN0LWNvbnRhaW5lciAuY29udGFpbmVyLXJpZ2h0IC5sb2ctY29udGFpbmVyIC5jb250ZW50IC5kZXNjcmlwdGlvbiAuZGVzLXJpZ2h0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgd2lkdGg6IDMyJTtcbn1cbi5kaXJlY3QtY29ubmVjdCAuZGlyZWN0LWNvbm5lY3QtY29udGFpbmVyIC5jb250YWluZXItcmlnaHQgLnRhc2stY29udGFpbmVyIC5jb250ZW50IC5kZXNjcmlwdGlvbiAuaG9zdC1kZXRhaWxzLFxuLmRpcmVjdC1jb25uZWN0IC5kaXJlY3QtY29ubmVjdC1jb250YWluZXIgLmNvbnRhaW5lci1yaWdodCAuaG9zdC1jb250YWluZXIgLmNvbnRlbnQgLmRlc2NyaXB0aW9uIC5ob3N0LWRldGFpbHMsXG4uZGlyZWN0LWNvbm5lY3QgLmRpcmVjdC1jb25uZWN0LWNvbnRhaW5lciAuY29udGFpbmVyLXJpZ2h0IC5sb2ctY29udGFpbmVyIC5jb250ZW50IC5kZXNjcmlwdGlvbiAuaG9zdC1kZXRhaWxzIHtcbiAgd2lkdGg6IDExMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG4uZGlyZWN0LWNvbm5lY3QgLmRpcmVjdC1jb25uZWN0LWNvbnRhaW5lciAuaG9zdC1jb250YWluZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRUVGMkY1O1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/layout/systems-connection/box-modal/box-modal.component.ts":
  /*!****************************************************************************!*\
    !*** ./src/app/layout/systems-connection/box-modal/box-modal.component.ts ***!
    \****************************************************************************/

  /*! exports provided: BoxModalComponent */

  /***/
  function srcAppLayoutSystemsConnectionBoxModalBoxModalComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BoxModalComponent", function () {
      return BoxModalComponent;
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


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/esm2015/dialog.js");

    var BoxModalComponent = /*#__PURE__*/function () {
      function BoxModalComponent(dialog, dialogRef, data) {
        _classCallCheck(this, BoxModalComponent);

        this.dialog = dialog;
        this.dialogRef = dialogRef;
        this.data = data;
      }

      _createClass(BoxModalComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "closeModal",
        value: function closeModal(data) {
          this.dialogRef.close(data);
        }
      }]);

      return BoxModalComponent;
    }();

    BoxModalComponent.ctorParameters = function () {
      return [{
        type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"]
      }, {
        type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"]
      }, {
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
          args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]]
        }]
      }];
    };

    BoxModalComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-box-modal',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./box-modal.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/systems-connection/box-modal/box-modal.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./box-modal.component.scss */
      "./src/app/layout/systems-connection/box-modal/box-modal.component.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]))], BoxModalComponent);
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


    __webpack_exports__["default"] = ".box-container {\n  display: flex;\n  align-items: center;\n}\n.box-container .box-left {\n  display: flex;\n}\n.box-container .box-left .dxs-container {\n  width: 106px;\n  height: 88px;\n  background-color: #f6f8f9;\n  box-shadow: 0px 3px 0px #034ea2;\n  border: 1px solid #034ea2;\n  border-radius: 8px;\n}\n.box-container .box-left .dxs-container .dxs-icons {\n  display: flex;\n  justify-content: space-between;\n}\n.box-container .divider {\n  border: 1px solid #034ea2;\n  height: 88px;\n}\n.box-container .box-scroll {\n  display: flex;\n  max-width: 1041px;\n  overflow: auto;\n}\n.box-container .box-scroll .box-right {\n  height: 92px;\n}\n.box-container .box-scroll .box-right .dxs-container {\n  width: 106px;\n  height: 88px;\n  background-color: #f6f8f9;\n  box-shadow: 0px 3px 0px #034ea2;\n  border: 1px solid #034ea2;\n  border-radius: 8px;\n}\n.box-container .box-scroll .box-right .dxs-container .dxs-icons {\n  display: flex;\n  justify-content: space-between;\n}\n.box-container .box-scroll .box-right .dxs-container .dxs-icons .status-indicator {\n  width: 22px;\n  height: 22px;\n  border-style: none;\n}\n.box-container .box-scroll .box-right .dxs-container .dxs-icons .Working {\n  background-image: url(\"srchttps://freehost-spec.github.io/dexcenter-dashboard/assets/images/icons/icon-on-green.svg\");\n  background-repeat: no-repeat;\n  background-size: 22px 22px;\n}\n.box-container .box-scroll .box-right .dxs-container .dxs-icons .Fail {\n  background-image: url(\"srchttps://freehost-spec.github.io/dexcenter-dashboard/assets/images/icons/icon-red-issue.svg\");\n  background-size: 22px 22px;\n  background-repeat: no-repeat;\n}\n.boxInfo {\n  display: flex;\n  flex-direction: column;\n  position: absolute;\n  top: 85px;\n}\n.boxInfo > .triangle-top {\n  width: 0;\n  height: 0;\n  border-top: 8px solid transparent;\n  border-right: 8px solid transparent;\n  border-bottom: 12px solid #333333;\n  border-left: 8px solid transparent;\n  position: relative;\n  top: 0px;\n  left: 40px;\n}\n.boxInfo > .session-item {\n  background-color: #333333;\n  color: #fff;\n  height: 145px;\n  width: 270px;\n  z-index: 5;\n  overflow: hidden;\n  display: flex;\n  flex-direction: column;\n  box-shadow: 0px 3px 6px #00000029;\n  border: 1px solid #000000;\n  opacity: 0.94;\n  border-radius: 4px;\n}\n.boxInfo > .session-item > .item-name {\n  cursor: pointer;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  height: 30px;\n}\n.boxInfo > .session-item > .item-name > .item-data {\n  color: #43b6fb;\n}\n.boxInfo > .session-item > .item-name:hover {\n  background-color: #666;\n}\n.viewInfo {\n  display: flex;\n  flex-direction: column;\n  position: absolute;\n  top: 25px;\n  left: 45px;\n}\n.viewInfo > .triangle-left {\n  width: 0;\n  height: 0;\n  border-top: 8px solid transparent;\n  border-right: 8px solid transparent;\n  border-bottom: 12px solid #333333;\n  border-left: 8px solid transparent;\n  position: relative;\n  top: 0px;\n  left: 40px;\n}\n.viewInfo > .session-item {\n  background-color: #333333;\n  color: #fff;\n  height: 215px;\n  width: 185px;\n  z-index: 5;\n  overflow: hidden;\n  display: flex;\n  flex-direction: column;\n  box-shadow: 0px 3px 6px #00000029;\n  border: 1px solid #000000;\n  opacity: 0.94;\n  border-radius: 4px;\n}\n.viewInfo > .session-item > .item-name {\n  cursor: pointer;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  height: 30px;\n}\n.viewInfo > .session-item > .item-name > .item-data {\n  color: #43b6fb;\n}\n.viewInfo > .session-item > .item-name:hover {\n  background-color: #666;\n}\n.box {\n  position: relative;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hcHBsZS9wcm9qZWN0L2RleGNlbnRlci1kYXNoYm9hcmQvc3JjL2FwcC9sYXlvdXQvc3lzdGVtcy1jb25uZWN0aW9uL2JveC9ib3guY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2xheW91dC9zeXN0ZW1zLWNvbm5lY3Rpb24vYm94L2JveC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtBQ0NGO0FEQUU7RUFDRSxhQUFBO0FDRUo7QURESTtFQUNFLFlBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7RUFDQSwrQkFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7QUNHTjtBREZNO0VBQ0UsYUFBQTtFQUNBLDhCQUFBO0FDSVI7QURBRTtFQUNFLHlCQUFBO0VBQ0EsWUFBQTtBQ0VKO0FEQUU7RUFDRSxhQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0FDRUo7QURESTtFQUNFLFlBQUE7QUNHTjtBREZNO0VBQ0UsWUFBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtFQUNBLCtCQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtBQ0lSO0FESFE7RUFDRSxhQUFBO0VBQ0EsOEJBQUE7QUNLVjtBREpVO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQ01aO0FESlU7RUFDRSxxSEFBQTtFQUNBLDRCQUFBO0VBQ0EsMEJBQUE7QUNNWjtBREpVO0VBQ0Usc0hBQUE7RUFDQSwwQkFBQTtFQUNBLDRCQUFBO0FDTVo7QURFQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtBQ0NGO0FEQUU7RUFDRSxRQUFBO0VBQ0EsU0FBQTtFQUNBLGlDQUFBO0VBQ0EsbUNBQUE7RUFDQSxpQ0FBQTtFQUNBLGtDQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsVUFBQTtBQ0VKO0FEQUU7RUFDRSx5QkFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLGlDQUFBO0VBQ0EseUJBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7QUNFSjtBRERJO0VBQ0UsZUFBQTtFQUNBLGFBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtBQ0dOO0FERk07RUFDRSxjQUFBO0FDSVI7QURESTtFQUNFLHNCQUFBO0FDR047QURFQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7QUNDRjtBREFFO0VBQ0UsUUFBQTtFQUNBLFNBQUE7RUFDQSxpQ0FBQTtFQUNBLG1DQUFBO0VBQ0EsaUNBQUE7RUFDQSxrQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFVBQUE7QUNFSjtBREFFO0VBQ0UseUJBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxpQ0FBQTtFQUNBLHlCQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0FDRUo7QURESTtFQUNFLGVBQUE7RUFDQSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7QUNHTjtBREZNO0VBQ0UsY0FBQTtBQ0lSO0FEREk7RUFDRSxzQkFBQTtBQ0dOO0FERUE7RUFDRSxrQkFBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvbGF5b3V0L3N5c3RlbXMtY29ubmVjdGlvbi9ib3gvYm94LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJveC1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAuYm94LWxlZnQge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgLmR4cy1jb250YWluZXIge1xuICAgICAgd2lkdGg6IDEwNnB4O1xuICAgICAgaGVpZ2h0OiA4OHB4O1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2Y2ZjhmOTtcbiAgICAgIGJveC1zaGFkb3c6IDBweCAzcHggMHB4ICMwMzRlYTI7XG4gICAgICBib3JkZXI6IDFweCBzb2xpZCAjMDM0ZWEyO1xuICAgICAgYm9yZGVyLXJhZGl1czogOHB4O1xuICAgICAgLmR4cy1pY29ucyB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgLmRpdmlkZXIge1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICMwMzRlYTI7XG4gICAgaGVpZ2h0OiA4OHB4O1xuICB9XG4gIC5ib3gtc2Nyb2xsIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIG1heC13aWR0aDogMTA0MXB4O1xuICAgIG92ZXJmbG93OiBhdXRvO1xuICAgIC5ib3gtcmlnaHQge1xuICAgICAgaGVpZ2h0OiA5MnB4O1xuICAgICAgLmR4cy1jb250YWluZXIge1xuICAgICAgICB3aWR0aDogMTA2cHg7XG4gICAgICAgIGhlaWdodDogODhweDtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2Y2ZjhmOTtcbiAgICAgICAgYm94LXNoYWRvdzogMHB4IDNweCAwcHggIzAzNGVhMjtcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgIzAzNGVhMjtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogOHB4O1xuICAgICAgICAuZHhzLWljb25zIHtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgICAuc3RhdHVzLWluZGljYXRvciB7XG4gICAgICAgICAgICB3aWR0aDogMjJweDtcbiAgICAgICAgICAgIGhlaWdodDogMjJweDtcbiAgICAgICAgICAgIGJvcmRlci1zdHlsZTogbm9uZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLldvcmtpbmcge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCdzcmNodHRwczovL2ZyZWVob3N0LXNwZWMuZ2l0aHViLmlvL2RleGNlbnRlci1kYXNoYm9hcmQvYXNzZXRzL2ltYWdlcy9pY29ucy9pY29uLW9uLWdyZWVuLnN2ZycpO1xuICAgICAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogMjJweCAyMnB4O1xuICAgICAgICAgIH1cbiAgICAgICAgICAuRmFpbCB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJ3NyY2h0dHBzOi8vZnJlZWhvc3Qtc3BlYy5naXRodWIuaW8vZGV4Y2VudGVyLWRhc2hib2FyZC9hc3NldHMvaW1hZ2VzL2ljb25zL2ljb24tcmVkLWlzc3VlLnN2ZycpO1xuICAgICAgICAgICAgYmFja2dyb3VuZC1zaXplOiAyMnB4IDIycHg7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG4uYm94SW5mbyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA4NXB4O1xuICAmID4gLnRyaWFuZ2xlLXRvcCB7XG4gICAgd2lkdGg6IDA7XG4gICAgaGVpZ2h0OiAwO1xuICAgIGJvcmRlci10b3A6IDhweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgICBib3JkZXItcmlnaHQ6IDhweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgICBib3JkZXItYm90dG9tOiAxMnB4IHNvbGlkICMzMzMzMzM7XG4gICAgYm9yZGVyLWxlZnQ6IDhweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgdG9wOiAwcHg7XG4gICAgbGVmdDogNDBweDtcbiAgfVxuICAmID4gLnNlc3Npb24taXRlbSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzMzMzMzMztcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBoZWlnaHQ6IDE0NXB4O1xuICAgIHdpZHRoOiAyNzBweDtcbiAgICB6LWluZGV4OiA1O1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGJveC1zaGFkb3c6IDBweCAzcHggNnB4ICMwMDAwMDAyOTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjMDAwMDAwO1xuICAgIG9wYWNpdHk6IDAuOTQ7XG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgICYgPiAuaXRlbS1uYW1lIHtcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgaGVpZ2h0OiAzMHB4O1xuICAgICAgJiA+IC5pdGVtLWRhdGEge1xuICAgICAgICBjb2xvcjogIzQzYjZmYjtcbiAgICAgIH1cbiAgICB9XG4gICAgJiA+IC5pdGVtLW5hbWU6aG92ZXIge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzY2NjtcbiAgICB9XG4gIH1cbn1cblxuLnZpZXdJbmZvIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDI1cHg7XG4gIGxlZnQ6IDQ1cHg7XG4gICYgPiAudHJpYW5nbGUtbGVmdCB7XG4gICAgd2lkdGg6IDA7XG4gICAgaGVpZ2h0OiAwO1xuICAgIGJvcmRlci10b3A6IDhweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgICBib3JkZXItcmlnaHQ6IDhweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgICBib3JkZXItYm90dG9tOiAxMnB4IHNvbGlkICMzMzMzMzM7XG4gICAgYm9yZGVyLWxlZnQ6IDhweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgdG9wOiAwcHg7XG4gICAgbGVmdDogNDBweDtcbiAgfVxuICAmID4gLnNlc3Npb24taXRlbSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzMzMzMzMztcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBoZWlnaHQ6IDIxNXB4O1xuICAgIHdpZHRoOiAxODVweDtcbiAgICB6LWluZGV4OiA1O1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGJveC1zaGFkb3c6IDBweCAzcHggNnB4ICMwMDAwMDAyOTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjMDAwMDAwO1xuICAgIG9wYWNpdHk6IDAuOTQ7XG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgICYgPiAuaXRlbS1uYW1lIHtcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgaGVpZ2h0OiAzMHB4O1xuICAgICAgJiA+IC5pdGVtLWRhdGEge1xuICAgICAgICBjb2xvcjogIzQzYjZmYjtcbiAgICAgIH1cbiAgICB9XG4gICAgJiA+IC5pdGVtLW5hbWU6aG92ZXIge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzY2NjtcbiAgICB9XG4gIH1cbn1cblxuLmJveCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbiIsIi5ib3gtY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5ib3gtY29udGFpbmVyIC5ib3gtbGVmdCB7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG4uYm94LWNvbnRhaW5lciAuYm94LWxlZnQgLmR4cy1jb250YWluZXIge1xuICB3aWR0aDogMTA2cHg7XG4gIGhlaWdodDogODhweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y2ZjhmOTtcbiAgYm94LXNoYWRvdzogMHB4IDNweCAwcHggIzAzNGVhMjtcbiAgYm9yZGVyOiAxcHggc29saWQgIzAzNGVhMjtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xufVxuLmJveC1jb250YWluZXIgLmJveC1sZWZ0IC5keHMtY29udGFpbmVyIC5keHMtaWNvbnMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG4uYm94LWNvbnRhaW5lciAuZGl2aWRlciB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICMwMzRlYTI7XG4gIGhlaWdodDogODhweDtcbn1cbi5ib3gtY29udGFpbmVyIC5ib3gtc2Nyb2xsIHtcbiAgZGlzcGxheTogZmxleDtcbiAgbWF4LXdpZHRoOiAxMDQxcHg7XG4gIG92ZXJmbG93OiBhdXRvO1xufVxuLmJveC1jb250YWluZXIgLmJveC1zY3JvbGwgLmJveC1yaWdodCB7XG4gIGhlaWdodDogOTJweDtcbn1cbi5ib3gtY29udGFpbmVyIC5ib3gtc2Nyb2xsIC5ib3gtcmlnaHQgLmR4cy1jb250YWluZXIge1xuICB3aWR0aDogMTA2cHg7XG4gIGhlaWdodDogODhweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y2ZjhmOTtcbiAgYm94LXNoYWRvdzogMHB4IDNweCAwcHggIzAzNGVhMjtcbiAgYm9yZGVyOiAxcHggc29saWQgIzAzNGVhMjtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xufVxuLmJveC1jb250YWluZXIgLmJveC1zY3JvbGwgLmJveC1yaWdodCAuZHhzLWNvbnRhaW5lciAuZHhzLWljb25zIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuLmJveC1jb250YWluZXIgLmJveC1zY3JvbGwgLmJveC1yaWdodCAuZHhzLWNvbnRhaW5lciAuZHhzLWljb25zIC5zdGF0dXMtaW5kaWNhdG9yIHtcbiAgd2lkdGg6IDIycHg7XG4gIGhlaWdodDogMjJweDtcbiAgYm9yZGVyLXN0eWxlOiBub25lO1xufVxuLmJveC1jb250YWluZXIgLmJveC1zY3JvbGwgLmJveC1yaWdodCAuZHhzLWNvbnRhaW5lciAuZHhzLWljb25zIC5Xb3JraW5nIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwic3JjaHR0cHM6Ly9mcmVlaG9zdC1zcGVjLmdpdGh1Yi5pby9kZXhjZW50ZXItZGFzaGJvYXJkL2Fzc2V0cy9pbWFnZXMvaWNvbnMvaWNvbi1vbi1ncmVlbi5zdmdcIik7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtc2l6ZTogMjJweCAyMnB4O1xufVxuLmJveC1jb250YWluZXIgLmJveC1zY3JvbGwgLmJveC1yaWdodCAuZHhzLWNvbnRhaW5lciAuZHhzLWljb25zIC5GYWlsIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwic3JjaHR0cHM6Ly9mcmVlaG9zdC1zcGVjLmdpdGh1Yi5pby9kZXhjZW50ZXItZGFzaGJvYXJkL2Fzc2V0cy9pbWFnZXMvaWNvbnMvaWNvbi1yZWQtaXNzdWUuc3ZnXCIpO1xuICBiYWNrZ3JvdW5kLXNpemU6IDIycHggMjJweDtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbn1cblxuLmJveEluZm8ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogODVweDtcbn1cbi5ib3hJbmZvID4gLnRyaWFuZ2xlLXRvcCB7XG4gIHdpZHRoOiAwO1xuICBoZWlnaHQ6IDA7XG4gIGJvcmRlci10b3A6IDhweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgYm9yZGVyLXJpZ2h0OiA4cHggc29saWQgdHJhbnNwYXJlbnQ7XG4gIGJvcmRlci1ib3R0b206IDEycHggc29saWQgIzMzMzMzMztcbiAgYm9yZGVyLWxlZnQ6IDhweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IDBweDtcbiAgbGVmdDogNDBweDtcbn1cbi5ib3hJbmZvID4gLnNlc3Npb24taXRlbSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzMzMzMzM7XG4gIGNvbG9yOiAjZmZmO1xuICBoZWlnaHQ6IDE0NXB4O1xuICB3aWR0aDogMjcwcHg7XG4gIHotaW5kZXg6IDU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGJveC1zaGFkb3c6IDBweCAzcHggNnB4ICMwMDAwMDAyOTtcbiAgYm9yZGVyOiAxcHggc29saWQgIzAwMDAwMDtcbiAgb3BhY2l0eTogMC45NDtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xufVxuLmJveEluZm8gPiAuc2Vzc2lvbi1pdGVtID4gLml0ZW0tbmFtZSB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBoZWlnaHQ6IDMwcHg7XG59XG4uYm94SW5mbyA+IC5zZXNzaW9uLWl0ZW0gPiAuaXRlbS1uYW1lID4gLml0ZW0tZGF0YSB7XG4gIGNvbG9yOiAjNDNiNmZiO1xufVxuLmJveEluZm8gPiAuc2Vzc2lvbi1pdGVtID4gLml0ZW0tbmFtZTpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM2NjY7XG59XG5cbi52aWV3SW5mbyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAyNXB4O1xuICBsZWZ0OiA0NXB4O1xufVxuLnZpZXdJbmZvID4gLnRyaWFuZ2xlLWxlZnQge1xuICB3aWR0aDogMDtcbiAgaGVpZ2h0OiAwO1xuICBib3JkZXItdG9wOiA4cHggc29saWQgdHJhbnNwYXJlbnQ7XG4gIGJvcmRlci1yaWdodDogOHB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICBib3JkZXItYm90dG9tOiAxMnB4IHNvbGlkICMzMzMzMzM7XG4gIGJvcmRlci1sZWZ0OiA4cHggc29saWQgdHJhbnNwYXJlbnQ7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiAwcHg7XG4gIGxlZnQ6IDQwcHg7XG59XG4udmlld0luZm8gPiAuc2Vzc2lvbi1pdGVtIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzMzMzMzMztcbiAgY29sb3I6ICNmZmY7XG4gIGhlaWdodDogMjE1cHg7XG4gIHdpZHRoOiAxODVweDtcbiAgei1pbmRleDogNTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYm94LXNoYWRvdzogMHB4IDNweCA2cHggIzAwMDAwMDI5O1xuICBib3JkZXI6IDFweCBzb2xpZCAjMDAwMDAwO1xuICBvcGFjaXR5OiAwLjk0O1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG59XG4udmlld0luZm8gPiAuc2Vzc2lvbi1pdGVtID4gLml0ZW0tbmFtZSB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBoZWlnaHQ6IDMwcHg7XG59XG4udmlld0luZm8gPiAuc2Vzc2lvbi1pdGVtID4gLml0ZW0tbmFtZSA+IC5pdGVtLWRhdGEge1xuICBjb2xvcjogIzQzYjZmYjtcbn1cbi52aWV3SW5mbyA+IC5zZXNzaW9uLWl0ZW0gPiAuaXRlbS1uYW1lOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzY2Njtcbn1cblxuLmJveCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn0iXX0= */";
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
    /* harmony import */


    var _box_modal_box_modal_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../box-modal/box-modal.component */
    "./src/app/layout/systems-connection/box-modal/box-modal.component.ts");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/esm2015/dialog.js");

    var BoxComponent = /*#__PURE__*/function () {
      function BoxComponent(dialog) {
        _classCallCheck(this, BoxComponent);

        this.dialog = dialog;
      }

      _createClass(BoxComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.viewInfo = false;
        }
      }, {
        key: "openConfig",
        value: function openConfig() {
          var data = [];
          var dialogRef = this.dialog.open(_box_modal_box_modal_component__WEBPACK_IMPORTED_MODULE_2__["BoxModalComponent"], {
            data: data
          });
          dialogRef.afterClosed().subscribe(function (res) {
            if (res === 'true') {} else {
              setTimeout(function () {}, 1000);
            }
          });
        }
      }, {
        key: "boxInformation",
        value: function boxInformation() {
          this.boxInfo = !this.boxInfo;
        }
      }, {
        key: "showInfo",
        value: function showInfo() {
          this.viewInfo = !this.viewInfo;
        }
      }]);

      return BoxComponent;
    }();

    BoxComponent.ctorParameters = function () {
      return [{
        type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialog"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], BoxComponent.prototype, "data", void 0);
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


    __webpack_exports__["default"] = ".connection-container {\n  width: 100%;\n  height: 520px;\n  border: 1px solid #cccccc;\n  border-radius: 0px 7px 7px 7px;\n  background-color: white;\n}\n.connection-container .connection-content {\n  display: flex;\n  flex-direction: column;\n}\n.connection-container .connection-content .connection-header {\n  display: flex;\n  justify-content: space-between;\n  color: #111111;\n}\n.connection-container .connection-content .connection-header .search-box {\n  position: relative;\n  width: 288px;\n  height: 30px;\n}\n.connection-container .connection-content .connection-header .search-box div {\n  width: 100%;\n  display: flex;\n}\n.connection-container .connection-content .connection-header .search-box div > input {\n  width: 100%;\n  padding: 6px 12px;\n  text-indent: 20px;\n}\n.connection-container .connection-content .connection-header .search-box div > img {\n  position: absolute;\n  transform: rotate(270deg);\n  left: 10px;\n  top: 8px;\n}\n.connection-container .connection-content .connection-header .search-box > img {\n  position: absolute;\n  right: 10px;\n  top: 8px;\n}\n.connection-container .connection-content .connection-body {\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n}\n.connection-container .connection-content .connection-body .connection-rowtitle {\n  display: flex;\n  align-items: center;\n  text-align: left;\n  padding-top: 12px;\n  padding-bottom: 12px;\n  background-color: #dfe2ee;\n  border-radius: 4px 4px 0px 0px;\n  border: none;\n}\n.connection-container .connection-content .connection-body .connection-rowtitle .system-name {\n  width: 16%;\n}\n.connection-container .connection-content .connection-body .connection-rowtitle .parent-name {\n  width: 16%;\n}\n.connection-container .connection-content .connection-body .connection-rowtitle .connection-number {\n  width: 16%;\n}\n.connection-container .connection-content .connection-body .connection-rowtitle .fail-connection {\n  width: 16%;\n}\n.connection-container .connection-content .connection-body .connection-rowtitle .utilisation {\n  width: 15%;\n}\n.connection-container .connection-content .connection-body .connection-rowtitle .state {\n  width: 15%;\n  display: flex;\n  align-items: center;\n}\n.connection-container .connection-content .connection-body .connection-rowtitle .state .status-indicator {\n  width: 15px;\n  height: 15px;\n  border-style: none;\n}\n.connection-container .connection-content .connection-body .connection-rowtitle .state .Working {\n  background-image: url(\"srchttps://freehost-spec.github.io/dexcenter-dashboard/assets/images/icons/check-circle.svg\");\n  background-repeat: no-repeat;\n  background-size: 15px 15px;\n}\n.connection-container .connection-content .connection-body .connection-rowtitle .state .Fail {\n  background-image: url(\"srchttps://freehost-spec.github.io/dexcenter-dashboard/assets/images/icons/error-icon.svg\");\n  background-size: 15px 15px;\n  background-repeat: no-repeat;\n}\n.connection-container .connection-content .connection-body .filter {\n  width: 100%;\n  background-color: white;\n  display: flex;\n  height: 50px;\n  align-items: center;\n  border: 1px solid #e7e7ec;\n}\n.connection-container .connection-content .connection-body .filter .filter-system-name {\n  width: 16%;\n}\n.connection-container .connection-content .connection-body .filter .filter-system-name .filter-box {\n  width: 40%;\n}\n.connection-container .connection-content .connection-body .filter .filter-parent-name {\n  width: 16%;\n}\n.connection-container .connection-content .connection-body .filter .filter-parent-name .filter-box {\n  width: 40%;\n}\n.connection-container .connection-content .connection-body .filter .filter-connection-number {\n  width: 16%;\n}\n.connection-container .connection-content .connection-body .filter .filter-connection-number .filter-box {\n  width: 35%;\n}\n.connection-container .connection-content .connection-body .filter .filter-fail-connection {\n  width: 16%;\n}\n.connection-container .connection-content .connection-body .filter .filter-fail-connection .filter-box {\n  width: 35%;\n}\n.connection-container .connection-content .connection-body .filter .filter-utilisation {\n  width: 15%;\n}\n.connection-container .connection-content .connection-body .filter .filter-utilisation .filter-box {\n  width: 35%;\n}\n.connection-container .connection-content .connection-body .filter .filter-state {\n  width: 15%;\n}\n.connection-container .connection-content .connection-body .filter .filter-state .filter-box {\n  width: 35%;\n}\n.connection-container .connection-content .connection-body .connection-tr {\n  display: flex;\n  flex-direction: column;\n  background-color: white;\n  border-left: 1px solid #e7e7ec;\n  border-right: 1px solid #e7e7ec;\n}\n.connection-container .connection-content .connection-body .connection-tr .connection-td {\n  width: 100%;\n  height: 34px;\n  border-radius: 0px;\n  background-color: white;\n  font-size: 13px;\n}\n.connection-container .connection-content .connection-body .connection-tr .divider {\n  width: 93%;\n}\n.connection-container .connection-content .connection-body .connection-tr .divider hr {\n  border-top: 1px solid #e7e7ec;\n}\n.connection-container .connection-content .connection-body .page-container {\n  background-color: #dfe2ee !important;\n  border: 1px solid #c1c3c9;\n  border-radius: 0px 0px 4px 4px;\n}\n.connection-container .connection-content .connection-body .page-container .page-content {\n  display: flex;\n  justify-content: space-between;\n  text-align: left;\n  align-items: center;\n  color: #333333;\n}\n.connection-container .connection-content .connection-body .page-container .page-content > .pagination-left {\n  width: 30%;\n}\n.connection-container .connection-content .connection-body .page-container .page-content > .pagination-right {\n  width: 22%;\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-end;\n  align-items: center;\n}\n.connection-container .connection-content .connection-body .page-container .page-content > .pagination-right .page-details {\n  display: flex;\n  flex-direction: row;\n  justify-content: center !important;\n  align-items: center;\n}\n.connection-container .connection-content .connection-body .page-container .page-content > .pagination-right .page-details .page-number {\n  color: #333333;\n  border: 1px solid #c1c3c9;\n}\n.connection-container .connection-content .connection-body .page-container .page-content > .pagination-right .page-details .page-number:focus {\n  outline-style: none;\n  color: #333333;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hcHBsZS9wcm9qZWN0L2RleGNlbnRlci1kYXNoYm9hcmQvc3JjL2FwcC9sYXlvdXQvc3lzdGVtcy1jb25uZWN0aW9uL2Nvbm5lY3Rpb24tdGFibGUvY29ubmVjdGlvbi10YWJsZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbGF5b3V0L3N5c3RlbXMtY29ubmVjdGlvbi9jb25uZWN0aW9uLXRhYmxlL2Nvbm5lY3Rpb24tdGFibGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBd0JBO0VBQ0ksV0FBQTtFQUNBLGFBQUE7RUFDQSx5QkFBQTtFQUNBLDhCQUFBO0VBQ0EsdUJBQUE7QUN2Qko7QUR3Qkk7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7QUN0QlI7QUR1QlE7RUFDSSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxjQUFBO0FDckJaO0FEc0JZO0VBQ0ksa0JBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtBQ3BCaEI7QURxQmdCO0VBQ0ksV0FBQTtFQUNBLGFBQUE7QUNuQnBCO0FEb0JvQjtFQUNJLFdBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0FDbEJ4QjtBRG9Cb0I7RUFDSSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EsVUFBQTtFQUNBLFFBQUE7QUNsQnhCO0FEcUJnQjtFQUNJLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFFBQUE7QUNuQnBCO0FEdUJRO0VBQ0ksV0FBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtBQ3JCWjtBRHVCWTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxvQkFBQTtFQUNBLHlCQUFBO0VBQ0EsOEJBQUE7RUFDQSxZQUFBO0FDckJoQjtBRHNCZ0I7RUE1RVosVUFBQTtBQ3lESjtBRHNCZ0I7RUEzRVosVUFBQTtBQ3dESjtBRHNCZ0I7RUExRVosVUFBQTtBQ3VESjtBRHNCZ0I7RUF6RVosVUFBQTtBQ3NESjtBRHNCZ0I7RUF4RVosVUFBQTtBQ3FESjtBRHNCZ0I7RUF2RVosVUFBQTtFQXlFZ0IsYUFBQTtFQUNBLG1CQUFBO0FDcEJwQjtBRHFCb0I7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FDbkJ4QjtBRHFCb0I7RUFDSSxvSEFBQTtFQUNBLDRCQUFBO0VBQ0EsMEJBQUE7QUNuQnhCO0FEcUJvQjtFQUNJLGtIQUFBO0VBQ0EsMEJBQUE7RUFDQSw0QkFBQTtBQ25CeEI7QUR3Qlk7RUFDSSxXQUFBO0VBQ0EsdUJBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7QUN0QmhCO0FEdUJnQjtFQXhIWixVQUFBO0FDb0dKO0FEc0JvQjtFQUNJLFVBQUE7QUNwQnhCO0FEdUJnQjtFQTFIWixVQUFBO0FDc0dKO0FEc0JvQjtFQUNJLFVBQUE7QUNwQnhCO0FEdUJnQjtFQTVIWixVQUFBO0FDd0dKO0FEc0JvQjtFQUNJLFVBQUE7QUNwQnhCO0FEdUJnQjtFQTlIWixVQUFBO0FDMEdKO0FEc0JvQjtFQUNJLFVBQUE7QUNwQnhCO0FEdUJnQjtFQWhJWixVQUFBO0FDNEdKO0FEc0JvQjtFQUNJLFVBQUE7QUNwQnhCO0FEdUJnQjtFQWxJWixVQUFBO0FDOEdKO0FEc0JvQjtFQUNJLFVBQUE7QUNwQnhCO0FEeUJZO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSw4QkFBQTtFQUNBLCtCQUFBO0FDdkJoQjtBRHdCZ0I7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsdUJBQUE7RUFDQSxlQUFBO0FDdEJwQjtBRHdCZ0I7RUFDSSxVQUFBO0FDdEJwQjtBRHVCb0I7RUFDSSw2QkFBQTtBQ3JCeEI7QUQwQlk7RUFDSSxvQ0FBQTtFQUNBLHlCQUFBO0VBQ0EsOEJBQUE7QUN4QmhCO0FEeUJnQjtFQUNJLGFBQUE7RUFDQSw4QkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0FDdkJwQjtBRHdCb0I7RUFDSSxVQUFBO0FDdEJ4QjtBRHdCb0I7RUFDSSxVQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtBQ3RCeEI7QUR1QndCO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0NBQUE7RUFDQSxtQkFBQTtBQ3JCNUI7QURzQjRCO0VBQ0ksY0FBQTtFQUNBLHlCQUFBO0FDcEJoQztBRHNCNEI7RUFDSSxtQkFBQTtFQUNBLGNBQUE7QUNwQmhDIiwiZmlsZSI6InNyYy9hcHAvbGF5b3V0L3N5c3RlbXMtY29ubmVjdGlvbi9jb25uZWN0aW9uLXRhYmxlL2Nvbm5lY3Rpb24tdGFibGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAbWl4aW4gdGFibGUtY29sMSB7XG4gICAgd2lkdGg6IDE2JTtcbn1cblxuQG1peGluIHRhYmxlLWNvbDIge1xuICAgIHdpZHRoOiAxNiU7XG59XG5cbkBtaXhpbiB0YWJsZS1jb2wzIHtcbiAgICB3aWR0aDogMTYlO1xufVxuXG5AbWl4aW4gdGFibGUtY29sNCB7XG4gICAgd2lkdGg6IDE2JTtcbn1cblxuQG1peGluIHRhYmxlLWNvbDUge1xuICAgIHdpZHRoOiAxNSU7XG59XG5cbkBtaXhpbiB0YWJsZS1jb2w2IHtcbiAgICB3aWR0aDogMTUlO1xufVxuXG4uY29ubmVjdGlvbi1jb250YWluZXIge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogNTIwcHg7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2NjY2NjYztcbiAgICBib3JkZXItcmFkaXVzOiAwcHggN3B4IDdweCA3cHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgLmNvbm5lY3Rpb24tY29udGVudCB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgIC5jb25uZWN0aW9uLWhlYWRlciB7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICAgICAgY29sb3I6ICMxMTExMTE7XG4gICAgICAgICAgICAuc2VhcmNoLWJveCB7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgICAgIHdpZHRoOiAyODhweDtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDMwcHg7XG4gICAgICAgICAgICAgICAgZGl2IHtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgICAgICYgPiBpbnB1dCB7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDZweCAxMnB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1pbmRlbnQ6IDIwcHg7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgJiA+IGltZyB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgyNzBkZWcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgbGVmdDogMTBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvcDogOHB4O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICYgPiBpbWcge1xuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgICAgIHJpZ2h0OiAxMHB4O1xuICAgICAgICAgICAgICAgICAgICB0b3A6IDhweDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLmNvbm5lY3Rpb24tYm9keSB7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgICAgLy8gdGFibGUtcm93cyBhbmQgaGVhZGVyXG4gICAgICAgICAgICAuY29ubmVjdGlvbi1yb3d0aXRsZSB7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICAgICAgICAgICAgcGFkZGluZy10b3A6IDEycHg7XG4gICAgICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDEycHg7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2RmZTJlZTtcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA0cHggNHB4IDBweCAwcHg7XG4gICAgICAgICAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgICAgICAgICAgIC5zeXN0ZW0tbmFtZSB7XG4gICAgICAgICAgICAgICAgICAgIEBpbmNsdWRlIHRhYmxlLWNvbDE7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC5wYXJlbnQtbmFtZSB7XG4gICAgICAgICAgICAgICAgICAgIEBpbmNsdWRlIHRhYmxlLWNvbDI7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC5jb25uZWN0aW9uLW51bWJlciB7XG4gICAgICAgICAgICAgICAgICAgIEBpbmNsdWRlIHRhYmxlLWNvbDM7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC5mYWlsLWNvbm5lY3Rpb24ge1xuICAgICAgICAgICAgICAgICAgICBAaW5jbHVkZSB0YWJsZS1jb2w0O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAudXRpbGlzYXRpb24ge1xuICAgICAgICAgICAgICAgICAgICBAaW5jbHVkZSB0YWJsZS1jb2w1O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAuc3RhdGUge1xuICAgICAgICAgICAgICAgICAgICBAaW5jbHVkZSB0YWJsZS1jb2w2O1xuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgICAgICAgICAuc3RhdHVzLWluZGljYXRvciB7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTVweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTVweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1zdHlsZTogbm9uZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAuV29ya2luZyB7XG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJ3NyY2h0dHBzOi8vZnJlZWhvc3Qtc3BlYy5naXRodWIuaW8vZGV4Y2VudGVyLWRhc2hib2FyZC9hc3NldHMvaW1hZ2VzL2ljb25zL2NoZWNrLWNpcmNsZS5zdmcnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IDE1cHggMTVweDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAuRmFpbCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJ3NyY2h0dHBzOi8vZnJlZWhvc3Qtc3BlYy5naXRodWIuaW8vZGV4Y2VudGVyLWRhc2hib2FyZC9hc3NldHMvaW1hZ2VzL2ljb25zL2Vycm9yLWljb24uc3ZnJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IDE1cHggMTVweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBmaWx0ZXIgcm93XG4gICAgICAgICAgICAuZmlsdGVyIHtcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgIGhlaWdodDogNTBweDtcbiAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNlN2U3ZWM7XG4gICAgICAgICAgICAgICAgLmZpbHRlci1zeXN0ZW0tbmFtZSB7XG4gICAgICAgICAgICAgICAgICAgIEBpbmNsdWRlIHRhYmxlLWNvbDE7XG4gICAgICAgICAgICAgICAgICAgIC5maWx0ZXItYm94IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiA0MCU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLmZpbHRlci1wYXJlbnQtbmFtZSB7XG4gICAgICAgICAgICAgICAgICAgIEBpbmNsdWRlIHRhYmxlLWNvbDI7XG4gICAgICAgICAgICAgICAgICAgIC5maWx0ZXItYm94IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiA0MCU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLmZpbHRlci1jb25uZWN0aW9uLW51bWJlciB7XG4gICAgICAgICAgICAgICAgICAgIEBpbmNsdWRlIHRhYmxlLWNvbDM7XG4gICAgICAgICAgICAgICAgICAgIC5maWx0ZXItYm94IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAzNSU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLmZpbHRlci1mYWlsLWNvbm5lY3Rpb24ge1xuICAgICAgICAgICAgICAgICAgICBAaW5jbHVkZSB0YWJsZS1jb2w0O1xuICAgICAgICAgICAgICAgICAgICAuZmlsdGVyLWJveCB7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMzUlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC5maWx0ZXItdXRpbGlzYXRpb24ge1xuICAgICAgICAgICAgICAgICAgICBAaW5jbHVkZSB0YWJsZS1jb2w1O1xuICAgICAgICAgICAgICAgICAgICAuZmlsdGVyLWJveCB7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMzUlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC5maWx0ZXItc3RhdGUge1xuICAgICAgICAgICAgICAgICAgICBAaW5jbHVkZSB0YWJsZS1jb2w2O1xuICAgICAgICAgICAgICAgICAgICAuZmlsdGVyLWJveCB7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMzUlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gIHRhYmxlIGRlc2NyaXB0aW9uXG4gICAgICAgICAgICAuY29ubmVjdGlvbi10ciB7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgICAgIGJvcmRlci1sZWZ0OiAxcHggc29saWQgI2U3ZTdlYztcbiAgICAgICAgICAgICAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjZTdlN2VjO1xuICAgICAgICAgICAgICAgIC5jb25uZWN0aW9uLXRkIHtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMzRweDtcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMHB4O1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxM3B4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAuZGl2aWRlciB7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiA5MyU7XG4gICAgICAgICAgICAgICAgICAgIGhyIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZTdlN2VjO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gcGFnaW5hdGlvblxuICAgICAgICAgICAgLnBhZ2UtY29udGFpbmVyIHtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGZlMmVlICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2MxYzNjOTtcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAwcHggMHB4IDRweCA0cHg7XG4gICAgICAgICAgICAgICAgLnBhZ2UtY29udGVudCB7XG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICMzMzMzMzM7XG4gICAgICAgICAgICAgICAgICAgICYgPiAucGFnaW5hdGlvbi1sZWZ0IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAzMCU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgJiA+IC5wYWdpbmF0aW9uLXJpZ2h0IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAyMiU7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgICAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gICAgICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgLnBhZ2UtZGV0YWlscyB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAucGFnZS1udW1iZXIge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzMzMzMzMztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2MxYzNjOTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLnBhZ2UtbnVtYmVyOmZvY3VzIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3V0bGluZS1zdHlsZTogbm9uZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICMzMzMzMzM7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuIiwiLmNvbm5lY3Rpb24tY29udGFpbmVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNTIwcHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNjY2NjY2M7XG4gIGJvcmRlci1yYWRpdXM6IDBweCA3cHggN3B4IDdweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG59XG4uY29ubmVjdGlvbi1jb250YWluZXIgLmNvbm5lY3Rpb24tY29udGVudCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG4uY29ubmVjdGlvbi1jb250YWluZXIgLmNvbm5lY3Rpb24tY29udGVudCAuY29ubmVjdGlvbi1oZWFkZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGNvbG9yOiAjMTExMTExO1xufVxuLmNvbm5lY3Rpb24tY29udGFpbmVyIC5jb25uZWN0aW9uLWNvbnRlbnQgLmNvbm5lY3Rpb24taGVhZGVyIC5zZWFyY2gtYm94IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogMjg4cHg7XG4gIGhlaWdodDogMzBweDtcbn1cbi5jb25uZWN0aW9uLWNvbnRhaW5lciAuY29ubmVjdGlvbi1jb250ZW50IC5jb25uZWN0aW9uLWhlYWRlciAuc2VhcmNoLWJveCBkaXYge1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbn1cbi5jb25uZWN0aW9uLWNvbnRhaW5lciAuY29ubmVjdGlvbi1jb250ZW50IC5jb25uZWN0aW9uLWhlYWRlciAuc2VhcmNoLWJveCBkaXYgPiBpbnB1dCB7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiA2cHggMTJweDtcbiAgdGV4dC1pbmRlbnQ6IDIwcHg7XG59XG4uY29ubmVjdGlvbi1jb250YWluZXIgLmNvbm5lY3Rpb24tY29udGVudCAuY29ubmVjdGlvbi1oZWFkZXIgLnNlYXJjaC1ib3ggZGl2ID4gaW1nIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0cmFuc2Zvcm06IHJvdGF0ZSgyNzBkZWcpO1xuICBsZWZ0OiAxMHB4O1xuICB0b3A6IDhweDtcbn1cbi5jb25uZWN0aW9uLWNvbnRhaW5lciAuY29ubmVjdGlvbi1jb250ZW50IC5jb25uZWN0aW9uLWhlYWRlciAuc2VhcmNoLWJveCA+IGltZyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDEwcHg7XG4gIHRvcDogOHB4O1xufVxuLmNvbm5lY3Rpb24tY29udGFpbmVyIC5jb25uZWN0aW9uLWNvbnRlbnQgLmNvbm5lY3Rpb24tYm9keSB7XG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuLmNvbm5lY3Rpb24tY29udGFpbmVyIC5jb25uZWN0aW9uLWNvbnRlbnQgLmNvbm5lY3Rpb24tYm9keSAuY29ubmVjdGlvbi1yb3d0aXRsZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIHBhZGRpbmctdG9wOiAxMnB4O1xuICBwYWRkaW5nLWJvdHRvbTogMTJweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2RmZTJlZTtcbiAgYm9yZGVyLXJhZGl1czogNHB4IDRweCAwcHggMHB4O1xuICBib3JkZXI6IG5vbmU7XG59XG4uY29ubmVjdGlvbi1jb250YWluZXIgLmNvbm5lY3Rpb24tY29udGVudCAuY29ubmVjdGlvbi1ib2R5IC5jb25uZWN0aW9uLXJvd3RpdGxlIC5zeXN0ZW0tbmFtZSB7XG4gIHdpZHRoOiAxNiU7XG59XG4uY29ubmVjdGlvbi1jb250YWluZXIgLmNvbm5lY3Rpb24tY29udGVudCAuY29ubmVjdGlvbi1ib2R5IC5jb25uZWN0aW9uLXJvd3RpdGxlIC5wYXJlbnQtbmFtZSB7XG4gIHdpZHRoOiAxNiU7XG59XG4uY29ubmVjdGlvbi1jb250YWluZXIgLmNvbm5lY3Rpb24tY29udGVudCAuY29ubmVjdGlvbi1ib2R5IC5jb25uZWN0aW9uLXJvd3RpdGxlIC5jb25uZWN0aW9uLW51bWJlciB7XG4gIHdpZHRoOiAxNiU7XG59XG4uY29ubmVjdGlvbi1jb250YWluZXIgLmNvbm5lY3Rpb24tY29udGVudCAuY29ubmVjdGlvbi1ib2R5IC5jb25uZWN0aW9uLXJvd3RpdGxlIC5mYWlsLWNvbm5lY3Rpb24ge1xuICB3aWR0aDogMTYlO1xufVxuLmNvbm5lY3Rpb24tY29udGFpbmVyIC5jb25uZWN0aW9uLWNvbnRlbnQgLmNvbm5lY3Rpb24tYm9keSAuY29ubmVjdGlvbi1yb3d0aXRsZSAudXRpbGlzYXRpb24ge1xuICB3aWR0aDogMTUlO1xufVxuLmNvbm5lY3Rpb24tY29udGFpbmVyIC5jb25uZWN0aW9uLWNvbnRlbnQgLmNvbm5lY3Rpb24tYm9keSAuY29ubmVjdGlvbi1yb3d0aXRsZSAuc3RhdGUge1xuICB3aWR0aDogMTUlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLmNvbm5lY3Rpb24tY29udGFpbmVyIC5jb25uZWN0aW9uLWNvbnRlbnQgLmNvbm5lY3Rpb24tYm9keSAuY29ubmVjdGlvbi1yb3d0aXRsZSAuc3RhdGUgLnN0YXR1cy1pbmRpY2F0b3Ige1xuICB3aWR0aDogMTVweDtcbiAgaGVpZ2h0OiAxNXB4O1xuICBib3JkZXItc3R5bGU6IG5vbmU7XG59XG4uY29ubmVjdGlvbi1jb250YWluZXIgLmNvbm5lY3Rpb24tY29udGVudCAuY29ubmVjdGlvbi1ib2R5IC5jb25uZWN0aW9uLXJvd3RpdGxlIC5zdGF0ZSAuV29ya2luZyB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcInNyY2h0dHBzOi8vZnJlZWhvc3Qtc3BlYy5naXRodWIuaW8vZGV4Y2VudGVyLWRhc2hib2FyZC9hc3NldHMvaW1hZ2VzL2ljb25zL2NoZWNrLWNpcmNsZS5zdmdcIik7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtc2l6ZTogMTVweCAxNXB4O1xufVxuLmNvbm5lY3Rpb24tY29udGFpbmVyIC5jb25uZWN0aW9uLWNvbnRlbnQgLmNvbm5lY3Rpb24tYm9keSAuY29ubmVjdGlvbi1yb3d0aXRsZSAuc3RhdGUgLkZhaWwge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJzcmNodHRwczovL2ZyZWVob3N0LXNwZWMuZ2l0aHViLmlvL2RleGNlbnRlci1kYXNoYm9hcmQvYXNzZXRzL2ltYWdlcy9pY29ucy9lcnJvci1pY29uLnN2Z1wiKTtcbiAgYmFja2dyb3VuZC1zaXplOiAxNXB4IDE1cHg7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG59XG4uY29ubmVjdGlvbi1jb250YWluZXIgLmNvbm5lY3Rpb24tY29udGVudCAuY29ubmVjdGlvbi1ib2R5IC5maWx0ZXIge1xuICB3aWR0aDogMTAwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGhlaWdodDogNTBweDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYm9yZGVyOiAxcHggc29saWQgI2U3ZTdlYztcbn1cbi5jb25uZWN0aW9uLWNvbnRhaW5lciAuY29ubmVjdGlvbi1jb250ZW50IC5jb25uZWN0aW9uLWJvZHkgLmZpbHRlciAuZmlsdGVyLXN5c3RlbS1uYW1lIHtcbiAgd2lkdGg6IDE2JTtcbn1cbi5jb25uZWN0aW9uLWNvbnRhaW5lciAuY29ubmVjdGlvbi1jb250ZW50IC5jb25uZWN0aW9uLWJvZHkgLmZpbHRlciAuZmlsdGVyLXN5c3RlbS1uYW1lIC5maWx0ZXItYm94IHtcbiAgd2lkdGg6IDQwJTtcbn1cbi5jb25uZWN0aW9uLWNvbnRhaW5lciAuY29ubmVjdGlvbi1jb250ZW50IC5jb25uZWN0aW9uLWJvZHkgLmZpbHRlciAuZmlsdGVyLXBhcmVudC1uYW1lIHtcbiAgd2lkdGg6IDE2JTtcbn1cbi5jb25uZWN0aW9uLWNvbnRhaW5lciAuY29ubmVjdGlvbi1jb250ZW50IC5jb25uZWN0aW9uLWJvZHkgLmZpbHRlciAuZmlsdGVyLXBhcmVudC1uYW1lIC5maWx0ZXItYm94IHtcbiAgd2lkdGg6IDQwJTtcbn1cbi5jb25uZWN0aW9uLWNvbnRhaW5lciAuY29ubmVjdGlvbi1jb250ZW50IC5jb25uZWN0aW9uLWJvZHkgLmZpbHRlciAuZmlsdGVyLWNvbm5lY3Rpb24tbnVtYmVyIHtcbiAgd2lkdGg6IDE2JTtcbn1cbi5jb25uZWN0aW9uLWNvbnRhaW5lciAuY29ubmVjdGlvbi1jb250ZW50IC5jb25uZWN0aW9uLWJvZHkgLmZpbHRlciAuZmlsdGVyLWNvbm5lY3Rpb24tbnVtYmVyIC5maWx0ZXItYm94IHtcbiAgd2lkdGg6IDM1JTtcbn1cbi5jb25uZWN0aW9uLWNvbnRhaW5lciAuY29ubmVjdGlvbi1jb250ZW50IC5jb25uZWN0aW9uLWJvZHkgLmZpbHRlciAuZmlsdGVyLWZhaWwtY29ubmVjdGlvbiB7XG4gIHdpZHRoOiAxNiU7XG59XG4uY29ubmVjdGlvbi1jb250YWluZXIgLmNvbm5lY3Rpb24tY29udGVudCAuY29ubmVjdGlvbi1ib2R5IC5maWx0ZXIgLmZpbHRlci1mYWlsLWNvbm5lY3Rpb24gLmZpbHRlci1ib3gge1xuICB3aWR0aDogMzUlO1xufVxuLmNvbm5lY3Rpb24tY29udGFpbmVyIC5jb25uZWN0aW9uLWNvbnRlbnQgLmNvbm5lY3Rpb24tYm9keSAuZmlsdGVyIC5maWx0ZXItdXRpbGlzYXRpb24ge1xuICB3aWR0aDogMTUlO1xufVxuLmNvbm5lY3Rpb24tY29udGFpbmVyIC5jb25uZWN0aW9uLWNvbnRlbnQgLmNvbm5lY3Rpb24tYm9keSAuZmlsdGVyIC5maWx0ZXItdXRpbGlzYXRpb24gLmZpbHRlci1ib3gge1xuICB3aWR0aDogMzUlO1xufVxuLmNvbm5lY3Rpb24tY29udGFpbmVyIC5jb25uZWN0aW9uLWNvbnRlbnQgLmNvbm5lY3Rpb24tYm9keSAuZmlsdGVyIC5maWx0ZXItc3RhdGUge1xuICB3aWR0aDogMTUlO1xufVxuLmNvbm5lY3Rpb24tY29udGFpbmVyIC5jb25uZWN0aW9uLWNvbnRlbnQgLmNvbm5lY3Rpb24tYm9keSAuZmlsdGVyIC5maWx0ZXItc3RhdGUgLmZpbHRlci1ib3gge1xuICB3aWR0aDogMzUlO1xufVxuLmNvbm5lY3Rpb24tY29udGFpbmVyIC5jb25uZWN0aW9uLWNvbnRlbnQgLmNvbm5lY3Rpb24tYm9keSAuY29ubmVjdGlvbi10ciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBib3JkZXItbGVmdDogMXB4IHNvbGlkICNlN2U3ZWM7XG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNlN2U3ZWM7XG59XG4uY29ubmVjdGlvbi1jb250YWluZXIgLmNvbm5lY3Rpb24tY29udGVudCAuY29ubmVjdGlvbi1ib2R5IC5jb25uZWN0aW9uLXRyIC5jb25uZWN0aW9uLXRkIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMzRweDtcbiAgYm9yZGVyLXJhZGl1czogMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgZm9udC1zaXplOiAxM3B4O1xufVxuLmNvbm5lY3Rpb24tY29udGFpbmVyIC5jb25uZWN0aW9uLWNvbnRlbnQgLmNvbm5lY3Rpb24tYm9keSAuY29ubmVjdGlvbi10ciAuZGl2aWRlciB7XG4gIHdpZHRoOiA5MyU7XG59XG4uY29ubmVjdGlvbi1jb250YWluZXIgLmNvbm5lY3Rpb24tY29udGVudCAuY29ubmVjdGlvbi1ib2R5IC5jb25uZWN0aW9uLXRyIC5kaXZpZGVyIGhyIHtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNlN2U3ZWM7XG59XG4uY29ubmVjdGlvbi1jb250YWluZXIgLmNvbm5lY3Rpb24tY29udGVudCAuY29ubmVjdGlvbi1ib2R5IC5wYWdlLWNvbnRhaW5lciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNkZmUyZWUgIWltcG9ydGFudDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2MxYzNjOTtcbiAgYm9yZGVyLXJhZGl1czogMHB4IDBweCA0cHggNHB4O1xufVxuLmNvbm5lY3Rpb24tY29udGFpbmVyIC5jb25uZWN0aW9uLWNvbnRlbnQgLmNvbm5lY3Rpb24tYm9keSAucGFnZS1jb250YWluZXIgLnBhZ2UtY29udGVudCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgY29sb3I6ICMzMzMzMzM7XG59XG4uY29ubmVjdGlvbi1jb250YWluZXIgLmNvbm5lY3Rpb24tY29udGVudCAuY29ubmVjdGlvbi1ib2R5IC5wYWdlLWNvbnRhaW5lciAucGFnZS1jb250ZW50ID4gLnBhZ2luYXRpb24tbGVmdCB7XG4gIHdpZHRoOiAzMCU7XG59XG4uY29ubmVjdGlvbi1jb250YWluZXIgLmNvbm5lY3Rpb24tY29udGVudCAuY29ubmVjdGlvbi1ib2R5IC5wYWdlLWNvbnRhaW5lciAucGFnZS1jb250ZW50ID4gLnBhZ2luYXRpb24tcmlnaHQge1xuICB3aWR0aDogMjIlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLmNvbm5lY3Rpb24tY29udGFpbmVyIC5jb25uZWN0aW9uLWNvbnRlbnQgLmNvbm5lY3Rpb24tYm9keSAucGFnZS1jb250YWluZXIgLnBhZ2UtY29udGVudCA+IC5wYWdpbmF0aW9uLXJpZ2h0IC5wYWdlLWRldGFpbHMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlciAhaW1wb3J0YW50O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLmNvbm5lY3Rpb24tY29udGFpbmVyIC5jb25uZWN0aW9uLWNvbnRlbnQgLmNvbm5lY3Rpb24tYm9keSAucGFnZS1jb250YWluZXIgLnBhZ2UtY29udGVudCA+IC5wYWdpbmF0aW9uLXJpZ2h0IC5wYWdlLWRldGFpbHMgLnBhZ2UtbnVtYmVyIHtcbiAgY29sb3I6ICMzMzMzMzM7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNjMWMzYzk7XG59XG4uY29ubmVjdGlvbi1jb250YWluZXIgLmNvbm5lY3Rpb24tY29udGVudCAuY29ubmVjdGlvbi1ib2R5IC5wYWdlLWNvbnRhaW5lciAucGFnZS1jb250ZW50ID4gLnBhZ2luYXRpb24tcmlnaHQgLnBhZ2UtZGV0YWlscyAucGFnZS1udW1iZXI6Zm9jdXMge1xuICBvdXRsaW5lLXN0eWxlOiBub25lO1xuICBjb2xvcjogIzMzMzMzMztcbn0iXX0= */";
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
            id: 1,
            systemname: 'DB',
            parentname: 'DXS',
            connectionnumber: '10',
            failconnection: '0',
            utilisation: '100%',
            state: 'Working'
          }, {
            id: 2,
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
  "./src/app/layout/systems-connection/diagram-view/connection-info/connection-info.component.scss":
  /*!*******************************************************************************************************!*\
    !*** ./src/app/layout/systems-connection/diagram-view/connection-info/connection-info.component.scss ***!
    \*******************************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppLayoutSystemsConnectionDiagramViewConnectionInfoConnectionInfoComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xheW91dC9zeXN0ZW1zLWNvbm5lY3Rpb24vZGlhZ3JhbS12aWV3L2Nvbm5lY3Rpb24taW5mby9jb25uZWN0aW9uLWluZm8uY29tcG9uZW50LnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/layout/systems-connection/diagram-view/connection-info/connection-info.component.ts":
  /*!*****************************************************************************************************!*\
    !*** ./src/app/layout/systems-connection/diagram-view/connection-info/connection-info.component.ts ***!
    \*****************************************************************************************************/

  /*! exports provided: ConnectionInfoComponent */

  /***/
  function srcAppLayoutSystemsConnectionDiagramViewConnectionInfoConnectionInfoComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ConnectionInfoComponent", function () {
      return ConnectionInfoComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var ConnectionInfoComponent = /*#__PURE__*/function () {
      function ConnectionInfoComponent() {
        _classCallCheck(this, ConnectionInfoComponent);
      }

      _createClass(ConnectionInfoComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ConnectionInfoComponent;
    }();

    ConnectionInfoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-connection-info',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./connection-info.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/systems-connection/diagram-view/connection-info/connection-info.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./connection-info.component.scss */
      "./src/app/layout/systems-connection/diagram-view/connection-info/connection-info.component.scss"))["default"]]
    })], ConnectionInfoComponent);
    /***/
  },

  /***/
  "./src/app/layout/systems-connection/diagram-view/connections/connections.component.scss":
  /*!***********************************************************************************************!*\
    !*** ./src/app/layout/systems-connection/diagram-view/connections/connections.component.scss ***!
    \***********************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppLayoutSystemsConnectionDiagramViewConnectionsConnectionsComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xheW91dC9zeXN0ZW1zLWNvbm5lY3Rpb24vZGlhZ3JhbS12aWV3L2Nvbm5lY3Rpb25zL2Nvbm5lY3Rpb25zLmNvbXBvbmVudC5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/layout/systems-connection/diagram-view/connections/connections.component.ts":
  /*!*********************************************************************************************!*\
    !*** ./src/app/layout/systems-connection/diagram-view/connections/connections.component.ts ***!
    \*********************************************************************************************/

  /*! exports provided: ConnectionsComponent */

  /***/
  function srcAppLayoutSystemsConnectionDiagramViewConnectionsConnectionsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ConnectionsComponent", function () {
      return ConnectionsComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var ConnectionsComponent = /*#__PURE__*/function () {
      function ConnectionsComponent() {
        _classCallCheck(this, ConnectionsComponent);
      }

      _createClass(ConnectionsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ConnectionsComponent;
    }();

    ConnectionsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-connections',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./connections.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/systems-connection/diagram-view/connections/connections.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./connections.component.scss */
      "./src/app/layout/systems-connection/diagram-view/connections/connections.component.scss"))["default"]]
    })], ConnectionsComponent);
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


    __webpack_exports__["default"] = ".connection-view {\n  display: flex;\n  justify-content: space-between;\n}\n.connection-view > .filter {\n  width: 250px;\n  background-color: #fff;\n}\n.connection-view > .info {\n  width: 325px;\n  background-color: #fff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hcHBsZS9wcm9qZWN0L2RleGNlbnRlci1kYXNoYm9hcmQvc3JjL2FwcC9sYXlvdXQvc3lzdGVtcy1jb25uZWN0aW9uL2RpYWdyYW0tdmlldy9kaWFncmFtLXZpZXcuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2xheW91dC9zeXN0ZW1zLWNvbm5lY3Rpb24vZGlhZ3JhbS12aWV3L2RpYWdyYW0tdmlldy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSw4QkFBQTtBQ0NGO0FEQUU7RUFDRSxZQUFBO0VBQ0Esc0JBQUE7QUNFSjtBREVFO0VBQ0UsWUFBQTtFQUNBLHNCQUFBO0FDQUoiLCJmaWxlIjoic3JjL2FwcC9sYXlvdXQvc3lzdGVtcy1jb25uZWN0aW9uL2RpYWdyYW0tdmlldy9kaWFncmFtLXZpZXcuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29ubmVjdGlvbi12aWV3IHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAmID4gLmZpbHRlciB7XG4gICAgd2lkdGg6IDI1MHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIH1cbiAgJiA+IC5jaXJjbGUge1xuICB9XG4gICYgPiAuaW5mbyB7XG4gICAgd2lkdGg6IDMyNXB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIH1cbn1cbiIsIi5jb25uZWN0aW9uLXZpZXcge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG4uY29ubmVjdGlvbi12aWV3ID4gLmZpbHRlciB7XG4gIHdpZHRoOiAyNTBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbn1cbi5jb25uZWN0aW9uLXZpZXcgPiAuaW5mbyB7XG4gIHdpZHRoOiAzMjVweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbn0iXX0= */";
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
  "./src/app/layout/systems-connection/diagram-view/diagram/diagram.component.scss":
  /*!***************************************************************************************!*\
    !*** ./src/app/layout/systems-connection/diagram-view/diagram/diagram.component.scss ***!
    \***************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppLayoutSystemsConnectionDiagramViewDiagramDiagramComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".system-diagram > .outer-circle {\n  position: relative;\n  border-radius: 50%;\n  width: 700px;\n  height: 700px;\n  background-color: #fff;\n  border: 1px solid #989898;\n}\n.system-diagram > .outer-circle > .inner-circle-1 {\n  transform: translate(66%, 66%);\n  width: 300px;\n  height: 300px;\n  background-color: #ddd;\n  border-radius: 50%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n.system-diagram > .outer-circle > .inner-circle-1 .circle-content {\n  display: flex;\n  align-items: center;\n  margin-top: 86%;\n}\n.system-diagram > .outer-circle > .inner-circle-2 {\n  transform: translate(124%, -24%);\n  width: 200px;\n  height: 200px;\n  background-color: #ccc;\n  border-radius: 50%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n.system-diagram > .outer-circle > .inner-circle-2 .circle-content {\n  display: flex;\n  align-items: center;\n  margin-top: 80%;\n}\n.system-diagram > .outer-circle > .inner-circle-3 {\n  transform: translate(300%, -200%);\n  width: 100px;\n  height: 100px;\n  background-color: #034ea2;\n  border-radius: 50%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n}\n.system-diagram > .outer-circle .horizontal-logo {\n  transform: rotateZ(90deg);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hcHBsZS9wcm9qZWN0L2RleGNlbnRlci1kYXNoYm9hcmQvc3JjL2FwcC9sYXlvdXQvc3lzdGVtcy1jb25uZWN0aW9uL2RpYWdyYW0tdmlldy9kaWFncmFtL2RpYWdyYW0uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2xheW91dC9zeXN0ZW1zLWNvbm5lY3Rpb24vZGlhZ3JhbS12aWV3L2RpYWdyYW0vZGlhZ3JhbS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDRTtFQUNFLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EseUJBQUE7QUNBSjtBRENJO0VBQ0UsOEJBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtBQ0NOO0FEQU07RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0FDRVI7QURDSTtFQUNFLGdDQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7QUNDTjtBREFNO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtBQ0VSO0FEQ0k7RUFDRSxpQ0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7QUNDTjtBRENJO0VBQ0UseUJBQUE7QUNDTiIsImZpbGUiOiJzcmMvYXBwL2xheW91dC9zeXN0ZW1zLWNvbm5lY3Rpb24vZGlhZ3JhbS12aWV3L2RpYWdyYW0vZGlhZ3JhbS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zeXN0ZW0tZGlhZ3JhbSB7XG4gICYgPiAub3V0ZXItY2lyY2xlIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIHdpZHRoOiA3MDBweDtcbiAgICBoZWlnaHQ6IDcwMHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgYm9yZGVyOiAxcHggc29saWQgIzk4OTg5ODtcbiAgICAmID4gLmlubmVyLWNpcmNsZS0xIHtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDY2JSwgNjYlKTtcbiAgICAgIHdpZHRoOiAzMDBweDtcbiAgICAgIGhlaWdodDogMzAwcHg7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGRkO1xuICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgLmNpcmNsZS1jb250ZW50IHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgbWFyZ2luLXRvcDogODYlO1xuICAgICAgfVxuICAgIH1cbiAgICAmID4gLmlubmVyLWNpcmNsZS0yIHtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDEyNCUsIC0yNCUpO1xuICAgICAgd2lkdGg6IDIwMHB4O1xuICAgICAgaGVpZ2h0OiAyMDBweDtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNjY2M7XG4gICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAuY2lyY2xlLWNvbnRlbnQge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBtYXJnaW4tdG9wOiA4MCU7XG4gICAgICB9XG4gICAgfVxuICAgICYgPiAuaW5uZXItY2lyY2xlLTMge1xuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMzAwJSwgLTIwMCUpO1xuICAgICAgd2lkdGg6IDEwMHB4O1xuICAgICAgaGVpZ2h0OiAxMDBweDtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICMwMzRlYTI7XG4gICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICB9XG4gICAgLmhvcml6b250YWwtbG9nbyB7XG4gICAgICB0cmFuc2Zvcm06IHJvdGF0ZVooOTBkZWcpO1xuICAgIH1cbiAgfVxufVxuIiwiLnN5c3RlbS1kaWFncmFtID4gLm91dGVyLWNpcmNsZSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICB3aWR0aDogNzAwcHg7XG4gIGhlaWdodDogNzAwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIGJvcmRlcjogMXB4IHNvbGlkICM5ODk4OTg7XG59XG4uc3lzdGVtLWRpYWdyYW0gPiAub3V0ZXItY2lyY2xlID4gLmlubmVyLWNpcmNsZS0xIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoNjYlLCA2NiUpO1xuICB3aWR0aDogMzAwcHg7XG4gIGhlaWdodDogMzAwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNkZGQ7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5zeXN0ZW0tZGlhZ3JhbSA+IC5vdXRlci1jaXJjbGUgPiAuaW5uZXItY2lyY2xlLTEgLmNpcmNsZS1jb250ZW50IHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgbWFyZ2luLXRvcDogODYlO1xufVxuLnN5c3RlbS1kaWFncmFtID4gLm91dGVyLWNpcmNsZSA+IC5pbm5lci1jaXJjbGUtMiB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKDEyNCUsIC0yNCUpO1xuICB3aWR0aDogMjAwcHg7XG4gIGhlaWdodDogMjAwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNjY2M7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5zeXN0ZW0tZGlhZ3JhbSA+IC5vdXRlci1jaXJjbGUgPiAuaW5uZXItY2lyY2xlLTIgLmNpcmNsZS1jb250ZW50IHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgbWFyZ2luLXRvcDogODAlO1xufVxuLnN5c3RlbS1kaWFncmFtID4gLm91dGVyLWNpcmNsZSA+IC5pbm5lci1jaXJjbGUtMyB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKDMwMCUsIC0yMDAlKTtcbiAgd2lkdGg6IDEwMHB4O1xuICBoZWlnaHQ6IDEwMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDM0ZWEyO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuLnN5c3RlbS1kaWFncmFtID4gLm91dGVyLWNpcmNsZSAuaG9yaXpvbnRhbC1sb2dvIHtcbiAgdHJhbnNmb3JtOiByb3RhdGVaKDkwZGVnKTtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/layout/systems-connection/diagram-view/diagram/diagram.component.ts":
  /*!*************************************************************************************!*\
    !*** ./src/app/layout/systems-connection/diagram-view/diagram/diagram.component.ts ***!
    \*************************************************************************************/

  /*! exports provided: DiagramComponent */

  /***/
  function srcAppLayoutSystemsConnectionDiagramViewDiagramDiagramComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DiagramComponent", function () {
      return DiagramComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var DiagramComponent = /*#__PURE__*/function () {
      function DiagramComponent() {
        _classCallCheck(this, DiagramComponent);
      }

      _createClass(DiagramComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return DiagramComponent;
    }();

    DiagramComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-diagram',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./diagram.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/systems-connection/diagram-view/diagram/diagram.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./diagram.component.scss */
      "./src/app/layout/systems-connection/diagram-view/diagram/diagram.component.scss"))["default"]]
    })], DiagramComponent);
    /***/
  },

  /***/
  "./src/app/layout/systems-connection/diagram-view/info/info.component.scss":
  /*!*********************************************************************************!*\
    !*** ./src/app/layout/systems-connection/diagram-view/info/info.component.scss ***!
    \*********************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppLayoutSystemsConnectionDiagramViewInfoInfoComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xheW91dC9zeXN0ZW1zLWNvbm5lY3Rpb24vZGlhZ3JhbS12aWV3L2luZm8vaW5mby5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/layout/systems-connection/diagram-view/info/info.component.ts":
  /*!*******************************************************************************!*\
    !*** ./src/app/layout/systems-connection/diagram-view/info/info.component.ts ***!
    \*******************************************************************************/

  /*! exports provided: InfoComponent */

  /***/
  function srcAppLayoutSystemsConnectionDiagramViewInfoInfoComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "InfoComponent", function () {
      return InfoComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var InfoComponent = /*#__PURE__*/function () {
      function InfoComponent() {
        _classCallCheck(this, InfoComponent);
      }

      _createClass(InfoComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return InfoComponent;
    }();

    InfoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-info',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./info.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/systems-connection/diagram-view/info/info.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./info.component.scss */
      "./src/app/layout/systems-connection/diagram-view/info/info.component.scss"))["default"]]
    })], InfoComponent);
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
    /* harmony import */


    var _box_modal_box_modal_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./box-modal/box-modal.component */
    "./src/app/layout/systems-connection/box-modal/box-modal.component.ts");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/esm2015/material.js");
    /* harmony import */


    var _diagram_view_diagram_diagram_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./diagram-view/diagram/diagram.component */
    "./src/app/layout/systems-connection/diagram-view/diagram/diagram.component.ts");
    /* harmony import */


    var _diagram_view_connections_connections_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./diagram-view/connections/connections.component */
    "./src/app/layout/systems-connection/diagram-view/connections/connections.component.ts");
    /* harmony import */


    var _diagram_view_connection_info_connection_info_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./diagram-view/connection-info/connection-info.component */
    "./src/app/layout/systems-connection/diagram-view/connection-info/connection-info.component.ts");
    /* harmony import */


    var _diagram_view_info_info_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./diagram-view/info/info.component */
    "./src/app/layout/systems-connection/diagram-view/info/info.component.ts");

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
      declarations: [_systems_connections_component__WEBPACK_IMPORTED_MODULE_3__["SystemsConnectionsComponent"], _tabular_view_tabular_view_component__WEBPACK_IMPORTED_MODULE_4__["TabularViewComponent"], _diagram_view_diagram_view_component__WEBPACK_IMPORTED_MODULE_5__["DiagramViewComponent"], _box_box_component__WEBPACK_IMPORTED_MODULE_6__["BoxComponent"], _box_list_box_list_component__WEBPACK_IMPORTED_MODULE_7__["BoxListComponent"], _connection_table_connection_table_component__WEBPACK_IMPORTED_MODULE_8__["ConnectionTableComponent"], _box_modal_box_modal_component__WEBPACK_IMPORTED_MODULE_10__["BoxModalComponent"], _diagram_view_diagram_diagram_component__WEBPACK_IMPORTED_MODULE_12__["DiagramComponent"], _diagram_view_connections_connections_component__WEBPACK_IMPORTED_MODULE_13__["ConnectionsComponent"], _diagram_view_connection_info_connection_info_component__WEBPACK_IMPORTED_MODULE_14__["ConnectionInfoComponent"], _diagram_view_info_info_component__WEBPACK_IMPORTED_MODULE_15__["InfoComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_9__["RouterModule"].forChild(routes), _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatDialogModule"]],
      providers: [{
        provide: _angular_material__WEBPACK_IMPORTED_MODULE_11__["MAT_DIALOG_DATA"],
        useValue: {}
      }, {
        provide: _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatDialogRef"],
        useValue: {}
      }],
      entryComponents: [_box_modal_box_modal_component__WEBPACK_IMPORTED_MODULE_10__["BoxModalComponent"]]
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