(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["component-landing-landing-module"],{

/***/ "+Sfg":
/*!*****************************************************!*\
  !*** ./src/app/component/landing/landing.module.ts ***!
  \*****************************************************/
/*! exports provided: LandingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LandingModule", function() { return LandingModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/core */ "FKr1");
/* harmony import */ var _admin_material_module_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../admin/material-module.module */ "0/5A");
/* harmony import */ var _custom_carousal_custom_carousal_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./custom-carousal/custom-carousal.component */ "u/tl");
/* harmony import */ var _landing_header_landing_header_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./landing-header/landing-header.component */ "tnUj");
/* harmony import */ var _landing_main_landing_main_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./landing-main/landing-main.component */ "5R3L");
/* harmony import */ var _landing_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./landing-routing.module */ "op7a");
/* harmony import */ var _landing_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./landing.component */ "pBal");
/* harmony import */ var _login_registration_login_registration_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./login-registration/login-registration.component */ "LRez");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./login/login.component */ "sAzJ");
/* harmony import */ var _signup_signup_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./signup/signup.component */ "jCiG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/core */ "fXoL");














class LandingModule {
}
LandingModule.ɵfac = function LandingModule_Factory(t) { return new (t || LandingModule)(); };
LandingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdefineNgModule"]({ type: LandingModule });
LandingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdefineInjector"]({ imports: [[
            _landing_routing_module__WEBPACK_IMPORTED_MODULE_8__["LandingRoutingModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"],
            _admin_material_module_module__WEBPACK_IMPORTED_MODULE_4__["MaterialModuleModule"],
            _angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MatNativeDateModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵsetNgModuleScope"](LandingModule, { declarations: [_landing_component__WEBPACK_IMPORTED_MODULE_9__["LandingComponent"],
        _custom_carousal_custom_carousal_component__WEBPACK_IMPORTED_MODULE_5__["CustomCarousalComponent"],
        _landing_header_landing_header_component__WEBPACK_IMPORTED_MODULE_6__["LandingHeaderComponent"],
        _landing_main_landing_main_component__WEBPACK_IMPORTED_MODULE_7__["LandingMainComponent"],
        _login_login_component__WEBPACK_IMPORTED_MODULE_11__["LoginComponent"],
        _login_registration_login_registration_component__WEBPACK_IMPORTED_MODULE_10__["LoginRegistrationComponent"],
        _signup_signup_component__WEBPACK_IMPORTED_MODULE_12__["SignupComponent"]], imports: [_landing_routing_module__WEBPACK_IMPORTED_MODULE_8__["LandingRoutingModule"],
        _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"],
        _admin_material_module_module__WEBPACK_IMPORTED_MODULE_4__["MaterialModuleModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MatNativeDateModule"]] }); })();


/***/ }),

/***/ "1gVt":
/*!***********************************!*\
  !*** ./src/app/class/messages.ts ***!
  \***********************************/
/*! exports provided: Messages */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Messages", function() { return Messages; });
class Messages {
    constructor(heading, sub) {
        this.heading = heading;
        this.sub = sub;
    }
}


/***/ }),

/***/ "5R3L":
/*!**************************************************************************!*\
  !*** ./src/app/component/landing/landing-main/landing-main.component.ts ***!
  \**************************************************************************/
/*! exports provided: LandingMainComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LandingMainComponent", function() { return LandingMainComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _login_registration_login_registration_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../login-registration/login-registration.component */ "LRez");
/* harmony import */ var _custom_carousal_custom_carousal_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../custom-carousal/custom-carousal.component */ "u/tl");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../login/login.component */ "sAzJ");
/* harmony import */ var _signup_signup_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../signup/signup.component */ "jCiG");






function LandingMainComponent_app_login_6_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-login", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("closeEmitter", function LandingMainComponent_app_login_6_Template_app_login_closeEmitter_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.logincheck($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function LandingMainComponent_app_signup_7_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-signup", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("closeEmitter", function LandingMainComponent_app_signup_7_Template_app_signup_closeEmitter_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.signupcheck($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class LandingMainComponent {
    constructor() {
        this.login = false;
        this.signup = false;
    }
    ngOnInit() {
    }
    logincheck(value) {
        this.login = value;
        console.log("login check");
    }
    signupcheck(value) {
        this.signup = value;
        console.log("signup check");
    }
}
LandingMainComponent.ɵfac = function LandingMainComponent_Factory(t) { return new (t || LandingMainComponent)(); };
LandingMainComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LandingMainComponent, selectors: [["app-landing-main"]], decls: 8, vars: 2, consts: [[1, "container-fluid"], [1, "row"], [1, "col-lg-4", "my-auto"], [3, "loginclick", "signupclick"], [1, "col-lg-8", "my-auto", "text-center", "shadow-lg"], [3, "closeEmitter", 4, "ngIf"], [3, "closeEmitter"]], template: function LandingMainComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "app-login-registration", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("loginclick", function LandingMainComponent_Template_app_login_registration_loginclick_3_listener($event) { return ctx.logincheck($event); })("signupclick", function LandingMainComponent_Template_app_login_registration_signupclick_3_listener($event) { return ctx.signupcheck($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "app-custom-carousal");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, LandingMainComponent_app_login_6_Template, 1, 0, "app-login", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, LandingMainComponent_app_signup_7_Template, 1, 0, "app-signup", 5);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.login);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.signup);
    } }, directives: [_login_registration_login_registration_component__WEBPACK_IMPORTED_MODULE_1__["LoginRegistrationComponent"], _custom_carousal_custom_carousal_component__WEBPACK_IMPORTED_MODULE_2__["CustomCarousalComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"], _signup_signup_component__WEBPACK_IMPORTED_MODULE_5__["SignupComponent"]], styles: [".container-fluid[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]{\r\n height: 67vh;\r\n background-image: linear-gradient(to right bottom,rgba(182, 230, 174, 0.438),hsla(160, 64%, 43%, 0.494)),url('background.jpg');\r\n background-position: bottom;\r\nbackground-repeat: no-repeat;\r\nbackground-size: cover;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxhbmRpbmctbWFpbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0NBQ0MsWUFBWTtDQUNaLDhIQUFxSjtDQUNySiwyQkFBMkI7QUFDNUIsNEJBQTRCO0FBQzVCLHNCQUFzQjtBQUN0QiIsImZpbGUiOiJsYW5kaW5nLW1haW4uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXItZmx1aWQgLnJvd3tcclxuIGhlaWdodDogNjd2aDtcclxuIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCBib3R0b20scmdiYSgxODIsIDIzMCwgMTc0LCAwLjQzOCksaHNsYSgxNjAsIDY0JSwgNDMlLCAwLjQ5NCkpLHVybChcIi4uLy4uLy4uLy4uL2Fzc2V0cy9pbWcvYmFja2dyb3VuZC5qcGdcIik7XHJcbiBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBib3R0b207XHJcbmJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbmJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbn0iXX0= */"] });


/***/ }),

/***/ "LRez":
/*!**************************************************************************************!*\
  !*** ./src/app/component/landing/login-registration/login-registration.component.ts ***!
  \**************************************************************************************/
/*! exports provided: LoginRegistrationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginRegistrationComponent", function() { return LoginRegistrationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class LoginRegistrationComponent {
    constructor() {
        this.loginclick = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.signupclick = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ngOnInit() {
    }
    loginClick() {
        this.loginclick.emit(true);
    }
    signupClick() {
        this.signupclick.emit(true);
    }
}
LoginRegistrationComponent.ɵfac = function LoginRegistrationComponent_Factory(t) { return new (t || LoginRegistrationComponent)(); };
LoginRegistrationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoginRegistrationComponent, selectors: [["app-login-registration"]], outputs: { loginclick: "loginclick", signupclick: "signupclick" }, decls: 8, vars: 0, consts: [[1, "container"], [1, "card", "text-center", "shadow-lg"], ["id", "sign-up-button", 1, "btn", "btn-md", "btn-primary", "my-3", "mx-auto", 3, "click"], ["id", "login-button", 1, "btn", "btn-md", "btn-primary", "my-3", "mx-auto", 3, "click"]], template: function LoginRegistrationComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Welcome");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginRegistrationComponent_Template_button_click_4_listener() { return ctx.signupClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Sign Up");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginRegistrationComponent_Template_button_click_6_listener() { return ctx.loginClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Log In");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".container[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]{\r\n    width: 30%;\r\n}\r\n.btn[_ngcontent-%COMP%] {\r\n    border-radius: 0% !important;\r\n    box-shadow: none !important;\r\n}\r\n.btn-primary[_ngcontent-%COMP%] {\r\n    background-color: #020100 !important;\r\n    border-color: #020100 !important;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLXJlZ2lzdHJhdGlvbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksVUFBVTtBQUNkO0FBQ0E7SUFDSSw0QkFBNEI7SUFDNUIsMkJBQTJCO0FBQy9CO0FBQ0E7SUFDSSxvQ0FBb0M7SUFDcEMsZ0NBQWdDO0FBQ3BDIiwiZmlsZSI6ImxvZ2luLXJlZ2lzdHJhdGlvbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lciAuYnRue1xyXG4gICAgd2lkdGg6IDMwJTtcclxufVxyXG4uYnRuIHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDAlICFpbXBvcnRhbnQ7XHJcbiAgICBib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XHJcbn1cclxuLmJ0bi1wcmltYXJ5IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMjAxMDAgIWltcG9ydGFudDtcclxuICAgIGJvcmRlci1jb2xvcjogIzAyMDEwMCAhaW1wb3J0YW50O1xyXG59Il19 */"] });


/***/ }),

/***/ "jCiG":
/*!**************************************************************!*\
  !*** ./src/app/component/landing/signup/signup.component.ts ***!
  \**************************************************************/
/*! exports provided: SignupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupComponent", function() { return SignupComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var src_app_service_user_userservice_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/service/user/userservice.service */ "UP5d");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/progress-bar */ "bv9b");









function SignupComponent_div_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Username Required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SignupComponent_div_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Username Already Exists!!");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SignupComponent_div_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Password Required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SignupComponent_div_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Password Required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SignupComponent_div_34_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "mat-progress-bar", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class SignupComponent {
    constructor(service) {
        this.service = service;
        this.success = false;
        this.closeEmitter = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.signupForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            username: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required], this.service.userExist()),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            repassword: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required])
        });
    }
    ngOnInit() {
    }
    close() {
        this.closeEmitter.emit(false);
    }
    submit() {
        this.success = true;
        let user = { username: this.signupForm.get('username').value, password: this.signupForm.get('password').value };
        this.service.addUser(user).subscribe(() => {
            this.success = false;
            alert('User Added Successfull');
            this.signupForm.reset();
        });
    }
}
SignupComponent.ɵfac = function SignupComponent_Factory(t) { return new (t || SignupComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_service_user_userservice_service__WEBPACK_IMPORTED_MODULE_2__["UserserviceService"])); };
SignupComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SignupComponent, selectors: [["app-signup"]], outputs: { closeEmitter: "closeEmitter" }, decls: 35, vars: 7, consts: [[1, "modal"], [1, "container", "animate__animated", "animate__bounceInDown", "text-center", "py-5"], [1, "d-flex", "justify-content-end"], [1, "btn", "btn-sm", 3, "click"], [1, "fa", "fa-window-close", 2, "font-size", "30px", "color", "red"], [1, "py-4", 3, "formGroup", "ngSubmit"], [1, "row", "mx-auto", "mx-3"], ["matInput", "", "id", "sign-up-username", "placeholder", "Enter Username", "formControlName", "username"], [4, "ngIf"], [1, "row", "mx-auto", "my-3"], ["matInput", "", "id", "sign-up-password", "placeholder", "Enter Password", "formControlName", "password"], ["matInput", "", "id", "sign-up-repassword", "placeholder", "Re Enter Password", "formControlName", "repassword"], [1, "row", "mx-auto", "mt-5"], ["type", "submit", "id", "sign-up-confirm", 1, "btn", "btn-md", "btn-success", "mx-auto", 3, "disabled"], ["class", "row mx-auto my-2", 4, "ngIf"], [1, "row", "mx-auto", "my-2"], ["mode", "indeterminate"]], template: function SignupComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SignupComponent_Template_button_click_3_listener() { return ctx.close(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "i", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "User Registration !!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "form", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function SignupComponent_Template_form_ngSubmit_7_listener() { return ctx.submit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Username");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-error");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, SignupComponent_div_14_Template, 2, 0, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "mat-error");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, SignupComponent_div_16_Template, 2, 0, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "mat-error");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, SignupComponent_div_23_Template, 2, 0, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Re-Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "mat-error");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](30, SignupComponent_div_30_Template, 2, 0, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Sign Up");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](34, SignupComponent_div_34_Template, 2, 0, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.signupForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.signupForm.get("username").hasError("required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.signupForm.get("username").errors == null ? null : ctx.signupForm.get("username").errors.usernameExists);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.signupForm.get("password").hasError("required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.signupForm.get("repassword").hasError("required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.signupForm.valid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.success);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_4__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__["MatError"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_6__["MatProgressBar"]], styles: [".modal[_ngcontent-%COMP%] {\r\n    display: block;\r\n     position: fixed; \r\n     z-index: 1; \r\n     left: 0;\r\n     top: 0;\r\n     width: 100%; \r\n     height: 100%; \r\n     overflow: auto; \r\n     background-color: rgb(0,0,0); \r\n     background-color: rgba(0,0,0,0.4); \r\n     padding-top: 60px;\r\n   }\r\n.container[_ngcontent-%COMP%]{\r\n    width:50%;\r\n    background-color: white;\r\n \r\n}\r\n.row[_ngcontent-%COMP%]{\r\n    width:50%;\r\n}\r\n.row[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]{\r\n    width:40%\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNpZ251cC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksY0FBYztLQUNiLGVBQWUsRUFBRSxrQkFBa0I7S0FDbkMsVUFBVSxFQUFFLGVBQWU7S0FDM0IsT0FBTztLQUNQLE1BQU07S0FDTixXQUFXLEVBQUUsZUFBZTtLQUM1QixZQUFZLEVBQUUsZ0JBQWdCO0tBQzlCLGNBQWMsRUFBRSw0QkFBNEI7S0FDNUMsNEJBQTRCLEVBQUUsbUJBQW1CO0tBQ2pELGlDQUFpQyxFQUFFLHFCQUFxQjtLQUN4RCxpQkFBaUI7R0FDbkI7QUFDSDtJQUNJLFNBQVM7SUFDVCx1QkFBdUI7O0FBRTNCO0FBQ0E7SUFDSSxTQUFTO0FBQ2I7QUFDQTtJQUNJO0FBQ0oiLCJmaWxlIjoic2lnbnVwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubW9kYWwge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgcG9zaXRpb246IGZpeGVkOyAvKiBTdGF5IGluIHBsYWNlICovXHJcbiAgICAgei1pbmRleDogMTsgLyogU2l0IG9uIHRvcCAqL1xyXG4gICAgIGxlZnQ6IDA7XHJcbiAgICAgdG9wOiAwO1xyXG4gICAgIHdpZHRoOiAxMDAlOyAvKiBGdWxsIHdpZHRoICovXHJcbiAgICAgaGVpZ2h0OiAxMDAlOyAvKiBGdWxsIGhlaWdodCAqL1xyXG4gICAgIG92ZXJmbG93OiBhdXRvOyAvKiBFbmFibGUgc2Nyb2xsIGlmIG5lZWRlZCAqL1xyXG4gICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigwLDAsMCk7IC8qIEZhbGxiYWNrIGNvbG9yICovXHJcbiAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwwLjQpOyAvKiBCbGFjayB3LyBvcGFjaXR5ICovXHJcbiAgICAgcGFkZGluZy10b3A6IDYwcHg7XHJcbiAgIH1cclxuLmNvbnRhaW5lcntcclxuICAgIHdpZHRoOjUwJTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gXHJcbn1cclxuLnJvd3tcclxuICAgIHdpZHRoOjUwJTtcclxufVxyXG4ucm93IC5idG57XHJcbiAgICB3aWR0aDo0MCVcclxufVxyXG5cclxuXHJcbiJdfQ== */"] });


/***/ }),

/***/ "op7a":
/*!*************************************************************!*\
  !*** ./src/app/component/landing/landing-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: LandingRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LandingRoutingModule", function() { return LandingRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _landing_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./landing.component */ "pBal");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");




const routes = [{ path: '', component: _landing_component__WEBPACK_IMPORTED_MODULE_1__["LandingComponent"] }];
class LandingRoutingModule {
}
LandingRoutingModule.ɵfac = function LandingRoutingModule_Factory(t) { return new (t || LandingRoutingModule)(); };
LandingRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: LandingRoutingModule });
LandingRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](LandingRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "pBal":
/*!********************************************************!*\
  !*** ./src/app/component/landing/landing.component.ts ***!
  \********************************************************/
/*! exports provided: LandingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LandingComponent", function() { return LandingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _landing_header_landing_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./landing-header/landing-header.component */ "tnUj");
/* harmony import */ var _landing_main_landing_main_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./landing-main/landing-main.component */ "5R3L");



class LandingComponent {
    constructor() { }
    ngOnInit() {
    }
}
LandingComponent.ɵfac = function LandingComponent_Factory(t) { return new (t || LandingComponent)(); };
LandingComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LandingComponent, selectors: [["app-landing"]], decls: 2, vars: 0, template: function LandingComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-landing-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-landing-main");
    } }, directives: [_landing_header_landing_header_component__WEBPACK_IMPORTED_MODULE_1__["LandingHeaderComponent"], _landing_main_landing_main_component__WEBPACK_IMPORTED_MODULE_2__["LandingMainComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsYW5kaW5nLmNvbXBvbmVudC5jc3MifQ== */"] });


/***/ }),

/***/ "sAzJ":
/*!************************************************************!*\
  !*** ./src/app/component/landing/login/login.component.ts ***!
  \************************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var src_app_service_user_userservice_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/service/user/userservice.service */ "UP5d");
/* harmony import */ var src_app_service_session_session_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/service/session/session.service */ "CXj0");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");










function LoginComponent_div_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Username Required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function LoginComponent_div_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Password Required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class LoginComponent {
    constructor(service, session, route) {
        this.service = service;
        this.session = session;
        this.route = route;
        this.closeEmitter = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.loginForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            username: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required])
        });
    }
    ngOnInit() {
    }
    submit() {
        this.service.checkCredentials(this.loginForm.get('username').value, this.loginForm.get('password').value).subscribe(user => { this.user = user; }, err => alert("Login Error"), () => {
            if (this.user) {
                this.session.addSession(this.user);
                if (this.user.username === 'Admin') {
                    this.route.navigate(['/Admin']);
                }
                else {
                    this.route.navigate(['/Shopping']);
                }
            }
            else {
                alert('Invalid username / password');
            }
        });
    }
    close() {
        this.closeEmitter.emit(false);
    }
    formatLabel(value) {
        if (value >= 1000) {
            return Math.round(value / 1000) + 'k';
        }
        return value;
    }
}
LoginComponent.ɵfac = function LoginComponent_Factory(t) { return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_service_user_userservice_service__WEBPACK_IMPORTED_MODULE_2__["UserserviceService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_service_session_session_service__WEBPACK_IMPORTED_MODULE_3__["SessionService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"])); };
LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoginComponent, selectors: [["app-login"]], outputs: { closeEmitter: "closeEmitter" }, decls: 25, vars: 4, consts: [[1, "modal"], [1, "container", "animate__animated", "animate__bounceInDown", "text-center", "py-5"], [1, "d-flex", "justify-content-end"], [1, "btn", "btn-sm", 3, "click"], [1, "fa", "fa-window-close", 2, "font-size", "30px", "color", "red"], [1, "py-5", 3, "formGroup", "ngSubmit"], [1, "row", "mx-auto", "my-3"], ["id", "login-username", "matInput", "", "placeholder", "Enter Username", "formControlName", "username"], [4, "ngIf"], ["id", "login-password", "type", "password", "matInput", "", "placeholder", "Enter Password", "formControlName", "password"], [1, "row", "mx-auto", "mt-5"], ["type", "submit", "id", "login-confirm", 1, "btn", "btn-md", "btn-success", "mx-auto", 3, "disabled"]], template: function LoginComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginComponent_Template_button_click_3_listener() { return ctx.close(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "i", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "User Login !!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "form", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function LoginComponent_Template_form_ngSubmit_7_listener() { return ctx.submit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Username");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-error");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, LoginComponent_div_14_Template, 2, 0, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "mat-error");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, LoginComponent_div_21_Template, 2, 0, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Log In");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.loginForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loginForm.get("username").hasError("required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loginForm.get("password").hasError("required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.loginForm.valid);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_6__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatError"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"]], styles: [".modal[_ngcontent-%COMP%] {\r\n    display: block;\r\n     position: fixed; \r\n     z-index: 1; \r\n     left: 0;\r\n     top: 0;\r\n     width: 100%; \r\n     height: 100%; \r\n     overflow: auto; \r\n     background-color: rgb(0,0,0); \r\n     background-color: rgba(0,0,0,0.4); \r\n     padding-top: 60px;\r\n   }\r\n.container[_ngcontent-%COMP%]{\r\n    width:50%;\r\n    background-color: white;\r\n \r\n}\r\n.row[_ngcontent-%COMP%]{\r\n    width:50%;\r\n}\r\n.row[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]{\r\n    width:40%\r\n}\r\n\r\n.example-full-width[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n  }\r\nmat-slider[_ngcontent-%COMP%] {\r\n    width: 300px;\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxjQUFjO0tBQ2IsZUFBZSxFQUFFLGtCQUFrQjtLQUNuQyxVQUFVLEVBQUUsZUFBZTtLQUMzQixPQUFPO0tBQ1AsTUFBTTtLQUNOLFdBQVcsRUFBRSxlQUFlO0tBQzVCLFlBQVksRUFBRSxnQkFBZ0I7S0FDOUIsY0FBYyxFQUFFLDRCQUE0QjtLQUM1Qyw0QkFBNEIsRUFBRSxtQkFBbUI7S0FDakQsaUNBQWlDLEVBQUUscUJBQXFCO0tBQ3hELGlCQUFpQjtHQUNuQjtBQUNIO0lBQ0ksU0FBUztJQUNULHVCQUF1Qjs7QUFFM0I7QUFDQTtJQUNJLFNBQVM7QUFDYjtBQUNBO0lBQ0k7QUFDSjtBQUNBOzs7Ozs7Ozs7O0NBVUM7QUFDRDtJQUNJLFdBQVc7RUFDYjtBQUNGO0lBQ0ksWUFBWTtFQUNkIiwiZmlsZSI6ImxvZ2luLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubW9kYWwge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgcG9zaXRpb246IGZpeGVkOyAvKiBTdGF5IGluIHBsYWNlICovXHJcbiAgICAgei1pbmRleDogMTsgLyogU2l0IG9uIHRvcCAqL1xyXG4gICAgIGxlZnQ6IDA7XHJcbiAgICAgdG9wOiAwO1xyXG4gICAgIHdpZHRoOiAxMDAlOyAvKiBGdWxsIHdpZHRoICovXHJcbiAgICAgaGVpZ2h0OiAxMDAlOyAvKiBGdWxsIGhlaWdodCAqL1xyXG4gICAgIG92ZXJmbG93OiBhdXRvOyAvKiBFbmFibGUgc2Nyb2xsIGlmIG5lZWRlZCAqL1xyXG4gICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigwLDAsMCk7IC8qIEZhbGxiYWNrIGNvbG9yICovXHJcbiAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwwLjQpOyAvKiBCbGFjayB3LyBvcGFjaXR5ICovXHJcbiAgICAgcGFkZGluZy10b3A6IDYwcHg7XHJcbiAgIH1cclxuLmNvbnRhaW5lcntcclxuICAgIHdpZHRoOjUwJTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gXHJcbn1cclxuLnJvd3tcclxuICAgIHdpZHRoOjUwJTtcclxufVxyXG4ucm93IC5idG57XHJcbiAgICB3aWR0aDo0MCVcclxufVxyXG4vKlxyXG5pbnB1dHtcclxuICAgIGJvcmRlcjpub25lO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogM3B4IHNvbGlkIGdyZWVuO1xyXG4gICAgcGFkZGluZzozcHg7XHJcbn1cclxuXHJcbmlucHV0OmZvY3Vze1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxufVxyXG4qL1xyXG4uZXhhbXBsZS1mdWxsLXdpZHRoIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxubWF0LXNsaWRlciB7XHJcbiAgICB3aWR0aDogMzAwcHg7XHJcbiAgfSJdfQ== */"] });


/***/ }),

/***/ "tnUj":
/*!******************************************************************************!*\
  !*** ./src/app/component/landing/landing-header/landing-header.component.ts ***!
  \******************************************************************************/
/*! exports provided: LandingHeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LandingHeaderComponent", function() { return LandingHeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class LandingHeaderComponent {
    constructor() { }
    ngOnInit() {
    }
}
LandingHeaderComponent.ɵfac = function LandingHeaderComponent_Factory(t) { return new (t || LandingHeaderComponent)(); };
LandingHeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LandingHeaderComponent, selectors: [["app-landing-header"]], decls: 3, vars: 0, consts: [[1, "container-fluid"], [1, "logo"], ["src", "assets/img/logo.jpg", "alt", "logo", 1, "animate__animated", "animate__bounceInLeft"]], template: function LandingHeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".container-fluid[_ngcontent-%COMP%]{\r\n    height: 33vh;\r\n    position: relative;\r\n}\r\n.logo[_ngcontent-%COMP%]{\r\n    position: absolute;\r\n    top:60%;\r\n    left:50%;\r\n    transform: translate(-50%,-50%);\r\n}\r\nimg[_ngcontent-%COMP%]{\r\n    height: 200px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxhbmRpbmctaGVhZGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxZQUFZO0lBQ1osa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsT0FBTztJQUNQLFFBQVE7SUFDUiwrQkFBK0I7QUFDbkM7QUFDQTtJQUNJLGFBQWE7QUFDakIiLCJmaWxlIjoibGFuZGluZy1oZWFkZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXItZmx1aWR7XHJcbiAgICBoZWlnaHQ6IDMzdmg7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuLmxvZ297XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6NjAlO1xyXG4gICAgbGVmdDo1MCU7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLC01MCUpO1xyXG59XHJcbmltZ3tcclxuICAgIGhlaWdodDogMjAwcHg7XHJcbn0iXX0= */"] });


/***/ }),

/***/ "u/tl":
/*!********************************************************************************!*\
  !*** ./src/app/component/landing/custom-carousal/custom-carousal.component.ts ***!
  \********************************************************************************/
/*! exports provided: CustomCarousalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomCarousalComponent", function() { return CustomCarousalComponent; });
/* harmony import */ var src_app_class_messages__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/class/messages */ "1gVt");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");



const _c0 = function (a0) { return { active: a0 }; };
function CustomCarousalComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const message_r1 = ctx.$implicit;
    const i_r2 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](3, _c0, i_r2 === 0));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](message_r1.heading);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](message_r1.sub);
} }
class CustomCarousalComponent {
    constructor() {
        this.messages = [
            new src_app_class_messages__WEBPACK_IMPORTED_MODULE_0__["Messages"]("Speed Delivery", "To Save From Hunger"),
            new src_app_class_messages__WEBPACK_IMPORTED_MODULE_0__["Messages"]("Unexpected guests ?", "We got it covered"),
            new src_app_class_messages__WEBPACK_IMPORTED_MODULE_0__["Messages"]("Craving For Biriyani", "Try our secret recipies in blend with basmati rice"),
            new src_app_class_messages__WEBPACK_IMPORTED_MODULE_0__["Messages"]("Any time / Any Day", "We are just a click away to get your groceries in time"),
            new src_app_class_messages__WEBPACK_IMPORTED_MODULE_0__["Messages"]("Discounts", "We got you covered for each order above 1000 ")
        ];
    }
    ngOnInit() {
    }
}
CustomCarousalComponent.ɵfac = function CustomCarousalComponent_Factory(t) { return new (t || CustomCarousalComponent)(); };
CustomCarousalComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: CustomCarousalComponent, selectors: [["app-custom-carousal"]], decls: 11, vars: 1, consts: [["id", "carouselExampleControls", "data-bs-ride", "carousel", 1, "carousel", "slide"], [1, "carousel-inner"], ["class", "carousel-item animate__animated animate__backInUp", 3, "ngClass", 4, "ngFor", "ngForOf"], ["type", "button", "data-bs-target", "#carouselExampleControls", "data-bs-slide", "prev", 1, "carousel-control-prev"], ["aria-hidden", "true", 1, "carousel-control-prev-icon"], [1, "visually-hidden"], ["type", "button", "data-bs-target", "#carouselExampleControls", "data-bs-slide", "next", 1, "carousel-control-next"], ["aria-hidden", "true", 1, "carousel-control-next-icon"], [1, "carousel-item", "animate__animated", "animate__backInUp", 3, "ngClass"], [1, "container"]], template: function CustomCarousalComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, CustomCarousalComponent_div_2_Template, 6, 5, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Previous");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Next");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.messages);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjdXN0b20tY2Fyb3VzYWwuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ })

}]);
//# sourceMappingURL=component-landing-landing-module.js.map