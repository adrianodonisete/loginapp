(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main-main-module"],{

/***/ "./src/app/main/main-routing.module.ts":
/*!*********************************************!*\
  !*** ./src/app/main/main-routing.module.ts ***!
  \*********************************************/
/*! exports provided: MainRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainRoutingModule", function() { return MainRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _people_people_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./people/people.component */ "./src/app/main/people/people.component.ts");
/* harmony import */ var _products_products_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./products/products.component */ "./src/app/main/products/products.component.ts");





var routes = [
    { path: '', redirectTo: 'people' },
    { path: 'people', component: _people_people_component__WEBPACK_IMPORTED_MODULE_3__["PeopleComponent"] },
    { path: 'products', component: _products_products_component__WEBPACK_IMPORTED_MODULE_4__["ProductsComponent"] }
];
var MainRoutingModule = /** @class */ (function () {
    function MainRoutingModule() {
    }
    MainRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], MainRoutingModule);
    return MainRoutingModule;
}());



/***/ }),

/***/ "./src/app/main/main.module.ts":
/*!*************************************!*\
  !*** ./src/app/main/main.module.ts ***!
  \*************************************/
/*! exports provided: MainModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainModule", function() { return MainModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _main_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./main-routing.module */ "./src/app/main/main-routing.module.ts");
/* harmony import */ var _people_people_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./people/people.component */ "./src/app/main/people/people.component.ts");
/* harmony import */ var _products_products_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./products/products.component */ "./src/app/main/products/products.component.ts");






var MainModule = /** @class */ (function () {
    function MainModule() {
    }
    MainModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_people_people_component__WEBPACK_IMPORTED_MODULE_4__["PeopleComponent"], _products_products_component__WEBPACK_IMPORTED_MODULE_5__["ProductsComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _main_routing_module__WEBPACK_IMPORTED_MODULE_3__["MainRoutingModule"]
            ]
        })
    ], MainModule);
    return MainModule;
}());



/***/ }),

/***/ "./src/app/main/main.service.ts":
/*!**************************************!*\
  !*** ./src/app/main/main.service.ts ***!
  \**************************************/
/*! exports provided: MainService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainService", function() { return MainService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");





var MainService = /** @class */ (function () {
    function MainService(http) {
        this.http = http;
        // readonly url = 'http://localhost:3000/api';
        this.url = 'https://ng-login-app.herokuapp.com/api';
    }
    MainService.prototype.getPeople = function () {
        return this.http.get(this.url + "/people")
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (p) { return console.log(p); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (e) {
            console.log(e);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(e);
        }));
    };
    MainService.prototype.getProducts = function () {
        return this.http.get(this.url + "/products")
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (p) { return console.log(p); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (e) {
            console.log(e);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(e);
        }));
    };
    MainService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], MainService);
    return MainService;
}());



/***/ }),

/***/ "./src/app/main/people/people.component.css":
/*!**************************************************!*\
  !*** ./src/app/main/people/people.component.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21haW4vcGVvcGxlL3Blb3BsZS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/main/people/people.component.html":
/*!***************************************************!*\
  !*** ./src/app/main/people/people.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<h3>People</h3>\r\n\r\n<div *ngIf=\"(people$ | async)?.length>0; else noperson\">\r\n  <ul>\r\n    <li *ngFor=\"let p of (people$ | async)\">{{p.name}} - {{p.email}}</li>\r\n  </ul>\r\n</div>\r\n\r\n<ng-template #noperson>\r\n  <p>No person found!</p>\r\n</ng-template>"

/***/ }),

/***/ "./src/app/main/people/people.component.ts":
/*!*************************************************!*\
  !*** ./src/app/main/people/people.component.ts ***!
  \*************************************************/
/*! exports provided: PeopleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PeopleComponent", function() { return PeopleComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _main_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../main.service */ "./src/app/main/main.service.ts");



var PeopleComponent = /** @class */ (function () {
    function PeopleComponent(mainService) {
        this.mainService = mainService;
    }
    PeopleComponent.prototype.ngOnInit = function () {
        this.people$ = this.mainService.getPeople();
    };
    PeopleComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-people',
            template: __webpack_require__(/*! ./people.component.html */ "./src/app/main/people/people.component.html"),
            styles: [__webpack_require__(/*! ./people.component.css */ "./src/app/main/people/people.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_main_service__WEBPACK_IMPORTED_MODULE_2__["MainService"]])
    ], PeopleComponent);
    return PeopleComponent;
}());



/***/ }),

/***/ "./src/app/main/products/products.component.css":
/*!******************************************************!*\
  !*** ./src/app/main/products/products.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21haW4vcHJvZHVjdHMvcHJvZHVjdHMuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/main/products/products.component.html":
/*!*******************************************************!*\
  !*** ./src/app/main/products/products.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h3>Products</h3>\r\n\r\n<div *ngIf=\"(products$ | async)?.length>0; else noproduct\">\r\n  <ul>\r\n    <li *ngFor=\"let p of (products$ | async)\">{{p.name}} - {{p.department}} - {{p.price}}</li>\r\n  </ul>\r\n</div>\r\n\r\n<ng-template #noproduct>\r\n  <p>No product found!</p>\r\n</ng-template>"

/***/ }),

/***/ "./src/app/main/products/products.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/main/products/products.component.ts ***!
  \*****************************************************/
/*! exports provided: ProductsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsComponent", function() { return ProductsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _main_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../main.service */ "./src/app/main/main.service.ts");



var ProductsComponent = /** @class */ (function () {
    function ProductsComponent(mainService) {
        this.mainService = mainService;
    }
    ProductsComponent.prototype.ngOnInit = function () {
        this.products$ = this.mainService.getProducts();
    };
    ProductsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-products',
            template: __webpack_require__(/*! ./products.component.html */ "./src/app/main/products/products.component.html"),
            styles: [__webpack_require__(/*! ./products.component.css */ "./src/app/main/products/products.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_main_service__WEBPACK_IMPORTED_MODULE_2__["MainService"]])
    ], ProductsComponent);
    return ProductsComponent;
}());



/***/ })

}]);
//# sourceMappingURL=main-main-module.js.map