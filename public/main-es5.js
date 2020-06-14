function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function () { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/about/about.component.ts":
  /*!******************************************!*\
    !*** ./src/app/about/about.component.ts ***!
    \******************************************/

  /*! exports provided: AboutComponent */

  /***/
  function srcAppAboutAboutComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AboutComponent", function () {
      return AboutComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var AboutComponent = /*#__PURE__*/function () {
      function AboutComponent() {
        _classCallCheck(this, AboutComponent);
      }

      _createClass(AboutComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return AboutComponent;
    }();

    AboutComponent.ɵfac = function AboutComponent_Factory(t) {
      return new (t || AboutComponent)();
    };

    AboutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AboutComponent,
      selectors: [["app-about"]],
      decls: 4,
      vars: 0,
      consts: [[1, "about"], ["href", "https://covidtracking.com"]],
      template: function AboutComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\nThe data for this site is pulled from the ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Covid Tracking Project");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: [".about[_ngcontent-%COMP%] {\r\n  font-size: 35px;\r\n  color: #0875d4;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWJvdXQvYWJvdXQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGVBQWU7RUFDZixjQUFjO0FBQ2hCIiwiZmlsZSI6InNyYy9hcHAvYWJvdXQvYWJvdXQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hYm91dCB7XHJcbiAgZm9udC1zaXplOiAzNXB4O1xyXG4gIGNvbG9yOiAjMDg3NWQ0O1xyXG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AboutComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-about',
          templateUrl: './about.component.html',
          styleUrls: ['./about.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _app_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./app.service */
    "./src/app/app.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var AppComponent = /*#__PURE__*/function () {
      function AppComponent(appService) {
        var _this = this;

        _classCallCheck(this, AppComponent);

        this.appService = appService;
        this.appService.getWelcomeMessage().subscribe(function (data) {
          _this.title = data.content;
        });
      }
      /**
       * This method is used to test the post request
       */


      _createClass(AppComponent, [{
        key: "postData",
        value: function postData() {
          var _this2 = this;

          this.appService.sendData().subscribe(function (data) {
            _this2.postRequestResponse = data.content;
          });
        }
      }]);

      return AppComponent;
    }();

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_service__WEBPACK_IMPORTED_MODULE_1__["AppService"]));
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 24,
      vars: 0,
      consts: [[1, "wrapper"], [1, "selectorContainer"], ["routerLink", "/about", "routerLinkActive", "active", 1, "tablink"], ["routerLink", "/statetesting", "routerLinkActive", "active", 1, "tablink"], ["routerLink", "/statepositives", "routerLinkActive", "active", 1, "tablink"], ["routerLink", "/statedeath", "routerLinkActive", "active", 1, "tablink"], ["routerLink", "/statehospitalized", "routerLinkActive", "active", 1, "tablink"], ["routerLink", "/countrydeath", "routerLinkActive", "active", 1, "tablink"], ["routerLink", "/countrydaily", "routerLinkActive", "active", 1, "tablink"], ["routerLink", "/countrytesting", "routerLinkActive", "active", 1, "tablink"], [1, "displayContainer"], [1, "headerContainer"], [1, "headerText"], [1, "graphContainer"]],
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
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
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkActive"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]],
      styles: ["@font-face {\r\n    font-family: sourceSansPro;\r\n    src: url(https://www.coronagraphs.online/fonts/SourceSansPro-Light.ttf)\r\n}\r\n\r\n@font-face { \r\n    font-family: sourceSansProBold;\r\n    src: url(https://www.coronagraphs.online/fonts/SourceSansPro-Bold.ttf)\r\n}\r\n\r\n\r\n\r\n.wrapper[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 280px auto;\n}\r\n\r\n.selectorContainer[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-rows: repeat(8, 50px);\n  font-family: sourceSansPro;\n}\r\n\r\n.selectorContainer[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  text-decoration: none;\n  color: #000000;\n}\r\n\r\n.selectorContainer[_ngcontent-%COMP%]   .active[_ngcontent-%COMP%] {\n  background-color: #0875d4;\n  color: #ffffff;\n}\r\n\r\n.tablink[_ngcontent-%COMP%] {\n  text-align: right;\n  font-size: 25px;\n  border-radius: 25px;\n  font-family: sourceSansPro;\n  padding-top: 7px;\n  padding-right: 12px;\n}\r\n\r\n.displayContainer[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-rows: 130 auto;\n  font-family: sourceSansPro;\n}\r\n\r\n.headerContainer[_ngcontent-%COMP%] {\n  color: #ffffff;\n  background-color: #0875d4;\n  font-size: 100px;\n  text-align: center;\n  border-top: solid;\n  border-right: solid;\n  border-left: solid;\n  border-color: lightgray;\n}\r\n\r\n.graphContainer[_ngcontent-%COMP%] {\n  border: solid;\n  border-color: lightgray;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY292aWQvY29tbW9uLmNzcyIsInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSwwQkFBMEI7SUFDMUI7QUFDSjs7QUFFQTtJQUNJLDhCQUE4QjtJQUM5QjtBQUNKOztBQUVBOzs7Ozs7Ozs7O0NBVUM7O0FDbEJEO0VBQ0UsYUFBYTtFQUNiLGlDQUFpQztBQUNuQzs7QUFFQTtFQUNFLGFBQWE7RUFDYixtQ0FBbUM7RUFDbkMsMEJBQTBCO0FBQzVCOztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixlQUFlO0VBQ2YsbUJBQW1CO0VBQ25CLDBCQUEwQjtFQUMxQixnQkFBZ0I7RUFDaEIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLDRCQUE0QjtFQUM1QiwwQkFBMEI7QUFDNUI7O0FBRUE7RUFDRSxjQUFjO0VBQ2QseUJBQXlCO0VBQ3pCLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHVCQUF1QjtBQUN6QiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGZvbnQtZmFjZSB7XHJcbiAgICBmb250LWZhbWlseTogc291cmNlU2Fuc1BybztcclxuICAgIHNyYzogdXJsKGh0dHBzOi8vd3d3LmNvcm9uYWdyYXBocy5vbmxpbmUvZm9udHMvU291cmNlU2Fuc1Byby1MaWdodC50dGYpXHJcbn1cclxuXHJcbkBmb250LWZhY2UgeyBcclxuICAgIGZvbnQtZmFtaWx5OiBzb3VyY2VTYW5zUHJvQm9sZDtcclxuICAgIHNyYzogdXJsKGh0dHBzOi8vd3d3LmNvcm9uYWdyYXBocy5vbmxpbmUvZm9udHMvU291cmNlU2Fuc1Byby1Cb2xkLnR0ZilcclxufVxyXG5cclxuLypcclxuQGZvbnQtZmFjZSB7XHJcbiAgICBmb250LWZhbWlseTogc291cmNlU2Fuc1BybztcclxuICAgIHNyYzogdXJsKGh0dHBzOi8vd3d3LmNvcm9uYWdyYXBocy5vbmxpbmUvZm9udHMvU291cmNlU2Fuc1Byby1MaWdodC50dGYpXHJcbn1cclxuXHJcbkBmb250LWZhY2UgeyBcclxuICAgIGZvbnQtZmFtaWx5OiBzb3VyY2VTYW5zUHJvQm9sZDtcclxuICAgIHNyYzogdXJsKGh0dHBzOi8vd3d3LmNvcm9uYWdyYXBocy5vbmxpbmUvZm9udHMvU291cmNlU2Fuc1Byby1Cb2xkLnR0ZilcclxufVxyXG4qL1xyXG4iLCJAaW1wb3J0ICcuL2NvdmlkL2NvbW1vbi5jc3MnO1xuXG4ud3JhcHBlciB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMjgwcHggYXV0bztcbn1cblxuLnNlbGVjdG9yQ29udGFpbmVyIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoOCwgNTBweCk7XG4gIGZvbnQtZmFtaWx5OiBzb3VyY2VTYW5zUHJvO1xufVxuXG4uc2VsZWN0b3JDb250YWluZXIgYSB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgY29sb3I6ICMwMDAwMDA7XG59XG5cbi5zZWxlY3RvckNvbnRhaW5lciAuYWN0aXZlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzA4NzVkNDtcbiAgY29sb3I6ICNmZmZmZmY7XG59XG5cbi50YWJsaW5rIHtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gIGZvbnQtc2l6ZTogMjVweDtcbiAgYm9yZGVyLXJhZGl1czogMjVweDtcbiAgZm9udC1mYW1pbHk6IHNvdXJjZVNhbnNQcm87XG4gIHBhZGRpbmctdG9wOiA3cHg7XG4gIHBhZGRpbmctcmlnaHQ6IDEycHg7XG59XG5cbi5kaXNwbGF5Q29udGFpbmVyIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxMzAgYXV0bztcbiAgZm9udC1mYW1pbHk6IHNvdXJjZVNhbnNQcm87XG59XG5cbi5oZWFkZXJDb250YWluZXIge1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzA4NzVkNDtcbiAgZm9udC1zaXplOiAxMDBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBib3JkZXItdG9wOiBzb2xpZDtcbiAgYm9yZGVyLXJpZ2h0OiBzb2xpZDtcbiAgYm9yZGVyLWxlZnQ6IHNvbGlkO1xuICBib3JkZXItY29sb3I6IGxpZ2h0Z3JheTtcbn1cblxuLmdyYXBoQ29udGFpbmVyIHtcbiAgYm9yZGVyOiBzb2xpZDtcbiAgYm9yZGVyLWNvbG9yOiBsaWdodGdyYXk7XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.css']
        }]
      }], function () {
        return [{
          type: _app_service__WEBPACK_IMPORTED_MODULE_1__["AppService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _app_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./app.service */
    "./src/app/app.service.ts");
    /* harmony import */


    var _http_interceptor_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./http-interceptor.service */
    "./src/app/http-interceptor.service.ts");
    /* harmony import */


    var _covid_country_countrydailydeaths_countrydailydeaths_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./covid/country/countrydailydeaths/countrydailydeaths.component */
    "./src/app/covid/country/countrydailydeaths/countrydailydeaths.component.ts");
    /* harmony import */


    var _covid_country_countrytotaldeaths_countrytotaldeaths_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./covid/country/countrytotaldeaths/countrytotaldeaths.component */
    "./src/app/covid/country/countrytotaldeaths/countrytotaldeaths.component.ts");
    /* harmony import */


    var _covid_country_countrytesting_countrytesting_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./covid/country/countrytesting/countrytesting.component */
    "./src/app/covid/country/countrytesting/countrytesting.component.ts");
    /* harmony import */


    var _covid_state_statedeaths_statetotaldeaths_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./covid/state/statedeaths/statetotaldeaths.component */
    "./src/app/covid/state/statedeaths/statetotaldeaths.component.ts");
    /* harmony import */


    var _covid_state_statehospitalized_statehospitalized_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./covid/state/statehospitalized/statehospitalized.component */
    "./src/app/covid/state/statehospitalized/statehospitalized.component.ts");
    /* harmony import */


    var _covid_state_stateicu_stateicu_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./covid/state/stateicu/stateicu.component */
    "./src/app/covid/state/stateicu/stateicu.component.ts");
    /* harmony import */


    var _covid_state_stateventilator_stateventilator_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./covid/state/stateventilator/stateventilator.component */
    "./src/app/covid/state/stateventilator/stateventilator.component.ts");
    /* harmony import */


    var _covid_state_statepositives_statepositives_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./covid/state/statepositives/statepositives.component */
    "./src/app/covid/state/statepositives/statepositives.component.ts");
    /* harmony import */


    var _covid_state_statetesting_statetesting_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./covid/state/statetesting/statetesting.component */
    "./src/app/covid/state/statetesting/statetesting.component.ts");
    /* harmony import */


    var _about_about_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./about/about.component */
    "./src/app/about/about.component.ts");

    var routes = [{
      path: 'about',
      component: _about_about_component__WEBPACK_IMPORTED_MODULE_16__["AboutComponent"]
    }, {
      path: 'countrydeath',
      component: _covid_country_countrytotaldeaths_countrytotaldeaths_component__WEBPACK_IMPORTED_MODULE_8__["CountryTotalDeathsComponent"]
    }, {
      path: 'countrydaily',
      component: _covid_country_countrydailydeaths_countrydailydeaths_component__WEBPACK_IMPORTED_MODULE_7__["CountryDailyDeathsComponent"]
    }, {
      path: 'countrytesting',
      component: _covid_country_countrytesting_countrytesting_component__WEBPACK_IMPORTED_MODULE_9__["CountryTestingComponent"]
    }, {
      path: 'statedeath',
      component: _covid_state_statedeaths_statetotaldeaths_component__WEBPACK_IMPORTED_MODULE_10__["StateTotalDeathsComponent"]
    }, {
      path: 'statepositives',
      component: _covid_state_statepositives_statepositives_component__WEBPACK_IMPORTED_MODULE_14__["StatePositivesComponent"]
    }, {
      path: 'statetesting',
      component: _covid_state_statetesting_statetesting_component__WEBPACK_IMPORTED_MODULE_15__["StateTestingComponent"]
    }, {
      path: 'statehospitalized',
      component: _covid_state_statehospitalized_statehospitalized_component__WEBPACK_IMPORTED_MODULE_11__["StateHospitalizedComponent"]
    }, {
      path: '',
      redirectTo: '/about',
      pathMatch: 'full'
    }];

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [_app_service__WEBPACK_IMPORTED_MODULE_5__["AppService"], {
        multi: true,
        provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HTTP_INTERCEPTORS"],
        useClass: _http_interceptor_service__WEBPACK_IMPORTED_MODULE_6__["AppHttpInterceptorService"]
      }],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientXsrfModule"].withOptions({
        cookieName: 'Csrf-Token',
        headerName: 'Csrf-Token'
      }), _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, {
        enableTracing: true
      })]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _covid_country_countrydailydeaths_countrydailydeaths_component__WEBPACK_IMPORTED_MODULE_7__["CountryDailyDeathsComponent"], _covid_country_countrytotaldeaths_countrytotaldeaths_component__WEBPACK_IMPORTED_MODULE_8__["CountryTotalDeathsComponent"], _covid_country_countrytesting_countrytesting_component__WEBPACK_IMPORTED_MODULE_9__["CountryTestingComponent"], _covid_state_statedeaths_statetotaldeaths_component__WEBPACK_IMPORTED_MODULE_10__["StateTotalDeathsComponent"], _covid_state_statepositives_statepositives_component__WEBPACK_IMPORTED_MODULE_14__["StatePositivesComponent"], _covid_state_statehospitalized_statehospitalized_component__WEBPACK_IMPORTED_MODULE_11__["StateHospitalizedComponent"], _covid_state_stateicu_stateicu_component__WEBPACK_IMPORTED_MODULE_12__["StateIcuComponent"], _covid_state_stateventilator_stateventilator_component__WEBPACK_IMPORTED_MODULE_13__["StateVentilatorComponent"], _about_about_component__WEBPACK_IMPORTED_MODULE_16__["AboutComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientXsrfModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _covid_country_countrydailydeaths_countrydailydeaths_component__WEBPACK_IMPORTED_MODULE_7__["CountryDailyDeathsComponent"], _covid_country_countrytotaldeaths_countrytotaldeaths_component__WEBPACK_IMPORTED_MODULE_8__["CountryTotalDeathsComponent"], _covid_country_countrytesting_countrytesting_component__WEBPACK_IMPORTED_MODULE_9__["CountryTestingComponent"], _covid_state_statedeaths_statetotaldeaths_component__WEBPACK_IMPORTED_MODULE_10__["StateTotalDeathsComponent"], _covid_state_statepositives_statepositives_component__WEBPACK_IMPORTED_MODULE_14__["StatePositivesComponent"], _covid_state_statehospitalized_statehospitalized_component__WEBPACK_IMPORTED_MODULE_11__["StateHospitalizedComponent"], _covid_state_stateicu_stateicu_component__WEBPACK_IMPORTED_MODULE_12__["StateIcuComponent"], _covid_state_stateventilator_stateventilator_component__WEBPACK_IMPORTED_MODULE_13__["StateVentilatorComponent"], _about_about_component__WEBPACK_IMPORTED_MODULE_16__["AboutComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientXsrfModule"].withOptions({
            cookieName: 'Csrf-Token',
            headerName: 'Csrf-Token'
          }), _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, {
            enableTracing: true
          })],
          providers: [_app_service__WEBPACK_IMPORTED_MODULE_5__["AppService"], {
            multi: true,
            provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HTTP_INTERCEPTORS"],
            useClass: _http_interceptor_service__WEBPACK_IMPORTED_MODULE_6__["AppHttpInterceptorService"]
          }],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.service.ts":
  /*!********************************!*\
    !*** ./src/app/app.service.ts ***!
    \********************************/

  /*! exports provided: AppService */

  /***/
  function srcAppAppServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppService", function () {
      return AppService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /**
     * Class representing application service.
     *
     * @class AppService.
     */


    var AppService = /*#__PURE__*/function () {
      function AppService(http) {
        _classCallCheck(this, AppService);

        this.http = http;
        this.serviceUrl = '/api/summary';
        this.dataPostTestUrl = '/api/postTest';
      }
      /**
       * Makes a http get request to retrieve the welcome message from the backend service.
       */


      _createClass(AppService, [{
        key: "getWelcomeMessage",
        value: function getWelcomeMessage() {
          return this.http.get(this.serviceUrl).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (response) {
            return response;
          }));
        }
        /**
         * Makes a http post request to send some data to backend & get response.
         */

      }, {
        key: "sendData",
        value: function sendData() {
          return this.http.post(this.dataPostTestUrl, {});
        }
      }]);

      return AppService;
    }();

    AppService.ɵfac = function AppService_Factory(t) {
      return new (t || AppService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]));
    };

    AppService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: AppService,
      factory: AppService.ɵfac
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/covid/country/countrydailydeaths/countrydailydeaths.component.ts":
  /*!**********************************************************************************!*\
    !*** ./src/app/covid/country/countrydailydeaths/countrydailydeaths.component.ts ***!
    \**********************************************************************************/

  /*! exports provided: CountryDailyDeathsComponent */

  /***/
  function srcAppCovidCountryCountrydailydeathsCountrydailydeathsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CountryDailyDeathsComponent", function () {
      return CountryDailyDeathsComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _covidcomponent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../covidcomponent */
    "./src/app/covid/covidcomponent.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _google_chart_google_chart_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../google-chart/google-chart.service */
    "./src/app/google-chart/google-chart.service.ts");
    /* harmony import */


    var _covidtracking_covidtracking_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../covidtracking/covidtracking.service */
    "./src/app/covidtracking/covidtracking.service.ts");

    var DailyDeaths = function DailyDeaths(date, deaths, day3sma, day7sma) {
      _classCallCheck(this, DailyDeaths);

      this.date = '';
      this.deaths = 0;
      this.day3sma = 0;
      this.day7sma = 0;
      this.date = date;
      this.deaths = deaths;
      this.day3sma = day3sma;
      this.day7sma = day7sma;
    };

    ;

    var CountryDailyDeathsComponent = /*#__PURE__*/function (_covidcomponent__WEBP) {
      _inherits(CountryDailyDeathsComponent, _covidcomponent__WEBP);

      var _super = _createSuper(CountryDailyDeathsComponent);

      function CountryDailyDeathsComponent(route, chartServices, covidTrackingServices) {
        var _this3;

        _classCallCheck(this, CountryDailyDeathsComponent);

        _this3 = _super.call(this, chartServices, covidTrackingServices);
        _this3.chartServices = chartServices;
        _this3.covidTrackingServices = covidTrackingServices;
        return _this3;
      }

      _createClass(CountryDailyDeathsComponent, [{
        key: "loadData",
        value: function loadData() {
          var _this4 = this;

          this.covidTrackingServices.getCountryDaily().subscribe(function (data) {
            var sorted = data.sort(function (a, b) {
              return a.date < b.date ? -1 : a.date > b.date ? 1 : 0;
            }); // Collect daily deaths

            var dailyDeaths = [];

            var startDate = _this4.convertDate(sorted[0].date.toString());

            dailyDeaths.push(new DailyDeaths(startDate, sorted[0].death, sorted[0].death, sorted[0].death));

            for (var i = 1; i < sorted.length; i++) {
              var dateStr = _this4.convertDate(sorted[i].date.toString());

              if (i > 2) {
                var death3sma = (sorted[i - 3].deathIncrease + sorted[i - 2].deathIncrease + sorted[i - 1].deathIncrease) / 3;

                if (i > 7) {
                  var death7sma = (sorted[i - 7].deathIncrease + sorted[i - 6].deathIncrease + sorted[i - 5].deathIncrease + sorted[i - 4].deathIncrease + sorted[i - 3].deathIncrease + sorted[i - 2].deathIncrease + sorted[i - 1].deathIncrease) / 7;
                  dailyDeaths.push(new DailyDeaths(dateStr, sorted[i].deathIncrease, death3sma, death7sma));
                } else {
                  dailyDeaths.push(new DailyDeaths(dateStr, sorted[i].deathIncrease, death3sma, death3sma));
                }
              } else {
                dailyDeaths.push(new DailyDeaths(dateStr, sorted[i].deathIncrease, sorted[i].deathIncrease, sorted[i].deathIncrease));
              }
            }

            var rawData = [['Date', 'Deaths', '3-day SMA', '7-day SMA']];
            dailyDeaths.forEach(function (datum) {
              var bar = [datum.date, datum.deaths, datum.day3sma, datum.day7sma];
              rawData.push(bar);
            });
            var options = {
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

            var newData = _this4.gLib.visualization.arrayToDataTable(rawData);

            var dailyDeathChart = new _this4.gLib.visualization.ComboChart(document.getElementById('dailyDeaths'));
            dailyDeathChart.draw(newData, options);
          });
        }
      }, {
        key: "refreshDailyDeathChart",
        value: function refreshDailyDeathChart() {}
      }]);

      return CountryDailyDeathsComponent;
    }(_covidcomponent__WEBPACK_IMPORTED_MODULE_1__["CovidComponent"]);

    CountryDailyDeathsComponent.ɵfac = function CountryDailyDeathsComponent_Factory(t) {
      return new (t || CountryDailyDeathsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_google_chart_google_chart_service__WEBPACK_IMPORTED_MODULE_3__["GoogleChartService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_covidtracking_covidtracking_service__WEBPACK_IMPORTED_MODULE_4__["CovidTrackingService"]));
    };

    CountryDailyDeathsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: CountryDailyDeathsComponent,
      selectors: [["app-countrydailydeaths"]],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]],
      decls: 1,
      vars: 0,
      consts: [["id", "dailyDeaths"]],
      template: function CountryDailyDeathsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 0);
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvdmlkL2NvdW50cnkvY291bnRyeWRhaWx5ZGVhdGhzL2NvdW50cnlkYWlseWRlYXRocy5jb21wb25lbnQuY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CountryDailyDeathsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-countrydailydeaths',
          templateUrl: './countrydailydeaths.component.html',
          styleUrls: ['./countrydailydeaths.component.css']
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
        }, {
          type: _google_chart_google_chart_service__WEBPACK_IMPORTED_MODULE_3__["GoogleChartService"]
        }, {
          type: _covidtracking_covidtracking_service__WEBPACK_IMPORTED_MODULE_4__["CovidTrackingService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/covid/country/countrytesting/countrytesting.component.ts":
  /*!**************************************************************************!*\
    !*** ./src/app/covid/country/countrytesting/countrytesting.component.ts ***!
    \**************************************************************************/

  /*! exports provided: CountryTestingComponent */

  /***/
  function srcAppCovidCountryCountrytestingCountrytestingComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CountryTestingComponent", function () {
      return CountryTestingComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _covidcomponent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../covidcomponent */
    "./src/app/covid/covidcomponent.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _google_chart_google_chart_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../google-chart/google-chart.service */
    "./src/app/google-chart/google-chart.service.ts");
    /* harmony import */


    var src_app_covidtracking_covidtracking_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/covidtracking/covidtracking.service */
    "./src/app/covidtracking/covidtracking.service.ts");

    var DailyTesting = function DailyTesting(date, tests, positive, sma) {
      _classCallCheck(this, DailyTesting);

      this.date = '';
      this.tests = 0;
      this.positive = 0;
      this.sma = 0;
      this.date = date;
      this.tests = tests;
      this.positive = positive;
      this.sma = sma;
    };

    ;

    var DailyPositives = function DailyPositives(date, positiveRate, sma) {
      _classCallCheck(this, DailyPositives);

      this.date = '';
      this.positiveRate = 0;
      this.sma = 0;
      this.date = date;
      this.positiveRate = positiveRate;
      this.sma = sma;
    };

    ;

    var CountryTestingComponent = /*#__PURE__*/function (_covidcomponent__WEBP2) {
      _inherits(CountryTestingComponent, _covidcomponent__WEBP2);

      var _super2 = _createSuper(CountryTestingComponent);

      function CountryTestingComponent(route, chartServices, covidTrackingServices) {
        var _this5;

        _classCallCheck(this, CountryTestingComponent);

        _this5 = _super2.call(this, chartServices, covidTrackingServices);
        _this5.chartServices = chartServices;
        _this5.covidTrackingServices = covidTrackingServices;
        return _this5;
      }

      _createClass(CountryTestingComponent, [{
        key: "loadData",
        value: function loadData() {
          var _this6 = this;

          this.covidTrackingServices.getCountryDaily().subscribe(function (data) {
            // Collect the data
            var sorted = data.sort(function (a, b) {
              return a.date < b.date ? -1 : a.date > b.date ? 1 : 0;
            }); // Collect daily deaths

            var dailyTesting = [];
            var dailyPositive = [];

            var startDate = _this6.convertDate(sorted[0].date.toString());

            dailyTesting.push(new DailyTesting(startDate, sorted[0].totalTestResults, sorted[0].positive, sorted[0].negative));
            var basePositiveRate = sorted[0].positiveIncrease / sorted[0].totalTestResultsIncrease;
            dailyPositive.push(new DailyPositives(startDate, basePositiveRate, basePositiveRate));

            for (var i = 1; i < sorted.length; i++) {
              var dateStr = _this6.convertDate(sorted[i].date.toString());

              var positiveRate = sorted[i].positiveIncrease / sorted[i].totalTestResultsIncrease;

              if (i > 2) {
                var positivesma = (sorted[i - 3].positiveIncrease + sorted[i - 2].positiveIncrease + sorted[i - 1].positiveIncrease) / 3;
                dailyTesting.push(new DailyTesting(dateStr, sorted[i].totalTestResultsIncrease, sorted[i].positiveIncrease, positivesma));
                var positiveRate3Sma = (sorted[i - 3].positiveIncrease / sorted[i - 3].totalTestResultsIncrease + sorted[i - 2].positiveIncrease / sorted[i - 2].totalTestResultsIncrease + sorted[i - 1].positiveIncrease / sorted[i - 1].totalTestResultsIncrease) / 3;
                dailyPositive.push(new DailyPositives(dateStr, sorted[i].positiveIncrease / sorted[i].totalTestResultsIncrease, positiveRate3Sma));
              } else {
                dailyTesting.push(new DailyTesting(dateStr, sorted[i].positiveIncrease, sorted[i].positiveIncrease, sorted[i].positiveIncrease));
                dailyPositive.push(new DailyPositives(dateStr, positiveRate, positiveRate));
              }
            }

            var rawData = [['Date', 'Positive', 'Tests', 'SMA']];
            dailyTesting.forEach(function (datum) {
              var data = [datum.date, datum.positive, datum.tests, datum.sma];
              rawData.push(data);
            });
            var options = {
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

            var newData = _this6.gLib.visualization.arrayToDataTable(rawData);

            var dailyPositiveChart = new _this6.gLib.visualization.ComboChart(document.getElementById('dailyTesting'));
            dailyPositiveChart.draw(newData, options);
          });
        }
      }]);

      return CountryTestingComponent;
    }(_covidcomponent__WEBPACK_IMPORTED_MODULE_1__["CovidComponent"]);

    CountryTestingComponent.ɵfac = function CountryTestingComponent_Factory(t) {
      return new (t || CountryTestingComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_google_chart_google_chart_service__WEBPACK_IMPORTED_MODULE_3__["GoogleChartService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_covidtracking_covidtracking_service__WEBPACK_IMPORTED_MODULE_4__["CovidTrackingService"]));
    };

    CountryTestingComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: CountryTestingComponent,
      selectors: [["app-countrytesting"]],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]],
      decls: 1,
      vars: 0,
      consts: [["id", "dailyTesting"]],
      template: function CountryTestingComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 0);
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvdmlkL2NvdW50cnkvY291bnRyeXRlc3RpbmcvY291bnRyeXRlc3RpbmcuY29tcG9uZW50LmNzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CountryTestingComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-countrytesting',
          templateUrl: './countrytesting.component.html',
          styleUrls: ['./countrytesting.component.css']
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
        }, {
          type: _google_chart_google_chart_service__WEBPACK_IMPORTED_MODULE_3__["GoogleChartService"]
        }, {
          type: src_app_covidtracking_covidtracking_service__WEBPACK_IMPORTED_MODULE_4__["CovidTrackingService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/covid/country/countrytotaldeaths/countrytotaldeaths.component.ts":
  /*!**********************************************************************************!*\
    !*** ./src/app/covid/country/countrytotaldeaths/countrytotaldeaths.component.ts ***!
    \**********************************************************************************/

  /*! exports provided: CountryTotalDeathsComponent */

  /***/
  function srcAppCovidCountryCountrytotaldeathsCountrytotaldeathsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CountryTotalDeathsComponent", function () {
      return CountryTotalDeathsComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _covidcomponent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../covidcomponent */
    "./src/app/covid/covidcomponent.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _google_chart_google_chart_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../google-chart/google-chart.service */
    "./src/app/google-chart/google-chart.service.ts");
    /* harmony import */


    var src_app_covidtracking_covidtracking_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/covidtracking/covidtracking.service */
    "./src/app/covidtracking/covidtracking.service.ts");

    var TotalDeaths = function TotalDeaths(date, deaths) {
      _classCallCheck(this, TotalDeaths);

      this.date = '';
      this.deaths = 0;
      this.date = date;
      this.deaths = deaths;
    };

    ;

    var CountryTotalDeathsComponent = /*#__PURE__*/function (_covidcomponent__WEBP3) {
      _inherits(CountryTotalDeathsComponent, _covidcomponent__WEBP3);

      var _super3 = _createSuper(CountryTotalDeathsComponent);

      function CountryTotalDeathsComponent(route, chartServices, covidTrackingServices) {
        var _this7;

        _classCallCheck(this, CountryTotalDeathsComponent);

        _this7 = _super3.call(this, chartServices, covidTrackingServices);
        _this7.chartServices = chartServices;
        _this7.covidTrackingServices = covidTrackingServices;
        return _this7;
      }

      _createClass(CountryTotalDeathsComponent, [{
        key: "loadData",
        value: function loadData() {
          var _this8 = this;

          this.covidTrackingServices.getCountryDaily().subscribe(function (data) {
            // Collect the data
            var sorted = data.sort(function (a, b) {
              return a.date < b.date ? -1 : a.date > b.date ? 1 : 0;
            }); // Collect daily deaths

            var rawData = [['Date', 'Deaths']];
            sorted.forEach(function (d) {
              rawData.push([_this8.convertDate(d.date.toString()), d.death]);
            }); // Collect daily testing

            var options = {
              title: 'Total Deaths (US)',
              width: 1100,
              height: 700,
              seriesType: 'bars'
            };

            var newData = _this8.gLib.visualization.arrayToDataTable(rawData);

            var totalDeathChart = new _this8.gLib.visualization.ComboChart(document.getElementById('totalDeaths'));
            totalDeathChart.draw(newData, options);
          });
        }
      }]);

      return CountryTotalDeathsComponent;
    }(_covidcomponent__WEBPACK_IMPORTED_MODULE_1__["CovidComponent"]);

    CountryTotalDeathsComponent.ɵfac = function CountryTotalDeathsComponent_Factory(t) {
      return new (t || CountryTotalDeathsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_google_chart_google_chart_service__WEBPACK_IMPORTED_MODULE_3__["GoogleChartService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_covidtracking_covidtracking_service__WEBPACK_IMPORTED_MODULE_4__["CovidTrackingService"]));
    };

    CountryTotalDeathsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: CountryTotalDeathsComponent,
      selectors: [["app-countrytotaldeaths"]],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]],
      decls: 1,
      vars: 0,
      consts: [["id", "totalDeaths"]],
      template: function CountryTotalDeathsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 0);
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvdmlkL2NvdW50cnkvY291bnRyeXRvdGFsZGVhdGhzL2NvdW50cnl0b3RhbGRlYXRocy5jb21wb25lbnQuY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CountryTotalDeathsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-countrytotaldeaths',
          templateUrl: './countrytotaldeaths.component.html',
          styleUrls: ['./countrytotaldeaths.component.css']
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
        }, {
          type: _google_chart_google_chart_service__WEBPACK_IMPORTED_MODULE_3__["GoogleChartService"]
        }, {
          type: src_app_covidtracking_covidtracking_service__WEBPACK_IMPORTED_MODULE_4__["CovidTrackingService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/covid/covidcomponent.ts":
  /*!*****************************************!*\
    !*** ./src/app/covid/covidcomponent.ts ***!
    \*****************************************/

  /*! exports provided: CovidComponent */

  /***/
  function srcAppCovidCovidcomponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CovidComponent", function () {
      return CovidComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _google_chart_google_chart_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../google-chart/google-chart.service */
    "./src/app/google-chart/google-chart.service.ts");
    /* harmony import */


    var _covidtracking_covidtracking_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../covidtracking/covidtracking.service */
    "./src/app/covidtracking/covidtracking.service.ts");

    var CovidComponent = /*#__PURE__*/function () {
      function CovidComponent(chartServices, covidTrackingServices) {
        _classCallCheck(this, CovidComponent);

        this.chartServices = chartServices;
        this.covidTrackingServices = covidTrackingServices;
      }

      _createClass(CovidComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.checkLoading();
        }
      }, {
        key: "checkLoading",
        value: function checkLoading() {
          if (this.chartServices.getLoaded()) {
            this.gLib = this.chartServices.getGoogle();
            this.loadData();
          } else {
            // Check again in 3 seconds
            setTimeout(this.checkLoading, 1000);
          }
        }
      }, {
        key: "convertDate",
        value: function convertDate(oldDate) {
          return oldDate.slice(4, 6) + '-' + oldDate.slice(6, 8) + '-' + oldDate.slice(0, 4);
        }
      }, {
        key: "getSma",
        value: function getSma(data, currIndex, dayCount) {
          if (currIndex <= dayCount) {
            return data[currIndex];
          } else {
            var sma = 0;

            for (var index = currIndex - dayCount + 1; index < currIndex + 1; index++) {
              sma = sma + data[index];
            }

            return sma / dayCount;
          }
        }
      }]);

      return CovidComponent;
    }();

    CovidComponent.ɵfac = function CovidComponent_Factory(t) {
      return new (t || CovidComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_google_chart_google_chart_service__WEBPACK_IMPORTED_MODULE_1__["GoogleChartService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_covidtracking_covidtracking_service__WEBPACK_IMPORTED_MODULE_2__["CovidTrackingService"]));
    };

    CovidComponent.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
      type: CovidComponent
    });
    /***/
  },

  /***/
  "./src/app/covid/state/statedeaths/statetotaldeaths.component.ts":
  /*!***********************************************************************!*\
    !*** ./src/app/covid/state/statedeaths/statetotaldeaths.component.ts ***!
    \***********************************************************************/

  /*! exports provided: StateTotalDeathsComponent */

  /***/
  function srcAppCovidStateStatedeathsStatetotaldeathsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StateTotalDeathsComponent", function () {
      return StateTotalDeathsComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _covidcomponent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../covidcomponent */
    "./src/app/covid/covidcomponent.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _google_chart_google_chart_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../google-chart/google-chart.service */
    "./src/app/google-chart/google-chart.service.ts");
    /* harmony import */


    var src_app_covidtracking_covidtracking_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/covidtracking/covidtracking.service */
    "./src/app/covidtracking/covidtracking.service.ts");

    var StateTotalDeathsComponent = /*#__PURE__*/function (_covidcomponent__WEBP4) {
      _inherits(StateTotalDeathsComponent, _covidcomponent__WEBP4);

      var _super4 = _createSuper(StateTotalDeathsComponent);

      function StateTotalDeathsComponent(route, chartServices, covidTrackingServices) {
        var _this9;

        _classCallCheck(this, StateTotalDeathsComponent);

        _this9 = _super4.call(this, chartServices, covidTrackingServices);
        _this9.chartServices = chartServices;
        _this9.covidTrackingServices = covidTrackingServices;
        return _this9;
      }

      _createClass(StateTotalDeathsComponent, [{
        key: "loadData",
        value: function loadData() {
          var _this10 = this;

          var state = 'UT';
          this.covidTrackingServices.getHistoricalByState(state).subscribe(function (data) {
            var stateData = data.sort(function (a, b) {
              return a.date < b.date ? -1 : a.date > b.date ? 1 : 0;
            });
            var rawData = [['Date', 'Deaths', '3-Day SMA', '7-Day SMA']];
            var dailyDeaths = stateData.map(function (d) {
              return d.deathIncrease;
            });

            for (var index = 1; index < stateData.length; index++) {
              var sma3 = _this10.getSma(dailyDeaths, index, 3);

              var sma7 = _this10.getSma(dailyDeaths, index, 7);

              rawData.push([_this10.convertDate(stateData[index].date.toString()), dailyDeaths[index], sma3, sma7]);
            }

            var chartData = _this10.gLib.visualization.arrayToDataTable(rawData);

            var options = {
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
            var totalDeathChart = new _this10.gLib.visualization.ComboChart(document.getElementById('stateDeaths'));
            totalDeathChart.draw(chartData, options);
          });
        }
      }]);

      return StateTotalDeathsComponent;
    }(_covidcomponent__WEBPACK_IMPORTED_MODULE_1__["CovidComponent"]);

    StateTotalDeathsComponent.ɵfac = function StateTotalDeathsComponent_Factory(t) {
      return new (t || StateTotalDeathsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_google_chart_google_chart_service__WEBPACK_IMPORTED_MODULE_3__["GoogleChartService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_covidtracking_covidtracking_service__WEBPACK_IMPORTED_MODULE_4__["CovidTrackingService"]));
    };

    StateTotalDeathsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: StateTotalDeathsComponent,
      selectors: [["app-statedeaths"]],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]],
      decls: 1,
      vars: 0,
      consts: [["id", "stateDeaths"]],
      template: function StateTotalDeathsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 0);
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvdmlkL3N0YXRlL3N0YXRlZGVhdGhzL3N0YXRldG90YWxkZWF0aHMuY29tcG9uZW50LmNzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](StateTotalDeathsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-statedeaths',
          templateUrl: './statetotaldeaths.component.html',
          styleUrls: ['./statetotaldeaths.component.css']
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
        }, {
          type: _google_chart_google_chart_service__WEBPACK_IMPORTED_MODULE_3__["GoogleChartService"]
        }, {
          type: src_app_covidtracking_covidtracking_service__WEBPACK_IMPORTED_MODULE_4__["CovidTrackingService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/covid/state/statehospitalized/statehospitalized.component.ts":
  /*!******************************************************************************!*\
    !*** ./src/app/covid/state/statehospitalized/statehospitalized.component.ts ***!
    \******************************************************************************/

  /*! exports provided: StateHospitalizedComponent */

  /***/
  function srcAppCovidStateStatehospitalizedStatehospitalizedComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StateHospitalizedComponent", function () {
      return StateHospitalizedComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _covidcomponent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../covidcomponent */
    "./src/app/covid/covidcomponent.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _google_chart_google_chart_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../google-chart/google-chart.service */
    "./src/app/google-chart/google-chart.service.ts");
    /* harmony import */


    var src_app_covidtracking_covidtracking_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/covidtracking/covidtracking.service */
    "./src/app/covidtracking/covidtracking.service.ts");

    var StateHospitalizedComponent = /*#__PURE__*/function (_covidcomponent__WEBP5) {
      _inherits(StateHospitalizedComponent, _covidcomponent__WEBP5);

      var _super5 = _createSuper(StateHospitalizedComponent);

      function StateHospitalizedComponent(route, chartServices, covidTrackingServices) {
        var _this11;

        _classCallCheck(this, StateHospitalizedComponent);

        _this11 = _super5.call(this, chartServices, covidTrackingServices);
        _this11.chartServices = chartServices;
        _this11.covidTrackingServices = covidTrackingServices;
        return _this11;
      }

      _createClass(StateHospitalizedComponent, [{
        key: "loadData",
        value: function loadData() {
          var _this12 = this;

          this.covidTrackingServices.getHistoricalByState('ut').subscribe(function (data) {
            var stateData = data.sort(function (a, b) {
              return a.date < b.date ? -1 : a.date > b.date ? 1 : 0;
            });
            var rawData = [['Date', 'Hospitalizations', '3-Day SMA', '7-Day SMA']];
            var hospitalizations = stateData.map(function (d) {
              if (Math.abs(d.hospitalizedIncrease) > 100) {
                return 0;
              } else {
                return d.hospitalizedIncrease;
              }
            });
            rawData.push([_this12.convertDate(stateData[0].date.toString()), hospitalizations[0], hospitalizations[0], hospitalizations[0]]);

            for (var index = 0; index < stateData.length; index++) {
              var sma3 = _this12.getSma(hospitalizations, index, 3);

              var sma7 = _this12.getSma(hospitalizations, index, 7);

              rawData.push([_this12.convertDate(stateData[index].date.toString()), Math.abs(hospitalizations[index]), sma3, sma7]);
            }

            var chartData = _this12.gLib.visualization.arrayToDataTable(rawData);

            var options = {
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
            var totalDeathChart = new _this12.gLib.visualization.ComboChart(document.getElementById('statehospitalizations'));
            totalDeathChart.draw(chartData, options);
          });
        }
      }]);

      return StateHospitalizedComponent;
    }(_covidcomponent__WEBPACK_IMPORTED_MODULE_1__["CovidComponent"]);

    StateHospitalizedComponent.ɵfac = function StateHospitalizedComponent_Factory(t) {
      return new (t || StateHospitalizedComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_google_chart_google_chart_service__WEBPACK_IMPORTED_MODULE_3__["GoogleChartService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_covidtracking_covidtracking_service__WEBPACK_IMPORTED_MODULE_4__["CovidTrackingService"]));
    };

    StateHospitalizedComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: StateHospitalizedComponent,
      selectors: [["app-statehospitalized"]],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]],
      decls: 1,
      vars: 0,
      consts: [["id", "statehospitalizations"]],
      template: function StateHospitalizedComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 0);
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvdmlkL3N0YXRlL3N0YXRlaG9zcGl0YWxpemVkL3N0YXRlaG9zcGl0YWxpemVkLmNvbXBvbmVudC5jc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](StateHospitalizedComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-statehospitalized',
          templateUrl: './statehospitalized.component.html',
          styleUrls: ['./statehospitalized.component.css']
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
        }, {
          type: _google_chart_google_chart_service__WEBPACK_IMPORTED_MODULE_3__["GoogleChartService"]
        }, {
          type: src_app_covidtracking_covidtracking_service__WEBPACK_IMPORTED_MODULE_4__["CovidTrackingService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/covid/state/stateicu/stateicu.component.ts":
  /*!************************************************************!*\
    !*** ./src/app/covid/state/stateicu/stateicu.component.ts ***!
    \************************************************************/

  /*! exports provided: StateIcuComponent */

  /***/
  function srcAppCovidStateStateicuStateicuComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StateIcuComponent", function () {
      return StateIcuComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _covidcomponent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../covidcomponent */
    "./src/app/covid/covidcomponent.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _google_chart_google_chart_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../google-chart/google-chart.service */
    "./src/app/google-chart/google-chart.service.ts");
    /* harmony import */


    var src_app_covidtracking_covidtracking_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/covidtracking/covidtracking.service */
    "./src/app/covidtracking/covidtracking.service.ts");

    var StateIcuComponent = /*#__PURE__*/function (_covidcomponent__WEBP6) {
      _inherits(StateIcuComponent, _covidcomponent__WEBP6);

      var _super6 = _createSuper(StateIcuComponent);

      function StateIcuComponent(route, chartServices, covidTrackingServices) {
        var _this13;

        _classCallCheck(this, StateIcuComponent);

        _this13 = _super6.call(this, chartServices, covidTrackingServices);
        _this13.chartServices = chartServices;
        _this13.covidTrackingServices = covidTrackingServices;
        return _this13;
      }

      _createClass(StateIcuComponent, [{
        key: "loadData",
        value: function loadData() {
          var _this14 = this;

          this.covidTrackingServices.getHistoricalByState('ut').subscribe(function (data) {
            var stateData = data.sort(function (a, b) {
              return a.date < b.date ? -1 : a.date > b.date ? 1 : 0;
            });
            var rawData = [['Date', 'ICU']];
            stateData.forEach(function (d) {
              rawData.push([_this14.convertDate(d.date.toString()), d.hospitalizedIncrease]);
            });

            var chartData = _this14.gLib.visualization.arrayToDataTable(rawData);

            var options = {
              title: 'Currently in ICU (UT)',
              width: 1100,
              height: 700,
              seriesType: 'bars'
            };
            var icuChart = new _this14.gLib.visualization.ComboChart(document.getElementById('icu'));
            icuChart.draw(chartData, options);
          });
        }
      }]);

      return StateIcuComponent;
    }(_covidcomponent__WEBPACK_IMPORTED_MODULE_1__["CovidComponent"]);

    StateIcuComponent.ɵfac = function StateIcuComponent_Factory(t) {
      return new (t || StateIcuComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_google_chart_google_chart_service__WEBPACK_IMPORTED_MODULE_3__["GoogleChartService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_covidtracking_covidtracking_service__WEBPACK_IMPORTED_MODULE_4__["CovidTrackingService"]));
    };

    StateIcuComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: StateIcuComponent,
      selectors: [["app-stateicu"]],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]],
      decls: 1,
      vars: 0,
      consts: [["id", "icu"]],
      template: function StateIcuComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 0);
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvdmlkL3N0YXRlL3N0YXRlaWN1L3N0YXRlaWN1LmNvbXBvbmVudC5jc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](StateIcuComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-stateicu',
          templateUrl: './stateicu.component.html',
          styleUrls: ['./stateicu.component.css']
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
        }, {
          type: _google_chart_google_chart_service__WEBPACK_IMPORTED_MODULE_3__["GoogleChartService"]
        }, {
          type: src_app_covidtracking_covidtracking_service__WEBPACK_IMPORTED_MODULE_4__["CovidTrackingService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/covid/state/statepositives/statepositives.component.ts":
  /*!************************************************************************!*\
    !*** ./src/app/covid/state/statepositives/statepositives.component.ts ***!
    \************************************************************************/

  /*! exports provided: StatePositivesComponent */

  /***/
  function srcAppCovidStateStatepositivesStatepositivesComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StatePositivesComponent", function () {
      return StatePositivesComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _covidcomponent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../covidcomponent */
    "./src/app/covid/covidcomponent.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _google_chart_google_chart_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../google-chart/google-chart.service */
    "./src/app/google-chart/google-chart.service.ts");
    /* harmony import */


    var src_app_covidtracking_covidtracking_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/covidtracking/covidtracking.service */
    "./src/app/covidtracking/covidtracking.service.ts");

    var StatePositivesComponent = /*#__PURE__*/function (_covidcomponent__WEBP7) {
      _inherits(StatePositivesComponent, _covidcomponent__WEBP7);

      var _super7 = _createSuper(StatePositivesComponent);

      function StatePositivesComponent(route, chartServices, covidTrackingServices) {
        var _this15;

        _classCallCheck(this, StatePositivesComponent);

        _this15 = _super7.call(this, chartServices, covidTrackingServices);
        _this15.chartServices = chartServices;
        _this15.covidTrackingServices = covidTrackingServices;
        return _this15;
      }

      _createClass(StatePositivesComponent, [{
        key: "loadData",
        value: function loadData() {
          var _this16 = this;

          var state = 'UT';
          this.covidTrackingServices.getHistoricalByState(state).subscribe(function (data) {
            var stateData = data.sort(function (a, b) {
              return a.date < b.date ? -1 : a.date > b.date ? 1 : 0;
            });
            var rawData = [['Date', 'Positive', '3 Day SMA', '7 Day SMA']];
            var positives = stateData.map(function (d) {
              return d.positiveIncrease;
            });
            rawData.push([_this16.convertDate(stateData[0].date.toString()), stateData[0].positive, stateData[0].positive, stateData[0].positive]);

            for (var index = 1; index < stateData.length; index++) {
              var sma3 = _this16.getSma(positives, index, 3);

              var sma7 = _this16.getSma(positives, index, 7);

              rawData.push([_this16.convertDate(stateData[index].date.toString()), positives[index], sma3, sma7]);
            }

            var chartData = _this16.gLib.visualization.arrayToDataTable(rawData);

            var options = {
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
            var totalStateTesting = new _this16.gLib.visualization.ComboChart(document.getElementById('statepositives'));
            totalStateTesting.draw(chartData, options);
          });
        }
      }]);

      return StatePositivesComponent;
    }(_covidcomponent__WEBPACK_IMPORTED_MODULE_1__["CovidComponent"]);

    StatePositivesComponent.ɵfac = function StatePositivesComponent_Factory(t) {
      return new (t || StatePositivesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_google_chart_google_chart_service__WEBPACK_IMPORTED_MODULE_3__["GoogleChartService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_covidtracking_covidtracking_service__WEBPACK_IMPORTED_MODULE_4__["CovidTrackingService"]));
    };

    StatePositivesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: StatePositivesComponent,
      selectors: [["app-statetesting"]],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]],
      decls: 1,
      vars: 0,
      consts: [["id", "statepositives"]],
      template: function StatePositivesComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 0);
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvdmlkL3N0YXRlL3N0YXRlcG9zaXRpdmVzL3N0YXRlcG9zaXRpdmVzLmNvbXBvbmVudC5jc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](StatePositivesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-statetesting',
          templateUrl: './statepositives.component.html',
          styleUrls: ['./statepositives.component.css']
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
        }, {
          type: _google_chart_google_chart_service__WEBPACK_IMPORTED_MODULE_3__["GoogleChartService"]
        }, {
          type: src_app_covidtracking_covidtracking_service__WEBPACK_IMPORTED_MODULE_4__["CovidTrackingService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/covid/state/statetesting/statetesting.component.ts":
  /*!********************************************************************!*\
    !*** ./src/app/covid/state/statetesting/statetesting.component.ts ***!
    \********************************************************************/

  /*! exports provided: StateTestingComponent */

  /***/
  function srcAppCovidStateStatetestingStatetestingComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StateTestingComponent", function () {
      return StateTestingComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _covidcomponent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../covidcomponent */
    "./src/app/covid/covidcomponent.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _google_chart_google_chart_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../google-chart/google-chart.service */
    "./src/app/google-chart/google-chart.service.ts");
    /* harmony import */


    var src_app_covidtracking_covidtracking_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/covidtracking/covidtracking.service */
    "./src/app/covidtracking/covidtracking.service.ts");

    var StateTestingComponent = /*#__PURE__*/function (_covidcomponent__WEBP8) {
      _inherits(StateTestingComponent, _covidcomponent__WEBP8);

      var _super8 = _createSuper(StateTestingComponent);

      function StateTestingComponent(route, chartServices, covidTrackingServices) {
        var _this17;

        _classCallCheck(this, StateTestingComponent);

        _this17 = _super8.call(this, chartServices, covidTrackingServices);
        _this17.chartServices = chartServices;
        _this17.covidTrackingServices = covidTrackingServices;
        return _this17;
      }

      _createClass(StateTestingComponent, [{
        key: "loadData",
        value: function loadData() {
          var _this18 = this;

          var state = 'UT';
          this.covidTrackingServices.getHistoricalByState(state).subscribe(function (data) {
            var stateData = data.sort(function (a, b) {
              return a.date < b.date ? -1 : a.date > b.date ? 1 : 0;
            });
            var testingDeltas = [];

            for (var index = 0; index < stateData.length; index++) {
              testingDeltas.push(stateData[index].totalTestResultsIncrease);
            }

            var rawData = [['Date', 'Positive', '3 Day SMA', '7 Day SMA']];
            rawData.push([_this18.convertDate(stateData[0].date.toString()), stateData[0].totalTestResultsIncrease, stateData[0].totalTestResultsIncrease, stateData[0].totalTestResultsIncrease]);

            for (var _index = 1; _index < stateData.length; _index++) {
              var sma3 = _this18.getSma(testingDeltas, _index, 3);

              var sma7 = _this18.getSma(testingDeltas, _index, 7);

              rawData.push([_this18.convertDate(stateData[_index].date.toString()), stateData[_index].totalTestResultsIncrease, sma3, sma7]);
            }

            var chartData = _this18.gLib.visualization.arrayToDataTable(rawData);

            var options = {
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
            var totalStateTesting = new _this18.gLib.visualization.ComboChart(document.getElementById('statetesting'));
            totalStateTesting.draw(chartData, options);
          });
        }
      }]);

      return StateTestingComponent;
    }(_covidcomponent__WEBPACK_IMPORTED_MODULE_1__["CovidComponent"]);

    StateTestingComponent.ɵfac = function StateTestingComponent_Factory(t) {
      return new (t || StateTestingComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_google_chart_google_chart_service__WEBPACK_IMPORTED_MODULE_3__["GoogleChartService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_covidtracking_covidtracking_service__WEBPACK_IMPORTED_MODULE_4__["CovidTrackingService"]));
    };

    StateTestingComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: StateTestingComponent,
      selectors: [["app-statetesting"]],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]],
      decls: 1,
      vars: 0,
      consts: [["id", "statetesting"]],
      template: function StateTestingComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 0);
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvdmlkL3N0YXRlL3N0YXRldGVzdGluZy9zdGF0ZXRlc3RpbmcuY29tcG9uZW50LmNzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](StateTestingComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-statetesting',
          templateUrl: './statetesting.component.html',
          styleUrls: ['./statetesting.component.css']
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
        }, {
          type: _google_chart_google_chart_service__WEBPACK_IMPORTED_MODULE_3__["GoogleChartService"]
        }, {
          type: src_app_covidtracking_covidtracking_service__WEBPACK_IMPORTED_MODULE_4__["CovidTrackingService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/covid/state/stateventilator/stateventilator.component.ts":
  /*!**************************************************************************!*\
    !*** ./src/app/covid/state/stateventilator/stateventilator.component.ts ***!
    \**************************************************************************/

  /*! exports provided: StateVentilatorComponent */

  /***/
  function srcAppCovidStateStateventilatorStateventilatorComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StateVentilatorComponent", function () {
      return StateVentilatorComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _covidcomponent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../covidcomponent */
    "./src/app/covid/covidcomponent.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _google_chart_google_chart_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../google-chart/google-chart.service */
    "./src/app/google-chart/google-chart.service.ts");
    /* harmony import */


    var src_app_covidtracking_covidtracking_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/covidtracking/covidtracking.service */
    "./src/app/covidtracking/covidtracking.service.ts");

    var StateVentilatorComponent = /*#__PURE__*/function (_covidcomponent__WEBP9) {
      _inherits(StateVentilatorComponent, _covidcomponent__WEBP9);

      var _super9 = _createSuper(StateVentilatorComponent);

      function StateVentilatorComponent(route, chartServices, covidTrackingServices) {
        var _this19;

        _classCallCheck(this, StateVentilatorComponent);

        _this19 = _super9.call(this, chartServices, covidTrackingServices);
        _this19.chartServices = chartServices;
        _this19.covidTrackingServices = covidTrackingServices;
        return _this19;
      }

      _createClass(StateVentilatorComponent, [{
        key: "loadData",
        value: function loadData() {
          var _this20 = this;

          this.covidTrackingServices.getHistoricalByState('ut').subscribe(function (data) {
            var stateData = data.sort(function (a, b) {
              return a.date < b.date ? -1 : a.date > b.date ? 1 : 0;
            });
            var rawData = [['Date', 'Ventilator']];
            stateData.forEach(function (d) {
              rawData.push([_this20.convertDate(d.date.toString()), d.onVentilatorCurrently]);
            });

            var chartData = _this20.gLib.visualization.arrayToDataTable(rawData);

            var options = {
              title: 'Currently On Ventilator (UT)',
              width: 1100,
              height: 700,
              seriesType: 'bars'
            };
            var ventilatorChart = new _this20.gLib.visualization.ComboChart(document.getElementById('ventilator'));
            ventilatorChart.draw(chartData, options);
          });
        }
      }]);

      return StateVentilatorComponent;
    }(_covidcomponent__WEBPACK_IMPORTED_MODULE_1__["CovidComponent"]);

    StateVentilatorComponent.ɵfac = function StateVentilatorComponent_Factory(t) {
      return new (t || StateVentilatorComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_google_chart_google_chart_service__WEBPACK_IMPORTED_MODULE_3__["GoogleChartService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_covidtracking_covidtracking_service__WEBPACK_IMPORTED_MODULE_4__["CovidTrackingService"]));
    };

    StateVentilatorComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: StateVentilatorComponent,
      selectors: [["app-stateventilator"]],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]],
      decls: 1,
      vars: 0,
      consts: [["id", "ventilator"]],
      template: function StateVentilatorComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 0);
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvdmlkL3N0YXRlL3N0YXRldmVudGlsYXRvci9zdGF0ZXZlbnRpbGF0b3IuY29tcG9uZW50LmNzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](StateVentilatorComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-stateventilator',
          templateUrl: './stateventilator.component.html',
          styleUrls: ['./stateventilator.component.css']
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
        }, {
          type: _google_chart_google_chart_service__WEBPACK_IMPORTED_MODULE_3__["GoogleChartService"]
        }, {
          type: src_app_covidtracking_covidtracking_service__WEBPACK_IMPORTED_MODULE_4__["CovidTrackingService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/covidtracking/covidtracking.service.ts":
  /*!********************************************************!*\
    !*** ./src/app/covidtracking/covidtracking.service.ts ***!
    \********************************************************/

  /*! exports provided: CovidTrackingService */

  /***/
  function srcAppCovidtrackingCovidtrackingServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CovidTrackingService", function () {
      return CovidTrackingService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    ;
    ;

    var CovidTrackingService = /*#__PURE__*/function () {
      function CovidTrackingService(http) {
        _classCallCheck(this, CovidTrackingService);

        this.http = http;
        this.dataHost = 'https://www.coronagraphs.online'; //private dataHost = 'https://localhost';

        this.usData = '/api/us/current';
        this.usDaily = '/api/us/daily';
        this.stateHistorical = '/api/states/historical';
      }

      _createClass(CovidTrackingService, [{
        key: "getCountryData",
        value: function getCountryData() {
          return this.http.get(this.dataHost + this.usData);
        }
      }, {
        key: "getCountryDaily",
        value: function getCountryDaily() {
          return this.http.get(this.dataHost + this.usDaily);
        }
      }, {
        key: "getStateHistorical",
        value: function getStateHistorical() {
          return this.http.get(this.dataHost + this.stateHistorical);
        }
      }, {
        key: "getHistoricalByState",
        value: function getHistoricalByState(state) {
          var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]().set('state', 'ut');
          return this.http.get(this.dataHost + this.stateHistorical, {
            params: params
          });
        }
      }]);

      return CovidTrackingService;
    }();

    CovidTrackingService.ɵfac = function CovidTrackingService_Factory(t) {
      return new (t || CovidTrackingService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]));
    };

    CovidTrackingService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: CovidTrackingService,
      factory: CovidTrackingService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CovidTrackingService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/google-chart/google-chart.service.ts":
  /*!******************************************************!*\
    !*** ./src/app/google-chart/google-chart.service.ts ***!
    \******************************************************/

  /*! exports provided: GoogleChartService */

  /***/
  function srcAppGoogleChartGoogleChartServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GoogleChartService", function () {
      return GoogleChartService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var GoogleChartService = /*#__PURE__*/function () {
      function GoogleChartService() {
        _classCallCheck(this, GoogleChartService);

        this.loaded = false;
        this.google = google;
        this.google.charts.load('current', {
          'packages': ['corechart']
        });
        this.google.charts.setOnLoadCallback(this.setLoaded());
      }

      _createClass(GoogleChartService, [{
        key: "setLoaded",
        value: function setLoaded() {
          this.loaded = true;
        }
      }, {
        key: "getLoaded",
        value: function getLoaded() {
          return this.loaded;
        }
      }, {
        key: "getGoogle",
        value: function getGoogle() {
          return this.google;
        }
      }]);

      return GoogleChartService;
    }();

    GoogleChartService.ɵfac = function GoogleChartService_Factory(t) {
      return new (t || GoogleChartService)();
    };

    GoogleChartService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: GoogleChartService,
      factory: GoogleChartService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GoogleChartService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/http-interceptor.service.ts":
  /*!*********************************************!*\
    !*** ./src/app/http-interceptor.service.ts ***!
    \*********************************************/

  /*! exports provided: AppHttpInterceptorService */

  /***/
  function srcAppHttpInterceptorServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppHttpInterceptorService", function () {
      return AppHttpInterceptorService;
    });
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /**
     * Module class for application http interceptor.
     * @implements HttpInterceptor
     * @class AppHttpInterceptorService.
     */


    var AppHttpInterceptorService = /*#__PURE__*/function () {
      function AppHttpInterceptorService() {
        _classCallCheck(this, AppHttpInterceptorService);
      }

      _createClass(AppHttpInterceptorService, [{
        key: "intercept",
        value: function intercept(req, next) {
          var _this21 = this;

          return next.handle(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (err) {
            if (err instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpErrorResponse"]) {
              _this21.onError(err);
            }

            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err);
          }));
        }
        /**
         * Handle http errors.
         * @param response - ErrorResponse.
         */

      }, {
        key: "onError",
        value: function onError(response) {
          var clientErrorMessage = this.handleClientSideError(response.status);

          if (clientErrorMessage) {
            // show client side error
            return;
          }

          var serverErrorMessage = this.handleServerError(response.error);

          if (serverErrorMessage) {// show server error
          }
        }
      }, {
        key: "handleClientSideError",
        value: function handleClientSideError(status) {
          switch (status) {
            case 0:
              return 'NO INTERNET CONNECTION';

            case 404:
              return 'REQUEST FAILURE';

            default:
              return;
          }
        }
      }, {
        key: "handleServerError",
        value: function handleServerError(errorResponse) {
          // handle server error
          return '';
        }
      }]);

      return AppHttpInterceptorService;
    }();

    AppHttpInterceptorService.ɵfac = function AppHttpInterceptorService_Factory(t) {
      return new (t || AppHttpInterceptorService)();
    };

    AppHttpInterceptorService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: AppHttpInterceptorService,
      factory: AppHttpInterceptorService.ɵfac
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppHttpInterceptorService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
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

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! D:\projects\web\coronagraphs\clientui\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map