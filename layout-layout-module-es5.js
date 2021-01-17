function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["layout-layout-module"], {
  /***/
  "./node_modules/@angular/forms/fesm2015/forms.js":
  /*!*******************************************************!*\
    !*** ./node_modules/@angular/forms/fesm2015/forms.js ***!
    \*******************************************************/

  /*! exports provided: ɵangular_packages_forms_forms_d, ɵInternalFormsSharedModule, ɵangular_packages_forms_forms_c, ɵangular_packages_forms_forms_a, ɵangular_packages_forms_forms_b, ɵangular_packages_forms_forms_e, ɵangular_packages_forms_forms_f, ɵangular_packages_forms_forms_g, ɵangular_packages_forms_forms_h, ɵangular_packages_forms_forms_i, ɵangular_packages_forms_forms_j, ɵangular_packages_forms_forms_k, ɵangular_packages_forms_forms_l, ɵangular_packages_forms_forms_z, ɵNgNoValidate, ɵangular_packages_forms_forms_m, ɵangular_packages_forms_forms_n, ɵangular_packages_forms_forms_o, ɵangular_packages_forms_forms_p, ɵangular_packages_forms_forms_q, ɵangular_packages_forms_forms_r, ɵangular_packages_forms_forms_s, ɵangular_packages_forms_forms_t, ɵangular_packages_forms_forms_v, ɵangular_packages_forms_forms_u, ɵangular_packages_forms_forms_w, ɵangular_packages_forms_forms_y, ɵNgSelectMultipleOption, ɵangular_packages_forms_forms_x, ɵangular_packages_forms_forms_bb, ɵangular_packages_forms_forms_bc, ɵangular_packages_forms_forms_be, ɵangular_packages_forms_forms_bd, ɵangular_packages_forms_forms_bf, ɵangular_packages_forms_forms_ba, AbstractControlDirective, AbstractFormGroupDirective, CheckboxControlValueAccessor, ControlContainer, NG_VALUE_ACCESSOR, COMPOSITION_BUFFER_MODE, DefaultValueAccessor, NgControl, NgControlStatus, NgControlStatusGroup, NgForm, NgFormSelectorWarning, NgModel, NgModelGroup, NumberValueAccessor, RadioControlValueAccessor, RangeValueAccessor, FormControlDirective, FormControlName, FormGroupDirective, FormArrayName, FormGroupName, NgSelectOption, SelectControlValueAccessor, SelectMultipleControlValueAccessor, CheckboxRequiredValidator, EmailValidator, MaxLengthValidator, MinLengthValidator, PatternValidator, RequiredValidator, FormBuilder, AbstractControl, FormArray, FormControl, FormGroup, NG_ASYNC_VALIDATORS, NG_VALIDATORS, Validators, VERSION, FormsModule, ReactiveFormsModule */

  /***/
  function node_modulesAngularFormsFesm2015FormsJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_d", function () {
      return ɵInternalFormsSharedModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵInternalFormsSharedModule", function () {
      return ɵInternalFormsSharedModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_c", function () {
      return REACTIVE_DRIVEN_DIRECTIVES;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_a", function () {
      return SHARED_FORM_DIRECTIVES;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_b", function () {
      return TEMPLATE_DRIVEN_DIRECTIVES;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_e", function () {
      return CHECKBOX_VALUE_ACCESSOR;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_f", function () {
      return DEFAULT_VALUE_ACCESSOR;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_g", function () {
      return AbstractControlStatus;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_h", function () {
      return ngControlStatusHost;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_i", function () {
      return formDirectiveProvider;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_j", function () {
      return NG_FORM_SELECTOR_WARNING;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_k", function () {
      return formControlBinding;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_l", function () {
      return modelGroupProvider;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_z", function () {
      return ɵNgNoValidate;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵNgNoValidate", function () {
      return ɵNgNoValidate;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_m", function () {
      return NUMBER_VALUE_ACCESSOR;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_n", function () {
      return RADIO_VALUE_ACCESSOR;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_o", function () {
      return RadioControlRegistry;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_p", function () {
      return RANGE_VALUE_ACCESSOR;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_q", function () {
      return NG_MODEL_WITH_FORM_CONTROL_WARNING;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_r", function () {
      return formControlBinding$1;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_s", function () {
      return controlNameBinding;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_t", function () {
      return formDirectiveProvider$1;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_v", function () {
      return formArrayNameProvider;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_u", function () {
      return formGroupNameProvider;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_w", function () {
      return SELECT_VALUE_ACCESSOR;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_y", function () {
      return ɵNgSelectMultipleOption;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵNgSelectMultipleOption", function () {
      return ɵNgSelectMultipleOption;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_x", function () {
      return SELECT_MULTIPLE_VALUE_ACCESSOR;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_bb", function () {
      return CHECKBOX_REQUIRED_VALIDATOR;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_bc", function () {
      return EMAIL_VALIDATOR;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_be", function () {
      return MAX_LENGTH_VALIDATOR;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_bd", function () {
      return MIN_LENGTH_VALIDATOR;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_bf", function () {
      return PATTERN_VALIDATOR;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_ba", function () {
      return REQUIRED_VALIDATOR;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AbstractControlDirective", function () {
      return AbstractControlDirective;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AbstractFormGroupDirective", function () {
      return AbstractFormGroupDirective;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CheckboxControlValueAccessor", function () {
      return CheckboxControlValueAccessor;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ControlContainer", function () {
      return ControlContainer;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NG_VALUE_ACCESSOR", function () {
      return NG_VALUE_ACCESSOR;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "COMPOSITION_BUFFER_MODE", function () {
      return COMPOSITION_BUFFER_MODE;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DefaultValueAccessor", function () {
      return DefaultValueAccessor;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NgControl", function () {
      return NgControl;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NgControlStatus", function () {
      return NgControlStatus;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NgControlStatusGroup", function () {
      return NgControlStatusGroup;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NgForm", function () {
      return NgForm;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NgFormSelectorWarning", function () {
      return NgFormSelectorWarning;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NgModel", function () {
      return NgModel;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NgModelGroup", function () {
      return NgModelGroup;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NumberValueAccessor", function () {
      return NumberValueAccessor;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RadioControlValueAccessor", function () {
      return RadioControlValueAccessor;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RangeValueAccessor", function () {
      return RangeValueAccessor;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FormControlDirective", function () {
      return FormControlDirective;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FormControlName", function () {
      return FormControlName;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FormGroupDirective", function () {
      return FormGroupDirective;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FormArrayName", function () {
      return FormArrayName;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FormGroupName", function () {
      return FormGroupName;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NgSelectOption", function () {
      return NgSelectOption;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SelectControlValueAccessor", function () {
      return SelectControlValueAccessor;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SelectMultipleControlValueAccessor", function () {
      return SelectMultipleControlValueAccessor;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CheckboxRequiredValidator", function () {
      return CheckboxRequiredValidator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EmailValidator", function () {
      return EmailValidator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MaxLengthValidator", function () {
      return MaxLengthValidator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MinLengthValidator", function () {
      return MinLengthValidator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PatternValidator", function () {
      return PatternValidator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RequiredValidator", function () {
      return RequiredValidator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FormBuilder", function () {
      return FormBuilder;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AbstractControl", function () {
      return AbstractControl;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FormArray", function () {
      return FormArray;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FormControl", function () {
      return FormControl;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FormGroup", function () {
      return FormGroup;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NG_ASYNC_VALIDATORS", function () {
      return NG_ASYNC_VALIDATORS;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NG_VALIDATORS", function () {
      return NG_VALIDATORS;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Validators", function () {
      return Validators;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "VERSION", function () {
      return VERSION;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FormsModule", function () {
      return FormsModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ReactiveFormsModule", function () {
      return ReactiveFormsModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /**
     * @license Angular v8.2.14
     * (c) 2010-2019 Google LLC. https://angular.io/
     * License: MIT
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * \@description
     * Defines an interface that acts as a bridge between the Angular forms API and a
     * native element in the DOM.
     *
     * Implement this interface to create a custom form control directive
     * that integrates with Angular forms.
     *
     * @see DefaultValueAccessor
     *
     * \@publicApi
     * @record
     */


    function ControlValueAccessor() {}

    if (false) {}
    /**
     * Used to provide a `ControlValueAccessor` for form controls.
     *
     * See `DefaultValueAccessor` for how to implement one.
     *
     * \@publicApi
     * @type {?}
     */


    var NG_VALUE_ACCESSOR = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('NgValueAccessor');
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /** @type {?} */

    var CHECKBOX_VALUE_ACCESSOR = {
      provide: NG_VALUE_ACCESSOR,
      useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(
      /**
      * @return {?}
      */
      function () {
        return CheckboxControlValueAccessor;
      }),
      multi: true
    };
    /**
     * \@description
     * A `ControlValueAccessor` for writing a value and listening to changes on a checkbox input
     * element.
     *
     * \@usageNotes
     *
     * ### Using a checkbox with a reactive form.
     *
     * The following example shows how to use a checkbox with a reactive form.
     *
     * ```ts
     * const rememberLoginControl = new FormControl();
     * ```
     *
     * ```
     * <input type="checkbox" [formControl]="rememberLoginControl">
     * ```
     *
     * \@ngModule ReactiveFormsModule
     * \@ngModule FormsModule
     * \@publicApi
     */

    var CheckboxControlValueAccessor = /*#__PURE__*/function () {
      /**
       * @param {?} _renderer
       * @param {?} _elementRef
       */
      function CheckboxControlValueAccessor(_renderer, _elementRef) {
        _classCallCheck(this, CheckboxControlValueAccessor);

        this._renderer = _renderer;
        this._elementRef = _elementRef;
        /**
         * \@description
         * The registered callback function called when a change event occurs on the input element.
         */

        this.onChange =
        /**
        * @param {?} _
        * @return {?}
        */
        function (_) {};
        /**
         * \@description
         * The registered callback function called when a blur event occurs on the input element.
         */


        this.onTouched =
        /**
        * @return {?}
        */
        function () {};
      }
      /**
       * Sets the "checked" property on the input element.
       *
       * @param {?} value The checked value
       * @return {?}
       */


      _createClass(CheckboxControlValueAccessor, [{
        key: "writeValue",
        value: function writeValue(value) {
          this._renderer.setProperty(this._elementRef.nativeElement, 'checked', value);
        }
        /**
         * \@description
         * Registers a function called when the control value changes.
         *
         * @param {?} fn The callback function
         * @return {?}
         */

      }, {
        key: "registerOnChange",
        value: function registerOnChange(fn) {
          this.onChange = fn;
        }
        /**
         * \@description
         * Registers a function called when the control is touched.
         *
         * @param {?} fn The callback function
         * @return {?}
         */

      }, {
        key: "registerOnTouched",
        value: function registerOnTouched(fn) {
          this.onTouched = fn;
        }
        /**
         * Sets the "disabled" property on the input element.
         *
         * @param {?} isDisabled The disabled value
         * @return {?}
         */

      }, {
        key: "setDisabledState",
        value: function setDisabledState(isDisabled) {
          this._renderer.setProperty(this._elementRef.nativeElement, 'disabled', isDisabled);
        }
      }]);

      return CheckboxControlValueAccessor;
    }();

    CheckboxControlValueAccessor.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
      args: [{
        selector: 'input[type=checkbox][formControlName],input[type=checkbox][formControl],input[type=checkbox][ngModel]',
        host: {
          '(change)': 'onChange($event.target.checked)',
          '(blur)': 'onTouched()'
        },
        providers: [CHECKBOX_VALUE_ACCESSOR]
      }]
    }];
    /** @nocollapse */

    CheckboxControlValueAccessor.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
      }];
    };

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /** @type {?} */


    var DEFAULT_VALUE_ACCESSOR = {
      provide: NG_VALUE_ACCESSOR,
      useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(
      /**
      * @return {?}
      */
      function () {
        return DefaultValueAccessor;
      }),
      multi: true
    };
    /**
     * We must check whether the agent is Android because composition events
     * behave differently between iOS and Android.
     * @return {?}
     */

    function _isAndroid() {
      /** @type {?} */
      var userAgent = Object(_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["ɵgetDOM"])() ? Object(_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["ɵgetDOM"])().getUserAgent() : '';
      return /android (\d+)/.test(userAgent.toLowerCase());
    }
    /**
     * \@description
     * Provide this token to control if form directives buffer IME input until
     * the "compositionend" event occurs.
     * \@publicApi
     * @type {?}
     */


    var COMPOSITION_BUFFER_MODE = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('CompositionEventMode');
    /**
     * \@description
     * The default `ControlValueAccessor` for writing a value and listening to changes on input
     * elements. The accessor is used by the `FormControlDirective`, `FormControlName`, and
     * `NgModel` directives.
     *
     * \@usageNotes
     *
     * ### Using the default value accessor
     *
     * The following example shows how to use an input element that activates the default value accessor
     * (in this case, a text field).
     *
     * ```ts
     * const firstNameControl = new FormControl();
     * ```
     *
     * ```
     * <input type="text" [formControl]="firstNameControl">
     * ```
     *
     * \@ngModule ReactiveFormsModule
     * \@ngModule FormsModule
     * \@publicApi
     */

    var DefaultValueAccessor = /*#__PURE__*/function () {
      /**
       * @param {?} _renderer
       * @param {?} _elementRef
       * @param {?} _compositionMode
       */
      function DefaultValueAccessor(_renderer, _elementRef, _compositionMode) {
        _classCallCheck(this, DefaultValueAccessor);

        this._renderer = _renderer;
        this._elementRef = _elementRef;
        this._compositionMode = _compositionMode;
        /**
         * \@description
         * The registered callback function called when an input event occurs on the input element.
         */

        this.onChange =
        /**
        * @param {?} _
        * @return {?}
        */
        function (_) {};
        /**
         * \@description
         * The registered callback function called when a blur event occurs on the input element.
         */


        this.onTouched =
        /**
        * @return {?}
        */
        function () {};
        /**
         * Whether the user is creating a composition string (IME events).
         */


        this._composing = false;

        if (this._compositionMode == null) {
          this._compositionMode = !_isAndroid();
        }
      }
      /**
       * Sets the "value" property on the input element.
       *
       * @param {?} value The checked value
       * @return {?}
       */


      _createClass(DefaultValueAccessor, [{
        key: "writeValue",
        value: function writeValue(value) {
          /** @type {?} */
          var normalizedValue = value == null ? '' : value;

          this._renderer.setProperty(this._elementRef.nativeElement, 'value', normalizedValue);
        }
        /**
         * \@description
         * Registers a function called when the control value changes.
         *
         * @param {?} fn The callback function
         * @return {?}
         */

      }, {
        key: "registerOnChange",
        value: function registerOnChange(fn) {
          this.onChange = fn;
        }
        /**
         * \@description
         * Registers a function called when the control is touched.
         *
         * @param {?} fn The callback function
         * @return {?}
         */

      }, {
        key: "registerOnTouched",
        value: function registerOnTouched(fn) {
          this.onTouched = fn;
        }
        /**
         * Sets the "disabled" property on the input element.
         *
         * @param {?} isDisabled The disabled value
         * @return {?}
         */

      }, {
        key: "setDisabledState",
        value: function setDisabledState(isDisabled) {
          this._renderer.setProperty(this._elementRef.nativeElement, 'disabled', isDisabled);
        }
        /**
         * \@internal
         * @param {?} value
         * @return {?}
         */

      }, {
        key: "_handleInput",
        value: function _handleInput(value) {
          if (!this._compositionMode || this._compositionMode && !this._composing) {
            this.onChange(value);
          }
        }
        /**
         * \@internal
         * @return {?}
         */

      }, {
        key: "_compositionStart",
        value: function _compositionStart() {
          this._composing = true;
        }
        /**
         * \@internal
         * @param {?} value
         * @return {?}
         */

      }, {
        key: "_compositionEnd",
        value: function _compositionEnd(value) {
          this._composing = false;
          this._compositionMode && this.onChange(value);
        }
      }]);

      return DefaultValueAccessor;
    }();

    DefaultValueAccessor.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
      args: [{
        selector: 'input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]',
        // TODO: vsavkin replace the above selector with the one below it once
        // https://github.com/angular/angular/issues/3011 is implemented
        // selector: '[ngModel],[formControl],[formControlName]',
        host: {
          '(input)': '$any(this)._handleInput($event.target.value)',
          '(blur)': 'onTouched()',
          '(compositionstart)': '$any(this)._compositionStart()',
          '(compositionend)': '$any(this)._compositionEnd($event.target.value)'
        },
        providers: [DEFAULT_VALUE_ACCESSOR]
      }]
    }];
    /** @nocollapse */

    DefaultValueAccessor.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
      }, {
        type: Boolean,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
          args: [COMPOSITION_BUFFER_MODE]
        }]
      }];
    };

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */

    /**
     * \@description
     * Base class for control directives.
     *
     * This class is only used internally in the `ReactiveFormsModule` and the `FormsModule`.
     *
     * \@publicApi
     * @abstract
     */


    var AbstractControlDirective = /*#__PURE__*/function () {
      function AbstractControlDirective() {
        _classCallCheck(this, AbstractControlDirective);
      }

      _createClass(AbstractControlDirective, [{
        key: "reset",

        /**
         * \@description
         * Resets the control with the provided value if the control is present.
         * @param {?=} value
         * @return {?}
         */
        value: function reset() {
          var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : undefined;
          if (this.control) this.control.reset(value);
        }
        /**
         * \@description
         * Reports whether the control with the given path has the error specified.
         *
         * \@usageNotes
         * For example, for the following `FormGroup`:
         *
         * ```
         * form = new FormGroup({
         *   address: new FormGroup({ street: new FormControl() })
         * });
         * ```
         *
         * The path to the 'street' control from the root form would be 'address' -> 'street'.
         *
         * It can be provided to this method in one of two formats:
         *
         * 1. An array of string control names, e.g. `['address', 'street']`
         * 1. A period-delimited list of control names in one string, e.g. `'address.street'`
         *
         * If no path is given, this method checks for the error on the current control.
         *
         * @param {?} errorCode The code of the error to check
         * @param {?=} path A list of control names that designates how to move from the current control
         * to the control that should be queried for errors.
         *
         * @return {?} whether the given error is present in the control at the given path.
         *
         * If the control is not present, false is returned.
         */

      }, {
        key: "hasError",
        value: function hasError(errorCode, path) {
          return this.control ? this.control.hasError(errorCode, path) : false;
        }
        /**
         * \@description
         * Reports error data for the control with the given path.
         *
         * \@usageNotes
         * For example, for the following `FormGroup`:
         *
         * ```
         * form = new FormGroup({
         *   address: new FormGroup({ street: new FormControl() })
         * });
         * ```
         *
         * The path to the 'street' control from the root form would be 'address' -> 'street'.
         *
         * It can be provided to this method in one of two formats:
         *
         * 1. An array of string control names, e.g. `['address', 'street']`
         * 1. A period-delimited list of control names in one string, e.g. `'address.street'`
         *
         * @param {?} errorCode The code of the error to check
         * @param {?=} path A list of control names that designates how to move from the current control
         * to the control that should be queried for errors.
         *
         * @return {?} error data for that particular error. If the control or error is not present,
         * null is returned.
         */

      }, {
        key: "getError",
        value: function getError(errorCode, path) {
          return this.control ? this.control.getError(errorCode, path) : null;
        }
      }, {
        key: "value",

        /**
         * \@description
         * Reports the value of the control if it is present, otherwise null.
         * @return {?}
         */
        get: function get() {
          return this.control ? this.control.value : null;
        }
        /**
         * \@description
         * Reports whether the control is valid. A control is considered valid if no
         * validation errors exist with the current value.
         * If the control is not present, null is returned.
         * @return {?}
         */

      }, {
        key: "valid",
        get: function get() {
          return this.control ? this.control.valid : null;
        }
        /**
         * \@description
         * Reports whether the control is invalid, meaning that an error exists in the input value.
         * If the control is not present, null is returned.
         * @return {?}
         */

      }, {
        key: "invalid",
        get: function get() {
          return this.control ? this.control.invalid : null;
        }
        /**
         * \@description
         * Reports whether a control is pending, meaning that that async validation is occurring and
         * errors are not yet available for the input value. If the control is not present, null is
         * returned.
         * @return {?}
         */

      }, {
        key: "pending",
        get: function get() {
          return this.control ? this.control.pending : null;
        }
        /**
         * \@description
         * Reports whether the control is disabled, meaning that the control is disabled
         * in the UI and is exempt from validation checks and excluded from aggregate
         * values of ancestor controls. If the control is not present, null is returned.
         * @return {?}
         */

      }, {
        key: "disabled",
        get: function get() {
          return this.control ? this.control.disabled : null;
        }
        /**
         * \@description
         * Reports whether the control is enabled, meaning that the control is included in ancestor
         * calculations of validity or value. If the control is not present, null is returned.
         * @return {?}
         */

      }, {
        key: "enabled",
        get: function get() {
          return this.control ? this.control.enabled : null;
        }
        /**
         * \@description
         * Reports the control's validation errors. If the control is not present, null is returned.
         * @return {?}
         */

      }, {
        key: "errors",
        get: function get() {
          return this.control ? this.control.errors : null;
        }
        /**
         * \@description
         * Reports whether the control is pristine, meaning that the user has not yet changed
         * the value in the UI. If the control is not present, null is returned.
         * @return {?}
         */

      }, {
        key: "pristine",
        get: function get() {
          return this.control ? this.control.pristine : null;
        }
        /**
         * \@description
         * Reports whether the control is dirty, meaning that the user has changed
         * the value in the UI. If the control is not present, null is returned.
         * @return {?}
         */

      }, {
        key: "dirty",
        get: function get() {
          return this.control ? this.control.dirty : null;
        }
        /**
         * \@description
         * Reports whether the control is touched, meaning that the user has triggered
         * a `blur` event on it. If the control is not present, null is returned.
         * @return {?}
         */

      }, {
        key: "touched",
        get: function get() {
          return this.control ? this.control.touched : null;
        }
        /**
         * \@description
         * Reports the validation status of the control. Possible values include:
         * 'VALID', 'INVALID', 'DISABLED', and 'PENDING'.
         * If the control is not present, null is returned.
         * @return {?}
         */

      }, {
        key: "status",
        get: function get() {
          return this.control ? this.control.status : null;
        }
        /**
         * \@description
         * Reports whether the control is untouched, meaning that the user has not yet triggered
         * a `blur` event on it. If the control is not present, null is returned.
         * @return {?}
         */

      }, {
        key: "untouched",
        get: function get() {
          return this.control ? this.control.untouched : null;
        }
        /**
         * \@description
         * Returns a multicasting observable that emits a validation status whenever it is
         * calculated for the control. If the control is not present, null is returned.
         * @return {?}
         */

      }, {
        key: "statusChanges",
        get: function get() {
          return this.control ? this.control.statusChanges : null;
        }
        /**
         * \@description
         * Returns a multicasting observable of value changes for the control that emits every time the
         * value of the control changes in the UI or programmatically.
         * If the control is not present, null is returned.
         * @return {?}
         */

      }, {
        key: "valueChanges",
        get: function get() {
          return this.control ? this.control.valueChanges : null;
        }
        /**
         * \@description
         * Returns an array that represents the path from the top-level form to this control.
         * Each index is the string name of the control on that level.
         * @return {?}
         */

      }, {
        key: "path",
        get: function get() {
          return null;
        }
      }]);

      return AbstractControlDirective;
    }();

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * \@description
     * A base class for directives that contain multiple registered instances of `NgControl`.
     * Only used by the forms module.
     *
     * \@publicApi
     * @abstract
     */


    var ControlContainer = /*#__PURE__*/function (_AbstractControlDirec) {
      _inherits(ControlContainer, _AbstractControlDirec);

      var _super = _createSuper(ControlContainer);

      function ControlContainer() {
        _classCallCheck(this, ControlContainer);

        return _super.apply(this, arguments);
      }

      _createClass(ControlContainer, [{
        key: "formDirective",

        /**
         * \@description
         * The top-level form directive for the control.
         * @return {?}
         */
        get: function get() {
          return null;
        }
        /**
         * \@description
         * The path to this group.
         * @return {?}
         */

      }, {
        key: "path",
        get: function get() {
          return null;
        }
      }]);

      return ControlContainer;
    }(AbstractControlDirective);

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @return {?}
     */


    function unimplemented() {
      throw new Error('unimplemented');
    }
    /**
     * \@description
     * A base class that all control `FormControl`-based directives extend. It binds a `FormControl`
     * object to a DOM element.
     *
     * \@publicApi
     * @abstract
     */


    var NgControl = /*#__PURE__*/function (_AbstractControlDirec2) {
      _inherits(NgControl, _AbstractControlDirec2);

      var _super2 = _createSuper(NgControl);

      function NgControl() {
        var _this;

        _classCallCheck(this, NgControl);

        _this = _super2.apply(this, arguments);
        /**
         * \@description
         * The parent form for the control.
         *
         * \@internal
         */

        _this._parent = null;
        /**
         * \@description
         * The name for the control
         */

        _this.name = null;
        /**
         * \@description
         * The value accessor for the control
         */

        _this.valueAccessor = null;
        /**
         * \@description
         * The uncomposed array of synchronous validators for the control
         *
         * \@internal
         */

        _this._rawValidators = [];
        /**
         * \@description
         * The uncomposed array of async validators for the control
         *
         * \@internal
         */

        _this._rawAsyncValidators = [];
        return _this;
      }
      /**
       * \@description
       * The registered synchronous validator function for the control
       *
       * @throws An exception that this method is not implemented
       * @return {?}
       */


      _createClass(NgControl, [{
        key: "validator",
        get: function get() {
          return (
            /** @type {?} */
            unimplemented()
          );
        }
        /**
         * \@description
         * The registered async validator function for the control
         *
         * @throws An exception that this method is not implemented
         * @return {?}
         */

      }, {
        key: "asyncValidator",
        get: function get() {
          return (
            /** @type {?} */
            unimplemented()
          );
        }
      }]);

      return NgControl;
    }(AbstractControlDirective);

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    var AbstractControlStatus = /*#__PURE__*/function () {
      /**
       * @param {?} cd
       */
      function AbstractControlStatus(cd) {
        _classCallCheck(this, AbstractControlStatus);

        this._cd = cd;
      }
      /**
       * @return {?}
       */


      _createClass(AbstractControlStatus, [{
        key: "ngClassUntouched",
        get: function get() {
          return this._cd.control ? this._cd.control.untouched : false;
        }
        /**
         * @return {?}
         */

      }, {
        key: "ngClassTouched",
        get: function get() {
          return this._cd.control ? this._cd.control.touched : false;
        }
        /**
         * @return {?}
         */

      }, {
        key: "ngClassPristine",
        get: function get() {
          return this._cd.control ? this._cd.control.pristine : false;
        }
        /**
         * @return {?}
         */

      }, {
        key: "ngClassDirty",
        get: function get() {
          return this._cd.control ? this._cd.control.dirty : false;
        }
        /**
         * @return {?}
         */

      }, {
        key: "ngClassValid",
        get: function get() {
          return this._cd.control ? this._cd.control.valid : false;
        }
        /**
         * @return {?}
         */

      }, {
        key: "ngClassInvalid",
        get: function get() {
          return this._cd.control ? this._cd.control.invalid : false;
        }
        /**
         * @return {?}
         */

      }, {
        key: "ngClassPending",
        get: function get() {
          return this._cd.control ? this._cd.control.pending : false;
        }
      }]);

      return AbstractControlStatus;
    }();

    if (false) {}
    /** @type {?} */


    var ngControlStatusHost = {
      '[class.ng-untouched]': 'ngClassUntouched',
      '[class.ng-touched]': 'ngClassTouched',
      '[class.ng-pristine]': 'ngClassPristine',
      '[class.ng-dirty]': 'ngClassDirty',
      '[class.ng-valid]': 'ngClassValid',
      '[class.ng-invalid]': 'ngClassInvalid',
      '[class.ng-pending]': 'ngClassPending'
    };
    /**
     * \@description
     * Directive automatically applied to Angular form controls that sets CSS classes
     * based on control status.
     *
     * \@usageNotes
     *
     * ### CSS classes applied
     *
     * The following classes are applied as the properties become true:
     *
     * * ng-valid
     * * ng-invalid
     * * ng-pending
     * * ng-pristine
     * * ng-dirty
     * * ng-untouched
     * * ng-touched
     *
     * \@ngModule ReactiveFormsModule
     * \@ngModule FormsModule
     * \@publicApi
     */

    var NgControlStatus = /*#__PURE__*/function (_AbstractControlStatu) {
      _inherits(NgControlStatus, _AbstractControlStatu);

      var _super3 = _createSuper(NgControlStatus);

      /**
       * @param {?} cd
       */
      function NgControlStatus(cd) {
        _classCallCheck(this, NgControlStatus);

        return _super3.call(this, cd);
      }

      return NgControlStatus;
    }(AbstractControlStatus);

    NgControlStatus.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
      args: [{
        selector: '[formControlName],[ngModel],[formControl]',
        host: ngControlStatusHost
      }]
    }];
    /** @nocollapse */

    NgControlStatus.ctorParameters = function () {
      return [{
        type: NgControl,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Self"]
        }]
      }];
    };
    /**
     * \@description
     * Directive automatically applied to Angular form groups that sets CSS classes
     * based on control status (valid/invalid/dirty/etc).
     *
     * @see `NgControlStatus`
     *
     * \@ngModule ReactiveFormsModule
     * \@ngModule FormsModule
     * \@publicApi
     */


    var NgControlStatusGroup = /*#__PURE__*/function (_AbstractControlStatu2) {
      _inherits(NgControlStatusGroup, _AbstractControlStatu2);

      var _super4 = _createSuper(NgControlStatusGroup);

      /**
       * @param {?} cd
       */
      function NgControlStatusGroup(cd) {
        _classCallCheck(this, NgControlStatusGroup);

        return _super4.call(this, cd);
      }

      return NgControlStatusGroup;
    }(AbstractControlStatus);

    NgControlStatusGroup.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
      args: [{
        selector: '[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]',
        host: ngControlStatusHost
      }]
    }];
    /** @nocollapse */

    NgControlStatusGroup.ctorParameters = function () {
      return [{
        type: ControlContainer,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Self"]
        }]
      }];
    };
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @param {?} value
     * @return {?}
     */


    function isEmptyInputValue(value) {
      // we don't check for string here so it also works with arrays
      return value == null || value.length === 0;
    }
    /**
     * \@description
     * An `InjectionToken` for registering additional synchronous validators used with `AbstractControl`s.
     *
     * @see `NG_ASYNC_VALIDATORS`
     *
     * \@usageNotes
     *
     * ### Providing a custom validator
     *
     * The following example registers a custom validator directive. Adding the validator to the
     * existing collection of validators requires the `multi: true` option.
     *
     * ```typescript
     * \@Directive({
     *   selector: '[customValidator]',
     *   providers: [{provide: NG_VALIDATORS, useExisting: CustomValidatorDirective, multi: true}]
     * })
     * class CustomValidatorDirective implements Validator {
     *   validate(control: AbstractControl): ValidationErrors | null {
     *     return { 'custom': true };
     *   }
     * }
     * ```
     *
     * \@publicApi
     * @type {?}
     */


    var NG_VALIDATORS = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('NgValidators');
    /**
     * \@description
     * An `InjectionToken` for registering additional asynchronous validators used with `AbstractControl`s.
     *
     * @see `NG_VALIDATORS`
     *
     * \@publicApi
     * @type {?}
     */

    var NG_ASYNC_VALIDATORS = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('NgAsyncValidators');
    /**
     * A regular expression that matches valid e-mail addresses.
     *
     * At a high level, this regexp matches e-mail addresses of the format `local-part\@tld`, where:
     * - `local-part` consists of one or more of the allowed characters (alphanumeric and some
     *   punctuation symbols).
     * - `local-part` cannot begin or end with a period (`.`).
     * - `local-part` cannot be longer than 64 characters.
     * - `tld` consists of one or more `labels` separated by periods (`.`). For example `localhost` or
     *   `foo.com`.
     * - A `label` consists of one or more of the allowed characters (alphanumeric, dashes (`-`) and
     *   periods (`.`)).
     * - A `label` cannot begin or end with a dash (`-`) or a period (`.`).
     * - A `label` cannot be longer than 63 characters.
     * - The whole address cannot be longer than 254 characters.
     *
     * ## Implementation background
     *
     * This regexp was ported over from AngularJS (see there for git history):
     * https://github.com/angular/angular.js/blob/c133ef836/src/ng/directive/input.js#L27
     * It is based on the
     * [WHATWG version](https://html.spec.whatwg.org/multipage/input.html#valid-e-mail-address) with
     * some enhancements to incorporate more RFC rules (such as rules related to domain names and the
     * lengths of different parts of the address). The main differences from the WHATWG version are:
     *   - Disallow `local-part` to begin or end with a period (`.`).
     *   - Disallow `local-part` length to exceed 64 characters.
     *   - Disallow total address length to exceed 254 characters.
     *
     * See [this commit](https://github.com/angular/angular.js/commit/f3f5cf72e) for more details.
     * @type {?}
     */

    var EMAIL_REGEXP = /^(?=.{1,254}$)(?=.{1,64}@)[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
    /**
     * \@description
     * Provides a set of built-in validators that can be used by form controls.
     *
     * A validator is a function that processes a `FormControl` or collection of
     * controls and returns an error map or null. A null map means that validation has passed.
     *
     * @see [Form Validation](/guide/form-validation)
     *
     * \@publicApi
     */

    var Validators = /*#__PURE__*/function () {
      function Validators() {
        _classCallCheck(this, Validators);
      }

      _createClass(Validators, null, [{
        key: "min",

        /**
         * \@description
         * Validator that requires the control's value to be greater than or equal to the provided number.
         * The validator exists only as a function and not as a directive.
         *
         * \@usageNotes
         *
         * ### Validate against a minimum of 3
         *
         * ```typescript
         * const control = new FormControl(2, Validators.min(3));
         *
         * console.log(control.errors); // {min: {min: 3, actual: 2}}
         * ```
         *
         * @see `updateValueAndValidity()`
         *
         * @param {?} min
         * @return {?} A validator function that returns an error map with the
         * `min` property if the validation check fails, otherwise `null`.
         *
         */
        value: function min(_min) {
          return (
            /**
            * @param {?} control
            * @return {?}
            */
            function (control) {
              if (isEmptyInputValue(control.value) || isEmptyInputValue(_min)) {
                return null; // don't validate empty values to allow optional controls
              }
              /** @type {?} */


              var value = parseFloat(control.value); // Controls with NaN values after parsing should be treated as not having a
              // minimum, per the HTML forms spec: https://www.w3.org/TR/html5/forms.html#attr-input-min

              return !isNaN(value) && value < _min ? {
                'min': {
                  'min': _min,
                  'actual': control.value
                }
              } : null;
            }
          );
        }
        /**
         * \@description
         * Validator that requires the control's value to be less than or equal to the provided number.
         * The validator exists only as a function and not as a directive.
         *
         * \@usageNotes
         *
         * ### Validate against a maximum of 15
         *
         * ```typescript
         * const control = new FormControl(16, Validators.max(15));
         *
         * console.log(control.errors); // {max: {max: 15, actual: 16}}
         * ```
         *
         * @see `updateValueAndValidity()`
         *
         * @param {?} max
         * @return {?} A validator function that returns an error map with the
         * `max` property if the validation check fails, otherwise `null`.
         *
         */

      }, {
        key: "max",
        value: function max(_max) {
          return (
            /**
            * @param {?} control
            * @return {?}
            */
            function (control) {
              if (isEmptyInputValue(control.value) || isEmptyInputValue(_max)) {
                return null; // don't validate empty values to allow optional controls
              }
              /** @type {?} */


              var value = parseFloat(control.value); // Controls with NaN values after parsing should be treated as not having a
              // maximum, per the HTML forms spec: https://www.w3.org/TR/html5/forms.html#attr-input-max

              return !isNaN(value) && value > _max ? {
                'max': {
                  'max': _max,
                  'actual': control.value
                }
              } : null;
            }
          );
        }
        /**
         * \@description
         * Validator that requires the control have a non-empty value.
         *
         * \@usageNotes
         *
         * ### Validate that the field is non-empty
         *
         * ```typescript
         * const control = new FormControl('', Validators.required);
         *
         * console.log(control.errors); // {required: true}
         * ```
         *
         * @see `updateValueAndValidity()`
         *
         * @param {?} control
         * @return {?} An error map with the `required` property
         * if the validation check fails, otherwise `null`.
         *
         */

      }, {
        key: "required",
        value: function required(control) {
          return isEmptyInputValue(control.value) ? {
            'required': true
          } : null;
        }
        /**
         * \@description
         * Validator that requires the control's value be true. This validator is commonly
         * used for required checkboxes.
         *
         * \@usageNotes
         *
         * ### Validate that the field value is true
         *
         * ```typescript
         * const control = new FormControl('', Validators.requiredTrue);
         *
         * console.log(control.errors); // {required: true}
         * ```
         *
         * @see `updateValueAndValidity()`
         *
         * @param {?} control
         * @return {?} An error map that contains the `required` property
         * set to `true` if the validation check fails, otherwise `null`.
         *
         */

      }, {
        key: "requiredTrue",
        value: function requiredTrue(control) {
          return control.value === true ? null : {
            'required': true
          };
        }
        /**
         * \@description
         * Validator that requires the control's value pass an email validation test.
         *
         * Tests the value using a [regular expression](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions)
         * pattern suitable for common usecases. The pattern is based on the definition of a valid email
         * address in the [WHATWG HTML specification](https://html.spec.whatwg.org/multipage/input.html#valid-e-mail-address)
         * with some enhancements to incorporate more RFC rules (such as rules related to domain names and
         * the lengths of different parts of the address).
         *
         * The differences from the WHATWG version include:
         * - Disallow `local-part` (the part before the `\@` symbol) to begin or end with a period (`.`).
         * - Disallow `local-part` to be longer than 64 characters.
         * - Disallow the whole address to be longer than 254 characters.
         *
         * If this pattern does not satisfy your business needs, you can use `Validators.pattern()` to
         * validate the value against a different pattern.
         *
         * \@usageNotes
         *
         * ### Validate that the field matches a valid email pattern
         *
         * ```typescript
         * const control = new FormControl('bad\@', Validators.email);
         *
         * console.log(control.errors); // {email: true}
         * ```
         *
         * @see `updateValueAndValidity()`
         *
         * @param {?} control
         * @return {?} An error map with the `email` property
         * if the validation check fails, otherwise `null`.
         *
         */

      }, {
        key: "email",
        value: function email(control) {
          if (isEmptyInputValue(control.value)) {
            return null; // don't validate empty values to allow optional controls
          }

          return EMAIL_REGEXP.test(control.value) ? null : {
            'email': true
          };
        }
        /**
         * \@description
         * Validator that requires the length of the control's value to be greater than or equal
         * to the provided minimum length. This validator is also provided by default if you use the
         * the HTML5 `minlength` attribute.
         *
         * \@usageNotes
         *
         * ### Validate that the field has a minimum of 3 characters
         *
         * ```typescript
         * const control = new FormControl('ng', Validators.minLength(3));
         *
         * console.log(control.errors); // {minlength: {requiredLength: 3, actualLength: 2}}
         * ```
         *
         * ```html
         * <input minlength="5">
         * ```
         *
         * @see `updateValueAndValidity()`
         *
         * @param {?} minLength
         * @return {?} A validator function that returns an error map with the
         * `minlength` if the validation check fails, otherwise `null`.
         *
         */

      }, {
        key: "minLength",
        value: function minLength(_minLength) {
          return (
            /**
            * @param {?} control
            * @return {?}
            */
            function (control) {
              if (isEmptyInputValue(control.value)) {
                return null; // don't validate empty values to allow optional controls
              }
              /** @type {?} */


              var length = control.value ? control.value.length : 0;
              return length < _minLength ? {
                'minlength': {
                  'requiredLength': _minLength,
                  'actualLength': length
                }
              } : null;
            }
          );
        }
        /**
         * \@description
         * Validator that requires the length of the control's value to be less than or equal
         * to the provided maximum length. This validator is also provided by default if you use the
         * the HTML5 `maxlength` attribute.
         *
         * \@usageNotes
         *
         * ### Validate that the field has maximum of 5 characters
         *
         * ```typescript
         * const control = new FormControl('Angular', Validators.maxLength(5));
         *
         * console.log(control.errors); // {maxlength: {requiredLength: 5, actualLength: 7}}
         * ```
         *
         * ```html
         * <input maxlength="5">
         * ```
         *
         * @see `updateValueAndValidity()`
         *
         * @param {?} maxLength
         * @return {?} A validator function that returns an error map with the
         * `maxlength` property if the validation check fails, otherwise `null`.
         *
         */

      }, {
        key: "maxLength",
        value: function maxLength(_maxLength) {
          return (
            /**
            * @param {?} control
            * @return {?}
            */
            function (control) {
              /** @type {?} */
              var length = control.value ? control.value.length : 0;
              return length > _maxLength ? {
                'maxlength': {
                  'requiredLength': _maxLength,
                  'actualLength': length
                }
              } : null;
            }
          );
        }
        /**
         * \@description
         * Validator that requires the control's value to match a regex pattern. This validator is also
         * provided by default if you use the HTML5 `pattern` attribute.
         *
         * \@usageNotes
         *
         * ### Validate that the field only contains letters or spaces
         *
         * ```typescript
         * const control = new FormControl('1', Validators.pattern('[a-zA-Z ]*'));
         *
         * console.log(control.errors); // {pattern: {requiredPattern: '^[a-zA-Z ]*$', actualValue: '1'}}
         * ```
         *
         * ```html
         * <input pattern="[a-zA-Z ]*">
         * ```
         *
         * @see `updateValueAndValidity()`
         *
         * @param {?} pattern A regular expression to be used as is to test the values, or a string.
         * If a string is passed, the `^` character is prepended and the `$` character is
         * appended to the provided string (if not already present), and the resulting regular
         * expression is used to test the values.
         *
         * @return {?} A validator function that returns an error map with the
         * `pattern` property if the validation check fails, otherwise `null`.
         *
         */

      }, {
        key: "pattern",
        value: function pattern(_pattern) {
          if (!_pattern) return Validators.nullValidator;
          /** @type {?} */

          var regex;
          /** @type {?} */

          var regexStr;

          if (typeof _pattern === 'string') {
            regexStr = '';
            if (_pattern.charAt(0) !== '^') regexStr += '^';
            regexStr += _pattern;
            if (_pattern.charAt(_pattern.length - 1) !== '$') regexStr += '$';
            regex = new RegExp(regexStr);
          } else {
            regexStr = _pattern.toString();
            regex = _pattern;
          }

          return (
            /**
            * @param {?} control
            * @return {?}
            */
            function (control) {
              if (isEmptyInputValue(control.value)) {
                return null; // don't validate empty values to allow optional controls
              }
              /** @type {?} */


              var value = control.value;
              return regex.test(value) ? null : {
                'pattern': {
                  'requiredPattern': regexStr,
                  'actualValue': value
                }
              };
            }
          );
        }
        /**
         * \@description
         * Validator that performs no operation.
         *
         * @see `updateValueAndValidity()`
         *
         * @param {?} control
         * @return {?}
         */

      }, {
        key: "nullValidator",
        value: function nullValidator(control) {
          return null;
        }
        /**
         * @param {?} validators
         * @return {?}
         */

      }, {
        key: "compose",
        value: function compose(validators) {
          if (!validators) return null;
          /** @type {?} */

          var presentValidators =
          /** @type {?} */
          validators.filter(isPresent);
          if (presentValidators.length == 0) return null;
          return (
            /**
            * @param {?} control
            * @return {?}
            */
            function (control) {
              return _mergeErrors(_executeValidators(control, presentValidators));
            }
          );
        }
        /**
         * \@description
         * Compose multiple async validators into a single function that returns the union
         * of the individual error objects for the provided control.
         *
         * @see `updateValueAndValidity()`
         *
         * @param {?} validators
         * @return {?} A validator function that returns an error map with the
         * merged error objects of the async validators if the validation check fails, otherwise `null`.
         *
         */

      }, {
        key: "composeAsync",
        value: function composeAsync(validators) {
          if (!validators) return null;
          /** @type {?} */

          var presentValidators =
          /** @type {?} */
          validators.filter(isPresent);
          if (presentValidators.length == 0) return null;
          return (
            /**
            * @param {?} control
            * @return {?}
            */
            function (control) {
              /** @type {?} */
              var observables = _executeAsyncValidators(control, presentValidators).map(toObservable);

              return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["forkJoin"])(observables).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(_mergeErrors));
            }
          );
        }
      }]);

      return Validators;
    }();
    /**
     * @param {?} o
     * @return {?}
     */


    function isPresent(o) {
      return o != null;
    }
    /**
     * @param {?} r
     * @return {?}
     */


    function toObservable(r) {
      /** @type {?} */
      var obs = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵisPromise"])(r) ? Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["from"])(r) : r;

      if (!Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵisObservable"])(obs)) {
        throw new Error("Expected validator to return Promise or Observable.");
      }

      return obs;
    }
    /**
     * @param {?} control
     * @param {?} validators
     * @return {?}
     */


    function _executeValidators(control, validators) {
      return validators.map(
      /**
      * @param {?} v
      * @return {?}
      */
      function (v) {
        return v(control);
      });
    }
    /**
     * @param {?} control
     * @param {?} validators
     * @return {?}
     */


    function _executeAsyncValidators(control, validators) {
      return validators.map(
      /**
      * @param {?} v
      * @return {?}
      */
      function (v) {
        return v(control);
      });
    }
    /**
     * @param {?} arrayOfErrors
     * @return {?}
     */


    function _mergeErrors(arrayOfErrors) {
      /** @type {?} */
      var res = arrayOfErrors.reduce(
      /**
      * @param {?} res
      * @param {?} errors
      * @return {?}
      */
      function (res, errors) {
        return errors != null ? Object.assign({},
        /** @type {?} */
        res, errors) :
        /** @type {?} */
        res;
      }, {});
      return Object.keys(res).length === 0 ? null : res;
    }
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */

    /**
     * @param {?} validator
     * @return {?}
     */


    function normalizeValidator(validator) {
      if (
      /** @type {?} */
      validator.validate) {
        return (
          /**
          * @param {?} c
          * @return {?}
          */
          function (c) {
            return (
              /** @type {?} */
              validator.validate(c)
            );
          }
        );
      } else {
        return (
          /** @type {?} */
          validator
        );
      }
    }
    /**
     * @param {?} validator
     * @return {?}
     */


    function normalizeAsyncValidator(validator) {
      if (
      /** @type {?} */
      validator.validate) {
        return (
          /**
          * @param {?} c
          * @return {?}
          */
          function (c) {
            return (
              /** @type {?} */
              validator.validate(c)
            );
          }
        );
      } else {
        return (
          /** @type {?} */
          validator
        );
      }
    }
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /** @type {?} */


    var NUMBER_VALUE_ACCESSOR = {
      provide: NG_VALUE_ACCESSOR,
      useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(
      /**
      * @return {?}
      */
      function () {
        return NumberValueAccessor;
      }),
      multi: true
    };
    /**
     * \@description
     * The `ControlValueAccessor` for writing a number value and listening to number input changes.
     * The value accessor is used by the `FormControlDirective`, `FormControlName`, and  `NgModel`
     * directives.
     *
     * \@usageNotes
     *
     * ### Using a number input with a reactive form.
     *
     * The following example shows how to use a number input with a reactive form.
     *
     * ```ts
     * const totalCountControl = new FormControl();
     * ```
     *
     * ```
     * <input type="number" [formControl]="totalCountControl">
     * ```
     *
     * \@ngModule ReactiveFormsModule
     * \@ngModule FormsModule
     * \@publicApi
     */

    var NumberValueAccessor = /*#__PURE__*/function () {
      /**
       * @param {?} _renderer
       * @param {?} _elementRef
       */
      function NumberValueAccessor(_renderer, _elementRef) {
        _classCallCheck(this, NumberValueAccessor);

        this._renderer = _renderer;
        this._elementRef = _elementRef;
        /**
         * \@description
         * The registered callback function called when a change or input event occurs on the input
         * element.
         */

        this.onChange =
        /**
        * @param {?} _
        * @return {?}
        */
        function (_) {};
        /**
         * \@description
         * The registered callback function called when a blur event occurs on the input element.
         */


        this.onTouched =
        /**
        * @return {?}
        */
        function () {};
      }
      /**
       * Sets the "value" property on the input element.
       *
       * @param {?} value The checked value
       * @return {?}
       */


      _createClass(NumberValueAccessor, [{
        key: "writeValue",
        value: function writeValue(value) {
          // The value needs to be normalized for IE9, otherwise it is set to 'null' when null

          /** @type {?} */
          var normalizedValue = value == null ? '' : value;

          this._renderer.setProperty(this._elementRef.nativeElement, 'value', normalizedValue);
        }
        /**
         * \@description
         * Registers a function called when the control value changes.
         *
         * @param {?} fn The callback function
         * @return {?}
         */

      }, {
        key: "registerOnChange",
        value: function registerOnChange(fn) {
          this.onChange =
          /**
          * @param {?} value
          * @return {?}
          */
          function (value) {
            fn(value == '' ? null : parseFloat(value));
          };
        }
        /**
         * \@description
         * Registers a function called when the control is touched.
         *
         * @param {?} fn The callback function
         * @return {?}
         */

      }, {
        key: "registerOnTouched",
        value: function registerOnTouched(fn) {
          this.onTouched = fn;
        }
        /**
         * Sets the "disabled" property on the input element.
         *
         * @param {?} isDisabled The disabled value
         * @return {?}
         */

      }, {
        key: "setDisabledState",
        value: function setDisabledState(isDisabled) {
          this._renderer.setProperty(this._elementRef.nativeElement, 'disabled', isDisabled);
        }
      }]);

      return NumberValueAccessor;
    }();

    NumberValueAccessor.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
      args: [{
        selector: 'input[type=number][formControlName],input[type=number][formControl],input[type=number][ngModel]',
        host: {
          '(change)': 'onChange($event.target.value)',
          '(input)': 'onChange($event.target.value)',
          '(blur)': 'onTouched()'
        },
        providers: [NUMBER_VALUE_ACCESSOR]
      }]
    }];
    /** @nocollapse */

    NumberValueAccessor.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
      }];
    };

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /** @type {?} */


    var RADIO_VALUE_ACCESSOR = {
      provide: NG_VALUE_ACCESSOR,
      useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(
      /**
      * @return {?}
      */
      function () {
        return RadioControlValueAccessor;
      }),
      multi: true
    };
    /**
     * \@description
     * Class used by Angular to track radio buttons. For internal use only.
     */

    var RadioControlRegistry = /*#__PURE__*/function () {
      function RadioControlRegistry() {
        _classCallCheck(this, RadioControlRegistry);

        this._accessors = [];
      }
      /**
       * \@description
       * Adds a control to the internal registry. For internal use only.
       * @param {?} control
       * @param {?} accessor
       * @return {?}
       */


      _createClass(RadioControlRegistry, [{
        key: "add",
        value: function add(control, accessor) {
          this._accessors.push([control, accessor]);
        }
        /**
         * \@description
         * Removes a control from the internal registry. For internal use only.
         * @param {?} accessor
         * @return {?}
         */

      }, {
        key: "remove",
        value: function remove(accessor) {
          for (var i = this._accessors.length - 1; i >= 0; --i) {
            if (this._accessors[i][1] === accessor) {
              this._accessors.splice(i, 1);

              return;
            }
          }
        }
        /**
         * \@description
         * Selects a radio button. For internal use only.
         * @param {?} accessor
         * @return {?}
         */

      }, {
        key: "select",
        value: function select(accessor) {
          var _this2 = this;

          this._accessors.forEach(
          /**
          * @param {?} c
          * @return {?}
          */
          function (c) {
            if (_this2._isSameGroup(c, accessor) && c[1] !== accessor) {
              c[1].fireUncheck(accessor.value);
            }
          });
        }
        /**
         * @private
         * @param {?} controlPair
         * @param {?} accessor
         * @return {?}
         */

      }, {
        key: "_isSameGroup",
        value: function _isSameGroup(controlPair, accessor) {
          if (!controlPair[0].control) return false;
          return controlPair[0]._parent === accessor._control._parent && controlPair[1].name === accessor.name;
        }
      }]);

      return RadioControlRegistry;
    }();

    RadioControlRegistry.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }];

    if (false) {}
    /**
     * \@description
     * The `ControlValueAccessor` for writing radio control values and listening to radio control
     * changes. The value accessor is used by the `FormControlDirective`, `FormControlName`, and
     * `NgModel` directives.
     *
     * \@usageNotes
     *
     * ### Using radio buttons with reactive form directives
     *
     * The follow example shows how to use radio buttons in a reactive form. When using radio buttons in
     * a reactive form, radio buttons in the same group should have the same `formControlName`.
     * Providing a `name` attribute is optional.
     *
     * {\@example forms/ts/reactiveRadioButtons/reactive_radio_button_example.ts region='Reactive'}
     *
     * \@ngModule ReactiveFormsModule
     * \@ngModule FormsModule
     * \@publicApi
     */


    var RadioControlValueAccessor = /*#__PURE__*/function () {
      /**
       * @param {?} _renderer
       * @param {?} _elementRef
       * @param {?} _registry
       * @param {?} _injector
       */
      function RadioControlValueAccessor(_renderer, _elementRef, _registry, _injector) {
        _classCallCheck(this, RadioControlValueAccessor);

        this._renderer = _renderer;
        this._elementRef = _elementRef;
        this._registry = _registry;
        this._injector = _injector;
        /**
         * \@description
         * The registered callback function called when a change event occurs on the input element.
         */

        this.onChange =
        /**
        * @return {?}
        */
        function () {};
        /**
         * \@description
         * The registered callback function called when a blur event occurs on the input element.
         */


        this.onTouched =
        /**
        * @return {?}
        */
        function () {};
      }
      /**
       * \@description
       * A lifecycle method called when the directive is initialized. For internal use only.
       * @return {?}
       */


      _createClass(RadioControlValueAccessor, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this._control = this._injector.get(NgControl);

          this._checkName();

          this._registry.add(this._control, this);
        }
        /**
         * \@description
         * Lifecycle method called before the directive's instance is destroyed. For internal use only.
         * @return {?}
         */

      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this._registry.remove(this);
        }
        /**
         * \@description
         * Sets the "checked" property value on the radio input element.
         *
         * @param {?} value The checked value
         * @return {?}
         */

      }, {
        key: "writeValue",
        value: function writeValue(value) {
          this._state = value === this.value;

          this._renderer.setProperty(this._elementRef.nativeElement, 'checked', this._state);
        }
        /**
         * \@description
         * Registers a function called when the control value changes.
         *
         * @param {?} fn The callback function
         * @return {?}
         */

      }, {
        key: "registerOnChange",
        value: function registerOnChange(fn) {
          var _this3 = this;

          this._fn = fn;

          this.onChange =
          /**
          * @return {?}
          */
          function () {
            fn(_this3.value);

            _this3._registry.select(_this3);
          };
        }
        /**
         * Sets the "value" on the radio input element and unchecks it.
         *
         * @param {?} value
         * @return {?}
         */

      }, {
        key: "fireUncheck",
        value: function fireUncheck(value) {
          this.writeValue(value);
        }
        /**
         * \@description
         * Registers a function called when the control is touched.
         *
         * @param {?} fn The callback function
         * @return {?}
         */

      }, {
        key: "registerOnTouched",
        value: function registerOnTouched(fn) {
          this.onTouched = fn;
        }
        /**
         * Sets the "disabled" property on the input element.
         *
         * @param {?} isDisabled The disabled value
         * @return {?}
         */

      }, {
        key: "setDisabledState",
        value: function setDisabledState(isDisabled) {
          this._renderer.setProperty(this._elementRef.nativeElement, 'disabled', isDisabled);
        }
        /**
         * @private
         * @return {?}
         */

      }, {
        key: "_checkName",
        value: function _checkName() {
          if (this.name && this.formControlName && this.name !== this.formControlName) {
            this._throwNameError();
          }

          if (!this.name && this.formControlName) this.name = this.formControlName;
        }
        /**
         * @private
         * @return {?}
         */

      }, {
        key: "_throwNameError",
        value: function _throwNameError() {
          throw new Error("\n      If you define both a name and a formControlName attribute on your radio button, their values\n      must match. Ex: <input type=\"radio\" formControlName=\"food\" name=\"food\">\n    ");
        }
      }]);

      return RadioControlValueAccessor;
    }();

    RadioControlValueAccessor.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
      args: [{
        selector: 'input[type=radio][formControlName],input[type=radio][formControl],input[type=radio][ngModel]',
        host: {
          '(change)': 'onChange()',
          '(blur)': 'onTouched()'
        },
        providers: [RADIO_VALUE_ACCESSOR]
      }]
    }];
    /** @nocollapse */

    RadioControlValueAccessor.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
      }, {
        type: RadioControlRegistry
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]
      }];
    };

    RadioControlValueAccessor.propDecorators = {
      name: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      formControlName: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      value: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }]
    };

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /** @type {?} */


    var RANGE_VALUE_ACCESSOR = {
      provide: NG_VALUE_ACCESSOR,
      useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(
      /**
      * @return {?}
      */
      function () {
        return RangeValueAccessor;
      }),
      multi: true
    };
    /**
     * \@description
     * The `ControlValueAccessor` for writing a range value and listening to range input changes.
     * The value accessor is used by the `FormControlDirective`, `FormControlName`, and  `NgModel`
     * directives.
     *
     * \@usageNotes
     *
     * ### Using a range input with a reactive form
     *
     * The following example shows how to use a range input with a reactive form.
     *
     * ```ts
     * const ageControl = new FormControl();
     * ```
     *
     * ```
     * <input type="range" [formControl]="ageControl">
     * ```
     *
     * \@ngModule ReactiveFormsModule
     * \@ngModule FormsModule
     * \@publicApi
     */

    var RangeValueAccessor = /*#__PURE__*/function () {
      /**
       * @param {?} _renderer
       * @param {?} _elementRef
       */
      function RangeValueAccessor(_renderer, _elementRef) {
        _classCallCheck(this, RangeValueAccessor);

        this._renderer = _renderer;
        this._elementRef = _elementRef;
        /**
         * \@description
         * The registered callback function called when a change or input event occurs on the input
         * element.
         */

        this.onChange =
        /**
        * @param {?} _
        * @return {?}
        */
        function (_) {};
        /**
         * \@description
         * The registered callback function called when a blur event occurs on the input element.
         */


        this.onTouched =
        /**
        * @return {?}
        */
        function () {};
      }
      /**
       * Sets the "value" property on the input element.
       *
       * @param {?} value The checked value
       * @return {?}
       */


      _createClass(RangeValueAccessor, [{
        key: "writeValue",
        value: function writeValue(value) {
          this._renderer.setProperty(this._elementRef.nativeElement, 'value', parseFloat(value));
        }
        /**
         * \@description
         * Registers a function called when the control value changes.
         *
         * @param {?} fn The callback function
         * @return {?}
         */

      }, {
        key: "registerOnChange",
        value: function registerOnChange(fn) {
          this.onChange =
          /**
          * @param {?} value
          * @return {?}
          */
          function (value) {
            fn(value == '' ? null : parseFloat(value));
          };
        }
        /**
         * \@description
         * Registers a function called when the control is touched.
         *
         * @param {?} fn The callback function
         * @return {?}
         */

      }, {
        key: "registerOnTouched",
        value: function registerOnTouched(fn) {
          this.onTouched = fn;
        }
        /**
         * Sets the "disabled" property on the range input element.
         *
         * @param {?} isDisabled The disabled value
         * @return {?}
         */

      }, {
        key: "setDisabledState",
        value: function setDisabledState(isDisabled) {
          this._renderer.setProperty(this._elementRef.nativeElement, 'disabled', isDisabled);
        }
      }]);

      return RangeValueAccessor;
    }();

    RangeValueAccessor.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
      args: [{
        selector: 'input[type=range][formControlName],input[type=range][formControl],input[type=range][ngModel]',
        host: {
          '(change)': 'onChange($event.target.value)',
          '(input)': 'onChange($event.target.value)',
          '(blur)': 'onTouched()'
        },
        providers: [RANGE_VALUE_ACCESSOR]
      }]
    }];
    /** @nocollapse */

    RangeValueAccessor.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
      }];
    };

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */

    /** @type {?} */


    var FormErrorExamples = {
      formControlName: "\n    <div [formGroup]=\"myGroup\">\n      <input formControlName=\"firstName\">\n    </div>\n\n    In your class:\n\n    this.myGroup = new FormGroup({\n       firstName: new FormControl()\n    });",
      formGroupName: "\n    <div [formGroup]=\"myGroup\">\n       <div formGroupName=\"person\">\n          <input formControlName=\"firstName\">\n       </div>\n    </div>\n\n    In your class:\n\n    this.myGroup = new FormGroup({\n       person: new FormGroup({ firstName: new FormControl() })\n    });",
      formArrayName: "\n    <div [formGroup]=\"myGroup\">\n      <div formArrayName=\"cities\">\n        <div *ngFor=\"let city of cityArray.controls; index as i\">\n          <input [formControlName]=\"i\">\n        </div>\n      </div>\n    </div>\n\n    In your class:\n\n    this.cityArray = new FormArray([new FormControl('SF')]);\n    this.myGroup = new FormGroup({\n      cities: this.cityArray\n    });",
      ngModelGroup: "\n    <form>\n       <div ngModelGroup=\"person\">\n          <input [(ngModel)]=\"person.name\" name=\"firstName\">\n       </div>\n    </form>",
      ngModelWithFormGroup: "\n    <div [formGroup]=\"myGroup\">\n       <input formControlName=\"firstName\">\n       <input [(ngModel)]=\"showMoreControls\" [ngModelOptions]=\"{standalone: true}\">\n    </div>\n  "
    };
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    var ReactiveErrors = /*#__PURE__*/function () {
      function ReactiveErrors() {
        _classCallCheck(this, ReactiveErrors);
      }

      _createClass(ReactiveErrors, null, [{
        key: "controlParentException",

        /**
         * @return {?}
         */
        value: function controlParentException() {
          throw new Error("formControlName must be used with a parent formGroup directive.  You'll want to add a formGroup\n       directive and pass it an existing FormGroup instance (you can create one in your class).\n\n      Example:\n\n      ".concat(FormErrorExamples.formControlName));
        }
        /**
         * @return {?}
         */

      }, {
        key: "ngModelGroupException",
        value: function ngModelGroupException() {
          throw new Error("formControlName cannot be used with an ngModelGroup parent. It is only compatible with parents\n       that also have a \"form\" prefix: formGroupName, formArrayName, or formGroup.\n\n       Option 1:  Update the parent to be formGroupName (reactive form strategy)\n\n        ".concat(FormErrorExamples.formGroupName, "\n\n        Option 2: Use ngModel instead of formControlName (template-driven strategy)\n\n        ").concat(FormErrorExamples.ngModelGroup));
        }
        /**
         * @return {?}
         */

      }, {
        key: "missingFormException",
        value: function missingFormException() {
          throw new Error("formGroup expects a FormGroup instance. Please pass one in.\n\n       Example:\n\n       ".concat(FormErrorExamples.formControlName));
        }
        /**
         * @return {?}
         */

      }, {
        key: "groupParentException",
        value: function groupParentException() {
          throw new Error("formGroupName must be used with a parent formGroup directive.  You'll want to add a formGroup\n      directive and pass it an existing FormGroup instance (you can create one in your class).\n\n      Example:\n\n      ".concat(FormErrorExamples.formGroupName));
        }
        /**
         * @return {?}
         */

      }, {
        key: "arrayParentException",
        value: function arrayParentException() {
          throw new Error("formArrayName must be used with a parent formGroup directive.  You'll want to add a formGroup\n       directive and pass it an existing FormGroup instance (you can create one in your class).\n\n        Example:\n\n        ".concat(FormErrorExamples.formArrayName));
        }
        /**
         * @return {?}
         */

      }, {
        key: "disabledAttrWarning",
        value: function disabledAttrWarning() {
          console.warn("\n      It looks like you're using the disabled attribute with a reactive form directive. If you set disabled to true\n      when you set up this control in your component class, the disabled attribute will actually be set in the DOM for\n      you. We recommend using this approach to avoid 'changed after checked' errors.\n       \n      Example: \n      form = new FormGroup({\n        first: new FormControl({value: 'Nancy', disabled: true}, Validators.required),\n        last: new FormControl('Drew', Validators.required)\n      });\n    ");
        }
        /**
         * @param {?} directiveName
         * @return {?}
         */

      }, {
        key: "ngModelWarning",
        value: function ngModelWarning(directiveName) {
          console.warn("\n    It looks like you're using ngModel on the same form field as ".concat(directiveName, ". \n    Support for using the ngModel input property and ngModelChange event with \n    reactive form directives has been deprecated in Angular v6 and will be removed \n    in Angular v7.\n    \n    For more information on this, see our API docs here:\n    https://angular.io/api/forms/").concat(directiveName === 'formControl' ? 'FormControlDirective' : 'FormControlName', "#use-with-ngmodel\n    "));
        }
      }]);

      return ReactiveErrors;
    }();
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /** @type {?} */


    var SELECT_VALUE_ACCESSOR = {
      provide: NG_VALUE_ACCESSOR,
      useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(
      /**
      * @return {?}
      */
      function () {
        return SelectControlValueAccessor;
      }),
      multi: true
    };
    /**
     * @param {?} id
     * @param {?} value
     * @return {?}
     */

    function _buildValueString(id, value) {
      if (id == null) return "".concat(value);
      if (value && typeof value === 'object') value = 'Object';
      return "".concat(id, ": ").concat(value).slice(0, 50);
    }
    /**
     * @param {?} valueString
     * @return {?}
     */


    function _extractId(valueString) {
      return valueString.split(':')[0];
    }
    /**
     * \@description
     * The `ControlValueAccessor` for writing select control values and listening to select control
     * changes. The value accessor is used by the `FormControlDirective`, `FormControlName`, and
     * `NgModel` directives.
     *
     * \@usageNotes
     *
     * ### Using select controls in a reactive form
     *
     * The following examples show how to use a select control in a reactive form.
     *
     * {\@example forms/ts/reactiveSelectControl/reactive_select_control_example.ts region='Component'}
     *
     * ### Using select controls in a template-driven form
     *
     * To use a select in a template-driven form, simply add an `ngModel` and a `name`
     * attribute to the main `<select>` tag.
     *
     * {\@example forms/ts/selectControl/select_control_example.ts region='Component'}
     *
     * ### Customizing option selection
     *
     * Angular uses object identity to select option. It's possible for the identities of items
     * to change while the data does not. This can happen, for example, if the items are produced
     * from an RPC to the server, and that RPC is re-run. Even if the data hasn't changed, the
     * second response will produce objects with different identities.
     *
     * To customize the default option comparison algorithm, `<select>` supports `compareWith` input.
     * `compareWith` takes a **function** which has two arguments: `option1` and `option2`.
     * If `compareWith` is given, Angular selects option by the return value of the function.
     *
     * ```ts
     * const selectedCountriesControl = new FormControl();
     * ```
     *
     * ```
     * <select [compareWith]="compareFn"  [formControl]="selectedCountriesControl">
     *     <option *ngFor="let country of countries" [ngValue]="country">
     *         {{country.name}}
     *     </option>
     * </select>
     *
     * compareFn(c1: Country, c2: Country): boolean {
     *     return c1 && c2 ? c1.id === c2.id : c1 === c2;
     * }
     * ```
     *
     * **Note:** We listen to the 'change' event because 'input' events aren't fired
     * for selects in Firefox and IE:
     * https://bugzilla.mozilla.org/show_bug.cgi?id=1024350
     * https://developer.microsoft.com/en-us/microsoft-edge/platform/issues/4660045/
     *
     * \@ngModule ReactiveFormsModule
     * \@ngModule FormsModule
     * \@publicApi
     */


    var SelectControlValueAccessor = /*#__PURE__*/function () {
      /**
       * @param {?} _renderer
       * @param {?} _elementRef
       */
      function SelectControlValueAccessor(_renderer, _elementRef) {
        _classCallCheck(this, SelectControlValueAccessor);

        this._renderer = _renderer;
        this._elementRef = _elementRef;
        /**
         * \@internal
         */

        this._optionMap = new Map();
        /**
         * \@internal
         */

        this._idCounter = 0;
        /**
         * \@description
         * The registered callback function called when a change event occurs on the input element.
         */

        this.onChange =
        /**
        * @param {?} _
        * @return {?}
        */
        function (_) {};
        /**
         * \@description
         * The registered callback function called when a blur event occurs on the input element.
         */


        this.onTouched =
        /**
        * @return {?}
        */
        function () {};

        this._compareWith = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵlooseIdentical"];
      }
      /**
       * \@description
       * Tracks the option comparison algorithm for tracking identities when
       * checking for changes.
       * @param {?} fn
       * @return {?}
       */


      _createClass(SelectControlValueAccessor, [{
        key: "writeValue",

        /**
         * Sets the "value" property on the input element. The "selectedIndex"
         * property is also set if an ID is provided on the option element.
         *
         * @param {?} value The checked value
         * @return {?}
         */
        value: function writeValue(value) {
          this.value = value;
          /** @type {?} */

          var id = this._getOptionId(value);

          if (id == null) {
            this._renderer.setProperty(this._elementRef.nativeElement, 'selectedIndex', -1);
          }
          /** @type {?} */


          var valueString = _buildValueString(id, value);

          this._renderer.setProperty(this._elementRef.nativeElement, 'value', valueString);
        }
        /**
         * \@description
         * Registers a function called when the control value changes.
         *
         * @param {?} fn The callback function
         * @return {?}
         */

      }, {
        key: "registerOnChange",
        value: function registerOnChange(fn) {
          var _this4 = this;

          this.onChange =
          /**
          * @param {?} valueString
          * @return {?}
          */
          function (valueString) {
            _this4.value = _this4._getOptionValue(valueString);
            fn(_this4.value);
          };
        }
        /**
         * \@description
         * Registers a function called when the control is touched.
         *
         * @param {?} fn The callback function
         * @return {?}
         */

      }, {
        key: "registerOnTouched",
        value: function registerOnTouched(fn) {
          this.onTouched = fn;
        }
        /**
         * Sets the "disabled" property on the select input element.
         *
         * @param {?} isDisabled The disabled value
         * @return {?}
         */

      }, {
        key: "setDisabledState",
        value: function setDisabledState(isDisabled) {
          this._renderer.setProperty(this._elementRef.nativeElement, 'disabled', isDisabled);
        }
        /**
         * \@internal
         * @return {?}
         */

      }, {
        key: "_registerOption",
        value: function _registerOption() {
          return (this._idCounter++).toString();
        }
        /**
         * \@internal
         * @param {?} value
         * @return {?}
         */

      }, {
        key: "_getOptionId",
        value: function _getOptionId(value) {
          for (var _i = 0, _Array$from = Array.from(this._optionMap.keys()); _i < _Array$from.length; _i++) {
            var id = _Array$from[_i];
            if (this._compareWith(this._optionMap.get(id), value)) return id;
          }

          return null;
        }
        /**
         * \@internal
         * @param {?} valueString
         * @return {?}
         */

      }, {
        key: "_getOptionValue",
        value: function _getOptionValue(valueString) {
          /** @type {?} */
          var id = _extractId(valueString);

          return this._optionMap.has(id) ? this._optionMap.get(id) : valueString;
        }
      }, {
        key: "compareWith",
        set: function set(fn) {
          if (typeof fn !== 'function') {
            throw new Error("compareWith must be a function, but received ".concat(JSON.stringify(fn)));
          }

          this._compareWith = fn;
        }
      }]);

      return SelectControlValueAccessor;
    }();

    SelectControlValueAccessor.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
      args: [{
        selector: 'select:not([multiple])[formControlName],select:not([multiple])[formControl],select:not([multiple])[ngModel]',
        host: {
          '(change)': 'onChange($event.target.value)',
          '(blur)': 'onTouched()'
        },
        providers: [SELECT_VALUE_ACCESSOR]
      }]
    }];
    /** @nocollapse */

    SelectControlValueAccessor.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
      }];
    };

    SelectControlValueAccessor.propDecorators = {
      compareWith: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }]
    };

    if (false) {}
    /**
     * \@description
     * Marks `<option>` as dynamic, so Angular can be notified when options change.
     *
     * @see `SelectControlValueAccessor`
     *
     * \@ngModule ReactiveFormsModule
     * \@ngModule FormsModule
     * \@publicApi
     */


    var NgSelectOption = /*#__PURE__*/function () {
      /**
       * @param {?} _element
       * @param {?} _renderer
       * @param {?} _select
       */
      function NgSelectOption(_element, _renderer, _select) {
        _classCallCheck(this, NgSelectOption);

        this._element = _element;
        this._renderer = _renderer;
        this._select = _select;
        if (this._select) this.id = this._select._registerOption();
      }
      /**
       * \@description
       * Tracks the value bound to the option element. Unlike the value binding,
       * ngValue supports binding to objects.
       * @param {?} value
       * @return {?}
       */


      _createClass(NgSelectOption, [{
        key: "_setElementValue",

        /**
         * \@internal
         * @param {?} value
         * @return {?}
         */
        value: function _setElementValue(value) {
          this._renderer.setProperty(this._element.nativeElement, 'value', value);
        }
        /**
         * \@description
         * Lifecycle method called before the directive's instance is destroyed. For internal use only.
         * @return {?}
         */

      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          if (this._select) {
            this._select._optionMap["delete"](this.id);

            this._select.writeValue(this._select.value);
          }
        }
      }, {
        key: "ngValue",
        set: function set(value) {
          if (this._select == null) return;

          this._select._optionMap.set(this.id, value);

          this._setElementValue(_buildValueString(this.id, value));

          this._select.writeValue(this._select.value);
        }
        /**
         * \@description
         * Tracks simple string values bound to the option element.
         * For objects, use the `ngValue` input binding.
         * @param {?} value
         * @return {?}
         */

      }, {
        key: "value",
        set: function set(value) {
          this._setElementValue(value);

          if (this._select) this._select.writeValue(this._select.value);
        }
      }]);

      return NgSelectOption;
    }();

    NgSelectOption.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
      args: [{
        selector: 'option'
      }]
    }];
    /** @nocollapse */

    NgSelectOption.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]
      }, {
        type: SelectControlValueAccessor,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Host"]
        }]
      }];
    };

    NgSelectOption.propDecorators = {
      ngValue: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
        args: ['ngValue']
      }],
      value: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
        args: ['value']
      }]
    };

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /** @type {?} */


    var SELECT_MULTIPLE_VALUE_ACCESSOR = {
      provide: NG_VALUE_ACCESSOR,
      useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(
      /**
      * @return {?}
      */
      function () {
        return SelectMultipleControlValueAccessor;
      }),
      multi: true
    };
    /**
     * @param {?} id
     * @param {?} value
     * @return {?}
     */

    function _buildValueString$1(id, value) {
      if (id == null) return "".concat(value);
      if (typeof value === 'string') value = "'".concat(value, "'");
      if (value && typeof value === 'object') value = 'Object';
      return "".concat(id, ": ").concat(value).slice(0, 50);
    }
    /**
     * @param {?} valueString
     * @return {?}
     */


    function _extractId$1(valueString) {
      return valueString.split(':')[0];
    }
    /**
     * Mock interface for HTML Options
     * @record
     */


    function HTMLOption() {}

    if (false) {}
    /**
     * Mock interface for HTMLCollection
     * @abstract
     */


    var HTMLCollection = function HTMLCollection() {
      _classCallCheck(this, HTMLCollection);
    };

    if (false) {}
    /**
     * \@description
     * The `ControlValueAccessor` for writing multi-select control values and listening to multi-select control
     * changes. The value accessor is used by the `FormControlDirective`, `FormControlName`, and `NgModel`
     * directives.
     *
     * @see `SelectControlValueAccessor`
     *
     * \@usageNotes
     *
     * ### Using a multi-select control
     *
     * The follow example shows you how to use a multi-select control with a reactive form.
     *
     * ```ts
     * const countryControl = new FormControl();
     * ```
     *
     * ```
     * <select multiple name="countries" [formControl]="countryControl">
     *   <option *ngFor="let country of countries" [ngValue]="country">
     *     {{ country.name }}
     *   </option>
     * </select>
     * ```
     *
     * ### Customizing option selection
     *
     * To customize the default option comparison algorithm, `<select>` supports `compareWith` input.
     * See the `SelectControlValueAccessor` for usage.
     *
     * \@ngModule ReactiveFormsModule
     * \@ngModule FormsModule
     * \@publicApi
     */


    var SelectMultipleControlValueAccessor = /*#__PURE__*/function () {
      /**
       * @param {?} _renderer
       * @param {?} _elementRef
       */
      function SelectMultipleControlValueAccessor(_renderer, _elementRef) {
        _classCallCheck(this, SelectMultipleControlValueAccessor);

        this._renderer = _renderer;
        this._elementRef = _elementRef;
        /**
         * \@internal
         */

        this._optionMap = new Map();
        /**
         * \@internal
         */

        this._idCounter = 0;
        /**
         * \@description
         * The registered callback function called when a change event occurs on the input element.
         */

        this.onChange =
        /**
        * @param {?} _
        * @return {?}
        */
        function (_) {};
        /**
         * \@description
         * The registered callback function called when a blur event occurs on the input element.
         */


        this.onTouched =
        /**
        * @return {?}
        */
        function () {};

        this._compareWith = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵlooseIdentical"];
      }
      /**
       * \@description
       * Tracks the option comparison algorithm for tracking identities when
       * checking for changes.
       * @param {?} fn
       * @return {?}
       */


      _createClass(SelectMultipleControlValueAccessor, [{
        key: "writeValue",

        /**
         * \@description
         * Sets the "value" property on one or of more
         * of the select's options.
         *
         * @param {?} value The value
         * @return {?}
         */
        value: function writeValue(value) {
          var _this5 = this;

          this.value = value;
          /** @type {?} */

          var optionSelectedStateSetter;

          if (Array.isArray(value)) {
            // convert values to ids

            /** @type {?} */
            var ids = value.map(
            /**
            * @param {?} v
            * @return {?}
            */
            function (v) {
              return _this5._getOptionId(v);
            });

            optionSelectedStateSetter =
            /**
            * @param {?} opt
            * @param {?} o
            * @return {?}
            */
            function optionSelectedStateSetter(opt, o) {
              opt._setSelected(ids.indexOf(o.toString()) > -1);
            };
          } else {
            optionSelectedStateSetter =
            /**
            * @param {?} opt
            * @param {?} o
            * @return {?}
            */
            function optionSelectedStateSetter(opt, o) {
              opt._setSelected(false);
            };
          }

          this._optionMap.forEach(optionSelectedStateSetter);
        }
        /**
         * \@description
         * Registers a function called when the control value changes
         * and writes an array of the selected options.
         *
         * @param {?} fn The callback function
         * @return {?}
         */

      }, {
        key: "registerOnChange",
        value: function registerOnChange(fn) {
          var _this6 = this;

          this.onChange =
          /**
          * @param {?} _
          * @return {?}
          */
          function (_) {
            /** @type {?} */
            var selected = [];

            if (_.hasOwnProperty('selectedOptions')) {
              /** @type {?} */
              var options = _.selectedOptions;

              for (var i = 0; i < options.length; i++) {
                /** @type {?} */
                var opt = options.item(i);
                /** @type {?} */

                var val = _this6._getOptionValue(opt.value);

                selected.push(val);
              }
            } // Degrade on IE
            else {
                /** @type {?} */
                var _options =
                /** @type {?} */
                _.options;

                for (var _i2 = 0; _i2 < _options.length; _i2++) {
                  /** @type {?} */
                  var _opt = _options.item(_i2);

                  if (_opt.selected) {
                    /** @type {?} */
                    var _val = _this6._getOptionValue(_opt.value);

                    selected.push(_val);
                  }
                }
              }

            _this6.value = selected;
            fn(selected);
          };
        }
        /**
         * \@description
         * Registers a function called when the control is touched.
         *
         * @param {?} fn The callback function
         * @return {?}
         */

      }, {
        key: "registerOnTouched",
        value: function registerOnTouched(fn) {
          this.onTouched = fn;
        }
        /**
         * Sets the "disabled" property on the select input element.
         *
         * @param {?} isDisabled The disabled value
         * @return {?}
         */

      }, {
        key: "setDisabledState",
        value: function setDisabledState(isDisabled) {
          this._renderer.setProperty(this._elementRef.nativeElement, 'disabled', isDisabled);
        }
        /**
         * \@internal
         * @param {?} value
         * @return {?}
         */

      }, {
        key: "_registerOption",
        value: function _registerOption(value) {
          /** @type {?} */
          var id = (this._idCounter++).toString();

          this._optionMap.set(id, value);

          return id;
        }
        /**
         * \@internal
         * @param {?} value
         * @return {?}
         */

      }, {
        key: "_getOptionId",
        value: function _getOptionId(value) {
          for (var _i3 = 0, _Array$from2 = Array.from(this._optionMap.keys()); _i3 < _Array$from2.length; _i3++) {
            var id = _Array$from2[_i3];
            if (this._compareWith(
            /** @type {?} */
            this._optionMap.get(id)._value, value)) return id;
          }

          return null;
        }
        /**
         * \@internal
         * @param {?} valueString
         * @return {?}
         */

      }, {
        key: "_getOptionValue",
        value: function _getOptionValue(valueString) {
          /** @type {?} */
          var id = _extractId$1(valueString);

          return this._optionMap.has(id) ?
          /** @type {?} */
          this._optionMap.get(id)._value : valueString;
        }
      }, {
        key: "compareWith",
        set: function set(fn) {
          if (typeof fn !== 'function') {
            throw new Error("compareWith must be a function, but received ".concat(JSON.stringify(fn)));
          }

          this._compareWith = fn;
        }
      }]);

      return SelectMultipleControlValueAccessor;
    }();

    SelectMultipleControlValueAccessor.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
      args: [{
        selector: 'select[multiple][formControlName],select[multiple][formControl],select[multiple][ngModel]',
        host: {
          '(change)': 'onChange($event.target)',
          '(blur)': 'onTouched()'
        },
        providers: [SELECT_MULTIPLE_VALUE_ACCESSOR]
      }]
    }];
    /** @nocollapse */

    SelectMultipleControlValueAccessor.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
      }];
    };

    SelectMultipleControlValueAccessor.propDecorators = {
      compareWith: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }]
    };

    if (false) {}
    /**
     * \@description
     * Marks `<option>` as dynamic, so Angular can be notified when options change.
     *
     * @see `SelectMultipleControlValueAccessor`
     *
     * \@ngModule ReactiveFormsModule
     * \@ngModule FormsModule
     * \@publicApi
     */


    var ɵNgSelectMultipleOption = /*#__PURE__*/function () {
      /**
       * @param {?} _element
       * @param {?} _renderer
       * @param {?} _select
       */
      function ɵNgSelectMultipleOption(_element, _renderer, _select) {
        _classCallCheck(this, ɵNgSelectMultipleOption);

        this._element = _element;
        this._renderer = _renderer;
        this._select = _select;

        if (this._select) {
          this.id = this._select._registerOption(this);
        }
      }
      /**
       * \@description
       * Tracks the value bound to the option element. Unlike the value binding,
       * ngValue supports binding to objects.
       * @param {?} value
       * @return {?}
       */


      _createClass(ɵNgSelectMultipleOption, [{
        key: "_setElementValue",

        /**
         * \@internal
         * @param {?} value
         * @return {?}
         */
        value: function _setElementValue(value) {
          this._renderer.setProperty(this._element.nativeElement, 'value', value);
        }
        /**
         * \@internal
         * @param {?} selected
         * @return {?}
         */

      }, {
        key: "_setSelected",
        value: function _setSelected(selected) {
          this._renderer.setProperty(this._element.nativeElement, 'selected', selected);
        }
        /**
         * \@description
         * Lifecycle method called before the directive's instance is destroyed. For internal use only.
         * @return {?}
         */

      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          if (this._select) {
            this._select._optionMap["delete"](this.id);

            this._select.writeValue(this._select.value);
          }
        }
      }, {
        key: "ngValue",
        set: function set(value) {
          if (this._select == null) return;
          this._value = value;

          this._setElementValue(_buildValueString$1(this.id, value));

          this._select.writeValue(this._select.value);
        }
        /**
         * \@description
         * Tracks simple string values bound to the option element.
         * For objects, use the `ngValue` input binding.
         * @param {?} value
         * @return {?}
         */

      }, {
        key: "value",
        set: function set(value) {
          if (this._select) {
            this._value = value;

            this._setElementValue(_buildValueString$1(this.id, value));

            this._select.writeValue(this._select.value);
          } else {
            this._setElementValue(value);
          }
        }
      }]);

      return ɵNgSelectMultipleOption;
    }();

    ɵNgSelectMultipleOption.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
      args: [{
        selector: 'option'
      }]
    }];
    /** @nocollapse */

    ɵNgSelectMultipleOption.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]
      }, {
        type: SelectMultipleControlValueAccessor,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Host"]
        }]
      }];
    };

    ɵNgSelectMultipleOption.propDecorators = {
      ngValue: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
        args: ['ngValue']
      }],
      value: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
        args: ['value']
      }]
    };

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @param {?} name
     * @param {?} parent
     * @return {?}
     */


    function controlPath(name, parent) {
      return [].concat(_toConsumableArray(
      /** @type {?} */
      parent.path), [name]);
    }
    /**
     * @param {?} control
     * @param {?} dir
     * @return {?}
     */


    function setUpControl(control, dir) {
      if (!control) _throwError(dir, 'Cannot find control with');
      if (!dir.valueAccessor) _throwError(dir, 'No value accessor for form control with');
      control.validator = Validators.compose([
      /** @type {?} */
      control.validator, dir.validator]);
      control.asyncValidator = Validators.composeAsync([
      /** @type {?} */
      control.asyncValidator, dir.asyncValidator]);

      /** @type {?} */
      dir.valueAccessor.writeValue(control.value);
      setUpViewChangePipeline(control, dir);
      setUpModelChangePipeline(control, dir);
      setUpBlurPipeline(control, dir);

      if (
      /** @type {?} */
      dir.valueAccessor.setDisabledState) {
        control.registerOnDisabledChange(
        /**
        * @param {?} isDisabled
        * @return {?}
        */
        function (isDisabled) {
          /** @type {?} */

          /** @type {?} */
          dir.valueAccessor.setDisabledState(isDisabled);
        });
      } // re-run validation when validator binding changes, e.g. minlength=3 -> minlength=4


      dir._rawValidators.forEach(
      /**
      * @param {?} validator
      * @return {?}
      */
      function (validator) {
        if (
        /** @type {?} */
        validator.registerOnValidatorChange)
        /** @type {?} */

        /** @type {?} */
        validator.registerOnValidatorChange(
        /**
        * @return {?}
        */
        function () {
          return control.updateValueAndValidity();
        });
      });

      dir._rawAsyncValidators.forEach(
      /**
      * @param {?} validator
      * @return {?}
      */
      function (validator) {
        if (
        /** @type {?} */
        validator.registerOnValidatorChange)
        /** @type {?} */

        /** @type {?} */
        validator.registerOnValidatorChange(
        /**
        * @return {?}
        */
        function () {
          return control.updateValueAndValidity();
        });
      });
    }
    /**
     * @param {?} control
     * @param {?} dir
     * @return {?}
     */


    function cleanUpControl(control, dir) {
      /** @type {?} */
      dir.valueAccessor.registerOnChange(
      /**
      * @return {?}
      */
      function () {
        return _noControlError(dir);
      });

      /** @type {?} */
      dir.valueAccessor.registerOnTouched(
      /**
      * @return {?}
      */
      function () {
        return _noControlError(dir);
      });

      dir._rawValidators.forEach(
      /**
      * @param {?} validator
      * @return {?}
      */
      function (validator) {
        if (validator.registerOnValidatorChange) {
          validator.registerOnValidatorChange(null);
        }
      });

      dir._rawAsyncValidators.forEach(
      /**
      * @param {?} validator
      * @return {?}
      */
      function (validator) {
        if (validator.registerOnValidatorChange) {
          validator.registerOnValidatorChange(null);
        }
      });

      if (control) control._clearChangeFns();
    }
    /**
     * @param {?} control
     * @param {?} dir
     * @return {?}
     */


    function setUpViewChangePipeline(control, dir) {
      /** @type {?} */
      dir.valueAccessor.registerOnChange(
      /**
      * @param {?} newValue
      * @return {?}
      */
      function (newValue) {
        control._pendingValue = newValue;
        control._pendingChange = true;
        control._pendingDirty = true;
        if (control.updateOn === 'change') updateControl(control, dir);
      });
    }
    /**
     * @param {?} control
     * @param {?} dir
     * @return {?}
     */


    function setUpBlurPipeline(control, dir) {
      /** @type {?} */
      dir.valueAccessor.registerOnTouched(
      /**
      * @return {?}
      */
      function () {
        control._pendingTouched = true;
        if (control.updateOn === 'blur' && control._pendingChange) updateControl(control, dir);
        if (control.updateOn !== 'submit') control.markAsTouched();
      });
    }
    /**
     * @param {?} control
     * @param {?} dir
     * @return {?}
     */


    function updateControl(control, dir) {
      if (control._pendingDirty) control.markAsDirty();
      control.setValue(control._pendingValue, {
        emitModelToViewChange: false
      });
      dir.viewToModelUpdate(control._pendingValue);
      control._pendingChange = false;
    }
    /**
     * @param {?} control
     * @param {?} dir
     * @return {?}
     */


    function setUpModelChangePipeline(control, dir) {
      control.registerOnChange(
      /**
      * @param {?} newValue
      * @param {?} emitModelEvent
      * @return {?}
      */
      function (newValue, emitModelEvent) {
        // control -> view

        /** @type {?} */
        dir.valueAccessor.writeValue(newValue); // control -> ngModel

        if (emitModelEvent) dir.viewToModelUpdate(newValue);
      });
    }
    /**
     * @param {?} control
     * @param {?} dir
     * @return {?}
     */


    function setUpFormContainer(control, dir) {
      if (control == null) _throwError(dir, 'Cannot find control with');
      control.validator = Validators.compose([control.validator, dir.validator]);
      control.asyncValidator = Validators.composeAsync([control.asyncValidator, dir.asyncValidator]);
    }
    /**
     * @param {?} dir
     * @return {?}
     */


    function _noControlError(dir) {
      return _throwError(dir, 'There is no FormControl instance attached to form control element with');
    }
    /**
     * @param {?} dir
     * @param {?} message
     * @return {?}
     */


    function _throwError(dir, message) {
      /** @type {?} */
      var messageEnd;

      if (
      /** @type {?} */
      dir.path.length > 1) {
        messageEnd = "path: '".concat(
        /** @type {?} */
        dir.path.join(' -> '), "'");
      } else if (
      /** @type {?} */
      dir.path[0]) {
        messageEnd = "name: '".concat(dir.path, "'");
      } else {
        messageEnd = 'unspecified name attribute';
      }

      throw new Error("".concat(message, " ").concat(messageEnd));
    }
    /**
     * @param {?} validators
     * @return {?}
     */


    function composeValidators(validators) {
      return validators != null ? Validators.compose(validators.map(normalizeValidator)) : null;
    }
    /**
     * @param {?} validators
     * @return {?}
     */


    function composeAsyncValidators(validators) {
      return validators != null ? Validators.composeAsync(validators.map(normalizeAsyncValidator)) : null;
    }
    /**
     * @param {?} changes
     * @param {?} viewModel
     * @return {?}
     */


    function isPropertyUpdated(changes, viewModel) {
      if (!changes.hasOwnProperty('model')) return false;
      /** @type {?} */

      var change = changes['model'];
      if (change.isFirstChange()) return true;
      return !Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵlooseIdentical"])(viewModel, change.currentValue);
    }
    /** @type {?} */


    var BUILTIN_ACCESSORS = [CheckboxControlValueAccessor, RangeValueAccessor, NumberValueAccessor, SelectControlValueAccessor, SelectMultipleControlValueAccessor, RadioControlValueAccessor];
    /**
     * @param {?} valueAccessor
     * @return {?}
     */

    function isBuiltInAccessor(valueAccessor) {
      return BUILTIN_ACCESSORS.some(
      /**
      * @param {?} a
      * @return {?}
      */
      function (a) {
        return valueAccessor.constructor === a;
      });
    }
    /**
     * @param {?} form
     * @param {?} directives
     * @return {?}
     */


    function syncPendingControls(form, directives) {
      form._syncPendingControls();

      directives.forEach(
      /**
      * @param {?} dir
      * @return {?}
      */
      function (dir) {
        /** @type {?} */
        var control =
        /** @type {?} */
        dir.control;

        if (control.updateOn === 'submit' && control._pendingChange) {
          dir.viewToModelUpdate(control._pendingValue);
          control._pendingChange = false;
        }
      });
    } // TODO: vsavkin remove it once https://github.com/angular/angular/issues/3011 is implemented

    /**
     * @param {?} dir
     * @param {?} valueAccessors
     * @return {?}
     */


    function selectValueAccessor(dir, valueAccessors) {
      if (!valueAccessors) return null;
      if (!Array.isArray(valueAccessors)) _throwError(dir, 'Value accessor was not provided as an array for form control with');
      /** @type {?} */

      var defaultAccessor = undefined;
      /** @type {?} */

      var builtinAccessor = undefined;
      /** @type {?} */

      var customAccessor = undefined;
      valueAccessors.forEach(
      /**
      * @param {?} v
      * @return {?}
      */
      function (v) {
        if (v.constructor === DefaultValueAccessor) {
          defaultAccessor = v;
        } else if (isBuiltInAccessor(v)) {
          if (builtinAccessor) _throwError(dir, 'More than one built-in value accessor matches form control with');
          builtinAccessor = v;
        } else {
          if (customAccessor) _throwError(dir, 'More than one custom value accessor matches form control with');
          customAccessor = v;
        }
      });
      if (customAccessor) return customAccessor;
      if (builtinAccessor) return builtinAccessor;
      if (defaultAccessor) return defaultAccessor;

      _throwError(dir, 'No valid value accessor for form control with');

      return null;
    }
    /**
     * @template T
     * @param {?} list
     * @param {?} el
     * @return {?}
     */


    function removeDir(list, el) {
      /** @type {?} */
      var index = list.indexOf(el);
      if (index > -1) list.splice(index, 1);
    } // TODO(kara): remove after deprecation period

    /**
     * @param {?} name
     * @param {?} type
     * @param {?} instance
     * @param {?} warningConfig
     * @return {?}
     */


    function _ngModelWarning(name, type, instance, warningConfig) {
      if (!Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["isDevMode"])() || warningConfig === 'never') return;

      if ((warningConfig === null || warningConfig === 'once') && !type._ngModelWarningSentOnce || warningConfig === 'always' && !instance._ngModelWarningSent) {
        ReactiveErrors.ngModelWarning(name);
        type._ngModelWarningSentOnce = true;
        instance._ngModelWarningSent = true;
      }
    }
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Reports that a FormControl is valid, meaning that no errors exist in the input value.
     *
     * @see `status`
     * @type {?}
     */


    var VALID = 'VALID';
    /**
     * Reports that a FormControl is invalid, meaning that an error exists in the input value.
     *
     * @see `status`
     * @type {?}
     */

    var INVALID = 'INVALID';
    /**
     * Reports that a FormControl is pending, meaning that that async validation is occurring and
     * errors are not yet available for the input value.
     *
     * @see `markAsPending`
     * @see `status`
     * @type {?}
     */

    var PENDING = 'PENDING';
    /**
     * Reports that a FormControl is disabled, meaning that the control is exempt from ancestor
     * calculations of validity or value.
     *
     * @see `markAsDisabled`
     * @see `status`
     * @type {?}
     */

    var DISABLED = 'DISABLED';
    /**
     * @param {?} control
     * @param {?} path
     * @param {?} delimiter
     * @return {?}
     */

    function _find(control, path, delimiter) {
      if (path == null) return null;

      if (!(path instanceof Array)) {
        path =
        /** @type {?} */
        path.split(delimiter);
      }

      if (path instanceof Array && path.length === 0) return null;
      return (
        /** @type {?} */
        path.reduce(
        /**
        * @param {?} v
        * @param {?} name
        * @return {?}
        */
        function (v, name) {
          if (v instanceof FormGroup) {
            return v.controls.hasOwnProperty(
            /** @type {?} */
            name) ? v.controls[name] : null;
          }

          if (v instanceof FormArray) {
            return v.at(
            /** @type {?} */
            name) || null;
          }

          return null;
        }, control)
      );
    }
    /**
     * @param {?=} validatorOrOpts
     * @return {?}
     */


    function coerceToValidator(validatorOrOpts) {
      /** @type {?} */
      var validator =
      /** @type {?} */
      isOptionsObj(validatorOrOpts) ?
      /** @type {?} */
      validatorOrOpts.validators : validatorOrOpts;
      return Array.isArray(validator) ? composeValidators(validator) : validator || null;
    }
    /**
     * @param {?=} asyncValidator
     * @param {?=} validatorOrOpts
     * @return {?}
     */


    function coerceToAsyncValidator(asyncValidator, validatorOrOpts) {
      /** @type {?} */
      var origAsyncValidator =
      /** @type {?} */
      isOptionsObj(validatorOrOpts) ?
      /** @type {?} */
      validatorOrOpts.asyncValidators : asyncValidator;
      return Array.isArray(origAsyncValidator) ? composeAsyncValidators(origAsyncValidator) : origAsyncValidator || null;
    }
    /**
     * Interface for options provided to an `AbstractControl`.
     *
     * \@publicApi
     * @record
     */


    function AbstractControlOptions() {}

    if (false) {}
    /**
     * @param {?=} validatorOrOpts
     * @return {?}
     */


    function isOptionsObj(validatorOrOpts) {
      return validatorOrOpts != null && !Array.isArray(validatorOrOpts) && typeof validatorOrOpts === 'object';
    }
    /**
     * This is the base class for `FormControl`, `FormGroup`, and `FormArray`.
     *
     * It provides some of the shared behavior that all controls and groups of controls have, like
     * running validators, calculating status, and resetting state. It also defines the properties
     * that are shared between all sub-classes, like `value`, `valid`, and `dirty`. It shouldn't be
     * instantiated directly.
     *
     * @see [Forms Guide](/guide/forms)
     * @see [Reactive Forms Guide](/guide/reactive-forms)
     * @see [Dynamic Forms Guide](/guide/dynamic-form)
     *
     * \@publicApi
     * @abstract
     */


    var AbstractControl = /*#__PURE__*/function () {
      /**
       * Initialize the AbstractControl instance.
       *
       * @param {?} validator The function that determines the synchronous validity of this control.
       * @param {?} asyncValidator The function that determines the asynchronous validity of this
       * control.
       */
      function AbstractControl(validator, asyncValidator) {
        _classCallCheck(this, AbstractControl);

        this.validator = validator;
        this.asyncValidator = asyncValidator;
        /**
         * \@internal
         */

        this._onCollectionChange =
        /**
        * @return {?}
        */
        function () {};
        /**
         * A control is `pristine` if the user has not yet changed
         * the value in the UI.
         *
         * @return True if the user has not yet changed the value in the UI; compare `dirty`.
         * Programmatic changes to a control's value do not mark it dirty.
         */


        this.pristine = true;
        /**
         * True if the control is marked as `touched`.
         *
         * A control is marked `touched` once the user has triggered
         * a `blur` event on it.
         */

        this.touched = false;
        /**
         * \@internal
         */

        this._onDisabledChange = [];
      }
      /**
       * The parent control.
       * @return {?}
       */


      _createClass(AbstractControl, [{
        key: "setValidators",

        /**
         * Sets the synchronous validators that are active on this control.  Calling
         * this overwrites any existing sync validators.
         *
         * When you add or remove a validator at run time, you must call
         * `updateValueAndValidity()` for the new validation to take effect.
         *
         * @param {?} newValidator
         * @return {?}
         */
        value: function setValidators(newValidator) {
          this.validator = coerceToValidator(newValidator);
        }
        /**
         * Sets the async validators that are active on this control. Calling this
         * overwrites any existing async validators.
         *
         * When you add or remove a validator at run time, you must call
         * `updateValueAndValidity()` for the new validation to take effect.
         *
         * @param {?} newValidator
         * @return {?}
         */

      }, {
        key: "setAsyncValidators",
        value: function setAsyncValidators(newValidator) {
          this.asyncValidator = coerceToAsyncValidator(newValidator);
        }
        /**
         * Empties out the sync validator list.
         *
         * When you add or remove a validator at run time, you must call
         * `updateValueAndValidity()` for the new validation to take effect.
         *
         * @return {?}
         */

      }, {
        key: "clearValidators",
        value: function clearValidators() {
          this.validator = null;
        }
        /**
         * Empties out the async validator list.
         *
         * When you add or remove a validator at run time, you must call
         * `updateValueAndValidity()` for the new validation to take effect.
         *
         * @return {?}
         */

      }, {
        key: "clearAsyncValidators",
        value: function clearAsyncValidators() {
          this.asyncValidator = null;
        }
        /**
         * Marks the control as `touched`. A control is touched by focus and
         * blur events that do not change the value.
         *
         * @see `markAsUntouched()` / `markAsDirty()` / `markAsPristine()`
         *
         * @param {?=} opts Configuration options that determine how the control propagates changes
         * and emits events events after marking is applied.
         * * `onlySelf`: When true, mark only this control. When false or not supplied,
         * marks all direct ancestors. Default is false.
         * @return {?}
         */

      }, {
        key: "markAsTouched",
        value: function markAsTouched() {
          var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

          /** @type {?} */
          this.touched = true;

          if (this._parent && !opts.onlySelf) {
            this._parent.markAsTouched(opts);
          }
        }
        /**
         * Marks the control and all its descendant controls as `touched`.
         * @see `markAsTouched()`
         * @return {?}
         */

      }, {
        key: "markAllAsTouched",
        value: function markAllAsTouched() {
          this.markAsTouched({
            onlySelf: true
          });

          this._forEachChild(
          /**
          * @param {?} control
          * @return {?}
          */
          function (control) {
            return control.markAllAsTouched();
          });
        }
        /**
         * Marks the control as `untouched`.
         *
         * If the control has any children, also marks all children as `untouched`
         * and recalculates the `touched` status of all parent controls.
         *
         * @see `markAsTouched()` / `markAsDirty()` / `markAsPristine()`
         *
         * @param {?=} opts Configuration options that determine how the control propagates changes
         * and emits events after the marking is applied.
         * * `onlySelf`: When true, mark only this control. When false or not supplied,
         * marks all direct ancestors. Default is false.
         * @return {?}
         */

      }, {
        key: "markAsUntouched",
        value: function markAsUntouched() {
          var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

          /** @type {?} */
          this.touched = false;
          this._pendingTouched = false;

          this._forEachChild(
          /**
          * @param {?} control
          * @return {?}
          */
          function (control) {
            control.markAsUntouched({
              onlySelf: true
            });
          });

          if (this._parent && !opts.onlySelf) {
            this._parent._updateTouched(opts);
          }
        }
        /**
         * Marks the control as `dirty`. A control becomes dirty when
         * the control's value is changed through the UI; compare `markAsTouched`.
         *
         * @see `markAsTouched()` / `markAsUntouched()` / `markAsPristine()`
         *
         * @param {?=} opts Configuration options that determine how the control propagates changes
         * and emits events after marking is applied.
         * * `onlySelf`: When true, mark only this control. When false or not supplied,
         * marks all direct ancestors. Default is false.
         * @return {?}
         */

      }, {
        key: "markAsDirty",
        value: function markAsDirty() {
          var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

          /** @type {?} */
          this.pristine = false;

          if (this._parent && !opts.onlySelf) {
            this._parent.markAsDirty(opts);
          }
        }
        /**
         * Marks the control as `pristine`.
         *
         * If the control has any children, marks all children as `pristine`,
         * and recalculates the `pristine` status of all parent
         * controls.
         *
         * @see `markAsTouched()` / `markAsUntouched()` / `markAsDirty()`
         *
         * @param {?=} opts Configuration options that determine how the control emits events after
         * marking is applied.
         * * `onlySelf`: When true, mark only this control. When false or not supplied,
         * marks all direct ancestors. Default is false..
         * @return {?}
         */

      }, {
        key: "markAsPristine",
        value: function markAsPristine() {
          var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

          /** @type {?} */
          this.pristine = true;
          this._pendingDirty = false;

          this._forEachChild(
          /**
          * @param {?} control
          * @return {?}
          */
          function (control) {
            control.markAsPristine({
              onlySelf: true
            });
          });

          if (this._parent && !opts.onlySelf) {
            this._parent._updatePristine(opts);
          }
        }
        /**
         * Marks the control as `pending`.
         *
         * A control is pending while the control performs async validation.
         *
         * @see {\@link AbstractControl.status}
         *
         * @param {?=} opts Configuration options that determine how the control propagates changes and
         * emits events after marking is applied.
         * * `onlySelf`: When true, mark only this control. When false or not supplied,
         * marks all direct ancestors. Default is false..
         * * `emitEvent`: When true or not supplied (the default), the `statusChanges`
         * observable emits an event with the latest status the control is marked pending.
         * When false, no events are emitted.
         *
         * @return {?}
         */

      }, {
        key: "markAsPending",
        value: function markAsPending() {
          var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

          /** @type {?} */
          this.status = PENDING;

          if (opts.emitEvent !== false) {
            /** @type {?} */
            this.statusChanges.emit(this.status);
          }

          if (this._parent && !opts.onlySelf) {
            this._parent.markAsPending(opts);
          }
        }
        /**
         * Disables the control. This means the control is exempt from validation checks and
         * excluded from the aggregate value of any parent. Its status is `DISABLED`.
         *
         * If the control has children, all children are also disabled.
         *
         * @see {\@link AbstractControl.status}
         *
         * @param {?=} opts Configuration options that determine how the control propagates
         * changes and emits events after the control is disabled.
         * * `onlySelf`: When true, mark only this control. When false or not supplied,
         * marks all direct ancestors. Default is false..
         * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
         * `valueChanges`
         * observables emit events with the latest status and value when the control is disabled.
         * When false, no events are emitted.
         * @return {?}
         */

      }, {
        key: "disable",
        value: function disable() {
          var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

          // If parent has been marked artificially dirty we don't want to re-calculate the
          // parent's dirtiness based on the children.

          /** @type {?} */
          var skipPristineCheck = this._parentMarkedDirty(opts.onlySelf);

          /** @type {?} */
          this.status = DISABLED;

          /** @type {?} */
          this.errors = null;

          this._forEachChild(
          /**
          * @param {?} control
          * @return {?}
          */
          function (control) {
            control.disable(Object.assign({}, opts, {
              onlySelf: true
            }));
          });

          this._updateValue();

          if (opts.emitEvent !== false) {
            /** @type {?} */
            this.valueChanges.emit(this.value);

            /** @type {?} */
            this.statusChanges.emit(this.status);
          }

          this._updateAncestors(Object.assign({}, opts, {
            skipPristineCheck: skipPristineCheck
          }));

          this._onDisabledChange.forEach(
          /**
          * @param {?} changeFn
          * @return {?}
          */
          function (changeFn) {
            return changeFn(true);
          });
        }
        /**
         * Enables the control. This means the control is included in validation checks and
         * the aggregate value of its parent. Its status recalculates based on its value and
         * its validators.
         *
         * By default, if the control has children, all children are enabled.
         *
         * @see {\@link AbstractControl.status}
         *
         * @param {?=} opts Configure options that control how the control propagates changes and
         * emits events when marked as untouched
         * * `onlySelf`: When true, mark only this control. When false or not supplied,
         * marks all direct ancestors. Default is false..
         * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
         * `valueChanges`
         * observables emit events with the latest status and value when the control is enabled.
         * When false, no events are emitted.
         * @return {?}
         */

      }, {
        key: "enable",
        value: function enable() {
          var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

          // If parent has been marked artificially dirty we don't want to re-calculate the
          // parent's dirtiness based on the children.

          /** @type {?} */
          var skipPristineCheck = this._parentMarkedDirty(opts.onlySelf);

          /** @type {?} */
          this.status = VALID;

          this._forEachChild(
          /**
          * @param {?} control
          * @return {?}
          */
          function (control) {
            control.enable(Object.assign({}, opts, {
              onlySelf: true
            }));
          });

          this.updateValueAndValidity({
            onlySelf: true,
            emitEvent: opts.emitEvent
          });

          this._updateAncestors(Object.assign({}, opts, {
            skipPristineCheck: skipPristineCheck
          }));

          this._onDisabledChange.forEach(
          /**
          * @param {?} changeFn
          * @return {?}
          */
          function (changeFn) {
            return changeFn(false);
          });
        }
        /**
         * @private
         * @param {?} opts
         * @return {?}
         */

      }, {
        key: "_updateAncestors",
        value: function _updateAncestors(opts) {
          if (this._parent && !opts.onlySelf) {
            this._parent.updateValueAndValidity(opts);

            if (!opts.skipPristineCheck) {
              this._parent._updatePristine();
            }

            this._parent._updateTouched();
          }
        }
        /**
         * @param {?} parent Sets the parent of the control
         * @return {?}
         */

      }, {
        key: "setParent",
        value: function setParent(parent) {
          this._parent = parent;
        }
        /**
         * Recalculates the value and validation status of the control.
         *
         * By default, it also updates the value and validity of its ancestors.
         *
         * @param {?=} opts Configuration options determine how the control propagates changes and emits events
         * after updates and validity checks are applied.
         * * `onlySelf`: When true, only update this control. When false or not supplied,
         * update all direct ancestors. Default is false..
         * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
         * `valueChanges`
         * observables emit events with the latest status and value when the control is updated.
         * When false, no events are emitted.
         * @return {?}
         */

      }, {
        key: "updateValueAndValidity",
        value: function updateValueAndValidity() {
          var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

          this._setInitialStatus();

          this._updateValue();

          if (this.enabled) {
            this._cancelExistingSubscription();

            /** @type {?} */
            this.errors = this._runValidator();

            /** @type {?} */
            this.status = this._calculateStatus();

            if (this.status === VALID || this.status === PENDING) {
              this._runAsyncValidator(opts.emitEvent);
            }
          }

          if (opts.emitEvent !== false) {
            /** @type {?} */
            this.valueChanges.emit(this.value);

            /** @type {?} */
            this.statusChanges.emit(this.status);
          }

          if (this._parent && !opts.onlySelf) {
            this._parent.updateValueAndValidity(opts);
          }
        }
        /**
         * \@internal
         * @param {?=} opts
         * @return {?}
         */

      }, {
        key: "_updateTreeValidity",
        value: function _updateTreeValidity() {
          var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
            emitEvent: true
          };

          this._forEachChild(
          /**
          * @param {?} ctrl
          * @return {?}
          */
          function (ctrl) {
            return ctrl._updateTreeValidity(opts);
          });

          this.updateValueAndValidity({
            onlySelf: true,
            emitEvent: opts.emitEvent
          });
        }
        /**
         * @private
         * @return {?}
         */

      }, {
        key: "_setInitialStatus",
        value: function _setInitialStatus() {
          /** @type {?} */
          this.status = this._allControlsDisabled() ? DISABLED : VALID;
        }
        /**
         * @private
         * @return {?}
         */

      }, {
        key: "_runValidator",
        value: function _runValidator() {
          return this.validator ? this.validator(this) : null;
        }
        /**
         * @private
         * @param {?=} emitEvent
         * @return {?}
         */

      }, {
        key: "_runAsyncValidator",
        value: function _runAsyncValidator(emitEvent) {
          var _this7 = this;

          if (this.asyncValidator) {
            /** @type {?} */
            this.status = PENDING;
            /** @type {?} */

            var obs = toObservable(this.asyncValidator(this));
            this._asyncValidationSubscription = obs.subscribe(
            /**
            * @param {?} errors
            * @return {?}
            */
            function (errors) {
              return _this7.setErrors(errors, {
                emitEvent: emitEvent
              });
            });
          }
        }
        /**
         * @private
         * @return {?}
         */

      }, {
        key: "_cancelExistingSubscription",
        value: function _cancelExistingSubscription() {
          if (this._asyncValidationSubscription) {
            this._asyncValidationSubscription.unsubscribe();
          }
        }
        /**
         * Sets errors on a form control when running validations manually, rather than automatically.
         *
         * Calling `setErrors` also updates the validity of the parent control.
         *
         * \@usageNotes
         * ### Manually set the errors for a control
         *
         * ```
         * const login = new FormControl('someLogin');
         * login.setErrors({
         *   notUnique: true
         * });
         *
         * expect(login.valid).toEqual(false);
         * expect(login.errors).toEqual({ notUnique: true });
         *
         * login.setValue('someOtherLogin');
         *
         * expect(login.valid).toEqual(true);
         * ```
         * @param {?} errors
         * @param {?=} opts
         * @return {?}
         */

      }, {
        key: "setErrors",
        value: function setErrors(errors) {
          var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

          /** @type {?} */
          this.errors = errors;

          this._updateControlsErrors(opts.emitEvent !== false);
        }
        /**
         * Retrieves a child control given the control's name or path.
         *
         * \@usageNotes
         * ### Retrieve a nested control
         *
         * For example, to get a `name` control nested within a `person` sub-group:
         *
         * * `this.form.get('person.name');`
         *
         * -OR-
         *
         * * `this.form.get(['person', 'name']);`
         * @param {?} path A dot-delimited string or array of string/number values that define the path to the
         * control.
         *
         * @return {?}
         */

      }, {
        key: "get",
        value: function get(path) {
          return _find(this, path, '.');
        }
        /**
         * \@description
         * Reports error data for the control with the given path.
         *
         * \@usageNotes
         * For example, for the following `FormGroup`:
         *
         * ```
         * form = new FormGroup({
         *   address: new FormGroup({ street: new FormControl() })
         * });
         * ```
         *
         * The path to the 'street' control from the root form would be 'address' -> 'street'.
         *
         * It can be provided to this method in one of two formats:
         *
         * 1. An array of string control names, e.g. `['address', 'street']`
         * 1. A period-delimited list of control names in one string, e.g. `'address.street'`
         *
         * @param {?} errorCode The code of the error to check
         * @param {?=} path A list of control names that designates how to move from the current control
         * to the control that should be queried for errors.
         *
         * @return {?} error data for that particular error. If the control or error is not present,
         * null is returned.
         */

      }, {
        key: "getError",
        value: function getError(errorCode, path) {
          /** @type {?} */
          var control = path ? this.get(path) : this;
          return control && control.errors ? control.errors[errorCode] : null;
        }
        /**
         * \@description
         * Reports whether the control with the given path has the error specified.
         *
         * \@usageNotes
         * For example, for the following `FormGroup`:
         *
         * ```
         * form = new FormGroup({
         *   address: new FormGroup({ street: new FormControl() })
         * });
         * ```
         *
         * The path to the 'street' control from the root form would be 'address' -> 'street'.
         *
         * It can be provided to this method in one of two formats:
         *
         * 1. An array of string control names, e.g. `['address', 'street']`
         * 1. A period-delimited list of control names in one string, e.g. `'address.street'`
         *
         * If no path is given, this method checks for the error on the current control.
         *
         * @param {?} errorCode The code of the error to check
         * @param {?=} path A list of control names that designates how to move from the current control
         * to the control that should be queried for errors.
         *
         * @return {?} whether the given error is present in the control at the given path.
         *
         * If the control is not present, false is returned.
         */

      }, {
        key: "hasError",
        value: function hasError(errorCode, path) {
          return !!this.getError(errorCode, path);
        }
        /**
         * Retrieves the top-level ancestor of this control.
         * @return {?}
         */

      }, {
        key: "_updateControlsErrors",

        /**
         * \@internal
         * @param {?} emitEvent
         * @return {?}
         */
        value: function _updateControlsErrors(emitEvent) {
          /** @type {?} */
          this.status = this._calculateStatus();

          if (emitEvent) {
            /** @type {?} */
            this.statusChanges.emit(this.status);
          }

          if (this._parent) {
            this._parent._updateControlsErrors(emitEvent);
          }
        }
        /**
         * \@internal
         * @return {?}
         */

      }, {
        key: "_initObservables",
        value: function _initObservables() {
          /** @type {?} */
          this.valueChanges = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();

          /** @type {?} */
          this.statusChanges = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        }
        /**
         * @private
         * @return {?}
         */

      }, {
        key: "_calculateStatus",
        value: function _calculateStatus() {
          if (this._allControlsDisabled()) return DISABLED;
          if (this.errors) return INVALID;
          if (this._anyControlsHaveStatus(PENDING)) return PENDING;
          if (this._anyControlsHaveStatus(INVALID)) return INVALID;
          return VALID;
        }
        /**
         * \@internal
         * @param {?} status
         * @return {?}
         */

      }, {
        key: "_anyControlsHaveStatus",
        value: function _anyControlsHaveStatus(status) {
          return this._anyControls(
          /**
          * @param {?} control
          * @return {?}
          */
          function (control) {
            return control.status === status;
          });
        }
        /**
         * \@internal
         * @return {?}
         */

      }, {
        key: "_anyControlsDirty",
        value: function _anyControlsDirty() {
          return this._anyControls(
          /**
          * @param {?} control
          * @return {?}
          */
          function (control) {
            return control.dirty;
          });
        }
        /**
         * \@internal
         * @return {?}
         */

      }, {
        key: "_anyControlsTouched",
        value: function _anyControlsTouched() {
          return this._anyControls(
          /**
          * @param {?} control
          * @return {?}
          */
          function (control) {
            return control.touched;
          });
        }
        /**
         * \@internal
         * @param {?=} opts
         * @return {?}
         */

      }, {
        key: "_updatePristine",
        value: function _updatePristine() {
          var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

          /** @type {?} */
          this.pristine = !this._anyControlsDirty();

          if (this._parent && !opts.onlySelf) {
            this._parent._updatePristine(opts);
          }
        }
        /**
         * \@internal
         * @param {?=} opts
         * @return {?}
         */

      }, {
        key: "_updateTouched",
        value: function _updateTouched() {
          var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

          /** @type {?} */
          this.touched = this._anyControlsTouched();

          if (this._parent && !opts.onlySelf) {
            this._parent._updateTouched(opts);
          }
        }
        /**
         * \@internal
         * @param {?} formState
         * @return {?}
         */

      }, {
        key: "_isBoxedValue",
        value: function _isBoxedValue(formState) {
          return typeof formState === 'object' && formState !== null && Object.keys(formState).length === 2 && 'value' in formState && 'disabled' in formState;
        }
        /**
         * \@internal
         * @param {?} fn
         * @return {?}
         */

      }, {
        key: "_registerOnCollectionChange",
        value: function _registerOnCollectionChange(fn) {
          this._onCollectionChange = fn;
        }
        /**
         * \@internal
         * @param {?=} opts
         * @return {?}
         */

      }, {
        key: "_setUpdateStrategy",
        value: function _setUpdateStrategy(opts) {
          if (isOptionsObj(opts) &&
          /** @type {?} */
          opts.updateOn != null) {
            this._updateOn =
            /** @type {?} */

            /** @type {?} */
            opts.updateOn;
          }
        }
        /**
         * Check to see if parent has been marked artificially dirty.
         *
         * \@internal
         * @private
         * @param {?=} onlySelf
         * @return {?}
         */

      }, {
        key: "_parentMarkedDirty",
        value: function _parentMarkedDirty(onlySelf) {
          /** @type {?} */
          var parentDirty = this._parent && this._parent.dirty;
          return !onlySelf && parentDirty && !this._parent._anyControlsDirty();
        }
      }, {
        key: "parent",
        get: function get() {
          return this._parent;
        }
        /**
         * A control is `valid` when its `status` is `VALID`.
         *
         * @see {\@link AbstractControl.status}
         *
         * @return {?} True if the control has passed all of its validation tests,
         * false otherwise.
         */

      }, {
        key: "valid",
        get: function get() {
          return this.status === VALID;
        }
        /**
         * A control is `invalid` when its `status` is `INVALID`.
         *
         * @see {\@link AbstractControl.status}
         *
         * @return {?} True if this control has failed one or more of its validation checks,
         * false otherwise.
         */

      }, {
        key: "invalid",
        get: function get() {
          return this.status === INVALID;
        }
        /**
         * A control is `pending` when its `status` is `PENDING`.
         *
         * @see {\@link AbstractControl.status}
         *
         * @return {?} True if this control is in the process of conducting a validation check,
         * false otherwise.
         */

      }, {
        key: "pending",
        get: function get() {
          return this.status == PENDING;
        }
        /**
         * A control is `disabled` when its `status` is `DISABLED`.
         *
         * Disabled controls are exempt from validation checks and
         * are not included in the aggregate value of their ancestor
         * controls.
         *
         * @see {\@link AbstractControl.status}
         *
         * @return {?} True if the control is disabled, false otherwise.
         */

      }, {
        key: "disabled",
        get: function get() {
          return this.status === DISABLED;
        }
        /**
         * A control is `enabled` as long as its `status` is not `DISABLED`.
         *
         * @see {\@link AbstractControl.status}
         *
         * @return {?} True if the control has any status other than 'DISABLED',
         * false if the status is 'DISABLED'.
         *
         */

      }, {
        key: "enabled",
        get: function get() {
          return this.status !== DISABLED;
        }
        /**
         * A control is `dirty` if the user has changed the value
         * in the UI.
         *
         * @return {?} True if the user has changed the value of this control in the UI; compare `pristine`.
         * Programmatic changes to a control's value do not mark it dirty.
         */

      }, {
        key: "dirty",
        get: function get() {
          return !this.pristine;
        }
        /**
         * True if the control has not been marked as touched
         *
         * A control is `untouched` if the user has not yet triggered
         * a `blur` event on it.
         * @return {?}
         */

      }, {
        key: "untouched",
        get: function get() {
          return !this.touched;
        }
        /**
         * Reports the update strategy of the `AbstractControl` (meaning
         * the event on which the control updates itself).
         * Possible values: `'change'` | `'blur'` | `'submit'`
         * Default value: `'change'`
         * @return {?}
         */

      }, {
        key: "updateOn",
        get: function get() {
          return this._updateOn ? this._updateOn : this.parent ? this.parent.updateOn : 'change';
        }
      }, {
        key: "root",
        get: function get() {
          /** @type {?} */
          var x = this;

          while (x._parent) {
            x = x._parent;
          }

          return x;
        }
      }]);

      return AbstractControl;
    }();

    if (false) {}
    /**
     * Tracks the value and validation status of an individual form control.
     *
     * This is one of the three fundamental building blocks of Angular forms, along with
     * `FormGroup` and `FormArray`. It extends the `AbstractControl` class that
     * implements most of the base functionality for accessing the value, validation status,
     * user interactions and events.
     *
     * @see `AbstractControl`
     * @see [Reactive Forms Guide](guide/reactive-forms)
     * @see [Usage Notes](#usage-notes)
     *
     * \@usageNotes
     *
     * ### Initializing Form Controls
     *
     * Instantiate a `FormControl`, with an initial value.
     *
     * ```ts
     * const control = new FormControl('some value');
     * console.log(control.value);     // 'some value'
     * ```
     *
     * The following example initializes the control with a form state object. The `value`
     * and `disabled` keys are required in this case.
     *
     * ```ts
     * const control = new FormControl({ value: 'n/a', disabled: true });
     * console.log(control.value);     // 'n/a'
     * console.log(control.status);    // 'DISABLED'
     * ```
     *
     * The following example initializes the control with a sync validator.
     *
     * ```ts
     * const control = new FormControl('', Validators.required);
     * console.log(control.value);      // ''
     * console.log(control.status);     // 'INVALID'
     * ```
     *
     * The following example initializes the control using an options object.
     *
     * ```ts
     * const control = new FormControl('', {
     *    validators: Validators.required,
     *    asyncValidators: myAsyncValidator
     * });
     * ```
     *
     * ### Configure the control to update on a blur event
     *
     * Set the `updateOn` option to `'blur'` to update on the blur `event`.
     *
     * ```ts
     * const control = new FormControl('', { updateOn: 'blur' });
     * ```
     *
     * ### Configure the control to update on a submit event
     *
     * Set the `updateOn` option to `'submit'` to update on a submit `event`.
     *
     * ```ts
     * const control = new FormControl('', { updateOn: 'submit' });
     * ```
     *
     * ### Reset the control back to an initial value
     *
     * You reset to a specific form state by passing through a standalone
     * value or a form state object that contains both a value and a disabled state
     * (these are the only two properties that cannot be calculated).
     *
     * ```ts
     * const control = new FormControl('Nancy');
     *
     * console.log(control.value); // 'Nancy'
     *
     * control.reset('Drew');
     *
     * console.log(control.value); // 'Drew'
     * ```
     *
     * ### Reset the control back to an initial value and disabled
     *
     * ```
     * const control = new FormControl('Nancy');
     *
     * console.log(control.value); // 'Nancy'
     * console.log(control.status); // 'VALID'
     *
     * control.reset({ value: 'Drew', disabled: true });
     *
     * console.log(control.value); // 'Drew'
     * console.log(control.status); // 'DISABLED'
     * ```
     *
     * \@publicApi
     */


    var FormControl = /*#__PURE__*/function (_AbstractControl) {
      _inherits(FormControl, _AbstractControl);

      var _super5 = _createSuper(FormControl);

      /**
       * Creates a new `FormControl` instance.
       *
       * @param {?=} formState Initializes the control with an initial value,
       * or an object that defines the initial value and disabled state.
       *
       * @param {?=} validatorOrOpts A synchronous validator function, or an array of
       * such functions, or an `AbstractControlOptions` object that contains validation functions
       * and a validation trigger.
       *
       * @param {?=} asyncValidator A single async validator or array of async validator functions
       *
       */
      function FormControl() {
        var _this8;

        var formState = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
        var validatorOrOpts = arguments.length > 1 ? arguments[1] : undefined;
        var asyncValidator = arguments.length > 2 ? arguments[2] : undefined;

        _classCallCheck(this, FormControl);

        _this8 = _super5.call(this, coerceToValidator(validatorOrOpts), coerceToAsyncValidator(asyncValidator, validatorOrOpts));
        /**
         * \@internal
         */

        _this8._onChange = [];

        _this8._applyFormState(formState);

        _this8._setUpdateStrategy(validatorOrOpts);

        _this8.updateValueAndValidity({
          onlySelf: true,
          emitEvent: false
        });

        _this8._initObservables();

        return _this8;
      }
      /**
       * Sets a new value for the form control.
       *
       * @param {?} value The new value for the control.
       * @param {?=} options Configuration options that determine how the control propagates changes
       * and emits events when the value changes.
       * The configuration options are passed to the {\@link AbstractControl#updateValueAndValidity
       * updateValueAndValidity} method.
       *
       * * `onlySelf`: When true, each change only affects this control, and not its parent. Default is
       * false.
       * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
       * `valueChanges`
       * observables emit events with the latest status and value when the control value is updated.
       * When false, no events are emitted.
       * * `emitModelToViewChange`: When true or not supplied  (the default), each change triggers an
       * `onChange` event to
       * update the view.
       * * `emitViewToModelChange`: When true or not supplied (the default), each change triggers an
       * `ngModelChange`
       * event to update the model.
       *
       * @return {?}
       */


      _createClass(FormControl, [{
        key: "setValue",
        value: function setValue(value) {
          var _this9 = this;

          var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

          /** @type {?} */
          this.value = this._pendingValue = value;

          if (this._onChange.length && options.emitModelToViewChange !== false) {
            this._onChange.forEach(
            /**
            * @param {?} changeFn
            * @return {?}
            */
            function (changeFn) {
              return changeFn(_this9.value, options.emitViewToModelChange !== false);
            });
          }

          this.updateValueAndValidity(options);
        }
        /**
         * Patches the value of a control.
         *
         * This function is functionally the same as {\@link FormControl#setValue setValue} at this level.
         * It exists for symmetry with {\@link FormGroup#patchValue patchValue} on `FormGroups` and
         * `FormArrays`, where it does behave differently.
         *
         * @see `setValue` for options
         * @param {?} value
         * @param {?=} options
         * @return {?}
         */

      }, {
        key: "patchValue",
        value: function patchValue(value) {
          var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
          this.setValue(value, options);
        }
        /**
         * Resets the form control, marking it `pristine` and `untouched`, and setting
         * the value to null.
         *
         * @param {?=} formState Resets the control with an initial value,
         * or an object that defines the initial value and disabled state.
         *
         * @param {?=} options Configuration options that determine how the control propagates changes
         * and emits events after the value changes.
         *
         * * `onlySelf`: When true, each change only affects this control, and not its parent. Default is
         * false.
         * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
         * `valueChanges`
         * observables emit events with the latest status and value when the control is reset.
         * When false, no events are emitted.
         *
         * @return {?}
         */

      }, {
        key: "reset",
        value: function reset() {
          var formState = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
          var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

          this._applyFormState(formState);

          this.markAsPristine(options);
          this.markAsUntouched(options);
          this.setValue(this.value, options);
          this._pendingChange = false;
        }
        /**
         * \@internal
         * @return {?}
         */

      }, {
        key: "_updateValue",
        value: function _updateValue() {}
        /**
         * \@internal
         * @param {?} condition
         * @return {?}
         */

      }, {
        key: "_anyControls",
        value: function _anyControls(condition) {
          return false;
        }
        /**
         * \@internal
         * @return {?}
         */

      }, {
        key: "_allControlsDisabled",
        value: function _allControlsDisabled() {
          return this.disabled;
        }
        /**
         * Register a listener for change events.
         *
         * @param {?} fn The method that is called when the value changes
         * @return {?}
         */

      }, {
        key: "registerOnChange",
        value: function registerOnChange(fn) {
          this._onChange.push(fn);
        }
        /**
         * \@internal
         * @return {?}
         */

      }, {
        key: "_clearChangeFns",
        value: function _clearChangeFns() {
          this._onChange = [];
          this._onDisabledChange = [];

          this._onCollectionChange =
          /**
          * @return {?}
          */
          function () {};
        }
        /**
         * Register a listener for disabled events.
         *
         * @param {?} fn The method that is called when the disabled status changes.
         * @return {?}
         */

      }, {
        key: "registerOnDisabledChange",
        value: function registerOnDisabledChange(fn) {
          this._onDisabledChange.push(fn);
        }
        /**
         * \@internal
         * @param {?} cb
         * @return {?}
         */

      }, {
        key: "_forEachChild",
        value: function _forEachChild(cb) {}
        /**
         * \@internal
         * @return {?}
         */

      }, {
        key: "_syncPendingControls",
        value: function _syncPendingControls() {
          if (this.updateOn === 'submit') {
            if (this._pendingDirty) this.markAsDirty();
            if (this._pendingTouched) this.markAsTouched();

            if (this._pendingChange) {
              this.setValue(this._pendingValue, {
                onlySelf: true,
                emitModelToViewChange: false
              });
              return true;
            }
          }

          return false;
        }
        /**
         * @private
         * @param {?} formState
         * @return {?}
         */

      }, {
        key: "_applyFormState",
        value: function _applyFormState(formState) {
          if (this._isBoxedValue(formState)) {
            /** @type {?} */
            this.value = this._pendingValue = formState.value;
            formState.disabled ? this.disable({
              onlySelf: true,
              emitEvent: false
            }) : this.enable({
              onlySelf: true,
              emitEvent: false
            });
          } else {
            /** @type {?} */
            this.value = this._pendingValue = formState;
          }
        }
      }]);

      return FormControl;
    }(AbstractControl);

    if (false) {}
    /**
     * Tracks the value and validity state of a group of `FormControl` instances.
     *
     * A `FormGroup` aggregates the values of each child `FormControl` into one object,
     * with each control name as the key.  It calculates its status by reducing the status values
     * of its children. For example, if one of the controls in a group is invalid, the entire
     * group becomes invalid.
     *
     * `FormGroup` is one of the three fundamental building blocks used to define forms in Angular,
     * along with `FormControl` and `FormArray`.
     *
     * When instantiating a `FormGroup`, pass in a collection of child controls as the first
     * argument. The key for each child registers the name for the control.
     *
     * \@usageNotes
     *
     * ### Create a form group with 2 controls
     *
     * ```
     * const form = new FormGroup({
     *   first: new FormControl('Nancy', Validators.minLength(2)),
     *   last: new FormControl('Drew'),
     * });
     *
     * console.log(form.value);   // {first: 'Nancy', last; 'Drew'}
     * console.log(form.status);  // 'VALID'
     * ```
     *
     * ### Create a form group with a group-level validator
     *
     * You include group-level validators as the second arg, or group-level async
     * validators as the third arg. These come in handy when you want to perform validation
     * that considers the value of more than one child control.
     *
     * ```
     * const form = new FormGroup({
     *   password: new FormControl('', Validators.minLength(2)),
     *   passwordConfirm: new FormControl('', Validators.minLength(2)),
     * }, passwordMatchValidator);
     *
     *
     * function passwordMatchValidator(g: FormGroup) {
     *    return g.get('password').value === g.get('passwordConfirm').value
     *       ? null : {'mismatch': true};
     * }
     * ```
     *
     * Like `FormControl` instances, you choose to pass in
     * validators and async validators as part of an options object.
     *
     * ```
     * const form = new FormGroup({
     *   password: new FormControl('')
     *   passwordConfirm: new FormControl('')
     * }, { validators: passwordMatchValidator, asyncValidators: otherValidator });
     * ```
     *
     * ### Set the updateOn property for all controls in a form group
     *
     * The options object is used to set a default value for each child
     * control's `updateOn` property. If you set `updateOn` to `'blur'` at the
     * group level, all child controls default to 'blur', unless the child
     * has explicitly specified a different `updateOn` value.
     *
     * ```ts
     * const c = new FormGroup({
     *   one: new FormControl()
     * }, { updateOn: 'blur' });
     * ```
     *
     * \@publicApi
     */


    var FormGroup = /*#__PURE__*/function (_AbstractControl2) {
      _inherits(FormGroup, _AbstractControl2);

      var _super6 = _createSuper(FormGroup);

      /**
       * Creates a new `FormGroup` instance.
       *
       * @param {?} controls A collection of child controls. The key for each child is the name
       * under which it is registered.
       *
       * @param {?=} validatorOrOpts A synchronous validator function, or an array of
       * such functions, or an `AbstractControlOptions` object that contains validation functions
       * and a validation trigger.
       *
       * @param {?=} asyncValidator A single async validator or array of async validator functions
       *
       */
      function FormGroup(controls, validatorOrOpts, asyncValidator) {
        var _this10;

        _classCallCheck(this, FormGroup);

        _this10 = _super6.call(this, coerceToValidator(validatorOrOpts), coerceToAsyncValidator(asyncValidator, validatorOrOpts));
        _this10.controls = controls;

        _this10._initObservables();

        _this10._setUpdateStrategy(validatorOrOpts);

        _this10._setUpControls();

        _this10.updateValueAndValidity({
          onlySelf: true,
          emitEvent: false
        });

        return _this10;
      }
      /**
       * Registers a control with the group's list of controls.
       *
       * This method does not update the value or validity of the control.
       * Use {\@link FormGroup#addControl addControl} instead.
       *
       * @param {?} name The control name to register in the collection
       * @param {?} control Provides the control for the given name
       * @return {?}
       */


      _createClass(FormGroup, [{
        key: "registerControl",
        value: function registerControl(name, control) {
          if (this.controls[name]) return this.controls[name];
          this.controls[name] = control;
          control.setParent(this);

          control._registerOnCollectionChange(this._onCollectionChange);

          return control;
        }
        /**
         * Add a control to this group.
         *
         * This method also updates the value and validity of the control.
         *
         * @param {?} name The control name to add to the collection
         * @param {?} control Provides the control for the given name
         * @return {?}
         */

      }, {
        key: "addControl",
        value: function addControl(name, control) {
          this.registerControl(name, control);
          this.updateValueAndValidity();

          this._onCollectionChange();
        }
        /**
         * Remove a control from this group.
         *
         * @param {?} name The control name to remove from the collection
         * @return {?}
         */

      }, {
        key: "removeControl",
        value: function removeControl(name) {
          if (this.controls[name]) this.controls[name]._registerOnCollectionChange(
          /**
          * @return {?}
          */
          function () {});
          delete this.controls[name];
          this.updateValueAndValidity();

          this._onCollectionChange();
        }
        /**
         * Replace an existing control.
         *
         * @param {?} name The control name to replace in the collection
         * @param {?} control Provides the control for the given name
         * @return {?}
         */

      }, {
        key: "setControl",
        value: function setControl(name, control) {
          if (this.controls[name]) this.controls[name]._registerOnCollectionChange(
          /**
          * @return {?}
          */
          function () {});
          delete this.controls[name];
          if (control) this.registerControl(name, control);
          this.updateValueAndValidity();

          this._onCollectionChange();
        }
        /**
         * Check whether there is an enabled control with the given name in the group.
         *
         * Reports false for disabled controls. If you'd like to check for existence in the group
         * only, use {\@link AbstractControl#get get} instead.
         *
         * @param {?} controlName The control name to check for existence in the collection
         *
         * @return {?} false for disabled controls, true otherwise.
         */

      }, {
        key: "contains",
        value: function contains(controlName) {
          return this.controls.hasOwnProperty(controlName) && this.controls[controlName].enabled;
        }
        /**
         * Sets the value of the `FormGroup`. It accepts an object that matches
         * the structure of the group, with control names as keys.
         *
         * \@usageNotes
         * ### Set the complete value for the form group
         *
         * ```
         * const form = new FormGroup({
         *   first: new FormControl(),
         *   last: new FormControl()
         * });
         *
         * console.log(form.value);   // {first: null, last: null}
         *
         * form.setValue({first: 'Nancy', last: 'Drew'});
         * console.log(form.value);   // {first: 'Nancy', last: 'Drew'}
         * ```
         *
         * @throws When strict checks fail, such as setting the value of a control
         * that doesn't exist or if you exclude a value of a control that does exist.
         *
         * @param {?} value The new value for the control that matches the structure of the group.
         * @param {?=} options Configuration options that determine how the control propagates changes
         * and emits events after the value changes.
         * The configuration options are passed to the {\@link AbstractControl#updateValueAndValidity
         * updateValueAndValidity} method.
         *
         * * `onlySelf`: When true, each change only affects this control, and not its parent. Default is
         * false.
         * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
         * `valueChanges`
         * observables emit events with the latest status and value when the control value is updated.
         * When false, no events are emitted.
         * @return {?}
         */

      }, {
        key: "setValue",
        value: function setValue(value) {
          var _this11 = this;

          var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

          this._checkAllValuesPresent(value);

          Object.keys(value).forEach(
          /**
          * @param {?} name
          * @return {?}
          */
          function (name) {
            _this11._throwIfControlMissing(name);

            _this11.controls[name].setValue(value[name], {
              onlySelf: true,
              emitEvent: options.emitEvent
            });
          });
          this.updateValueAndValidity(options);
        }
        /**
         * Patches the value of the `FormGroup`. It accepts an object with control
         * names as keys, and does its best to match the values to the correct controls
         * in the group.
         *
         * It accepts both super-sets and sub-sets of the group without throwing an error.
         *
         * \@usageNotes
         * ### Patch the value for a form group
         *
         * ```
         * const form = new FormGroup({
         *    first: new FormControl(),
         *    last: new FormControl()
         * });
         * console.log(form.value);   // {first: null, last: null}
         *
         * form.patchValue({first: 'Nancy'});
         * console.log(form.value);   // {first: 'Nancy', last: null}
         * ```
         *
         * @param {?} value The object that matches the structure of the group.
         * @param {?=} options Configuration options that determine how the control propagates changes and
         * emits events after the value is patched.
         * * `onlySelf`: When true, each change only affects this control and not its parent. Default is
         * true.
         * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
         * `valueChanges`
         * observables emit events with the latest status and value when the control value is updated.
         * When false, no events are emitted.
         * The configuration options are passed to the {\@link AbstractControl#updateValueAndValidity
         * updateValueAndValidity} method.
         * @return {?}
         */

      }, {
        key: "patchValue",
        value: function patchValue(value) {
          var _this12 = this;

          var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
          Object.keys(value).forEach(
          /**
          * @param {?} name
          * @return {?}
          */
          function (name) {
            if (_this12.controls[name]) {
              _this12.controls[name].patchValue(value[name], {
                onlySelf: true,
                emitEvent: options.emitEvent
              });
            }
          });
          this.updateValueAndValidity(options);
        }
        /**
         * Resets the `FormGroup`, marks all descendants are marked `pristine` and `untouched`, and
         * the value of all descendants to null.
         *
         * You reset to a specific form state by passing in a map of states
         * that matches the structure of your form, with control names as keys. The state
         * is a standalone value or a form state object with both a value and a disabled
         * status.
         *
         * \@usageNotes
         *
         * ### Reset the form group values
         *
         * ```ts
         * const form = new FormGroup({
         *   first: new FormControl('first name'),
         *   last: new FormControl('last name')
         * });
         *
         * console.log(form.value);  // {first: 'first name', last: 'last name'}
         *
         * form.reset({ first: 'name', last: 'last name' });
         *
         * console.log(form.value);  // {first: 'name', last: 'last name'}
         * ```
         *
         * ### Reset the form group values and disabled status
         *
         * ```
         * const form = new FormGroup({
         *   first: new FormControl('first name'),
         *   last: new FormControl('last name')
         * });
         *
         * form.reset({
         *   first: {value: 'name', disabled: true},
         *   last: 'last'
         * });
         *
         * console.log(this.form.value);  // {first: 'name', last: 'last name'}
         * console.log(this.form.get('first').status);  // 'DISABLED'
         * ```
         * @param {?=} value Resets the control with an initial value,
         * or an object that defines the initial value and disabled state.
         *
         * @param {?=} options Configuration options that determine how the control propagates changes
         * and emits events when the group is reset.
         * * `onlySelf`: When true, each change only affects this control, and not its parent. Default is
         * false.
         * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
         * `valueChanges`
         * observables emit events with the latest status and value when the control is reset.
         * When false, no events are emitted.
         * The configuration options are passed to the {\@link AbstractControl#updateValueAndValidity
         * updateValueAndValidity} method.
         *
         * @return {?}
         */

      }, {
        key: "reset",
        value: function reset() {
          var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
          var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

          this._forEachChild(
          /**
          * @param {?} control
          * @param {?} name
          * @return {?}
          */
          function (control, name) {
            control.reset(value[name], {
              onlySelf: true,
              emitEvent: options.emitEvent
            });
          });

          this._updatePristine(options);

          this._updateTouched(options);

          this.updateValueAndValidity(options);
        }
        /**
         * The aggregate value of the `FormGroup`, including any disabled controls.
         *
         * Retrieves all values regardless of disabled status.
         * The `value` property is the best way to get the value of the group, because
         * it excludes disabled controls in the `FormGroup`.
         * @return {?}
         */

      }, {
        key: "getRawValue",
        value: function getRawValue() {
          return this._reduceChildren({},
          /**
          * @param {?} acc
          * @param {?} control
          * @param {?} name
          * @return {?}
          */
          function (acc, control, name) {
            acc[name] = control instanceof FormControl ? control.value :
            /** @type {?} */
            control.getRawValue();
            return acc;
          });
        }
        /**
         * \@internal
         * @return {?}
         */

      }, {
        key: "_syncPendingControls",
        value: function _syncPendingControls() {
          /** @type {?} */
          var subtreeUpdated = this._reduceChildren(false,
          /**
          * @param {?} updated
          * @param {?} child
          * @return {?}
          */
          function (updated, child) {
            return child._syncPendingControls() ? true : updated;
          });

          if (subtreeUpdated) this.updateValueAndValidity({
            onlySelf: true
          });
          return subtreeUpdated;
        }
        /**
         * \@internal
         * @param {?} name
         * @return {?}
         */

      }, {
        key: "_throwIfControlMissing",
        value: function _throwIfControlMissing(name) {
          if (!Object.keys(this.controls).length) {
            throw new Error("\n        There are no form controls registered with this group yet.  If you're using ngModel,\n        you may want to check next tick (e.g. use setTimeout).\n      ");
          }

          if (!this.controls[name]) {
            throw new Error("Cannot find form control with name: ".concat(name, "."));
          }
        }
        /**
         * \@internal
         * @param {?} cb
         * @return {?}
         */

      }, {
        key: "_forEachChild",
        value: function _forEachChild(cb) {
          var _this13 = this;

          Object.keys(this.controls).forEach(
          /**
          * @param {?} k
          * @return {?}
          */
          function (k) {
            return cb(_this13.controls[k], k);
          });
        }
        /**
         * \@internal
         * @return {?}
         */

      }, {
        key: "_setUpControls",
        value: function _setUpControls() {
          var _this14 = this;

          this._forEachChild(
          /**
          * @param {?} control
          * @return {?}
          */
          function (control) {
            control.setParent(_this14);

            control._registerOnCollectionChange(_this14._onCollectionChange);
          });
        }
        /**
         * \@internal
         * @return {?}
         */

      }, {
        key: "_updateValue",
        value: function _updateValue() {
          /** @type {?} */
          this.value = this._reduceValue();
        }
        /**
         * \@internal
         * @param {?} condition
         * @return {?}
         */

      }, {
        key: "_anyControls",
        value: function _anyControls(condition) {
          var _this15 = this;

          /** @type {?} */
          var res = false;

          this._forEachChild(
          /**
          * @param {?} control
          * @param {?} name
          * @return {?}
          */
          function (control, name) {
            res = res || _this15.contains(name) && condition(control);
          });

          return res;
        }
        /**
         * \@internal
         * @return {?}
         */

      }, {
        key: "_reduceValue",
        value: function _reduceValue() {
          var _this16 = this;

          return this._reduceChildren({},
          /**
          * @param {?} acc
          * @param {?} control
          * @param {?} name
          * @return {?}
          */
          function (acc, control, name) {
            if (control.enabled || _this16.disabled) {
              acc[name] = control.value;
            }

            return acc;
          });
        }
        /**
         * \@internal
         * @param {?} initValue
         * @param {?} fn
         * @return {?}
         */

      }, {
        key: "_reduceChildren",
        value: function _reduceChildren(initValue, fn) {
          /** @type {?} */
          var res = initValue;

          this._forEachChild(
          /**
          * @param {?} control
          * @param {?} name
          * @return {?}
          */
          function (control, name) {
            res = fn(res, control, name);
          });

          return res;
        }
        /**
         * \@internal
         * @return {?}
         */

      }, {
        key: "_allControlsDisabled",
        value: function _allControlsDisabled() {
          for (var _i4 = 0, _Object$keys = Object.keys(this.controls); _i4 < _Object$keys.length; _i4++) {
            var controlName = _Object$keys[_i4];

            if (this.controls[controlName].enabled) {
              return false;
            }
          }

          return Object.keys(this.controls).length > 0 || this.disabled;
        }
        /**
         * \@internal
         * @param {?} value
         * @return {?}
         */

      }, {
        key: "_checkAllValuesPresent",
        value: function _checkAllValuesPresent(value) {
          this._forEachChild(
          /**
          * @param {?} control
          * @param {?} name
          * @return {?}
          */
          function (control, name) {
            if (value[name] === undefined) {
              throw new Error("Must supply a value for form control with name: '".concat(name, "'."));
            }
          });
        }
      }]);

      return FormGroup;
    }(AbstractControl);

    if (false) {}
    /**
     * Tracks the value and validity state of an array of `FormControl`,
     * `FormGroup` or `FormArray` instances.
     *
     * A `FormArray` aggregates the values of each child `FormControl` into an array.
     * It calculates its status by reducing the status values of its children. For example, if one of
     * the controls in a `FormArray` is invalid, the entire array becomes invalid.
     *
     * `FormArray` is one of the three fundamental building blocks used to define forms in Angular,
     * along with `FormControl` and `FormGroup`.
     *
     * \@usageNotes
     *
     * ### Create an array of form controls
     *
     * ```
     * const arr = new FormArray([
     *   new FormControl('Nancy', Validators.minLength(2)),
     *   new FormControl('Drew'),
     * ]);
     *
     * console.log(arr.value);   // ['Nancy', 'Drew']
     * console.log(arr.status);  // 'VALID'
     * ```
     *
     * ### Create a form array with array-level validators
     *
     * You include array-level validators and async validators. These come in handy
     * when you want to perform validation that considers the value of more than one child
     * control.
     *
     * The two types of validators are passed in separately as the second and third arg
     * respectively, or together as part of an options object.
     *
     * ```
     * const arr = new FormArray([
     *   new FormControl('Nancy'),
     *   new FormControl('Drew')
     * ], {validators: myValidator, asyncValidators: myAsyncValidator});
     * ```
     *
     * ### Set the updateOn property for all controls in a form array
     *
     * The options object is used to set a default value for each child
     * control's `updateOn` property. If you set `updateOn` to `'blur'` at the
     * array level, all child controls default to 'blur', unless the child
     * has explicitly specified a different `updateOn` value.
     *
     * ```ts
     * const arr = new FormArray([
     *    new FormControl()
     * ], {updateOn: 'blur'});
     * ```
     *
     * ### Adding or removing controls from a form array
     *
     * To change the controls in the array, use the `push`, `insert`, `removeAt` or `clear` methods
     * in `FormArray` itself. These methods ensure the controls are properly tracked in the
     * form's hierarchy. Do not modify the array of `AbstractControl`s used to instantiate
     * the `FormArray` directly, as that result in strange and unexpected behavior such
     * as broken change detection.
     *
     * \@publicApi
     */


    var FormArray = /*#__PURE__*/function (_AbstractControl3) {
      _inherits(FormArray, _AbstractControl3);

      var _super7 = _createSuper(FormArray);

      /**
       * Creates a new `FormArray` instance.
       *
       * @param {?} controls An array of child controls. Each child control is given an index
       * where it is registered.
       *
       * @param {?=} validatorOrOpts A synchronous validator function, or an array of
       * such functions, or an `AbstractControlOptions` object that contains validation functions
       * and a validation trigger.
       *
       * @param {?=} asyncValidator A single async validator or array of async validator functions
       *
       */
      function FormArray(controls, validatorOrOpts, asyncValidator) {
        var _this17;

        _classCallCheck(this, FormArray);

        _this17 = _super7.call(this, coerceToValidator(validatorOrOpts), coerceToAsyncValidator(asyncValidator, validatorOrOpts));
        _this17.controls = controls;

        _this17._initObservables();

        _this17._setUpdateStrategy(validatorOrOpts);

        _this17._setUpControls();

        _this17.updateValueAndValidity({
          onlySelf: true,
          emitEvent: false
        });

        return _this17;
      }
      /**
       * Get the `AbstractControl` at the given `index` in the array.
       *
       * @param {?} index Index in the array to retrieve the control
       * @return {?}
       */


      _createClass(FormArray, [{
        key: "at",
        value: function at(index) {
          return this.controls[index];
        }
        /**
         * Insert a new `AbstractControl` at the end of the array.
         *
         * @param {?} control Form control to be inserted
         * @return {?}
         */

      }, {
        key: "push",
        value: function push(control) {
          this.controls.push(control);

          this._registerControl(control);

          this.updateValueAndValidity();

          this._onCollectionChange();
        }
        /**
         * Insert a new `AbstractControl` at the given `index` in the array.
         *
         * @param {?} index Index in the array to insert the control
         * @param {?} control Form control to be inserted
         * @return {?}
         */

      }, {
        key: "insert",
        value: function insert(index, control) {
          this.controls.splice(index, 0, control);

          this._registerControl(control);

          this.updateValueAndValidity();
        }
        /**
         * Remove the control at the given `index` in the array.
         *
         * @param {?} index Index in the array to remove the control
         * @return {?}
         */

      }, {
        key: "removeAt",
        value: function removeAt(index) {
          if (this.controls[index]) this.controls[index]._registerOnCollectionChange(
          /**
          * @return {?}
          */
          function () {});
          this.controls.splice(index, 1);
          this.updateValueAndValidity();
        }
        /**
         * Replace an existing control.
         *
         * @param {?} index Index in the array to replace the control
         * @param {?} control The `AbstractControl` control to replace the existing control
         * @return {?}
         */

      }, {
        key: "setControl",
        value: function setControl(index, control) {
          if (this.controls[index]) this.controls[index]._registerOnCollectionChange(
          /**
          * @return {?}
          */
          function () {});
          this.controls.splice(index, 1);

          if (control) {
            this.controls.splice(index, 0, control);

            this._registerControl(control);
          }

          this.updateValueAndValidity();

          this._onCollectionChange();
        }
        /**
         * Length of the control array.
         * @return {?}
         */

      }, {
        key: "setValue",

        /**
         * Sets the value of the `FormArray`. It accepts an array that matches
         * the structure of the control.
         *
         * This method performs strict checks, and throws an error if you try
         * to set the value of a control that doesn't exist or if you exclude the
         * value of a control.
         *
         * \@usageNotes
         * ### Set the values for the controls in the form array
         *
         * ```
         * const arr = new FormArray([
         *   new FormControl(),
         *   new FormControl()
         * ]);
         * console.log(arr.value);   // [null, null]
         *
         * arr.setValue(['Nancy', 'Drew']);
         * console.log(arr.value);   // ['Nancy', 'Drew']
         * ```
         *
         * @param {?} value Array of values for the controls
         * @param {?=} options Configure options that determine how the control propagates changes and
         * emits events after the value changes
         *
         * * `onlySelf`: When true, each change only affects this control, and not its parent. Default
         * is false.
         * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
         * `valueChanges`
         * observables emit events with the latest status and value when the control value is updated.
         * When false, no events are emitted.
         * The configuration options are passed to the {\@link AbstractControl#updateValueAndValidity
         * updateValueAndValidity} method.
         * @return {?}
         */
        value: function setValue(value) {
          var _this18 = this;

          var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

          this._checkAllValuesPresent(value);

          value.forEach(
          /**
          * @param {?} newValue
          * @param {?} index
          * @return {?}
          */
          function (newValue, index) {
            _this18._throwIfControlMissing(index);

            _this18.at(index).setValue(newValue, {
              onlySelf: true,
              emitEvent: options.emitEvent
            });
          });
          this.updateValueAndValidity(options);
        }
        /**
         * Patches the value of the `FormArray`. It accepts an array that matches the
         * structure of the control, and does its best to match the values to the correct
         * controls in the group.
         *
         * It accepts both super-sets and sub-sets of the array without throwing an error.
         *
         * \@usageNotes
         * ### Patch the values for controls in a form array
         *
         * ```
         * const arr = new FormArray([
         *    new FormControl(),
         *    new FormControl()
         * ]);
         * console.log(arr.value);   // [null, null]
         *
         * arr.patchValue(['Nancy']);
         * console.log(arr.value);   // ['Nancy', null]
         * ```
         *
         * @param {?} value Array of latest values for the controls
         * @param {?=} options Configure options that determine how the control propagates changes and
         * emits events after the value changes
         *
         * * `onlySelf`: When true, each change only affects this control, and not its parent. Default
         * is false.
         * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
         * `valueChanges`
         * observables emit events with the latest status and value when the control value is updated.
         * When false, no events are emitted.
         * The configuration options are passed to the {\@link AbstractControl#updateValueAndValidity
         * updateValueAndValidity} method.
         * @return {?}
         */

      }, {
        key: "patchValue",
        value: function patchValue(value) {
          var _this19 = this;

          var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
          value.forEach(
          /**
          * @param {?} newValue
          * @param {?} index
          * @return {?}
          */
          function (newValue, index) {
            if (_this19.at(index)) {
              _this19.at(index).patchValue(newValue, {
                onlySelf: true,
                emitEvent: options.emitEvent
              });
            }
          });
          this.updateValueAndValidity(options);
        }
        /**
         * Resets the `FormArray` and all descendants are marked `pristine` and `untouched`, and the
         * value of all descendants to null or null maps.
         *
         * You reset to a specific form state by passing in an array of states
         * that matches the structure of the control. The state is a standalone value
         * or a form state object with both a value and a disabled status.
         *
         * \@usageNotes
         * ### Reset the values in a form array
         *
         * ```ts
         * const arr = new FormArray([
         *    new FormControl(),
         *    new FormControl()
         * ]);
         * arr.reset(['name', 'last name']);
         *
         * console.log(this.arr.value);  // ['name', 'last name']
         * ```
         *
         * ### Reset the values in a form array and the disabled status for the first control
         *
         * ```
         * this.arr.reset([
         *   {value: 'name', disabled: true},
         *   'last'
         * ]);
         *
         * console.log(this.arr.value);  // ['name', 'last name']
         * console.log(this.arr.get(0).status);  // 'DISABLED'
         * ```
         *
         * @param {?=} value Array of values for the controls
         * @param {?=} options Configure options that determine how the control propagates changes and
         * emits events after the value changes
         *
         * * `onlySelf`: When true, each change only affects this control, and not its parent. Default
         * is false.
         * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
         * `valueChanges`
         * observables emit events with the latest status and value when the control is reset.
         * When false, no events are emitted.
         * The configuration options are passed to the {\@link AbstractControl#updateValueAndValidity
         * updateValueAndValidity} method.
         * @return {?}
         */

      }, {
        key: "reset",
        value: function reset() {
          var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
          var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

          this._forEachChild(
          /**
          * @param {?} control
          * @param {?} index
          * @return {?}
          */
          function (control, index) {
            control.reset(value[index], {
              onlySelf: true,
              emitEvent: options.emitEvent
            });
          });

          this._updatePristine(options);

          this._updateTouched(options);

          this.updateValueAndValidity(options);
        }
        /**
         * The aggregate value of the array, including any disabled controls.
         *
         * Reports all values regardless of disabled status.
         * For enabled controls only, the `value` property is the best way to get the value of the array.
         * @return {?}
         */

      }, {
        key: "getRawValue",
        value: function getRawValue() {
          return this.controls.map(
          /**
          * @param {?} control
          * @return {?}
          */
          function (control) {
            return control instanceof FormControl ? control.value :
            /** @type {?} */
            control.getRawValue();
          });
        }
        /**
         * Remove all controls in the `FormArray`.
         *
         * \@usageNotes
         * ### Remove all elements from a FormArray
         *
         * ```ts
         * const arr = new FormArray([
         *    new FormControl(),
         *    new FormControl()
         * ]);
         * console.log(arr.length);  // 2
         *
         * arr.clear();
         * console.log(arr.length);  // 0
         * ```
         *
         * It's a simpler and more efficient alternative to removing all elements one by one:
         *
         * ```ts
         * const arr = new FormArray([
         *    new FormControl(),
         *    new FormControl()
         * ]);
         *
         * while (arr.length) {
         *    arr.removeAt(0);
         * }
         * ```
         * @return {?}
         */

      }, {
        key: "clear",
        value: function clear() {
          if (this.controls.length < 1) return;

          this._forEachChild(
          /**
          * @param {?} control
          * @return {?}
          */
          function (control) {
            return control._registerOnCollectionChange(
            /**
            * @return {?}
            */
            function () {});
          });

          this.controls.splice(0);
          this.updateValueAndValidity();
        }
        /**
         * \@internal
         * @return {?}
         */

      }, {
        key: "_syncPendingControls",
        value: function _syncPendingControls() {
          /** @type {?} */
          var subtreeUpdated = this.controls.reduce(
          /**
          * @param {?} updated
          * @param {?} child
          * @return {?}
          */
          function (updated, child) {
            return child._syncPendingControls() ? true : updated;
          }, false);
          if (subtreeUpdated) this.updateValueAndValidity({
            onlySelf: true
          });
          return subtreeUpdated;
        }
        /**
         * \@internal
         * @param {?} index
         * @return {?}
         */

      }, {
        key: "_throwIfControlMissing",
        value: function _throwIfControlMissing(index) {
          if (!this.controls.length) {
            throw new Error("\n        There are no form controls registered with this array yet.  If you're using ngModel,\n        you may want to check next tick (e.g. use setTimeout).\n      ");
          }

          if (!this.at(index)) {
            throw new Error("Cannot find form control at index ".concat(index));
          }
        }
        /**
         * \@internal
         * @param {?} cb
         * @return {?}
         */

      }, {
        key: "_forEachChild",
        value: function _forEachChild(cb) {
          this.controls.forEach(
          /**
          * @param {?} control
          * @param {?} index
          * @return {?}
          */
          function (control, index) {
            cb(control, index);
          });
        }
        /**
         * \@internal
         * @return {?}
         */

      }, {
        key: "_updateValue",
        value: function _updateValue() {
          var _this20 = this;

          /** @type {?} */
          this.value = this.controls.filter(
          /**
          * @param {?} control
          * @return {?}
          */
          function (control) {
            return control.enabled || _this20.disabled;
          }).map(
          /**
          * @param {?} control
          * @return {?}
          */
          function (control) {
            return control.value;
          });
        }
        /**
         * \@internal
         * @param {?} condition
         * @return {?}
         */

      }, {
        key: "_anyControls",
        value: function _anyControls(condition) {
          return this.controls.some(
          /**
          * @param {?} control
          * @return {?}
          */
          function (control) {
            return control.enabled && condition(control);
          });
        }
        /**
         * \@internal
         * @return {?}
         */

      }, {
        key: "_setUpControls",
        value: function _setUpControls() {
          var _this21 = this;

          this._forEachChild(
          /**
          * @param {?} control
          * @return {?}
          */
          function (control) {
            return _this21._registerControl(control);
          });
        }
        /**
         * \@internal
         * @param {?} value
         * @return {?}
         */

      }, {
        key: "_checkAllValuesPresent",
        value: function _checkAllValuesPresent(value) {
          this._forEachChild(
          /**
          * @param {?} control
          * @param {?} i
          * @return {?}
          */
          function (control, i) {
            if (value[i] === undefined) {
              throw new Error("Must supply a value for form control at index: ".concat(i, "."));
            }
          });
        }
        /**
         * \@internal
         * @return {?}
         */

      }, {
        key: "_allControlsDisabled",
        value: function _allControlsDisabled() {
          var _iterator = _createForOfIteratorHelper(this.controls),
              _step;

          try {
            for (_iterator.s(); !(_step = _iterator.n()).done;) {
              var control = _step.value;
              if (control.enabled) return false;
            }
          } catch (err) {
            _iterator.e(err);
          } finally {
            _iterator.f();
          }

          return this.controls.length > 0 || this.disabled;
        }
        /**
         * @private
         * @param {?} control
         * @return {?}
         */

      }, {
        key: "_registerControl",
        value: function _registerControl(control) {
          control.setParent(this);

          control._registerOnCollectionChange(this._onCollectionChange);
        }
      }, {
        key: "length",
        get: function get() {
          return this.controls.length;
        }
      }]);

      return FormArray;
    }(AbstractControl);

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /** @type {?} */


    var formDirectiveProvider = {
      provide: ControlContainer,
      useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(
      /**
      * @return {?}
      */
      function () {
        return NgForm;
      })
    };

    var ɵ0 =
    /**
    * @return {?}
    */
    function ɵ0() {
      return Promise.resolve(null);
    };
    /** @type {?} */


    var resolvedPromise = ɵ0();
    /**
     * \@description
     * Creates a top-level `FormGroup` instance and binds it to a form
     * to track aggregate form value and validation status.
     *
     * As soon as you import the `FormsModule`, this directive becomes active by default on
     * all `<form>` tags.  You don't need to add a special selector.
     *
     * You optionally export the directive into a local template variable using `ngForm` as the key
     * (ex: `#myForm="ngForm"`). This is optional, but useful.  Many properties from the underlying
     * `FormGroup` instance are duplicated on the directive itself, so a reference to it
     * gives you access to the aggregate value and validity status of the form, as well as
     * user interaction properties like `dirty` and `touched`.
     *
     * To register child controls with the form, use `NgModel` with a `name`
     * attribute. You may use `NgModelGroup` to create sub-groups within the form.
     *
     * If necessary, listen to the directive's `ngSubmit` event to be notified when the user has
     * triggered a form submission. The `ngSubmit` event emits the original form
     * submission event.
     *
     * In template driven forms, all `<form>` tags are automatically tagged as `NgForm`.
     * To import the `FormsModule` but skip its usage in some forms,
     * for example, to use native HTML5 validation, add the `ngNoForm` and the `<form>`
     * tags won't create an `NgForm` directive. In reactive forms, using `ngNoForm` is
     * unnecessary because the `<form>` tags are inert. In that case, you would
     * refrain from using the `formGroup` directive.
     *
     * \@usageNotes
     *
     * ### Migrating from deprecated ngForm selector
     *
     * Support for using `ngForm` element selector has been deprecated in Angular v6 and will be removed
     * in Angular v9.
     *
     * This has been deprecated to keep selectors consistent with other core Angular selectors,
     * as element selectors are typically written in kebab-case.
     *
     * Now deprecated:
     * ```html
     * <ngForm #myForm="ngForm">
     * ```
     *
     * After:
     * ```html
     * <ng-form #myForm="ngForm">
     * ```
     *
     * ### Listening for form submission
     *
     * The following example shows how to capture the form values from the "ngSubmit" event.
     *
     * {\@example forms/ts/simpleForm/simple_form_example.ts region='Component'}
     *
     * ### Setting the update options
     *
     * The following example shows you how to change the "updateOn" option from its default using
     * ngFormOptions.
     *
     * ```html
     * <form [ngFormOptions]="{updateOn: 'blur'}">
     *    <input name="one" ngModel>  <!-- this ngModel will update on blur -->
     * </form>
     * ```
     *
     * \@ngModule FormsModule
     * \@publicApi
     */

    var NgForm = /*#__PURE__*/function (_ControlContainer) {
      _inherits(NgForm, _ControlContainer);

      var _super8 = _createSuper(NgForm);

      /**
       * @param {?} validators
       * @param {?} asyncValidators
       */
      function NgForm(validators, asyncValidators) {
        var _this22;

        _classCallCheck(this, NgForm);

        _this22 = _super8.call(this);
        /**
         * \@description
         * Returns whether the form submission has been triggered.
         */

        _this22.submitted = false;
        _this22._directives = [];
        /**
         * \@description
         * Event emitter for the "ngSubmit" event
         */

        _this22.ngSubmit = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        _this22.form = new FormGroup({}, composeValidators(validators), composeAsyncValidators(asyncValidators));
        return _this22;
      }
      /**
       * \@description
       * Lifecycle method called after the view is initialized. For internal use only.
       * @return {?}
       */


      _createClass(NgForm, [{
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          this._setUpdateStrategy();
        }
        /**
         * \@description
         * The directive instance.
         * @return {?}
         */

      }, {
        key: "addControl",

        /**
         * \@description
         * Method that sets up the control directive in this group, re-calculates its value
         * and validity, and adds the instance to the internal list of directives.
         *
         * @param {?} dir The `NgModel` directive instance.
         * @return {?}
         */
        value: function addControl(dir) {
          var _this23 = this;

          resolvedPromise.then(
          /**
          * @return {?}
          */
          function () {
            /** @type {?} */
            var container = _this23._findContainer(dir.path);

            /** @type {?} */
            dir.control =
            /** @type {?} */
            container.registerControl(dir.name, dir.control);
            setUpControl(dir.control, dir);
            dir.control.updateValueAndValidity({
              emitEvent: false
            });

            _this23._directives.push(dir);
          });
        }
        /**
         * \@description
         * Retrieves the `FormControl` instance from the provided `NgModel` directive.
         *
         * @param {?} dir The `NgModel` directive instance.
         * @return {?}
         */

      }, {
        key: "getControl",
        value: function getControl(dir) {
          return (
            /** @type {?} */
            this.form.get(dir.path)
          );
        }
        /**
         * \@description
         * Removes the `NgModel` instance from the internal list of directives
         *
         * @param {?} dir The `NgModel` directive instance.
         * @return {?}
         */

      }, {
        key: "removeControl",
        value: function removeControl(dir) {
          var _this24 = this;

          resolvedPromise.then(
          /**
          * @return {?}
          */
          function () {
            /** @type {?} */
            var container = _this24._findContainer(dir.path);

            if (container) {
              container.removeControl(dir.name);
            }

            removeDir(_this24._directives, dir);
          });
        }
        /**
         * \@description
         * Adds a new `NgModelGroup` directive instance to the form.
         *
         * @param {?} dir The `NgModelGroup` directive instance.
         * @return {?}
         */

      }, {
        key: "addFormGroup",
        value: function addFormGroup(dir) {
          var _this25 = this;

          resolvedPromise.then(
          /**
          * @return {?}
          */
          function () {
            /** @type {?} */
            var container = _this25._findContainer(dir.path);
            /** @type {?} */


            var group = new FormGroup({});
            setUpFormContainer(group, dir);
            container.registerControl(dir.name, group);
            group.updateValueAndValidity({
              emitEvent: false
            });
          });
        }
        /**
         * \@description
         * Removes the `NgModelGroup` directive instance from the form.
         *
         * @param {?} dir The `NgModelGroup` directive instance.
         * @return {?}
         */

      }, {
        key: "removeFormGroup",
        value: function removeFormGroup(dir) {
          var _this26 = this;

          resolvedPromise.then(
          /**
          * @return {?}
          */
          function () {
            /** @type {?} */
            var container = _this26._findContainer(dir.path);

            if (container) {
              container.removeControl(dir.name);
            }
          });
        }
        /**
         * \@description
         * Retrieves the `FormGroup` for a provided `NgModelGroup` directive instance
         *
         * @param {?} dir The `NgModelGroup` directive instance.
         * @return {?}
         */

      }, {
        key: "getFormGroup",
        value: function getFormGroup(dir) {
          return (
            /** @type {?} */
            this.form.get(dir.path)
          );
        }
        /**
         * Sets the new value for the provided `NgControl` directive.
         *
         * @param {?} dir The `NgControl` directive instance.
         * @param {?} value The new value for the directive's control.
         * @return {?}
         */

      }, {
        key: "updateModel",
        value: function updateModel(dir, value) {
          var _this27 = this;

          resolvedPromise.then(
          /**
          * @return {?}
          */
          function () {
            /** @type {?} */
            var ctrl =
            /** @type {?} */
            _this27.form.get(
            /** @type {?} */
            dir.path);

            ctrl.setValue(value);
          });
        }
        /**
         * \@description
         * Sets the value for this `FormGroup`.
         *
         * @param {?} value The new value
         * @return {?}
         */

      }, {
        key: "setValue",
        value: function setValue(value) {
          this.control.setValue(value);
        }
        /**
         * \@description
         * Method called when the "submit" event is triggered on the form.
         * Triggers the `ngSubmit` emitter to emit the "submit" event as its payload.
         *
         * @param {?} $event The "submit" event object
         * @return {?}
         */

      }, {
        key: "onSubmit",
        value: function onSubmit($event) {
          /** @type {?} */
          this.submitted = true;
          syncPendingControls(this.form, this._directives);
          this.ngSubmit.emit($event);
          return false;
        }
        /**
         * \@description
         * Method called when the "reset" event is triggered on the form.
         * @return {?}
         */

      }, {
        key: "onReset",
        value: function onReset() {
          this.resetForm();
        }
        /**
         * \@description
         * Resets the form to an initial value and resets its submitted status.
         *
         * @param {?=} value The new value for the form.
         * @return {?}
         */

      }, {
        key: "resetForm",
        value: function resetForm() {
          var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : undefined;
          this.form.reset(value);

          /** @type {?} */
          this.submitted = false;
        }
        /**
         * @private
         * @return {?}
         */

      }, {
        key: "_setUpdateStrategy",
        value: function _setUpdateStrategy() {
          if (this.options && this.options.updateOn != null) {
            this.form._updateOn = this.options.updateOn;
          }
        }
        /**
         * \@internal
         * @param {?} path
         * @return {?}
         */

      }, {
        key: "_findContainer",
        value: function _findContainer(path) {
          path.pop();
          return path.length ?
          /** @type {?} */
          this.form.get(path) : this.form;
        }
      }, {
        key: "formDirective",
        get: function get() {
          return this;
        }
        /**
         * \@description
         * The internal `FormGroup` instance.
         * @return {?}
         */

      }, {
        key: "control",
        get: function get() {
          return this.form;
        }
        /**
         * \@description
         * Returns an array representing the path to this group. Because this directive
         * always lives at the top level of a form, it is always an empty array.
         * @return {?}
         */

      }, {
        key: "path",
        get: function get() {
          return [];
        }
        /**
         * \@description
         * Returns a map of the controls in this group.
         * @return {?}
         */

      }, {
        key: "controls",
        get: function get() {
          return this.form.controls;
        }
      }]);

      return NgForm;
    }(ControlContainer);

    NgForm.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
      args: [{
        selector: 'form:not([ngNoForm]):not([formGroup]),ngForm,ng-form,[ngForm]',
        providers: [formDirectiveProvider],
        host: {
          '(submit)': 'onSubmit($event)',
          '(reset)': 'onReset()'
        },
        outputs: ['ngSubmit'],
        exportAs: 'ngForm'
      }]
    }];
    /** @nocollapse */

    NgForm.ctorParameters = function () {
      return [{
        type: Array,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Self"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
          args: [NG_VALIDATORS]
        }]
      }, {
        type: Array,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Self"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
          args: [NG_ASYNC_VALIDATORS]
        }]
      }];
    };

    NgForm.propDecorators = {
      options: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
        args: ['ngFormOptions']
      }]
    };

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    var TemplateDrivenErrors = /*#__PURE__*/function () {
      function TemplateDrivenErrors() {
        _classCallCheck(this, TemplateDrivenErrors);
      }

      _createClass(TemplateDrivenErrors, null, [{
        key: "modelParentException",

        /**
         * @return {?}
         */
        value: function modelParentException() {
          throw new Error("\n      ngModel cannot be used to register form controls with a parent formGroup directive.  Try using\n      formGroup's partner directive \"formControlName\" instead.  Example:\n\n      ".concat(FormErrorExamples.formControlName, "\n\n      Or, if you'd like to avoid registering this form control, indicate that it's standalone in ngModelOptions:\n\n      Example:\n\n      ").concat(FormErrorExamples.ngModelWithFormGroup));
        }
        /**
         * @return {?}
         */

      }, {
        key: "formGroupNameException",
        value: function formGroupNameException() {
          throw new Error("\n      ngModel cannot be used to register form controls with a parent formGroupName or formArrayName directive.\n\n      Option 1: Use formControlName instead of ngModel (reactive strategy):\n\n      ".concat(FormErrorExamples.formGroupName, "\n\n      Option 2:  Update ngModel's parent be ngModelGroup (template-driven strategy):\n\n      ").concat(FormErrorExamples.ngModelGroup));
        }
        /**
         * @return {?}
         */

      }, {
        key: "missingNameException",
        value: function missingNameException() {
          throw new Error("If ngModel is used within a form tag, either the name attribute must be set or the form\n      control must be defined as 'standalone' in ngModelOptions.\n\n      Example 1: <input [(ngModel)]=\"person.firstName\" name=\"first\">\n      Example 2: <input [(ngModel)]=\"person.firstName\" [ngModelOptions]=\"{standalone: true}\">");
        }
        /**
         * @return {?}
         */

      }, {
        key: "modelGroupParentException",
        value: function modelGroupParentException() {
          throw new Error("\n      ngModelGroup cannot be used with a parent formGroup directive.\n\n      Option 1: Use formGroupName instead of ngModelGroup (reactive strategy):\n\n      ".concat(FormErrorExamples.formGroupName, "\n\n      Option 2:  Use a regular form tag instead of the formGroup directive (template-driven strategy):\n\n      ").concat(FormErrorExamples.ngModelGroup));
        }
        /**
         * @return {?}
         */

      }, {
        key: "ngFormWarning",
        value: function ngFormWarning() {
          console.warn("\n    It looks like you're using 'ngForm'.\n\n    Support for using the 'ngForm' element selector has been deprecated in Angular v6 and will be removed\n    in Angular v9.\n\n    Use 'ng-form' instead.\n\n    Before:\n    <ngForm #myForm=\"ngForm\">\n\n    After:\n    <ng-form #myForm=\"ngForm\">\n    ");
        }
      }]);

      return TemplateDrivenErrors;
    }();
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * \@description
     * `InjectionToken` to provide to turn off the warning when using 'ngForm' deprecated selector.
     * @type {?}
     */


    var NG_FORM_SELECTOR_WARNING = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('NgFormSelectorWarning');
    /**
     * This directive is solely used to display warnings when the deprecated `ngForm` selector is used.
     *
     * @deprecated in Angular v6 and will be removed in Angular v9.
     * \@ngModule FormsModule
     * \@publicApi
     */

    var NgFormSelectorWarning =
    /**
     * @param {?} ngFormWarning
     */
    function NgFormSelectorWarning(ngFormWarning) {
      _classCallCheck(this, NgFormSelectorWarning);

      if ((!ngFormWarning || ngFormWarning === 'once') && !NgFormSelectorWarning._ngFormWarning || ngFormWarning === 'always') {
        TemplateDrivenErrors.ngFormWarning();
        NgFormSelectorWarning._ngFormWarning = true;
      }
    };
    /**
     * Static property used to track whether the deprecation warning for this selector has been sent.
     * Used to support warning config of "once".
     *
     * \@internal
     */


    NgFormSelectorWarning._ngFormWarning = false;
    NgFormSelectorWarning.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
      args: [{
        selector: 'ngForm'
      }]
    }];
    /** @nocollapse */

    NgFormSelectorWarning.ctorParameters = function () {
      return [{
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
          args: [NG_FORM_SELECTOR_WARNING]
        }]
      }];
    };

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * \@description
     * A base class for code shared between the `NgModelGroup` and `FormGroupName` directives.
     *
     * \@publicApi
     */


    var AbstractFormGroupDirective = /*#__PURE__*/function (_ControlContainer2) {
      _inherits(AbstractFormGroupDirective, _ControlContainer2);

      var _super9 = _createSuper(AbstractFormGroupDirective);

      function AbstractFormGroupDirective() {
        _classCallCheck(this, AbstractFormGroupDirective);

        return _super9.apply(this, arguments);
      }

      _createClass(AbstractFormGroupDirective, [{
        key: "ngOnInit",

        /**
         * \@description
         * An internal callback method triggered on the instance after the inputs are set.
         * Registers the group with its parent group.
         * @return {?}
         */
        value: function ngOnInit() {
          this._checkParentType();

          /** @type {?} */
          this.formDirective.addFormGroup(this);
        }
        /**
         * \@description
         * An internal callback method triggered before the instance is destroyed.
         * Removes the group from its parent group.
         * @return {?}
         */

      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          if (this.formDirective) {
            this.formDirective.removeFormGroup(this);
          }
        }
        /**
         * \@description
         * The `FormGroup` bound to this directive.
         * @return {?}
         */

      }, {
        key: "_checkParentType",

        /**
         * \@internal
         * @return {?}
         */
        value: function _checkParentType() {}
      }, {
        key: "control",
        get: function get() {
          return (
            /** @type {?} */
            this.formDirective.getFormGroup(this)
          );
        }
        /**
         * \@description
         * The path to this group from the top-level directive.
         * @return {?}
         */

      }, {
        key: "path",
        get: function get() {
          return controlPath(this.name, this._parent);
        }
        /**
         * \@description
         * The top-level directive for this group if present, otherwise null.
         * @return {?}
         */

      }, {
        key: "formDirective",
        get: function get() {
          return this._parent ? this._parent.formDirective : null;
        }
        /**
         * \@description
         * The synchronous validators registered with this group.
         * @return {?}
         */

      }, {
        key: "validator",
        get: function get() {
          return composeValidators(this._validators);
        }
        /**
         * \@description
         * The async validators registered with this group.
         * @return {?}
         */

      }, {
        key: "asyncValidator",
        get: function get() {
          return composeAsyncValidators(this._asyncValidators);
        }
      }]);

      return AbstractFormGroupDirective;
    }(ControlContainer);

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /** @type {?} */


    var modelGroupProvider = {
      provide: ControlContainer,
      useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(
      /**
      * @return {?}
      */
      function () {
        return NgModelGroup;
      })
    };
    /**
     * \@description
     * Creates and binds a `FormGroup` instance to a DOM element.
     *
     * This directive can only be used as a child of `NgForm` (within `<form>` tags).
     *
     * Use this directive to validate a sub-group of your form separately from the
     * rest of your form, or if some values in your domain model make more sense
     * to consume together in a nested object.
     *
     * Provide a name for the sub-group and it will become the key
     * for the sub-group in the form's full value. If you need direct access, export the directive into
     * a local template variable using `ngModelGroup` (ex: `#myGroup="ngModelGroup"`).
     *
     * \@usageNotes
     *
     * ### Consuming controls in a grouping
     *
     * The following example shows you how to combine controls together in a sub-group
     * of the form.
     *
     * {\@example forms/ts/ngModelGroup/ng_model_group_example.ts region='Component'}
     *
     * \@ngModule FormsModule
     * \@publicApi
     */

    var NgModelGroup = /*#__PURE__*/function (_AbstractFormGroupDir) {
      _inherits(NgModelGroup, _AbstractFormGroupDir);

      var _super10 = _createSuper(NgModelGroup);

      /**
       * @param {?} parent
       * @param {?} validators
       * @param {?} asyncValidators
       */
      function NgModelGroup(parent, validators, asyncValidators) {
        var _this28;

        _classCallCheck(this, NgModelGroup);

        _this28 = _super10.call(this);
        _this28._parent = parent;
        _this28._validators = validators;
        _this28._asyncValidators = asyncValidators;
        return _this28;
      }
      /**
       * \@internal
       * @return {?}
       */


      _createClass(NgModelGroup, [{
        key: "_checkParentType",
        value: function _checkParentType() {
          if (!(this._parent instanceof NgModelGroup) && !(this._parent instanceof NgForm)) {
            TemplateDrivenErrors.modelGroupParentException();
          }
        }
      }]);

      return NgModelGroup;
    }(AbstractFormGroupDirective);

    NgModelGroup.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
      args: [{
        selector: '[ngModelGroup]',
        providers: [modelGroupProvider],
        exportAs: 'ngModelGroup'
      }]
    }];
    /** @nocollapse */

    NgModelGroup.ctorParameters = function () {
      return [{
        type: ControlContainer,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Host"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["SkipSelf"]
        }]
      }, {
        type: Array,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Self"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
          args: [NG_VALIDATORS]
        }]
      }, {
        type: Array,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Self"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
          args: [NG_ASYNC_VALIDATORS]
        }]
      }];
    };

    NgModelGroup.propDecorators = {
      name: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
        args: ['ngModelGroup']
      }]
    };

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /** @type {?} */


    var formControlBinding = {
      provide: NgControl,
      useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(
      /**
      * @return {?}
      */
      function () {
        return NgModel;
      })
    };

    var ɵ0$1 =
    /**
    * @return {?}
    */
    function ɵ0$1() {
      return Promise.resolve(null);
    };
    /**
     * `ngModel` forces an additional change detection run when its inputs change:
     * E.g.:
     * ```
     * <div>{{myModel.valid}}</div>
     * <input [(ngModel)]="myValue" #myModel="ngModel">
     * ```
     * I.e. `ngModel` can export itself on the element and then be used in the template.
     * Normally, this would result in expressions before the `input` that use the exported directive
     * to have and old value as they have been
     * dirty checked before. As this is a very common case for `ngModel`, we added this second change
     * detection run.
     *
     * Notes:
     * - this is just one extra run no matter how many `ngModel` have been changed.
     * - this is a general problem when using `exportAs` for directives!
     * @type {?}
     */


    var resolvedPromise$1 = ɵ0$1();
    /**
     * \@description
     * Creates a `FormControl` instance from a domain model and binds it
     * to a form control element.
     *
     * The `FormControl` instance tracks the value, user interaction, and
     * validation status of the control and keeps the view synced with the model. If used
     * within a parent form, the directive also registers itself with the form as a child
     * control.
     *
     * This directive is used by itself or as part of a larger form. Use the
     * `ngModel` selector to activate it.
     *
     * It accepts a domain model as an optional `Input`. If you have a one-way binding
     * to `ngModel` with `[]` syntax, changing the value of the domain model in the component
     * class sets the value in the view. If you have a two-way binding with `[()]` syntax
     * (also known as 'banana-box syntax'), the value in the UI always syncs back to
     * the domain model in your class.
     *
     * To inspect the properties of the associated `FormControl` (like validity state),
     * export the directive into a local template variable using `ngModel` as the key (ex: `#myVar="ngModel"`).
     * You then access the control using the directive's `control` property,
     * but most properties used (like `valid` and `dirty`) fall through to the control anyway for direct access.
     * See a full list of properties directly available in `AbstractControlDirective`.
     *
     * @see `RadioControlValueAccessor`
     * @see `SelectControlValueAccessor`
     *
     * \@usageNotes
     *
     * ### Using ngModel on a standalone control
     *
     * The following examples show a simple standalone control using `ngModel`:
     *
     * {\@example forms/ts/simpleNgModel/simple_ng_model_example.ts region='Component'}
     *
     * When using the `ngModel` within `<form>` tags, you'll also need to supply a `name` attribute
     * so that the control can be registered with the parent form under that name.
     *
     * In the context of a parent form, it's often unnecessary to include one-way or two-way binding,
     * as the parent form syncs the value for you. You access its properties by exporting it into a
     * local template variable using `ngForm` such as (`#f="ngForm"`). Use the variable where
     * needed on form submission.
     *
     * If you do need to populate initial values into your form, using a one-way binding for
     * `ngModel` tends to be sufficient as long as you use the exported form's value rather
     * than the domain model's value on submit.
     *
     * ### Using ngModel within a form
     *
     * The following example shows controls using `ngModel` within a form:
     *
     * {\@example forms/ts/simpleForm/simple_form_example.ts region='Component'}
     *
     * ### Using a standalone ngModel within a group
     *
     * The following example shows you how to use a standalone ngModel control
     * within a form. This controls the display of the form, but doesn't contain form data.
     *
     * ```html
     * <form>
     *   <input name="login" ngModel placeholder="Login">
     *   <input type="checkbox" ngModel [ngModelOptions]="{standalone: true}"> Show more options?
     * </form>
     * <!-- form value: {login: ''} -->
     * ```
     *
     * ### Setting the ngModel name attribute through options
     *
     * The following example shows you an alternate way to set the name attribute. The name attribute is used
     * within a custom form component, and the name `\@Input` property serves a different purpose.
     *
     * ```html
     * <form>
     *   <my-person-control name="Nancy" ngModel [ngModelOptions]="{name: 'user'}">
     *   </my-person-control>
     * </form>
     * <!-- form value: {user: ''} -->
     * ```
     *
     * \@ngModule FormsModule
     * \@publicApi
     */

    var NgModel = /*#__PURE__*/function (_NgControl) {
      _inherits(NgModel, _NgControl);

      var _super11 = _createSuper(NgModel);

      /**
       * @param {?} parent
       * @param {?} validators
       * @param {?} asyncValidators
       * @param {?} valueAccessors
       */
      function NgModel(parent, validators, asyncValidators, valueAccessors) {
        var _this29;

        _classCallCheck(this, NgModel);

        _this29 = _super11.call(this);
        _this29.control = new FormControl();
        /**
         * \@internal
         */

        _this29._registered = false;
        /**
         * \@description
         * Event emitter for producing the `ngModelChange` event after
         * the view model updates.
         */

        _this29.update = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        _this29._parent = parent;
        _this29._rawValidators = validators || [];
        _this29._rawAsyncValidators = asyncValidators || [];
        _this29.valueAccessor = selectValueAccessor(_assertThisInitialized(_this29), valueAccessors);
        return _this29;
      }
      /**
       * \@description
       * A lifecycle method called when the directive's inputs change. For internal use
       * only.
       *
       * @param {?} changes A object of key/value pairs for the set of changed inputs.
       * @return {?}
       */


      _createClass(NgModel, [{
        key: "ngOnChanges",
        value: function ngOnChanges(changes) {
          this._checkForErrors();

          if (!this._registered) this._setUpControl();

          if ('isDisabled' in changes) {
            this._updateDisabled(changes);
          }

          if (isPropertyUpdated(changes, this.viewModel)) {
            this._updateValue(this.model);

            this.viewModel = this.model;
          }
        }
        /**
         * \@description
         * Lifecycle method called before the directive's instance is destroyed. For internal
         * use only.
         * @return {?}
         */

      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.formDirective && this.formDirective.removeControl(this);
        }
        /**
         * \@description
         * Returns an array that represents the path from the top-level form to this control.
         * Each index is the string name of the control on that level.
         * @return {?}
         */

      }, {
        key: "viewToModelUpdate",

        /**
         * \@description
         * Sets the new value for the view model and emits an `ngModelChange` event.
         *
         * @param {?} newValue The new value emitted by `ngModelChange`.
         * @return {?}
         */
        value: function viewToModelUpdate(newValue) {
          this.viewModel = newValue;
          this.update.emit(newValue);
        }
        /**
         * @private
         * @return {?}
         */

      }, {
        key: "_setUpControl",
        value: function _setUpControl() {
          this._setUpdateStrategy();

          this._isStandalone() ? this._setUpStandalone() : this.formDirective.addControl(this);
          this._registered = true;
        }
        /**
         * @private
         * @return {?}
         */

      }, {
        key: "_setUpdateStrategy",
        value: function _setUpdateStrategy() {
          if (this.options && this.options.updateOn != null) {
            this.control._updateOn = this.options.updateOn;
          }
        }
        /**
         * @private
         * @return {?}
         */

      }, {
        key: "_isStandalone",
        value: function _isStandalone() {
          return !this._parent || !!(this.options && this.options.standalone);
        }
        /**
         * @private
         * @return {?}
         */

      }, {
        key: "_setUpStandalone",
        value: function _setUpStandalone() {
          setUpControl(this.control, this);
          this.control.updateValueAndValidity({
            emitEvent: false
          });
        }
        /**
         * @private
         * @return {?}
         */

      }, {
        key: "_checkForErrors",
        value: function _checkForErrors() {
          if (!this._isStandalone()) {
            this._checkParentType();
          }

          this._checkName();
        }
        /**
         * @private
         * @return {?}
         */

      }, {
        key: "_checkParentType",
        value: function _checkParentType() {
          if (!(this._parent instanceof NgModelGroup) && this._parent instanceof AbstractFormGroupDirective) {
            TemplateDrivenErrors.formGroupNameException();
          } else if (!(this._parent instanceof NgModelGroup) && !(this._parent instanceof NgForm)) {
            TemplateDrivenErrors.modelParentException();
          }
        }
        /**
         * @private
         * @return {?}
         */

      }, {
        key: "_checkName",
        value: function _checkName() {
          if (this.options && this.options.name) this.name = this.options.name;

          if (!this._isStandalone() && !this.name) {
            TemplateDrivenErrors.missingNameException();
          }
        }
        /**
         * @private
         * @param {?} value
         * @return {?}
         */

      }, {
        key: "_updateValue",
        value: function _updateValue(value) {
          var _this30 = this;

          resolvedPromise$1.then(
          /**
          * @return {?}
          */
          function () {
            _this30.control.setValue(value, {
              emitViewToModelChange: false
            });
          });
        }
        /**
         * @private
         * @param {?} changes
         * @return {?}
         */

      }, {
        key: "_updateDisabled",
        value: function _updateDisabled(changes) {
          var _this31 = this;

          /** @type {?} */
          var disabledValue = changes['isDisabled'].currentValue;
          /** @type {?} */

          var isDisabled = disabledValue === '' || disabledValue && disabledValue !== 'false';
          resolvedPromise$1.then(
          /**
          * @return {?}
          */
          function () {
            if (isDisabled && !_this31.control.disabled) {
              _this31.control.disable();
            } else if (!isDisabled && _this31.control.disabled) {
              _this31.control.enable();
            }
          });
        }
      }, {
        key: "path",
        get: function get() {
          return this._parent ? controlPath(this.name, this._parent) : [this.name];
        }
        /**
         * \@description
         * The top-level directive for this control if present, otherwise null.
         * @return {?}
         */

      }, {
        key: "formDirective",
        get: function get() {
          return this._parent ? this._parent.formDirective : null;
        }
        /**
         * \@description
         * Synchronous validator function composed of all the synchronous validators
         * registered with this directive.
         * @return {?}
         */

      }, {
        key: "validator",
        get: function get() {
          return composeValidators(this._rawValidators);
        }
        /**
         * \@description
         * Async validator function composed of all the async validators registered with this
         * directive.
         * @return {?}
         */

      }, {
        key: "asyncValidator",
        get: function get() {
          return composeAsyncValidators(this._rawAsyncValidators);
        }
      }]);

      return NgModel;
    }(NgControl);

    NgModel.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
      args: [{
        selector: '[ngModel]:not([formControlName]):not([formControl])',
        providers: [formControlBinding],
        exportAs: 'ngModel'
      }]
    }];
    /** @nocollapse */

    NgModel.ctorParameters = function () {
      return [{
        type: ControlContainer,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Host"]
        }]
      }, {
        type: Array,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Self"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
          args: [NG_VALIDATORS]
        }]
      }, {
        type: Array,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Self"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
          args: [NG_ASYNC_VALIDATORS]
        }]
      }, {
        type: Array,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Self"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
          args: [NG_VALUE_ACCESSOR]
        }]
      }];
    };

    NgModel.propDecorators = {
      name: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      isDisabled: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
        args: ['disabled']
      }],
      model: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
        args: ['ngModel']
      }],
      options: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
        args: ['ngModelOptions']
      }],
      update: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
        args: ['ngModelChange']
      }]
    };

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * \@description
     *
     * Adds `novalidate` attribute to all forms by default.
     *
     * `novalidate` is used to disable browser's native form validation.
     *
     * If you want to use native validation with Angular forms, just add `ngNativeValidate` attribute:
     *
     * ```
     * <form ngNativeValidate></form>
     * ```
     *
     * \@publicApi
     * \@ngModule ReactiveFormsModule
     * \@ngModule FormsModule
     */


    var ɵNgNoValidate = function ɵNgNoValidate() {
      _classCallCheck(this, ɵNgNoValidate);
    };

    ɵNgNoValidate.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
      args: [{
        selector: 'form:not([ngNoForm]):not([ngNativeValidate])',
        host: {
          'novalidate': ''
        }
      }]
    }];
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Token to provide to turn off the ngModel warning on formControl and formControlName.
     * @type {?}
     */

    var NG_MODEL_WITH_FORM_CONTROL_WARNING = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('NgModelWithFormControlWarning');
    /** @type {?} */

    var formControlBinding$1 = {
      provide: NgControl,
      useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(
      /**
      * @return {?}
      */
      function () {
        return FormControlDirective;
      })
    };
    /**
     * \@description
     * * Syncs a standalone `FormControl` instance to a form control element.
     *
     * @see [Reactive Forms Guide](guide/reactive-forms)
     * @see `FormControl`
     * @see `AbstractControl`
     *
     * \@usageNotes
     *
     * ### Registering a single form control
     *
     * The following examples shows how to register a standalone control and set its value.
     *
     * {\@example forms/ts/simpleFormControl/simple_form_control_example.ts region='Component'}
     *
     * ### Use with ngModel
     *
     * Support for using the `ngModel` input property and `ngModelChange` event with reactive
     * form directives has been deprecated in Angular v6 and will be removed in Angular v7.
     *
     * Now deprecated:
     *
     * ```html
     * <input [formControl]="control" [(ngModel)]="value">
     * ```
     *
     * ```ts
     * this.value = 'some value';
     * ```
     *
     * This has been deprecated for a few reasons. First, developers have found this pattern
     * confusing. It seems like the actual `ngModel` directive is being used, but in fact it's
     * an input/output property named `ngModel` on the reactive form directive that simply
     * approximates (some of) its behavior. Specifically, it allows getting/setting the value
     * and intercepting value events. However, some of `ngModel`'s other features - like
     * delaying updates with`ngModelOptions` or exporting the directive - simply don't work,
     * which has understandably caused some confusion.
     *
     * In addition, this pattern mixes template-driven and reactive forms strategies, which
     * we generally don't recommend because it doesn't take advantage of the full benefits of
     * either strategy. Setting the value in the template violates the template-agnostic
     * principles behind reactive forms, whereas adding a `FormControl`/`FormGroup` layer in
     * the class removes the convenience of defining forms in the template.
     *
     * To update your code before v7, you'll want to decide whether to stick with reactive form
     * directives (and get/set values using reactive forms patterns) or switch over to
     * template-driven directives.
     *
     * After (choice 1 - use reactive forms):
     *
     * ```html
     * <input [formControl]="control">
     * ```
     *
     * ```ts
     * this.control.setValue('some value');
     * ```
     *
     * After (choice 2 - use template-driven forms):
     *
     * ```html
     * <input [(ngModel)]="value">
     * ```
     *
     * ```ts
     * this.value = 'some value';
     * ```
     *
     * By default, when you use this pattern, you will see a deprecation warning once in dev
     * mode. You can choose to silence this warning by providing a config for
     * `ReactiveFormsModule` at import time:
     *
     * ```ts
     * imports: [
     *   ReactiveFormsModule.withConfig({warnOnNgModelWithFormControl: 'never'});
     * ]
     * ```
     *
     * Alternatively, you can choose to surface a separate warning for each instance of this
     * pattern with a config value of `"always"`. This may help to track down where in the code
     * the pattern is being used as the code is being updated.
     *
     * \@ngModule ReactiveFormsModule
     * \@publicApi
     */

    var FormControlDirective = /*#__PURE__*/function (_NgControl2) {
      _inherits(FormControlDirective, _NgControl2);

      var _super12 = _createSuper(FormControlDirective);

      /**
       * @param {?} validators
       * @param {?} asyncValidators
       * @param {?} valueAccessors
       * @param {?} _ngModelWarningConfig
       */
      function FormControlDirective(validators, asyncValidators, valueAccessors, _ngModelWarningConfig) {
        var _this32;

        _classCallCheck(this, FormControlDirective);

        _this32 = _super12.call(this);
        _this32._ngModelWarningConfig = _ngModelWarningConfig;
        /**
         * @deprecated as of v6
         */

        _this32.update = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * \@description
         * Instance property used to track whether an ngModel warning has been sent out for this
         * particular `FormControlDirective` instance. Used to support warning config of "always".
         *
         * \@internal
         */

        _this32._ngModelWarningSent = false;
        _this32._rawValidators = validators || [];
        _this32._rawAsyncValidators = asyncValidators || [];
        _this32.valueAccessor = selectValueAccessor(_assertThisInitialized(_this32), valueAccessors);
        return _this32;
      }
      /**
       * \@description
       * Triggers a warning that this input should not be used with reactive forms.
       * @param {?} isDisabled
       * @return {?}
       */


      _createClass(FormControlDirective, [{
        key: "ngOnChanges",

        /**
         * \@description
         * A lifecycle method called when the directive's inputs change. For internal use
         * only.
         *
         * @param {?} changes A object of key/value pairs for the set of changed inputs.
         * @return {?}
         */
        value: function ngOnChanges(changes) {
          if (this._isControlChanged(changes)) {
            setUpControl(this.form, this);

            if (this.control.disabled &&
            /** @type {?} */
            this.valueAccessor.setDisabledState) {
              /** @type {?} */

              /** @type {?} */
              this.valueAccessor.setDisabledState(true);
            }

            this.form.updateValueAndValidity({
              emitEvent: false
            });
          }

          if (isPropertyUpdated(changes, this.viewModel)) {
            _ngModelWarning('formControl', FormControlDirective, this, this._ngModelWarningConfig);

            this.form.setValue(this.model);
            this.viewModel = this.model;
          }
        }
        /**
         * \@description
         * Returns an array that represents the path from the top-level form to this control.
         * Each index is the string name of the control on that level.
         * @return {?}
         */

      }, {
        key: "viewToModelUpdate",

        /**
         * \@description
         * Sets the new value for the view model and emits an `ngModelChange` event.
         *
         * @param {?} newValue The new value for the view model.
         * @return {?}
         */
        value: function viewToModelUpdate(newValue) {
          this.viewModel = newValue;
          this.update.emit(newValue);
        }
        /**
         * @private
         * @param {?} changes
         * @return {?}
         */

      }, {
        key: "_isControlChanged",
        value: function _isControlChanged(changes) {
          return changes.hasOwnProperty('form');
        }
      }, {
        key: "isDisabled",
        set: function set(isDisabled) {
          ReactiveErrors.disabledAttrWarning();
        }
      }, {
        key: "path",
        get: function get() {
          return [];
        }
        /**
         * \@description
         * Synchronous validator function composed of all the synchronous validators
         * registered with this directive.
         * @return {?}
         */

      }, {
        key: "validator",
        get: function get() {
          return composeValidators(this._rawValidators);
        }
        /**
         * \@description
         * Async validator function composed of all the async validators registered with this
         * directive.
         * @return {?}
         */

      }, {
        key: "asyncValidator",
        get: function get() {
          return composeAsyncValidators(this._rawAsyncValidators);
        }
        /**
         * \@description
         * The `FormControl` bound to this directive.
         * @return {?}
         */

      }, {
        key: "control",
        get: function get() {
          return this.form;
        }
      }]);

      return FormControlDirective;
    }(NgControl);
    /**
     * \@description
     * Static property used to track whether any ngModel warnings have been sent across
     * all instances of FormControlDirective. Used to support warning config of "once".
     *
     * \@internal
     */


    FormControlDirective._ngModelWarningSentOnce = false;
    FormControlDirective.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
      args: [{
        selector: '[formControl]',
        providers: [formControlBinding$1],
        exportAs: 'ngForm'
      }]
    }];
    /** @nocollapse */

    FormControlDirective.ctorParameters = function () {
      return [{
        type: Array,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Self"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
          args: [NG_VALIDATORS]
        }]
      }, {
        type: Array,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Self"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
          args: [NG_ASYNC_VALIDATORS]
        }]
      }, {
        type: Array,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Self"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
          args: [NG_VALUE_ACCESSOR]
        }]
      }, {
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
          args: [NG_MODEL_WITH_FORM_CONTROL_WARNING]
        }]
      }];
    };

    FormControlDirective.propDecorators = {
      form: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
        args: ['formControl']
      }],
      isDisabled: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
        args: ['disabled']
      }],
      model: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
        args: ['ngModel']
      }],
      update: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
        args: ['ngModelChange']
      }]
    };

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /** @type {?} */


    var formDirectiveProvider$1 = {
      provide: ControlContainer,
      useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(
      /**
      * @return {?}
      */
      function () {
        return FormGroupDirective;
      })
    };
    /**
     * \@description
     *
     * Binds an existing `FormGroup` to a DOM element.
     *
     * This directive accepts an existing `FormGroup` instance. It will then use this
     * `FormGroup` instance to match any child `FormControl`, `FormGroup`,
     * and `FormArray` instances to child `FormControlName`, `FormGroupName`,
     * and `FormArrayName` directives.
     *
     * @see [Reactive Forms Guide](guide/reactive-forms)
     * @see `AbstractControl`
     *
     * ### Register Form Group
     *
     * The following example registers a `FormGroup` with first name and last name controls,
     * and listens for the *ngSubmit* event when the button is clicked.
     *
     * {\@example forms/ts/simpleFormGroup/simple_form_group_example.ts region='Component'}
     *
     * \@ngModule ReactiveFormsModule
     * \@publicApi
     */

    var FormGroupDirective = /*#__PURE__*/function (_ControlContainer3) {
      _inherits(FormGroupDirective, _ControlContainer3);

      var _super13 = _createSuper(FormGroupDirective);

      /**
       * @param {?} _validators
       * @param {?} _asyncValidators
       */
      function FormGroupDirective(_validators, _asyncValidators) {
        var _this33;

        _classCallCheck(this, FormGroupDirective);

        _this33 = _super13.call(this);
        _this33._validators = _validators;
        _this33._asyncValidators = _asyncValidators;
        /**
         * \@description
         * Reports whether the form submission has been triggered.
         */

        _this33.submitted = false;
        /**
         * \@description
         * Tracks the list of added `FormControlName` instances
         */

        _this33.directives = [];
        /**
         * \@description
         * Tracks the `FormGroup` bound to this directive.
         */

        _this33.form =
        /** @type {?} */
        null;
        /**
         * \@description
         * Emits an event when the form submission has been triggered.
         */

        _this33.ngSubmit = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        return _this33;
      }
      /**
       * \@description
       * A lifecycle method called when the directive's inputs change. For internal use only.
       *
       * @param {?} changes A object of key/value pairs for the set of changed inputs.
       * @return {?}
       */


      _createClass(FormGroupDirective, [{
        key: "ngOnChanges",
        value: function ngOnChanges(changes) {
          this._checkFormPresent();

          if (changes.hasOwnProperty('form')) {
            this._updateValidators();

            this._updateDomValue();

            this._updateRegistrations();
          }
        }
        /**
         * \@description
         * Returns this directive's instance.
         * @return {?}
         */

      }, {
        key: "addControl",

        /**
         * \@description
         * Method that sets up the control directive in this group, re-calculates its value
         * and validity, and adds the instance to the internal list of directives.
         *
         * @param {?} dir The `FormControlName` directive instance.
         * @return {?}
         */
        value: function addControl(dir) {
          /** @type {?} */
          var ctrl = this.form.get(dir.path);
          setUpControl(ctrl, dir);
          ctrl.updateValueAndValidity({
            emitEvent: false
          });
          this.directives.push(dir);
          return ctrl;
        }
        /**
         * \@description
         * Retrieves the `FormControl` instance from the provided `FormControlName` directive
         *
         * @param {?} dir The `FormControlName` directive instance.
         * @return {?}
         */

      }, {
        key: "getControl",
        value: function getControl(dir) {
          return (
            /** @type {?} */
            this.form.get(dir.path)
          );
        }
        /**
         * \@description
         * Removes the `FormControlName` instance from the internal list of directives
         *
         * @param {?} dir The `FormControlName` directive instance.
         * @return {?}
         */

      }, {
        key: "removeControl",
        value: function removeControl(dir) {
          removeDir(this.directives, dir);
        }
        /**
         * Adds a new `FormGroupName` directive instance to the form.
         *
         * @param {?} dir The `FormGroupName` directive instance.
         * @return {?}
         */

      }, {
        key: "addFormGroup",
        value: function addFormGroup(dir) {
          /** @type {?} */
          var ctrl = this.form.get(dir.path);
          setUpFormContainer(ctrl, dir);
          ctrl.updateValueAndValidity({
            emitEvent: false
          });
        }
        /**
         * No-op method to remove the form group.
         *
         * @param {?} dir The `FormGroupName` directive instance.
         * @return {?}
         */

      }, {
        key: "removeFormGroup",
        value: function removeFormGroup(dir) {}
        /**
         * \@description
         * Retrieves the `FormGroup` for a provided `FormGroupName` directive instance
         *
         * @param {?} dir The `FormGroupName` directive instance.
         * @return {?}
         */

      }, {
        key: "getFormGroup",
        value: function getFormGroup(dir) {
          return (
            /** @type {?} */
            this.form.get(dir.path)
          );
        }
        /**
         * Adds a new `FormArrayName` directive instance to the form.
         *
         * @param {?} dir The `FormArrayName` directive instance.
         * @return {?}
         */

      }, {
        key: "addFormArray",
        value: function addFormArray(dir) {
          /** @type {?} */
          var ctrl = this.form.get(dir.path);
          setUpFormContainer(ctrl, dir);
          ctrl.updateValueAndValidity({
            emitEvent: false
          });
        }
        /**
         * No-op method to remove the form array.
         *
         * @param {?} dir The `FormArrayName` directive instance.
         * @return {?}
         */

      }, {
        key: "removeFormArray",
        value: function removeFormArray(dir) {}
        /**
         * \@description
         * Retrieves the `FormArray` for a provided `FormArrayName` directive instance.
         *
         * @param {?} dir The `FormArrayName` directive instance.
         * @return {?}
         */

      }, {
        key: "getFormArray",
        value: function getFormArray(dir) {
          return (
            /** @type {?} */
            this.form.get(dir.path)
          );
        }
        /**
         * Sets the new value for the provided `FormControlName` directive.
         *
         * @param {?} dir The `FormControlName` directive instance.
         * @param {?} value The new value for the directive's control.
         * @return {?}
         */

      }, {
        key: "updateModel",
        value: function updateModel(dir, value) {
          /** @type {?} */
          var ctrl =
          /** @type {?} */
          this.form.get(dir.path);
          ctrl.setValue(value);
        }
        /**
         * \@description
         * Method called with the "submit" event is triggered on the form.
         * Triggers the `ngSubmit` emitter to emit the "submit" event as its payload.
         *
         * @param {?} $event The "submit" event object
         * @return {?}
         */

      }, {
        key: "onSubmit",
        value: function onSubmit($event) {
          /** @type {?} */
          this.submitted = true;
          syncPendingControls(this.form, this.directives);
          this.ngSubmit.emit($event);
          return false;
        }
        /**
         * \@description
         * Method called when the "reset" event is triggered on the form.
         * @return {?}
         */

      }, {
        key: "onReset",
        value: function onReset() {
          this.resetForm();
        }
        /**
         * \@description
         * Resets the form to an initial value and resets its submitted status.
         *
         * @param {?=} value The new value for the form.
         * @return {?}
         */

      }, {
        key: "resetForm",
        value: function resetForm() {
          var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : undefined;
          this.form.reset(value);

          /** @type {?} */
          this.submitted = false;
        }
        /**
         * \@internal
         * @return {?}
         */

      }, {
        key: "_updateDomValue",
        value: function _updateDomValue() {
          var _this34 = this;

          this.directives.forEach(
          /**
          * @param {?} dir
          * @return {?}
          */
          function (dir) {
            /** @type {?} */
            var newCtrl = _this34.form.get(dir.path);

            if (dir.control !== newCtrl) {
              cleanUpControl(dir.control, dir);
              if (newCtrl) setUpControl(newCtrl, dir);

              /** @type {?} */
              dir.control = newCtrl;
            }
          });

          this.form._updateTreeValidity({
            emitEvent: false
          });
        }
        /**
         * @private
         * @return {?}
         */

      }, {
        key: "_updateRegistrations",
        value: function _updateRegistrations() {
          var _this35 = this;

          this.form._registerOnCollectionChange(
          /**
          * @return {?}
          */
          function () {
            return _this35._updateDomValue();
          });

          if (this._oldForm) this._oldForm._registerOnCollectionChange(
          /**
          * @return {?}
          */
          function () {});
          this._oldForm = this.form;
        }
        /**
         * @private
         * @return {?}
         */

      }, {
        key: "_updateValidators",
        value: function _updateValidators() {
          /** @type {?} */
          var sync = composeValidators(this._validators);
          this.form.validator = Validators.compose([
          /** @type {?} */
          this.form.validator,
          /** @type {?} */
          sync]);
          /** @type {?} */

          var async = composeAsyncValidators(this._asyncValidators);
          this.form.asyncValidator = Validators.composeAsync([
          /** @type {?} */
          this.form.asyncValidator,
          /** @type {?} */
          async]);
        }
        /**
         * @private
         * @return {?}
         */

      }, {
        key: "_checkFormPresent",
        value: function _checkFormPresent() {
          if (!this.form) {
            ReactiveErrors.missingFormException();
          }
        }
      }, {
        key: "formDirective",
        get: function get() {
          return this;
        }
        /**
         * \@description
         * Returns the `FormGroup` bound to this directive.
         * @return {?}
         */

      }, {
        key: "control",
        get: function get() {
          return this.form;
        }
        /**
         * \@description
         * Returns an array representing the path to this group. Because this directive
         * always lives at the top level of a form, it always an empty array.
         * @return {?}
         */

      }, {
        key: "path",
        get: function get() {
          return [];
        }
      }]);

      return FormGroupDirective;
    }(ControlContainer);

    FormGroupDirective.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
      args: [{
        selector: '[formGroup]',
        providers: [formDirectiveProvider$1],
        host: {
          '(submit)': 'onSubmit($event)',
          '(reset)': 'onReset()'
        },
        exportAs: 'ngForm'
      }]
    }];
    /** @nocollapse */

    FormGroupDirective.ctorParameters = function () {
      return [{
        type: Array,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Self"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
          args: [NG_VALIDATORS]
        }]
      }, {
        type: Array,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Self"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
          args: [NG_ASYNC_VALIDATORS]
        }]
      }];
    };

    FormGroupDirective.propDecorators = {
      form: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
        args: ['formGroup']
      }],
      ngSubmit: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
      }]
    };

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /** @type {?} */


    var formGroupNameProvider = {
      provide: ControlContainer,
      useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(
      /**
      * @return {?}
      */
      function () {
        return FormGroupName;
      })
    };
    /**
     * \@description
     *
     * Syncs a nested `FormGroup` to a DOM element.
     *
     * This directive can only be used with a parent `FormGroupDirective`.
     *
     * It accepts the string name of the nested `FormGroup` to link, and
     * looks for a `FormGroup` registered with that name in the parent
     * `FormGroup` instance you passed into `FormGroupDirective`.
     *
     * Use nested form groups to validate a sub-group of a
     * form separately from the rest or to group the values of certain
     * controls into their own nested object.
     *
     * @see [Reactive Forms Guide](guide/reactive-forms)
     *
     * \@usageNotes
     *
     * ### Access the group by name
     *
     * The following example uses the {\@link AbstractControl#get get} method to access the
     * associated `FormGroup`
     *
     * ```ts
     *   this.form.get('name');
     * ```
     *
     * ### Access individual controls in the group
     *
     * The following example uses the {\@link AbstractControl#get get} method to access
     * individual controls within the group using dot syntax.
     *
     * ```ts
     *   this.form.get('name.first');
     * ```
     *
     * ### Register a nested `FormGroup`.
     *
     * The following example registers a nested *name* `FormGroup` within an existing `FormGroup`,
     * and provides methods to retrieve the nested `FormGroup` and individual controls.
     *
     * {\@example forms/ts/nestedFormGroup/nested_form_group_example.ts region='Component'}
     *
     * \@ngModule ReactiveFormsModule
     * \@publicApi
     */

    var FormGroupName = /*#__PURE__*/function (_AbstractFormGroupDir2) {
      _inherits(FormGroupName, _AbstractFormGroupDir2);

      var _super14 = _createSuper(FormGroupName);

      /**
       * @param {?} parent
       * @param {?} validators
       * @param {?} asyncValidators
       */
      function FormGroupName(parent, validators, asyncValidators) {
        var _this36;

        _classCallCheck(this, FormGroupName);

        _this36 = _super14.call(this);
        _this36._parent = parent;
        _this36._validators = validators;
        _this36._asyncValidators = asyncValidators;
        return _this36;
      }
      /**
       * \@internal
       * @return {?}
       */


      _createClass(FormGroupName, [{
        key: "_checkParentType",
        value: function _checkParentType() {
          if (_hasInvalidParent(this._parent)) {
            ReactiveErrors.groupParentException();
          }
        }
      }]);

      return FormGroupName;
    }(AbstractFormGroupDirective);

    FormGroupName.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
      args: [{
        selector: '[formGroupName]',
        providers: [formGroupNameProvider]
      }]
    }];
    /** @nocollapse */

    FormGroupName.ctorParameters = function () {
      return [{
        type: ControlContainer,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Host"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["SkipSelf"]
        }]
      }, {
        type: Array,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Self"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
          args: [NG_VALIDATORS]
        }]
      }, {
        type: Array,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Self"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
          args: [NG_ASYNC_VALIDATORS]
        }]
      }];
    };

    FormGroupName.propDecorators = {
      name: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
        args: ['formGroupName']
      }]
    };

    if (false) {}
    /** @type {?} */


    var formArrayNameProvider = {
      provide: ControlContainer,
      useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(
      /**
      * @return {?}
      */
      function () {
        return FormArrayName;
      })
    };
    /**
     * \@description
     *
     * Syncs a nested `FormArray` to a DOM element.
     *
     * This directive is designed to be used with a parent `FormGroupDirective` (selector:
     * `[formGroup]`).
     *
     * It accepts the string name of the nested `FormArray` you want to link, and
     * will look for a `FormArray` registered with that name in the parent
     * `FormGroup` instance you passed into `FormGroupDirective`.
     *
     * @see [Reactive Forms Guide](guide/reactive-forms)
     * @see `AbstractControl`
     *
     * \@usageNotes
     *
     * ### Example
     *
     * {\@example forms/ts/nestedFormArray/nested_form_array_example.ts region='Component'}
     *
     * \@ngModule ReactiveFormsModule
     * \@publicApi
     */

    var FormArrayName = /*#__PURE__*/function (_ControlContainer4) {
      _inherits(FormArrayName, _ControlContainer4);

      var _super15 = _createSuper(FormArrayName);

      /**
       * @param {?} parent
       * @param {?} validators
       * @param {?} asyncValidators
       */
      function FormArrayName(parent, validators, asyncValidators) {
        var _this37;

        _classCallCheck(this, FormArrayName);

        _this37 = _super15.call(this);
        _this37._parent = parent;
        _this37._validators = validators;
        _this37._asyncValidators = asyncValidators;
        return _this37;
      }
      /**
       * \@description
       * A lifecycle method called when the directive's inputs are initialized. For internal use only.
       *
       * @throws If the directive does not have a valid parent.
       * @return {?}
       */


      _createClass(FormArrayName, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this._checkParentType();

          /** @type {?} */
          this.formDirective.addFormArray(this);
        }
        /**
         * \@description
         * A lifecycle method called before the directive's instance is destroyed. For internal use only.
         * @return {?}
         */

      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          if (this.formDirective) {
            this.formDirective.removeFormArray(this);
          }
        }
        /**
         * \@description
         * The `FormArray` bound to this directive.
         * @return {?}
         */

      }, {
        key: "_checkParentType",

        /**
         * @private
         * @return {?}
         */
        value: function _checkParentType() {
          if (_hasInvalidParent(this._parent)) {
            ReactiveErrors.arrayParentException();
          }
        }
      }, {
        key: "control",
        get: function get() {
          return (
            /** @type {?} */
            this.formDirective.getFormArray(this)
          );
        }
        /**
         * \@description
         * The top-level directive for this group if present, otherwise null.
         * @return {?}
         */

      }, {
        key: "formDirective",
        get: function get() {
          return this._parent ?
          /** @type {?} */
          this._parent.formDirective : null;
        }
        /**
         * \@description
         * Returns an array that represents the path from the top-level form to this control.
         * Each index is the string name of the control on that level.
         * @return {?}
         */

      }, {
        key: "path",
        get: function get() {
          return controlPath(this.name, this._parent);
        }
        /**
         * \@description
         * Synchronous validator function composed of all the synchronous validators registered with this
         * directive.
         * @return {?}
         */

      }, {
        key: "validator",
        get: function get() {
          return composeValidators(this._validators);
        }
        /**
         * \@description
         * Async validator function composed of all the async validators registered with this directive.
         * @return {?}
         */

      }, {
        key: "asyncValidator",
        get: function get() {
          return composeAsyncValidators(this._asyncValidators);
        }
      }]);

      return FormArrayName;
    }(ControlContainer);

    FormArrayName.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
      args: [{
        selector: '[formArrayName]',
        providers: [formArrayNameProvider]
      }]
    }];
    /** @nocollapse */

    FormArrayName.ctorParameters = function () {
      return [{
        type: ControlContainer,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Host"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["SkipSelf"]
        }]
      }, {
        type: Array,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Self"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
          args: [NG_VALIDATORS]
        }]
      }, {
        type: Array,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Self"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
          args: [NG_ASYNC_VALIDATORS]
        }]
      }];
    };

    FormArrayName.propDecorators = {
      name: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
        args: ['formArrayName']
      }]
    };

    if (false) {}
    /**
     * @param {?} parent
     * @return {?}
     */


    function _hasInvalidParent(parent) {
      return !(parent instanceof FormGroupName) && !(parent instanceof FormGroupDirective) && !(parent instanceof FormArrayName);
    }
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /** @type {?} */


    var controlNameBinding = {
      provide: NgControl,
      useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(
      /**
      * @return {?}
      */
      function () {
        return FormControlName;
      })
    };
    /**
     * \@description
     * Syncs a `FormControl` in an existing `FormGroup` to a form control
     * element by name.
     *
     * @see [Reactive Forms Guide](guide/reactive-forms)
     * @see `FormControl`
     * @see `AbstractControl`
     *
     * \@usageNotes
     *
     * ### Register `FormControl` within a group
     *
     * The following example shows how to register multiple form controls within a form group
     * and set their value.
     *
     * {\@example forms/ts/simpleFormGroup/simple_form_group_example.ts region='Component'}
     *
     * To see `formControlName` examples with different form control types, see:
     *
     * * Radio buttons: `RadioControlValueAccessor`
     * * Selects: `SelectControlValueAccessor`
     *
     * ### Use with ngModel
     *
     * Support for using the `ngModel` input property and `ngModelChange` event with reactive
     * form directives has been deprecated in Angular v6 and will be removed in Angular v7.
     *
     * Now deprecated:
     *
     * ```html
     * <form [formGroup]="form">
     *   <input formControlName="first" [(ngModel)]="value">
     * </form>
     * ```
     *
     * ```ts
     * this.value = 'some value';
     * ```
     *
     * This has been deprecated for a few reasons. First, developers have found this pattern
     * confusing. It seems like the actual `ngModel` directive is being used, but in fact it's
     * an input/output property named `ngModel` on the reactive form directive that simply
     * approximates (some of) its behavior. Specifically, it allows getting/setting the value
     * and intercepting value events. However, some of `ngModel`'s other features - like
     * delaying updates with`ngModelOptions` or exporting the directive - simply don't work,
     * which has understandably caused some confusion.
     *
     * In addition, this pattern mixes template-driven and reactive forms strategies, which
     * we generally don't recommend because it doesn't take advantage of the full benefits of
     * either strategy. Setting the value in the template violates the template-agnostic
     * principles behind reactive forms, whereas adding a `FormControl`/`FormGroup` layer in
     * the class removes the convenience of defining forms in the template.
     *
     * To update your code before v7, you'll want to decide whether to stick with reactive form
     * directives (and get/set values using reactive forms patterns) or switch over to
     * template-driven directives.
     *
     * After (choice 1 - use reactive forms):
     *
     * ```html
     * <form [formGroup]="form">
     *   <input formControlName="first">
     * </form>
     * ```
     *
     * ```ts
     * this.form.get('first').setValue('some value');
     * ```
     *
     * After (choice 2 - use template-driven forms):
     *
     * ```html
     * <input [(ngModel)]="value">
     * ```
     *
     * ```ts
     * this.value = 'some value';
     * ```
     *
     * By default, when you use this pattern, you will see a deprecation warning once in dev
     * mode. You can choose to silence this warning by providing a config for
     * `ReactiveFormsModule` at import time:
     *
     * ```ts
     * imports: [
     *   ReactiveFormsModule.withConfig({warnOnNgModelWithFormControl: 'never'})
     * ]
     * ```
     *
     * Alternatively, you can choose to surface a separate warning for each instance of this
     * pattern with a config value of `"always"`. This may help to track down where in the code
     * the pattern is being used as the code is being updated.
     *
     * \@ngModule ReactiveFormsModule
     * \@publicApi
     */

    var FormControlName = /*#__PURE__*/function (_NgControl3) {
      _inherits(FormControlName, _NgControl3);

      var _super16 = _createSuper(FormControlName);

      /**
       * @param {?} parent
       * @param {?} validators
       * @param {?} asyncValidators
       * @param {?} valueAccessors
       * @param {?} _ngModelWarningConfig
       */
      function FormControlName(parent, validators, asyncValidators, valueAccessors, _ngModelWarningConfig) {
        var _this38;

        _classCallCheck(this, FormControlName);

        _this38 = _super16.call(this);
        _this38._ngModelWarningConfig = _ngModelWarningConfig;
        _this38._added = false;
        /**
         * @deprecated as of v6
         */

        _this38.update = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * \@description
         * Instance property used to track whether an ngModel warning has been sent out for this
         * particular FormControlName instance. Used to support warning config of "always".
         *
         * \@internal
         */

        _this38._ngModelWarningSent = false;
        _this38._parent = parent;
        _this38._rawValidators = validators || [];
        _this38._rawAsyncValidators = asyncValidators || [];
        _this38.valueAccessor = selectValueAccessor(_assertThisInitialized(_this38), valueAccessors);
        return _this38;
      }
      /**
       * \@description
       * Triggers a warning that this input should not be used with reactive forms.
       * @param {?} isDisabled
       * @return {?}
       */


      _createClass(FormControlName, [{
        key: "ngOnChanges",

        /**
         * \@description
         * A lifecycle method called when the directive's inputs change. For internal use only.
         *
         * @param {?} changes A object of key/value pairs for the set of changed inputs.
         * @return {?}
         */
        value: function ngOnChanges(changes) {
          if (!this._added) this._setUpControl();

          if (isPropertyUpdated(changes, this.viewModel)) {
            _ngModelWarning('formControlName', FormControlName, this, this._ngModelWarningConfig);

            this.viewModel = this.model;
            this.formDirective.updateModel(this, this.model);
          }
        }
        /**
         * \@description
         * Lifecycle method called before the directive's instance is destroyed. For internal use only.
         * @return {?}
         */

      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          if (this.formDirective) {
            this.formDirective.removeControl(this);
          }
        }
        /**
         * \@description
         * Sets the new value for the view model and emits an `ngModelChange` event.
         *
         * @param {?} newValue The new value for the view model.
         * @return {?}
         */

      }, {
        key: "viewToModelUpdate",
        value: function viewToModelUpdate(newValue) {
          this.viewModel = newValue;
          this.update.emit(newValue);
        }
        /**
         * \@description
         * Returns an array that represents the path from the top-level form to this control.
         * Each index is the string name of the control on that level.
         * @return {?}
         */

      }, {
        key: "_checkParentType",

        /**
         * @private
         * @return {?}
         */
        value: function _checkParentType() {
          if (!(this._parent instanceof FormGroupName) && this._parent instanceof AbstractFormGroupDirective) {
            ReactiveErrors.ngModelGroupException();
          } else if (!(this._parent instanceof FormGroupName) && !(this._parent instanceof FormGroupDirective) && !(this._parent instanceof FormArrayName)) {
            ReactiveErrors.controlParentException();
          }
        }
        /**
         * @private
         * @return {?}
         */

      }, {
        key: "_setUpControl",
        value: function _setUpControl() {
          this._checkParentType();

          /** @type {?} */
          this.control = this.formDirective.addControl(this);

          if (this.control.disabled &&
          /** @type {?} */
          this.valueAccessor.setDisabledState) {
            /** @type {?} */

            /** @type {?} */
            this.valueAccessor.setDisabledState(true);
          }

          this._added = true;
        }
      }, {
        key: "isDisabled",
        set: function set(isDisabled) {
          ReactiveErrors.disabledAttrWarning();
        }
      }, {
        key: "path",
        get: function get() {
          return controlPath(this.name,
          /** @type {?} */
          this._parent);
        }
        /**
         * \@description
         * The top-level directive for this group if present, otherwise null.
         * @return {?}
         */

      }, {
        key: "formDirective",
        get: function get() {
          return this._parent ? this._parent.formDirective : null;
        }
        /**
         * \@description
         * Synchronous validator function composed of all the synchronous validators
         * registered with this directive.
         * @return {?}
         */

      }, {
        key: "validator",
        get: function get() {
          return composeValidators(this._rawValidators);
        }
        /**
         * \@description
         * Async validator function composed of all the async validators registered with this
         * directive.
         * @return {?}
         */

      }, {
        key: "asyncValidator",
        get: function get() {
          return (
            /** @type {?} */
            composeAsyncValidators(this._rawAsyncValidators)
          );
        }
      }]);

      return FormControlName;
    }(NgControl);
    /**
     * \@description
     * Static property used to track whether any ngModel warnings have been sent across
     * all instances of FormControlName. Used to support warning config of "once".
     *
     * \@internal
     */


    FormControlName._ngModelWarningSentOnce = false;
    FormControlName.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
      args: [{
        selector: '[formControlName]',
        providers: [controlNameBinding]
      }]
    }];
    /** @nocollapse */

    FormControlName.ctorParameters = function () {
      return [{
        type: ControlContainer,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Host"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["SkipSelf"]
        }]
      }, {
        type: Array,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Self"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
          args: [NG_VALIDATORS]
        }]
      }, {
        type: Array,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Self"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
          args: [NG_ASYNC_VALIDATORS]
        }]
      }, {
        type: Array,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Self"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
          args: [NG_VALUE_ACCESSOR]
        }]
      }, {
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
          args: [NG_MODEL_WITH_FORM_CONTROL_WARNING]
        }]
      }];
    };

    FormControlName.propDecorators = {
      name: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
        args: ['formControlName']
      }],
      isDisabled: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
        args: ['disabled']
      }],
      model: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
        args: ['ngModel']
      }],
      update: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
        args: ['ngModelChange']
      }]
    };

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * \@description
     * An interface implemented by classes that perform synchronous validation.
     *
     * \@usageNotes
     *
     * ### Provide a custom validator
     *
     * The following example implements the `Validator` interface to create a
     * validator directive with a custom error key.
     *
     * ```typescript
     * \@Directive({
     *   selector: '[customValidator]',
     *   providers: [{provide: NG_VALIDATORS, useExisting: CustomValidatorDirective, multi: true}]
     * })
     * class CustomValidatorDirective implements Validator {
     *   validate(control: AbstractControl): ValidationErrors|null {
     *     return {'custom': true};
     *   }
     * }
     * ```
     *
     * \@publicApi
     * @record
     */


    function Validator() {}

    if (false) {}
    /**
     * \@description
     * An interface implemented by classes that perform asynchronous validation.
     *
     * \@usageNotes
     *
     * ### Provide a custom async validator directive
     *
     * The following example implements the `AsyncValidator` interface to create an
     * async validator directive with a custom error key.
     *
     * ```typescript
     * import { of as observableOf } from 'rxjs';
     *
     * \@Directive({
     *   selector: '[customAsyncValidator]',
     *   providers: [{provide: NG_ASYNC_VALIDATORS, useExisting: CustomAsyncValidatorDirective, multi:
     * true}]
     * })
     * class CustomAsyncValidatorDirective implements AsyncValidator {
     *   validate(control: AbstractControl): Observable<ValidationErrors|null> {
     *     return observableOf({'custom': true});
     *   }
     * }
     * ```
     *
     * \@publicApi
     * @record
     */


    function AsyncValidator() {}

    if (false) {}
    /**
     * \@description
     * Provider which adds `RequiredValidator` to the `NG_VALIDATORS` multi-provider list.
     * @type {?}
     */


    var REQUIRED_VALIDATOR = {
      provide: NG_VALIDATORS,
      useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(
      /**
      * @return {?}
      */
      function () {
        return RequiredValidator;
      }),
      multi: true
    };
    /**
     * \@description
     * Provider which adds `CheckboxRequiredValidator` to the `NG_VALIDATORS` multi-provider list.
     * @type {?}
     */

    var CHECKBOX_REQUIRED_VALIDATOR = {
      provide: NG_VALIDATORS,
      useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(
      /**
      * @return {?}
      */
      function () {
        return CheckboxRequiredValidator;
      }),
      multi: true
    };
    /**
     * \@description
     * A directive that adds the `required` validator to any controls marked with the
     * `required` attribute. The directive is provided with the `NG_VALIDATORS` multi-provider list.
     *
     * @see [Form Validation](guide/form-validation)
     *
     * \@usageNotes
     *
     * ### Adding a required validator using template-driven forms
     *
     * ```
     * <input name="fullName" ngModel required>
     * ```
     *
     * \@ngModule FormsModule
     * \@ngModule ReactiveFormsModule
     * \@publicApi
     */

    var RequiredValidator = /*#__PURE__*/function () {
      function RequiredValidator() {
        _classCallCheck(this, RequiredValidator);
      }

      _createClass(RequiredValidator, [{
        key: "validate",

        /**
         * \@description
         * Method that validates whether the control is empty.
         * Returns the validation result if enabled, otherwise null.
         * @param {?} control
         * @return {?}
         */
        value: function validate(control) {
          return this.required ? Validators.required(control) : null;
        }
        /**
         * \@description
         * Registers a callback function to call when the validator inputs change.
         *
         * @param {?} fn The callback function
         * @return {?}
         */

      }, {
        key: "registerOnValidatorChange",
        value: function registerOnValidatorChange(fn) {
          this._onChange = fn;
        }
      }, {
        key: "required",

        /**
         * \@description
         * Tracks changes to the required attribute bound to this directive.
         * @return {?}
         */
        get: function get() {
          return this._required;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
          this._required = value != null && value !== false && "".concat(value) !== 'false';
          if (this._onChange) this._onChange();
        }
      }]);

      return RequiredValidator;
    }();

    RequiredValidator.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
      args: [{
        selector: ':not([type=checkbox])[required][formControlName],:not([type=checkbox])[required][formControl],:not([type=checkbox])[required][ngModel]',
        providers: [REQUIRED_VALIDATOR],
        host: {
          '[attr.required]': 'required ? "" : null'
        }
      }]
    }];
    RequiredValidator.propDecorators = {
      required: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }]
    };

    if (false) {}
    /**
     * A Directive that adds the `required` validator to checkbox controls marked with the
     * `required` attribute. The directive is provided with the `NG_VALIDATORS` multi-provider list.
     *
     * @see [Form Validation](guide/form-validation)
     *
     * \@usageNotes
     *
     * ### Adding a required checkbox validator using template-driven forms
     *
     * The following example shows how to add a checkbox required validator to an input attached to an ngModel binding.
     *
     * ```
     * <input type="checkbox" name="active" ngModel required>
     * ```
     *
     * \@publicApi
     * \@ngModule FormsModule
     * \@ngModule ReactiveFormsModule
     */


    var CheckboxRequiredValidator = /*#__PURE__*/function (_RequiredValidator) {
      _inherits(CheckboxRequiredValidator, _RequiredValidator);

      var _super17 = _createSuper(CheckboxRequiredValidator);

      function CheckboxRequiredValidator() {
        _classCallCheck(this, CheckboxRequiredValidator);

        return _super17.apply(this, arguments);
      }

      _createClass(CheckboxRequiredValidator, [{
        key: "validate",

        /**
         * \@description
         * Method that validates whether or not the checkbox has been checked.
         * Returns the validation result if enabled, otherwise null.
         * @param {?} control
         * @return {?}
         */
        value: function validate(control) {
          return this.required ? Validators.requiredTrue(control) : null;
        }
      }]);

      return CheckboxRequiredValidator;
    }(RequiredValidator);

    CheckboxRequiredValidator.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
      args: [{
        selector: 'input[type=checkbox][required][formControlName],input[type=checkbox][required][formControl],input[type=checkbox][required][ngModel]',
        providers: [CHECKBOX_REQUIRED_VALIDATOR],
        host: {
          '[attr.required]': 'required ? "" : null'
        }
      }]
    }];
    /**
     * \@description
     * Provider which adds `EmailValidator` to the `NG_VALIDATORS` multi-provider list.
     * @type {?}
     */

    var EMAIL_VALIDATOR = {
      provide: NG_VALIDATORS,
      useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(
      /**
      * @return {?}
      */
      function () {
        return EmailValidator;
      }),
      multi: true
    };
    /**
     * A directive that adds the `email` validator to controls marked with the
     * `email` attribute. The directive is provided with the `NG_VALIDATORS` multi-provider list.
     *
     * @see [Form Validation](guide/form-validation)
     *
     * \@usageNotes
     *
     * ### Adding an email validator
     *
     * The following example shows how to add an email validator to an input attached to an ngModel binding.
     *
     * ```
     * <input type="email" name="email" ngModel email>
     * <input type="email" name="email" ngModel email="true">
     * <input type="email" name="email" ngModel [email]="true">
     * ```
     *
     * \@publicApi
     * \@ngModule FormsModule
     * \@ngModule ReactiveFormsModule
     */

    var EmailValidator = /*#__PURE__*/function () {
      function EmailValidator() {
        _classCallCheck(this, EmailValidator);
      }

      _createClass(EmailValidator, [{
        key: "validate",

        /**
         * \@description
         * Method that validates whether an email address is valid.
         * Returns the validation result if enabled, otherwise null.
         * @param {?} control
         * @return {?}
         */
        value: function validate(control) {
          return this._enabled ? Validators.email(control) : null;
        }
        /**
         * \@description
         * Registers a callback function to call when the validator inputs change.
         *
         * @param {?} fn The callback function
         * @return {?}
         */

      }, {
        key: "registerOnValidatorChange",
        value: function registerOnValidatorChange(fn) {
          this._onChange = fn;
        }
      }, {
        key: "email",

        /**
         * \@description
         * Tracks changes to the email attribute bound to this directive.
         * @param {?} value
         * @return {?}
         */
        set: function set(value) {
          this._enabled = value === '' || value === true || value === 'true';
          if (this._onChange) this._onChange();
        }
      }]);

      return EmailValidator;
    }();

    EmailValidator.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
      args: [{
        selector: '[email][formControlName],[email][formControl],[email][ngModel]',
        providers: [EMAIL_VALIDATOR]
      }]
    }];
    EmailValidator.propDecorators = {
      email: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }]
    };

    if (false) {}
    /**
     * \@description
     * A function that receives a control and synchronously returns a map of
     * validation errors if present, otherwise null.
     *
     * \@publicApi
     * @record
     */


    function ValidatorFn() {}
    /**
     * \@description
     * A function that receives a control and returns a Promise or observable
     * that emits validation errors if present, otherwise null.
     *
     * \@publicApi
     * @record
     */


    function AsyncValidatorFn() {}
    /**
     * \@description
     * Provider which adds `MinLengthValidator` to the `NG_VALIDATORS` multi-provider list.
     * @type {?}
     */


    var MIN_LENGTH_VALIDATOR = {
      provide: NG_VALIDATORS,
      useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(
      /**
      * @return {?}
      */
      function () {
        return MinLengthValidator;
      }),
      multi: true
    };
    /**
     * A directive that adds minimum length validation to controls marked with the
     * `minlength` attribute. The directive is provided with the `NG_VALIDATORS` mult-provider list.
     *
     * @see [Form Validation](guide/form-validation)
     *
     * \@usageNotes
     *
     * ### Adding a minimum length validator
     *
     * The following example shows how to add a minimum length validator to an input attached to an
     * ngModel binding.
     *
     * ```html
     * <input name="firstName" ngModel minlength="4">
     * ```
     *
     * \@ngModule ReactiveFormsModule
     * \@ngModule FormsModule
     * \@publicApi
     */

    var MinLengthValidator = /*#__PURE__*/function () {
      function MinLengthValidator() {
        _classCallCheck(this, MinLengthValidator);
      }

      _createClass(MinLengthValidator, [{
        key: "ngOnChanges",

        /**
         * \@description
         * A lifecycle method called when the directive's inputs change. For internal use
         * only.
         *
         * @param {?} changes A object of key/value pairs for the set of changed inputs.
         * @return {?}
         */
        value: function ngOnChanges(changes) {
          if ('minlength' in changes) {
            this._createValidator();

            if (this._onChange) this._onChange();
          }
        }
        /**
         * \@description
         * Method that validates whether the value meets a minimum length
         * requirement. Returns the validation result if enabled, otherwise null.
         * @param {?} control
         * @return {?}
         */

      }, {
        key: "validate",
        value: function validate(control) {
          return this.minlength == null ? null : this._validator(control);
        }
        /**
         * \@description
         * Registers a callback function to call when the validator inputs change.
         *
         * @param {?} fn The callback function
         * @return {?}
         */

      }, {
        key: "registerOnValidatorChange",
        value: function registerOnValidatorChange(fn) {
          this._onChange = fn;
        }
        /**
         * @private
         * @return {?}
         */

      }, {
        key: "_createValidator",
        value: function _createValidator() {
          this._validator = Validators.minLength(parseInt(this.minlength, 10));
        }
      }]);

      return MinLengthValidator;
    }();

    MinLengthValidator.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
      args: [{
        selector: '[minlength][formControlName],[minlength][formControl],[minlength][ngModel]',
        providers: [MIN_LENGTH_VALIDATOR],
        host: {
          '[attr.minlength]': 'minlength ? minlength : null'
        }
      }]
    }];
    MinLengthValidator.propDecorators = {
      minlength: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }]
    };

    if (false) {}
    /**
     * \@description
     * Provider which adds `MaxLengthValidator` to the `NG_VALIDATORS` multi-provider list.
     * @type {?}
     */


    var MAX_LENGTH_VALIDATOR = {
      provide: NG_VALIDATORS,
      useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(
      /**
      * @return {?}
      */
      function () {
        return MaxLengthValidator;
      }),
      multi: true
    };
    /**
     * A directive that adds max length validation to controls marked with the
     * `maxlength` attribute. The directive is provided with the `NG_VALIDATORS` multi-provider list.
     *
     * @see [Form Validation](guide/form-validation)
     *
     * \@usageNotes
     *
     * ### Adding a maximum length validator
     *
     * The following example shows how to add a maximum length validator to an input attached to an
     * ngModel binding.
     *
     * ```html
     * <input name="firstName" ngModel maxlength="25">
     * ```
     *
     * \@ngModule ReactiveFormsModule
     * \@ngModule FormsModule
     * \@publicApi
     */

    var MaxLengthValidator = /*#__PURE__*/function () {
      function MaxLengthValidator() {
        _classCallCheck(this, MaxLengthValidator);
      }

      _createClass(MaxLengthValidator, [{
        key: "ngOnChanges",

        /**
         * \@description
         * A lifecycle method called when the directive's inputs change. For internal use
         * only.
         *
         * @param {?} changes A object of key/value pairs for the set of changed inputs.
         * @return {?}
         */
        value: function ngOnChanges(changes) {
          if ('maxlength' in changes) {
            this._createValidator();

            if (this._onChange) this._onChange();
          }
        }
        /**
         * \@description
         * Method that validates whether the value exceeds
         * the maximum length requirement.
         * @param {?} control
         * @return {?}
         */

      }, {
        key: "validate",
        value: function validate(control) {
          return this.maxlength != null ? this._validator(control) : null;
        }
        /**
         * \@description
         * Registers a callback function to call when the validator inputs change.
         *
         * @param {?} fn The callback function
         * @return {?}
         */

      }, {
        key: "registerOnValidatorChange",
        value: function registerOnValidatorChange(fn) {
          this._onChange = fn;
        }
        /**
         * @private
         * @return {?}
         */

      }, {
        key: "_createValidator",
        value: function _createValidator() {
          this._validator = Validators.maxLength(parseInt(this.maxlength, 10));
        }
      }]);

      return MaxLengthValidator;
    }();

    MaxLengthValidator.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
      args: [{
        selector: '[maxlength][formControlName],[maxlength][formControl],[maxlength][ngModel]',
        providers: [MAX_LENGTH_VALIDATOR],
        host: {
          '[attr.maxlength]': 'maxlength ? maxlength : null'
        }
      }]
    }];
    MaxLengthValidator.propDecorators = {
      maxlength: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }]
    };

    if (false) {}
    /**
     * \@description
     * Provider which adds `PatternValidator` to the `NG_VALIDATORS` multi-provider list.
     * @type {?}
     */


    var PATTERN_VALIDATOR = {
      provide: NG_VALIDATORS,
      useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(
      /**
      * @return {?}
      */
      function () {
        return PatternValidator;
      }),
      multi: true
    };
    /**
     * \@description
     * A directive that adds regex pattern validation to controls marked with the
     * `pattern` attribute. The regex must match the entire control value.
     * The directive is provided with the `NG_VALIDATORS` multi-provider list.
     *
     * @see [Form Validation](guide/form-validation)
     *
     * \@usageNotes
     *
     * ### Adding a pattern validator
     *
     * The following example shows how to add a pattern validator to an input attached to an
     * ngModel binding.
     *
     * ```html
     * <input name="firstName" ngModel pattern="[a-zA-Z ]*">
     * ```
     *
     * \@ngModule ReactiveFormsModule
     * \@ngModule FormsModule
     * \@publicApi
     */

    var PatternValidator = /*#__PURE__*/function () {
      function PatternValidator() {
        _classCallCheck(this, PatternValidator);
      }

      _createClass(PatternValidator, [{
        key: "ngOnChanges",

        /**
         * \@description
         * A lifecycle method called when the directive's inputs change. For internal use
         * only.
         *
         * @param {?} changes A object of key/value pairs for the set of changed inputs.
         * @return {?}
         */
        value: function ngOnChanges(changes) {
          if ('pattern' in changes) {
            this._createValidator();

            if (this._onChange) this._onChange();
          }
        }
        /**
         * \@description
         * Method that validates whether the value matches the
         * the pattern requirement.
         * @param {?} control
         * @return {?}
         */

      }, {
        key: "validate",
        value: function validate(control) {
          return this._validator(control);
        }
        /**
         * \@description
         * Registers a callback function to call when the validator inputs change.
         *
         * @param {?} fn The callback function
         * @return {?}
         */

      }, {
        key: "registerOnValidatorChange",
        value: function registerOnValidatorChange(fn) {
          this._onChange = fn;
        }
        /**
         * @private
         * @return {?}
         */

      }, {
        key: "_createValidator",
        value: function _createValidator() {
          this._validator = Validators.pattern(this.pattern);
        }
      }]);

      return PatternValidator;
    }();

    PatternValidator.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
      args: [{
        selector: '[pattern][formControlName],[pattern][formControl],[pattern][ngModel]',
        providers: [PATTERN_VALIDATOR],
        host: {
          '[attr.pattern]': 'pattern ? pattern : null'
        }
      }]
    }];
    PatternValidator.propDecorators = {
      pattern: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }]
    };

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /** @type {?} */


    var SHARED_FORM_DIRECTIVES = [ɵNgNoValidate, NgSelectOption, ɵNgSelectMultipleOption, DefaultValueAccessor, NumberValueAccessor, RangeValueAccessor, CheckboxControlValueAccessor, SelectControlValueAccessor, SelectMultipleControlValueAccessor, RadioControlValueAccessor, NgControlStatus, NgControlStatusGroup, RequiredValidator, MinLengthValidator, MaxLengthValidator, PatternValidator, CheckboxRequiredValidator, EmailValidator];
    /** @type {?} */

    var TEMPLATE_DRIVEN_DIRECTIVES = [NgModel, NgModelGroup, NgForm, NgFormSelectorWarning];
    /** @type {?} */

    var REACTIVE_DRIVEN_DIRECTIVES = [FormControlDirective, FormGroupDirective, FormControlName, FormGroupName, FormArrayName];
    /**
     * Internal module used for sharing directives between FormsModule and ReactiveFormsModule
     */

    var ɵInternalFormsSharedModule = function ɵInternalFormsSharedModule() {
      _classCallCheck(this, ɵInternalFormsSharedModule);
    };

    ɵInternalFormsSharedModule.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
      args: [{
        declarations: SHARED_FORM_DIRECTIVES,
        exports: SHARED_FORM_DIRECTIVES
      }]
    }];
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @param {?} options
     * @return {?}
     */

    function isAbstractControlOptions(options) {
      return (
        /** @type {?} */
        options.asyncValidators !== undefined ||
        /** @type {?} */
        options.validators !== undefined ||
        /** @type {?} */
        options.updateOn !== undefined
      );
    }
    /**
     * \@description
     * Creates an `AbstractControl` from a user-specified configuration.
     *
     * The `FormBuilder` provides syntactic sugar that shortens creating instances of a `FormControl`,
     * `FormGroup`, or `FormArray`. It reduces the amount of boilerplate needed to build complex
     * forms.
     *
     * @see [Reactive Forms Guide](/guide/reactive-forms)
     *
     * \@publicApi
     */


    var FormBuilder = /*#__PURE__*/function () {
      function FormBuilder() {
        _classCallCheck(this, FormBuilder);
      }

      _createClass(FormBuilder, [{
        key: "group",

        /**
         * \@description
         * Construct a new `FormGroup` instance.
         *
         * @param {?} controlsConfig A collection of child controls. The key for each child is the name
         * under which it is registered.
         *
         * @param {?=} options Configuration options object for the `FormGroup`. The object can
         * have two shapes:
         *
         * 1) `AbstractControlOptions` object (preferred), which consists of:
         * * `validators`: A synchronous validator function, or an array of validator functions
         * * `asyncValidators`: A single async validator or array of async validator functions
         * * `updateOn`: The event upon which the control should be updated (options: 'change' | 'blur' |
         * submit')
         *
         * 2) Legacy configuration object, which consists of:
         * * `validator`: A synchronous validator function, or an array of validator functions
         * * `asyncValidator`: A single async validator or array of async validator functions
         *
         * @return {?}
         */
        value: function group(controlsConfig) {
          var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

          /** @type {?} */
          var controls = this._reduceControls(controlsConfig);
          /** @type {?} */


          var validators = null;
          /** @type {?} */

          var asyncValidators = null;
          /** @type {?} */

          var updateOn = undefined;

          if (options != null) {
            if (isAbstractControlOptions(options)) {
              // `options` are `AbstractControlOptions`
              validators = options.validators != null ? options.validators : null;
              asyncValidators = options.asyncValidators != null ? options.asyncValidators : null;
              updateOn = options.updateOn != null ? options.updateOn : undefined;
            } else {
              // `options` are legacy form group options
              validators = options['validator'] != null ? options['validator'] : null;
              asyncValidators = options['asyncValidator'] != null ? options['asyncValidator'] : null;
            }
          }

          return new FormGroup(controls, {
            asyncValidators: asyncValidators,
            updateOn: updateOn,
            validators: validators
          });
        }
        /**
         * \@description
         * Construct a new `FormControl` with the given state, validators and options.
         *
         * \@usageNotes
         *
         * ### Initialize a control as disabled
         *
         * The following example returns a control with an initial value in a disabled state.
         *
         * <code-example path="forms/ts/formBuilder/form_builder_example.ts" region="disabled-control">
         * </code-example>
         * @param {?} formState Initializes the control with an initial state value, or
         * with an object that contains both a value and a disabled status.
         *
         * @param {?=} validatorOrOpts A synchronous validator function, or an array of
         * such functions, or an `AbstractControlOptions` object that contains
         * validation functions and a validation trigger.
         *
         * @param {?=} asyncValidator A single async validator or array of async validator
         * functions.
         *
         * @return {?}
         */

      }, {
        key: "control",
        value: function control(formState, validatorOrOpts, asyncValidator) {
          return new FormControl(formState, validatorOrOpts, asyncValidator);
        }
        /**
         * Constructs a new `FormArray` from the given array of configurations,
         * validators and options.
         *
         * @param {?} controlsConfig An array of child controls or control configs. Each
         * child control is given an index when it is registered.
         *
         * @param {?=} validatorOrOpts A synchronous validator function, or an array of
         * such functions, or an `AbstractControlOptions` object that contains
         * validation functions and a validation trigger.
         *
         * @param {?=} asyncValidator A single async validator or array of async validator
         * functions.
         * @return {?}
         */

      }, {
        key: "array",
        value: function array(controlsConfig, validatorOrOpts, asyncValidator) {
          var _this39 = this;

          /** @type {?} */
          var controls = controlsConfig.map(
          /**
          * @param {?} c
          * @return {?}
          */
          function (c) {
            return _this39._createControl(c);
          });
          return new FormArray(controls, validatorOrOpts, asyncValidator);
        }
        /**
         * \@internal
         * @param {?} controlsConfig
         * @return {?}
         */

      }, {
        key: "_reduceControls",
        value: function _reduceControls(controlsConfig) {
          var _this40 = this;

          /** @type {?} */
          var controls = {};
          Object.keys(controlsConfig).forEach(
          /**
          * @param {?} controlName
          * @return {?}
          */
          function (controlName) {
            controls[controlName] = _this40._createControl(controlsConfig[controlName]);
          });
          return controls;
        }
        /**
         * \@internal
         * @param {?} controlConfig
         * @return {?}
         */

      }, {
        key: "_createControl",
        value: function _createControl(controlConfig) {
          if (controlConfig instanceof FormControl || controlConfig instanceof FormGroup || controlConfig instanceof FormArray) {
            return controlConfig;
          } else if (Array.isArray(controlConfig)) {
            /** @type {?} */
            var value = controlConfig[0];
            /** @type {?} */

            var validator = controlConfig.length > 1 ? controlConfig[1] : null;
            /** @type {?} */

            var asyncValidator = controlConfig.length > 2 ? controlConfig[2] : null;
            return this.control(value, validator, asyncValidator);
          } else {
            return this.control(controlConfig);
          }
        }
      }]);

      return FormBuilder;
    }();

    FormBuilder.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }];
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * \@publicApi
     * @type {?}
     */

    var VERSION = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["Version"]('8.2.14');
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Exports the required providers and directives for template-driven forms,
     * making them available for import by NgModules that import this module.
     *
     * @see [Forms Guide](/guide/forms)
     *
     * \@publicApi
     */

    var FormsModule = /*#__PURE__*/function () {
      function FormsModule() {
        _classCallCheck(this, FormsModule);
      }

      _createClass(FormsModule, null, [{
        key: "withConfig",

        /**
         * \@description
         * Provides options for configuring the template-driven forms module.
         *
         * @param {?} opts An object of configuration options
         * * `warnOnDeprecatedNgFormSelector` Configures when to emit a warning when the deprecated
         * `ngForm` selector is used.
         * @return {?}
         */
        value: function withConfig(opts) {
          return {
            ngModule: FormsModule,
            providers: [{
              provide: NG_FORM_SELECTOR_WARNING,
              useValue: opts.warnOnDeprecatedNgFormSelector
            }]
          };
        }
      }]);

      return FormsModule;
    }();

    FormsModule.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
      args: [{
        declarations: TEMPLATE_DRIVEN_DIRECTIVES,
        providers: [RadioControlRegistry],
        exports: [ɵInternalFormsSharedModule, TEMPLATE_DRIVEN_DIRECTIVES]
      }]
    }];
    /**
     * Exports the required infrastructure and directives for reactive forms,
     * making them available for import by NgModules that import this module.
     * @see [Forms](guide/reactive-forms)
     *
     * @see [Reactive Forms Guide](/guide/reactive-forms)
     *
     * \@publicApi
     */

    var ReactiveFormsModule = /*#__PURE__*/function () {
      function ReactiveFormsModule() {
        _classCallCheck(this, ReactiveFormsModule);
      }

      _createClass(ReactiveFormsModule, null, [{
        key: "withConfig",

        /**
         * \@description
         * Provides options for configuring the reactive forms module.
         *
         * @param {?} opts An object of configuration options
         * * `warnOnNgModelWithFormControl` Configures when to emit a warning when an `ngModel`
         * binding is used with reactive form directives.
         * @return {?}
         */
        value: function withConfig(opts) {
          return {
            ngModule: ReactiveFormsModule,
            providers: [{
              provide: NG_MODEL_WITH_FORM_CONTROL_WARNING,
              useValue: opts.warnOnNgModelWithFormControl
            }]
          };
        }
      }]);

      return ReactiveFormsModule;
    }();

    ReactiveFormsModule.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
      args: [{
        declarations: [REACTIVE_DRIVEN_DIRECTIVES],
        providers: [FormBuilder, RadioControlRegistry],
        exports: [ɵInternalFormsSharedModule, REACTIVE_DRIVEN_DIRECTIVES]
      }]
    }];
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Generated bundle index. Do not edit.
     */
    //# sourceMappingURL=forms.js.map

    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/components/footer/footer.component.html":
  /*!******************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layout/components/footer/footer.component.html ***!
    \******************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppLayoutComponentsFooterFooterComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<p>footer works!</p>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/components/header/header.component.html":
  /*!******************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layout/components/header/header.component.html ***!
    \******************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppLayoutComponentsHeaderHeaderComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"header\">\n    <div class=\"header-left\">\n        <a href=\"\"><img src=\"https://freehost-spec.github.io/dexcenter-dashboard/assets/images/icons/logo.png\"\n                alt=\"Logo\" width=\"50px\" height=\"100px\" class=\"mt-10 ml-10 logo\"></a>\n        <p class=\"companyname font-d-grey ml-10 font-xl\">DEXcenter Dashboard</p>\n        <div class=\"nav-path ml-30\">\n            <img src=\"https://freehost-spec.github.io/dexcenter-dashboard/assets/images/icons/home.svg\" alt=\"Home\"\n                class=\"icons-xxs icon mr-5\">\n            <p class=\"home font-m\">Home /</p>\n        </div>\n    </div>\n    <div class=\"header-right\">\n        <div class=\"mr-3\">\n            <p class=\"font-d-blue font-l\">DEXcenter Administrator</p>\n            <p class=\"font-d-blue font-s\">Last login 12/01/2020 : 15:30</p>\n        </div>\n        <img src=\"https://freehost-spec.github.io/dexcenter-dashboard/assets/images/icons/account_circle-24px.svg\"\n            class=\"icons-2xl\" alt=\" profile \">\n        <img src=\"https://freehost-spec.github.io/dexcenter-dashboard/assets/images/icons/arrow_drop_down-24px.svg \"\n            class=\"icons-s mr-10\" alt=\"caret \">\n        <div class=\"lang mr-10\">\n            <div class=\"sl-nav\">\n                <ul>\n                    <li>\n                        <p class=\"font-m font-d-grey pl-5 pt-5\">EN</p>\n                        <img src=\"https://freehost-spec.github.io/dexcenter-dashboard/assets/images/icons/keyboard_arrow_down-24px.svg \"\n                            class=\"icons-s ml-10 mt-2\" alt=\"dropdown \">\n                        <ul>\n                            <li><i class=\"sl-flag flag-de\">\n                                    <div id=\"germany\"></div>\n                                </i> <span class=\"active\">EN</span>\n                            </li>\n                            <li><i class=\"sl-flag flag-usa\">\n                                    <div id=\"germany\"></div>\n                                </i> <span>Englisch</span>\n                            </li>\n                        </ul>\n                    </li>\n                </ul>\n            </div>\n        </div>\n        <img src=\"https://freehost-spec.github.io/dexcenter-dashboard/assets/images/icons/help_outline-24px.svg \"\n            class=\"icons-s mr-10\" alt=\"help \">\n        <img src=\"https://freehost-spec.github.io/dexcenter-dashboard/assets/images/icons/signout.svg \"\n            class=\"icons-s mr-30\" alt=\"login \">\n    </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/components/side-nav/side-nav.component.html":
  /*!**********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layout/components/side-nav/side-nav.component.html ***!
    \**********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppLayoutComponentsSideNavSideNavComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!--Collapse Nav Bar -->\n<div class=\"side-nav\" *ngIf=\"!showNav\">\n  <img src=\"https://freehost-spec.github.io/dexcenter-dashboard/assets/images/icons/close.svg\" alt=\" Home\"\n    class=\"nav-icon open-nav cp\" (click)=\"openNav()\">\n</div>\n\n<!--Expand-Nav Bar -->\n<div class=\"side-nav side-nav-expand font-m\" *ngIf=\"showNav\">\n  <div class=\"left-collaps-icon\">\n    <img src=\"https://freehost-spec.github.io/dexcenter-dashboard/assets/images/icons/close.svg\" alt=\"\"\n      class=\"nav-icon close-nav cp\" (click)=\"openNav()\">\n  </div>\n  <div class=\"fav-tool-container mt-10 pl-20\">\n    <p><b>Favorite Tool</b></p>\n    <ng-container *ngFor=\"let item of fabList\">\n      <div class=\"nav-list mt-10\">\n        <img src=\"https://freehost-spec.github.io/dexcenter-dashboard/assets/images/icons/star.jpg\" alt=\"\"\n          class=\"icons-xxs mr-5\">\n        <div>{{item.name}}</div>\n      </div>\n    </ng-container>\n  </div>\n  <div class=\"pl-20 pr-20 mt-20\">\n    <hr>\n  </div>\n  <div class=\"admin-container mt-20 pl-20\">\n    <p><b>Administration</b></p>\n    <div class=\"nav-list mt-5\">\n      <ng-container *ngFor=\"let item of navList\">\n        <div class=\"p-5 ml-10 cp\" (click)=\"goToPage(item.route)\">{{item.name}}</div>\n      </ng-container>\n    </div>\n  </div>\n  <div class=\"pl-20 pr-20 mt-20\">\n    <hr>\n  </div>\n  <div class=\"help-container mt-20 pl-20\">\n    <p><b>Help</b></p>\n    <div class=\"nav-list mt-5\">\n      <div class=\"p-5 ml-10\">Documents</div>\n      <div class=\"p-5 ml-10\">About</div>\n      <div class=\"p-5 ml-10\">Support</div>\n    </div>\n    <div class=\"help-container mt-10 pl-20\">\n      <p><b>Help</b></p>\n      <div class=\"nav-list mt-5\">\n        <div class=\"mt-5 ml-10\">Documents</div>\n        <div class=\"mt-5 ml-10\">About</div>\n        <div class=\"mt-5 ml-10\">Support</div>\n      </div>\n\n    </div>\n  </div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/layout.component.html":
  /*!************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layout/layout.component.html ***!
    \************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppLayoutLayoutComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-header></app-header>\n<div class=\"main\">\n  <div class=\"nav\">\n    <app-side-nav></app-side-nav>\n  </div>\n  <div class=\"main-container\">\n    <router-outlet></router-outlet>\n  </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/main/activity/activity.component.html":
  /*!****************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layout/main/activity/activity.component.html ***!
    \****************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppLayoutMainActivityActivityComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div>\n  <button class=\"primary-btn\" (click)=\"changeNav('user')\"\n    [ngClass]=\"activatedTab === 'user' ? 'selected' : ''\">user</button>\n  <button class=\"primary-btn\" (click)=\"changeNav('sessions')\"\n    [ngClass]=\"activatedTab === 'sessions' ? 'selected' : ''\">session</button>\n  <button class=\"primary-btn\" (click)=\"changeNav('report')\"\n    [ngClass]=\"activatedTab === 'report' ? 'selected' : ''\">report</button>\n</div>\n\n<ng-container *ngIf=\"activatedTab === 'user'\">\n  <app-user></app-user>\n</ng-container>\n<ng-container *ngIf=\"activatedTab === 'sessions'\">\n  <app-sessions></app-sessions>\n</ng-container>\n<ng-container *ngIf=\"activatedTab === 'report'\">\n  <app-reports></app-reports>\n</ng-container>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/main/activity/reports/reports.component.html":
  /*!***********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layout/main/activity/reports/reports.component.html ***!
    \***********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppLayoutMainActivityReportsReportsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<p>reports works!</p>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/main/activity/sessions/sessions.component.html":
  /*!*************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layout/main/activity/sessions/sessions.component.html ***!
    \*************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppLayoutMainActivitySessionsSessionsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"info-container mt-10\">\n    <div class=\" info-data pl-10 head\">\n        <input type=\"checkbox\" class=\"mr-10\" />\n        <div class=\" name font-m font-bold \">\n            Session ID ↕\n        </div>\n        <div class=\"session font-m font-bold \">\n            Session Title ↕\n        </div>\n        <div class=\"recipient font-m font-bold \">\n            Recipient Companies ↕\n        </div>\n        <div class=\"sender font-m font-bold \">\n            Sender ↕\n        </div>\n        <div class=\"created_on font-m font-bold \">\n            Created On↕\n        </div>\n        <div class=\"status font-m font-bold \">\n            Status ↕\n        </div>\n        <div class=\"job-type font-m font-bold \">\n            Job Type ↕\n        </div>\n        <div class=\"originated-session font-m font-bold \">\n            Is Originated Session\n        </div>\n    </div>\n\n\n    <!-- <ng-container *ngFor=\"let list of filteredData let i=i ndex \"> -->\n    <div class=\"info-data \">\n        <div class=\"filter-row\">\n            <div class=\"filter-box mr-40 ml-30 filter-one \">\n                <input type=\"text \" placeholder=\"Filter\" name=\"filter \">\n                <img src=\" https://freehost-spec.github.io/dexcenter-dashboard/assets/images/icons/arrow_drop_down-24px.svg \"\n                    alt=\" \" class=\"icons-xs \">\n            </div>\n            <div class=\"filter-box mr-60 filter-two \">\n                <input type=\"text \" placeholder=\"Filter\" name=\"filter \">\n                <img src=\" https://freehost-spec.github.io/dexcenter-dashboard/assets/images/icons/arrow_drop_down-24px.svg \"\n                    alt=\" \" class=\"icons-xs \">\n            </div>\n            <div class=\"filter-box ml-40 mr-70 filter-three \">\n                <input type=\"text \" placeholder=\"Filter\" name=\"filter \">\n                <img src=\" https://freehost-spec.github.io/dexcenter-dashboard/assets/images/icons/arrow_drop_down-24px.svg \"\n                    alt=\" \" class=\"icons-xs \">\n            </div>\n            <div class=\"filter-box mr-40 ml-40 mr-60  filter-four \">\n                <input type=\"text \" placeholder=\"Filter\" name=\"filter \">\n                <img src=\" https://freehost-spec.github.io/dexcenter-dashboard/assets/images/icons/arrow_drop_down-24px.svg \"\n                    alt=\" \" class=\"icons-xs \">\n            </div>\n            <div class=\"filter-box mr-40 ml-40 mr-60  filter-five \">\n                <input type=\"text \" placeholder=\"Filter\" name=\"filter \">\n                <img src=\" https://freehost-spec.github.io/dexcenter-dashboard/assets/images/icons/arrow_drop_down-24px.svg \"\n                    alt=\" \" class=\"icons-xs \">\n            </div>\n            <div class=\"filter-box mr-40 filter-six \">\n                <input type=\"text \" placeholder=\"Filter\" name=\"filter \">\n                <img src=\" https://freehost-spec.github.io/dexcenter-dashboard/assets/images/icons/arrow_drop_down-24px.svg \"\n                    alt=\" \" class=\"icons-xs \">\n            </div>\n            <div class=\"filter-box mr-40 filter-seven \">\n                <input type=\"text \" placeholder=\"Filter\" name=\"filter \">\n                <img src=\" https://freehost-spec.github.io/dexcenter-dashboard/assets/images/icons/arrow_drop_down-24px.svg \"\n                    alt=\" \" class=\"icons-xs \">\n            </div>\n            <div class=\"filter-box mr-40 filter-eight \">\n                <input type=\"text \" placeholder=\"Filter\" name=\"filter \">\n                <img src=\" https://freehost-spec.github.io/dexcenter-dashboard/assets/images/icons/arrow_drop_down-24px.svg \"\n                    alt=\" \" class=\"icons-xs \">\n            </div>\n        </div>\n        <!-- <div class=\"name \">\n            <input type=\"checkbox \" />\n            <div class=\"pl-20 font-m \">{{list.name}}</div>\n        </div> -->\n        <!-- <div class=\"session font-m ml-10 \">\n            <div class=\"session-count \" (click)=\"getList(i) \">\n                <div>\n                    {{list.sessions}}\n                </div>\n            </div>\n            <div class=\"sessions-name \" *ngIf=\"showList && i===s electedIndex \">\n                <app-sessions [data]=\"list \"></app-sessions>\n            </div>\n        </div> -->\n        <!-- <div class=\"summary font-m \">\n            <app-summary [data]=\"list \"></app-summary>\n        </div> -->\n    </div>\n    <!-- </ng-container> -->\n    <ng-container>\n        <div class=\"page-container\">\n            <div class=\"pt-5 pb-5 page-content\">\n                <div class=\"pagination-left pl-20 pb-5 pt-5 font-s\">\n                    Viewing 07 of 200 Records\n                </div>\n                <div class=\"pagination-right font-s mr-30\">\n                    <div class=\"pb-5 pt-5\">\n                        <img src=\"https://freehost-spec.github.io/dexcenter-dashboard/assets/images/icons/skip_first.svg\"\n                            alt=\"\" class=\"icons-xs\">\n                    </div>\n                    <div class=\"pb-5 pt-5\">\n                        <img src=\"https://freehost-spec.github.io/dexcenter-dashboard/assets/images/icons/skip_previous.svg\"\n                            alt=\"\" class=\"icons-xs mr-10 ml-10\">\n                    </div>\n                    <div class=\"page-details\">\n                        <p>Page</p>\n                        <input type=\"text\" class=\"page-number ml-5 mr-5 p-5\" size=\"6\" value=\"1\">\n                        <p>of 76</p>\n                    </div>\n                    <div class=\"pb-5 pt-5\">\n                        <img src=\"https://freehost-spec.github.io/dexcenter-dashboard/assets/images/icons/skip_next.svg\"\n                            alt=\"\" class=\"icons-xs mr-10 ml-10\">\n                    </div>\n                    <div class=\"pb-5 pt-5\">\n                        <img src=\"https://freehost-spec.github.io/dexcenter-dashboard/assets/images/icons/skip_last.svg\"\n                            alt=\"\" class=\"icons-xs\">\n                    </div>\n                </div>\n            </div>\n\n        </div>\n    </ng-container>\n\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/main/activity/user/user.component.html":
  /*!*****************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layout/main/activity/user/user.component.html ***!
    \*****************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppLayoutMainActivityUserUserComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"info-container mt-10\">\n    <div class=\" info-data pl-10 head\">\n        <div class=\"activity pl-20 font-m font-bold\">\n            Activity Timeline\n        </div>\n        <div class=\"updated-on font-m font-bold\">\n            Updated On ↕\n        </div>\n        <div class=\"updated-by font-m font-bold\">\n            Updated By ↕\n        </div>\n    </div>\n    <!-- <ng-container *ngFor=\"let list of filteredData let i = index\"> -->\n    <div class=\"info-data\">\n        <div class=\"filter-row\">\n            <div class=\"filter-box ml-10 filter-one\">\n                <input type=\"text\" placeholder=\"Filter..\" name=\"filter\">\n                <img src=\" https://freehost-spec.github.io/dexcenter-dashboard/assets/images/icons/arrow_drop_down-24px.svg \"\n                    alt=\"\" class=\"icons-xs \">\n            </div>\n            <div class=\"filter-box filter-two\">\n                <input type=\"text\" placeholder=\"Filter..\" name=\"filter\">\n                <img src=\" https://freehost-spec.github.io/dexcenter-dashboard/assets/images/icons/arrow_drop_down-24px.svg \"\n                    alt=\"\" class=\"icons-xs \">\n            </div>\n            <div class=\"filter-box mr-40 filter-three\">\n                <input type=\"text\" placeholder=\"Filter..\" name=\"filter\">\n                <img src=\" https://freehost-spec.github.io/dexcenter-dashboard/assets/images/icons/arrow_drop_down-24px.svg \"\n                    alt=\"\" class=\"icons-xs \">\n            </div>\n        </div>\n        <!-- <div class=\"activity \">\n            <div class=\"pl-20 font-m \">{{list.activity}}</div>\n        </div> -->\n        <!-- <div class=\"updated-on font-m ml-10 \">\n            <div class=\"session-count \" (click)=\"getList(i) \">\n                <div>\n                    {{list.sessions}}\n                </div>\n            </div>\n            <div class=\"sessions-name \" *ngIf=\"showList && i===s electedIndex \">\n                <app-sessions [data]=\"list \"></app-sessions>\n            </div>\n        </div>\n        <div class=\"updated-by font-m \">\n            <app-updated-by [data]=\"list \"></app-updated-by>\n        </div> -->\n    </div>\n    <!-- </ng-container> -->\n\n    <ng-container>\n        <div class=\"page-container\">\n            <div class=\"pt-5 pb-5 page-content\">\n                <div class=\"pagination-left pl-20 pb-5 pt-5 font-s\">\n                    Viewing 07 of 200 Records\n                </div>\n                <div class=\"pagination-right font-s mr-30\">\n                    <div class=\"pb-5 pt-5\">\n                        <img src=\"https://freehost-spec.github.io/dexcenter-dashboard/assets/images/icons/skip_first.svg\"\n                            alt=\"\" class=\"icons-xs\">\n                    </div>\n                    <div class=\"pb-5 pt-5\">\n                        <img src=\"https://freehost-spec.github.io/dexcenter-dashboard/assets/images/icons/skip_previous.svg\"\n                            alt=\"\" class=\"icons-xs mr-10 ml-10\">\n                    </div>\n                    <div class=\"page-details\">\n                        <p>Page</p>\n                        <input type=\"text\" class=\"page-number ml-5 mr-5 p-5\" size=\"6\" value=\"1\">\n                        <p>of 76</p>\n                    </div>\n                    <div class=\"pb-5 pt-5\">\n                        <img src=\"https://freehost-spec.github.io/dexcenter-dashboard/assets/images/icons/skip_next.svg\"\n                            alt=\"\" class=\"icons-xs mr-10 ml-10\">\n                    </div>\n                    <div class=\"pb-5 pt-5\">\n                        <img src=\"https://freehost-spec.github.io/dexcenter-dashboard/assets/images/icons/skip_last.svg\"\n                            alt=\"\" class=\"icons-xs\">\n                    </div>\n                </div>\n            </div>\n\n        </div>\n    </ng-container>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/main/main.component.html":
  /*!***************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layout/main/main.component.html ***!
    \***************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppLayoutMainMainComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"main-container m-20 pl-10\">\n  <app-tools></app-tools>\n  <app-activity></app-activity>\n  <app-matrices></app-matrices>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/main/matrices/dynamic-session/dynamic-session.component.html":
  /*!***************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layout/main/matrices/dynamic-session/dynamic-session.component.html ***!
    \***************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppLayoutMainMatricesDynamicSessionDynamicSessionComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<p>dynamic-session works!</p>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/main/matrices/matrices.component.html":
  /*!****************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layout/main/matrices/matrices.component.html ***!
    \****************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppLayoutMainMatricesMatricesComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<p>matrices works!</p>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/main/matrices/mtbf/mtbf.component.html":
  /*!*****************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layout/main/matrices/mtbf/mtbf.component.html ***!
    \*****************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppLayoutMainMatricesMtbfMtbfComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<p>mtbf works!</p>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/main/matrices/summary/summary.component.html":
  /*!***********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layout/main/matrices/summary/summary.component.html ***!
    \***********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppLayoutMainMatricesSummarySummaryComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<p>summary works!</p>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/main/tools/tools.component.html":
  /*!**********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layout/main/tools/tools.component.html ***!
    \**********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppLayoutMainToolsToolsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"tools-section mb-20\">\n  <div class=\"page-title font-xl fw-500 mb-30\">\n    My Tools\n  </div>\n  <div class=\"selected-tools\">\n    <ng-container *ngFor=\"let item of selectedTools; let i = index\">\n      <div class=\"tools\">\n        {{item.name}}\n      </div>\n    </ng-container>\n  </div>\n  <div class=\"all-tools\">\n    <div class=\"tool-head cp\" (click)=\"closeTools()\">\n      <img [ngClass]=\"closeToolSec ? 'tool-icon-close' : 'tool-icon'\" class=\"\"\n        src=\"https://freehost-spec.github.io/dexcenter-dashboard/assets/images/icons/close.svg\">\n      <span class=\"pl-10\">\n        Tools\n      </span>\n    </div>\n    <div class=\"list\" *ngIf=\"!closeToolSec\">\n      <ng-container *ngFor=\"let item of tools; let i = index\">\n        <div class=\"tool p-10\">\n          <label class=\"switch\">\n            <input type=\"checkbox\" [(ngModel)]=\"item.selected\" [ngModelOptions]=\"{standalone: true}\"\n              (change)=\"selectTool(item)\">\n            <span class=\"slider round\"></span>\n          </label>\n          <div class=\"pl-10 pr-10\">{{item.name}}</div>\n        </div>\n      </ng-container>\n    </div>\n  </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/modules/pagination/paginate/paginate.component.html":
  /*!******************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/modules/pagination/paginate/paginate.component.html ***!
    \******************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSharedModulesPaginationPaginatePaginateComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ng-container *ngIf=\"data && data?.total_pages > 0 \">\n  <div class=\"pagination\">\n    <span class=\"page-label\">Page {{ data?.current_page }} of {{ data?.total_pages }}</span>\n    <span class=\"page-button-holder\">\n      <button class=\"mr-10\" [disabled]=\"!!data && data?.current_page === 1\"\n        (click)=\"pageChange(data?.current_page - 1)\">\n        <span class=\"navigation-arrow\">&lt;</span>\n        <span class=\"navigation-label\">Previous</span>\n      </button>\n      <span *ngFor=\"let i of pages\">\n        <button [disabled]=\"isNaN(i)\" class=\"page-button mr-5\" *ngIf=\"i != data?.current_page\" (click)=\"pageChange(i)\"\n          data]=\"{page: i}\">{{ i }}</button>\n        <button [disabled]=\"isNaN(i)\" class=\"page-button mr-5\" *ngIf=\"i == data?.current_page\" (click)=\"pageChange(i)\"\n          color=\"primary\">{{ i }}</button>\n      </span>\n      <button class=\"ml-5\" [disabled]=\"!!data && data?.current_page === data.total_pages\"\n        (click)=\"pageChange(data?.current_page + 1)\">\n        <span class=\"navigation-label\">Next</span>\n        <span class=\"navigation-arrow\">&gt;</span>\n      </button>\n    </span>\n  </div>\n</ng-container>\n";
    /***/
  },

  /***/
  "./src/app/layout/components/footer/footer.component.scss":
  /*!****************************************************************!*\
    !*** ./src/app/layout/components/footer/footer.component.scss ***!
    \****************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppLayoutComponentsFooterFooterComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xheW91dC9jb21wb25lbnRzL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/layout/components/footer/footer.component.ts":
  /*!**************************************************************!*\
    !*** ./src/app/layout/components/footer/footer.component.ts ***!
    \**************************************************************/

  /*! exports provided: FooterComponent */

  /***/
  function srcAppLayoutComponentsFooterFooterComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FooterComponent", function () {
      return FooterComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var FooterComponent = /*#__PURE__*/function () {
      function FooterComponent() {
        _classCallCheck(this, FooterComponent);
      }

      _createClass(FooterComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return FooterComponent;
    }();

    FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-footer',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./footer.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/components/footer/footer.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./footer.component.scss */
      "./src/app/layout/components/footer/footer.component.scss"))["default"]]
    })], FooterComponent);
    /***/
  },

  /***/
  "./src/app/layout/components/header/header.component.scss":
  /*!****************************************************************!*\
    !*** ./src/app/layout/components/header/header.component.scss ***!
    \****************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppLayoutComponentsHeaderHeaderComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".header {\n  background: WHITE 0% 0% no-repeat padding-box;\n  box-shadow: 0px 3px 6px #0000001F;\n  opacity: 1;\n  width: 100%;\n  height: 60px;\n  display: flex;\n  justify-content: space-between;\n}\n.header .header-left {\n  display: inline-flex;\n}\n.header .header-left .logo {\n  width: 59px;\n  height: 37px;\n  display: flex;\n  align-items: center;\n}\n.header .header-left .companyname {\n  letter-spacing: 0.18px;\n  opacity: 1;\n  display: flex;\n  align-items: center;\n}\n.header .header-left .nav-path {\n  display: flex;\n  align-items: center;\n}\n.header .header-left .nav-path .home {\n  display: flex;\n  align-items: center;\n  color: #989898;\n}\n.header-right {\n  display: inline-flex;\n  align-items: center;\n}\n.header-right .lang {\n  width: 55px;\n  height: 25px;\n  background: var(--unnamed-color-ffffff) 0% 0% no-repeat padding-box;\n  border: 1px solid var(--unnamed-color-dfe2ee);\n  background: #FFFFFF 0% 0% no-repeat padding-box;\n  border: 1px solid #DFE2EE;\n  border-radius: 4px;\n}\n.header-right .lang .sl-nav {\n  display: inline;\n}\n.header-right .lang .sl-nav ul {\n  margin: 0;\n  padding: 0;\n  list-style: none;\n  position: relative;\n  display: inline-block;\n}\n.header-right .lang .sl-nav li {\n  display: flex;\n  justify-content: space-between;\n  text-align: center;\n  padding-bottom: 10px;\n}\n.header-right .lang .sl-nav li img {\n  margin: auto;\n}\n.header-right .lang .sl-nav li ul {\n  display: none;\n}\n.header-right .lang .sl-nav li:hover ul {\n  position: absolute;\n  top: 29px;\n  right: -15px;\n  display: block;\n  background: #fff;\n  width: 120px;\n  padding-top: 0px;\n  z-index: 1;\n  border-radius: 5px;\n  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.2);\n}\n.header-right .lang .sl-nav li:hover .triangle {\n  position: absolute;\n  top: 15px;\n  right: -10px;\n  z-index: 10;\n  height: 14px;\n  overflow: hidden;\n  width: 30px;\n  background: transparent;\n}\n.header-right .lang .sl-nav li ul li {\n  position: relative;\n  text-align: left;\n  background: transparent;\n  padding: 15px 15px;\n  padding-bottom: 0;\n  z-index: 2;\n  font-size: 15px;\n  color: #3c3c3c;\n}\n.header-right .lang .sl-nav li ul li:last-of-type {\n  padding-bottom: 15px;\n}\n.header-right .lang .sl-nav li ul li span {\n  padding-left: 5px;\n}\n.header-right .lang .sl-nav li ul li span:hover,\n.header-right .lang .sl-nav li ul li span.active {\n  color: #146c78;\n}\n.header-right .lang .sl-flag {\n  display: inline-block;\n  box-shadow: 0px 0px 3px rgba(0, 0, 0, 0.4);\n  width: 15px;\n  height: 15px;\n  background: #aaa;\n  border-radius: 50%;\n  position: relative;\n  top: 2px;\n  overflow: hidden;\n}\n.header-right .lang .flag-de {\n  background: url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAIAAAAC64paAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAAZdEVYdFNvZnR3YXJlAHBhaW50Lm5ldCA0LjAuMTM0A1t6AAAAPUlEQVQ4T+3HMQ0AIBTE0NOHM8x9B7hgh71bIWGieUvze1m7kHGBr/AVvsJX+EpmP5dV5/gKX+ErfIUvVDYcX2NMxQC8PAAAAABJRU5ErkJggg==\");\n  background-size: cover;\n  background-position: center center;\n}\n.header-right .lang .flag-usa {\n  background-size: cover;\n  background-position: center center;\n  background: url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAIAAAAC64paAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAAZdEVYdFNvZnR3YXJlAHBhaW50Lm5ldCA0LjAuMTM0A1t6AAABhUlEQVQ4T2Ows82PjGixsc4LD2tysC/09Kjw8622tyuICG8u0w/cpGSCBzF4e1VmZkzw9anOzOj38a4KCW4IC22ECHYk1l9tn4gHMeTlTnZxLikvm+XiUpKW2hvgX+vnV5OVOQEoOGfOtv94AYOzU3Fd7XxHh6Lq6rlurqUx0W0J8Z1AnbW18yotonaYuOJBDBXls4A+bGpaBCTz86YEBtQCvVBSPAPIbY0oP1/aiAcxABU1Ny+2tclvbFjo5FgUF9uenNwNDLnmpkWEnV1TPRcY1O1tS4H6i4umA/0MDK2K8tlAwRqHpP1uoXgQKKraWpcClTY3LQZaCLQ5NaUX5OaWJY3++SeTC/AgBmA4AXUClUJs9ver8fKsAAYEUJCws4G21dXNB1oFdD/Qz8DQTk4C+bm2dn6DZ9bRiDQ8iAEYt8CoBpK5YBIYw0AEEZwSXX4oMB4PYoC6gCzAcDqrjGzEsMfen2xEmbMv1rSTjRi26dqRjShz9o2+6WQjBrSShQSkZAIADvW/HLrLY6cAAAAASUVORK5CYII=\");\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hcHBsZS9wcm9qZWN0L2RleGNlbnRlci1kYXNoYm9hcmQvc3JjL2FwcC9sYXlvdXQvY29tcG9uZW50cy9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9sYXlvdXQvY29tcG9uZW50cy9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksNkNBQUE7RUFDQSxpQ0FBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSw4QkFBQTtBQ0NKO0FEQUk7RUFDSSxvQkFBQTtBQ0VSO0FERFE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtBQ0daO0FERFE7RUFDSSxzQkFBQTtFQUNBLFVBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7QUNHWjtBRERRO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0FDR1o7QURGWTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7QUNJaEI7QURFQTtFQUNJLG9CQUFBO0VBQ0EsbUJBQUE7QUNDSjtBREFJO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxtRUFBQTtFQUNBLDZDQUFBO0VBQ0EsK0NBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0FDRVI7QUREUTtFQUNJLGVBQUE7QUNHWjtBREZZO0VBQ0ksU0FBQTtFQUNBLFVBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7QUNJaEI7QURGWTtFQUNJLGFBQUE7RUFDQSw4QkFBQTtFQUNBLGtCQUFBO0VBQ0Esb0JBQUE7QUNJaEI7QURIZ0I7RUFDSSxZQUFBO0FDS3BCO0FESGdCO0VBQ0ksYUFBQTtBQ0twQjtBREFRO0VBQ0ksa0JBQUE7RUFDQSxTQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtFQUNBLDJDQUFBO0FDRVo7QURBUTtFQUNJLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLHVCQUFBO0FDRVo7QURBUTtFQUNJLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxVQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7QUNFWjtBREFRO0VBQ0ksb0JBQUE7QUNFWjtBREFRO0VBQ0ksaUJBQUE7QUNFWjtBREFROztFQUVJLGNBQUE7QUNFWjtBREFRO0VBQ0kscUJBQUE7RUFDQSwwQ0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLGdCQUFBO0FDRVo7QURBUTtFQUNJLDZUQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQ0FBQTtBQ0VaO0FEQVE7RUFDSSxzQkFBQTtFQUNBLGtDQUFBO0VBQ0EsaXZCQUFBO0FDRVoiLCJmaWxlIjoic3JjL2FwcC9sYXlvdXQvY29tcG9uZW50cy9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhlYWRlciB7XG4gICAgYmFja2dyb3VuZDogV0hJVEUgMCUgMCUgbm8tcmVwZWF0IHBhZGRpbmctYm94O1xuICAgIGJveC1zaGFkb3c6IDBweCAzcHggNnB4ICMwMDAwMDAxRjtcbiAgICBvcGFjaXR5OiAxO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogNjBweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAuaGVhZGVyLWxlZnQge1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgICAgICAgLmxvZ28ge1xuICAgICAgICAgICAgd2lkdGg6IDU5cHg7XG4gICAgICAgICAgICBoZWlnaHQ6IDM3cHg7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgfVxuICAgICAgICAuY29tcGFueW5hbWUge1xuICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuMThweDtcbiAgICAgICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgfVxuICAgICAgICAubmF2LXBhdGgge1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICAuaG9tZSB7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgICAgIGNvbG9yOiAjOTg5ODk4O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuXG4uaGVhZGVyLXJpZ2h0IHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIC5sYW5nIHtcbiAgICAgICAgd2lkdGg6IDU1cHg7XG4gICAgICAgIGhlaWdodDogMjVweDtcbiAgICAgICAgYmFja2dyb3VuZDogdmFyKC0tdW5uYW1lZC1jb2xvci1mZmZmZmYpIDAlIDAlIG5vLXJlcGVhdCBwYWRkaW5nLWJveDtcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tdW5uYW1lZC1jb2xvci1kZmUyZWUpO1xuICAgICAgICBiYWNrZ3JvdW5kOiAjRkZGRkZGIDAlIDAlIG5vLXJlcGVhdCBwYWRkaW5nLWJveDtcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI0RGRTJFRTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgICAgICAuc2wtbmF2IHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZTtcbiAgICAgICAgICAgIHVsIHtcbiAgICAgICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgICAgICAgICBsaXN0LXN0eWxlOiBub25lO1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBsaSB7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xuICAgICAgICAgICAgICAgIGltZyB7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogYXV0bztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdWwge1xuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvLyBEcm9wZG93biBIb3ZlclxuICAgICAgICAuc2wtbmF2IGxpOmhvdmVyIHVsIHtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIHRvcDogMjlweDtcbiAgICAgICAgICAgIHJpZ2h0OiAtMTVweDtcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICAgICAgICAgIHdpZHRoOiAxMjBweDtcbiAgICAgICAgICAgIHBhZGRpbmctdG9wOiAwcHg7XG4gICAgICAgICAgICB6LWluZGV4OiAxO1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgICAgICAgYm94LXNoYWRvdzogMHB4IDBweCAyMHB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcbiAgICAgICAgfVxuICAgICAgICAuc2wtbmF2IGxpOmhvdmVyIC50cmlhbmdsZSB7XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICB0b3A6IDE1cHg7XG4gICAgICAgICAgICByaWdodDogLTEwcHg7XG4gICAgICAgICAgICB6LWluZGV4OiAxMDtcbiAgICAgICAgICAgIGhlaWdodDogMTRweDtcbiAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgICAgICB3aWR0aDogMzBweDtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgICAgICB9XG4gICAgICAgIC5zbC1uYXYgbGkgdWwgbGkge1xuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgICAgICAgICAgcGFkZGluZzogMTVweCAxNXB4O1xuICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDA7XG4gICAgICAgICAgICB6LWluZGV4OiAyO1xuICAgICAgICAgICAgZm9udC1zaXplOiAxNXB4O1xuICAgICAgICAgICAgY29sb3I6ICMzYzNjM2M7XG4gICAgICAgIH1cbiAgICAgICAgLnNsLW5hdiBsaSB1bCBsaTpsYXN0LW9mLXR5cGUge1xuICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDE1cHg7XG4gICAgICAgIH1cbiAgICAgICAgLnNsLW5hdiBsaSB1bCBsaSBzcGFuIHtcbiAgICAgICAgICAgIHBhZGRpbmctbGVmdDogNXB4O1xuICAgICAgICB9XG4gICAgICAgIC5zbC1uYXYgbGkgdWwgbGkgc3Bhbjpob3ZlcixcbiAgICAgICAgLnNsLW5hdiBsaSB1bCBsaSBzcGFuLmFjdGl2ZSB7XG4gICAgICAgICAgICBjb2xvcjogIzE0NmM3ODtcbiAgICAgICAgfVxuICAgICAgICAuc2wtZmxhZyB7XG4gICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgICBib3gtc2hhZG93OiAwcHggMHB4IDNweCByZ2JhKDAsIDAsIDAsIDAuNCk7XG4gICAgICAgICAgICB3aWR0aDogMTVweDtcbiAgICAgICAgICAgIGhlaWdodDogMTVweDtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICNhYWE7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICB0b3A6IDJweDtcbiAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgIH1cbiAgICAgICAgLmZsYWctZGUge1xuICAgICAgICAgICAgYmFja2dyb3VuZDogdXJsKCdkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUJRQUFBQVVDQUlBQUFBQzY0cGFBQUFBQVhOU1IwSUFyczRjNlFBQUFBUm5RVTFCQUFDeGp3djhZUVVBQUFBSmNFaFpjd0FBRHNNQUFBN0RBY2R2cUdRQUFBQVpkRVZZZEZOdlpuUjNZWEpsQUhCaGFXNTBMbTVsZENBMExqQXVNVE0wQTF0NkFBQUFQVWxFUVZRNFQrM0hNUTBBSUJURTBOT0hNOHg5QjdoZ2g3MWJJV0dpZVV2emUxbTdrSEdCci9BVnZzSlgrRXBtUDVkVjUvZ0tYK0VyZklVdlZEWWNYMk5NeFFDOFBBQUFBQUJKUlU1RXJrSmdnZz09Jyk7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgICAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIGNlbnRlcjtcbiAgICAgICAgfVxuICAgICAgICAuZmxhZy11c2Ege1xuICAgICAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICAgICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBjZW50ZXI7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiB1cmwoJ2RhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBQlFBQUFBVUNBSUFBQUFDNjRwYUFBQUFBWE5TUjBJQXJzNGM2UUFBQUFSblFVMUJBQUN4and2OFlRVUFBQUFKY0VoWmN3QUFEc01BQUE3REFjZHZxR1FBQUFBWmRFVllkRk52Wm5SM1lYSmxBSEJoYVc1MExtNWxkQ0EwTGpBdU1UTTBBMXQ2QUFBQmhVbEVRVlE0VDJPd3M4MlBqR2l4c2M0TEQydHlzQy8wOUtqdzg2MjJ0eXVJQ0c4dTB3L2NwR1NDQnpGNGUxVm1aa3p3OWFuT3pPajM4YTRLQ1c0SUMyMkVDSFlrMWw5dG40Z0hNZVRsVG5aeExpa3ZtK1hpVXBLVzJodmdYK3ZuVjVPVk9RRW9PR2ZPdHY5NEFZT3pVM0ZkN1h4SGg2THE2cmx1cnFVeDBXMEo4WjFBbmJXMTh5b3RvbmFZdU9KQkRCWGxzNEErYkdwYUJDVHo4NllFQnRRQ3ZWQlNQQVBJYlkwb1AxL2FpQWN4QUJVMU55KzJ0Y2x2YkZqbzVGZ1VGOXVlbk53TkRMbm1wa1dFblYxVFBSY1kxTzF0UzRINmk0dW1BLzBNREsySzh0bEF3UnFIcFAxdW9YZ1FLS3JhV3BjQ2xUWTNMUVphQ0xRNU5hVVg1T2FXSlkzKytTZVRDL0FnQm1BNEFYVUNsVUpzOXZlcjhmS3NBQVlFVUpDd3M0RzIxZFhOQjFvRmREL1F6OERRVGs0QytibTJkbjZEWjliUmlEUThpQUVZdDhDb0JwSzVZQklZdzBBRUVad1NYWDRvTUI0UFlvQzZnQ3pBY0RxcmpHekVzTWZlbjJ4RW1iTXYxclNUalJpMjZkcVJqU2h6OW8yKzZXUWpCclNTaFFTa1pBSUFEdlcvSExyTFk2Y0FBQUFBU1VWT1JLNUNZSUk9Jyk7XG4gICAgICAgIH1cbiAgICB9XG59IiwiLmhlYWRlciB7XG4gIGJhY2tncm91bmQ6IFdISVRFIDAlIDAlIG5vLXJlcGVhdCBwYWRkaW5nLWJveDtcbiAgYm94LXNoYWRvdzogMHB4IDNweCA2cHggIzAwMDAwMDFGO1xuICBvcGFjaXR5OiAxO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA2MHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG4uaGVhZGVyIC5oZWFkZXItbGVmdCB7XG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xufVxuLmhlYWRlciAuaGVhZGVyLWxlZnQgLmxvZ28ge1xuICB3aWR0aDogNTlweDtcbiAgaGVpZ2h0OiAzN3B4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLmhlYWRlciAuaGVhZGVyLWxlZnQgLmNvbXBhbnluYW1lIHtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMThweDtcbiAgb3BhY2l0eTogMTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5oZWFkZXIgLmhlYWRlci1sZWZ0IC5uYXYtcGF0aCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4uaGVhZGVyIC5oZWFkZXItbGVmdCAubmF2LXBhdGggLmhvbWUge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBjb2xvcjogIzk4OTg5ODtcbn1cblxuLmhlYWRlci1yaWdodCB7XG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLmhlYWRlci1yaWdodCAubGFuZyB7XG4gIHdpZHRoOiA1NXB4O1xuICBoZWlnaHQ6IDI1cHg7XG4gIGJhY2tncm91bmQ6IHZhcigtLXVubmFtZWQtY29sb3ItZmZmZmZmKSAwJSAwJSBuby1yZXBlYXQgcGFkZGluZy1ib3g7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLXVubmFtZWQtY29sb3ItZGZlMmVlKTtcbiAgYmFja2dyb3VuZDogI0ZGRkZGRiAwJSAwJSBuby1yZXBlYXQgcGFkZGluZy1ib3g7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNERkUyRUU7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbn1cbi5oZWFkZXItcmlnaHQgLmxhbmcgLnNsLW5hdiB7XG4gIGRpc3BsYXk6IGlubGluZTtcbn1cbi5oZWFkZXItcmlnaHQgLmxhbmcgLnNsLW5hdiB1bCB7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG4uaGVhZGVyLXJpZ2h0IC5sYW5nIC5zbC1uYXYgbGkge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZy1ib3R0b206IDEwcHg7XG59XG4uaGVhZGVyLXJpZ2h0IC5sYW5nIC5zbC1uYXYgbGkgaW1nIHtcbiAgbWFyZ2luOiBhdXRvO1xufVxuLmhlYWRlci1yaWdodCAubGFuZyAuc2wtbmF2IGxpIHVsIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cbi5oZWFkZXItcmlnaHQgLmxhbmcgLnNsLW5hdiBsaTpob3ZlciB1bCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAyOXB4O1xuICByaWdodDogLTE1cHg7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICB3aWR0aDogMTIwcHg7XG4gIHBhZGRpbmctdG9wOiAwcHg7XG4gIHotaW5kZXg6IDE7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgYm94LXNoYWRvdzogMHB4IDBweCAyMHB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcbn1cbi5oZWFkZXItcmlnaHQgLmxhbmcgLnNsLW5hdiBsaTpob3ZlciAudHJpYW5nbGUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMTVweDtcbiAgcmlnaHQ6IC0xMHB4O1xuICB6LWluZGV4OiAxMDtcbiAgaGVpZ2h0OiAxNHB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB3aWR0aDogMzBweDtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG59XG4uaGVhZGVyLXJpZ2h0IC5sYW5nIC5zbC1uYXYgbGkgdWwgbGkge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICBwYWRkaW5nOiAxNXB4IDE1cHg7XG4gIHBhZGRpbmctYm90dG9tOiAwO1xuICB6LWluZGV4OiAyO1xuICBmb250LXNpemU6IDE1cHg7XG4gIGNvbG9yOiAjM2MzYzNjO1xufVxuLmhlYWRlci1yaWdodCAubGFuZyAuc2wtbmF2IGxpIHVsIGxpOmxhc3Qtb2YtdHlwZSB7XG4gIHBhZGRpbmctYm90dG9tOiAxNXB4O1xufVxuLmhlYWRlci1yaWdodCAubGFuZyAuc2wtbmF2IGxpIHVsIGxpIHNwYW4ge1xuICBwYWRkaW5nLWxlZnQ6IDVweDtcbn1cbi5oZWFkZXItcmlnaHQgLmxhbmcgLnNsLW5hdiBsaSB1bCBsaSBzcGFuOmhvdmVyLFxuLmhlYWRlci1yaWdodCAubGFuZyAuc2wtbmF2IGxpIHVsIGxpIHNwYW4uYWN0aXZlIHtcbiAgY29sb3I6ICMxNDZjNzg7XG59XG4uaGVhZGVyLXJpZ2h0IC5sYW5nIC5zbC1mbGFnIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBib3gtc2hhZG93OiAwcHggMHB4IDNweCByZ2JhKDAsIDAsIDAsIDAuNCk7XG4gIHdpZHRoOiAxNXB4O1xuICBoZWlnaHQ6IDE1cHg7XG4gIGJhY2tncm91bmQ6ICNhYWE7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IDJweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbi5oZWFkZXItcmlnaHQgLmxhbmcgLmZsYWctZGUge1xuICBiYWNrZ3JvdW5kOiB1cmwoXCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUJRQUFBQVVDQUlBQUFBQzY0cGFBQUFBQVhOU1IwSUFyczRjNlFBQUFBUm5RVTFCQUFDeGp3djhZUVVBQUFBSmNFaFpjd0FBRHNNQUFBN0RBY2R2cUdRQUFBQVpkRVZZZEZOdlpuUjNZWEpsQUhCaGFXNTBMbTVsZENBMExqQXVNVE0wQTF0NkFBQUFQVWxFUVZRNFQrM0hNUTBBSUJURTBOT0hNOHg5QjdoZ2g3MWJJV0dpZVV2emUxbTdrSEdCci9BVnZzSlgrRXBtUDVkVjUvZ0tYK0VyZklVdlZEWWNYMk5NeFFDOFBBQUFBQUJKUlU1RXJrSmdnZz09XCIpO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyO1xufVxuLmhlYWRlci1yaWdodCAubGFuZyAuZmxhZy11c2Ege1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyO1xuICBiYWNrZ3JvdW5kOiB1cmwoXCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUJRQUFBQVVDQUlBQUFBQzY0cGFBQUFBQVhOU1IwSUFyczRjNlFBQUFBUm5RVTFCQUFDeGp3djhZUVVBQUFBSmNFaFpjd0FBRHNNQUFBN0RBY2R2cUdRQUFBQVpkRVZZZEZOdlpuUjNZWEpsQUhCaGFXNTBMbTVsZENBMExqQXVNVE0wQTF0NkFBQUJoVWxFUVZRNFQyT3dzODJQakdpeHNjNExEMnR5c0MvMDlLanc4NjIydHl1SUNHOHUwdy9jcEdTQ0J6RjRlMVZtWmt6dzlhbk96T2ozOGE0S0NXNElDMjJFQ0hZazFsOXRuNGdITWVUbFRuWnhMaWt2bStYaVVwS1cyaHZnWCt2blY1T1ZPUUVvT0dmT3R2OTRBWU96VTNGZDdYeEhoNkxxNnJsdXJxVXgwVzBKOFoxQW5iVzE4eW90b25hWXVPSkJEQlhsczRBK2JHcGFCQ1R6ODZZRUJ0UUN2VkJTUEFQSWJZMG9QMS9haUFjeEFCVTFOeSsydGNsdmJGam81RmdVRjl1ZW5Od05ETG5tcGtXRW5WMVRQUmNZMU8xdFM0SDZpNHVtQS8wTURLMks4dGxBd1JxSHBQMXVvWGdRS0tyYVdwY0NsVFkzTFFaYUNMUTVOYVVYNU9hV0pZMysrU2VUQy9BZ0JtQTRBWFVDbFVKczl2ZXI4ZktzQUFZRVVKQ3dzNEcyMWRYTkIxb0ZkRC9RejhEUVRrNEMrYm0yZG42RFo5YlJpRFE4aUFFWXQ4Q29CcEs1WUJJWXcwQUVFWndTWFg0b01CNFBZb0M2Z0N6QWNEcXJqR3pFc01mZW4yeEVtYk12MXJTVGpSaTI2ZHFSalNoejlvMis2V1FqQnJTU2hRU2taQUlBRHZXL0hMckxZNmNBQUFBQVNVVk9SSzVDWUlJPVwiKTtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/layout/components/header/header.component.ts":
  /*!**************************************************************!*\
    !*** ./src/app/layout/components/header/header.component.ts ***!
    \**************************************************************/

  /*! exports provided: HeaderComponent */

  /***/
  function srcAppLayoutComponentsHeaderHeaderComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HeaderComponent", function () {
      return HeaderComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var HeaderComponent = /*#__PURE__*/function () {
      function HeaderComponent() {
        _classCallCheck(this, HeaderComponent);
      }

      _createClass(HeaderComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return HeaderComponent;
    }();

    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-header',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./header.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/components/header/header.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./header.component.scss */
      "./src/app/layout/components/header/header.component.scss"))["default"]]
    })], HeaderComponent);
    /***/
  },

  /***/
  "./src/app/layout/components/side-nav/side-nav.component.scss":
  /*!********************************************************************!*\
    !*** ./src/app/layout/components/side-nav/side-nav.component.scss ***!
    \********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppLayoutComponentsSideNavSideNavComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".side-nav {\n  width: 100%;\n  height: 100vh;\n  background: #034ea2 0% 0% no-repeat padding-box;\n  box-shadow: 0px 3px 6px #00000029;\n  position: fixed;\n  width: 50px;\n  z-index: 10;\n}\n\n.nav-icon {\n  padding: 10px 15px;\n}\n\n.open-nav {\n  transform: rotate(180deg);\n}\n\n.close-nav {\n  float: right;\n}\n\n.side-nav-expand {\n  height: 100vh;\n  background: #034ea2 0% 0% no-repeat padding-box;\n  box-shadow: 0px 3px 6px #00000029;\n  width: 220px;\n  display: flex;\n  flex-direction: column;\n  color: white;\n}\n\n.side-nav-expand .fav-tool-container,\n.side-nav-expand .admin-container,\n.side-nav-expand .help-container {\n  display: flex;\n  flex-direction: column;\n  color: white;\n}\n\n.side-nav-expand .fav-tool-container .left-collaps-icon img,\n.side-nav-expand .admin-container .left-collaps-icon img,\n.side-nav-expand .help-container .left-collaps-icon img {\n  display: block;\n  float: right;\n}\n\n.side-nav-expand .fav-tool-container .fav-tool-container,\n.side-nav-expand .fav-tool-container .admin-container,\n.side-nav-expand .fav-tool-container .help-container,\n.side-nav-expand .admin-container .fav-tool-container,\n.side-nav-expand .admin-container .admin-container,\n.side-nav-expand .admin-container .help-container,\n.side-nav-expand .help-container .fav-tool-container,\n.side-nav-expand .help-container .admin-container,\n.side-nav-expand .help-container .help-container {\n  display: flex;\n  flex-direction: column;\n}\n\n.side-nav-expand .fav-tool-container .fav-tool-container .nav-list,\n.side-nav-expand .admin-container .fav-tool-container .nav-list,\n.side-nav-expand .help-container .fav-tool-container .nav-list {\n  display: flex;\n  flex-direction: row;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hcHBsZS9wcm9qZWN0L2RleGNlbnRlci1kYXNoYm9hcmQvc3JjL2FwcC9sYXlvdXQvY29tcG9uZW50cy9zaWRlLW5hdi9zaWRlLW5hdi5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbGF5b3V0L2NvbXBvbmVudHMvc2lkZS1uYXYvc2lkZS1uYXYuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDRSxXQUFBO0VBQ0EsYUFBQTtFQUNBLCtDQUFBO0VBQ0EsaUNBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7QUNBRjs7QURHQTtFQUNFLGtCQUFBO0FDQUY7O0FERUE7RUFDRSx5QkFBQTtBQ0NGOztBRENBO0VBQ0UsWUFBQTtBQ0VGOztBREVBO0VBQ0UsYUFBQTtFQUNBLCtDQUFBO0VBQ0EsaUNBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsWUFBQTtBQ0NGOztBREFFOzs7RUFHRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxZQUFBO0FDRUo7O0FEQU07OztFQUNFLGNBQUE7RUFDQSxZQUFBO0FDSVI7O0FEREk7Ozs7Ozs7OztFQUdFLGFBQUE7RUFDQSxzQkFBQTtBQ1NOOztBRE5NOzs7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7QUNVUiIsImZpbGUiOiJzcmMvYXBwL2xheW91dC9jb21wb25lbnRzL3NpZGUtbmF2L3NpZGUtbmF2LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQ29sbGFwc2UtTmF2IEJhclxuLnNpZGUtbmF2IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwdmg7XG4gIGJhY2tncm91bmQ6ICMwMzRlYTIgMCUgMCUgbm8tcmVwZWF0IHBhZGRpbmctYm94O1xuICBib3gtc2hhZG93OiAwcHggM3B4IDZweCAjMDAwMDAwMjk7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgd2lkdGg6IDUwcHg7XG4gIHotaW5kZXg6IDEwO1xufVxuXG4ubmF2LWljb24ge1xuICBwYWRkaW5nOiAxMHB4IDE1cHg7XG59XG4ub3Blbi1uYXYge1xuICB0cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpO1xufVxuLmNsb3NlLW5hdiB7XG4gIGZsb2F0OiByaWdodDtcbn1cblxuLy8gRXhwYW5kZWQtTmF2IEJhclxuLnNpZGUtbmF2LWV4cGFuZCB7XG4gIGhlaWdodDogMTAwdmg7XG4gIGJhY2tncm91bmQ6ICMwMzRlYTIgMCUgMCUgbm8tcmVwZWF0IHBhZGRpbmctYm94O1xuICBib3gtc2hhZG93OiAwcHggM3B4IDZweCAjMDAwMDAwMjk7XG4gIHdpZHRoOiAyMjBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgY29sb3I6IHdoaXRlO1xuICAuZmF2LXRvb2wtY29udGFpbmVyLFxuICAuYWRtaW4tY29udGFpbmVyLFxuICAuaGVscC1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgLmxlZnQtY29sbGFwcy1pY29uIHtcbiAgICAgIGltZyB7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICBmbG9hdDogcmlnaHQ7XG4gICAgICB9XG4gICAgfVxuICAgIC5mYXYtdG9vbC1jb250YWluZXIsXG4gICAgLmFkbWluLWNvbnRhaW5lcixcbiAgICAuaGVscC1jb250YWluZXIge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgfVxuICAgIC5mYXYtdG9vbC1jb250YWluZXIge1xuICAgICAgLm5hdi1saXN0IHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiIsIi5zaWRlLW5hdiB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMHZoO1xuICBiYWNrZ3JvdW5kOiAjMDM0ZWEyIDAlIDAlIG5vLXJlcGVhdCBwYWRkaW5nLWJveDtcbiAgYm94LXNoYWRvdzogMHB4IDNweCA2cHggIzAwMDAwMDI5O1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHdpZHRoOiA1MHB4O1xuICB6LWluZGV4OiAxMDtcbn1cblxuLm5hdi1pY29uIHtcbiAgcGFkZGluZzogMTBweCAxNXB4O1xufVxuXG4ub3Blbi1uYXYge1xuICB0cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpO1xufVxuXG4uY2xvc2UtbmF2IHtcbiAgZmxvYXQ6IHJpZ2h0O1xufVxuXG4uc2lkZS1uYXYtZXhwYW5kIHtcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgYmFja2dyb3VuZDogIzAzNGVhMiAwJSAwJSBuby1yZXBlYXQgcGFkZGluZy1ib3g7XG4gIGJveC1zaGFkb3c6IDBweCAzcHggNnB4ICMwMDAwMDAyOTtcbiAgd2lkdGg6IDIyMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBjb2xvcjogd2hpdGU7XG59XG4uc2lkZS1uYXYtZXhwYW5kIC5mYXYtdG9vbC1jb250YWluZXIsXG4uc2lkZS1uYXYtZXhwYW5kIC5hZG1pbi1jb250YWluZXIsXG4uc2lkZS1uYXYtZXhwYW5kIC5oZWxwLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGNvbG9yOiB3aGl0ZTtcbn1cbi5zaWRlLW5hdi1leHBhbmQgLmZhdi10b29sLWNvbnRhaW5lciAubGVmdC1jb2xsYXBzLWljb24gaW1nLFxuLnNpZGUtbmF2LWV4cGFuZCAuYWRtaW4tY29udGFpbmVyIC5sZWZ0LWNvbGxhcHMtaWNvbiBpbWcsXG4uc2lkZS1uYXYtZXhwYW5kIC5oZWxwLWNvbnRhaW5lciAubGVmdC1jb2xsYXBzLWljb24gaW1nIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGZsb2F0OiByaWdodDtcbn1cbi5zaWRlLW5hdi1leHBhbmQgLmZhdi10b29sLWNvbnRhaW5lciAuZmF2LXRvb2wtY29udGFpbmVyLFxuLnNpZGUtbmF2LWV4cGFuZCAuZmF2LXRvb2wtY29udGFpbmVyIC5hZG1pbi1jb250YWluZXIsXG4uc2lkZS1uYXYtZXhwYW5kIC5mYXYtdG9vbC1jb250YWluZXIgLmhlbHAtY29udGFpbmVyLFxuLnNpZGUtbmF2LWV4cGFuZCAuYWRtaW4tY29udGFpbmVyIC5mYXYtdG9vbC1jb250YWluZXIsXG4uc2lkZS1uYXYtZXhwYW5kIC5hZG1pbi1jb250YWluZXIgLmFkbWluLWNvbnRhaW5lcixcbi5zaWRlLW5hdi1leHBhbmQgLmFkbWluLWNvbnRhaW5lciAuaGVscC1jb250YWluZXIsXG4uc2lkZS1uYXYtZXhwYW5kIC5oZWxwLWNvbnRhaW5lciAuZmF2LXRvb2wtY29udGFpbmVyLFxuLnNpZGUtbmF2LWV4cGFuZCAuaGVscC1jb250YWluZXIgLmFkbWluLWNvbnRhaW5lcixcbi5zaWRlLW5hdi1leHBhbmQgLmhlbHAtY29udGFpbmVyIC5oZWxwLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG4uc2lkZS1uYXYtZXhwYW5kIC5mYXYtdG9vbC1jb250YWluZXIgLmZhdi10b29sLWNvbnRhaW5lciAubmF2LWxpc3QsXG4uc2lkZS1uYXYtZXhwYW5kIC5hZG1pbi1jb250YWluZXIgLmZhdi10b29sLWNvbnRhaW5lciAubmF2LWxpc3QsXG4uc2lkZS1uYXYtZXhwYW5kIC5oZWxwLWNvbnRhaW5lciAuZmF2LXRvb2wtY29udGFpbmVyIC5uYXYtbGlzdCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/layout/components/side-nav/side-nav.component.ts":
  /*!******************************************************************!*\
    !*** ./src/app/layout/components/side-nav/side-nav.component.ts ***!
    \******************************************************************/

  /*! exports provided: SideNavComponent */

  /***/
  function srcAppLayoutComponentsSideNavSideNavComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SideNavComponent", function () {
      return SideNavComponent;
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


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var src_app_services_common_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/services/common.service */
    "./src/app/services/common.service.ts");

    var SideNavComponent = /*#__PURE__*/function () {
      function SideNavComponent(router, commonService) {
        var _this41 = this;

        _classCallCheck(this, SideNavComponent);

        this.router = router;
        this.commonService = commonService;
        this.fabList = [];
        this.subscription = this.commonService.getData().subscribe(function (data) {
          if (data) {
            _this41.fabList = data.data;
          } else {
            _this41.fabList = [];
          }
        });
      }

      _createClass(SideNavComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.showNav = false;
          this.navList = [{
            name: 'Sessions',
            route: '/'
          }, {
            name: 'User Activation',
            route: '/'
          }, {
            name: 'User Management',
            route: '/'
          }, {
            name: 'Logging',
            route: '/'
          }, {
            name: 'Diagnostic',
            route: '/'
          }, {
            name: 'Workflow',
            route: '/'
          }, {
            name: 'Database Management',
            route: '/'
          }, {
            name: 'Datastores',
            route: '/'
          }, {
            name: 'Reports',
            route: '/'
          }, {
            name: 'Queue Information',
            route: '/queue-info'
          }, {
            name: 'System Connection',
            route: '/'
          }];
        }
      }, {
        key: "openNav",
        value: function openNav() {
          this.showNav = !this.showNav;
        }
      }, {
        key: "goToPage",
        value: function goToPage(route) {
          this.router.navigate([route]);
          this.showNav = false;
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          // unsubscribe to ensure no memory leaks
          this.subscription.unsubscribe();
        }
      }]);

      return SideNavComponent;
    }();

    SideNavComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: src_app_services_common_service__WEBPACK_IMPORTED_MODULE_3__["CommonService"]
      }];
    };

    SideNavComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-side-nav',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./side-nav.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/components/side-nav/side-nav.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./side-nav.component.scss */
      "./src/app/layout/components/side-nav/side-nav.component.scss"))["default"]]
    })], SideNavComponent);
    /***/
  },

  /***/
  "./src/app/layout/layout.component.scss":
  /*!**********************************************!*\
    !*** ./src/app/layout/layout.component.scss ***!
    \**********************************************/

  /*! exports provided: default */

  /***/
  function srcAppLayoutLayoutComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".main {\n  display: flex;\n}\n.main > .main-container {\n  width: 100%;\n  margin-left: 40px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hcHBsZS9wcm9qZWN0L2RleGNlbnRlci1kYXNoYm9hcmQvc3JjL2FwcC9sYXlvdXQvbGF5b3V0LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9sYXlvdXQvbGF5b3V0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtBQ0NKO0FEQUk7RUFDSSxXQUFBO0VBQ0EsaUJBQUE7QUNFUiIsImZpbGUiOiJzcmMvYXBwL2xheW91dC9sYXlvdXQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWFpbiB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICAmPi5tYWluLWNvbnRhaW5lciB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBtYXJnaW4tbGVmdDogNDBweDtcbiAgICB9XG59IiwiLm1haW4ge1xuICBkaXNwbGF5OiBmbGV4O1xufVxuLm1haW4gPiAubWFpbi1jb250YWluZXIge1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luLWxlZnQ6IDQwcHg7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/layout/layout.component.ts":
  /*!********************************************!*\
    !*** ./src/app/layout/layout.component.ts ***!
    \********************************************/

  /*! exports provided: LayoutComponent */

  /***/
  function srcAppLayoutLayoutComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LayoutComponent", function () {
      return LayoutComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var LayoutComponent = /*#__PURE__*/function () {
      function LayoutComponent() {
        _classCallCheck(this, LayoutComponent);
      }

      _createClass(LayoutComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return LayoutComponent;
    }();

    LayoutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-layout',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./layout.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/layout.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./layout.component.scss */
      "./src/app/layout/layout.component.scss"))["default"]]
    })], LayoutComponent);
    /***/
  },

  /***/
  "./src/app/layout/layout.module.ts":
  /*!*****************************************!*\
    !*** ./src/app/layout/layout.module.ts ***!
    \*****************************************/

  /*! exports provided: LayoutModule */

  /***/
  function srcAppLayoutLayoutModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LayoutModule", function () {
      return LayoutModule;
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


    var _layout_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./layout.routing.module */
    "./src/app/layout/layout.routing.module.ts");
    /* harmony import */


    var _main_main_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./main/main.component */
    "./src/app/layout/main/main.component.ts");
    /* harmony import */


    var _layout_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./layout.component */
    "./src/app/layout/layout.component.ts");
    /* harmony import */


    var _components_header_header_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./components/header/header.component */
    "./src/app/layout/components/header/header.component.ts");
    /* harmony import */


    var _components_side_nav_side_nav_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./components/side-nav/side-nav.component */
    "./src/app/layout/components/side-nav/side-nav.component.ts");
    /* harmony import */


    var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./components/footer/footer.component */
    "./src/app/layout/components/footer/footer.component.ts");
    /* harmony import */


    var _shared_modules_pagination_pagination_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../shared/modules/pagination/pagination.module */
    "./src/app/shared/modules/pagination/pagination.module.ts");
    /* harmony import */


    var _main_tools_tools_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./main/tools/tools.component */
    "./src/app/layout/main/tools/tools.component.ts");
    /* harmony import */


    var _main_activity_activity_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./main/activity/activity.component */
    "./src/app/layout/main/activity/activity.component.ts");
    /* harmony import */


    var _main_matrices_matrices_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./main/matrices/matrices.component */
    "./src/app/layout/main/matrices/matrices.component.ts");
    /* harmony import */


    var _main_activity_user_user_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./main/activity/user/user.component */
    "./src/app/layout/main/activity/user/user.component.ts");
    /* harmony import */


    var _main_activity_sessions_sessions_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./main/activity/sessions/sessions.component */
    "./src/app/layout/main/activity/sessions/sessions.component.ts");
    /* harmony import */


    var _main_activity_reports_reports_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./main/activity/reports/reports.component */
    "./src/app/layout/main/activity/reports/reports.component.ts");
    /* harmony import */


    var _main_matrices_summary_summary_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./main/matrices/summary/summary.component */
    "./src/app/layout/main/matrices/summary/summary.component.ts");
    /* harmony import */


    var _main_matrices_mtbf_mtbf_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./main/matrices/mtbf/mtbf.component */
    "./src/app/layout/main/matrices/mtbf/mtbf.component.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _main_matrices_dynamic_session_dynamic_session_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! ./main/matrices/dynamic-session/dynamic-session.component */
    "./src/app/layout/main/matrices/dynamic-session/dynamic-session.component.ts");

    var LayoutModule = function LayoutModule() {
      _classCallCheck(this, LayoutModule);
    };

    LayoutModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_layout_component__WEBPACK_IMPORTED_MODULE_5__["LayoutComponent"], _main_main_component__WEBPACK_IMPORTED_MODULE_4__["MainComponent"], _components_header_header_component__WEBPACK_IMPORTED_MODULE_6__["HeaderComponent"], _components_side_nav_side_nav_component__WEBPACK_IMPORTED_MODULE_7__["SideNavComponent"], _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_8__["FooterComponent"], _main_tools_tools_component__WEBPACK_IMPORTED_MODULE_10__["ToolsComponent"], _main_activity_activity_component__WEBPACK_IMPORTED_MODULE_11__["ActivityComponent"], _main_matrices_matrices_component__WEBPACK_IMPORTED_MODULE_12__["MatricesComponent"], _main_activity_user_user_component__WEBPACK_IMPORTED_MODULE_13__["UserComponent"], _main_activity_sessions_sessions_component__WEBPACK_IMPORTED_MODULE_14__["SessionsComponent"], _main_activity_reports_reports_component__WEBPACK_IMPORTED_MODULE_15__["ReportsComponent"], _main_matrices_summary_summary_component__WEBPACK_IMPORTED_MODULE_16__["SummaryComponent"], _main_matrices_mtbf_mtbf_component__WEBPACK_IMPORTED_MODULE_17__["MtbfComponent"], _main_matrices_dynamic_session_dynamic_session_component__WEBPACK_IMPORTED_MODULE_19__["DynamicSessionComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _layout_routing_module__WEBPACK_IMPORTED_MODULE_3__["LayoutRoutingModule"], _shared_modules_pagination_pagination_module__WEBPACK_IMPORTED_MODULE_9__["PaginationModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_18__["FormsModule"]]
    })], LayoutModule);
    /***/
  },

  /***/
  "./src/app/layout/layout.routing.module.ts":
  /*!*************************************************!*\
    !*** ./src/app/layout/layout.routing.module.ts ***!
    \*************************************************/

  /*! exports provided: LayoutRoutingModule */

  /***/
  function srcAppLayoutLayoutRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LayoutRoutingModule", function () {
      return LayoutRoutingModule;
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


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _layout_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./layout.component */
    "./src/app/layout/layout.component.ts");
    /* harmony import */


    var _main_main_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./main/main.component */
    "./src/app/layout/main/main.component.ts");

    var routes = [{
      path: '',
      component: _layout_component__WEBPACK_IMPORTED_MODULE_3__["LayoutComponent"],
      children: [{
        path: '',
        component: _main_main_component__WEBPACK_IMPORTED_MODULE_4__["MainComponent"]
      }, {
        path: 'queue-info',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | queue-info-queue-info-module */
          "queue-info-queue-info-module").then(__webpack_require__.bind(null,
          /*! ./queue-info/queue-info.module */
          "./src/app/layout/queue-info/queue-info.module.ts")).then(function (m) {
            return m.QueueInfoModule;
          });
        }
      }]
    }, {
      path: '**',
      redirectTo: ''
    }];

    var LayoutRoutingModule = function LayoutRoutingModule() {
      _classCallCheck(this, LayoutRoutingModule);
    };

    LayoutRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], LayoutRoutingModule);
    /***/
  },

  /***/
  "./src/app/layout/main/activity/activity.component.scss":
  /*!**************************************************************!*\
    !*** ./src/app/layout/main/activity/activity.component.scss ***!
    \**************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppLayoutMainActivityActivityComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".selected {\n  border: 1px solid #00a1d8;\n  background-color: #00a1d8;\n  color: #fff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hcHBsZS9wcm9qZWN0L2RleGNlbnRlci1kYXNoYm9hcmQvc3JjL2FwcC9sYXlvdXQvbWFpbi9hY3Rpdml0eS9hY3Rpdml0eS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbGF5b3V0L21haW4vYWN0aXZpdHkvYWN0aXZpdHkuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx5QkFBQTtFQUNBLHlCQUFBO0VBQ0EsV0FBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvbGF5b3V0L21haW4vYWN0aXZpdHkvYWN0aXZpdHkuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2VsZWN0ZWQge1xuICBib3JkZXI6IDFweCBzb2xpZCAjMDBhMWQ4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDBhMWQ4O1xuICBjb2xvcjogI2ZmZjtcbn1cbiIsIi5zZWxlY3RlZCB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICMwMGExZDg7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMGExZDg7XG4gIGNvbG9yOiAjZmZmO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/layout/main/activity/activity.component.ts":
  /*!************************************************************!*\
    !*** ./src/app/layout/main/activity/activity.component.ts ***!
    \************************************************************/

  /*! exports provided: ActivityComponent */

  /***/
  function srcAppLayoutMainActivityActivityComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ActivityComponent", function () {
      return ActivityComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var ActivityComponent = /*#__PURE__*/function () {
      function ActivityComponent() {
        _classCallCheck(this, ActivityComponent);
      }

      _createClass(ActivityComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.activatedTab = 'user';
        }
      }, {
        key: "changeNav",
        value: function changeNav(tab) {
          this.activatedTab = tab;
        }
      }]);

      return ActivityComponent;
    }();

    ActivityComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-activity',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./activity.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/main/activity/activity.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./activity.component.scss */
      "./src/app/layout/main/activity/activity.component.scss"))["default"]]
    })], ActivityComponent);
    /***/
  },

  /***/
  "./src/app/layout/main/activity/reports/reports.component.scss":
  /*!*********************************************************************!*\
    !*** ./src/app/layout/main/activity/reports/reports.component.scss ***!
    \*********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppLayoutMainActivityReportsReportsComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xheW91dC9tYWluL2FjdGl2aXR5L3JlcG9ydHMvcmVwb3J0cy5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/layout/main/activity/reports/reports.component.ts":
  /*!*******************************************************************!*\
    !*** ./src/app/layout/main/activity/reports/reports.component.ts ***!
    \*******************************************************************/

  /*! exports provided: ReportsComponent */

  /***/
  function srcAppLayoutMainActivityReportsReportsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ReportsComponent", function () {
      return ReportsComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var ReportsComponent = /*#__PURE__*/function () {
      function ReportsComponent() {
        _classCallCheck(this, ReportsComponent);
      }

      _createClass(ReportsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ReportsComponent;
    }();

    ReportsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-reports',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./reports.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/main/activity/reports/reports.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./reports.component.scss */
      "./src/app/layout/main/activity/reports/reports.component.scss"))["default"]]
    })], ReportsComponent);
    /***/
  },

  /***/
  "./src/app/layout/main/activity/sessions/sessions.component.scss":
  /*!***********************************************************************!*\
    !*** ./src/app/layout/main/activity/sessions/sessions.component.scss ***!
    \***********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppLayoutMainActivitySessionsSessionsComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".info-container .info-data {\n  display: flex;\n  justify-content: space-between;\n  background: #ffffff 0% 0% no-repeat padding-box;\n  border: 1px solid #c1c3c9;\n  padding: 4px 20px;\n}\n.info-container .info-data > .name {\n  width: 10%;\n  display: flex;\n  justify-content: left;\n  align-items: center !important;\n}\n.info-container .info-data > .session {\n  width: 20%;\n  text-align: left !important;\n  display: flex;\n  align-items: center;\n  position: relative;\n}\n.info-container .info-data > .session > .session-count {\n  display: flex;\n  text-align: left;\n  background-color: #35aff8;\n  padding: 5px;\n  align-items: center;\n  justify-content: center;\n  width: 50px;\n  color: #fff;\n  border-radius: 3px;\n  cursor: pointer;\n}\n.info-container .info-data > .session > .sessions-name {\n  position: absolute;\n  left: 50px;\n  top: 0px;\n  display: flex;\n}\n.info-container .info-data > .recipient {\n  width: 12%;\n}\n.info-container .info-data > .sender {\n  width: 5%;\n}\n.info-container .info-data > .created_on {\n  width: 10%;\n}\n.info-container .info-data > .status {\n  width: 10%;\n}\n.info-container .info-data > .job-type {\n  width: 10%;\n}\n.info-container .info-data > .originated-session {\n  width: 12%;\n}\n.info-container .info-data .filter-row {\n  width: 100%;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n}\n.info-container .info-data .filter-row .filter-box {\n  display: flex;\n  position: relative;\n}\n.info-container .info-data .filter-row .filter-box > input {\n  width: 100%;\n  padding: 5px 8px;\n  border: 1px solid #e3e5ea;\n}\n.info-container .info-data .filter-row .filter-box > img {\n  position: absolute;\n  right: 5px;\n  top: 5px;\n}\n.info-container .info-data .filter-row .filter-one {\n  width: 10%;\n}\n.info-container .info-data .filter-row .filter-two {\n  width: 20%;\n}\n.info-container .info-data .filter-row .filter-three {\n  width: 12%;\n}\n.info-container .info-data .filter-row .filter-four {\n  width: 5%;\n}\n.info-container .info-data .filter-row .filter-five {\n  width: 10%;\n}\n.info-container .info-data .filter-row .filter-six {\n  width: 10%;\n}\n.info-container .info-data .filter-row .filter-seven {\n  width: 10%;\n}\n.info-container .info-data .filter-row .filter-eight {\n  width: 12%;\n}\n.info-container .head {\n  display: flex;\n  justify-content: space-between;\n  text-align: left;\n  padding-top: 12px !important;\n  padding-bottom: 12px !important;\n  background-color: #dfe2ee !important;\n  border-radius: 4px 4px 0px 0px;\n  border: none;\n}\n.page-container {\n  background-color: #dfe2ee !important;\n  border: 1px solid #c1c3c9;\n  border-radius: 0px 0px 4px 4px;\n}\n.page-container .page-content {\n  display: flex;\n  justify-content: space-between;\n  text-align: left;\n  align-items: center;\n  color: #333333;\n}\n.page-container .page-content > .pagination-left {\n  width: 30%;\n}\n.page-container .page-content > .pagination-right {\n  width: 22%;\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-end;\n  align-items: center;\n}\n.page-container .page-content > .pagination-right .page-details {\n  display: flex;\n  flex-direction: row;\n  justify-content: center !important;\n  align-items: center;\n}\n.page-container .page-content > .pagination-right .page-details .page-number {\n  color: #333333;\n  border: 1px solid #c1c3c9;\n}\n.page-container .page-content > .pagination-right .page-details .page-number:focus {\n  outline-style: none;\n  color: #333333;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hcHBsZS9wcm9qZWN0L2RleGNlbnRlci1kYXNoYm9hcmQvc3JjL2FwcC9sYXlvdXQvbWFpbi9hY3Rpdml0eS9zZXNzaW9ucy9zZXNzaW9ucy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbGF5b3V0L21haW4vYWN0aXZpdHkvc2Vzc2lvbnMvc2Vzc2lvbnMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0k7RUFDSSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSwrQ0FBQTtFQUNBLHlCQUFBO0VBQ0EsaUJBQUE7QUNBUjtBRENRO0VBQ0ksVUFBQTtFQUNBLGFBQUE7RUFDQSxxQkFBQTtFQUNBLDhCQUFBO0FDQ1o7QURDUTtFQUNJLFVBQUE7RUFDQSwyQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FDQ1o7QURBWTtFQUNJLGFBQUE7RUFDQSxnQkFBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtBQ0VoQjtBREFZO0VBQ0ksa0JBQUE7RUFDQSxVQUFBO0VBQ0EsUUFBQTtFQUNBLGFBQUE7QUNFaEI7QURDUTtFQUNJLFVBQUE7QUNDWjtBRENRO0VBQ0ksU0FBQTtBQ0NaO0FEQ1E7RUFDSSxVQUFBO0FDQ1o7QURDUTtFQUNJLFVBQUE7QUNDWjtBRENRO0VBQ0ksVUFBQTtBQ0NaO0FEQ1E7RUFDSSxVQUFBO0FDQ1o7QURDUTtFQUNJLFdBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtBQ0NaO0FEQVk7RUFDSSxhQUFBO0VBQ0Esa0JBQUE7QUNFaEI7QUREZ0I7RUFDSSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5QkFBQTtBQ0dwQjtBRERnQjtFQUNJLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFFBQUE7QUNHcEI7QURBWTtFQUNJLFVBQUE7QUNFaEI7QURBWTtFQUNJLFVBQUE7QUNFaEI7QURBWTtFQUNJLFVBQUE7QUNFaEI7QURBWTtFQUNJLFNBQUE7QUNFaEI7QURBWTtFQUNJLFVBQUE7QUNFaEI7QURBWTtFQUNJLFVBQUE7QUNFaEI7QURBWTtFQUNJLFVBQUE7QUNFaEI7QURBWTtFQUNJLFVBQUE7QUNFaEI7QURFSTtFQUNJLGFBQUE7RUFDQSw4QkFBQTtFQUNBLGdCQUFBO0VBQ0EsNEJBQUE7RUFDQSwrQkFBQTtFQUNBLG9DQUFBO0VBQ0EsOEJBQUE7RUFDQSxZQUFBO0FDQVI7QURJQTtFQUNJLG9DQUFBO0VBQ0EseUJBQUE7RUFDQSw4QkFBQTtBQ0RKO0FERUk7RUFDSSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtBQ0FSO0FEQ1E7RUFDSSxVQUFBO0FDQ1o7QURDUTtFQUNJLFVBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0FDQ1o7QURBWTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGtDQUFBO0VBQ0EsbUJBQUE7QUNFaEI7QUREZ0I7RUFDSSxjQUFBO0VBQ0EseUJBQUE7QUNHcEI7QUREZ0I7RUFDSSxtQkFBQTtFQUNBLGNBQUE7QUNHcEIiLCJmaWxlIjoic3JjL2FwcC9sYXlvdXQvbWFpbi9hY3Rpdml0eS9zZXNzaW9ucy9zZXNzaW9ucy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pbmZvLWNvbnRhaW5lciB7XG4gICAgLmluZm8tZGF0YSB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgYmFja2dyb3VuZDogI2ZmZmZmZiAwJSAwJSBuby1yZXBlYXQgcGFkZGluZy1ib3g7XG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNjMWMzYzk7XG4gICAgICAgIHBhZGRpbmc6IDRweCAyMHB4O1xuICAgICAgICAmPi5uYW1lIHtcbiAgICAgICAgICAgIHdpZHRoOiAxMCU7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBsZWZ0O1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlciAhaW1wb3J0YW50O1xuICAgICAgICB9XG4gICAgICAgICY+LnNlc3Npb24ge1xuICAgICAgICAgICAgd2lkdGg6IDIwJTtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQgIWltcG9ydGFudDtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgJj4uc2Vzc2lvbi1jb3VudCB7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMzNWFmZjg7XG4gICAgICAgICAgICAgICAgcGFkZGluZzogNXB4O1xuICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDUwcHg7XG4gICAgICAgICAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogM3B4O1xuICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgICY+LnNlc3Npb25zLW5hbWUge1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICBsZWZ0OiA1MHB4O1xuICAgICAgICAgICAgICAgIHRvcDogMHB4O1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgJj4ucmVjaXBpZW50IHtcbiAgICAgICAgICAgIHdpZHRoOiAxMiU7XG4gICAgICAgIH1cbiAgICAgICAgJj4uc2VuZGVyIHtcbiAgICAgICAgICAgIHdpZHRoOiA1JTtcbiAgICAgICAgfVxuICAgICAgICAmPi5jcmVhdGVkX29uIHtcbiAgICAgICAgICAgIHdpZHRoOiAxMCU7XG4gICAgICAgIH1cbiAgICAgICAgJj4uc3RhdHVzIHtcbiAgICAgICAgICAgIHdpZHRoOiAxMCU7XG4gICAgICAgIH1cbiAgICAgICAgJj4uam9iLXR5cGUge1xuICAgICAgICAgICAgd2lkdGg6IDEwJTtcbiAgICAgICAgfVxuICAgICAgICAmPi5vcmlnaW5hdGVkLXNlc3Npb24ge1xuICAgICAgICAgICAgd2lkdGg6IDEyJTtcbiAgICAgICAgfVxuICAgICAgICAuZmlsdGVyLXJvdyB7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICAgICAgLmZpbHRlci1ib3gge1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgICAgICY+aW5wdXQge1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogNXB4IDhweDtcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2UzZTVlYTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgJj5pbWcge1xuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgICAgIHJpZ2h0OiA1cHg7XG4gICAgICAgICAgICAgICAgICAgIHRvcDogNXB4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5maWx0ZXItb25lIHtcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmZpbHRlci10d28ge1xuICAgICAgICAgICAgICAgIHdpZHRoOiAyMCU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuZmlsdGVyLXRocmVlIHtcbiAgICAgICAgICAgICAgICB3aWR0aDogMTIlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmZpbHRlci1mb3VyIHtcbiAgICAgICAgICAgICAgICB3aWR0aDogNSU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuZmlsdGVyLWZpdmUge1xuICAgICAgICAgICAgICAgIHdpZHRoOiAxMCU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuZmlsdGVyLXNpeCB7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwJTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5maWx0ZXItc2V2ZW4ge1xuICAgICAgICAgICAgICAgIHdpZHRoOiAxMCU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuZmlsdGVyLWVpZ2h0IHtcbiAgICAgICAgICAgICAgICB3aWR0aDogMTIlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIC5oZWFkIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgICBwYWRkaW5nLXRvcDogMTJweCAhaW1wb3J0YW50O1xuICAgICAgICBwYWRkaW5nLWJvdHRvbTogMTJweCAhaW1wb3J0YW50O1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGZlMmVlICFpbXBvcnRhbnQ7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDRweCA0cHggMHB4IDBweDtcbiAgICAgICAgYm9yZGVyOiBub25lO1xuICAgIH1cbn1cblxuLnBhZ2UtY29udGFpbmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGZlMmVlICFpbXBvcnRhbnQ7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2MxYzNjOTtcbiAgICBib3JkZXItcmFkaXVzOiAwcHggMHB4IDRweCA0cHg7XG4gICAgLnBhZ2UtY29udGVudCB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgY29sb3I6ICMzMzMzMzM7XG4gICAgICAgICY+LnBhZ2luYXRpb24tbGVmdCB7XG4gICAgICAgICAgICB3aWR0aDogMzAlO1xuICAgICAgICB9XG4gICAgICAgICY+LnBhZ2luYXRpb24tcmlnaHQge1xuICAgICAgICAgICAgd2lkdGg6IDIyJTtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICAucGFnZS1kZXRhaWxzIHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXIgIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgICAgIC5wYWdlLW51bWJlciB7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjMzMzMzMzO1xuICAgICAgICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjYzFjM2M5O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAucGFnZS1udW1iZXI6Zm9jdXMge1xuICAgICAgICAgICAgICAgICAgICBvdXRsaW5lLXN0eWxlOiBub25lO1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzMzMzMzMztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59IiwiLmluZm8tY29udGFpbmVyIC5pbmZvLWRhdGEge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGJhY2tncm91bmQ6ICNmZmZmZmYgMCUgMCUgbm8tcmVwZWF0IHBhZGRpbmctYm94O1xuICBib3JkZXI6IDFweCBzb2xpZCAjYzFjM2M5O1xuICBwYWRkaW5nOiA0cHggMjBweDtcbn1cbi5pbmZvLWNvbnRhaW5lciAuaW5mby1kYXRhID4gLm5hbWUge1xuICB3aWR0aDogMTAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGxlZnQ7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXIgIWltcG9ydGFudDtcbn1cbi5pbmZvLWNvbnRhaW5lciAuaW5mby1kYXRhID4gLnNlc3Npb24ge1xuICB3aWR0aDogMjAlO1xuICB0ZXh0LWFsaWduOiBsZWZ0ICFpbXBvcnRhbnQ7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5pbmZvLWNvbnRhaW5lciAuaW5mby1kYXRhID4gLnNlc3Npb24gPiAuc2Vzc2lvbi1jb3VudCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzNWFmZjg7XG4gIHBhZGRpbmc6IDVweDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHdpZHRoOiA1MHB4O1xuICBjb2xvcjogI2ZmZjtcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4uaW5mby1jb250YWluZXIgLmluZm8tZGF0YSA+IC5zZXNzaW9uID4gLnNlc3Npb25zLW5hbWUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDUwcHg7XG4gIHRvcDogMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xufVxuLmluZm8tY29udGFpbmVyIC5pbmZvLWRhdGEgPiAucmVjaXBpZW50IHtcbiAgd2lkdGg6IDEyJTtcbn1cbi5pbmZvLWNvbnRhaW5lciAuaW5mby1kYXRhID4gLnNlbmRlciB7XG4gIHdpZHRoOiA1JTtcbn1cbi5pbmZvLWNvbnRhaW5lciAuaW5mby1kYXRhID4gLmNyZWF0ZWRfb24ge1xuICB3aWR0aDogMTAlO1xufVxuLmluZm8tY29udGFpbmVyIC5pbmZvLWRhdGEgPiAuc3RhdHVzIHtcbiAgd2lkdGg6IDEwJTtcbn1cbi5pbmZvLWNvbnRhaW5lciAuaW5mby1kYXRhID4gLmpvYi10eXBlIHtcbiAgd2lkdGg6IDEwJTtcbn1cbi5pbmZvLWNvbnRhaW5lciAuaW5mby1kYXRhID4gLm9yaWdpbmF0ZWQtc2Vzc2lvbiB7XG4gIHdpZHRoOiAxMiU7XG59XG4uaW5mby1jb250YWluZXIgLmluZm8tZGF0YSAuZmlsdGVyLXJvdyB7XG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG4uaW5mby1jb250YWluZXIgLmluZm8tZGF0YSAuZmlsdGVyLXJvdyAuZmlsdGVyLWJveCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5pbmZvLWNvbnRhaW5lciAuaW5mby1kYXRhIC5maWx0ZXItcm93IC5maWx0ZXItYm94ID4gaW5wdXQge1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogNXB4IDhweDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2UzZTVlYTtcbn1cbi5pbmZvLWNvbnRhaW5lciAuaW5mby1kYXRhIC5maWx0ZXItcm93IC5maWx0ZXItYm94ID4gaW1nIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogNXB4O1xuICB0b3A6IDVweDtcbn1cbi5pbmZvLWNvbnRhaW5lciAuaW5mby1kYXRhIC5maWx0ZXItcm93IC5maWx0ZXItb25lIHtcbiAgd2lkdGg6IDEwJTtcbn1cbi5pbmZvLWNvbnRhaW5lciAuaW5mby1kYXRhIC5maWx0ZXItcm93IC5maWx0ZXItdHdvIHtcbiAgd2lkdGg6IDIwJTtcbn1cbi5pbmZvLWNvbnRhaW5lciAuaW5mby1kYXRhIC5maWx0ZXItcm93IC5maWx0ZXItdGhyZWUge1xuICB3aWR0aDogMTIlO1xufVxuLmluZm8tY29udGFpbmVyIC5pbmZvLWRhdGEgLmZpbHRlci1yb3cgLmZpbHRlci1mb3VyIHtcbiAgd2lkdGg6IDUlO1xufVxuLmluZm8tY29udGFpbmVyIC5pbmZvLWRhdGEgLmZpbHRlci1yb3cgLmZpbHRlci1maXZlIHtcbiAgd2lkdGg6IDEwJTtcbn1cbi5pbmZvLWNvbnRhaW5lciAuaW5mby1kYXRhIC5maWx0ZXItcm93IC5maWx0ZXItc2l4IHtcbiAgd2lkdGg6IDEwJTtcbn1cbi5pbmZvLWNvbnRhaW5lciAuaW5mby1kYXRhIC5maWx0ZXItcm93IC5maWx0ZXItc2V2ZW4ge1xuICB3aWR0aDogMTAlO1xufVxuLmluZm8tY29udGFpbmVyIC5pbmZvLWRhdGEgLmZpbHRlci1yb3cgLmZpbHRlci1laWdodCB7XG4gIHdpZHRoOiAxMiU7XG59XG4uaW5mby1jb250YWluZXIgLmhlYWQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIHBhZGRpbmctdG9wOiAxMnB4ICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmctYm90dG9tOiAxMnB4ICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQtY29sb3I6ICNkZmUyZWUgIWltcG9ydGFudDtcbiAgYm9yZGVyLXJhZGl1czogNHB4IDRweCAwcHggMHB4O1xuICBib3JkZXI6IG5vbmU7XG59XG5cbi5wYWdlLWNvbnRhaW5lciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNkZmUyZWUgIWltcG9ydGFudDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2MxYzNjOTtcbiAgYm9yZGVyLXJhZGl1czogMHB4IDBweCA0cHggNHB4O1xufVxuLnBhZ2UtY29udGFpbmVyIC5wYWdlLWNvbnRlbnQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGNvbG9yOiAjMzMzMzMzO1xufVxuLnBhZ2UtY29udGFpbmVyIC5wYWdlLWNvbnRlbnQgPiAucGFnaW5hdGlvbi1sZWZ0IHtcbiAgd2lkdGg6IDMwJTtcbn1cbi5wYWdlLWNvbnRhaW5lciAucGFnZS1jb250ZW50ID4gLnBhZ2luYXRpb24tcmlnaHQge1xuICB3aWR0aDogMjIlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLnBhZ2UtY29udGFpbmVyIC5wYWdlLWNvbnRlbnQgPiAucGFnaW5hdGlvbi1yaWdodCAucGFnZS1kZXRhaWxzIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXIgIWltcG9ydGFudDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5wYWdlLWNvbnRhaW5lciAucGFnZS1jb250ZW50ID4gLnBhZ2luYXRpb24tcmlnaHQgLnBhZ2UtZGV0YWlscyAucGFnZS1udW1iZXIge1xuICBjb2xvcjogIzMzMzMzMztcbiAgYm9yZGVyOiAxcHggc29saWQgI2MxYzNjOTtcbn1cbi5wYWdlLWNvbnRhaW5lciAucGFnZS1jb250ZW50ID4gLnBhZ2luYXRpb24tcmlnaHQgLnBhZ2UtZGV0YWlscyAucGFnZS1udW1iZXI6Zm9jdXMge1xuICBvdXRsaW5lLXN0eWxlOiBub25lO1xuICBjb2xvcjogIzMzMzMzMztcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/layout/main/activity/sessions/sessions.component.ts":
  /*!*********************************************************************!*\
    !*** ./src/app/layout/main/activity/sessions/sessions.component.ts ***!
    \*********************************************************************/

  /*! exports provided: SessionsComponent */

  /***/
  function srcAppLayoutMainActivitySessionsSessionsComponentTs(module, __webpack_exports__, __webpack_require__) {
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
        value: function ngOnInit() {}
      }]);

      return SessionsComponent;
    }();

    SessionsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-sessions',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./sessions.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/main/activity/sessions/sessions.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./sessions.component.scss */
      "./src/app/layout/main/activity/sessions/sessions.component.scss"))["default"]]
    })], SessionsComponent);
    /***/
  },

  /***/
  "./src/app/layout/main/activity/user/user.component.scss":
  /*!***************************************************************!*\
    !*** ./src/app/layout/main/activity/user/user.component.scss ***!
    \***************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppLayoutMainActivityUserUserComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".info-container .info-data {\n  display: flex;\n  justify-content: space-between;\n  background: #ffffff 0% 0% no-repeat padding-box;\n  border: 1px solid #c1c3c9;\n  padding: 4px 20px;\n}\n.info-container .info-data > .activity {\n  width: 50%;\n  display: flex;\n  justify-content: left;\n  align-items: center !important;\n}\n.info-container .info-data > .updated-on {\n  width: 20%;\n  margin-left: 100px;\n  text-align: left !important;\n  display: flex;\n  align-items: center;\n  position: relative;\n}\n.info-container .info-data > .updated-on > .session-count {\n  display: flex;\n  text-align: left;\n  background-color: #35aff8;\n  padding: 5px;\n  align-items: center;\n  justify-content: center;\n  width: 50px;\n  color: #fff;\n  border-radius: 3px;\n  cursor: pointer;\n}\n.info-container .info-data > .updated-on > .sessions-name {\n  position: absolute;\n  left: 50px;\n  top: 0px;\n  display: flex;\n}\n.info-container .info-data > .updated-by {\n  width: 20%;\n  display: flex;\n  justify-content: center !important;\n}\n.info-container .info-data .filter-row {\n  width: 100%;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n}\n.info-container .info-data .filter-row .filter-box {\n  display: flex;\n  position: relative;\n}\n.info-container .info-data .filter-row .filter-box > input {\n  width: 100%;\n  padding: 5px 12px;\n  border: 1px solid #e3e5ea;\n}\n.info-container .info-data .filter-row .filter-box > img {\n  position: absolute;\n  right: 10px;\n  top: 5px;\n}\n.info-container .info-data .filter-row .filter-one {\n  width: 20%;\n}\n.info-container .info-data .filter-row .filter-two {\n  width: 15%;\n  margin-left: 320px;\n}\n.info-container .info-data .filter-row .filter-three {\n  width: 10%;\n}\n.info-container .head {\n  display: flex;\n  justify-content: space-between;\n  text-align: left;\n  padding-top: 12px !important;\n  padding-bottom: 12px !important;\n  background-color: #dfe2ee !important;\n  border-radius: 4px 4px 0px 0px;\n  border: none;\n}\n.page-container {\n  background-color: #dfe2ee !important;\n  border: 1px solid #c1c3c9;\n  border-radius: 0px 0px 4px 4px;\n}\n.page-container .page-content {\n  display: flex;\n  justify-content: space-between;\n  text-align: left;\n  align-items: center;\n  color: #333333;\n}\n.page-container .page-content > .pagination-left {\n  width: 30%;\n}\n.page-container .page-content > .pagination-right {\n  width: 22%;\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-end;\n  align-items: center;\n}\n.page-container .page-content > .pagination-right .page-details {\n  display: flex;\n  flex-direction: row;\n  justify-content: center !important;\n  align-items: center;\n}\n.page-container .page-content > .pagination-right .page-details .page-number {\n  color: #333333;\n  border: 1px solid #c1c3c9;\n}\n.page-container .page-content > .pagination-right .page-details .page-number:focus {\n  outline-style: none;\n  color: #333333;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hcHBsZS9wcm9qZWN0L2RleGNlbnRlci1kYXNoYm9hcmQvc3JjL2FwcC9sYXlvdXQvbWFpbi9hY3Rpdml0eS91c2VyL3VzZXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2xheW91dC9tYWluL2FjdGl2aXR5L3VzZXIvdXNlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDSTtFQUNJLGFBQUE7RUFDQSw4QkFBQTtFQUNBLCtDQUFBO0VBQ0EseUJBQUE7RUFDQSxpQkFBQTtBQ0FSO0FEQ1E7RUFDSSxVQUFBO0VBQ0EsYUFBQTtFQUNBLHFCQUFBO0VBQ0EsOEJBQUE7QUNDWjtBRENRO0VBQ0ksVUFBQTtFQUNBLGtCQUFBO0VBQ0EsMkJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQ0NaO0FEQVk7RUFDSSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7QUNFaEI7QURBWTtFQUNJLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFFBQUE7RUFDQSxhQUFBO0FDRWhCO0FEQ1E7RUFDSSxVQUFBO0VBQ0EsYUFBQTtFQUNBLGtDQUFBO0FDQ1o7QURDUTtFQUNJLFdBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtBQ0NaO0FEQVk7RUFDSSxhQUFBO0VBQ0Esa0JBQUE7QUNFaEI7QUREZ0I7RUFDSSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSx5QkFBQTtBQ0dwQjtBRERnQjtFQUNJLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFFBQUE7QUNHcEI7QURBWTtFQUNJLFVBQUE7QUNFaEI7QURBWTtFQUNJLFVBQUE7RUFDQSxrQkFBQTtBQ0VoQjtBREFZO0VBQ0ksVUFBQTtBQ0VoQjtBREVJO0VBQ0ksYUFBQTtFQUNBLDhCQUFBO0VBQ0EsZ0JBQUE7RUFDQSw0QkFBQTtFQUNBLCtCQUFBO0VBQ0Esb0NBQUE7RUFDQSw4QkFBQTtFQUNBLFlBQUE7QUNBUjtBREVDO0VBQ0csb0NBQUE7RUFDQSx5QkFBQTtFQUNBLDhCQUFBO0FDQ0o7QURBSTtFQUNJLGFBQUE7RUFDQSw4QkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0FDRVI7QUREUTtFQUNJLFVBQUE7QUNHWjtBRERRO0VBQ0ksVUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7QUNHWjtBREZZO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0NBQUE7RUFDQSxtQkFBQTtBQ0loQjtBREhnQjtFQUNJLGNBQUE7RUFDQSx5QkFBQTtBQ0twQjtBREhnQjtFQUNJLG1CQUFBO0VBQ0EsY0FBQTtBQ0twQiIsImZpbGUiOiJzcmMvYXBwL2xheW91dC9tYWluL2FjdGl2aXR5L3VzZXIvdXNlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pbmZvLWNvbnRhaW5lciB7XG4gICAgLmluZm8tZGF0YSB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgYmFja2dyb3VuZDogI2ZmZmZmZiAwJSAwJSBuby1yZXBlYXQgcGFkZGluZy1ib3g7XG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNjMWMzYzk7XG4gICAgICAgIHBhZGRpbmc6IDRweCAyMHB4O1xuICAgICAgICAmPi5hY3Rpdml0eSB7XG4gICAgICAgICAgICB3aWR0aDogNTAlO1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogbGVmdDtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXIgIWltcG9ydGFudDtcbiAgICAgICAgfVxuICAgICAgICAmPi51cGRhdGVkLW9uIHtcbiAgICAgICAgICAgIHdpZHRoOiAyMCU7XG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogMTAwcHg7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgICY+LnNlc3Npb24tY291bnQge1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzVhZmY4O1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDVweDtcbiAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgICAgICAgIHdpZHRoOiA1MHB4O1xuICAgICAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAmPi5zZXNzaW9ucy1uYW1lIHtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgbGVmdDogNTBweDtcbiAgICAgICAgICAgICAgICB0b3A6IDBweDtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgICY+LnVwZGF0ZWQtYnkge1xuICAgICAgICAgICAgd2lkdGg6IDIwJTtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlciAhaW1wb3J0YW50O1xuICAgICAgICB9XG4gICAgICAgIC5maWx0ZXItcm93IHtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgICAgICAuZmlsdGVyLWJveCB7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICAgICAgJj5pbnB1dCB7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiA1cHggMTJweDtcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2UzZTVlYTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgJj5pbWcge1xuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgICAgIHJpZ2h0OiAxMHB4O1xuICAgICAgICAgICAgICAgICAgICB0b3A6IDVweDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuZmlsdGVyLW9uZSB7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDIwJTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5maWx0ZXItdHdvIHtcbiAgICAgICAgICAgICAgICB3aWR0aDogMTUlO1xuICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAzMjBweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5maWx0ZXItdGhyZWUge1xuICAgICAgICAgICAgICAgIHdpZHRoOiAxMCU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgLmhlYWQge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICAgIHBhZGRpbmctdG9wOiAxMnB4ICFpbXBvcnRhbnQ7XG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAxMnB4ICFpbXBvcnRhbnQ7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNkZmUyZWUgIWltcG9ydGFudDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4IDRweCAwcHggMHB4O1xuICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgfVxufS5wYWdlLWNvbnRhaW5lciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2RmZTJlZSAhaW1wb3J0YW50O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNjMWMzYzk7XG4gICAgYm9yZGVyLXJhZGl1czogMHB4IDBweCA0cHggNHB4O1xuICAgIC5wYWdlLWNvbnRlbnQge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIGNvbG9yOiAjMzMzMzMzO1xuICAgICAgICAmPi5wYWdpbmF0aW9uLWxlZnQge1xuICAgICAgICAgICAgd2lkdGg6IDMwJTtcbiAgICAgICAgfVxuICAgICAgICAmPi5wYWdpbmF0aW9uLXJpZ2h0IHtcbiAgICAgICAgICAgIHdpZHRoOiAyMiU7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgLnBhZ2UtZGV0YWlscyB7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAucGFnZS1udW1iZXIge1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzMzMzMzMztcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2MxYzNjOTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLnBhZ2UtbnVtYmVyOmZvY3VzIHtcbiAgICAgICAgICAgICAgICAgICAgb3V0bGluZS1zdHlsZTogbm9uZTtcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICMzMzMzMzM7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufSIsIi5pbmZvLWNvbnRhaW5lciAuaW5mby1kYXRhIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBiYWNrZ3JvdW5kOiAjZmZmZmZmIDAlIDAlIG5vLXJlcGVhdCBwYWRkaW5nLWJveDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2MxYzNjOTtcbiAgcGFkZGluZzogNHB4IDIwcHg7XG59XG4uaW5mby1jb250YWluZXIgLmluZm8tZGF0YSA+IC5hY3Rpdml0eSB7XG4gIHdpZHRoOiA1MCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogbGVmdDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlciAhaW1wb3J0YW50O1xufVxuLmluZm8tY29udGFpbmVyIC5pbmZvLWRhdGEgPiAudXBkYXRlZC1vbiB7XG4gIHdpZHRoOiAyMCU7XG4gIG1hcmdpbi1sZWZ0OiAxMDBweDtcbiAgdGV4dC1hbGlnbjogbGVmdCAhaW1wb3J0YW50O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4uaW5mby1jb250YWluZXIgLmluZm8tZGF0YSA+IC51cGRhdGVkLW9uID4gLnNlc3Npb24tY291bnQge1xuICBkaXNwbGF5OiBmbGV4O1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzVhZmY4O1xuICBwYWRkaW5nOiA1cHg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB3aWR0aDogNTBweDtcbiAgY29sb3I6ICNmZmY7XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLmluZm8tY29udGFpbmVyIC5pbmZvLWRhdGEgPiAudXBkYXRlZC1vbiA+IC5zZXNzaW9ucy1uYW1lIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiA1MHB4O1xuICB0b3A6IDBweDtcbiAgZGlzcGxheTogZmxleDtcbn1cbi5pbmZvLWNvbnRhaW5lciAuaW5mby1kYXRhID4gLnVwZGF0ZWQtYnkge1xuICB3aWR0aDogMjAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlciAhaW1wb3J0YW50O1xufVxuLmluZm8tY29udGFpbmVyIC5pbmZvLWRhdGEgLmZpbHRlci1yb3cge1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuLmluZm8tY29udGFpbmVyIC5pbmZvLWRhdGEgLmZpbHRlci1yb3cgLmZpbHRlci1ib3gge1xuICBkaXNwbGF5OiBmbGV4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4uaW5mby1jb250YWluZXIgLmluZm8tZGF0YSAuZmlsdGVyLXJvdyAuZmlsdGVyLWJveCA+IGlucHV0IHtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDVweCAxMnB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjZTNlNWVhO1xufVxuLmluZm8tY29udGFpbmVyIC5pbmZvLWRhdGEgLmZpbHRlci1yb3cgLmZpbHRlci1ib3ggPiBpbWcge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAxMHB4O1xuICB0b3A6IDVweDtcbn1cbi5pbmZvLWNvbnRhaW5lciAuaW5mby1kYXRhIC5maWx0ZXItcm93IC5maWx0ZXItb25lIHtcbiAgd2lkdGg6IDIwJTtcbn1cbi5pbmZvLWNvbnRhaW5lciAuaW5mby1kYXRhIC5maWx0ZXItcm93IC5maWx0ZXItdHdvIHtcbiAgd2lkdGg6IDE1JTtcbiAgbWFyZ2luLWxlZnQ6IDMyMHB4O1xufVxuLmluZm8tY29udGFpbmVyIC5pbmZvLWRhdGEgLmZpbHRlci1yb3cgLmZpbHRlci10aHJlZSB7XG4gIHdpZHRoOiAxMCU7XG59XG4uaW5mby1jb250YWluZXIgLmhlYWQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIHBhZGRpbmctdG9wOiAxMnB4ICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmctYm90dG9tOiAxMnB4ICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQtY29sb3I6ICNkZmUyZWUgIWltcG9ydGFudDtcbiAgYm9yZGVyLXJhZGl1czogNHB4IDRweCAwcHggMHB4O1xuICBib3JkZXI6IG5vbmU7XG59XG5cbi5wYWdlLWNvbnRhaW5lciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNkZmUyZWUgIWltcG9ydGFudDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2MxYzNjOTtcbiAgYm9yZGVyLXJhZGl1czogMHB4IDBweCA0cHggNHB4O1xufVxuLnBhZ2UtY29udGFpbmVyIC5wYWdlLWNvbnRlbnQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGNvbG9yOiAjMzMzMzMzO1xufVxuLnBhZ2UtY29udGFpbmVyIC5wYWdlLWNvbnRlbnQgPiAucGFnaW5hdGlvbi1sZWZ0IHtcbiAgd2lkdGg6IDMwJTtcbn1cbi5wYWdlLWNvbnRhaW5lciAucGFnZS1jb250ZW50ID4gLnBhZ2luYXRpb24tcmlnaHQge1xuICB3aWR0aDogMjIlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLnBhZ2UtY29udGFpbmVyIC5wYWdlLWNvbnRlbnQgPiAucGFnaW5hdGlvbi1yaWdodCAucGFnZS1kZXRhaWxzIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXIgIWltcG9ydGFudDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5wYWdlLWNvbnRhaW5lciAucGFnZS1jb250ZW50ID4gLnBhZ2luYXRpb24tcmlnaHQgLnBhZ2UtZGV0YWlscyAucGFnZS1udW1iZXIge1xuICBjb2xvcjogIzMzMzMzMztcbiAgYm9yZGVyOiAxcHggc29saWQgI2MxYzNjOTtcbn1cbi5wYWdlLWNvbnRhaW5lciAucGFnZS1jb250ZW50ID4gLnBhZ2luYXRpb24tcmlnaHQgLnBhZ2UtZGV0YWlscyAucGFnZS1udW1iZXI6Zm9jdXMge1xuICBvdXRsaW5lLXN0eWxlOiBub25lO1xuICBjb2xvcjogIzMzMzMzMztcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/layout/main/activity/user/user.component.ts":
  /*!*************************************************************!*\
    !*** ./src/app/layout/main/activity/user/user.component.ts ***!
    \*************************************************************/

  /*! exports provided: UserComponent */

  /***/
  function srcAppLayoutMainActivityUserUserComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserComponent", function () {
      return UserComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var UserComponent = /*#__PURE__*/function () {
      function UserComponent() {
        _classCallCheck(this, UserComponent);
      }

      _createClass(UserComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.activity = [{
            id: 1,
            name: 'Queued for Pre-Processing',
            sessions: 34,
            summary: '100',
            status: 'failed'
          }, {
            id: 2,
            name: 'Pre-processing',
            sessions: 34,
            summary: '90',
            status: 'in-progress'
          }, {
            id: 3,
            name: 'Queued for Processing',
            sessions: 34,
            summary: '60',
            status: 'completed'
          }, {
            id: 4,
            name: 'Processing',
            sessions: 34,
            summary: '60',
            status: 'in-progress'
          }, {
            id: 5,
            name: 'Post-Processing',
            sessions: 34,
            summary: '100',
            status: 'failed'
          }, {
            id: 6,
            name: 'Queue for Batch',
            sessions: 34,
            summary: '90',
            status: 'in-progress'
          }, {
            id: 7,
            name: 'Queue for Approval',
            sessions: 34,
            summary: '90',
            status: 'in-progress'
          }];
        }
      }]);

      return UserComponent;
    }();

    UserComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-user',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./user.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/main/activity/user/user.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./user.component.scss */
      "./src/app/layout/main/activity/user/user.component.scss"))["default"]]
    })], UserComponent);
    /***/
  },

  /***/
  "./src/app/layout/main/main.component.scss":
  /*!*************************************************!*\
    !*** ./src/app/layout/main/main.component.scss ***!
    \*************************************************/

  /*! exports provided: default */

  /***/
  function srcAppLayoutMainMainComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xheW91dC9tYWluL21haW4uY29tcG9uZW50LnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/layout/main/main.component.ts":
  /*!***********************************************!*\
    !*** ./src/app/layout/main/main.component.ts ***!
    \***********************************************/

  /*! exports provided: MainComponent */

  /***/
  function srcAppLayoutMainMainComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MainComponent", function () {
      return MainComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var MainComponent = /*#__PURE__*/function () {
      function MainComponent() {
        _classCallCheck(this, MainComponent);
      }

      _createClass(MainComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return MainComponent;
    }();

    MainComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-main',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./main.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/main/main.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./main.component.scss */
      "./src/app/layout/main/main.component.scss"))["default"]]
    })], MainComponent);
    /***/
  },

  /***/
  "./src/app/layout/main/matrices/dynamic-session/dynamic-session.component.scss":
  /*!*************************************************************************************!*\
    !*** ./src/app/layout/main/matrices/dynamic-session/dynamic-session.component.scss ***!
    \*************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppLayoutMainMatricesDynamicSessionDynamicSessionComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xheW91dC9tYWluL21hdHJpY2VzL2R5bmFtaWMtc2Vzc2lvbi9keW5hbWljLXNlc3Npb24uY29tcG9uZW50LnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/layout/main/matrices/dynamic-session/dynamic-session.component.ts":
  /*!***********************************************************************************!*\
    !*** ./src/app/layout/main/matrices/dynamic-session/dynamic-session.component.ts ***!
    \***********************************************************************************/

  /*! exports provided: DynamicSessionComponent */

  /***/
  function srcAppLayoutMainMatricesDynamicSessionDynamicSessionComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DynamicSessionComponent", function () {
      return DynamicSessionComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var DynamicSessionComponent = /*#__PURE__*/function () {
      function DynamicSessionComponent() {
        _classCallCheck(this, DynamicSessionComponent);
      }

      _createClass(DynamicSessionComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return DynamicSessionComponent;
    }();

    DynamicSessionComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-dynamic-session',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./dynamic-session.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/main/matrices/dynamic-session/dynamic-session.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./dynamic-session.component.scss */
      "./src/app/layout/main/matrices/dynamic-session/dynamic-session.component.scss"))["default"]]
    })], DynamicSessionComponent);
    /***/
  },

  /***/
  "./src/app/layout/main/matrices/matrices.component.scss":
  /*!**************************************************************!*\
    !*** ./src/app/layout/main/matrices/matrices.component.scss ***!
    \**************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppLayoutMainMatricesMatricesComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xheW91dC9tYWluL21hdHJpY2VzL21hdHJpY2VzLmNvbXBvbmVudC5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/layout/main/matrices/matrices.component.ts":
  /*!************************************************************!*\
    !*** ./src/app/layout/main/matrices/matrices.component.ts ***!
    \************************************************************/

  /*! exports provided: MatricesComponent */

  /***/
  function srcAppLayoutMainMatricesMatricesComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatricesComponent", function () {
      return MatricesComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var MatricesComponent = /*#__PURE__*/function () {
      function MatricesComponent() {
        _classCallCheck(this, MatricesComponent);
      }

      _createClass(MatricesComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return MatricesComponent;
    }();

    MatricesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-matrices',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./matrices.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/main/matrices/matrices.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./matrices.component.scss */
      "./src/app/layout/main/matrices/matrices.component.scss"))["default"]]
    })], MatricesComponent);
    /***/
  },

  /***/
  "./src/app/layout/main/matrices/mtbf/mtbf.component.scss":
  /*!***************************************************************!*\
    !*** ./src/app/layout/main/matrices/mtbf/mtbf.component.scss ***!
    \***************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppLayoutMainMatricesMtbfMtbfComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xheW91dC9tYWluL21hdHJpY2VzL210YmYvbXRiZi5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/layout/main/matrices/mtbf/mtbf.component.ts":
  /*!*************************************************************!*\
    !*** ./src/app/layout/main/matrices/mtbf/mtbf.component.ts ***!
    \*************************************************************/

  /*! exports provided: MtbfComponent */

  /***/
  function srcAppLayoutMainMatricesMtbfMtbfComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MtbfComponent", function () {
      return MtbfComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var MtbfComponent = /*#__PURE__*/function () {
      function MtbfComponent() {
        _classCallCheck(this, MtbfComponent);
      }

      _createClass(MtbfComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return MtbfComponent;
    }();

    MtbfComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-mtbf',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./mtbf.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/main/matrices/mtbf/mtbf.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./mtbf.component.scss */
      "./src/app/layout/main/matrices/mtbf/mtbf.component.scss"))["default"]]
    })], MtbfComponent);
    /***/
  },

  /***/
  "./src/app/layout/main/matrices/summary/summary.component.scss":
  /*!*********************************************************************!*\
    !*** ./src/app/layout/main/matrices/summary/summary.component.scss ***!
    \*********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppLayoutMainMatricesSummarySummaryComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xheW91dC9tYWluL21hdHJpY2VzL3N1bW1hcnkvc3VtbWFyeS5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/layout/main/matrices/summary/summary.component.ts":
  /*!*******************************************************************!*\
    !*** ./src/app/layout/main/matrices/summary/summary.component.ts ***!
    \*******************************************************************/

  /*! exports provided: SummaryComponent */

  /***/
  function srcAppLayoutMainMatricesSummarySummaryComponentTs(module, __webpack_exports__, __webpack_require__) {
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

    SummaryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-summary',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./summary.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/main/matrices/summary/summary.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./summary.component.scss */
      "./src/app/layout/main/matrices/summary/summary.component.scss"))["default"]]
    })], SummaryComponent);
    /***/
  },

  /***/
  "./src/app/layout/main/tools/tools.component.scss":
  /*!********************************************************!*\
    !*** ./src/app/layout/main/tools/tools.component.scss ***!
    \********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppLayoutMainToolsToolsComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".tools-section > .selected-tools {\n  border-radius: 4px;\n  margin: 10px 0;\n}\n.tools-section > .selected-tools > .tools {\n  background-color: #ffffff;\n  border: 1px solid #00a1d8;\n  border-radius: 4px;\n  display: inline-block;\n  padding: 5px 10px;\n  margin-right: 10px;\n  margin-bottom: 10px;\n}\n.tools-section > .all-tools > .tool-head {\n  background-color: #dfe2ee;\n  border-radius: 4px 4px 0px 0px;\n  padding: 10px 20px !important;\n  display: flex;\n  align-items: center;\n}\n.tools-section > .all-tools > .list {\n  padding: 10px 20px !important;\n  background-color: #fff;\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n}\n.tools-section > .all-tools > .list > .tool {\n  width: 260px;\n  display: flex;\n}\n.switch {\n  position: relative;\n  display: inline-block;\n  width: 42px;\n  height: 22px;\n}\n.switch input {\n  opacity: 0;\n  width: 0;\n  height: 0;\n}\n.slider {\n  position: absolute;\n  cursor: pointer;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: #d9dce8;\n  transition: 0.4s;\n}\n.slider:before {\n  position: absolute;\n  content: \"\";\n  height: 15px;\n  width: 15px;\n  left: 2px;\n  bottom: 3px;\n  background-color: white;\n  transition: 0.4s;\n}\ninput:checked + .slider {\n  background-color: #2196f3;\n}\ninput:focus + .slider {\n  box-shadow: 0 0 1px #2196f3;\n}\ninput:checked + .slider:before {\n  transform: translateX(22px);\n}\n/* Rounded sliders */\n.slider.round {\n  border-radius: 34px;\n}\n.slider.round:before {\n  border-radius: 50%;\n}\n.tool-icon {\n  transform: rotate(90deg);\n}\n.tool-icon-close {\n  transform: rotate(-90deg);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hcHBsZS9wcm9qZWN0L2RleGNlbnRlci1kYXNoYm9hcmQvc3JjL2FwcC9sYXlvdXQvbWFpbi90b29scy90b29scy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbGF5b3V0L21haW4vdG9vbHMvdG9vbHMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0U7RUFDRSxrQkFBQTtFQUNBLGNBQUE7QUNBSjtBRENJO0VBQ0UseUJBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QUNDTjtBREdJO0VBQ0UseUJBQUE7RUFDQSw4QkFBQTtFQUNBLDZCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0FDRE47QURHSTtFQUNFLDZCQUFBO0VBQ0Esc0JBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0FDRE47QURFTTtFQUNFLFlBQUE7RUFDQSxhQUFBO0FDQVI7QURNQTtFQUNFLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQ0hGO0FETUE7RUFDRSxVQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7QUNIRjtBRE1BO0VBQ0Usa0JBQUE7RUFDQSxlQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLHlCQUFBO0VBRUEsZ0JBQUE7QUNIRjtBRE1BO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLHVCQUFBO0VBRUEsZ0JBQUE7QUNIRjtBRE1BO0VBQ0UseUJBQUE7QUNIRjtBRE1BO0VBQ0UsMkJBQUE7QUNIRjtBRE1BO0VBR0UsMkJBQUE7QUNIRjtBRE1BLG9CQUFBO0FBQ0E7RUFDRSxtQkFBQTtBQ0hGO0FETUE7RUFDRSxrQkFBQTtBQ0hGO0FETUE7RUFDRSx3QkFBQTtBQ0hGO0FETUE7RUFDRSx5QkFBQTtBQ0hGIiwiZmlsZSI6InNyYy9hcHAvbGF5b3V0L21haW4vdG9vbHMvdG9vbHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudG9vbHMtc2VjdGlvbiB7XG4gICYgPiAuc2VsZWN0ZWQtdG9vbHMge1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICBtYXJnaW46IDEwcHggMDtcbiAgICAmID4gLnRvb2xzIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG4gICAgICBib3JkZXI6IDFweCBzb2xpZCAjMDBhMWQ4O1xuICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgcGFkZGluZzogNXB4IDEwcHg7XG4gICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgIH1cbiAgfVxuICAmID4gLmFsbC10b29scyB7XG4gICAgJiA+IC50b29sLWhlYWQge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2RmZTJlZTtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDRweCA0cHggMHB4IDBweDtcbiAgICAgIHBhZGRpbmc6IDEwcHggMjBweCAhaW1wb3J0YW50O1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgfVxuICAgICYgPiAubGlzdCB7XG4gICAgICBwYWRkaW5nOiAxMHB4IDIwcHggIWltcG9ydGFudDtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgZmxleC13cmFwOiB3cmFwO1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICYgPiAudG9vbCB7XG4gICAgICAgIHdpZHRoOiAyNjBweDtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuLnN3aXRjaCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB3aWR0aDogNDJweDtcbiAgaGVpZ2h0OiAyMnB4O1xufVxuXG4uc3dpdGNoIGlucHV0IHtcbiAgb3BhY2l0eTogMDtcbiAgd2lkdGg6IDA7XG4gIGhlaWdodDogMDtcbn1cblxuLnNsaWRlciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICBib3R0b206IDA7XG4gIGJhY2tncm91bmQtY29sb3I6ICNkOWRjZTg7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogMC40cztcbiAgdHJhbnNpdGlvbjogMC40cztcbn1cblxuLnNsaWRlcjpiZWZvcmUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGNvbnRlbnQ6ICcnO1xuICBoZWlnaHQ6IDE1cHg7XG4gIHdpZHRoOiAxNXB4O1xuICBsZWZ0OiAycHg7XG4gIGJvdHRvbTogM3B4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiAwLjRzO1xuICB0cmFuc2l0aW9uOiAwLjRzO1xufVxuXG5pbnB1dDpjaGVja2VkICsgLnNsaWRlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyMTk2ZjM7XG59XG5cbmlucHV0OmZvY3VzICsgLnNsaWRlciB7XG4gIGJveC1zaGFkb3c6IDAgMCAxcHggIzIxOTZmMztcbn1cblxuaW5wdXQ6Y2hlY2tlZCArIC5zbGlkZXI6YmVmb3JlIHtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMjJweCk7XG4gIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMjJweCk7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgyMnB4KTtcbn1cblxuLyogUm91bmRlZCBzbGlkZXJzICovXG4uc2xpZGVyLnJvdW5kIHtcbiAgYm9yZGVyLXJhZGl1czogMzRweDtcbn1cblxuLnNsaWRlci5yb3VuZDpiZWZvcmUge1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG59XG5cbi50b29sLWljb24ge1xuICB0cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XG59XG5cbi50b29sLWljb24tY2xvc2Uge1xuICB0cmFuc2Zvcm06IHJvdGF0ZSgtOTBkZWcpO1xufVxuIiwiLnRvb2xzLXNlY3Rpb24gPiAuc2VsZWN0ZWQtdG9vbHMge1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIG1hcmdpbjogMTBweCAwO1xufVxuLnRvb2xzLXNlY3Rpb24gPiAuc2VsZWN0ZWQtdG9vbHMgPiAudG9vbHMge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xuICBib3JkZXI6IDFweCBzb2xpZCAjMDBhMWQ4O1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgcGFkZGluZzogNXB4IDEwcHg7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cbi50b29scy1zZWN0aW9uID4gLmFsbC10b29scyA+IC50b29sLWhlYWQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGZlMmVlO1xuICBib3JkZXItcmFkaXVzOiA0cHggNHB4IDBweCAwcHg7XG4gIHBhZGRpbmc6IDEwcHggMjBweCAhaW1wb3J0YW50O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLnRvb2xzLXNlY3Rpb24gPiAuYWxsLXRvb2xzID4gLmxpc3Qge1xuICBwYWRkaW5nOiAxMHB4IDIwcHggIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLnRvb2xzLXNlY3Rpb24gPiAuYWxsLXRvb2xzID4gLmxpc3QgPiAudG9vbCB7XG4gIHdpZHRoOiAyNjBweDtcbiAgZGlzcGxheTogZmxleDtcbn1cblxuLnN3aXRjaCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB3aWR0aDogNDJweDtcbiAgaGVpZ2h0OiAyMnB4O1xufVxuXG4uc3dpdGNoIGlucHV0IHtcbiAgb3BhY2l0eTogMDtcbiAgd2lkdGg6IDA7XG4gIGhlaWdodDogMDtcbn1cblxuLnNsaWRlciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICBib3R0b206IDA7XG4gIGJhY2tncm91bmQtY29sb3I6ICNkOWRjZTg7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogMC40cztcbiAgdHJhbnNpdGlvbjogMC40cztcbn1cblxuLnNsaWRlcjpiZWZvcmUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGhlaWdodDogMTVweDtcbiAgd2lkdGg6IDE1cHg7XG4gIGxlZnQ6IDJweDtcbiAgYm90dG9tOiAzcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAtd2Via2l0LXRyYW5zaXRpb246IDAuNHM7XG4gIHRyYW5zaXRpb246IDAuNHM7XG59XG5cbmlucHV0OmNoZWNrZWQgKyAuc2xpZGVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzIxOTZmMztcbn1cblxuaW5wdXQ6Zm9jdXMgKyAuc2xpZGVyIHtcbiAgYm94LXNoYWRvdzogMCAwIDFweCAjMjE5NmYzO1xufVxuXG5pbnB1dDpjaGVja2VkICsgLnNsaWRlcjpiZWZvcmUge1xuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgyMnB4KTtcbiAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWCgyMnB4KTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDIycHgpO1xufVxuXG4vKiBSb3VuZGVkIHNsaWRlcnMgKi9cbi5zbGlkZXIucm91bmQge1xuICBib3JkZXItcmFkaXVzOiAzNHB4O1xufVxuXG4uc2xpZGVyLnJvdW5kOmJlZm9yZSB7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbn1cblxuLnRvb2wtaWNvbiB7XG4gIHRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcbn1cblxuLnRvb2wtaWNvbi1jbG9zZSB7XG4gIHRyYW5zZm9ybTogcm90YXRlKC05MGRlZyk7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/layout/main/tools/tools.component.ts":
  /*!******************************************************!*\
    !*** ./src/app/layout/main/tools/tools.component.ts ***!
    \******************************************************/

  /*! exports provided: ToolsComponent */

  /***/
  function srcAppLayoutMainToolsToolsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ToolsComponent", function () {
      return ToolsComponent;
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


    var src_app_services_common_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/services/common.service */
    "./src/app/services/common.service.ts");

    var ToolsComponent = /*#__PURE__*/function () {
      function ToolsComponent(commonService) {
        _classCallCheck(this, ToolsComponent);

        this.commonService = commonService;
      }

      _createClass(ToolsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.tools = [{
            id: 1,
            name: 'System Connection',
            selected: false
          }, {
            id: 2,
            name: 'Diagnostics',
            selected: false
          }, {
            id: 3,
            name: 'Workflow',
            selected: false
          }, {
            id: 4,
            name: 'User Management',
            selected: false
          }, {
            id: 5,
            name: 'Reports',
            selected: false
          }, {
            id: 6,
            name: 'Queue Info',
            selected: false
          }, {
            id: 7,
            name: 'Datastores',
            selected: false
          }, {
            id: 8,
            name: 'Log Files',
            selected: false
          }, {
            id: 9,
            name: 'Sessions',
            selected: false
          }, {
            id: 10,
            name: 'Machine Info',
            selected: false
          }];
          this.selectedTools = [];
          this.closeToolSec = false;
        }
      }, {
        key: "closeTools",
        value: function closeTools() {
          this.closeToolSec = !this.closeToolSec;
        }
      }, {
        key: "selectTool",
        value: function selectTool(item) {
          if (item.selected) {
            this.selectedTools.push(item);
            this.sendData(this.selectedTools);
          } else if (this.selectedTools.length) {
            var index = this.selectedTools.findIndex(function (x) {
              return x.id === item.id;
            });
            this.selectedTools.splice(index, 1);
            this.sendData(this.selectedTools);
          } else {
            return;
          }
        }
      }, {
        key: "sendData",
        value: function sendData(data) {
          this.commonService.setData(data);
        }
      }]);

      return ToolsComponent;
    }();

    ToolsComponent.ctorParameters = function () {
      return [{
        type: src_app_services_common_service__WEBPACK_IMPORTED_MODULE_2__["CommonService"]
      }];
    };

    ToolsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-tools',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./tools.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/main/tools/tools.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./tools.component.scss */
      "./src/app/layout/main/tools/tools.component.scss"))["default"]]
    })], ToolsComponent);
    /***/
  },

  /***/
  "./src/app/services/common.service.ts":
  /*!********************************************!*\
    !*** ./src/app/services/common.service.ts ***!
    \********************************************/

  /*! exports provided: CommonService */

  /***/
  function srcAppServicesCommonServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CommonService", function () {
      return CommonService;
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


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");

    var CommonService = /*#__PURE__*/function () {
      function CommonService() {
        _classCallCheck(this, CommonService);

        this.subject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
      }

      _createClass(CommonService, [{
        key: "setData",
        value: function setData(data) {
          this.subject.next({
            data: data
          });
        }
      }, {
        key: "getData",
        value: function getData() {
          return this.subject.asObservable();
        }
      }]);

      return CommonService;
    }();

    CommonService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], CommonService);
    /***/
  },

  /***/
  "./src/app/shared/modules/pagination/paginate/paginate.component.scss":
  /*!****************************************************************************!*\
    !*** ./src/app/shared/modules/pagination/paginate/paginate.component.scss ***!
    \****************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppSharedModulesPaginationPaginatePaginateComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".pagination {\n  width: 100%;\n  text-align: right;\n  padding: 20px 0 80px 0;\n}\n.pagination .page-label {\n  color: #444;\n  margin-right: 50px;\n}\n.pagination .page-button {\n  border-color: transparent;\n  min-width: 20px !important;\n}\n.pagination .navigation-arrow {\n  font-size: 18px;\n  font-weight: bold;\n  padding: 0 3px;\n}\n.mat-pagination {\n  width: 100%;\n  padding: 15px 0;\n  display: flex;\n  align-items: center;\n  flex-wrap: wrap;\n}\n.mat-pagination .page-label {\n  color: #444;\n  padding-left: 10px;\n  margin-left: auto;\n  text-align: right;\n}\n.mat-pagination .page-button {\n  border-color: transparent;\n  min-width: 20px !important;\n}\n.mat-pagination .navigation-arrow {\n  font-size: 18px;\n  font-weight: bold;\n  padding: 0 3px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hcHBsZS9wcm9qZWN0L2RleGNlbnRlci1kYXNoYm9hcmQvc3JjL2FwcC9zaGFyZWQvbW9kdWxlcy9wYWdpbmF0aW9uL3BhZ2luYXRlL3BhZ2luYXRlLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9zaGFyZWQvbW9kdWxlcy9wYWdpbmF0aW9uL3BhZ2luYXRlL3BhZ2luYXRlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBQTtFQUNBLGlCQUFBO0VBQ0Esc0JBQUE7QUNDRjtBRENFO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0FDQ0o7QURFRTtFQUNFLHlCQUFBO0VBQ0EsMEJBQUE7QUNBSjtBREdFO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtBQ0RKO0FES0E7RUFDRSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7QUNGRjtBRElFO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtBQ0ZKO0FES0U7RUFDRSx5QkFBQTtFQUNBLDBCQUFBO0FDSEo7QURNRTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7QUNKSiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9tb2R1bGVzL3BhZ2luYXRpb24vcGFnaW5hdGUvcGFnaW5hdGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucGFnaW5hdGlvbiB7XG4gIHdpZHRoOiAxMDAlO1xuICB0ZXh0LWFsaWduOiByaWdodDtcbiAgcGFkZGluZzogMjBweCAwIDgwcHggMDtcblxuICAucGFnZS1sYWJlbCB7XG4gICAgY29sb3I6ICM0NDQ7XG4gICAgbWFyZ2luLXJpZ2h0OiA1MHB4O1xuICB9XG5cbiAgLnBhZ2UtYnV0dG9uIHtcbiAgICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xuICAgIG1pbi13aWR0aDogMjBweCAhaW1wb3J0YW50O1xuICB9XG5cbiAgLm5hdmlnYXRpb24tYXJyb3cge1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBwYWRkaW5nOiAwIDNweDtcbiAgfVxufVxuXG4ubWF0LXBhZ2luYXRpb24ge1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogMTVweCAwO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBmbGV4LXdyYXA6IHdyYXA7XG5cbiAgLnBhZ2UtbGFiZWwge1xuICAgIGNvbG9yOiAjNDQ0O1xuICAgIHBhZGRpbmctbGVmdDogMTBweDtcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgfVxuXG4gIC5wYWdlLWJ1dHRvbiB7XG4gICAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICBtaW4td2lkdGg6IDIwcHggIWltcG9ydGFudDtcbiAgfVxuXG4gIC5uYXZpZ2F0aW9uLWFycm93IHtcbiAgICBmb250LXNpemU6IDE4cHg7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgcGFkZGluZzogMCAzcHg7XG4gIH1cbn1cbiIsIi5wYWdpbmF0aW9uIHtcbiAgd2lkdGg6IDEwMCU7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xuICBwYWRkaW5nOiAyMHB4IDAgODBweCAwO1xufVxuLnBhZ2luYXRpb24gLnBhZ2UtbGFiZWwge1xuICBjb2xvcjogIzQ0NDtcbiAgbWFyZ2luLXJpZ2h0OiA1MHB4O1xufVxuLnBhZ2luYXRpb24gLnBhZ2UtYnV0dG9uIHtcbiAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgbWluLXdpZHRoOiAyMHB4ICFpbXBvcnRhbnQ7XG59XG4ucGFnaW5hdGlvbiAubmF2aWdhdGlvbi1hcnJvdyB7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIHBhZGRpbmc6IDAgM3B4O1xufVxuXG4ubWF0LXBhZ2luYXRpb24ge1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogMTVweCAwO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBmbGV4LXdyYXA6IHdyYXA7XG59XG4ubWF0LXBhZ2luYXRpb24gLnBhZ2UtbGFiZWwge1xuICBjb2xvcjogIzQ0NDtcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG59XG4ubWF0LXBhZ2luYXRpb24gLnBhZ2UtYnV0dG9uIHtcbiAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgbWluLXdpZHRoOiAyMHB4ICFpbXBvcnRhbnQ7XG59XG4ubWF0LXBhZ2luYXRpb24gLm5hdmlnYXRpb24tYXJyb3cge1xuICBmb250LXNpemU6IDE4cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBwYWRkaW5nOiAwIDNweDtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/shared/modules/pagination/paginate/paginate.component.ts":
  /*!**************************************************************************!*\
    !*** ./src/app/shared/modules/pagination/paginate/paginate.component.ts ***!
    \**************************************************************************/

  /*! exports provided: PaginateComponent */

  /***/
  function srcAppSharedModulesPaginationPaginatePaginateComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PaginateComponent", function () {
      return PaginateComponent;
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


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var PaginateComponent = /*#__PURE__*/function () {
      function PaginateComponent(router, activatedRoute) {
        _classCallCheck(this, PaginateComponent);

        this.router = router;
        this.activatedRoute = activatedRoute;
        this.pageType = '';
        this.pages = [];
      }

      _createClass(PaginateComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "ngOnChanges",
        value: function ngOnChanges() {
          this.calculatePages();
        }
      }, {
        key: "pageChange",
        value: function pageChange(page) {
          this.setUrlParams = page;
        }
      }, {
        key: "calculatePages",
        value: function calculatePages() {
          if (!this.data) {
            return;
          }

          this.pages = []; // tslint:disable-next-line:one-variable-per-declaration

          var current = this.data.current_page,
              last = this.data.total_pages,
              delta = 4,
              left = current - delta,
              right = current + delta + 1,
              range = [],
              rangeWithDots = [];
          var l;

          for (var i = 1; i <= last; i++) {
            if (i === 1 || i === last || i >= left && i < right) {
              range.push(i);
            }
          }

          for (var _i5 = 0, _range = range; _i5 < _range.length; _i5++) {
            var _i6 = _range[_i5];

            if (l) {
              if (_i6 - l === 2) {
                rangeWithDots.push(l + 1);
              } else if (_i6 - l !== 1) {
                rangeWithDots.push('...');
              }
            }

            rangeWithDots.push(_i6);
            l = _i6;
          }

          this.pages = rangeWithDots;
        }
      }, {
        key: "isNaN",
        value: function (_isNaN) {
          function isNaN(_x) {
            return _isNaN.apply(this, arguments);
          }

          isNaN.toString = function () {
            return _isNaN.toString();
          };

          return isNaN;
        }(function (v) {
          return isNaN(v) ? true : false;
        })
      }, {
        key: "setUrlParams",
        set: function set(page) {
          this.router.navigate([], {
            relativeTo: this.activatedRoute,
            queryParams: {
              page: page,
              pageType: this.pageType
            },
            queryParamsHandling: 'merge'
          });
        }
      }]);

      return PaginateComponent;
    }();

    PaginateComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], PaginateComponent.prototype, "data", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], PaginateComponent.prototype, "pageType", void 0);
    PaginateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-paginate, paginate',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./paginate.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/modules/pagination/paginate/paginate.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./paginate.component.scss */
      "./src/app/shared/modules/pagination/paginate/paginate.component.scss"))["default"]]
    })], PaginateComponent);
    /***/
  },

  /***/
  "./src/app/shared/modules/pagination/pagination.module.ts":
  /*!****************************************************************!*\
    !*** ./src/app/shared/modules/pagination/pagination.module.ts ***!
    \****************************************************************/

  /*! exports provided: PaginationModule */

  /***/
  function srcAppSharedModulesPaginationPaginationModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PaginationModule", function () {
      return PaginationModule;
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


    var _paginate_paginate_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./paginate/paginate.component */
    "./src/app/shared/modules/pagination/paginate/paginate.component.ts");

    var PaginationModule = function PaginationModule() {
      _classCallCheck(this, PaginationModule);
    };

    PaginationModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_paginate_paginate_component__WEBPACK_IMPORTED_MODULE_3__["PaginateComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]],
      exports: [_paginate_paginate_component__WEBPACK_IMPORTED_MODULE_3__["PaginateComponent"]]
    })], PaginationModule);
    /***/
  }
}]);
//# sourceMappingURL=layout-layout-module-es5.js.map