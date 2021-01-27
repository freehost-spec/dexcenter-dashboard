(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["layout-layout-module"],{

/***/ "./node_modules/@angular/forms/fesm2015/forms.js":
/*!*******************************************************!*\
  !*** ./node_modules/@angular/forms/fesm2015/forms.js ***!
  \*******************************************************/
/*! exports provided: ɵangular_packages_forms_forms_d, ɵInternalFormsSharedModule, ɵangular_packages_forms_forms_c, ɵangular_packages_forms_forms_a, ɵangular_packages_forms_forms_b, ɵangular_packages_forms_forms_e, ɵangular_packages_forms_forms_f, ɵangular_packages_forms_forms_g, ɵangular_packages_forms_forms_h, ɵangular_packages_forms_forms_i, ɵangular_packages_forms_forms_j, ɵangular_packages_forms_forms_k, ɵangular_packages_forms_forms_l, ɵangular_packages_forms_forms_z, ɵNgNoValidate, ɵangular_packages_forms_forms_m, ɵangular_packages_forms_forms_n, ɵangular_packages_forms_forms_o, ɵangular_packages_forms_forms_p, ɵangular_packages_forms_forms_q, ɵangular_packages_forms_forms_r, ɵangular_packages_forms_forms_s, ɵangular_packages_forms_forms_t, ɵangular_packages_forms_forms_v, ɵangular_packages_forms_forms_u, ɵangular_packages_forms_forms_w, ɵangular_packages_forms_forms_y, ɵNgSelectMultipleOption, ɵangular_packages_forms_forms_x, ɵangular_packages_forms_forms_bb, ɵangular_packages_forms_forms_bc, ɵangular_packages_forms_forms_be, ɵangular_packages_forms_forms_bd, ɵangular_packages_forms_forms_bf, ɵangular_packages_forms_forms_ba, AbstractControlDirective, AbstractFormGroupDirective, CheckboxControlValueAccessor, ControlContainer, NG_VALUE_ACCESSOR, COMPOSITION_BUFFER_MODE, DefaultValueAccessor, NgControl, NgControlStatus, NgControlStatusGroup, NgForm, NgFormSelectorWarning, NgModel, NgModelGroup, NumberValueAccessor, RadioControlValueAccessor, RangeValueAccessor, FormControlDirective, FormControlName, FormGroupDirective, FormArrayName, FormGroupName, NgSelectOption, SelectControlValueAccessor, SelectMultipleControlValueAccessor, CheckboxRequiredValidator, EmailValidator, MaxLengthValidator, MinLengthValidator, PatternValidator, RequiredValidator, FormBuilder, AbstractControl, FormArray, FormControl, FormGroup, NG_ASYNC_VALIDATORS, NG_VALIDATORS, Validators, VERSION, FormsModule, ReactiveFormsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_d", function() { return ɵInternalFormsSharedModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵInternalFormsSharedModule", function() { return ɵInternalFormsSharedModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_c", function() { return REACTIVE_DRIVEN_DIRECTIVES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_a", function() { return SHARED_FORM_DIRECTIVES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_b", function() { return TEMPLATE_DRIVEN_DIRECTIVES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_e", function() { return CHECKBOX_VALUE_ACCESSOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_f", function() { return DEFAULT_VALUE_ACCESSOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_g", function() { return AbstractControlStatus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_h", function() { return ngControlStatusHost; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_i", function() { return formDirectiveProvider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_j", function() { return NG_FORM_SELECTOR_WARNING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_k", function() { return formControlBinding; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_l", function() { return modelGroupProvider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_z", function() { return ɵNgNoValidate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵNgNoValidate", function() { return ɵNgNoValidate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_m", function() { return NUMBER_VALUE_ACCESSOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_n", function() { return RADIO_VALUE_ACCESSOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_o", function() { return RadioControlRegistry; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_p", function() { return RANGE_VALUE_ACCESSOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_q", function() { return NG_MODEL_WITH_FORM_CONTROL_WARNING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_r", function() { return formControlBinding$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_s", function() { return controlNameBinding; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_t", function() { return formDirectiveProvider$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_v", function() { return formArrayNameProvider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_u", function() { return formGroupNameProvider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_w", function() { return SELECT_VALUE_ACCESSOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_y", function() { return ɵNgSelectMultipleOption; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵNgSelectMultipleOption", function() { return ɵNgSelectMultipleOption; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_x", function() { return SELECT_MULTIPLE_VALUE_ACCESSOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_bb", function() { return CHECKBOX_REQUIRED_VALIDATOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_bc", function() { return EMAIL_VALIDATOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_be", function() { return MAX_LENGTH_VALIDATOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_bd", function() { return MIN_LENGTH_VALIDATOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_bf", function() { return PATTERN_VALIDATOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_ba", function() { return REQUIRED_VALIDATOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AbstractControlDirective", function() { return AbstractControlDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AbstractFormGroupDirective", function() { return AbstractFormGroupDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckboxControlValueAccessor", function() { return CheckboxControlValueAccessor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ControlContainer", function() { return ControlContainer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NG_VALUE_ACCESSOR", function() { return NG_VALUE_ACCESSOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "COMPOSITION_BUFFER_MODE", function() { return COMPOSITION_BUFFER_MODE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DefaultValueAccessor", function() { return DefaultValueAccessor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgControl", function() { return NgControl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgControlStatus", function() { return NgControlStatus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgControlStatusGroup", function() { return NgControlStatusGroup; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgForm", function() { return NgForm; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgFormSelectorWarning", function() { return NgFormSelectorWarning; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgModel", function() { return NgModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgModelGroup", function() { return NgModelGroup; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NumberValueAccessor", function() { return NumberValueAccessor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RadioControlValueAccessor", function() { return RadioControlValueAccessor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RangeValueAccessor", function() { return RangeValueAccessor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormControlDirective", function() { return FormControlDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormControlName", function() { return FormControlName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormGroupDirective", function() { return FormGroupDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormArrayName", function() { return FormArrayName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormGroupName", function() { return FormGroupName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgSelectOption", function() { return NgSelectOption; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectControlValueAccessor", function() { return SelectControlValueAccessor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectMultipleControlValueAccessor", function() { return SelectMultipleControlValueAccessor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckboxRequiredValidator", function() { return CheckboxRequiredValidator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmailValidator", function() { return EmailValidator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaxLengthValidator", function() { return MaxLengthValidator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MinLengthValidator", function() { return MinLengthValidator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PatternValidator", function() { return PatternValidator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RequiredValidator", function() { return RequiredValidator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormBuilder", function() { return FormBuilder; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AbstractControl", function() { return AbstractControl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormArray", function() { return FormArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormControl", function() { return FormControl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormGroup", function() { return FormGroup; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NG_ASYNC_VALIDATORS", function() { return NG_ASYNC_VALIDATORS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NG_VALIDATORS", function() { return NG_VALIDATORS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Validators", function() { return Validators; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VERSION", function() { return VERSION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormsModule", function() { return FormsModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReactiveFormsModule", function() { return ReactiveFormsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
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
function ControlValueAccessor() { }
if (false) {}
/**
 * Used to provide a `ControlValueAccessor` for form controls.
 *
 * See `DefaultValueAccessor` for how to implement one.
 *
 * \@publicApi
 * @type {?}
 */
const NG_VALUE_ACCESSOR = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('NgValueAccessor');

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const CHECKBOX_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])((/**
     * @return {?}
     */
    () => CheckboxControlValueAccessor)),
    multi: true,
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
class CheckboxControlValueAccessor {
    /**
     * @param {?} _renderer
     * @param {?} _elementRef
     */
    constructor(_renderer, _elementRef) {
        this._renderer = _renderer;
        this._elementRef = _elementRef;
        /**
         * \@description
         * The registered callback function called when a change event occurs on the input element.
         */
        this.onChange = (/**
         * @param {?} _
         * @return {?}
         */
        (_) => { });
        /**
         * \@description
         * The registered callback function called when a blur event occurs on the input element.
         */
        this.onTouched = (/**
         * @return {?}
         */
        () => { });
    }
    /**
     * Sets the "checked" property on the input element.
     *
     * @param {?} value The checked value
     * @return {?}
     */
    writeValue(value) {
        this._renderer.setProperty(this._elementRef.nativeElement, 'checked', value);
    }
    /**
     * \@description
     * Registers a function called when the control value changes.
     *
     * @param {?} fn The callback function
     * @return {?}
     */
    registerOnChange(fn) { this.onChange = fn; }
    /**
     * \@description
     * Registers a function called when the control is touched.
     *
     * @param {?} fn The callback function
     * @return {?}
     */
    registerOnTouched(fn) { this.onTouched = fn; }
    /**
     * Sets the "disabled" property on the input element.
     *
     * @param {?} isDisabled The disabled value
     * @return {?}
     */
    setDisabledState(isDisabled) {
        this._renderer.setProperty(this._elementRef.nativeElement, 'disabled', isDisabled);
    }
}
CheckboxControlValueAccessor.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                selector: 'input[type=checkbox][formControlName],input[type=checkbox][formControl],input[type=checkbox][ngModel]',
                host: { '(change)': 'onChange($event.target.checked)', '(blur)': 'onTouched()' },
                providers: [CHECKBOX_VALUE_ACCESSOR]
            },] }
];
/** @nocollapse */
CheckboxControlValueAccessor.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }
];
if (false) {}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const DEFAULT_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])((/**
     * @return {?}
     */
    () => DefaultValueAccessor)),
    multi: true
};
/**
 * We must check whether the agent is Android because composition events
 * behave differently between iOS and Android.
 * @return {?}
 */
function _isAndroid() {
    /** @type {?} */
    const userAgent = Object(_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["ɵgetDOM"])() ? Object(_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["ɵgetDOM"])().getUserAgent() : '';
    return /android (\d+)/.test(userAgent.toLowerCase());
}
/**
 * \@description
 * Provide this token to control if form directives buffer IME input until
 * the "compositionend" event occurs.
 * \@publicApi
 * @type {?}
 */
const COMPOSITION_BUFFER_MODE = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('CompositionEventMode');
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
class DefaultValueAccessor {
    /**
     * @param {?} _renderer
     * @param {?} _elementRef
     * @param {?} _compositionMode
     */
    constructor(_renderer, _elementRef, _compositionMode) {
        this._renderer = _renderer;
        this._elementRef = _elementRef;
        this._compositionMode = _compositionMode;
        /**
         * \@description
         * The registered callback function called when an input event occurs on the input element.
         */
        this.onChange = (/**
         * @param {?} _
         * @return {?}
         */
        (_) => { });
        /**
         * \@description
         * The registered callback function called when a blur event occurs on the input element.
         */
        this.onTouched = (/**
         * @return {?}
         */
        () => { });
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
    writeValue(value) {
        /** @type {?} */
        const normalizedValue = value == null ? '' : value;
        this._renderer.setProperty(this._elementRef.nativeElement, 'value', normalizedValue);
    }
    /**
     * \@description
     * Registers a function called when the control value changes.
     *
     * @param {?} fn The callback function
     * @return {?}
     */
    registerOnChange(fn) { this.onChange = fn; }
    /**
     * \@description
     * Registers a function called when the control is touched.
     *
     * @param {?} fn The callback function
     * @return {?}
     */
    registerOnTouched(fn) { this.onTouched = fn; }
    /**
     * Sets the "disabled" property on the input element.
     *
     * @param {?} isDisabled The disabled value
     * @return {?}
     */
    setDisabledState(isDisabled) {
        this._renderer.setProperty(this._elementRef.nativeElement, 'disabled', isDisabled);
    }
    /**
     * \@internal
     * @param {?} value
     * @return {?}
     */
    _handleInput(value) {
        if (!this._compositionMode || (this._compositionMode && !this._composing)) {
            this.onChange(value);
        }
    }
    /**
     * \@internal
     * @return {?}
     */
    _compositionStart() { this._composing = true; }
    /**
     * \@internal
     * @param {?} value
     * @return {?}
     */
    _compositionEnd(value) {
        this._composing = false;
        this._compositionMode && this.onChange(value);
    }
}
DefaultValueAccessor.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
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
            },] }
];
/** @nocollapse */
DefaultValueAccessor.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] },
    { type: Boolean, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [COMPOSITION_BUFFER_MODE,] }] }
];
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
class AbstractControlDirective {
    /**
     * \@description
     * Reports the value of the control if it is present, otherwise null.
     * @return {?}
     */
    get value() { return this.control ? this.control.value : null; }
    /**
     * \@description
     * Reports whether the control is valid. A control is considered valid if no
     * validation errors exist with the current value.
     * If the control is not present, null is returned.
     * @return {?}
     */
    get valid() { return this.control ? this.control.valid : null; }
    /**
     * \@description
     * Reports whether the control is invalid, meaning that an error exists in the input value.
     * If the control is not present, null is returned.
     * @return {?}
     */
    get invalid() { return this.control ? this.control.invalid : null; }
    /**
     * \@description
     * Reports whether a control is pending, meaning that that async validation is occurring and
     * errors are not yet available for the input value. If the control is not present, null is
     * returned.
     * @return {?}
     */
    get pending() { return this.control ? this.control.pending : null; }
    /**
     * \@description
     * Reports whether the control is disabled, meaning that the control is disabled
     * in the UI and is exempt from validation checks and excluded from aggregate
     * values of ancestor controls. If the control is not present, null is returned.
     * @return {?}
     */
    get disabled() { return this.control ? this.control.disabled : null; }
    /**
     * \@description
     * Reports whether the control is enabled, meaning that the control is included in ancestor
     * calculations of validity or value. If the control is not present, null is returned.
     * @return {?}
     */
    get enabled() { return this.control ? this.control.enabled : null; }
    /**
     * \@description
     * Reports the control's validation errors. If the control is not present, null is returned.
     * @return {?}
     */
    get errors() { return this.control ? this.control.errors : null; }
    /**
     * \@description
     * Reports whether the control is pristine, meaning that the user has not yet changed
     * the value in the UI. If the control is not present, null is returned.
     * @return {?}
     */
    get pristine() { return this.control ? this.control.pristine : null; }
    /**
     * \@description
     * Reports whether the control is dirty, meaning that the user has changed
     * the value in the UI. If the control is not present, null is returned.
     * @return {?}
     */
    get dirty() { return this.control ? this.control.dirty : null; }
    /**
     * \@description
     * Reports whether the control is touched, meaning that the user has triggered
     * a `blur` event on it. If the control is not present, null is returned.
     * @return {?}
     */
    get touched() { return this.control ? this.control.touched : null; }
    /**
     * \@description
     * Reports the validation status of the control. Possible values include:
     * 'VALID', 'INVALID', 'DISABLED', and 'PENDING'.
     * If the control is not present, null is returned.
     * @return {?}
     */
    get status() { return this.control ? this.control.status : null; }
    /**
     * \@description
     * Reports whether the control is untouched, meaning that the user has not yet triggered
     * a `blur` event on it. If the control is not present, null is returned.
     * @return {?}
     */
    get untouched() { return this.control ? this.control.untouched : null; }
    /**
     * \@description
     * Returns a multicasting observable that emits a validation status whenever it is
     * calculated for the control. If the control is not present, null is returned.
     * @return {?}
     */
    get statusChanges() {
        return this.control ? this.control.statusChanges : null;
    }
    /**
     * \@description
     * Returns a multicasting observable of value changes for the control that emits every time the
     * value of the control changes in the UI or programmatically.
     * If the control is not present, null is returned.
     * @return {?}
     */
    get valueChanges() {
        return this.control ? this.control.valueChanges : null;
    }
    /**
     * \@description
     * Returns an array that represents the path from the top-level form to this control.
     * Each index is the string name of the control on that level.
     * @return {?}
     */
    get path() { return null; }
    /**
     * \@description
     * Resets the control with the provided value if the control is present.
     * @param {?=} value
     * @return {?}
     */
    reset(value = undefined) {
        if (this.control)
            this.control.reset(value);
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
    hasError(errorCode, path) {
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
    getError(errorCode, path) {
        return this.control ? this.control.getError(errorCode, path) : null;
    }
}
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
class ControlContainer extends AbstractControlDirective {
    /**
     * \@description
     * The top-level form directive for the control.
     * @return {?}
     */
    get formDirective() { return null; }
    /**
     * \@description
     * The path to this group.
     * @return {?}
     */
    get path() { return null; }
}
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
class NgControl extends AbstractControlDirective {
    constructor() {
        super(...arguments);
        /**
         * \@description
         * The parent form for the control.
         *
         * \@internal
         */
        this._parent = null;
        /**
         * \@description
         * The name for the control
         */
        this.name = null;
        /**
         * \@description
         * The value accessor for the control
         */
        this.valueAccessor = null;
        /**
         * \@description
         * The uncomposed array of synchronous validators for the control
         *
         * \@internal
         */
        this._rawValidators = [];
        /**
         * \@description
         * The uncomposed array of async validators for the control
         *
         * \@internal
         */
        this._rawAsyncValidators = [];
    }
    /**
     * \@description
     * The registered synchronous validator function for the control
     *
     * @throws An exception that this method is not implemented
     * @return {?}
     */
    get validator() { return (/** @type {?} */ (unimplemented())); }
    /**
     * \@description
     * The registered async validator function for the control
     *
     * @throws An exception that this method is not implemented
     * @return {?}
     */
    get asyncValidator() { return (/** @type {?} */ (unimplemented())); }
}
if (false) {}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class AbstractControlStatus {
    /**
     * @param {?} cd
     */
    constructor(cd) { this._cd = cd; }
    /**
     * @return {?}
     */
    get ngClassUntouched() { return this._cd.control ? this._cd.control.untouched : false; }
    /**
     * @return {?}
     */
    get ngClassTouched() { return this._cd.control ? this._cd.control.touched : false; }
    /**
     * @return {?}
     */
    get ngClassPristine() { return this._cd.control ? this._cd.control.pristine : false; }
    /**
     * @return {?}
     */
    get ngClassDirty() { return this._cd.control ? this._cd.control.dirty : false; }
    /**
     * @return {?}
     */
    get ngClassValid() { return this._cd.control ? this._cd.control.valid : false; }
    /**
     * @return {?}
     */
    get ngClassInvalid() { return this._cd.control ? this._cd.control.invalid : false; }
    /**
     * @return {?}
     */
    get ngClassPending() { return this._cd.control ? this._cd.control.pending : false; }
}
if (false) {}
/** @type {?} */
const ngControlStatusHost = {
    '[class.ng-untouched]': 'ngClassUntouched',
    '[class.ng-touched]': 'ngClassTouched',
    '[class.ng-pristine]': 'ngClassPristine',
    '[class.ng-dirty]': 'ngClassDirty',
    '[class.ng-valid]': 'ngClassValid',
    '[class.ng-invalid]': 'ngClassInvalid',
    '[class.ng-pending]': 'ngClassPending',
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
class NgControlStatus extends AbstractControlStatus {
    /**
     * @param {?} cd
     */
    constructor(cd) { super(cd); }
}
NgControlStatus.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{ selector: '[formControlName],[ngModel],[formControl]', host: ngControlStatusHost },] }
];
/** @nocollapse */
NgControlStatus.ctorParameters = () => [
    { type: NgControl, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Self"] }] }
];
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
class NgControlStatusGroup extends AbstractControlStatus {
    /**
     * @param {?} cd
     */
    constructor(cd) { super(cd); }
}
NgControlStatusGroup.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                selector: '[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]',
                host: ngControlStatusHost
            },] }
];
/** @nocollapse */
NgControlStatusGroup.ctorParameters = () => [
    { type: ControlContainer, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Self"] }] }
];

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
const NG_VALIDATORS = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('NgValidators');
/**
 * \@description
 * An `InjectionToken` for registering additional asynchronous validators used with `AbstractControl`s.
 *
 * @see `NG_VALIDATORS`
 *
 * \@publicApi
 * @type {?}
 */
const NG_ASYNC_VALIDATORS = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('NgAsyncValidators');
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
const EMAIL_REGEXP = /^(?=.{1,254}$)(?=.{1,64}@)[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
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
class Validators {
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
    static min(min) {
        return (/**
         * @param {?} control
         * @return {?}
         */
        (control) => {
            if (isEmptyInputValue(control.value) || isEmptyInputValue(min)) {
                return null; // don't validate empty values to allow optional controls
            }
            /** @type {?} */
            const value = parseFloat(control.value);
            // Controls with NaN values after parsing should be treated as not having a
            // minimum, per the HTML forms spec: https://www.w3.org/TR/html5/forms.html#attr-input-min
            return !isNaN(value) && value < min ? { 'min': { 'min': min, 'actual': control.value } } : null;
        });
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
    static max(max) {
        return (/**
         * @param {?} control
         * @return {?}
         */
        (control) => {
            if (isEmptyInputValue(control.value) || isEmptyInputValue(max)) {
                return null; // don't validate empty values to allow optional controls
            }
            /** @type {?} */
            const value = parseFloat(control.value);
            // Controls with NaN values after parsing should be treated as not having a
            // maximum, per the HTML forms spec: https://www.w3.org/TR/html5/forms.html#attr-input-max
            return !isNaN(value) && value > max ? { 'max': { 'max': max, 'actual': control.value } } : null;
        });
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
    static required(control) {
        return isEmptyInputValue(control.value) ? { 'required': true } : null;
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
    static requiredTrue(control) {
        return control.value === true ? null : { 'required': true };
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
    static email(control) {
        if (isEmptyInputValue(control.value)) {
            return null; // don't validate empty values to allow optional controls
        }
        return EMAIL_REGEXP.test(control.value) ? null : { 'email': true };
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
    static minLength(minLength) {
        return (/**
         * @param {?} control
         * @return {?}
         */
        (control) => {
            if (isEmptyInputValue(control.value)) {
                return null; // don't validate empty values to allow optional controls
            }
            /** @type {?} */
            const length = control.value ? control.value.length : 0;
            return length < minLength ?
                { 'minlength': { 'requiredLength': minLength, 'actualLength': length } } :
                null;
        });
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
    static maxLength(maxLength) {
        return (/**
         * @param {?} control
         * @return {?}
         */
        (control) => {
            /** @type {?} */
            const length = control.value ? control.value.length : 0;
            return length > maxLength ?
                { 'maxlength': { 'requiredLength': maxLength, 'actualLength': length } } :
                null;
        });
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
    static pattern(pattern) {
        if (!pattern)
            return Validators.nullValidator;
        /** @type {?} */
        let regex;
        /** @type {?} */
        let regexStr;
        if (typeof pattern === 'string') {
            regexStr = '';
            if (pattern.charAt(0) !== '^')
                regexStr += '^';
            regexStr += pattern;
            if (pattern.charAt(pattern.length - 1) !== '$')
                regexStr += '$';
            regex = new RegExp(regexStr);
        }
        else {
            regexStr = pattern.toString();
            regex = pattern;
        }
        return (/**
         * @param {?} control
         * @return {?}
         */
        (control) => {
            if (isEmptyInputValue(control.value)) {
                return null; // don't validate empty values to allow optional controls
            }
            /** @type {?} */
            const value = control.value;
            return regex.test(value) ? null :
                { 'pattern': { 'requiredPattern': regexStr, 'actualValue': value } };
        });
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
    static nullValidator(control) { return null; }
    /**
     * @param {?} validators
     * @return {?}
     */
    static compose(validators) {
        if (!validators)
            return null;
        /** @type {?} */
        const presentValidators = (/** @type {?} */ (validators.filter(isPresent)));
        if (presentValidators.length == 0)
            return null;
        return (/**
         * @param {?} control
         * @return {?}
         */
        function (control) {
            return _mergeErrors(_executeValidators(control, presentValidators));
        });
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
    static composeAsync(validators) {
        if (!validators)
            return null;
        /** @type {?} */
        const presentValidators = (/** @type {?} */ (validators.filter(isPresent)));
        if (presentValidators.length == 0)
            return null;
        return (/**
         * @param {?} control
         * @return {?}
         */
        function (control) {
            /** @type {?} */
            const observables = _executeAsyncValidators(control, presentValidators).map(toObservable);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["forkJoin"])(observables).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(_mergeErrors));
        });
    }
}
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
    const obs = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵisPromise"])(r) ? Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["from"])(r) : r;
    if (!(Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵisObservable"])(obs))) {
        throw new Error(`Expected validator to return Promise or Observable.`);
    }
    return obs;
}
/**
 * @param {?} control
 * @param {?} validators
 * @return {?}
 */
function _executeValidators(control, validators) {
    return validators.map((/**
     * @param {?} v
     * @return {?}
     */
    v => v(control)));
}
/**
 * @param {?} control
 * @param {?} validators
 * @return {?}
 */
function _executeAsyncValidators(control, validators) {
    return validators.map((/**
     * @param {?} v
     * @return {?}
     */
    v => v(control)));
}
/**
 * @param {?} arrayOfErrors
 * @return {?}
 */
function _mergeErrors(arrayOfErrors) {
    /** @type {?} */
    const res = arrayOfErrors.reduce((/**
     * @param {?} res
     * @param {?} errors
     * @return {?}
     */
    (res, errors) => {
        return errors != null ? Object.assign({}, (/** @type {?} */ (res)), errors) : (/** @type {?} */ (res));
    }), {});
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
    if (((/** @type {?} */ (validator))).validate) {
        return (/**
         * @param {?} c
         * @return {?}
         */
        (c) => ((/** @type {?} */ (validator))).validate(c));
    }
    else {
        return (/** @type {?} */ (validator));
    }
}
/**
 * @param {?} validator
 * @return {?}
 */
function normalizeAsyncValidator(validator) {
    if (((/** @type {?} */ (validator))).validate) {
        return (/**
         * @param {?} c
         * @return {?}
         */
        (c) => ((/** @type {?} */ (validator))).validate(c));
    }
    else {
        return (/** @type {?} */ (validator));
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const NUMBER_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])((/**
     * @return {?}
     */
    () => NumberValueAccessor)),
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
class NumberValueAccessor {
    /**
     * @param {?} _renderer
     * @param {?} _elementRef
     */
    constructor(_renderer, _elementRef) {
        this._renderer = _renderer;
        this._elementRef = _elementRef;
        /**
         * \@description
         * The registered callback function called when a change or input event occurs on the input
         * element.
         */
        this.onChange = (/**
         * @param {?} _
         * @return {?}
         */
        (_) => { });
        /**
         * \@description
         * The registered callback function called when a blur event occurs on the input element.
         */
        this.onTouched = (/**
         * @return {?}
         */
        () => { });
    }
    /**
     * Sets the "value" property on the input element.
     *
     * @param {?} value The checked value
     * @return {?}
     */
    writeValue(value) {
        // The value needs to be normalized for IE9, otherwise it is set to 'null' when null
        /** @type {?} */
        const normalizedValue = value == null ? '' : value;
        this._renderer.setProperty(this._elementRef.nativeElement, 'value', normalizedValue);
    }
    /**
     * \@description
     * Registers a function called when the control value changes.
     *
     * @param {?} fn The callback function
     * @return {?}
     */
    registerOnChange(fn) {
        this.onChange = (/**
         * @param {?} value
         * @return {?}
         */
        (value) => { fn(value == '' ? null : parseFloat(value)); });
    }
    /**
     * \@description
     * Registers a function called when the control is touched.
     *
     * @param {?} fn The callback function
     * @return {?}
     */
    registerOnTouched(fn) { this.onTouched = fn; }
    /**
     * Sets the "disabled" property on the input element.
     *
     * @param {?} isDisabled The disabled value
     * @return {?}
     */
    setDisabledState(isDisabled) {
        this._renderer.setProperty(this._elementRef.nativeElement, 'disabled', isDisabled);
    }
}
NumberValueAccessor.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                selector: 'input[type=number][formControlName],input[type=number][formControl],input[type=number][ngModel]',
                host: {
                    '(change)': 'onChange($event.target.value)',
                    '(input)': 'onChange($event.target.value)',
                    '(blur)': 'onTouched()'
                },
                providers: [NUMBER_VALUE_ACCESSOR]
            },] }
];
/** @nocollapse */
NumberValueAccessor.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }
];
if (false) {}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const RADIO_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])((/**
     * @return {?}
     */
    () => RadioControlValueAccessor)),
    multi: true
};
/**
 * \@description
 * Class used by Angular to track radio buttons. For internal use only.
 */
class RadioControlRegistry {
    constructor() {
        this._accessors = [];
    }
    /**
     * \@description
     * Adds a control to the internal registry. For internal use only.
     * @param {?} control
     * @param {?} accessor
     * @return {?}
     */
    add(control, accessor) {
        this._accessors.push([control, accessor]);
    }
    /**
     * \@description
     * Removes a control from the internal registry. For internal use only.
     * @param {?} accessor
     * @return {?}
     */
    remove(accessor) {
        for (let i = this._accessors.length - 1; i >= 0; --i) {
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
    select(accessor) {
        this._accessors.forEach((/**
         * @param {?} c
         * @return {?}
         */
        (c) => {
            if (this._isSameGroup(c, accessor) && c[1] !== accessor) {
                c[1].fireUncheck(accessor.value);
            }
        }));
    }
    /**
     * @private
     * @param {?} controlPair
     * @param {?} accessor
     * @return {?}
     */
    _isSameGroup(controlPair, accessor) {
        if (!controlPair[0].control)
            return false;
        return controlPair[0]._parent === accessor._control._parent &&
            controlPair[1].name === accessor.name;
    }
}
RadioControlRegistry.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] }
];
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
class RadioControlValueAccessor {
    /**
     * @param {?} _renderer
     * @param {?} _elementRef
     * @param {?} _registry
     * @param {?} _injector
     */
    constructor(_renderer, _elementRef, _registry, _injector) {
        this._renderer = _renderer;
        this._elementRef = _elementRef;
        this._registry = _registry;
        this._injector = _injector;
        /**
         * \@description
         * The registered callback function called when a change event occurs on the input element.
         */
        this.onChange = (/**
         * @return {?}
         */
        () => { });
        /**
         * \@description
         * The registered callback function called when a blur event occurs on the input element.
         */
        this.onTouched = (/**
         * @return {?}
         */
        () => { });
    }
    /**
     * \@description
     * A lifecycle method called when the directive is initialized. For internal use only.
     * @return {?}
     */
    ngOnInit() {
        this._control = this._injector.get(NgControl);
        this._checkName();
        this._registry.add(this._control, this);
    }
    /**
     * \@description
     * Lifecycle method called before the directive's instance is destroyed. For internal use only.
     * @return {?}
     */
    ngOnDestroy() { this._registry.remove(this); }
    /**
     * \@description
     * Sets the "checked" property value on the radio input element.
     *
     * @param {?} value The checked value
     * @return {?}
     */
    writeValue(value) {
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
    registerOnChange(fn) {
        this._fn = fn;
        this.onChange = (/**
         * @return {?}
         */
        () => {
            fn(this.value);
            this._registry.select(this);
        });
    }
    /**
     * Sets the "value" on the radio input element and unchecks it.
     *
     * @param {?} value
     * @return {?}
     */
    fireUncheck(value) { this.writeValue(value); }
    /**
     * \@description
     * Registers a function called when the control is touched.
     *
     * @param {?} fn The callback function
     * @return {?}
     */
    registerOnTouched(fn) { this.onTouched = fn; }
    /**
     * Sets the "disabled" property on the input element.
     *
     * @param {?} isDisabled The disabled value
     * @return {?}
     */
    setDisabledState(isDisabled) {
        this._renderer.setProperty(this._elementRef.nativeElement, 'disabled', isDisabled);
    }
    /**
     * @private
     * @return {?}
     */
    _checkName() {
        if (this.name && this.formControlName && this.name !== this.formControlName) {
            this._throwNameError();
        }
        if (!this.name && this.formControlName)
            this.name = this.formControlName;
    }
    /**
     * @private
     * @return {?}
     */
    _throwNameError() {
        throw new Error(`
      If you define both a name and a formControlName attribute on your radio button, their values
      must match. Ex: <input type="radio" formControlName="food" name="food">
    `);
    }
}
RadioControlValueAccessor.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                selector: 'input[type=radio][formControlName],input[type=radio][formControl],input[type=radio][ngModel]',
                host: { '(change)': 'onChange()', '(blur)': 'onTouched()' },
                providers: [RADIO_VALUE_ACCESSOR]
            },] }
];
/** @nocollapse */
RadioControlValueAccessor.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] },
    { type: RadioControlRegistry },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"] }
];
RadioControlValueAccessor.propDecorators = {
    name: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    formControlName: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    value: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }]
};
if (false) {}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const RANGE_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])((/**
     * @return {?}
     */
    () => RangeValueAccessor)),
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
class RangeValueAccessor {
    /**
     * @param {?} _renderer
     * @param {?} _elementRef
     */
    constructor(_renderer, _elementRef) {
        this._renderer = _renderer;
        this._elementRef = _elementRef;
        /**
         * \@description
         * The registered callback function called when a change or input event occurs on the input
         * element.
         */
        this.onChange = (/**
         * @param {?} _
         * @return {?}
         */
        (_) => { });
        /**
         * \@description
         * The registered callback function called when a blur event occurs on the input element.
         */
        this.onTouched = (/**
         * @return {?}
         */
        () => { });
    }
    /**
     * Sets the "value" property on the input element.
     *
     * @param {?} value The checked value
     * @return {?}
     */
    writeValue(value) {
        this._renderer.setProperty(this._elementRef.nativeElement, 'value', parseFloat(value));
    }
    /**
     * \@description
     * Registers a function called when the control value changes.
     *
     * @param {?} fn The callback function
     * @return {?}
     */
    registerOnChange(fn) {
        this.onChange = (/**
         * @param {?} value
         * @return {?}
         */
        (value) => { fn(value == '' ? null : parseFloat(value)); });
    }
    /**
     * \@description
     * Registers a function called when the control is touched.
     *
     * @param {?} fn The callback function
     * @return {?}
     */
    registerOnTouched(fn) { this.onTouched = fn; }
    /**
     * Sets the "disabled" property on the range input element.
     *
     * @param {?} isDisabled The disabled value
     * @return {?}
     */
    setDisabledState(isDisabled) {
        this._renderer.setProperty(this._elementRef.nativeElement, 'disabled', isDisabled);
    }
}
RangeValueAccessor.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                selector: 'input[type=range][formControlName],input[type=range][formControl],input[type=range][ngModel]',
                host: {
                    '(change)': 'onChange($event.target.value)',
                    '(input)': 'onChange($event.target.value)',
                    '(blur)': 'onTouched()'
                },
                providers: [RANGE_VALUE_ACCESSOR]
            },] }
];
/** @nocollapse */
RangeValueAccessor.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }
];
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
const FormErrorExamples = {
    formControlName: `
    <div [formGroup]="myGroup">
      <input formControlName="firstName">
    </div>

    In your class:

    this.myGroup = new FormGroup({
       firstName: new FormControl()
    });`,
    formGroupName: `
    <div [formGroup]="myGroup">
       <div formGroupName="person">
          <input formControlName="firstName">
       </div>
    </div>

    In your class:

    this.myGroup = new FormGroup({
       person: new FormGroup({ firstName: new FormControl() })
    });`,
    formArrayName: `
    <div [formGroup]="myGroup">
      <div formArrayName="cities">
        <div *ngFor="let city of cityArray.controls; index as i">
          <input [formControlName]="i">
        </div>
      </div>
    </div>

    In your class:

    this.cityArray = new FormArray([new FormControl('SF')]);
    this.myGroup = new FormGroup({
      cities: this.cityArray
    });`,
    ngModelGroup: `
    <form>
       <div ngModelGroup="person">
          <input [(ngModel)]="person.name" name="firstName">
       </div>
    </form>`,
    ngModelWithFormGroup: `
    <div [formGroup]="myGroup">
       <input formControlName="firstName">
       <input [(ngModel)]="showMoreControls" [ngModelOptions]="{standalone: true}">
    </div>
  `
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ReactiveErrors {
    /**
     * @return {?}
     */
    static controlParentException() {
        throw new Error(`formControlName must be used with a parent formGroup directive.  You'll want to add a formGroup
       directive and pass it an existing FormGroup instance (you can create one in your class).

      Example:

      ${FormErrorExamples.formControlName}`);
    }
    /**
     * @return {?}
     */
    static ngModelGroupException() {
        throw new Error(`formControlName cannot be used with an ngModelGroup parent. It is only compatible with parents
       that also have a "form" prefix: formGroupName, formArrayName, or formGroup.

       Option 1:  Update the parent to be formGroupName (reactive form strategy)

        ${FormErrorExamples.formGroupName}

        Option 2: Use ngModel instead of formControlName (template-driven strategy)

        ${FormErrorExamples.ngModelGroup}`);
    }
    /**
     * @return {?}
     */
    static missingFormException() {
        throw new Error(`formGroup expects a FormGroup instance. Please pass one in.

       Example:

       ${FormErrorExamples.formControlName}`);
    }
    /**
     * @return {?}
     */
    static groupParentException() {
        throw new Error(`formGroupName must be used with a parent formGroup directive.  You'll want to add a formGroup
      directive and pass it an existing FormGroup instance (you can create one in your class).

      Example:

      ${FormErrorExamples.formGroupName}`);
    }
    /**
     * @return {?}
     */
    static arrayParentException() {
        throw new Error(`formArrayName must be used with a parent formGroup directive.  You'll want to add a formGroup
       directive and pass it an existing FormGroup instance (you can create one in your class).

        Example:

        ${FormErrorExamples.formArrayName}`);
    }
    /**
     * @return {?}
     */
    static disabledAttrWarning() {
        console.warn(`
      It looks like you're using the disabled attribute with a reactive form directive. If you set disabled to true
      when you set up this control in your component class, the disabled attribute will actually be set in the DOM for
      you. We recommend using this approach to avoid 'changed after checked' errors.
       
      Example: 
      form = new FormGroup({
        first: new FormControl({value: 'Nancy', disabled: true}, Validators.required),
        last: new FormControl('Drew', Validators.required)
      });
    `);
    }
    /**
     * @param {?} directiveName
     * @return {?}
     */
    static ngModelWarning(directiveName) {
        console.warn(`
    It looks like you're using ngModel on the same form field as ${directiveName}. 
    Support for using the ngModel input property and ngModelChange event with 
    reactive form directives has been deprecated in Angular v6 and will be removed 
    in Angular v7.
    
    For more information on this, see our API docs here:
    https://angular.io/api/forms/${directiveName === 'formControl' ? 'FormControlDirective'
            : 'FormControlName'}#use-with-ngmodel
    `);
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const SELECT_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])((/**
     * @return {?}
     */
    () => SelectControlValueAccessor)),
    multi: true
};
/**
 * @param {?} id
 * @param {?} value
 * @return {?}
 */
function _buildValueString(id, value) {
    if (id == null)
        return `${value}`;
    if (value && typeof value === 'object')
        value = 'Object';
    return `${id}: ${value}`.slice(0, 50);
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
class SelectControlValueAccessor {
    /**
     * @param {?} _renderer
     * @param {?} _elementRef
     */
    constructor(_renderer, _elementRef) {
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
        this.onChange = (/**
         * @param {?} _
         * @return {?}
         */
        (_) => { });
        /**
         * \@description
         * The registered callback function called when a blur event occurs on the input element.
         */
        this.onTouched = (/**
         * @return {?}
         */
        () => { });
        this._compareWith = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵlooseIdentical"];
    }
    /**
     * \@description
     * Tracks the option comparison algorithm for tracking identities when
     * checking for changes.
     * @param {?} fn
     * @return {?}
     */
    set compareWith(fn) {
        if (typeof fn !== 'function') {
            throw new Error(`compareWith must be a function, but received ${JSON.stringify(fn)}`);
        }
        this._compareWith = fn;
    }
    /**
     * Sets the "value" property on the input element. The "selectedIndex"
     * property is also set if an ID is provided on the option element.
     *
     * @param {?} value The checked value
     * @return {?}
     */
    writeValue(value) {
        this.value = value;
        /** @type {?} */
        const id = this._getOptionId(value);
        if (id == null) {
            this._renderer.setProperty(this._elementRef.nativeElement, 'selectedIndex', -1);
        }
        /** @type {?} */
        const valueString = _buildValueString(id, value);
        this._renderer.setProperty(this._elementRef.nativeElement, 'value', valueString);
    }
    /**
     * \@description
     * Registers a function called when the control value changes.
     *
     * @param {?} fn The callback function
     * @return {?}
     */
    registerOnChange(fn) {
        this.onChange = (/**
         * @param {?} valueString
         * @return {?}
         */
        (valueString) => {
            this.value = this._getOptionValue(valueString);
            fn(this.value);
        });
    }
    /**
     * \@description
     * Registers a function called when the control is touched.
     *
     * @param {?} fn The callback function
     * @return {?}
     */
    registerOnTouched(fn) { this.onTouched = fn; }
    /**
     * Sets the "disabled" property on the select input element.
     *
     * @param {?} isDisabled The disabled value
     * @return {?}
     */
    setDisabledState(isDisabled) {
        this._renderer.setProperty(this._elementRef.nativeElement, 'disabled', isDisabled);
    }
    /**
     * \@internal
     * @return {?}
     */
    _registerOption() { return (this._idCounter++).toString(); }
    /**
     * \@internal
     * @param {?} value
     * @return {?}
     */
    _getOptionId(value) {
        for (const id of Array.from(this._optionMap.keys())) {
            if (this._compareWith(this._optionMap.get(id), value))
                return id;
        }
        return null;
    }
    /**
     * \@internal
     * @param {?} valueString
     * @return {?}
     */
    _getOptionValue(valueString) {
        /** @type {?} */
        const id = _extractId(valueString);
        return this._optionMap.has(id) ? this._optionMap.get(id) : valueString;
    }
}
SelectControlValueAccessor.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                selector: 'select:not([multiple])[formControlName],select:not([multiple])[formControl],select:not([multiple])[ngModel]',
                host: { '(change)': 'onChange($event.target.value)', '(blur)': 'onTouched()' },
                providers: [SELECT_VALUE_ACCESSOR]
            },] }
];
/** @nocollapse */
SelectControlValueAccessor.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }
];
SelectControlValueAccessor.propDecorators = {
    compareWith: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }]
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
class NgSelectOption {
    /**
     * @param {?} _element
     * @param {?} _renderer
     * @param {?} _select
     */
    constructor(_element, _renderer, _select) {
        this._element = _element;
        this._renderer = _renderer;
        this._select = _select;
        if (this._select)
            this.id = this._select._registerOption();
    }
    /**
     * \@description
     * Tracks the value bound to the option element. Unlike the value binding,
     * ngValue supports binding to objects.
     * @param {?} value
     * @return {?}
     */
    set ngValue(value) {
        if (this._select == null)
            return;
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
    set value(value) {
        this._setElementValue(value);
        if (this._select)
            this._select.writeValue(this._select.value);
    }
    /**
     * \@internal
     * @param {?} value
     * @return {?}
     */
    _setElementValue(value) {
        this._renderer.setProperty(this._element.nativeElement, 'value', value);
    }
    /**
     * \@description
     * Lifecycle method called before the directive's instance is destroyed. For internal use only.
     * @return {?}
     */
    ngOnDestroy() {
        if (this._select) {
            this._select._optionMap.delete(this.id);
            this._select.writeValue(this._select.value);
        }
    }
}
NgSelectOption.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{ selector: 'option' },] }
];
/** @nocollapse */
NgSelectOption.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"] },
    { type: SelectControlValueAccessor, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Host"] }] }
];
NgSelectOption.propDecorators = {
    ngValue: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['ngValue',] }],
    value: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['value',] }]
};
if (false) {}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const SELECT_MULTIPLE_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])((/**
     * @return {?}
     */
    () => SelectMultipleControlValueAccessor)),
    multi: true
};
/**
 * @param {?} id
 * @param {?} value
 * @return {?}
 */
function _buildValueString$1(id, value) {
    if (id == null)
        return `${value}`;
    if (typeof value === 'string')
        value = `'${value}'`;
    if (value && typeof value === 'object')
        value = 'Object';
    return `${id}: ${value}`.slice(0, 50);
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
function HTMLOption() { }
if (false) {}
/**
 * Mock interface for HTMLCollection
 * @abstract
 */
class HTMLCollection {
}
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
class SelectMultipleControlValueAccessor {
    /**
     * @param {?} _renderer
     * @param {?} _elementRef
     */
    constructor(_renderer, _elementRef) {
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
        this.onChange = (/**
         * @param {?} _
         * @return {?}
         */
        (_) => { });
        /**
         * \@description
         * The registered callback function called when a blur event occurs on the input element.
         */
        this.onTouched = (/**
         * @return {?}
         */
        () => { });
        this._compareWith = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵlooseIdentical"];
    }
    /**
     * \@description
     * Tracks the option comparison algorithm for tracking identities when
     * checking for changes.
     * @param {?} fn
     * @return {?}
     */
    set compareWith(fn) {
        if (typeof fn !== 'function') {
            throw new Error(`compareWith must be a function, but received ${JSON.stringify(fn)}`);
        }
        this._compareWith = fn;
    }
    /**
     * \@description
     * Sets the "value" property on one or of more
     * of the select's options.
     *
     * @param {?} value The value
     * @return {?}
     */
    writeValue(value) {
        this.value = value;
        /** @type {?} */
        let optionSelectedStateSetter;
        if (Array.isArray(value)) {
            // convert values to ids
            /** @type {?} */
            const ids = value.map((/**
             * @param {?} v
             * @return {?}
             */
            (v) => this._getOptionId(v)));
            optionSelectedStateSetter = (/**
             * @param {?} opt
             * @param {?} o
             * @return {?}
             */
            (opt, o) => { opt._setSelected(ids.indexOf(o.toString()) > -1); });
        }
        else {
            optionSelectedStateSetter = (/**
             * @param {?} opt
             * @param {?} o
             * @return {?}
             */
            (opt, o) => { opt._setSelected(false); });
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
    registerOnChange(fn) {
        this.onChange = (/**
         * @param {?} _
         * @return {?}
         */
        (_) => {
            /** @type {?} */
            const selected = [];
            if (_.hasOwnProperty('selectedOptions')) {
                /** @type {?} */
                const options = _.selectedOptions;
                for (let i = 0; i < options.length; i++) {
                    /** @type {?} */
                    const opt = options.item(i);
                    /** @type {?} */
                    const val = this._getOptionValue(opt.value);
                    selected.push(val);
                }
            }
            // Degrade on IE
            else {
                /** @type {?} */
                const options = (/** @type {?} */ (_.options));
                for (let i = 0; i < options.length; i++) {
                    /** @type {?} */
                    const opt = options.item(i);
                    if (opt.selected) {
                        /** @type {?} */
                        const val = this._getOptionValue(opt.value);
                        selected.push(val);
                    }
                }
            }
            this.value = selected;
            fn(selected);
        });
    }
    /**
     * \@description
     * Registers a function called when the control is touched.
     *
     * @param {?} fn The callback function
     * @return {?}
     */
    registerOnTouched(fn) { this.onTouched = fn; }
    /**
     * Sets the "disabled" property on the select input element.
     *
     * @param {?} isDisabled The disabled value
     * @return {?}
     */
    setDisabledState(isDisabled) {
        this._renderer.setProperty(this._elementRef.nativeElement, 'disabled', isDisabled);
    }
    /**
     * \@internal
     * @param {?} value
     * @return {?}
     */
    _registerOption(value) {
        /** @type {?} */
        const id = (this._idCounter++).toString();
        this._optionMap.set(id, value);
        return id;
    }
    /**
     * \@internal
     * @param {?} value
     * @return {?}
     */
    _getOptionId(value) {
        for (const id of Array.from(this._optionMap.keys())) {
            if (this._compareWith((/** @type {?} */ (this._optionMap.get(id)))._value, value))
                return id;
        }
        return null;
    }
    /**
     * \@internal
     * @param {?} valueString
     * @return {?}
     */
    _getOptionValue(valueString) {
        /** @type {?} */
        const id = _extractId$1(valueString);
        return this._optionMap.has(id) ? (/** @type {?} */ (this._optionMap.get(id)))._value : valueString;
    }
}
SelectMultipleControlValueAccessor.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                selector: 'select[multiple][formControlName],select[multiple][formControl],select[multiple][ngModel]',
                host: { '(change)': 'onChange($event.target)', '(blur)': 'onTouched()' },
                providers: [SELECT_MULTIPLE_VALUE_ACCESSOR]
            },] }
];
/** @nocollapse */
SelectMultipleControlValueAccessor.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }
];
SelectMultipleControlValueAccessor.propDecorators = {
    compareWith: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }]
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
class ɵNgSelectMultipleOption {
    /**
     * @param {?} _element
     * @param {?} _renderer
     * @param {?} _select
     */
    constructor(_element, _renderer, _select) {
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
    set ngValue(value) {
        if (this._select == null)
            return;
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
    set value(value) {
        if (this._select) {
            this._value = value;
            this._setElementValue(_buildValueString$1(this.id, value));
            this._select.writeValue(this._select.value);
        }
        else {
            this._setElementValue(value);
        }
    }
    /**
     * \@internal
     * @param {?} value
     * @return {?}
     */
    _setElementValue(value) {
        this._renderer.setProperty(this._element.nativeElement, 'value', value);
    }
    /**
     * \@internal
     * @param {?} selected
     * @return {?}
     */
    _setSelected(selected) {
        this._renderer.setProperty(this._element.nativeElement, 'selected', selected);
    }
    /**
     * \@description
     * Lifecycle method called before the directive's instance is destroyed. For internal use only.
     * @return {?}
     */
    ngOnDestroy() {
        if (this._select) {
            this._select._optionMap.delete(this.id);
            this._select.writeValue(this._select.value);
        }
    }
}
ɵNgSelectMultipleOption.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{ selector: 'option' },] }
];
/** @nocollapse */
ɵNgSelectMultipleOption.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"] },
    { type: SelectMultipleControlValueAccessor, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Host"] }] }
];
ɵNgSelectMultipleOption.propDecorators = {
    ngValue: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['ngValue',] }],
    value: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['value',] }]
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
    return [...(/** @type {?} */ (parent.path)), name];
}
/**
 * @param {?} control
 * @param {?} dir
 * @return {?}
 */
function setUpControl(control, dir) {
    if (!control)
        _throwError(dir, 'Cannot find control with');
    if (!dir.valueAccessor)
        _throwError(dir, 'No value accessor for form control with');
    control.validator = Validators.compose([(/** @type {?} */ (control.validator)), dir.validator]);
    control.asyncValidator = Validators.composeAsync([(/** @type {?} */ (control.asyncValidator)), dir.asyncValidator]);
    (/** @type {?} */ (dir.valueAccessor)).writeValue(control.value);
    setUpViewChangePipeline(control, dir);
    setUpModelChangePipeline(control, dir);
    setUpBlurPipeline(control, dir);
    if ((/** @type {?} */ (dir.valueAccessor)).setDisabledState) {
        control.registerOnDisabledChange((/**
         * @param {?} isDisabled
         * @return {?}
         */
        (isDisabled) => { (/** @type {?} */ ((/** @type {?} */ (dir.valueAccessor)).setDisabledState))(isDisabled); }));
    }
    // re-run validation when validator binding changes, e.g. minlength=3 -> minlength=4
    dir._rawValidators.forEach((/**
     * @param {?} validator
     * @return {?}
     */
    (validator) => {
        if (((/** @type {?} */ (validator))).registerOnValidatorChange)
            (/** @type {?} */ (((/** @type {?} */ (validator))).registerOnValidatorChange))((/**
             * @return {?}
             */
            () => control.updateValueAndValidity()));
    }));
    dir._rawAsyncValidators.forEach((/**
     * @param {?} validator
     * @return {?}
     */
    (validator) => {
        if (((/** @type {?} */ (validator))).registerOnValidatorChange)
            (/** @type {?} */ (((/** @type {?} */ (validator))).registerOnValidatorChange))((/**
             * @return {?}
             */
            () => control.updateValueAndValidity()));
    }));
}
/**
 * @param {?} control
 * @param {?} dir
 * @return {?}
 */
function cleanUpControl(control, dir) {
    (/** @type {?} */ (dir.valueAccessor)).registerOnChange((/**
     * @return {?}
     */
    () => _noControlError(dir)));
    (/** @type {?} */ (dir.valueAccessor)).registerOnTouched((/**
     * @return {?}
     */
    () => _noControlError(dir)));
    dir._rawValidators.forEach((/**
     * @param {?} validator
     * @return {?}
     */
    (validator) => {
        if (validator.registerOnValidatorChange) {
            validator.registerOnValidatorChange(null);
        }
    }));
    dir._rawAsyncValidators.forEach((/**
     * @param {?} validator
     * @return {?}
     */
    (validator) => {
        if (validator.registerOnValidatorChange) {
            validator.registerOnValidatorChange(null);
        }
    }));
    if (control)
        control._clearChangeFns();
}
/**
 * @param {?} control
 * @param {?} dir
 * @return {?}
 */
function setUpViewChangePipeline(control, dir) {
    (/** @type {?} */ (dir.valueAccessor)).registerOnChange((/**
     * @param {?} newValue
     * @return {?}
     */
    (newValue) => {
        control._pendingValue = newValue;
        control._pendingChange = true;
        control._pendingDirty = true;
        if (control.updateOn === 'change')
            updateControl(control, dir);
    }));
}
/**
 * @param {?} control
 * @param {?} dir
 * @return {?}
 */
function setUpBlurPipeline(control, dir) {
    (/** @type {?} */ (dir.valueAccessor)).registerOnTouched((/**
     * @return {?}
     */
    () => {
        control._pendingTouched = true;
        if (control.updateOn === 'blur' && control._pendingChange)
            updateControl(control, dir);
        if (control.updateOn !== 'submit')
            control.markAsTouched();
    }));
}
/**
 * @param {?} control
 * @param {?} dir
 * @return {?}
 */
function updateControl(control, dir) {
    if (control._pendingDirty)
        control.markAsDirty();
    control.setValue(control._pendingValue, { emitModelToViewChange: false });
    dir.viewToModelUpdate(control._pendingValue);
    control._pendingChange = false;
}
/**
 * @param {?} control
 * @param {?} dir
 * @return {?}
 */
function setUpModelChangePipeline(control, dir) {
    control.registerOnChange((/**
     * @param {?} newValue
     * @param {?} emitModelEvent
     * @return {?}
     */
    (newValue, emitModelEvent) => {
        // control -> view
        (/** @type {?} */ (dir.valueAccessor)).writeValue(newValue);
        // control -> ngModel
        if (emitModelEvent)
            dir.viewToModelUpdate(newValue);
    }));
}
/**
 * @param {?} control
 * @param {?} dir
 * @return {?}
 */
function setUpFormContainer(control, dir) {
    if (control == null)
        _throwError(dir, 'Cannot find control with');
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
    let messageEnd;
    if ((/** @type {?} */ (dir.path)).length > 1) {
        messageEnd = `path: '${(/** @type {?} */ (dir.path)).join(' -> ')}'`;
    }
    else if ((/** @type {?} */ (dir.path))[0]) {
        messageEnd = `name: '${dir.path}'`;
    }
    else {
        messageEnd = 'unspecified name attribute';
    }
    throw new Error(`${message} ${messageEnd}`);
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
    return validators != null ? Validators.composeAsync(validators.map(normalizeAsyncValidator)) :
        null;
}
/**
 * @param {?} changes
 * @param {?} viewModel
 * @return {?}
 */
function isPropertyUpdated(changes, viewModel) {
    if (!changes.hasOwnProperty('model'))
        return false;
    /** @type {?} */
    const change = changes['model'];
    if (change.isFirstChange())
        return true;
    return !Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵlooseIdentical"])(viewModel, change.currentValue);
}
/** @type {?} */
const BUILTIN_ACCESSORS = [
    CheckboxControlValueAccessor,
    RangeValueAccessor,
    NumberValueAccessor,
    SelectControlValueAccessor,
    SelectMultipleControlValueAccessor,
    RadioControlValueAccessor,
];
/**
 * @param {?} valueAccessor
 * @return {?}
 */
function isBuiltInAccessor(valueAccessor) {
    return BUILTIN_ACCESSORS.some((/**
     * @param {?} a
     * @return {?}
     */
    a => valueAccessor.constructor === a));
}
/**
 * @param {?} form
 * @param {?} directives
 * @return {?}
 */
function syncPendingControls(form, directives) {
    form._syncPendingControls();
    directives.forEach((/**
     * @param {?} dir
     * @return {?}
     */
    dir => {
        /** @type {?} */
        const control = (/** @type {?} */ (dir.control));
        if (control.updateOn === 'submit' && control._pendingChange) {
            dir.viewToModelUpdate(control._pendingValue);
            control._pendingChange = false;
        }
    }));
}
// TODO: vsavkin remove it once https://github.com/angular/angular/issues/3011 is implemented
/**
 * @param {?} dir
 * @param {?} valueAccessors
 * @return {?}
 */
function selectValueAccessor(dir, valueAccessors) {
    if (!valueAccessors)
        return null;
    if (!Array.isArray(valueAccessors))
        _throwError(dir, 'Value accessor was not provided as an array for form control with');
    /** @type {?} */
    let defaultAccessor = undefined;
    /** @type {?} */
    let builtinAccessor = undefined;
    /** @type {?} */
    let customAccessor = undefined;
    valueAccessors.forEach((/**
     * @param {?} v
     * @return {?}
     */
    (v) => {
        if (v.constructor === DefaultValueAccessor) {
            defaultAccessor = v;
        }
        else if (isBuiltInAccessor(v)) {
            if (builtinAccessor)
                _throwError(dir, 'More than one built-in value accessor matches form control with');
            builtinAccessor = v;
        }
        else {
            if (customAccessor)
                _throwError(dir, 'More than one custom value accessor matches form control with');
            customAccessor = v;
        }
    }));
    if (customAccessor)
        return customAccessor;
    if (builtinAccessor)
        return builtinAccessor;
    if (defaultAccessor)
        return defaultAccessor;
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
    const index = list.indexOf(el);
    if (index > -1)
        list.splice(index, 1);
}
// TODO(kara): remove after deprecation period
/**
 * @param {?} name
 * @param {?} type
 * @param {?} instance
 * @param {?} warningConfig
 * @return {?}
 */
function _ngModelWarning(name, type, instance, warningConfig) {
    if (!Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["isDevMode"])() || warningConfig === 'never')
        return;
    if (((warningConfig === null || warningConfig === 'once') && !type._ngModelWarningSentOnce) ||
        (warningConfig === 'always' && !instance._ngModelWarningSent)) {
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
const VALID = 'VALID';
/**
 * Reports that a FormControl is invalid, meaning that an error exists in the input value.
 *
 * @see `status`
 * @type {?}
 */
const INVALID = 'INVALID';
/**
 * Reports that a FormControl is pending, meaning that that async validation is occurring and
 * errors are not yet available for the input value.
 *
 * @see `markAsPending`
 * @see `status`
 * @type {?}
 */
const PENDING = 'PENDING';
/**
 * Reports that a FormControl is disabled, meaning that the control is exempt from ancestor
 * calculations of validity or value.
 *
 * @see `markAsDisabled`
 * @see `status`
 * @type {?}
 */
const DISABLED = 'DISABLED';
/**
 * @param {?} control
 * @param {?} path
 * @param {?} delimiter
 * @return {?}
 */
function _find(control, path, delimiter) {
    if (path == null)
        return null;
    if (!(path instanceof Array)) {
        path = ((/** @type {?} */ (path))).split(delimiter);
    }
    if (path instanceof Array && (path.length === 0))
        return null;
    return ((/** @type {?} */ (path))).reduce((/**
     * @param {?} v
     * @param {?} name
     * @return {?}
     */
    (v, name) => {
        if (v instanceof FormGroup) {
            return v.controls.hasOwnProperty((/** @type {?} */ (name))) ? v.controls[name] : null;
        }
        if (v instanceof FormArray) {
            return v.at((/** @type {?} */ (name))) || null;
        }
        return null;
    }), control);
}
/**
 * @param {?=} validatorOrOpts
 * @return {?}
 */
function coerceToValidator(validatorOrOpts) {
    /** @type {?} */
    const validator = (/** @type {?} */ ((isOptionsObj(validatorOrOpts) ? ((/** @type {?} */ (validatorOrOpts))).validators :
        validatorOrOpts)));
    return Array.isArray(validator) ? composeValidators(validator) : validator || null;
}
/**
 * @param {?=} asyncValidator
 * @param {?=} validatorOrOpts
 * @return {?}
 */
function coerceToAsyncValidator(asyncValidator, validatorOrOpts) {
    /** @type {?} */
    const origAsyncValidator = (/** @type {?} */ ((isOptionsObj(validatorOrOpts) ? ((/** @type {?} */ (validatorOrOpts))).asyncValidators :
        asyncValidator)));
    return Array.isArray(origAsyncValidator) ? composeAsyncValidators(origAsyncValidator) :
        origAsyncValidator || null;
}
/**
 * Interface for options provided to an `AbstractControl`.
 *
 * \@publicApi
 * @record
 */
function AbstractControlOptions() { }
if (false) {}
/**
 * @param {?=} validatorOrOpts
 * @return {?}
 */
function isOptionsObj(validatorOrOpts) {
    return validatorOrOpts != null && !Array.isArray(validatorOrOpts) &&
        typeof validatorOrOpts === 'object';
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
class AbstractControl {
    /**
     * Initialize the AbstractControl instance.
     *
     * @param {?} validator The function that determines the synchronous validity of this control.
     * @param {?} asyncValidator The function that determines the asynchronous validity of this
     * control.
     */
    constructor(validator, asyncValidator) {
        this.validator = validator;
        this.asyncValidator = asyncValidator;
        /**
         * \@internal
         */
        this._onCollectionChange = (/**
         * @return {?}
         */
        () => { });
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
    get parent() { return this._parent; }
    /**
     * A control is `valid` when its `status` is `VALID`.
     *
     * @see {\@link AbstractControl.status}
     *
     * @return {?} True if the control has passed all of its validation tests,
     * false otherwise.
     */
    get valid() { return this.status === VALID; }
    /**
     * A control is `invalid` when its `status` is `INVALID`.
     *
     * @see {\@link AbstractControl.status}
     *
     * @return {?} True if this control has failed one or more of its validation checks,
     * false otherwise.
     */
    get invalid() { return this.status === INVALID; }
    /**
     * A control is `pending` when its `status` is `PENDING`.
     *
     * @see {\@link AbstractControl.status}
     *
     * @return {?} True if this control is in the process of conducting a validation check,
     * false otherwise.
     */
    get pending() { return this.status == PENDING; }
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
    get disabled() { return this.status === DISABLED; }
    /**
     * A control is `enabled` as long as its `status` is not `DISABLED`.
     *
     * @see {\@link AbstractControl.status}
     *
     * @return {?} True if the control has any status other than 'DISABLED',
     * false if the status is 'DISABLED'.
     *
     */
    get enabled() { return this.status !== DISABLED; }
    /**
     * A control is `dirty` if the user has changed the value
     * in the UI.
     *
     * @return {?} True if the user has changed the value of this control in the UI; compare `pristine`.
     * Programmatic changes to a control's value do not mark it dirty.
     */
    get dirty() { return !this.pristine; }
    /**
     * True if the control has not been marked as touched
     *
     * A control is `untouched` if the user has not yet triggered
     * a `blur` event on it.
     * @return {?}
     */
    get untouched() { return !this.touched; }
    /**
     * Reports the update strategy of the `AbstractControl` (meaning
     * the event on which the control updates itself).
     * Possible values: `'change'` | `'blur'` | `'submit'`
     * Default value: `'change'`
     * @return {?}
     */
    get updateOn() {
        return this._updateOn ? this._updateOn : (this.parent ? this.parent.updateOn : 'change');
    }
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
    setValidators(newValidator) {
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
    setAsyncValidators(newValidator) {
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
    clearValidators() { this.validator = null; }
    /**
     * Empties out the async validator list.
     *
     * When you add or remove a validator at run time, you must call
     * `updateValueAndValidity()` for the new validation to take effect.
     *
     * @return {?}
     */
    clearAsyncValidators() { this.asyncValidator = null; }
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
    markAsTouched(opts = {}) {
        ((/** @type {?} */ (this))).touched = true;
        if (this._parent && !opts.onlySelf) {
            this._parent.markAsTouched(opts);
        }
    }
    /**
     * Marks the control and all its descendant controls as `touched`.
     * @see `markAsTouched()`
     * @return {?}
     */
    markAllAsTouched() {
        this.markAsTouched({ onlySelf: true });
        this._forEachChild((/**
         * @param {?} control
         * @return {?}
         */
        (control) => control.markAllAsTouched()));
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
    markAsUntouched(opts = {}) {
        ((/** @type {?} */ (this))).touched = false;
        this._pendingTouched = false;
        this._forEachChild((/**
         * @param {?} control
         * @return {?}
         */
        (control) => { control.markAsUntouched({ onlySelf: true }); }));
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
    markAsDirty(opts = {}) {
        ((/** @type {?} */ (this))).pristine = false;
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
    markAsPristine(opts = {}) {
        ((/** @type {?} */ (this))).pristine = true;
        this._pendingDirty = false;
        this._forEachChild((/**
         * @param {?} control
         * @return {?}
         */
        (control) => { control.markAsPristine({ onlySelf: true }); }));
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
    markAsPending(opts = {}) {
        ((/** @type {?} */ (this))).status = PENDING;
        if (opts.emitEvent !== false) {
            ((/** @type {?} */ (this.statusChanges))).emit(this.status);
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
    disable(opts = {}) {
        // If parent has been marked artificially dirty we don't want to re-calculate the
        // parent's dirtiness based on the children.
        /** @type {?} */
        const skipPristineCheck = this._parentMarkedDirty(opts.onlySelf);
        ((/** @type {?} */ (this))).status = DISABLED;
        ((/** @type {?} */ (this))).errors = null;
        this._forEachChild((/**
         * @param {?} control
         * @return {?}
         */
        (control) => { control.disable(Object.assign({}, opts, { onlySelf: true })); }));
        this._updateValue();
        if (opts.emitEvent !== false) {
            ((/** @type {?} */ (this.valueChanges))).emit(this.value);
            ((/** @type {?} */ (this.statusChanges))).emit(this.status);
        }
        this._updateAncestors(Object.assign({}, opts, { skipPristineCheck }));
        this._onDisabledChange.forEach((/**
         * @param {?} changeFn
         * @return {?}
         */
        (changeFn) => changeFn(true)));
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
    enable(opts = {}) {
        // If parent has been marked artificially dirty we don't want to re-calculate the
        // parent's dirtiness based on the children.
        /** @type {?} */
        const skipPristineCheck = this._parentMarkedDirty(opts.onlySelf);
        ((/** @type {?} */ (this))).status = VALID;
        this._forEachChild((/**
         * @param {?} control
         * @return {?}
         */
        (control) => { control.enable(Object.assign({}, opts, { onlySelf: true })); }));
        this.updateValueAndValidity({ onlySelf: true, emitEvent: opts.emitEvent });
        this._updateAncestors(Object.assign({}, opts, { skipPristineCheck }));
        this._onDisabledChange.forEach((/**
         * @param {?} changeFn
         * @return {?}
         */
        (changeFn) => changeFn(false)));
    }
    /**
     * @private
     * @param {?} opts
     * @return {?}
     */
    _updateAncestors(opts) {
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
    setParent(parent) { this._parent = parent; }
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
    updateValueAndValidity(opts = {}) {
        this._setInitialStatus();
        this._updateValue();
        if (this.enabled) {
            this._cancelExistingSubscription();
            ((/** @type {?} */ (this))).errors = this._runValidator();
            ((/** @type {?} */ (this))).status = this._calculateStatus();
            if (this.status === VALID || this.status === PENDING) {
                this._runAsyncValidator(opts.emitEvent);
            }
        }
        if (opts.emitEvent !== false) {
            ((/** @type {?} */ (this.valueChanges))).emit(this.value);
            ((/** @type {?} */ (this.statusChanges))).emit(this.status);
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
    _updateTreeValidity(opts = { emitEvent: true }) {
        this._forEachChild((/**
         * @param {?} ctrl
         * @return {?}
         */
        (ctrl) => ctrl._updateTreeValidity(opts)));
        this.updateValueAndValidity({ onlySelf: true, emitEvent: opts.emitEvent });
    }
    /**
     * @private
     * @return {?}
     */
    _setInitialStatus() {
        ((/** @type {?} */ (this))).status = this._allControlsDisabled() ? DISABLED : VALID;
    }
    /**
     * @private
     * @return {?}
     */
    _runValidator() {
        return this.validator ? this.validator(this) : null;
    }
    /**
     * @private
     * @param {?=} emitEvent
     * @return {?}
     */
    _runAsyncValidator(emitEvent) {
        if (this.asyncValidator) {
            ((/** @type {?} */ (this))).status = PENDING;
            /** @type {?} */
            const obs = toObservable(this.asyncValidator(this));
            this._asyncValidationSubscription =
                obs.subscribe((/**
                 * @param {?} errors
                 * @return {?}
                 */
                (errors) => this.setErrors(errors, { emitEvent })));
        }
    }
    /**
     * @private
     * @return {?}
     */
    _cancelExistingSubscription() {
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
    setErrors(errors, opts = {}) {
        ((/** @type {?} */ (this))).errors = errors;
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
    get(path) { return _find(this, path, '.'); }
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
    getError(errorCode, path) {
        /** @type {?} */
        const control = path ? this.get(path) : this;
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
    hasError(errorCode, path) {
        return !!this.getError(errorCode, path);
    }
    /**
     * Retrieves the top-level ancestor of this control.
     * @return {?}
     */
    get root() {
        /** @type {?} */
        let x = this;
        while (x._parent) {
            x = x._parent;
        }
        return x;
    }
    /**
     * \@internal
     * @param {?} emitEvent
     * @return {?}
     */
    _updateControlsErrors(emitEvent) {
        ((/** @type {?} */ (this))).status = this._calculateStatus();
        if (emitEvent) {
            ((/** @type {?} */ (this.statusChanges))).emit(this.status);
        }
        if (this._parent) {
            this._parent._updateControlsErrors(emitEvent);
        }
    }
    /**
     * \@internal
     * @return {?}
     */
    _initObservables() {
        ((/** @type {?} */ (this))).valueChanges = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        ((/** @type {?} */ (this))).statusChanges = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    /**
     * @private
     * @return {?}
     */
    _calculateStatus() {
        if (this._allControlsDisabled())
            return DISABLED;
        if (this.errors)
            return INVALID;
        if (this._anyControlsHaveStatus(PENDING))
            return PENDING;
        if (this._anyControlsHaveStatus(INVALID))
            return INVALID;
        return VALID;
    }
    /**
     * \@internal
     * @param {?} status
     * @return {?}
     */
    _anyControlsHaveStatus(status) {
        return this._anyControls((/**
         * @param {?} control
         * @return {?}
         */
        (control) => control.status === status));
    }
    /**
     * \@internal
     * @return {?}
     */
    _anyControlsDirty() {
        return this._anyControls((/**
         * @param {?} control
         * @return {?}
         */
        (control) => control.dirty));
    }
    /**
     * \@internal
     * @return {?}
     */
    _anyControlsTouched() {
        return this._anyControls((/**
         * @param {?} control
         * @return {?}
         */
        (control) => control.touched));
    }
    /**
     * \@internal
     * @param {?=} opts
     * @return {?}
     */
    _updatePristine(opts = {}) {
        ((/** @type {?} */ (this))).pristine = !this._anyControlsDirty();
        if (this._parent && !opts.onlySelf) {
            this._parent._updatePristine(opts);
        }
    }
    /**
     * \@internal
     * @param {?=} opts
     * @return {?}
     */
    _updateTouched(opts = {}) {
        ((/** @type {?} */ (this))).touched = this._anyControlsTouched();
        if (this._parent && !opts.onlySelf) {
            this._parent._updateTouched(opts);
        }
    }
    /**
     * \@internal
     * @param {?} formState
     * @return {?}
     */
    _isBoxedValue(formState) {
        return typeof formState === 'object' && formState !== null &&
            Object.keys(formState).length === 2 && 'value' in formState && 'disabled' in formState;
    }
    /**
     * \@internal
     * @param {?} fn
     * @return {?}
     */
    _registerOnCollectionChange(fn) { this._onCollectionChange = fn; }
    /**
     * \@internal
     * @param {?=} opts
     * @return {?}
     */
    _setUpdateStrategy(opts) {
        if (isOptionsObj(opts) && ((/** @type {?} */ (opts))).updateOn != null) {
            this._updateOn = (/** @type {?} */ (((/** @type {?} */ (opts))).updateOn));
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
    _parentMarkedDirty(onlySelf) {
        /** @type {?} */
        const parentDirty = this._parent && this._parent.dirty;
        return !onlySelf && parentDirty && !this._parent._anyControlsDirty();
    }
}
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
class FormControl extends AbstractControl {
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
    constructor(formState = null, validatorOrOpts, asyncValidator) {
        super(coerceToValidator(validatorOrOpts), coerceToAsyncValidator(asyncValidator, validatorOrOpts));
        /**
         * \@internal
         */
        this._onChange = [];
        this._applyFormState(formState);
        this._setUpdateStrategy(validatorOrOpts);
        this.updateValueAndValidity({ onlySelf: true, emitEvent: false });
        this._initObservables();
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
    setValue(value, options = {}) {
        ((/** @type {?} */ (this))).value = this._pendingValue = value;
        if (this._onChange.length && options.emitModelToViewChange !== false) {
            this._onChange.forEach((/**
             * @param {?} changeFn
             * @return {?}
             */
            (changeFn) => changeFn(this.value, options.emitViewToModelChange !== false)));
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
    patchValue(value, options = {}) {
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
    reset(formState = null, options = {}) {
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
    _updateValue() { }
    /**
     * \@internal
     * @param {?} condition
     * @return {?}
     */
    _anyControls(condition) { return false; }
    /**
     * \@internal
     * @return {?}
     */
    _allControlsDisabled() { return this.disabled; }
    /**
     * Register a listener for change events.
     *
     * @param {?} fn The method that is called when the value changes
     * @return {?}
     */
    registerOnChange(fn) { this._onChange.push(fn); }
    /**
     * \@internal
     * @return {?}
     */
    _clearChangeFns() {
        this._onChange = [];
        this._onDisabledChange = [];
        this._onCollectionChange = (/**
         * @return {?}
         */
        () => { });
    }
    /**
     * Register a listener for disabled events.
     *
     * @param {?} fn The method that is called when the disabled status changes.
     * @return {?}
     */
    registerOnDisabledChange(fn) {
        this._onDisabledChange.push(fn);
    }
    /**
     * \@internal
     * @param {?} cb
     * @return {?}
     */
    _forEachChild(cb) { }
    /**
     * \@internal
     * @return {?}
     */
    _syncPendingControls() {
        if (this.updateOn === 'submit') {
            if (this._pendingDirty)
                this.markAsDirty();
            if (this._pendingTouched)
                this.markAsTouched();
            if (this._pendingChange) {
                this.setValue(this._pendingValue, { onlySelf: true, emitModelToViewChange: false });
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
    _applyFormState(formState) {
        if (this._isBoxedValue(formState)) {
            ((/** @type {?} */ (this))).value = this._pendingValue = formState.value;
            formState.disabled ? this.disable({ onlySelf: true, emitEvent: false }) :
                this.enable({ onlySelf: true, emitEvent: false });
        }
        else {
            ((/** @type {?} */ (this))).value = this._pendingValue = formState;
        }
    }
}
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
class FormGroup extends AbstractControl {
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
    constructor(controls, validatorOrOpts, asyncValidator) {
        super(coerceToValidator(validatorOrOpts), coerceToAsyncValidator(asyncValidator, validatorOrOpts));
        this.controls = controls;
        this._initObservables();
        this._setUpdateStrategy(validatorOrOpts);
        this._setUpControls();
        this.updateValueAndValidity({ onlySelf: true, emitEvent: false });
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
    registerControl(name, control) {
        if (this.controls[name])
            return this.controls[name];
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
    addControl(name, control) {
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
    removeControl(name) {
        if (this.controls[name])
            this.controls[name]._registerOnCollectionChange((/**
             * @return {?}
             */
            () => { }));
        delete (this.controls[name]);
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
    setControl(name, control) {
        if (this.controls[name])
            this.controls[name]._registerOnCollectionChange((/**
             * @return {?}
             */
            () => { }));
        delete (this.controls[name]);
        if (control)
            this.registerControl(name, control);
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
    contains(controlName) {
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
    setValue(value, options = {}) {
        this._checkAllValuesPresent(value);
        Object.keys(value).forEach((/**
         * @param {?} name
         * @return {?}
         */
        name => {
            this._throwIfControlMissing(name);
            this.controls[name].setValue(value[name], { onlySelf: true, emitEvent: options.emitEvent });
        }));
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
    patchValue(value, options = {}) {
        Object.keys(value).forEach((/**
         * @param {?} name
         * @return {?}
         */
        name => {
            if (this.controls[name]) {
                this.controls[name].patchValue(value[name], { onlySelf: true, emitEvent: options.emitEvent });
            }
        }));
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
    reset(value = {}, options = {}) {
        this._forEachChild((/**
         * @param {?} control
         * @param {?} name
         * @return {?}
         */
        (control, name) => {
            control.reset(value[name], { onlySelf: true, emitEvent: options.emitEvent });
        }));
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
    getRawValue() {
        return this._reduceChildren({}, (/**
         * @param {?} acc
         * @param {?} control
         * @param {?} name
         * @return {?}
         */
        (acc, control, name) => {
            acc[name] = control instanceof FormControl ? control.value : ((/** @type {?} */ (control))).getRawValue();
            return acc;
        }));
    }
    /**
     * \@internal
     * @return {?}
     */
    _syncPendingControls() {
        /** @type {?} */
        let subtreeUpdated = this._reduceChildren(false, (/**
         * @param {?} updated
         * @param {?} child
         * @return {?}
         */
        (updated, child) => {
            return child._syncPendingControls() ? true : updated;
        }));
        if (subtreeUpdated)
            this.updateValueAndValidity({ onlySelf: true });
        return subtreeUpdated;
    }
    /**
     * \@internal
     * @param {?} name
     * @return {?}
     */
    _throwIfControlMissing(name) {
        if (!Object.keys(this.controls).length) {
            throw new Error(`
        There are no form controls registered with this group yet.  If you're using ngModel,
        you may want to check next tick (e.g. use setTimeout).
      `);
        }
        if (!this.controls[name]) {
            throw new Error(`Cannot find form control with name: ${name}.`);
        }
    }
    /**
     * \@internal
     * @param {?} cb
     * @return {?}
     */
    _forEachChild(cb) {
        Object.keys(this.controls).forEach((/**
         * @param {?} k
         * @return {?}
         */
        k => cb(this.controls[k], k)));
    }
    /**
     * \@internal
     * @return {?}
     */
    _setUpControls() {
        this._forEachChild((/**
         * @param {?} control
         * @return {?}
         */
        (control) => {
            control.setParent(this);
            control._registerOnCollectionChange(this._onCollectionChange);
        }));
    }
    /**
     * \@internal
     * @return {?}
     */
    _updateValue() { ((/** @type {?} */ (this))).value = this._reduceValue(); }
    /**
     * \@internal
     * @param {?} condition
     * @return {?}
     */
    _anyControls(condition) {
        /** @type {?} */
        let res = false;
        this._forEachChild((/**
         * @param {?} control
         * @param {?} name
         * @return {?}
         */
        (control, name) => {
            res = res || (this.contains(name) && condition(control));
        }));
        return res;
    }
    /**
     * \@internal
     * @return {?}
     */
    _reduceValue() {
        return this._reduceChildren({}, (/**
         * @param {?} acc
         * @param {?} control
         * @param {?} name
         * @return {?}
         */
        (acc, control, name) => {
            if (control.enabled || this.disabled) {
                acc[name] = control.value;
            }
            return acc;
        }));
    }
    /**
     * \@internal
     * @param {?} initValue
     * @param {?} fn
     * @return {?}
     */
    _reduceChildren(initValue, fn) {
        /** @type {?} */
        let res = initValue;
        this._forEachChild((/**
         * @param {?} control
         * @param {?} name
         * @return {?}
         */
        (control, name) => { res = fn(res, control, name); }));
        return res;
    }
    /**
     * \@internal
     * @return {?}
     */
    _allControlsDisabled() {
        for (const controlName of Object.keys(this.controls)) {
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
    _checkAllValuesPresent(value) {
        this._forEachChild((/**
         * @param {?} control
         * @param {?} name
         * @return {?}
         */
        (control, name) => {
            if (value[name] === undefined) {
                throw new Error(`Must supply a value for form control with name: '${name}'.`);
            }
        }));
    }
}
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
class FormArray extends AbstractControl {
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
    constructor(controls, validatorOrOpts, asyncValidator) {
        super(coerceToValidator(validatorOrOpts), coerceToAsyncValidator(asyncValidator, validatorOrOpts));
        this.controls = controls;
        this._initObservables();
        this._setUpdateStrategy(validatorOrOpts);
        this._setUpControls();
        this.updateValueAndValidity({ onlySelf: true, emitEvent: false });
    }
    /**
     * Get the `AbstractControl` at the given `index` in the array.
     *
     * @param {?} index Index in the array to retrieve the control
     * @return {?}
     */
    at(index) { return this.controls[index]; }
    /**
     * Insert a new `AbstractControl` at the end of the array.
     *
     * @param {?} control Form control to be inserted
     * @return {?}
     */
    push(control) {
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
    insert(index, control) {
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
    removeAt(index) {
        if (this.controls[index])
            this.controls[index]._registerOnCollectionChange((/**
             * @return {?}
             */
            () => { }));
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
    setControl(index, control) {
        if (this.controls[index])
            this.controls[index]._registerOnCollectionChange((/**
             * @return {?}
             */
            () => { }));
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
    get length() { return this.controls.length; }
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
    setValue(value, options = {}) {
        this._checkAllValuesPresent(value);
        value.forEach((/**
         * @param {?} newValue
         * @param {?} index
         * @return {?}
         */
        (newValue, index) => {
            this._throwIfControlMissing(index);
            this.at(index).setValue(newValue, { onlySelf: true, emitEvent: options.emitEvent });
        }));
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
    patchValue(value, options = {}) {
        value.forEach((/**
         * @param {?} newValue
         * @param {?} index
         * @return {?}
         */
        (newValue, index) => {
            if (this.at(index)) {
                this.at(index).patchValue(newValue, { onlySelf: true, emitEvent: options.emitEvent });
            }
        }));
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
    reset(value = [], options = {}) {
        this._forEachChild((/**
         * @param {?} control
         * @param {?} index
         * @return {?}
         */
        (control, index) => {
            control.reset(value[index], { onlySelf: true, emitEvent: options.emitEvent });
        }));
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
    getRawValue() {
        return this.controls.map((/**
         * @param {?} control
         * @return {?}
         */
        (control) => {
            return control instanceof FormControl ? control.value : ((/** @type {?} */ (control))).getRawValue();
        }));
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
    clear() {
        if (this.controls.length < 1)
            return;
        this._forEachChild((/**
         * @param {?} control
         * @return {?}
         */
        (control) => control._registerOnCollectionChange((/**
         * @return {?}
         */
        () => { }))));
        this.controls.splice(0);
        this.updateValueAndValidity();
    }
    /**
     * \@internal
     * @return {?}
     */
    _syncPendingControls() {
        /** @type {?} */
        let subtreeUpdated = this.controls.reduce((/**
         * @param {?} updated
         * @param {?} child
         * @return {?}
         */
        (updated, child) => {
            return child._syncPendingControls() ? true : updated;
        }), false);
        if (subtreeUpdated)
            this.updateValueAndValidity({ onlySelf: true });
        return subtreeUpdated;
    }
    /**
     * \@internal
     * @param {?} index
     * @return {?}
     */
    _throwIfControlMissing(index) {
        if (!this.controls.length) {
            throw new Error(`
        There are no form controls registered with this array yet.  If you're using ngModel,
        you may want to check next tick (e.g. use setTimeout).
      `);
        }
        if (!this.at(index)) {
            throw new Error(`Cannot find form control at index ${index}`);
        }
    }
    /**
     * \@internal
     * @param {?} cb
     * @return {?}
     */
    _forEachChild(cb) {
        this.controls.forEach((/**
         * @param {?} control
         * @param {?} index
         * @return {?}
         */
        (control, index) => { cb(control, index); }));
    }
    /**
     * \@internal
     * @return {?}
     */
    _updateValue() {
        ((/** @type {?} */ (this))).value =
            this.controls.filter((/**
             * @param {?} control
             * @return {?}
             */
            (control) => control.enabled || this.disabled))
                .map((/**
             * @param {?} control
             * @return {?}
             */
            (control) => control.value));
    }
    /**
     * \@internal
     * @param {?} condition
     * @return {?}
     */
    _anyControls(condition) {
        return this.controls.some((/**
         * @param {?} control
         * @return {?}
         */
        (control) => control.enabled && condition(control)));
    }
    /**
     * \@internal
     * @return {?}
     */
    _setUpControls() {
        this._forEachChild((/**
         * @param {?} control
         * @return {?}
         */
        (control) => this._registerControl(control)));
    }
    /**
     * \@internal
     * @param {?} value
     * @return {?}
     */
    _checkAllValuesPresent(value) {
        this._forEachChild((/**
         * @param {?} control
         * @param {?} i
         * @return {?}
         */
        (control, i) => {
            if (value[i] === undefined) {
                throw new Error(`Must supply a value for form control at index: ${i}.`);
            }
        }));
    }
    /**
     * \@internal
     * @return {?}
     */
    _allControlsDisabled() {
        for (const control of this.controls) {
            if (control.enabled)
                return false;
        }
        return this.controls.length > 0 || this.disabled;
    }
    /**
     * @private
     * @param {?} control
     * @return {?}
     */
    _registerControl(control) {
        control.setParent(this);
        control._registerOnCollectionChange(this._onCollectionChange);
    }
}
if (false) {}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const formDirectiveProvider = {
    provide: ControlContainer,
    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])((/**
     * @return {?}
     */
    () => NgForm))
};
const ɵ0 = /**
 * @return {?}
 */
() => Promise.resolve(null);
/** @type {?} */
const resolvedPromise = ((ɵ0))();
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
class NgForm extends ControlContainer {
    /**
     * @param {?} validators
     * @param {?} asyncValidators
     */
    constructor(validators, asyncValidators) {
        super();
        /**
         * \@description
         * Returns whether the form submission has been triggered.
         */
        this.submitted = false;
        this._directives = [];
        /**
         * \@description
         * Event emitter for the "ngSubmit" event
         */
        this.ngSubmit = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.form =
            new FormGroup({}, composeValidators(validators), composeAsyncValidators(asyncValidators));
    }
    /**
     * \@description
     * Lifecycle method called after the view is initialized. For internal use only.
     * @return {?}
     */
    ngAfterViewInit() { this._setUpdateStrategy(); }
    /**
     * \@description
     * The directive instance.
     * @return {?}
     */
    get formDirective() { return this; }
    /**
     * \@description
     * The internal `FormGroup` instance.
     * @return {?}
     */
    get control() { return this.form; }
    /**
     * \@description
     * Returns an array representing the path to this group. Because this directive
     * always lives at the top level of a form, it is always an empty array.
     * @return {?}
     */
    get path() { return []; }
    /**
     * \@description
     * Returns a map of the controls in this group.
     * @return {?}
     */
    get controls() { return this.form.controls; }
    /**
     * \@description
     * Method that sets up the control directive in this group, re-calculates its value
     * and validity, and adds the instance to the internal list of directives.
     *
     * @param {?} dir The `NgModel` directive instance.
     * @return {?}
     */
    addControl(dir) {
        resolvedPromise.then((/**
         * @return {?}
         */
        () => {
            /** @type {?} */
            const container = this._findContainer(dir.path);
            ((/** @type {?} */ (dir))).control =
                (/** @type {?} */ (container.registerControl(dir.name, dir.control)));
            setUpControl(dir.control, dir);
            dir.control.updateValueAndValidity({ emitEvent: false });
            this._directives.push(dir);
        }));
    }
    /**
     * \@description
     * Retrieves the `FormControl` instance from the provided `NgModel` directive.
     *
     * @param {?} dir The `NgModel` directive instance.
     * @return {?}
     */
    getControl(dir) { return (/** @type {?} */ (this.form.get(dir.path))); }
    /**
     * \@description
     * Removes the `NgModel` instance from the internal list of directives
     *
     * @param {?} dir The `NgModel` directive instance.
     * @return {?}
     */
    removeControl(dir) {
        resolvedPromise.then((/**
         * @return {?}
         */
        () => {
            /** @type {?} */
            const container = this._findContainer(dir.path);
            if (container) {
                container.removeControl(dir.name);
            }
            removeDir(this._directives, dir);
        }));
    }
    /**
     * \@description
     * Adds a new `NgModelGroup` directive instance to the form.
     *
     * @param {?} dir The `NgModelGroup` directive instance.
     * @return {?}
     */
    addFormGroup(dir) {
        resolvedPromise.then((/**
         * @return {?}
         */
        () => {
            /** @type {?} */
            const container = this._findContainer(dir.path);
            /** @type {?} */
            const group = new FormGroup({});
            setUpFormContainer(group, dir);
            container.registerControl(dir.name, group);
            group.updateValueAndValidity({ emitEvent: false });
        }));
    }
    /**
     * \@description
     * Removes the `NgModelGroup` directive instance from the form.
     *
     * @param {?} dir The `NgModelGroup` directive instance.
     * @return {?}
     */
    removeFormGroup(dir) {
        resolvedPromise.then((/**
         * @return {?}
         */
        () => {
            /** @type {?} */
            const container = this._findContainer(dir.path);
            if (container) {
                container.removeControl(dir.name);
            }
        }));
    }
    /**
     * \@description
     * Retrieves the `FormGroup` for a provided `NgModelGroup` directive instance
     *
     * @param {?} dir The `NgModelGroup` directive instance.
     * @return {?}
     */
    getFormGroup(dir) { return (/** @type {?} */ (this.form.get(dir.path))); }
    /**
     * Sets the new value for the provided `NgControl` directive.
     *
     * @param {?} dir The `NgControl` directive instance.
     * @param {?} value The new value for the directive's control.
     * @return {?}
     */
    updateModel(dir, value) {
        resolvedPromise.then((/**
         * @return {?}
         */
        () => {
            /** @type {?} */
            const ctrl = (/** @type {?} */ (this.form.get((/** @type {?} */ (dir.path)))));
            ctrl.setValue(value);
        }));
    }
    /**
     * \@description
     * Sets the value for this `FormGroup`.
     *
     * @param {?} value The new value
     * @return {?}
     */
    setValue(value) { this.control.setValue(value); }
    /**
     * \@description
     * Method called when the "submit" event is triggered on the form.
     * Triggers the `ngSubmit` emitter to emit the "submit" event as its payload.
     *
     * @param {?} $event The "submit" event object
     * @return {?}
     */
    onSubmit($event) {
        ((/** @type {?} */ (this))).submitted = true;
        syncPendingControls(this.form, this._directives);
        this.ngSubmit.emit($event);
        return false;
    }
    /**
     * \@description
     * Method called when the "reset" event is triggered on the form.
     * @return {?}
     */
    onReset() { this.resetForm(); }
    /**
     * \@description
     * Resets the form to an initial value and resets its submitted status.
     *
     * @param {?=} value The new value for the form.
     * @return {?}
     */
    resetForm(value = undefined) {
        this.form.reset(value);
        ((/** @type {?} */ (this))).submitted = false;
    }
    /**
     * @private
     * @return {?}
     */
    _setUpdateStrategy() {
        if (this.options && this.options.updateOn != null) {
            this.form._updateOn = this.options.updateOn;
        }
    }
    /**
     * \@internal
     * @param {?} path
     * @return {?}
     */
    _findContainer(path) {
        path.pop();
        return path.length ? (/** @type {?} */ (this.form.get(path))) : this.form;
    }
}
NgForm.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                selector: 'form:not([ngNoForm]):not([formGroup]),ngForm,ng-form,[ngForm]',
                providers: [formDirectiveProvider],
                host: { '(submit)': 'onSubmit($event)', '(reset)': 'onReset()' },
                outputs: ['ngSubmit'],
                exportAs: 'ngForm'
            },] }
];
/** @nocollapse */
NgForm.ctorParameters = () => [
    { type: Array, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Self"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [NG_VALIDATORS,] }] },
    { type: Array, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Self"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [NG_ASYNC_VALIDATORS,] }] }
];
NgForm.propDecorators = {
    options: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['ngFormOptions',] }]
};
if (false) {}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class TemplateDrivenErrors {
    /**
     * @return {?}
     */
    static modelParentException() {
        throw new Error(`
      ngModel cannot be used to register form controls with a parent formGroup directive.  Try using
      formGroup's partner directive "formControlName" instead.  Example:

      ${FormErrorExamples.formControlName}

      Or, if you'd like to avoid registering this form control, indicate that it's standalone in ngModelOptions:

      Example:

      ${FormErrorExamples.ngModelWithFormGroup}`);
    }
    /**
     * @return {?}
     */
    static formGroupNameException() {
        throw new Error(`
      ngModel cannot be used to register form controls with a parent formGroupName or formArrayName directive.

      Option 1: Use formControlName instead of ngModel (reactive strategy):

      ${FormErrorExamples.formGroupName}

      Option 2:  Update ngModel's parent be ngModelGroup (template-driven strategy):

      ${FormErrorExamples.ngModelGroup}`);
    }
    /**
     * @return {?}
     */
    static missingNameException() {
        throw new Error(`If ngModel is used within a form tag, either the name attribute must be set or the form
      control must be defined as 'standalone' in ngModelOptions.

      Example 1: <input [(ngModel)]="person.firstName" name="first">
      Example 2: <input [(ngModel)]="person.firstName" [ngModelOptions]="{standalone: true}">`);
    }
    /**
     * @return {?}
     */
    static modelGroupParentException() {
        throw new Error(`
      ngModelGroup cannot be used with a parent formGroup directive.

      Option 1: Use formGroupName instead of ngModelGroup (reactive strategy):

      ${FormErrorExamples.formGroupName}

      Option 2:  Use a regular form tag instead of the formGroup directive (template-driven strategy):

      ${FormErrorExamples.ngModelGroup}`);
    }
    /**
     * @return {?}
     */
    static ngFormWarning() {
        console.warn(`
    It looks like you're using 'ngForm'.

    Support for using the 'ngForm' element selector has been deprecated in Angular v6 and will be removed
    in Angular v9.

    Use 'ng-form' instead.

    Before:
    <ngForm #myForm="ngForm">

    After:
    <ng-form #myForm="ngForm">
    `);
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * \@description
 * `InjectionToken` to provide to turn off the warning when using 'ngForm' deprecated selector.
 * @type {?}
 */
const NG_FORM_SELECTOR_WARNING = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('NgFormSelectorWarning');
/**
 * This directive is solely used to display warnings when the deprecated `ngForm` selector is used.
 *
 * @deprecated in Angular v6 and will be removed in Angular v9.
 * \@ngModule FormsModule
 * \@publicApi
 */
class NgFormSelectorWarning {
    /**
     * @param {?} ngFormWarning
     */
    constructor(ngFormWarning) {
        if (((!ngFormWarning || ngFormWarning === 'once') && !NgFormSelectorWarning._ngFormWarning) ||
            ngFormWarning === 'always') {
            TemplateDrivenErrors.ngFormWarning();
            NgFormSelectorWarning._ngFormWarning = true;
        }
    }
}
/**
 * Static property used to track whether the deprecation warning for this selector has been sent.
 * Used to support warning config of "once".
 *
 * \@internal
 */
NgFormSelectorWarning._ngFormWarning = false;
NgFormSelectorWarning.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{ selector: 'ngForm' },] }
];
/** @nocollapse */
NgFormSelectorWarning.ctorParameters = () => [
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [NG_FORM_SELECTOR_WARNING,] }] }
];
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
class AbstractFormGroupDirective extends ControlContainer {
    /**
     * \@description
     * An internal callback method triggered on the instance after the inputs are set.
     * Registers the group with its parent group.
     * @return {?}
     */
    ngOnInit() {
        this._checkParentType();
        (/** @type {?} */ (this.formDirective)).addFormGroup(this);
    }
    /**
     * \@description
     * An internal callback method triggered before the instance is destroyed.
     * Removes the group from its parent group.
     * @return {?}
     */
    ngOnDestroy() {
        if (this.formDirective) {
            this.formDirective.removeFormGroup(this);
        }
    }
    /**
     * \@description
     * The `FormGroup` bound to this directive.
     * @return {?}
     */
    get control() { return (/** @type {?} */ (this.formDirective)).getFormGroup(this); }
    /**
     * \@description
     * The path to this group from the top-level directive.
     * @return {?}
     */
    get path() { return controlPath(this.name, this._parent); }
    /**
     * \@description
     * The top-level directive for this group if present, otherwise null.
     * @return {?}
     */
    get formDirective() { return this._parent ? this._parent.formDirective : null; }
    /**
     * \@description
     * The synchronous validators registered with this group.
     * @return {?}
     */
    get validator() { return composeValidators(this._validators); }
    /**
     * \@description
     * The async validators registered with this group.
     * @return {?}
     */
    get asyncValidator() {
        return composeAsyncValidators(this._asyncValidators);
    }
    /**
     * \@internal
     * @return {?}
     */
    _checkParentType() { }
}
if (false) {}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const modelGroupProvider = {
    provide: ControlContainer,
    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])((/**
     * @return {?}
     */
    () => NgModelGroup))
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
class NgModelGroup extends AbstractFormGroupDirective {
    /**
     * @param {?} parent
     * @param {?} validators
     * @param {?} asyncValidators
     */
    constructor(parent, validators, asyncValidators) {
        super();
        this._parent = parent;
        this._validators = validators;
        this._asyncValidators = asyncValidators;
    }
    /**
     * \@internal
     * @return {?}
     */
    _checkParentType() {
        if (!(this._parent instanceof NgModelGroup) && !(this._parent instanceof NgForm)) {
            TemplateDrivenErrors.modelGroupParentException();
        }
    }
}
NgModelGroup.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{ selector: '[ngModelGroup]', providers: [modelGroupProvider], exportAs: 'ngModelGroup' },] }
];
/** @nocollapse */
NgModelGroup.ctorParameters = () => [
    { type: ControlContainer, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Host"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["SkipSelf"] }] },
    { type: Array, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Self"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [NG_VALIDATORS,] }] },
    { type: Array, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Self"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [NG_ASYNC_VALIDATORS,] }] }
];
NgModelGroup.propDecorators = {
    name: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['ngModelGroup',] }]
};
if (false) {}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const formControlBinding = {
    provide: NgControl,
    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])((/**
     * @return {?}
     */
    () => NgModel))
};
const ɵ0$1 = /**
 * @return {?}
 */
() => Promise.resolve(null);
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
const resolvedPromise$1 = ((ɵ0$1))();
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
class NgModel extends NgControl {
    /**
     * @param {?} parent
     * @param {?} validators
     * @param {?} asyncValidators
     * @param {?} valueAccessors
     */
    constructor(parent, validators, asyncValidators, valueAccessors) {
        super();
        this.control = new FormControl();
        /**
         * \@internal
         */
        this._registered = false;
        /**
         * \@description
         * Event emitter for producing the `ngModelChange` event after
         * the view model updates.
         */
        this.update = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this._parent = parent;
        this._rawValidators = validators || [];
        this._rawAsyncValidators = asyncValidators || [];
        this.valueAccessor = selectValueAccessor(this, valueAccessors);
    }
    /**
     * \@description
     * A lifecycle method called when the directive's inputs change. For internal use
     * only.
     *
     * @param {?} changes A object of key/value pairs for the set of changed inputs.
     * @return {?}
     */
    ngOnChanges(changes) {
        this._checkForErrors();
        if (!this._registered)
            this._setUpControl();
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
    ngOnDestroy() { this.formDirective && this.formDirective.removeControl(this); }
    /**
     * \@description
     * Returns an array that represents the path from the top-level form to this control.
     * Each index is the string name of the control on that level.
     * @return {?}
     */
    get path() {
        return this._parent ? controlPath(this.name, this._parent) : [this.name];
    }
    /**
     * \@description
     * The top-level directive for this control if present, otherwise null.
     * @return {?}
     */
    get formDirective() { return this._parent ? this._parent.formDirective : null; }
    /**
     * \@description
     * Synchronous validator function composed of all the synchronous validators
     * registered with this directive.
     * @return {?}
     */
    get validator() { return composeValidators(this._rawValidators); }
    /**
     * \@description
     * Async validator function composed of all the async validators registered with this
     * directive.
     * @return {?}
     */
    get asyncValidator() {
        return composeAsyncValidators(this._rawAsyncValidators);
    }
    /**
     * \@description
     * Sets the new value for the view model and emits an `ngModelChange` event.
     *
     * @param {?} newValue The new value emitted by `ngModelChange`.
     * @return {?}
     */
    viewToModelUpdate(newValue) {
        this.viewModel = newValue;
        this.update.emit(newValue);
    }
    /**
     * @private
     * @return {?}
     */
    _setUpControl() {
        this._setUpdateStrategy();
        this._isStandalone() ? this._setUpStandalone() :
            this.formDirective.addControl(this);
        this._registered = true;
    }
    /**
     * @private
     * @return {?}
     */
    _setUpdateStrategy() {
        if (this.options && this.options.updateOn != null) {
            this.control._updateOn = this.options.updateOn;
        }
    }
    /**
     * @private
     * @return {?}
     */
    _isStandalone() {
        return !this._parent || !!(this.options && this.options.standalone);
    }
    /**
     * @private
     * @return {?}
     */
    _setUpStandalone() {
        setUpControl(this.control, this);
        this.control.updateValueAndValidity({ emitEvent: false });
    }
    /**
     * @private
     * @return {?}
     */
    _checkForErrors() {
        if (!this._isStandalone()) {
            this._checkParentType();
        }
        this._checkName();
    }
    /**
     * @private
     * @return {?}
     */
    _checkParentType() {
        if (!(this._parent instanceof NgModelGroup) &&
            this._parent instanceof AbstractFormGroupDirective) {
            TemplateDrivenErrors.formGroupNameException();
        }
        else if (!(this._parent instanceof NgModelGroup) && !(this._parent instanceof NgForm)) {
            TemplateDrivenErrors.modelParentException();
        }
    }
    /**
     * @private
     * @return {?}
     */
    _checkName() {
        if (this.options && this.options.name)
            this.name = this.options.name;
        if (!this._isStandalone() && !this.name) {
            TemplateDrivenErrors.missingNameException();
        }
    }
    /**
     * @private
     * @param {?} value
     * @return {?}
     */
    _updateValue(value) {
        resolvedPromise$1.then((/**
         * @return {?}
         */
        () => { this.control.setValue(value, { emitViewToModelChange: false }); }));
    }
    /**
     * @private
     * @param {?} changes
     * @return {?}
     */
    _updateDisabled(changes) {
        /** @type {?} */
        const disabledValue = changes['isDisabled'].currentValue;
        /** @type {?} */
        const isDisabled = disabledValue === '' || (disabledValue && disabledValue !== 'false');
        resolvedPromise$1.then((/**
         * @return {?}
         */
        () => {
            if (isDisabled && !this.control.disabled) {
                this.control.disable();
            }
            else if (!isDisabled && this.control.disabled) {
                this.control.enable();
            }
        }));
    }
}
NgModel.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                selector: '[ngModel]:not([formControlName]):not([formControl])',
                providers: [formControlBinding],
                exportAs: 'ngModel'
            },] }
];
/** @nocollapse */
NgModel.ctorParameters = () => [
    { type: ControlContainer, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Host"] }] },
    { type: Array, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Self"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [NG_VALIDATORS,] }] },
    { type: Array, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Self"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [NG_ASYNC_VALIDATORS,] }] },
    { type: Array, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Self"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [NG_VALUE_ACCESSOR,] }] }
];
NgModel.propDecorators = {
    name: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    isDisabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['disabled',] }],
    model: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['ngModel',] }],
    options: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['ngModelOptions',] }],
    update: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"], args: ['ngModelChange',] }]
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
class ɵNgNoValidate {
}
ɵNgNoValidate.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                selector: 'form:not([ngNoForm]):not([ngNativeValidate])',
                host: { 'novalidate': '' },
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Token to provide to turn off the ngModel warning on formControl and formControlName.
 * @type {?}
 */
const NG_MODEL_WITH_FORM_CONTROL_WARNING = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('NgModelWithFormControlWarning');
/** @type {?} */
const formControlBinding$1 = {
    provide: NgControl,
    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])((/**
     * @return {?}
     */
    () => FormControlDirective))
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
class FormControlDirective extends NgControl {
    /**
     * @param {?} validators
     * @param {?} asyncValidators
     * @param {?} valueAccessors
     * @param {?} _ngModelWarningConfig
     */
    constructor(validators, asyncValidators, valueAccessors, _ngModelWarningConfig) {
        super();
        this._ngModelWarningConfig = _ngModelWarningConfig;
        /**
         * @deprecated as of v6
         */
        this.update = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * \@description
         * Instance property used to track whether an ngModel warning has been sent out for this
         * particular `FormControlDirective` instance. Used to support warning config of "always".
         *
         * \@internal
         */
        this._ngModelWarningSent = false;
        this._rawValidators = validators || [];
        this._rawAsyncValidators = asyncValidators || [];
        this.valueAccessor = selectValueAccessor(this, valueAccessors);
    }
    /**
     * \@description
     * Triggers a warning that this input should not be used with reactive forms.
     * @param {?} isDisabled
     * @return {?}
     */
    set isDisabled(isDisabled) { ReactiveErrors.disabledAttrWarning(); }
    /**
     * \@description
     * A lifecycle method called when the directive's inputs change. For internal use
     * only.
     *
     * @param {?} changes A object of key/value pairs for the set of changed inputs.
     * @return {?}
     */
    ngOnChanges(changes) {
        if (this._isControlChanged(changes)) {
            setUpControl(this.form, this);
            if (this.control.disabled && (/** @type {?} */ (this.valueAccessor)).setDisabledState) {
                (/** @type {?} */ ((/** @type {?} */ (this.valueAccessor)).setDisabledState))(true);
            }
            this.form.updateValueAndValidity({ emitEvent: false });
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
    get path() { return []; }
    /**
     * \@description
     * Synchronous validator function composed of all the synchronous validators
     * registered with this directive.
     * @return {?}
     */
    get validator() { return composeValidators(this._rawValidators); }
    /**
     * \@description
     * Async validator function composed of all the async validators registered with this
     * directive.
     * @return {?}
     */
    get asyncValidator() {
        return composeAsyncValidators(this._rawAsyncValidators);
    }
    /**
     * \@description
     * The `FormControl` bound to this directive.
     * @return {?}
     */
    get control() { return this.form; }
    /**
     * \@description
     * Sets the new value for the view model and emits an `ngModelChange` event.
     *
     * @param {?} newValue The new value for the view model.
     * @return {?}
     */
    viewToModelUpdate(newValue) {
        this.viewModel = newValue;
        this.update.emit(newValue);
    }
    /**
     * @private
     * @param {?} changes
     * @return {?}
     */
    _isControlChanged(changes) {
        return changes.hasOwnProperty('form');
    }
}
/**
 * \@description
 * Static property used to track whether any ngModel warnings have been sent across
 * all instances of FormControlDirective. Used to support warning config of "once".
 *
 * \@internal
 */
FormControlDirective._ngModelWarningSentOnce = false;
FormControlDirective.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{ selector: '[formControl]', providers: [formControlBinding$1], exportAs: 'ngForm' },] }
];
/** @nocollapse */
FormControlDirective.ctorParameters = () => [
    { type: Array, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Self"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [NG_VALIDATORS,] }] },
    { type: Array, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Self"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [NG_ASYNC_VALIDATORS,] }] },
    { type: Array, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Self"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [NG_VALUE_ACCESSOR,] }] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [NG_MODEL_WITH_FORM_CONTROL_WARNING,] }] }
];
FormControlDirective.propDecorators = {
    form: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['formControl',] }],
    isDisabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['disabled',] }],
    model: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['ngModel',] }],
    update: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"], args: ['ngModelChange',] }]
};
if (false) {}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const formDirectiveProvider$1 = {
    provide: ControlContainer,
    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])((/**
     * @return {?}
     */
    () => FormGroupDirective))
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
class FormGroupDirective extends ControlContainer {
    /**
     * @param {?} _validators
     * @param {?} _asyncValidators
     */
    constructor(_validators, _asyncValidators) {
        super();
        this._validators = _validators;
        this._asyncValidators = _asyncValidators;
        /**
         * \@description
         * Reports whether the form submission has been triggered.
         */
        this.submitted = false;
        /**
         * \@description
         * Tracks the list of added `FormControlName` instances
         */
        this.directives = [];
        /**
         * \@description
         * Tracks the `FormGroup` bound to this directive.
         */
        this.form = (/** @type {?} */ (null));
        /**
         * \@description
         * Emits an event when the form submission has been triggered.
         */
        this.ngSubmit = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    /**
     * \@description
     * A lifecycle method called when the directive's inputs change. For internal use only.
     *
     * @param {?} changes A object of key/value pairs for the set of changed inputs.
     * @return {?}
     */
    ngOnChanges(changes) {
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
    get formDirective() { return this; }
    /**
     * \@description
     * Returns the `FormGroup` bound to this directive.
     * @return {?}
     */
    get control() { return this.form; }
    /**
     * \@description
     * Returns an array representing the path to this group. Because this directive
     * always lives at the top level of a form, it always an empty array.
     * @return {?}
     */
    get path() { return []; }
    /**
     * \@description
     * Method that sets up the control directive in this group, re-calculates its value
     * and validity, and adds the instance to the internal list of directives.
     *
     * @param {?} dir The `FormControlName` directive instance.
     * @return {?}
     */
    addControl(dir) {
        /** @type {?} */
        const ctrl = this.form.get(dir.path);
        setUpControl(ctrl, dir);
        ctrl.updateValueAndValidity({ emitEvent: false });
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
    getControl(dir) { return (/** @type {?} */ (this.form.get(dir.path))); }
    /**
     * \@description
     * Removes the `FormControlName` instance from the internal list of directives
     *
     * @param {?} dir The `FormControlName` directive instance.
     * @return {?}
     */
    removeControl(dir) { removeDir(this.directives, dir); }
    /**
     * Adds a new `FormGroupName` directive instance to the form.
     *
     * @param {?} dir The `FormGroupName` directive instance.
     * @return {?}
     */
    addFormGroup(dir) {
        /** @type {?} */
        const ctrl = this.form.get(dir.path);
        setUpFormContainer(ctrl, dir);
        ctrl.updateValueAndValidity({ emitEvent: false });
    }
    /**
     * No-op method to remove the form group.
     *
     * @param {?} dir The `FormGroupName` directive instance.
     * @return {?}
     */
    removeFormGroup(dir) { }
    /**
     * \@description
     * Retrieves the `FormGroup` for a provided `FormGroupName` directive instance
     *
     * @param {?} dir The `FormGroupName` directive instance.
     * @return {?}
     */
    getFormGroup(dir) { return (/** @type {?} */ (this.form.get(dir.path))); }
    /**
     * Adds a new `FormArrayName` directive instance to the form.
     *
     * @param {?} dir The `FormArrayName` directive instance.
     * @return {?}
     */
    addFormArray(dir) {
        /** @type {?} */
        const ctrl = this.form.get(dir.path);
        setUpFormContainer(ctrl, dir);
        ctrl.updateValueAndValidity({ emitEvent: false });
    }
    /**
     * No-op method to remove the form array.
     *
     * @param {?} dir The `FormArrayName` directive instance.
     * @return {?}
     */
    removeFormArray(dir) { }
    /**
     * \@description
     * Retrieves the `FormArray` for a provided `FormArrayName` directive instance.
     *
     * @param {?} dir The `FormArrayName` directive instance.
     * @return {?}
     */
    getFormArray(dir) { return (/** @type {?} */ (this.form.get(dir.path))); }
    /**
     * Sets the new value for the provided `FormControlName` directive.
     *
     * @param {?} dir The `FormControlName` directive instance.
     * @param {?} value The new value for the directive's control.
     * @return {?}
     */
    updateModel(dir, value) {
        /** @type {?} */
        const ctrl = (/** @type {?} */ (this.form.get(dir.path)));
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
    onSubmit($event) {
        ((/** @type {?} */ (this))).submitted = true;
        syncPendingControls(this.form, this.directives);
        this.ngSubmit.emit($event);
        return false;
    }
    /**
     * \@description
     * Method called when the "reset" event is triggered on the form.
     * @return {?}
     */
    onReset() { this.resetForm(); }
    /**
     * \@description
     * Resets the form to an initial value and resets its submitted status.
     *
     * @param {?=} value The new value for the form.
     * @return {?}
     */
    resetForm(value = undefined) {
        this.form.reset(value);
        ((/** @type {?} */ (this))).submitted = false;
    }
    /**
     * \@internal
     * @return {?}
     */
    _updateDomValue() {
        this.directives.forEach((/**
         * @param {?} dir
         * @return {?}
         */
        dir => {
            /** @type {?} */
            const newCtrl = this.form.get(dir.path);
            if (dir.control !== newCtrl) {
                cleanUpControl(dir.control, dir);
                if (newCtrl)
                    setUpControl(newCtrl, dir);
                ((/** @type {?} */ (dir))).control = newCtrl;
            }
        }));
        this.form._updateTreeValidity({ emitEvent: false });
    }
    /**
     * @private
     * @return {?}
     */
    _updateRegistrations() {
        this.form._registerOnCollectionChange((/**
         * @return {?}
         */
        () => this._updateDomValue()));
        if (this._oldForm)
            this._oldForm._registerOnCollectionChange((/**
             * @return {?}
             */
            () => { }));
        this._oldForm = this.form;
    }
    /**
     * @private
     * @return {?}
     */
    _updateValidators() {
        /** @type {?} */
        const sync = composeValidators(this._validators);
        this.form.validator = Validators.compose([(/** @type {?} */ (this.form.validator)), (/** @type {?} */ (sync))]);
        /** @type {?} */
        const async = composeAsyncValidators(this._asyncValidators);
        this.form.asyncValidator = Validators.composeAsync([(/** @type {?} */ (this.form.asyncValidator)), (/** @type {?} */ (async))]);
    }
    /**
     * @private
     * @return {?}
     */
    _checkFormPresent() {
        if (!this.form) {
            ReactiveErrors.missingFormException();
        }
    }
}
FormGroupDirective.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                selector: '[formGroup]',
                providers: [formDirectiveProvider$1],
                host: { '(submit)': 'onSubmit($event)', '(reset)': 'onReset()' },
                exportAs: 'ngForm'
            },] }
];
/** @nocollapse */
FormGroupDirective.ctorParameters = () => [
    { type: Array, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Self"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [NG_VALIDATORS,] }] },
    { type: Array, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Self"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [NG_ASYNC_VALIDATORS,] }] }
];
FormGroupDirective.propDecorators = {
    form: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['formGroup',] }],
    ngSubmit: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }]
};
if (false) {}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const formGroupNameProvider = {
    provide: ControlContainer,
    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])((/**
     * @return {?}
     */
    () => FormGroupName))
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
class FormGroupName extends AbstractFormGroupDirective {
    /**
     * @param {?} parent
     * @param {?} validators
     * @param {?} asyncValidators
     */
    constructor(parent, validators, asyncValidators) {
        super();
        this._parent = parent;
        this._validators = validators;
        this._asyncValidators = asyncValidators;
    }
    /**
     * \@internal
     * @return {?}
     */
    _checkParentType() {
        if (_hasInvalidParent(this._parent)) {
            ReactiveErrors.groupParentException();
        }
    }
}
FormGroupName.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{ selector: '[formGroupName]', providers: [formGroupNameProvider] },] }
];
/** @nocollapse */
FormGroupName.ctorParameters = () => [
    { type: ControlContainer, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Host"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["SkipSelf"] }] },
    { type: Array, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Self"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [NG_VALIDATORS,] }] },
    { type: Array, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Self"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [NG_ASYNC_VALIDATORS,] }] }
];
FormGroupName.propDecorators = {
    name: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['formGroupName',] }]
};
if (false) {}
/** @type {?} */
const formArrayNameProvider = {
    provide: ControlContainer,
    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])((/**
     * @return {?}
     */
    () => FormArrayName))
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
class FormArrayName extends ControlContainer {
    /**
     * @param {?} parent
     * @param {?} validators
     * @param {?} asyncValidators
     */
    constructor(parent, validators, asyncValidators) {
        super();
        this._parent = parent;
        this._validators = validators;
        this._asyncValidators = asyncValidators;
    }
    /**
     * \@description
     * A lifecycle method called when the directive's inputs are initialized. For internal use only.
     *
     * @throws If the directive does not have a valid parent.
     * @return {?}
     */
    ngOnInit() {
        this._checkParentType();
        (/** @type {?} */ (this.formDirective)).addFormArray(this);
    }
    /**
     * \@description
     * A lifecycle method called before the directive's instance is destroyed. For internal use only.
     * @return {?}
     */
    ngOnDestroy() {
        if (this.formDirective) {
            this.formDirective.removeFormArray(this);
        }
    }
    /**
     * \@description
     * The `FormArray` bound to this directive.
     * @return {?}
     */
    get control() { return (/** @type {?} */ (this.formDirective)).getFormArray(this); }
    /**
     * \@description
     * The top-level directive for this group if present, otherwise null.
     * @return {?}
     */
    get formDirective() {
        return this._parent ? (/** @type {?} */ (this._parent.formDirective)) : null;
    }
    /**
     * \@description
     * Returns an array that represents the path from the top-level form to this control.
     * Each index is the string name of the control on that level.
     * @return {?}
     */
    get path() { return controlPath(this.name, this._parent); }
    /**
     * \@description
     * Synchronous validator function composed of all the synchronous validators registered with this
     * directive.
     * @return {?}
     */
    get validator() { return composeValidators(this._validators); }
    /**
     * \@description
     * Async validator function composed of all the async validators registered with this directive.
     * @return {?}
     */
    get asyncValidator() {
        return composeAsyncValidators(this._asyncValidators);
    }
    /**
     * @private
     * @return {?}
     */
    _checkParentType() {
        if (_hasInvalidParent(this._parent)) {
            ReactiveErrors.arrayParentException();
        }
    }
}
FormArrayName.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{ selector: '[formArrayName]', providers: [formArrayNameProvider] },] }
];
/** @nocollapse */
FormArrayName.ctorParameters = () => [
    { type: ControlContainer, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Host"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["SkipSelf"] }] },
    { type: Array, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Self"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [NG_VALIDATORS,] }] },
    { type: Array, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Self"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [NG_ASYNC_VALIDATORS,] }] }
];
FormArrayName.propDecorators = {
    name: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['formArrayName',] }]
};
if (false) {}
/**
 * @param {?} parent
 * @return {?}
 */
function _hasInvalidParent(parent) {
    return !(parent instanceof FormGroupName) && !(parent instanceof FormGroupDirective) &&
        !(parent instanceof FormArrayName);
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const controlNameBinding = {
    provide: NgControl,
    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])((/**
     * @return {?}
     */
    () => FormControlName))
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
class FormControlName extends NgControl {
    /**
     * @param {?} parent
     * @param {?} validators
     * @param {?} asyncValidators
     * @param {?} valueAccessors
     * @param {?} _ngModelWarningConfig
     */
    constructor(parent, validators, asyncValidators, valueAccessors, _ngModelWarningConfig) {
        super();
        this._ngModelWarningConfig = _ngModelWarningConfig;
        this._added = false;
        /**
         * @deprecated as of v6
         */
        this.update = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * \@description
         * Instance property used to track whether an ngModel warning has been sent out for this
         * particular FormControlName instance. Used to support warning config of "always".
         *
         * \@internal
         */
        this._ngModelWarningSent = false;
        this._parent = parent;
        this._rawValidators = validators || [];
        this._rawAsyncValidators = asyncValidators || [];
        this.valueAccessor = selectValueAccessor(this, valueAccessors);
    }
    /**
     * \@description
     * Triggers a warning that this input should not be used with reactive forms.
     * @param {?} isDisabled
     * @return {?}
     */
    set isDisabled(isDisabled) { ReactiveErrors.disabledAttrWarning(); }
    /**
     * \@description
     * A lifecycle method called when the directive's inputs change. For internal use only.
     *
     * @param {?} changes A object of key/value pairs for the set of changed inputs.
     * @return {?}
     */
    ngOnChanges(changes) {
        if (!this._added)
            this._setUpControl();
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
    ngOnDestroy() {
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
    viewToModelUpdate(newValue) {
        this.viewModel = newValue;
        this.update.emit(newValue);
    }
    /**
     * \@description
     * Returns an array that represents the path from the top-level form to this control.
     * Each index is the string name of the control on that level.
     * @return {?}
     */
    get path() { return controlPath(this.name, (/** @type {?} */ (this._parent))); }
    /**
     * \@description
     * The top-level directive for this group if present, otherwise null.
     * @return {?}
     */
    get formDirective() { return this._parent ? this._parent.formDirective : null; }
    /**
     * \@description
     * Synchronous validator function composed of all the synchronous validators
     * registered with this directive.
     * @return {?}
     */
    get validator() { return composeValidators(this._rawValidators); }
    /**
     * \@description
     * Async validator function composed of all the async validators registered with this
     * directive.
     * @return {?}
     */
    get asyncValidator() {
        return (/** @type {?} */ (composeAsyncValidators(this._rawAsyncValidators)));
    }
    /**
     * @private
     * @return {?}
     */
    _checkParentType() {
        if (!(this._parent instanceof FormGroupName) &&
            this._parent instanceof AbstractFormGroupDirective) {
            ReactiveErrors.ngModelGroupException();
        }
        else if (!(this._parent instanceof FormGroupName) && !(this._parent instanceof FormGroupDirective) &&
            !(this._parent instanceof FormArrayName)) {
            ReactiveErrors.controlParentException();
        }
    }
    /**
     * @private
     * @return {?}
     */
    _setUpControl() {
        this._checkParentType();
        ((/** @type {?} */ (this))).control = this.formDirective.addControl(this);
        if (this.control.disabled && (/** @type {?} */ (this.valueAccessor)).setDisabledState) {
            (/** @type {?} */ ((/** @type {?} */ (this.valueAccessor)).setDisabledState))(true);
        }
        this._added = true;
    }
}
/**
 * \@description
 * Static property used to track whether any ngModel warnings have been sent across
 * all instances of FormControlName. Used to support warning config of "once".
 *
 * \@internal
 */
FormControlName._ngModelWarningSentOnce = false;
FormControlName.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{ selector: '[formControlName]', providers: [controlNameBinding] },] }
];
/** @nocollapse */
FormControlName.ctorParameters = () => [
    { type: ControlContainer, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Host"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["SkipSelf"] }] },
    { type: Array, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Self"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [NG_VALIDATORS,] }] },
    { type: Array, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Self"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [NG_ASYNC_VALIDATORS,] }] },
    { type: Array, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Self"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [NG_VALUE_ACCESSOR,] }] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [NG_MODEL_WITH_FORM_CONTROL_WARNING,] }] }
];
FormControlName.propDecorators = {
    name: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['formControlName',] }],
    isDisabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['disabled',] }],
    model: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['ngModel',] }],
    update: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"], args: ['ngModelChange',] }]
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
function Validator() { }
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
function AsyncValidator() { }
if (false) {}
/**
 * \@description
 * Provider which adds `RequiredValidator` to the `NG_VALIDATORS` multi-provider list.
 * @type {?}
 */
const REQUIRED_VALIDATOR = {
    provide: NG_VALIDATORS,
    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])((/**
     * @return {?}
     */
    () => RequiredValidator)),
    multi: true
};
/**
 * \@description
 * Provider which adds `CheckboxRequiredValidator` to the `NG_VALIDATORS` multi-provider list.
 * @type {?}
 */
const CHECKBOX_REQUIRED_VALIDATOR = {
    provide: NG_VALIDATORS,
    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])((/**
     * @return {?}
     */
    () => CheckboxRequiredValidator)),
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
class RequiredValidator {
    /**
     * \@description
     * Tracks changes to the required attribute bound to this directive.
     * @return {?}
     */
    get required() { return this._required; }
    /**
     * @param {?} value
     * @return {?}
     */
    set required(value) {
        this._required = value != null && value !== false && `${value}` !== 'false';
        if (this._onChange)
            this._onChange();
    }
    /**
     * \@description
     * Method that validates whether the control is empty.
     * Returns the validation result if enabled, otherwise null.
     * @param {?} control
     * @return {?}
     */
    validate(control) {
        return this.required ? Validators.required(control) : null;
    }
    /**
     * \@description
     * Registers a callback function to call when the validator inputs change.
     *
     * @param {?} fn The callback function
     * @return {?}
     */
    registerOnValidatorChange(fn) { this._onChange = fn; }
}
RequiredValidator.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                selector: ':not([type=checkbox])[required][formControlName],:not([type=checkbox])[required][formControl],:not([type=checkbox])[required][ngModel]',
                providers: [REQUIRED_VALIDATOR],
                host: { '[attr.required]': 'required ? "" : null' }
            },] }
];
RequiredValidator.propDecorators = {
    required: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }]
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
class CheckboxRequiredValidator extends RequiredValidator {
    /**
     * \@description
     * Method that validates whether or not the checkbox has been checked.
     * Returns the validation result if enabled, otherwise null.
     * @param {?} control
     * @return {?}
     */
    validate(control) {
        return this.required ? Validators.requiredTrue(control) : null;
    }
}
CheckboxRequiredValidator.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                selector: 'input[type=checkbox][required][formControlName],input[type=checkbox][required][formControl],input[type=checkbox][required][ngModel]',
                providers: [CHECKBOX_REQUIRED_VALIDATOR],
                host: { '[attr.required]': 'required ? "" : null' }
            },] }
];
/**
 * \@description
 * Provider which adds `EmailValidator` to the `NG_VALIDATORS` multi-provider list.
 * @type {?}
 */
const EMAIL_VALIDATOR = {
    provide: NG_VALIDATORS,
    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])((/**
     * @return {?}
     */
    () => EmailValidator)),
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
class EmailValidator {
    /**
     * \@description
     * Tracks changes to the email attribute bound to this directive.
     * @param {?} value
     * @return {?}
     */
    set email(value) {
        this._enabled = value === '' || value === true || value === 'true';
        if (this._onChange)
            this._onChange();
    }
    /**
     * \@description
     * Method that validates whether an email address is valid.
     * Returns the validation result if enabled, otherwise null.
     * @param {?} control
     * @return {?}
     */
    validate(control) {
        return this._enabled ? Validators.email(control) : null;
    }
    /**
     * \@description
     * Registers a callback function to call when the validator inputs change.
     *
     * @param {?} fn The callback function
     * @return {?}
     */
    registerOnValidatorChange(fn) { this._onChange = fn; }
}
EmailValidator.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                selector: '[email][formControlName],[email][formControl],[email][ngModel]',
                providers: [EMAIL_VALIDATOR]
            },] }
];
EmailValidator.propDecorators = {
    email: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }]
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
function ValidatorFn() { }
/**
 * \@description
 * A function that receives a control and returns a Promise or observable
 * that emits validation errors if present, otherwise null.
 *
 * \@publicApi
 * @record
 */
function AsyncValidatorFn() { }
/**
 * \@description
 * Provider which adds `MinLengthValidator` to the `NG_VALIDATORS` multi-provider list.
 * @type {?}
 */
const MIN_LENGTH_VALIDATOR = {
    provide: NG_VALIDATORS,
    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])((/**
     * @return {?}
     */
    () => MinLengthValidator)),
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
class MinLengthValidator {
    /**
     * \@description
     * A lifecycle method called when the directive's inputs change. For internal use
     * only.
     *
     * @param {?} changes A object of key/value pairs for the set of changed inputs.
     * @return {?}
     */
    ngOnChanges(changes) {
        if ('minlength' in changes) {
            this._createValidator();
            if (this._onChange)
                this._onChange();
        }
    }
    /**
     * \@description
     * Method that validates whether the value meets a minimum length
     * requirement. Returns the validation result if enabled, otherwise null.
     * @param {?} control
     * @return {?}
     */
    validate(control) {
        return this.minlength == null ? null : this._validator(control);
    }
    /**
     * \@description
     * Registers a callback function to call when the validator inputs change.
     *
     * @param {?} fn The callback function
     * @return {?}
     */
    registerOnValidatorChange(fn) { this._onChange = fn; }
    /**
     * @private
     * @return {?}
     */
    _createValidator() {
        this._validator = Validators.minLength(parseInt(this.minlength, 10));
    }
}
MinLengthValidator.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                selector: '[minlength][formControlName],[minlength][formControl],[minlength][ngModel]',
                providers: [MIN_LENGTH_VALIDATOR],
                host: { '[attr.minlength]': 'minlength ? minlength : null' }
            },] }
];
MinLengthValidator.propDecorators = {
    minlength: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }]
};
if (false) {}
/**
 * \@description
 * Provider which adds `MaxLengthValidator` to the `NG_VALIDATORS` multi-provider list.
 * @type {?}
 */
const MAX_LENGTH_VALIDATOR = {
    provide: NG_VALIDATORS,
    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])((/**
     * @return {?}
     */
    () => MaxLengthValidator)),
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
class MaxLengthValidator {
    /**
     * \@description
     * A lifecycle method called when the directive's inputs change. For internal use
     * only.
     *
     * @param {?} changes A object of key/value pairs for the set of changed inputs.
     * @return {?}
     */
    ngOnChanges(changes) {
        if ('maxlength' in changes) {
            this._createValidator();
            if (this._onChange)
                this._onChange();
        }
    }
    /**
     * \@description
     * Method that validates whether the value exceeds
     * the maximum length requirement.
     * @param {?} control
     * @return {?}
     */
    validate(control) {
        return this.maxlength != null ? this._validator(control) : null;
    }
    /**
     * \@description
     * Registers a callback function to call when the validator inputs change.
     *
     * @param {?} fn The callback function
     * @return {?}
     */
    registerOnValidatorChange(fn) { this._onChange = fn; }
    /**
     * @private
     * @return {?}
     */
    _createValidator() {
        this._validator = Validators.maxLength(parseInt(this.maxlength, 10));
    }
}
MaxLengthValidator.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                selector: '[maxlength][formControlName],[maxlength][formControl],[maxlength][ngModel]',
                providers: [MAX_LENGTH_VALIDATOR],
                host: { '[attr.maxlength]': 'maxlength ? maxlength : null' }
            },] }
];
MaxLengthValidator.propDecorators = {
    maxlength: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }]
};
if (false) {}
/**
 * \@description
 * Provider which adds `PatternValidator` to the `NG_VALIDATORS` multi-provider list.
 * @type {?}
 */
const PATTERN_VALIDATOR = {
    provide: NG_VALIDATORS,
    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])((/**
     * @return {?}
     */
    () => PatternValidator)),
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
class PatternValidator {
    /**
     * \@description
     * A lifecycle method called when the directive's inputs change. For internal use
     * only.
     *
     * @param {?} changes A object of key/value pairs for the set of changed inputs.
     * @return {?}
     */
    ngOnChanges(changes) {
        if ('pattern' in changes) {
            this._createValidator();
            if (this._onChange)
                this._onChange();
        }
    }
    /**
     * \@description
     * Method that validates whether the value matches the
     * the pattern requirement.
     * @param {?} control
     * @return {?}
     */
    validate(control) { return this._validator(control); }
    /**
     * \@description
     * Registers a callback function to call when the validator inputs change.
     *
     * @param {?} fn The callback function
     * @return {?}
     */
    registerOnValidatorChange(fn) { this._onChange = fn; }
    /**
     * @private
     * @return {?}
     */
    _createValidator() { this._validator = Validators.pattern(this.pattern); }
}
PatternValidator.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                selector: '[pattern][formControlName],[pattern][formControl],[pattern][ngModel]',
                providers: [PATTERN_VALIDATOR],
                host: { '[attr.pattern]': 'pattern ? pattern : null' }
            },] }
];
PatternValidator.propDecorators = {
    pattern: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }]
};
if (false) {}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const SHARED_FORM_DIRECTIVES = [
    ɵNgNoValidate,
    NgSelectOption,
    ɵNgSelectMultipleOption,
    DefaultValueAccessor,
    NumberValueAccessor,
    RangeValueAccessor,
    CheckboxControlValueAccessor,
    SelectControlValueAccessor,
    SelectMultipleControlValueAccessor,
    RadioControlValueAccessor,
    NgControlStatus,
    NgControlStatusGroup,
    RequiredValidator,
    MinLengthValidator,
    MaxLengthValidator,
    PatternValidator,
    CheckboxRequiredValidator,
    EmailValidator,
];
/** @type {?} */
const TEMPLATE_DRIVEN_DIRECTIVES = [NgModel, NgModelGroup, NgForm, NgFormSelectorWarning];
/** @type {?} */
const REACTIVE_DRIVEN_DIRECTIVES = [FormControlDirective, FormGroupDirective, FormControlName, FormGroupName, FormArrayName];
/**
 * Internal module used for sharing directives between FormsModule and ReactiveFormsModule
 */
class ɵInternalFormsSharedModule {
}
ɵInternalFormsSharedModule.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                declarations: SHARED_FORM_DIRECTIVES,
                exports: SHARED_FORM_DIRECTIVES,
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @param {?} options
 * @return {?}
 */
function isAbstractControlOptions(options) {
    return ((/** @type {?} */ (options))).asyncValidators !== undefined ||
        ((/** @type {?} */ (options))).validators !== undefined ||
        ((/** @type {?} */ (options))).updateOn !== undefined;
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
class FormBuilder {
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
    group(controlsConfig, options = null) {
        /** @type {?} */
        const controls = this._reduceControls(controlsConfig);
        /** @type {?} */
        let validators = null;
        /** @type {?} */
        let asyncValidators = null;
        /** @type {?} */
        let updateOn = undefined;
        if (options != null) {
            if (isAbstractControlOptions(options)) {
                // `options` are `AbstractControlOptions`
                validators = options.validators != null ? options.validators : null;
                asyncValidators = options.asyncValidators != null ? options.asyncValidators : null;
                updateOn = options.updateOn != null ? options.updateOn : undefined;
            }
            else {
                // `options` are legacy form group options
                validators = options['validator'] != null ? options['validator'] : null;
                asyncValidators = options['asyncValidator'] != null ? options['asyncValidator'] : null;
            }
        }
        return new FormGroup(controls, { asyncValidators, updateOn, validators });
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
    control(formState, validatorOrOpts, asyncValidator) {
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
    array(controlsConfig, validatorOrOpts, asyncValidator) {
        /** @type {?} */
        const controls = controlsConfig.map((/**
         * @param {?} c
         * @return {?}
         */
        c => this._createControl(c)));
        return new FormArray(controls, validatorOrOpts, asyncValidator);
    }
    /**
     * \@internal
     * @param {?} controlsConfig
     * @return {?}
     */
    _reduceControls(controlsConfig) {
        /** @type {?} */
        const controls = {};
        Object.keys(controlsConfig).forEach((/**
         * @param {?} controlName
         * @return {?}
         */
        controlName => {
            controls[controlName] = this._createControl(controlsConfig[controlName]);
        }));
        return controls;
    }
    /**
     * \@internal
     * @param {?} controlConfig
     * @return {?}
     */
    _createControl(controlConfig) {
        if (controlConfig instanceof FormControl || controlConfig instanceof FormGroup ||
            controlConfig instanceof FormArray) {
            return controlConfig;
        }
        else if (Array.isArray(controlConfig)) {
            /** @type {?} */
            const value = controlConfig[0];
            /** @type {?} */
            const validator = controlConfig.length > 1 ? controlConfig[1] : null;
            /** @type {?} */
            const asyncValidator = controlConfig.length > 2 ? controlConfig[2] : null;
            return this.control(value, validator, asyncValidator);
        }
        else {
            return this.control(controlConfig);
        }
    }
}
FormBuilder.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * \@publicApi
 * @type {?}
 */
const VERSION = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["Version"]('8.2.14');

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
class FormsModule {
    /**
     * \@description
     * Provides options for configuring the template-driven forms module.
     *
     * @param {?} opts An object of configuration options
     * * `warnOnDeprecatedNgFormSelector` Configures when to emit a warning when the deprecated
     * `ngForm` selector is used.
     * @return {?}
     */
    static withConfig(opts) {
        return {
            ngModule: FormsModule,
            providers: [{ provide: NG_FORM_SELECTOR_WARNING, useValue: opts.warnOnDeprecatedNgFormSelector }]
        };
    }
}
FormsModule.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                declarations: TEMPLATE_DRIVEN_DIRECTIVES,
                providers: [RadioControlRegistry],
                exports: [ɵInternalFormsSharedModule, TEMPLATE_DRIVEN_DIRECTIVES]
            },] }
];
/**
 * Exports the required infrastructure and directives for reactive forms,
 * making them available for import by NgModules that import this module.
 * @see [Forms](guide/reactive-forms)
 *
 * @see [Reactive Forms Guide](/guide/reactive-forms)
 *
 * \@publicApi
 */
class ReactiveFormsModule {
    /**
     * \@description
     * Provides options for configuring the reactive forms module.
     *
     * @param {?} opts An object of configuration options
     * * `warnOnNgModelWithFormControl` Configures when to emit a warning when an `ngModel`
     * binding is used with reactive form directives.
     * @return {?}
     */
    static withConfig(opts) {
        return {
            ngModule: ReactiveFormsModule,
            providers: [{
                    provide: NG_MODEL_WITH_FORM_CONTROL_WARNING,
                    useValue: opts.warnOnNgModelWithFormControl
                }]
        };
    }
}
ReactiveFormsModule.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                declarations: [REACTIVE_DRIVEN_DIRECTIVES],
                providers: [FormBuilder, RadioControlRegistry],
                exports: [ɵInternalFormsSharedModule, REACTIVE_DRIVEN_DIRECTIVES]
            },] }
];

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


/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/components/footer/footer.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layout/components/footer/footer.component.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>footer works!</p>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/components/header/header.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layout/components/header/header.component.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"header\">\n  <div class=\"header-left\">\n    <a class=\"cp\" (click)=\"goToHome()\"><img src=\"https://freehost-spec.github.io/dexcenter-dashboard/assets/images/icons/logo.png\" alt=\"Logo\" width=\"50px\" height=\"100px\"\n        class=\"mt-10 ml-10 logo\"></a>\n    <p class=\"companyname font-d-grey ml-10 font-xl\">DEXcenter Dashboard</p>\n    <div class=\"nav-path ml-30\">\n      <img src=\"https://freehost-spec.github.io/dexcenter-dashboard/assets/images/icons/home.svg\" alt=\"Home\" class=\"icons-xxs icon mr-5\">\n      <p class=\"home font-m\"><span (click)=\"goToHome()\">Home </span> <span *ngIf=\"activeUrl\">&nbsp;/&nbsp;</span> <span\n          class=\"fw-500 font-black\">{{activeUrl}}</span>\n      </p>\n    </div>\n  </div>\n  <div class=\"header-right\">\n    <div class=\"mr-3\">\n      <p class=\"font-d-blue font-l\">DEXcenter Administrator</p>\n      <p class=\"font-d-blue font-s\">Last login 12/01/2020 : 15:30</p>\n    </div>\n    <img src=\"https://freehost-spec.github.io/dexcenter-dashboard/assets/images/icons/account_circle-24px.svg\" class=\"icons-2xl\" alt=\" profile \">\n    <img src=\"https://freehost-spec.github.io/dexcenter-dashboard/assets/images/icons/arrow_drop_down-24px.svg \" class=\"icons-s mr-10\" alt=\"caret \">\n    <div class=\"lang mr-10\">\n      <div class=\"sl-nav\">\n        <ul>\n          <li>\n            <p class=\"font-m font-d-grey pl-5 pt-5\">EN</p>\n            <img src=\"https://freehost-spec.github.io/dexcenter-dashboard/assets/images/icons/keyboard_arrow_down-24px.svg \" class=\"icons-s ml-10 mt-2\" alt=\"dropdown \">\n            <ul>\n              <li><i class=\"sl-flag flag-de\">\n                  <div id=\"germany\"></div>\n                </i> <span class=\"active\">EN</span>\n              </li>\n              <li><i class=\"sl-flag flag-usa\">\n                  <div id=\"germany\"></div>\n                </i> <span>Englisch</span>\n              </li>\n            </ul>\n          </li>\n        </ul>\n      </div>\n    </div>\n    <img src=\"https://freehost-spec.github.io/dexcenter-dashboard/assets/images/icons/help_outline-24px.svg \" class=\"icons-s mr-10\" alt=\"help \">\n    <img src=\"https://freehost-spec.github.io/dexcenter-dashboard/assets/images/icons/signout.svg \" class=\"icons-s mr-30\" alt=\"login \">\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/components/side-nav/side-nav.component.html":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layout/components/side-nav/side-nav.component.html ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!--Collapse Nav Bar -->\n<div class=\"side-nav\" *ngIf=\"!showNav\">\n  <img src=\"https://freehost-spec.github.io/dexcenter-dashboard/assets/images/icons/close.svg\" alt=\" Home\" class=\"nav-icon open-nav cp\" (click)=\"openNav()\">\n</div>\n\n<!--Expand-Nav Bar -->\n<div class=\"side-nav side-nav-expand font-m\" *ngIf=\"showNav\">\n  <div class=\"left-collaps-icon\">\n    <img src=\"https://freehost-spec.github.io/dexcenter-dashboard/assets/images/icons/close.svg\" alt=\"\" class=\"nav-icon close-nav cp\" (click)=\"openNav()\">\n  </div>\n  <div class=\"fav-tool-container mt-10 pl-20\">\n    <p><b>Favorite Tool</b></p>\n    <ng-container *ngFor=\"let item of fabList\">\n      <div class=\"nav-list nav-data mt-10\">\n        <img src=\"https://freehost-spec.github.io/dexcenter-dashboard/assets/images/icons/star.jpg\" alt=\"\" class=\"icons-xxs mr-5\">\n        <div>{{item.name}}</div>\n      </div>\n    </ng-container>\n  </div>\n  <div class=\"pl-20 pr-20 mt-20\">\n    <hr>\n  </div>\n  <div class=\"admin-container mt-20 pl-20\">\n    <p><b>Administration</b></p>\n    <div class=\"nav-list mt-5\">\n      <ng-container *ngFor=\"let item of navList\">\n        <div class=\"p-5 ml-10 cp\" (click)=\"goToPage(item.route)\">{{item.name}}</div>\n      </ng-container>\n    </div>\n  </div>\n  <div class=\"pl-20 pr-20 mt-20\">\n    <hr>\n  </div>\n  <div class=\"help-container mt-20 pl-20\">\n    <p><b>Help</b></p>\n    <div class=\"nav-list mt-5\">\n      <div class=\"p-5 ml-10\">Documents</div>\n      <div class=\"p-5 ml-10\">About</div>\n      <div class=\"p-5 ml-10\">Support</div>\n    </div>\n  </div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/layout.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layout/layout.component.html ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header></app-header>\n<div class=\"main\">\n  <div class=\"nav\">\n    <app-side-nav></app-side-nav>\n  </div>\n  <div class=\"main-container\">\n    <router-outlet></router-outlet>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/main/activity/activity.component.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layout/main/activity/activity.component.html ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"recent-activity\">\n  <div class=\"recent-activity-head mb-10\">\n    <div class=\"recent-activity-head-content cp\" (click)=\"closeTools()\">\n      <img [ngClass]=\"closeToolSec ? 'tool-icon-close' : 'tool-icon'\" class=\"\" src=\"https://freehost-spec.github.io/dexcenter-dashboard/assets/images/icons/close.svg\">\n      <span class=\"pl-10 font-xl fw-500\">Recent Activity</span>\n    </div>\n    <div class=\"font-m last-update\">\n      <img src=\" https://freehost-spec.github.io/dexcenter-dashboard/assets/images/icons/update.svg \">\n      <span class=\"pl-5 \">Last Updated: 12/01/2020 : 15:30</span>\n    </div>\n  </div>\n  <div class=\"recent-activity-content \" *ngIf=\"!closeToolSec \">\n    <div>\n      <button class=\"primary-btn \" (click)=\"changeNav( 'user') \"\n        [ngClass]=\"activatedTab==='user' ? 'selected' : '' \">User Activity</button>\n      <button class=\"primary-btn \" (click)=\"changeNav( 'sessions') \"\n        [ngClass]=\"activatedTab==='sessions' ? 'selected' : '' \">Sessions</button>\n      <button class=\"primary-btn \" (click)=\"changeNav( 'report') \"\n        [ngClass]=\"activatedTab==='report' ? 'selected' : '' \">Latest Reports</button>\n    </div>\n    <ng-container *ngIf=\"activatedTab==='user' \">\n      <app-user></app-user>\n    </ng-container>\n    <ng-container *ngIf=\"activatedTab==='sessions' \">\n      <app-sessions></app-sessions>\n    </ng-container>\n    <ng-container *ngIf=\"activatedTab==='report' \">\n      <app-reports></app-reports>\n    </ng-container>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/main/activity/reports/reports.component.html":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layout/main/activity/reports/reports.component.html ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"user-container mt-20 font-m\">\n    <!-- Table header -->\n    <div class=\"user-container-rows\">\n        <div class=\"user-activity ml-50 fw-500\">Activity Timeline</div>\n        <div class=\"user-updated-on fw-500\">Updated On ↕</div>\n        <div class=\"user-updated-by fw-500\">Updated By ↕</div>\n    </div>\n    <!-- Filter row -->\n    <div class=\"filter\">\n        <div class=\"filter-activity ml-50\">\n            <div class=\"filter-box\">\n                <input type=\"text \" placeholder=\"Filter\" name=\"filter \">\n                <img src=\" https://freehost-spec.github.io/dexcenter-dashboard/assets/images/icons/arrow_drop_down-24px.svg \" alt=\" \" class=\"icons-xs \">\n            </div>\n        </div>\n        <div class=\"filter-updateon\">\n            <div class=\"filter-box\">\n                <input type=\"text \" placeholder=\"Filter\" name=\"filter \">\n                <img src=\" https://freehost-spec.github.io/dexcenter-dashboard/assets/images/icons/arrow_drop_down-24px.svg \" alt=\" \" class=\"icons-xs \">\n            </div>\n        </div>\n        <div class=\"filter-updatedby\">\n            <div class=\"filter-box\">\n                <input type=\"text \" placeholder=\"Filter\" name=\"filter \">\n                <img src=\" https://freehost-spec.github.io/dexcenter-dashboard/assets/images/icons/arrow_drop_down-24px.svg \" alt=\" \" class=\"icons-xs \">\n            </div>\n        </div>\n    </div>\n    <!-- table descriptions -->\n    <ng-container *ngFor=\"let item of userdata\">\n        <div class=\"user-rows\">\n            <div class=\"user-container-rows user-td\">\n                <div class=\"user-activity  ml-50\">{{item.activity}}</div>\n                <div class=\"user-updated-on\">{{item.updatedon}}</div>\n                <div class=\"user-updated-by\">{{item.updatedby}}</div>\n            </div>\n            <div class=\"ml-50 divider\">\n                <hr>\n            </div>\n        </div>\n    </ng-container>\n    <!-- Paggination -->\n    <ng-container>\n        <div class=\"page-container\">\n            <div class=\"pt-5 pb-5 page-content\">\n                <div class=\"pagination-left pl-20 pb-5 pt-5 font-s\">\n                    Viewing 07 of 200 Records\n                </div>\n                <div class=\"pagination-right font-s mr-30\">\n                    <div class=\"pb-5 pt-5\">\n                        <img src=\"https://freehost-spec.github.io/dexcenter-dashboard/assets/images/icons/skip_first.svg\" alt=\"\" class=\"icons-xs\">\n                    </div>\n                    <div class=\"pb-5 pt-5\">\n                        <img src=\"https://freehost-spec.github.io/dexcenter-dashboard/assets/images/icons/skip_previous.svg\" alt=\"\" class=\"icons-xs mr-10 ml-10\">\n                    </div>\n                    <div class=\"page-details\">\n                        <p>Page</p>\n                        <input type=\"text\" class=\"page-number ml-5 mr-5 p-5\" size=\"6\" value=\"1\">\n                        <p>of 76</p>\n                    </div>\n                    <div class=\"pb-5 pt-5\">\n                        <img src=\"https://freehost-spec.github.io/dexcenter-dashboard/assets/images/icons/skip_next.svg\" alt=\"\" class=\"icons-xs mr-10 ml-10\">\n                    </div>\n                    <div class=\"pb-5 pt-5\">\n                        <img src=\"https://freehost-spec.github.io/dexcenter-dashboard/assets/images/icons/skip_last.svg\" alt=\"\" class=\"icons-xs\">\n                    </div>\n                </div>\n            </div>\n\n        </div>\n    </ng-container>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/main/activity/sessions/sessions.component.html":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layout/main/activity/sessions/sessions.component.html ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"sessions-container mt-20 font-m\">\n    <!-- Table header -->\n    <div class=\"sessions-container-rows\">\n        <div class=\"sessions-checkbox ml-10\">\n            <input type=\"checkbox\">\n        </div>\n        <div class=\"session-id fw-500\">Session ID ↕</div>\n        <div class=\"session-title font-m fw-500\">Session Title ↕</div>\n        <div class=\"recipient fw-500\">Recipient Companies ↕</div>\n        <div class=\"sender fw-500\">Sender ↕</div>\n        <div class=\"created-on fw-500\">Created On ↕</div>\n        <div class=\"status fw-500\">Status ↕</div>\n        <div class=\"job-type fw-500\">Job Type ↕</div>\n        <div class=\"originated-session fw-500\">Is Originated Session</div>\n    </div>\n    <!-- Filter row -->\n    <div class=\"filter\">\n        <div class=\"sessions-checkbox ml-10\">\n        </div>\n        <div class=\"session-id\">\n            <div class=\"filter-box\">\n                <input type=\"text \" placeholder=\"Filter\" name=\"filter \">\n                <img src=\" https://freehost-spec.github.io/dexcenter-dashboard/assets/images/icons/arrow_drop_down-24px.svg \" alt=\" \" class=\"icons-xs \">\n            </div>\n        </div>\n        <div class=\"session-title\">\n            <div class=\"filter-box\">\n                <input type=\"text \" placeholder=\"Filter\" name=\"filter \">\n                <img src=\" https://freehost-spec.github.io/dexcenter-dashboard/assets/images/icons/arrow_drop_down-24px.svg \" alt=\" \" class=\"icons-xs \">\n            </div>\n        </div>\n        <div class=\"recipient\">\n            <div class=\"filter-box\">\n                <input type=\"text \" placeholder=\"Filter\" name=\"filter \">\n                <img src=\" https://freehost-spec.github.io/dexcenter-dashboard/assets/images/icons/arrow_drop_down-24px.svg \" alt=\" \" class=\"icons-xs \">\n            </div>\n        </div>\n        <div class=\"sender\">\n            <div class=\"filter-box\">\n                <input type=\"text \" placeholder=\"Filter\" name=\"filter \">\n                <img src=\" https://freehost-spec.github.io/dexcenter-dashboard/assets/images/icons/arrow_drop_down-24px.svg \" alt=\" \" class=\"icons-xs \">\n            </div>\n        </div>\n        <div class=\"created-on\">\n            <div class=\"filter-box\">\n                <input type=\"text \" placeholder=\"Filter\" name=\"filter \">\n                <img src=\" https://freehost-spec.github.io/dexcenter-dashboard/assets/images/icons/arrow_drop_down-24px.svg \" alt=\" \" class=\"icons-xs \">\n            </div>\n        </div>\n        <div class=\"status\">\n            <div class=\"filter-box\">\n                <input type=\"text \" placeholder=\"Filter\" name=\"filter \">\n                <img src=\" https://freehost-spec.github.io/dexcenter-dashboard/assets/images/icons/arrow_drop_down-24px.svg \" alt=\" \" class=\"icons-xs \">\n            </div>\n        </div>\n        <div class=\"job-type\">\n            <div class=\"filter-box\">\n                <input type=\"text \" placeholder=\"Filter\" name=\"filter \">\n                <img src=\" https://freehost-spec.github.io/dexcenter-dashboard/assets/images/icons/arrow_drop_down-24px.svg \" alt=\" \" class=\"icons-xs \">\n            </div>\n        </div>\n        <div class=\"originated-session\">\n            <div class=\"filter-box\">\n                <input type=\"text \" placeholder=\"Filter\" name=\"filter \">\n                <img src=\" https://freehost-spec.github.io/dexcenter-dashboard/assets/images/icons/arrow_drop_down-24px.svg \" alt=\" \" class=\"icons-xs \">\n            </div>\n        </div>\n    </div>\n    <!-- table description -->\n    <ng-container *ngFor=\"let item of session\">\n        <div class=\"sessions-container-rows\">\n            <div class=\"sessions-checkbox ml-10\">\n                <input type=\"checkbox\">\n            </div>\n            <div class=\"session-id\">{{item.sessionid}}</div>\n            <div class=\"session-title font-sm pr-10\">{{item.sessiontitle}}</div>\n            <div class=\"recipient\">{{item.recipientcompanies}}</div>\n            <div class=\"sender\">{{item.sender}}</div>\n            <div class=\"created-on\">{{item.createdon}}</div>\n            <div class=\"status\">\n                <div class=\"status-indicator mr-10 {{item.status}}\">\n                </div>\n                <p>{{item.status}}</p>\n            </div>\n            <div class=\"job-type\">{{item.jobtype}}</div>\n            <div class=\"originated-session\">{{item.originatedsession}}</div>\n        </div>\n    </ng-container>\n    <!-- Paggination -->\n    <ng-container>\n        <div class=\"page-container\">\n            <div class=\"pt-5 pb-5 page-content\">\n                <div class=\"pagination-left pl-20 pb-5 pt-5 font-s\">\n                    Viewing 07 of 200 Records\n                </div>\n                <div class=\"pagination-right font-s mr-30\">\n                    <div class=\"pb-5 pt-5\">\n                        <img src=\"https://freehost-spec.github.io/dexcenter-dashboard/assets/images/icons/skip_first.svg\" alt=\"\" class=\"icons-xs\">\n                    </div>\n                    <div class=\"pb-5 pt-5\">\n                        <img src=\"https://freehost-spec.github.io/dexcenter-dashboard/assets/images/icons/skip_previous.svg\" alt=\"\" class=\"icons-xs mr-10 ml-10\">\n                    </div>\n                    <div class=\"page-details\">\n                        <p>Page</p>\n                        <input type=\"text\" class=\"page-number ml-5 mr-5 p-5\" size=\"6\" value=\"1\">\n                        <p>of 76</p>\n                    </div>\n                    <div class=\"pb-5 pt-5\">\n                        <img src=\"https://freehost-spec.github.io/dexcenter-dashboard/assets/images/icons/skip_next.svg\" alt=\"\" class=\"icons-xs mr-10 ml-10\">\n                    </div>\n                    <div class=\"pb-5 pt-5\">\n                        <img src=\"https://freehost-spec.github.io/dexcenter-dashboard/assets/images/icons/skip_last.svg\" alt=\"\" class=\"icons-xs\">\n                    </div>\n                </div>\n            </div>\n\n        </div>\n    </ng-container>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/main/activity/user/user.component.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layout/main/activity/user/user.component.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"user-container mt-20 font-m\">\n    <!-- Table header -->\n    <div class=\"user-container-rows\">\n        <div class=\"user-activity ml-50 fw-500\">Activity Timeline</div>\n        <div class=\"user-updated-on fw-500\">Updated On ↕</div>\n        <div class=\"user-updated-by fw-500\">Updated By ↕</div>\n    </div>\n    <!-- Filter row -->\n    <div class=\"filter\">\n        <div class=\"filter-activity ml-50\">\n            <div class=\"filter-box\">\n                <input type=\"text \" placeholder=\"Filter\" name=\"filter \">\n                <img src=\" https://freehost-spec.github.io/dexcenter-dashboard/assets/images/icons/arrow_drop_down-24px.svg \" alt=\" \" class=\"icons-xs \">\n            </div>\n        </div>\n        <div class=\"filter-updateon\">\n            <div class=\"filter-box\">\n                <input type=\"text \" placeholder=\"Filter\" name=\"filter \">\n                <img src=\" https://freehost-spec.github.io/dexcenter-dashboard/assets/images/icons/arrow_drop_down-24px.svg \" alt=\" \" class=\"icons-xs \">\n            </div>\n        </div>\n        <div class=\"filter-updatedby\">\n            <div class=\"filter-box\">\n                <input type=\"text \" placeholder=\"Filter\" name=\"filter \">\n                <img src=\" https://freehost-spec.github.io/dexcenter-dashboard/assets/images/icons/arrow_drop_down-24px.svg \" alt=\" \" class=\"icons-xs \">\n            </div>\n        </div>\n    </div>\n    <!-- table descriptions -->\n    <ng-container *ngFor=\"let item of userdata\">\n        <div class=\"user-rows\">\n            <div class=\"user-container-rows user-td\">\n                <div class=\"user-activity ml-50\">{{item.activity}}</div>\n                <div class=\"user-updated-on\">{{item.updatedon}}</div>\n                <div class=\"user-updated-by\">{{item.updatedby}}</div>\n            </div>\n            <div class=\"ml-50 divider\">\n                <hr>\n            </div>\n        </div>\n    </ng-container>\n    <!-- Paggination -->\n    <ng-container>\n        <div class=\"page-container\">\n            <div class=\"pt-5 pb-5 page-content\">\n                <div class=\"pagination-left pl-20 pb-5 pt-5 font-s\">\n                    Viewing 07 of 200 Records\n                </div>\n                <div class=\"pagination-right font-s mr-30\">\n                    <div class=\"pb-5 pt-5\">\n                        <img src=\"https://freehost-spec.github.io/dexcenter-dashboard/assets/images/icons/skip_first.svg\" alt=\"\" class=\"icons-xs\">\n                    </div>\n                    <div class=\"pb-5 pt-5\">\n                        <img src=\"https://freehost-spec.github.io/dexcenter-dashboard/assets/images/icons/skip_previous.svg\" alt=\"\" class=\"icons-xs mr-10 ml-10\">\n                    </div>\n                    <div class=\"page-details\">\n                        <p>Page</p>\n                        <input type=\"text\" class=\"page-number ml-5 mr-5 p-5\" size=\"6\" value=\"1\">\n                        <p>of 76</p>\n                    </div>\n                    <div class=\"pb-5 pt-5\">\n                        <img src=\"https://freehost-spec.github.io/dexcenter-dashboard/assets/images/icons/skip_next.svg\" alt=\"\" class=\"icons-xs mr-10 ml-10\">\n                    </div>\n                    <div class=\"pb-5 pt-5\">\n                        <img src=\"https://freehost-spec.github.io/dexcenter-dashboard/assets/images/icons/skip_last.svg\" alt=\"\" class=\"icons-xs\">\n                    </div>\n                </div>\n            </div>\n\n        </div>\n    </ng-container>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/main/main.component.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layout/main/main.component.html ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"main-container m-20 pl-10\">\n  <app-tools></app-tools>\n  <app-activity></app-activity>\n  <app-matrices></app-matrices>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/main/matrices/dynamic-session/dynamic-session.component.html":
/*!***************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layout/main/matrices/dynamic-session/dynamic-session.component.html ***!
  \***************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"dynamic-session-container mt-20\">\n  <div class=\"summary-graph\">\n    <div class=\"graph-header\">\n      <div class=\"graph-title\"></div>\n    </div>\n    <div class=\"graph-box\">\n      <app-chart [id]=\"'session'\" [canvasWidth]=\"1000\" [canvasHeight]=\"500\"></app-chart>\n    </div>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/main/matrices/matrices.component.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layout/main/matrices/matrices.component.html ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- <div class=\"chart-wrapper\">\n  <canvas baseChart [datasets]=\"barChartData\" [labels]=\"barChartLabels\" [options]=\"barChartOptions\"\n    [plugins]=\"barChartPlugins\" [legend]=\"barChartLegend\" [chartType]=\"barChartType\">\n  </canvas>\n</div> -->\n<!-- <div class=\"mb-20 mt-20\">\n  <app-chart [type]=\"'doughnut'\" [data]=\"chart1Data\" [options]=\"options\" [canvasWidth]=\"200\" [canvasHeight]=\"200\"\n    [id]=\"'chashflow-1'\"></app-chart>\n</div> -->\n\n<div class=\"metrics mt-20\">\n  <div class=\"metrics-head cp mb-10\" (click)=\"closeTools()\">\n    <img [ngClass]=\"closeToolSec ? 'tool-icon-close' : 'tool-icon'\" class=\"\" src=\"https://freehost-spec.github.io/dexcenter-dashboard/assets/images/icons/close.svg\">\n    <span class=\"pl-10 font-xl fw-500\">Metrics</span>\n  </div>\n  <div class=\"metrics-content\" *ngIf=\"!closeToolSec\">\n    <div>\n      <button class=\"primary-btn\" (click)=\"changeNav('summary')\"\n        [ngClass]=\"activatedTab === 'summary' ? 'selected' : ''\">Usage Summary</button>\n      <button class=\"primary-btn\" (click)=\"changeNav('mtbf')\"\n        [ngClass]=\"activatedTab === 'mtbf' ? 'selected' : ''\">MTBF</button>\n      <button class=\"primary-btn\" (click)=\"changeNav('dynamic-session')\"\n        [ngClass]=\"activatedTab === 'dynamic-session' ? 'selected' : ''\">Dynamic Sessions Summary</button>\n    </div>\n    <ng-container *ngIf=\"activatedTab === 'summary'\">\n      <app-summary class=\"app-summary\"></app-summary>\n    </ng-container>\n    <ng-container *ngIf=\"activatedTab === 'mtbf'\">\n      <app-mtbf></app-mtbf>\n    </ng-container>\n    <ng-container *ngIf=\"activatedTab === 'dynamic-session'\">\n      <app-dynamic-session></app-dynamic-session>\n    </ng-container>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/main/matrices/mtbf/mtbf.component.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layout/main/matrices/mtbf/mtbf.component.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"mtbf-container mt-20\">\n    <div class=\"mtbf-graph\">\n        <div class=\"graph-header\">\n            <div class=\"graph-title font-l\">Sessions By Date</div>\n            <div class=\"date-range ml-50 mr-40\">\n                <input type=\"date\" class=\"pt-2 pl-5 pb-2\" value=\"2020-01-01\">\n                <p class=\"ml-5 mr-5 font-m\">to</p>\n                <input type=\"date\" class=\"pt-2 pl-5 pb-2 \" value=\"2020-08-01\">\n            </div>\n            <div class=\"frequency font-m \">\n                <p class=\"pr-5\">Frequency:</p>\n                <select name=\"dropdown\" class=\"freq-select pl-3\">\n                    <option value=\"-\" selected>-</option>\n                    <option value=\"Daily\">Daily</option>\n                    <option value=\"Weekly\">Weekly</option>\n                    <option value=\"Monthly\">Monthly</option>\n                    <option value=\"Quaterly\">Quaterly</option>\n                  </select>\n            </div>\n        </div>\n        <div class=\"graph-box\">\n            <app-chart [id]=\"'session'\" [canvasWidth]=\"1000\" [canvasHeight]=\"500\"></app-chart>\n        </div>\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/main/matrices/summary/summary.component.html":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layout/main/matrices/summary/summary.component.html ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"usage-summary-container mt-20\">\n    <div class=\"summary-graph mr-25\">\n        <div class=\"graph-header\">\n            <div class=\"graph-title font-l\">Usage summary</div>\n            <div class=\"date-range ml-30 mr-30\">\n                <input type=\"date\" class=\"pt-2 pl-5 pb-2\" value=\"2020-01-01\">\n                <p class=\"ml-5 mr-5 font-m\">to</p>\n                <input type=\"date\" class=\"pt-2 pl-5 pb-2 \" value=\"2020-08-01\">\n            </div>\n            <div class=\"frequency font-m mr-10\">\n                <p class=\"pr-5\">Frequency:</p>\n                <select name=\"dropdown\" class=\"freq-select pl-3\">\n                  <option value=\"-\" selected>-</option>\n                  <option value=\"Daily\">Daily</option>\n                  <option value=\"Weekly\">Weekly</option>\n                  <option value=\"Monthly\">Monthly</option>\n                  <option value=\"Quaterly\">Quaterly</option>\n                </select>\n            </div>\n        </div>\n        <div class=\"graph-box pt-20\">\n            <ng-container *ngFor=\"let item of usagesummary\">\n                <div class=\"usage-summary-data pt-20\">\n                    <div class=\"summary-details mb-5 ml-50\">\n                        <div class=\"font-m\">{{item.name}}</div>\n                        <div class=\"fw-500 font-m \">{{item.value}}</div>\n                    </div>\n                    <div class=\"ml-50 divider \">\n                        <hr>\n                    </div>\n                </div>\n            </ng-container>\n        </div>\n    </div>\n    <div class=\"sessions-graph \">\n        <div class=\"graph-header \">\n            <div class=\"graph-title font-l \">Number of Sessions</div>\n        </div>\n        <div class=\"graph-box \">\n            <app-chart [id]=\"'session'\" [canvasWidth]=\"500\" [canvasHeight]=\"300\"></app-chart>\n        </div>\n    </div>\n    <div class=\"exchanged-graph mr-25 \">\n        <div class=\"graph-header \">\n            <div class=\"graph-title font-l \">Number of File Exchanged</div>\n        </div>\n        <div class=\"graph-box \">\n            <app-chart [id]=\"'exchange'\" [canvasWidth]=\"500\" [canvasHeight]=\"300\"></app-chart>\n        </div>\n    </div>\n    <div class=\"users-graph \">\n        <div class=\"graph-header \">\n            <div class=\"graph-title font-l \">Number of Users</div>\n        </div>\n        <div class=\"graph-box \">\n            <app-chart [id]=\"'users'\" [canvasWidth]=\"500\" [canvasHeight]=\"300\"></app-chart>\n        </div>\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/main/tools/tools.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layout/main/tools/tools.component.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"tools-section mb-20\">\n    <div class=\"font-xl fw-500 mb-30\">\n        My Tools\n    </div>\n    <div class=\"selected-tools\">\n        <ng-container *ngFor=\"let item of selectedTools; let i = index\">\n            <div class=\"tools\">\n                {{item.name}}\n            </div>\n        </ng-container>\n    </div>\n    <div class=\"all-tools\">\n        <div class=\"tool-head cp\" (click)=\"closeTools()\">\n            <img [ngClass]=\"closeToolSec ? 'tool-icon-close' : 'tool-icon'\" class=\"\" src=\"https://freehost-spec.github.io/dexcenter-dashboard/assets/images/icons/close.svg\">\n            <span class=\"pl-10\">\n        Tools\n      </span>\n        </div>\n        <div class=\"list\" *ngIf=\"!closeToolSec\">\n            <ng-container *ngFor=\"let item of tools; let i = index\">\n                <div class=\"tool p-10\">\n                    <label class=\"switch\">\n            <input type=\"checkbox\" [(ngModel)]=\"item.selected\" [ngModelOptions]=\"{standalone: true}\"\n              (change)=\"selectTool(item)\">\n            <span class=\"slider round\"></span>\n          </label>\n                    <div class=\"pl-10 pr-10\">{{item.name}}</div>\n                </div>\n            </ng-container>\n        </div>\n    </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/modules/charts/chart/chart.component.html":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/modules/charts/chart/chart.component.html ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- <div>\n  <canvas id=\"{{id}}\"\"></canvas>\n</div> -->\n\n<ng-container *ngIf=\"id\">\n  <canvas id=\"{{id}}\" width=\"{{canvasWidth}}\" height=\"{{canvasHeight}}\"></canvas>\n</ng-container>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/modules/pagination/paginate/paginate.component.html":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/modules/pagination/paginate/paginate.component.html ***!
  \******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ng-container *ngIf=\"data && data?.total_pages > 0 \">\n  <div class=\"pagination\">\n    <span class=\"page-label\">Page {{ data?.current_page }} of {{ data?.total_pages }}</span>\n    <span class=\"page-button-holder\">\n      <button class=\"mr-10\" [disabled]=\"!!data && data?.current_page === 1\"\n        (click)=\"pageChange(data?.current_page - 1)\">\n        <span class=\"navigation-arrow\">&lt;</span>\n        <span class=\"navigation-label\">Previous</span>\n      </button>\n      <span *ngFor=\"let i of pages\">\n        <button [disabled]=\"isNaN(i)\" class=\"page-button mr-5\" *ngIf=\"i != data?.current_page\" (click)=\"pageChange(i)\"\n          data]=\"{page: i}\">{{ i }}</button>\n        <button [disabled]=\"isNaN(i)\" class=\"page-button mr-5\" *ngIf=\"i == data?.current_page\" (click)=\"pageChange(i)\"\n          color=\"primary\">{{ i }}</button>\n      </span>\n      <button class=\"ml-5\" [disabled]=\"!!data && data?.current_page === data.total_pages\"\n        (click)=\"pageChange(data?.current_page + 1)\">\n        <span class=\"navigation-label\">Next</span>\n        <span class=\"navigation-arrow\">&gt;</span>\n      </button>\n    </span>\n  </div>\n</ng-container>\n");

/***/ }),

/***/ "./src/app/layout/components/footer/footer.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/layout/components/footer/footer.component.scss ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xheW91dC9jb21wb25lbnRzL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/layout/components/footer/footer.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/layout/components/footer/footer.component.ts ***!
  \**************************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let FooterComponent = class FooterComponent {
    constructor() { }
    ngOnInit() {
    }
};
FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-footer',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./footer.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/components/footer/footer.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./footer.component.scss */ "./src/app/layout/components/footer/footer.component.scss")).default]
    })
], FooterComponent);



/***/ }),

/***/ "./src/app/layout/components/header/header.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/layout/components/header/header.component.scss ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".header {\n  background: WHITE 0% 0% no-repeat padding-box;\n  box-shadow: 0px 3px 6px #0000001f;\n  opacity: 1;\n  width: 100%;\n  height: 60px;\n  display: flex;\n  justify-content: space-between;\n  position: fixed;\n  top: 0;\n  left: 0;\n  z-index: 100;\n}\n.header .header-left {\n  display: inline-flex;\n}\n.header .header-left .logo {\n  width: 59px;\n  height: 37px;\n  display: flex;\n  align-items: center;\n}\n.header .header-left .companyname {\n  letter-spacing: 0.18px;\n  opacity: 1;\n  display: flex;\n  align-items: center;\n}\n.header .header-left .nav-path {\n  display: flex;\n  align-items: center;\n}\n.header .header-left .nav-path .home {\n  display: flex;\n  align-items: center;\n  color: #989898;\n}\n.header-right {\n  display: inline-flex;\n  align-items: center;\n}\n.header-right .lang {\n  width: 55px;\n  height: 25px;\n  background: var(--unnamed-color-ffffff) 0% 0% no-repeat padding-box;\n  border: 1px solid var(--unnamed-color-dfe2ee);\n  background: #ffffff 0% 0% no-repeat padding-box;\n  border: 1px solid #dfe2ee;\n  border-radius: 4px;\n}\n.header-right .lang .sl-nav {\n  display: inline;\n}\n.header-right .lang .sl-nav ul {\n  margin: 0;\n  padding: 0;\n  list-style: none;\n  position: relative;\n  display: inline-block;\n}\n.header-right .lang .sl-nav li {\n  display: flex;\n  justify-content: space-between;\n  text-align: center;\n  padding-bottom: 10px;\n}\n.header-right .lang .sl-nav li img {\n  margin: auto;\n}\n.header-right .lang .sl-nav li ul {\n  display: none;\n}\n.header-right .lang .sl-nav li:hover ul {\n  position: absolute;\n  top: 29px;\n  right: -15px;\n  display: block;\n  background: #fff;\n  width: 120px;\n  padding-top: 0px;\n  z-index: 1;\n  border-radius: 5px;\n  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.2);\n}\n.header-right .lang .sl-nav li:hover .triangle {\n  position: absolute;\n  top: 15px;\n  right: -10px;\n  z-index: 10;\n  height: 14px;\n  overflow: hidden;\n  width: 30px;\n  background: transparent;\n}\n.header-right .lang .sl-nav li ul li {\n  position: relative;\n  text-align: left;\n  background: transparent;\n  padding: 15px 15px;\n  padding-bottom: 0;\n  z-index: 2;\n  font-size: 15px;\n  color: #3c3c3c;\n}\n.header-right .lang .sl-nav li ul li:last-of-type {\n  padding-bottom: 15px;\n}\n.header-right .lang .sl-nav li ul li span {\n  padding-left: 5px;\n}\n.header-right .lang .sl-nav li ul li span:hover,\n.header-right .lang .sl-nav li ul li span.active {\n  color: #146c78;\n}\n.header-right .lang .sl-flag {\n  display: inline-block;\n  box-shadow: 0px 0px 3px rgba(0, 0, 0, 0.4);\n  width: 15px;\n  height: 15px;\n  background: #aaa;\n  border-radius: 50%;\n  position: relative;\n  top: 2px;\n  overflow: hidden;\n}\n.header-right .lang .flag-de {\n  background: url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAIAAAAC64paAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAAZdEVYdFNvZnR3YXJlAHBhaW50Lm5ldCA0LjAuMTM0A1t6AAAAPUlEQVQ4T+3HMQ0AIBTE0NOHM8x9B7hgh71bIWGieUvze1m7kHGBr/AVvsJX+EpmP5dV5/gKX+ErfIUvVDYcX2NMxQC8PAAAAABJRU5ErkJggg==\");\n  background-size: cover;\n  background-position: center center;\n}\n.header-right .lang .flag-usa {\n  background-size: cover;\n  background-position: center center;\n  background: url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAIAAAAC64paAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAAZdEVYdFNvZnR3YXJlAHBhaW50Lm5ldCA0LjAuMTM0A1t6AAABhUlEQVQ4T2Ows82PjGixsc4LD2tysC/09Kjw8622tyuICG8u0w/cpGSCBzF4e1VmZkzw9anOzOj38a4KCW4IC22ECHYk1l9tn4gHMeTlTnZxLikvm+XiUpKW2hvgX+vnV5OVOQEoOGfOtv94AYOzU3Fd7XxHh6Lq6rlurqUx0W0J8Z1AnbW18yotonaYuOJBDBXls4A+bGpaBCTz86YEBtQCvVBSPAPIbY0oP1/aiAcxABU1Ny+2tclvbFjo5FgUF9uenNwNDLnmpkWEnV1TPRcY1O1tS4H6i4umA/0MDK2K8tlAwRqHpP1uoXgQKKraWpcClTY3LQZaCLQ5NaUX5OaWJY3++SeTC/AgBmA4AXUClUJs9ver8fKsAAYEUJCws4G21dXNB1oFdD/Qz8DQTk4C+bm2dn6DZ9bRiDQ8iAEYt8CoBpK5YBIYw0AEEZwSXX4oMB4PYoC6gCzAcDqrjGzEsMfen2xEmbMv1rSTjRi26dqRjShz9o2+6WQjBrSShQSkZAIADvW/HLrLY6cAAAAASUVORK5CYII=\");\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hcHBsZS9wcm9qZWN0L2RleGNlbnRlci1kYXNoYm9hcmQvc3JjL2FwcC9sYXlvdXQvY29tcG9uZW50cy9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9sYXlvdXQvY29tcG9uZW50cy9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsNkNBQUE7RUFDQSxpQ0FBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSw4QkFBQTtFQUNBLGVBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFlBQUE7QUNDRjtBREFFO0VBQ0Usb0JBQUE7QUNFSjtBRERJO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7QUNHTjtBRERJO0VBQ0Usc0JBQUE7RUFDQSxVQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0FDR047QURESTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtBQ0dOO0FERk07RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0FDSVI7QURFQTtFQUNFLG9CQUFBO0VBQ0EsbUJBQUE7QUNDRjtBREFFO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxtRUFBQTtFQUNBLDZDQUFBO0VBQ0EsK0NBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0FDRUo7QURESTtFQUNFLGVBQUE7QUNHTjtBREZNO0VBQ0UsU0FBQTtFQUNBLFVBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7QUNJUjtBREZNO0VBQ0UsYUFBQTtFQUNBLDhCQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQkFBQTtBQ0lSO0FESFE7RUFDRSxZQUFBO0FDS1Y7QURIUTtFQUNFLGFBQUE7QUNLVjtBREFJO0VBQ0Usa0JBQUE7RUFDQSxTQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtFQUNBLDJDQUFBO0FDRU47QURBSTtFQUNFLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLHVCQUFBO0FDRU47QURBSTtFQUNFLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxVQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7QUNFTjtBREFJO0VBQ0Usb0JBQUE7QUNFTjtBREFJO0VBQ0UsaUJBQUE7QUNFTjtBREFJOztFQUVFLGNBQUE7QUNFTjtBREFJO0VBQ0UscUJBQUE7RUFDQSwwQ0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLGdCQUFBO0FDRU47QURBSTtFQUNFLDZUQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQ0FBQTtBQ0VOO0FEQUk7RUFDRSxzQkFBQTtFQUNBLGtDQUFBO0VBQ0EsaXZCQUFBO0FDRU4iLCJmaWxlIjoic3JjL2FwcC9sYXlvdXQvY29tcG9uZW50cy9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhlYWRlciB7XG4gIGJhY2tncm91bmQ6IFdISVRFIDAlIDAlIG5vLXJlcGVhdCBwYWRkaW5nLWJveDtcbiAgYm94LXNoYWRvdzogMHB4IDNweCA2cHggIzAwMDAwMDFmO1xuICBvcGFjaXR5OiAxO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA2MHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICB6LWluZGV4OiAxMDA7XG4gIC5oZWFkZXItbGVmdCB7XG4gICAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gICAgLmxvZ28ge1xuICAgICAgd2lkdGg6IDU5cHg7XG4gICAgICBoZWlnaHQ6IDM3cHg7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICB9XG4gICAgLmNvbXBhbnluYW1lIHtcbiAgICAgIGxldHRlci1zcGFjaW5nOiAwLjE4cHg7XG4gICAgICBvcGFjaXR5OiAxO1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgfVxuICAgIC5uYXYtcGF0aCB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIC5ob21lIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgY29sb3I6ICM5ODk4OTg7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi5oZWFkZXItcmlnaHQge1xuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgLmxhbmcge1xuICAgIHdpZHRoOiA1NXB4O1xuICAgIGhlaWdodDogMjVweDtcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS11bm5hbWVkLWNvbG9yLWZmZmZmZikgMCUgMCUgbm8tcmVwZWF0IHBhZGRpbmctYm94O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLXVubmFtZWQtY29sb3ItZGZlMmVlKTtcbiAgICBiYWNrZ3JvdW5kOiAjZmZmZmZmIDAlIDAlIG5vLXJlcGVhdCBwYWRkaW5nLWJveDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZGZlMmVlO1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICAuc2wtbmF2IHtcbiAgICAgIGRpc3BsYXk6IGlubGluZTtcbiAgICAgIHVsIHtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICBsaXN0LXN0eWxlOiBub25lO1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgIH1cbiAgICAgIGxpIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xuICAgICAgICBpbWcge1xuICAgICAgICAgIG1hcmdpbjogYXV0bztcbiAgICAgICAgfVxuICAgICAgICB1bCB7XG4gICAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICAvLyBEcm9wZG93biBIb3ZlclxuICAgIC5zbC1uYXYgbGk6aG92ZXIgdWwge1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgdG9wOiAyOXB4O1xuICAgICAgcmlnaHQ6IC0xNXB4O1xuICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgICAgd2lkdGg6IDEyMHB4O1xuICAgICAgcGFkZGluZy10b3A6IDBweDtcbiAgICAgIHotaW5kZXg6IDE7XG4gICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICBib3gtc2hhZG93OiAwcHggMHB4IDIwcHggcmdiYSgwLCAwLCAwLCAwLjIpO1xuICAgIH1cbiAgICAuc2wtbmF2IGxpOmhvdmVyIC50cmlhbmdsZSB7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICB0b3A6IDE1cHg7XG4gICAgICByaWdodDogLTEwcHg7XG4gICAgICB6LWluZGV4OiAxMDtcbiAgICAgIGhlaWdodDogMTRweDtcbiAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICB3aWR0aDogMzBweDtcbiAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgIH1cbiAgICAuc2wtbmF2IGxpIHVsIGxpIHtcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICAgIHBhZGRpbmc6IDE1cHggMTVweDtcbiAgICAgIHBhZGRpbmctYm90dG9tOiAwO1xuICAgICAgei1pbmRleDogMjtcbiAgICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICAgIGNvbG9yOiAjM2MzYzNjO1xuICAgIH1cbiAgICAuc2wtbmF2IGxpIHVsIGxpOmxhc3Qtb2YtdHlwZSB7XG4gICAgICBwYWRkaW5nLWJvdHRvbTogMTVweDtcbiAgICB9XG4gICAgLnNsLW5hdiBsaSB1bCBsaSBzcGFuIHtcbiAgICAgIHBhZGRpbmctbGVmdDogNXB4O1xuICAgIH1cbiAgICAuc2wtbmF2IGxpIHVsIGxpIHNwYW46aG92ZXIsXG4gICAgLnNsLW5hdiBsaSB1bCBsaSBzcGFuLmFjdGl2ZSB7XG4gICAgICBjb2xvcjogIzE0NmM3ODtcbiAgICB9XG4gICAgLnNsLWZsYWcge1xuICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgYm94LXNoYWRvdzogMHB4IDBweCAzcHggcmdiYSgwLCAwLCAwLCAwLjQpO1xuICAgICAgd2lkdGg6IDE1cHg7XG4gICAgICBoZWlnaHQ6IDE1cHg7XG4gICAgICBiYWNrZ3JvdW5kOiAjYWFhO1xuICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgdG9wOiAycHg7XG4gICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIH1cbiAgICAuZmxhZy1kZSB7XG4gICAgICBiYWNrZ3JvdW5kOiB1cmwoJ2RhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBQlFBQUFBVUNBSUFBQUFDNjRwYUFBQUFBWE5TUjBJQXJzNGM2UUFBQUFSblFVMUJBQUN4and2OFlRVUFBQUFKY0VoWmN3QUFEc01BQUE3REFjZHZxR1FBQUFBWmRFVllkRk52Wm5SM1lYSmxBSEJoYVc1MExtNWxkQ0EwTGpBdU1UTTBBMXQ2QUFBQVBVbEVRVlE0VCszSE1RMEFJQlRFME5PSE04eDlCN2hnaDcxYklXR2llVXZ6ZTFtN2tIR0JyL0FWdnNKWCtFcG1QNWRWNS9nS1grRXJmSVV2VkRZY1gyTk14UUM4UEFBQUFBQkpSVTVFcmtKZ2dnPT0nKTtcbiAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyO1xuICAgIH1cbiAgICAuZmxhZy11c2Ege1xuICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBjZW50ZXI7XG4gICAgICBiYWNrZ3JvdW5kOiB1cmwoJ2RhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBQlFBQUFBVUNBSUFBQUFDNjRwYUFBQUFBWE5TUjBJQXJzNGM2UUFBQUFSblFVMUJBQUN4and2OFlRVUFBQUFKY0VoWmN3QUFEc01BQUE3REFjZHZxR1FBQUFBWmRFVllkRk52Wm5SM1lYSmxBSEJoYVc1MExtNWxkQ0EwTGpBdU1UTTBBMXQ2QUFBQmhVbEVRVlE0VDJPd3M4MlBqR2l4c2M0TEQydHlzQy8wOUtqdzg2MjJ0eXVJQ0c4dTB3L2NwR1NDQnpGNGUxVm1aa3p3OWFuT3pPajM4YTRLQ1c0SUMyMkVDSFlrMWw5dG40Z0hNZVRsVG5aeExpa3ZtK1hpVXBLVzJodmdYK3ZuVjVPVk9RRW9PR2ZPdHY5NEFZT3pVM0ZkN1h4SGg2THE2cmx1cnFVeDBXMEo4WjFBbmJXMTh5b3RvbmFZdU9KQkRCWGxzNEErYkdwYUJDVHo4NllFQnRRQ3ZWQlNQQVBJYlkwb1AxL2FpQWN4QUJVMU55KzJ0Y2x2YkZqbzVGZ1VGOXVlbk53TkRMbm1wa1dFblYxVFBSY1kxTzF0UzRINmk0dW1BLzBNREsySzh0bEF3UnFIcFAxdW9YZ1FLS3JhV3BjQ2xUWTNMUVphQ0xRNU5hVVg1T2FXSlkzKytTZVRDL0FnQm1BNEFYVUNsVUpzOXZlcjhmS3NBQVlFVUpDd3M0RzIxZFhOQjFvRmREL1F6OERRVGs0QytibTJkbjZEWjliUmlEUThpQUVZdDhDb0JwSzVZQklZdzBBRUVad1NYWDRvTUI0UFlvQzZnQ3pBY0RxcmpHekVzTWZlbjJ4RW1iTXYxclNUalJpMjZkcVJqU2h6OW8yKzZXUWpCclNTaFFTa1pBSUFEdlcvSExyTFk2Y0FBQUFBU1VWT1JLNUNZSUk9Jyk7XG4gICAgfVxuICB9XG59XG4iLCIuaGVhZGVyIHtcbiAgYmFja2dyb3VuZDogV0hJVEUgMCUgMCUgbm8tcmVwZWF0IHBhZGRpbmctYm94O1xuICBib3gtc2hhZG93OiAwcHggM3B4IDZweCAjMDAwMDAwMWY7XG4gIG9wYWNpdHk6IDE7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDYwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHotaW5kZXg6IDEwMDtcbn1cbi5oZWFkZXIgLmhlYWRlci1sZWZ0IHtcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG59XG4uaGVhZGVyIC5oZWFkZXItbGVmdCAubG9nbyB7XG4gIHdpZHRoOiA1OXB4O1xuICBoZWlnaHQ6IDM3cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4uaGVhZGVyIC5oZWFkZXItbGVmdCAuY29tcGFueW5hbWUge1xuICBsZXR0ZXItc3BhY2luZzogMC4xOHB4O1xuICBvcGFjaXR5OiAxO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLmhlYWRlciAuaGVhZGVyLWxlZnQgLm5hdi1wYXRoIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5oZWFkZXIgLmhlYWRlci1sZWZ0IC5uYXYtcGF0aCAuaG9tZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGNvbG9yOiAjOTg5ODk4O1xufVxuXG4uaGVhZGVyLXJpZ2h0IHtcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4uaGVhZGVyLXJpZ2h0IC5sYW5nIHtcbiAgd2lkdGg6IDU1cHg7XG4gIGhlaWdodDogMjVweDtcbiAgYmFja2dyb3VuZDogdmFyKC0tdW5uYW1lZC1jb2xvci1mZmZmZmYpIDAlIDAlIG5vLXJlcGVhdCBwYWRkaW5nLWJveDtcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tdW5uYW1lZC1jb2xvci1kZmUyZWUpO1xuICBiYWNrZ3JvdW5kOiAjZmZmZmZmIDAlIDAlIG5vLXJlcGVhdCBwYWRkaW5nLWJveDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2RmZTJlZTtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xufVxuLmhlYWRlci1yaWdodCAubGFuZyAuc2wtbmF2IHtcbiAgZGlzcGxheTogaW5saW5lO1xufVxuLmhlYWRlci1yaWdodCAubGFuZyAuc2wtbmF2IHVsIHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xuICBsaXN0LXN0eWxlOiBub25lO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cbi5oZWFkZXItcmlnaHQgLmxhbmcgLnNsLW5hdiBsaSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbn1cbi5oZWFkZXItcmlnaHQgLmxhbmcgLnNsLW5hdiBsaSBpbWcge1xuICBtYXJnaW46IGF1dG87XG59XG4uaGVhZGVyLXJpZ2h0IC5sYW5nIC5zbC1uYXYgbGkgdWwge1xuICBkaXNwbGF5OiBub25lO1xufVxuLmhlYWRlci1yaWdodCAubGFuZyAuc2wtbmF2IGxpOmhvdmVyIHVsIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDI5cHg7XG4gIHJpZ2h0OiAtMTVweDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIHdpZHRoOiAxMjBweDtcbiAgcGFkZGluZy10b3A6IDBweDtcbiAgei1pbmRleDogMTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBib3gtc2hhZG93OiAwcHggMHB4IDIwcHggcmdiYSgwLCAwLCAwLCAwLjIpO1xufVxuLmhlYWRlci1yaWdodCAubGFuZyAuc2wtbmF2IGxpOmhvdmVyIC50cmlhbmdsZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAxNXB4O1xuICByaWdodDogLTEwcHg7XG4gIHotaW5kZXg6IDEwO1xuICBoZWlnaHQ6IDE0cHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHdpZHRoOiAzMHB4O1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbn1cbi5oZWFkZXItcmlnaHQgLmxhbmcgLnNsLW5hdiBsaSB1bCBsaSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIHBhZGRpbmc6IDE1cHggMTVweDtcbiAgcGFkZGluZy1ib3R0b206IDA7XG4gIHotaW5kZXg6IDI7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgY29sb3I6ICMzYzNjM2M7XG59XG4uaGVhZGVyLXJpZ2h0IC5sYW5nIC5zbC1uYXYgbGkgdWwgbGk6bGFzdC1vZi10eXBlIHtcbiAgcGFkZGluZy1ib3R0b206IDE1cHg7XG59XG4uaGVhZGVyLXJpZ2h0IC5sYW5nIC5zbC1uYXYgbGkgdWwgbGkgc3BhbiB7XG4gIHBhZGRpbmctbGVmdDogNXB4O1xufVxuLmhlYWRlci1yaWdodCAubGFuZyAuc2wtbmF2IGxpIHVsIGxpIHNwYW46aG92ZXIsXG4uaGVhZGVyLXJpZ2h0IC5sYW5nIC5zbC1uYXYgbGkgdWwgbGkgc3Bhbi5hY3RpdmUge1xuICBjb2xvcjogIzE0NmM3ODtcbn1cbi5oZWFkZXItcmlnaHQgLmxhbmcgLnNsLWZsYWcge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGJveC1zaGFkb3c6IDBweCAwcHggM3B4IHJnYmEoMCwgMCwgMCwgMC40KTtcbiAgd2lkdGg6IDE1cHg7XG4gIGhlaWdodDogMTVweDtcbiAgYmFja2dyb3VuZDogI2FhYTtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogMnB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuLmhlYWRlci1yaWdodCAubGFuZyAuZmxhZy1kZSB7XG4gIGJhY2tncm91bmQ6IHVybChcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBQlFBQUFBVUNBSUFBQUFDNjRwYUFBQUFBWE5TUjBJQXJzNGM2UUFBQUFSblFVMUJBQUN4and2OFlRVUFBQUFKY0VoWmN3QUFEc01BQUE3REFjZHZxR1FBQUFBWmRFVllkRk52Wm5SM1lYSmxBSEJoYVc1MExtNWxkQ0EwTGpBdU1UTTBBMXQ2QUFBQVBVbEVRVlE0VCszSE1RMEFJQlRFME5PSE04eDlCN2hnaDcxYklXR2llVXZ6ZTFtN2tIR0JyL0FWdnNKWCtFcG1QNWRWNS9nS1grRXJmSVV2VkRZY1gyTk14UUM4UEFBQUFBQkpSVTVFcmtKZ2dnPT1cIik7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBjZW50ZXI7XG59XG4uaGVhZGVyLXJpZ2h0IC5sYW5nIC5mbGFnLXVzYSB7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBjZW50ZXI7XG4gIGJhY2tncm91bmQ6IHVybChcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBQlFBQUFBVUNBSUFBQUFDNjRwYUFBQUFBWE5TUjBJQXJzNGM2UUFBQUFSblFVMUJBQUN4and2OFlRVUFBQUFKY0VoWmN3QUFEc01BQUE3REFjZHZxR1FBQUFBWmRFVllkRk52Wm5SM1lYSmxBSEJoYVc1MExtNWxkQ0EwTGpBdU1UTTBBMXQ2QUFBQmhVbEVRVlE0VDJPd3M4MlBqR2l4c2M0TEQydHlzQy8wOUtqdzg2MjJ0eXVJQ0c4dTB3L2NwR1NDQnpGNGUxVm1aa3p3OWFuT3pPajM4YTRLQ1c0SUMyMkVDSFlrMWw5dG40Z0hNZVRsVG5aeExpa3ZtK1hpVXBLVzJodmdYK3ZuVjVPVk9RRW9PR2ZPdHY5NEFZT3pVM0ZkN1h4SGg2THE2cmx1cnFVeDBXMEo4WjFBbmJXMTh5b3RvbmFZdU9KQkRCWGxzNEErYkdwYUJDVHo4NllFQnRRQ3ZWQlNQQVBJYlkwb1AxL2FpQWN4QUJVMU55KzJ0Y2x2YkZqbzVGZ1VGOXVlbk53TkRMbm1wa1dFblYxVFBSY1kxTzF0UzRINmk0dW1BLzBNREsySzh0bEF3UnFIcFAxdW9YZ1FLS3JhV3BjQ2xUWTNMUVphQ0xRNU5hVVg1T2FXSlkzKytTZVRDL0FnQm1BNEFYVUNsVUpzOXZlcjhmS3NBQVlFVUpDd3M0RzIxZFhOQjFvRmREL1F6OERRVGs0QytibTJkbjZEWjliUmlEUThpQUVZdDhDb0JwSzVZQklZdzBBRUVad1NYWDRvTUI0UFlvQzZnQ3pBY0RxcmpHekVzTWZlbjJ4RW1iTXYxclNUalJpMjZkcVJqU2h6OW8yKzZXUWpCclNTaFFTa1pBSUFEdlcvSExyTFk2Y0FBQUFBU1VWT1JLNUNZSUk9XCIpO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/layout/components/header/header.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/layout/components/header/header.component.ts ***!
  \**************************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



let HeaderComponent = class HeaderComponent {
    constructor(router) {
        this.router = router;
        // router.events.subscribe((url: any) => console.log(url));
        // this.activeUrl = router.url;
        this.subscription = this.router.events.subscribe(s => {
            if (s instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationEnd"]) {
                if (s.urlAfterRedirects.includes('queue-info')) {
                    this.activeUrl = 'Queue Information';
                }
                else {
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
};
HeaderComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-header',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./header.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/components/header/header.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./header.component.scss */ "./src/app/layout/components/header/header.component.scss")).default]
    })
], HeaderComponent);



/***/ }),

/***/ "./src/app/layout/components/side-nav/side-nav.component.scss":
/*!********************************************************************!*\
  !*** ./src/app/layout/components/side-nav/side-nav.component.scss ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".side-nav {\n  width: 100%;\n  height: 100vh;\n  background: #034ea2 0% 0% no-repeat padding-box;\n  box-shadow: 0px 3px 6px #00000029;\n  position: fixed;\n  width: 50px;\n  z-index: 10;\n  top: 60px;\n}\n\n.nav-icon {\n  padding: 10px 15px;\n}\n\n.open-nav {\n  transform: rotate(180deg);\n}\n\n.close-nav {\n  float: right;\n}\n\n.side-nav-expand {\n  height: 100vh;\n  background: #034ea2 0% 0% no-repeat padding-box;\n  box-shadow: 0px 3px 6px #00000029;\n  width: 220px;\n  display: flex;\n  flex-direction: column;\n  color: white;\n}\n\n.side-nav-expand .fav-tool-container,\n.side-nav-expand .admin-container,\n.side-nav-expand .help-container {\n  display: flex;\n  flex-direction: column;\n  color: white;\n}\n\n.side-nav-expand .fav-tool-container .left-collaps-icon img,\n.side-nav-expand .admin-container .left-collaps-icon img,\n.side-nav-expand .help-container .left-collaps-icon img {\n  display: block;\n  float: right;\n}\n\n.side-nav-expand .fav-tool-container .fav-tool-container,\n.side-nav-expand .fav-tool-container .admin-container,\n.side-nav-expand .fav-tool-container .help-container,\n.side-nav-expand .admin-container .fav-tool-container,\n.side-nav-expand .admin-container .admin-container,\n.side-nav-expand .admin-container .help-container,\n.side-nav-expand .help-container .fav-tool-container,\n.side-nav-expand .help-container .admin-container,\n.side-nav-expand .help-container .help-container {\n  display: flex;\n  flex-direction: column;\n}\n\n.side-nav-expand .fav-tool-container .fav-tool-container .nav-list,\n.side-nav-expand .admin-container .fav-tool-container .nav-list,\n.side-nav-expand .help-container .fav-tool-container .nav-list {\n  display: flex;\n  flex-direction: row;\n}\n\n.nav-data {\n  display: flex;\n  flex-direction: row;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hcHBsZS9wcm9qZWN0L2RleGNlbnRlci1kYXNoYm9hcmQvc3JjL2FwcC9sYXlvdXQvY29tcG9uZW50cy9zaWRlLW5hdi9zaWRlLW5hdi5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbGF5b3V0L2NvbXBvbmVudHMvc2lkZS1uYXYvc2lkZS1uYXYuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDRSxXQUFBO0VBQ0EsYUFBQTtFQUNBLCtDQUFBO0VBQ0EsaUNBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0FDQUY7O0FER0E7RUFDRSxrQkFBQTtBQ0FGOztBREVBO0VBQ0UseUJBQUE7QUNDRjs7QURDQTtFQUNFLFlBQUE7QUNFRjs7QURFQTtFQUNFLGFBQUE7RUFDQSwrQ0FBQTtFQUNBLGlDQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLFlBQUE7QUNDRjs7QURBRTs7O0VBR0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsWUFBQTtBQ0VKOztBREFNOzs7RUFDRSxjQUFBO0VBQ0EsWUFBQTtBQ0lSOztBRERJOzs7Ozs7Ozs7RUFHRSxhQUFBO0VBQ0Esc0JBQUE7QUNTTjs7QUROTTs7O0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0FDVVI7O0FESkE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7QUNPRiIsImZpbGUiOiJzcmMvYXBwL2xheW91dC9jb21wb25lbnRzL3NpZGUtbmF2L3NpZGUtbmF2LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQ29sbGFwc2UtTmF2IEJhclxuLnNpZGUtbmF2IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwdmg7XG4gIGJhY2tncm91bmQ6ICMwMzRlYTIgMCUgMCUgbm8tcmVwZWF0IHBhZGRpbmctYm94O1xuICBib3gtc2hhZG93OiAwcHggM3B4IDZweCAjMDAwMDAwMjk7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgd2lkdGg6IDUwcHg7XG4gIHotaW5kZXg6IDEwO1xuICB0b3A6IDYwcHg7XG59XG5cbi5uYXYtaWNvbiB7XG4gIHBhZGRpbmc6IDEwcHggMTVweDtcbn1cbi5vcGVuLW5hdiB7XG4gIHRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7XG59XG4uY2xvc2UtbmF2IHtcbiAgZmxvYXQ6IHJpZ2h0O1xufVxuXG4vLyBFeHBhbmRlZC1OYXYgQmFyXG4uc2lkZS1uYXYtZXhwYW5kIHtcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgYmFja2dyb3VuZDogIzAzNGVhMiAwJSAwJSBuby1yZXBlYXQgcGFkZGluZy1ib3g7XG4gIGJveC1zaGFkb3c6IDBweCAzcHggNnB4ICMwMDAwMDAyOTtcbiAgd2lkdGg6IDIyMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBjb2xvcjogd2hpdGU7XG4gIC5mYXYtdG9vbC1jb250YWluZXIsXG4gIC5hZG1pbi1jb250YWluZXIsXG4gIC5oZWxwLWNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAubGVmdC1jb2xsYXBzLWljb24ge1xuICAgICAgaW1nIHtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIGZsb2F0OiByaWdodDtcbiAgICAgIH1cbiAgICB9XG4gICAgLmZhdi10b29sLWNvbnRhaW5lcixcbiAgICAuYWRtaW4tY29udGFpbmVyLFxuICAgIC5oZWxwLWNvbnRhaW5lciB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICB9XG4gICAgLmZhdi10b29sLWNvbnRhaW5lciB7XG4gICAgICAubmF2LWxpc3Qge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG4ubmF2LWRhdGEge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xufVxuIiwiLnNpZGUtbmF2IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwdmg7XG4gIGJhY2tncm91bmQ6ICMwMzRlYTIgMCUgMCUgbm8tcmVwZWF0IHBhZGRpbmctYm94O1xuICBib3gtc2hhZG93OiAwcHggM3B4IDZweCAjMDAwMDAwMjk7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgd2lkdGg6IDUwcHg7XG4gIHotaW5kZXg6IDEwO1xuICB0b3A6IDYwcHg7XG59XG5cbi5uYXYtaWNvbiB7XG4gIHBhZGRpbmc6IDEwcHggMTVweDtcbn1cblxuLm9wZW4tbmF2IHtcbiAgdHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKTtcbn1cblxuLmNsb3NlLW5hdiB7XG4gIGZsb2F0OiByaWdodDtcbn1cblxuLnNpZGUtbmF2LWV4cGFuZCB7XG4gIGhlaWdodDogMTAwdmg7XG4gIGJhY2tncm91bmQ6ICMwMzRlYTIgMCUgMCUgbm8tcmVwZWF0IHBhZGRpbmctYm94O1xuICBib3gtc2hhZG93OiAwcHggM3B4IDZweCAjMDAwMDAwMjk7XG4gIHdpZHRoOiAyMjBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgY29sb3I6IHdoaXRlO1xufVxuLnNpZGUtbmF2LWV4cGFuZCAuZmF2LXRvb2wtY29udGFpbmVyLFxuLnNpZGUtbmF2LWV4cGFuZCAuYWRtaW4tY29udGFpbmVyLFxuLnNpZGUtbmF2LWV4cGFuZCAuaGVscC1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBjb2xvcjogd2hpdGU7XG59XG4uc2lkZS1uYXYtZXhwYW5kIC5mYXYtdG9vbC1jb250YWluZXIgLmxlZnQtY29sbGFwcy1pY29uIGltZyxcbi5zaWRlLW5hdi1leHBhbmQgLmFkbWluLWNvbnRhaW5lciAubGVmdC1jb2xsYXBzLWljb24gaW1nLFxuLnNpZGUtbmF2LWV4cGFuZCAuaGVscC1jb250YWluZXIgLmxlZnQtY29sbGFwcy1pY29uIGltZyB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBmbG9hdDogcmlnaHQ7XG59XG4uc2lkZS1uYXYtZXhwYW5kIC5mYXYtdG9vbC1jb250YWluZXIgLmZhdi10b29sLWNvbnRhaW5lcixcbi5zaWRlLW5hdi1leHBhbmQgLmZhdi10b29sLWNvbnRhaW5lciAuYWRtaW4tY29udGFpbmVyLFxuLnNpZGUtbmF2LWV4cGFuZCAuZmF2LXRvb2wtY29udGFpbmVyIC5oZWxwLWNvbnRhaW5lcixcbi5zaWRlLW5hdi1leHBhbmQgLmFkbWluLWNvbnRhaW5lciAuZmF2LXRvb2wtY29udGFpbmVyLFxuLnNpZGUtbmF2LWV4cGFuZCAuYWRtaW4tY29udGFpbmVyIC5hZG1pbi1jb250YWluZXIsXG4uc2lkZS1uYXYtZXhwYW5kIC5hZG1pbi1jb250YWluZXIgLmhlbHAtY29udGFpbmVyLFxuLnNpZGUtbmF2LWV4cGFuZCAuaGVscC1jb250YWluZXIgLmZhdi10b29sLWNvbnRhaW5lcixcbi5zaWRlLW5hdi1leHBhbmQgLmhlbHAtY29udGFpbmVyIC5hZG1pbi1jb250YWluZXIsXG4uc2lkZS1uYXYtZXhwYW5kIC5oZWxwLWNvbnRhaW5lciAuaGVscC1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuLnNpZGUtbmF2LWV4cGFuZCAuZmF2LXRvb2wtY29udGFpbmVyIC5mYXYtdG9vbC1jb250YWluZXIgLm5hdi1saXN0LFxuLnNpZGUtbmF2LWV4cGFuZCAuYWRtaW4tY29udGFpbmVyIC5mYXYtdG9vbC1jb250YWluZXIgLm5hdi1saXN0LFxuLnNpZGUtbmF2LWV4cGFuZCAuaGVscC1jb250YWluZXIgLmZhdi10b29sLWNvbnRhaW5lciAubmF2LWxpc3Qge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xufVxuXG4ubmF2LWRhdGEge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/layout/components/side-nav/side-nav.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/layout/components/side-nav/side-nav.component.ts ***!
  \******************************************************************/
/*! exports provided: SideNavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SideNavComponent", function() { return SideNavComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_services_common_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/common.service */ "./src/app/services/common.service.ts");




let SideNavComponent = class SideNavComponent {
    constructor(router, commonService) {
        this.router = router;
        this.commonService = commonService;
        this.fabList = [];
        this.subscription = this.commonService.getData().subscribe(data => {
            if (data) {
                this.fabList = data.data;
            }
            else {
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
            { name: 'System Connection', route: '/system-connection' },
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
};
SideNavComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: src_app_services_common_service__WEBPACK_IMPORTED_MODULE_3__["CommonService"] }
];
SideNavComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-side-nav',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./side-nav.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/components/side-nav/side-nav.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./side-nav.component.scss */ "./src/app/layout/components/side-nav/side-nav.component.scss")).default]
    })
], SideNavComponent);



/***/ }),

/***/ "./src/app/layout/layout.component.scss":
/*!**********************************************!*\
  !*** ./src/app/layout/layout.component.scss ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".main {\n  display: flex;\n}\n.main > .main-container {\n  width: 100%;\n  margin-left: 40px;\n  margin-top: 60px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hcHBsZS9wcm9qZWN0L2RleGNlbnRlci1kYXNoYm9hcmQvc3JjL2FwcC9sYXlvdXQvbGF5b3V0LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9sYXlvdXQvbGF5b3V0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtBQ0NGO0FEQUU7RUFDRSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtBQ0VKIiwiZmlsZSI6InNyYy9hcHAvbGF5b3V0L2xheW91dC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYWluIHtcbiAgZGlzcGxheTogZmxleDtcbiAgJiA+IC5tYWluLWNvbnRhaW5lciB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWFyZ2luLWxlZnQ6IDQwcHg7XG4gICAgbWFyZ2luLXRvcDogNjBweDtcbiAgfVxufVxuIiwiLm1haW4ge1xuICBkaXNwbGF5OiBmbGV4O1xufVxuLm1haW4gPiAubWFpbi1jb250YWluZXIge1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luLWxlZnQ6IDQwcHg7XG4gIG1hcmdpbi10b3A6IDYwcHg7XG59Il19 */");

/***/ }),

/***/ "./src/app/layout/layout.component.ts":
/*!********************************************!*\
  !*** ./src/app/layout/layout.component.ts ***!
  \********************************************/
/*! exports provided: LayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutComponent", function() { return LayoutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let LayoutComponent = class LayoutComponent {
    constructor() { }
    ngOnInit() {
    }
};
LayoutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-layout',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./layout.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/layout.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./layout.component.scss */ "./src/app/layout/layout.component.scss")).default]
    })
], LayoutComponent);



/***/ }),

/***/ "./src/app/layout/layout.module.ts":
/*!*****************************************!*\
  !*** ./src/app/layout/layout.module.ts ***!
  \*****************************************/
/*! exports provided: LayoutModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutModule", function() { return LayoutModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _layout_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./layout.routing.module */ "./src/app/layout/layout.routing.module.ts");
/* harmony import */ var _main_main_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./main/main.component */ "./src/app/layout/main/main.component.ts");
/* harmony import */ var _layout_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./layout.component */ "./src/app/layout/layout.component.ts");
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/header/header.component */ "./src/app/layout/components/header/header.component.ts");
/* harmony import */ var _components_side_nav_side_nav_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/side-nav/side-nav.component */ "./src/app/layout/components/side-nav/side-nav.component.ts");
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/footer/footer.component */ "./src/app/layout/components/footer/footer.component.ts");
/* harmony import */ var _shared_modules_pagination_pagination_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../shared/modules/pagination/pagination.module */ "./src/app/shared/modules/pagination/pagination.module.ts");
/* harmony import */ var _main_tools_tools_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./main/tools/tools.component */ "./src/app/layout/main/tools/tools.component.ts");
/* harmony import */ var _main_activity_activity_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./main/activity/activity.component */ "./src/app/layout/main/activity/activity.component.ts");
/* harmony import */ var _main_matrices_matrices_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./main/matrices/matrices.component */ "./src/app/layout/main/matrices/matrices.component.ts");
/* harmony import */ var _main_activity_user_user_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./main/activity/user/user.component */ "./src/app/layout/main/activity/user/user.component.ts");
/* harmony import */ var _main_activity_sessions_sessions_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./main/activity/sessions/sessions.component */ "./src/app/layout/main/activity/sessions/sessions.component.ts");
/* harmony import */ var _main_activity_reports_reports_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./main/activity/reports/reports.component */ "./src/app/layout/main/activity/reports/reports.component.ts");
/* harmony import */ var _main_matrices_summary_summary_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./main/matrices/summary/summary.component */ "./src/app/layout/main/matrices/summary/summary.component.ts");
/* harmony import */ var _main_matrices_mtbf_mtbf_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./main/matrices/mtbf/mtbf.component */ "./src/app/layout/main/matrices/mtbf/mtbf.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _main_matrices_dynamic_session_dynamic_session_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./main/matrices/dynamic-session/dynamic-session.component */ "./src/app/layout/main/matrices/dynamic-session/dynamic-session.component.ts");




















let LayoutModule = class LayoutModule {
};
LayoutModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_layout_component__WEBPACK_IMPORTED_MODULE_5__["LayoutComponent"], _main_main_component__WEBPACK_IMPORTED_MODULE_4__["MainComponent"], _components_header_header_component__WEBPACK_IMPORTED_MODULE_6__["HeaderComponent"], _components_side_nav_side_nav_component__WEBPACK_IMPORTED_MODULE_7__["SideNavComponent"], _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_8__["FooterComponent"], _main_tools_tools_component__WEBPACK_IMPORTED_MODULE_10__["ToolsComponent"], _main_activity_activity_component__WEBPACK_IMPORTED_MODULE_11__["ActivityComponent"], _main_matrices_matrices_component__WEBPACK_IMPORTED_MODULE_12__["MatricesComponent"], _main_activity_user_user_component__WEBPACK_IMPORTED_MODULE_13__["UserComponent"], _main_activity_sessions_sessions_component__WEBPACK_IMPORTED_MODULE_14__["SessionsComponent"], _main_activity_reports_reports_component__WEBPACK_IMPORTED_MODULE_15__["ReportsComponent"], _main_matrices_summary_summary_component__WEBPACK_IMPORTED_MODULE_16__["SummaryComponent"], _main_matrices_mtbf_mtbf_component__WEBPACK_IMPORTED_MODULE_17__["MtbfComponent"], _main_matrices_dynamic_session_dynamic_session_component__WEBPACK_IMPORTED_MODULE_19__["DynamicSessionComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _layout_routing_module__WEBPACK_IMPORTED_MODULE_3__["LayoutRoutingModule"], _shared_modules_pagination_pagination_module__WEBPACK_IMPORTED_MODULE_9__["PaginationModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_18__["FormsModule"]],
    })
], LayoutModule);



/***/ }),

/***/ "./src/app/layout/layout.routing.module.ts":
/*!*************************************************!*\
  !*** ./src/app/layout/layout.routing.module.ts ***!
  \*************************************************/
/*! exports provided: LayoutRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutRoutingModule", function() { return LayoutRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _layout_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./layout.component */ "./src/app/layout/layout.component.ts");
/* harmony import */ var _main_main_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./main/main.component */ "./src/app/layout/main/main.component.ts");
/* harmony import */ var ng2_charts__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng2-charts */ "./node_modules/ng2-charts/fesm2015/ng2-charts.js");
/* harmony import */ var _shared_modules_charts_charts_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/modules/charts/charts.module */ "./src/app/shared/modules/charts/charts.module.ts");







const routes = [
    {
        path: '',
        component: _layout_component__WEBPACK_IMPORTED_MODULE_3__["LayoutComponent"],
        children: [
            {
                path: '',
                component: _main_main_component__WEBPACK_IMPORTED_MODULE_4__["MainComponent"]
            },
            {
                path: 'queue-info', loadChildren: () => __webpack_require__.e(/*! import() | queue-info-queue-info-module */ "queue-info-queue-info-module").then(__webpack_require__.bind(null, /*! ./queue-info/queue-info.module */ "./src/app/layout/queue-info/queue-info.module.ts")).then(m => m.QueueInfoModule)
            },
            {
                path: 'system-connection', loadChildren: () => __webpack_require__.e(/*! import() | systems-connection-systems-connection-module */ "systems-connection-systems-connection-module").then(__webpack_require__.bind(null, /*! ./systems-connection/systems-connection.module */ "./src/app/layout/systems-connection/systems-connection.module.ts")).then(m => m.SystemsConnectionModule)
            },
        ]
    },
    { path: '**', redirectTo: '' }
];
let LayoutRoutingModule = class LayoutRoutingModule {
};
LayoutRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes), ng2_charts__WEBPACK_IMPORTED_MODULE_5__["ChartsModule"], _shared_modules_charts_charts_module__WEBPACK_IMPORTED_MODULE_6__["CustomChartsModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"], ng2_charts__WEBPACK_IMPORTED_MODULE_5__["ChartsModule"], _shared_modules_charts_charts_module__WEBPACK_IMPORTED_MODULE_6__["CustomChartsModule"]],
    })
], LayoutRoutingModule);



/***/ }),

/***/ "./src/app/layout/main/activity/activity.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/layout/main/activity/activity.component.scss ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".selected {\n  border: 1px solid #00a1d8;\n  background-color: #00a1d8;\n  color: #fff;\n}\n\n.recent-activity {\n  display: flex;\n  flex-direction: column;\n}\n\n.recent-activity > .recent-activity-head {\n  padding: 10px 0px !important;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n\n.recent-activity > .recent-activity-head .recent-activity-head-content {\n  display: flex;\n  justify-content: space-between;\n}\n\n.recent-activity > .recent-activity-head .last-update {\n  display: flex;\n  align-items: center;\n  color: #111111;\n}\n\n.recent-activity > .recent-activity-content {\n  display: flex;\n  flex-direction: column;\n  flex-wrap: wrap;\n  width: 100%;\n}\n\n.recent-activity > .recent-activity-content > .tool {\n  width: 260px;\n  display: flex;\n}\n\n.tool-icon {\n  transform: rotate(90deg);\n}\n\n.tool-icon-close {\n  transform: rotate(-90deg);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hcHBsZS9wcm9qZWN0L2RleGNlbnRlci1kYXNoYm9hcmQvc3JjL2FwcC9sYXlvdXQvbWFpbi9hY3Rpdml0eS9hY3Rpdml0eS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbGF5b3V0L21haW4vYWN0aXZpdHkvYWN0aXZpdHkuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSx5QkFBQTtFQUNBLHlCQUFBO0VBQ0EsV0FBQTtBQ0NKOztBREVBO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0FDQ0o7O0FEQUk7RUFDSSw0QkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0FDRVI7O0FERFE7RUFDSSxhQUFBO0VBQ0EsOEJBQUE7QUNHWjs7QUREUTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7QUNHWjs7QURBSTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0FDRVI7O0FERFE7RUFDSSxZQUFBO0VBQ0EsYUFBQTtBQ0daOztBREVBO0VBQ0ksd0JBQUE7QUNDSjs7QURFQTtFQUNJLHlCQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9sYXlvdXQvbWFpbi9hY3Rpdml0eS9hY3Rpdml0eS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zZWxlY3RlZCB7XG4gICAgYm9yZGVyOiAxcHggc29saWQgIzAwYTFkODtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDBhMWQ4O1xuICAgIGNvbG9yOiAjZmZmO1xufVxuXG4ucmVjZW50LWFjdGl2aXR5IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgJj4ucmVjZW50LWFjdGl2aXR5LWhlYWQge1xuICAgICAgICBwYWRkaW5nOiAxMHB4IDBweCAhaW1wb3J0YW50O1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgIC5yZWNlbnQtYWN0aXZpdHktaGVhZC1jb250ZW50IHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgIH1cbiAgICAgICAgLmxhc3QtdXBkYXRlIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgY29sb3I6ICMxMTExMTE7XG4gICAgICAgIH1cbiAgICB9XG4gICAgJj4ucmVjZW50LWFjdGl2aXR5LWNvbnRlbnQge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAmPi50b29sIHtcbiAgICAgICAgICAgIHdpZHRoOiAyNjBweDtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi50b29sLWljb24ge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcbn1cblxuLnRvb2wtaWNvbi1jbG9zZSB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoLTkwZGVnKTtcbn0iLCIuc2VsZWN0ZWQge1xuICBib3JkZXI6IDFweCBzb2xpZCAjMDBhMWQ4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDBhMWQ4O1xuICBjb2xvcjogI2ZmZjtcbn1cblxuLnJlY2VudC1hY3Rpdml0eSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG4ucmVjZW50LWFjdGl2aXR5ID4gLnJlY2VudC1hY3Rpdml0eS1oZWFkIHtcbiAgcGFkZGluZzogMTBweCAwcHggIWltcG9ydGFudDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuLnJlY2VudC1hY3Rpdml0eSA+IC5yZWNlbnQtYWN0aXZpdHktaGVhZCAucmVjZW50LWFjdGl2aXR5LWhlYWQtY29udGVudCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cbi5yZWNlbnQtYWN0aXZpdHkgPiAucmVjZW50LWFjdGl2aXR5LWhlYWQgLmxhc3QtdXBkYXRlIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgY29sb3I6ICMxMTExMTE7XG59XG4ucmVjZW50LWFjdGl2aXR5ID4gLnJlY2VudC1hY3Rpdml0eS1jb250ZW50IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZmxleC13cmFwOiB3cmFwO1xuICB3aWR0aDogMTAwJTtcbn1cbi5yZWNlbnQtYWN0aXZpdHkgPiAucmVjZW50LWFjdGl2aXR5LWNvbnRlbnQgPiAudG9vbCB7XG4gIHdpZHRoOiAyNjBweDtcbiAgZGlzcGxheTogZmxleDtcbn1cblxuLnRvb2wtaWNvbiB7XG4gIHRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcbn1cblxuLnRvb2wtaWNvbi1jbG9zZSB7XG4gIHRyYW5zZm9ybTogcm90YXRlKC05MGRlZyk7XG59Il19 */");

/***/ }),

/***/ "./src/app/layout/main/activity/activity.component.ts":
/*!************************************************************!*\
  !*** ./src/app/layout/main/activity/activity.component.ts ***!
  \************************************************************/
/*! exports provided: ActivityComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActivityComponent", function() { return ActivityComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ActivityComponent = class ActivityComponent {
    constructor() { }
    ngOnInit() {
        this.activatedTab = 'user';
        this.closeToolSec = false;
    }
    closeTools() {
        this.closeToolSec = !this.closeToolSec;
    }
    changeNav(tab) {
        this.activatedTab = tab;
    }
};
ActivityComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-activity',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./activity.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/main/activity/activity.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./activity.component.scss */ "./src/app/layout/main/activity/activity.component.scss")).default]
    })
], ActivityComponent);



/***/ }),

/***/ "./src/app/layout/main/activity/reports/reports.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/layout/main/activity/reports/reports.component.scss ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".user-container {\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n}\n.user-container .user-container-rows {\n  display: flex;\n  align-items: center;\n  text-align: left;\n  padding-top: 12px;\n  padding-bottom: 12px;\n  background-color: #dfe2ee;\n  border-radius: 4px 4px 0px 0px;\n  border: none;\n}\n.user-container .user-container-rows .user-activity {\n  width: 60%;\n}\n.user-container .user-container-rows .user-updated-on {\n  width: 18%;\n}\n.user-container .user-container-rows .user-updated-by {\n  width: 15%;\n}\n.user-container .filter {\n  width: 100%;\n  background-color: white;\n  display: flex;\n  height: 50px;\n  align-items: center;\n  border: 1px solid #E7E7EC;\n}\n.user-container .filter .filter-activity {\n  width: 60%;\n}\n.user-container .filter .filter-activity .filter-box {\n  width: 25%;\n}\n.user-container .filter .filter-updateon {\n  width: 18%;\n}\n.user-container .filter .filter-updateon .filter-box {\n  width: 60%;\n}\n.user-container .filter .filter-updatedby {\n  width: 15%;\n}\n.user-container .filter .filter-updatedby .filter-box {\n  width: 50%;\n}\n.user-container .user-rows {\n  display: flex;\n  flex-direction: column;\n  background-color: white;\n}\n.user-container .user-rows .user-td {\n  width: 100%;\n  height: 45px;\n  border-radius: 0px;\n  background-color: white;\n}\n.user-container .user-rows .divider {\n  width: 93%;\n}\n.user-container .user-rows .divider hr {\n  border-top: 1px solid #E7E7EC;\n}\n.user-container .page-container {\n  background-color: #dfe2ee !important;\n  border: 1px solid #c1c3c9;\n  border-radius: 0px 0px 4px 4px;\n}\n.user-container .page-container .page-content {\n  display: flex;\n  justify-content: space-between;\n  text-align: left;\n  align-items: center;\n  color: #333333;\n}\n.user-container .page-container .page-content > .pagination-left {\n  width: 30%;\n}\n.user-container .page-container .page-content > .pagination-right {\n  width: 22%;\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-end;\n  align-items: center;\n}\n.user-container .page-container .page-content > .pagination-right .page-details {\n  display: flex;\n  flex-direction: row;\n  justify-content: center !important;\n  align-items: center;\n}\n.user-container .page-container .page-content > .pagination-right .page-details .page-number {\n  color: #333333;\n  border: 1px solid #c1c3c9;\n}\n.user-container .page-container .page-content > .pagination-right .page-details .page-number:focus {\n  outline-style: none;\n  color: #333333;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hcHBsZS9wcm9qZWN0L2RleGNlbnRlci1kYXNoYm9hcmQvc3JjL2FwcC9sYXlvdXQvbWFpbi9hY3Rpdml0eS9yZXBvcnRzL3JlcG9ydHMuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2xheW91dC9tYWluL2FjdGl2aXR5L3JlcG9ydHMvcmVwb3J0cy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFhQTtFQUNJLFdBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7QUNaSjtBRGNJO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLG9CQUFBO0VBQ0EseUJBQUE7RUFDQSw4QkFBQTtFQUNBLFlBQUE7QUNaUjtBRGFRO0VBekJKLFVBQUE7QUNlSjtBRGFRO0VBeEJKLFVBQUE7QUNjSjtBRGFRO0VBdkJKLFVBQUE7QUNhSjtBRGVJO0VBQ0ksV0FBQTtFQUNBLHVCQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0FDYlI7QURjUTtFQTNDSixVQUFBO0FDZ0NKO0FEYVk7RUFDSSxVQUFBO0FDWGhCO0FEY1E7RUE3Q0osVUFBQTtBQ2tDSjtBRGFZO0VBQ0ksVUFBQTtBQ1hoQjtBRGNRO0VBL0NKLFVBQUE7QUNvQ0o7QURhWTtFQUNJLFVBQUE7QUNYaEI7QURnQkk7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtBQ2RSO0FEZVE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsdUJBQUE7QUNiWjtBRGVRO0VBQ0ksVUFBQTtBQ2JaO0FEY1k7RUFDSSw2QkFBQTtBQ1poQjtBRGlCSTtFQUNJLG9DQUFBO0VBQ0EseUJBQUE7RUFDQSw4QkFBQTtBQ2ZSO0FEZ0JRO0VBQ0ksYUFBQTtFQUNBLDhCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7QUNkWjtBRGVZO0VBQ0ksVUFBQTtBQ2JoQjtBRGVZO0VBQ0ksVUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7QUNiaEI7QURjZ0I7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQ0FBQTtFQUNBLG1CQUFBO0FDWnBCO0FEYW9CO0VBQ0ksY0FBQTtFQUNBLHlCQUFBO0FDWHhCO0FEYW9CO0VBQ0ksbUJBQUE7RUFDQSxjQUFBO0FDWHhCIiwiZmlsZSI6InNyYy9hcHAvbGF5b3V0L21haW4vYWN0aXZpdHkvcmVwb3J0cy9yZXBvcnRzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gY29tbW9tIGNvbG91bSB3aWR0aFxuQG1peGluIHRhYmxlLWNvbDEge1xuICAgIHdpZHRoOiA2MCU7XG59XG5cbkBtaXhpbiB0YWJsZS1jb2wyIHtcbiAgICB3aWR0aDogMTglO1xufVxuXG5AbWl4aW4gdGFibGUtY29sMyB7XG4gICAgd2lkdGg6IDE1JTtcbn1cblxuLnVzZXItY29udGFpbmVyIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgLy8gdGFibGUtcm93cyBhbmQgaGVhZGVyXG4gICAgLnVzZXItY29udGFpbmVyLXJvd3Mge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgICBwYWRkaW5nLXRvcDogMTJweDtcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDEycHg7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNkZmUyZWU7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDRweCA0cHggMHB4IDBweDtcbiAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgICAudXNlci1hY3Rpdml0eSB7XG4gICAgICAgICAgICBAaW5jbHVkZSB0YWJsZS1jb2wxO1xuICAgICAgICB9XG4gICAgICAgIC51c2VyLXVwZGF0ZWQtb24ge1xuICAgICAgICAgICAgQGluY2x1ZGUgdGFibGUtY29sMjtcbiAgICAgICAgfVxuICAgICAgICAudXNlci11cGRhdGVkLWJ5IHtcbiAgICAgICAgICAgIEBpbmNsdWRlIHRhYmxlLWNvbDM7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLy8gZmlsdGVyIHJvd1xuICAgIC5maWx0ZXIge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGhlaWdodDogNTBweDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI0U3RTdFQztcbiAgICAgICAgLmZpbHRlci1hY3Rpdml0eSB7XG4gICAgICAgICAgICBAaW5jbHVkZSB0YWJsZS1jb2wxO1xuICAgICAgICAgICAgLmZpbHRlci1ib3gge1xuICAgICAgICAgICAgICAgIHdpZHRoOiAyNSU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLmZpbHRlci11cGRhdGVvbiB7XG4gICAgICAgICAgICBAaW5jbHVkZSB0YWJsZS1jb2wyO1xuICAgICAgICAgICAgLmZpbHRlci1ib3gge1xuICAgICAgICAgICAgICAgIHdpZHRoOiA2MCU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLmZpbHRlci11cGRhdGVkYnkge1xuICAgICAgICAgICAgQGluY2x1ZGUgdGFibGUtY29sMztcbiAgICAgICAgICAgIC5maWx0ZXItYm94IHtcbiAgICAgICAgICAgICAgICB3aWR0aDogNTAlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIC8vICB0YWJsZSBkZXNjcmlwdGlvblxuICAgIC51c2VyLXJvd3Mge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICAgICAgLnVzZXItdGQge1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICBoZWlnaHQ6IDQ1cHg7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAwcHg7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICAgICAgfVxuICAgICAgICAuZGl2aWRlciB7XG4gICAgICAgICAgICB3aWR0aDogOTMlO1xuICAgICAgICAgICAgaHIge1xuICAgICAgICAgICAgICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjRTdFN0VDO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIC8vIHBhZ2luYXRpb25cbiAgICAucGFnZS1jb250YWluZXIge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGZlMmVlICFpbXBvcnRhbnQ7XG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNjMWMzYzk7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDBweCAwcHggNHB4IDRweDtcbiAgICAgICAgLnBhZ2UtY29udGVudCB7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICBjb2xvcjogIzMzMzMzMztcbiAgICAgICAgICAgICY+LnBhZ2luYXRpb24tbGVmdCB7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDMwJTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgICY+LnBhZ2luYXRpb24tcmlnaHQge1xuICAgICAgICAgICAgICAgIHdpZHRoOiAyMiU7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAucGFnZS1kZXRhaWxzIHtcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXIgIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgLnBhZ2UtbnVtYmVyIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjMzMzMzMzO1xuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2MxYzNjOTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAucGFnZS1udW1iZXI6Zm9jdXMge1xuICAgICAgICAgICAgICAgICAgICAgICAgb3V0bGluZS1zdHlsZTogbm9uZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjMzMzMzMzO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufSIsIi51c2VyLWNvbnRhaW5lciB7XG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuLnVzZXItY29udGFpbmVyIC51c2VyLWNvbnRhaW5lci1yb3dzIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgcGFkZGluZy10b3A6IDEycHg7XG4gIHBhZGRpbmctYm90dG9tOiAxMnB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGZlMmVlO1xuICBib3JkZXItcmFkaXVzOiA0cHggNHB4IDBweCAwcHg7XG4gIGJvcmRlcjogbm9uZTtcbn1cbi51c2VyLWNvbnRhaW5lciAudXNlci1jb250YWluZXItcm93cyAudXNlci1hY3Rpdml0eSB7XG4gIHdpZHRoOiA2MCU7XG59XG4udXNlci1jb250YWluZXIgLnVzZXItY29udGFpbmVyLXJvd3MgLnVzZXItdXBkYXRlZC1vbiB7XG4gIHdpZHRoOiAxOCU7XG59XG4udXNlci1jb250YWluZXIgLnVzZXItY29udGFpbmVyLXJvd3MgLnVzZXItdXBkYXRlZC1ieSB7XG4gIHdpZHRoOiAxNSU7XG59XG4udXNlci1jb250YWluZXIgLmZpbHRlciB7XG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgZGlzcGxheTogZmxleDtcbiAgaGVpZ2h0OiA1MHB4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBib3JkZXI6IDFweCBzb2xpZCAjRTdFN0VDO1xufVxuLnVzZXItY29udGFpbmVyIC5maWx0ZXIgLmZpbHRlci1hY3Rpdml0eSB7XG4gIHdpZHRoOiA2MCU7XG59XG4udXNlci1jb250YWluZXIgLmZpbHRlciAuZmlsdGVyLWFjdGl2aXR5IC5maWx0ZXItYm94IHtcbiAgd2lkdGg6IDI1JTtcbn1cbi51c2VyLWNvbnRhaW5lciAuZmlsdGVyIC5maWx0ZXItdXBkYXRlb24ge1xuICB3aWR0aDogMTglO1xufVxuLnVzZXItY29udGFpbmVyIC5maWx0ZXIgLmZpbHRlci11cGRhdGVvbiAuZmlsdGVyLWJveCB7XG4gIHdpZHRoOiA2MCU7XG59XG4udXNlci1jb250YWluZXIgLmZpbHRlciAuZmlsdGVyLXVwZGF0ZWRieSB7XG4gIHdpZHRoOiAxNSU7XG59XG4udXNlci1jb250YWluZXIgLmZpbHRlciAuZmlsdGVyLXVwZGF0ZWRieSAuZmlsdGVyLWJveCB7XG4gIHdpZHRoOiA1MCU7XG59XG4udXNlci1jb250YWluZXIgLnVzZXItcm93cyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xufVxuLnVzZXItY29udGFpbmVyIC51c2VyLXJvd3MgLnVzZXItdGQge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA0NXB4O1xuICBib3JkZXItcmFkaXVzOiAwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xufVxuLnVzZXItY29udGFpbmVyIC51c2VyLXJvd3MgLmRpdmlkZXIge1xuICB3aWR0aDogOTMlO1xufVxuLnVzZXItY29udGFpbmVyIC51c2VyLXJvd3MgLmRpdmlkZXIgaHIge1xuICBib3JkZXItdG9wOiAxcHggc29saWQgI0U3RTdFQztcbn1cbi51c2VyLWNvbnRhaW5lciAucGFnZS1jb250YWluZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGZlMmVlICFpbXBvcnRhbnQ7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNjMWMzYzk7XG4gIGJvcmRlci1yYWRpdXM6IDBweCAwcHggNHB4IDRweDtcbn1cbi51c2VyLWNvbnRhaW5lciAucGFnZS1jb250YWluZXIgLnBhZ2UtY29udGVudCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgY29sb3I6ICMzMzMzMzM7XG59XG4udXNlci1jb250YWluZXIgLnBhZ2UtY29udGFpbmVyIC5wYWdlLWNvbnRlbnQgPiAucGFnaW5hdGlvbi1sZWZ0IHtcbiAgd2lkdGg6IDMwJTtcbn1cbi51c2VyLWNvbnRhaW5lciAucGFnZS1jb250YWluZXIgLnBhZ2UtY29udGVudCA+IC5wYWdpbmF0aW9uLXJpZ2h0IHtcbiAgd2lkdGg6IDIyJTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi51c2VyLWNvbnRhaW5lciAucGFnZS1jb250YWluZXIgLnBhZ2UtY29udGVudCA+IC5wYWdpbmF0aW9uLXJpZ2h0IC5wYWdlLWRldGFpbHMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlciAhaW1wb3J0YW50O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLnVzZXItY29udGFpbmVyIC5wYWdlLWNvbnRhaW5lciAucGFnZS1jb250ZW50ID4gLnBhZ2luYXRpb24tcmlnaHQgLnBhZ2UtZGV0YWlscyAucGFnZS1udW1iZXIge1xuICBjb2xvcjogIzMzMzMzMztcbiAgYm9yZGVyOiAxcHggc29saWQgI2MxYzNjOTtcbn1cbi51c2VyLWNvbnRhaW5lciAucGFnZS1jb250YWluZXIgLnBhZ2UtY29udGVudCA+IC5wYWdpbmF0aW9uLXJpZ2h0IC5wYWdlLWRldGFpbHMgLnBhZ2UtbnVtYmVyOmZvY3VzIHtcbiAgb3V0bGluZS1zdHlsZTogbm9uZTtcbiAgY29sb3I6ICMzMzMzMzM7XG59Il19 */");

/***/ }),

/***/ "./src/app/layout/main/activity/reports/reports.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/layout/main/activity/reports/reports.component.ts ***!
  \*******************************************************************/
/*! exports provided: ReportsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportsComponent", function() { return ReportsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ReportsComponent = class ReportsComponent {
    constructor() { }
    ngOnInit() {
        this.userdata = [
            { id: 1, activity: 'Work flow restart dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt', updatedon: '04/30/20,00:12:22 EDT', updatedby: 'Admin' },
            { id: 2, activity: 'Task stop sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt', updatedon: '04/30/20,00:12:22 EDT', updatedby: 'Admin' },
            { id: 3, activity: 'QAdmin 4 Users Active dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt', updatedon: '04/30/20,00:12:22 EDT', updatedby: 'Admin' },
            { id: 4, activity: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt', updatedon: '04/30/20,00:12:22 EDT', updatedby: 'Admin' },
            { id: 5, activity: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt', updatedon: '04/30/20,00:12:22 EDT', updatedby: 'Admin' },
        ];
    }
};
ReportsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-reports',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./reports.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/main/activity/reports/reports.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./reports.component.scss */ "./src/app/layout/main/activity/reports/reports.component.scss")).default]
    })
], ReportsComponent);



/***/ }),

/***/ "./src/app/layout/main/activity/sessions/sessions.component.scss":
/*!***********************************************************************!*\
  !*** ./src/app/layout/main/activity/sessions/sessions.component.scss ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".sessions-container {\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n}\n.sessions-container .sessions-container-rows {\n  display: flex;\n  align-items: center;\n  text-align: left;\n  padding-top: 12px;\n  padding-bottom: 12px;\n  background-color: #dfe2ee;\n  border-radius: 4px 4px 0px 0px;\n  border: none;\n}\n.sessions-container .sessions-container-rows .sessions-checkbox {\n  width: 2%;\n}\n.sessions-container .sessions-container-rows .session-id {\n  width: 10%;\n}\n.sessions-container .sessions-container-rows .session-title {\n  width: 17%;\n}\n.sessions-container .sessions-container-rows .recipient {\n  width: 13%;\n}\n.sessions-container .sessions-container-rows .sender {\n  width: 6%;\n}\n.sessions-container .sessions-container-rows .created-on {\n  width: 15%;\n}\n.sessions-container .sessions-container-rows .status {\n  width: 9%;\n  display: flex;\n  align-items: center;\n}\n.sessions-container .sessions-container-rows .status .status-indicator {\n  width: 10px;\n  height: 10px;\n  border-radius: 50%;\n  border-style: none;\n}\n.sessions-container .sessions-container-rows .status .Completed {\n  background-color: #a5cf4d;\n}\n.sessions-container .sessions-container-rows .status .Processing {\n  background-color: #35aff8;\n}\n.sessions-container .sessions-container-rows .status .Stopped {\n  background-color: #fd1313;\n}\n.sessions-container .sessions-container-rows .job-type {\n  width: 13%;\n}\n.sessions-container .sessions-container-rows .originated-session {\n  width: 12%;\n}\n.sessions-container .sessions-container-rows:nth-child(even) {\n  background-color: #e7eef4;\n}\n.sessions-container .sessions-container-rows:nth-child(odd) {\n  background-color: white;\n}\n.sessions-container .filter {\n  width: 100%;\n  background-color: white;\n  border: 1px solid #e7e7ec;\n  display: flex;\n  height: 50px;\n  align-items: center;\n}\n.sessions-container .filter .sessions-checkbox {\n  width: 2%;\n}\n.sessions-container .filter .session-id {\n  width: 10%;\n}\n.sessions-container .filter .session-id .filter-box {\n  width: 70%;\n}\n.sessions-container .filter .session-title {\n  width: 17%;\n}\n.sessions-container .filter .session-title .filter-box {\n  width: 80%;\n}\n.sessions-container .filter .recipient {\n  width: 13%;\n}\n.sessions-container .filter .recipient .filter-box {\n  width: 80%;\n}\n.sessions-container .filter .sender {\n  width: 6%;\n}\n.sessions-container .filter .sender .filter-box {\n  width: 85%;\n}\n.sessions-container .filter .created-on {\n  width: 15%;\n}\n.sessions-container .filter .created-on .filter-box {\n  width: 80%;\n}\n.sessions-container .filter .status {\n  width: 9%;\n}\n.sessions-container .filter .status .filter-box {\n  width: 60%;\n}\n.sessions-container .filter .job-type {\n  width: 13%;\n}\n.sessions-container .filter .job-type .filter-box {\n  width: 70%;\n}\n.sessions-container .filter .originated-session {\n  width: 12%;\n}\n.sessions-container .filter .originated-session .filter-box {\n  width: 60%;\n}\n.sessions-container .page-container {\n  background-color: #dfe2ee !important;\n  border: 1px solid #c1c3c9;\n  border-radius: 0px 0px 4px 4px;\n}\n.sessions-container .page-container .page-content {\n  display: flex;\n  justify-content: space-between;\n  text-align: left;\n  align-items: center;\n  color: #333333;\n}\n.sessions-container .page-container .page-content > .pagination-left {\n  width: 30%;\n}\n.sessions-container .page-container .page-content > .pagination-right {\n  width: 22%;\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-end;\n  align-items: center;\n}\n.sessions-container .page-container .page-content > .pagination-right .page-details {\n  display: flex;\n  flex-direction: row;\n  justify-content: center !important;\n  align-items: center;\n}\n.sessions-container .page-container .page-content > .pagination-right .page-details .page-number {\n  color: #333333;\n  border: 1px solid #c1c3c9;\n}\n.sessions-container .page-container .page-content > .pagination-right .page-details .page-number:focus {\n  outline-style: none;\n  color: #333333;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hcHBsZS9wcm9qZWN0L2RleGNlbnRlci1kYXNoYm9hcmQvc3JjL2FwcC9sYXlvdXQvbWFpbi9hY3Rpdml0eS9zZXNzaW9ucy9zZXNzaW9ucy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbGF5b3V0L21haW4vYWN0aXZpdHkvc2Vzc2lvbnMvc2Vzc2lvbnMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBcUNBO0VBQ0ksV0FBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtBQ3BDSjtBRHNDSTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxvQkFBQTtFQUNBLHlCQUFBO0VBQ0EsOEJBQUE7RUFDQSxZQUFBO0FDcENSO0FEcUNRO0VBakRKLFNBQUE7QUNlSjtBRHFDUTtFQWhESixVQUFBO0FDY0o7QURxQ1E7RUEvQ0osVUFBQTtBQ2FKO0FEcUNRO0VBOUNKLFVBQUE7QUNZSjtBRHFDUTtFQTdDSixTQUFBO0FDV0o7QURxQ1E7RUE1Q0osVUFBQTtBQ1VKO0FEcUNRO0VBM0NKLFNBQUE7RUE2Q1EsYUFBQTtFQUNBLG1CQUFBO0FDbkNaO0FEb0NZO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FDbENoQjtBRG9DWTtFQUNJLHlCQUFBO0FDbENoQjtBRG9DWTtFQUNJLHlCQUFBO0FDbENoQjtBRG9DWTtFQUNJLHlCQUFBO0FDbENoQjtBRHFDUTtFQTNESixVQUFBO0FDeUJKO0FEcUNRO0VBMURKLFVBQUE7QUN3Qko7QURzQ0k7RUFDSSx5QkFBQTtBQ3BDUjtBRHNDSTtFQUNJLHVCQUFBO0FDcENSO0FEdUNJO0VBQ0ksV0FBQTtFQUNBLHVCQUFBO0VBQ0EseUJBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0FDckNSO0FEc0NRO0VBNUdKLFNBQUE7QUN5RUo7QURzQ1E7RUEzR0osVUFBQTtBQ3dFSjtBRHFDWTtFQUNJLFVBQUE7QUNuQ2hCO0FEc0NRO0VBN0dKLFVBQUE7QUMwRUo7QURxQ1k7RUFDSSxVQUFBO0FDbkNoQjtBRHNDUTtFQS9HSixVQUFBO0FDNEVKO0FEcUNZO0VBQ0ksVUFBQTtBQ25DaEI7QURzQ1E7RUFqSEosU0FBQTtBQzhFSjtBRHFDWTtFQUNJLFVBQUE7QUNuQ2hCO0FEc0NRO0VBbkhKLFVBQUE7QUNnRko7QURxQ1k7RUFDSSxVQUFBO0FDbkNoQjtBRHNDUTtFQXJISixTQUFBO0FDa0ZKO0FEcUNZO0VBQ0ksVUFBQTtBQ25DaEI7QURzQ1E7RUF2SEosVUFBQTtBQ29GSjtBRHFDWTtFQUNJLFVBQUE7QUNuQ2hCO0FEc0NRO0VBekhKLFVBQUE7QUNzRko7QURxQ1k7RUFDSSxVQUFBO0FDbkNoQjtBRHdDSTtFQUNJLG9DQUFBO0VBQ0EseUJBQUE7RUFDQSw4QkFBQTtBQ3RDUjtBRHVDUTtFQUNJLGFBQUE7RUFDQSw4QkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0FDckNaO0FEc0NZO0VBQ0ksVUFBQTtBQ3BDaEI7QURzQ1k7RUFDSSxVQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtBQ3BDaEI7QURxQ2dCO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0NBQUE7RUFDQSxtQkFBQTtBQ25DcEI7QURvQ29CO0VBQ0ksY0FBQTtFQUNBLHlCQUFBO0FDbEN4QjtBRG9Db0I7RUFDSSxtQkFBQTtFQUNBLGNBQUE7QUNsQ3hCIiwiZmlsZSI6InNyYy9hcHAvbGF5b3V0L21haW4vYWN0aXZpdHkvc2Vzc2lvbnMvc2Vzc2lvbnMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBjb21tb20gY29sb3VtIHdpZHRoXG5AbWl4aW4gdGFibGUtY29sMSB7XG4gICAgd2lkdGg6IDIlO1xufVxuXG5AbWl4aW4gdGFibGUtY29sMiB7XG4gICAgd2lkdGg6IDEwJTtcbn1cblxuQG1peGluIHRhYmxlLWNvbDMge1xuICAgIHdpZHRoOiAxNyU7XG59XG5cbkBtaXhpbiB0YWJsZS1jb2w0IHtcbiAgICB3aWR0aDogMTMlO1xufVxuXG5AbWl4aW4gdGFibGUtY29sNSB7XG4gICAgd2lkdGg6IDYlO1xufVxuXG5AbWl4aW4gdGFibGUtY29sNiB7XG4gICAgd2lkdGg6IDE1JTtcbn1cblxuQG1peGluIHRhYmxlLWNvbDcge1xuICAgIHdpZHRoOiA5JTtcbn1cblxuQG1peGluIHRhYmxlLWNvbDgge1xuICAgIHdpZHRoOiAxMyU7XG59XG5cbkBtaXhpbiB0YWJsZS1jb2w5IHtcbiAgICB3aWR0aDogMTIlO1xufVxuXG4uc2Vzc2lvbnMtY29udGFpbmVyIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgLy8gaGVhZGVyIGFuZCB0YWJsZSBkZXNjcmlwdGlvbnNcbiAgICAuc2Vzc2lvbnMtY29udGFpbmVyLXJvd3Mge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgICBwYWRkaW5nLXRvcDogMTJweDtcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDEycHg7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNkZmUyZWU7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDRweCA0cHggMHB4IDBweDtcbiAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgICAuc2Vzc2lvbnMtY2hlY2tib3gge1xuICAgICAgICAgICAgQGluY2x1ZGUgdGFibGUtY29sMTtcbiAgICAgICAgfVxuICAgICAgICAuc2Vzc2lvbi1pZCB7XG4gICAgICAgICAgICBAaW5jbHVkZSB0YWJsZS1jb2wyO1xuICAgICAgICB9XG4gICAgICAgIC5zZXNzaW9uLXRpdGxlIHtcbiAgICAgICAgICAgIEBpbmNsdWRlIHRhYmxlLWNvbDM7XG4gICAgICAgIH1cbiAgICAgICAgLnJlY2lwaWVudCB7XG4gICAgICAgICAgICBAaW5jbHVkZSB0YWJsZS1jb2w0O1xuICAgICAgICB9XG4gICAgICAgIC5zZW5kZXIge1xuICAgICAgICAgICAgQGluY2x1ZGUgdGFibGUtY29sNTtcbiAgICAgICAgfVxuICAgICAgICAuY3JlYXRlZC1vbiB7XG4gICAgICAgICAgICBAaW5jbHVkZSB0YWJsZS1jb2w2O1xuICAgICAgICB9XG4gICAgICAgIC5zdGF0dXMge1xuICAgICAgICAgICAgQGluY2x1ZGUgdGFibGUtY29sNztcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgLnN0YXR1cy1pbmRpY2F0b3Ige1xuICAgICAgICAgICAgICAgIHdpZHRoOiAxMHB4O1xuICAgICAgICAgICAgICAgIGhlaWdodDogMTBweDtcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgICAgICAgICAgYm9yZGVyLXN0eWxlOiBub25lO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLkNvbXBsZXRlZCB7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2E1Y2Y0ZDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5Qcm9jZXNzaW5nIHtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzVhZmY4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLlN0b3BwZWQge1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZDEzMTM7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLmpvYi10eXBlIHtcbiAgICAgICAgICAgIEBpbmNsdWRlIHRhYmxlLWNvbDg7XG4gICAgICAgIH1cbiAgICAgICAgLm9yaWdpbmF0ZWQtc2Vzc2lvbiB7XG4gICAgICAgICAgICBAaW5jbHVkZSB0YWJsZS1jb2w5O1xuICAgICAgICB9XG4gICAgfVxuICAgIC5zZXNzaW9ucy1jb250YWluZXItcm93czpudGgtY2hpbGQoZXZlbikge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTdlZWY0O1xuICAgIH1cbiAgICAuc2Vzc2lvbnMtY29udGFpbmVyLXJvd3M6bnRoLWNoaWxkKG9kZCkge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICB9XG4gICAgLy8gZmlsdGVyIHJvd1xuICAgIC5maWx0ZXIge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNlN2U3ZWM7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGhlaWdodDogNTBweDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgLnNlc3Npb25zLWNoZWNrYm94IHtcbiAgICAgICAgICAgIEBpbmNsdWRlIHRhYmxlLWNvbDE7XG4gICAgICAgIH1cbiAgICAgICAgLnNlc3Npb24taWQge1xuICAgICAgICAgICAgQGluY2x1ZGUgdGFibGUtY29sMjtcbiAgICAgICAgICAgIC5maWx0ZXItYm94IHtcbiAgICAgICAgICAgICAgICB3aWR0aDogNzAlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC5zZXNzaW9uLXRpdGxlIHtcbiAgICAgICAgICAgIEBpbmNsdWRlIHRhYmxlLWNvbDM7XG4gICAgICAgICAgICAuZmlsdGVyLWJveCB7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDgwJTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAucmVjaXBpZW50IHtcbiAgICAgICAgICAgIEBpbmNsdWRlIHRhYmxlLWNvbDQ7XG4gICAgICAgICAgICAuZmlsdGVyLWJveCB7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDgwJTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAuc2VuZGVyIHtcbiAgICAgICAgICAgIEBpbmNsdWRlIHRhYmxlLWNvbDU7XG4gICAgICAgICAgICAuZmlsdGVyLWJveCB7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDg1JTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAuY3JlYXRlZC1vbiB7XG4gICAgICAgICAgICBAaW5jbHVkZSB0YWJsZS1jb2w2O1xuICAgICAgICAgICAgLmZpbHRlci1ib3gge1xuICAgICAgICAgICAgICAgIHdpZHRoOiA4MCU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLnN0YXR1cyB7XG4gICAgICAgICAgICBAaW5jbHVkZSB0YWJsZS1jb2w3O1xuICAgICAgICAgICAgLmZpbHRlci1ib3gge1xuICAgICAgICAgICAgICAgIHdpZHRoOiA2MCU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLmpvYi10eXBlIHtcbiAgICAgICAgICAgIEBpbmNsdWRlIHRhYmxlLWNvbDg7XG4gICAgICAgICAgICAuZmlsdGVyLWJveCB7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDcwJTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAub3JpZ2luYXRlZC1zZXNzaW9uIHtcbiAgICAgICAgICAgIEBpbmNsdWRlIHRhYmxlLWNvbDk7XG4gICAgICAgICAgICAuZmlsdGVyLWJveCB7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDYwJTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICAvLyBwYWdpbmF0aW9uXG4gICAgLnBhZ2UtY29udGFpbmVyIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2RmZTJlZSAhaW1wb3J0YW50O1xuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjYzFjM2M5O1xuICAgICAgICBib3JkZXItcmFkaXVzOiAwcHggMHB4IDRweCA0cHg7XG4gICAgICAgIC5wYWdlLWNvbnRlbnQge1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgY29sb3I6ICMzMzMzMzM7XG4gICAgICAgICAgICAmPi5wYWdpbmF0aW9uLWxlZnQge1xuICAgICAgICAgICAgICAgIHdpZHRoOiAzMCU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAmPi5wYWdpbmF0aW9uLXJpZ2h0IHtcbiAgICAgICAgICAgICAgICB3aWR0aDogMjIlO1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgLnBhZ2UtZGV0YWlscyB7XG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgICAgIC5wYWdlLW51bWJlciB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzMzMzMzMztcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNjMWMzYzk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLnBhZ2UtbnVtYmVyOmZvY3VzIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG91dGxpbmUtc3R5bGU6IG5vbmU7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzMzMzMzMztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn0iLCIuc2Vzc2lvbnMtY29udGFpbmVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG4uc2Vzc2lvbnMtY29udGFpbmVyIC5zZXNzaW9ucy1jb250YWluZXItcm93cyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIHBhZGRpbmctdG9wOiAxMnB4O1xuICBwYWRkaW5nLWJvdHRvbTogMTJweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2RmZTJlZTtcbiAgYm9yZGVyLXJhZGl1czogNHB4IDRweCAwcHggMHB4O1xuICBib3JkZXI6IG5vbmU7XG59XG4uc2Vzc2lvbnMtY29udGFpbmVyIC5zZXNzaW9ucy1jb250YWluZXItcm93cyAuc2Vzc2lvbnMtY2hlY2tib3gge1xuICB3aWR0aDogMiU7XG59XG4uc2Vzc2lvbnMtY29udGFpbmVyIC5zZXNzaW9ucy1jb250YWluZXItcm93cyAuc2Vzc2lvbi1pZCB7XG4gIHdpZHRoOiAxMCU7XG59XG4uc2Vzc2lvbnMtY29udGFpbmVyIC5zZXNzaW9ucy1jb250YWluZXItcm93cyAuc2Vzc2lvbi10aXRsZSB7XG4gIHdpZHRoOiAxNyU7XG59XG4uc2Vzc2lvbnMtY29udGFpbmVyIC5zZXNzaW9ucy1jb250YWluZXItcm93cyAucmVjaXBpZW50IHtcbiAgd2lkdGg6IDEzJTtcbn1cbi5zZXNzaW9ucy1jb250YWluZXIgLnNlc3Npb25zLWNvbnRhaW5lci1yb3dzIC5zZW5kZXIge1xuICB3aWR0aDogNiU7XG59XG4uc2Vzc2lvbnMtY29udGFpbmVyIC5zZXNzaW9ucy1jb250YWluZXItcm93cyAuY3JlYXRlZC1vbiB7XG4gIHdpZHRoOiAxNSU7XG59XG4uc2Vzc2lvbnMtY29udGFpbmVyIC5zZXNzaW9ucy1jb250YWluZXItcm93cyAuc3RhdHVzIHtcbiAgd2lkdGg6IDklO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLnNlc3Npb25zLWNvbnRhaW5lciAuc2Vzc2lvbnMtY29udGFpbmVyLXJvd3MgLnN0YXR1cyAuc3RhdHVzLWluZGljYXRvciB7XG4gIHdpZHRoOiAxMHB4O1xuICBoZWlnaHQ6IDEwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYm9yZGVyLXN0eWxlOiBub25lO1xufVxuLnNlc3Npb25zLWNvbnRhaW5lciAuc2Vzc2lvbnMtY29udGFpbmVyLXJvd3MgLnN0YXR1cyAuQ29tcGxldGVkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2E1Y2Y0ZDtcbn1cbi5zZXNzaW9ucy1jb250YWluZXIgLnNlc3Npb25zLWNvbnRhaW5lci1yb3dzIC5zdGF0dXMgLlByb2Nlc3Npbmcge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzVhZmY4O1xufVxuLnNlc3Npb25zLWNvbnRhaW5lciAuc2Vzc2lvbnMtY29udGFpbmVyLXJvd3MgLnN0YXR1cyAuU3RvcHBlZCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZDEzMTM7XG59XG4uc2Vzc2lvbnMtY29udGFpbmVyIC5zZXNzaW9ucy1jb250YWluZXItcm93cyAuam9iLXR5cGUge1xuICB3aWR0aDogMTMlO1xufVxuLnNlc3Npb25zLWNvbnRhaW5lciAuc2Vzc2lvbnMtY29udGFpbmVyLXJvd3MgLm9yaWdpbmF0ZWQtc2Vzc2lvbiB7XG4gIHdpZHRoOiAxMiU7XG59XG4uc2Vzc2lvbnMtY29udGFpbmVyIC5zZXNzaW9ucy1jb250YWluZXItcm93czpudGgtY2hpbGQoZXZlbikge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTdlZWY0O1xufVxuLnNlc3Npb25zLWNvbnRhaW5lciAuc2Vzc2lvbnMtY29udGFpbmVyLXJvd3M6bnRoLWNoaWxkKG9kZCkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbn1cbi5zZXNzaW9ucy1jb250YWluZXIgLmZpbHRlciB7XG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgYm9yZGVyOiAxcHggc29saWQgI2U3ZTdlYztcbiAgZGlzcGxheTogZmxleDtcbiAgaGVpZ2h0OiA1MHB4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLnNlc3Npb25zLWNvbnRhaW5lciAuZmlsdGVyIC5zZXNzaW9ucy1jaGVja2JveCB7XG4gIHdpZHRoOiAyJTtcbn1cbi5zZXNzaW9ucy1jb250YWluZXIgLmZpbHRlciAuc2Vzc2lvbi1pZCB7XG4gIHdpZHRoOiAxMCU7XG59XG4uc2Vzc2lvbnMtY29udGFpbmVyIC5maWx0ZXIgLnNlc3Npb24taWQgLmZpbHRlci1ib3gge1xuICB3aWR0aDogNzAlO1xufVxuLnNlc3Npb25zLWNvbnRhaW5lciAuZmlsdGVyIC5zZXNzaW9uLXRpdGxlIHtcbiAgd2lkdGg6IDE3JTtcbn1cbi5zZXNzaW9ucy1jb250YWluZXIgLmZpbHRlciAuc2Vzc2lvbi10aXRsZSAuZmlsdGVyLWJveCB7XG4gIHdpZHRoOiA4MCU7XG59XG4uc2Vzc2lvbnMtY29udGFpbmVyIC5maWx0ZXIgLnJlY2lwaWVudCB7XG4gIHdpZHRoOiAxMyU7XG59XG4uc2Vzc2lvbnMtY29udGFpbmVyIC5maWx0ZXIgLnJlY2lwaWVudCAuZmlsdGVyLWJveCB7XG4gIHdpZHRoOiA4MCU7XG59XG4uc2Vzc2lvbnMtY29udGFpbmVyIC5maWx0ZXIgLnNlbmRlciB7XG4gIHdpZHRoOiA2JTtcbn1cbi5zZXNzaW9ucy1jb250YWluZXIgLmZpbHRlciAuc2VuZGVyIC5maWx0ZXItYm94IHtcbiAgd2lkdGg6IDg1JTtcbn1cbi5zZXNzaW9ucy1jb250YWluZXIgLmZpbHRlciAuY3JlYXRlZC1vbiB7XG4gIHdpZHRoOiAxNSU7XG59XG4uc2Vzc2lvbnMtY29udGFpbmVyIC5maWx0ZXIgLmNyZWF0ZWQtb24gLmZpbHRlci1ib3gge1xuICB3aWR0aDogODAlO1xufVxuLnNlc3Npb25zLWNvbnRhaW5lciAuZmlsdGVyIC5zdGF0dXMge1xuICB3aWR0aDogOSU7XG59XG4uc2Vzc2lvbnMtY29udGFpbmVyIC5maWx0ZXIgLnN0YXR1cyAuZmlsdGVyLWJveCB7XG4gIHdpZHRoOiA2MCU7XG59XG4uc2Vzc2lvbnMtY29udGFpbmVyIC5maWx0ZXIgLmpvYi10eXBlIHtcbiAgd2lkdGg6IDEzJTtcbn1cbi5zZXNzaW9ucy1jb250YWluZXIgLmZpbHRlciAuam9iLXR5cGUgLmZpbHRlci1ib3gge1xuICB3aWR0aDogNzAlO1xufVxuLnNlc3Npb25zLWNvbnRhaW5lciAuZmlsdGVyIC5vcmlnaW5hdGVkLXNlc3Npb24ge1xuICB3aWR0aDogMTIlO1xufVxuLnNlc3Npb25zLWNvbnRhaW5lciAuZmlsdGVyIC5vcmlnaW5hdGVkLXNlc3Npb24gLmZpbHRlci1ib3gge1xuICB3aWR0aDogNjAlO1xufVxuLnNlc3Npb25zLWNvbnRhaW5lciAucGFnZS1jb250YWluZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGZlMmVlICFpbXBvcnRhbnQ7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNjMWMzYzk7XG4gIGJvcmRlci1yYWRpdXM6IDBweCAwcHggNHB4IDRweDtcbn1cbi5zZXNzaW9ucy1jb250YWluZXIgLnBhZ2UtY29udGFpbmVyIC5wYWdlLWNvbnRlbnQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGNvbG9yOiAjMzMzMzMzO1xufVxuLnNlc3Npb25zLWNvbnRhaW5lciAucGFnZS1jb250YWluZXIgLnBhZ2UtY29udGVudCA+IC5wYWdpbmF0aW9uLWxlZnQge1xuICB3aWR0aDogMzAlO1xufVxuLnNlc3Npb25zLWNvbnRhaW5lciAucGFnZS1jb250YWluZXIgLnBhZ2UtY29udGVudCA+IC5wYWdpbmF0aW9uLXJpZ2h0IHtcbiAgd2lkdGg6IDIyJTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5zZXNzaW9ucy1jb250YWluZXIgLnBhZ2UtY29udGFpbmVyIC5wYWdlLWNvbnRlbnQgPiAucGFnaW5hdGlvbi1yaWdodCAucGFnZS1kZXRhaWxzIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXIgIWltcG9ydGFudDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5zZXNzaW9ucy1jb250YWluZXIgLnBhZ2UtY29udGFpbmVyIC5wYWdlLWNvbnRlbnQgPiAucGFnaW5hdGlvbi1yaWdodCAucGFnZS1kZXRhaWxzIC5wYWdlLW51bWJlciB7XG4gIGNvbG9yOiAjMzMzMzMzO1xuICBib3JkZXI6IDFweCBzb2xpZCAjYzFjM2M5O1xufVxuLnNlc3Npb25zLWNvbnRhaW5lciAucGFnZS1jb250YWluZXIgLnBhZ2UtY29udGVudCA+IC5wYWdpbmF0aW9uLXJpZ2h0IC5wYWdlLWRldGFpbHMgLnBhZ2UtbnVtYmVyOmZvY3VzIHtcbiAgb3V0bGluZS1zdHlsZTogbm9uZTtcbiAgY29sb3I6ICMzMzMzMzM7XG59Il19 */");

/***/ }),

/***/ "./src/app/layout/main/activity/sessions/sessions.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/layout/main/activity/sessions/sessions.component.ts ***!
  \*********************************************************************/
/*! exports provided: SessionsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SessionsComponent", function() { return SessionsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let SessionsComponent = class SessionsComponent {
    constructor() { }
    ngOnInit() {
        this.session = [
            {
                id: 1,
                sessionid: 1994923456,
                sessiontitle: 'Session [30-April-2020 00:02:12-0400]-SLW19-after fix',
                recipientcompanies: 'ITI',
                sender: '--',
                createdon: '04/30/20, 00:12:22 EDT',
                status: 'Completed',
                jobtype: 'Translate Model Files',
                originatedsession: 'True'
            },
            { id: 2, sessionid: 1994923456, sessiontitle: 'Session [30-April-2020 00:02:12-0400]-SLW19-after fix', recipientcompanies: 'ITI', sender: '--', createdon: '04/30/20, 00:12:22 EDT', status: 'Completed', jobtype: 'Translate Model Files', originatedsession: 'True' },
            { id: 3, sessionid: 1994923456, sessiontitle: 'Session [30-April-2020 00:02:12-0400]-SLW19-after fix', recipientcompanies: 'ITI', sender: '--', createdon: '04/30/20, 00:12:22 EDT', status: 'Processing', jobtype: 'Translate Model Files', originatedsession: 'True' },
            { id: 4, sessionid: 1994923456, sessiontitle: 'Session [30-April-2020 00:02:12-0400]-SLW19-after fix', recipientcompanies: 'ITI', sender: '--', createdon: '04/30/20, 00:12:22 EDT', status: 'Stopped', jobtype: 'Translate Model Files', originatedsession: 'True' },
            { id: 5, sessionid: 1994923456, sessiontitle: 'Session [30-April-2020 00:02:12-0400]-SLW19-after fix', recipientcompanies: 'ITI', sender: '--', createdon: '04/30/20, 00:12:22 EDT', status: 'Processing', jobtype: 'Translate Model Files', originatedsession: 'True' },
        ];
    }
};
SessionsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-sessions',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./sessions.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/main/activity/sessions/sessions.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./sessions.component.scss */ "./src/app/layout/main/activity/sessions/sessions.component.scss")).default]
    })
], SessionsComponent);



/***/ }),

/***/ "./src/app/layout/main/activity/user/user.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/layout/main/activity/user/user.component.scss ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".user-container {\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n}\n.user-container .user-container-rows {\n  display: flex;\n  align-items: center;\n  text-align: left;\n  padding-top: 12px;\n  padding-bottom: 12px;\n  background-color: #dfe2ee;\n  border-radius: 4px 4px 0px 0px;\n  border: none;\n}\n.user-container .user-container-rows .user-activity {\n  width: 60%;\n}\n.user-container .user-container-rows .user-updated-on {\n  width: 18%;\n}\n.user-container .user-container-rows .user-updated-by {\n  width: 15%;\n}\n.user-container .filter {\n  width: 100%;\n  background-color: white;\n  display: flex;\n  height: 50px;\n  align-items: center;\n  border: 1px solid #E7E7EC;\n}\n.user-container .filter .filter-activity {\n  width: 60%;\n}\n.user-container .filter .filter-activity .filter-box {\n  width: 25%;\n}\n.user-container .filter .filter-updateon {\n  width: 18%;\n}\n.user-container .filter .filter-updateon .filter-box {\n  width: 60%;\n}\n.user-container .filter .filter-updatedby {\n  width: 15%;\n}\n.user-container .filter .filter-updatedby .filter-box {\n  width: 50%;\n}\n.user-container .user-rows {\n  display: flex;\n  flex-direction: column;\n  background-color: white;\n}\n.user-container .user-rows .user-td {\n  width: 100%;\n  height: 45px;\n  border-radius: 0px;\n  background-color: white;\n}\n.user-container .user-rows .divider {\n  width: 93%;\n}\n.user-container .user-rows .divider hr {\n  border-top: 1px solid #E7E7EC;\n}\n.user-container .page-container {\n  background-color: #dfe2ee !important;\n  border: 1px solid #c1c3c9;\n  border-radius: 0px 0px 4px 4px;\n}\n.user-container .page-container .page-content {\n  display: flex;\n  justify-content: space-between;\n  text-align: left;\n  align-items: center;\n  color: #333333;\n}\n.user-container .page-container .page-content > .pagination-left {\n  width: 30%;\n}\n.user-container .page-container .page-content > .pagination-right {\n  width: 22%;\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-end;\n  align-items: center;\n}\n.user-container .page-container .page-content > .pagination-right .page-details {\n  display: flex;\n  flex-direction: row;\n  justify-content: center !important;\n  align-items: center;\n}\n.user-container .page-container .page-content > .pagination-right .page-details .page-number {\n  color: #333333;\n  border: 1px solid #c1c3c9;\n}\n.user-container .page-container .page-content > .pagination-right .page-details .page-number:focus {\n  outline-style: none;\n  color: #333333;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hcHBsZS9wcm9qZWN0L2RleGNlbnRlci1kYXNoYm9hcmQvc3JjL2FwcC9sYXlvdXQvbWFpbi9hY3Rpdml0eS91c2VyL3VzZXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2xheW91dC9tYWluL2FjdGl2aXR5L3VzZXIvdXNlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFhQTtFQUNJLFdBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7QUNaSjtBRGNJO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLG9CQUFBO0VBQ0EseUJBQUE7RUFDQSw4QkFBQTtFQUNBLFlBQUE7QUNaUjtBRGFRO0VBekJKLFVBQUE7QUNlSjtBRGFRO0VBeEJKLFVBQUE7QUNjSjtBRGFRO0VBdkJKLFVBQUE7QUNhSjtBRGVJO0VBQ0ksV0FBQTtFQUNBLHVCQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0FDYlI7QURjUTtFQTNDSixVQUFBO0FDZ0NKO0FEYVk7RUFDSSxVQUFBO0FDWGhCO0FEY1E7RUE3Q0osVUFBQTtBQ2tDSjtBRGFZO0VBQ0ksVUFBQTtBQ1hoQjtBRGNRO0VBL0NKLFVBQUE7QUNvQ0o7QURhWTtFQUNJLFVBQUE7QUNYaEI7QURnQkk7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtBQ2RSO0FEZVE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsdUJBQUE7QUNiWjtBRGVRO0VBQ0ksVUFBQTtBQ2JaO0FEY1k7RUFDSSw2QkFBQTtBQ1poQjtBRGlCSTtFQUNJLG9DQUFBO0VBQ0EseUJBQUE7RUFDQSw4QkFBQTtBQ2ZSO0FEZ0JRO0VBQ0ksYUFBQTtFQUNBLDhCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7QUNkWjtBRGVZO0VBQ0ksVUFBQTtBQ2JoQjtBRGVZO0VBQ0ksVUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7QUNiaEI7QURjZ0I7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQ0FBQTtFQUNBLG1CQUFBO0FDWnBCO0FEYW9CO0VBQ0ksY0FBQTtFQUNBLHlCQUFBO0FDWHhCO0FEYW9CO0VBQ0ksbUJBQUE7RUFDQSxjQUFBO0FDWHhCIiwiZmlsZSI6InNyYy9hcHAvbGF5b3V0L21haW4vYWN0aXZpdHkvdXNlci91c2VyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gY29tbW9tIGNvbG91bSB3aWR0aFxuQG1peGluIHRhYmxlLWNvbDEge1xuICAgIHdpZHRoOiA2MCU7XG59XG5cbkBtaXhpbiB0YWJsZS1jb2wyIHtcbiAgICB3aWR0aDogMTglO1xufVxuXG5AbWl4aW4gdGFibGUtY29sMyB7XG4gICAgd2lkdGg6IDE1JTtcbn1cblxuLnVzZXItY29udGFpbmVyIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgLy8gdGFibGUtcm93cyBhbmQgaGVhZGVyXG4gICAgLnVzZXItY29udGFpbmVyLXJvd3Mge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgICBwYWRkaW5nLXRvcDogMTJweDtcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDEycHg7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNkZmUyZWU7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDRweCA0cHggMHB4IDBweDtcbiAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgICAudXNlci1hY3Rpdml0eSB7XG4gICAgICAgICAgICBAaW5jbHVkZSB0YWJsZS1jb2wxO1xuICAgICAgICB9XG4gICAgICAgIC51c2VyLXVwZGF0ZWQtb24ge1xuICAgICAgICAgICAgQGluY2x1ZGUgdGFibGUtY29sMjtcbiAgICAgICAgfVxuICAgICAgICAudXNlci11cGRhdGVkLWJ5IHtcbiAgICAgICAgICAgIEBpbmNsdWRlIHRhYmxlLWNvbDM7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLy8gZmlsdGVyIHJvd1xuICAgIC5maWx0ZXIge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGhlaWdodDogNTBweDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI0U3RTdFQztcbiAgICAgICAgLmZpbHRlci1hY3Rpdml0eSB7XG4gICAgICAgICAgICBAaW5jbHVkZSB0YWJsZS1jb2wxO1xuICAgICAgICAgICAgLmZpbHRlci1ib3gge1xuICAgICAgICAgICAgICAgIHdpZHRoOiAyNSU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLmZpbHRlci11cGRhdGVvbiB7XG4gICAgICAgICAgICBAaW5jbHVkZSB0YWJsZS1jb2wyO1xuICAgICAgICAgICAgLmZpbHRlci1ib3gge1xuICAgICAgICAgICAgICAgIHdpZHRoOiA2MCU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLmZpbHRlci11cGRhdGVkYnkge1xuICAgICAgICAgICAgQGluY2x1ZGUgdGFibGUtY29sMztcbiAgICAgICAgICAgIC5maWx0ZXItYm94IHtcbiAgICAgICAgICAgICAgICB3aWR0aDogNTAlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIC8vICB0YWJsZSBkZXNjcmlwdGlvblxuICAgIC51c2VyLXJvd3Mge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICAgICAgLnVzZXItdGQge1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICBoZWlnaHQ6IDQ1cHg7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAwcHg7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICAgICAgfVxuICAgICAgICAuZGl2aWRlciB7XG4gICAgICAgICAgICB3aWR0aDogOTMlO1xuICAgICAgICAgICAgaHIge1xuICAgICAgICAgICAgICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjRTdFN0VDO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIC8vIHBhZ2luYXRpb25cbiAgICAucGFnZS1jb250YWluZXIge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGZlMmVlICFpbXBvcnRhbnQ7XG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNjMWMzYzk7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDBweCAwcHggNHB4IDRweDtcbiAgICAgICAgLnBhZ2UtY29udGVudCB7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICBjb2xvcjogIzMzMzMzMztcbiAgICAgICAgICAgICY+LnBhZ2luYXRpb24tbGVmdCB7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDMwJTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgICY+LnBhZ2luYXRpb24tcmlnaHQge1xuICAgICAgICAgICAgICAgIHdpZHRoOiAyMiU7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAucGFnZS1kZXRhaWxzIHtcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXIgIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgLnBhZ2UtbnVtYmVyIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjMzMzMzMzO1xuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2MxYzNjOTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAucGFnZS1udW1iZXI6Zm9jdXMge1xuICAgICAgICAgICAgICAgICAgICAgICAgb3V0bGluZS1zdHlsZTogbm9uZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjMzMzMzMzO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufSIsIi51c2VyLWNvbnRhaW5lciB7XG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuLnVzZXItY29udGFpbmVyIC51c2VyLWNvbnRhaW5lci1yb3dzIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgcGFkZGluZy10b3A6IDEycHg7XG4gIHBhZGRpbmctYm90dG9tOiAxMnB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGZlMmVlO1xuICBib3JkZXItcmFkaXVzOiA0cHggNHB4IDBweCAwcHg7XG4gIGJvcmRlcjogbm9uZTtcbn1cbi51c2VyLWNvbnRhaW5lciAudXNlci1jb250YWluZXItcm93cyAudXNlci1hY3Rpdml0eSB7XG4gIHdpZHRoOiA2MCU7XG59XG4udXNlci1jb250YWluZXIgLnVzZXItY29udGFpbmVyLXJvd3MgLnVzZXItdXBkYXRlZC1vbiB7XG4gIHdpZHRoOiAxOCU7XG59XG4udXNlci1jb250YWluZXIgLnVzZXItY29udGFpbmVyLXJvd3MgLnVzZXItdXBkYXRlZC1ieSB7XG4gIHdpZHRoOiAxNSU7XG59XG4udXNlci1jb250YWluZXIgLmZpbHRlciB7XG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgZGlzcGxheTogZmxleDtcbiAgaGVpZ2h0OiA1MHB4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBib3JkZXI6IDFweCBzb2xpZCAjRTdFN0VDO1xufVxuLnVzZXItY29udGFpbmVyIC5maWx0ZXIgLmZpbHRlci1hY3Rpdml0eSB7XG4gIHdpZHRoOiA2MCU7XG59XG4udXNlci1jb250YWluZXIgLmZpbHRlciAuZmlsdGVyLWFjdGl2aXR5IC5maWx0ZXItYm94IHtcbiAgd2lkdGg6IDI1JTtcbn1cbi51c2VyLWNvbnRhaW5lciAuZmlsdGVyIC5maWx0ZXItdXBkYXRlb24ge1xuICB3aWR0aDogMTglO1xufVxuLnVzZXItY29udGFpbmVyIC5maWx0ZXIgLmZpbHRlci11cGRhdGVvbiAuZmlsdGVyLWJveCB7XG4gIHdpZHRoOiA2MCU7XG59XG4udXNlci1jb250YWluZXIgLmZpbHRlciAuZmlsdGVyLXVwZGF0ZWRieSB7XG4gIHdpZHRoOiAxNSU7XG59XG4udXNlci1jb250YWluZXIgLmZpbHRlciAuZmlsdGVyLXVwZGF0ZWRieSAuZmlsdGVyLWJveCB7XG4gIHdpZHRoOiA1MCU7XG59XG4udXNlci1jb250YWluZXIgLnVzZXItcm93cyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xufVxuLnVzZXItY29udGFpbmVyIC51c2VyLXJvd3MgLnVzZXItdGQge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA0NXB4O1xuICBib3JkZXItcmFkaXVzOiAwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xufVxuLnVzZXItY29udGFpbmVyIC51c2VyLXJvd3MgLmRpdmlkZXIge1xuICB3aWR0aDogOTMlO1xufVxuLnVzZXItY29udGFpbmVyIC51c2VyLXJvd3MgLmRpdmlkZXIgaHIge1xuICBib3JkZXItdG9wOiAxcHggc29saWQgI0U3RTdFQztcbn1cbi51c2VyLWNvbnRhaW5lciAucGFnZS1jb250YWluZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGZlMmVlICFpbXBvcnRhbnQ7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNjMWMzYzk7XG4gIGJvcmRlci1yYWRpdXM6IDBweCAwcHggNHB4IDRweDtcbn1cbi51c2VyLWNvbnRhaW5lciAucGFnZS1jb250YWluZXIgLnBhZ2UtY29udGVudCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgY29sb3I6ICMzMzMzMzM7XG59XG4udXNlci1jb250YWluZXIgLnBhZ2UtY29udGFpbmVyIC5wYWdlLWNvbnRlbnQgPiAucGFnaW5hdGlvbi1sZWZ0IHtcbiAgd2lkdGg6IDMwJTtcbn1cbi51c2VyLWNvbnRhaW5lciAucGFnZS1jb250YWluZXIgLnBhZ2UtY29udGVudCA+IC5wYWdpbmF0aW9uLXJpZ2h0IHtcbiAgd2lkdGg6IDIyJTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi51c2VyLWNvbnRhaW5lciAucGFnZS1jb250YWluZXIgLnBhZ2UtY29udGVudCA+IC5wYWdpbmF0aW9uLXJpZ2h0IC5wYWdlLWRldGFpbHMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlciAhaW1wb3J0YW50O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLnVzZXItY29udGFpbmVyIC5wYWdlLWNvbnRhaW5lciAucGFnZS1jb250ZW50ID4gLnBhZ2luYXRpb24tcmlnaHQgLnBhZ2UtZGV0YWlscyAucGFnZS1udW1iZXIge1xuICBjb2xvcjogIzMzMzMzMztcbiAgYm9yZGVyOiAxcHggc29saWQgI2MxYzNjOTtcbn1cbi51c2VyLWNvbnRhaW5lciAucGFnZS1jb250YWluZXIgLnBhZ2UtY29udGVudCA+IC5wYWdpbmF0aW9uLXJpZ2h0IC5wYWdlLWRldGFpbHMgLnBhZ2UtbnVtYmVyOmZvY3VzIHtcbiAgb3V0bGluZS1zdHlsZTogbm9uZTtcbiAgY29sb3I6ICMzMzMzMzM7XG59Il19 */");

/***/ }),

/***/ "./src/app/layout/main/activity/user/user.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/layout/main/activity/user/user.component.ts ***!
  \*************************************************************/
/*! exports provided: UserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserComponent", function() { return UserComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let UserComponent = class UserComponent {
    constructor() { }
    ngOnInit() {
        this.userdata = [
            { id: 1, activity: 'Work flow restart dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt', updatedon: '04/30/20,00:12:22 EDT', updatedby: 'Admin' },
            { id: 2, activity: 'Task stop sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt', updatedon: '04/30/20,00:12:22 EDT', updatedby: 'Admin' },
            { id: 3, activity: 'QAdmin 4 Users Active dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt', updatedon: '04/30/20,00:12:22 EDT', updatedby: 'Admin' },
            { id: 4, activity: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt', updatedon: '04/30/20,00:12:22 EDT', updatedby: 'Admin' },
            { id: 5, activity: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt', updatedon: '04/30/20,00:12:22 EDT', updatedby: 'Admin' },
        ];
    }
};
UserComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-user',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./user.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/main/activity/user/user.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./user.component.scss */ "./src/app/layout/main/activity/user/user.component.scss")).default]
    })
], UserComponent);



/***/ }),

/***/ "./src/app/layout/main/main.component.scss":
/*!*************************************************!*\
  !*** ./src/app/layout/main/main.component.scss ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xheW91dC9tYWluL21haW4uY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/layout/main/main.component.ts":
/*!***********************************************!*\
  !*** ./src/app/layout/main/main.component.ts ***!
  \***********************************************/
/*! exports provided: MainComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainComponent", function() { return MainComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let MainComponent = class MainComponent {
    constructor() { }
    ngOnInit() {
    }
};
MainComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-main',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./main.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/main/main.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./main.component.scss */ "./src/app/layout/main/main.component.scss")).default]
    })
], MainComponent);



/***/ }),

/***/ "./src/app/layout/main/matrices/dynamic-session/dynamic-session.component.scss":
/*!*************************************************************************************!*\
  !*** ./src/app/layout/main/matrices/dynamic-session/dynamic-session.component.scss ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".dynamic-session-container {\n  width: 100%;\n}\n.dynamic-session-container .summary-graph {\n  box-shadow: 0px 2px 4px #00000029;\n}\n.dynamic-session-container .summary-graph .graph-header {\n  height: 40px;\n}\n.dynamic-session-container .summary-graph .graph-box {\n  height: 630px;\n  background-color: white;\n  border-radius: 0px 0px 3px 3px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hcHBsZS9wcm9qZWN0L2RleGNlbnRlci1kYXNoYm9hcmQvc3JjL2FwcC9sYXlvdXQvbWFpbi9tYXRyaWNlcy9keW5hbWljLXNlc3Npb24vZHluYW1pYy1zZXNzaW9uLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9sYXlvdXQvbWFpbi9tYXRyaWNlcy9keW5hbWljLXNlc3Npb24vZHluYW1pYy1zZXNzaW9uLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksV0FBQTtBQ0NKO0FEQUk7RUFDSSxpQ0FBQTtBQ0VSO0FERFE7RUFDSSxZQUFBO0FDR1o7QUREUTtFQUNJLGFBQUE7RUFDQSx1QkFBQTtFQUNBLDhCQUFBO0FDR1oiLCJmaWxlIjoic3JjL2FwcC9sYXlvdXQvbWFpbi9tYXRyaWNlcy9keW5hbWljLXNlc3Npb24vZHluYW1pYy1zZXNzaW9uLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmR5bmFtaWMtc2Vzc2lvbi1jb250YWluZXIge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIC5zdW1tYXJ5LWdyYXBoIHtcbiAgICAgICAgYm94LXNoYWRvdzogMHB4IDJweCA0cHggIzAwMDAwMDI5O1xuICAgICAgICAuZ3JhcGgtaGVhZGVyIHtcbiAgICAgICAgICAgIGhlaWdodDogNDBweDtcbiAgICAgICAgfVxuICAgICAgICAuZ3JhcGgtYm94IHtcbiAgICAgICAgICAgIGhlaWdodDogNjMwcHg7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDBweCAwcHggM3B4IDNweDtcbiAgICAgICAgfVxuICAgIH1cbn0iLCIuZHluYW1pYy1zZXNzaW9uLWNvbnRhaW5lciB7XG4gIHdpZHRoOiAxMDAlO1xufVxuLmR5bmFtaWMtc2Vzc2lvbi1jb250YWluZXIgLnN1bW1hcnktZ3JhcGgge1xuICBib3gtc2hhZG93OiAwcHggMnB4IDRweCAjMDAwMDAwMjk7XG59XG4uZHluYW1pYy1zZXNzaW9uLWNvbnRhaW5lciAuc3VtbWFyeS1ncmFwaCAuZ3JhcGgtaGVhZGVyIHtcbiAgaGVpZ2h0OiA0MHB4O1xufVxuLmR5bmFtaWMtc2Vzc2lvbi1jb250YWluZXIgLnN1bW1hcnktZ3JhcGggLmdyYXBoLWJveCB7XG4gIGhlaWdodDogNjMwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBib3JkZXItcmFkaXVzOiAwcHggMHB4IDNweCAzcHg7XG59Il19 */");

/***/ }),

/***/ "./src/app/layout/main/matrices/dynamic-session/dynamic-session.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/layout/main/matrices/dynamic-session/dynamic-session.component.ts ***!
  \***********************************************************************************/
/*! exports provided: DynamicSessionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DynamicSessionComponent", function() { return DynamicSessionComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let DynamicSessionComponent = class DynamicSessionComponent {
    constructor() { }
    ngOnInit() {
    }
};
DynamicSessionComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-dynamic-session',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./dynamic-session.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/main/matrices/dynamic-session/dynamic-session.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./dynamic-session.component.scss */ "./src/app/layout/main/matrices/dynamic-session/dynamic-session.component.scss")).default]
    })
], DynamicSessionComponent);



/***/ }),

/***/ "./src/app/layout/main/matrices/matrices.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/layout/main/matrices/matrices.component.scss ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".selected {\n  border: 1px solid #00a1d8;\n  background-color: #00a1d8;\n  color: #fff;\n}\n\n.metrics {\n  display: flex;\n  flex-direction: column;\n}\n\n.metrics > .metrics-head {\n  padding: 10px 0px !important;\n  display: flex;\n  align-items: center;\n}\n\n.metrics > .metrics-content {\n  display: flex;\n  display: flex;\n  flex-direction: column;\n  flex-wrap: wrap;\n  width: 100%;\n}\n\n.metrics > .metrics-content .app-summary {\n  width: 100%;\n}\n\n.metrics > .metrics-content > .tool {\n  width: 260px;\n  display: flex;\n}\n\n.tool-icon {\n  transform: rotate(90deg);\n}\n\n.tool-icon-close {\n  transform: rotate(-90deg);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hcHBsZS9wcm9qZWN0L2RleGNlbnRlci1kYXNoYm9hcmQvc3JjL2FwcC9sYXlvdXQvbWFpbi9tYXRyaWNlcy9tYXRyaWNlcy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbGF5b3V0L21haW4vbWF0cmljZXMvbWF0cmljZXMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSx5QkFBQTtFQUNBLHlCQUFBO0VBQ0EsV0FBQTtBQ0NKOztBREVBO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0FDQ0o7O0FEQUk7RUFDSSw0QkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtBQ0VSOztBREFJO0VBQ0ksYUFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLGVBQUE7RUFFQSxXQUFBO0FDQ1I7O0FEQVE7RUFDSSxXQUFBO0FDRVo7O0FEQVE7RUFDSSxZQUFBO0VBQ0EsYUFBQTtBQ0VaOztBREdBO0VBQ0ksd0JBQUE7QUNBSjs7QURHQTtFQUNJLHlCQUFBO0FDQUoiLCJmaWxlIjoic3JjL2FwcC9sYXlvdXQvbWFpbi9tYXRyaWNlcy9tYXRyaWNlcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zZWxlY3RlZCB7XG4gICAgYm9yZGVyOiAxcHggc29saWQgIzAwYTFkODtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDBhMWQ4O1xuICAgIGNvbG9yOiAjZmZmO1xufVxuXG4ubWV0cmljcyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICY+Lm1ldHJpY3MtaGVhZCB7XG4gICAgICAgIHBhZGRpbmc6IDEwcHggMHB4ICFpbXBvcnRhbnQ7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgfVxuICAgICY+Lm1ldHJpY3MtY29udGVudCB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICAgICAgLy8gYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIC5hcHAtc3VtbWFyeSB7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgfVxuICAgICAgICAmPi50b29sIHtcbiAgICAgICAgICAgIHdpZHRoOiAyNjBweDtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi50b29sLWljb24ge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcbn1cblxuLnRvb2wtaWNvbi1jbG9zZSB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoLTkwZGVnKTtcbn0iLCIuc2VsZWN0ZWQge1xuICBib3JkZXI6IDFweCBzb2xpZCAjMDBhMWQ4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDBhMWQ4O1xuICBjb2xvcjogI2ZmZjtcbn1cblxuLm1ldHJpY3Mge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuLm1ldHJpY3MgPiAubWV0cmljcy1oZWFkIHtcbiAgcGFkZGluZzogMTBweCAwcHggIWltcG9ydGFudDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5tZXRyaWNzID4gLm1ldHJpY3MtY29udGVudCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAgd2lkdGg6IDEwMCU7XG59XG4ubWV0cmljcyA+IC5tZXRyaWNzLWNvbnRlbnQgLmFwcC1zdW1tYXJ5IHtcbiAgd2lkdGg6IDEwMCU7XG59XG4ubWV0cmljcyA+IC5tZXRyaWNzLWNvbnRlbnQgPiAudG9vbCB7XG4gIHdpZHRoOiAyNjBweDtcbiAgZGlzcGxheTogZmxleDtcbn1cblxuLnRvb2wtaWNvbiB7XG4gIHRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcbn1cblxuLnRvb2wtaWNvbi1jbG9zZSB7XG4gIHRyYW5zZm9ybTogcm90YXRlKC05MGRlZyk7XG59Il19 */");

/***/ }),

/***/ "./src/app/layout/main/matrices/matrices.component.ts":
/*!************************************************************!*\
  !*** ./src/app/layout/main/matrices/matrices.component.ts ***!
  \************************************************************/
/*! exports provided: MatricesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatricesComponent", function() { return MatricesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let MatricesComponent = class MatricesComponent {
    constructor() {
    }
    ngOnInit() {
        this.activatedTab = 'summary';
        this.closeToolSec = false;
    }
    closeTools() {
        this.closeToolSec = !this.closeToolSec;
    }
    changeNav(tab) {
        this.activatedTab = tab;
    }
};
MatricesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-matrices',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./matrices.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/main/matrices/matrices.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./matrices.component.scss */ "./src/app/layout/main/matrices/matrices.component.scss")).default]
    })
], MatricesComponent);



/***/ }),

/***/ "./src/app/layout/main/matrices/mtbf/mtbf.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/layout/main/matrices/mtbf/mtbf.component.scss ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".mtbf-container {\n  width: 100%;\n}\n.mtbf-container .mtbf-graph {\n  box-shadow: 0px 2px 4px #00000029;\n}\n.mtbf-container .mtbf-graph .graph-header {\n  height: 40px;\n  display: flex;\n  align-items: center;\n}\n.mtbf-container .mtbf-graph .graph-header .date-range {\n  display: flex;\n  align-items: center;\n}\n.mtbf-container .mtbf-graph .graph-header .date-range input {\n  width: 130px;\n  border: 1px solid #CCCCCC;\n}\n.mtbf-container .mtbf-graph .graph-header .frequency {\n  display: flex;\n  align-items: center;\n}\n.mtbf-container .mtbf-graph .graph-header .frequency .freq-select {\n  width: 90px;\n  border: 1px solid #cccccc;\n  height: 26px;\n}\n.mtbf-container .mtbf-graph .graph-box {\n  height: 630px;\n  background-color: white;\n  border-radius: 0px 0px 3px 3px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hcHBsZS9wcm9qZWN0L2RleGNlbnRlci1kYXNoYm9hcmQvc3JjL2FwcC9sYXlvdXQvbWFpbi9tYXRyaWNlcy9tdGJmL210YmYuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2xheW91dC9tYWluL21hdHJpY2VzL210YmYvbXRiZi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQUE7QUNDSjtBREFJO0VBQ0ksaUNBQUE7QUNFUjtBRERRO0VBQ0ksWUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtBQ0daO0FERlk7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7QUNJaEI7QURIZ0I7RUFDSSxZQUFBO0VBQ0EseUJBQUE7QUNLcEI7QURPWTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtBQ0xoQjtBRE1nQjtFQUNJLFdBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7QUNKcEI7QURRUTtFQUNJLGFBQUE7RUFDQSx1QkFBQTtFQUNBLDhCQUFBO0FDTloiLCJmaWxlIjoic3JjL2FwcC9sYXlvdXQvbWFpbi9tYXRyaWNlcy9tdGJmL210YmYuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubXRiZi1jb250YWluZXIge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIC5tdGJmLWdyYXBoIHtcbiAgICAgICAgYm94LXNoYWRvdzogMHB4IDJweCA0cHggIzAwMDAwMDI5O1xuICAgICAgICAuZ3JhcGgtaGVhZGVyIHtcbiAgICAgICAgICAgIGhlaWdodDogNDBweDtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgLmRhdGUtcmFuZ2Uge1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICBpbnB1dCB7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMzBweDtcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI0NDQ0NDQztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8gaW5wdXRbdHlwZT1cImRhdGVcIl06Oi13ZWJraXQtY2FsZW5kYXItcGlja2VyLWluZGljYXRvciB7XG4gICAgICAgICAgICAgICAgLy8gICAgIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDApO1xuICAgICAgICAgICAgICAgIC8vICAgICBvcGFjaXR5OiAxO1xuICAgICAgICAgICAgICAgIC8vICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgICAgICAvLyAgICAgYmFja2dyb3VuZDogdXJsKGh0dHBzOi8vbXl3aWxkYWxiZXJ0YS5jYS9pbWFnZXMvR0ZYLU1XQS1QYXJrcy1SZXNlcnZhdGlvbnMucG5nKSBuby1yZXBlYXQ7XG4gICAgICAgICAgICAgICAgLy8gICAgIHdpZHRoOiAyMHB4O1xuICAgICAgICAgICAgICAgIC8vICAgICBoZWlnaHQ6IDIwcHg7XG4gICAgICAgICAgICAgICAgLy8gICAgIGJvcmRlci13aWR0aDogdGhpbjtcbiAgICAgICAgICAgICAgICAvLyB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuZnJlcXVlbmN5IHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgLmZyZXEtc2VsZWN0IHtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDkwcHg7XG4gICAgICAgICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2NjY2M7XG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMjZweDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLmdyYXBoLWJveCB7XG4gICAgICAgICAgICBoZWlnaHQ6IDYzMHB4O1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAwcHggMHB4IDNweCAzcHg7XG4gICAgICAgIH1cbiAgICB9XG59IiwiLm10YmYtY29udGFpbmVyIHtcbiAgd2lkdGg6IDEwMCU7XG59XG4ubXRiZi1jb250YWluZXIgLm10YmYtZ3JhcGgge1xuICBib3gtc2hhZG93OiAwcHggMnB4IDRweCAjMDAwMDAwMjk7XG59XG4ubXRiZi1jb250YWluZXIgLm10YmYtZ3JhcGggLmdyYXBoLWhlYWRlciB7XG4gIGhlaWdodDogNDBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5tdGJmLWNvbnRhaW5lciAubXRiZi1ncmFwaCAuZ3JhcGgtaGVhZGVyIC5kYXRlLXJhbmdlIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5tdGJmLWNvbnRhaW5lciAubXRiZi1ncmFwaCAuZ3JhcGgtaGVhZGVyIC5kYXRlLXJhbmdlIGlucHV0IHtcbiAgd2lkdGg6IDEzMHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjQ0NDQ0NDO1xufVxuLm10YmYtY29udGFpbmVyIC5tdGJmLWdyYXBoIC5ncmFwaC1oZWFkZXIgLmZyZXF1ZW5jeSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4ubXRiZi1jb250YWluZXIgLm10YmYtZ3JhcGggLmdyYXBoLWhlYWRlciAuZnJlcXVlbmN5IC5mcmVxLXNlbGVjdCB7XG4gIHdpZHRoOiA5MHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjY2NjY2NjO1xuICBoZWlnaHQ6IDI2cHg7XG59XG4ubXRiZi1jb250YWluZXIgLm10YmYtZ3JhcGggLmdyYXBoLWJveCB7XG4gIGhlaWdodDogNjMwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBib3JkZXItcmFkaXVzOiAwcHggMHB4IDNweCAzcHg7XG59Il19 */");

/***/ }),

/***/ "./src/app/layout/main/matrices/mtbf/mtbf.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/layout/main/matrices/mtbf/mtbf.component.ts ***!
  \*************************************************************/
/*! exports provided: MtbfComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MtbfComponent", function() { return MtbfComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let MtbfComponent = class MtbfComponent {
    constructor() { }
    ngOnInit() {
    }
};
MtbfComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-mtbf',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./mtbf.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/main/matrices/mtbf/mtbf.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./mtbf.component.scss */ "./src/app/layout/main/matrices/mtbf/mtbf.component.scss")).default]
    })
], MtbfComponent);



/***/ }),

/***/ "./src/app/layout/main/matrices/summary/summary.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/layout/main/matrices/summary/summary.component.scss ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".usage-summary-container {\n  display: flex;\n  width: 100%;\n  flex-flow: wrap;\n  row-gap: 20px;\n}\n.usage-summary-container .summary-graph,\n.usage-summary-container .sessions-graph,\n.usage-summary-container .exchanged-graph,\n.usage-summary-container .users-graph {\n  width: 49%;\n  box-shadow: 0px 2px 4px #00000029;\n}\n.usage-summary-container .summary-graph .graph-header,\n.usage-summary-container .sessions-graph .graph-header,\n.usage-summary-container .exchanged-graph .graph-header,\n.usage-summary-container .users-graph .graph-header {\n  height: 40px;\n  display: flex;\n  align-items: center;\n}\n.usage-summary-container .summary-graph .graph-header .date-range,\n.usage-summary-container .sessions-graph .graph-header .date-range,\n.usage-summary-container .exchanged-graph .graph-header .date-range,\n.usage-summary-container .users-graph .graph-header .date-range {\n  display: flex;\n  align-items: center;\n}\n.usage-summary-container .summary-graph .graph-header .date-range input,\n.usage-summary-container .sessions-graph .graph-header .date-range input,\n.usage-summary-container .exchanged-graph .graph-header .date-range input,\n.usage-summary-container .users-graph .graph-header .date-range input {\n  width: 130px;\n  border: 1px solid #cccccc;\n}\n.usage-summary-container .summary-graph .graph-header .frequency,\n.usage-summary-container .sessions-graph .graph-header .frequency,\n.usage-summary-container .exchanged-graph .graph-header .frequency,\n.usage-summary-container .users-graph .graph-header .frequency {\n  display: flex;\n  align-items: center;\n}\n.usage-summary-container .summary-graph .graph-header .frequency .freq-select,\n.usage-summary-container .sessions-graph .graph-header .frequency .freq-select,\n.usage-summary-container .exchanged-graph .graph-header .frequency .freq-select,\n.usage-summary-container .users-graph .graph-header .frequency .freq-select {\n  width: 90px;\n  border: 1px solid #cccccc;\n  height: 26px;\n}\n.usage-summary-container .summary-graph .graph-box,\n.usage-summary-container .sessions-graph .graph-box,\n.usage-summary-container .exchanged-graph .graph-box,\n.usage-summary-container .users-graph .graph-box {\n  width: 100%;\n  height: 320px;\n  background-color: white;\n  border-radius: 0px 0px 3px 3px;\n}\n.usage-summary-container .summary-graph .graph-box .usage-summary-data,\n.usage-summary-container .sessions-graph .graph-box .usage-summary-data,\n.usage-summary-container .exchanged-graph .graph-box .usage-summary-data,\n.usage-summary-container .users-graph .graph-box .usage-summary-data {\n  display: flex;\n  flex-direction: column;\n}\n.usage-summary-container .summary-graph .graph-box .usage-summary-data .summary-details,\n.usage-summary-container .sessions-graph .graph-box .usage-summary-data .summary-details,\n.usage-summary-container .exchanged-graph .graph-box .usage-summary-data .summary-details,\n.usage-summary-container .users-graph .graph-box .usage-summary-data .summary-details {\n  display: flex;\n  margin-right: 250px;\n  justify-content: space-between;\n}\n.usage-summary-container .summary-graph .graph-box .usage-summary-data .divider,\n.usage-summary-container .sessions-graph .graph-box .usage-summary-data .divider,\n.usage-summary-container .exchanged-graph .graph-box .usage-summary-data .divider,\n.usage-summary-container .users-graph .graph-box .usage-summary-data .divider {\n  width: 85%;\n}\n.usage-summary-container .summary-graph .graph-box .usage-summary-data .divider hr,\n.usage-summary-container .sessions-graph .graph-box .usage-summary-data .divider hr,\n.usage-summary-container .exchanged-graph .graph-box .usage-summary-data .divider hr,\n.usage-summary-container .users-graph .graph-box .usage-summary-data .divider hr {\n  border-top: 1px solid #e7e7ec;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hcHBsZS9wcm9qZWN0L2RleGNlbnRlci1kYXNoYm9hcmQvc3JjL2FwcC9sYXlvdXQvbWFpbi9tYXRyaWNlcy9zdW1tYXJ5L3N1bW1hcnkuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2xheW91dC9tYWluL21hdHJpY2VzL3N1bW1hcnkvc3VtbWFyeS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7QUNDSjtBREFJOzs7O0VBSUksVUFBQTtFQUNBLGlDQUFBO0FDRVI7QUREUTs7OztFQUNJLFlBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7QUNNWjtBRExZOzs7O0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0FDVWhCO0FEVGdCOzs7O0VBQ0ksWUFBQTtFQUNBLHlCQUFBO0FDY3BCO0FEWFk7Ozs7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7QUNnQmhCO0FEZmdCOzs7O0VBQ0ksV0FBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtBQ29CcEI7QURoQlE7Ozs7RUFDSSxXQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsOEJBQUE7QUNxQlo7QURwQlk7Ozs7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7QUN5QmhCO0FEeEJnQjs7OztFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0FDNkJwQjtBRDNCZ0I7Ozs7RUFDSSxVQUFBO0FDZ0NwQjtBRC9Cb0I7Ozs7RUFDSSw2QkFBQTtBQ29DeEIiLCJmaWxlIjoic3JjL2FwcC9sYXlvdXQvbWFpbi9tYXRyaWNlcy9zdW1tYXJ5L3N1bW1hcnkuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudXNhZ2Utc3VtbWFyeS1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgZmxleC1mbG93OiB3cmFwO1xuICAgIHJvdy1nYXA6IDIwcHg7XG4gICAgLnN1bW1hcnktZ3JhcGgsXG4gICAgLnNlc3Npb25zLWdyYXBoLFxuICAgIC5leGNoYW5nZWQtZ3JhcGgsXG4gICAgLnVzZXJzLWdyYXBoIHtcbiAgICAgICAgd2lkdGg6IDQ5JTtcbiAgICAgICAgYm94LXNoYWRvdzogMHB4IDJweCA0cHggIzAwMDAwMDI5O1xuICAgICAgICAuZ3JhcGgtaGVhZGVyIHtcbiAgICAgICAgICAgIGhlaWdodDogNDBweDtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgLmRhdGUtcmFuZ2Uge1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICBpbnB1dCB7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMzBweDtcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2NjY2NjYztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuZnJlcXVlbmN5IHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgLmZyZXEtc2VsZWN0IHtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDkwcHg7XG4gICAgICAgICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2NjY2M7XG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMjZweDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLmdyYXBoLWJveCB7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIGhlaWdodDogMzIwcHg7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDBweCAwcHggM3B4IDNweDtcbiAgICAgICAgICAgIC51c2FnZS1zdW1tYXJ5LWRhdGEge1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICAgICAgICAuc3VtbWFyeS1kZXRhaWxzIHtcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAyNTBweDtcbiAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAuZGl2aWRlciB7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiA4NSU7XG4gICAgICAgICAgICAgICAgICAgIGhyIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZTdlN2VjO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufSIsIi51c2FnZS1zdW1tYXJ5LWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHdpZHRoOiAxMDAlO1xuICBmbGV4LWZsb3c6IHdyYXA7XG4gIHJvdy1nYXA6IDIwcHg7XG59XG4udXNhZ2Utc3VtbWFyeS1jb250YWluZXIgLnN1bW1hcnktZ3JhcGgsXG4udXNhZ2Utc3VtbWFyeS1jb250YWluZXIgLnNlc3Npb25zLWdyYXBoLFxuLnVzYWdlLXN1bW1hcnktY29udGFpbmVyIC5leGNoYW5nZWQtZ3JhcGgsXG4udXNhZ2Utc3VtbWFyeS1jb250YWluZXIgLnVzZXJzLWdyYXBoIHtcbiAgd2lkdGg6IDQ5JTtcbiAgYm94LXNoYWRvdzogMHB4IDJweCA0cHggIzAwMDAwMDI5O1xufVxuLnVzYWdlLXN1bW1hcnktY29udGFpbmVyIC5zdW1tYXJ5LWdyYXBoIC5ncmFwaC1oZWFkZXIsXG4udXNhZ2Utc3VtbWFyeS1jb250YWluZXIgLnNlc3Npb25zLWdyYXBoIC5ncmFwaC1oZWFkZXIsXG4udXNhZ2Utc3VtbWFyeS1jb250YWluZXIgLmV4Y2hhbmdlZC1ncmFwaCAuZ3JhcGgtaGVhZGVyLFxuLnVzYWdlLXN1bW1hcnktY29udGFpbmVyIC51c2Vycy1ncmFwaCAuZ3JhcGgtaGVhZGVyIHtcbiAgaGVpZ2h0OiA0MHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLnVzYWdlLXN1bW1hcnktY29udGFpbmVyIC5zdW1tYXJ5LWdyYXBoIC5ncmFwaC1oZWFkZXIgLmRhdGUtcmFuZ2UsXG4udXNhZ2Utc3VtbWFyeS1jb250YWluZXIgLnNlc3Npb25zLWdyYXBoIC5ncmFwaC1oZWFkZXIgLmRhdGUtcmFuZ2UsXG4udXNhZ2Utc3VtbWFyeS1jb250YWluZXIgLmV4Y2hhbmdlZC1ncmFwaCAuZ3JhcGgtaGVhZGVyIC5kYXRlLXJhbmdlLFxuLnVzYWdlLXN1bW1hcnktY29udGFpbmVyIC51c2Vycy1ncmFwaCAuZ3JhcGgtaGVhZGVyIC5kYXRlLXJhbmdlIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi51c2FnZS1zdW1tYXJ5LWNvbnRhaW5lciAuc3VtbWFyeS1ncmFwaCAuZ3JhcGgtaGVhZGVyIC5kYXRlLXJhbmdlIGlucHV0LFxuLnVzYWdlLXN1bW1hcnktY29udGFpbmVyIC5zZXNzaW9ucy1ncmFwaCAuZ3JhcGgtaGVhZGVyIC5kYXRlLXJhbmdlIGlucHV0LFxuLnVzYWdlLXN1bW1hcnktY29udGFpbmVyIC5leGNoYW5nZWQtZ3JhcGggLmdyYXBoLWhlYWRlciAuZGF0ZS1yYW5nZSBpbnB1dCxcbi51c2FnZS1zdW1tYXJ5LWNvbnRhaW5lciAudXNlcnMtZ3JhcGggLmdyYXBoLWhlYWRlciAuZGF0ZS1yYW5nZSBpbnB1dCB7XG4gIHdpZHRoOiAxMzBweDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2NjY2NjYztcbn1cbi51c2FnZS1zdW1tYXJ5LWNvbnRhaW5lciAuc3VtbWFyeS1ncmFwaCAuZ3JhcGgtaGVhZGVyIC5mcmVxdWVuY3ksXG4udXNhZ2Utc3VtbWFyeS1jb250YWluZXIgLnNlc3Npb25zLWdyYXBoIC5ncmFwaC1oZWFkZXIgLmZyZXF1ZW5jeSxcbi51c2FnZS1zdW1tYXJ5LWNvbnRhaW5lciAuZXhjaGFuZ2VkLWdyYXBoIC5ncmFwaC1oZWFkZXIgLmZyZXF1ZW5jeSxcbi51c2FnZS1zdW1tYXJ5LWNvbnRhaW5lciAudXNlcnMtZ3JhcGggLmdyYXBoLWhlYWRlciAuZnJlcXVlbmN5IHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi51c2FnZS1zdW1tYXJ5LWNvbnRhaW5lciAuc3VtbWFyeS1ncmFwaCAuZ3JhcGgtaGVhZGVyIC5mcmVxdWVuY3kgLmZyZXEtc2VsZWN0LFxuLnVzYWdlLXN1bW1hcnktY29udGFpbmVyIC5zZXNzaW9ucy1ncmFwaCAuZ3JhcGgtaGVhZGVyIC5mcmVxdWVuY3kgLmZyZXEtc2VsZWN0LFxuLnVzYWdlLXN1bW1hcnktY29udGFpbmVyIC5leGNoYW5nZWQtZ3JhcGggLmdyYXBoLWhlYWRlciAuZnJlcXVlbmN5IC5mcmVxLXNlbGVjdCxcbi51c2FnZS1zdW1tYXJ5LWNvbnRhaW5lciAudXNlcnMtZ3JhcGggLmdyYXBoLWhlYWRlciAuZnJlcXVlbmN5IC5mcmVxLXNlbGVjdCB7XG4gIHdpZHRoOiA5MHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjY2NjY2NjO1xuICBoZWlnaHQ6IDI2cHg7XG59XG4udXNhZ2Utc3VtbWFyeS1jb250YWluZXIgLnN1bW1hcnktZ3JhcGggLmdyYXBoLWJveCxcbi51c2FnZS1zdW1tYXJ5LWNvbnRhaW5lciAuc2Vzc2lvbnMtZ3JhcGggLmdyYXBoLWJveCxcbi51c2FnZS1zdW1tYXJ5LWNvbnRhaW5lciAuZXhjaGFuZ2VkLWdyYXBoIC5ncmFwaC1ib3gsXG4udXNhZ2Utc3VtbWFyeS1jb250YWluZXIgLnVzZXJzLWdyYXBoIC5ncmFwaC1ib3gge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAzMjBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIGJvcmRlci1yYWRpdXM6IDBweCAwcHggM3B4IDNweDtcbn1cbi51c2FnZS1zdW1tYXJ5LWNvbnRhaW5lciAuc3VtbWFyeS1ncmFwaCAuZ3JhcGgtYm94IC51c2FnZS1zdW1tYXJ5LWRhdGEsXG4udXNhZ2Utc3VtbWFyeS1jb250YWluZXIgLnNlc3Npb25zLWdyYXBoIC5ncmFwaC1ib3ggLnVzYWdlLXN1bW1hcnktZGF0YSxcbi51c2FnZS1zdW1tYXJ5LWNvbnRhaW5lciAuZXhjaGFuZ2VkLWdyYXBoIC5ncmFwaC1ib3ggLnVzYWdlLXN1bW1hcnktZGF0YSxcbi51c2FnZS1zdW1tYXJ5LWNvbnRhaW5lciAudXNlcnMtZ3JhcGggLmdyYXBoLWJveCAudXNhZ2Utc3VtbWFyeS1kYXRhIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cbi51c2FnZS1zdW1tYXJ5LWNvbnRhaW5lciAuc3VtbWFyeS1ncmFwaCAuZ3JhcGgtYm94IC51c2FnZS1zdW1tYXJ5LWRhdGEgLnN1bW1hcnktZGV0YWlscyxcbi51c2FnZS1zdW1tYXJ5LWNvbnRhaW5lciAuc2Vzc2lvbnMtZ3JhcGggLmdyYXBoLWJveCAudXNhZ2Utc3VtbWFyeS1kYXRhIC5zdW1tYXJ5LWRldGFpbHMsXG4udXNhZ2Utc3VtbWFyeS1jb250YWluZXIgLmV4Y2hhbmdlZC1ncmFwaCAuZ3JhcGgtYm94IC51c2FnZS1zdW1tYXJ5LWRhdGEgLnN1bW1hcnktZGV0YWlscyxcbi51c2FnZS1zdW1tYXJ5LWNvbnRhaW5lciAudXNlcnMtZ3JhcGggLmdyYXBoLWJveCAudXNhZ2Utc3VtbWFyeS1kYXRhIC5zdW1tYXJ5LWRldGFpbHMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBtYXJnaW4tcmlnaHQ6IDI1MHB4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG4udXNhZ2Utc3VtbWFyeS1jb250YWluZXIgLnN1bW1hcnktZ3JhcGggLmdyYXBoLWJveCAudXNhZ2Utc3VtbWFyeS1kYXRhIC5kaXZpZGVyLFxuLnVzYWdlLXN1bW1hcnktY29udGFpbmVyIC5zZXNzaW9ucy1ncmFwaCAuZ3JhcGgtYm94IC51c2FnZS1zdW1tYXJ5LWRhdGEgLmRpdmlkZXIsXG4udXNhZ2Utc3VtbWFyeS1jb250YWluZXIgLmV4Y2hhbmdlZC1ncmFwaCAuZ3JhcGgtYm94IC51c2FnZS1zdW1tYXJ5LWRhdGEgLmRpdmlkZXIsXG4udXNhZ2Utc3VtbWFyeS1jb250YWluZXIgLnVzZXJzLWdyYXBoIC5ncmFwaC1ib3ggLnVzYWdlLXN1bW1hcnktZGF0YSAuZGl2aWRlciB7XG4gIHdpZHRoOiA4NSU7XG59XG4udXNhZ2Utc3VtbWFyeS1jb250YWluZXIgLnN1bW1hcnktZ3JhcGggLmdyYXBoLWJveCAudXNhZ2Utc3VtbWFyeS1kYXRhIC5kaXZpZGVyIGhyLFxuLnVzYWdlLXN1bW1hcnktY29udGFpbmVyIC5zZXNzaW9ucy1ncmFwaCAuZ3JhcGgtYm94IC51c2FnZS1zdW1tYXJ5LWRhdGEgLmRpdmlkZXIgaHIsXG4udXNhZ2Utc3VtbWFyeS1jb250YWluZXIgLmV4Y2hhbmdlZC1ncmFwaCAuZ3JhcGgtYm94IC51c2FnZS1zdW1tYXJ5LWRhdGEgLmRpdmlkZXIgaHIsXG4udXNhZ2Utc3VtbWFyeS1jb250YWluZXIgLnVzZXJzLWdyYXBoIC5ncmFwaC1ib3ggLnVzYWdlLXN1bW1hcnktZGF0YSAuZGl2aWRlciBociB7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZTdlN2VjO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/layout/main/matrices/summary/summary.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/layout/main/matrices/summary/summary.component.ts ***!
  \*******************************************************************/
/*! exports provided: SummaryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SummaryComponent", function() { return SummaryComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let SummaryComponent = class SummaryComponent {
    constructor() { }
    ngOnInit() {
        this.usagesummary = [
            { id: 1, name: "MBs Exchanged", value: 3009 },
            { id: 2, name: "Files Exchanged", value: 2309 },
            { id: 3, name: "Sessions", value: 231 },
            { id: 4, name: "Outside Companies", value: 1 },
            { id: 5, name: "ITI Sites", value: 1 },
            { id: 6, name: "Registered Users", value: 11 },
        ];
    }
};
SummaryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-summary',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./summary.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/main/matrices/summary/summary.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./summary.component.scss */ "./src/app/layout/main/matrices/summary/summary.component.scss")).default]
    })
], SummaryComponent);



/***/ }),

/***/ "./src/app/layout/main/tools/tools.component.scss":
/*!********************************************************!*\
  !*** ./src/app/layout/main/tools/tools.component.scss ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".tools-section > .selected-tools {\n  border-radius: 4px;\n  margin: 10px 0;\n}\n.tools-section > .selected-tools > .tools {\n  background-color: #ffffff;\n  border-radius: 4px;\n  display: inline-block;\n  padding: 5px 10px;\n  margin-right: 10px;\n  margin-bottom: 10px;\n  color: #35AFF8;\n  font-size: 14px;\n  border: 1px solid #00A1D8;\n}\n.tools-section > .all-tools > .tool-head {\n  background-color: #dfe2ee;\n  border-radius: 4px 4px 0px 0px;\n  padding: 10px 20px !important;\n  display: flex;\n  align-items: center;\n}\n.tools-section > .all-tools > .list {\n  padding: 10px 20px !important;\n  background-color: #fff;\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n}\n.tools-section > .all-tools > .list > .tool {\n  width: 260px;\n  display: flex;\n}\n.switch {\n  position: relative;\n  display: inline-block;\n  width: 42px;\n  height: 21px;\n}\n.switch input {\n  opacity: 0;\n  width: 0;\n  height: 0;\n}\n.slider {\n  position: absolute;\n  cursor: pointer;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: #d9dce8;\n  transition: 0.4s;\n}\n.slider:before {\n  position: absolute;\n  content: \"\";\n  height: 15px;\n  width: 15px;\n  left: 2px;\n  bottom: 3px;\n  background-color: white;\n  transition: 0.4s;\n}\ninput:checked + .slider {\n  background-color: #35AFF8;\n}\ninput:focus + .slider {\n  box-shadow: 0 0 1px #2196f3;\n}\ninput:checked + .slider:before {\n  transform: translateX(22px);\n}\n/* Rounded sliders */\n.slider.round {\n  border-radius: 34px;\n}\n.slider.round:before {\n  border-radius: 50%;\n}\n.tool-icon {\n  transform: rotate(90deg);\n}\n.tool-icon-close {\n  transform: rotate(-90deg);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hcHBsZS9wcm9qZWN0L2RleGNlbnRlci1kYXNoYm9hcmQvc3JjL2FwcC9sYXlvdXQvbWFpbi90b29scy90b29scy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbGF5b3V0L21haW4vdG9vbHMvdG9vbHMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0k7RUFDSSxrQkFBQTtFQUNBLGNBQUE7QUNBUjtBRENRO0VBQ0kseUJBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSx5QkFBQTtBQ0NaO0FER1E7RUFDSSx5QkFBQTtFQUNBLDhCQUFBO0VBQ0EsNkJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7QUNEWjtBREdRO0VBQ0ksNkJBQUE7RUFDQSxzQkFBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7QUNEWjtBREVZO0VBQ0ksWUFBQTtFQUNBLGFBQUE7QUNBaEI7QURNQTtFQUNJLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQ0hKO0FETUE7RUFDSSxVQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7QUNISjtBRE1BO0VBQ0ksa0JBQUE7RUFDQSxlQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLHlCQUFBO0VBRUEsZ0JBQUE7QUNISjtBRE1BO0VBQ0ksa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLHVCQUFBO0VBRUEsZ0JBQUE7QUNISjtBRE1BO0VBQ0kseUJBQUE7QUNISjtBRE1BO0VBQ0ksMkJBQUE7QUNISjtBRE1BO0VBR0ksMkJBQUE7QUNISjtBRE9BLG9CQUFBO0FBRUE7RUFDSSxtQkFBQTtBQ0xKO0FEUUE7RUFDSSxrQkFBQTtBQ0xKO0FEUUE7RUFDSSx3QkFBQTtBQ0xKO0FEUUE7RUFDSSx5QkFBQTtBQ0xKIiwiZmlsZSI6InNyYy9hcHAvbGF5b3V0L21haW4vdG9vbHMvdG9vbHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudG9vbHMtc2VjdGlvbiB7XG4gICAgJj4uc2VsZWN0ZWQtdG9vbHMge1xuICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgICAgIG1hcmdpbjogMTBweCAwO1xuICAgICAgICAmPi50b29scyB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgICAgcGFkZGluZzogNXB4IDEwcHg7XG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgICAgICAgICAgY29sb3I6ICMzNUFGRjg7XG4gICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjMDBBMUQ4O1xuICAgICAgICB9XG4gICAgfVxuICAgICY+LmFsbC10b29scyB7XG4gICAgICAgICY+LnRvb2wtaGVhZCB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGZlMmVlO1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4IDRweCAwcHggMHB4O1xuICAgICAgICAgICAgcGFkZGluZzogMTBweCAyMHB4ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgfVxuICAgICAgICAmPi5saXN0IHtcbiAgICAgICAgICAgIHBhZGRpbmc6IDEwcHggMjBweCAhaW1wb3J0YW50O1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgJj4udG9vbCB7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDI2MHB4O1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi5zd2l0Y2gge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgd2lkdGg6IDQycHg7XG4gICAgaGVpZ2h0OiAyMXB4O1xufVxuXG4uc3dpdGNoIGlucHV0IHtcbiAgICBvcGFjaXR5OiAwO1xuICAgIHdpZHRoOiAwO1xuICAgIGhlaWdodDogMDtcbn1cblxuLnNsaWRlciB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogMDtcbiAgICByaWdodDogMDtcbiAgICBib3R0b206IDA7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Q5ZGNlODtcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IDAuNHM7XG4gICAgdHJhbnNpdGlvbjogMC40cztcbn1cblxuLnNsaWRlcjpiZWZvcmUge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBjb250ZW50OiAnJztcbiAgICBoZWlnaHQ6IDE1cHg7XG4gICAgd2lkdGg6IDE1cHg7XG4gICAgbGVmdDogMnB4O1xuICAgIGJvdHRvbTogM3B4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogMC40cztcbiAgICB0cmFuc2l0aW9uOiAwLjRzO1xufVxuXG5pbnB1dDpjaGVja2VkKy5zbGlkZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMzNUFGRjg7XG59XG5cbmlucHV0OmZvY3VzKy5zbGlkZXIge1xuICAgIGJveC1zaGFkb3c6IDAgMCAxcHggIzIxOTZmMztcbn1cblxuaW5wdXQ6Y2hlY2tlZCsuc2xpZGVyOmJlZm9yZSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMjJweCk7XG4gICAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWCgyMnB4KTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMjJweCk7XG59XG5cblxuLyogUm91bmRlZCBzbGlkZXJzICovXG5cbi5zbGlkZXIucm91bmQge1xuICAgIGJvcmRlci1yYWRpdXM6IDM0cHg7XG59XG5cbi5zbGlkZXIucm91bmQ6YmVmb3JlIHtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG59XG5cbi50b29sLWljb24ge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcbn1cblxuLnRvb2wtaWNvbi1jbG9zZSB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoLTkwZGVnKTtcbn0iLCIudG9vbHMtc2VjdGlvbiA+IC5zZWxlY3RlZC10b29scyB7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgbWFyZ2luOiAxMHB4IDA7XG59XG4udG9vbHMtc2VjdGlvbiA+IC5zZWxlY3RlZC10b29scyA+IC50b29scyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBwYWRkaW5nOiA1cHggMTBweDtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICBjb2xvcjogIzM1QUZGODtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjMDBBMUQ4O1xufVxuLnRvb2xzLXNlY3Rpb24gPiAuYWxsLXRvb2xzID4gLnRvb2wtaGVhZCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNkZmUyZWU7XG4gIGJvcmRlci1yYWRpdXM6IDRweCA0cHggMHB4IDBweDtcbiAgcGFkZGluZzogMTBweCAyMHB4ICFpbXBvcnRhbnQ7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4udG9vbHMtc2VjdGlvbiA+IC5hbGwtdG9vbHMgPiAubGlzdCB7XG4gIHBhZGRpbmc6IDEwcHggMjBweCAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4udG9vbHMtc2VjdGlvbiA+IC5hbGwtdG9vbHMgPiAubGlzdCA+IC50b29sIHtcbiAgd2lkdGg6IDI2MHB4O1xuICBkaXNwbGF5OiBmbGV4O1xufVxuXG4uc3dpdGNoIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHdpZHRoOiA0MnB4O1xuICBoZWlnaHQ6IDIxcHg7XG59XG5cbi5zd2l0Y2ggaW5wdXQge1xuICBvcGFjaXR5OiAwO1xuICB3aWR0aDogMDtcbiAgaGVpZ2h0OiAwO1xufVxuXG4uc2xpZGVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Q5ZGNlODtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiAwLjRzO1xuICB0cmFuc2l0aW9uOiAwLjRzO1xufVxuXG4uc2xpZGVyOmJlZm9yZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgY29udGVudDogXCJcIjtcbiAgaGVpZ2h0OiAxNXB4O1xuICB3aWR0aDogMTVweDtcbiAgbGVmdDogMnB4O1xuICBib3R0b206IDNweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogMC40cztcbiAgdHJhbnNpdGlvbjogMC40cztcbn1cblxuaW5wdXQ6Y2hlY2tlZCArIC5zbGlkZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzVBRkY4O1xufVxuXG5pbnB1dDpmb2N1cyArIC5zbGlkZXIge1xuICBib3gtc2hhZG93OiAwIDAgMXB4ICMyMTk2ZjM7XG59XG5cbmlucHV0OmNoZWNrZWQgKyAuc2xpZGVyOmJlZm9yZSB7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDIycHgpO1xuICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDIycHgpO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMjJweCk7XG59XG5cbi8qIFJvdW5kZWQgc2xpZGVycyAqL1xuLnNsaWRlci5yb3VuZCB7XG4gIGJvcmRlci1yYWRpdXM6IDM0cHg7XG59XG5cbi5zbGlkZXIucm91bmQ6YmVmb3JlIHtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xufVxuXG4udG9vbC1pY29uIHtcbiAgdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xufVxuXG4udG9vbC1pY29uLWNsb3NlIHtcbiAgdHJhbnNmb3JtOiByb3RhdGUoLTkwZGVnKTtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/layout/main/tools/tools.component.ts":
/*!******************************************************!*\
  !*** ./src/app/layout/main/tools/tools.component.ts ***!
  \******************************************************/
/*! exports provided: ToolsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToolsComponent", function() { return ToolsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_common_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/common.service */ "./src/app/services/common.service.ts");



let ToolsComponent = class ToolsComponent {
    constructor(commonService) {
        this.commonService = commonService;
    }
    ngOnInit() {
        this.tools = [
            { id: 1, name: 'System Connection', selected: false },
            { id: 2, name: 'Diagnostics', selected: false },
            { id: 3, name: 'Workflow', selected: false },
            { id: 4, name: 'User Management', selected: false },
            { id: 5, name: 'Reports', selected: false },
            { id: 6, name: 'Queue Info', selected: false },
            { id: 7, name: 'Datastores', selected: false },
            { id: 8, name: 'Log Files', selected: false },
            { id: 9, name: 'Sessions', selected: false },
            { id: 10, name: 'Machine Info', selected: false }
        ];
        this.selectedTools = [];
        this.closeToolSec = false;
    }
    closeTools() {
        this.closeToolSec = !this.closeToolSec;
    }
    selectTool(item) {
        if (item.selected) {
            this.selectedTools.push(item);
            this.sendData(this.selectedTools);
        }
        else if (this.selectedTools.length) {
            const index = this.selectedTools.findIndex(x => x.id === item.id);
            this.selectedTools.splice(index, 1);
            this.sendData(this.selectedTools);
        }
        else {
            return;
        }
    }
    sendData(data) {
        this.commonService.setData(data);
    }
};
ToolsComponent.ctorParameters = () => [
    { type: src_app_services_common_service__WEBPACK_IMPORTED_MODULE_2__["CommonService"] }
];
ToolsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-tools',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./tools.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/main/tools/tools.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./tools.component.scss */ "./src/app/layout/main/tools/tools.component.scss")).default]
    })
], ToolsComponent);



/***/ }),

/***/ "./src/app/services/common.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/common.service.ts ***!
  \********************************************/
/*! exports provided: CommonService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommonService", function() { return CommonService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");



let CommonService = class CommonService {
    constructor() {
        this.subject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
    }
    setData(data) {
        this.subject.next({ data });
    }
    getData() {
        return this.subject.asObservable();
    }
};
CommonService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], CommonService);



/***/ }),

/***/ "./src/app/shared/modules/charts/chart/chart.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/shared/modules/charts/chart/chart.component.scss ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("canvas {\n  margin: 0 auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hcHBsZS9wcm9qZWN0L2RleGNlbnRlci1kYXNoYm9hcmQvc3JjL2FwcC9zaGFyZWQvbW9kdWxlcy9jaGFydHMvY2hhcnQvY2hhcnQuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3NoYXJlZC9tb2R1bGVzL2NoYXJ0cy9jaGFydC9jaGFydC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9tb2R1bGVzL2NoYXJ0cy9jaGFydC9jaGFydC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImNhbnZhcyB7XG4gIG1hcmdpbjogMCBhdXRvO1xufVxuIiwiY2FudmFzIHtcbiAgbWFyZ2luOiAwIGF1dG87XG59Il19 */");

/***/ }),

/***/ "./src/app/shared/modules/charts/chart/chart.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/shared/modules/charts/chart/chart.component.ts ***!
  \****************************************************************/
/*! exports provided: ChartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChartComponent", function() { return ChartComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! chart.js */ "./node_modules/chart.js/dist/Chart.js");
/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(chart_js__WEBPACK_IMPORTED_MODULE_2__);



let ChartComponent = class ChartComponent {
    constructor() { }
    // ngAfterViewInit() {
    // }
    ngOnInit() {
        this.chartData = {
            datasets: [{
                    barPercentage: 0.5,
                    barThickness: 6,
                    maxBarThickness: 8,
                    minBarLength: 2,
                    data: [10, 20, 30, 40, 50, 60, 70]
                }]
        };
        if (this.id) {
            setTimeout(() => {
                this.getChart(this.data);
            }, 1000);
        }
    }
    getChart(data) {
        this.canvas = document.getElementById(this.id);
        this.ctx = this.canvas.getContext('2d');
        let myChart = new chart_js__WEBPACK_IMPORTED_MODULE_2__(this.ctx, {
            type: 'bar',
            data: {
                labels: ['Jan 20', 'Feb 20', 'Mar 20', 'Apr 20', 'May 20', 'Jun 20', 'Jul 20', 'Aug 20', 'Sept 20'],
                datasets: [{
                        data: [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100],
                        label: '',
                        backgroundColor: [
                            'rgba(255, 255, 255, 1)',
                            'rgba(54, 162, 235, 1)',
                            'rgba(54, 162, 235, 1)',
                            'rgba(54, 162, 235, 1)',
                            'rgba(54, 162, 235, 1)',
                            'rgba(54, 162, 235, 1)',
                            'rgba(54, 162, 235, 1)',
                            'rgba(54, 162, 235, 1)',
                            'rgba(54, 162, 235, 1)',
                            'rgba(54, 162, 235, 1)',
                            'rgba(54, 162, 235, 1)',
                            'rgba(54, 162, 235, 1)',
                            'rgba(54, 162, 235, 1)',
                            'rgba(255, 206, 86, 1)'
                        ],
                        borderWidth: 1
                    }]
            },
            options: {
                responsive: false,
            }
        });
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], ChartComponent.prototype, "id", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], ChartComponent.prototype, "type", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], ChartComponent.prototype, "data", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], ChartComponent.prototype, "options", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], ChartComponent.prototype, "canvasHeight", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], ChartComponent.prototype, "canvasWidth", void 0);
ChartComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-chart',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./chart.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/modules/charts/chart/chart.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./chart.component.scss */ "./src/app/shared/modules/charts/chart/chart.component.scss")).default]
    })
], ChartComponent);



/***/ }),

/***/ "./src/app/shared/modules/charts/charts.module.ts":
/*!********************************************************!*\
  !*** ./src/app/shared/modules/charts/charts.module.ts ***!
  \********************************************************/
/*! exports provided: CustomChartsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomChartsModule", function() { return CustomChartsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _chart_chart_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./chart/chart.component */ "./src/app/shared/modules/charts/chart/chart.component.ts");




let CustomChartsModule = class CustomChartsModule {
};
CustomChartsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_chart_chart_component__WEBPACK_IMPORTED_MODULE_3__["ChartComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]
        ],
        exports: [_chart_chart_component__WEBPACK_IMPORTED_MODULE_3__["ChartComponent"]]
    })
], CustomChartsModule);



/***/ }),

/***/ "./src/app/shared/modules/pagination/paginate/paginate.component.scss":
/*!****************************************************************************!*\
  !*** ./src/app/shared/modules/pagination/paginate/paginate.component.scss ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".pagination {\n  width: 100%;\n  text-align: right;\n  padding: 20px 0 80px 0;\n}\n.pagination .page-label {\n  color: #444;\n  margin-right: 50px;\n}\n.pagination .page-button {\n  border-color: transparent;\n  min-width: 20px !important;\n}\n.pagination .navigation-arrow {\n  font-size: 18px;\n  font-weight: bold;\n  padding: 0 3px;\n}\n.mat-pagination {\n  width: 100%;\n  padding: 15px 0;\n  display: flex;\n  align-items: center;\n  flex-wrap: wrap;\n}\n.mat-pagination .page-label {\n  color: #444;\n  padding-left: 10px;\n  margin-left: auto;\n  text-align: right;\n}\n.mat-pagination .page-button {\n  border-color: transparent;\n  min-width: 20px !important;\n}\n.mat-pagination .navigation-arrow {\n  font-size: 18px;\n  font-weight: bold;\n  padding: 0 3px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hcHBsZS9wcm9qZWN0L2RleGNlbnRlci1kYXNoYm9hcmQvc3JjL2FwcC9zaGFyZWQvbW9kdWxlcy9wYWdpbmF0aW9uL3BhZ2luYXRlL3BhZ2luYXRlLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9zaGFyZWQvbW9kdWxlcy9wYWdpbmF0aW9uL3BhZ2luYXRlL3BhZ2luYXRlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBQTtFQUNBLGlCQUFBO0VBQ0Esc0JBQUE7QUNDRjtBRENFO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0FDQ0o7QURFRTtFQUNFLHlCQUFBO0VBQ0EsMEJBQUE7QUNBSjtBREdFO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtBQ0RKO0FES0E7RUFDRSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7QUNGRjtBRElFO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtBQ0ZKO0FES0U7RUFDRSx5QkFBQTtFQUNBLDBCQUFBO0FDSEo7QURNRTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7QUNKSiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9tb2R1bGVzL3BhZ2luYXRpb24vcGFnaW5hdGUvcGFnaW5hdGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucGFnaW5hdGlvbiB7XG4gIHdpZHRoOiAxMDAlO1xuICB0ZXh0LWFsaWduOiByaWdodDtcbiAgcGFkZGluZzogMjBweCAwIDgwcHggMDtcblxuICAucGFnZS1sYWJlbCB7XG4gICAgY29sb3I6ICM0NDQ7XG4gICAgbWFyZ2luLXJpZ2h0OiA1MHB4O1xuICB9XG5cbiAgLnBhZ2UtYnV0dG9uIHtcbiAgICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xuICAgIG1pbi13aWR0aDogMjBweCAhaW1wb3J0YW50O1xuICB9XG5cbiAgLm5hdmlnYXRpb24tYXJyb3cge1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBwYWRkaW5nOiAwIDNweDtcbiAgfVxufVxuXG4ubWF0LXBhZ2luYXRpb24ge1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogMTVweCAwO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBmbGV4LXdyYXA6IHdyYXA7XG5cbiAgLnBhZ2UtbGFiZWwge1xuICAgIGNvbG9yOiAjNDQ0O1xuICAgIHBhZGRpbmctbGVmdDogMTBweDtcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgfVxuXG4gIC5wYWdlLWJ1dHRvbiB7XG4gICAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICBtaW4td2lkdGg6IDIwcHggIWltcG9ydGFudDtcbiAgfVxuXG4gIC5uYXZpZ2F0aW9uLWFycm93IHtcbiAgICBmb250LXNpemU6IDE4cHg7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgcGFkZGluZzogMCAzcHg7XG4gIH1cbn1cbiIsIi5wYWdpbmF0aW9uIHtcbiAgd2lkdGg6IDEwMCU7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xuICBwYWRkaW5nOiAyMHB4IDAgODBweCAwO1xufVxuLnBhZ2luYXRpb24gLnBhZ2UtbGFiZWwge1xuICBjb2xvcjogIzQ0NDtcbiAgbWFyZ2luLXJpZ2h0OiA1MHB4O1xufVxuLnBhZ2luYXRpb24gLnBhZ2UtYnV0dG9uIHtcbiAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgbWluLXdpZHRoOiAyMHB4ICFpbXBvcnRhbnQ7XG59XG4ucGFnaW5hdGlvbiAubmF2aWdhdGlvbi1hcnJvdyB7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIHBhZGRpbmc6IDAgM3B4O1xufVxuXG4ubWF0LXBhZ2luYXRpb24ge1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogMTVweCAwO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBmbGV4LXdyYXA6IHdyYXA7XG59XG4ubWF0LXBhZ2luYXRpb24gLnBhZ2UtbGFiZWwge1xuICBjb2xvcjogIzQ0NDtcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG59XG4ubWF0LXBhZ2luYXRpb24gLnBhZ2UtYnV0dG9uIHtcbiAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgbWluLXdpZHRoOiAyMHB4ICFpbXBvcnRhbnQ7XG59XG4ubWF0LXBhZ2luYXRpb24gLm5hdmlnYXRpb24tYXJyb3cge1xuICBmb250LXNpemU6IDE4cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBwYWRkaW5nOiAwIDNweDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/shared/modules/pagination/paginate/paginate.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/shared/modules/pagination/paginate/paginate.component.ts ***!
  \**************************************************************************/
/*! exports provided: PaginateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaginateComponent", function() { return PaginateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



let PaginateComponent = class PaginateComponent {
    constructor(router, activatedRoute) {
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.pageType = '';
        this.pages = [];
    }
    ngOnInit() {
    }
    ngOnChanges() {
        this.calculatePages();
    }
    pageChange(page) {
        this.setUrlParams = page;
    }
    calculatePages() {
        if (!this.data) {
            return;
        }
        this.pages = [];
        // tslint:disable-next-line:one-variable-per-declaration
        const current = this.data.current_page, last = this.data.total_pages, delta = 4, left = current - delta, right = current + delta + 1, range = [], rangeWithDots = [];
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
                }
                else if (i - l !== 1) {
                    rangeWithDots.push('...');
                }
            }
            rangeWithDots.push(i);
            l = i;
        }
        this.pages = rangeWithDots;
    }
    isNaN(v) {
        return isNaN(v) ? true : false;
    }
    set setUrlParams(page) {
        this.router.navigate([], {
            relativeTo: this.activatedRoute,
            queryParams: { page, pageType: this.pageType },
            queryParamsHandling: 'merge'
        });
    }
};
PaginateComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], PaginateComponent.prototype, "data", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], PaginateComponent.prototype, "pageType", void 0);
PaginateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-paginate, paginate',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./paginate.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/modules/pagination/paginate/paginate.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./paginate.component.scss */ "./src/app/shared/modules/pagination/paginate/paginate.component.scss")).default]
    })
], PaginateComponent);



/***/ }),

/***/ "./src/app/shared/modules/pagination/pagination.module.ts":
/*!****************************************************************!*\
  !*** ./src/app/shared/modules/pagination/pagination.module.ts ***!
  \****************************************************************/
/*! exports provided: PaginationModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaginationModule", function() { return PaginationModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _paginate_paginate_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./paginate/paginate.component */ "./src/app/shared/modules/pagination/paginate/paginate.component.ts");




let PaginationModule = class PaginationModule {
};
PaginationModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_paginate_paginate_component__WEBPACK_IMPORTED_MODULE_3__["PaginateComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]
        ],
        exports: [_paginate_paginate_component__WEBPACK_IMPORTED_MODULE_3__["PaginateComponent"]]
    })
], PaginationModule);



/***/ })

}]);
//# sourceMappingURL=layout-layout-module-es2015.js.map