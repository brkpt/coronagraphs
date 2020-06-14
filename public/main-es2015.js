(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/about/about.component.ts":
/*!******************************************!*\
  !*** ./src/app/about/about.component.ts ***!
  \******************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class AboutComponent {
    constructor() { }
    ngOnInit() {
    }
}
AboutComponent.ɵfac = function AboutComponent_Factory(t) { return new (t || AboutComponent)(); };
AboutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AboutComponent, selectors: [["app-about"]], decls: 4, vars: 0, consts: [[1, "about"], ["href", "https://covidtracking.com"]], template: function AboutComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\nThe data for this site is pulled from the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Covid Tracking Project");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".about[_ngcontent-%COMP%] {\r\n  font-size: 35px;\r\n  color: #0875d4;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWJvdXQvYWJvdXQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGVBQWU7RUFDZixjQUFjO0FBQ2hCIiwiZmlsZSI6InNyYy9hcHAvYWJvdXQvYWJvdXQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hYm91dCB7XHJcbiAgZm9udC1zaXplOiAzNXB4O1xyXG4gIGNvbG9yOiAjMDg3NWQ0O1xyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AboutComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-about',
                templateUrl: './about.component.html',
                styleUrls: ['./about.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.service */ "./src/app/app.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




class AppComponent {
    constructor(appService) {
        this.appService = appService;
        this.appService.getWelcomeMessage().subscribe((data) => {
            this.title = data.content;
        });
    }
    /**
     * This method is used to test the post request
     */
    postData() {
        this.appService.sendData().subscribe((data) => {
            this.postRequestResponse = data.content;
        });
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_service__WEBPACK_IMPORTED_MODULE_1__["AppService"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 24, vars: 0, consts: [[1, "wrapper"], [1, "selectorContainer"], ["routerLink", "/about", "routerLinkActive", "active", 1, "tablink"], ["routerLink", "/statetesting", "routerLinkActive", "active", 1, "tablink"], ["routerLink", "/statepositives", "routerLinkActive", "active", 1, "tablink"], ["routerLink", "/statedeath", "routerLinkActive", "active", 1, "tablink"], ["routerLink", "/statehospitalized", "routerLinkActive", "active", 1, "tablink"], ["routerLink", "/countrydeath", "routerLinkActive", "active", 1, "tablink"], ["routerLink", "/countrydaily", "routerLinkActive", "active", 1, "tablink"], ["routerLink", "/countrytesting", "routerLinkActive", "active", 1, "tablink"], [1, "displayContainer"], [1, "headerContainer"], [1, "headerText"], [1, "graphContainer"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "About");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Utah Testing");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Utah Positives");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Utah Daily Deaths");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Utah Hospitalized");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Country Deaths");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Country Daily");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Country Testing");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "CoronaGraphs");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkActive"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]], styles: ["@font-face {\r\n    font-family: sourceSansPro;\r\n    src: url(https://www.coronagraphs.online/fonts/SourceSansPro-Light.ttf)\r\n}\r\n\r\n@font-face { \r\n    font-family: sourceSansProBold;\r\n    src: url(https://www.coronagraphs.online/fonts/SourceSansPro-Bold.ttf)\r\n}\r\n\r\n\r\n\r\n.wrapper[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 280px auto;\n}\r\n\r\n.selectorContainer[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-rows: repeat(8, 50px);\n  font-family: sourceSansPro;\n}\r\n\r\n.selectorContainer[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  text-decoration: none;\n  color: #000000;\n}\r\n\r\n.selectorContainer[_ngcontent-%COMP%]   .active[_ngcontent-%COMP%] {\n  background-color: #0875d4;\n  color: #ffffff;\n}\r\n\r\n.tablink[_ngcontent-%COMP%] {\n  text-align: right;\n  font-size: 25px;\n  border-radius: 25px;\n  font-family: sourceSansPro;\n  padding-top: 7px;\n  padding-right: 12px;\n}\r\n\r\n.displayContainer[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-rows: 130 auto;\n  font-family: sourceSansPro;\n}\r\n\r\n.headerContainer[_ngcontent-%COMP%] {\n  color: #ffffff;\n  background-color: #0875d4;\n  font-size: 100px;\n  text-align: center;\n  border-top: solid;\n  border-right: solid;\n  border-left: solid;\n  border-color: lightgray;\n}\r\n\r\n.graphContainer[_ngcontent-%COMP%] {\n  border: solid;\n  border-color: lightgray;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY292aWQvY29tbW9uLmNzcyIsInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSwwQkFBMEI7SUFDMUI7QUFDSjs7QUFFQTtJQUNJLDhCQUE4QjtJQUM5QjtBQUNKOztBQUVBOzs7Ozs7Ozs7O0NBVUM7O0FDbEJEO0VBQ0UsYUFBYTtFQUNiLGlDQUFpQztBQUNuQzs7QUFFQTtFQUNFLGFBQWE7RUFDYixtQ0FBbUM7RUFDbkMsMEJBQTBCO0FBQzVCOztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixlQUFlO0VBQ2YsbUJBQW1CO0VBQ25CLDBCQUEwQjtFQUMxQixnQkFBZ0I7RUFDaEIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLDRCQUE0QjtFQUM1QiwwQkFBMEI7QUFDNUI7O0FBRUE7RUFDRSxjQUFjO0VBQ2QseUJBQXlCO0VBQ3pCLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHVCQUF1QjtBQUN6QiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGZvbnQtZmFjZSB7XHJcbiAgICBmb250LWZhbWlseTogc291cmNlU2Fuc1BybztcclxuICAgIHNyYzogdXJsKGh0dHBzOi8vd3d3LmNvcm9uYWdyYXBocy5vbmxpbmUvZm9udHMvU291cmNlU2Fuc1Byby1MaWdodC50dGYpXHJcbn1cclxuXHJcbkBmb250LWZhY2UgeyBcclxuICAgIGZvbnQtZmFtaWx5OiBzb3VyY2VTYW5zUHJvQm9sZDtcclxuICAgIHNyYzogdXJsKGh0dHBzOi8vd3d3LmNvcm9uYWdyYXBocy5vbmxpbmUvZm9udHMvU291cmNlU2Fuc1Byby1Cb2xkLnR0ZilcclxufVxyXG5cclxuLypcclxuQGZvbnQtZmFjZSB7XHJcbiAgICBmb250LWZhbWlseTogc291cmNlU2Fuc1BybztcclxuICAgIHNyYzogdXJsKGh0dHBzOi8vd3d3LmNvcm9uYWdyYXBocy5vbmxpbmUvZm9udHMvU291cmNlU2Fuc1Byby1MaWdodC50dGYpXHJcbn1cclxuXHJcbkBmb250LWZhY2UgeyBcclxuICAgIGZvbnQtZmFtaWx5OiBzb3VyY2VTYW5zUHJvQm9sZDtcclxuICAgIHNyYzogdXJsKGh0dHBzOi8vd3d3LmNvcm9uYWdyYXBocy5vbmxpbmUvZm9udHMvU291cmNlU2Fuc1Byby1Cb2xkLnR0ZilcclxufVxyXG4qL1xyXG4iLCJAaW1wb3J0ICcuL2NvdmlkL2NvbW1vbi5jc3MnO1xuXG4ud3JhcHBlciB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMjgwcHggYXV0bztcbn1cblxuLnNlbGVjdG9yQ29udGFpbmVyIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoOCwgNTBweCk7XG4gIGZvbnQtZmFtaWx5OiBzb3VyY2VTYW5zUHJvO1xufVxuXG4uc2VsZWN0b3JDb250YWluZXIgYSB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgY29sb3I6ICMwMDAwMDA7XG59XG5cbi5zZWxlY3RvckNvbnRhaW5lciAuYWN0aXZlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzA4NzVkNDtcbiAgY29sb3I6ICNmZmZmZmY7XG59XG5cbi50YWJsaW5rIHtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gIGZvbnQtc2l6ZTogMjVweDtcbiAgYm9yZGVyLXJhZGl1czogMjVweDtcbiAgZm9udC1mYW1pbHk6IHNvdXJjZVNhbnNQcm87XG4gIHBhZGRpbmctdG9wOiA3cHg7XG4gIHBhZGRpbmctcmlnaHQ6IDEycHg7XG59XG5cbi5kaXNwbGF5Q29udGFpbmVyIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxMzAgYXV0bztcbiAgZm9udC1mYW1pbHk6IHNvdXJjZVNhbnNQcm87XG59XG5cbi5oZWFkZXJDb250YWluZXIge1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzA4NzVkNDtcbiAgZm9udC1zaXplOiAxMDBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBib3JkZXItdG9wOiBzb2xpZDtcbiAgYm9yZGVyLXJpZ2h0OiBzb2xpZDtcbiAgYm9yZGVyLWxlZnQ6IHNvbGlkO1xuICBib3JkZXItY29sb3I6IGxpZ2h0Z3JheTtcbn1cblxuLmdyYXBoQ29udGFpbmVyIHtcbiAgYm9yZGVyOiBzb2xpZDtcbiAgYm9yZGVyLWNvbG9yOiBsaWdodGdyYXk7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], function () { return [{ type: _app_service__WEBPACK_IMPORTED_MODULE_1__["AppService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.service */ "./src/app/app.service.ts");
/* harmony import */ var _http_interceptor_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./http-interceptor.service */ "./src/app/http-interceptor.service.ts");
/* harmony import */ var _covid_country_countrydailydeaths_countrydailydeaths_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./covid/country/countrydailydeaths/countrydailydeaths.component */ "./src/app/covid/country/countrydailydeaths/countrydailydeaths.component.ts");
/* harmony import */ var _covid_country_countrytotaldeaths_countrytotaldeaths_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./covid/country/countrytotaldeaths/countrytotaldeaths.component */ "./src/app/covid/country/countrytotaldeaths/countrytotaldeaths.component.ts");
/* harmony import */ var _covid_country_countrytesting_countrytesting_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./covid/country/countrytesting/countrytesting.component */ "./src/app/covid/country/countrytesting/countrytesting.component.ts");
/* harmony import */ var _covid_state_statedeaths_statetotaldeaths_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./covid/state/statedeaths/statetotaldeaths.component */ "./src/app/covid/state/statedeaths/statetotaldeaths.component.ts");
/* harmony import */ var _covid_state_statehospitalized_statehospitalized_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./covid/state/statehospitalized/statehospitalized.component */ "./src/app/covid/state/statehospitalized/statehospitalized.component.ts");
/* harmony import */ var _covid_state_stateicu_stateicu_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./covid/state/stateicu/stateicu.component */ "./src/app/covid/state/stateicu/stateicu.component.ts");
/* harmony import */ var _covid_state_stateventilator_stateventilator_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./covid/state/stateventilator/stateventilator.component */ "./src/app/covid/state/stateventilator/stateventilator.component.ts");
/* harmony import */ var _covid_state_statepositives_statepositives_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./covid/state/statepositives/statepositives.component */ "./src/app/covid/state/statepositives/statepositives.component.ts");
/* harmony import */ var _covid_state_statetesting_statetesting_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./covid/state/statetesting/statetesting.component */ "./src/app/covid/state/statetesting/statetesting.component.ts");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./about/about.component */ "./src/app/about/about.component.ts");




















const routes = [
    {
        path: 'about',
        component: _about_about_component__WEBPACK_IMPORTED_MODULE_16__["AboutComponent"]
    },
    {
        path: 'countrydeath',
        component: _covid_country_countrytotaldeaths_countrytotaldeaths_component__WEBPACK_IMPORTED_MODULE_8__["CountryTotalDeathsComponent"]
    },
    {
        path: 'countrydaily',
        component: _covid_country_countrydailydeaths_countrydailydeaths_component__WEBPACK_IMPORTED_MODULE_7__["CountryDailyDeathsComponent"]
    },
    {
        path: 'countrytesting',
        component: _covid_country_countrytesting_countrytesting_component__WEBPACK_IMPORTED_MODULE_9__["CountryTestingComponent"]
    },
    {
        path: 'statedeath',
        component: _covid_state_statedeaths_statetotaldeaths_component__WEBPACK_IMPORTED_MODULE_10__["StateTotalDeathsComponent"]
    },
    {
        path: 'statepositives',
        component: _covid_state_statepositives_statepositives_component__WEBPACK_IMPORTED_MODULE_14__["StatePositivesComponent"]
    },
    {
        path: 'statetesting',
        component: _covid_state_statetesting_statetesting_component__WEBPACK_IMPORTED_MODULE_15__["StateTestingComponent"]
    },
    {
        path: 'statehospitalized',
        component: _covid_state_statehospitalized_statehospitalized_component__WEBPACK_IMPORTED_MODULE_11__["StateHospitalizedComponent"]
    },
    {
        path: '',
        redirectTo: '/about',
        pathMatch: 'full'
    },
];
class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [
        _app_service__WEBPACK_IMPORTED_MODULE_5__["AppService"],
        {
            multi: true,
            provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HTTP_INTERCEPTORS"],
            useClass: _http_interceptor_service__WEBPACK_IMPORTED_MODULE_6__["AppHttpInterceptorService"]
        }
    ], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientXsrfModule"].withOptions({
                cookieName: 'Csrf-Token',
                headerName: 'Csrf-Token',
            }),
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, { enableTracing: true }),
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
        _covid_country_countrydailydeaths_countrydailydeaths_component__WEBPACK_IMPORTED_MODULE_7__["CountryDailyDeathsComponent"],
        _covid_country_countrytotaldeaths_countrytotaldeaths_component__WEBPACK_IMPORTED_MODULE_8__["CountryTotalDeathsComponent"],
        _covid_country_countrytesting_countrytesting_component__WEBPACK_IMPORTED_MODULE_9__["CountryTestingComponent"],
        _covid_state_statedeaths_statetotaldeaths_component__WEBPACK_IMPORTED_MODULE_10__["StateTotalDeathsComponent"],
        _covid_state_statepositives_statepositives_component__WEBPACK_IMPORTED_MODULE_14__["StatePositivesComponent"],
        _covid_state_statehospitalized_statehospitalized_component__WEBPACK_IMPORTED_MODULE_11__["StateHospitalizedComponent"],
        _covid_state_stateicu_stateicu_component__WEBPACK_IMPORTED_MODULE_12__["StateIcuComponent"],
        _covid_state_stateventilator_stateventilator_component__WEBPACK_IMPORTED_MODULE_13__["StateVentilatorComponent"],
        _about_about_component__WEBPACK_IMPORTED_MODULE_16__["AboutComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientXsrfModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                    _covid_country_countrydailydeaths_countrydailydeaths_component__WEBPACK_IMPORTED_MODULE_7__["CountryDailyDeathsComponent"],
                    _covid_country_countrytotaldeaths_countrytotaldeaths_component__WEBPACK_IMPORTED_MODULE_8__["CountryTotalDeathsComponent"],
                    _covid_country_countrytesting_countrytesting_component__WEBPACK_IMPORTED_MODULE_9__["CountryTestingComponent"],
                    _covid_state_statedeaths_statetotaldeaths_component__WEBPACK_IMPORTED_MODULE_10__["StateTotalDeathsComponent"],
                    _covid_state_statepositives_statepositives_component__WEBPACK_IMPORTED_MODULE_14__["StatePositivesComponent"],
                    _covid_state_statehospitalized_statehospitalized_component__WEBPACK_IMPORTED_MODULE_11__["StateHospitalizedComponent"],
                    _covid_state_stateicu_stateicu_component__WEBPACK_IMPORTED_MODULE_12__["StateIcuComponent"],
                    _covid_state_stateventilator_stateventilator_component__WEBPACK_IMPORTED_MODULE_13__["StateVentilatorComponent"],
                    _about_about_component__WEBPACK_IMPORTED_MODULE_16__["AboutComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientXsrfModule"].withOptions({
                        cookieName: 'Csrf-Token',
                        headerName: 'Csrf-Token',
                    }),
                    _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, { enableTracing: true }),
                ],
                providers: [
                    _app_service__WEBPACK_IMPORTED_MODULE_5__["AppService"],
                    {
                        multi: true,
                        provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HTTP_INTERCEPTORS"],
                        useClass: _http_interceptor_service__WEBPACK_IMPORTED_MODULE_6__["AppHttpInterceptorService"]
                    }
                ],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.service.ts":
/*!********************************!*\
  !*** ./src/app/app.service.ts ***!
  \********************************/
/*! exports provided: AppService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppService", function() { return AppService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");




/**
 * Class representing application service.
 *
 * @class AppService.
 */
class AppService {
    constructor(http) {
        this.http = http;
        this.serviceUrl = '/api/summary';
        this.dataPostTestUrl = '/api/postTest';
    }
    /**
     * Makes a http get request to retrieve the welcome message from the backend service.
     */
    getWelcomeMessage() {
        return this.http.get(this.serviceUrl).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(response => response));
    }
    /**
     * Makes a http post request to send some data to backend & get response.
     */
    sendData() {
        return this.http.post(this.dataPostTestUrl, {});
    }
}
AppService.ɵfac = function AppService_Factory(t) { return new (t || AppService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
AppService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AppService, factory: AppService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/covid/country/countrydailydeaths/countrydailydeaths.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/covid/country/countrydailydeaths/countrydailydeaths.component.ts ***!
  \**********************************************************************************/
/*! exports provided: CountryDailyDeathsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CountryDailyDeathsComponent", function() { return CountryDailyDeathsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _covidcomponent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../covidcomponent */ "./src/app/covid/covidcomponent.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _google_chart_google_chart_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../google-chart/google-chart.service */ "./src/app/google-chart/google-chart.service.ts");
/* harmony import */ var _covidtracking_covidtracking_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../covidtracking/covidtracking.service */ "./src/app/covidtracking/covidtracking.service.ts");






class DailyDeaths {
    constructor(date, deaths, day3sma, day7sma) {
        this.date = '';
        this.deaths = 0;
        this.day3sma = 0;
        this.day7sma = 0;
        this.date = date;
        this.deaths = deaths;
        this.day3sma = day3sma;
        this.day7sma = day7sma;
    }
}
;
class CountryDailyDeathsComponent extends _covidcomponent__WEBPACK_IMPORTED_MODULE_1__["CovidComponent"] {
    constructor(route, chartServices, covidTrackingServices) {
        super(chartServices, covidTrackingServices);
        this.chartServices = chartServices;
        this.covidTrackingServices = covidTrackingServices;
    }
    loadData() {
        this.covidTrackingServices.getCountryDaily().subscribe((data) => {
            let sorted = data.sort((a, b) => {
                return a.date < b.date ? -1 : a.date > b.date ? 1 : 0;
            });
            // Collect daily deaths
            let dailyDeaths = [];
            let startDate = this.convertDate(sorted[0].date.toString());
            dailyDeaths.push(new DailyDeaths(startDate, sorted[0].death, sorted[0].death, sorted[0].death));
            for (let i = 1; i < sorted.length; i++) {
                let dateStr = this.convertDate(sorted[i].date.toString());
                if (i > 2) {
                    let death3sma = (sorted[i - 3].deathIncrease +
                        sorted[i - 2].deathIncrease +
                        sorted[i - 1].deathIncrease) / 3;
                    if (i > 7) {
                        let death7sma = (sorted[i - 7].deathIncrease +
                            sorted[i - 6].deathIncrease +
                            sorted[i - 5].deathIncrease +
                            sorted[i - 4].deathIncrease +
                            sorted[i - 3].deathIncrease +
                            sorted[i - 2].deathIncrease +
                            sorted[i - 1].deathIncrease) / 7;
                        dailyDeaths.push(new DailyDeaths(dateStr, sorted[i].deathIncrease, death3sma, death7sma));
                    }
                    else {
                        dailyDeaths.push(new DailyDeaths(dateStr, sorted[i].deathIncrease, death3sma, death3sma));
                    }
                }
                else {
                    dailyDeaths.push(new DailyDeaths(dateStr, sorted[i].deathIncrease, sorted[i].deathIncrease, sorted[i].deathIncrease));
                }
            }
            let rawData = [['Date', 'Deaths', '3-day SMA', '7-day SMA']];
            dailyDeaths.forEach((datum) => {
                let bar = [datum.date, datum.deaths, datum.day3sma, datum.day7sma];
                rawData.push(bar);
            });
            let options = {
                title: 'Daily Deaths (US)',
                width: 1100,
                height: 700,
                seriesType: 'bars',
                series: {
                    1: {
                        type: 'line',
                        color: 'green'
                    },
                    2: {
                        type: 'line',
                        color: 'orange'
                    }
                }
            };
            let newData = this.gLib.visualization.arrayToDataTable(rawData);
            let dailyDeathChart = new this.gLib.visualization.ComboChart(document.getElementById('dailyDeaths'));
            dailyDeathChart.draw(newData, options);
        });
    }
    refreshDailyDeathChart() {
    }
}
CountryDailyDeathsComponent.ɵfac = function CountryDailyDeathsComponent_Factory(t) { return new (t || CountryDailyDeathsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_google_chart_google_chart_service__WEBPACK_IMPORTED_MODULE_3__["GoogleChartService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_covidtracking_covidtracking_service__WEBPACK_IMPORTED_MODULE_4__["CovidTrackingService"])); };
CountryDailyDeathsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CountryDailyDeathsComponent, selectors: [["app-countrydailydeaths"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]], decls: 1, vars: 0, consts: [["id", "dailyDeaths"]], template: function CountryDailyDeathsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 0);
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvdmlkL2NvdW50cnkvY291bnRyeWRhaWx5ZGVhdGhzL2NvdW50cnlkYWlseWRlYXRocy5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CountryDailyDeathsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-countrydailydeaths',
                templateUrl: './countrydailydeaths.component.html',
                styleUrls: ['./countrydailydeaths.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }, { type: _google_chart_google_chart_service__WEBPACK_IMPORTED_MODULE_3__["GoogleChartService"] }, { type: _covidtracking_covidtracking_service__WEBPACK_IMPORTED_MODULE_4__["CovidTrackingService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/covid/country/countrytesting/countrytesting.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/covid/country/countrytesting/countrytesting.component.ts ***!
  \**************************************************************************/
/*! exports provided: CountryTestingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CountryTestingComponent", function() { return CountryTestingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _covidcomponent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../covidcomponent */ "./src/app/covid/covidcomponent.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _google_chart_google_chart_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../google-chart/google-chart.service */ "./src/app/google-chart/google-chart.service.ts");
/* harmony import */ var src_app_covidtracking_covidtracking_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/covidtracking/covidtracking.service */ "./src/app/covidtracking/covidtracking.service.ts");






class DailyTesting {
    constructor(date, tests, positive, sma) {
        this.date = '';
        this.tests = 0;
        this.positive = 0;
        this.sma = 0;
        this.date = date;
        this.tests = tests;
        this.positive = positive;
        this.sma = sma;
    }
}
;
class DailyPositives {
    constructor(date, positiveRate, sma) {
        this.date = '';
        this.positiveRate = 0;
        this.sma = 0;
        this.date = date;
        this.positiveRate = positiveRate;
        this.sma = sma;
    }
}
;
class CountryTestingComponent extends _covidcomponent__WEBPACK_IMPORTED_MODULE_1__["CovidComponent"] {
    constructor(route, chartServices, covidTrackingServices) {
        super(chartServices, covidTrackingServices);
        this.chartServices = chartServices;
        this.covidTrackingServices = covidTrackingServices;
    }
    loadData() {
        this.covidTrackingServices.getCountryDaily().subscribe((data) => {
            // Collect the data
            let sorted = data.sort((a, b) => {
                return a.date < b.date ? -1 : a.date > b.date ? 1 : 0;
            });
            // Collect daily deaths
            let dailyTesting = [];
            let dailyPositive = [];
            let startDate = this.convertDate(sorted[0].date.toString());
            dailyTesting.push(new DailyTesting(startDate, sorted[0].totalTestResults, sorted[0].positive, sorted[0].negative));
            let basePositiveRate = sorted[0].positiveIncrease / sorted[0].totalTestResultsIncrease;
            dailyPositive.push(new DailyPositives(startDate, basePositiveRate, basePositiveRate));
            for (let i = 1; i < sorted.length; i++) {
                let dateStr = this.convertDate(sorted[i].date.toString());
                let positiveRate = sorted[i].positiveIncrease / sorted[i].totalTestResultsIncrease;
                if (i > 2) {
                    let positivesma = (sorted[i - 3].positiveIncrease +
                        sorted[i - 2].positiveIncrease +
                        sorted[i - 1].positiveIncrease) / 3;
                    dailyTesting.push(new DailyTesting(dateStr, sorted[i].totalTestResultsIncrease, sorted[i].positiveIncrease, positivesma));
                    let positiveRate3Sma = (sorted[i - 3].positiveIncrease / sorted[i - 3].totalTestResultsIncrease +
                        sorted[i - 2].positiveIncrease / sorted[i - 2].totalTestResultsIncrease +
                        sorted[i - 1].positiveIncrease / sorted[i - 1].totalTestResultsIncrease) / 3;
                    dailyPositive.push(new DailyPositives(dateStr, sorted[i].positiveIncrease / sorted[i].totalTestResultsIncrease, positiveRate3Sma));
                }
                else {
                    dailyTesting.push(new DailyTesting(dateStr, sorted[i].positiveIncrease, sorted[i].positiveIncrease, sorted[i].positiveIncrease));
                    dailyPositive.push(new DailyPositives(dateStr, positiveRate, positiveRate));
                }
            }
            let rawData = [['Date', 'Positive', 'Tests', 'SMA']];
            dailyTesting.forEach((datum) => {
                let data = [datum.date, datum.positive, datum.tests, datum.sma];
                rawData.push(data);
            });
            let options = {
                title: 'Daily Positive (US)',
                width: 1100,
                height: 700,
                seriesType: 'bars',
                isStacked: true,
                series: {
                    0: {
                        color: 'blue'
                    },
                    1: {
                        color: 'green'
                    },
                    2: {
                        type: 'line',
                        color: 'orange'
                    }
                }
            };
            let newData = this.gLib.visualization.arrayToDataTable(rawData);
            let dailyPositiveChart = new this.gLib.visualization.ComboChart(document.getElementById('dailyTesting'));
            dailyPositiveChart.draw(newData, options);
        });
    }
}
CountryTestingComponent.ɵfac = function CountryTestingComponent_Factory(t) { return new (t || CountryTestingComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_google_chart_google_chart_service__WEBPACK_IMPORTED_MODULE_3__["GoogleChartService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_covidtracking_covidtracking_service__WEBPACK_IMPORTED_MODULE_4__["CovidTrackingService"])); };
CountryTestingComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CountryTestingComponent, selectors: [["app-countrytesting"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]], decls: 1, vars: 0, consts: [["id", "dailyTesting"]], template: function CountryTestingComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 0);
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvdmlkL2NvdW50cnkvY291bnRyeXRlc3RpbmcvY291bnRyeXRlc3RpbmcuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CountryTestingComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-countrytesting',
                templateUrl: './countrytesting.component.html',
                styleUrls: ['./countrytesting.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }, { type: _google_chart_google_chart_service__WEBPACK_IMPORTED_MODULE_3__["GoogleChartService"] }, { type: src_app_covidtracking_covidtracking_service__WEBPACK_IMPORTED_MODULE_4__["CovidTrackingService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/covid/country/countrytotaldeaths/countrytotaldeaths.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/covid/country/countrytotaldeaths/countrytotaldeaths.component.ts ***!
  \**********************************************************************************/
/*! exports provided: CountryTotalDeathsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CountryTotalDeathsComponent", function() { return CountryTotalDeathsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _covidcomponent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../covidcomponent */ "./src/app/covid/covidcomponent.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _google_chart_google_chart_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../google-chart/google-chart.service */ "./src/app/google-chart/google-chart.service.ts");
/* harmony import */ var src_app_covidtracking_covidtracking_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/covidtracking/covidtracking.service */ "./src/app/covidtracking/covidtracking.service.ts");






class TotalDeaths {
    constructor(date, deaths) {
        this.date = '';
        this.deaths = 0;
        this.date = date;
        this.deaths = deaths;
    }
}
;
class CountryTotalDeathsComponent extends _covidcomponent__WEBPACK_IMPORTED_MODULE_1__["CovidComponent"] {
    constructor(route, chartServices, covidTrackingServices) {
        super(chartServices, covidTrackingServices);
        this.chartServices = chartServices;
        this.covidTrackingServices = covidTrackingServices;
    }
    loadData() {
        this.covidTrackingServices.getCountryDaily().subscribe((data) => {
            // Collect the data
            let sorted = data.sort((a, b) => {
                return a.date < b.date ? -1 : a.date > b.date ? 1 : 0;
            });
            // Collect daily deaths
            let rawData = [['Date', 'Deaths']];
            sorted.forEach((d) => {
                rawData.push([this.convertDate(d.date.toString()), d.death]);
            });
            // Collect daily testing
            let options = {
                title: 'Total Deaths (US)',
                width: 1100,
                height: 700,
                seriesType: 'bars',
            };
            let newData = this.gLib.visualization.arrayToDataTable(rawData);
            let totalDeathChart = new this.gLib.visualization.ComboChart(document.getElementById('totalDeaths'));
            totalDeathChart.draw(newData, options);
        });
    }
}
CountryTotalDeathsComponent.ɵfac = function CountryTotalDeathsComponent_Factory(t) { return new (t || CountryTotalDeathsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_google_chart_google_chart_service__WEBPACK_IMPORTED_MODULE_3__["GoogleChartService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_covidtracking_covidtracking_service__WEBPACK_IMPORTED_MODULE_4__["CovidTrackingService"])); };
CountryTotalDeathsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CountryTotalDeathsComponent, selectors: [["app-countrytotaldeaths"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]], decls: 1, vars: 0, consts: [["id", "totalDeaths"]], template: function CountryTotalDeathsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 0);
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvdmlkL2NvdW50cnkvY291bnRyeXRvdGFsZGVhdGhzL2NvdW50cnl0b3RhbGRlYXRocy5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CountryTotalDeathsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-countrytotaldeaths',
                templateUrl: './countrytotaldeaths.component.html',
                styleUrls: ['./countrytotaldeaths.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }, { type: _google_chart_google_chart_service__WEBPACK_IMPORTED_MODULE_3__["GoogleChartService"] }, { type: src_app_covidtracking_covidtracking_service__WEBPACK_IMPORTED_MODULE_4__["CovidTrackingService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/covid/covidcomponent.ts":
/*!*****************************************!*\
  !*** ./src/app/covid/covidcomponent.ts ***!
  \*****************************************/
/*! exports provided: CovidComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CovidComponent", function() { return CovidComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _google_chart_google_chart_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../google-chart/google-chart.service */ "./src/app/google-chart/google-chart.service.ts");
/* harmony import */ var _covidtracking_covidtracking_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../covidtracking/covidtracking.service */ "./src/app/covidtracking/covidtracking.service.ts");



class CovidComponent {
    constructor(chartServices, covidTrackingServices) {
        this.chartServices = chartServices;
        this.covidTrackingServices = covidTrackingServices;
    }
    ngOnInit() {
        this.checkLoading();
    }
    checkLoading() {
        if (this.chartServices.getLoaded()) {
            this.gLib = this.chartServices.getGoogle();
            this.loadData();
        }
        else {
            // Check again in 3 seconds
            setTimeout(this.checkLoading, 1000);
        }
    }
    convertDate(oldDate) {
        return oldDate.slice(4, 6) + '-' + oldDate.slice(6, 8) + '-' + oldDate.slice(0, 4);
    }
    getSma(data, currIndex, dayCount) {
        if (currIndex <= dayCount) {
            return data[currIndex];
        }
        else {
            let sma = 0;
            for (let index = currIndex - dayCount + 1; index < currIndex + 1; index++) {
                sma = sma + data[index];
            }
            return sma / dayCount;
        }
    }
}
CovidComponent.ɵfac = function CovidComponent_Factory(t) { return new (t || CovidComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_google_chart_google_chart_service__WEBPACK_IMPORTED_MODULE_1__["GoogleChartService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_covidtracking_covidtracking_service__WEBPACK_IMPORTED_MODULE_2__["CovidTrackingService"])); };
CovidComponent.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: CovidComponent });


/***/ }),

/***/ "./src/app/covid/state/statedeaths/statetotaldeaths.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/covid/state/statedeaths/statetotaldeaths.component.ts ***!
  \***********************************************************************/
/*! exports provided: StateTotalDeathsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StateTotalDeathsComponent", function() { return StateTotalDeathsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _covidcomponent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../covidcomponent */ "./src/app/covid/covidcomponent.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _google_chart_google_chart_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../google-chart/google-chart.service */ "./src/app/google-chart/google-chart.service.ts");
/* harmony import */ var src_app_covidtracking_covidtracking_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/covidtracking/covidtracking.service */ "./src/app/covidtracking/covidtracking.service.ts");






class StateTotalDeathsComponent extends _covidcomponent__WEBPACK_IMPORTED_MODULE_1__["CovidComponent"] {
    constructor(route, chartServices, covidTrackingServices) {
        super(chartServices, covidTrackingServices);
        this.chartServices = chartServices;
        this.covidTrackingServices = covidTrackingServices;
    }
    loadData() {
        let state = 'UT';
        this.covidTrackingServices.getHistoricalByState(state).subscribe((data) => {
            const stateData = data.sort((a, b) => {
                return a.date < b.date ? -1 : a.date > b.date ? 1 : 0;
            });
            let rawData = [['Date', 'Deaths', '3-Day SMA', '7-Day SMA']];
            let dailyDeaths = stateData.map((d) => d.deathIncrease);
            for (let index = 1; index < stateData.length; index++) {
                let sma3 = this.getSma(dailyDeaths, index, 3);
                let sma7 = this.getSma(dailyDeaths, index, 7);
                rawData.push([this.convertDate(stateData[index].date.toString()), dailyDeaths[index], sma3, sma7]);
            }
            let chartData = this.gLib.visualization.arrayToDataTable(rawData);
            let options = {
                title: 'Daily Deaths (' + state + ')',
                width: 1100,
                height: 700,
                seriesType: 'bars',
                series: {
                    0: {
                        color: 'blue'
                    },
                    1: {
                        type: 'line',
                        color: 'orange'
                    },
                    2: {
                        type: 'line',
                        color: 'red'
                    }
                }
            };
            let totalDeathChart = new this.gLib.visualization.ComboChart(document.getElementById('stateDeaths'));
            totalDeathChart.draw(chartData, options);
        });
    }
}
StateTotalDeathsComponent.ɵfac = function StateTotalDeathsComponent_Factory(t) { return new (t || StateTotalDeathsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_google_chart_google_chart_service__WEBPACK_IMPORTED_MODULE_3__["GoogleChartService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_covidtracking_covidtracking_service__WEBPACK_IMPORTED_MODULE_4__["CovidTrackingService"])); };
StateTotalDeathsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: StateTotalDeathsComponent, selectors: [["app-statedeaths"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]], decls: 1, vars: 0, consts: [["id", "stateDeaths"]], template: function StateTotalDeathsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 0);
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvdmlkL3N0YXRlL3N0YXRlZGVhdGhzL3N0YXRldG90YWxkZWF0aHMuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](StateTotalDeathsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-statedeaths',
                templateUrl: './statetotaldeaths.component.html',
                styleUrls: ['./statetotaldeaths.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }, { type: _google_chart_google_chart_service__WEBPACK_IMPORTED_MODULE_3__["GoogleChartService"] }, { type: src_app_covidtracking_covidtracking_service__WEBPACK_IMPORTED_MODULE_4__["CovidTrackingService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/covid/state/statehospitalized/statehospitalized.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/covid/state/statehospitalized/statehospitalized.component.ts ***!
  \******************************************************************************/
/*! exports provided: StateHospitalizedComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StateHospitalizedComponent", function() { return StateHospitalizedComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _covidcomponent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../covidcomponent */ "./src/app/covid/covidcomponent.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _google_chart_google_chart_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../google-chart/google-chart.service */ "./src/app/google-chart/google-chart.service.ts");
/* harmony import */ var src_app_covidtracking_covidtracking_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/covidtracking/covidtracking.service */ "./src/app/covidtracking/covidtracking.service.ts");






class StateHospitalizedComponent extends _covidcomponent__WEBPACK_IMPORTED_MODULE_1__["CovidComponent"] {
    constructor(route, chartServices, covidTrackingServices) {
        super(chartServices, covidTrackingServices);
        this.chartServices = chartServices;
        this.covidTrackingServices = covidTrackingServices;
    }
    loadData() {
        this.covidTrackingServices.getHistoricalByState('ut').subscribe((data) => {
            const stateData = data.sort((a, b) => {
                return a.date < b.date ? -1 : a.date > b.date ? 1 : 0;
            });
            let rawData = [['Date', 'Hospitalizations', '3-Day SMA', '7-Day SMA']];
            let hospitalizations = stateData.map((d) => {
                if (Math.abs(d.hospitalizedIncrease) > 100) {
                    return 0;
                }
                else {
                    return d.hospitalizedIncrease;
                }
            });
            rawData.push([this.convertDate(stateData[0].date.toString()), hospitalizations[0], hospitalizations[0], hospitalizations[0]]);
            for (let index = 0; index < stateData.length; index++) {
                let sma3 = this.getSma(hospitalizations, index, 3);
                let sma7 = this.getSma(hospitalizations, index, 7);
                rawData.push([this.convertDate(stateData[index].date.toString()), Math.abs(hospitalizations[index]), sma3, sma7]);
            }
            let chartData = this.gLib.visualization.arrayToDataTable(rawData);
            let options = {
                title: 'Currently In Hospital (UT)',
                width: 1100,
                height: 700,
                seriesType: 'bars',
                series: {
                    0: {
                        color: 'blue'
                    },
                    1: {
                        type: 'line',
                        color: 'orange'
                    },
                    2: {
                        type: 'line',
                        color: 'red'
                    }
                }
            };
            let totalDeathChart = new this.gLib.visualization.ComboChart(document.getElementById('statehospitalizations'));
            totalDeathChart.draw(chartData, options);
        });
    }
}
StateHospitalizedComponent.ɵfac = function StateHospitalizedComponent_Factory(t) { return new (t || StateHospitalizedComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_google_chart_google_chart_service__WEBPACK_IMPORTED_MODULE_3__["GoogleChartService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_covidtracking_covidtracking_service__WEBPACK_IMPORTED_MODULE_4__["CovidTrackingService"])); };
StateHospitalizedComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: StateHospitalizedComponent, selectors: [["app-statehospitalized"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]], decls: 1, vars: 0, consts: [["id", "statehospitalizations"]], template: function StateHospitalizedComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 0);
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvdmlkL3N0YXRlL3N0YXRlaG9zcGl0YWxpemVkL3N0YXRlaG9zcGl0YWxpemVkLmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](StateHospitalizedComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-statehospitalized',
                templateUrl: './statehospitalized.component.html',
                styleUrls: ['./statehospitalized.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }, { type: _google_chart_google_chart_service__WEBPACK_IMPORTED_MODULE_3__["GoogleChartService"] }, { type: src_app_covidtracking_covidtracking_service__WEBPACK_IMPORTED_MODULE_4__["CovidTrackingService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/covid/state/stateicu/stateicu.component.ts":
/*!************************************************************!*\
  !*** ./src/app/covid/state/stateicu/stateicu.component.ts ***!
  \************************************************************/
/*! exports provided: StateIcuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StateIcuComponent", function() { return StateIcuComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _covidcomponent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../covidcomponent */ "./src/app/covid/covidcomponent.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _google_chart_google_chart_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../google-chart/google-chart.service */ "./src/app/google-chart/google-chart.service.ts");
/* harmony import */ var src_app_covidtracking_covidtracking_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/covidtracking/covidtracking.service */ "./src/app/covidtracking/covidtracking.service.ts");






class StateIcuComponent extends _covidcomponent__WEBPACK_IMPORTED_MODULE_1__["CovidComponent"] {
    constructor(route, chartServices, covidTrackingServices) {
        super(chartServices, covidTrackingServices);
        this.chartServices = chartServices;
        this.covidTrackingServices = covidTrackingServices;
    }
    loadData() {
        this.covidTrackingServices.getHistoricalByState('ut').subscribe((data) => {
            const stateData = data.sort((a, b) => {
                return a.date < b.date ? -1 : a.date > b.date ? 1 : 0;
            });
            let rawData = [['Date', 'ICU']];
            stateData.forEach((d) => {
                rawData.push([this.convertDate(d.date.toString()), d.hospitalizedIncrease]);
            });
            let chartData = this.gLib.visualization.arrayToDataTable(rawData);
            let options = {
                title: 'Currently in ICU (UT)',
                width: 1100,
                height: 700,
                seriesType: 'bars',
            };
            let icuChart = new this.gLib.visualization.ComboChart(document.getElementById('icu'));
            icuChart.draw(chartData, options);
        });
    }
}
StateIcuComponent.ɵfac = function StateIcuComponent_Factory(t) { return new (t || StateIcuComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_google_chart_google_chart_service__WEBPACK_IMPORTED_MODULE_3__["GoogleChartService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_covidtracking_covidtracking_service__WEBPACK_IMPORTED_MODULE_4__["CovidTrackingService"])); };
StateIcuComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: StateIcuComponent, selectors: [["app-stateicu"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]], decls: 1, vars: 0, consts: [["id", "icu"]], template: function StateIcuComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 0);
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvdmlkL3N0YXRlL3N0YXRlaWN1L3N0YXRlaWN1LmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](StateIcuComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-stateicu',
                templateUrl: './stateicu.component.html',
                styleUrls: ['./stateicu.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }, { type: _google_chart_google_chart_service__WEBPACK_IMPORTED_MODULE_3__["GoogleChartService"] }, { type: src_app_covidtracking_covidtracking_service__WEBPACK_IMPORTED_MODULE_4__["CovidTrackingService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/covid/state/statepositives/statepositives.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/covid/state/statepositives/statepositives.component.ts ***!
  \************************************************************************/
/*! exports provided: StatePositivesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StatePositivesComponent", function() { return StatePositivesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _covidcomponent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../covidcomponent */ "./src/app/covid/covidcomponent.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _google_chart_google_chart_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../google-chart/google-chart.service */ "./src/app/google-chart/google-chart.service.ts");
/* harmony import */ var src_app_covidtracking_covidtracking_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/covidtracking/covidtracking.service */ "./src/app/covidtracking/covidtracking.service.ts");






class StatePositivesComponent extends _covidcomponent__WEBPACK_IMPORTED_MODULE_1__["CovidComponent"] {
    constructor(route, chartServices, covidTrackingServices) {
        super(chartServices, covidTrackingServices);
        this.chartServices = chartServices;
        this.covidTrackingServices = covidTrackingServices;
    }
    loadData() {
        let state = 'UT';
        this.covidTrackingServices.getHistoricalByState(state).subscribe((data) => {
            const stateData = data.sort((a, b) => {
                return a.date < b.date ? -1 : a.date > b.date ? 1 : 0;
            });
            let rawData = [['Date', 'Positive', '3 Day SMA', '7 Day SMA']];
            let positives = stateData.map((d) => { return d.positiveIncrease; });
            rawData.push([this.convertDate(stateData[0].date.toString()), stateData[0].positive, stateData[0].positive, stateData[0].positive]);
            for (let index = 1; index < stateData.length; index++) {
                let sma3 = this.getSma(positives, index, 3);
                let sma7 = this.getSma(positives, index, 7);
                rawData.push([this.convertDate(stateData[index].date.toString()), positives[index], sma3, sma7]);
            }
            let chartData = this.gLib.visualization.arrayToDataTable(rawData);
            let options = {
                title: 'Daily Positive Tests (' + state + ')',
                width: 1100,
                height: 700,
                seriesType: 'bars',
                series: {
                    0: {
                        color: 'blue'
                    },
                    1: {
                        type: 'line',
                        color: 'orange'
                    },
                    2: {
                        type: 'line',
                        color: 'red'
                    }
                }
            };
            let totalStateTesting = new this.gLib.visualization.ComboChart(document.getElementById('statepositives'));
            totalStateTesting.draw(chartData, options);
        });
    }
}
StatePositivesComponent.ɵfac = function StatePositivesComponent_Factory(t) { return new (t || StatePositivesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_google_chart_google_chart_service__WEBPACK_IMPORTED_MODULE_3__["GoogleChartService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_covidtracking_covidtracking_service__WEBPACK_IMPORTED_MODULE_4__["CovidTrackingService"])); };
StatePositivesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: StatePositivesComponent, selectors: [["app-statetesting"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]], decls: 1, vars: 0, consts: [["id", "statepositives"]], template: function StatePositivesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 0);
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvdmlkL3N0YXRlL3N0YXRlcG9zaXRpdmVzL3N0YXRlcG9zaXRpdmVzLmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](StatePositivesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-statetesting',
                templateUrl: './statepositives.component.html',
                styleUrls: ['./statepositives.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }, { type: _google_chart_google_chart_service__WEBPACK_IMPORTED_MODULE_3__["GoogleChartService"] }, { type: src_app_covidtracking_covidtracking_service__WEBPACK_IMPORTED_MODULE_4__["CovidTrackingService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/covid/state/statetesting/statetesting.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/covid/state/statetesting/statetesting.component.ts ***!
  \********************************************************************/
/*! exports provided: StateTestingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StateTestingComponent", function() { return StateTestingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _covidcomponent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../covidcomponent */ "./src/app/covid/covidcomponent.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _google_chart_google_chart_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../google-chart/google-chart.service */ "./src/app/google-chart/google-chart.service.ts");
/* harmony import */ var src_app_covidtracking_covidtracking_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/covidtracking/covidtracking.service */ "./src/app/covidtracking/covidtracking.service.ts");






class StateTestingComponent extends _covidcomponent__WEBPACK_IMPORTED_MODULE_1__["CovidComponent"] {
    constructor(route, chartServices, covidTrackingServices) {
        super(chartServices, covidTrackingServices);
        this.chartServices = chartServices;
        this.covidTrackingServices = covidTrackingServices;
    }
    loadData() {
        let state = 'UT';
        this.covidTrackingServices.getHistoricalByState(state).subscribe((data) => {
            const stateData = data.sort((a, b) => {
                return a.date < b.date ? -1 : a.date > b.date ? 1 : 0;
            });
            let testingDeltas = [];
            for (let index = 0; index < stateData.length; index++) {
                testingDeltas.push(stateData[index].totalTestResultsIncrease);
            }
            let rawData = [['Date', 'Positive', '3 Day SMA', '7 Day SMA']];
            rawData.push([this.convertDate(stateData[0].date.toString()), stateData[0].totalTestResultsIncrease, stateData[0].totalTestResultsIncrease, stateData[0].totalTestResultsIncrease]);
            for (let index = 1; index < stateData.length; index++) {
                let sma3 = this.getSma(testingDeltas, index, 3);
                let sma7 = this.getSma(testingDeltas, index, 7);
                rawData.push([this.convertDate(stateData[index].date.toString()), stateData[index].totalTestResultsIncrease, sma3, sma7]);
            }
            let chartData = this.gLib.visualization.arrayToDataTable(rawData);
            let options = {
                title: 'Daily Total Tests (' + state + ')',
                width: 1100,
                height: 700,
                seriesType: 'bars',
                series: {
                    0: {
                        color: 'blue'
                    },
                    1: {
                        type: 'line',
                        color: 'orange'
                    },
                    2: {
                        type: 'line',
                        color: 'red'
                    }
                }
            };
            let totalStateTesting = new this.gLib.visualization.ComboChart(document.getElementById('statetesting'));
            totalStateTesting.draw(chartData, options);
        });
    }
}
StateTestingComponent.ɵfac = function StateTestingComponent_Factory(t) { return new (t || StateTestingComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_google_chart_google_chart_service__WEBPACK_IMPORTED_MODULE_3__["GoogleChartService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_covidtracking_covidtracking_service__WEBPACK_IMPORTED_MODULE_4__["CovidTrackingService"])); };
StateTestingComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: StateTestingComponent, selectors: [["app-statetesting"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]], decls: 1, vars: 0, consts: [["id", "statetesting"]], template: function StateTestingComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 0);
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvdmlkL3N0YXRlL3N0YXRldGVzdGluZy9zdGF0ZXRlc3RpbmcuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](StateTestingComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-statetesting',
                templateUrl: './statetesting.component.html',
                styleUrls: ['./statetesting.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }, { type: _google_chart_google_chart_service__WEBPACK_IMPORTED_MODULE_3__["GoogleChartService"] }, { type: src_app_covidtracking_covidtracking_service__WEBPACK_IMPORTED_MODULE_4__["CovidTrackingService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/covid/state/stateventilator/stateventilator.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/covid/state/stateventilator/stateventilator.component.ts ***!
  \**************************************************************************/
/*! exports provided: StateVentilatorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StateVentilatorComponent", function() { return StateVentilatorComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _covidcomponent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../covidcomponent */ "./src/app/covid/covidcomponent.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _google_chart_google_chart_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../google-chart/google-chart.service */ "./src/app/google-chart/google-chart.service.ts");
/* harmony import */ var src_app_covidtracking_covidtracking_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/covidtracking/covidtracking.service */ "./src/app/covidtracking/covidtracking.service.ts");






class StateVentilatorComponent extends _covidcomponent__WEBPACK_IMPORTED_MODULE_1__["CovidComponent"] {
    constructor(route, chartServices, covidTrackingServices) {
        super(chartServices, covidTrackingServices);
        this.chartServices = chartServices;
        this.covidTrackingServices = covidTrackingServices;
    }
    loadData() {
        this.covidTrackingServices.getHistoricalByState('ut').subscribe((data) => {
            const stateData = data.sort((a, b) => {
                return a.date < b.date ? -1 : a.date > b.date ? 1 : 0;
            });
            let rawData = [['Date', 'Ventilator']];
            stateData.forEach((d) => {
                rawData.push([this.convertDate(d.date.toString()), d.onVentilatorCurrently]);
            });
            let chartData = this.gLib.visualization.arrayToDataTable(rawData);
            let options = {
                title: 'Currently On Ventilator (UT)',
                width: 1100,
                height: 700,
                seriesType: 'bars',
            };
            let ventilatorChart = new this.gLib.visualization.ComboChart(document.getElementById('ventilator'));
            ventilatorChart.draw(chartData, options);
        });
    }
}
StateVentilatorComponent.ɵfac = function StateVentilatorComponent_Factory(t) { return new (t || StateVentilatorComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_google_chart_google_chart_service__WEBPACK_IMPORTED_MODULE_3__["GoogleChartService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_covidtracking_covidtracking_service__WEBPACK_IMPORTED_MODULE_4__["CovidTrackingService"])); };
StateVentilatorComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: StateVentilatorComponent, selectors: [["app-stateventilator"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]], decls: 1, vars: 0, consts: [["id", "ventilator"]], template: function StateVentilatorComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 0);
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvdmlkL3N0YXRlL3N0YXRldmVudGlsYXRvci9zdGF0ZXZlbnRpbGF0b3IuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](StateVentilatorComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-stateventilator',
                templateUrl: './stateventilator.component.html',
                styleUrls: ['./stateventilator.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }, { type: _google_chart_google_chart_service__WEBPACK_IMPORTED_MODULE_3__["GoogleChartService"] }, { type: src_app_covidtracking_covidtracking_service__WEBPACK_IMPORTED_MODULE_4__["CovidTrackingService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/covidtracking/covidtracking.service.ts":
/*!********************************************************!*\
  !*** ./src/app/covidtracking/covidtracking.service.ts ***!
  \********************************************************/
/*! exports provided: CovidTrackingService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CovidTrackingService", function() { return CovidTrackingService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");




;
;
class CovidTrackingService {
    constructor(http) {
        this.http = http;
        this.dataHost = 'https://www.coronagraphs.online';
        //private dataHost = 'https://localhost';
        this.usData = '/api/us/current';
        this.usDaily = '/api/us/daily';
        this.stateHistorical = '/api/states/historical';
    }
    getCountryData() {
        return this.http.get(this.dataHost + this.usData);
    }
    getCountryDaily() {
        return this.http.get(this.dataHost + this.usDaily);
    }
    getStateHistorical() {
        return this.http.get(this.dataHost + this.stateHistorical);
    }
    getHistoricalByState(state) {
        let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]().set('state', 'ut');
        return this.http.get(this.dataHost + this.stateHistorical, { params });
    }
}
CovidTrackingService.ɵfac = function CovidTrackingService_Factory(t) { return new (t || CovidTrackingService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
CovidTrackingService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: CovidTrackingService, factory: CovidTrackingService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CovidTrackingService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/google-chart/google-chart.service.ts":
/*!******************************************************!*\
  !*** ./src/app/google-chart/google-chart.service.ts ***!
  \******************************************************/
/*! exports provided: GoogleChartService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GoogleChartService", function() { return GoogleChartService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class GoogleChartService {
    constructor() {
        this.loaded = false;
        this.google = google;
        this.google.charts.load('current', { 'packages': ['corechart'] });
        this.google.charts.setOnLoadCallback(this.setLoaded());
    }
    setLoaded() {
        this.loaded = true;
    }
    getLoaded() {
        return this.loaded;
    }
    getGoogle() {
        return this.google;
    }
}
GoogleChartService.ɵfac = function GoogleChartService_Factory(t) { return new (t || GoogleChartService)(); };
GoogleChartService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: GoogleChartService, factory: GoogleChartService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GoogleChartService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/http-interceptor.service.ts":
/*!*********************************************!*\
  !*** ./src/app/http-interceptor.service.ts ***!
  \*********************************************/
/*! exports provided: AppHttpInterceptorService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppHttpInterceptorService", function() { return AppHttpInterceptorService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");





/**
 * Module class for application http interceptor.
 * @implements HttpInterceptor
 * @class AppHttpInterceptorService.
 */
class AppHttpInterceptorService {
    constructor() {
    }
    intercept(req, next) {
        return next
            .handle(req)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(err => {
            if (err instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpErrorResponse"]) {
                this.onError(err);
            }
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err);
        }));
    }
    /**
     * Handle http errors.
     * @param response - ErrorResponse.
     */
    onError(response) {
        const clientErrorMessage = this.handleClientSideError(response.status);
        if (clientErrorMessage) {
            // show client side error
            return;
        }
        const serverErrorMessage = this.handleServerError(response.error);
        if (serverErrorMessage) {
            // show server error
        }
    }
    handleClientSideError(status) {
        switch (status) {
            case 0:
                return 'NO INTERNET CONNECTION';
            case 404:
                return 'REQUEST FAILURE';
            default:
                return;
        }
    }
    handleServerError(errorResponse) {
        // handle server error
        return '';
    }
}
AppHttpInterceptorService.ɵfac = function AppHttpInterceptorService_Factory(t) { return new (t || AppHttpInterceptorService)(); };
AppHttpInterceptorService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: AppHttpInterceptorService, factory: AppHttpInterceptorService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppHttpInterceptorService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/environments/environment.ts":
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

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\projects\web\coronagraphs\clientui\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map