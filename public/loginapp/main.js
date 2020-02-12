(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./main/main.module": [
		"./src/app/main/main.module.ts",
		"main-main-module"
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}
	return __webpack_require__.e(ids[1]).then(function() {
		var id = ids[0];
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _auth_auth_guard_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth/auth-guard.service */ "./src/app/auth/auth-guard.service.ts");




var routes = [
    { path: '', pathMatch: 'full', redirectTo: '/main/people' },
    { path: 'main', loadChildren: './main/main.module#MainModule', canActivate: [_auth_auth_guard_service__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".username {\r\n    margin: 20px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxZQUFZO0FBQ2hCIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudXNlcm5hbWUge1xyXG4gICAgbWFyZ2luOiAyMHB4O1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar>\r\n  My App \r\n  <span fxFlex></span>\r\n\r\n  <ng-container *ngIf=\"!(authenticated$ | async) \">\r\n    <button mat-button routerLink=\"/auth/login\">\r\n      <mat-icon>input</mat-icon>\r\n      &nbsp;Sign in\r\n    </button>\r\n    <button mat-button routerLink=\"/auth/register\">\r\n      <mat-icon>person_add</mat-icon>\r\n      &nbsp;Sign Up\r\n    </button> \r\n    \r\n  </ng-container>\r\n\r\n  <ng-container *ngIf=\"(authenticated$ | async) && (user$ |async)\">\r\n\r\n    <button mat-icon-button routerLink=\"/main/people\">\r\n      <mat-icon>home</mat-icon>\r\n    </button>\r\n    <button mat-icon-button routerLink=\"/main/products\">\r\n      <mat-icon>shop</mat-icon>\r\n    </button>\r\n    <button mat-icon-button (click)=\"logout()\">\r\n      <mat-icon>exit_to_app</mat-icon>\r\n    </button>\r\n\r\n    <button mat-icon-button [matMenuTriggerFor]=\"menu\">\r\n      <mat-icon>account_circle</mat-icon>\r\n    </button>\r\n    <mat-menu #menu=\"matMenu\">\r\n      <p class=\"username\">{{(user$|async)?.email}}</p>\r\n      <mat-divider></mat-divider>\r\n      <button mat-menu-item (click)=\"logout()\">\r\n        <mat-icon>exit_to_app</mat-icon>\r\n        Exit\r\n      </button>\r\n    </mat-menu>    \r\n\r\n  </ng-container>\r\n</mat-toolbar>\r\n\r\n<router-outlet></router-outlet>\r\n"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth/auth.service */ "./src/app/auth/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var AppComponent = /** @class */ (function () {
    function AppComponent(authService, router) {
        this.authService = authService;
        this.router = router;
        this.authenticated$ = this.authService.isAuthenticated();
        this.user$ = this.authService.getUser();
    }
    AppComponent.prototype.logout = function () {
        this.authService.logout();
        this.router.navigateByUrl('/auth/login');
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], AppComponent);
    return AppComponent;
}());



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _material_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./material.module */ "./src/app/material.module.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _auth_auth_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./auth/auth.module */ "./src/app/auth/auth.module.ts");
/* harmony import */ var _auth_auth_interceptor__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./auth/auth.interceptor */ "./src/app/auth/auth.interceptor.ts");










var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
                _material_module__WEBPACK_IMPORTED_MODULE_6__["MaterialModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"],
                _auth_auth_module__WEBPACK_IMPORTED_MODULE_8__["AuthModule"].forRoot()
            ],
            providers: [
                { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HTTP_INTERCEPTORS"], useClass: _auth_auth_interceptor__WEBPACK_IMPORTED_MODULE_9__["AuthInterceptor"], multi: true },
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/auth/auth-guard.service.ts":
/*!********************************************!*\
  !*** ./src/app/auth/auth-guard.service.ts ***!
  \********************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth.service */ "./src/app/auth/auth.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");





var AuthGuard = /** @class */ (function () {
    function AuthGuard(router, authService) {
        this.router = router;
        this.authService = authService;
    }
    AuthGuard.prototype.canActivate = function (route, state) {
        var _this = this;
        return this.authService.isAuthenticated()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (b) {
            if (!b) {
                _this.router.navigateByUrl('/auth/login');
            }
        }));
    };
    AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/auth/auth-routing.module.ts":
/*!*********************************************!*\
  !*** ./src/app/auth/auth-routing.module.ts ***!
  \*********************************************/
/*! exports provided: AuthRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthRoutingModule", function() { return AuthRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login/login.component */ "./src/app/auth/login/login.component.ts");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./register/register.component */ "./src/app/auth/register/register.component.ts");





var routes = [
    { path: 'auth/login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"] },
    { path: 'auth/register', component: _register_register_component__WEBPACK_IMPORTED_MODULE_4__["RegisterComponent"] }
];
var AuthRoutingModule = /** @class */ (function () {
    function AuthRoutingModule() {
    }
    AuthRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AuthRoutingModule);
    return AuthRoutingModule;
}());



/***/ }),

/***/ "./src/app/auth/auth.interceptor.ts":
/*!******************************************!*\
  !*** ./src/app/auth/auth.interceptor.ts ***!
  \******************************************/
/*! exports provided: AuthInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthInterceptor", function() { return AuthInterceptor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./auth.service */ "./src/app/auth/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");







var AuthInterceptor = /** @class */ (function () {
    function AuthInterceptor(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    AuthInterceptor.prototype.intercept = function (req, next) {
        var _this = this;
        if (localStorage.getItem('token')) {
            var token = localStorage.getItem('token');
            var authReq = req.clone({
                setHeaders: {
                    Authorization: token
                }
            });
            return next.handle(authReq)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (error) {
                console.log(error);
                if (error instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpErrorResponse"]) {
                    if (error.status === 401) {
                        _this.authService.logout();
                        _this.router.navigateByUrl('/auth/login');
                    }
                }
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["throwError"])(error);
            }));
        }
        return next.handle(req);
    };
    AuthInterceptor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]])
    ], AuthInterceptor);
    return AuthInterceptor;
}());



/***/ }),

/***/ "./src/app/auth/auth.module.ts":
/*!*************************************!*\
  !*** ./src/app/auth/auth.module.ts ***!
  \*************************************/
/*! exports provided: AuthModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthModule", function() { return AuthModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _auth_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth-routing.module */ "./src/app/auth/auth-routing.module.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./login/login.component */ "./src/app/auth/login/login.component.ts");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./register/register.component */ "./src/app/auth/register/register.component.ts");
/* harmony import */ var _material_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../material.module */ "./src/app/material.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _auth_interceptor__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./auth.interceptor */ "./src/app/auth/auth.interceptor.ts");









var AuthModule = /** @class */ (function () {
    function AuthModule() {
    }
    AuthModule_1 = AuthModule;
    AuthModule.forRoot = function () {
        return {
            ngModule: AuthModule_1,
            providers: [
                _auth_interceptor__WEBPACK_IMPORTED_MODULE_8__["AuthInterceptor"]
            ]
        };
    };
    var AuthModule_1;
    AuthModule = AuthModule_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"], _register_register_component__WEBPACK_IMPORTED_MODULE_5__["RegisterComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _auth_routing_module__WEBPACK_IMPORTED_MODULE_3__["AuthRoutingModule"],
                _material_module__WEBPACK_IMPORTED_MODULE_6__["MaterialModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"]
            ]
        })
    ], AuthModule);
    return AuthModule;
}());



/***/ }),

/***/ "./src/app/auth/auth.service.ts":
/*!**************************************!*\
  !*** ./src/app/auth/auth.service.ts ***!
  \**************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");





var AuthService = /** @class */ (function () {
    function AuthService(http) {
        this.http = http;
        // readonly url = 'http://localhost:3000/auth';
        this.url = 'https://ng-login-app.herokuapp.com/api';
        this.subjUser$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](null);
        this.subjLoggedIn$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](false);
    }
    AuthService.prototype.register = function (user) {
        return this.http.post(this.url + "/register", user);
    };
    AuthService.prototype.login = function (credentials) {
        var _this = this;
        return this.http
            .post(this.url + "/login", credentials)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (u) {
            localStorage.setItem('token', u.token);
            _this.subjLoggedIn$.next(true);
            _this.subjUser$.next(u);
        }));
    };
    AuthService.prototype.isAuthenticated = function () {
        var token = localStorage.getItem('token');
        if (token && !this.subjLoggedIn$.value) {
            return this.checkTokenValidation();
        }
        return this.subjLoggedIn$.asObservable();
    };
    AuthService.prototype.checkTokenValidation = function () {
        var _this = this;
        return this.http
            .get(this.url + "/user")
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (u) {
            if (u) {
                localStorage.setItem('token', u.token);
                _this.subjLoggedIn$.next(true);
                _this.subjUser$.next(u);
            }
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (u) { return (u) ? true : false; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (err) {
            _this.logout();
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(false);
        }));
    };
    AuthService.prototype.getUser = function () {
        return this.subjUser$.asObservable();
    };
    AuthService.prototype.logout = function () {
        localStorage.removeItem('token');
        this.subjLoggedIn$.next(false);
        this.subjUser$.next(null);
    };
    AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/auth/login/login.component.css":
/*!************************************************!*\
  !*** ./src/app/auth/login/login.component.css ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "  \r\n.login-card {\r\n    width: 400px;\r\n    margin-top: 100px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXV0aC9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTtJQUNJLFlBQVk7SUFDWixpQkFBaUI7QUFDckIiLCJmaWxlIjoic3JjL2FwcC9hdXRoL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIgIFxyXG4ubG9naW4tY2FyZCB7XHJcbiAgICB3aWR0aDogNDAwcHg7XHJcbiAgICBtYXJnaW4tdG9wOiAxMDBweDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/auth/login/login.component.html":
/*!*************************************************!*\
  !*** ./src/app/auth/login/login.component.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"column\" >\r\n    <div fxLayoutAlign=\"center\" fxLayout=\"row\">\r\n      <form  [formGroup]=\"loginForm\" (ngSubmit)=\"onSubmit()\" >\r\n  \r\n        <mat-card class=\"login-card mat-elevation-z8\" >\r\n            <mat-card-title>Login</mat-card-title>\r\n            <mat-card-content fxLayout=\"column\" *ngIf=\"!loading\" >\r\n              <mat-form-field >\r\n                <input matInput formControlName=\"email\" type=\"email\"\r\n                    placeholder=\"E-mail\" autocomplete=\"email\" readonly=\"false\">\r\n              </mat-form-field>\r\n              <mat-form-field>\r\n                <input matInput formControlName=\"password\" type=\"password\" disabled=\"true\" \r\n                  placeholder=\"Password\" autocomplete=\"password\">\r\n              </mat-form-field>\r\n            </mat-card-content>\r\n            <mat-card-actions fxLayout=\"row\" fxLayoutAlign=\"end center\" >\r\n              <button mat-button color=\"primary\" type=\"submit\" [disabled]=\"!loginForm.valid\">\r\n                <mat-icon>check</mat-icon>\r\n                Login\r\n              </button>\r\n            </mat-card-actions>\r\n            <mat-progress-bar *ngIf=\"loading\" mode=\"indeterminate\"></mat-progress-bar>\r\n        </mat-card>\r\n      </form>\r\n  \r\n    </div>\r\n  </div>\r\n  \r\n  \r\n"

/***/ }),

/***/ "./src/app/auth/login/login.component.ts":
/*!***********************************************!*\
  !*** ./src/app/auth/login/login.component.ts ***!
  \***********************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth/auth.service.ts");






var LoginComponent = /** @class */ (function () {
    function LoginComponent(fb, authService, router, snackBar) {
        this.fb = fb;
        this.authService = authService;
        this.router = router;
        this.snackBar = snackBar;
        this.loginForm = this.fb.group({
            'email': ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]],
            'password': ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(6)]],
        });
        this.loading = false;
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.onSubmit = function () {
        var _this = this;
        var crendentials = this.loginForm.value;
        this.loading = true;
        this.authService.login(crendentials)
            .subscribe(function (user) {
            console.log(user);
            _this.snackBar.open('Logged in successfuly. Welcome ' + user.firstname + '!', 'OK', { duration: 2000 });
            _this.router.navigateByUrl('/');
            _this.loading = false;
        }, function (err) {
            console.log(err);
            _this.snackBar.open('Login Error', 'OK', { duration: 2000 });
            _this.loading = false;
        });
    };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/auth/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/auth/login/login.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/auth/register/register.component.css":
/*!******************************************************!*\
  !*** ./src/app/auth/register/register.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n.register-form {\r\n    max-width: 600px;\r\n    margin-top: 40px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXV0aC9yZWdpc3Rlci9yZWdpc3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTtJQUNJLGdCQUFnQjtJQUNoQixnQkFBZ0I7QUFDcEIiLCJmaWxlIjoic3JjL2FwcC9hdXRoL3JlZ2lzdGVyL3JlZ2lzdGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuLnJlZ2lzdGVyLWZvcm0ge1xyXG4gICAgbWF4LXdpZHRoOiA2MDBweDtcclxuICAgIG1hcmdpbi10b3A6IDQwcHg7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/auth/register/register.component.html":
/*!*******************************************************!*\
  !*** ./src/app/auth/register/register.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div  fxLayout=\"row\" fxLayoutAlign=\"space-around center\" >\r\n  <div align=\"center\" fxLayout=\"row\" fxLayoutAlign=\"center center\"  class=\"register-form\">\r\n\r\n    <form role=\"form\" [formGroup]=\"formRegister\" (ngSubmit)=\"onSubmit()\">\r\n\r\n      <mat-card class=\"mat-elevation-z8\" flex=\"80\">\r\n\r\n        <mat-card-title>Sign up</mat-card-title>\r\n\r\n        <mat-card-content fxLayout=\"column\" fxLayoutAlign=\"space-around stretch\">\r\n                      \r\n          <div fxLayout=\"row\" fxLayoutAlign=\"space-between stretch\">\r\n            <mat-form-field fxFlex=\"45\">\r\n              <input matInput type=\"text\" formControlName=\"firstname\" \r\n                autocomplete=\"firstname\" placeholder=\"First Name\">\r\n            </mat-form-field>               \r\n            <mat-form-field fxFlex=\"45\">\r\n              <input matInput type=\"text\" formControlName=\"lastname\" \r\n                autocomplete=\"lastname\" placeholder=\"Last Name\" >\r\n            </mat-form-field>               \r\n          </div>\r\n\r\n          <mat-form-field>\r\n            <input matInput type=\"text\" formControlName=\"address\" \r\n                  autocomplete=\"address\" placeholder=\"Address\" >\r\n          </mat-form-field>\r\n\r\n          <div fxLayout=\"row\" fxLayoutAlign=\"space-between stretch\">\r\n            <mat-form-field fxFlex=\"75\"> \r\n              <input matInput type=\"text\" formControlName=\"city\" \r\n                autocomplete=\"citt\" placeholder=\"City\"  >\r\n            </mat-form-field>\r\n          \r\n            <mat-form-field  fxFlex=\"15\">\r\n              <mat-select matNativeControl placeholder=\"State\" formControlName=\"state\">\r\n                <mat-option *ngFor=\"let state of states\" [value]=\"state\">\r\n                  {{state}}\r\n                </mat-option>\r\n              </mat-select>\r\n            </mat-form-field>          \r\n            \r\n          </div>          \r\n\r\n          <div fxLayout=\"row\" fxLayoutAlign=\"space-between stretch\">\r\n            <mat-form-field fxFlex=\"45\"> \r\n              <input matInput type=\"text\" formControlName=\"phone\" \r\n                autocomplete=\"Phone\" placeholder=\"Phone\"  >\r\n            </mat-form-field>\r\n            <mat-form-field fxFlex=\"45\">               \r\n              <input matInput type=\"text\" formControlName=\"mobilephone\" \r\n                autocomplete=\"mobilephone\" placeholder=\"Mobile Phone\"  >\r\n            </mat-form-field>\r\n          </div>  \r\n\r\n          <div fxLayout=\"row\" fxLayoutAlign=\"space-between stretch\">\r\n            <mat-form-field fxFlex=\"100\">\r\n              <input matInput type=\"email\" formControlName=\"email\" \r\n                class=\"form-control\" value=\"\" autocomplete=\"email\" placeholder=\"E-mail\" >\r\n            </mat-form-field>  \r\n          </div>\r\n\r\n          <div fxLayout=\"row\" fxLayoutAlign=\"space-between stretch\">\r\n\r\n            <mat-form-field  fxFlex=\"45\">\r\n              <input matInput type=\"password\" formControlName=\"password1\" \r\n                type=\"password\" autocomplete=\"off\">\r\n              <mat-placeholder>\r\n                <mat-icon>lock</mat-icon> New password\r\n              </mat-placeholder>\r\n            </mat-form-field>\r\n            <mat-form-field fxFlex=\"45\">\r\n              <input matInput type=\"password\" formControlName=\"password2\" \r\n                    class=\"form-control\"  autocomplete=\"off\">\r\n              <mat-placeholder>\r\n                <mat-icon>lock_outline</mat-icon> Password confirmation\r\n              </mat-placeholder>\r\n            </mat-form-field>\r\n\r\n          </div>\r\n\r\n\r\n          <div fxLayout=\"row\" fxLayoutAlign=\"end end\" >\r\n              <button mat-button color=\"primary\" type=\"submit\" [disabled]=\"!formRegister.valid\">\r\n                <mat-icon>done</mat-icon>&nbsp;Register\r\n              </button>\r\n          </div>\r\n\r\n\r\n\r\n        </mat-card-content>\r\n      </mat-card>\r\n    </form>\r\n\r\n\r\n  </div>\r\n</div>\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/auth/register/register.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/auth/register/register.component.ts ***!
  \*****************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth/auth.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");






var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(fb, authService, snackBar, router) {
        this.fb = fb;
        this.authService = authService;
        this.snackBar = snackBar;
        this.router = router;
        this.formRegister = this.fb.group({
            'firstname': ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            'lastname': ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            'address': ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            'city': ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            'state': ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            'phone': ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            'mobilephone': ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            'email': ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]],
            'password1': ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(6)]],
            'password2': ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(6)]],
        }, { validator: this.matchingPasswords });
        this.states = ["MG", "RS", "SC", "GO", "PR", "SP"];
    }
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent.prototype.matchingPasswords = function (group) {
        if (group) {
            var password1 = group.controls['password1'].value;
            var password2 = group.controls['password2'].value;
            if (password1 == password2) {
                return null;
            }
        }
        return { matching: false };
    };
    RegisterComponent.prototype.onSubmit = function () {
        var _this = this;
        console.log(this.formRegister.value);
        var u = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, this.formRegister.value, { password: this.formRegister.value.password1 });
        this.authService.register(u)
            .subscribe(function (u) {
            _this.snackBar.open('Successfuly registered. Use your credentials to sing in', 'OK', { duration: 2000 });
            _this.router.navigateByUrl('/auth/login');
        }, function (err) {
            console.error(err);
            _this.snackBar.open(err.error.message, 'OK', { duration: 2000 });
        });
    };
    RegisterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! ./register.component.html */ "./src/app/auth/register/register.component.html"),
            styles: [__webpack_require__(/*! ./register.component.css */ "./src/app/auth/register/register.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/material.module.ts":
/*!************************************!*\
  !*** ./src/app/material.module.ts ***!
  \************************************/
/*! exports provided: MaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialModule", function() { return MaterialModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");




var MaterialModule = /** @class */ (function () {
    function MaterialModule() {
    }
    MaterialModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [],
            exports: [
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_2__["FlexLayoutModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatAutocompleteModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatBadgeModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatBottomSheetModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatButtonToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatChipsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDatepickerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDividerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatExpansionModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatGridListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatNativeDateModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatPaginatorModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatProgressBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatProgressSpinnerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatRadioModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatRippleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSliderModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSlideToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSnackBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSortModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatStepperModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTabsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTooltipModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTreeModule"],
            ],
            declarations: []
        })
    ], MaterialModule);
    return MaterialModule;
}());



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


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\work\nodejs\login\server\src\ng\loginapp\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map