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


    __webpack_exports__["default"] = "<div class=\"box-list-container mt-20\">\n    <div class=\"dxs-container\" (click)=\"dxsInformation()\">\n        <div class=\" dxs-icons pt-10 pl-15 pr-2 \">\n            <img src=\" https://freehost-spec.github.io/dexcenter-dashboard/assets/images/icons/icon-dxs.svg \" alt=\" \"\n                class=\"icons-5xl \">\n            <img src=\" https://freehost-spec.github.io/dexcenter-dashboard/assets/images/icons/ellipse-w.svg \" alt=\" \"\n                class=\"icons-xs \">\n        </div>\n        <div class=\"dxs-icons pt-5 pl-15 pr-5 \">\n            <div class=\"font-l font-white \">DXS</div>\n            <img src=\" https://freehost-spec.github.io/dexcenter-dashboard/assets/images/icons/icon-on-green.svg \"\n                alt=\" \" class=\"icons-l \">\n        </div>\n    </div>\n    <div class=\"box-list dts-boxlists\">\n        <div class=\"box-list \">\n            <div class=\"box-container ml-20 \">\n                <ng-container *ngFor=\"let item of dbs \">\n                    <app-box [data]=\"item \"></app-box>\n                </ng-container>\n                <div class=\"divider ml-10 mr-20 \"></div>\n            </div>\n\n            <div class=\"box-item\">\n                <ng-container *ngFor=\"let item of dts \">\n                    <app-box [data]=\"item\"></app-box>\n                </ng-container>\n            </div>\n        </div>\n    </div>\n</div>\n\n<div *ngIf=\"dxsInfo\">\n    <div class=\"boxInfo font-m\">\n        <div class=\"triangle-right\"></div>\n        <div class=\"session-item\">\n            <div class=\"item-name pl-20 pr-20 mt-10\">\n                <div>Usage summary</div>\n                <div class=\"item-data font-xl\" (click)=\"dxsmoreInformation()\">></div>\n            </div>\n            <div class=\"item-name pl-20 pr-20\">\n                <div>Queued For Processing</div>\n                <div class=\"item-data\">20</div>\n            </div>\n            <div class=\"item-name pl-20 pr-20\">\n                <div>Sessions Processing</div>\n                <div class=\"item-data\">20</div>\n            </div>\n            <div class=\"item-name pl-20 pr-20\">\n                <div>Sessions Complete</div>\n                <div class=\"item-data\">20</div>\n            </div>\n            <div class=\"item-name pl-20 pr-20\">\n                <div>Connectivity Speed to DS</div>\n                <div class=\"item-data\">2.5mb</div>\n            </div>\n            <div class=\"item-name pl-20 pr-20\">\n                <div>Connectivity Speed to DB</div>\n                <div class=\"item-data\">2.5mb</div>\n            </div>\n        </div>\n    </div>\n</div>\n\n\n<div *ngIf=\"dxsmoreInfo && dxsInfo\">\n    <div class=\"boxmoreInfo font-m\">\n        <div class=\"triangle-right\"></div>\n        <div class=\"session-item\">\n            <div class=\"item-name pl-20 pr-20 mt-10 fw-500\">\n                <div>Usage summary</div>\n                <div class=\"item-data font-m\">10/1/2020 <span class=\"font-xl ml-5 d-arrow\">&#8964;</span></div>\n            </div>\n            <div class=\"item-name pl-20 pr-20 mt-10\">\n                <div>MBs Exchanged:</div>\n                <div class=\"item-data font-m\">280353</div>\n            </div>\n            <hr class=\"ml-20 mr-20\">\n            <div class=\"item-name pl-20 pr-20\">\n                <div>Files Exchanged:</div>\n                <div class=\"item-data\">60065</div>\n            </div>\n            <hr class=\"ml-20 mr-20\">\n            <div class=\"item-name pl-20 pr-20\">\n                <div>Sessions:</div>\n                <div class=\"item-data\">6407</div>\n            </div>\n            <hr class=\"ml-20 mr-20\">\n            <div class=\"item-name pl-20 pr-20\">\n                <div>Outside Companies:</div>\n                <div class=\"item-data\">5065</div>\n            </div>\n            <hr class=\"ml-20 mr-20\">\n            <div class=\"item-name pl-20 pr-20\">\n                <div>Company Sites:</div>\n                <div class=\"item-data\">289</div>\n            </div>\n            <hr class=\"ml-20 mr-20\">\n            <div class=\"item-name pl-20 pr-20\">\n                <div>Registered Users:</div>\n                <div class=\"item-data\">14797</div>\n            </div>\n            <hr class=\"ml-20 mr-20\">\n            <div class=\"item-name pl-20 pr-20\">\n                <div>Company Users:</div>\n                <div class=\"item-data\">7184</div>\n            </div>\n            <hr class=\"ml-20 mr-20\">\n            <div class=\"item-name pl-20 pr-20\">\n                <div>New Registered Users:</div>\n                <div class=\"item-data\">188</div>\n            </div>\n        </div>\n    </div>\n</div>\n";
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


    __webpack_exports__["default"] = "<ng-container>\n    <div class=\"direct-connect\">\n        <div class=\"direct-connect-header\">\n            <div class=\"direct-connect-header font-l ml-20\">\n                DTS5- Direct connect\n            </div>\n            <img src=\"https://freehost-spec.github.io/dexcenter-dashboard/assets/images/icons/icon-close.svg\"\n                class=\"icons-xs mr-20 cp\" (click)=\"closeModal('true')\" alt=\" close \">\n        </div>\n        <div class=\"direct-connect-container\">\n            <div class=\"container-left\">\n                <div class=\"figure\">\n                    <div class=\"dxs\">\n                        <img src=\"https://freehost-spec.github.io/dexcenter-dashboard/assets/images/icons/icon-on-green.svg \"\n                            alt=\"status\" class=\"icons-s\">\n                        <img src=\"https://freehost-spec.github.io/dexcenter-dashboard/assets/images/icons/icon-dxs.svg \"\n                            alt=\"dxs\" class=\"icons-4xl mt-2 mb-2\">\n                        <div class=\"font-l font-white\">DXS</div>\n                    </div>\n                    <div class=\"connector1\">\n                        <img src=\"https://freehost-spec.github.io/dexcenter-dashboard/assets/images/icons/arrow-s.svg \"\n                            alt=\"DB connector\" class=\"dxs-db\">\n                        <img src=\"https://freehost-spec.github.io/dexcenter-dashboard/assets/images/icons/arrow-s.svg \"\n                            alt=\"DS connector\" class=\"dxs-ds\">\n                    </div>\n                    <div class=\"db-ds\">\n                        <div class=\"circle-box\">\n                            <div class=\"lightblue-circles db-circle\">\n                                <div class=\"icon-box\">\n                                    <img src=\"https://freehost-spec.github.io/dexcenter-dashboard/assets/images/icons/icon-on-green.svg \"\n                                        alt=\"status\" class=\"icons-xss\">\n                                </div>\n                                <div class=\"circle-content mt-5 mb-10\">\n                                    <img src=\"https://freehost-spec.github.io/dexcenter-dashboard/assets/images/icons/icon-db.svg \"\n                                        alt=\"dxs\" class=\"icons-xs\">\n                                    <div class=\"font-m font-blue ml-5\">DB</div>\n                                </div>\n                            </div>\n                        </div>\n                        <div>\n                            <img src=\"https://freehost-spec.github.io/dexcenter-dashboard/assets/images/icons/arrow-m.svg \"\n                                alt=\"DB connector\" class=\"dxs-dts\">\n                        </div>\n                        <div class=\"circle-box\">\n                            <div class=\"lightblue-circles ds-circle\">\n                                <div class=\"icon-box\">\n                                    <img src=\"https://freehost-spec.github.io/dexcenter-dashboard/assets/images/icons/icon-on-green.svg \"\n                                        alt=\"status\" class=\"icons-xss\">\n                                </div>\n                                <div class=\"circle-content mt-5 mb-10\">\n                                    <img src=\"https://freehost-spec.github.io/dexcenter-dashboard/assets/images/icons/icon-ds1.svg \"\n                                        alt=\"dxs\" class=\"icons-xs\">\n                                    <div class=\"font-m font-blue ml-5\">DS</div>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"connector2\">\n                        <img src=\"https://freehost-spec.github.io/dexcenter-dashboard/assets/images/icons/arrow-s.svg \"\n                            alt=\"DB connector\" class=\"dts-db\">\n                        <img src=\"https://freehost-spec.github.io/dexcenter-dashboard/assets/images/icons/arrow-s.svg \"\n                            alt=\"DS connector\" class=\"dts-ds\">\n                    </div>\n                    <div class=\"dts\">\n                        <div class=\"circle-box\">\n                            <div class=\"green-circles dts-circle\">\n                                <div class=\"icon-box\">\n                                    <img src=\"https://freehost-spec.github.io/dexcenter-dashboard/assets/images/icons/icon-on-green.svg \"\n                                        alt=\"status\" class=\"icons-xss\">\n                                </div>\n                                <div class=\"circle-content mt-5 mb-10\">\n                                    <img src=\"https://freehost-spec.github.io/dexcenter-dashboard/assets/images/icons/icon-dts.svg \"\n                                        alt=\"dxs\" class=\"icons-xs\">\n                                    <div class=\"font-m font-blue ml-5\">DTS5</div>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"container-right bg-white-color\">\n                <div class=\"task-container mt-10 ml-20 mr-20 fw-500\">\n                    <div class=\"font-l ml-10\">DTS5- SubTask Detail</div>\n                    <div class=\"content\">\n                        <div class=\"header mt-15 mb-5 ml-15 mr-15 font-m\">\n                            <div>DXS Component Name</div>\n                            <div class=\"mr-50\">Status</div>\n                        </div>\n                        <hr class=\"divider ml-15 mr-15\">\n                        <div class=\"description mt-7 mb-7 ml-15 mr-15 fw-400 font-m\">\n                            <div>CADScript</div>\n                            <div class=\"des-right ml-10\">\n                                <img src=\"https://freehost-spec.github.io/dexcenter-dashboard/assets/images/icons/check-circle.svg\"\n                                    alt=\"checked\">\n                                <div class=\"ml-5\">Installed</div>\n                            </div>\n                        </div>\n                        <hr class=\"divider ml-15 mr-15\">\n                        <div class=\"description mt-7 mb-7 ml-15 mr-15 fw-400 font-m\">\n                            <div>CADIQ</div>\n                            <div class=\"des-right ml-10\">\n                                <img src=\"https://freehost-spec.github.io/dexcenter-dashboard/assets/images/icons/check-circle.svg\"\n                                    alt=\"checked\">\n                                <div class=\"ml-5\">Installed</div>\n                            </div>\n                        </div>\n                        <hr class=\"divider ml-15 mr-15\">\n                        <div class=\"description mt-7 mb-7 ml-15 mr-15 fw-400 font-m\">\n                            <div>CAD System</div>\n                            <div class=\"des-right ml-15\">\n                                <img src=\"https://freehost-spec.github.io/dexcenter-dashboard/assets/images/icons/check-circle.svg\"\n                                    alt=\"checked\">\n                                <div class=\"ml-5\">Installed</div>\n                            </div>\n                        </div>\n                        <hr class=\"divider ml-15 mr-15\">\n                        <div class=\"description mt-7 mb-7 ml-15 mr-15 fw-400 font-m\">\n                            <div>Anark</div>\n                            <div class=\"des-right ml-15\">\n                                <img src=\"https://freehost-spec.github.io/dexcenter-dashboard/assets/images/icons/check-circle.svg\"\n                                    alt=\"checked\">\n                                <div class=\"ml-5\">Installed</div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"host-container fw-500 mt-10 ml-20 mr-20 \">\n                    <div class=\"font-l mt-15 ml-15\">DTS5- Host Detail</div>\n                    <div class=\"content\">\n                        <div class=\"description mt-10 mb-7 ml-15 mr-15 fw-400 font-m\">\n                            <div class=\"host-details\">Host-Name<span>:</span></div>\n                            <div class=\"des-right mr-10\">\n                                <div class=\"ml-5 fw-500\">Abc def</div>\n                            </div>\n                        </div>\n                        <hr class=\"divider ml-15 mr-15\">\n                        <div class=\"description mt-7 mb-7 ml-15 mr-15 fw-400 font-m\">\n                            <div class=\"host-details\">Doman Name <span>:</span></div>\n                            <div class=\"des-right mr-10\">\n                                <div class=\"ml-5 fw-500\">EF1234567888</div>\n                            </div>\n                        </div>\n                        <hr class=\"divider ml-15 mr-15\">\n                        <div class=\"description mt-7 mb-20 ml-15 mr-15 fw-400 font-m\">\n                            <div class=\"host-details\">IP address <span>:</span></div>\n                            <div class=\"des-right mr-10\">\n                                <div class=\"ml-5 fw-500\">P12345688</div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"log-container mt-10 ml-20 mr-20 fw-500\">\n                    <div class=\"font-l ml-15\">Log File</div>\n                    <div class=\"content\">\n                        <div class=\"header mt-10 mb-5 ml-15 mr-15 font-m\">\n                            <div>Current Level- INFO</div>\n                        </div>\n                        <div class=\"description mt-7 mb-7 ml-15 pr-10 fw-400 font-m\">\n                            <div>Download AdminConsole Log</div>\n                            <div class=\"des-right mr-10\">\n                                <img src=\"https://freehost-spec.github.io/dexcenter-dashboard/assets/images/icons/download.svg\"\n                                    alt=\"download\" class=\"ml-50\">\n                            </div>\n                        </div>\n                        <hr class=\"divider ml-15 mr-15\">\n                        <div class=\"description mt-7 mb-7 ml-15 pr-10 fw-400 font-m\">\n                            <div>Download DEXcenter App Log</div>\n                            <div class=\"des-right mr-10\">\n                                <img src=\"https://freehost-spec.github.io/dexcenter-dashboard/assets/images/icons/download.svg\"\n                                    alt=\"download\" class=\"ml-50\">\n                            </div>\n                        </div>\n                        <hr class=\"divider ml-15 mr-15\">\n                        <div class=\"description mt-7 mb-7 ml-15 pr-10 fw-400 font-m\">\n                            <div>Download DEXRESTAPI Log</div>\n                            <div class=\"des-right mr-10\">\n                                <img src=\"https://freehost-spec.github.io/dexcenter-dashboard/assets/images/icons/download.svg\"\n                                    alt=\"download\" class=\"ml-50\">\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n\n    </div>\n</ng-container>\n";
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


    __webpack_exports__["default"] = "<div class=\"box\">\n    <div class=\"box-container\">\n        <div class=\"box-scroll\">\n            <div class=\"box-right mr-10\">\n                <div class=\"dxs-container cp\">\n                    <div class=\"dxs-icons pt-10 pl-15 pr-2\">\n                        <img *ngIf=\"data.icon\"\n                            src=\" https://freehost-spec.github.io/dexcenter-dashboard/assets/images/icons/{{data.icon}}.svg \"\n                            alt=\" \" class=\"icons-xl mt-10 cp\">\n                        <img *ngIf=\"!data.icon\"\n                            src=\" https://freehost-spec.github.io/dexcenter-dashboard/assets/images/icons/icon-dts.svg \"\n                            alt=\" \" class=\"icons-xl mt-10 cp\" (click)=\"openConfig()\">\n                        <img src=\" https://freehost-spec.github.io/dexcenter-dashboard/assets/images/icons/ellipse-b.svg\"\n                            alt=\"more\" class=\"icons-xs cp\" (click)=\"showInfo()\">\n                    </div>\n                    <div class=\"dxs-icons pt-10 pl-15 pr-5\">\n                        <div class=\"font-l font-blue\" (click)=\"boxInformation()\">{{data.dtsname}}</div>\n                        <div class=\"state\">\n                            <div class=\"status-indicator {{data.state}}\"></div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n\n    <div *ngIf=\"boxInfo\">\n        <div class=\"boxInfo font-m\">\n            <div class=\"triangle-top\"></div>\n            <div class=\"session-item\">\n                <div class=\"item-name pl-20 pr-20 mt-10\">\n                    <div>Job Available</div>\n                    <div class=\"item-data\">12</div>\n                </div>\n                <div class=\"item-name pl-20 pr-20\">\n                    <div>Job in Use</div>\n                    <div class=\"item-data\">43</div>\n                </div>\n                <div class=\"item-name pl-20 pr-20\">\n                    <div>Connectivity Speed to DS</div>\n                    <div class=\"item-data\">2.5mb</div>\n                </div>\n                <div class=\"item-name pl-20 pr-20\">\n                    <div>Connectivity Speed to DB</div>\n                    <div class=\"item-data\">2.5mb</div>\n                </div>\n            </div>\n        </div>\n    </div>\n\n    <div *ngIf=\"viewInfo\">\n        <div class=\"viewInfo font-m\">\n            <div class=\"triangle-left\"></div>\n            <div class=\"session-item\">\n                <div class=\"item-name pl-20 pr-20 mt-10\">\n                    <div>CATIA V5</div>\n                </div>\n                <div class=\"item-name pl-20 pr-20\">\n                    <div>CIQ</div>\n                </div>\n                <div class=\"item-name pl-20 pr-20\">\n                    <div>https://domainname.com</div>\n                </div>\n                <div class=\"item-name pl-20 pr-20\">\n                    <div>Logs</div>\n                    <!-- <img src=\" https://freehost-spec.github.io/dexcenter-dashboard/assets/images/icons/arrow_right-24px.svg\" alt=\"more\"> -->\n                    <div class=\"font-xl\">></div>\n                </div>\n                <div class=\"item-name pl-20 pr-20\">\n                    <div>Host</div>\n                    <!-- <img src=\" https://freehost-spec.github.io/dexcenter-dashboard/assets/images/icons/arrow_right-24px.svg\" alt=\"more\"> -->\n                    <div class=\"font-xl\">></div>\n                </div>\n                <div class=\"item-name pl-20 pr-20\">\n                    <div>User App</div>\n                </div>\n            </div>\n        </div>\n    </div>\n\n</div>\n";
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


    __webpack_exports__["default"] = "<div class=\"connection-container mt-10\">\n    <div class=\"p-20 connection-content\">\n        <div class=\"connection-header\">\n            <div class=\"font-xl fw-500\">Systems Connections</div>\n            <div class=\"search-box mr-10\">\n                <div>\n                    <img src=\"https://freehost-spec.github.io/dexcenter-dashboard/assets/images/icons/icon-search.svg\"\n                        alt=\"Home\" class=\"icons-xxs\">\n                    <input type=\"text\" placeholder=\"Search\" name=\"search\">\n                </div>\n                <img src=\"https://freehost-spec.github.io/dexcenter-dashboard/assets/images/icons/icon-close.svg\"\n                    alt=\"Home\" class=\"icons-xxxs\">\n            </div>\n        </div>\n        <div class=\"connection-body mt-20 font-m\">\n            <!-- Table header -->\n            <div class=\"connection-rowtitle\">\n                <div class=\"system-name ml-50 fw-500\">System Name ↕</div>\n                <div class=\"parent-name fw-500\">Parent system Name ↕</div>\n                <div class=\"connection-number fw-500\">No of connection ↕</div>\n                <div class=\"fail-connection fw-500\">Connection Fail ↕</div>\n                <div class=\"utilisation fw-500\">Utilisation %↕</div>\n                <div class=\"state fw-500\">State↕</div>\n            </div>\n            <!-- Filter row -->\n            <div class=\"filter\">\n                <div class=\"filter-system-name ml-50\">\n                    <div class=\"filter-box\">\n                        <input type=\"text \" placeholder=\"Filter\" name=\"filter \">\n                        <img src=\" https://freehost-spec.github.io/dexcenter-dashboard/assets/images/icons/arrow_drop_down-24px.svg \"\n                            alt=\" \" class=\"icons-xs \">\n                    </div>\n                </div>\n                <div class=\"filter-parent-name\">\n                    <div class=\"filter-box\">\n                        <input type=\"text \" placeholder=\"Filter\" name=\"filter \">\n                        <img src=\" https://freehost-spec.github.io/dexcenter-dashboard/assets/images/icons/arrow_drop_down-24px.svg \"\n                            alt=\" \" class=\"icons-xs \">\n                    </div>\n                </div>\n                <div class=\"filter-connection-number\">\n                    <div class=\"filter-box\">\n                        <input type=\"text \" placeholder=\"Filter\" name=\"filter \">\n                        <img src=\" https://freehost-spec.github.io/dexcenter-dashboard/assets/images/icons/arrow_drop_down-24px.svg \"\n                            alt=\" \" class=\"icons-xs \">\n                    </div>\n                </div>\n                <div class=\"filter-fail-connection\">\n                    <div class=\"filter-box\">\n                        <input type=\"text \" placeholder=\"Filter\" name=\"filter \">\n                        <img src=\" https://freehost-spec.github.io/dexcenter-dashboard/assets/images/icons/arrow_drop_down-24px.svg \"\n                            alt=\" \" class=\"icons-xs \">\n                    </div>\n                </div>\n                <div class=\"filter-utilisation\">\n                    <div class=\"filter-box\">\n                        <input type=\"text \" placeholder=\"Filter\" name=\"filter \">\n                        <img src=\" https://freehost-spec.github.io/dexcenter-dashboard/assets/images/icons/arrow_drop_down-24px.svg \"\n                            alt=\" \" class=\"icons-xs \">\n                    </div>\n                </div>\n                <div class=\"filter-state\">\n                    <div class=\"filter-box\">\n                        <input type=\"text \" placeholder=\"Filter\" name=\"filter \">\n                        <img src=\" https://freehost-spec.github.io/dexcenter-dashboard/assets/images/icons/arrow_drop_down-24px.svg \"\n                            alt=\" \" class=\"icons-xs \">\n                    </div>\n                </div>\n            </div>\n            <!-- table descriptions -->\n            <ng-container *ngFor=\"let item of connectiondata\">\n                <div class=\"connection-tr\">\n                    <div class=\"connection-rowtitle connection-td\">\n                        <div class=\"system-name  ml-50\">{{item.systemname}}</div>\n                        <div class=\"parent-name\">{{item.parentname}}</div>\n                        <div class=\"connection-number\">{{item.connectionnumber}}</div>\n                        <div class=\"fail-connection\">{{item.failconnection}}</div>\n                        <div class=\"utilisation\">{{item.utilisation}}</div>\n                        <div class=\"state\">\n                            <div class=\"status-indicator mr-10 {{item.state}}\">\n                            </div>\n                            <p>{{item.state}}</p>\n                        </div>\n                    </div>\n                    <div class=\"ml-50 divider\">\n                        <hr>\n                    </div>\n                </div>\n            </ng-container>\n            <!-- Paggination -->\n            <ng-container>\n                <div class=\"page-container\">\n                    <div class=\"pt-5 pb-5 page-content\">\n                        <div class=\"pagination-left pl-20 pb-5 pt-5 font-s\">\n                            Viewing 07 of 200 Records\n                        </div>\n                        <div class=\"pagination-right font-s mr-30\">\n                            <div class=\"pb-5 pt-5\">\n                                <img src=\"https://freehost-spec.github.io/dexcenter-dashboard/assets/images/icons/skip_first.svg\"\n                                    alt=\"\" class=\"icons-xs\">\n                            </div>\n                            <div class=\"pb-5 pt-5\">\n                                <img src=\"https://freehost-spec.github.io/dexcenter-dashboard/assets/images/icons/skip_previous.svg\"\n                                    alt=\"\" class=\"icons-xs mr-10 ml-10\">\n                            </div>\n                            <div class=\"page-details\">\n                                <p>Page</p>\n                                <input type=\"text\" class=\"page-number ml-5 mr-5 p-5\" size=\"6\" value=\"1\">\n                                <p>of 76</p>\n                            </div>\n                            <div class=\"pb-5 pt-5\">\n                                <img src=\"https://freehost-spec.github.io/dexcenter-dashboard/assets/images/icons/skip_next.svg\"\n                                    alt=\"\" class=\"icons-xs mr-10 ml-10\">\n                            </div>\n                            <div class=\"pb-5 pt-5\">\n                                <img src=\"https://freehost-spec.github.io/dexcenter-dashboard/assets/images/icons/skip_last.svg\"\n                                    alt=\"\" class=\"icons-xs\">\n                            </div>\n                        </div>\n                    </div>\n\n                </div>\n            </ng-container>\n        </div>\n    </div>\n</div>\n";
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


    __webpack_exports__["default"] = "<div class=\"nav-container\">\n    <div class='header'>\n        <div class=\"search-box mt-15 ml-20\">\n            <div>\n                <img src=\"https://freehost-spec.github.io/dexcenter-dashboard/assets/images/icons/icon-search.svg\"\n                    alt=\"Home\" class=\"icons-xxs\">\n                <input type=\"text\" placeholder=\"Search\" name=\"search\">\n            </div>\n            <img src=\"https://freehost-spec.github.io/dexcenter-dashboard/assets/images/icons/icon-close.svg\" alt=\"Home\"\n                class=\"icons-xxxs\">\n        </div>\n        <img src=\"https://freehost-spec.github.io/dexcenter-dashboard/assets/images/icons/close.svg\" alt=\"Home\"\n            class=\"icons-xs mt-15 mr-15\">\n    </div>\n\n    <div class=\"mt-15 ml-20 workflow-ls\">\n        <ng-container *ngFor=\"let item of connectionsData\">\n            <div class=\"rows font-sm\">\n                <div class=\"min-max\">\n                    <img src=\"https://freehost-spec.github.io/dexcenter-dashboard/assets/images/icons/minus.svg \"\n                        alt=\"more \" width=\"8px\" height=\"8px\">\n                    <!-- <span>-</span> -->\n                </div>\n                <div class=\"dash\">&middot;&middot;&middot;&middot;</div>\n                <div class=\"status {{item.status}}\"></div>\n                <div class=\"ml-5 fw-500\">{{item.name}}</div>\n            </div>\n            <div class=\"db-data\">\n                <ng-container *ngFor=\"let item of item.data\">\n                    <div class=\"rows font-sm\">\n                        <img src=\"https://freehost-spec.github.io/dexcenter-dashboard/assets/images/icons/tree-arrow-2.svg\"\n                            alt=\"connector\" width=\"22px\" height=\"15px\" style=\"margin-left:-20px;\">\n                        <div class=\" min-max \">\n                            <img src=\"https://freehost-spec.github.io/dexcenter-dashboard/assets/images/icons/minus.svg \"\n                                alt=\"more \" width=\"8px \" height=\"8px \">\n                        </div>\n                        <div class=\"dash \">&middot;&middot;&middot;&middot;</div>\n                        <div class=\"status {{item.status}} \"></div>\n                        <div class=\"ml-5 fw-500 \">{{item.name}}</div>\n                    </div>\n                    <div class=\"ds-data\">\n                        <ng-container *ngFor=\"let item of item.data \">\n                            <div class=\"rows font-sm\" style=\"margin-left:10px;\">\n                                <div class=\"dash \">&#10231;&middot;&middot;&middot;&middot;</div>\n                                <div class=\"status {{item.status}} \"></div>\n                                <div class=\"ml-5 \">{{item.name}}</div>\n                            </div>\n                            <div class=\"pb-10\" style=\"margin-top: -20px;\">\n                                <img src=\"https://freehost-spec.github.io/dexcenter-dashboard/assets/images/icons/tree-arrow-1.svg\"\n                                    alt=\"connector\" width=\"60px\" height=\"15px\" style=\"margin-left:-30px;\">\n                            </div>\n                        </ng-container>\n                    </div>\n                </ng-container>\n            </div>\n        </ng-container>\n    </div>\n</div>\n";
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


    __webpack_exports__["default"] = "<div class=\"connection-view\">\n    <div class=\"filter mt-10\">\n        <app-connections></app-connections>\n    </div>\n    <div class=\"circle\">\n        <app-diagram></app-diagram>\n    </div>\n    <div class=\"info\">\n        <app-connection-info></app-connection-info>\n    </div>\n</div>";
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


    __webpack_exports__["default"] = "<div class=\"system-diagram\">\n    <div class=\"outer-circle\">\n        <div class=\"inner-circle-1\">\n            <div class=\"circle-content\">\n                <img src=\"https://freehost-spec.github.io/dexcenter-dashboard/assets/images/icons/icon-db.svg \"\n                    alt=\"dxs\" class=\"icons-xss mt-3 mb-2\">\n                <div class=\"font-m font-blue ml-5 mr-5\" (click)=\"boxInformation()\">DS</div>\n                <img src=\"https://freehost-spec.github.io/dexcenter-dashboard/assets/images/icons/icon-on-green.svg \"\n                    alt=\"status\" class=\"icons-xss\">\n            </div>\n            <img src=\"https://freehost-spec.github.io/dexcenter-dashboard/assets/images/icons/ellipse-b.svg\" alt=\"more\"\n                class=\"icons-s horizontal-logo mb-5\">\n        </div>\n        <div class=\"inner-circle-2\">\n            <div class=\"circle-content\">\n                <img src=\"https://freehost-spec.github.io/dexcenter-dashboard/assets/images/icons/icon-db.svg \"\n                    alt=\"dxs\" class=\"icons-xss mt-3 mb-2\">\n                <div class=\"font-m font-blue ml-5 mr-5\">DB</div>\n                <img src=\"https://freehost-spec.github.io/dexcenter-dashboard/assets/images/icons/icon-on-green.svg \"\n                    alt=\"status\" class=\"icons-xss\">\n            </div>\n            <img src=\"https://freehost-spec.github.io/dexcenter-dashboard/assets/images/icons/ellipse-b.svg\" alt=\"more\"\n                class=\"icons-s horizontal-logo mb-5\">\n        </div>\n        <div class=\"inner-circle-3\" (click)=\"dxsInformation()\">\n            <img src=\"https://freehost-spec.github.io/dexcenter-dashboard/assets/images/icons/icon-on-green.svg \"\n                alt=\"status\" class=\"icons-s mt-5\">\n            <img src=\"https://freehost-spec.github.io/dexcenter-dashboard/assets/images/icons/icon-dxs.svg \" alt=\"dxs\"\n                class=\"icons-4xl mt-2 mb-2\">\n            <div class=\"font-l font-white\">DXS</div>\n            <img src=\"https://freehost-spec.github.io/dexcenter-dashboard/assets/images/icons/ellipse-w.svg \" alt=\"more\"\n                class=\"icons-s horizontal-logo\">\n        </div>\n        <div class=\"box box1\">\n            <div class=\"circle-box circle1\">\n                <div class=\"green-circles\">\n                    <div class=\"icon-box\">\n                        <img src=\"https://freehost-spec.github.io/dexcenter-dashboard/assets/images/icons/icon-on-green.svg \"\n                            alt=\"status\" class=\"icons-xss\">\n                    </div>\n                    <div class=\"circle-content mt-10 mb-10\">\n                        <img src=\"https://freehost-spec.github.io/dexcenter-dashboard/assets/images/icons/icon-dts.svg \"\n                            alt=\"dxs\" class=\"icons-s\">\n                        <div class=\"font-m font-blue ml-5\">DTS1</div>\n                    </div>\n                    <img src=\"https://freehost-spec.github.io/dexcenter-dashboard/assets/images/icons/ellipse-b.svg\"\n                        alt=\"more\" class=\"icons-s horizontal-logo mb-5\">\n                </div>\n                <div class=\"arrows\">\n                    <div><img src=\"https://freehost-spec.github.io/dexcenter-dashboard/assets/images/icons/arrow-l.svg \"\n                            alt=\"DXS connector\"></div>\n                    <div><img src=\"https://freehost-spec.github.io/dexcenter-dashboard/assets/images/icons/arrow-m.svg \"\n                            alt=\"DB connector\"></div>\n                    <div><img src=\"https://freehost-spec.github.io/dexcenter-dashboard/assets/images/icons/arrow-s.svg \"\n                            alt=\"DS connector\"></div>\n                </div>\n            </div>\n            <div class=\"circle-box circle2 right-circles\">\n                <div class=\"green-circles\">\n                    <div class=\"icon-box\">\n                        <img src=\"https://freehost-spec.github.io/dexcenter-dashboard/assets/images/icons/icon-on-green.svg \"\n                            alt=\"status\" class=\"icons-xss\">\n                    </div>\n                    <div class=\"circle-content mt-10 mb-10\">\n                        <img src=\"https://freehost-spec.github.io/dexcenter-dashboard/assets/images/icons/icon-dts.svg \"\n                            alt=\"dxs\" class=\"icons-s\">\n                        <div class=\"font-m font-blue ml-5\">DTS2</div>\n                    </div>\n                    <img src=\"https://freehost-spec.github.io/dexcenter-dashboard/assets/images/icons/ellipse-b.svg\"\n                        alt=\"more\" class=\"icons-s horizontal-logo mb-5\">\n                </div>\n                <div class=\"arrows\">\n                    <div><img src=\"https://freehost-spec.github.io/dexcenter-dashboard/assets/images/icons/arrow-l.svg \"\n                            alt=\"DXS connector\"></div>\n                    <div><img src=\"https://freehost-spec.github.io/dexcenter-dashboard/assets/images/icons/arrow-m.svg \"\n                            alt=\"DB connector\"></div>\n                    <div><img src=\"https://freehost-spec.github.io/dexcenter-dashboard/assets/images/icons/arrow-s.svg \"\n                            alt=\"DS connector\"></div>\n                </div>\n            </div>\n        </div>\n        <div class=\"box box2\">\n            <div class=\"circle-box circle1\">\n                <div class=\"green-circles\">\n                    <div class=\"icon-box\">\n                        <img src=\"https://freehost-spec.github.io/dexcenter-dashboard/assets/images/icons/icon-on-green.svg \"\n                            alt=\"status\" class=\"icons-xss\">\n                    </div>\n                    <div class=\"circle-content mt-10 mb-10\">\n                        <img src=\"https://freehost-spec.github.io/dexcenter-dashboard/assets/images/icons/icon-dts.svg \"\n                            alt=\"dxs\" class=\"icons-s\">\n                        <div class=\"font-m font-blue ml-5\">DTS3</div>\n                    </div>\n                    <img src=\"https://freehost-spec.github.io/dexcenter-dashboard/assets/images/icons/ellipse-b.svg\"\n                        alt=\"more\" class=\"icons-s horizontal-logo mb-5\">\n                </div>\n                <div class=\"arrows mt-50\">\n                    <div><img src=\"https://freehost-spec.github.io/dexcenter-dashboard/assets/images/icons/arrow-l.svg \"\n                            alt=\"DXS connector\"></div>\n                    <div><img src=\"https://freehost-spec.github.io/dexcenter-dashboard/assets/images/icons/arrow-m.svg \"\n                            alt=\"DB connector\"></div>\n                    <div><img src=\"https://freehost-spec.github.io/dexcenter-dashboard/assets/images/icons/arrow-s.svg \"\n                            alt=\"DS connector\"></div>\n                </div>\n            </div>\n            <!-- <div class=\"circle-box circle2 right-circles\">\n                <div class=\"green-circles\">\n                    <div class=\"icon-box\">\n                        <img src=\"https://freehost-spec.github.io/dexcenter-dashboard/assets/images/icons/icon-on-green.svg \" alt=\"status\" class=\"icons-xss\">\n                    </div>\n                    <div class=\"circle-content mt-10 mb-10\">\n                        <img src=\"https://freehost-spec.github.io/dexcenter-dashboard/assets/images/icons/icon-dts.svg \" alt=\"dxs\" class=\"icons-s\">\n                        <div class=\"font-m font-blue ml-5\">DTS8</div>\n                    </div>\n                    <img src=\"https://freehost-spec.github.io/dexcenter-dashboard/assets/images/icons/ellipse-b.svg\" alt=\"more\" class=\"icons-s horizontal-logo mb-5\">\n                </div>\n                <div class=\"arrows mb-50\">\n                    <div><img src=\"https://freehost-spec.github.io/dexcenter-dashboard/assets/images/icons/arrow-l.svg \" alt=\"DXS connector\"></div>\n                    <div><img src=\"https://freehost-spec.github.io/dexcenter-dashboard/assets/images/icons/arrow-m.svg \" alt=\"DB connector\"></div>\n                    <div><img src=\"https://freehost-spec.github.io/dexcenter-dashboard/assets/images/icons/arrow-s.svg \" alt=\"DS connector\"></div>\n                </div>\n            </div> -->\n        </div>\n        <div class=\"box3\">\n            <div class=\" box box-container\">\n                <div class=\"box-position\">\n                    <div class=\"circle-box circle1\">\n                        <div class=\"green-circles\">\n                            <div class=\"icon-box\">\n                                <img src=\"https://freehost-spec.github.io/dexcenter-dashboard/assets/images/icons/icon-on-green.svg \"\n                                    alt=\"status\" class=\"icons-xss\">\n                            </div>\n                            <div class=\"circle-content mt-10 mb-10\">\n                                <img src=\"https://freehost-spec.github.io/dexcenter-dashboard/assets/images/icons/icon-dts.svg \"\n                                    alt=\"dxs\" class=\"icons-s\">\n                                <div class=\"font-m font-blue ml-5\">DTS4</div>\n                            </div>\n                            <img src=\"https://freehost-spec.github.io/dexcenter-dashboard/assets/images/icons/ellipse-b.svg\"\n                                alt=\"more\" class=\"icons-s horizontal-logo mb-5\">\n                        </div>\n                        <div class=\"arrows\">\n                            <div><img\n                                    src=\"https://freehost-spec.github.io/dexcenter-dashboard/assets/images/icons/arrow-l.svg \"\n                                    alt=\"DXS connector\"></div>\n                            <div><img\n                                    src=\"https://freehost-spec.github.io/dexcenter-dashboard/assets/images/icons/arrow-m.svg \"\n                                    alt=\"DB connector\"></div>\n                            <div><img\n                                    src=\"https://freehost-spec.github.io/dexcenter-dashboard/assets/images/icons/arrow-s.svg \"\n                                    alt=\"DS connector\"></div>\n                        </div>\n                    </div>\n                    <div class=\"circle-box circle2 right-circles\">\n                        <div class=\"green-circles\">\n                            <div class=\"icon-box\">\n                                <img src=\"https://freehost-spec.github.io/dexcenter-dashboard/assets/images/icons/icon-on-green.svg \"\n                                    alt=\"status\" class=\"icons-xss\">\n                            </div>\n                            <div class=\"circle-content mt-10 mb-10\">\n                                <img src=\"https://freehost-spec.github.io/dexcenter-dashboard/assets/images/icons/icon-dts.svg \"\n                                    alt=\"dxs\" class=\"icons-s\">\n                                <div class=\"font-m font-blue ml-5\">DTS5</div>\n                            </div>\n                            <img src=\"https://freehost-spec.github.io/dexcenter-dashboard/assets/images/icons/ellipse-b.svg\"\n                                alt=\"more\" class=\"icons-s horizontal-logo mb-5\" (click)=\"showInfo()\">\n                        </div>\n                        <div class=\"arrows\">\n                            <div><img\n                                    src=\"https://freehost-spec.github.io/dexcenter-dashboard/assets/images/icons/arrow-l.svg \"\n                                    alt=\"DXS connector\"></div>\n                            <div><img\n                                    src=\"https://freehost-spec.github.io/dexcenter-dashboard/assets/images/icons/arrow-m.svg \"\n                                    alt=\"DB connector\"></div>\n                            <div><img\n                                    src=\"https://freehost-spec.github.io/dexcenter-dashboard/assets/images/icons/arrow-s.svg \"\n                                    alt=\"DS connector\"></div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <div class=\"box4\">\n            <div class=\" box box-container\">\n                <div class=\"box-position\">\n                    <div class=\"circle-box circle1\">\n                        <div class=\"green-circles\" (click)=\"dtsInformation()\">\n                            <div class=\"icon-box\">\n                                <img src=\"https://freehost-spec.github.io/dexcenter-dashboard/assets/images/icons/icon-on-green.svg \"\n                                    alt=\"status\" class=\"icons-xss\">\n                            </div>\n                            <div class=\"circle-content mt-10 mb-10\">\n                                <img src=\"https://freehost-spec.github.io/dexcenter-dashboard/assets/images/icons/icon-dts.svg \"\n                                    alt=\"dxs\" class=\"icons-s\">\n                                <div class=\"font-m font-blue ml-5\">DTS6</div>\n                            </div>\n                            <img src=\"https://freehost-spec.github.io/dexcenter-dashboard/assets/images/icons/ellipse-b.svg\"\n                                alt=\"more\" class=\"icons-s horizontal-logo mb-5\">\n                        </div>\n                        <div class=\"arrows\">\n                            <div><img\n                                    src=\"https://freehost-spec.github.io/dexcenter-dashboard/assets/images/icons/arrow-l.svg \"\n                                    alt=\"DXS connector\"></div>\n                            <div><img\n                                    src=\"https://freehost-spec.github.io/dexcenter-dashboard/assets/images/icons/arrow-m.svg \"\n                                    alt=\"DB connector\"></div>\n                            <div><img\n                                    src=\"https://freehost-spec.github.io/dexcenter-dashboard/assets/images/icons/arrow-s.svg \"\n                                    alt=\"DS connector\"></div>\n                        </div>\n                    </div>\n                    <div class=\"circle-box circle2 right-circles\">\n                        <div class=\"green-circles\">\n                            <div class=\"icon-box\">\n                                <img src=\"https://freehost-spec.github.io/dexcenter-dashboard/assets/images/icons/icon-on-green.svg \"\n                                    alt=\"status\" class=\"icons-xss\">\n                            </div>\n                            <div class=\"circle-content mt-10 mb-10\">\n                                <img src=\"https://freehost-spec.github.io/dexcenter-dashboard/assets/images/icons/icon-dts.svg \"\n                                    alt=\"dxs\" class=\"icons-s\">\n                                <div class=\"font-m font-blue ml-5\">DTS7</div>\n                            </div>\n                            <img src=\"https://freehost-spec.github.io/dexcenter-dashboard/assets/images/icons/ellipse-b.svg\"\n                                alt=\"more\" class=\"icons-s horizontal-logo mb-5\">\n                        </div>\n                        <div class=\"arrows\">\n                            <div><img\n                                    src=\"https://freehost-spec.github.io/dexcenter-dashboard/assets/images/icons/arrow-l.svg \"\n                                    alt=\"DXS connector\"></div>\n                            <div><img\n                                    src=\"https://freehost-spec.github.io/dexcenter-dashboard/assets/images/icons/arrow-m.svg \"\n                                    alt=\"DB connector\"></div>\n                            <div><img\n                                    src=\"https://freehost-spec.github.io/dexcenter-dashboard/assets/images/icons/arrow-s.svg \"\n                                    alt=\"DS connector\"></div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n\n    <div *ngIf=\"viewInfo\">\n        <div class=\"viewInfo font-m\">\n            <div class=\"triangle-left\"></div>\n            <div class=\"session-item\">\n                <div class=\"item-name pl-20 pr-20 mt-10\">\n                    <div>CATIA V5</div>\n                </div>\n                <div class=\"item-name pl-20 pr-20\">\n                    <div>CIQ</div>\n                </div>\n                <div class=\"item-name pl-20 pr-20\">\n                    <div>https://domainname.com</div>\n                </div>\n                <div class=\"item-name pl-20 pr-20\">\n                    <div>Logs</div>\n                    <!-- <img src=\" https://freehost-spec.github.io/dexcenter-dashboard/assets/images/icons/arrow_right-24px.svg\" alt=\"more\"> -->\n                    <div class=\"font-xl\">></div>\n                </div>\n                <div class=\"item-name pl-20 pr-20\">\n                    <div>Host</div>\n                    <!-- <img src=\" https://freehost-spec.github.io/dexcenter-dashboard/assets/images/icons/arrow_right-24px.svg\" alt=\"more\"> -->\n                    <div class=\"font-xl\">></div>\n                </div>\n                <div class=\"item-name pl-20 pr-20\">\n                    <div>User App</div>\n                </div>\n            </div>\n        </div>\n    </div>\n\n    <div *ngIf=\"boxInfo\">\n        <div class=\"box-info font-m\">\n            <div class=\"triangle-top\"></div>\n            <div class=\"session-item\">\n                <div class=\"item-name pl-20 pr-20 mt-10\">\n                    <div>Total Mb used</div>\n                    <div class=\"item-data fw-500\">20</div>\n                </div>\n                <div class=\"item-name pl-20 pr-20\">\n                    <div>Disk Space Available</div>\n                    <div class=\"item-data fw-500\">20</div>\n                </div>\n            </div>\n        </div>\n    </div>\n\n    <div *ngIf=\"dtsInfo\">\n        <div class=\"dtsinfo font-m\">\n            <div class=\"triangle-right\"></div>\n            <div class=\"session-item\">\n                <div class=\"item-name pl-20 pr-20 mt-10\">\n                    <div>Job Available</div>\n                    <div class=\"item-data\">12</div>\n                </div>\n                <div class=\"item-name pl-20 pr-20\">\n                    <div>Job in Use</div>\n                    <div class=\"item-data\">43</div>\n                </div>\n                <div class=\"item-name pl-20 pr-20\">\n                    <div>Connectivity Speed to DS</div>\n                    <div class=\"item-data\">2.5mb</div>\n                </div>\n                <div class=\"item-name pl-20 pr-20\">\n                    <div>Connectivity Speed to DB</div>\n                    <div class=\"item-data\">2.5mb</div>\n                </div>\n            </div>\n        </div>\n    </div>\n\n    <div *ngIf=\"dxsInfo\">\n        <div class=\"dxs-info font-m\">\n            <div class=\"triangle-right\"></div>\n            <div class=\"session-item\">\n                <div class=\"item-name pl-20 pr-20 mt-10\">\n                    <div>Usage summary</div>\n                    <div class=\"item-data font-xl\" (click)=\"dxsmoreInformation()\">></div>\n                </div>\n                <div class=\"item-name pl-20 pr-20\">\n                    <div>Queued For Processing</div>\n                    <div class=\"item-data\">20</div>\n                </div>\n                <div class=\"item-name pl-20 pr-20\">\n                    <div>Sessions Processing</div>\n                    <div class=\"item-data\">20</div>\n                </div>\n                <div class=\"item-name pl-20 pr-20\">\n                    <div>Sessions Complete</div>\n                    <div class=\"item-data\">20</div>\n                </div>\n                <div class=\"item-name pl-20 pr-20\">\n                    <div>Connectivity Speed to DS</div>\n                    <div class=\"item-data\">2.5mb</div>\n                </div>\n                <div class=\"item-name pl-20 pr-20\">\n                    <div>Connectivity Speed to DB</div>\n                    <div class=\"item-data\">2.5mb</div>\n                </div>\n            </div>\n        </div>\n    </div>\n\n    <div *ngIf=\"dxsInfo && dxsmoreInfo\">\n        <div class=\"dxs-moreInfo font-m\">\n            <div class=\"triangle-right\"></div>\n            <div class=\"session-item\">\n                <div class=\"item-name pl-20 pr-20 mt-10 fw-500\">\n                    <div>Usage summary</div>\n                    <div class=\"item-data font-m\">10/1/2020 <span class=\"font-xl ml-5 d-arrow\">&#8964;</span></div>\n                </div>\n                <div class=\"item-name pl-20 pr-20 mt-10\">\n                    <div>MBs Exchanged:</div>\n                    <div class=\"item-data font-m\">280353</div>\n                </div>\n                <hr class=\"ml-20 mr-20\">\n                <div class=\"item-name pl-20 pr-20\">\n                    <div>Files Exchanged:</div>\n                    <div class=\"item-data\">60065</div>\n                </div>\n                <hr class=\"ml-20 mr-20\">\n                <div class=\"item-name pl-20 pr-20\">\n                    <div>Sessions:</div>\n                    <div class=\"item-data\">6407</div>\n                </div>\n                <hr class=\"ml-20 mr-20\">\n                <div class=\"item-name pl-20 pr-20\">\n                    <div>Outside Companies:</div>\n                    <div class=\"item-data\">5065</div>\n                </div>\n                <hr class=\"ml-20 mr-20\">\n                <div class=\"item-name pl-20 pr-20\">\n                    <div>Company Sites:</div>\n                    <div class=\"item-data\">289</div>\n                </div>\n                <hr class=\"ml-20 mr-20\">\n                <div class=\"item-name pl-20 pr-20\">\n                    <div>Registered Users:</div>\n                    <div class=\"item-data\">14797</div>\n                </div>\n                <hr class=\"ml-20 mr-20\">\n                <div class=\"item-name pl-20 pr-20\">\n                    <div>Company Users:</div>\n                    <div class=\"item-data\">7184</div>\n                </div>\n                <hr class=\"ml-20 mr-20\">\n                <div class=\"item-name pl-20 pr-20\">\n                    <div>New Registered Users:</div>\n                    <div class=\"item-data\">188</div>\n                </div>\n            </div>\n        </div>\n    </div>\n\n</div>\n";
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


    __webpack_exports__["default"] = "<div class=\"direct-connect\">\n  <div class=\"direct-connect-header\">\n    <div class=\"direct-connect-header font-l ml-15\">\n      <img src=\"https://freehost-spec.github.io/dexcenter-dashboard/assets/images/icons/close.svg\" alt='minimise'\n        (click)=\"openContent()\" [ngClass]=\"showContent ? 'maximise' : 'minimise' \">\n      <span class=\"ml-5\">DTS1- Direct connect</span>\n    </div>\n    <!-- <img src=\"https://freehost-spec.github.io/dexcenter-dashboard/assets/images/icons/icon-close.svg\" class=\"icons-xs mr-20 cp\" alt=\"close\"> -->\n  </div>\n  <div class=\"direct-connect-container\" *ngIf=\"!showContent\">\n    <div class=\"container-left\">\n      <div class=\"figure\">\n        <div class=\"dxs\">\n          <img src=\"https://freehost-spec.github.io/dexcenter-dashboard/assets/images/icons/icon-on-green.svg \"\n            alt=\"status\" class=\"icons-s\">\n          <img src=\"https://freehost-spec.github.io/dexcenter-dashboard/assets/images/icons/icon-dxs.svg \" alt=\"dxs\"\n            class=\"icons-4xl mt-2 mb-2\">\n          <div class=\"font-l font-white\">DXS</div>\n        </div>\n        <div class=\"connector1\">\n          <img src=\"https://freehost-spec.github.io/dexcenter-dashboard/assets/images/icons/arrow-s.svg \"\n            alt=\"DB connector\" class=\"dxs-db\">\n          <img src=\"https://freehost-spec.github.io/dexcenter-dashboard/assets/images/icons/arrow-s.svg \"\n            alt=\"DS connector\" class=\"dxs-ds\">\n        </div>\n        <div class=\"db-ds\">\n          <div class=\"circle-box\">\n            <div class=\"lightblue-circles db-circle\">\n              <div class=\"icon-box\">\n                <img src=\"https://freehost-spec.github.io/dexcenter-dashboard/assets/images/icons/icon-on-green.svg \"\n                  alt=\"status\" class=\"icons-xss\">\n              </div>\n              <div class=\"circle-content mt-5 mb-10\">\n                <img src=\"https://freehost-spec.github.io/dexcenter-dashboard/assets/images/icons/icon-db.svg \"\n                  alt=\"dxs\" class=\"icons-xs\">\n                <div class=\"font-m font-blue ml-5\">DB</div>\n              </div>\n            </div>\n          </div>\n          <div>\n            <img src=\"https://freehost-spec.github.io/dexcenter-dashboard/assets/images/icons/arrow-m.svg \"\n              alt=\"DB connector\" class=\"dxs-dts\">\n          </div>\n          <div class=\"circle-box\">\n            <div class=\"lightblue-circles ds-circle\">\n              <div class=\"icon-box\">\n                <img src=\"https://freehost-spec.github.io/dexcenter-dashboard/assets/images/icons/icon-on-green.svg \"\n                  alt=\"status\" class=\"icons-xss\">\n              </div>\n              <div class=\"circle-content mt-5 mb-10\">\n                <img src=\"https://freehost-spec.github.io/dexcenter-dashboard/assets/images/icons/icon-ds1.svg \"\n                  alt=\"dxs\" class=\"icons-xs\">\n                <div class=\"font-m font-blue ml-5\">DS</div>\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"connector2\">\n          <img src=\"https://freehost-spec.github.io/dexcenter-dashboard/assets/images/icons/arrow-s.svg \"\n            alt=\"DB connector\" class=\"dts-db\">\n          <img src=\"https://freehost-spec.github.io/dexcenter-dashboard/assets/images/icons/arrow-s.svg \"\n            alt=\"DS connector\" class=\"dts-ds\">\n        </div>\n        <div class=\"dts\">\n          <div class=\"circle-box\">\n            <div class=\"green-circles dts-circle\">\n              <div class=\"icon-box\">\n                <img src=\"https://freehost-spec.github.io/dexcenter-dashboard/assets/images/icons/icon-on-green.svg \"\n                  alt=\"status\" class=\"icons-xss\">\n              </div>\n              <div class=\"circle-content mt-5 mb-10\">\n                <img src=\"https://freehost-spec.github.io/dexcenter-dashboard/assets/images/icons/icon-dts.svg \"\n                  alt=\"dxs\" class=\"icons-xs\">\n                <div class=\"font-m font-blue ml-5\">DTS2</div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"container-right bg-white-color\">\n      <div class=\"task-container mt-10 ml-20 mr-20 fw-500\">\n        <div class=\"font-l ml-10\">DTS2- SubTask Detail</div>\n        <div class=\"content\">\n          <div class=\"header mt-15 mb-5 ml-15 mr-15 font-m\">\n            <div>DXS Component Name</div>\n            <div class=\"mr-50\">Status</div>\n          </div>\n          <hr class=\"divider ml-15 mr-15\">\n          <div class=\"description mt-7 mb-7 ml-15 mr-15 fw-400 font-m\">\n            <div>CADScript</div>\n            <div class=\"des-right ml-10\">\n              <img src=\"https://freehost-spec.github.io/dexcenter-dashboard/assets/images/icons/check-circle.svg\"\n                alt=\"checked\">\n              <div class=\"ml-5\">Installed</div>\n            </div>\n          </div>\n          <hr class=\"divider ml-15 mr-15\">\n          <div class=\"description mt-7 mb-7 ml-15 mr-15 fw-400 font-m\">\n            <div>CADIQ</div>\n            <div class=\"des-right ml-10\">\n              <img src=\"https://freehost-spec.github.io/dexcenter-dashboard/assets/images/icons/check-circle.svg\"\n                alt=\"checked\">\n              <div class=\"ml-5\">Installed</div>\n            </div>\n          </div>\n          <hr class=\"divider ml-15 mr-15\">\n          <div class=\"description mt-7 mb-7 ml-15 mr-15 fw-400 font-m\">\n            <div>CAD System</div>\n            <div class=\"des-right ml-15\">\n              <img src=\"https://freehost-spec.github.io/dexcenter-dashboard/assets/images/icons/check-circle.svg\"\n                alt=\"checked\">\n              <div class=\"ml-5\">Installed</div>\n            </div>\n          </div>\n          <hr class=\"divider ml-15 mr-15\">\n          <div class=\"description mt-7 mb-7 ml-15 mr-15 fw-400 font-m\">\n            <div>Anark</div>\n            <div class=\"des-right ml-15\">\n              <img src=\"https://freehost-spec.github.io/dexcenter-dashboard/assets/images/icons/check-circle.svg\"\n                alt=\"checked\">\n              <div class=\"ml-5\">Installed</div>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"host-container fw-500 mt-10 ml-20 mr-20 \">\n        <div class=\"font-l mt-15 ml-15\">DTS2- Host Detail</div>\n        <div class=\"content\">\n          <div class=\"description mt-10 mb-7 ml-15 mr-15 fw-400 font-m\">\n            <div class=\"host-details\">Host-Name<span>:</span></div>\n            <div class=\"des-right mr-10\">\n              <div class=\"ml-5 fw-500\">Abc def</div>\n            </div>\n          </div>\n          <hr class=\"divider ml-15 mr-15\">\n          <div class=\"description mt-7 mb-7 ml-15 mr-15 fw-400 font-m\">\n            <div class=\"host-details\">Doman Name <span>:</span></div>\n            <div class=\"des-right mr-10\">\n              <div class=\"ml-5 fw-500\">EF1234567888</div>\n            </div>\n          </div>\n          <hr class=\"divider ml-15 mr-15\">\n          <div class=\"description mt-7 mb-20 ml-15 mr-15 fw-400 font-m\">\n            <div class=\"host-details\">IP address <span>:</span></div>\n            <div class=\"des-right mr-10\">\n              <div class=\"ml-5 fw-500\">P12345688</div>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"log-container mt-10 ml-20 mr-20 fw-500\">\n        <div class=\"font-l ml-15\">Log File</div>\n        <div class=\"content\">\n          <div class=\"header mt-10 mb-5 ml-15 font-m\">\n            <div>Current Level- INFO</div>\n          </div>\n          <div class=\"description mt-7 mb-7 ml-15 pr-10 fw-400 font-m\">\n            <div>Download AdminConsole Log</div>\n            <div class=\"mr-10\">\n              <img src=\"https://freehost-spec.github.io/dexcenter-dashboard/assets/images/icons/download.svg\"\n                alt=\"download\" class=\"icons-xs\">\n            </div>\n          </div>\n          <hr class=\"divider ml-15 mr-15\">\n          <div class=\"description mt-7 mb-7 ml-15 pr-10 fw-400 font-m\">\n            <div>Download DEXcenter App Log</div>\n            <div class=\"mr-10\">\n              <img src=\"https://freehost-spec.github.io/dexcenter-dashboard/assets/images/icons/download.svg\"\n                alt=\"download\" class=\"icons-xs\">\n            </div>\n          </div>\n          <hr class=\"divider ml-15 mr-15\">\n          <div class=\"description mt-7 mb-7 ml-15 pr-10 fw-400 font-m\">\n            <div>Download DEXRESTAPI Log</div>\n            <div class=\"mr-10\">\n              <img src=\"https://freehost-spec.github.io/dexcenter-dashboard/assets/images/icons/download.svg\"\n                alt=\"download\" class=\"icons-xs\">\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n\n<div class=\"direct-connect mt-10\">\n  <div class=\"direct-connect-header\">\n    <div class=\"direct-connect-header font-l ml-15\">\n      <img src=\"https://freehost-spec.github.io/dexcenter-dashboard/assets/images/icons/close.svg\" alt='minimise'\n        (click)=\"openContent1()\" [ngClass]=\"showContent1 ? 'maximise' : 'minimise' \">\n      <span class=\"ml-5\">DTS2 - Direct connect</span>\n    </div>\n    <!-- <img src=\"https://freehost-spec.github.io/dexcenter-dashboard/assets/images/icons/icon-close.svg\" class=\"icons-xs mr-20 cp\" alt=\" close \"> -->\n  </div>\n  <div class=\"direct-connect-container\" *ngIf=\"!showContent1\">\n    <div class=\"container-left\">\n      <div class=\"figure\">\n        <div class=\"dxs\">\n          <img src=\"https://freehost-spec.github.io/dexcenter-dashboard/assets/images/icons/icon-on-green.svg \"\n            alt=\"status\" class=\"icons-s\">\n          <img src=\"https://freehost-spec.github.io/dexcenter-dashboard/assets/images/icons/icon-dxs.svg \" alt=\"dxs\"\n            class=\"icons-4xl mt-2 mb-2\">\n          <div class=\"font-l font-white\">DXS</div>\n        </div>\n        <div class=\"connector1\">\n          <img src=\"https://freehost-spec.github.io/dexcenter-dashboard/assets/images/icons/arrow-s.svg \"\n            alt=\"DB connector\" class=\"dxs-db\">\n          <img src=\"https://freehost-spec.github.io/dexcenter-dashboard/assets/images/icons/arrow-s.svg \"\n            alt=\"DS connector\" class=\"dxs-ds\">\n        </div>\n        <div class=\"db-ds\">\n          <div class=\"circle-box\">\n            <div class=\"lightblue-circles db-circle\">\n              <div class=\"icon-box\">\n                <img src=\"https://freehost-spec.github.io/dexcenter-dashboard/assets/images/icons/icon-on-green.svg \"\n                  alt=\"status\" class=\"icons-xss\">\n              </div>\n              <div class=\"circle-content mt-5 mb-10\">\n                <img src=\"https://freehost-spec.github.io/dexcenter-dashboard/assets/images/icons/icon-db.svg \"\n                  alt=\"dxs\" class=\"icons-xs\">\n                <div class=\"font-m font-blue ml-5\">DB</div>\n              </div>\n            </div>\n          </div>\n          <div>\n            <img src=\"https://freehost-spec.github.io/dexcenter-dashboard/assets/images/icons/arrow-m.svg \"\n              alt=\"DB connector\" class=\"dxs-dts\">\n          </div>\n          <div class=\"circle-box\">\n            <div class=\"lightblue-circles ds-circle\">\n              <div class=\"icon-box\">\n                <img src=\"https://freehost-spec.github.io/dexcenter-dashboard/assets/images/icons/icon-on-green.svg \"\n                  alt=\"status\" class=\"icons-xss\">\n              </div>\n              <div class=\"circle-content mt-5 mb-10\">\n                <img src=\"https://freehost-spec.github.io/dexcenter-dashboard/assets/images/icons/icon-ds1.svg \"\n                  alt=\"dxs\" class=\"icons-xs\">\n                <div class=\"font-m font-blue ml-5\">DS</div>\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"connector2\">\n          <img src=\"https://freehost-spec.github.io/dexcenter-dashboard/assets/images/icons/arrow-s.svg \"\n            alt=\"DB connector\" class=\"dts-db\">\n          <img src=\"https://freehost-spec.github.io/dexcenter-dashboard/assets/images/icons/arrow-s.svg \"\n            alt=\"DS connector\" class=\"dts-ds\">\n        </div>\n        <div class=\"dts\">\n          <div class=\"circle-box\">\n            <div class=\"green-circles dts-circle\">\n              <div class=\"icon-box\">\n                <img src=\"https://freehost-spec.github.io/dexcenter-dashboard/assets/images/icons/icon-on-green.svg \"\n                  alt=\"status\" class=\"icons-xss\">\n              </div>\n              <div class=\"circle-content mt-5 mb-10\">\n                <img src=\"https://freehost-spec.github.io/dexcenter-dashboard/assets/images/icons/icon-dts.svg \"\n                  alt=\"dxs\" class=\"icons-xs\">\n                <div class=\"font-m font-blue ml-5\">DTS5</div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"container-right bg-white-color\">\n      <div class=\"task-container mt-10 ml-20 mr-20 fw-500\">\n        <div class=\"font-l ml-10\">DTS5- SubTask Detail</div>\n        <div class=\"content\">\n          <div class=\"header mt-15 mb-5 ml-15 mr-15 font-m\">\n            <div>DXS Component Name</div>\n            <div class=\"mr-50\">Status</div>\n          </div>\n          <hr class=\"divider ml-15 mr-15\">\n          <div class=\"description mt-7 mb-7 ml-15 mr-15 fw-400 font-m\">\n            <div>CADScript</div>\n            <div class=\"des-right ml-10\">\n              <img src=\"https://freehost-spec.github.io/dexcenter-dashboard/assets/images/icons/check-circle.svg\"\n                alt=\"checked\">\n              <div class=\"ml-5\">Installed</div>\n            </div>\n          </div>\n          <hr class=\"divider ml-15 mr-15\">\n          <div class=\"description mt-7 mb-7 ml-15 mr-15 fw-400 font-m\">\n            <div>CADIQ</div>\n            <div class=\"des-right ml-10\">\n              <img src=\"https://freehost-spec.github.io/dexcenter-dashboard/assets/images/icons/check-circle.svg\"\n                alt=\"checked\">\n              <div class=\"ml-5\">Installed</div>\n            </div>\n          </div>\n          <hr class=\"divider ml-15 mr-15\">\n          <div class=\"description mt-7 mb-7 ml-15 mr-15 fw-400 font-m\">\n            <div>CAD System</div>\n            <div class=\"des-right ml-15\">\n              <img src=\"https://freehost-spec.github.io/dexcenter-dashboard/assets/images/icons/check-circle.svg\"\n                alt=\"checked\">\n              <div class=\"ml-5\">Installed</div>\n            </div>\n          </div>\n          <hr class=\"divider ml-15 mr-15\">\n          <div class=\"description mt-7 mb-7 ml-15 mr-15 fw-400 font-m\">\n            <div>Anark</div>\n            <div class=\"des-right ml-15\">\n              <img src=\"https://freehost-spec.github.io/dexcenter-dashboard/assets/images/icons/check-circle.svg\"\n                alt=\"checked\">\n              <div class=\"ml-5\">Installed</div>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"host-container fw-500 mt-10 ml-20 mr-20 \">\n        <div class=\"font-l mt-15 ml-15\">DTS5- Host Detail</div>\n        <div class=\"content\">\n          <div class=\"description mt-10 mb-7 ml-15 mr-15 fw-400 font-m\">\n            <div class=\"host-details\">Host-Name<span>:</span></div>\n            <div class=\"des-right mr-10\">\n              <div class=\"ml-5 fw-500\">Abc def</div>\n            </div>\n          </div>\n          <hr class=\"divider ml-15 mr-15\">\n          <div class=\"description mt-7 mb-7 ml-15 mr-15 fw-400 font-m\">\n            <div class=\"host-details\">Doman Name <span>:</span></div>\n            <div class=\"des-right mr-10\">\n              <div class=\"ml-5 fw-500\">EF1234567888</div>\n            </div>\n          </div>\n          <hr class=\"divider ml-15 mr-15\">\n          <div class=\"description mt-7 mb-20 ml-15 mr-15 fw-400 font-m\">\n            <div class=\"host-details\">IP address <span>:</span></div>\n            <div class=\"des-right mr-10\">\n              <div class=\"ml-5 fw-500\">P12345688</div>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"log-container mt-10 ml-20 mr-20 fw-500\">\n        <div class=\"font-l ml-15\">Log File</div>\n        <div class=\"content\">\n          <div class=\"header mt-10 mb-5 ml-15 font-m\">\n            <div>Current Level- INFO</div>\n          </div>\n          <div class=\"description mt-7 mb-7 ml-15 pr-10 fw-400 font-m\">\n            <div>Download AdminConsole Log</div>\n            <div class=\"mr-10\">\n              <img src=\"https://freehost-spec.github.io/dexcenter-dashboard/assets/images/icons/download.svg\"\n                alt=\"download\" class=\"icons-xs\">\n            </div>\n          </div>\n          <hr class=\"divider ml-15 mr-15\">\n          <div class=\"description mt-7 mb-7 ml-15 pr-10 fw-400 font-m\">\n            <div>Download DEXcenter App Log</div>\n            <div class=\"mr-10\">\n              <img src=\"https://freehost-spec.github.io/dexcenter-dashboard/assets/images/icons/download.svg\"\n                alt=\"download\" class=\"icons-xs\">\n            </div>\n          </div>\n          <hr class=\"divider ml-15 mr-15\">\n          <div class=\"description mt-7 mb-7 ml-15 pr-10 fw-400 font-m\">\n            <div>Download DEXRESTAPI Log</div>\n            <div class=\"mr-10\">\n              <img src=\"https://freehost-spec.github.io/dexcenter-dashboard/assets/images/icons/download.svg\"\n                alt=\"download\" class=\"icons-xs\">\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n";
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


    __webpack_exports__["default"] = ".box-list-container {\n  display: flex;\n  flex-direction: column;\n}\n.box-list-container .dxs-container {\n  width: 106px;\n  height: 78px;\n  background-color: #034ea2;\n  box-shadow: 0px 3px 0px #034ea2;\n  border: 1px solid #034ea2;\n  border-radius: 8px 8px 0px 0px;\n}\n.box-list-container .dxs-container .dxs-icons {\n  display: flex;\n  justify-content: space-between;\n}\n.box-list-container .box-list {\n  width: 100%;\n  height: 154px;\n  border: 1px solid #cccccc;\n  border-radius: 0px 7px 7px 7px;\n  background-color: white;\n  display: flex;\n  align-items: center;\n}\n.box-item {\n  width: calc(100% - 300px);\n  display: flex;\n}\n.box-container {\n  display: flex;\n  align-items: center;\n}\n.box-container .box-left {\n  display: flex;\n}\n.box-container .box-left .dxs-container {\n  width: 106px;\n  height: 88px;\n  background-color: #f6f8f9;\n  box-shadow: 0px 3px 0px #034ea2;\n  border: 1px solid #034ea2;\n  border-radius: 8px;\n}\n.box-container .box-left .dxs-container .dxs-icons {\n  display: flex;\n  justify-content: space-between;\n}\n.box-container .divider {\n  border: 1px solid #034ea2;\n  height: 88px;\n}\n.boxInfo {\n  display: flex;\n  flex-direction: column;\n  position: absolute;\n  top: 150px;\n  left: 188px;\n}\n.boxInfo > .triangle-right {\n  width: 0;\n  height: 0;\n  border-top: 8px solid transparent;\n  border-right: 12px solid #333333;\n  border-bottom: 8px solid transparent;\n  border-left: 8px solid transparent;\n  position: relative;\n  top: 50px;\n  right: 20px;\n}\n.boxInfo > .session-item {\n  background-color: #333333;\n  color: #fff;\n  height: 215px;\n  width: 265px;\n  z-index: 5;\n  display: flex;\n  flex-direction: column;\n  box-shadow: 0px 3px 6px #00000029;\n  border: 1px solid #000000;\n  opacity: 0.94;\n  border-radius: 4px;\n}\n.boxInfo > .session-item > .item-name {\n  cursor: pointer;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  height: 30px;\n}\n.boxInfo > .session-item > .item-name > .item-data {\n  color: #43b6fb;\n}\n.boxInfo > .session-item > .item-name:hover {\n  background-color: #666;\n}\n.boxmoreInfo {\n  display: flex;\n  flex-direction: column;\n  position: absolute;\n  top: 150px;\n  left: 465px;\n}\n.boxmoreInfo > .triangle-right {\n  width: 0;\n  height: 0;\n  border-top: 8px solid transparent;\n  border-right: 12px solid #333333;\n  border-bottom: 8px solid transparent;\n  border-left: 8px solid transparent;\n  position: relative;\n  top: 35px;\n  right: 20px;\n}\n.boxmoreInfo > .session-item {\n  background-color: #333333;\n  color: #fff;\n  height: 300px;\n  width: 250px;\n  z-index: 5;\n  overflow: hidden;\n  display: flex;\n  flex-direction: column;\n  box-shadow: 0px 3px 6px #00000029;\n  border: 1px solid #000000;\n  opacity: 0.94;\n  border-radius: 4px;\n}\n.boxmoreInfo > .session-item > .item-name {\n  cursor: pointer;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  height: 30px;\n}\n.boxmoreInfo > .session-item > .item-name > .item-data {\n  color: #43b6fb;\n}\n.boxmoreInfo > .session-item > .item-name:hover {\n  background-color: #666;\n}\n.boxmoreInfo > .session-item > hr {\n  border-bottom: #989898;\n}\n.d-arrow {\n  position: relative;\n  bottom: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hcHBsZS9wcm9qZWN0L2RleGNlbnRlci1kYXNoYm9hcmQvc3JjL2FwcC9sYXlvdXQvc3lzdGVtcy1jb25uZWN0aW9uL2JveC1saXN0L2JveC1saXN0LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9sYXlvdXQvc3lzdGVtcy1jb25uZWN0aW9uL2JveC1saXN0L2JveC1saXN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0FDQ0o7QURBSTtFQUNJLFlBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7RUFDQSwrQkFBQTtFQUNBLHlCQUFBO0VBQ0EsOEJBQUE7QUNFUjtBRERRO0VBQ0ksYUFBQTtFQUNBLDhCQUFBO0FDR1o7QURBSTtFQUNJLFdBQUE7RUFDQSxhQUFBO0VBQ0EseUJBQUE7RUFDQSw4QkFBQTtFQUNBLHVCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0FDRVI7QURFQTtFQUNJLHlCQUFBO0VBQ0EsYUFBQTtBQ0NKO0FERUE7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7QUNDSjtBREFJO0VBQ0ksYUFBQTtBQ0VSO0FERFE7RUFDSSxZQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0VBQ0EsK0JBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0FDR1o7QURGWTtFQUNJLGFBQUE7RUFDQSw4QkFBQTtBQ0loQjtBREFJO0VBQ0kseUJBQUE7RUFDQSxZQUFBO0FDRVI7QURFQTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7QUNDSjtBREFJO0VBQ0ksUUFBQTtFQUNBLFNBQUE7RUFDQSxpQ0FBQTtFQUNBLGdDQUFBO0VBQ0Esb0NBQUE7RUFDQSxrQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7QUNFUjtBREFJO0VBQ0kseUJBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0VBRUEsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsaUNBQUE7RUFDQSx5QkFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtBQ0NSO0FEQVE7RUFDSSxlQUFBO0VBQ0EsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0FDRVo7QUREWTtFQUNJLGNBQUE7QUNHaEI7QURBUTtFQUNJLHNCQUFBO0FDRVo7QURHQTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7QUNBSjtBRENJO0VBQ0ksUUFBQTtFQUNBLFNBQUE7RUFDQSxpQ0FBQTtFQUNBLGdDQUFBO0VBQ0Esb0NBQUE7RUFDQSxrQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7QUNDUjtBRENJO0VBQ0kseUJBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxpQ0FBQTtFQUNBLHlCQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0FDQ1I7QURBUTtFQUNJLGVBQUE7RUFDQSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7QUNFWjtBRERZO0VBQ0ksY0FBQTtBQ0doQjtBREFRO0VBQ0ksc0JBQUE7QUNFWjtBREFRO0VBQ0ksc0JBQUE7QUNFWjtBREdBO0VBQ0ksa0JBQUE7RUFDQSxXQUFBO0FDQUoiLCJmaWxlIjoic3JjL2FwcC9sYXlvdXQvc3lzdGVtcy1jb25uZWN0aW9uL2JveC1saXN0L2JveC1saXN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJveC1saXN0LWNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIC5keHMtY29udGFpbmVyIHtcbiAgICAgICAgd2lkdGg6IDEwNnB4O1xuICAgICAgICBoZWlnaHQ6IDc4cHg7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMwMzRlYTI7XG4gICAgICAgIGJveC1zaGFkb3c6IDBweCAzcHggMHB4ICMwMzRlYTI7XG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICMwMzRlYTI7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDhweCA4cHggMHB4IDBweDtcbiAgICAgICAgLmR4cy1pY29ucyB7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICB9XG4gICAgfVxuICAgIC5ib3gtbGlzdCB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBoZWlnaHQ6IDE1NHB4O1xuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjY2NjY2NjO1xuICAgICAgICBib3JkZXItcmFkaXVzOiAwcHggN3B4IDdweCA3cHg7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIH1cbn1cblxuLmJveC1pdGVtIHtcbiAgICB3aWR0aDogY2FsYygxMDAlIC0gMzAwcHgpO1xuICAgIGRpc3BsYXk6IGZsZXg7XG59XG5cbi5ib3gtY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgLmJveC1sZWZ0IHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgLmR4cy1jb250YWluZXIge1xuICAgICAgICAgICAgd2lkdGg6IDEwNnB4O1xuICAgICAgICAgICAgaGVpZ2h0OiA4OHB4O1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2Y2ZjhmOTtcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IDBweCAzcHggMHB4ICMwMzRlYTI7XG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjMDM0ZWEyO1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogOHB4O1xuICAgICAgICAgICAgLmR4cy1pY29ucyB7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgLmRpdmlkZXIge1xuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjMDM0ZWEyO1xuICAgICAgICBoZWlnaHQ6IDg4cHg7XG4gICAgfVxufVxuXG4uYm94SW5mbyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDE1MHB4O1xuICAgIGxlZnQ6IDE4OHB4O1xuICAgICY+LnRyaWFuZ2xlLXJpZ2h0IHtcbiAgICAgICAgd2lkdGg6IDA7XG4gICAgICAgIGhlaWdodDogMDtcbiAgICAgICAgYm9yZGVyLXRvcDogOHB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICAgICAgICBib3JkZXItcmlnaHQ6IDEycHggc29saWQgIzMzMzMzMztcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogOHB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICAgICAgICBib3JkZXItbGVmdDogOHB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIHRvcDogNTBweDtcbiAgICAgICAgcmlnaHQ6IDIwcHg7XG4gICAgfVxuICAgICY+LnNlc3Npb24taXRlbSB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMzMzMzMzM7XG4gICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICBoZWlnaHQ6IDIxNXB4O1xuICAgICAgICB3aWR0aDogMjY1cHg7XG4gICAgICAgIHotaW5kZXg6IDU7XG4gICAgICAgIC8vIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgIGJveC1zaGFkb3c6IDBweCAzcHggNnB4ICMwMDAwMDAyOTtcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgIzAwMDAwMDtcbiAgICAgICAgb3BhY2l0eTogMC45NDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgICAgICAmPi5pdGVtLW5hbWUge1xuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICBoZWlnaHQ6IDMwcHg7XG4gICAgICAgICAgICAmPi5pdGVtLWRhdGEge1xuICAgICAgICAgICAgICAgIGNvbG9yOiAjNDNiNmZiO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgICY+Lml0ZW0tbmFtZTpob3ZlciB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjY2O1xuICAgICAgICB9XG4gICAgfVxufVxuXG4uYm94bW9yZUluZm8ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAxNTBweDtcbiAgICBsZWZ0OiA0NjVweDtcbiAgICAmPi50cmlhbmdsZS1yaWdodCB7XG4gICAgICAgIHdpZHRoOiAwO1xuICAgICAgICBoZWlnaHQ6IDA7XG4gICAgICAgIGJvcmRlci10b3A6IDhweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgICAgICAgYm9yZGVyLXJpZ2h0OiAxMnB4IHNvbGlkICMzMzMzMzM7XG4gICAgICAgIGJvcmRlci1ib3R0b206IDhweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgICAgICAgYm9yZGVyLWxlZnQ6IDhweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICB0b3A6IDM1cHg7XG4gICAgICAgIHJpZ2h0OiAyMHB4O1xuICAgIH1cbiAgICAmPi5zZXNzaW9uLWl0ZW0ge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzMzMzMzO1xuICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgaGVpZ2h0OiAzMDBweDtcbiAgICAgICAgd2lkdGg6IDI1MHB4O1xuICAgICAgICB6LWluZGV4OiA1O1xuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICBib3gtc2hhZG93OiAwcHggM3B4IDZweCAjMDAwMDAwMjk7XG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICMwMDAwMDA7XG4gICAgICAgIG9wYWNpdHk6IDAuOTQ7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICAgICAgJj4uaXRlbS1uYW1lIHtcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgaGVpZ2h0OiAzMHB4O1xuICAgICAgICAgICAgJj4uaXRlbS1kYXRhIHtcbiAgICAgICAgICAgICAgICBjb2xvcjogIzQzYjZmYjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAmPi5pdGVtLW5hbWU6aG92ZXIge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzY2NjtcbiAgICAgICAgfVxuICAgICAgICAmPmhyIHtcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b206ICM5ODk4OTg7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi5kLWFycm93IHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgYm90dG9tOiA1cHg7XG59IiwiLmJveC1saXN0LWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG4uYm94LWxpc3QtY29udGFpbmVyIC5keHMtY29udGFpbmVyIHtcbiAgd2lkdGg6IDEwNnB4O1xuICBoZWlnaHQ6IDc4cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMzRlYTI7XG4gIGJveC1zaGFkb3c6IDBweCAzcHggMHB4ICMwMzRlYTI7XG4gIGJvcmRlcjogMXB4IHNvbGlkICMwMzRlYTI7XG4gIGJvcmRlci1yYWRpdXM6IDhweCA4cHggMHB4IDBweDtcbn1cbi5ib3gtbGlzdC1jb250YWluZXIgLmR4cy1jb250YWluZXIgLmR4cy1pY29ucyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cbi5ib3gtbGlzdC1jb250YWluZXIgLmJveC1saXN0IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTU0cHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNjY2NjY2M7XG4gIGJvcmRlci1yYWRpdXM6IDBweCA3cHggN3B4IDdweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5ib3gtaXRlbSB7XG4gIHdpZHRoOiBjYWxjKDEwMCUgLSAzMDBweCk7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG5cbi5ib3gtY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5ib3gtY29udGFpbmVyIC5ib3gtbGVmdCB7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG4uYm94LWNvbnRhaW5lciAuYm94LWxlZnQgLmR4cy1jb250YWluZXIge1xuICB3aWR0aDogMTA2cHg7XG4gIGhlaWdodDogODhweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y2ZjhmOTtcbiAgYm94LXNoYWRvdzogMHB4IDNweCAwcHggIzAzNGVhMjtcbiAgYm9yZGVyOiAxcHggc29saWQgIzAzNGVhMjtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xufVxuLmJveC1jb250YWluZXIgLmJveC1sZWZ0IC5keHMtY29udGFpbmVyIC5keHMtaWNvbnMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG4uYm94LWNvbnRhaW5lciAuZGl2aWRlciB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICMwMzRlYTI7XG4gIGhlaWdodDogODhweDtcbn1cblxuLmJveEluZm8ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMTUwcHg7XG4gIGxlZnQ6IDE4OHB4O1xufVxuLmJveEluZm8gPiAudHJpYW5nbGUtcmlnaHQge1xuICB3aWR0aDogMDtcbiAgaGVpZ2h0OiAwO1xuICBib3JkZXItdG9wOiA4cHggc29saWQgdHJhbnNwYXJlbnQ7XG4gIGJvcmRlci1yaWdodDogMTJweCBzb2xpZCAjMzMzMzMzO1xuICBib3JkZXItYm90dG9tOiA4cHggc29saWQgdHJhbnNwYXJlbnQ7XG4gIGJvcmRlci1sZWZ0OiA4cHggc29saWQgdHJhbnNwYXJlbnQ7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiA1MHB4O1xuICByaWdodDogMjBweDtcbn1cbi5ib3hJbmZvID4gLnNlc3Npb24taXRlbSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzMzMzMzM7XG4gIGNvbG9yOiAjZmZmO1xuICBoZWlnaHQ6IDIxNXB4O1xuICB3aWR0aDogMjY1cHg7XG4gIHotaW5kZXg6IDU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGJveC1zaGFkb3c6IDBweCAzcHggNnB4ICMwMDAwMDAyOTtcbiAgYm9yZGVyOiAxcHggc29saWQgIzAwMDAwMDtcbiAgb3BhY2l0eTogMC45NDtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xufVxuLmJveEluZm8gPiAuc2Vzc2lvbi1pdGVtID4gLml0ZW0tbmFtZSB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBoZWlnaHQ6IDMwcHg7XG59XG4uYm94SW5mbyA+IC5zZXNzaW9uLWl0ZW0gPiAuaXRlbS1uYW1lID4gLml0ZW0tZGF0YSB7XG4gIGNvbG9yOiAjNDNiNmZiO1xufVxuLmJveEluZm8gPiAuc2Vzc2lvbi1pdGVtID4gLml0ZW0tbmFtZTpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM2NjY7XG59XG5cbi5ib3htb3JlSW5mbyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAxNTBweDtcbiAgbGVmdDogNDY1cHg7XG59XG4uYm94bW9yZUluZm8gPiAudHJpYW5nbGUtcmlnaHQge1xuICB3aWR0aDogMDtcbiAgaGVpZ2h0OiAwO1xuICBib3JkZXItdG9wOiA4cHggc29saWQgdHJhbnNwYXJlbnQ7XG4gIGJvcmRlci1yaWdodDogMTJweCBzb2xpZCAjMzMzMzMzO1xuICBib3JkZXItYm90dG9tOiA4cHggc29saWQgdHJhbnNwYXJlbnQ7XG4gIGJvcmRlci1sZWZ0OiA4cHggc29saWQgdHJhbnNwYXJlbnQ7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiAzNXB4O1xuICByaWdodDogMjBweDtcbn1cbi5ib3htb3JlSW5mbyA+IC5zZXNzaW9uLWl0ZW0ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzMzMzMzO1xuICBjb2xvcjogI2ZmZjtcbiAgaGVpZ2h0OiAzMDBweDtcbiAgd2lkdGg6IDI1MHB4O1xuICB6LWluZGV4OiA1O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBib3gtc2hhZG93OiAwcHggM3B4IDZweCAjMDAwMDAwMjk7XG4gIGJvcmRlcjogMXB4IHNvbGlkICMwMDAwMDA7XG4gIG9wYWNpdHk6IDAuOTQ7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbn1cbi5ib3htb3JlSW5mbyA+IC5zZXNzaW9uLWl0ZW0gPiAuaXRlbS1uYW1lIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGhlaWdodDogMzBweDtcbn1cbi5ib3htb3JlSW5mbyA+IC5zZXNzaW9uLWl0ZW0gPiAuaXRlbS1uYW1lID4gLml0ZW0tZGF0YSB7XG4gIGNvbG9yOiAjNDNiNmZiO1xufVxuLmJveG1vcmVJbmZvID4gLnNlc3Npb24taXRlbSA+IC5pdGVtLW5hbWU6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjY2O1xufVxuLmJveG1vcmVJbmZvID4gLnNlc3Npb24taXRlbSA+IGhyIHtcbiAgYm9yZGVyLWJvdHRvbTogIzk4OTg5ODtcbn1cblxuLmQtYXJyb3cge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJvdHRvbTogNXB4O1xufSJdfQ== */";
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
            icon: 'icon-ds1'
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


    __webpack_exports__["default"] = ".direct-connect {\n  width: 645px;\n  height: 560px;\n}\n.direct-connect .direct-connect-header {\n  width: 100%;\n  height: 50px;\n  background-color: #dfe2ee;\n  border-radius: 0px 4px 0px 0px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.direct-connect .direct-connect-header .direct-connect-header {\n  letter-spacing: 0.48px;\n  color: #121111;\n}\n.direct-connect .direct-connect-container {\n  display: flex;\n}\n.direct-connect .direct-connect-container .container-left {\n  width: 45%;\n  height: 510px;\n  background-color: #eef2f5;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.direct-connect .direct-connect-container .container-left .figure {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n.direct-connect .direct-connect-container .container-left .figure .dxs {\n  width: 90px;\n  height: 90px;\n  background-color: #034ea2;\n  border-radius: 50%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n}\n.direct-connect .direct-connect-container .container-left .figure .connector1,\n.direct-connect .direct-connect-container .container-left .figure .connector2 {\n  width: 150px;\n  height: 30px;\n  display: flex;\n  justify-content: space-between;\n}\n.direct-connect .direct-connect-container .container-left .figure .connector1 .dxs-db,\n.direct-connect .direct-connect-container .container-left .figure .connector2 .dxs-db {\n  width: 50px;\n  height: 30px;\n  transform: matrix(0.79, -0.8, 0.66, 0.79, 0, 0);\n}\n.direct-connect .direct-connect-container .container-left .figure .connector1 .dxs-ds,\n.direct-connect .direct-connect-container .container-left .figure .connector2 .dxs-ds {\n  width: 50px;\n  height: 30px;\n  transform: matrix(-0.79, -0.8, 0.62, -0.79, 0, 0);\n}\n.direct-connect .direct-connect-container .container-left .figure .connector1 .dts-db,\n.direct-connect .direct-connect-container .container-left .figure .connector2 .dts-db {\n  width: 50px;\n  height: 30px;\n  transform: matrix(-0.79, -0.8, 0.66, -0.79, 0, 0);\n}\n.direct-connect .direct-connect-container .container-left .figure .connector1 .dts-ds,\n.direct-connect .direct-connect-container .container-left .figure .connector2 .dts-ds {\n  width: 50px;\n  height: 30px;\n  transform: matrix(0.79, -0.8, 0.62, 0.79, 0, 0);\n}\n.direct-connect .direct-connect-container .container-left .figure .db-ds,\n.direct-connect .direct-connect-container .container-left .figure .dts {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.direct-connect .direct-connect-container .container-left .figure .db-ds .circle-box,\n.direct-connect .direct-connect-container .container-left .figure .dts .circle-box {\n  display: flex;\n  align-items: center;\n}\n.direct-connect .direct-connect-container .container-left .figure .db-ds .circle-box .dts-circle,\n.direct-connect .direct-connect-container .container-left .figure .db-ds .circle-box .db-circle,\n.direct-connect .direct-connect-container .container-left .figure .db-ds .circle-box .ds-circle,\n.direct-connect .direct-connect-container .container-left .figure .dts .circle-box .dts-circle,\n.direct-connect .direct-connect-container .container-left .figure .dts .circle-box .db-circle,\n.direct-connect .direct-connect-container .container-left .figure .dts .circle-box .ds-circle {\n  width: 74px;\n  height: 74px;\n  border-radius: 50%;\n  box-shadow: 0px 3px 0px #034EA2;\n  border: 1px solid #034EA2;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n}\n.direct-connect .direct-connect-container .container-left .figure .db-ds .circle-box .dts-circle .icon-box,\n.direct-connect .direct-connect-container .container-left .figure .db-ds .circle-box .db-circle .icon-box,\n.direct-connect .direct-connect-container .container-left .figure .db-ds .circle-box .ds-circle .icon-box,\n.direct-connect .direct-connect-container .container-left .figure .dts .circle-box .dts-circle .icon-box,\n.direct-connect .direct-connect-container .container-left .figure .dts .circle-box .db-circle .icon-box,\n.direct-connect .direct-connect-container .container-left .figure .dts .circle-box .ds-circle .icon-box {\n  width: 16px;\n  height: 16px;\n  border-radius: 50%;\n  background-color: #8DBF22;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.direct-connect .direct-connect-container .container-left .figure .db-ds .circle-box .dts-circle .circle-content,\n.direct-connect .direct-connect-container .container-left .figure .db-ds .circle-box .db-circle .circle-content,\n.direct-connect .direct-connect-container .container-left .figure .db-ds .circle-box .ds-circle .circle-content,\n.direct-connect .direct-connect-container .container-left .figure .dts .circle-box .dts-circle .circle-content,\n.direct-connect .direct-connect-container .container-left .figure .dts .circle-box .db-circle .circle-content,\n.direct-connect .direct-connect-container .container-left .figure .dts .circle-box .ds-circle .circle-content {\n  display: flex;\n  align-items: center;\n}\n.direct-connect .direct-connect-container .container-left .figure .db-ds .circle-box .green-circles,\n.direct-connect .direct-connect-container .container-left .figure .dts .circle-box .green-circles {\n  background-color: #C1F68C;\n}\n.direct-connect .direct-connect-container .container-left .figure .db-ds .circle-box .lightblue-circles,\n.direct-connect .direct-connect-container .container-left .figure .dts .circle-box .lightblue-circles {\n  background-color: #B2E0FC;\n}\n.direct-connect .direct-connect-container .container-left .figure .db-ds .dxs-dts,\n.direct-connect .direct-connect-container .container-left .figure .dts .dxs-dts {\n  width: 90px;\n  height: 11px;\n  transform: matrix(0, -1.3, 1, 0, 0, 0);\n  margin-bottom: -1px;\n}\n.direct-connect .direct-connect-container .container-left .figure .connector1 {\n  margin-top: -10px;\n}\n.direct-connect .direct-connect-container .container-left .figure .connector2 {\n  margin-top: 4px;\n}\n.direct-connect .direct-connect-container .container-left .figure .dts {\n  margin-top: -10px;\n}\n.direct-connect .direct-connect-container .container-right {\n  background-color: white;\n  height: 510px;\n  width: 55%;\n  display: flex;\n  flex-direction: column;\n}\n.direct-connect .direct-connect-container .container-right .task-container,\n.direct-connect .direct-connect-container .container-right .host-container,\n.direct-connect .direct-connect-container .container-right .log-container {\n  display: flex;\n  flex-direction: column;\n}\n.direct-connect .direct-connect-container .container-right .task-container .content,\n.direct-connect .direct-connect-container .container-right .host-container .content,\n.direct-connect .direct-connect-container .container-right .log-container .content {\n  display: flex;\n  flex-direction: column;\n}\n.direct-connect .direct-connect-container .container-right .task-container .content .header,\n.direct-connect .direct-connect-container .container-right .host-container .content .header,\n.direct-connect .direct-connect-container .container-right .log-container .content .header {\n  display: flex;\n  justify-content: space-between;\n}\n.direct-connect .direct-connect-container .container-right .task-container .content .divider,\n.direct-connect .direct-connect-container .container-right .host-container .content .divider,\n.direct-connect .direct-connect-container .container-right .log-container .content .divider {\n  border-bottom: #CCCCCC;\n}\n.direct-connect .direct-connect-container .container-right .task-container .content .description,\n.direct-connect .direct-connect-container .container-right .host-container .content .description,\n.direct-connect .direct-connect-container .container-right .log-container .content .description {\n  display: flex;\n  justify-content: space-between;\n}\n.direct-connect .direct-connect-container .container-right .task-container .content .description .des-right,\n.direct-connect .direct-connect-container .container-right .host-container .content .description .des-right,\n.direct-connect .direct-connect-container .container-right .log-container .content .description .des-right {\n  display: flex;\n  width: 32%;\n}\n.direct-connect .direct-connect-container .container-right .task-container .content .description .host-details,\n.direct-connect .direct-connect-container .container-right .host-container .content .description .host-details,\n.direct-connect .direct-connect-container .container-right .log-container .content .description .host-details {\n  width: 110px;\n  display: flex;\n  justify-content: space-between;\n}\n.direct-connect .direct-connect-container .host-container {\n  background-color: #EEF2F5;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hcHBsZS9wcm9qZWN0L2RleGNlbnRlci1kYXNoYm9hcmQvc3JjL2FwcC9sYXlvdXQvc3lzdGVtcy1jb25uZWN0aW9uL2JveC1tb2RhbC9ib3gtbW9kYWwuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2xheW91dC9zeXN0ZW1zLWNvbm5lY3Rpb24vYm94LW1vZGFsL2JveC1tb2RhbC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFlBQUE7RUFDQSxhQUFBO0FDQ0o7QURBSTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7RUFDQSw4QkFBQTtFQUNBLGFBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0FDRVI7QUREUTtFQUNJLHNCQUFBO0VBQ0EsY0FBQTtBQ0daO0FEQUk7RUFDSSxhQUFBO0FDRVI7QUREUTtFQUNJLFVBQUE7RUFDQSxhQUFBO0VBQ0EseUJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBQ0daO0FERlk7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FDSWhCO0FESGdCO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBQ0twQjtBREhnQjs7RUFFSSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSw4QkFBQTtBQ0twQjtBREpvQjs7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLCtDQUFBO0FDT3hCO0FETG9COztFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsaURBQUE7QUNReEI7QUROb0I7O0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxpREFBQTtBQ1N4QjtBRFBvQjs7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLCtDQUFBO0FDVXhCO0FEUGdCOztFQUVJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0FDU3BCO0FEUm9COztFQUNJLGFBQUE7RUFDQSxtQkFBQTtBQ1d4QjtBRFZ3Qjs7Ozs7O0VBR0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLCtCQUFBO0VBQ0EseUJBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0FDZTVCO0FEZDRCOzs7Ozs7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBQ3FCaEM7QURuQjRCOzs7Ozs7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7QUMwQmhDO0FEdkJ3Qjs7RUFDSSx5QkFBQTtBQzBCNUI7QUR4QndCOztFQUNJLHlCQUFBO0FDMkI1QjtBRHhCb0I7O0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxzQ0FBQTtFQUNBLG1CQUFBO0FDMkJ4QjtBRHhCZ0I7RUFDSSxpQkFBQTtBQzBCcEI7QUR4QmdCO0VBQ0ksZUFBQTtBQzBCcEI7QUR4QmdCO0VBQ0ksaUJBQUE7QUMwQnBCO0FEdEJRO0VBQ0ksdUJBQUE7RUFDQSxhQUFBO0VBQ0EsVUFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtBQ3dCWjtBRHZCWTs7O0VBR0ksYUFBQTtFQUNBLHNCQUFBO0FDeUJoQjtBRHhCZ0I7OztFQUNJLGFBQUE7RUFDQSxzQkFBQTtBQzRCcEI7QUQzQm9COzs7RUFDSSxhQUFBO0VBQ0EsOEJBQUE7QUMrQnhCO0FEN0JvQjs7O0VBQ0ksc0JBQUE7QUNpQ3hCO0FEL0JvQjs7O0VBQ0ksYUFBQTtFQUNBLDhCQUFBO0FDbUN4QjtBRGxDd0I7OztFQUNJLGFBQUE7RUFDQSxVQUFBO0FDc0M1QjtBRHBDd0I7OztFQUNJLFlBQUE7RUFDQSxhQUFBO0VBQ0EsOEJBQUE7QUN3QzVCO0FEbENRO0VBQ0kseUJBQUE7QUNvQ1oiLCJmaWxlIjoic3JjL2FwcC9sYXlvdXQvc3lzdGVtcy1jb25uZWN0aW9uL2JveC1tb2RhbC9ib3gtbW9kYWwuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZGlyZWN0LWNvbm5lY3Qge1xuICAgIHdpZHRoOiA2NDVweDtcbiAgICBoZWlnaHQ6IDU2MHB4O1xuICAgIC5kaXJlY3QtY29ubmVjdC1oZWFkZXIge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgaGVpZ2h0OiA1MHB4O1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGZlMmVlO1xuICAgICAgICBib3JkZXItcmFkaXVzOiAwcHggNHB4IDBweCAwcHg7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgLmRpcmVjdC1jb25uZWN0LWhlYWRlciB7XG4gICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMC40OHB4O1xuICAgICAgICAgICAgY29sb3I6ICMxMjExMTE7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLmRpcmVjdC1jb25uZWN0LWNvbnRhaW5lciB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIC5jb250YWluZXItbGVmdCB7XG4gICAgICAgICAgICB3aWR0aDogNDUlO1xuICAgICAgICAgICAgaGVpZ2h0OiA1MTBweDtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNlZWYyZjU7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgICAgLmZpZ3VyZSB7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgLmR4cyB7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiA5MHB4O1xuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDkwcHg7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMwMzRlYTI7XG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC5jb25uZWN0b3IxLFxuICAgICAgICAgICAgICAgIC5jb25uZWN0b3IyIHtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDE1MHB4O1xuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDMwcHg7XG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgICAgICAgICAgICAgLmR4cy1kYiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogNTBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMzBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogbWF0cml4KDAuNzksIC0wLjgwLCAwLjY2LCAwLjc5LCAwLCAwKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAuZHhzLWRzIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiA1MHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAzMHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiBtYXRyaXgoLTAuNzksIC0wLjgwLCAwLjYyLCAtMC43OSwgMCwgMCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLmR0cy1kYiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogNTBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMzBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogbWF0cml4KC0wLjc5LCAtMC44MCwgMC42NiwgLTAuNzksIDAsIDApO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC5kdHMtZHMge1xuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDUwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDMwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IG1hdHJpeCgwLjc5LCAtMC44MCwgMC42MiwgMC43OSwgMCwgMCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLmRiLWRzLFxuICAgICAgICAgICAgICAgIC5kdHMge1xuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgLmNpcmNsZS1ib3gge1xuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICAuZHRzLWNpcmNsZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIC5kYi1jaXJjbGUsXG4gICAgICAgICAgICAgICAgICAgICAgICAuZHMtY2lyY2xlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogNzRweDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDc0cHg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IDBweCAzcHggMHB4ICMwMzRFQTI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgIzAzNEVBMjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuaWNvbi1ib3gge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTZweDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxNnB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICM4REJGMjI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuY2lyY2xlLWNvbnRlbnQge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIC5ncmVlbi1jaXJjbGVzIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjQzFGNjhDO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgLmxpZ2h0Ymx1ZS1jaXJjbGVzIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjQjJFMEZDO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC5keHMtZHRzIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiA5MHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMXB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiBtYXRyaXgoMCwgLTEuMywgMSwgMCwgMCwgMCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAtMXB4O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC5jb25uZWN0b3IxIHtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogLTEwcHg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC5jb25uZWN0b3IyIHtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogNHB4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAuZHRzIHtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogLTEwcHg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC5jb250YWluZXItcmlnaHQge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgICAgICAgICBoZWlnaHQ6IDUxMHB4O1xuICAgICAgICAgICAgd2lkdGg6IDU1JTtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgICAgLnRhc2stY29udGFpbmVyLFxuICAgICAgICAgICAgLmhvc3QtY29udGFpbmVyLFxuICAgICAgICAgICAgLmxvZy1jb250YWluZXIge1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICAgICAgICAuY29udGVudCB7XG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgICAgICAgICAgIC5oZWFkZXIge1xuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAuZGl2aWRlciB7XG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItYm90dG9tOiAjQ0NDQ0NDO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC5kZXNjcmlwdGlvbiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICAgICAgICAgICAgICAgICAgLmRlcy1yaWdodCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMzIlO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgLmhvc3QtZGV0YWlscyB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDExMHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC5ob3N0LWNvbnRhaW5lciB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRUVGMkY1O1xuICAgICAgICB9XG4gICAgfVxufSIsIi5kaXJlY3QtY29ubmVjdCB7XG4gIHdpZHRoOiA2NDVweDtcbiAgaGVpZ2h0OiA1NjBweDtcbn1cbi5kaXJlY3QtY29ubmVjdCAuZGlyZWN0LWNvbm5lY3QtaGVhZGVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNTBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2RmZTJlZTtcbiAgYm9yZGVyLXJhZGl1czogMHB4IDRweCAwcHggMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4uZGlyZWN0LWNvbm5lY3QgLmRpcmVjdC1jb25uZWN0LWhlYWRlciAuZGlyZWN0LWNvbm5lY3QtaGVhZGVyIHtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuNDhweDtcbiAgY29sb3I6ICMxMjExMTE7XG59XG4uZGlyZWN0LWNvbm5lY3QgLmRpcmVjdC1jb25uZWN0LWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG4uZGlyZWN0LWNvbm5lY3QgLmRpcmVjdC1jb25uZWN0LWNvbnRhaW5lciAuY29udGFpbmVyLWxlZnQge1xuICB3aWR0aDogNDUlO1xuICBoZWlnaHQ6IDUxMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVmMmY1O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cbi5kaXJlY3QtY29ubmVjdCAuZGlyZWN0LWNvbm5lY3QtY29udGFpbmVyIC5jb250YWluZXItbGVmdCAuZmlndXJlIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4uZGlyZWN0LWNvbm5lY3QgLmRpcmVjdC1jb25uZWN0LWNvbnRhaW5lciAuY29udGFpbmVyLWxlZnQgLmZpZ3VyZSAuZHhzIHtcbiAgd2lkdGg6IDkwcHg7XG4gIGhlaWdodDogOTBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAzNGVhMjtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cbi5kaXJlY3QtY29ubmVjdCAuZGlyZWN0LWNvbm5lY3QtY29udGFpbmVyIC5jb250YWluZXItbGVmdCAuZmlndXJlIC5jb25uZWN0b3IxLFxuLmRpcmVjdC1jb25uZWN0IC5kaXJlY3QtY29ubmVjdC1jb250YWluZXIgLmNvbnRhaW5lci1sZWZ0IC5maWd1cmUgLmNvbm5lY3RvcjIge1xuICB3aWR0aDogMTUwcHg7XG4gIGhlaWdodDogMzBweDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuLmRpcmVjdC1jb25uZWN0IC5kaXJlY3QtY29ubmVjdC1jb250YWluZXIgLmNvbnRhaW5lci1sZWZ0IC5maWd1cmUgLmNvbm5lY3RvcjEgLmR4cy1kYixcbi5kaXJlY3QtY29ubmVjdCAuZGlyZWN0LWNvbm5lY3QtY29udGFpbmVyIC5jb250YWluZXItbGVmdCAuZmlndXJlIC5jb25uZWN0b3IyIC5keHMtZGIge1xuICB3aWR0aDogNTBweDtcbiAgaGVpZ2h0OiAzMHB4O1xuICB0cmFuc2Zvcm06IG1hdHJpeCgwLjc5LCAtMC44LCAwLjY2LCAwLjc5LCAwLCAwKTtcbn1cbi5kaXJlY3QtY29ubmVjdCAuZGlyZWN0LWNvbm5lY3QtY29udGFpbmVyIC5jb250YWluZXItbGVmdCAuZmlndXJlIC5jb25uZWN0b3IxIC5keHMtZHMsXG4uZGlyZWN0LWNvbm5lY3QgLmRpcmVjdC1jb25uZWN0LWNvbnRhaW5lciAuY29udGFpbmVyLWxlZnQgLmZpZ3VyZSAuY29ubmVjdG9yMiAuZHhzLWRzIHtcbiAgd2lkdGg6IDUwcHg7XG4gIGhlaWdodDogMzBweDtcbiAgdHJhbnNmb3JtOiBtYXRyaXgoLTAuNzksIC0wLjgsIDAuNjIsIC0wLjc5LCAwLCAwKTtcbn1cbi5kaXJlY3QtY29ubmVjdCAuZGlyZWN0LWNvbm5lY3QtY29udGFpbmVyIC5jb250YWluZXItbGVmdCAuZmlndXJlIC5jb25uZWN0b3IxIC5kdHMtZGIsXG4uZGlyZWN0LWNvbm5lY3QgLmRpcmVjdC1jb25uZWN0LWNvbnRhaW5lciAuY29udGFpbmVyLWxlZnQgLmZpZ3VyZSAuY29ubmVjdG9yMiAuZHRzLWRiIHtcbiAgd2lkdGg6IDUwcHg7XG4gIGhlaWdodDogMzBweDtcbiAgdHJhbnNmb3JtOiBtYXRyaXgoLTAuNzksIC0wLjgsIDAuNjYsIC0wLjc5LCAwLCAwKTtcbn1cbi5kaXJlY3QtY29ubmVjdCAuZGlyZWN0LWNvbm5lY3QtY29udGFpbmVyIC5jb250YWluZXItbGVmdCAuZmlndXJlIC5jb25uZWN0b3IxIC5kdHMtZHMsXG4uZGlyZWN0LWNvbm5lY3QgLmRpcmVjdC1jb25uZWN0LWNvbnRhaW5lciAuY29udGFpbmVyLWxlZnQgLmZpZ3VyZSAuY29ubmVjdG9yMiAuZHRzLWRzIHtcbiAgd2lkdGg6IDUwcHg7XG4gIGhlaWdodDogMzBweDtcbiAgdHJhbnNmb3JtOiBtYXRyaXgoMC43OSwgLTAuOCwgMC42MiwgMC43OSwgMCwgMCk7XG59XG4uZGlyZWN0LWNvbm5lY3QgLmRpcmVjdC1jb25uZWN0LWNvbnRhaW5lciAuY29udGFpbmVyLWxlZnQgLmZpZ3VyZSAuZGItZHMsXG4uZGlyZWN0LWNvbm5lY3QgLmRpcmVjdC1jb25uZWN0LWNvbnRhaW5lciAuY29udGFpbmVyLWxlZnQgLmZpZ3VyZSAuZHRzIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG4uZGlyZWN0LWNvbm5lY3QgLmRpcmVjdC1jb25uZWN0LWNvbnRhaW5lciAuY29udGFpbmVyLWxlZnQgLmZpZ3VyZSAuZGItZHMgLmNpcmNsZS1ib3gsXG4uZGlyZWN0LWNvbm5lY3QgLmRpcmVjdC1jb25uZWN0LWNvbnRhaW5lciAuY29udGFpbmVyLWxlZnQgLmZpZ3VyZSAuZHRzIC5jaXJjbGUtYm94IHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5kaXJlY3QtY29ubmVjdCAuZGlyZWN0LWNvbm5lY3QtY29udGFpbmVyIC5jb250YWluZXItbGVmdCAuZmlndXJlIC5kYi1kcyAuY2lyY2xlLWJveCAuZHRzLWNpcmNsZSxcbi5kaXJlY3QtY29ubmVjdCAuZGlyZWN0LWNvbm5lY3QtY29udGFpbmVyIC5jb250YWluZXItbGVmdCAuZmlndXJlIC5kYi1kcyAuY2lyY2xlLWJveCAuZGItY2lyY2xlLFxuLmRpcmVjdC1jb25uZWN0IC5kaXJlY3QtY29ubmVjdC1jb250YWluZXIgLmNvbnRhaW5lci1sZWZ0IC5maWd1cmUgLmRiLWRzIC5jaXJjbGUtYm94IC5kcy1jaXJjbGUsXG4uZGlyZWN0LWNvbm5lY3QgLmRpcmVjdC1jb25uZWN0LWNvbnRhaW5lciAuY29udGFpbmVyLWxlZnQgLmZpZ3VyZSAuZHRzIC5jaXJjbGUtYm94IC5kdHMtY2lyY2xlLFxuLmRpcmVjdC1jb25uZWN0IC5kaXJlY3QtY29ubmVjdC1jb250YWluZXIgLmNvbnRhaW5lci1sZWZ0IC5maWd1cmUgLmR0cyAuY2lyY2xlLWJveCAuZGItY2lyY2xlLFxuLmRpcmVjdC1jb25uZWN0IC5kaXJlY3QtY29ubmVjdC1jb250YWluZXIgLmNvbnRhaW5lci1sZWZ0IC5maWd1cmUgLmR0cyAuY2lyY2xlLWJveCAuZHMtY2lyY2xlIHtcbiAgd2lkdGg6IDc0cHg7XG4gIGhlaWdodDogNzRweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBib3gtc2hhZG93OiAwcHggM3B4IDBweCAjMDM0RUEyO1xuICBib3JkZXI6IDFweCBzb2xpZCAjMDM0RUEyO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cbi5kaXJlY3QtY29ubmVjdCAuZGlyZWN0LWNvbm5lY3QtY29udGFpbmVyIC5jb250YWluZXItbGVmdCAuZmlndXJlIC5kYi1kcyAuY2lyY2xlLWJveCAuZHRzLWNpcmNsZSAuaWNvbi1ib3gsXG4uZGlyZWN0LWNvbm5lY3QgLmRpcmVjdC1jb25uZWN0LWNvbnRhaW5lciAuY29udGFpbmVyLWxlZnQgLmZpZ3VyZSAuZGItZHMgLmNpcmNsZS1ib3ggLmRiLWNpcmNsZSAuaWNvbi1ib3gsXG4uZGlyZWN0LWNvbm5lY3QgLmRpcmVjdC1jb25uZWN0LWNvbnRhaW5lciAuY29udGFpbmVyLWxlZnQgLmZpZ3VyZSAuZGItZHMgLmNpcmNsZS1ib3ggLmRzLWNpcmNsZSAuaWNvbi1ib3gsXG4uZGlyZWN0LWNvbm5lY3QgLmRpcmVjdC1jb25uZWN0LWNvbnRhaW5lciAuY29udGFpbmVyLWxlZnQgLmZpZ3VyZSAuZHRzIC5jaXJjbGUtYm94IC5kdHMtY2lyY2xlIC5pY29uLWJveCxcbi5kaXJlY3QtY29ubmVjdCAuZGlyZWN0LWNvbm5lY3QtY29udGFpbmVyIC5jb250YWluZXItbGVmdCAuZmlndXJlIC5kdHMgLmNpcmNsZS1ib3ggLmRiLWNpcmNsZSAuaWNvbi1ib3gsXG4uZGlyZWN0LWNvbm5lY3QgLmRpcmVjdC1jb25uZWN0LWNvbnRhaW5lciAuY29udGFpbmVyLWxlZnQgLmZpZ3VyZSAuZHRzIC5jaXJjbGUtYm94IC5kcy1jaXJjbGUgLmljb24tYm94IHtcbiAgd2lkdGg6IDE2cHg7XG4gIGhlaWdodDogMTZweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjOERCRjIyO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cbi5kaXJlY3QtY29ubmVjdCAuZGlyZWN0LWNvbm5lY3QtY29udGFpbmVyIC5jb250YWluZXItbGVmdCAuZmlndXJlIC5kYi1kcyAuY2lyY2xlLWJveCAuZHRzLWNpcmNsZSAuY2lyY2xlLWNvbnRlbnQsXG4uZGlyZWN0LWNvbm5lY3QgLmRpcmVjdC1jb25uZWN0LWNvbnRhaW5lciAuY29udGFpbmVyLWxlZnQgLmZpZ3VyZSAuZGItZHMgLmNpcmNsZS1ib3ggLmRiLWNpcmNsZSAuY2lyY2xlLWNvbnRlbnQsXG4uZGlyZWN0LWNvbm5lY3QgLmRpcmVjdC1jb25uZWN0LWNvbnRhaW5lciAuY29udGFpbmVyLWxlZnQgLmZpZ3VyZSAuZGItZHMgLmNpcmNsZS1ib3ggLmRzLWNpcmNsZSAuY2lyY2xlLWNvbnRlbnQsXG4uZGlyZWN0LWNvbm5lY3QgLmRpcmVjdC1jb25uZWN0LWNvbnRhaW5lciAuY29udGFpbmVyLWxlZnQgLmZpZ3VyZSAuZHRzIC5jaXJjbGUtYm94IC5kdHMtY2lyY2xlIC5jaXJjbGUtY29udGVudCxcbi5kaXJlY3QtY29ubmVjdCAuZGlyZWN0LWNvbm5lY3QtY29udGFpbmVyIC5jb250YWluZXItbGVmdCAuZmlndXJlIC5kdHMgLmNpcmNsZS1ib3ggLmRiLWNpcmNsZSAuY2lyY2xlLWNvbnRlbnQsXG4uZGlyZWN0LWNvbm5lY3QgLmRpcmVjdC1jb25uZWN0LWNvbnRhaW5lciAuY29udGFpbmVyLWxlZnQgLmZpZ3VyZSAuZHRzIC5jaXJjbGUtYm94IC5kcy1jaXJjbGUgLmNpcmNsZS1jb250ZW50IHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5kaXJlY3QtY29ubmVjdCAuZGlyZWN0LWNvbm5lY3QtY29udGFpbmVyIC5jb250YWluZXItbGVmdCAuZmlndXJlIC5kYi1kcyAuY2lyY2xlLWJveCAuZ3JlZW4tY2lyY2xlcyxcbi5kaXJlY3QtY29ubmVjdCAuZGlyZWN0LWNvbm5lY3QtY29udGFpbmVyIC5jb250YWluZXItbGVmdCAuZmlndXJlIC5kdHMgLmNpcmNsZS1ib3ggLmdyZWVuLWNpcmNsZXMge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjQzFGNjhDO1xufVxuLmRpcmVjdC1jb25uZWN0IC5kaXJlY3QtY29ubmVjdC1jb250YWluZXIgLmNvbnRhaW5lci1sZWZ0IC5maWd1cmUgLmRiLWRzIC5jaXJjbGUtYm94IC5saWdodGJsdWUtY2lyY2xlcyxcbi5kaXJlY3QtY29ubmVjdCAuZGlyZWN0LWNvbm5lY3QtY29udGFpbmVyIC5jb250YWluZXItbGVmdCAuZmlndXJlIC5kdHMgLmNpcmNsZS1ib3ggLmxpZ2h0Ymx1ZS1jaXJjbGVzIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0IyRTBGQztcbn1cbi5kaXJlY3QtY29ubmVjdCAuZGlyZWN0LWNvbm5lY3QtY29udGFpbmVyIC5jb250YWluZXItbGVmdCAuZmlndXJlIC5kYi1kcyAuZHhzLWR0cyxcbi5kaXJlY3QtY29ubmVjdCAuZGlyZWN0LWNvbm5lY3QtY29udGFpbmVyIC5jb250YWluZXItbGVmdCAuZmlndXJlIC5kdHMgLmR4cy1kdHMge1xuICB3aWR0aDogOTBweDtcbiAgaGVpZ2h0OiAxMXB4O1xuICB0cmFuc2Zvcm06IG1hdHJpeCgwLCAtMS4zLCAxLCAwLCAwLCAwKTtcbiAgbWFyZ2luLWJvdHRvbTogLTFweDtcbn1cbi5kaXJlY3QtY29ubmVjdCAuZGlyZWN0LWNvbm5lY3QtY29udGFpbmVyIC5jb250YWluZXItbGVmdCAuZmlndXJlIC5jb25uZWN0b3IxIHtcbiAgbWFyZ2luLXRvcDogLTEwcHg7XG59XG4uZGlyZWN0LWNvbm5lY3QgLmRpcmVjdC1jb25uZWN0LWNvbnRhaW5lciAuY29udGFpbmVyLWxlZnQgLmZpZ3VyZSAuY29ubmVjdG9yMiB7XG4gIG1hcmdpbi10b3A6IDRweDtcbn1cbi5kaXJlY3QtY29ubmVjdCAuZGlyZWN0LWNvbm5lY3QtY29udGFpbmVyIC5jb250YWluZXItbGVmdCAuZmlndXJlIC5kdHMge1xuICBtYXJnaW4tdG9wOiAtMTBweDtcbn1cbi5kaXJlY3QtY29ubmVjdCAuZGlyZWN0LWNvbm5lY3QtY29udGFpbmVyIC5jb250YWluZXItcmlnaHQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgaGVpZ2h0OiA1MTBweDtcbiAgd2lkdGg6IDU1JTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cbi5kaXJlY3QtY29ubmVjdCAuZGlyZWN0LWNvbm5lY3QtY29udGFpbmVyIC5jb250YWluZXItcmlnaHQgLnRhc2stY29udGFpbmVyLFxuLmRpcmVjdC1jb25uZWN0IC5kaXJlY3QtY29ubmVjdC1jb250YWluZXIgLmNvbnRhaW5lci1yaWdodCAuaG9zdC1jb250YWluZXIsXG4uZGlyZWN0LWNvbm5lY3QgLmRpcmVjdC1jb25uZWN0LWNvbnRhaW5lciAuY29udGFpbmVyLXJpZ2h0IC5sb2ctY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cbi5kaXJlY3QtY29ubmVjdCAuZGlyZWN0LWNvbm5lY3QtY29udGFpbmVyIC5jb250YWluZXItcmlnaHQgLnRhc2stY29udGFpbmVyIC5jb250ZW50LFxuLmRpcmVjdC1jb25uZWN0IC5kaXJlY3QtY29ubmVjdC1jb250YWluZXIgLmNvbnRhaW5lci1yaWdodCAuaG9zdC1jb250YWluZXIgLmNvbnRlbnQsXG4uZGlyZWN0LWNvbm5lY3QgLmRpcmVjdC1jb25uZWN0LWNvbnRhaW5lciAuY29udGFpbmVyLXJpZ2h0IC5sb2ctY29udGFpbmVyIC5jb250ZW50IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cbi5kaXJlY3QtY29ubmVjdCAuZGlyZWN0LWNvbm5lY3QtY29udGFpbmVyIC5jb250YWluZXItcmlnaHQgLnRhc2stY29udGFpbmVyIC5jb250ZW50IC5oZWFkZXIsXG4uZGlyZWN0LWNvbm5lY3QgLmRpcmVjdC1jb25uZWN0LWNvbnRhaW5lciAuY29udGFpbmVyLXJpZ2h0IC5ob3N0LWNvbnRhaW5lciAuY29udGVudCAuaGVhZGVyLFxuLmRpcmVjdC1jb25uZWN0IC5kaXJlY3QtY29ubmVjdC1jb250YWluZXIgLmNvbnRhaW5lci1yaWdodCAubG9nLWNvbnRhaW5lciAuY29udGVudCAuaGVhZGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuLmRpcmVjdC1jb25uZWN0IC5kaXJlY3QtY29ubmVjdC1jb250YWluZXIgLmNvbnRhaW5lci1yaWdodCAudGFzay1jb250YWluZXIgLmNvbnRlbnQgLmRpdmlkZXIsXG4uZGlyZWN0LWNvbm5lY3QgLmRpcmVjdC1jb25uZWN0LWNvbnRhaW5lciAuY29udGFpbmVyLXJpZ2h0IC5ob3N0LWNvbnRhaW5lciAuY29udGVudCAuZGl2aWRlcixcbi5kaXJlY3QtY29ubmVjdCAuZGlyZWN0LWNvbm5lY3QtY29udGFpbmVyIC5jb250YWluZXItcmlnaHQgLmxvZy1jb250YWluZXIgLmNvbnRlbnQgLmRpdmlkZXIge1xuICBib3JkZXItYm90dG9tOiAjQ0NDQ0NDO1xufVxuLmRpcmVjdC1jb25uZWN0IC5kaXJlY3QtY29ubmVjdC1jb250YWluZXIgLmNvbnRhaW5lci1yaWdodCAudGFzay1jb250YWluZXIgLmNvbnRlbnQgLmRlc2NyaXB0aW9uLFxuLmRpcmVjdC1jb25uZWN0IC5kaXJlY3QtY29ubmVjdC1jb250YWluZXIgLmNvbnRhaW5lci1yaWdodCAuaG9zdC1jb250YWluZXIgLmNvbnRlbnQgLmRlc2NyaXB0aW9uLFxuLmRpcmVjdC1jb25uZWN0IC5kaXJlY3QtY29ubmVjdC1jb250YWluZXIgLmNvbnRhaW5lci1yaWdodCAubG9nLWNvbnRhaW5lciAuY29udGVudCAuZGVzY3JpcHRpb24ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG4uZGlyZWN0LWNvbm5lY3QgLmRpcmVjdC1jb25uZWN0LWNvbnRhaW5lciAuY29udGFpbmVyLXJpZ2h0IC50YXNrLWNvbnRhaW5lciAuY29udGVudCAuZGVzY3JpcHRpb24gLmRlcy1yaWdodCxcbi5kaXJlY3QtY29ubmVjdCAuZGlyZWN0LWNvbm5lY3QtY29udGFpbmVyIC5jb250YWluZXItcmlnaHQgLmhvc3QtY29udGFpbmVyIC5jb250ZW50IC5kZXNjcmlwdGlvbiAuZGVzLXJpZ2h0LFxuLmRpcmVjdC1jb25uZWN0IC5kaXJlY3QtY29ubmVjdC1jb250YWluZXIgLmNvbnRhaW5lci1yaWdodCAubG9nLWNvbnRhaW5lciAuY29udGVudCAuZGVzY3JpcHRpb24gLmRlcy1yaWdodCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHdpZHRoOiAzMiU7XG59XG4uZGlyZWN0LWNvbm5lY3QgLmRpcmVjdC1jb25uZWN0LWNvbnRhaW5lciAuY29udGFpbmVyLXJpZ2h0IC50YXNrLWNvbnRhaW5lciAuY29udGVudCAuZGVzY3JpcHRpb24gLmhvc3QtZGV0YWlscyxcbi5kaXJlY3QtY29ubmVjdCAuZGlyZWN0LWNvbm5lY3QtY29udGFpbmVyIC5jb250YWluZXItcmlnaHQgLmhvc3QtY29udGFpbmVyIC5jb250ZW50IC5kZXNjcmlwdGlvbiAuaG9zdC1kZXRhaWxzLFxuLmRpcmVjdC1jb25uZWN0IC5kaXJlY3QtY29ubmVjdC1jb250YWluZXIgLmNvbnRhaW5lci1yaWdodCAubG9nLWNvbnRhaW5lciAuY29udGVudCAuZGVzY3JpcHRpb24gLmhvc3QtZGV0YWlscyB7XG4gIHdpZHRoOiAxMTBweDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuLmRpcmVjdC1jb25uZWN0IC5kaXJlY3QtY29ubmVjdC1jb250YWluZXIgLmhvc3QtY29udGFpbmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0VFRjJGNTtcbn0iXX0= */";
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


    __webpack_exports__["default"] = ".connection-container {\n  width: 100%;\n  height: 520px;\n  border: 1px solid #CCCCCC;\n  border-radius: 0px 7px 7px 7px;\n  background-color: white;\n}\n.connection-container .connection-content {\n  display: flex;\n  flex-direction: column;\n}\n.connection-container .connection-content .connection-header {\n  display: flex;\n  justify-content: space-between;\n  color: #111111;\n}\n.connection-container .connection-content .connection-header .search-box {\n  position: relative;\n  width: 288px;\n  height: 30px;\n}\n.connection-container .connection-content .connection-header .search-box div {\n  width: 100%;\n  display: flex;\n}\n.connection-container .connection-content .connection-header .search-box div > input {\n  width: 100%;\n  padding: 6px 12px;\n  text-indent: 20px;\n}\n.connection-container .connection-content .connection-header .search-box div > img {\n  position: absolute;\n  transform: rotate(270deg);\n  left: 10px;\n  top: 8px;\n}\n.connection-container .connection-content .connection-header .search-box > img {\n  position: absolute;\n  right: 10px;\n  top: 8px;\n}\n.connection-container .connection-content .connection-body {\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n}\n.connection-container .connection-content .connection-body .connection-rowtitle {\n  display: flex;\n  align-items: center;\n  text-align: left;\n  padding-top: 12px;\n  padding-bottom: 12px;\n  background-color: #dfe2ee;\n  border-radius: 4px 4px 0px 0px;\n  border: none;\n}\n.connection-container .connection-content .connection-body .connection-rowtitle .system-name {\n  width: 16%;\n}\n.connection-container .connection-content .connection-body .connection-rowtitle .parent-name {\n  width: 16%;\n}\n.connection-container .connection-content .connection-body .connection-rowtitle .connection-number {\n  width: 16%;\n}\n.connection-container .connection-content .connection-body .connection-rowtitle .fail-connection {\n  width: 16%;\n}\n.connection-container .connection-content .connection-body .connection-rowtitle .utilisation {\n  width: 15%;\n}\n.connection-container .connection-content .connection-body .connection-rowtitle .state {\n  width: 15%;\n  display: flex;\n  align-items: center;\n}\n.connection-container .connection-content .connection-body .connection-rowtitle .state .status-indicator {\n  width: 15px;\n  height: 15px;\n  border-style: none;\n}\n.connection-container .connection-content .connection-body .connection-rowtitle .state .Working {\n  background-image: url(\"srchttps://freehost-spec.github.io/dexcenter-dashboard/assets/images/icons/check-circle.svg\");\n  background-repeat: no-repeat;\n  background-size: 15px 15px;\n}\n.connection-container .connection-content .connection-body .connection-rowtitle .state .Fail {\n  background-image: url(\"srchttps://freehost-spec.github.io/dexcenter-dashboard/assets/images/icons/error-icon.svg\");\n  background-size: 15px 15px;\n  background-repeat: no-repeat;\n}\n.connection-container .connection-content .connection-body .filter {\n  width: 100%;\n  background-color: white;\n  display: flex;\n  height: 50px;\n  align-items: center;\n  border: 1px solid #E7E7EC;\n}\n.connection-container .connection-content .connection-body .filter .filter-system-name {\n  width: 16%;\n}\n.connection-container .connection-content .connection-body .filter .filter-system-name .filter-box {\n  width: 40%;\n}\n.connection-container .connection-content .connection-body .filter .filter-parent-name {\n  width: 16%;\n}\n.connection-container .connection-content .connection-body .filter .filter-parent-name .filter-box {\n  width: 40%;\n}\n.connection-container .connection-content .connection-body .filter .filter-connection-number {\n  width: 16%;\n}\n.connection-container .connection-content .connection-body .filter .filter-connection-number .filter-box {\n  width: 35%;\n}\n.connection-container .connection-content .connection-body .filter .filter-fail-connection {\n  width: 16%;\n}\n.connection-container .connection-content .connection-body .filter .filter-fail-connection .filter-box {\n  width: 35%;\n}\n.connection-container .connection-content .connection-body .filter .filter-utilisation {\n  width: 15%;\n}\n.connection-container .connection-content .connection-body .filter .filter-utilisation .filter-box {\n  width: 35%;\n}\n.connection-container .connection-content .connection-body .filter .filter-state {\n  width: 15%;\n}\n.connection-container .connection-content .connection-body .filter .filter-state .filter-box {\n  width: 35%;\n}\n.connection-container .connection-content .connection-body .connection-tr {\n  display: flex;\n  flex-direction: column;\n  background-color: white;\n  border-left: 1px solid #E7E7EC;\n  border-right: 1px solid #E7E7EC;\n}\n.connection-container .connection-content .connection-body .connection-tr .connection-td {\n  width: 100%;\n  height: 34px;\n  border-radius: 0px;\n  background-color: white;\n  font-size: 13px;\n}\n.connection-container .connection-content .connection-body .connection-tr .divider {\n  width: 93%;\n}\n.connection-container .connection-content .connection-body .connection-tr .divider hr {\n  border-top: 1px solid #E7E7EC;\n}\n.connection-container .connection-content .connection-body .page-container {\n  background-color: #dfe2ee !important;\n  border: 1px solid #c1c3c9;\n  border-radius: 0px 0px 4px 4px;\n}\n.connection-container .connection-content .connection-body .page-container .page-content {\n  display: flex;\n  justify-content: space-between;\n  text-align: left;\n  align-items: center;\n  color: #333333;\n}\n.connection-container .connection-content .connection-body .page-container .page-content > .pagination-left {\n  width: 30%;\n}\n.connection-container .connection-content .connection-body .page-container .page-content > .pagination-right {\n  width: 22%;\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-end;\n  align-items: center;\n}\n.connection-container .connection-content .connection-body .page-container .page-content > .pagination-right .page-details {\n  display: flex;\n  flex-direction: row;\n  justify-content: center !important;\n  align-items: center;\n}\n.connection-container .connection-content .connection-body .page-container .page-content > .pagination-right .page-details .page-number {\n  color: #333333;\n  border: 1px solid #c1c3c9;\n}\n.connection-container .connection-content .connection-body .page-container .page-content > .pagination-right .page-details .page-number:focus {\n  outline-style: none;\n  color: #333333;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hcHBsZS9wcm9qZWN0L2RleGNlbnRlci1kYXNoYm9hcmQvc3JjL2FwcC9sYXlvdXQvc3lzdGVtcy1jb25uZWN0aW9uL2Nvbm5lY3Rpb24tdGFibGUvY29ubmVjdGlvbi10YWJsZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbGF5b3V0L3N5c3RlbXMtY29ubmVjdGlvbi9jb25uZWN0aW9uLXRhYmxlL2Nvbm5lY3Rpb24tdGFibGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBd0JBO0VBQ0ksV0FBQTtFQUNBLGFBQUE7RUFDQSx5QkFBQTtFQUNBLDhCQUFBO0VBQ0EsdUJBQUE7QUN2Qko7QUR3Qkk7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7QUN0QlI7QUR1QlE7RUFDSSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxjQUFBO0FDckJaO0FEc0JZO0VBQ0ksa0JBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtBQ3BCaEI7QURxQmdCO0VBQ0ksV0FBQTtFQUNBLGFBQUE7QUNuQnBCO0FEb0JvQjtFQUNJLFdBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0FDbEJ4QjtBRG9Cb0I7RUFDSSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EsVUFBQTtFQUNBLFFBQUE7QUNsQnhCO0FEcUJnQjtFQUNJLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFFBQUE7QUNuQnBCO0FEdUJRO0VBQ0ksV0FBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtBQ3JCWjtBRHVCWTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxvQkFBQTtFQUNBLHlCQUFBO0VBQ0EsOEJBQUE7RUFDQSxZQUFBO0FDckJoQjtBRHNCZ0I7RUE1RVosVUFBQTtBQ3lESjtBRHNCZ0I7RUEzRVosVUFBQTtBQ3dESjtBRHNCZ0I7RUExRVosVUFBQTtBQ3VESjtBRHNCZ0I7RUF6RVosVUFBQTtBQ3NESjtBRHNCZ0I7RUF4RVosVUFBQTtBQ3FESjtBRHNCZ0I7RUF2RVosVUFBQTtFQXlFZ0IsYUFBQTtFQUNBLG1CQUFBO0FDcEJwQjtBRHFCb0I7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FDbkJ4QjtBRHFCb0I7RUFDSSxvSEFBQTtFQUNBLDRCQUFBO0VBQ0EsMEJBQUE7QUNuQnhCO0FEcUJvQjtFQUNJLGtIQUFBO0VBQ0EsMEJBQUE7RUFDQSw0QkFBQTtBQ25CeEI7QUR3Qlk7RUFDSSxXQUFBO0VBQ0EsdUJBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7QUN0QmhCO0FEdUJnQjtFQXhIWixVQUFBO0FDb0dKO0FEc0JvQjtFQUNJLFVBQUE7QUNwQnhCO0FEdUJnQjtFQTFIWixVQUFBO0FDc0dKO0FEc0JvQjtFQUNJLFVBQUE7QUNwQnhCO0FEdUJnQjtFQTVIWixVQUFBO0FDd0dKO0FEc0JvQjtFQUNJLFVBQUE7QUNwQnhCO0FEdUJnQjtFQTlIWixVQUFBO0FDMEdKO0FEc0JvQjtFQUNJLFVBQUE7QUNwQnhCO0FEdUJnQjtFQWhJWixVQUFBO0FDNEdKO0FEc0JvQjtFQUNJLFVBQUE7QUNwQnhCO0FEdUJnQjtFQWxJWixVQUFBO0FDOEdKO0FEc0JvQjtFQUNJLFVBQUE7QUNwQnhCO0FEeUJZO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSw4QkFBQTtFQUNBLCtCQUFBO0FDdkJoQjtBRHdCZ0I7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsdUJBQUE7RUFDQSxlQUFBO0FDdEJwQjtBRHdCZ0I7RUFDSSxVQUFBO0FDdEJwQjtBRHVCb0I7RUFDSSw2QkFBQTtBQ3JCeEI7QUQwQlk7RUFDSSxvQ0FBQTtFQUNBLHlCQUFBO0VBQ0EsOEJBQUE7QUN4QmhCO0FEeUJnQjtFQUNJLGFBQUE7RUFDQSw4QkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0FDdkJwQjtBRHdCb0I7RUFDSSxVQUFBO0FDdEJ4QjtBRHdCb0I7RUFDSSxVQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtBQ3RCeEI7QUR1QndCO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0NBQUE7RUFDQSxtQkFBQTtBQ3JCNUI7QURzQjRCO0VBQ0ksY0FBQTtFQUNBLHlCQUFBO0FDcEJoQztBRHNCNEI7RUFDSSxtQkFBQTtFQUNBLGNBQUE7QUNwQmhDIiwiZmlsZSI6InNyYy9hcHAvbGF5b3V0L3N5c3RlbXMtY29ubmVjdGlvbi9jb25uZWN0aW9uLXRhYmxlL2Nvbm5lY3Rpb24tdGFibGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAbWl4aW4gdGFibGUtY29sMSB7XG4gICAgd2lkdGg6IDE2JTtcbn1cblxuQG1peGluIHRhYmxlLWNvbDIge1xuICAgIHdpZHRoOiAxNiU7XG59XG5cbkBtaXhpbiB0YWJsZS1jb2wzIHtcbiAgICB3aWR0aDogMTYlO1xufVxuXG5AbWl4aW4gdGFibGUtY29sNCB7XG4gICAgd2lkdGg6IDE2JTtcbn1cblxuQG1peGluIHRhYmxlLWNvbDUge1xuICAgIHdpZHRoOiAxNSU7XG59XG5cbkBtaXhpbiB0YWJsZS1jb2w2IHtcbiAgICB3aWR0aDogMTUlO1xufVxuXG4uY29ubmVjdGlvbi1jb250YWluZXIge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogNTIwcHg7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI0NDQ0NDQztcbiAgICBib3JkZXItcmFkaXVzOiAwcHggN3B4IDdweCA3cHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgLmNvbm5lY3Rpb24tY29udGVudCB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgIC5jb25uZWN0aW9uLWhlYWRlciB7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICAgICAgY29sb3I6ICMxMTExMTE7XG4gICAgICAgICAgICAuc2VhcmNoLWJveCB7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgICAgIHdpZHRoOiAyODhweDtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDMwcHg7XG4gICAgICAgICAgICAgICAgZGl2IHtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgICAgICY+aW5wdXQge1xuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiA2cHggMTJweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtaW5kZW50OiAyMHB4O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICY+aW1nIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDI3MGRlZyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZWZ0OiAxMHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgdG9wOiA4cHg7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgJj5pbWcge1xuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgICAgIHJpZ2h0OiAxMHB4O1xuICAgICAgICAgICAgICAgICAgICB0b3A6IDhweDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLmNvbm5lY3Rpb24tYm9keSB7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgICAgLy8gdGFibGUtcm93cyBhbmQgaGVhZGVyXG4gICAgICAgICAgICAuY29ubmVjdGlvbi1yb3d0aXRsZSB7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICAgICAgICAgICAgcGFkZGluZy10b3A6IDEycHg7XG4gICAgICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDEycHg7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2RmZTJlZTtcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA0cHggNHB4IDBweCAwcHg7XG4gICAgICAgICAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgICAgICAgICAgIC5zeXN0ZW0tbmFtZSB7XG4gICAgICAgICAgICAgICAgICAgIEBpbmNsdWRlIHRhYmxlLWNvbDE7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC5wYXJlbnQtbmFtZSB7XG4gICAgICAgICAgICAgICAgICAgIEBpbmNsdWRlIHRhYmxlLWNvbDI7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC5jb25uZWN0aW9uLW51bWJlciB7XG4gICAgICAgICAgICAgICAgICAgIEBpbmNsdWRlIHRhYmxlLWNvbDM7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC5mYWlsLWNvbm5lY3Rpb24ge1xuICAgICAgICAgICAgICAgICAgICBAaW5jbHVkZSB0YWJsZS1jb2w0O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAudXRpbGlzYXRpb24ge1xuICAgICAgICAgICAgICAgICAgICBAaW5jbHVkZSB0YWJsZS1jb2w1O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAuc3RhdGUge1xuICAgICAgICAgICAgICAgICAgICBAaW5jbHVkZSB0YWJsZS1jb2w2O1xuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgICAgICAgICAuc3RhdHVzLWluZGljYXRvciB7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTVweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTVweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1zdHlsZTogbm9uZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAuV29ya2luZyB7XG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJ3NyY2h0dHBzOi8vZnJlZWhvc3Qtc3BlYy5naXRodWIuaW8vZGV4Y2VudGVyLWRhc2hib2FyZC9hc3NldHMvaW1hZ2VzL2ljb25zL2NoZWNrLWNpcmNsZS5zdmcnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IDE1cHggMTVweDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAuRmFpbCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJ3NyY2h0dHBzOi8vZnJlZWhvc3Qtc3BlYy5naXRodWIuaW8vZGV4Y2VudGVyLWRhc2hib2FyZC9hc3NldHMvaW1hZ2VzL2ljb25zL2Vycm9yLWljb24uc3ZnJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IDE1cHggMTVweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBmaWx0ZXIgcm93XG4gICAgICAgICAgICAuZmlsdGVyIHtcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgIGhlaWdodDogNTBweDtcbiAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNFN0U3RUM7XG4gICAgICAgICAgICAgICAgLmZpbHRlci1zeXN0ZW0tbmFtZSB7XG4gICAgICAgICAgICAgICAgICAgIEBpbmNsdWRlIHRhYmxlLWNvbDE7XG4gICAgICAgICAgICAgICAgICAgIC5maWx0ZXItYm94IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiA0MCU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLmZpbHRlci1wYXJlbnQtbmFtZSB7XG4gICAgICAgICAgICAgICAgICAgIEBpbmNsdWRlIHRhYmxlLWNvbDI7XG4gICAgICAgICAgICAgICAgICAgIC5maWx0ZXItYm94IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiA0MCU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLmZpbHRlci1jb25uZWN0aW9uLW51bWJlciB7XG4gICAgICAgICAgICAgICAgICAgIEBpbmNsdWRlIHRhYmxlLWNvbDM7XG4gICAgICAgICAgICAgICAgICAgIC5maWx0ZXItYm94IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAzNSU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLmZpbHRlci1mYWlsLWNvbm5lY3Rpb24ge1xuICAgICAgICAgICAgICAgICAgICBAaW5jbHVkZSB0YWJsZS1jb2w0O1xuICAgICAgICAgICAgICAgICAgICAuZmlsdGVyLWJveCB7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMzUlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC5maWx0ZXItdXRpbGlzYXRpb24ge1xuICAgICAgICAgICAgICAgICAgICBAaW5jbHVkZSB0YWJsZS1jb2w1O1xuICAgICAgICAgICAgICAgICAgICAuZmlsdGVyLWJveCB7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMzUlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC5maWx0ZXItc3RhdGUge1xuICAgICAgICAgICAgICAgICAgICBAaW5jbHVkZSB0YWJsZS1jb2w2O1xuICAgICAgICAgICAgICAgICAgICAuZmlsdGVyLWJveCB7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMzUlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gIHRhYmxlIGRlc2NyaXB0aW9uXG4gICAgICAgICAgICAuY29ubmVjdGlvbi10ciB7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgICAgIGJvcmRlci1sZWZ0OiAxcHggc29saWQgI0U3RTdFQztcbiAgICAgICAgICAgICAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjRTdFN0VDO1xuICAgICAgICAgICAgICAgIC5jb25uZWN0aW9uLXRkIHtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMzRweDtcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMHB4O1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxM3B4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAuZGl2aWRlciB7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiA5MyU7XG4gICAgICAgICAgICAgICAgICAgIGhyIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjRTdFN0VDO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gcGFnaW5hdGlvblxuICAgICAgICAgICAgLnBhZ2UtY29udGFpbmVyIHtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGZlMmVlICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2MxYzNjOTtcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAwcHggMHB4IDRweCA0cHg7XG4gICAgICAgICAgICAgICAgLnBhZ2UtY29udGVudCB7XG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICMzMzMzMzM7XG4gICAgICAgICAgICAgICAgICAgICY+LnBhZ2luYXRpb24tbGVmdCB7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMzAlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICY+LnBhZ2luYXRpb24tcmlnaHQge1xuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDIyJTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICAucGFnZS1kZXRhaWxzIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXIgIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5wYWdlLW51bWJlciB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjMzMzMzMzO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjYzFjM2M5O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAucGFnZS1udW1iZXI6Zm9jdXMge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvdXRsaW5lLXN0eWxlOiBub25lO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzMzMzMzMztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG4iLCIuY29ubmVjdGlvbi1jb250YWluZXIge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA1MjBweDtcbiAgYm9yZGVyOiAxcHggc29saWQgI0NDQ0NDQztcbiAgYm9yZGVyLXJhZGl1czogMHB4IDdweCA3cHggN3B4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbn1cbi5jb25uZWN0aW9uLWNvbnRhaW5lciAuY29ubmVjdGlvbi1jb250ZW50IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cbi5jb25uZWN0aW9uLWNvbnRhaW5lciAuY29ubmVjdGlvbi1jb250ZW50IC5jb25uZWN0aW9uLWhlYWRlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgY29sb3I6ICMxMTExMTE7XG59XG4uY29ubmVjdGlvbi1jb250YWluZXIgLmNvbm5lY3Rpb24tY29udGVudCAuY29ubmVjdGlvbi1oZWFkZXIgLnNlYXJjaC1ib3gge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiAyODhweDtcbiAgaGVpZ2h0OiAzMHB4O1xufVxuLmNvbm5lY3Rpb24tY29udGFpbmVyIC5jb25uZWN0aW9uLWNvbnRlbnQgLmNvbm5lY3Rpb24taGVhZGVyIC5zZWFyY2gtYm94IGRpdiB7XG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xufVxuLmNvbm5lY3Rpb24tY29udGFpbmVyIC5jb25uZWN0aW9uLWNvbnRlbnQgLmNvbm5lY3Rpb24taGVhZGVyIC5zZWFyY2gtYm94IGRpdiA+IGlucHV0IHtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDZweCAxMnB4O1xuICB0ZXh0LWluZGVudDogMjBweDtcbn1cbi5jb25uZWN0aW9uLWNvbnRhaW5lciAuY29ubmVjdGlvbi1jb250ZW50IC5jb25uZWN0aW9uLWhlYWRlciAuc2VhcmNoLWJveCBkaXYgPiBpbWcge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRyYW5zZm9ybTogcm90YXRlKDI3MGRlZyk7XG4gIGxlZnQ6IDEwcHg7XG4gIHRvcDogOHB4O1xufVxuLmNvbm5lY3Rpb24tY29udGFpbmVyIC5jb25uZWN0aW9uLWNvbnRlbnQgLmNvbm5lY3Rpb24taGVhZGVyIC5zZWFyY2gtYm94ID4gaW1nIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMTBweDtcbiAgdG9wOiA4cHg7XG59XG4uY29ubmVjdGlvbi1jb250YWluZXIgLmNvbm5lY3Rpb24tY29udGVudCAuY29ubmVjdGlvbi1ib2R5IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG4uY29ubmVjdGlvbi1jb250YWluZXIgLmNvbm5lY3Rpb24tY29udGVudCAuY29ubmVjdGlvbi1ib2R5IC5jb25uZWN0aW9uLXJvd3RpdGxlIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgcGFkZGluZy10b3A6IDEycHg7XG4gIHBhZGRpbmctYm90dG9tOiAxMnB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGZlMmVlO1xuICBib3JkZXItcmFkaXVzOiA0cHggNHB4IDBweCAwcHg7XG4gIGJvcmRlcjogbm9uZTtcbn1cbi5jb25uZWN0aW9uLWNvbnRhaW5lciAuY29ubmVjdGlvbi1jb250ZW50IC5jb25uZWN0aW9uLWJvZHkgLmNvbm5lY3Rpb24tcm93dGl0bGUgLnN5c3RlbS1uYW1lIHtcbiAgd2lkdGg6IDE2JTtcbn1cbi5jb25uZWN0aW9uLWNvbnRhaW5lciAuY29ubmVjdGlvbi1jb250ZW50IC5jb25uZWN0aW9uLWJvZHkgLmNvbm5lY3Rpb24tcm93dGl0bGUgLnBhcmVudC1uYW1lIHtcbiAgd2lkdGg6IDE2JTtcbn1cbi5jb25uZWN0aW9uLWNvbnRhaW5lciAuY29ubmVjdGlvbi1jb250ZW50IC5jb25uZWN0aW9uLWJvZHkgLmNvbm5lY3Rpb24tcm93dGl0bGUgLmNvbm5lY3Rpb24tbnVtYmVyIHtcbiAgd2lkdGg6IDE2JTtcbn1cbi5jb25uZWN0aW9uLWNvbnRhaW5lciAuY29ubmVjdGlvbi1jb250ZW50IC5jb25uZWN0aW9uLWJvZHkgLmNvbm5lY3Rpb24tcm93dGl0bGUgLmZhaWwtY29ubmVjdGlvbiB7XG4gIHdpZHRoOiAxNiU7XG59XG4uY29ubmVjdGlvbi1jb250YWluZXIgLmNvbm5lY3Rpb24tY29udGVudCAuY29ubmVjdGlvbi1ib2R5IC5jb25uZWN0aW9uLXJvd3RpdGxlIC51dGlsaXNhdGlvbiB7XG4gIHdpZHRoOiAxNSU7XG59XG4uY29ubmVjdGlvbi1jb250YWluZXIgLmNvbm5lY3Rpb24tY29udGVudCAuY29ubmVjdGlvbi1ib2R5IC5jb25uZWN0aW9uLXJvd3RpdGxlIC5zdGF0ZSB7XG4gIHdpZHRoOiAxNSU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4uY29ubmVjdGlvbi1jb250YWluZXIgLmNvbm5lY3Rpb24tY29udGVudCAuY29ubmVjdGlvbi1ib2R5IC5jb25uZWN0aW9uLXJvd3RpdGxlIC5zdGF0ZSAuc3RhdHVzLWluZGljYXRvciB7XG4gIHdpZHRoOiAxNXB4O1xuICBoZWlnaHQ6IDE1cHg7XG4gIGJvcmRlci1zdHlsZTogbm9uZTtcbn1cbi5jb25uZWN0aW9uLWNvbnRhaW5lciAuY29ubmVjdGlvbi1jb250ZW50IC5jb25uZWN0aW9uLWJvZHkgLmNvbm5lY3Rpb24tcm93dGl0bGUgLnN0YXRlIC5Xb3JraW5nIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwic3JjaHR0cHM6Ly9mcmVlaG9zdC1zcGVjLmdpdGh1Yi5pby9kZXhjZW50ZXItZGFzaGJvYXJkL2Fzc2V0cy9pbWFnZXMvaWNvbnMvY2hlY2stY2lyY2xlLnN2Z1wiKTtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1zaXplOiAxNXB4IDE1cHg7XG59XG4uY29ubmVjdGlvbi1jb250YWluZXIgLmNvbm5lY3Rpb24tY29udGVudCAuY29ubmVjdGlvbi1ib2R5IC5jb25uZWN0aW9uLXJvd3RpdGxlIC5zdGF0ZSAuRmFpbCB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcInNyY2h0dHBzOi8vZnJlZWhvc3Qtc3BlYy5naXRodWIuaW8vZGV4Y2VudGVyLWRhc2hib2FyZC9hc3NldHMvaW1hZ2VzL2ljb25zL2Vycm9yLWljb24uc3ZnXCIpO1xuICBiYWNrZ3JvdW5kLXNpemU6IDE1cHggMTVweDtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbn1cbi5jb25uZWN0aW9uLWNvbnRhaW5lciAuY29ubmVjdGlvbi1jb250ZW50IC5jb25uZWN0aW9uLWJvZHkgLmZpbHRlciB7XG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgZGlzcGxheTogZmxleDtcbiAgaGVpZ2h0OiA1MHB4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBib3JkZXI6IDFweCBzb2xpZCAjRTdFN0VDO1xufVxuLmNvbm5lY3Rpb24tY29udGFpbmVyIC5jb25uZWN0aW9uLWNvbnRlbnQgLmNvbm5lY3Rpb24tYm9keSAuZmlsdGVyIC5maWx0ZXItc3lzdGVtLW5hbWUge1xuICB3aWR0aDogMTYlO1xufVxuLmNvbm5lY3Rpb24tY29udGFpbmVyIC5jb25uZWN0aW9uLWNvbnRlbnQgLmNvbm5lY3Rpb24tYm9keSAuZmlsdGVyIC5maWx0ZXItc3lzdGVtLW5hbWUgLmZpbHRlci1ib3gge1xuICB3aWR0aDogNDAlO1xufVxuLmNvbm5lY3Rpb24tY29udGFpbmVyIC5jb25uZWN0aW9uLWNvbnRlbnQgLmNvbm5lY3Rpb24tYm9keSAuZmlsdGVyIC5maWx0ZXItcGFyZW50LW5hbWUge1xuICB3aWR0aDogMTYlO1xufVxuLmNvbm5lY3Rpb24tY29udGFpbmVyIC5jb25uZWN0aW9uLWNvbnRlbnQgLmNvbm5lY3Rpb24tYm9keSAuZmlsdGVyIC5maWx0ZXItcGFyZW50LW5hbWUgLmZpbHRlci1ib3gge1xuICB3aWR0aDogNDAlO1xufVxuLmNvbm5lY3Rpb24tY29udGFpbmVyIC5jb25uZWN0aW9uLWNvbnRlbnQgLmNvbm5lY3Rpb24tYm9keSAuZmlsdGVyIC5maWx0ZXItY29ubmVjdGlvbi1udW1iZXIge1xuICB3aWR0aDogMTYlO1xufVxuLmNvbm5lY3Rpb24tY29udGFpbmVyIC5jb25uZWN0aW9uLWNvbnRlbnQgLmNvbm5lY3Rpb24tYm9keSAuZmlsdGVyIC5maWx0ZXItY29ubmVjdGlvbi1udW1iZXIgLmZpbHRlci1ib3gge1xuICB3aWR0aDogMzUlO1xufVxuLmNvbm5lY3Rpb24tY29udGFpbmVyIC5jb25uZWN0aW9uLWNvbnRlbnQgLmNvbm5lY3Rpb24tYm9keSAuZmlsdGVyIC5maWx0ZXItZmFpbC1jb25uZWN0aW9uIHtcbiAgd2lkdGg6IDE2JTtcbn1cbi5jb25uZWN0aW9uLWNvbnRhaW5lciAuY29ubmVjdGlvbi1jb250ZW50IC5jb25uZWN0aW9uLWJvZHkgLmZpbHRlciAuZmlsdGVyLWZhaWwtY29ubmVjdGlvbiAuZmlsdGVyLWJveCB7XG4gIHdpZHRoOiAzNSU7XG59XG4uY29ubmVjdGlvbi1jb250YWluZXIgLmNvbm5lY3Rpb24tY29udGVudCAuY29ubmVjdGlvbi1ib2R5IC5maWx0ZXIgLmZpbHRlci11dGlsaXNhdGlvbiB7XG4gIHdpZHRoOiAxNSU7XG59XG4uY29ubmVjdGlvbi1jb250YWluZXIgLmNvbm5lY3Rpb24tY29udGVudCAuY29ubmVjdGlvbi1ib2R5IC5maWx0ZXIgLmZpbHRlci11dGlsaXNhdGlvbiAuZmlsdGVyLWJveCB7XG4gIHdpZHRoOiAzNSU7XG59XG4uY29ubmVjdGlvbi1jb250YWluZXIgLmNvbm5lY3Rpb24tY29udGVudCAuY29ubmVjdGlvbi1ib2R5IC5maWx0ZXIgLmZpbHRlci1zdGF0ZSB7XG4gIHdpZHRoOiAxNSU7XG59XG4uY29ubmVjdGlvbi1jb250YWluZXIgLmNvbm5lY3Rpb24tY29udGVudCAuY29ubmVjdGlvbi1ib2R5IC5maWx0ZXIgLmZpbHRlci1zdGF0ZSAuZmlsdGVyLWJveCB7XG4gIHdpZHRoOiAzNSU7XG59XG4uY29ubmVjdGlvbi1jb250YWluZXIgLmNvbm5lY3Rpb24tY29udGVudCAuY29ubmVjdGlvbi1ib2R5IC5jb25uZWN0aW9uLXRyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIGJvcmRlci1sZWZ0OiAxcHggc29saWQgI0U3RTdFQztcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgI0U3RTdFQztcbn1cbi5jb25uZWN0aW9uLWNvbnRhaW5lciAuY29ubmVjdGlvbi1jb250ZW50IC5jb25uZWN0aW9uLWJvZHkgLmNvbm5lY3Rpb24tdHIgLmNvbm5lY3Rpb24tdGQge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAzNHB4O1xuICBib3JkZXItcmFkaXVzOiAwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBmb250LXNpemU6IDEzcHg7XG59XG4uY29ubmVjdGlvbi1jb250YWluZXIgLmNvbm5lY3Rpb24tY29udGVudCAuY29ubmVjdGlvbi1ib2R5IC5jb25uZWN0aW9uLXRyIC5kaXZpZGVyIHtcbiAgd2lkdGg6IDkzJTtcbn1cbi5jb25uZWN0aW9uLWNvbnRhaW5lciAuY29ubmVjdGlvbi1jb250ZW50IC5jb25uZWN0aW9uLWJvZHkgLmNvbm5lY3Rpb24tdHIgLmRpdmlkZXIgaHIge1xuICBib3JkZXItdG9wOiAxcHggc29saWQgI0U3RTdFQztcbn1cbi5jb25uZWN0aW9uLWNvbnRhaW5lciAuY29ubmVjdGlvbi1jb250ZW50IC5jb25uZWN0aW9uLWJvZHkgLnBhZ2UtY29udGFpbmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2RmZTJlZSAhaW1wb3J0YW50O1xuICBib3JkZXI6IDFweCBzb2xpZCAjYzFjM2M5O1xuICBib3JkZXItcmFkaXVzOiAwcHggMHB4IDRweCA0cHg7XG59XG4uY29ubmVjdGlvbi1jb250YWluZXIgLmNvbm5lY3Rpb24tY29udGVudCAuY29ubmVjdGlvbi1ib2R5IC5wYWdlLWNvbnRhaW5lciAucGFnZS1jb250ZW50IHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBjb2xvcjogIzMzMzMzMztcbn1cbi5jb25uZWN0aW9uLWNvbnRhaW5lciAuY29ubmVjdGlvbi1jb250ZW50IC5jb25uZWN0aW9uLWJvZHkgLnBhZ2UtY29udGFpbmVyIC5wYWdlLWNvbnRlbnQgPiAucGFnaW5hdGlvbi1sZWZ0IHtcbiAgd2lkdGg6IDMwJTtcbn1cbi5jb25uZWN0aW9uLWNvbnRhaW5lciAuY29ubmVjdGlvbi1jb250ZW50IC5jb25uZWN0aW9uLWJvZHkgLnBhZ2UtY29udGFpbmVyIC5wYWdlLWNvbnRlbnQgPiAucGFnaW5hdGlvbi1yaWdodCB7XG4gIHdpZHRoOiAyMiU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4uY29ubmVjdGlvbi1jb250YWluZXIgLmNvbm5lY3Rpb24tY29udGVudCAuY29ubmVjdGlvbi1ib2R5IC5wYWdlLWNvbnRhaW5lciAucGFnZS1jb250ZW50ID4gLnBhZ2luYXRpb24tcmlnaHQgLnBhZ2UtZGV0YWlscyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyICFpbXBvcnRhbnQ7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4uY29ubmVjdGlvbi1jb250YWluZXIgLmNvbm5lY3Rpb24tY29udGVudCAuY29ubmVjdGlvbi1ib2R5IC5wYWdlLWNvbnRhaW5lciAucGFnZS1jb250ZW50ID4gLnBhZ2luYXRpb24tcmlnaHQgLnBhZ2UtZGV0YWlscyAucGFnZS1udW1iZXIge1xuICBjb2xvcjogIzMzMzMzMztcbiAgYm9yZGVyOiAxcHggc29saWQgI2MxYzNjOTtcbn1cbi5jb25uZWN0aW9uLWNvbnRhaW5lciAuY29ubmVjdGlvbi1jb250ZW50IC5jb25uZWN0aW9uLWJvZHkgLnBhZ2UtY29udGFpbmVyIC5wYWdlLWNvbnRlbnQgPiAucGFnaW5hdGlvbi1yaWdodCAucGFnZS1kZXRhaWxzIC5wYWdlLW51bWJlcjpmb2N1cyB7XG4gIG91dGxpbmUtc3R5bGU6IG5vbmU7XG4gIGNvbG9yOiAjMzMzMzMzO1xufSJdfQ== */";
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


    __webpack_exports__["default"] = ".nav-container {\n  display: flex;\n  flex-direction: column;\n}\n.nav-container .header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.nav-container .header .search-box {\n  position: relative;\n  width: 70%;\n  height: 30px;\n}\n.nav-container .header .search-box div {\n  width: 100%;\n  display: flex;\n}\n.nav-container .header .search-box div > input {\n  width: 100%;\n  padding: 6px 12px;\n  text-indent: 20px;\n  border: 1px solid #707070;\n  border-radius: 2px;\n}\n.nav-container .header .search-box div > img {\n  position: absolute;\n  transform: rotate(270deg);\n  left: 10px;\n  top: 8px;\n}\n.nav-container .header .search-box > img {\n  position: absolute;\n  right: 10px;\n  top: 8px;\n}\n.nav-container .workflow-ls {\n  display: flex;\n  flex-direction: column;\n  border-left: 2px solid #666;\n}\n.nav-container .workflow-ls .rows {\n  display: flex;\n  align-items: center;\n  color: #444444;\n  position: relative;\n  padding-bottom: 10px;\n  left: -10px;\n}\n.nav-container .workflow-ls .rows .min-max {\n  width: 19px;\n  height: 19px;\n  background-color: #cccccc;\n  border-radius: 50%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.nav-container .workflow-ls .rows .dash {\n  color: #707070;\n}\n.nav-container .workflow-ls .rows .status {\n  background-color: #dfe2ee;\n  width: 11px;\n  height: 11px;\n  border-radius: 50%;\n}\n.nav-container .workflow-ls .rows .success {\n  background-color: greenyellow;\n}\n.nav-container .workflow-ls .rows .error {\n  background-color: red;\n}\n.nav-container .workflow-ls .db-data {\n  margin-left: 28px;\n  border-left: 2px solid #666;\n  margin-top: -25px;\n  padding-top: 30px;\n}\n.nav-container .workflow-ls .ds-data {\n  margin-left: 28px;\n  margin-top: -25px;\n  padding-top: 30px;\n  border-left: 2px solid #666;\n}\n.nav-container .expand {\n  position: relative;\n}\n.nav-container .expand span {\n  color: #707070;\n  position: absolute;\n  transform: rotate(90deg);\n  left: 23px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hcHBsZS9wcm9qZWN0L2RleGNlbnRlci1kYXNoYm9hcmQvc3JjL2FwcC9sYXlvdXQvc3lzdGVtcy1jb25uZWN0aW9uL2RpYWdyYW0tdmlldy9jb25uZWN0aW9ucy9jb25uZWN0aW9ucy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbGF5b3V0L3N5c3RlbXMtY29ubmVjdGlvbi9kaWFncmFtLXZpZXcvY29ubmVjdGlvbnMvY29ubmVjdGlvbnMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7QUNDRjtBREFFO0VBQ0UsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7QUNFSjtBRERJO0VBQ0Usa0JBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtBQ0dOO0FERk07RUFDRSxXQUFBO0VBQ0EsYUFBQTtBQ0lSO0FESFE7RUFDRSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7QUNLVjtBREhRO0VBQ0Usa0JBQUE7RUFDQSx5QkFBQTtFQUNBLFVBQUE7RUFDQSxRQUFBO0FDS1Y7QURGTTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFFBQUE7QUNJUjtBREFFO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsMkJBQUE7QUNFSjtBRERJO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0Esb0JBQUE7RUFDQSxXQUFBO0FDR047QURGTTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FDSVI7QURGTTtFQUNFLGNBQUE7QUNJUjtBREZNO0VBQ0UseUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FDSVI7QURGTTtFQUNFLDZCQUFBO0FDSVI7QURGTTtFQUNFLHFCQUFBO0FDSVI7QURESTtFQUNFLGlCQUFBO0VBQ0EsMkJBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0FDR047QURESTtFQUNFLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLDJCQUFBO0FDR047QURBRTtFQUNFLGtCQUFBO0FDRUo7QURESTtFQUNFLGNBQUE7RUFDQSxrQkFBQTtFQUNBLHdCQUFBO0VBQ0EsVUFBQTtBQ0dOIiwiZmlsZSI6InNyYy9hcHAvbGF5b3V0L3N5c3RlbXMtY29ubmVjdGlvbi9kaWFncmFtLXZpZXcvY29ubmVjdGlvbnMvY29ubmVjdGlvbnMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubmF2LWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIC5oZWFkZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgLnNlYXJjaC1ib3gge1xuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgd2lkdGg6IDcwJTtcbiAgICAgIGhlaWdodDogMzBweDtcbiAgICAgIGRpdiB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAmID4gaW5wdXQge1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgIHBhZGRpbmc6IDZweCAxMnB4O1xuICAgICAgICAgIHRleHQtaW5kZW50OiAyMHB4O1xuICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICM3MDcwNzA7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogMnB4O1xuICAgICAgICB9XG4gICAgICAgICYgPiBpbWcge1xuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgyNzBkZWcpO1xuICAgICAgICAgIGxlZnQ6IDEwcHg7XG4gICAgICAgICAgdG9wOiA4cHg7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgICYgPiBpbWcge1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHJpZ2h0OiAxMHB4O1xuICAgICAgICB0b3A6IDhweDtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgLndvcmtmbG93LWxzIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYm9yZGVyLWxlZnQ6IDJweCBzb2xpZCAjNjY2O1xuICAgIC5yb3dzIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgY29sb3I6ICM0NDQ0NDQ7XG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbiAgICAgIGxlZnQ6IC0xMHB4O1xuICAgICAgLm1pbi1tYXgge1xuICAgICAgICB3aWR0aDogMTlweDtcbiAgICAgICAgaGVpZ2h0OiAxOXB4O1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2NjY2NjO1xuICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgfVxuICAgICAgLmRhc2gge1xuICAgICAgICBjb2xvcjogIzcwNzA3MDtcbiAgICAgIH1cbiAgICAgIC5zdGF0dXMge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGZlMmVlO1xuICAgICAgICB3aWR0aDogMTFweDtcbiAgICAgICAgaGVpZ2h0OiAxMXB4O1xuICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICB9XG4gICAgICAuc3VjY2VzcyB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IGdyZWVueWVsbG93O1xuICAgICAgfVxuICAgICAgLmVycm9yIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xuICAgICAgfVxuICAgIH1cbiAgICAuZGItZGF0YSB7XG4gICAgICBtYXJnaW4tbGVmdDogMjhweDtcbiAgICAgIGJvcmRlci1sZWZ0OiAycHggc29saWQgIzY2NjtcbiAgICAgIG1hcmdpbi10b3A6IC0yNXB4O1xuICAgICAgcGFkZGluZy10b3A6IDMwcHg7XG4gICAgfVxuICAgIC5kcy1kYXRhIHtcbiAgICAgIG1hcmdpbi1sZWZ0OiAyOHB4O1xuICAgICAgbWFyZ2luLXRvcDogLTI1cHg7XG4gICAgICBwYWRkaW5nLXRvcDogMzBweDtcbiAgICAgIGJvcmRlci1sZWZ0OiAycHggc29saWQgIzY2NjtcbiAgICB9XG4gIH1cbiAgLmV4cGFuZCB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHNwYW4ge1xuICAgICAgY29sb3I6ICM3MDcwNzA7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICB0cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XG4gICAgICBsZWZ0OiAyM3B4O1xuICAgIH1cbiAgfVxufVxuIiwiLm5hdi1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuLm5hdi1jb250YWluZXIgLmhlYWRlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5uYXYtY29udGFpbmVyIC5oZWFkZXIgLnNlYXJjaC1ib3gge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiA3MCU7XG4gIGhlaWdodDogMzBweDtcbn1cbi5uYXYtY29udGFpbmVyIC5oZWFkZXIgLnNlYXJjaC1ib3ggZGl2IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG4ubmF2LWNvbnRhaW5lciAuaGVhZGVyIC5zZWFyY2gtYm94IGRpdiA+IGlucHV0IHtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDZweCAxMnB4O1xuICB0ZXh0LWluZGVudDogMjBweDtcbiAgYm9yZGVyOiAxcHggc29saWQgIzcwNzA3MDtcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xufVxuLm5hdi1jb250YWluZXIgLmhlYWRlciAuc2VhcmNoLWJveCBkaXYgPiBpbWcge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRyYW5zZm9ybTogcm90YXRlKDI3MGRlZyk7XG4gIGxlZnQ6IDEwcHg7XG4gIHRvcDogOHB4O1xufVxuLm5hdi1jb250YWluZXIgLmhlYWRlciAuc2VhcmNoLWJveCA+IGltZyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDEwcHg7XG4gIHRvcDogOHB4O1xufVxuLm5hdi1jb250YWluZXIgLndvcmtmbG93LWxzIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYm9yZGVyLWxlZnQ6IDJweCBzb2xpZCAjNjY2O1xufVxuLm5hdi1jb250YWluZXIgLndvcmtmbG93LWxzIC5yb3dzIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgY29sb3I6ICM0NDQ0NDQ7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgcGFkZGluZy1ib3R0b206IDEwcHg7XG4gIGxlZnQ6IC0xMHB4O1xufVxuLm5hdi1jb250YWluZXIgLndvcmtmbG93LWxzIC5yb3dzIC5taW4tbWF4IHtcbiAgd2lkdGg6IDE5cHg7XG4gIGhlaWdodDogMTlweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2NjY2NjYztcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5uYXYtY29udGFpbmVyIC53b3JrZmxvdy1scyAucm93cyAuZGFzaCB7XG4gIGNvbG9yOiAjNzA3MDcwO1xufVxuLm5hdi1jb250YWluZXIgLndvcmtmbG93LWxzIC5yb3dzIC5zdGF0dXMge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGZlMmVlO1xuICB3aWR0aDogMTFweDtcbiAgaGVpZ2h0OiAxMXB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG59XG4ubmF2LWNvbnRhaW5lciAud29ya2Zsb3ctbHMgLnJvd3MgLnN1Y2Nlc3Mge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbnllbGxvdztcbn1cbi5uYXYtY29udGFpbmVyIC53b3JrZmxvdy1scyAucm93cyAuZXJyb3Ige1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XG59XG4ubmF2LWNvbnRhaW5lciAud29ya2Zsb3ctbHMgLmRiLWRhdGEge1xuICBtYXJnaW4tbGVmdDogMjhweDtcbiAgYm9yZGVyLWxlZnQ6IDJweCBzb2xpZCAjNjY2O1xuICBtYXJnaW4tdG9wOiAtMjVweDtcbiAgcGFkZGluZy10b3A6IDMwcHg7XG59XG4ubmF2LWNvbnRhaW5lciAud29ya2Zsb3ctbHMgLmRzLWRhdGEge1xuICBtYXJnaW4tbGVmdDogMjhweDtcbiAgbWFyZ2luLXRvcDogLTI1cHg7XG4gIHBhZGRpbmctdG9wOiAzMHB4O1xuICBib3JkZXItbGVmdDogMnB4IHNvbGlkICM2NjY7XG59XG4ubmF2LWNvbnRhaW5lciAuZXhwYW5kIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLm5hdi1jb250YWluZXIgLmV4cGFuZCBzcGFuIHtcbiAgY29sb3I6ICM3MDcwNzA7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xuICBsZWZ0OiAyM3B4O1xufSJdfQ== */";
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
        value: function ngOnInit() {
          this.connectionsData = [{
            name: 'DXS',
            status: 'success',
            data: [{
              name: 'DB',
              status: 'success',
              data: [{
                name: 'DTS1',
                status: 'error'
              }, {
                name: 'DTS2',
                status: 'success'
              }, {
                name: 'DTS3',
                status: 'success'
              }, {
                name: 'DTS4',
                status: 'error'
              }, {
                name: 'DTS5',
                status: 'success'
              }, {
                name: 'DTS6',
                status: 'success'
              }, {
                name: 'DTS7',
                status: 'success'
              }, {
                name: 'DTS8',
                status: 'success'
              }, {
                name: 'DTS9',
                status: 'success'
              }, {
                name: 'DTS10',
                status: 'success'
              }, {
                name: 'DTS11',
                status: 'success'
              }, {
                name: 'DTS12',
                status: 'success'
              }, {
                name: 'DTS13',
                status: 'success'
              }]
            }, {
              name: 'DS',
              status: 'success',
              data: [{
                name: 'DTS1',
                status: 'success'
              }, {
                name: 'DTS2',
                status: 'success'
              }, {
                name: 'DTS3',
                status: 'success'
              }, {
                name: 'DTS4',
                status: 'success'
              }, {
                name: 'DTS5',
                status: 'success'
              }, {
                name: 'DTS6',
                status: 'success'
              }, {
                name: 'DTS7',
                status: 'success'
              }, {
                name: 'DTS8',
                status: 'success'
              }, {
                name: 'DTS9',
                status: 'success'
              }, {
                name: 'DTS10',
                status: 'success'
              }]
            }]
          }];
        }
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


    __webpack_exports__["default"] = ".connection-view {\n  display: flex;\n  justify-content: space-between;\n}\n.connection-view > .filter {\n  width: 250px;\n  background-color: #fff;\n}\n.connection-view > .info {\n  width: 325px;\n  background-color: #E9EFF3;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hcHBsZS9wcm9qZWN0L2RleGNlbnRlci1kYXNoYm9hcmQvc3JjL2FwcC9sYXlvdXQvc3lzdGVtcy1jb25uZWN0aW9uL2RpYWdyYW0tdmlldy9kaWFncmFtLXZpZXcuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2xheW91dC9zeXN0ZW1zLWNvbm5lY3Rpb24vZGlhZ3JhbS12aWV3L2RpYWdyYW0tdmlldy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7RUFDQSw4QkFBQTtBQ0NKO0FEQUk7RUFDSSxZQUFBO0VBQ0Esc0JBQUE7QUNFUjtBRENJO0VBQ0ksWUFBQTtFQUNBLHlCQUFBO0FDQ1IiLCJmaWxlIjoic3JjL2FwcC9sYXlvdXQvc3lzdGVtcy1jb25uZWN0aW9uL2RpYWdyYW0tdmlldy9kaWFncmFtLXZpZXcuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29ubmVjdGlvbi12aWV3IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAmPi5maWx0ZXIge1xuICAgICAgICB3aWR0aDogMjUwcHg7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgfVxuICAgICY+LmNpcmNsZSB7fVxuICAgICY+LmluZm8ge1xuICAgICAgICB3aWR0aDogMzI1cHg7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNFOUVGRjM7XG4gICAgfVxufSIsIi5jb25uZWN0aW9uLXZpZXcge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG4uY29ubmVjdGlvbi12aWV3ID4gLmZpbHRlciB7XG4gIHdpZHRoOiAyNTBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbn1cbi5jb25uZWN0aW9uLXZpZXcgPiAuaW5mbyB7XG4gIHdpZHRoOiAzMjVweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0U5RUZGMztcbn0iXX0= */";
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


    __webpack_exports__["default"] = ".system-diagram > .outer-circle {\n  position: relative;\n  border-radius: 50%;\n  width: 700px;\n  height: 700px;\n  background-color: #fff;\n  border: 1px solid #989898;\n}\n.system-diagram > .outer-circle > .inner-circle-1 {\n  transform: translate(66%, 66%);\n  width: 300px;\n  height: 300px;\n  background-color: #ddd;\n  border-radius: 50%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n.system-diagram > .outer-circle > .inner-circle-1 .circle-content {\n  display: flex;\n  align-items: center;\n  margin-top: 86%;\n}\n.system-diagram > .outer-circle > .inner-circle-2 {\n  transform: translate(124%, -24%);\n  width: 200px;\n  height: 200px;\n  background-color: #ccc;\n  border-radius: 50%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n.system-diagram > .outer-circle > .inner-circle-2 .circle-content {\n  display: flex;\n  align-items: center;\n  margin-top: 80%;\n}\n.system-diagram > .outer-circle > .inner-circle-3 {\n  transform: translate(300%, -200%);\n  width: 100px;\n  height: 100px;\n  background-color: #034ea2;\n  border-radius: 50%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n}\n.system-diagram > .outer-circle .horizontal-logo {\n  transform: rotateZ(90deg);\n}\n.system-diagram > .outer-circle .right-circles {\n  flex-direction: row-reverse;\n}\n.system-diagram > .outer-circle .left-circles {\n  flex-direction: row;\n}\n.system-diagram > .outer-circle .box {\n  display: flex;\n  justify-content: space-around;\n  align-items: center;\n}\n.system-diagram > .outer-circle .box .circle-box {\n  display: flex;\n  align-items: center;\n}\n.system-diagram > .outer-circle .box .circle-box .green-circles {\n  width: 100px;\n  height: 100px;\n  background-color: #C1F68C;\n  border-radius: 50%;\n  box-shadow: 0px 3px 0px #034EA2;\n  border: 1px solid #034EA2;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n}\n.system-diagram > .outer-circle .box .circle-box .green-circles .icon-box {\n  width: 20px;\n  height: 20px;\n  border-radius: 50%;\n  background-color: #8DBF22;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.system-diagram > .outer-circle .box .circle-box .green-circles .circle-content {\n  display: flex;\n  align-items: center;\n}\n.system-diagram > .outer-circle .box1 {\n  width: 700px;\n  height: 120px;\n  transform: translate(0%, -250%);\n}\n.system-diagram > .outer-circle .box1 .circle2 .arrows {\n  transform: scaleX(-1);\n}\n.system-diagram > .outer-circle .box2 {\n  flex-direction: column;\n  justify-content: space-between;\n  width: 120px;\n  height: 608px;\n  transform: translate(237%, -111%);\n}\n.system-diagram > .outer-circle .box2 .circle1 {\n  flex-direction: column;\n}\n.system-diagram > .outer-circle .box2 .circle1 .arrows {\n  transform: rotateZ(90deg);\n}\n.system-diagram > .outer-circle .box2 .circle2 {\n  flex-direction: column-reverse;\n}\n.system-diagram > .outer-circle .box2 .circle2 .arrows {\n  transform: rotateZ(270deg);\n}\n.system-diagram > .outer-circle .box3 {\n  transform: translate(5%, -893%);\n}\n.system-diagram > .outer-circle .box3 .box-container {\n  width: 615px;\n  height: 116px;\n  transform: rotateZ(45deg);\n}\n.system-diagram > .outer-circle .box3 .box-container .box-position {\n  width: 100%;\n  display: flex;\n  justify-content: space-between;\n}\n.system-diagram > .outer-circle .box3 .box-container .box-position .circle1 {\n  margin-top: 20px;\n  margin-left: 5px;\n}\n.system-diagram > .outer-circle .box3 .box-container .box-position .circle1 .green-circles {\n  transform: rotateZ(-45deg);\n}\n.system-diagram > .outer-circle .box3 .box-container .box-position .circle2 {\n  margin-bottom: 30px;\n  margin-right: -3px;\n}\n.system-diagram > .outer-circle .box3 .box-container .box-position .circle2 .green-circles {\n  transform: rotateZ(-45deg);\n}\n.system-diagram > .outer-circle .box3 .box-container .box-position .circle2 .arrows {\n  transform: rotateZ(180deg);\n}\n.system-diagram > .outer-circle .box4 {\n  transform: translate(4%, -1002%);\n}\n.system-diagram > .outer-circle .box4 .box-container {\n  width: 615px;\n  height: 116px;\n  transform: rotateZ(135deg);\n}\n.system-diagram > .outer-circle .box4 .box-container .box-position {\n  width: 100%;\n  display: flex;\n  justify-content: space-between;\n}\n.system-diagram > .outer-circle .box4 .box-container .box-position .circle1 .green-circles {\n  transform: rotateZ(223deg);\n}\n.system-diagram > .outer-circle .box4 .box-container .box-position .circle2 {\n  margin-top: 10px;\n  margin-right: 4px;\n}\n.system-diagram > .outer-circle .box4 .box-container .box-position .circle2 .green-circles {\n  transform: rotateZ(-136deg);\n}\n.system-diagram > .outer-circle .box4 .box-container .box-position .circle2 .arrows {\n  transform: scaleX(-1);\n}\n.viewInfo {\n  display: flex;\n  flex-direction: column;\n  position: absolute;\n  top: 700px;\n  left: 840px;\n}\n.viewInfo > .triangle-left {\n  width: 0;\n  height: 0;\n  border-top: 8px solid transparent;\n  border-right: 8px solid transparent;\n  border-bottom: 12px solid #333333;\n  border-left: 8px solid transparent;\n  position: relative;\n  top: 0px;\n  left: 40px;\n}\n.viewInfo > .session-item {\n  background-color: #333333;\n  color: #fff;\n  height: 215px;\n  width: 185px;\n  z-index: 5;\n  overflow: hidden;\n  display: flex;\n  flex-direction: column;\n  box-shadow: 0px 3px 6px #00000029;\n  border: 1px solid #000000;\n  opacity: 0.94;\n  border-radius: 4px;\n}\n.viewInfo > .session-item > .item-name {\n  cursor: pointer;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  height: 30px;\n}\n.viewInfo > .session-item > .item-name > .item-data {\n  color: #43b6fb;\n}\n.viewInfo > .session-item > .item-name:hover {\n  background-color: #666;\n}\n.box-info {\n  display: flex;\n  flex-direction: column;\n  position: absolute;\n  top: 125px;\n  left: 145px;\n}\n.box-info > .triangle-top {\n  width: 0;\n  height: 0;\n  border-top: 8px solid transparent;\n  border-right: 8px solid transparent;\n  border-bottom: 12px solid #333333;\n  border-left: 8px solid transparent;\n  position: relative;\n  top: 0px;\n  left: 40px;\n}\n.box-info > .session-item {\n  background-color: #333333;\n  color: #fff;\n  height: 145px;\n  width: 270px;\n  z-index: 5;\n  overflow: hidden;\n  display: flex;\n  flex-direction: column;\n  box-shadow: 0px 3px 6px #00000029;\n  border: 1px solid #000000;\n  opacity: 0.94;\n  border-radius: 4px;\n}\n.box-info > .session-item > .item-name {\n  cursor: pointer;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  height: 30px;\n}\n.box-info > .session-item > .item-name > .item-data {\n  color: #43b6fb;\n}\n.box-info > .session-item > .item-name:hover {\n  background-color: #666;\n}\n.dtsinfo {\n  display: flex;\n  flex-direction: column;\n  position: absolute;\n  top: 255px;\n  left: 930px;\n}\n.dtsinfo > .triangle-right {\n  width: 0;\n  height: 0;\n  border-top: 8px solid transparent;\n  border-right: 12px solid #333333;\n  border-bottom: 8px solid transparent;\n  border-left: 8px solid transparent;\n  position: relative;\n  top: 50px;\n  right: 20px;\n}\n.dtsinfo > .session-item {\n  background-color: #333333;\n  color: #fff;\n  height: 145px;\n  width: 265px;\n  z-index: 5;\n  display: flex;\n  flex-direction: column;\n  box-shadow: 0px 3px 6px #00000029;\n  border: 1px solid #000000;\n  opacity: 0.94;\n  border-radius: 4px;\n}\n.dtsinfo > .session-item > .item-name {\n  cursor: pointer;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  height: 30px;\n}\n.dtsinfo > .session-item > .item-name > .item-data {\n  color: #43b6fb;\n}\n.dtsinfo > .session-item > .item-name:hover {\n  background-color: #666;\n}\n.dxs-info {\n  display: flex;\n  flex-direction: column;\n  position: absolute;\n  top: 150px;\n  left: 188px;\n}\n.dxs-info > .triangle-right {\n  width: 0;\n  height: 0;\n  border-top: 8px solid transparent;\n  border-right: 12px solid #333333;\n  border-bottom: 8px solid transparent;\n  border-left: 8px solid transparent;\n  position: relative;\n  top: 50px;\n  right: 20px;\n}\n.dxs-info > .session-item {\n  background-color: #333333;\n  color: #fff;\n  height: 215px;\n  width: 265px;\n  z-index: 5;\n  display: flex;\n  flex-direction: column;\n  box-shadow: 0px 3px 6px #00000029;\n  border: 1px solid #000000;\n  opacity: 0.94;\n  border-radius: 4px;\n}\n.dxs-info > .session-item > .item-name {\n  cursor: pointer;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  height: 30px;\n}\n.dxs-info > .session-item > .item-name > .item-data {\n  color: #43b6fb;\n}\n.dxs-info > .session-item > .item-name:hover {\n  background-color: #666;\n}\n.dxs-moreInfo {\n  display: flex;\n  flex-direction: column;\n  position: absolute;\n  top: 150px;\n  left: 465px;\n}\n.dxs-moreInfo > .triangle-right {\n  width: 0;\n  height: 0;\n  border-top: 8px solid transparent;\n  border-right: 12px solid #333333;\n  border-bottom: 8px solid transparent;\n  border-left: 8px solid transparent;\n  position: relative;\n  top: 35px;\n  right: 20px;\n}\n.dxs-moreInfo > .session-item {\n  background-color: #333333;\n  color: #fff;\n  height: 300px;\n  width: 250px;\n  z-index: 5;\n  overflow: hidden;\n  display: flex;\n  flex-direction: column;\n  box-shadow: 0px 3px 6px #00000029;\n  border: 1px solid #000000;\n  opacity: 0.94;\n  border-radius: 4px;\n}\n.dxs-moreInfo > .session-item > .item-name {\n  cursor: pointer;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  height: 30px;\n}\n.dxs-moreInfo > .session-item > .item-name > .item-data {\n  color: #43b6fb;\n}\n.dxs-moreInfo > .session-item > .item-name:hover {\n  background-color: #666;\n}\n.dxs-moreInfo > .session-item > hr {\n  border-bottom: #989898;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hcHBsZS9wcm9qZWN0L2RleGNlbnRlci1kYXNoYm9hcmQvc3JjL2FwcC9sYXlvdXQvc3lzdGVtcy1jb25uZWN0aW9uL2RpYWdyYW0tdmlldy9kaWFncmFtL2RpYWdyYW0uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2xheW91dC9zeXN0ZW1zLWNvbm5lY3Rpb24vZGlhZ3JhbS12aWV3L2RpYWdyYW0vZGlhZ3JhbS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDSTtFQUNJLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EseUJBQUE7QUNBUjtBRENRO0VBQ0ksOEJBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtBQ0NaO0FEQVk7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0FDRWhCO0FEQ1E7RUFDSSxnQ0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0FDQ1o7QURBWTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7QUNFaEI7QURDUTtFQUNJLGlDQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBQ0NaO0FEQ1E7RUFDSSx5QkFBQTtBQ0NaO0FEQ1E7RUFDSSwyQkFBQTtBQ0NaO0FEQ1E7RUFDSSxtQkFBQTtBQ0NaO0FEQ1E7RUFDSSxhQUFBO0VBQ0EsNkJBQUE7RUFDQSxtQkFBQTtBQ0NaO0FEQVk7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7QUNFaEI7QURBZ0I7RUFDSSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSwrQkFBQTtFQUNBLHlCQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBQ0VwQjtBRERvQjtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0FDR3hCO0FERG9CO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0FDR3hCO0FERVE7RUFDSSxZQUFBO0VBQ0EsYUFBQTtFQUNBLCtCQUFBO0FDQVo7QURLZ0I7RUFDSSxxQkFBQTtBQ0hwQjtBRFFRO0VBQ0ksc0JBQUE7RUFDQSw4QkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsaUNBQUE7QUNOWjtBRE9ZO0VBQ0ksc0JBQUE7QUNMaEI7QURNZ0I7RUFDSSx5QkFBQTtBQ0pwQjtBRE9ZO0VBQ0ksOEJBQUE7QUNMaEI7QURNZ0I7RUFDSSwwQkFBQTtBQ0pwQjtBRFFRO0VBQ0ksK0JBQUE7QUNOWjtBRE9ZO0VBQ0ksWUFBQTtFQUNBLGFBQUE7RUFDQSx5QkFBQTtBQ0xoQjtBRE9nQjtFQUNJLFdBQUE7RUFDQSxhQUFBO0VBQ0EsOEJBQUE7QUNMcEI7QURRb0I7RUFDSSxnQkFBQTtFQUNBLGdCQUFBO0FDTnhCO0FET3dCO0VBQ0ksMEJBQUE7QUNMNUI7QURTb0I7RUFDSSxtQkFBQTtFQUNBLGtCQUFBO0FDUHhCO0FEUXdCO0VBQ0ksMEJBQUE7QUNONUI7QURRd0I7RUFDSSwwQkFBQTtBQ041QjtBRFlRO0VBQ0ksZ0NBQUE7QUNWWjtBRFdZO0VBQ0ksWUFBQTtFQUNBLGFBQUE7RUFDQSwwQkFBQTtBQ1RoQjtBRFVnQjtFQUNJLFdBQUE7RUFDQSxhQUFBO0VBQ0EsOEJBQUE7QUNScEI7QURVd0I7RUFDSSwwQkFBQTtBQ1I1QjtBRFlvQjtFQUNJLGdCQUFBO0VBQ0EsaUJBQUE7QUNWeEI7QURXd0I7RUFDSSwyQkFBQTtBQ1Q1QjtBRFd3QjtFQUNJLHFCQUFBO0FDVDVCO0FEa0JBO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtBQ2ZKO0FEZ0JJO0VBQ0ksUUFBQTtFQUNBLFNBQUE7RUFDQSxpQ0FBQTtFQUNBLG1DQUFBO0VBQ0EsaUNBQUE7RUFDQSxrQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFVBQUE7QUNkUjtBRGdCSTtFQUNJLHlCQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsaUNBQUE7RUFDQSx5QkFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtBQ2RSO0FEZVE7RUFDSSxlQUFBO0VBQ0EsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0FDYlo7QURjWTtFQUNJLGNBQUE7QUNaaEI7QURlUTtFQUNJLHNCQUFBO0FDYlo7QURrQkE7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0FDZko7QURnQkk7RUFDSSxRQUFBO0VBQ0EsU0FBQTtFQUNBLGlDQUFBO0VBQ0EsbUNBQUE7RUFDQSxpQ0FBQTtFQUNBLGtDQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsVUFBQTtBQ2RSO0FEZ0JJO0VBQ0kseUJBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxpQ0FBQTtFQUNBLHlCQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0FDZFI7QURlUTtFQUNJLGVBQUE7RUFDQSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7QUNiWjtBRGNZO0VBQ0ksY0FBQTtBQ1poQjtBRGVRO0VBQ0ksc0JBQUE7QUNiWjtBRGtCQTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7QUNmSjtBRGdCSTtFQUNJLFFBQUE7RUFDQSxTQUFBO0VBQ0EsaUNBQUE7RUFDQSxnQ0FBQTtFQUNBLG9DQUFBO0VBQ0Esa0NBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0FDZFI7QURnQkk7RUFDSSx5QkFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7RUFFQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxpQ0FBQTtFQUNBLHlCQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0FDZlI7QURnQlE7RUFDSSxlQUFBO0VBQ0EsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0FDZFo7QURlWTtFQUNJLGNBQUE7QUNiaEI7QURnQlE7RUFDSSxzQkFBQTtBQ2RaO0FEbUJBO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtBQ2hCSjtBRGlCSTtFQUNJLFFBQUE7RUFDQSxTQUFBO0VBQ0EsaUNBQUE7RUFDQSxnQ0FBQTtFQUNBLG9DQUFBO0VBQ0Esa0NBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0FDZlI7QURpQkk7RUFDSSx5QkFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7RUFFQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxpQ0FBQTtFQUNBLHlCQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0FDaEJSO0FEaUJRO0VBQ0ksZUFBQTtFQUNBLGFBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtBQ2ZaO0FEZ0JZO0VBQ0ksY0FBQTtBQ2RoQjtBRGlCUTtFQUNJLHNCQUFBO0FDZlo7QURvQkE7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0FDakJKO0FEa0JJO0VBQ0ksUUFBQTtFQUNBLFNBQUE7RUFDQSxpQ0FBQTtFQUNBLGdDQUFBO0VBQ0Esb0NBQUE7RUFDQSxrQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7QUNoQlI7QURrQkk7RUFDSSx5QkFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLGlDQUFBO0VBQ0EseUJBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7QUNoQlI7QURpQlE7RUFDSSxlQUFBO0VBQ0EsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0FDZlo7QURnQlk7RUFDSSxjQUFBO0FDZGhCO0FEaUJRO0VBQ0ksc0JBQUE7QUNmWjtBRGlCUTtFQUNJLHNCQUFBO0FDZloiLCJmaWxlIjoic3JjL2FwcC9sYXlvdXQvc3lzdGVtcy1jb25uZWN0aW9uL2RpYWdyYW0tdmlldy9kaWFncmFtL2RpYWdyYW0uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc3lzdGVtLWRpYWdyYW0ge1xuICAgICY+Lm91dGVyLWNpcmNsZSB7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICB3aWR0aDogNzAwcHg7XG4gICAgICAgIGhlaWdodDogNzAwcHg7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICM5ODk4OTg7XG4gICAgICAgICY+LmlubmVyLWNpcmNsZS0xIHtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDY2JSwgNjYlKTtcbiAgICAgICAgICAgIHdpZHRoOiAzMDBweDtcbiAgICAgICAgICAgIGhlaWdodDogMzAwcHg7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGRkO1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgLmNpcmNsZS1jb250ZW50IHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogODYlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgICY+LmlubmVyLWNpcmNsZS0yIHtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDEyNCUsIC0yNCUpO1xuICAgICAgICAgICAgd2lkdGg6IDIwMHB4O1xuICAgICAgICAgICAgaGVpZ2h0OiAyMDBweDtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNjY2M7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICAuY2lyY2xlLWNvbnRlbnQge1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiA4MCU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgJj4uaW5uZXItY2lyY2xlLTMge1xuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMzAwJSwgLTIwMCUpO1xuICAgICAgICAgICAgd2lkdGg6IDEwMHB4O1xuICAgICAgICAgICAgaGVpZ2h0OiAxMDBweDtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMwMzRlYTI7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgfVxuICAgICAgICAuaG9yaXpvbnRhbC1sb2dvIHtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlWig5MGRlZyk7XG4gICAgICAgIH1cbiAgICAgICAgLnJpZ2h0LWNpcmNsZXMge1xuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdy1yZXZlcnNlO1xuICAgICAgICB9XG4gICAgICAgIC5sZWZ0LWNpcmNsZXMge1xuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgICAgfVxuICAgICAgICAuYm94IHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICAuY2lyY2xlLWJveCB7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgICAgIC5hcnJvd3Mge31cbiAgICAgICAgICAgICAgICAuZ3JlZW4tY2lyY2xlcyB7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDBweDtcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDBweDtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0MxRjY4QztcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICAgICAgICAgICAgICBib3gtc2hhZG93OiAwcHggM3B4IDBweCAjMDM0RUEyO1xuICAgICAgICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjMDM0RUEyO1xuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgLmljb24tYm94IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAyMHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAyMHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzhEQkYyMjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLmNpcmNsZS1jb250ZW50IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC5ib3gxIHtcbiAgICAgICAgICAgIHdpZHRoOiA3MDBweDtcbiAgICAgICAgICAgIGhlaWdodDogMTIwcHg7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwJSwgLTI1MCUpO1xuICAgICAgICAgICAgLmNpcmNsZTEge1xuICAgICAgICAgICAgICAgIC5hcnJvd3Mge31cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5jaXJjbGUyIHtcbiAgICAgICAgICAgICAgICAuYXJyb3dzIHtcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZVgoLTEpO1xuICAgICAgICAgICAgICAgICAgICAvLyB0cmFuc2Zvcm06IHJvdGF0ZVooIDE4MGRlZyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC5ib3gyIHtcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgICAgICB3aWR0aDogMTIwcHg7XG4gICAgICAgICAgICBoZWlnaHQ6IDYwOHB4O1xuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMjM3JSwgLTExMSUpO1xuICAgICAgICAgICAgLmNpcmNsZTEge1xuICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgICAgICAgLmFycm93cyB7XG4gICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlWiggOTBkZWcpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5jaXJjbGUyIHtcbiAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uLXJldmVyc2U7XG4gICAgICAgICAgICAgICAgLmFycm93cyB7XG4gICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlWiggMjcwZGVnKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLmJveDMge1xuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoNSUsIC04OTMlKTtcbiAgICAgICAgICAgIC5ib3gtY29udGFpbmVyIHtcbiAgICAgICAgICAgICAgICB3aWR0aDogNjE1cHg7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxMTZweDtcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZVooIDQ1ZGVnKTtcbiAgICAgICAgICAgICAgICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiBob3RwaW5rO1xuICAgICAgICAgICAgICAgIC5ib3gtcG9zaXRpb24ge1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICAgICAgICAgICAgICAvLyB0cmFuc2Zvcm06IHJvdGF0ZVooIDQ1ZGVnKTtcbiAgICAgICAgICAgICAgICAgICAgLy8gdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCUsIC04MDAlKTtcbiAgICAgICAgICAgICAgICAgICAgLmNpcmNsZTEge1xuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMjBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiA1cHg7XG4gICAgICAgICAgICAgICAgICAgICAgICAuZ3JlZW4tY2lyY2xlcyB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGVaKC00NWRlZyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAuYXJyb3dzIHt9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLmNpcmNsZTIge1xuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMzBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogLTNweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIC5ncmVlbi1jaXJjbGVzIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZVooLTQ1ZGVnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIC5hcnJvd3Mge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlWiggMTgwZGVnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAuYm94NCB7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSg0JSwgLTEwMDIlKTtcbiAgICAgICAgICAgIC5ib3gtY29udGFpbmVyIHtcbiAgICAgICAgICAgICAgICB3aWR0aDogNjE1cHg7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxMTZweDtcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZVooIDEzNWRlZyk7XG4gICAgICAgICAgICAgICAgLmJveC1wb3NpdGlvbiB7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgICAgICAgICAgICAgIC5jaXJjbGUxIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC5ncmVlbi1jaXJjbGVzIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZVooIDIyM2RlZyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAuYXJyb3dzIHt9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLmNpcmNsZTIge1xuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogNHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgLmdyZWVuLWNpcmNsZXMge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlWiggLTEzNmRlZyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAuYXJyb3dzIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlWCgtMSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi52aWV3SW5mbyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDcwMHB4O1xuICAgIGxlZnQ6IDg0MHB4O1xuICAgICY+LnRyaWFuZ2xlLWxlZnQge1xuICAgICAgICB3aWR0aDogMDtcbiAgICAgICAgaGVpZ2h0OiAwO1xuICAgICAgICBib3JkZXItdG9wOiA4cHggc29saWQgdHJhbnNwYXJlbnQ7XG4gICAgICAgIGJvcmRlci1yaWdodDogOHB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICAgICAgICBib3JkZXItYm90dG9tOiAxMnB4IHNvbGlkICMzMzMzMzM7XG4gICAgICAgIGJvcmRlci1sZWZ0OiA4cHggc29saWQgdHJhbnNwYXJlbnQ7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgdG9wOiAwcHg7XG4gICAgICAgIGxlZnQ6IDQwcHg7XG4gICAgfVxuICAgICY+LnNlc3Npb24taXRlbSB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMzMzMzMzM7XG4gICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICBoZWlnaHQ6IDIxNXB4O1xuICAgICAgICB3aWR0aDogMTg1cHg7XG4gICAgICAgIHotaW5kZXg6IDU7XG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgIGJveC1zaGFkb3c6IDBweCAzcHggNnB4ICMwMDAwMDAyOTtcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgIzAwMDAwMDtcbiAgICAgICAgb3BhY2l0eTogMC45NDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgICAgICAmPi5pdGVtLW5hbWUge1xuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICBoZWlnaHQ6IDMwcHg7XG4gICAgICAgICAgICAmPi5pdGVtLWRhdGEge1xuICAgICAgICAgICAgICAgIGNvbG9yOiAjNDNiNmZiO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgICY+Lml0ZW0tbmFtZTpob3ZlciB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjY2O1xuICAgICAgICB9XG4gICAgfVxufVxuXG4uYm94LWluZm8ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAxMjVweDtcbiAgICBsZWZ0OiAxNDVweDtcbiAgICAmPi50cmlhbmdsZS10b3Age1xuICAgICAgICB3aWR0aDogMDtcbiAgICAgICAgaGVpZ2h0OiAwO1xuICAgICAgICBib3JkZXItdG9wOiA4cHggc29saWQgdHJhbnNwYXJlbnQ7XG4gICAgICAgIGJvcmRlci1yaWdodDogOHB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICAgICAgICBib3JkZXItYm90dG9tOiAxMnB4IHNvbGlkICMzMzMzMzM7XG4gICAgICAgIGJvcmRlci1sZWZ0OiA4cHggc29saWQgdHJhbnNwYXJlbnQ7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgdG9wOiAwcHg7XG4gICAgICAgIGxlZnQ6IDQwcHg7XG4gICAgfVxuICAgICY+LnNlc3Npb24taXRlbSB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMzMzMzMzM7XG4gICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICBoZWlnaHQ6IDE0NXB4O1xuICAgICAgICB3aWR0aDogMjcwcHg7XG4gICAgICAgIHotaW5kZXg6IDU7XG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgIGJveC1zaGFkb3c6IDBweCAzcHggNnB4ICMwMDAwMDAyOTtcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgIzAwMDAwMDtcbiAgICAgICAgb3BhY2l0eTogMC45NDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgICAgICAmPi5pdGVtLW5hbWUge1xuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICBoZWlnaHQ6IDMwcHg7XG4gICAgICAgICAgICAmPi5pdGVtLWRhdGEge1xuICAgICAgICAgICAgICAgIGNvbG9yOiAjNDNiNmZiO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgICY+Lml0ZW0tbmFtZTpob3ZlciB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjY2O1xuICAgICAgICB9XG4gICAgfVxufVxuXG4uZHRzaW5mbyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDI1NXB4O1xuICAgIGxlZnQ6IDkzMHB4O1xuICAgICY+LnRyaWFuZ2xlLXJpZ2h0IHtcbiAgICAgICAgd2lkdGg6IDA7XG4gICAgICAgIGhlaWdodDogMDtcbiAgICAgICAgYm9yZGVyLXRvcDogOHB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICAgICAgICBib3JkZXItcmlnaHQ6IDEycHggc29saWQgIzMzMzMzMztcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogOHB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICAgICAgICBib3JkZXItbGVmdDogOHB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIHRvcDogNTBweDtcbiAgICAgICAgcmlnaHQ6IDIwcHg7XG4gICAgfVxuICAgICY+LnNlc3Npb24taXRlbSB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMzMzMzMzM7XG4gICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICBoZWlnaHQ6IDE0NXB4O1xuICAgICAgICB3aWR0aDogMjY1cHg7XG4gICAgICAgIHotaW5kZXg6IDU7XG4gICAgICAgIC8vIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgIGJveC1zaGFkb3c6IDBweCAzcHggNnB4ICMwMDAwMDAyOTtcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgIzAwMDAwMDtcbiAgICAgICAgb3BhY2l0eTogMC45NDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgICAgICAmPi5pdGVtLW5hbWUge1xuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICBoZWlnaHQ6IDMwcHg7XG4gICAgICAgICAgICAmPi5pdGVtLWRhdGEge1xuICAgICAgICAgICAgICAgIGNvbG9yOiAjNDNiNmZiO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgICY+Lml0ZW0tbmFtZTpob3ZlciB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjY2O1xuICAgICAgICB9XG4gICAgfVxufVxuXG4uZHhzLWluZm8ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAxNTBweDtcbiAgICBsZWZ0OiAxODhweDtcbiAgICAmPi50cmlhbmdsZS1yaWdodCB7XG4gICAgICAgIHdpZHRoOiAwO1xuICAgICAgICBoZWlnaHQ6IDA7XG4gICAgICAgIGJvcmRlci10b3A6IDhweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgICAgICAgYm9yZGVyLXJpZ2h0OiAxMnB4IHNvbGlkICMzMzMzMzM7XG4gICAgICAgIGJvcmRlci1ib3R0b206IDhweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgICAgICAgYm9yZGVyLWxlZnQ6IDhweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICB0b3A6IDUwcHg7XG4gICAgICAgIHJpZ2h0OiAyMHB4O1xuICAgIH1cbiAgICAmPi5zZXNzaW9uLWl0ZW0ge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzMzMzMzO1xuICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgaGVpZ2h0OiAyMTVweDtcbiAgICAgICAgd2lkdGg6IDI2NXB4O1xuICAgICAgICB6LWluZGV4OiA1O1xuICAgICAgICAvLyBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICBib3gtc2hhZG93OiAwcHggM3B4IDZweCAjMDAwMDAwMjk7XG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICMwMDAwMDA7XG4gICAgICAgIG9wYWNpdHk6IDAuOTQ7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICAgICAgJj4uaXRlbS1uYW1lIHtcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgaGVpZ2h0OiAzMHB4O1xuICAgICAgICAgICAgJj4uaXRlbS1kYXRhIHtcbiAgICAgICAgICAgICAgICBjb2xvcjogIzQzYjZmYjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAmPi5pdGVtLW5hbWU6aG92ZXIge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzY2NjtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuLmR4cy1tb3JlSW5mbyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDE1MHB4O1xuICAgIGxlZnQ6IDQ2NXB4O1xuICAgICY+LnRyaWFuZ2xlLXJpZ2h0IHtcbiAgICAgICAgd2lkdGg6IDA7XG4gICAgICAgIGhlaWdodDogMDtcbiAgICAgICAgYm9yZGVyLXRvcDogOHB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICAgICAgICBib3JkZXItcmlnaHQ6IDEycHggc29saWQgIzMzMzMzMztcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogOHB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICAgICAgICBib3JkZXItbGVmdDogOHB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIHRvcDogMzVweDtcbiAgICAgICAgcmlnaHQ6IDIwcHg7XG4gICAgfVxuICAgICY+LnNlc3Npb24taXRlbSB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMzMzMzMzM7XG4gICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICBoZWlnaHQ6IDMwMHB4O1xuICAgICAgICB3aWR0aDogMjUwcHg7XG4gICAgICAgIHotaW5kZXg6IDU7XG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgIGJveC1zaGFkb3c6IDBweCAzcHggNnB4ICMwMDAwMDAyOTtcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgIzAwMDAwMDtcbiAgICAgICAgb3BhY2l0eTogMC45NDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgICAgICAmPi5pdGVtLW5hbWUge1xuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICBoZWlnaHQ6IDMwcHg7XG4gICAgICAgICAgICAmPi5pdGVtLWRhdGEge1xuICAgICAgICAgICAgICAgIGNvbG9yOiAjNDNiNmZiO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgICY+Lml0ZW0tbmFtZTpob3ZlciB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjY2O1xuICAgICAgICB9XG4gICAgICAgICY+aHIge1xuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogIzk4OTg5ODtcbiAgICAgICAgfVxuICAgIH1cbn0iLCIuc3lzdGVtLWRpYWdyYW0gPiAub3V0ZXItY2lyY2xlIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIHdpZHRoOiA3MDBweDtcbiAgaGVpZ2h0OiA3MDBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgYm9yZGVyOiAxcHggc29saWQgIzk4OTg5ODtcbn1cbi5zeXN0ZW0tZGlhZ3JhbSA+IC5vdXRlci1jaXJjbGUgPiAuaW5uZXItY2lyY2xlLTEge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSg2NiUsIDY2JSk7XG4gIHdpZHRoOiAzMDBweDtcbiAgaGVpZ2h0OiAzMDBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2RkZDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLnN5c3RlbS1kaWFncmFtID4gLm91dGVyLWNpcmNsZSA+IC5pbm5lci1jaXJjbGUtMSAuY2lyY2xlLWNvbnRlbnQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBtYXJnaW4tdG9wOiA4NiU7XG59XG4uc3lzdGVtLWRpYWdyYW0gPiAub3V0ZXItY2lyY2xlID4gLmlubmVyLWNpcmNsZS0yIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMTI0JSwgLTI0JSk7XG4gIHdpZHRoOiAyMDBweDtcbiAgaGVpZ2h0OiAyMDBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2NjYztcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLnN5c3RlbS1kaWFncmFtID4gLm91dGVyLWNpcmNsZSA+IC5pbm5lci1jaXJjbGUtMiAuY2lyY2xlLWNvbnRlbnQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBtYXJnaW4tdG9wOiA4MCU7XG59XG4uc3lzdGVtLWRpYWdyYW0gPiAub3V0ZXItY2lyY2xlID4gLmlubmVyLWNpcmNsZS0zIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMzAwJSwgLTIwMCUpO1xuICB3aWR0aDogMTAwcHg7XG4gIGhlaWdodDogMTAwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMzRlYTI7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG4uc3lzdGVtLWRpYWdyYW0gPiAub3V0ZXItY2lyY2xlIC5ob3Jpem9udGFsLWxvZ28ge1xuICB0cmFuc2Zvcm06IHJvdGF0ZVooOTBkZWcpO1xufVxuLnN5c3RlbS1kaWFncmFtID4gLm91dGVyLWNpcmNsZSAucmlnaHQtY2lyY2xlcyB7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3ctcmV2ZXJzZTtcbn1cbi5zeXN0ZW0tZGlhZ3JhbSA+IC5vdXRlci1jaXJjbGUgLmxlZnQtY2lyY2xlcyB7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG59XG4uc3lzdGVtLWRpYWdyYW0gPiAub3V0ZXItY2lyY2xlIC5ib3gge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5zeXN0ZW0tZGlhZ3JhbSA+IC5vdXRlci1jaXJjbGUgLmJveCAuY2lyY2xlLWJveCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4uc3lzdGVtLWRpYWdyYW0gPiAub3V0ZXItY2lyY2xlIC5ib3ggLmNpcmNsZS1ib3ggLmdyZWVuLWNpcmNsZXMge1xuICB3aWR0aDogMTAwcHg7XG4gIGhlaWdodDogMTAwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNDMUY2OEM7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYm94LXNoYWRvdzogMHB4IDNweCAwcHggIzAzNEVBMjtcbiAgYm9yZGVyOiAxcHggc29saWQgIzAzNEVBMjtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG4uc3lzdGVtLWRpYWdyYW0gPiAub3V0ZXItY2lyY2xlIC5ib3ggLmNpcmNsZS1ib3ggLmdyZWVuLWNpcmNsZXMgLmljb24tYm94IHtcbiAgd2lkdGg6IDIwcHg7XG4gIGhlaWdodDogMjBweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjOERCRjIyO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cbi5zeXN0ZW0tZGlhZ3JhbSA+IC5vdXRlci1jaXJjbGUgLmJveCAuY2lyY2xlLWJveCAuZ3JlZW4tY2lyY2xlcyAuY2lyY2xlLWNvbnRlbnQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLnN5c3RlbS1kaWFncmFtID4gLm91dGVyLWNpcmNsZSAuYm94MSB7XG4gIHdpZHRoOiA3MDBweDtcbiAgaGVpZ2h0OiAxMjBweDtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCUsIC0yNTAlKTtcbn1cbi5zeXN0ZW0tZGlhZ3JhbSA+IC5vdXRlci1jaXJjbGUgLmJveDEgLmNpcmNsZTIgLmFycm93cyB7XG4gIHRyYW5zZm9ybTogc2NhbGVYKC0xKTtcbn1cbi5zeXN0ZW0tZGlhZ3JhbSA+IC5vdXRlci1jaXJjbGUgLmJveDIge1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIHdpZHRoOiAxMjBweDtcbiAgaGVpZ2h0OiA2MDhweDtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMjM3JSwgLTExMSUpO1xufVxuLnN5c3RlbS1kaWFncmFtID4gLm91dGVyLWNpcmNsZSAuYm94MiAuY2lyY2xlMSB7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG4uc3lzdGVtLWRpYWdyYW0gPiAub3V0ZXItY2lyY2xlIC5ib3gyIC5jaXJjbGUxIC5hcnJvd3Mge1xuICB0cmFuc2Zvcm06IHJvdGF0ZVooOTBkZWcpO1xufVxuLnN5c3RlbS1kaWFncmFtID4gLm91dGVyLWNpcmNsZSAuYm94MiAuY2lyY2xlMiB7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW4tcmV2ZXJzZTtcbn1cbi5zeXN0ZW0tZGlhZ3JhbSA+IC5vdXRlci1jaXJjbGUgLmJveDIgLmNpcmNsZTIgLmFycm93cyB7XG4gIHRyYW5zZm9ybTogcm90YXRlWigyNzBkZWcpO1xufVxuLnN5c3RlbS1kaWFncmFtID4gLm91dGVyLWNpcmNsZSAuYm94MyB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKDUlLCAtODkzJSk7XG59XG4uc3lzdGVtLWRpYWdyYW0gPiAub3V0ZXItY2lyY2xlIC5ib3gzIC5ib3gtY29udGFpbmVyIHtcbiAgd2lkdGg6IDYxNXB4O1xuICBoZWlnaHQ6IDExNnB4O1xuICB0cmFuc2Zvcm06IHJvdGF0ZVooNDVkZWcpO1xufVxuLnN5c3RlbS1kaWFncmFtID4gLm91dGVyLWNpcmNsZSAuYm94MyAuYm94LWNvbnRhaW5lciAuYm94LXBvc2l0aW9uIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cbi5zeXN0ZW0tZGlhZ3JhbSA+IC5vdXRlci1jaXJjbGUgLmJveDMgLmJveC1jb250YWluZXIgLmJveC1wb3NpdGlvbiAuY2lyY2xlMSB7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG4gIG1hcmdpbi1sZWZ0OiA1cHg7XG59XG4uc3lzdGVtLWRpYWdyYW0gPiAub3V0ZXItY2lyY2xlIC5ib3gzIC5ib3gtY29udGFpbmVyIC5ib3gtcG9zaXRpb24gLmNpcmNsZTEgLmdyZWVuLWNpcmNsZXMge1xuICB0cmFuc2Zvcm06IHJvdGF0ZVooLTQ1ZGVnKTtcbn1cbi5zeXN0ZW0tZGlhZ3JhbSA+IC5vdXRlci1jaXJjbGUgLmJveDMgLmJveC1jb250YWluZXIgLmJveC1wb3NpdGlvbiAuY2lyY2xlMiB7XG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XG4gIG1hcmdpbi1yaWdodDogLTNweDtcbn1cbi5zeXN0ZW0tZGlhZ3JhbSA+IC5vdXRlci1jaXJjbGUgLmJveDMgLmJveC1jb250YWluZXIgLmJveC1wb3NpdGlvbiAuY2lyY2xlMiAuZ3JlZW4tY2lyY2xlcyB7XG4gIHRyYW5zZm9ybTogcm90YXRlWigtNDVkZWcpO1xufVxuLnN5c3RlbS1kaWFncmFtID4gLm91dGVyLWNpcmNsZSAuYm94MyAuYm94LWNvbnRhaW5lciAuYm94LXBvc2l0aW9uIC5jaXJjbGUyIC5hcnJvd3Mge1xuICB0cmFuc2Zvcm06IHJvdGF0ZVooMTgwZGVnKTtcbn1cbi5zeXN0ZW0tZGlhZ3JhbSA+IC5vdXRlci1jaXJjbGUgLmJveDQge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSg0JSwgLTEwMDIlKTtcbn1cbi5zeXN0ZW0tZGlhZ3JhbSA+IC5vdXRlci1jaXJjbGUgLmJveDQgLmJveC1jb250YWluZXIge1xuICB3aWR0aDogNjE1cHg7XG4gIGhlaWdodDogMTE2cHg7XG4gIHRyYW5zZm9ybTogcm90YXRlWigxMzVkZWcpO1xufVxuLnN5c3RlbS1kaWFncmFtID4gLm91dGVyLWNpcmNsZSAuYm94NCAuYm94LWNvbnRhaW5lciAuYm94LXBvc2l0aW9uIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cbi5zeXN0ZW0tZGlhZ3JhbSA+IC5vdXRlci1jaXJjbGUgLmJveDQgLmJveC1jb250YWluZXIgLmJveC1wb3NpdGlvbiAuY2lyY2xlMSAuZ3JlZW4tY2lyY2xlcyB7XG4gIHRyYW5zZm9ybTogcm90YXRlWigyMjNkZWcpO1xufVxuLnN5c3RlbS1kaWFncmFtID4gLm91dGVyLWNpcmNsZSAuYm94NCAuYm94LWNvbnRhaW5lciAuYm94LXBvc2l0aW9uIC5jaXJjbGUyIHtcbiAgbWFyZ2luLXRvcDogMTBweDtcbiAgbWFyZ2luLXJpZ2h0OiA0cHg7XG59XG4uc3lzdGVtLWRpYWdyYW0gPiAub3V0ZXItY2lyY2xlIC5ib3g0IC5ib3gtY29udGFpbmVyIC5ib3gtcG9zaXRpb24gLmNpcmNsZTIgLmdyZWVuLWNpcmNsZXMge1xuICB0cmFuc2Zvcm06IHJvdGF0ZVooLTEzNmRlZyk7XG59XG4uc3lzdGVtLWRpYWdyYW0gPiAub3V0ZXItY2lyY2xlIC5ib3g0IC5ib3gtY29udGFpbmVyIC5ib3gtcG9zaXRpb24gLmNpcmNsZTIgLmFycm93cyB7XG4gIHRyYW5zZm9ybTogc2NhbGVYKC0xKTtcbn1cblxuLnZpZXdJbmZvIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDcwMHB4O1xuICBsZWZ0OiA4NDBweDtcbn1cbi52aWV3SW5mbyA+IC50cmlhbmdsZS1sZWZ0IHtcbiAgd2lkdGg6IDA7XG4gIGhlaWdodDogMDtcbiAgYm9yZGVyLXRvcDogOHB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICBib3JkZXItcmlnaHQ6IDhweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgYm9yZGVyLWJvdHRvbTogMTJweCBzb2xpZCAjMzMzMzMzO1xuICBib3JkZXItbGVmdDogOHB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogMHB4O1xuICBsZWZ0OiA0MHB4O1xufVxuLnZpZXdJbmZvID4gLnNlc3Npb24taXRlbSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzMzMzMzM7XG4gIGNvbG9yOiAjZmZmO1xuICBoZWlnaHQ6IDIxNXB4O1xuICB3aWR0aDogMTg1cHg7XG4gIHotaW5kZXg6IDU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGJveC1zaGFkb3c6IDBweCAzcHggNnB4ICMwMDAwMDAyOTtcbiAgYm9yZGVyOiAxcHggc29saWQgIzAwMDAwMDtcbiAgb3BhY2l0eTogMC45NDtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xufVxuLnZpZXdJbmZvID4gLnNlc3Npb24taXRlbSA+IC5pdGVtLW5hbWUge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgaGVpZ2h0OiAzMHB4O1xufVxuLnZpZXdJbmZvID4gLnNlc3Npb24taXRlbSA+IC5pdGVtLW5hbWUgPiAuaXRlbS1kYXRhIHtcbiAgY29sb3I6ICM0M2I2ZmI7XG59XG4udmlld0luZm8gPiAuc2Vzc2lvbi1pdGVtID4gLml0ZW0tbmFtZTpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM2NjY7XG59XG5cbi5ib3gtaW5mbyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAxMjVweDtcbiAgbGVmdDogMTQ1cHg7XG59XG4uYm94LWluZm8gPiAudHJpYW5nbGUtdG9wIHtcbiAgd2lkdGg6IDA7XG4gIGhlaWdodDogMDtcbiAgYm9yZGVyLXRvcDogOHB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICBib3JkZXItcmlnaHQ6IDhweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgYm9yZGVyLWJvdHRvbTogMTJweCBzb2xpZCAjMzMzMzMzO1xuICBib3JkZXItbGVmdDogOHB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogMHB4O1xuICBsZWZ0OiA0MHB4O1xufVxuLmJveC1pbmZvID4gLnNlc3Npb24taXRlbSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzMzMzMzM7XG4gIGNvbG9yOiAjZmZmO1xuICBoZWlnaHQ6IDE0NXB4O1xuICB3aWR0aDogMjcwcHg7XG4gIHotaW5kZXg6IDU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGJveC1zaGFkb3c6IDBweCAzcHggNnB4ICMwMDAwMDAyOTtcbiAgYm9yZGVyOiAxcHggc29saWQgIzAwMDAwMDtcbiAgb3BhY2l0eTogMC45NDtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xufVxuLmJveC1pbmZvID4gLnNlc3Npb24taXRlbSA+IC5pdGVtLW5hbWUge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgaGVpZ2h0OiAzMHB4O1xufVxuLmJveC1pbmZvID4gLnNlc3Npb24taXRlbSA+IC5pdGVtLW5hbWUgPiAuaXRlbS1kYXRhIHtcbiAgY29sb3I6ICM0M2I2ZmI7XG59XG4uYm94LWluZm8gPiAuc2Vzc2lvbi1pdGVtID4gLml0ZW0tbmFtZTpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM2NjY7XG59XG5cbi5kdHNpbmZvIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDI1NXB4O1xuICBsZWZ0OiA5MzBweDtcbn1cbi5kdHNpbmZvID4gLnRyaWFuZ2xlLXJpZ2h0IHtcbiAgd2lkdGg6IDA7XG4gIGhlaWdodDogMDtcbiAgYm9yZGVyLXRvcDogOHB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICBib3JkZXItcmlnaHQ6IDEycHggc29saWQgIzMzMzMzMztcbiAgYm9yZGVyLWJvdHRvbTogOHB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICBib3JkZXItbGVmdDogOHB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogNTBweDtcbiAgcmlnaHQ6IDIwcHg7XG59XG4uZHRzaW5mbyA+IC5zZXNzaW9uLWl0ZW0ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzMzMzMzO1xuICBjb2xvcjogI2ZmZjtcbiAgaGVpZ2h0OiAxNDVweDtcbiAgd2lkdGg6IDI2NXB4O1xuICB6LWluZGV4OiA1O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBib3gtc2hhZG93OiAwcHggM3B4IDZweCAjMDAwMDAwMjk7XG4gIGJvcmRlcjogMXB4IHNvbGlkICMwMDAwMDA7XG4gIG9wYWNpdHk6IDAuOTQ7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbn1cbi5kdHNpbmZvID4gLnNlc3Npb24taXRlbSA+IC5pdGVtLW5hbWUge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgaGVpZ2h0OiAzMHB4O1xufVxuLmR0c2luZm8gPiAuc2Vzc2lvbi1pdGVtID4gLml0ZW0tbmFtZSA+IC5pdGVtLWRhdGEge1xuICBjb2xvcjogIzQzYjZmYjtcbn1cbi5kdHNpbmZvID4gLnNlc3Npb24taXRlbSA+IC5pdGVtLW5hbWU6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjY2O1xufVxuXG4uZHhzLWluZm8ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMTUwcHg7XG4gIGxlZnQ6IDE4OHB4O1xufVxuLmR4cy1pbmZvID4gLnRyaWFuZ2xlLXJpZ2h0IHtcbiAgd2lkdGg6IDA7XG4gIGhlaWdodDogMDtcbiAgYm9yZGVyLXRvcDogOHB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICBib3JkZXItcmlnaHQ6IDEycHggc29saWQgIzMzMzMzMztcbiAgYm9yZGVyLWJvdHRvbTogOHB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICBib3JkZXItbGVmdDogOHB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogNTBweDtcbiAgcmlnaHQ6IDIwcHg7XG59XG4uZHhzLWluZm8gPiAuc2Vzc2lvbi1pdGVtIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzMzMzMzMztcbiAgY29sb3I6ICNmZmY7XG4gIGhlaWdodDogMjE1cHg7XG4gIHdpZHRoOiAyNjVweDtcbiAgei1pbmRleDogNTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYm94LXNoYWRvdzogMHB4IDNweCA2cHggIzAwMDAwMDI5O1xuICBib3JkZXI6IDFweCBzb2xpZCAjMDAwMDAwO1xuICBvcGFjaXR5OiAwLjk0O1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG59XG4uZHhzLWluZm8gPiAuc2Vzc2lvbi1pdGVtID4gLml0ZW0tbmFtZSB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBoZWlnaHQ6IDMwcHg7XG59XG4uZHhzLWluZm8gPiAuc2Vzc2lvbi1pdGVtID4gLml0ZW0tbmFtZSA+IC5pdGVtLWRhdGEge1xuICBjb2xvcjogIzQzYjZmYjtcbn1cbi5keHMtaW5mbyA+IC5zZXNzaW9uLWl0ZW0gPiAuaXRlbS1uYW1lOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzY2Njtcbn1cblxuLmR4cy1tb3JlSW5mbyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAxNTBweDtcbiAgbGVmdDogNDY1cHg7XG59XG4uZHhzLW1vcmVJbmZvID4gLnRyaWFuZ2xlLXJpZ2h0IHtcbiAgd2lkdGg6IDA7XG4gIGhlaWdodDogMDtcbiAgYm9yZGVyLXRvcDogOHB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICBib3JkZXItcmlnaHQ6IDEycHggc29saWQgIzMzMzMzMztcbiAgYm9yZGVyLWJvdHRvbTogOHB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICBib3JkZXItbGVmdDogOHB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogMzVweDtcbiAgcmlnaHQ6IDIwcHg7XG59XG4uZHhzLW1vcmVJbmZvID4gLnNlc3Npb24taXRlbSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzMzMzMzM7XG4gIGNvbG9yOiAjZmZmO1xuICBoZWlnaHQ6IDMwMHB4O1xuICB3aWR0aDogMjUwcHg7XG4gIHotaW5kZXg6IDU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGJveC1zaGFkb3c6IDBweCAzcHggNnB4ICMwMDAwMDAyOTtcbiAgYm9yZGVyOiAxcHggc29saWQgIzAwMDAwMDtcbiAgb3BhY2l0eTogMC45NDtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xufVxuLmR4cy1tb3JlSW5mbyA+IC5zZXNzaW9uLWl0ZW0gPiAuaXRlbS1uYW1lIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGhlaWdodDogMzBweDtcbn1cbi5keHMtbW9yZUluZm8gPiAuc2Vzc2lvbi1pdGVtID4gLml0ZW0tbmFtZSA+IC5pdGVtLWRhdGEge1xuICBjb2xvcjogIzQzYjZmYjtcbn1cbi5keHMtbW9yZUluZm8gPiAuc2Vzc2lvbi1pdGVtID4gLml0ZW0tbmFtZTpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM2NjY7XG59XG4uZHhzLW1vcmVJbmZvID4gLnNlc3Npb24taXRlbSA+IGhyIHtcbiAgYm9yZGVyLWJvdHRvbTogIzk4OTg5ODtcbn0iXX0= */";
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
      }, {
        key: "showInfo",
        value: function showInfo() {
          this.viewInfo = !this.viewInfo;
        }
      }, {
        key: "boxInformation",
        value: function boxInformation() {
          this.boxInfo = !this.boxInfo;
        }
      }, {
        key: "dtsInformation",
        value: function dtsInformation() {
          this.dtsInfo = !this.dtsInfo;
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


    __webpack_exports__["default"] = ".direct-connect {\n  width: 100%;\n  box-shadow: 0px 3px 6px #0000001f;\n}\n.direct-connect .direct-connect-header {\n  width: 100%;\n  height: 50px;\n  background-color: white;\n  border-radius: 0px 4px 0px 0px;\n  display: flex;\n  align-items: center;\n  letter-spacing: 0.48px;\n  color: #121111;\n}\n.direct-connect .direct-connect-header div .minimise {\n  transform: rotate(90deg);\n}\n.direct-connect .direct-connect-header div .maximise {\n  transform: rotate(270deg);\n}\n.direct-connect .direct-connect-container {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  background-color: white;\n}\n.direct-connect .direct-connect-container .container-right {\n  background-color: white;\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n}\n.direct-connect .direct-connect-container .container-right .task-container,\n.direct-connect .direct-connect-container .container-right .host-container,\n.direct-connect .direct-connect-container .container-right .log-container {\n  display: flex;\n  flex-direction: column;\n}\n.direct-connect .direct-connect-container .container-right .task-container .content,\n.direct-connect .direct-connect-container .container-right .host-container .content,\n.direct-connect .direct-connect-container .container-right .log-container .content {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n}\n.direct-connect .direct-connect-container .container-right .task-container .content .header,\n.direct-connect .direct-connect-container .container-right .host-container .content .header,\n.direct-connect .direct-connect-container .container-right .log-container .content .header {\n  display: flex;\n  justify-content: space-between;\n  width: 100%;\n}\n.direct-connect .direct-connect-container .container-right .task-container .content .divider,\n.direct-connect .direct-connect-container .container-right .host-container .content .divider,\n.direct-connect .direct-connect-container .container-right .log-container .content .divider {\n  border-bottom: #cccccc;\n}\n.direct-connect .direct-connect-container .container-right .task-container .content .description,\n.direct-connect .direct-connect-container .container-right .host-container .content .description,\n.direct-connect .direct-connect-container .container-right .log-container .content .description {\n  display: flex;\n  justify-content: space-between;\n}\n.direct-connect .direct-connect-container .container-right .task-container .content .description .des-right,\n.direct-connect .direct-connect-container .container-right .host-container .content .description .des-right,\n.direct-connect .direct-connect-container .container-right .log-container .content .description .des-right {\n  display: flex;\n  width: 32%;\n}\n.direct-connect .direct-connect-container .container-right .task-container .content .description .host-details,\n.direct-connect .direct-connect-container .container-right .host-container .content .description .host-details,\n.direct-connect .direct-connect-container .container-right .log-container .content .description .host-details {\n  width: 110px;\n  display: flex;\n  justify-content: space-between;\n}\n.direct-connect .direct-connect-container .container-left {\n  width: 290px;\n  height: 300px;\n  background-color: #eef2f5;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.direct-connect .direct-connect-container .container-left .figure {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n.direct-connect .direct-connect-container .container-left .figure .dxs {\n  width: 90px;\n  height: 90px;\n  background-color: #034ea2;\n  border-radius: 50%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n}\n.direct-connect .direct-connect-container .container-left .figure .connector1,\n.direct-connect .direct-connect-container .container-left .figure .connector2 {\n  width: 150px;\n  height: 30px;\n  display: flex;\n  justify-content: space-between;\n}\n.direct-connect .direct-connect-container .container-left .figure .connector1 .dxs-db,\n.direct-connect .direct-connect-container .container-left .figure .connector2 .dxs-db {\n  width: 50px;\n  height: 30px;\n  transform: matrix(0.79, -0.8, 0.66, 0.79, 0, 0);\n}\n.direct-connect .direct-connect-container .container-left .figure .connector1 .dxs-ds,\n.direct-connect .direct-connect-container .container-left .figure .connector2 .dxs-ds {\n  width: 50px;\n  height: 30px;\n  transform: matrix(-0.79, -0.8, 0.62, -0.79, 0, 0);\n}\n.direct-connect .direct-connect-container .container-left .figure .connector1 .dts-db,\n.direct-connect .direct-connect-container .container-left .figure .connector2 .dts-db {\n  width: 50px;\n  height: 30px;\n  transform: matrix(-0.79, -0.8, 0.66, -0.79, 0, 0);\n}\n.direct-connect .direct-connect-container .container-left .figure .connector1 .dts-ds,\n.direct-connect .direct-connect-container .container-left .figure .connector2 .dts-ds {\n  width: 50px;\n  height: 30px;\n  transform: matrix(0.79, -0.8, 0.62, 0.79, 0, 0);\n}\n.direct-connect .direct-connect-container .container-left .figure .db-ds,\n.direct-connect .direct-connect-container .container-left .figure .dts {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.direct-connect .direct-connect-container .container-left .figure .db-ds .circle-box,\n.direct-connect .direct-connect-container .container-left .figure .dts .circle-box {\n  display: flex;\n  align-items: center;\n}\n.direct-connect .direct-connect-container .container-left .figure .db-ds .circle-box .dts-circle,\n.direct-connect .direct-connect-container .container-left .figure .db-ds .circle-box .db-circle,\n.direct-connect .direct-connect-container .container-left .figure .db-ds .circle-box .ds-circle,\n.direct-connect .direct-connect-container .container-left .figure .dts .circle-box .dts-circle,\n.direct-connect .direct-connect-container .container-left .figure .dts .circle-box .db-circle,\n.direct-connect .direct-connect-container .container-left .figure .dts .circle-box .ds-circle {\n  width: 74px;\n  height: 74px;\n  border-radius: 50%;\n  box-shadow: 0px 3px 0px #034ea2;\n  border: 1px solid #034ea2;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n}\n.direct-connect .direct-connect-container .container-left .figure .db-ds .circle-box .dts-circle .icon-box,\n.direct-connect .direct-connect-container .container-left .figure .db-ds .circle-box .db-circle .icon-box,\n.direct-connect .direct-connect-container .container-left .figure .db-ds .circle-box .ds-circle .icon-box,\n.direct-connect .direct-connect-container .container-left .figure .dts .circle-box .dts-circle .icon-box,\n.direct-connect .direct-connect-container .container-left .figure .dts .circle-box .db-circle .icon-box,\n.direct-connect .direct-connect-container .container-left .figure .dts .circle-box .ds-circle .icon-box {\n  width: 16px;\n  height: 16px;\n  border-radius: 50%;\n  background-color: #8dbf22;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.direct-connect .direct-connect-container .container-left .figure .db-ds .circle-box .dts-circle .circle-content,\n.direct-connect .direct-connect-container .container-left .figure .db-ds .circle-box .db-circle .circle-content,\n.direct-connect .direct-connect-container .container-left .figure .db-ds .circle-box .ds-circle .circle-content,\n.direct-connect .direct-connect-container .container-left .figure .dts .circle-box .dts-circle .circle-content,\n.direct-connect .direct-connect-container .container-left .figure .dts .circle-box .db-circle .circle-content,\n.direct-connect .direct-connect-container .container-left .figure .dts .circle-box .ds-circle .circle-content {\n  display: flex;\n  align-items: center;\n}\n.direct-connect .direct-connect-container .container-left .figure .db-ds .circle-box .green-circles,\n.direct-connect .direct-connect-container .container-left .figure .dts .circle-box .green-circles {\n  background-color: #c1f68c;\n}\n.direct-connect .direct-connect-container .container-left .figure .db-ds .circle-box .lightblue-circles,\n.direct-connect .direct-connect-container .container-left .figure .dts .circle-box .lightblue-circles {\n  background-color: #b2e0fc;\n}\n.direct-connect .direct-connect-container .container-left .figure .db-ds .dxs-dts,\n.direct-connect .direct-connect-container .container-left .figure .dts .dxs-dts {\n  width: 90px;\n  height: 11px;\n  transform: matrix(0, -1.3, 1, 0, 0, 0);\n  margin-bottom: -1px;\n}\n.direct-connect .direct-connect-container .container-left .figure .connector1 {\n  margin-top: -10px;\n}\n.direct-connect .direct-connect-container .container-left .figure .connector2 {\n  margin-top: 4px;\n}\n.direct-connect .direct-connect-container .container-left .figure .dts {\n  margin-top: -10px;\n}\n.direct-connect .direct-connect-container .host-container {\n  background-color: #eef2f5;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hcHBsZS9wcm9qZWN0L2RleGNlbnRlci1kYXNoYm9hcmQvc3JjL2FwcC9sYXlvdXQvc3lzdGVtcy1jb25uZWN0aW9uL2RpYWdyYW0tdmlldy9pbmZvL2luZm8uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2xheW91dC9zeXN0ZW1zLWNvbm5lY3Rpb24vZGlhZ3JhbS12aWV3L2luZm8vaW5mby5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQUE7RUFDQSxpQ0FBQTtBQ0NGO0FEQUU7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHVCQUFBO0VBQ0EsOEJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtFQUNBLGNBQUE7QUNFSjtBREdNO0VBQ0Usd0JBQUE7QUNEUjtBREdNO0VBQ0UseUJBQUE7QUNEUjtBREtFO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0FDSEo7QURJSTtFQUNFLHVCQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtBQ0ZOO0FER007OztFQUdFLGFBQUE7RUFDQSxzQkFBQTtBQ0RSO0FERVE7OztFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLFdBQUE7QUNFVjtBRERVOzs7RUFDRSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxXQUFBO0FDS1o7QURIVTs7O0VBQ0Usc0JBQUE7QUNPWjtBRExVOzs7RUFDRSxhQUFBO0VBQ0EsOEJBQUE7QUNTWjtBRFJZOzs7RUFDRSxhQUFBO0VBQ0EsVUFBQTtBQ1lkO0FEVlk7OztFQUNFLFlBQUE7RUFDQSxhQUFBO0VBQ0EsOEJBQUE7QUNjZDtBRFJJO0VBQ0UsWUFBQTtFQUNBLGFBQUE7RUFDQSx5QkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0FDVU47QURUTTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUNXUjtBRFZRO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBQ1lWO0FEVlE7O0VBRUUsWUFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsOEJBQUE7QUNZVjtBRFhVOztFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsK0NBQUE7QUNjWjtBRFpVOztFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsaURBQUE7QUNlWjtBRGJVOztFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsaURBQUE7QUNnQlo7QURkVTs7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLCtDQUFBO0FDaUJaO0FEZFE7O0VBRUUsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7QUNnQlY7QURmVTs7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7QUNrQlo7QURqQlk7Ozs7OztFQUdFLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSwrQkFBQTtFQUNBLHlCQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBQ3NCZDtBRHJCYzs7Ozs7O0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7QUM0QmhCO0FEMUJjOzs7Ozs7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7QUNpQ2hCO0FEOUJZOztFQUNFLHlCQUFBO0FDaUNkO0FEL0JZOztFQUNFLHlCQUFBO0FDa0NkO0FEL0JVOztFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0Esc0NBQUE7RUFDQSxtQkFBQTtBQ2tDWjtBRC9CUTtFQUNFLGlCQUFBO0FDaUNWO0FEL0JRO0VBQ0UsZUFBQTtBQ2lDVjtBRC9CUTtFQUNFLGlCQUFBO0FDaUNWO0FEN0JJO0VBQ0UseUJBQUE7QUMrQk4iLCJmaWxlIjoic3JjL2FwcC9sYXlvdXQvc3lzdGVtcy1jb25uZWN0aW9uL2RpYWdyYW0tdmlldy9pbmZvL2luZm8uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZGlyZWN0LWNvbm5lY3Qge1xuICB3aWR0aDogMTAwJTtcbiAgYm94LXNoYWRvdzogMHB4IDNweCA2cHggIzAwMDAwMDFmO1xuICAuZGlyZWN0LWNvbm5lY3QtaGVhZGVyIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDUwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgYm9yZGVyLXJhZGl1czogMHB4IDRweCAwcHggMHB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBsZXR0ZXItc3BhY2luZzogMC40OHB4O1xuICAgIGNvbG9yOiAjMTIxMTExO1xuICAgIGRpdiB7XG4gICAgICBpbWcge1xuICAgICAgICAvLyB0cmFuc2Zvcm06IHJvdGF0ZVooOTBkZWcpO1xuICAgICAgfVxuICAgICAgLm1pbmltaXNlIHtcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xuICAgICAgfVxuICAgICAgLm1heGltaXNlIHtcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMjcwZGVnKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgLmRpcmVjdC1jb25uZWN0LWNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgLmNvbnRhaW5lci1yaWdodCB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAudGFzay1jb250YWluZXIsXG4gICAgICAuaG9zdC1jb250YWluZXIsXG4gICAgICAubG9nLWNvbnRhaW5lciB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgIC5jb250ZW50IHtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgLmhlYWRlciB7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5kaXZpZGVyIHtcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b206ICNjY2NjY2M7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5kZXNjcmlwdGlvbiB7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICAgICAgLmRlcy1yaWdodCB7XG4gICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgIHdpZHRoOiAzMiU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuaG9zdC1kZXRhaWxzIHtcbiAgICAgICAgICAgICAgd2lkdGg6IDExMHB4O1xuICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIC5jb250YWluZXItbGVmdCB7XG4gICAgICB3aWR0aDogMjkwcHg7XG4gICAgICBoZWlnaHQ6IDMwMHB4O1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2VlZjJmNTtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAuZmlndXJlIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIC5keHMge1xuICAgICAgICAgIHdpZHRoOiA5MHB4O1xuICAgICAgICAgIGhlaWdodDogOTBweDtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDM0ZWEyO1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgfVxuICAgICAgICAuY29ubmVjdG9yMSxcbiAgICAgICAgLmNvbm5lY3RvcjIge1xuICAgICAgICAgIHdpZHRoOiAxNTBweDtcbiAgICAgICAgICBoZWlnaHQ6IDMwcHg7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgICAgLmR4cy1kYiB7XG4gICAgICAgICAgICB3aWR0aDogNTBweDtcbiAgICAgICAgICAgIGhlaWdodDogMzBweDtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogbWF0cml4KDAuNzksIC0wLjgsIDAuNjYsIDAuNzksIDAsIDApO1xuICAgICAgICAgIH1cbiAgICAgICAgICAuZHhzLWRzIHtcbiAgICAgICAgICAgIHdpZHRoOiA1MHB4O1xuICAgICAgICAgICAgaGVpZ2h0OiAzMHB4O1xuICAgICAgICAgICAgdHJhbnNmb3JtOiBtYXRyaXgoLTAuNzksIC0wLjgsIDAuNjIsIC0wLjc5LCAwLCAwKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmR0cy1kYiB7XG4gICAgICAgICAgICB3aWR0aDogNTBweDtcbiAgICAgICAgICAgIGhlaWdodDogMzBweDtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogbWF0cml4KC0wLjc5LCAtMC44LCAwLjY2LCAtMC43OSwgMCwgMCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5kdHMtZHMge1xuICAgICAgICAgICAgd2lkdGg6IDUwcHg7XG4gICAgICAgICAgICBoZWlnaHQ6IDMwcHg7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IG1hdHJpeCgwLjc5LCAtMC44LCAwLjYyLCAwLjc5LCAwLCAwKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLmRiLWRzLFxuICAgICAgICAuZHRzIHtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgLmNpcmNsZS1ib3gge1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICAuZHRzLWNpcmNsZSxcbiAgICAgICAgICAgIC5kYi1jaXJjbGUsXG4gICAgICAgICAgICAuZHMtY2lyY2xlIHtcbiAgICAgICAgICAgICAgd2lkdGg6IDc0cHg7XG4gICAgICAgICAgICAgIGhlaWdodDogNzRweDtcbiAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICAgICAgICBib3gtc2hhZG93OiAwcHggM3B4IDBweCAjMDM0ZWEyO1xuICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjMDM0ZWEyO1xuICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICAgICAgLmljb24tYm94IHtcbiAgICAgICAgICAgICAgICB3aWR0aDogMTZweDtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDE2cHg7XG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICM4ZGJmMjI7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIC5jaXJjbGUtY29udGVudCB7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuZ3JlZW4tY2lyY2xlcyB7XG4gICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNjMWY2OGM7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAubGlnaHRibHVlLWNpcmNsZXMge1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYjJlMGZjO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICAuZHhzLWR0cyB7XG4gICAgICAgICAgICB3aWR0aDogOTBweDtcbiAgICAgICAgICAgIGhlaWdodDogMTFweDtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogbWF0cml4KDAsIC0xLjMsIDEsIDAsIDAsIDApO1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogLTFweDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLmNvbm5lY3RvcjEge1xuICAgICAgICAgIG1hcmdpbi10b3A6IC0xMHB4O1xuICAgICAgICB9XG4gICAgICAgIC5jb25uZWN0b3IyIHtcbiAgICAgICAgICBtYXJnaW4tdG9wOiA0cHg7XG4gICAgICAgIH1cbiAgICAgICAgLmR0cyB7XG4gICAgICAgICAgbWFyZ2luLXRvcDogLTEwcHg7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgLmhvc3QtY29udGFpbmVyIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNlZWYyZjU7XG4gICAgfVxuICB9XG59XG4iLCIuZGlyZWN0LWNvbm5lY3Qge1xuICB3aWR0aDogMTAwJTtcbiAgYm94LXNoYWRvdzogMHB4IDNweCA2cHggIzAwMDAwMDFmO1xufVxuLmRpcmVjdC1jb25uZWN0IC5kaXJlY3QtY29ubmVjdC1oZWFkZXIge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA1MHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgYm9yZGVyLXJhZGl1czogMHB4IDRweCAwcHggMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBsZXR0ZXItc3BhY2luZzogMC40OHB4O1xuICBjb2xvcjogIzEyMTExMTtcbn1cbi5kaXJlY3QtY29ubmVjdCAuZGlyZWN0LWNvbm5lY3QtaGVhZGVyIGRpdiAubWluaW1pc2Uge1xuICB0cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XG59XG4uZGlyZWN0LWNvbm5lY3QgLmRpcmVjdC1jb25uZWN0LWhlYWRlciBkaXYgLm1heGltaXNlIHtcbiAgdHJhbnNmb3JtOiByb3RhdGUoMjcwZGVnKTtcbn1cbi5kaXJlY3QtY29ubmVjdCAuZGlyZWN0LWNvbm5lY3QtY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xufVxuLmRpcmVjdC1jb25uZWN0IC5kaXJlY3QtY29ubmVjdC1jb250YWluZXIgLmNvbnRhaW5lci1yaWdodCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cbi5kaXJlY3QtY29ubmVjdCAuZGlyZWN0LWNvbm5lY3QtY29udGFpbmVyIC5jb250YWluZXItcmlnaHQgLnRhc2stY29udGFpbmVyLFxuLmRpcmVjdC1jb25uZWN0IC5kaXJlY3QtY29ubmVjdC1jb250YWluZXIgLmNvbnRhaW5lci1yaWdodCAuaG9zdC1jb250YWluZXIsXG4uZGlyZWN0LWNvbm5lY3QgLmRpcmVjdC1jb25uZWN0LWNvbnRhaW5lciAuY29udGFpbmVyLXJpZ2h0IC5sb2ctY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cbi5kaXJlY3QtY29ubmVjdCAuZGlyZWN0LWNvbm5lY3QtY29udGFpbmVyIC5jb250YWluZXItcmlnaHQgLnRhc2stY29udGFpbmVyIC5jb250ZW50LFxuLmRpcmVjdC1jb25uZWN0IC5kaXJlY3QtY29ubmVjdC1jb250YWluZXIgLmNvbnRhaW5lci1yaWdodCAuaG9zdC1jb250YWluZXIgLmNvbnRlbnQsXG4uZGlyZWN0LWNvbm5lY3QgLmRpcmVjdC1jb25uZWN0LWNvbnRhaW5lciAuY29udGFpbmVyLXJpZ2h0IC5sb2ctY29udGFpbmVyIC5jb250ZW50IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgd2lkdGg6IDEwMCU7XG59XG4uZGlyZWN0LWNvbm5lY3QgLmRpcmVjdC1jb25uZWN0LWNvbnRhaW5lciAuY29udGFpbmVyLXJpZ2h0IC50YXNrLWNvbnRhaW5lciAuY29udGVudCAuaGVhZGVyLFxuLmRpcmVjdC1jb25uZWN0IC5kaXJlY3QtY29ubmVjdC1jb250YWluZXIgLmNvbnRhaW5lci1yaWdodCAuaG9zdC1jb250YWluZXIgLmNvbnRlbnQgLmhlYWRlcixcbi5kaXJlY3QtY29ubmVjdCAuZGlyZWN0LWNvbm5lY3QtY29udGFpbmVyIC5jb250YWluZXItcmlnaHQgLmxvZy1jb250YWluZXIgLmNvbnRlbnQgLmhlYWRlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgd2lkdGg6IDEwMCU7XG59XG4uZGlyZWN0LWNvbm5lY3QgLmRpcmVjdC1jb25uZWN0LWNvbnRhaW5lciAuY29udGFpbmVyLXJpZ2h0IC50YXNrLWNvbnRhaW5lciAuY29udGVudCAuZGl2aWRlcixcbi5kaXJlY3QtY29ubmVjdCAuZGlyZWN0LWNvbm5lY3QtY29udGFpbmVyIC5jb250YWluZXItcmlnaHQgLmhvc3QtY29udGFpbmVyIC5jb250ZW50IC5kaXZpZGVyLFxuLmRpcmVjdC1jb25uZWN0IC5kaXJlY3QtY29ubmVjdC1jb250YWluZXIgLmNvbnRhaW5lci1yaWdodCAubG9nLWNvbnRhaW5lciAuY29udGVudCAuZGl2aWRlciB7XG4gIGJvcmRlci1ib3R0b206ICNjY2NjY2M7XG59XG4uZGlyZWN0LWNvbm5lY3QgLmRpcmVjdC1jb25uZWN0LWNvbnRhaW5lciAuY29udGFpbmVyLXJpZ2h0IC50YXNrLWNvbnRhaW5lciAuY29udGVudCAuZGVzY3JpcHRpb24sXG4uZGlyZWN0LWNvbm5lY3QgLmRpcmVjdC1jb25uZWN0LWNvbnRhaW5lciAuY29udGFpbmVyLXJpZ2h0IC5ob3N0LWNvbnRhaW5lciAuY29udGVudCAuZGVzY3JpcHRpb24sXG4uZGlyZWN0LWNvbm5lY3QgLmRpcmVjdC1jb25uZWN0LWNvbnRhaW5lciAuY29udGFpbmVyLXJpZ2h0IC5sb2ctY29udGFpbmVyIC5jb250ZW50IC5kZXNjcmlwdGlvbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cbi5kaXJlY3QtY29ubmVjdCAuZGlyZWN0LWNvbm5lY3QtY29udGFpbmVyIC5jb250YWluZXItcmlnaHQgLnRhc2stY29udGFpbmVyIC5jb250ZW50IC5kZXNjcmlwdGlvbiAuZGVzLXJpZ2h0LFxuLmRpcmVjdC1jb25uZWN0IC5kaXJlY3QtY29ubmVjdC1jb250YWluZXIgLmNvbnRhaW5lci1yaWdodCAuaG9zdC1jb250YWluZXIgLmNvbnRlbnQgLmRlc2NyaXB0aW9uIC5kZXMtcmlnaHQsXG4uZGlyZWN0LWNvbm5lY3QgLmRpcmVjdC1jb25uZWN0LWNvbnRhaW5lciAuY29udGFpbmVyLXJpZ2h0IC5sb2ctY29udGFpbmVyIC5jb250ZW50IC5kZXNjcmlwdGlvbiAuZGVzLXJpZ2h0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgd2lkdGg6IDMyJTtcbn1cbi5kaXJlY3QtY29ubmVjdCAuZGlyZWN0LWNvbm5lY3QtY29udGFpbmVyIC5jb250YWluZXItcmlnaHQgLnRhc2stY29udGFpbmVyIC5jb250ZW50IC5kZXNjcmlwdGlvbiAuaG9zdC1kZXRhaWxzLFxuLmRpcmVjdC1jb25uZWN0IC5kaXJlY3QtY29ubmVjdC1jb250YWluZXIgLmNvbnRhaW5lci1yaWdodCAuaG9zdC1jb250YWluZXIgLmNvbnRlbnQgLmRlc2NyaXB0aW9uIC5ob3N0LWRldGFpbHMsXG4uZGlyZWN0LWNvbm5lY3QgLmRpcmVjdC1jb25uZWN0LWNvbnRhaW5lciAuY29udGFpbmVyLXJpZ2h0IC5sb2ctY29udGFpbmVyIC5jb250ZW50IC5kZXNjcmlwdGlvbiAuaG9zdC1kZXRhaWxzIHtcbiAgd2lkdGg6IDExMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG4uZGlyZWN0LWNvbm5lY3QgLmRpcmVjdC1jb25uZWN0LWNvbnRhaW5lciAuY29udGFpbmVyLWxlZnQge1xuICB3aWR0aDogMjkwcHg7XG4gIGhlaWdodDogMzAwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlZWYyZjU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuLmRpcmVjdC1jb25uZWN0IC5kaXJlY3QtY29ubmVjdC1jb250YWluZXIgLmNvbnRhaW5lci1sZWZ0IC5maWd1cmUge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5kaXJlY3QtY29ubmVjdCAuZGlyZWN0LWNvbm5lY3QtY29udGFpbmVyIC5jb250YWluZXItbGVmdCAuZmlndXJlIC5keHMge1xuICB3aWR0aDogOTBweDtcbiAgaGVpZ2h0OiA5MHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDM0ZWEyO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuLmRpcmVjdC1jb25uZWN0IC5kaXJlY3QtY29ubmVjdC1jb250YWluZXIgLmNvbnRhaW5lci1sZWZ0IC5maWd1cmUgLmNvbm5lY3RvcjEsXG4uZGlyZWN0LWNvbm5lY3QgLmRpcmVjdC1jb25uZWN0LWNvbnRhaW5lciAuY29udGFpbmVyLWxlZnQgLmZpZ3VyZSAuY29ubmVjdG9yMiB7XG4gIHdpZHRoOiAxNTBweDtcbiAgaGVpZ2h0OiAzMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG4uZGlyZWN0LWNvbm5lY3QgLmRpcmVjdC1jb25uZWN0LWNvbnRhaW5lciAuY29udGFpbmVyLWxlZnQgLmZpZ3VyZSAuY29ubmVjdG9yMSAuZHhzLWRiLFxuLmRpcmVjdC1jb25uZWN0IC5kaXJlY3QtY29ubmVjdC1jb250YWluZXIgLmNvbnRhaW5lci1sZWZ0IC5maWd1cmUgLmNvbm5lY3RvcjIgLmR4cy1kYiB7XG4gIHdpZHRoOiA1MHB4O1xuICBoZWlnaHQ6IDMwcHg7XG4gIHRyYW5zZm9ybTogbWF0cml4KDAuNzksIC0wLjgsIDAuNjYsIDAuNzksIDAsIDApO1xufVxuLmRpcmVjdC1jb25uZWN0IC5kaXJlY3QtY29ubmVjdC1jb250YWluZXIgLmNvbnRhaW5lci1sZWZ0IC5maWd1cmUgLmNvbm5lY3RvcjEgLmR4cy1kcyxcbi5kaXJlY3QtY29ubmVjdCAuZGlyZWN0LWNvbm5lY3QtY29udGFpbmVyIC5jb250YWluZXItbGVmdCAuZmlndXJlIC5jb25uZWN0b3IyIC5keHMtZHMge1xuICB3aWR0aDogNTBweDtcbiAgaGVpZ2h0OiAzMHB4O1xuICB0cmFuc2Zvcm06IG1hdHJpeCgtMC43OSwgLTAuOCwgMC42MiwgLTAuNzksIDAsIDApO1xufVxuLmRpcmVjdC1jb25uZWN0IC5kaXJlY3QtY29ubmVjdC1jb250YWluZXIgLmNvbnRhaW5lci1sZWZ0IC5maWd1cmUgLmNvbm5lY3RvcjEgLmR0cy1kYixcbi5kaXJlY3QtY29ubmVjdCAuZGlyZWN0LWNvbm5lY3QtY29udGFpbmVyIC5jb250YWluZXItbGVmdCAuZmlndXJlIC5jb25uZWN0b3IyIC5kdHMtZGIge1xuICB3aWR0aDogNTBweDtcbiAgaGVpZ2h0OiAzMHB4O1xuICB0cmFuc2Zvcm06IG1hdHJpeCgtMC43OSwgLTAuOCwgMC42NiwgLTAuNzksIDAsIDApO1xufVxuLmRpcmVjdC1jb25uZWN0IC5kaXJlY3QtY29ubmVjdC1jb250YWluZXIgLmNvbnRhaW5lci1sZWZ0IC5maWd1cmUgLmNvbm5lY3RvcjEgLmR0cy1kcyxcbi5kaXJlY3QtY29ubmVjdCAuZGlyZWN0LWNvbm5lY3QtY29udGFpbmVyIC5jb250YWluZXItbGVmdCAuZmlndXJlIC5jb25uZWN0b3IyIC5kdHMtZHMge1xuICB3aWR0aDogNTBweDtcbiAgaGVpZ2h0OiAzMHB4O1xuICB0cmFuc2Zvcm06IG1hdHJpeCgwLjc5LCAtMC44LCAwLjYyLCAwLjc5LCAwLCAwKTtcbn1cbi5kaXJlY3QtY29ubmVjdCAuZGlyZWN0LWNvbm5lY3QtY29udGFpbmVyIC5jb250YWluZXItbGVmdCAuZmlndXJlIC5kYi1kcyxcbi5kaXJlY3QtY29ubmVjdCAuZGlyZWN0LWNvbm5lY3QtY29udGFpbmVyIC5jb250YWluZXItbGVmdCAuZmlndXJlIC5kdHMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cbi5kaXJlY3QtY29ubmVjdCAuZGlyZWN0LWNvbm5lY3QtY29udGFpbmVyIC5jb250YWluZXItbGVmdCAuZmlndXJlIC5kYi1kcyAuY2lyY2xlLWJveCxcbi5kaXJlY3QtY29ubmVjdCAuZGlyZWN0LWNvbm5lY3QtY29udGFpbmVyIC5jb250YWluZXItbGVmdCAuZmlndXJlIC5kdHMgLmNpcmNsZS1ib3gge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLmRpcmVjdC1jb25uZWN0IC5kaXJlY3QtY29ubmVjdC1jb250YWluZXIgLmNvbnRhaW5lci1sZWZ0IC5maWd1cmUgLmRiLWRzIC5jaXJjbGUtYm94IC5kdHMtY2lyY2xlLFxuLmRpcmVjdC1jb25uZWN0IC5kaXJlY3QtY29ubmVjdC1jb250YWluZXIgLmNvbnRhaW5lci1sZWZ0IC5maWd1cmUgLmRiLWRzIC5jaXJjbGUtYm94IC5kYi1jaXJjbGUsXG4uZGlyZWN0LWNvbm5lY3QgLmRpcmVjdC1jb25uZWN0LWNvbnRhaW5lciAuY29udGFpbmVyLWxlZnQgLmZpZ3VyZSAuZGItZHMgLmNpcmNsZS1ib3ggLmRzLWNpcmNsZSxcbi5kaXJlY3QtY29ubmVjdCAuZGlyZWN0LWNvbm5lY3QtY29udGFpbmVyIC5jb250YWluZXItbGVmdCAuZmlndXJlIC5kdHMgLmNpcmNsZS1ib3ggLmR0cy1jaXJjbGUsXG4uZGlyZWN0LWNvbm5lY3QgLmRpcmVjdC1jb25uZWN0LWNvbnRhaW5lciAuY29udGFpbmVyLWxlZnQgLmZpZ3VyZSAuZHRzIC5jaXJjbGUtYm94IC5kYi1jaXJjbGUsXG4uZGlyZWN0LWNvbm5lY3QgLmRpcmVjdC1jb25uZWN0LWNvbnRhaW5lciAuY29udGFpbmVyLWxlZnQgLmZpZ3VyZSAuZHRzIC5jaXJjbGUtYm94IC5kcy1jaXJjbGUge1xuICB3aWR0aDogNzRweDtcbiAgaGVpZ2h0OiA3NHB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJveC1zaGFkb3c6IDBweCAzcHggMHB4ICMwMzRlYTI7XG4gIGJvcmRlcjogMXB4IHNvbGlkICMwMzRlYTI7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuLmRpcmVjdC1jb25uZWN0IC5kaXJlY3QtY29ubmVjdC1jb250YWluZXIgLmNvbnRhaW5lci1sZWZ0IC5maWd1cmUgLmRiLWRzIC5jaXJjbGUtYm94IC5kdHMtY2lyY2xlIC5pY29uLWJveCxcbi5kaXJlY3QtY29ubmVjdCAuZGlyZWN0LWNvbm5lY3QtY29udGFpbmVyIC5jb250YWluZXItbGVmdCAuZmlndXJlIC5kYi1kcyAuY2lyY2xlLWJveCAuZGItY2lyY2xlIC5pY29uLWJveCxcbi5kaXJlY3QtY29ubmVjdCAuZGlyZWN0LWNvbm5lY3QtY29udGFpbmVyIC5jb250YWluZXItbGVmdCAuZmlndXJlIC5kYi1kcyAuY2lyY2xlLWJveCAuZHMtY2lyY2xlIC5pY29uLWJveCxcbi5kaXJlY3QtY29ubmVjdCAuZGlyZWN0LWNvbm5lY3QtY29udGFpbmVyIC5jb250YWluZXItbGVmdCAuZmlndXJlIC5kdHMgLmNpcmNsZS1ib3ggLmR0cy1jaXJjbGUgLmljb24tYm94LFxuLmRpcmVjdC1jb25uZWN0IC5kaXJlY3QtY29ubmVjdC1jb250YWluZXIgLmNvbnRhaW5lci1sZWZ0IC5maWd1cmUgLmR0cyAuY2lyY2xlLWJveCAuZGItY2lyY2xlIC5pY29uLWJveCxcbi5kaXJlY3QtY29ubmVjdCAuZGlyZWN0LWNvbm5lY3QtY29udGFpbmVyIC5jb250YWluZXItbGVmdCAuZmlndXJlIC5kdHMgLmNpcmNsZS1ib3ggLmRzLWNpcmNsZSAuaWNvbi1ib3gge1xuICB3aWR0aDogMTZweDtcbiAgaGVpZ2h0OiAxNnB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJhY2tncm91bmQtY29sb3I6ICM4ZGJmMjI7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuLmRpcmVjdC1jb25uZWN0IC5kaXJlY3QtY29ubmVjdC1jb250YWluZXIgLmNvbnRhaW5lci1sZWZ0IC5maWd1cmUgLmRiLWRzIC5jaXJjbGUtYm94IC5kdHMtY2lyY2xlIC5jaXJjbGUtY29udGVudCxcbi5kaXJlY3QtY29ubmVjdCAuZGlyZWN0LWNvbm5lY3QtY29udGFpbmVyIC5jb250YWluZXItbGVmdCAuZmlndXJlIC5kYi1kcyAuY2lyY2xlLWJveCAuZGItY2lyY2xlIC5jaXJjbGUtY29udGVudCxcbi5kaXJlY3QtY29ubmVjdCAuZGlyZWN0LWNvbm5lY3QtY29udGFpbmVyIC5jb250YWluZXItbGVmdCAuZmlndXJlIC5kYi1kcyAuY2lyY2xlLWJveCAuZHMtY2lyY2xlIC5jaXJjbGUtY29udGVudCxcbi5kaXJlY3QtY29ubmVjdCAuZGlyZWN0LWNvbm5lY3QtY29udGFpbmVyIC5jb250YWluZXItbGVmdCAuZmlndXJlIC5kdHMgLmNpcmNsZS1ib3ggLmR0cy1jaXJjbGUgLmNpcmNsZS1jb250ZW50LFxuLmRpcmVjdC1jb25uZWN0IC5kaXJlY3QtY29ubmVjdC1jb250YWluZXIgLmNvbnRhaW5lci1sZWZ0IC5maWd1cmUgLmR0cyAuY2lyY2xlLWJveCAuZGItY2lyY2xlIC5jaXJjbGUtY29udGVudCxcbi5kaXJlY3QtY29ubmVjdCAuZGlyZWN0LWNvbm5lY3QtY29udGFpbmVyIC5jb250YWluZXItbGVmdCAuZmlndXJlIC5kdHMgLmNpcmNsZS1ib3ggLmRzLWNpcmNsZSAuY2lyY2xlLWNvbnRlbnQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLmRpcmVjdC1jb25uZWN0IC5kaXJlY3QtY29ubmVjdC1jb250YWluZXIgLmNvbnRhaW5lci1sZWZ0IC5maWd1cmUgLmRiLWRzIC5jaXJjbGUtYm94IC5ncmVlbi1jaXJjbGVzLFxuLmRpcmVjdC1jb25uZWN0IC5kaXJlY3QtY29ubmVjdC1jb250YWluZXIgLmNvbnRhaW5lci1sZWZ0IC5maWd1cmUgLmR0cyAuY2lyY2xlLWJveCAuZ3JlZW4tY2lyY2xlcyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNjMWY2OGM7XG59XG4uZGlyZWN0LWNvbm5lY3QgLmRpcmVjdC1jb25uZWN0LWNvbnRhaW5lciAuY29udGFpbmVyLWxlZnQgLmZpZ3VyZSAuZGItZHMgLmNpcmNsZS1ib3ggLmxpZ2h0Ymx1ZS1jaXJjbGVzLFxuLmRpcmVjdC1jb25uZWN0IC5kaXJlY3QtY29ubmVjdC1jb250YWluZXIgLmNvbnRhaW5lci1sZWZ0IC5maWd1cmUgLmR0cyAuY2lyY2xlLWJveCAubGlnaHRibHVlLWNpcmNsZXMge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYjJlMGZjO1xufVxuLmRpcmVjdC1jb25uZWN0IC5kaXJlY3QtY29ubmVjdC1jb250YWluZXIgLmNvbnRhaW5lci1sZWZ0IC5maWd1cmUgLmRiLWRzIC5keHMtZHRzLFxuLmRpcmVjdC1jb25uZWN0IC5kaXJlY3QtY29ubmVjdC1jb250YWluZXIgLmNvbnRhaW5lci1sZWZ0IC5maWd1cmUgLmR0cyAuZHhzLWR0cyB7XG4gIHdpZHRoOiA5MHB4O1xuICBoZWlnaHQ6IDExcHg7XG4gIHRyYW5zZm9ybTogbWF0cml4KDAsIC0xLjMsIDEsIDAsIDAsIDApO1xuICBtYXJnaW4tYm90dG9tOiAtMXB4O1xufVxuLmRpcmVjdC1jb25uZWN0IC5kaXJlY3QtY29ubmVjdC1jb250YWluZXIgLmNvbnRhaW5lci1sZWZ0IC5maWd1cmUgLmNvbm5lY3RvcjEge1xuICBtYXJnaW4tdG9wOiAtMTBweDtcbn1cbi5kaXJlY3QtY29ubmVjdCAuZGlyZWN0LWNvbm5lY3QtY29udGFpbmVyIC5jb250YWluZXItbGVmdCAuZmlndXJlIC5jb25uZWN0b3IyIHtcbiAgbWFyZ2luLXRvcDogNHB4O1xufVxuLmRpcmVjdC1jb25uZWN0IC5kaXJlY3QtY29ubmVjdC1jb250YWluZXIgLmNvbnRhaW5lci1sZWZ0IC5maWd1cmUgLmR0cyB7XG4gIG1hcmdpbi10b3A6IC0xMHB4O1xufVxuLmRpcmVjdC1jb25uZWN0IC5kaXJlY3QtY29ubmVjdC1jb250YWluZXIgLmhvc3QtY29udGFpbmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VlZjJmNTtcbn0iXX0= */";
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
        value: function ngOnInit() {
          this.showContent = true;
          this.showContent1 = false;
        }
      }, {
        key: "openContent",
        value: function openContent() {
          this.showContent = !this.showContent;
        }
      }, {
        key: "openContent1",
        value: function openContent1() {
          this.showContent1 = !this.showContent1;
        }
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