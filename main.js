(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\hp\OneDrive\Desktop\angular-experiments\notes-app\notes-frontend\src\main.ts */"zUnb");


/***/ }),

/***/ "Akln":
/*!************************************************************!*\
  !*** ./src/app/pages/main-layout/main-layout.component.ts ***!
  \************************************************************/
/*! exports provided: MainLayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainLayoutComponent", function() { return MainLayoutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");



class MainLayoutComponent {
    constructor() { }
    ngOnInit() {
    }
}
MainLayoutComponent.ɵfac = function MainLayoutComponent_Factory(t) { return new (t || MainLayoutComponent)(); };
MainLayoutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MainLayoutComponent, selectors: [["app-main-layout"]], decls: 6, vars: 0, consts: [[1, "layout-box"], [1, "top-bar"], [1, "page-content"]], template: function MainLayoutComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Note Mate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["@import url(\"https://fonts.googleapis.com/css?family=Nunito:400,700\");\n\nhtml[_ngcontent-%COMP%], body[_ngcontent-%COMP%] {\n  height: 100%;\n  font-size: 18px !important;\n  overflow: hidden;\n}\n.layout-box[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  overflow: hidden;\n}\n.layout-box[_ngcontent-%COMP%]   .page-content[_ngcontent-%COMP%] {\n  flex-grow: 1;\n  overflow-y: scroll;\n}\n.top-bar[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 68px;\n  background: linear-gradient(to right, #FE76C2, #37C7F2);\n  display: flex;\n  flex-shrink: 0;\n  justify-content: center;\n  align-items: center;\n}\n.top-bar[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  color: white;\n  font-size: 25px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxtYWluLXN0eWxlLnNjc3MiLCIuLlxcLi5cXC4uXFwuLlxcbWFpbi1sYXlvdXQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBSVEscUVBQUE7QUE4QlIsa0JBQUE7QUFFQTtFQUNJLFlBQUE7RUFDQSwwQkFBQTtFQUNBLGdCQUFBO0FDakNKO0FBSkE7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxZQUFBO0VBRUEsZ0JBQUE7QUFNSjtBQUpJO0VBQ0ksWUFBQTtFQUNBLGtCQUFBO0FBTVI7QUFGQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsdURBQUE7RUFFQSxhQUFBO0VBQ0EsY0FBQTtFQUdBLHVCQUFBO0VBQ0EsbUJBQUE7QUFFSjtBQUFJO0VBQ0ksWUFBQTtFQUNBLGVBQUE7QUFFUiIsImZpbGUiOiJtYWluLWxheW91dC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGNoYW5naW5nIGJ1bG1hIHZhcmlhYmxlcyBhbmQgYWRkaW5nIGdsb2JhbCBzdHlsZXMuLlxyXG5AY2hhcnNldCBcInV0Zi04XCI7XHJcblxyXG4vLyBJbXBvcnQgYSBHb29nbGUgRm9udFxyXG5AaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PU51bml0bzo0MDAsNzAwJyk7XHJcblxyXG4vLyBTZXQgeW91ciBicmFuZCBjb2xvcnNcclxuJHB1cnBsZTogI0E1OUFENztcclxuJHBpbms6ICNGRTc2QzI7XHJcbiRibHVlOiAjMzdDN0YyO1xyXG4kbGlnaHQtcmVkOiAjZmZmM2YzO1xyXG4kbGlnaHQ6ICNmYWZjZmY7XHJcbiRicm93bjogIzc1Nzc2MztcclxuJGJlaWdlLWxpZ2h0OiAjRDBEMUNEO1xyXG4kYmVpZ2UtbGlnaHRlcjogI0VGRjBFQjtcclxuJGdyZWVuOiAjMGJmMzg3O1xyXG5cclxuLy8gVXBkYXRlIEJ1bG1hJ3MgZ2xvYmFsIHZhcmlhYmxlc1xyXG4kZmFtaWx5LXNhbnMtc2VyaWY6IFwiTnVuaXRvXCIsIHNhbnMtc2VyaWY7XHJcbiRncmV5LWRhcms6ICRicm93bjtcclxuJGdyZXktbGlnaHQ6ICRiZWlnZS1saWdodDtcclxuJHByaW1hcnk6ICRwdXJwbGU7XHJcbiRsaW5rOiAkYmx1ZTtcclxuJHdpZGVzY3JlZW4tZW5hYmxlZDogZmFsc2U7XHJcbiRmdWxsaGQtZW5hYmxlZDogZmFsc2U7XHJcblxyXG4vLyBVcGRhdGUgc29tZSBvZiBCdWxtYSdzIGNvbXBvbmVudCB2YXJpYWJsZXNcclxuJGJvZHktYmFja2dyb3VuZC1jb2xvcjogJGxpZ2h0O1xyXG4kY29udHJvbC1ib3JkZXItd2lkdGg6IDJweDtcclxuJGlucHV0LWJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiRpbnB1dC1iYWNrZ3JvdW5kLWNvbG9yOiAjRjNGNUZBO1xyXG4kaW5wdXQtc2hhZG93OiBub25lO1xyXG5cclxuXHJcbi8qIEdsb2JhbCBTdHlsZXMgKi9cclxuXHJcbmh0bWwsIGJvZHkge1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgZm9udC1zaXplOiAxOHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG59IiwiQGltcG9ydCB1cmwoXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9TnVuaXRvOjQwMCw3MDBcIik7XG4vKiBHbG9iYWwgU3R5bGVzICovXG5odG1sLCBib2R5IHtcbiAgaGVpZ2h0OiAxMDAlO1xuICBmb250LXNpemU6IDE4cHggIWltcG9ydGFudDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLmxheW91dC1ib3gge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBoZWlnaHQ6IDEwMCU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG4ubGF5b3V0LWJveCAucGFnZS1jb250ZW50IHtcbiAgZmxleC1ncm93OiAxO1xuICBvdmVyZmxvdy15OiBzY3JvbGw7XG59XG5cbi50b3AtYmFyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNjhweDtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjRkU3NkMyLCAjMzdDN0YyKTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1zaHJpbms6IDA7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLnRvcC1iYXIgaDEge1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtc2l6ZTogMjVweDtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MainLayoutComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-main-layout',
                templateUrl: './main-layout.component.html',
                styleUrls: ['./main-layout.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "MkA2":
/*!***************************************!*\
  !*** ./src/app/shared/note.module.ts ***!
  \***************************************/
/*! exports provided: Note */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Note", function() { return Note; });
class Note {
    constructor() {
        this.title = "";
        this.body = "";
    }
}


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");



class AppComponent {
    constructor() {
        this.title = 'notes-frontend';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss']
            }]
    }], null, null); })();


/***/ }),

/***/ "T1+9":
/*!**************************************************************!*\
  !*** ./src/app/pages/note-details/note-details.component.ts ***!
  \**************************************************************/
/*! exports provided: NoteDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NoteDetailsComponent", function() { return NoteDetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_shared_note_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/note.module */ "MkA2");
/* harmony import */ var src_app_shared_notes_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/notes.service */ "phcf");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");






class NoteDetailsComponent {
    constructor(noteService, router, route) {
        this.noteService = noteService;
        this.router = router;
        this.route = route;
        this.note = new src_app_shared_note_module__WEBPACK_IMPORTED_MODULE_1__["Note"]();
        this.noteId = -1;
        this.new = false;
    }
    ngOnInit() {
        this.route.params.subscribe((params) => {
            if (params.id) {
                this.note = this.noteService.get(params.id);
                this.noteId = params.id;
                this.new = false;
            }
            else {
                this.new = true;
            }
        });
    }
    onSubmit(form) {
        if (this.new) {
            this.noteService.add(form.value);
        }
        else {
            this.noteService.update(this.noteId, form.value.title, form.value.body);
        }
        this.router.navigateByUrl('/');
    }
    cancel() {
        this.router.navigateByUrl('/');
    }
}
NoteDetailsComponent.ɵfac = function NoteDetailsComponent_Factory(t) { return new (t || NoteDetailsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_notes_service__WEBPACK_IMPORTED_MODULE_2__["NotesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"])); };
NoteDetailsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NoteDetailsComponent, selectors: [["app-note-details"]], decls: 21, vars: 3, consts: [[1, "form-container"], [3, "ngSubmit"], ["noteForm", "ngForm"], [1, "field"], [1, "label"], [1, "control"], ["type", "text", "name", "title", "required", "", 1, "input", 3, "ngModel"], ["name", "body", 1, "textarea", 3, "ngModel"], [1, "field", "is-grouped", "is-pulled-right"], ["type", "button", 1, "button", "is-text", 3, "click"], ["type", "submit", 1, "button", "is-success", 3, "disabled"]], template: function NoteDetailsComponent_Template(rf, ctx) { if (rf & 1) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "form", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function NoteDetailsComponent_Template_form_ngSubmit_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2); return ctx.onSubmit(_r0); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "label", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "label", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Body");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "textarea", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NoteDetailsComponent_Template_button_click_16_listener() { return ctx.cancel(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " Cancel ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, " Save ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.note.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.note.body);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !_r0.valid);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"]], styles: [".form-container[_ngcontent-%COMP%] {\n  max-width: 500px;\n  margin: auto;\n  margin-top: 50px;\n}\n\ninput.ng-invalid.ng-touched[_ngcontent-%COMP%], textarea.ng-invalid.ng-touched[_ngcontent-%COMP%] {\n  border-color: red;\n}\n\ninput.ng-invalid.ng-touched[_ngcontent-%COMP%]:focus, textarea.ng-invalid.ng-touched[_ngcontent-%COMP%]:focus {\n  box-shadow: 0px 0px 0px 3px rgba(255, 0, 0, 0.1);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxub3RlLWRldGFpbHMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtBQUNKOztBQUdJO0VBQ0ksaUJBQUE7QUFBUjs7QUFDUTtFQUNJLGdEQUFBO0FBQ1oiLCJmaWxlIjoibm90ZS1kZXRhaWxzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZvcm0tY29udGFpbmVyIHtcclxuICAgIG1heC13aWR0aDogNTAwcHg7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICBtYXJnaW4tdG9wOiA1MHB4O1xyXG59XHJcblxyXG5pbnB1dCwgdGV4dGFyZWEge1xyXG4gICAgJi5uZy1pbnZhbGlkLm5nLXRvdWNoZWQge1xyXG4gICAgICAgIGJvcmRlci1jb2xvcjogcmVkO1xyXG4gICAgICAgICY6Zm9jdXMge1xyXG4gICAgICAgICAgICBib3gtc2hhZG93OiAwcHggMHB4IDBweCAzcHggcmdiYShyZWQsIDAuMSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NoteDetailsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-note-details',
                templateUrl: './note-details.component.html',
                styleUrls: ['./note-details.component.scss']
            }]
    }], function () { return [{ type: src_app_shared_notes_service__WEBPACK_IMPORTED_MODULE_2__["NotesService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }]; }, null); })();


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _pages_notes_list_notes_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/notes-list/notes-list.component */ "vbGj");
/* harmony import */ var _pages_main_layout_main_layout_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/main-layout/main-layout.component */ "Akln");
/* harmony import */ var _note_card_note_card_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./note-card/note-card.component */ "rKqP");
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "5+WD");
/* harmony import */ var _pages_note_details_note_details_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pages/note-details/note-details.component */ "T1+9");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");












class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_8__["DragDropModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__["BrowserAnimationsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
        _pages_notes_list_notes_list_component__WEBPACK_IMPORTED_MODULE_5__["NotesListComponent"],
        _pages_main_layout_main_layout_component__WEBPACK_IMPORTED_MODULE_6__["MainLayoutComponent"],
        _note_card_note_card_component__WEBPACK_IMPORTED_MODULE_7__["NoteCardComponent"],
        _pages_note_details_note_details_component__WEBPACK_IMPORTED_MODULE_9__["NoteDetailsComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
        _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_8__["DragDropModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__["BrowserAnimationsModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                    _pages_notes_list_notes_list_component__WEBPACK_IMPORTED_MODULE_5__["NotesListComponent"],
                    _pages_main_layout_main_layout_component__WEBPACK_IMPORTED_MODULE_6__["MainLayoutComponent"],
                    _note_card_note_card_component__WEBPACK_IMPORTED_MODULE_7__["NoteCardComponent"],
                    _pages_note_details_note_details_component__WEBPACK_IMPORTED_MODULE_9__["NoteDetailsComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                    _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_8__["DragDropModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__["BrowserAnimationsModule"]
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "phcf":
/*!*****************************************!*\
  !*** ./src/app/shared/notes.service.ts ***!
  \*****************************************/
/*! exports provided: NotesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotesService", function() { return NotesService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class NotesService {
    constructor() {
        this.notes = new Array();
    }
    getAll() {
        return this.notes;
    }
    get(id) {
        return this.notes[id];
    }
    getId(note) {
        return this.notes.indexOf(note);
    }
    add(note) {
        this.notes = [...this.notes, note];
    }
    update(id, title, body) {
        let note = this.notes[id];
        note.title = title;
        note.body = body;
    }
    delete(id) {
        this.notes.splice(id, 1);
    }
}
NotesService.ɵfac = function NotesService_Factory(t) { return new (t || NotesService)(); };
NotesService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: NotesService, factory: NotesService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NotesService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "rKqP":
/*!**************************************************!*\
  !*** ./src/app/note-card/note-card.component.ts ***!
  \**************************************************/
/*! exports provided: NoteCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NoteCardComponent", function() { return NoteCardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");



const _c0 = ["truncater"];
const _c1 = ["bodyText"];
class NoteCardComponent {
    constructor(renderer) {
        this.renderer = renderer;
        this.deleteEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ngOnInit() { }
    ngAfterViewInit() {
        var _a, _b;
        let style = window.getComputedStyle(this.bodyText.nativeElement, null);
        let viewableHeight = parseInt(style.getPropertyValue('height'), 10);
        if (this.bodyText.nativeElement.scrollHeight > viewableHeight) {
            this.renderer.setStyle((_a = this.truncater) === null || _a === void 0 ? void 0 : _a.nativeElement, 'display', 'block');
        }
        else {
            this.renderer.setStyle((_b = this.truncater) === null || _b === void 0 ? void 0 : _b.nativeElement, 'display', 'none');
        }
    }
    onXButtonClick() {
        this.deleteEvent.emit();
    }
}
NoteCardComponent.ɵfac = function NoteCardComponent_Factory(t) { return new (t || NoteCardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"])); };
NoteCardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NoteCardComponent, selectors: [["app-note-card"]], viewQuery: function NoteCardComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c1, true);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.truncater = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.bodyText = _t.first);
    } }, inputs: { title: "title", body: "body", link: "link" }, outputs: { deleteEvent: "delete" }, decls: 13, vars: 3, consts: [[1, "note-card-container"], ["container", ""], [3, "routerLink"], [1, "note-card-content"], [1, "note-card-title"], [1, "note-card-body"], ["bodyText", ""], [1, "fade-out-truncation"], ["truncater", ""], [1, "x-button", 3, "click"]], template: function NoteCardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h1", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "div", 7, 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NoteCardComponent_Template_div_click_12_listener() { return ctx.onXButtonClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", ctx.link);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.body);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]], styles: ["@import url(\"https://fonts.googleapis.com/css?family=Nunito:400,700\");\n\nhtml[_ngcontent-%COMP%], body[_ngcontent-%COMP%] {\n  height: 100%;\n  font-size: 18px !important;\n  overflow: hidden;\n}\n.note-card-container[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 5px;\n  position: relative;\n  box-shadow: 0px 2px 15px 2px rgba(0, 0, 0, 0.068);\n  transition: box-shadow 0.3s ease-out;\n}\n.note-card-container[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n  box-shadow: 0px 0px 0px 4px rgba(0, 0, 0, 0.068);\n}\n.note-card-container[_ngcontent-%COMP%]:hover   .x-button[_ngcontent-%COMP%] {\n  opacity: 1;\n  transition-delay: 0.35s;\n  transform: scale(1);\n}\n.note-card-container[_ngcontent-%COMP%]   .note-card-content[_ngcontent-%COMP%] {\n  padding: 25px;\n}\n.note-card-container[_ngcontent-%COMP%]   .note-card-content[_ngcontent-%COMP%]   .note-card-title[_ngcontent-%COMP%] {\n  font-size: 22px;\n  font-weight: bold;\n  color: #A59AD7;\n}\n.note-card-container[_ngcontent-%COMP%]   .note-card-content[_ngcontent-%COMP%]   .note-card-body[_ngcontent-%COMP%] {\n  position: relative;\n  max-height: 80px;\n  overflow: hidden;\n  color: #555;\n}\n.note-card-container[_ngcontent-%COMP%]   .note-card-content[_ngcontent-%COMP%]   .note-card-body[_ngcontent-%COMP%]   .fade-out-truncation[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 0;\n  height: 50%;\n  pointer-events: none;\n  width: 100%;\n  background: linear-gradient(to bottom, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.7), 50%, white 100%);\n}\n.x-button[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 12px;\n  right: 12px;\n  height: 34px;\n  width: 34px;\n  border-radius: 4px;\n  background-color: #fff3f3;\n  background-image: url('delete_icon.svg');\n  background-repeat: no-repeat;\n  background-position: center;\n  opacity: 0;\n  transition: opacity 0.3s ease-out, transform 0.3s ease-out;\n  transform: scale(0.35);\n}\n.x-button[_ngcontent-%COMP%]:hover {\n  background-color: #ffe4e4;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcbWFpbi1zdHlsZS5zY3NzIiwiLi5cXC4uXFwuLlxcbm90ZS1jYXJkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUlRLHFFQUFBO0FBOEJSLGtCQUFBO0FBRUE7RUFDSSxZQUFBO0VBQ0EsMEJBQUE7RUFDQSxnQkFBQTtBQ2pDSjtBQUxBO0VBQ0ksaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBRUEsaURBQUE7RUFDQSxvQ0FBQTtBQU9KO0FBTEk7RUFDSSxlQUFBO0VBQ0EsZ0RBQUE7QUFPUjtBQUxRO0VBQ0ksVUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUFPWjtBQUhJO0VBQ0ksYUFBQTtBQUtSO0FBSFE7RUFDSSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxjRG5CSDtBQ3dCVDtBQUZRO0VBQ0ksa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtBQUlaO0FBRlk7RUFDSSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0Esb0JBQUE7RUFDQSxXQUFBO0VBQ0EsNEdBQUE7QUFJaEI7QUFFQTtFQUNJLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EseUJENUNRO0VDNkNSLHdDQUFBO0VBQ0EsNEJBQUE7RUFDQSwyQkFBQTtFQUNBLFVBQUE7RUFDQSwwREFBQTtFQUNBLHNCQUFBO0FBQ0o7QUFBSTtFQUNJLHlCQUFBO0FBRVIiLCJmaWxlIjoibm90ZS1jYXJkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gY2hhbmdpbmcgYnVsbWEgdmFyaWFibGVzIGFuZCBhZGRpbmcgZ2xvYmFsIHN0eWxlcy4uXHJcbkBjaGFyc2V0IFwidXRmLThcIjtcclxuXHJcbi8vIEltcG9ydCBhIEdvb2dsZSBGb250XHJcbkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9TnVuaXRvOjQwMCw3MDAnKTtcclxuXHJcbi8vIFNldCB5b3VyIGJyYW5kIGNvbG9yc1xyXG4kcHVycGxlOiAjQTU5QUQ3O1xyXG4kcGluazogI0ZFNzZDMjtcclxuJGJsdWU6ICMzN0M3RjI7XHJcbiRsaWdodC1yZWQ6ICNmZmYzZjM7XHJcbiRsaWdodDogI2ZhZmNmZjtcclxuJGJyb3duOiAjNzU3NzYzO1xyXG4kYmVpZ2UtbGlnaHQ6ICNEMEQxQ0Q7XHJcbiRiZWlnZS1saWdodGVyOiAjRUZGMEVCO1xyXG4kZ3JlZW46ICMwYmYzODc7XHJcblxyXG4vLyBVcGRhdGUgQnVsbWEncyBnbG9iYWwgdmFyaWFibGVzXHJcbiRmYW1pbHktc2Fucy1zZXJpZjogXCJOdW5pdG9cIiwgc2Fucy1zZXJpZjtcclxuJGdyZXktZGFyazogJGJyb3duO1xyXG4kZ3JleS1saWdodDogJGJlaWdlLWxpZ2h0O1xyXG4kcHJpbWFyeTogJHB1cnBsZTtcclxuJGxpbms6ICRibHVlO1xyXG4kd2lkZXNjcmVlbi1lbmFibGVkOiBmYWxzZTtcclxuJGZ1bGxoZC1lbmFibGVkOiBmYWxzZTtcclxuXHJcbi8vIFVwZGF0ZSBzb21lIG9mIEJ1bG1hJ3MgY29tcG9uZW50IHZhcmlhYmxlc1xyXG4kYm9keS1iYWNrZ3JvdW5kLWNvbG9yOiAkbGlnaHQ7XHJcbiRjb250cm9sLWJvcmRlci13aWR0aDogMnB4O1xyXG4kaW5wdXQtYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuJGlucHV0LWJhY2tncm91bmQtY29sb3I6ICNGM0Y1RkE7XHJcbiRpbnB1dC1zaGFkb3c6IG5vbmU7XHJcblxyXG5cclxuLyogR2xvYmFsIFN0eWxlcyAqL1xyXG5cclxuaHRtbCwgYm9keSB7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBmb250LXNpemU6IDE4cHggIWltcG9ydGFudDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbn0iLCJAaW1wb3J0IHVybChcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1OdW5pdG86NDAwLDcwMFwiKTtcbi8qIEdsb2JhbCBTdHlsZXMgKi9cbmh0bWwsIGJvZHkge1xuICBoZWlnaHQ6IDEwMCU7XG4gIGZvbnQtc2l6ZTogMThweCAhaW1wb3J0YW50O1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4ubm90ZS1jYXJkLWNvbnRhaW5lciB7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYm94LXNoYWRvdzogMHB4IDJweCAxNXB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMDY4KTtcbiAgdHJhbnNpdGlvbjogYm94LXNoYWRvdyAwLjNzIGVhc2Utb3V0O1xufVxuLm5vdGUtY2FyZC1jb250YWluZXI6aG92ZXIge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGJveC1zaGFkb3c6IDBweCAwcHggMHB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMDY4KTtcbn1cbi5ub3RlLWNhcmQtY29udGFpbmVyOmhvdmVyIC54LWJ1dHRvbiB7XG4gIG9wYWNpdHk6IDE7XG4gIHRyYW5zaXRpb24tZGVsYXk6IDAuMzVzO1xuICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xufVxuLm5vdGUtY2FyZC1jb250YWluZXIgLm5vdGUtY2FyZC1jb250ZW50IHtcbiAgcGFkZGluZzogMjVweDtcbn1cbi5ub3RlLWNhcmQtY29udGFpbmVyIC5ub3RlLWNhcmQtY29udGVudCAubm90ZS1jYXJkLXRpdGxlIHtcbiAgZm9udC1zaXplOiAyMnB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgY29sb3I6ICNBNTlBRDc7XG59XG4ubm90ZS1jYXJkLWNvbnRhaW5lciAubm90ZS1jYXJkLWNvbnRlbnQgLm5vdGUtY2FyZC1ib2R5IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtYXgtaGVpZ2h0OiA4MHB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBjb2xvcjogIzU1NTtcbn1cbi5ub3RlLWNhcmQtY29udGFpbmVyIC5ub3RlLWNhcmQtY29udGVudCAubm90ZS1jYXJkLWJvZHkgLmZhZGUtb3V0LXRydW5jYXRpb24ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogMDtcbiAgaGVpZ2h0OiA1MCU7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICB3aWR0aDogMTAwJTtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwKSAwJSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjcpLCA1MCUsIHdoaXRlIDEwMCUpO1xufVxuXG4ueC1idXR0b24ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMTJweDtcbiAgcmlnaHQ6IDEycHg7XG4gIGhlaWdodDogMzRweDtcbiAgd2lkdGg6IDM0cHg7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjNmMztcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vYXNzZXRzL2RlbGV0ZV9pY29uLnN2Z1wiKTtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICBvcGFjaXR5OiAwO1xuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuM3MgZWFzZS1vdXQsIHRyYW5zZm9ybSAwLjNzIGVhc2Utb3V0O1xuICB0cmFuc2Zvcm06IHNjYWxlKDAuMzUpO1xufVxuLngtYnV0dG9uOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZTRlNDtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NoteCardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-note-card',
                templateUrl: './note-card.component.html',
                styleUrls: ['./note-card.component.scss']
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"] }]; }, { title: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['title']
        }], body: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['body']
        }], link: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['link']
        }], deleteEvent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
            args: ['delete']
        }], truncater: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['truncater']
        }], bodyText: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['bodyText']
        }] }); })();


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _pages_main_layout_main_layout_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/main-layout/main-layout.component */ "Akln");
/* harmony import */ var _pages_note_details_note_details_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/note-details/note-details.component */ "T1+9");
/* harmony import */ var _pages_notes_list_notes_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/notes-list/notes-list.component */ "vbGj");







const routes = [
    {
        path: '', component: _pages_main_layout_main_layout_component__WEBPACK_IMPORTED_MODULE_2__["MainLayoutComponent"], children: [
            { path: '', component: _pages_notes_list_notes_list_component__WEBPACK_IMPORTED_MODULE_4__["NotesListComponent"] },
            { path: 'new', component: _pages_note_details_note_details_component__WEBPACK_IMPORTED_MODULE_3__["NoteDetailsComponent"] },
            { path: ':id', component: _pages_note_details_note_details_component__WEBPACK_IMPORTED_MODULE_3__["NoteDetailsComponent"] }
        ]
    }
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "vbGj":
/*!**********************************************************!*\
  !*** ./src/app/pages/notes-list/notes-list.component.ts ***!
  \**********************************************************/
/*! exports provided: NotesListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotesListComponent", function() { return NotesListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "5+WD");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/animations */ "R0Ic");
/* harmony import */ var src_app_shared_notes_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/notes.service */ "phcf");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _note_card_note_card_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../note-card/note-card.component */ "rKqP");









function NotesListComponent_app_note_card_8_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-note-card", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("delete", function NotesListComponent_app_note_card_8_Template_app_note_card_delete_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const i_r2 = ctx.index; const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.deleteNote(i_r2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const note_r1 = ctx.$implicit;
    const i_r2 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("title", note_r1.title)("body", note_r1.body)("@itemAnim", undefined)("link", "" + i_r2);
} }
class NotesListComponent {
    constructor(notesService) {
        this.notesService = notesService;
        this.notes = new Array();
        this.filteredNotes = new Array();
    }
    ngOnInit() {
        this.notes = this.notesService.getAll();
        this.filteredNotes = this.notes;
    }
    drop(event) {
        Object(_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_1__["moveItemInArray"])(this.notes, event.previousIndex, event.currentIndex);
    }
    deleteNote(id) {
        this.notesService.delete(id);
    }
    filter(query) {
        let allResults = new Array();
        query = query.toLowerCase().trim();
        let terms = query.split(' ');
        terms = this.removeDuplicates(terms);
        terms.forEach(queryWord => {
            let results = this.relaventNotes(queryWord);
            allResults = [...allResults, ...results];
        });
        // this.filteredNotes = this.removeDuplicates(allResults);
        let myMap = new Map();
        allResults.forEach(note => {
            if (myMap.has(note)) {
                myMap.set(note, myMap.get(note) + 1);
            }
            else {
                myMap.set(note, 1);
            }
        });
        let mapSort1 = new Map([...myMap.entries()].sort((a, b) => b[1] - a[1]));
        let keys = Array();
        for (let key of mapSort1) {
            keys.push(key[0]);
        }
        this.filteredNotes = keys;
    }
    removeDuplicates(arr) {
        let uniqResults = new Set();
        arr.forEach(value => {
            uniqResults.add(value);
        });
        return Array.from(uniqResults);
    }
    relaventNotes(query) {
        query = query.toLowerCase().trim();
        let relaventNotes = this.notes.filter(note => {
            if ((note.body && note.body.includes(query)) || note.title.includes(query)) {
                return true;
            }
            return false;
        });
        return relaventNotes;
    }
}
NotesListComponent.ɵfac = function NotesListComponent_Factory(t) { return new (t || NotesListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_notes_service__WEBPACK_IMPORTED_MODULE_3__["NotesService"])); };
NotesListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NotesListComponent, selectors: [["app-notes-list"]], decls: 11, vars: 2, consts: [[1, "main-container"], [1, "search-bar-container"], [1, "field"], [1, "control", "has-icons-left"], ["type", "text", "placeholder", "Filter", 1, "input", 3, "keyup"], [1, "icon", "is-small", "is-left"], [1, "fas", "fa-search"], ["cdkDropList", "", 1, "notes-list", 3, "cdkDropListDropped"], ["cdkDrag", "", 3, "title", "body", "link", "delete", 4, "ngFor", "ngForOf"], ["routerLink", "new", 1, "button", "floating-add-button", "is-primary"], ["cdkDrag", "", 3, "title", "body", "link", "delete"]], template: function NotesListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function NotesListComponent_Template_input_keyup_4_listener($event) { return ctx.filter($event.target.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "i", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("cdkDropListDropped", function NotesListComponent_Template_div_cdkDropListDropped_7_listener($event) { return ctx.drop($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, NotesListComponent_app_note_card_8_Template, 1, 4, "app-note-card", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "+ ADD ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@listAnim", undefined);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.filteredNotes);
    } }, directives: [_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_1__["CdkDropList"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLink"], _note_card_note_card_component__WEBPACK_IMPORTED_MODULE_6__["NoteCardComponent"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_1__["CdkDrag"]], styles: ["@import url(\"https://fonts.googleapis.com/css?family=Nunito:400,700\");\n\nhtml[_ngcontent-%COMP%], body[_ngcontent-%COMP%] {\n  height: 100%;\n  font-size: 18px !important;\n  overflow: hidden;\n}\n.main-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  max-width: 500px;\n  margin: auto;\n  padding-top: 50px;\n}\n.notes-list[_ngcontent-%COMP%] {\n  margin-top: 35px;\n  margin-bottom: 70%;\n}\napp-note-card[_ngcontent-%COMP%] {\n  display: block;\n  margin-bottom: 25px;\n}\n.example-list[_ngcontent-%COMP%] {\n  width: 500px;\n  max-width: 100%;\n  border: solid 1px #ccc;\n  min-height: 60px;\n  display: block;\n  background: white;\n  border-radius: 4px;\n  overflow: hidden;\n}\n.example-box[_ngcontent-%COMP%] {\n  padding: 20px 10px;\n  border-bottom: solid 1px #ccc;\n  color: rgba(0, 0, 0, 0.87);\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: space-between;\n  box-sizing: border-box;\n  cursor: move;\n  background: white;\n  font-size: 14px;\n}\n.cdk-drag-preview[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n  border-radius: 4px;\n  box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2), 0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12);\n}\n.cdk-drag-animating[_ngcontent-%COMP%] {\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\n}\n.example-box[_ngcontent-%COMP%]:last-child {\n  border: none;\n}\n.note-list.cdk-drop-list-dragging[_ngcontent-%COMP%]   app-note-card[_ngcontent-%COMP%]:not(.cdk-drag-placeholder) {\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\n}\n.example-custom-placeholder[_ngcontent-%COMP%] {\n  background: #ccc;\n  border: dotted 3px #999;\n  min-height: 60px;\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\n}\n.floating-add-button[_ngcontent-%COMP%] {\n  position: fixed;\n  bottom: 0px;\n  width: 500px;\n  height: 68px;\n  box-shadow: 0px 0px 15px 5px rgba(165, 154, 215, 0.2);\n  font-size: 24px;\n  font-weight: bold;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxtYWluLXN0eWxlLnNjc3MiLCIuLlxcLi5cXC4uXFwuLlxcbm90ZXMtbGlzdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFJUSxxRUFBQTtBQThCUixrQkFBQTtBQUVBO0VBQ0ksWUFBQTtFQUNBLDBCQUFBO0VBQ0EsZ0JBQUE7QUNqQ0o7QUFMQTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0FBUUo7QUFMQTtFQUNJLGdCQUFBO0VBQ0Esa0JBQUE7QUFRSjtBQUxBO0VBQ0ksY0FBQTtFQUNBLG1CQUFBO0FBUUo7QUFMQTtFQUNFLFlBQUE7RUFDQSxlQUFBO0VBQ0Esc0JBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUFRRjtBQUxBO0VBQ0Usa0JBQUE7RUFDQSw2QkFBQTtFQUNBLDBCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtFQUNBLHNCQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtBQVFGO0FBTEE7RUFDRSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EscUhBQUE7QUFRRjtBQUhBO0VBQ0Usc0RBQUE7QUFNRjtBQUhBO0VBQ0UsWUFBQTtBQU1GO0FBSEE7RUFDRSxzREFBQTtBQU1GO0FBSEE7RUFDRSxnQkFBQTtFQUNBLHVCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxzREFBQTtBQU1GO0FBSEE7RUFDSSxlQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EscURBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUFNSiIsImZpbGUiOiJub3Rlcy1saXN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gY2hhbmdpbmcgYnVsbWEgdmFyaWFibGVzIGFuZCBhZGRpbmcgZ2xvYmFsIHN0eWxlcy4uXHJcbkBjaGFyc2V0IFwidXRmLThcIjtcclxuXHJcbi8vIEltcG9ydCBhIEdvb2dsZSBGb250XHJcbkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9TnVuaXRvOjQwMCw3MDAnKTtcclxuXHJcbi8vIFNldCB5b3VyIGJyYW5kIGNvbG9yc1xyXG4kcHVycGxlOiAjQTU5QUQ3O1xyXG4kcGluazogI0ZFNzZDMjtcclxuJGJsdWU6ICMzN0M3RjI7XHJcbiRsaWdodC1yZWQ6ICNmZmYzZjM7XHJcbiRsaWdodDogI2ZhZmNmZjtcclxuJGJyb3duOiAjNzU3NzYzO1xyXG4kYmVpZ2UtbGlnaHQ6ICNEMEQxQ0Q7XHJcbiRiZWlnZS1saWdodGVyOiAjRUZGMEVCO1xyXG4kZ3JlZW46ICMwYmYzODc7XHJcblxyXG4vLyBVcGRhdGUgQnVsbWEncyBnbG9iYWwgdmFyaWFibGVzXHJcbiRmYW1pbHktc2Fucy1zZXJpZjogXCJOdW5pdG9cIiwgc2Fucy1zZXJpZjtcclxuJGdyZXktZGFyazogJGJyb3duO1xyXG4kZ3JleS1saWdodDogJGJlaWdlLWxpZ2h0O1xyXG4kcHJpbWFyeTogJHB1cnBsZTtcclxuJGxpbms6ICRibHVlO1xyXG4kd2lkZXNjcmVlbi1lbmFibGVkOiBmYWxzZTtcclxuJGZ1bGxoZC1lbmFibGVkOiBmYWxzZTtcclxuXHJcbi8vIFVwZGF0ZSBzb21lIG9mIEJ1bG1hJ3MgY29tcG9uZW50IHZhcmlhYmxlc1xyXG4kYm9keS1iYWNrZ3JvdW5kLWNvbG9yOiAkbGlnaHQ7XHJcbiRjb250cm9sLWJvcmRlci13aWR0aDogMnB4O1xyXG4kaW5wdXQtYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuJGlucHV0LWJhY2tncm91bmQtY29sb3I6ICNGM0Y1RkE7XHJcbiRpbnB1dC1zaGFkb3c6IG5vbmU7XHJcblxyXG5cclxuLyogR2xvYmFsIFN0eWxlcyAqL1xyXG5cclxuaHRtbCwgYm9keSB7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBmb250LXNpemU6IDE4cHggIWltcG9ydGFudDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbn0iLCJAaW1wb3J0IHVybChcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1OdW5pdG86NDAwLDcwMFwiKTtcbi8qIEdsb2JhbCBTdHlsZXMgKi9cbmh0bWwsIGJvZHkge1xuICBoZWlnaHQ6IDEwMCU7XG4gIGZvbnQtc2l6ZTogMThweCAhaW1wb3J0YW50O1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4ubWFpbi1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBtYXgtd2lkdGg6IDUwMHB4O1xuICBtYXJnaW46IGF1dG87XG4gIHBhZGRpbmctdG9wOiA1MHB4O1xufVxuXG4ubm90ZXMtbGlzdCB7XG4gIG1hcmdpbi10b3A6IDM1cHg7XG4gIG1hcmdpbi1ib3R0b206IDcwJTtcbn1cblxuYXBwLW5vdGUtY2FyZCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW4tYm90dG9tOiAyNXB4O1xufVxuXG4uZXhhbXBsZS1saXN0IHtcbiAgd2lkdGg6IDUwMHB4O1xuICBtYXgtd2lkdGg6IDEwMCU7XG4gIGJvcmRlcjogc29saWQgMXB4ICNjY2M7XG4gIG1pbi1oZWlnaHQ6IDYwcHg7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4uZXhhbXBsZS1ib3gge1xuICBwYWRkaW5nOiAyMHB4IDEwcHg7XG4gIGJvcmRlci1ib3R0b206IHNvbGlkIDFweCAjY2NjO1xuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjg3KTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBjdXJzb3I6IG1vdmU7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBmb250LXNpemU6IDE0cHg7XG59XG5cbi5jZGstZHJhZy1wcmV2aWV3IHtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBib3gtc2hhZG93OiAwIDVweCA1cHggLTNweCByZ2JhKDAsIDAsIDAsIDAuMiksIDAgOHB4IDEwcHggMXB4IHJnYmEoMCwgMCwgMCwgMC4xNCksIDAgM3B4IDE0cHggMnB4IHJnYmEoMCwgMCwgMCwgMC4xMik7XG59XG5cbi5jZGstZHJhZy1hbmltYXRpbmcge1xuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMjUwbXMgY3ViaWMtYmV6aWVyKDAsIDAsIDAuMiwgMSk7XG59XG5cbi5leGFtcGxlLWJveDpsYXN0LWNoaWxkIHtcbiAgYm9yZGVyOiBub25lO1xufVxuXG4ubm90ZS1saXN0LmNkay1kcm9wLWxpc3QtZHJhZ2dpbmcgYXBwLW5vdGUtY2FyZDpub3QoLmNkay1kcmFnLXBsYWNlaG9sZGVyKSB7XG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAyNTBtcyBjdWJpYy1iZXppZXIoMCwgMCwgMC4yLCAxKTtcbn1cblxuLmV4YW1wbGUtY3VzdG9tLXBsYWNlaG9sZGVyIHtcbiAgYmFja2dyb3VuZDogI2NjYztcbiAgYm9yZGVyOiBkb3R0ZWQgM3B4ICM5OTk7XG4gIG1pbi1oZWlnaHQ6IDYwcHg7XG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAyNTBtcyBjdWJpYy1iZXppZXIoMCwgMCwgMC4yLCAxKTtcbn1cblxuLmZsb2F0aW5nLWFkZC1idXR0b24ge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGJvdHRvbTogMHB4O1xuICB3aWR0aDogNTAwcHg7XG4gIGhlaWdodDogNjhweDtcbiAgYm94LXNoYWRvdzogMHB4IDBweCAxNXB4IDVweCByZ2JhKDE2NSwgMTU0LCAyMTUsIDAuMik7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59Il19 */"], data: { animation: [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["trigger"])('itemAnim', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('void => *', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
                        height: 0,
                        opacity: 0,
                        transform: 'scale(0.85)',
                        'margin-bottom': 0,
                        paddingTop: 0,
                        paddingBottom: 0,
                        paddingLeft: 0,
                        paddingRight: 0,
                    }),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])(100, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
                        height: '*',
                        'margin-bottom': '*',
                        paddingTop: '*',
                        paddingBottom: '*',
                        paddingLeft: '*',
                        paddingRight: '*',
                    })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])(100)
                ]),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('* => void', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])(50, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
                        transform: 'scale(1.01)'
                    })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])(50, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
                        transform: 'scale(1)',
                        opacity: 0.75,
                    })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('120ms ease-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
                        opacity: 0,
                        transform: 'scale(0.6)',
                    })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('150ms ease-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
                        paddingTop: 0,
                        paddingBottom: 0,
                        paddingLeft: 0,
                        paddingRight: 0,
                        height: 0,
                        'margin-bottom': 0,
                    }))
                ])
            ]),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["trigger"])('listAnim', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('* => *', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["query"])(':enter', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
                            opacity: 0,
                            height: 0,
                        }),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["stagger"])(100, [
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('0.2s ease')
                        ])
                    ], {
                        optional: true,
                    })
                ]),
            ])
        ] } });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NotesListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-notes-list',
                templateUrl: './notes-list.component.html',
                styleUrls: ['./notes-list.component.scss'],
                animations: [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["trigger"])('itemAnim', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('void => *', [
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
                                height: 0,
                                opacity: 0,
                                transform: 'scale(0.85)',
                                'margin-bottom': 0,
                                paddingTop: 0,
                                paddingBottom: 0,
                                paddingLeft: 0,
                                paddingRight: 0,
                            }),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])(100, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
                                height: '*',
                                'margin-bottom': '*',
                                paddingTop: '*',
                                paddingBottom: '*',
                                paddingLeft: '*',
                                paddingRight: '*',
                            })),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])(100)
                        ]),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('* => void', [
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])(50, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
                                transform: 'scale(1.01)'
                            })),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])(50, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
                                transform: 'scale(1)',
                                opacity: 0.75,
                            })),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('120ms ease-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
                                opacity: 0,
                                transform: 'scale(0.6)',
                            })),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('150ms ease-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
                                paddingTop: 0,
                                paddingBottom: 0,
                                paddingLeft: 0,
                                paddingRight: 0,
                                height: 0,
                                'margin-bottom': 0,
                            }))
                        ])
                    ]),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["trigger"])('listAnim', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('* => *', [
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["query"])(':enter', [
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
                                    opacity: 0,
                                    height: 0,
                                }),
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["stagger"])(100, [
                                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('0.2s ease')
                                ])
                            ], {
                                optional: true,
                            })
                        ]),
                    ])
                ]
            }]
    }], function () { return [{ type: src_app_shared_notes_service__WEBPACK_IMPORTED_MODULE_3__["NotesService"] }]; }, null); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map