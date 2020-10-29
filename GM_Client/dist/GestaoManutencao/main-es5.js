function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

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
  "./src/app/Login-logout/logincomponent.ts":
  /*!************************************************!*\
    !*** ./src/app/Login-logout/logincomponent.ts ***!
    \************************************************/

  /*! exports provided: LoginComponent */

  /***/
  function srcAppLoginLogoutLogincomponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginComponent", function () {
      return LoginComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _TokenAuth_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../TokenAuth/auth.service */
    "./src/app/TokenAuth/auth.service.ts");
    /* harmony import */


    var _shared_aspNetUsers_aspNetUsers_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../shared/aspNetUsers/aspNetUsers.service */
    "./src/app/shared/aspNetUsers/aspNetUsers.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/progress-spinner */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-spinner.js");

    function LoginComponent_mat_spinner_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mat-spinner");
      }
    } //import * as moment from "moment";


    var LoginComponent =
    /*#__PURE__*/
    function () {
      function LoginComponent(actRoute, fb, authService, router, ngZone, aspNetUsersService) {
        _classCallCheck(this, LoginComponent);

        this.actRoute = actRoute;
        this.fb = fb;
        this.authService = authService;
        this.router = router;
        this.ngZone = ngZone;
        this.aspNetUsersService = aspNetUsersService;
        this.isLoading = false;
        this.form = this.fb.group({
          username: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
          password: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
        });
      }

      _createClass(LoginComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.authStatusSub = this.authService.getAuthStatusListener().subscribe(function (authStatus) {
            _this.isLoading = false;
          });
        }
      }, {
        key: "login",
        value: function login() {
          var val = this.form.value;

          if (this.form.invalid) {
            return;
          }

          this.isLoading = true;
          this.authService.login(val.username, val.password);
          /*    setTimeout(() => {
               this.refresh();
             },3000);  */
        }
      }, {
        key: "refresh",
        value: function refresh() {
          window.location.reload();
        }
      }]);

      return LoginComponent;
    }();

    LoginComponent.ɵfac = function LoginComponent_Factory(t) {
      return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_TokenAuth_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_aspNetUsers_aspNetUsers_service__WEBPACK_IMPORTED_MODULE_4__["AspNetUsersService"]));
    };

    LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: LoginComponent,
      selectors: [["my-login"]],
      decls: 22,
      vars: 2,
      consts: [[1, "container", "wrapper", "wrapper2"], [4, "ngIf"], [1, "row"], [3, "formGroup"], [1, "form-field"], ["name", "username", "formControlName", "username"], ["name", "password", "formControlName", "password", "type", "password"], [1, "form-buttons"], [1, "btn", "btn-primary", 3, "click"]],
      template: function LoginComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, LoginComponent_mat_spinner_1_Template, 1, 0, "mat-spinner", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "form", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "fieldset");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "legend");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Autentica\xE7\xE3o de utilizador");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Email");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "input", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Password");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "input", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "button", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginComponent_Template_button_click_19_listener() {
            return ctx.login();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Login");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, " \xA0 \xA0 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isLoading);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.form);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_6__["MatSpinner"]],
      encapsulation: 2
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: "my-login",
          templateUrl: "./logincomponent.html"
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
        }, {
          type: _TokenAuth_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]
        }, {
          type: _shared_aspNetUsers_aspNetUsers_service__WEBPACK_IMPORTED_MODULE_4__["AspNetUsersService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/TokenAuth/auth.guard.ts":
  /*!*****************************************!*\
    !*** ./src/app/TokenAuth/auth.guard.ts ***!
    \*****************************************/

  /*! exports provided: AuthGuard */

  /***/
  function srcAppTokenAuthAuthGuardTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthGuard", function () {
      return AuthGuard;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _shared_Constantes_userRoles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./../shared/Constantes/userRoles */
    "./src/app/shared/Constantes/userRoles.ts");
    /* harmony import */


    var _components_alerta_permissao_alerta_permissao_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../components/alerta-permissao/alerta-permissao.component */
    "./src/app/components/alerta-permissao/alerta-permissao.component.ts");
    /* harmony import */


    var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./auth.service */
    "./src/app/TokenAuth/auth.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");

    var AuthGuard =
    /*#__PURE__*/
    function () {
      //http://localhost:4200/edit-equip/195

      /*
       path: "my-login"
      */
      function AuthGuard(authService, router, dialog) {
        _classCallCheck(this, AuthGuard);

        this.authService = authService;
        this.router = router;
        this.dialog = dialog;
        /*
            Admin = 1,
          Utilizador = 2, funcionario de manutencao
          Convidado = 3, apenas acesso para listar equipamentos e pedir assistencia
        */
        //mudar o nome: UserRoleMapping

        this.dict = [["list-permissao", _shared_Constantes_userRoles__WEBPACK_IMPORTED_MODULE_1__["UserRoles"].Admin], ["edit-permissao", _shared_Constantes_userRoles__WEBPACK_IMPORTED_MODULE_1__["UserRoles"].Admin], ["edit-permissao/:id", _shared_Constantes_userRoles__WEBPACK_IMPORTED_MODULE_1__["UserRoles"].Admin], ["asp-net-user-list", _shared_Constantes_userRoles__WEBPACK_IMPORTED_MODULE_1__["UserRoles"].Admin], ["asp-net-user-edit/:id", _shared_Constantes_userRoles__WEBPACK_IMPORTED_MODULE_1__["UserRoles"].Admin], ["add-register", _shared_Constantes_userRoles__WEBPACK_IMPORTED_MODULE_1__["UserRoles"].Admin], ["pedido-mcurativa-list-teste", _shared_Constantes_userRoles__WEBPACK_IMPORTED_MODULE_1__["UserRoles"].Admin], ["pedido-mcurativa-list-teste", _shared_Constantes_userRoles__WEBPACK_IMPORTED_MODULE_1__["UserRoles"].Convidado], ["pedido-mcurativa-list-teste", _shared_Constantes_userRoles__WEBPACK_IMPORTED_MODULE_1__["UserRoles"].Utilizador], ["pedido-mcurativa-add", _shared_Constantes_userRoles__WEBPACK_IMPORTED_MODULE_1__["UserRoles"].Admin], ["pedido-mcurativa-add", _shared_Constantes_userRoles__WEBPACK_IMPORTED_MODULE_1__["UserRoles"].Convidado], ["pedido-mcurativa-add", _shared_Constantes_userRoles__WEBPACK_IMPORTED_MODULE_1__["UserRoles"].Utilizador], ["intervencao-curativa-add", _shared_Constantes_userRoles__WEBPACK_IMPORTED_MODULE_1__["UserRoles"].Admin], ["intervencao-curativa-add", _shared_Constantes_userRoles__WEBPACK_IMPORTED_MODULE_1__["UserRoles"].Utilizador], ["intervencao-preventiva-add", _shared_Constantes_userRoles__WEBPACK_IMPORTED_MODULE_1__["UserRoles"].Admin], ["intervencao-preventiva-add", _shared_Constantes_userRoles__WEBPACK_IMPORTED_MODULE_1__["UserRoles"].Utilizador], ["pedido-mpreventiva-add", _shared_Constantes_userRoles__WEBPACK_IMPORTED_MODULE_1__["UserRoles"].Admin], ["pedido-mpreventiva-add", _shared_Constantes_userRoles__WEBPACK_IMPORTED_MODULE_1__["UserRoles"].Utilizador], ["pedido-mpreventiva-add", _shared_Constantes_userRoles__WEBPACK_IMPORTED_MODULE_1__["UserRoles"].Convidado], ["pedido-preventiva-list", _shared_Constantes_userRoles__WEBPACK_IMPORTED_MODULE_1__["UserRoles"].Admin], ["pedido-preventiva-list", _shared_Constantes_userRoles__WEBPACK_IMPORTED_MODULE_1__["UserRoles"].Utilizador], ["pedido-preventiva-list", _shared_Constantes_userRoles__WEBPACK_IMPORTED_MODULE_1__["UserRoles"].Convidado], ["grupomaquina-list", _shared_Constantes_userRoles__WEBPACK_IMPORTED_MODULE_1__["UserRoles"].Admin], ["grupomaquina-list", _shared_Constantes_userRoles__WEBPACK_IMPORTED_MODULE_1__["UserRoles"].Utilizador], ["grupomaquina-list", _shared_Constantes_userRoles__WEBPACK_IMPORTED_MODULE_1__["UserRoles"].Convidado], ["edit-equip/:id", _shared_Constantes_userRoles__WEBPACK_IMPORTED_MODULE_1__["UserRoles"].Admin], ["edit-equip", _shared_Constantes_userRoles__WEBPACK_IMPORTED_MODULE_1__["UserRoles"].Admin], ["equip-list", _shared_Constantes_userRoles__WEBPACK_IMPORTED_MODULE_1__["UserRoles"].Admin], ["equip-list", _shared_Constantes_userRoles__WEBPACK_IMPORTED_MODULE_1__["UserRoles"].Convidado], ["equip-list", _shared_Constantes_userRoles__WEBPACK_IMPORTED_MODULE_1__["UserRoles"].Utilizador], ["add-equip", _shared_Constantes_userRoles__WEBPACK_IMPORTED_MODULE_1__["UserRoles"].Admin], ["manutencao-preventiva-programada", _shared_Constantes_userRoles__WEBPACK_IMPORTED_MODULE_1__["UserRoles"].Admin], ["manutencao-prog-home-page", _shared_Constantes_userRoles__WEBPACK_IMPORTED_MODULE_1__["UserRoles"].Utilizador], ["manutencao-prog-home-page", _shared_Constantes_userRoles__WEBPACK_IMPORTED_MODULE_1__["UserRoles"].Admin], ["alerta-permissao", _shared_Constantes_userRoles__WEBPACK_IMPORTED_MODULE_1__["UserRoles"].Admin], ["alerta-permissao", _shared_Constantes_userRoles__WEBPACK_IMPORTED_MODULE_1__["UserRoles"].Utilizador], ["alerta-permissao", _shared_Constantes_userRoles__WEBPACK_IMPORTED_MODULE_1__["UserRoles"].Convidado]];
      }

      _createClass(AuthGuard, [{
        key: "canActivate",
        value: function canActivate(route, state) {
          var currentUserRole = this.authService.getCurrentUserRoleId();
          var hasAccess = false;
          console.log(route.url[0].path);
          this.dict.forEach(function (value) {
            if (value[0] === route.url[0].path) {
              //value[1] == currentUserRole
              if (value[1] == localStorage.getItem("roleId")) {
                hasAccess = true;
              }
            }
          });
          var isAuth = this.authService.getIsAuth();

          if (!isAuth) {
            this.router.navigate(["/my-login"]);
          }

          if (!hasAccess) {
            this.dialog.open(_components_alerta_permissao_alerta_permissao_component__WEBPACK_IMPORTED_MODULE_2__["AlertaPermissaoComponent"]);
          }

          return isAuth && hasAccess;
        }
      }]);

      return AuthGuard;
    }();

    AuthGuard.ɵfac = function AuthGuard_Factory(t) {
      return new (t || AuthGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialog"]));
    };

    AuthGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: AuthGuard,
      factory: AuthGuard.ɵfac
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthGuard, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
      }], function () {
        return [{
          type: _auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }, {
          type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialog"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/TokenAuth/auth.service.ts":
  /*!*******************************************!*\
    !*** ./src/app/TokenAuth/auth.service.ts ***!
    \*******************************************/

  /*! exports provided: AuthService */

  /***/
  function srcAppTokenAuthAuthServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthService", function () {
      return AuthService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _shared_Constantes_userRoles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../shared/Constantes/userRoles */
    "./src/app/shared/Constantes/userRoles.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var AuthService =
    /*#__PURE__*/
    function () {
      function AuthService(http, router) {
        _classCallCheck(this, AuthService);

        this.http = http;
        this.router = router;
        this.isAuthenticated = false;
        this.authStatusListener = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"](); //private TokenAPI = "http://localhost:44334/Token";

        this.TokenAPI = "http://192.168.0.49:8005/Token"; // Http Headers

        this.httpOptions = {
          headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
            "Content-Type": "application/json",
            Authorization: "Bearer " + localStorage.getItem("token")
          }),
          withCredentials: true
        };
      }

      _createClass(AuthService, [{
        key: "getUserName",
        value: function getUserName() {
          return this.username;
        }
      }, {
        key: "getAuthStatusListener",
        value: function getAuthStatusListener() {
          return this.authStatusListener.asObservable();
        } //Método de login

      }, {
        key: "login",
        value: function login(Username, Password) {
          var _this2 = this;

          var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
            "Content-Type": "application/x-www-form-urlencoded"
          });
          var options = {
            headers: headers
          };
          var data = "grant_type=password&username=" + Username + "&password=" + Password;
          return this.http.post(this.TokenAPI, data, options).subscribe(function (response) {
            console.log(response);
            var token = response.access_token;

            if (token) {
              var expiresInDuration = response.expires_in;

              _this2.setAuthTimer(expiresInDuration);

              _this2.authStatusListener.next(true);

              _this2.isAuthenticated = true;
              var now = new Date();
              var expirationDate = new Date(now.getTime() + expiresInDuration * 1000);
              console.log("expirationDate", expirationDate); // localStorage.setItem("token", response.access_token);

              _this2.saveAuthData(response.access_token, expirationDate, response.userName, response.roleId);

              _this2.router.navigate(["/"]);

              setTimeout(function () {
                _this2.refresh();
              }, 1000);
            }
          }, function (err) {
            _this2.authStatusListener.next(false);

            console.log(err.message);
          });
        }
      }, {
        key: "logout",
        value: function logout() {
          this.isAuthenticated = false;
          this.authStatusListener.next(false);
          clearTimeout(this.tokenTimer);
          this.clearAuthData();
          console.log("Passei no logout");
        }
      }, {
        key: "setAuthTimer",
        value: function setAuthTimer(duration) {
          console.log("Setting timer: " + duration);
          this.tokenTimer = setTimeout(function () {//this.logout();
          }, duration * 1000);
        }
      }, {
        key: "autoAuthUser",
        value: function autoAuthUser() {
          var authInformation = this.getAuthData();

          if (!authInformation) {
            return;
          }

          var now = new Date();
          var expiresIn = authInformation.expirationDate.getTime() - now.getTime();

          if (expiresIn > 0) {
            this.token = authInformation.token;
            this.isAuthenticated = true;
            this.username = authInformation.username;
            this.roleId = _shared_Constantes_userRoles__WEBPACK_IMPORTED_MODULE_3__["UserRoles"][authInformation.roleId];
            this.setAuthTimer(expiresIn / 1000);
            this.authStatusListener.next(true);
          }
        }
      }, {
        key: "getAuthData",
        value: function getAuthData() {
          var token = localStorage.getItem("token");
          var expirationDate = localStorage.getItem("expiration");
          var username = localStorage.getItem("username");
          var roleId = localStorage.getItem("roleId");

          if (!token || !expirationDate) {
            return;
          }

          return {
            token: token,
            expirationDate: new Date(expirationDate),
            username: username,
            roleId: roleId
          };
        }
      }, {
        key: "saveAuthData",
        value: function saveAuthData(token, expirationDate, userName, roleId) {
          localStorage.setItem("token", token);
          localStorage.setItem("expiration", expirationDate.toISOString());
          localStorage.setItem("username", userName);
          localStorage.setItem("roleId", roleId);
        }
      }, {
        key: "clearAuthData",
        value: function clearAuthData() {
          localStorage.removeItem("token");
          localStorage.removeItem("expiration");
          localStorage.removeItem("username");
          localStorage.removeItem("roleId");
        }
      }, {
        key: "getIsAuth",
        value: function getIsAuth() {
          return this.isAuthenticated;
        }
      }, {
        key: "getCurrentUserRoleId",
        value: function getCurrentUserRoleId() {
          return this.roleId;
        } //Refresh à janela.

      }, {
        key: "refresh",
        value: function refresh() {
          window.location.reload();
        } //erros de pedidos ao servidor.

      }, {
        key: "errorHandl",
        value: function errorHandl(error) {
          var errorMessage = "";

          if (error.error instanceof ErrorEvent) {
            // Get erro lado cliente
            errorMessage = error.error.message;
          } else {
            // Get erro lado servidor
            errorMessage = "Error Code: ".concat(error.status, "\nMessage: ").concat(error.message);
          }

          console.log(errorMessage);
          return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(errorMessage);
        }
      }]);

      return AuthService;
    }();

    AuthService.ɵfac = function AuthService_Factory(t) {
      return new (t || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]));
    };

    AuthService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: AuthService,
      factory: AuthService.ɵfac
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/app-routing.model.ts":
  /*!**************************************!*\
    !*** ./src/app/app-routing.model.ts ***!
    \**************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModelTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _app_TokenAuth_auth_guard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../app/TokenAuth/auth.guard */
    "./src/app/TokenAuth/auth.guard.ts");
    /* harmony import */


    var _components_equipamento_list_equip_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./components/equipamento-list/equip-list.component */
    "./src/app/components/equipamento-list/equip-list.component.ts");
    /* harmony import */


    var _components_grupomaquina_list_grupomaquina_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./components/grupomaquina-list/grupomaquina-list.component */
    "./src/app/components/grupomaquina-list/grupomaquina-list.component.ts");
    /* harmony import */


    var _components_equipamento_add_equip_add_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./components/equipamento-add/equip-add.component */
    "./src/app/components/equipamento-add/equip-add.component.ts");
    /* harmony import */


    var _components_equipamento_edit_equip_edit_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./components/equipamento-edit/equip-edit.component */
    "./src/app/components/equipamento-edit/equip-edit.component.ts");
    /* harmony import */


    var _components_register_add_register_add_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./components/register-add/register-add.component */
    "./src/app/components/register-add/register-add.component.ts");
    /* harmony import */


    var _Login_logout_logincomponent__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./Login-logout/logincomponent */
    "./src/app/Login-logout/logincomponent.ts");
    /* harmony import */


    var _components_asp_net_user_list_asp_net_user_list_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./components/asp-net-user-list/asp-net-user-list.component */
    "./src/app/components/asp-net-user-list/asp-net-user-list.component.ts");
    /* harmony import */


    var _components_asp_net_user_edit_asp_net_user_edit_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./components/asp-net-user-edit/asp-net-user-edit.component */
    "./src/app/components/asp-net-user-edit/asp-net-user-edit.component.ts");
    /* harmony import */


    var _components_pedido_mcurativa_list_pedido_mcurativa_list_teste_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./components/pedido-mcurativa-list/pedido-mcurativa-list-teste.component */
    "./src/app/components/pedido-mcurativa-list/pedido-mcurativa-list-teste.component.ts");
    /* harmony import */


    var _components_pedido_mcurativa_add_pedido_mcurativa_add_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./components/pedido-mcurativa-add/pedido-mcurativa-add.component */
    "./src/app/components/pedido-mcurativa-add/pedido-mcurativa-add.component.ts");
    /* harmony import */


    var _components_intervencao_curativa_add_intervencao_curativa_add_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./components/intervencao-curativa-add/intervencao-curativa-add.component */
    "./src/app/components/intervencao-curativa-add/intervencao-curativa-add.component.ts");
    /* harmony import */


    var _components_pedido_preventiva_list_pedido_preventiva_list_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./components/pedido-preventiva-list/pedido-preventiva-list.component */
    "./src/app/components/pedido-preventiva-list/pedido-preventiva-list.component.ts");
    /* harmony import */


    var _components_pedido_mpreventiva_add_pedido_mpreventiva_add_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./components/pedido-mpreventiva-add/pedido-mpreventiva-add.component */
    "./src/app/components/pedido-mpreventiva-add/pedido-mpreventiva-add.component.ts");
    /* harmony import */


    var _components_intervencao_preventiva_add_intervencao_preventiva_add_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./components/intervencao-preventiva-add/intervencao-preventiva-add.component */
    "./src/app/components/intervencao-preventiva-add/intervencao-preventiva-add.component.ts");
    /* harmony import */


    var _components_manutencao_preventiva_programada_manutencao_preventiva_programada_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./components/manutencao-preventiva-programada/manutencao-preventiva-programada.component */
    "./src/app/components/manutencao-preventiva-programada/manutencao-preventiva-programada.component.ts");
    /* harmony import */


    var _components_manutencao_prog_home_page_manutencao_prog_home_page_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ./components/manutencao-prog-home-page/manutencao-prog-home-page.component */
    "./src/app/components/manutencao-prog-home-page/manutencao-prog-home-page.component.ts");
    /* harmony import */


    var _components_list_permissao_list_permissao_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! ./components/list-permissao/list-permissao.component */
    "./src/app/components/list-permissao/list-permissao.component.ts");
    /* harmony import */


    var _components_edit_permissao_edit_permissao_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! ./components/edit-permissao/edit-permissao.component */
    "./src/app/components/edit-permissao/edit-permissao.component.ts");
    /* harmony import */


    var _components_alerta_permissao_alerta_permissao_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! ./components/alerta-permissao/alerta-permissao.component */
    "./src/app/components/alerta-permissao/alerta-permissao.component.ts");

    var routes = [{
      path: "edit-equip/:id",
      component: _components_equipamento_edit_equip_edit_component__WEBPACK_IMPORTED_MODULE_6__["EquipEditComponent"],
      canActivate: [_app_TokenAuth_auth_guard__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"]]
    }, {
      path: "equip-list",
      component: _components_equipamento_list_equip_list_component__WEBPACK_IMPORTED_MODULE_3__["EquipListComponent"],
      canActivate: [_app_TokenAuth_auth_guard__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"]]
    }, {
      path: "add-equip",
      component: _components_equipamento_add_equip_add_component__WEBPACK_IMPORTED_MODULE_5__["EquipAddComponent"],
      canActivate: [_app_TokenAuth_auth_guard__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"]]
    }, {
      path: "grupomaquina-list",
      component: _components_grupomaquina_list_grupomaquina_list_component__WEBPACK_IMPORTED_MODULE_4__["GrupoMaquinaListComponent"],
      canActivate: [_app_TokenAuth_auth_guard__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"]]
    }, {
      path: "add-register",
      component: _components_register_add_register_add_component__WEBPACK_IMPORTED_MODULE_7__["RegisterComponent"],
      canActivate: [_app_TokenAuth_auth_guard__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"]]
    }, {
      path: "my-login",
      component: _Login_logout_logincomponent__WEBPACK_IMPORTED_MODULE_8__["LoginComponent"]
    }, {
      path: "asp-net-user-list",
      component: _components_asp_net_user_list_asp_net_user_list_component__WEBPACK_IMPORTED_MODULE_9__["AspNetUserListComponent"],
      canActivate: [_app_TokenAuth_auth_guard__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"]]
    }, {
      path: "asp-net-user-edit/:id",
      component: _components_asp_net_user_edit_asp_net_user_edit_component__WEBPACK_IMPORTED_MODULE_10__["AspNetUserEditComponent"],
      canActivate: [_app_TokenAuth_auth_guard__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"]]
    }, {
      path: "pedido-mcurativa-list-teste",
      component: _components_pedido_mcurativa_list_pedido_mcurativa_list_teste_component__WEBPACK_IMPORTED_MODULE_11__["PedidoMcurativaListTesteComponent"],
      canActivate: [_app_TokenAuth_auth_guard__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"]]
    }, {
      path: "pedido-mcurativa-add",
      component: _components_pedido_mcurativa_add_pedido_mcurativa_add_component__WEBPACK_IMPORTED_MODULE_12__["PedidoMcurativaAddComponent"],
      canActivate: [_app_TokenAuth_auth_guard__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"]]
    }, {
      path: "intervencao-curativa-add",
      component: _components_intervencao_curativa_add_intervencao_curativa_add_component__WEBPACK_IMPORTED_MODULE_13__["IntervencaoCurativaAddComponent"],
      canActivate: [_app_TokenAuth_auth_guard__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"]]
    }, {
      path: "intervencao-preventiva-add",
      component: _components_intervencao_preventiva_add_intervencao_preventiva_add_component__WEBPACK_IMPORTED_MODULE_16__["IntervencaoPreventivaAddComponent"],
      canActivate: [_app_TokenAuth_auth_guard__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"]]
    }, {
      path: "pedido-mpreventiva-add",
      component: _components_pedido_mpreventiva_add_pedido_mpreventiva_add_component__WEBPACK_IMPORTED_MODULE_15__["PedidoMpreventivaAddComponent"],
      canActivate: [_app_TokenAuth_auth_guard__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"]]
    }, {
      path: "pedido-preventiva-list",
      component: _components_pedido_preventiva_list_pedido_preventiva_list_component__WEBPACK_IMPORTED_MODULE_14__["PedidoPreventivaListComponent"],
      canActivate: [_app_TokenAuth_auth_guard__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"]]
    }, {
      path: "manutencao-preventiva-programada",
      component: _components_manutencao_preventiva_programada_manutencao_preventiva_programada_component__WEBPACK_IMPORTED_MODULE_17__["ManutencaoPreventivaProgramadaComponent"],
      canActivate: [_app_TokenAuth_auth_guard__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"]]
    }, {
      path: "manutencao-prog-home-page",
      component: _components_manutencao_prog_home_page_manutencao_prog_home_page_component__WEBPACK_IMPORTED_MODULE_18__["ManutencaoProgHomePageComponent"],
      canActivate: [_app_TokenAuth_auth_guard__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"]]
    }, {
      path: "list-permissao",
      component: _components_list_permissao_list_permissao_component__WEBPACK_IMPORTED_MODULE_19__["ListPermissaoComponent"],
      canActivate: [_app_TokenAuth_auth_guard__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"]]
    }, {
      path: "edit-permissao/:id",
      component: _components_edit_permissao_edit_permissao_component__WEBPACK_IMPORTED_MODULE_20__["EditPermissaoComponent"],
      canActivate: [_app_TokenAuth_auth_guard__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"]]
    }, {
      path: "alerta-permissao",
      component: _components_alerta_permissao_alerta_permissao_component__WEBPACK_IMPORTED_MODULE_21__["AlertaPermissaoComponent"],
      canActivate: [_app_TokenAuth_auth_guard__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"]]
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AppRoutingModule
    });
    AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AppRoutingModule_Factory(t) {
        return new (t || AppRoutingModule)();
      },
      providers: [_app_TokenAuth_auth_guard__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"]],
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
          providers: [_app_TokenAuth_auth_guard__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"]]
        }]
      }], null, null);
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


    var _app_TokenAuth_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../app/TokenAuth/auth.service */
    "./src/app/TokenAuth/auth.service.ts");
    /* harmony import */


    var _components_header_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./components/header/header.component */
    "./src/app/components/header/header.component.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var AppComponent =
    /*#__PURE__*/
    function () {
      function AppComponent(authService) {
        _classCallCheck(this, AppComponent);

        this.authService = authService;
        this.title = 'GestaoManutencao';
      }

      _createClass(AppComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.authService.autoAuthUser(); // this.errorSub = this.errorService.getErrorListener().subscribe(
          //   message => this.hasError = message !== null
          // );
        }
      }]);

      return AppComponent;
    }();

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_TokenAuth_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]));
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 3,
      vars: 0,
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-header");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "main");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "router-outlet");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_components_header_header_component__WEBPACK_IMPORTED_MODULE_2__["HeaderComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterOutlet"]],
      styles: [".nav-menu-item[_ngcontent-%COMP%]{\r\n    margin: 0 1rem;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxjQUFjO0FBQ2xCIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubmF2LW1lbnUtaXRlbXtcclxuICAgIG1hcmdpbjogMCAxcmVtO1xyXG59Il19 */"]
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
          type: _app_TokenAuth_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]
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


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _app_routing_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app-routing.model */
    "./src/app/app-routing.model.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
    /* harmony import */


    var _angular_material_card__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/card */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/material/expansion */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/expansion.js");
    /* harmony import */


    var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/material/toolbar */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
    /* harmony import */


    var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @angular/material/progress-spinner */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-spinner.js");
    /* harmony import */


    var _angular_material_components_datetime_picker__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @angular-material-components/datetime-picker */
    "./node_modules/@angular-material-components/datetime-picker/__ivy_ngcc__/fesm2015/angular-material-components-datetime-picker.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
    /* harmony import */


    var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! @angular/material/paginator */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/paginator.js");
    /* harmony import */


    var _angular_material_menu__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! @angular/material/menu */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/menu.js");
    /* harmony import */


    var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! @angular/material/datepicker */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/datepicker.js");
    /* harmony import */


    var _angular_material_list__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! @angular/material/list */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/list.js");
    /* harmony import */


    var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! @angular/material/sidenav */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sidenav.js");
    /* harmony import */


    var _angular_material_select__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! @angular/material/select */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
    /* harmony import */


    var _components_equipamento_list_equip_list_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
    /*! ./components/equipamento-list/equip-list.component */
    "./src/app/components/equipamento-list/equip-list.component.ts");
    /* harmony import */


    var _components_equipamento_add_equip_add_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
    /*! ./components/equipamento-add/equip-add.component */
    "./src/app/components/equipamento-add/equip-add.component.ts");
    /* harmony import */


    var _components_grupomaquina_list_grupomaquina_list_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
    /*! ./components/grupomaquina-list/grupomaquina-list.component */
    "./src/app/components/grupomaquina-list/grupomaquina-list.component.ts");
    /* harmony import */


    var _components_equipamento_edit_equip_edit_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
    /*! ./components/equipamento-edit/equip-edit.component */
    "./src/app/components/equipamento-edit/equip-edit.component.ts");
    /* harmony import */


    var _components_register_add_register_add_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
    /*! ./components/register-add/register-add.component */
    "./src/app/components/register-add/register-add.component.ts");
    /* harmony import */


    var _TokenAuth_auth_service__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
    /*! ./TokenAuth/auth.service */
    "./src/app/TokenAuth/auth.service.ts");
    /* harmony import */


    var _Login_logout_logincomponent__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
    /*! ./Login-logout/logincomponent */
    "./src/app/Login-logout/logincomponent.ts");
    /* harmony import */


    var _components_asp_net_user_list_asp_net_user_list_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(
    /*! ./components/asp-net-user-list/asp-net-user-list.component */
    "./src/app/components/asp-net-user-list/asp-net-user-list.component.ts");
    /* harmony import */


    var _components_asp_net_user_edit_asp_net_user_edit_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(
    /*! ./components/asp-net-user-edit/asp-net-user-edit.component */
    "./src/app/components/asp-net-user-edit/asp-net-user-edit.component.ts");
    /* harmony import */


    var _components_pedido_mcurativa_list_pedido_mcurativa_list_teste_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(
    /*! ./components/pedido-mcurativa-list/pedido-mcurativa-list-teste.component */
    "./src/app/components/pedido-mcurativa-list/pedido-mcurativa-list-teste.component.ts");
    /* harmony import */


    var _components_pedido_mcurativa_add_pedido_mcurativa_add_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(
    /*! ./components/pedido-mcurativa-add/pedido-mcurativa-add.component */
    "./src/app/components/pedido-mcurativa-add/pedido-mcurativa-add.component.ts");
    /* harmony import */


    var _components_intervencao_curativa_add_intervencao_curativa_add_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(
    /*! ./components/intervencao-curativa-add/intervencao-curativa-add.component */
    "./src/app/components/intervencao-curativa-add/intervencao-curativa-add.component.ts");
    /* harmony import */


    var _components_pedido_preventiva_list_pedido_preventiva_list_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(
    /*! ./components/pedido-preventiva-list/pedido-preventiva-list.component */
    "./src/app/components/pedido-preventiva-list/pedido-preventiva-list.component.ts");
    /* harmony import */


    var _components_pedido_mpreventiva_add_pedido_mpreventiva_add_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(
    /*! ./components/pedido-mpreventiva-add/pedido-mpreventiva-add.component */
    "./src/app/components/pedido-mpreventiva-add/pedido-mpreventiva-add.component.ts");
    /* harmony import */


    var _components_header_header_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(
    /*! ./components/header/header.component */
    "./src/app/components/header/header.component.ts");
    /* harmony import */


    var _components_intervencao_preventiva_add_intervencao_preventiva_add_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(
    /*! ./components/intervencao-preventiva-add/intervencao-preventiva-add.component */
    "./src/app/components/intervencao-preventiva-add/intervencao-preventiva-add.component.ts");
    /* harmony import */


    var _components_manutencao_preventiva_programada_manutencao_preventiva_programada_component__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(
    /*! ./components/manutencao-preventiva-programada/manutencao-preventiva-programada.component */
    "./src/app/components/manutencao-preventiva-programada/manutencao-preventiva-programada.component.ts");
    /* harmony import */


    var _components_manutencao_prog_home_page_manutencao_prog_home_page_component__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(
    /*! ./components/manutencao-prog-home-page/manutencao-prog-home-page.component */
    "./src/app/components/manutencao-prog-home-page/manutencao-prog-home-page.component.ts");
    /* harmony import */


    var _components_intervencao_add_user_home_page_intervencao_add_user_home_page_component__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(
    /*! ./components/intervencao-add-user-home-page/intervencao-add-user-home-page.component */
    "./src/app/components/intervencao-add-user-home-page/intervencao-add-user-home-page.component.ts");
    /* harmony import */


    var _components_edit_permissao_edit_permissao_component__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(
    /*! ./components/edit-permissao/edit-permissao.component */
    "./src/app/components/edit-permissao/edit-permissao.component.ts");
    /* harmony import */


    var _components_list_permissao_list_permissao_component__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(
    /*! ./components/list-permissao/list-permissao.component */
    "./src/app/components/list-permissao/list-permissao.component.ts");
    /* harmony import */


    var _components_alerta_permissao_alerta_permissao_component__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(
    /*! ./components/alerta-permissao/alerta-permissao.component */
    "./src/app/components/alerta-permissao/alerta-permissao.component.ts");
    /* Http client module */

    /* Service */

    /* Forms module */

    /* Components */
    //import { AspNetUsersLoadComponent } from './asp-net-users-load/asp-net-users-load.component';
    //import { TipoUtilizadorListComponent } from './components/tipo-utilizador-list/tipo-utilizador-list.component';


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
      providers: [_TokenAuth_auth_service__WEBPACK_IMPORTED_MODULE_28__["AuthService"]]
      /*Aqui ficar AuthService ou RegisterService */
      ,
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_model__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCardModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_8__["MatInputModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_9__["MatButtonModule"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_10__["MatExpansionModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_11__["MatToolbarModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__["MatDialogModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_21__["MatSelectModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_22__["MatFormFieldModule"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_18__["MatDatepickerModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_13__["MatProgressSpinnerModule"], _angular_material_components_datetime_picker__WEBPACK_IMPORTED_MODULE_14__["NgxMatDatetimePickerModule"], _angular_material_components_datetime_picker__WEBPACK_IMPORTED_MODULE_14__["NgxMatTimepickerModule"], _angular_material_components_datetime_picker__WEBPACK_IMPORTED_MODULE_14__["NgxMatNativeDateModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__["MatIconModule"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_16__["MatPaginatorModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_11__["MatToolbarModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_19__["MatListModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_9__["MatButtonModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__["MatIconModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_17__["MatMenuModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_20__["MatSidenavModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _components_equipamento_list_equip_list_component__WEBPACK_IMPORTED_MODULE_23__["EquipListComponent"], _components_equipamento_add_equip_add_component__WEBPACK_IMPORTED_MODULE_24__["EquipAddComponent"], _components_grupomaquina_list_grupomaquina_list_component__WEBPACK_IMPORTED_MODULE_25__["GrupoMaquinaListComponent"], _components_equipamento_edit_equip_edit_component__WEBPACK_IMPORTED_MODULE_26__["EquipEditComponent"], _components_register_add_register_add_component__WEBPACK_IMPORTED_MODULE_27__["RegisterComponent"], _Login_logout_logincomponent__WEBPACK_IMPORTED_MODULE_29__["LoginComponent"], _components_asp_net_user_list_asp_net_user_list_component__WEBPACK_IMPORTED_MODULE_30__["AspNetUserListComponent"], _components_asp_net_user_edit_asp_net_user_edit_component__WEBPACK_IMPORTED_MODULE_31__["AspNetUserEditComponent"], _components_pedido_mcurativa_list_pedido_mcurativa_list_teste_component__WEBPACK_IMPORTED_MODULE_32__["PedidoMcurativaListTesteComponent"], _components_pedido_mcurativa_add_pedido_mcurativa_add_component__WEBPACK_IMPORTED_MODULE_33__["PedidoMcurativaAddComponent"], _components_intervencao_curativa_add_intervencao_curativa_add_component__WEBPACK_IMPORTED_MODULE_34__["IntervencaoCurativaAddComponent"], _components_header_header_component__WEBPACK_IMPORTED_MODULE_37__["HeaderComponent"], _components_pedido_preventiva_list_pedido_preventiva_list_component__WEBPACK_IMPORTED_MODULE_35__["PedidoPreventivaListComponent"], _components_pedido_mpreventiva_add_pedido_mpreventiva_add_component__WEBPACK_IMPORTED_MODULE_36__["PedidoMpreventivaAddComponent"], _components_intervencao_preventiva_add_intervencao_preventiva_add_component__WEBPACK_IMPORTED_MODULE_38__["IntervencaoPreventivaAddComponent"], _components_manutencao_preventiva_programada_manutencao_preventiva_programada_component__WEBPACK_IMPORTED_MODULE_39__["ManutencaoPreventivaProgramadaComponent"], _components_manutencao_prog_home_page_manutencao_prog_home_page_component__WEBPACK_IMPORTED_MODULE_40__["ManutencaoProgHomePageComponent"], _components_intervencao_add_user_home_page_intervencao_add_user_home_page_component__WEBPACK_IMPORTED_MODULE_41__["IntervencaoAddUserHomePageComponent"], _components_edit_permissao_edit_permissao_component__WEBPACK_IMPORTED_MODULE_42__["EditPermissaoComponent"], _components_list_permissao_list_permissao_component__WEBPACK_IMPORTED_MODULE_43__["ListPermissaoComponent"], _components_alerta_permissao_alerta_permissao_component__WEBPACK_IMPORTED_MODULE_44__["AlertaPermissaoComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_model__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCardModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_8__["MatInputModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_9__["MatButtonModule"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_10__["MatExpansionModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_11__["MatToolbarModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__["MatDialogModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_21__["MatSelectModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_22__["MatFormFieldModule"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_18__["MatDatepickerModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_13__["MatProgressSpinnerModule"], _angular_material_components_datetime_picker__WEBPACK_IMPORTED_MODULE_14__["NgxMatDatetimePickerModule"], _angular_material_components_datetime_picker__WEBPACK_IMPORTED_MODULE_14__["NgxMatTimepickerModule"], _angular_material_components_datetime_picker__WEBPACK_IMPORTED_MODULE_14__["NgxMatNativeDateModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__["MatIconModule"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_16__["MatPaginatorModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_11__["MatToolbarModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_19__["MatListModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_9__["MatButtonModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__["MatIconModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_17__["MatMenuModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_20__["MatSidenavModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _components_equipamento_list_equip_list_component__WEBPACK_IMPORTED_MODULE_23__["EquipListComponent"], _components_equipamento_add_equip_add_component__WEBPACK_IMPORTED_MODULE_24__["EquipAddComponent"], _components_grupomaquina_list_grupomaquina_list_component__WEBPACK_IMPORTED_MODULE_25__["GrupoMaquinaListComponent"], _components_equipamento_edit_equip_edit_component__WEBPACK_IMPORTED_MODULE_26__["EquipEditComponent"], _components_register_add_register_add_component__WEBPACK_IMPORTED_MODULE_27__["RegisterComponent"], _Login_logout_logincomponent__WEBPACK_IMPORTED_MODULE_29__["LoginComponent"], _components_asp_net_user_list_asp_net_user_list_component__WEBPACK_IMPORTED_MODULE_30__["AspNetUserListComponent"], _components_asp_net_user_edit_asp_net_user_edit_component__WEBPACK_IMPORTED_MODULE_31__["AspNetUserEditComponent"], _components_pedido_mcurativa_list_pedido_mcurativa_list_teste_component__WEBPACK_IMPORTED_MODULE_32__["PedidoMcurativaListTesteComponent"], _components_pedido_mcurativa_add_pedido_mcurativa_add_component__WEBPACK_IMPORTED_MODULE_33__["PedidoMcurativaAddComponent"], _components_intervencao_curativa_add_intervencao_curativa_add_component__WEBPACK_IMPORTED_MODULE_34__["IntervencaoCurativaAddComponent"], _components_header_header_component__WEBPACK_IMPORTED_MODULE_37__["HeaderComponent"], _components_pedido_preventiva_list_pedido_preventiva_list_component__WEBPACK_IMPORTED_MODULE_35__["PedidoPreventivaListComponent"], _components_pedido_mpreventiva_add_pedido_mpreventiva_add_component__WEBPACK_IMPORTED_MODULE_36__["PedidoMpreventivaAddComponent"], _components_intervencao_preventiva_add_intervencao_preventiva_add_component__WEBPACK_IMPORTED_MODULE_38__["IntervencaoPreventivaAddComponent"], _components_manutencao_preventiva_programada_manutencao_preventiva_programada_component__WEBPACK_IMPORTED_MODULE_39__["ManutencaoPreventivaProgramadaComponent"], _components_manutencao_prog_home_page_manutencao_prog_home_page_component__WEBPACK_IMPORTED_MODULE_40__["ManutencaoProgHomePageComponent"], _components_intervencao_add_user_home_page_intervencao_add_user_home_page_component__WEBPACK_IMPORTED_MODULE_41__["IntervencaoAddUserHomePageComponent"], _components_edit_permissao_edit_permissao_component__WEBPACK_IMPORTED_MODULE_42__["EditPermissaoComponent"], _components_list_permissao_list_permissao_component__WEBPACK_IMPORTED_MODULE_43__["ListPermissaoComponent"], _components_alerta_permissao_alerta_permissao_component__WEBPACK_IMPORTED_MODULE_44__["AlertaPermissaoComponent"]],
          entryComponents: [_components_intervencao_curativa_add_intervencao_curativa_add_component__WEBPACK_IMPORTED_MODULE_34__["IntervencaoCurativaAddComponent"], _components_intervencao_preventiva_add_intervencao_preventiva_add_component__WEBPACK_IMPORTED_MODULE_38__["IntervencaoPreventivaAddComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_model__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCardModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_8__["MatInputModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_9__["MatButtonModule"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_10__["MatExpansionModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_11__["MatToolbarModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__["MatDialogModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_21__["MatSelectModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_22__["MatFormFieldModule"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_18__["MatDatepickerModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_13__["MatProgressSpinnerModule"], _angular_material_components_datetime_picker__WEBPACK_IMPORTED_MODULE_14__["NgxMatDatetimePickerModule"], _angular_material_components_datetime_picker__WEBPACK_IMPORTED_MODULE_14__["NgxMatTimepickerModule"], _angular_material_components_datetime_picker__WEBPACK_IMPORTED_MODULE_14__["NgxMatNativeDateModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__["MatIconModule"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_16__["MatPaginatorModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_11__["MatToolbarModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_19__["MatListModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_9__["MatButtonModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__["MatIconModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_17__["MatMenuModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_20__["MatSidenavModule"]],
          providers: [_TokenAuth_auth_service__WEBPACK_IMPORTED_MODULE_28__["AuthService"]]
          /*Aqui ficar AuthService ou RegisterService */
          ,
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/alerta-permissao/alerta-permissao.component.ts":
  /*!***************************************************************************!*\
    !*** ./src/app/components/alerta-permissao/alerta-permissao.component.ts ***!
    \***************************************************************************/

  /*! exports provided: AlertaPermissaoComponent */

  /***/
  function srcAppComponentsAlertaPermissaoAlertaPermissaoComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AlertaPermissaoComponent", function () {
      return AlertaPermissaoComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");

    var AlertaPermissaoComponent =
    /*#__PURE__*/
    function () {
      function AlertaPermissaoComponent(data, fb) {
        _classCallCheck(this, AlertaPermissaoComponent);

        this.data = data;
        this.fb = fb;
      }

      _createClass(AlertaPermissaoComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return AlertaPermissaoComponent;
    }();

    AlertaPermissaoComponent.ɵfac = function AlertaPermissaoComponent_Factory(t) {
      return new (t || AlertaPermissaoComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]));
    };

    AlertaPermissaoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AlertaPermissaoComponent,
      selectors: [["app-alerta-permissao"]],
      decls: 7,
      vars: 1,
      consts: [[2, "text-align", "center"], ["mat-button", "", 1, "close-icon", 3, "mat-dialog-close"]],
      template: function AlertaPermissaoComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Sem permiss\xE3o para aceder a esta p\xE1gina");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Caso o problema persista, contacte o administrador");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "\nFechar\n");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("mat-dialog-close", true);
        }
      },
      directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButton"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogClose"]],
      styles: ["button[_ngcontent-%COMP%] {\r\n    margin:auto;\r\n    display:block;\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9hbGVydGEtcGVybWlzc2FvL2FsZXJ0YS1wZXJtaXNzYW8uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFdBQVc7SUFDWCxhQUFhO0VBQ2YiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2FsZXJ0YS1wZXJtaXNzYW8vYWxlcnRhLXBlcm1pc3Nhby5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYnV0dG9uIHtcclxuICAgIG1hcmdpbjphdXRvO1xyXG4gICAgZGlzcGxheTpibG9jaztcclxuICB9Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AlertaPermissaoComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-alerta-permissao',
          templateUrl: './alerta-permissao.component.html',
          styleUrls: ['./alerta-permissao.component.css']
        }]
      }], function () {
        return [{
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]]
          }]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/asp-net-user-edit/asp-net-user-edit.component.ts":
  /*!*****************************************************************************!*\
    !*** ./src/app/components/asp-net-user-edit/asp-net-user-edit.component.ts ***!
    \*****************************************************************************/

  /*! exports provided: AspNetUserEditComponent */

  /***/
  function srcAppComponentsAspNetUserEditAspNetUserEditComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AspNetUserEditComponent", function () {
      return AspNetUserEditComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _shared_tipoUtilizador_tipoUtilizador_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../shared/tipoUtilizador/tipoUtilizador.service */
    "./src/app/shared/tipoUtilizador/tipoUtilizador.service.ts");
    /* harmony import */


    var _shared_AspNetUsers_aspNetUsers_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../shared/AspNetUsers/aspNetUsers.service */
    "./src/app/shared/AspNetUsers/aspNetUsers.service.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function AspNetUserEditComponent_option_18_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var item_r28 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", item_r28.IDTipo);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r28.TipoDescr);
      }
    }

    var AspNetUserEditComponent =
    /*#__PURE__*/
    function () {
      function AspNetUserEditComponent(actRoute, tiposUtilizadorService, aspNetUsersService, fb, ngZone, router) {
        var _this3 = this;

        _classCallCheck(this, AspNetUserEditComponent);

        this.actRoute = actRoute;
        this.tiposUtilizadorService = tiposUtilizadorService;
        this.aspNetUsersService = aspNetUsersService;
        this.fb = fb;
        this.ngZone = ngZone;
        this.router = router;
        this.tipoUtilizadorList = [];
        var id = this.actRoute.snapshot.paramMap.get('id');
        this.aspNetUsersService.GetOneUser(id).subscribe(function (data) {
          _this3.updateUtilizadorForm = _this3.fb.group({
            UserName: [data.UserName],
            Nome: [data.Nome],
            NumeroUtilizador: [data.NumeroUtilizador],
            IDTipo: [data.IDTipo]
          });
          console.log(data);
        });
      }

      _createClass(AspNetUserEditComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.updateForm();
          this.loadTiposUtilizador();
        }
      }, {
        key: "updateForm",
        value: function updateForm() {
          this.updateUtilizadorForm = this.fb.group({
            UserName: [''],
            Nome: [''],
            NumeroUtilizador: [0],
            IDTipo: [0]
          });
        }
      }, {
        key: "loadTiposUtilizador",
        value: function loadTiposUtilizador() {
          var _this4 = this;

          return this.tiposUtilizadorService.GetTiposUtilizador().subscribe(function (data) {
            _this4.tipoUtilizadorList = data;
          });
        }
      }, {
        key: "submitForm",
        value: function submitForm() {
          var _this5 = this;

          var id = this.actRoute.snapshot.paramMap.get('id');
          this.aspNetUsersService.UpdateAspNetUser(id, this.updateUtilizadorForm.value).subscribe(function (res) {
            _this5.ngZone.run(function () {
              return _this5.router.navigateByUrl('/asp-net-user-list');
            });
          });
        }
      }]);

      return AspNetUserEditComponent;
    }();

    AspNetUserEditComponent.ɵfac = function AspNetUserEditComponent_Factory(t) {
      return new (t || AspNetUserEditComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_tipoUtilizador_tipoUtilizador_service__WEBPACK_IMPORTED_MODULE_2__["TipoUtilizadorService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_AspNetUsers_aspNetUsers_service__WEBPACK_IMPORTED_MODULE_3__["AspNetUsersService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]));
    };

    AspNetUserEditComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AspNetUserEditComponent,
      selectors: [["app-asp-net-user-edit"]],
      decls: 25,
      vars: 2,
      consts: [[1, "container", "wrapper", "wrapper2"], [1, "row"], [1, "col-md-12"], ["novalidate", "", 3, "formGroup", "ngSubmit"], [1, "form-group"], ["type", "text", "formControlName", "UserName", "disabled", "", 1, "form-control"], ["type", "text", "formControlName", "Nome", 1, "form-control"], ["formControlName", "IDTipo", 1, "form-group"], [3, "value", 4, "ngFor", "ngForOf"], ["type", "text", "formControlName", "NumeroUtilizador", 1, "form-control"], ["type", "submit", 1, "btn", "btn-primary"], [3, "value"]],
      template: function AspNetUserEditComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Alterar ficha de utilizador");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "form", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function AspNetUserEditComponent_Template_form_ngSubmit_5_listener() {
            return ctx.submitForm();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Email");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "input", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Nome");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "input", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Tipo de utilizador");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "select", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, AspNetUserEditComponent_option_18_Template, 2, 2, "option", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "N\xBA Utilizador");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "input", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "button", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Update");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.updateUtilizadorForm);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.tipoUtilizadorList);
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["SelectControlValueAccessor"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_x"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYXNwLW5ldC11c2VyLWVkaXQvYXNwLW5ldC11c2VyLWVkaXQuY29tcG9uZW50LmNzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AspNetUserEditComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-asp-net-user-edit',
          templateUrl: './asp-net-user-edit.component.html',
          styleUrls: ['./asp-net-user-edit.component.css']
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]
        }, {
          type: _shared_tipoUtilizador_tipoUtilizador_service__WEBPACK_IMPORTED_MODULE_2__["TipoUtilizadorService"]
        }, {
          type: _shared_AspNetUsers_aspNetUsers_service__WEBPACK_IMPORTED_MODULE_3__["AspNetUsersService"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/asp-net-user-list/asp-net-user-list.component.ts":
  /*!*****************************************************************************!*\
    !*** ./src/app/components/asp-net-user-list/asp-net-user-list.component.ts ***!
    \*****************************************************************************/

  /*! exports provided: AspNetUserListComponent */

  /***/
  function srcAppComponentsAspNetUserListAspNetUserListComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AspNetUserListComponent", function () {
      return AspNetUserListComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _shared_aspNetUsers_aspNetUsers_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../shared/aspNetUsers/aspNetUsers.service */
    "./src/app/shared/aspNetUsers/aspNetUsers.service.ts");
    /* harmony import */


    var _shared_tipoUtilizador_tipoUtilizador_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../shared/tipoUtilizador/tipoUtilizador.service */
    "./src/app/shared/tipoUtilizador/tipoUtilizador.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function AspNetUserListComponent_tr_29_ng_container_9_td_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var tu_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", tu_r23.TipoDescr, " ");
      }
    }

    function AspNetUserListComponent_tr_29_ng_container_9_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AspNetUserListComponent_tr_29_ng_container_9_td_1_Template, 2, 1, "td", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var tu_r23 = ctx.$implicit;

        var utilizador_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", tu_r23.IDTipo == utilizador_r20.IDTipo);
      }
    }

    var _c0 = function _c0(a1) {
      return ["/asp-net-user-edit/", a1];
    };

    function AspNetUserListComponent_tr_29_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "th", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, AspNetUserListComponent_tr_29_ng_container_9_Template, 2, 1, "ng-container", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "td", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " Editar ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var utilizador_r20 = ctx.$implicit;
        var i_r21 = ctx.index;

        var ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](i_r21 + 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](utilizador_r20.Nome);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](utilizador_r20.UserName);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](utilizador_r20.NumeroUtilizador);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r19.tipoUtilizadorList);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](6, _c0, utilizador_r20.UserName));
      }
    }

    var _c1 = function _c1() {
      return ["/list-permissao"];
    };

    var _c2 = function _c2() {
      return ["/add-register"];
    };

    var AspNetUserListComponent =
    /*#__PURE__*/
    function () {
      function AspNetUserListComponent(aspNetUserService, tipoUtilizadorService, actRoute) {
        _classCallCheck(this, AspNetUserListComponent);

        this.aspNetUserService = aspNetUserService;
        this.tipoUtilizadorService = tipoUtilizadorService;
        this.actRoute = actRoute;
        this.aspNetUsersList = [];
        this.tipoUtilizadorList = [];
      }

      _createClass(AspNetUserListComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.loadAspNetUsers();
          this.loadTiposUtilizador();
        } //load utilizadores da DB 

      }, {
        key: "loadAspNetUsers",
        value: function loadAspNetUsers() {
          var _this6 = this;

          return this.aspNetUserService.GetAspNetUsers().subscribe(function (data) {
            _this6.aspNetUsersList = data;
          });
        } //load tipos de utilizador da DB

      }, {
        key: "loadTiposUtilizador",
        value: function loadTiposUtilizador() {
          var _this7 = this;

          return this.tipoUtilizadorService.GetTiposUtilizador().subscribe(function (data) {
            _this7.tipoUtilizadorList = data;
          });
        }
      }]);

      return AspNetUserListComponent;
    }();

    AspNetUserListComponent.ɵfac = function AspNetUserListComponent_Factory(t) {
      return new (t || AspNetUserListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_aspNetUsers_aspNetUsers_service__WEBPACK_IMPORTED_MODULE_1__["AspNetUsersService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_tipoUtilizador_tipoUtilizador_service__WEBPACK_IMPORTED_MODULE_2__["TipoUtilizadorService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]));
    };

    AspNetUserListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AspNetUserListComponent,
      selectors: [["app-asp-net-user-list"]],
      decls: 30,
      vars: 5,
      consts: [[1, "container", "wrapper"], [1, "row"], [1, "col-md-12"], [1, "inner"], ["type", "button", 1, "btn", "btn-success", "btn-sm", "move-right", 2, "float", "left", 3, "routerLink"], ["type", "button", 1, "btn", "btn-success", "btn-sm", "move-right", 2, "float", "right", 3, "routerLink"], [1, "table", "table-bordered", 2, "text-align", "center"], ["scope", "col"], ["scope", "col", "width", "165"], [4, "ngFor", "ngForOf"], ["scope", "row"], ["width", "165"], ["width", "30"], ["type", "button", 1, "btn", "btn-success", "btn-sm", "move-right", 3, "routerLink"], [4, "ngIf"]],
      template: function AspNetUserListComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Resumo dos utilizadores");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Gerir permiss\xF5es");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " Novo registo ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "table", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "thead");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "th", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "#");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "th", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Nome");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "th", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Email");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "th", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "N\xBA de funcion\xE1rio");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "th", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Cargo");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "tbody");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](29, AspNetUserListComponent_tr_29_Template, 13, 8, "tr", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](3, _c1));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](4, _c2));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.aspNetUsersList);
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLink"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"]],
      styles: [".alinharButton[_ngcontent-%COMP%]{\r\n    display: block;\r\nmargin: auto;\r\n\r\n}\r\n\r\n.column[_ngcontent-%COMP%] {\r\n    float: left;\r\n    width: 15%;\r\n    padding: 1px;\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9hc3AtbmV0LXVzZXItbGlzdC9hc3AtbmV0LXVzZXItbGlzdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksY0FBYztBQUNsQixZQUFZOztBQUVaOztBQUVBO0lBQ0ksV0FBVztJQUNYLFVBQVU7SUFDVixZQUFZO0VBQ2QiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2FzcC1uZXQtdXNlci1saXN0L2FzcC1uZXQtdXNlci1saXN0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYWxpbmhhckJ1dHRvbntcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG5tYXJnaW46IGF1dG87XHJcblxyXG59XHJcblxyXG4uY29sdW1uIHtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgd2lkdGg6IDE1JTtcclxuICAgIHBhZGRpbmc6IDFweDtcclxuICB9XHJcblxyXG5cclxuXHJcbiAgXHJcbiJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AspNetUserListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-asp-net-user-list',
          templateUrl: './asp-net-user-list.component.html',
          styleUrls: ['./asp-net-user-list.component.css']
        }]
      }], function () {
        return [{
          type: _shared_aspNetUsers_aspNetUsers_service__WEBPACK_IMPORTED_MODULE_1__["AspNetUsersService"]
        }, {
          type: _shared_tipoUtilizador_tipoUtilizador_service__WEBPACK_IMPORTED_MODULE_2__["TipoUtilizadorService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/edit-permissao/edit-permissao.component.ts":
  /*!***********************************************************************!*\
    !*** ./src/app/components/edit-permissao/edit-permissao.component.ts ***!
    \***********************************************************************/

  /*! exports provided: EditPermissaoComponent */

  /***/
  function srcAppComponentsEditPermissaoEditPermissaoComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EditPermissaoComponent", function () {
      return EditPermissaoComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _shared_aspNetRoles_aspNetRoles_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../shared/aspNetRoles/aspNetRoles.service */
    "./src/app/shared/aspNetRoles/aspNetRoles.service.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function EditPermissaoComponent_option_19_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var item_r110 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", item_r110.Name);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r110.Name);
      }
    }

    var EditPermissaoComponent =
    /*#__PURE__*/
    function () {
      function EditPermissaoComponent(actRoute, aspNetRolesService, fb, ngZone, router) {
        var _this8 = this;

        _classCallCheck(this, EditPermissaoComponent);

        this.actRoute = actRoute;
        this.aspNetRolesService = aspNetRolesService;
        this.fb = fb;
        this.ngZone = ngZone;
        this.router = router;
        this.arrayPermissao = [{
          Name: "Admin"
        }, {
          Name: "Utilizador"
        }, {
          Name: "Convidado"
        }];
        this.roleName = "";
        this.userName = "";
        this.oldRoleName = "";
        console.log("edit component antes de chamar o getOneUser");
        var id = this.actRoute.snapshot.paramMap.get('id');
        this.aspNetRolesService.GetOneUser(id).subscribe(function (data) {
          _this8.updatePermissaoForm = _this8.fb.group({
            Email: [data.Email],
            Name: [data.Name],
            Nome: [data.Nome]
          });
          _this8.userName = data.Email;
          _this8.oldRoleName = data.Name;
          _this8.roleName = data.Name;
          console.log(data);
        });
      }

      _createClass(EditPermissaoComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.updateForm();
        }
      }, {
        key: "updateForm",
        value: function updateForm() {
          this.updatePermissaoForm = this.fb.group({
            Email: [''],
            Name: [''],
            Nome: ['']
          });
        }
      }, {
        key: "submitForm",
        value: function submitForm() {
          var _this9 = this;

          /* var id = this.actRoute.snapshot.paramMap.get('Email');
            var rolename = this.actRoute.snapshot.paramMap.get('Name');
            console.log(id, "id ---, ", rolename, " role" ); */
          console.log("UsernameNGMODEL: ", this.userName);
          console.log("RoleNameNGMODEL: ", this.roleName);
          this.aspNetRolesService.UpdateAspNetRole(this.userName, this.roleName, this.oldRoleName, this.updatePermissaoForm.value).subscribe(function (res) {
            _this9.ngZone.run(function () {
              return _this9.router.navigateByUrl('/list-permissao');
            });
          });
        }
      }]);

      return EditPermissaoComponent;
    }();

    EditPermissaoComponent.ɵfac = function EditPermissaoComponent_Factory(t) {
      return new (t || EditPermissaoComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_aspNetRoles_aspNetRoles_service__WEBPACK_IMPORTED_MODULE_2__["AspNetRolesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]));
    };

    EditPermissaoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: EditPermissaoComponent,
      selectors: [["app-edit-permissao"]],
      decls: 24,
      vars: 4,
      consts: [[1, "container", "wrapper", "wrapper2"], [1, "row"], [1, "col-md-12"], ["novalidate", "", 3, "formGroup", "ngSubmit"], [1, "form-group"], ["type", "text", "formControlName", "Nome", "disabled", "", 1, "form-control"], ["type", "text", "formControlName", "Email", "disabled", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["formControlName", "Name", 1, "form-group", 3, "ngModel", "ngModelChange"], [3, "value", 4, "ngFor", "ngForOf"], ["type", "submit", 1, "btn", "btn-primary"], [3, "value"]],
      template: function EditPermissaoComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Alterar permiss\xE3o do utilizador");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "form", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function EditPermissaoComponent_Template_form_ngSubmit_6_listener() {
            return ctx.submitForm();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Nome");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "input", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Email");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "input", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function EditPermissaoComponent_Template_input_ngModelChange_14_listener($event) {
            return ctx.userName = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Tipo de utilizador");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "select", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function EditPermissaoComponent_Template_select_ngModelChange_18_listener($event) {
            return ctx.roleName = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, EditPermissaoComponent_option_19_Template, 2, 2, "option", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "button", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Update");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.updatePermissaoForm);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.userName);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.roleName);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.arrayPermissao);
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["SelectControlValueAccessor"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_x"]],
      styles: [".form-control[_ngcontent-%COMP%]{\r\n    width: 320px;\r\n    \r\n\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9lZGl0LXBlcm1pc3Nhby9lZGl0LXBlcm1pc3Nhby5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksWUFBWTs7O0FBR2hCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9lZGl0LXBlcm1pc3Nhby9lZGl0LXBlcm1pc3Nhby5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZvcm0tY29udHJvbHtcclxuICAgIHdpZHRoOiAzMjBweDtcclxuICAgIFxyXG5cclxufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EditPermissaoComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-edit-permissao',
          templateUrl: './edit-permissao.component.html',
          styleUrls: ['./edit-permissao.component.css']
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]
        }, {
          type: _shared_aspNetRoles_aspNetRoles_service__WEBPACK_IMPORTED_MODULE_2__["AspNetRolesService"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/equipamento-add/equip-add.component.ts":
  /*!*******************************************************************!*\
    !*** ./src/app/components/equipamento-add/equip-add.component.ts ***!
    \*******************************************************************/

  /*! exports provided: EquipAddComponent */

  /***/
  function srcAppComponentsEquipamentoAddEquipAddComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EquipAddComponent", function () {
      return EquipAddComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _shared_equipamento_equipamento_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../shared/equipamento/equipamento.service */
    "./src/app/shared/equipamento/equipamento.service.ts");
    /* harmony import */


    var _shared_gruposmaquina_grupomaquina_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../shared/gruposmaquina/grupomaquina.service */
    "./src/app/shared/gruposmaquina/grupomaquina.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function EquipAddComponent_option_15_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var item_r13 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", item_r13.IDGrupoMaquinas);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r13.Descr);
      }
    }

    var EquipAddComponent =
    /*#__PURE__*/
    function () {
      function EquipAddComponent(fb, ngZone, router, equipamentoService, grupoMaquinaService, actRoute) {
        _classCallCheck(this, EquipAddComponent);

        this.fb = fb;
        this.ngZone = ngZone;
        this.router = router;
        this.equipamentoService = equipamentoService;
        this.grupoMaquinaService = grupoMaquinaService;
        this.actRoute = actRoute;
        this.EquipArr = [];
        this.gruposMaquinaList = [];
      }

      _createClass(EquipAddComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.addEquipamento(), this.loadGrupoMaquinas();
        }
      }, {
        key: "addEquipamento",
        value: function addEquipamento() {
          this.equipForm = this.fb.group({
            IDGrupoM: [0],
            NumeroSerie: [''],
            Descr: [''],
            Marca: [''],
            Tipo: [''],
            DataCompra: [''],
            CodigoInterno: [''],
            EstadoEqui: [0],
            DataFimAtividade: ['']
          });
        }
      }, {
        key: "loadGrupoMaquinas",
        value: function loadGrupoMaquinas() {
          var _this10 = this;

          return this.grupoMaquinaService.GetGruposMaquina().subscribe(function (data) {
            _this10.gruposMaquinaList = data;
          });
        }
      }, {
        key: "submitForm",
        value: function submitForm() {
          var _this11 = this;

          this.equipamentoService.CreateEquip(this.equipForm.value).subscribe(function (res) {
            console.log('Equipamento adicionado!');

            _this11.ngZone.run(function () {
              return _this11.router.navigateByUrl('/equip-list');
            });
          });
        }
      }]);

      return EquipAddComponent;
    }();

    EquipAddComponent.ɵfac = function EquipAddComponent_Factory(t) {
      return new (t || EquipAddComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_equipamento_equipamento_service__WEBPACK_IMPORTED_MODULE_3__["EquipamentoService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_gruposmaquina_grupomaquina_service__WEBPACK_IMPORTED_MODULE_4__["GrupoMaquinaService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]));
    };

    EquipAddComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: EquipAddComponent,
      selectors: [["app-add-equip"]],
      decls: 48,
      vars: 2,
      consts: [[1, "container", "wrapper", "wrapper2"], [1, "row"], [1, "col-md-12"], [1, "td"], ["novalidate", "", 3, "formGroup", "ngSubmit"], ["formControlName", "IDGrupoM", 1, "form-group"], ["value", "0"], ["style", "width:500px", 3, "value", 4, "ngFor", "ngForOf"], [1, "form-group"], ["type", "text", "formControlName", "NumeroSerie", 1, "form-control", 2, "width", "500px"], ["type", "text", "formControlName", "Descr", 1, "form-control", 2, "width", "500px"], ["type", "text", "formControlName", "Marca", 1, "form-control", 2, "width", "500px"], ["type", "text", "formControlName", "Tipo", 1, "form-control", 2, "width", "500px"], ["type", "Date", "formControlName", "DataCompra", 1, "form-control", 2, "width", "500px"], ["type", "text", "formControlName", "CodigoInterno", 1, "form-control", 2, "width", "500px"], ["type", "text", "formControlName", "EstadoEqui", 1, "form-control", 2, "width", "50px"], ["type", "submit", 1, "btn", "btn-primary"], [2, "width", "500px", 3, "value"]],
      template: function EquipAddComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Adicionar equipamento");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Grupo de M\xE1quina");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "form", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function EquipAddComponent_Template_form_ngSubmit_9_listener() {
            return ctx.submitForm();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "select", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Grupo de m\xE1quina");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "option", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Selecione");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, EquipAddComponent_option_15_Template, 2, 2, "option", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "N\xFAmero s\xE9rie");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "input", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Descri\xE7\xE3o");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "input", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Marca");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "input", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Tipo");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "input", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Data de compra");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "input", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Codigo interno");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "input", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Estado do equipamento");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "input", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "button", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Submit");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.equipForm);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.gruposMaquinaList);
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_x"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZXF1aXBhbWVudG8tYWRkL2VxdWlwLWFkZC5jb21wb25lbnQuY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EquipAddComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-add-equip',
          templateUrl: './equip-add.component.html',
          styleUrls: ['./equip-add.component.css']
        }]
      }], function () {
        return [{
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }, {
          type: _shared_equipamento_equipamento_service__WEBPACK_IMPORTED_MODULE_3__["EquipamentoService"]
        }, {
          type: _shared_gruposmaquina_grupomaquina_service__WEBPACK_IMPORTED_MODULE_4__["GrupoMaquinaService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/equipamento-edit/equip-edit.component.ts":
  /*!*********************************************************************!*\
    !*** ./src/app/components/equipamento-edit/equip-edit.component.ts ***!
    \*********************************************************************/

  /*! exports provided: EquipEditComponent */

  /***/
  function srcAppComponentsEquipamentoEditEquipEditComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EquipEditComponent", function () {
      return EquipEditComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _shared_equipamento_equipamento_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../shared/equipamento/equipamento.service */
    "./src/app/shared/equipamento/equipamento.service.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _shared_gruposmaquina_grupomaquina_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../shared/gruposmaquina/grupomaquina.service */
    "./src/app/shared/gruposmaquina/grupomaquina.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function EquipEditComponent_option_13_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var item_r15 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", item_r15.IDGrupoMaquinas);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r15.Descr);
      }
    }

    var EquipEditComponent =
    /*#__PURE__*/
    function () {
      function EquipEditComponent(actRoute, equipService, fb, ngZone, router, grupoMaquinaService) {
        var _this12 = this;

        _classCallCheck(this, EquipEditComponent);

        this.actRoute = actRoute;
        this.equipService = equipService;
        this.fb = fb;
        this.ngZone = ngZone;
        this.router = router;
        this.grupoMaquinaService = grupoMaquinaService;
        this.gruposMaquinaList = [];
        var id = this.actRoute.snapshot.paramMap.get('id');
        this.equipService.GetOneEquip(id).subscribe(function (data) {
          _this12.updateEquipForm = _this12.fb.group({
            IDEquipamento: [data.IDEquipamento],
            IDGrupoM: [data.IDGrupoM],
            NumeroSerie: [data.NumeroSerie],
            Descr: [data.Descr],
            Marca: [data.Marca],
            Tipo: [data.Tipo],
            DataCompra: [data.DataCompra],
            CodigoInterno: [data.CodigoInterno],
            EstadoEqui: [data.EstadoEqui],
            DataFimAtividade: [data.DataFimAtividade]
          });
        });
      }

      _createClass(EquipEditComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.updateForm();
          this.loadGrupoMaquinas();
        }
      }, {
        key: "updateForm",
        value: function updateForm() {
          this.updateEquipForm = this.fb.group({
            IDEquipamento: [0],
            IDGrupoM: [0],
            NumeroSerie: [''],
            Descr: [''],
            Marca: [''],
            Tipo: [''],
            DataCompra: [Date],
            CodigoInterno: [''],
            EstadoEqui: [0],
            DataFimAtividade: [Date]
          });
        }
      }, {
        key: "loadGrupoMaquinas",
        value: function loadGrupoMaquinas() {
          var _this13 = this;

          return this.grupoMaquinaService.GetGruposMaquina().subscribe(function (data) {
            _this13.gruposMaquinaList = data;
          });
        }
      }, {
        key: "submitForm",
        value: function submitForm() {
          var _this14 = this;

          var id = this.actRoute.snapshot.paramMap.get('id');
          this.equipService.UpdateEquipamento(id, this.updateEquipForm.value).subscribe(function (res) {
            _this14.ngZone.run(function () {
              return _this14.router.navigateByUrl('/equip-list');
            });
          });
        }
      }]);

      return EquipEditComponent;
    }();

    EquipEditComponent.ɵfac = function EquipEditComponent_Factory(t) {
      return new (t || EquipEditComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_equipamento_equipamento_service__WEBPACK_IMPORTED_MODULE_2__["EquipamentoService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_gruposmaquina_grupomaquina_service__WEBPACK_IMPORTED_MODULE_4__["GrupoMaquinaService"]));
    };

    EquipEditComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: EquipEditComponent,
      selectors: [["app-edit-equip"]],
      decls: 48,
      vars: 2,
      consts: [[1, "container", "wrapper", "wrapper2"], [1, "row"], [1, "col-md-12"], ["novalidate", "", 3, "formGroup", "ngSubmit"], [1, "form-group"], ["type", "hidden", "formControlName", "IDEquipamento", 1, "form-control"], ["formControlName", "IDGrupoM", 1, "form-group"], [3, "value", 4, "ngFor", "ngForOf"], ["type", "text", "formControlName", "NumeroSerie", 1, "form-control"], ["type", "text", "formControlName", "Descr", 1, "form-control"], ["type", "text", "formControlName", "Marca", 1, "form-control"], ["type", "text", "formControlName", "Tipo", 1, "form-control"], ["type", "date", "formControlName", "DataCompra", 1, "form-control"], ["type", "text", "formControlName", "CodigoInterno", 1, "form-control"], ["type", "text", "formControlName", "EstadoEqui", 1, "form-control"], ["type", "date", "formControlName", "DataFimAtividade", 1, "form-control"], ["type", "submit", 1, "btn", "btn-primary"], [3, "value"]],
      template: function EquipEditComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Alterar informa\xE7\xE3o de equipamento");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "form", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function EquipEditComponent_Template_form_ngSubmit_6_listener() {
            return ctx.submitForm();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "input", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Grupo de m\xE1quina");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "select", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, EquipEditComponent_option_13_Template, 2, 2, "option", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "NumeroSerie");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "input", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Descri\xE7\xE3o");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "input", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Marca");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "input", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Tipo");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "input", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Data compra");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "input", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Codigo interno");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "input", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Estado equipamento");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "input", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Data fim atividade");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "input", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "button", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "Update");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.updateEquipForm);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.gruposMaquinaList);
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["SelectControlValueAccessor"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_x"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZXF1aXBhbWVudG8tZWRpdC9lcXVpcC1lZGl0LmNvbXBvbmVudC5jc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EquipEditComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-edit-equip',
          templateUrl: './equip-edit.component.html',
          styleUrls: ['./equip-edit.component.css']
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]
        }, {
          type: _shared_equipamento_equipamento_service__WEBPACK_IMPORTED_MODULE_2__["EquipamentoService"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
        }, {
          type: _shared_gruposmaquina_grupomaquina_service__WEBPACK_IMPORTED_MODULE_4__["GrupoMaquinaService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/equipamento-list/equip-list.component.ts":
  /*!*********************************************************************!*\
    !*** ./src/app/components/equipamento-list/equip-list.component.ts ***!
    \*********************************************************************/

  /*! exports provided: EquipListComponent */

  /***/
  function srcAppComponentsEquipamentoListEquipListComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EquipListComponent", function () {
      return EquipListComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _shared_equipamento_equipamento_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../shared/equipamento/equipamento.service */
    "./src/app/shared/equipamento/equipamento.service.ts");
    /* harmony import */


    var _shared_gruposmaquina_grupomaquina_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../shared/gruposmaquina/grupomaquina.service */
    "./src/app/shared/gruposmaquina/grupomaquina.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function EquipListComponent_tr_36_ng_container_3_td_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var gm_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](gm_r6.Descr);
      }
    }

    function EquipListComponent_tr_36_ng_container_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, EquipListComponent_tr_36_ng_container_3_td_1_Template, 2, 1, "td", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var gm_r6 = ctx.$implicit;

        var equipamentos_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", gm_r6.IDGrupoMaquinas == equipamentos_r1.IDGrupoM);
      }
    }

    function EquipListComponent_tr_36_td_17_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Ativo");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function EquipListComponent_tr_36_td_18_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Desativo");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var _c0 = function _c0(a1) {
      return ["/edit-equip/", a1];
    };

    function EquipListComponent_tr_36_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "th", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, EquipListComponent_tr_36_ng_container_3_Template, 2, 1, "ng-container", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](16, "date");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, EquipListComponent_tr_36_td_17_Template, 2, 0, "td", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, EquipListComponent_tr_36_td_18_Template, 2, 0, "td", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](21, "date");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "button", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var equipamentos_r1 = ctx.$implicit;
        var i_r2 = ctx.index;

        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](i_r2 + 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.gruposMaquinaList);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](equipamentos_r1.CodigoInterno);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](equipamentos_r1.Descr);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](equipamentos_r1.Marca);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](equipamentos_r1.NumeroSerie);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](equipamentos_r1.Tipo);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](16, 12, equipamentos_r1.DataCompra, "yyyy"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", equipamentos_r1.EstadoEqui == 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", equipamentos_r1.EstadoEqui == 0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](21, 15, equipamentos_r1.DataFimAtividade, "yyyy"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](18, _c0, equipamentos_r1.IDEquipamento));
      }
    }

    var _c1 = function _c1() {
      return ["/add-equip"];
    };

    var EquipListComponent =
    /*#__PURE__*/
    function () {
      function EquipListComponent(equipamentoService, grupoMaquinaService, actRoute) {
        _classCallCheck(this, EquipListComponent);

        this.equipamentoService = equipamentoService;
        this.grupoMaquinaService = grupoMaquinaService;
        this.actRoute = actRoute;
        this.EquipList = []; //criar um array de objecto equipamentos.
        //EquipList: any = [];

        this.gruposMaquinaList = [];
      }

      _createClass(EquipListComponent, [{
        key: "equipToPedidos",
        value: function equipToPedidos() {
          this.EquipList;
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          this.loadEquip();
          this.loadGrupoMaquinas();
        } // lista equipamentos 

      }, {
        key: "loadEquip",
        value: function loadEquip() {
          var _this15 = this;

          return this.equipamentoService.GetEquipamentos().subscribe(function (data) {
            _this15.EquipList = data;
          });
        } //load dos grupos de máquinas.

      }, {
        key: "loadGrupoMaquinas",
        value: function loadGrupoMaquinas() {
          var _this16 = this;

          return this.grupoMaquinaService.GetGruposMaquina().subscribe(function (data) {
            _this16.gruposMaquinaList = data;
          });
        }
      }]);

      return EquipListComponent;
    }();

    EquipListComponent.ɵfac = function EquipListComponent_Factory(t) {
      return new (t || EquipListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_equipamento_equipamento_service__WEBPACK_IMPORTED_MODULE_1__["EquipamentoService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_gruposmaquina_grupomaquina_service__WEBPACK_IMPORTED_MODULE_2__["GrupoMaquinaService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]));
    };

    EquipListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: EquipListComponent,
      selectors: [["app-equip-list"]],
      decls: 37,
      vars: 3,
      consts: [[1, "container", "wrapper"], [1, "row"], [1, "col-md-12"], [1, "inner"], ["id", "main"], ["type", "button", 1, "btn", "btn-success", "btn-sm", "move-right", 2, "position", "absolute", "right", "0", 3, "routerLink"], [1, "table", "table-bordered", 2, "text-align", "center"], ["scope", "col"], [4, "ngFor", "ngForOf"], ["scope", "row"], [4, "ngIf"], ["type", "button", "data-toggle", "tooltip", "data-placement", "top", "title", "Editar", 1, "btn", "btn-success", "btn-sm", "rounded-0", 3, "routerLink"]],
      template: function EquipListComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Equipamentos");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Novo equipamento");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "table", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "thead");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "th", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "#");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "th", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Grupo de m\xE1quina");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "th", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Codigo interno");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "th", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Descri\xE7\xE3o");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "th", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Marca");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "th", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "N\xFAmero de S\xE9rie");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "th", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Tipo");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "th", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Data de compra");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "th", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Estado do equipamento");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "th", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Data fim atividade");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "tbody");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](36, EquipListComponent_tr_36_Template, 24, 20, "tr", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](2, _c1));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.EquipList);
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLink"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["DatePipe"]],
      styles: ["#main[_ngcontent-%COMP%] {\r\n    width: 200px;\r\n\r\n   \r\n  }\r\n  h3[_ngcontent-%COMP%] {\r\n    margin: 0;\r\n      display: inline-block;\r\n  }\r\n  .but[_ngcontent-%COMP%]{\r\n    background-color: gold;\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9lcXVpcGFtZW50by1saXN0L2VxdWlwLWxpc3QuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFlBQVk7OztFQUdkO0VBQ0E7SUFDRSxTQUFTO01BQ1AscUJBQXFCO0VBQ3pCO0VBRUE7SUFDRSxzQkFBc0I7RUFDeEIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2VxdWlwYW1lbnRvLWxpc3QvZXF1aXAtbGlzdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI21haW4ge1xyXG4gICAgd2lkdGg6IDIwMHB4O1xyXG5cclxuICAgXHJcbiAgfVxyXG4gIGgzIHtcclxuICAgIG1hcmdpbjogMDtcclxuICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIH1cclxuICBcclxuICAuYnV0e1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ29sZDtcclxuICB9XHJcbiAgXHJcblxyXG4iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EquipListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-equip-list',
          templateUrl: './equip-list.component.html',
          styleUrls: ['./equip-list.component.css']
        }]
      }], function () {
        return [{
          type: _shared_equipamento_equipamento_service__WEBPACK_IMPORTED_MODULE_1__["EquipamentoService"]
        }, {
          type: _shared_gruposmaquina_grupomaquina_service__WEBPACK_IMPORTED_MODULE_2__["GrupoMaquinaService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/grupomaquina-list/grupomaquina-list.component.ts":
  /*!*****************************************************************************!*\
    !*** ./src/app/components/grupomaquina-list/grupomaquina-list.component.ts ***!
    \*****************************************************************************/

  /*! exports provided: GrupoMaquinaListComponent */

  /***/
  function srcAppComponentsGrupomaquinaListGrupomaquinaListComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GrupoMaquinaListComponent", function () {
      return GrupoMaquinaListComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _shared_gruposmaquina_grupomaquina_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../shared/gruposmaquina/grupomaquina.service */
    "./src/app/shared/gruposmaquina/grupomaquina.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function GrupoMaquinaListComponent_tr_16_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var grupomaquinas_r11 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](grupomaquinas_r11.CodigoInterno);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](grupomaquinas_r11.Descr);
      }
    }

    var GrupoMaquinaListComponent =
    /*#__PURE__*/
    function () {
      function GrupoMaquinaListComponent(grupoMaquinaService) {
        _classCallCheck(this, GrupoMaquinaListComponent);

        this.grupoMaquinaService = grupoMaquinaService;
        this.GrupoMaquinaList = [];
      }

      _createClass(GrupoMaquinaListComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.loadGrupoMaquinas();
        } // lista grupos de máquinas

      }, {
        key: "loadGrupoMaquinas",
        value: function loadGrupoMaquinas() {
          var _this17 = this;

          return this.grupoMaquinaService.GetGruposMaquina().subscribe(function (data) {
            _this17.GrupoMaquinaList = data;
          });
        }
      }]);

      return GrupoMaquinaListComponent;
    }();

    GrupoMaquinaListComponent.ɵfac = function GrupoMaquinaListComponent_Factory(t) {
      return new (t || GrupoMaquinaListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_gruposmaquina_grupomaquina_service__WEBPACK_IMPORTED_MODULE_1__["GrupoMaquinaService"]));
    };

    GrupoMaquinaListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: GrupoMaquinaListComponent,
      selectors: [["app-grupomaquina-list"]],
      decls: 18,
      vars: 1,
      consts: [[1, "container", "wrapper"], [1, "row"], [1, "col-md-12"], [1, "inner"], [1, "table", "table-bordered"], ["scope", "col", "width", "150"], ["scope", "col"], [4, "ngFor", "ngForOf"], ["width", "150"]],
      template: function GrupoMaquinaListComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Grupos de equipamentos");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "table", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "thead");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "th", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "C\xF3digo interno");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "th", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Descri\xE7\xE3o");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "tbody");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, GrupoMaquinaListComponent_tr_16_Template, 5, 2, "tr", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.GrupoMaquinaList);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]],
      styles: [".inner[_ngcontent-%COMP%]{\r\n    \r\n  table-layout: fixed;\r\n  width: 600px;\r\n}\r\n\r\n\r\n.table[_ngcontent-%COMP%]   table-bordered[_ngcontent-%COMP%]{\r\n    display: flex;\r\n    justify-content: center;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9ncnVwb21hcXVpbmEtbGlzdC9ncnVwb21hcXVpbmEtbGlzdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztFQUVFLG1CQUFtQjtFQUNuQixZQUFZO0FBQ2Q7OztBQUdBO0lBQ0ksYUFBYTtJQUNiLHVCQUF1QjtBQUMzQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZ3J1cG9tYXF1aW5hLWxpc3QvZ3J1cG9tYXF1aW5hLWxpc3QuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pbm5lcntcclxuICAgIFxyXG4gIHRhYmxlLWxheW91dDogZml4ZWQ7XHJcbiAgd2lkdGg6IDYwMHB4O1xyXG59XHJcblxyXG5cclxuLnRhYmxlIHRhYmxlLWJvcmRlcmVke1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcbiJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GrupoMaquinaListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-grupomaquina-list',
          templateUrl: './grupomaquina-list.component.html',
          styleUrls: ['./grupomaquina-list.component.css']
        }]
      }], function () {
        return [{
          type: _shared_gruposmaquina_grupomaquina_service__WEBPACK_IMPORTED_MODULE_1__["GrupoMaquinaService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/header/header.component.ts":
  /*!*******************************************************!*\
    !*** ./src/app/components/header/header.component.ts ***!
    \*******************************************************/

  /*! exports provided: HeaderComponent */

  /***/
  function srcAppComponentsHeaderHeaderComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HeaderComponent", function () {
      return HeaderComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _TokenAuth_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../TokenAuth/auth.service */
    "./src/app/TokenAuth/auth.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/toolbar */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_material_menu__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/menu */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/menu.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function HeaderComponent_li_25_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Login");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function HeaderComponent_a_27_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r114 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Em sess\xE3o: ", ctx_r114.userNow(), "");
      }
    }

    function HeaderComponent_li_28_Template(rf, ctx) {
      if (rf & 1) {
        var _r117 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_li_28_Template_button_click_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r117);

          var ctx_r116 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r116.onLogout();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Logout");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var HeaderComponent =
    /*#__PURE__*/
    function () {
      function HeaderComponent(authService, router, ngZone) {
        _classCallCheck(this, HeaderComponent);

        this.authService = authService;
        this.router = router;
        this.ngZone = ngZone;
        this.user = localStorage.getItem("username");
        this.userIsAuthenticated = false;
        this.userPermission = 0;
      }

      _createClass(HeaderComponent, [{
        key: "userNow",
        value: function userNow() {
          //this.user = this.authService.getUserName();
          return this.user = this.authService.getUserName(); //console.log(localStorage.getItem('username'));
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this18 = this;

          this.userPermission = this.authService.getCurrentUserRoleId();
          this.userIsAuthenticated = this.authService.getIsAuth();
          this.authListenerSubs = this.authService.getAuthStatusListener().subscribe(function (isAuthenticated) {
            _this18.userIsAuthenticated = isAuthenticated;
          });
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.authListenerSubs.unsubscribe();
        }
      }, {
        key: "onLogout",
        value: function onLogout() {
          var _this19 = this;

          this.authService.logout();
          this.ngZone.run(function () {
            return _this19.router.navigateByUrl("/");
          });
          setTimeout(function () {
            _this19.refresh();
          }, 1000);
        }
      }, {
        key: "refresh",
        value: function refresh() {
          window.location.reload();
        }
      }]);

      return HeaderComponent;
    }();

    HeaderComponent.ɵfac = function HeaderComponent_Factory(t) {
      return new (t || HeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_TokenAuth_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]));
    };

    HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: HeaderComponent,
      selectors: [["app-header"]],
      decls: 29,
      vars: 5,
      consts: [[1, "col"], ["mat-button", "", "aria-label", "Example icon button with a menu icon", 3, "matMenuTriggerFor"], ["menu", "matMenu"], ["mat-menu-item", "", 3, "matMenuTriggerFor"], ["mat-menu-item", "", "routerLink", "/manutencao-prog-home-page"], ["mat-menu-item", "", "routerLink", "/equip-list"], ["mat-menu-item", "", "routerLink", "/grupomaquina-list"], ["mat-menu-item", "", "routerLink", "/asp-net-user-list"], ["pedidos", "matMenu"], ["mat-menu-item", "", "routerLink", "/pedido-mcurativa-list-teste"], ["mat-menu-item", "", "routerLink", "/pedido-preventiva-list"], ["routerLink", "/", 1, "tt"], [4, "ngIf"], ["class", "formatFontSize", "style", "font-size:0.9vw", 4, "ngIf"], ["mat-button", "", "routerLink", "/my-login", "routerLinkActive", "mat-accent"], [1, "formatFontSize", 2, "font-size", "0.9vw"], ["mat-button", "", 3, "click"]],
      template: function HeaderComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-toolbar", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "menu");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-menu", null, 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Pedidos");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Tarefas a realizar");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Equipamentos");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " Grupos de m\xE1quina ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Utilizadores");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "mat-menu", null, 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "button", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " Pedidos curativos ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "button", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, " Pedidos preventivos ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "a", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Gest\xE3o da manuten\xE7\xE3o");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, HeaderComponent_li_25_Template, 3, 0, "li", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](27, HeaderComponent_a_27_Template, 2, 1, "a", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](28, HeaderComponent_li_28_Template, 3, 0, "li", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var _r111 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5);

          var _r112 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matMenuTriggerFor", _r111);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matMenuTriggerFor", _r112);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.userIsAuthenticated);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.userIsAuthenticated);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.userIsAuthenticated);
        }
      },
      directives: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_3__["MatToolbar"], _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButton"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_5__["MatMenuTrigger"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIcon"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_5__["_MatMenu"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_5__["MatMenuItem"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatAnchor"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkActive"]],
      styles: ["ul[_ngcontent-%COMP%] {\r\n    list-style: none;\r\n    padding: 0;\r\n    margin: 0;\r\n  }\r\n  \r\n  a[_ngcontent-%COMP%] {\r\n    text-decoration: none;\r\n    color: white;\r\n  }\r\n  \r\n  ul[_ngcontent-%COMP%] {\r\n    display: flex;\r\n  }\r\n  \r\n  .spacer[_ngcontent-%COMP%] {\r\n    flex: 1 1 auto;\r\n  }\r\n  \r\n  .example-button-container[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    justify-content: center;\r\n    width: 120px;\r\n    color:blue\r\n  }\r\n  \r\n  .ts[_ngcontent-%COMP%] {\r\n    background-color: blue !important;\r\n  }\r\n  \r\n  .col[_ngcontent-%COMP%]{\r\n    \r\n    background-color: slategrey;\r\n  }\r\n  \r\n  .formatFontSize[_ngcontent-%COMP%]{\r\n    font-size:15px;\r\n    margin-right: 50px;\r\n  }\r\n  \r\n  .col[_ngcontent-%COMP%]{\r\n    height: 40px;\r\n  }\r\n  \r\n  .example-sidenav[_ngcontent-%COMP%] {\r\n  padding: 20px;\r\n}\r\n  \r\n  .tt[_ngcontent-%COMP%]{\r\n  padding:1em;\r\n  text-align: center;\r\n  display:inline-block;\r\n  text-decoration: none !important;\r\n  margin:0 auto;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxnQkFBZ0I7SUFDaEIsVUFBVTtJQUNWLFNBQVM7RUFDWDs7RUFFQTtJQUNFLHFCQUFxQjtJQUNyQixZQUFZO0VBQ2Q7O0VBRUE7SUFDRSxhQUFhO0VBQ2Y7O0VBRUE7SUFDRSxjQUFjO0VBQ2hCOztFQUVBO0lBQ0UsYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixZQUFZO0lBQ1o7RUFDRjs7RUFFQTtJQUNFLGlDQUFpQztFQUNuQzs7RUFDQTtJQUNFLDBCQUEwQjtJQUMxQiwyQkFBMkI7RUFDN0I7O0VBR0E7SUFDRSxjQUFjO0lBQ2Qsa0JBQWtCO0VBQ3BCOztFQUVBO0lBQ0UsWUFBWTtFQUNkOztFQUVGO0VBQ0UsYUFBYTtBQUNmOztFQUVBO0VBQ0UsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixvQkFBb0I7RUFDcEIsZ0NBQWdDO0VBQ2hDLGFBQWE7QUFDZiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsidWwge1xyXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgfVxyXG4gIFxyXG4gIGEge1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gIH1cclxuICBcclxuICB1bCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gIH1cclxuICBcclxuICAuc3BhY2VyIHtcclxuICAgIGZsZXg6IDEgMSBhdXRvO1xyXG4gIH1cclxuXHJcbiAgLmV4YW1wbGUtYnV0dG9uLWNvbnRhaW5lciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICB3aWR0aDogMTIwcHg7XHJcbiAgICBjb2xvcjpibHVlXHJcbiAgfVxyXG5cclxuICAudHMge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmx1ZSAhaW1wb3J0YW50O1xyXG4gIH1cclxuICAuY29se1xyXG4gICAgLypiYWNrZ3JvdW5kLWNvbG9yOiB0ZWFsOyovXHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBzbGF0ZWdyZXk7XHJcbiAgfVxyXG4gIFxyXG5cclxuICAuZm9ybWF0Rm9udFNpemV7XHJcbiAgICBmb250LXNpemU6MTVweDtcclxuICAgIG1hcmdpbi1yaWdodDogNTBweDtcclxuICB9XHJcblxyXG4gIC5jb2x7XHJcbiAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgfVxyXG4gIFxyXG4uZXhhbXBsZS1zaWRlbmF2IHtcclxuICBwYWRkaW5nOiAyMHB4O1xyXG59XHJcblxyXG4udHR7XHJcbiAgcGFkZGluZzoxZW07XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGRpc3BsYXk6aW5saW5lLWJsb2NrO1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZSAhaW1wb3J0YW50O1xyXG4gIG1hcmdpbjowIGF1dG87XHJcbn1cclxuXHJcblxyXG4gIFxyXG5cclxuICAiXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: "app-header",
          templateUrl: "./header.component.html",
          styleUrls: ["./header.component.css"]
        }]
      }], function () {
        return [{
          type: _TokenAuth_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/intervencao-add-user-home-page/intervencao-add-user-home-page.component.ts":
  /*!*******************************************************************************************************!*\
    !*** ./src/app/components/intervencao-add-user-home-page/intervencao-add-user-home-page.component.ts ***!
    \*******************************************************************************************************/

  /*! exports provided: IntervencaoAddUserHomePageComponent */

  /***/
  function srcAppComponentsIntervencaoAddUserHomePageIntervencaoAddUserHomePageComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "IntervencaoAddUserHomePageComponent", function () {
      return IntervencaoAddUserHomePageComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _shared_pedidoMpreventiva_pedidoMpreventiva_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../shared/pedidoMpreventiva/pedidoMpreventiva.service */
    "./src/app/shared/pedidoMpreventiva/pedidoMpreventiva.service.ts");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
    /* harmony import */


    var _angular_material_select__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/select */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_material_components_datetime_picker__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular-material-components/datetime-picker */
    "./node_modules/@angular-material-components/datetime-picker/__ivy_ngcc__/fesm2015/angular-material-components-datetime-picker.js");
    /* harmony import */


    var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/material/datepicker */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/datepicker.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_material_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/material/core */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");

    function IntervencaoAddUserHomePageComponent_mat_option_10_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var item_r67 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", item_r67.ID);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r67.Descr, " ");
      }
    }

    var IntervencaoAddUserHomePageComponent =
    /*#__PURE__*/
    function () {
      function IntervencaoAddUserHomePageComponent(data, fb, pedidoServ) {
        _classCallCheck(this, IntervencaoAddUserHomePageComponent);

        this.data = data;
        this.fb = fb;
        this.pedidoServ = pedidoServ;
        this.estadoIntervencaoList = [];
        this.IDPedido = this.data.IDPedido;
      }

      _createClass(IntervencaoAddUserHomePageComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.loadEstadosIntervencao();
          this.form = this.fb.group({
            descricao: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            estado: [0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            datainicio: [null],
            datafim: [null]
          });
        }
      }, {
        key: "onSubmit",
        value: function onSubmit() {
          if (this.form.valid) {
            var values = this.form.getRawValue();
            var body = {
              Observacoes: values.descricao,
              PedidoManutPreventivaID: this.IDPedido,
              IDEstadoIntervencao: values.estado,
              DataInicioIntervencao: values.datainicio,
              DataFimIntervencao: values.datafim
            }; //if (body.DataInicioIntervencao.getTime() > body.DataFimIntervencao.getTime())

            this.pedidoServ.postIntervencao(body); //http enviar o body para a api.
          } else {//show dialog a dizer que falta algo.
            }
        }
      }, {
        key: "loadEstadosIntervencao",
        value: function loadEstadosIntervencao() {
          var _this20 = this;

          return this.pedidoServ.GetEstadosIntervencao().subscribe(function (data) {
            _this20.estadoIntervencaoList = data;
          });
        }
      }]);

      return IntervencaoAddUserHomePageComponent;
    }();

    IntervencaoAddUserHomePageComponent.ɵfac = function IntervencaoAddUserHomePageComponent_Factory(t) {
      return new (t || IntervencaoAddUserHomePageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_pedidoMpreventiva_pedidoMpreventiva_service__WEBPACK_IMPORTED_MODULE_3__["PedidosPreventivosService"]));
    };

    IntervencaoAddUserHomePageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: IntervencaoAddUserHomePageComponent,
      selectors: [["app-intervencao-add-user-home-page"]],
      decls: 27,
      vars: 8,
      consts: [[3, "formGroup"], ["formControlName", "descricao", "matInput", "", "placeholder", "Descri\xE7\xE3o do processo"], ["formControlName", "estado"], [3, "value", 4, "ngFor", "ngForOf"], ["matInput", "", "placeholder", "Data inicio", "formControlName", "datainicio", 3, "ngxMatDatetimePicker"], ["matSuffix", "", 3, "for"], ["pickerinicio", ""], ["matInput", "", "placeholder", "Data fim", "formControlName", "datafim", 3, "ngxMatDatetimePicker"], ["pickerfim", ""], ["mat-button", "", 1, "close-icon", 3, "mat-dialog-close"], ["mat-button", "", 1, "close-icon", 3, "mat-dialog-close", "click"], [3, "value"]],
      template: function IntervencaoAddUserHomePageComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Inserir interven\xE7\xE3o preventiva");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-dialog-content", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-form-field");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "input", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-form-field");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Estado");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-select", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, IntervencaoAddUserHomePageComponent_mat_option_10_Template, 2, 2, "mat-option", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-form-field");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "input", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "mat-datepicker-toggle", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "ngx-mat-datetime-picker", null, 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "mat-form-field");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "input", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "mat-datepicker-toggle", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "ngx-mat-datetime-picker", null, 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "mat-dialog-actions");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "button", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, " Fechar ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "button", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function IntervencaoAddUserHomePageComponent_Template_button_click_25_listener() {
            return ctx.onSubmit();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, " Guardar ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var _r65 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](16);

          var _r66 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.form);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.estadoIntervencaoList);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngxMatDatetimePicker", _r65);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("for", _r65);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngxMatDatetimePicker", _r66);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("for", _r66);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("mat-dialog-close", true);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("mat-dialog-close", true);
        }
      },
      directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogContent"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatFormField"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_material_input__WEBPACK_IMPORTED_MODULE_5__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatLabel"], _angular_material_select__WEBPACK_IMPORTED_MODULE_6__["MatSelect"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _angular_material_components_datetime_picker__WEBPACK_IMPORTED_MODULE_8__["NgxMatDatetimeInput"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_9__["MatDatepickerToggle"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatSuffix"], _angular_material_components_datetime_picker__WEBPACK_IMPORTED_MODULE_8__["NgxMatDatetimePicker"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_10__["MatButton"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogClose"], _angular_material_core__WEBPACK_IMPORTED_MODULE_11__["MatOption"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaW50ZXJ2ZW5jYW8tYWRkLXVzZXItaG9tZS1wYWdlL2ludGVydmVuY2FvLWFkZC11c2VyLWhvbWUtcGFnZS5jb21wb25lbnQuY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](IntervencaoAddUserHomePageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-intervencao-add-user-home-page',
          templateUrl: './intervencao-add-user-home-page.component.html',
          styleUrls: ['./intervencao-add-user-home-page.component.css']
        }]
      }], function () {
        return [{
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]]
          }]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
        }, {
          type: _shared_pedidoMpreventiva_pedidoMpreventiva_service__WEBPACK_IMPORTED_MODULE_3__["PedidosPreventivosService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/intervencao-curativa-add/intervencao-curativa-add.component.ts":
  /*!*******************************************************************************************!*\
    !*** ./src/app/components/intervencao-curativa-add/intervencao-curativa-add.component.ts ***!
    \*******************************************************************************************/

  /*! exports provided: IntervencaoCurativaAddComponent */

  /***/
  function srcAppComponentsIntervencaoCurativaAddIntervencaoCurativaAddComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "IntervencaoCurativaAddComponent", function () {
      return IntervencaoCurativaAddComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _shared_pedidoMcurativa_teste_pedidoMcurativa_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../shared/pedidoMcurativa-teste/pedidoMcurativa.service */
    "./src/app/shared/pedidoMcurativa-teste/pedidoMcurativa.service.ts");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
    /* harmony import */


    var _angular_material_select__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/select */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_material_components_datetime_picker__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular-material-components/datetime-picker */
    "./node_modules/@angular-material-components/datetime-picker/__ivy_ngcc__/fesm2015/angular-material-components-datetime-picker.js");
    /* harmony import */


    var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/material/datepicker */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/datepicker.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_material_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/material/core */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");

    function IntervencaoCurativaAddComponent_mat_option_10_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var item_r32 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", item_r32.ID);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r32.Descr, " ");
      }
    }

    var IntervencaoCurativaAddComponent =
    /*#__PURE__*/
    function () {
      function IntervencaoCurativaAddComponent(data, fb, pedidoServ) {
        _classCallCheck(this, IntervencaoCurativaAddComponent);

        this.data = data;
        this.fb = fb;
        this.pedidoServ = pedidoServ; //constructor(@Inject(MAT_DIALOG_DATA) public data: any) { }

        this.estadoIntervencaoList = [];
        this.idPedido = this.data.idPedido;
      }

      _createClass(IntervencaoCurativaAddComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.loadEstadosIntervencao();
          this.form = this.fb.group({
            descricao: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            estado: [0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            datainicio: [null],
            datafim: [null]
          });
        }
      }, {
        key: "onSubmit",
        value: function onSubmit() {
          if (this.form.valid) {
            var values = this.form.getRawValue();
            var body = {
              Descricao: values.descricao,
              IDPedido: this.idPedido,
              IDEstadoIntervencao: values.estado,
              DataInicioIntervencao: values.datainicio,
              DataFimIntervencao: values.datafim
            }; //if (body.DataInicioIntervencao.getTime() > body.DataFimIntervencao.getTime())

            this.pedidoServ.postIntervencao(body); //http enviar o body para a api.
          } else {//show dialog a dizer que falta algo.
            }
        }
      }, {
        key: "loadEstadosIntervencao",
        value: function loadEstadosIntervencao() {
          var _this21 = this;

          return this.pedidoServ.GetEstadosIntervencao().subscribe(function (data) {
            _this21.estadoIntervencaoList = data;
          });
        }
      }]);

      return IntervencaoCurativaAddComponent;
    }();

    IntervencaoCurativaAddComponent.ɵfac = function IntervencaoCurativaAddComponent_Factory(t) {
      return new (t || IntervencaoCurativaAddComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_pedidoMcurativa_teste_pedidoMcurativa_service__WEBPACK_IMPORTED_MODULE_3__["PedidosService"]));
    };

    IntervencaoCurativaAddComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: IntervencaoCurativaAddComponent,
      selectors: [["app-intervencao-curativa-add"]],
      decls: 27,
      vars: 8,
      consts: [[3, "formGroup"], ["formControlName", "descricao", "matInput", "", "placeholder", "Descri\xE7\xE3o do processo"], ["formControlName", "estado"], [3, "value", 4, "ngFor", "ngForOf"], ["matInput", "", "placeholder", "Data inicio", "formControlName", "datainicio", 3, "ngxMatDatetimePicker"], ["matSuffix", "", 3, "for"], ["pickerinicio", ""], ["matInput", "", "placeholder", "Data fim", "formControlName", "datafim", 3, "ngxMatDatetimePicker"], ["pickerfim", ""], ["mat-button", "", 1, "close-icon", 3, "mat-dialog-close"], ["mat-button", "", 1, "close-icon", 3, "mat-dialog-close", "click"], [3, "value"]],
      template: function IntervencaoCurativaAddComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Inserir interven\xE7\xE3o");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-dialog-content", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-form-field");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "input", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-form-field");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Estado");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-select", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, IntervencaoCurativaAddComponent_mat_option_10_Template, 2, 2, "mat-option", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-form-field");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "input", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "mat-datepicker-toggle", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "ngx-mat-datetime-picker", null, 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "mat-form-field");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "input", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "mat-datepicker-toggle", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "ngx-mat-datetime-picker", null, 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "mat-dialog-actions");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "button", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, " Fechar ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "button", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function IntervencaoCurativaAddComponent_Template_button_click_25_listener() {
            return ctx.onSubmit();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, " Guardar ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](16);

          var _r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.form);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.estadoIntervencaoList);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngxMatDatetimePicker", _r30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("for", _r30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngxMatDatetimePicker", _r31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("for", _r31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("mat-dialog-close", true);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("mat-dialog-close", true);
        }
      },
      directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogContent"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatFormField"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_material_input__WEBPACK_IMPORTED_MODULE_5__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatLabel"], _angular_material_select__WEBPACK_IMPORTED_MODULE_6__["MatSelect"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _angular_material_components_datetime_picker__WEBPACK_IMPORTED_MODULE_8__["NgxMatDatetimeInput"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_9__["MatDatepickerToggle"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatSuffix"], _angular_material_components_datetime_picker__WEBPACK_IMPORTED_MODULE_8__["NgxMatDatetimePicker"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_10__["MatButton"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogClose"], _angular_material_core__WEBPACK_IMPORTED_MODULE_11__["MatOption"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaW50ZXJ2ZW5jYW8tY3VyYXRpdmEtYWRkL2ludGVydmVuY2FvLWN1cmF0aXZhLWFkZC5jb21wb25lbnQuY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](IntervencaoCurativaAddComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: "app-intervencao-curativa-add",
          templateUrl: "./intervencao-curativa-add.component.html",
          styleUrls: ["./intervencao-curativa-add.component.css"]
        }]
      }], function () {
        return [{
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]]
          }]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
        }, {
          type: _shared_pedidoMcurativa_teste_pedidoMcurativa_service__WEBPACK_IMPORTED_MODULE_3__["PedidosService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/intervencao-preventiva-add/intervencao-preventiva-add.component.ts":
  /*!***********************************************************************************************!*\
    !*** ./src/app/components/intervencao-preventiva-add/intervencao-preventiva-add.component.ts ***!
    \***********************************************************************************************/

  /*! exports provided: IntervencaoPreventivaAddComponent */

  /***/
  function srcAppComponentsIntervencaoPreventivaAddIntervencaoPreventivaAddComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "IntervencaoPreventivaAddComponent", function () {
      return IntervencaoPreventivaAddComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _shared_pedidoMpreventiva_pedidoMpreventiva_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../shared/pedidoMpreventiva/pedidoMpreventiva.service */
    "./src/app/shared/pedidoMpreventiva/pedidoMpreventiva.service.ts");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
    /* harmony import */


    var _angular_material_select__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/select */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_material_components_datetime_picker__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular-material-components/datetime-picker */
    "./node_modules/@angular-material-components/datetime-picker/__ivy_ngcc__/fesm2015/angular-material-components-datetime-picker.js");
    /* harmony import */


    var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/material/datepicker */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/datepicker.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_material_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/material/core */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");

    function IntervencaoPreventivaAddComponent_mat_option_10_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var item_r63 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", item_r63.ID);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r63.Descr, " ");
      }
    }

    var IntervencaoPreventivaAddComponent =
    /*#__PURE__*/
    function () {
      function IntervencaoPreventivaAddComponent(data, fb, pedidoServ) {
        _classCallCheck(this, IntervencaoPreventivaAddComponent);

        this.data = data;
        this.fb = fb;
        this.pedidoServ = pedidoServ;
        this.estadoIntervencaoList = [];
        this.idPedido = this.data.idPedido;
      }

      _createClass(IntervencaoPreventivaAddComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.loadEstadosIntervencao();
          this.form = this.fb.group({
            descricao: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            estado: [0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            datainicio: [null],
            datafim: [null]
          });
        }
      }, {
        key: "onSubmit",
        value: function onSubmit() {
          if (this.form.valid) {
            var values = this.form.getRawValue();
            var body = {
              Observacoes: values.descricao,
              PedidoManutPreventivaID: this.idPedido,
              IDEstadoIntervencao: values.estado,
              DataInicioIntervencao: values.datainicio,
              DataFimIntervencao: values.datafim
            }; //if (body.DataInicioIntervencao.getTime() > body.DataFimIntervencao.getTime())

            this.pedidoServ.postIntervencao(body); //http enviar o body para a api.
          } else {//show dialog a dizer que falta algo.
            }
        }
      }, {
        key: "loadEstadosIntervencao",
        value: function loadEstadosIntervencao() {
          var _this22 = this;

          return this.pedidoServ.GetEstadosIntervencao().subscribe(function (data) {
            _this22.estadoIntervencaoList = data;
          });
        }
      }]);

      return IntervencaoPreventivaAddComponent;
    }();

    IntervencaoPreventivaAddComponent.ɵfac = function IntervencaoPreventivaAddComponent_Factory(t) {
      return new (t || IntervencaoPreventivaAddComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_pedidoMpreventiva_pedidoMpreventiva_service__WEBPACK_IMPORTED_MODULE_3__["PedidosPreventivosService"]));
    };

    IntervencaoPreventivaAddComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: IntervencaoPreventivaAddComponent,
      selectors: [["app-intervencao-preventiva-add"]],
      decls: 27,
      vars: 8,
      consts: [[3, "formGroup"], ["formControlName", "descricao", "matInput", "", "placeholder", "Descri\xE7\xE3o do processo"], ["formControlName", "estado"], [3, "value", 4, "ngFor", "ngForOf"], ["matInput", "", "placeholder", "Data inicio", "formControlName", "datainicio", 3, "ngxMatDatetimePicker"], ["matSuffix", "", 3, "for"], ["pickerinicio", ""], ["matInput", "", "placeholder", "Data fim", "formControlName", "datafim", 3, "ngxMatDatetimePicker"], ["pickerfim", ""], ["mat-button", "", 1, "close-icon", 3, "mat-dialog-close"], ["mat-button", "", 1, "close-icon", 3, "mat-dialog-close", "click"], [3, "value"]],
      template: function IntervencaoPreventivaAddComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Inserir interven\xE7\xE3o preventiva");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-dialog-content", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-form-field");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "input", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-form-field");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Estado");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-select", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, IntervencaoPreventivaAddComponent_mat_option_10_Template, 2, 2, "mat-option", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-form-field");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "input", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "mat-datepicker-toggle", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "ngx-mat-datetime-picker", null, 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "mat-form-field");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "input", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "mat-datepicker-toggle", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "ngx-mat-datetime-picker", null, 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "mat-dialog-actions");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "button", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, " Fechar ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "button", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function IntervencaoPreventivaAddComponent_Template_button_click_25_listener() {
            return ctx.onSubmit();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, " Guardar ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var _r61 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](16);

          var _r62 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.form);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.estadoIntervencaoList);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngxMatDatetimePicker", _r61);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("for", _r61);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngxMatDatetimePicker", _r62);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("for", _r62);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("mat-dialog-close", true);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("mat-dialog-close", true);
        }
      },
      directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogContent"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatFormField"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_material_input__WEBPACK_IMPORTED_MODULE_5__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatLabel"], _angular_material_select__WEBPACK_IMPORTED_MODULE_6__["MatSelect"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _angular_material_components_datetime_picker__WEBPACK_IMPORTED_MODULE_8__["NgxMatDatetimeInput"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_9__["MatDatepickerToggle"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatSuffix"], _angular_material_components_datetime_picker__WEBPACK_IMPORTED_MODULE_8__["NgxMatDatetimePicker"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_10__["MatButton"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogClose"], _angular_material_core__WEBPACK_IMPORTED_MODULE_11__["MatOption"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaW50ZXJ2ZW5jYW8tcHJldmVudGl2YS1hZGQvaW50ZXJ2ZW5jYW8tcHJldmVudGl2YS1hZGQuY29tcG9uZW50LmNzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](IntervencaoPreventivaAddComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: "app-intervencao-preventiva-add",
          templateUrl: "./intervencao-preventiva-add.component.html",
          styleUrls: ["./intervencao-preventiva-add.component.css"]
        }]
      }], function () {
        return [{
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]]
          }]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
        }, {
          type: _shared_pedidoMpreventiva_pedidoMpreventiva_service__WEBPACK_IMPORTED_MODULE_3__["PedidosPreventivosService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/list-permissao/list-permissao.component.ts":
  /*!***********************************************************************!*\
    !*** ./src/app/components/list-permissao/list-permissao.component.ts ***!
    \***********************************************************************/

  /*! exports provided: ListPermissaoComponent */

  /***/
  function srcAppComponentsListPermissaoListPermissaoComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ListPermissaoComponent", function () {
      return ListPermissaoComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _shared_aspNetRoles_aspNetRoles_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../shared/aspNetRoles/aspNetRoles.service */
    "./src/app/shared/aspNetRoles/aspNetRoles.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    var _c0 = function _c0(a1) {
      return ["/edit-permissao/", a1];
    };

    function ListPermissaoComponent_tr_22_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "th", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Editar");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var aspnet_r107 = ctx.$implicit;
        var i_r108 = ctx.index;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](i_r108 + 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](aspnet_r107.Nome);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](aspnet_r107.Email);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](aspnet_r107.Name);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](5, _c0, aspnet_r107.Email));
      }
    }

    var ListPermissaoComponent =
    /*#__PURE__*/
    function () {
      function ListPermissaoComponent(aspNetRolesService, actRoute) {
        _classCallCheck(this, ListPermissaoComponent);

        this.aspNetRolesService = aspNetRolesService;
        this.actRoute = actRoute;
        this.aspNetRolesList = [];
      }

      _createClass(ListPermissaoComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.loadAspNetRoles();
        } //load users e roles da DB 

      }, {
        key: "loadAspNetRoles",
        value: function loadAspNetRoles() {
          var _this23 = this;

          return this.aspNetRolesService.GetAspNetUsers().subscribe(function (data) {
            _this23.aspNetRolesList = data;
          });
        }
      }]);

      return ListPermissaoComponent;
    }();

    ListPermissaoComponent.ɵfac = function ListPermissaoComponent_Factory(t) {
      return new (t || ListPermissaoComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_aspNetRoles_aspNetRoles_service__WEBPACK_IMPORTED_MODULE_1__["AspNetRolesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]));
    };

    ListPermissaoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ListPermissaoComponent,
      selectors: [["app-list-permissao"]],
      decls: 23,
      vars: 1,
      consts: [[1, "container", "wrapper"], [1, "row"], [1, "col-md-12"], [1, "inner"], ["id", "main"], [1, "table", "table-bordered", 2, "text-align", "center"], ["scope", "col"], [4, "ngFor", "ngForOf"], ["scope", "row"], ["type", "button", 1, "btn", "btn-success", "btn-sm", "rounded-0", 3, "routerLink"]],
      template: function ListPermissaoComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Permiss\xE3o dos utilizadores");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "table", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "thead");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "th", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "#");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "th", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Nome");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "th", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Email");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "th", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Tipo de permiss\xE3o");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "tbody");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, ListPermissaoComponent_tr_22_Template, 12, 7, "tr", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.aspNetRolesList);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"]],
      styles: ["#main[_ngcontent-%COMP%] {\r\n    width: 200px;\r\n\r\n   \r\n  }\r\n  h3[_ngcontent-%COMP%] {\r\n    margin: 0;\r\n      display: inline-block;\r\n  }\r\n  .but[_ngcontent-%COMP%]{\r\n    background-color: gold;\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9saXN0LXBlcm1pc3Nhby9saXN0LXBlcm1pc3Nhby5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksWUFBWTs7O0VBR2Q7RUFDQTtJQUNFLFNBQVM7TUFDUCxxQkFBcUI7RUFDekI7RUFFQTtJQUNFLHNCQUFzQjtFQUN4QiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbGlzdC1wZXJtaXNzYW8vbGlzdC1wZXJtaXNzYW8uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiNtYWluIHtcclxuICAgIHdpZHRoOiAyMDBweDtcclxuXHJcbiAgIFxyXG4gIH1cclxuICBoMyB7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICB9XHJcbiAgXHJcbiAgLmJ1dHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGdvbGQ7XHJcbiAgfVxyXG4gIFxyXG5cclxuIl19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ListPermissaoComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-list-permissao',
          templateUrl: './list-permissao.component.html',
          styleUrls: ['./list-permissao.component.css']
        }]
      }], function () {
        return [{
          type: _shared_aspNetRoles_aspNetRoles_service__WEBPACK_IMPORTED_MODULE_1__["AspNetRolesService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/manutencao-preventiva-programada/manutencao-preventiva-programada.component.ts":
  /*!***********************************************************************************************************!*\
    !*** ./src/app/components/manutencao-preventiva-programada/manutencao-preventiva-programada.component.ts ***!
    \***********************************************************************************************************/

  /*! exports provided: ManutencaoPreventivaProgramadaComponent */

  /***/
  function srcAppComponentsManutencaoPreventivaProgramadaManutencaoPreventivaProgramadaComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ManutencaoPreventivaProgramadaComponent", function () {
      return ManutencaoPreventivaProgramadaComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _shared_pedidoMpreventiva_pedidoMpreventiva_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../shared/pedidoMpreventiva/pedidoMpreventiva.service */
    "./src/app/shared/pedidoMpreventiva/pedidoMpreventiva.service.ts");
    /* harmony import */


    var _shared_tipoUtilizador_tipoUtilizador_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../shared/tipoUtilizador/tipoUtilizador.service */
    "./src/app/shared/tipoUtilizador/tipoUtilizador.service.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function ManutencaoPreventivaProgramadaComponent_option_14_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var item_r97 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", item_r97.IDGrupoMaquinas);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", item_r97.CodigoInterno, " - ", item_r97.Descr, "");
      }
    }

    function ManutencaoPreventivaProgramadaComponent_option_21_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var item1_r98 = ctx.$implicit;

        var ctx_r96 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", item1_r98.UserName);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", item1_r98.Nome, " ", ctx_r96.converterIDTipoParaDescr(item1_r98.IDTipo), " ");
      }
    }

    var ManutencaoPreventivaProgramadaComponent =
    /*#__PURE__*/
    function () {
      function ManutencaoPreventivaProgramadaComponent(pedidoService, tipoUtilizadorService, fb, ngZone, router, actRoute) {
        _classCallCheck(this, ManutencaoPreventivaProgramadaComponent);

        this.pedidoService = pedidoService;
        this.tipoUtilizadorService = tipoUtilizadorService;
        this.fb = fb;
        this.ngZone = ngZone;
        this.router = router;
        this.actRoute = actRoute;
        this.gruposMaquinaList = [];
        this.equipamentosFiltrados = [];
        this.equipamentosList = [];
        this.aspNetUsersList = [];
        this.tipoUtilizadorList = [];
      }

      _createClass(ManutencaoPreventivaProgramadaComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.addPedido();
          this.loadGrupoMaquinas();
          this.loadEquipamentos();
          this.loadAspNetUsers();
          this.loadTiposUtilizador();
        }
      }, {
        key: "listJustgroupmachine",
        value: function listJustgroupmachine() {
          this.gmID = this.selectedOption;

          if (this.equipamentosFiltrados.length > 0) {
            this.equipamentosFiltrados.length = 0;
          }

          for (var j = 0; j < this.equipamentosList.length; j++) {
            if (this.gmID == this.equipamentosList[j].IDGrupoM) {
              this.equipamentosFiltrados.push(this.equipamentosList[j]);
            }
          }
        }
      }, {
        key: "converterIDTipoParaDescr",
        value: function converterIDTipoParaDescr(a) {
          for (var i = 0; i < this.tipoUtilizadorList.length; i++) {
            if (a == this.tipoUtilizadorList[i].IDTipo) return "(" + this.tipoUtilizadorList[i].TipoDescr + " - " + this.tipoUtilizadorList[i].SeccaoTrabalho + ")";
          }
        }
      }, {
        key: "loadEquipamentos",
        value: function loadEquipamentos() {
          var _this24 = this;

          return this.pedidoService.GetEquipamentosObser().subscribe(function (data) {
            _this24.equipamentosList = data;
          });
        } //load tipos de utilizador da DB

      }, {
        key: "loadTiposUtilizador",
        value: function loadTiposUtilizador() {
          var _this25 = this;

          return this.tipoUtilizadorService.GetTiposUtilizador().subscribe(function (data) {
            _this25.tipoUtilizadorList = data;
          });
        }
      }, {
        key: "loadGrupoMaquinas",
        value: function loadGrupoMaquinas() {
          var _this26 = this;

          return this.pedidoService.GetGruposMaquina().subscribe(function (data) {
            _this26.gruposMaquinaList = data;
            console.log(_this26.gruposMaquinaList);
          });
        }
      }, {
        key: "addPedido",
        value: function addPedido() {
          this.pedidoForm = this.fb.group({
            Descricao: [''],
            DataLimiteManutencaoPrev: [''],
            UtilizadorIDUser: ['']
          });
        } //load utilizadores da DB 

      }, {
        key: "loadAspNetUsers",
        value: function loadAspNetUsers() {
          var _this27 = this;

          return this.pedidoService.GetAspNetUsers().subscribe(function (data) {
            _this27.aspNetUsersList = data;
          });
        }
      }, {
        key: "submitFormWithID",
        value: function submitFormWithID(selectedOption) {
          console.log("Form ID SelectedOption", selectedOption); //var id = this.actRoute.snapshot.paramMap.get('id');

          this.pedidoService.postPedidoPerGrupoMaquinas(selectedOption, this.pedidoForm.value); //this.ngZone.run(() => this.router.navigateByUrl('/pedido-preventiva-list'))
        }
      }, {
        key: "submitForm",
        value: function submitForm() {
          this.pedidoService.postPedido(this.pedidoForm.value);
          this.router.navigateByUrl('/pedido-preventiva-list');
        }
      }]);

      return ManutencaoPreventivaProgramadaComponent;
    }();

    ManutencaoPreventivaProgramadaComponent.ɵfac = function ManutencaoPreventivaProgramadaComponent_Factory(t) {
      return new (t || ManutencaoPreventivaProgramadaComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_pedidoMpreventiva_pedidoMpreventiva_service__WEBPACK_IMPORTED_MODULE_1__["PedidosPreventivosService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_tipoUtilizador_tipoUtilizador_service__WEBPACK_IMPORTED_MODULE_2__["TipoUtilizadorService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]));
    };

    ManutencaoPreventivaProgramadaComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ManutencaoPreventivaProgramadaComponent,
      selectors: [["app-manutencao-preventiva-programada"]],
      decls: 33,
      vars: 4,
      consts: [[1, "container", "wrapper", "wrapper2"], [1, "row"], [1, "col-md-12"], [1, "td"], [2, "width", "300px", 3, "ngModel", "ngModelChange", "click"], ["value", "0"], [3, "value", 4, "ngFor", "ngForOf"], ["novalidate", "", 3, "formGroup", "ngSubmit"], ["formControlName", "UtilizadorIDUser", 1, "form-group", 2, "width", "300px"], [1, "form-group"], ["type", "text", "formControlName", "Descricao", "maxlength", "100", 1, "myText", 2, "width", "300px"], ["type", "Date", "formControlName", "DataLimiteManutencaoPrev", 1, "form-control", 2, "width", "300px"], ["type", "submit", 1, "btn", "btn-primary"], [3, "value"]],
      template: function ManutencaoPreventivaProgramadaComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Pedidos de manuten\xE7\xE3o preventiva em grupo");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Grupo de m\xE1quina");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "select", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ManutencaoPreventivaProgramadaComponent_Template_select_ngModelChange_11_listener($event) {
            return ctx.selectedOption = $event;
          })("click", function ManutencaoPreventivaProgramadaComponent_Template_select_click_11_listener() {
            return ctx.listJustgroupmachine();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "option", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Grupo de m\xE1quina");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, ManutencaoPreventivaProgramadaComponent_option_14_Template, 2, 3, "option", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "form", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function ManutencaoPreventivaProgramadaComponent_Template_form_ngSubmit_15_listener() {
            return ctx.submitFormWithID(ctx.selectedOption);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Funcion\xE1rio a realizar a tarefa");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "select", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, ManutencaoPreventivaProgramadaComponent_option_21_Template, 2, 3, "option", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Descri\xE7\xE3o");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "input", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Data limite para realiza\xE7\xE3o da tarefa");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "input", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "button", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Submeter");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.selectedOption);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.gruposMaquinaList);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.pedidoForm);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.aspNetUsersList);
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_x"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["MaxLengthValidator"]],
      styles: [".xd[_ngcontent-%COMP%]\r\n{\r\n    width: auto;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9tYW51dGVuY2FvLXByZXZlbnRpdmEtcHJvZ3JhbWFkYS9tYW51dGVuY2FvLXByZXZlbnRpdmEtcHJvZ3JhbWFkYS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztJQUVJLFdBQVc7QUFDZiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbWFudXRlbmNhby1wcmV2ZW50aXZhLXByb2dyYW1hZGEvbWFudXRlbmNhby1wcmV2ZW50aXZhLXByb2dyYW1hZGEuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi54ZFxyXG57XHJcbiAgICB3aWR0aDogYXV0bztcclxufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ManutencaoPreventivaProgramadaComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-manutencao-preventiva-programada',
          templateUrl: './manutencao-preventiva-programada.component.html',
          styleUrls: ['./manutencao-preventiva-programada.component.css']
        }]
      }], function () {
        return [{
          type: _shared_pedidoMpreventiva_pedidoMpreventiva_service__WEBPACK_IMPORTED_MODULE_1__["PedidosPreventivosService"]
        }, {
          type: _shared_tipoUtilizador_tipoUtilizador_service__WEBPACK_IMPORTED_MODULE_2__["TipoUtilizadorService"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/manutencao-prog-home-page/manutencao-prog-home-page.component.ts":
  /*!*********************************************************************************************!*\
    !*** ./src/app/components/manutencao-prog-home-page/manutencao-prog-home-page.component.ts ***!
    \*********************************************************************************************/

  /*! exports provided: ManutencaoProgHomePageComponent */

  /***/
  function srcAppComponentsManutencaoProgHomePageManutencaoProgHomePageComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ManutencaoProgHomePageComponent", function () {
      return ManutencaoProgHomePageComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _intervencao_add_user_home_page_intervencao_add_user_home_page_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../intervencao-add-user-home-page/intervencao-add-user-home-page.component */
    "./src/app/components/intervencao-add-user-home-page/intervencao-add-user-home-page.component.ts");
    /* harmony import */


    var _shared_pedidoMpreventiva_pedidoMpreventiva_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../shared/pedidoMpreventiva/pedidoMpreventiva.service */
    "./src/app/shared/pedidoMpreventiva/pedidoMpreventiva.service.ts");
    /* harmony import */


    var _shared_tipoUtilizador_tipoUtilizador_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../shared/tipoUtilizador/tipoUtilizador.service */
    "./src/app/shared/tipoUtilizador/tipoUtilizador.service.ts");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/expansion */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/expansion.js");
    /* harmony import */


    var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/progress-spinner */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-spinner.js");

    function ManutencaoProgHomePageComponent_mat_spinner_0_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mat-spinner", 14);
      }
    }

    function ManutencaoProgHomePageComponent_p_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "aguarde ...");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function ManutencaoProgHomePageComponent_mat_expansion_panel_25_Template(rf, ctx) {
      if (rf & 1) {
        var _r105 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-expansion-panel");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-expansion-panel-header", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "table", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "tbody");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "td", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "td", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](13, "date");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "td", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](16, "date");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "body", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "table", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "thead");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "button", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ManutencaoProgHomePageComponent_mat_expansion_panel_25_Template_button_click_23_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r105);

          var item_r102 = ctx.$implicit;

          var ctx_r104 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r104.openDialog(item_r102.IDPedido);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, " Fechar pedido ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "tbody");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var item_r102 = ctx.$implicit;
        var i_r103 = ctx.index;

        var ctx_r101 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r102.IDPedido);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r101.changeIDtoInternalCode(i_r103), " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r102.Descricao);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](13, 5, item_r102.DataPedido, "dd/MM/yyyy HH:mm"), " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](16, 8, item_r102.DataLimiteManutencaoPrev, "dd/MM/yyyy"), " ");
      }
    }

    var ManutencaoProgHomePageComponent =
    /*#__PURE__*/
    function () {
      function ManutencaoProgHomePageComponent(pedidoService, tipoUtilizadorService, dialog, actRoute) {
        _classCallCheck(this, ManutencaoProgHomePageComponent);

        this.pedidoService = pedidoService;
        this.tipoUtilizadorService = tipoUtilizadorService;
        this.dialog = dialog;
        this.actRoute = actRoute;
        this.gruposMaquinaList = [];
        this.equipamentosList = [];
        this.equipamentosFiltrados = [];
        this.aspNetUsersList = [];
        this.intervencoes = [];
        this.estadoIntervencaoList = [];
        this.intervencoesFiltradas = [];
        this.tipoUtilizadorList = [];
        this.pedidosEsperaUser = [];
        this.isLoading = false;
      }

      _createClass(ManutencaoProgHomePageComponent, [{
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.pedidosUserSub.unsubscribe();
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this28 = this;

          this.loadEstadosIntervencao();
          this.pedidoService.getPedidosUser();
          this.pedidosUserSub = this.pedidoService.getPedidosUserUpdateListener().subscribe(function (pedidosuser) {
            _this28.pedidosEsperaUser = pedidosuser;
          }); //this.addPedido();

          this.loadGrupoMaquinas();
          this.loadEquipamentos();
          this.loadTiposUtilizador(); // this.loadPedidosEsperaUser();
        } //Troca no front-end, o ID do equipamento pelo código interno da empresa

      }, {
        key: "changeIDtoInternalCode",
        value: function changeIDtoInternalCode(equip) {
          for (var j = 0; j < this.equipamentosList.length; j++) {
            if (this.pedidosEsperaUser[equip].IDEquipamento == this.equipamentosList[j].IDEquipamento) {
              return this.equipamentosList[j].CodigoInterno + " - " + this.equipamentosList[j].Marca + " " + this.equipamentosList[j].Descr;
            }
          }
        }
      }, {
        key: "openDialog",
        value: function openDialog(IDPedido) {
          console.log(IDPedido, "passou na componente");
          this.dialog.open(_intervencao_add_user_home_page_intervencao_add_user_home_page_component__WEBPACK_IMPORTED_MODULE_1__["IntervencaoAddUserHomePageComponent"], {
            data: {
              IDPedido: IDPedido
            }
          });
        }
      }, {
        key: "loadEquipamentos",
        value: function loadEquipamentos() {
          var _this29 = this;

          return this.pedidoService.GetEquipamentosObser().subscribe(function (data) {
            _this29.equipamentosList = data;
          });
        } //load tipos de utilizador da DB

      }, {
        key: "loadTiposUtilizador",
        value: function loadTiposUtilizador() {
          var _this30 = this;

          return this.tipoUtilizadorService.GetTiposUtilizador().subscribe(function (data) {
            _this30.tipoUtilizadorList = data;
          });
        }
        /*   loadPedidosEsperaUser() {
            return this.pedidoService.GetPedidosEmEsperaUser().subscribe((data: {}) => {
              this.pedidosEsperaUser = data;
            });
          } */

      }, {
        key: "loadGrupoMaquinas",
        value: function loadGrupoMaquinas() {
          var _this31 = this;

          return this.pedidoService.GetGruposMaquina().subscribe(function (data) {
            _this31.gruposMaquinaList = data;
            console.log(_this31.gruposMaquinaList);
          });
        } //Troca o ID do estado de intervenção, pela sua descrição correspondente.

      }, {
        key: "changeIDtoDescription",
        value: function changeIDtoDescription(estado) {
          for (var j = 0; j < this.equipamentosList.length; j++) {
            if (this.intervencoes[estado].IDEstadoIntervencao == this.estadoIntervencaoList[j].ID) {
              return this.estadoIntervencaoList[j].Descr;
            }
          }
        } //lista estados de intervenção.

      }, {
        key: "loadEstadosIntervencao",
        value: function loadEstadosIntervencao() {
          var _this32 = this;

          return this.pedidoService.GetEstadosIntervencao().subscribe(function (data) {
            _this32.estadoIntervencaoList = data;
          });
        }
      }]);

      return ManutencaoProgHomePageComponent;
    }();

    ManutencaoProgHomePageComponent.ɵfac = function ManutencaoProgHomePageComponent_Factory(t) {
      return new (t || ManutencaoProgHomePageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_pedidoMpreventiva_pedidoMpreventiva_service__WEBPACK_IMPORTED_MODULE_2__["PedidosPreventivosService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_tipoUtilizador_tipoUtilizador_service__WEBPACK_IMPORTED_MODULE_3__["TipoUtilizadorService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]));
    };

    ManutencaoProgHomePageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ManutencaoProgHomePageComponent,
      selectors: [["app-manutencao-prog-home-page"]],
      decls: 26,
      vars: 4,
      consts: [["style", "margin: 0 auto;", "mode", "indeterminate", "color", "accent", 4, "ngIf"], ["style", "text-align:center", 4, "ngIf"], [1, "inner"], ["id", "main"], ["id", "side_bar"], [1, "formatH5", 2, "text-align", "left"], [1, "table-responsive"], [1, "table", "table-bordered", 2, "width", "100%", 3, "hidden"], ["scope", "col", "width", "80"], ["scope", "col", "width", "350"], ["scope", "col", "width", "400"], ["scope", "col", "width", "150"], ["multi", "false"], [4, "ngFor", "ngForOf"], ["mode", "indeterminate", "color", "accent", 2, "margin", "0 auto"], [2, "text-align", "center"], ["collapsedHeight", "*", "expandedHeight", "*"], [1, "table"], ["width", "80", 1, "tb-td-txt"], ["width", "360", 1, "tb-td-txt"], ["width", "440", 1, "tb-td-txt"], ["width", "165", 1, "tb-td-txt"], ["width", "150", 1, "tb-td-txt"], [1, "table", 2, "width", "100%"], ["type", "button", 1, "btn", "btn-success", "btn-sm", "move-right", 2, "position", "center", "right", "0", "height", "40px", "width", "150px", 3, "click"]],
      template: function ManutencaoProgHomePageComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ManutencaoProgHomePageComponent_mat_spinner_0_Template, 1, 0, "mat-spinner", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ManutencaoProgHomePageComponent_p_1_Template, 2, 0, "p", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h5", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Tarefas a aguardar a sua interven\xE7\xE3o");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "table", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "thead");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "th", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "ID");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "th", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Equipamento");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "th", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Descri\xE7\xE3o");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "th", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Data pedido");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "th", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Data limite");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "mat-accordion", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, ManutencaoProgHomePageComponent_mat_expansion_panel_25_Template, 29, 11, "mat-expansion-panel", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isLoading);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isLoading);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", ctx.isLoading);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.pedidosEsperaUser);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_7__["MatAccordion"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_8__["MatSpinner"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_7__["MatExpansionPanel"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_7__["MatExpansionPanelHeader"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["DatePipe"]],
      styles: [".mat-form-field-appearance-legacy .mat-form-field-underline {\r\n  background-color: transparent;\r\n}\r\n\r\n\r\n\r\nh5[_ngcontent-%COMP%] {\r\n  margin-left: 10px;\r\n  display: inline-block;\r\n}\r\n\r\n\r\n\r\nbutton[_ngcontent-%COMP%] {\r\n  margin-right: 30px;\r\n}\r\n\r\n\r\n\r\n.disable_ripple[_ngcontent-%COMP%]:hover {\r\n  background: currentColor !important;\r\n}\r\n\r\n\r\n\r\n.mat-expansion-panel-header[_ngcontent-%COMP%]   .mat-expanded[_ngcontent-%COMP%] {\r\n  background-color: none;\r\n}\r\n\r\n\r\n\r\ntd[_ngcontent-%COMP%] {\r\n  border: 0px solid white;\r\n}\r\n\r\n\r\n\r\n.table-responsive[_ngcontent-%COMP%]    > .table[_ngcontent-%COMP%] {\r\n  padding: 0 32px 0 24px;\r\n}\r\n\r\n\r\n\r\nmat-expansion-panel-header[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\r\n  text-align: left;\r\n}\r\n\r\n\r\n\r\n.mat-expansion-panel-header-label.mat-expanded[_ngcontent-%COMP%]:hover {\r\n  background: rgb(255, 255, 255);\r\n}\r\n\r\n\r\n\r\n.mat-expansion-panel-header[_ngcontent-%COMP%] {\r\n  background-color: white;\r\n}\r\n\r\n\r\n\r\n.formatH5[_ngcontent-%COMP%]{\r\n  margin-left: 40px;\r\n}\r\n\r\n\r\n\r\n.col[_ngcontent-%COMP%]{\r\n  height: 50px;\r\n  background-color: slategrey;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9tYW51dGVuY2FvLXByb2ctaG9tZS1wYWdlL21hbnV0ZW5jYW8tcHJvZy1ob21lLXBhZ2UuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLDZCQUE2QjtBQUMvQjs7OztBQUlBO0VBQ0UsaUJBQWlCO0VBQ2pCLHFCQUFxQjtBQUN2Qjs7OztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOzs7O0FBRUE7RUFDRSxtQ0FBbUM7QUFDckM7Ozs7QUFFQTtFQUNFLHNCQUFzQjtBQUN4Qjs7OztBQUVBO0VBQ0UsdUJBQXVCO0FBQ3pCOzs7O0FBQ0E7RUFDRSxzQkFBc0I7QUFDeEI7Ozs7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjs7OztBQUVBO0VBQ0UsOEJBQThCO0FBQ2hDOzs7O0FBRUE7RUFDRSx1QkFBdUI7QUFDekI7Ozs7QUFHQTtFQUNFLGlCQUFpQjtBQUNuQjs7OztBQUdBO0VBQ0UsWUFBWTtFQUNaLDJCQUEyQjtBQUM3QiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbWFudXRlbmNhby1wcm9nLWhvbWUtcGFnZS9tYW51dGVuY2FvLXByb2ctaG9tZS1wYWdlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6Om5nLWRlZXAgLm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2UtbGVnYWN5IC5tYXQtZm9ybS1maWVsZC11bmRlcmxpbmUge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG59XHJcblxyXG5cclxuXHJcbmg1IHtcclxuICBtYXJnaW4tbGVmdDogMTBweDtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbn1cclxuXHJcbmJ1dHRvbiB7XHJcbiAgbWFyZ2luLXJpZ2h0OiAzMHB4O1xyXG59XHJcblxyXG4uZGlzYWJsZV9yaXBwbGU6aG92ZXIge1xyXG4gIGJhY2tncm91bmQ6IGN1cnJlbnRDb2xvciAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubWF0LWV4cGFuc2lvbi1wYW5lbC1oZWFkZXIgLm1hdC1leHBhbmRlZCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogbm9uZTtcclxufVxyXG5cclxudGQge1xyXG4gIGJvcmRlcjogMHB4IHNvbGlkIHdoaXRlO1xyXG59XHJcbi50YWJsZS1yZXNwb25zaXZlID4gLnRhYmxlIHtcclxuICBwYWRkaW5nOiAwIDMycHggMCAyNHB4O1xyXG59XHJcbm1hdC1leHBhbnNpb24tcGFuZWwtaGVhZGVyIC50YWJsZSB0ZCB7XHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxufVxyXG5cclxuLm1hdC1leHBhbnNpb24tcGFuZWwtaGVhZGVyLWxhYmVsLm1hdC1leHBhbmRlZDpob3ZlciB7XHJcbiAgYmFja2dyb3VuZDogcmdiKDI1NSwgMjU1LCAyNTUpO1xyXG59XHJcblxyXG4ubWF0LWV4cGFuc2lvbi1wYW5lbC1oZWFkZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG5cclxuLmZvcm1hdEg1e1xyXG4gIG1hcmdpbi1sZWZ0OiA0MHB4O1xyXG59XHJcblxyXG5cclxuLmNvbHtcclxuICBoZWlnaHQ6IDUwcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogc2xhdGVncmV5O1xyXG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ManutencaoProgHomePageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: "app-manutencao-prog-home-page",
          templateUrl: "./manutencao-prog-home-page.component.html",
          styleUrls: ["./manutencao-prog-home-page.component.css"]
        }]
      }], function () {
        return [{
          type: _shared_pedidoMpreventiva_pedidoMpreventiva_service__WEBPACK_IMPORTED_MODULE_2__["PedidosPreventivosService"]
        }, {
          type: _shared_tipoUtilizador_tipoUtilizador_service__WEBPACK_IMPORTED_MODULE_3__["TipoUtilizadorService"]
        }, {
          type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/pedido-mcurativa-add/pedido-mcurativa-add.component.ts":
  /*!***********************************************************************************!*\
    !*** ./src/app/components/pedido-mcurativa-add/pedido-mcurativa-add.component.ts ***!
    \***********************************************************************************/

  /*! exports provided: PedidoMcurativaAddComponent */

  /***/
  function srcAppComponentsPedidoMcurativaAddPedidoMcurativaAddComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PedidoMcurativaAddComponent", function () {
      return PedidoMcurativaAddComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _shared_pedidoMcurativa_teste_pedidoMcurativa_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../shared/pedidoMcurativa-teste/pedidoMcurativa.service */
    "./src/app/shared/pedidoMcurativa-teste/pedidoMcurativa.service.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function PedidoMcurativaAddComponent_option_12_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var item_r58 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", item_r58.IDGrupoMaquinas);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", item_r58.CodigoInterno, "-", item_r58.Descr, "");
      }
    }

    function PedidoMcurativaAddComponent_option_22_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var item_r59 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", item_r59.IDEquipamento);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate3"]("", item_r59.CodigoInterno, "-", item_r59.Marca, " ", item_r59.Descr, "");
      }
    }

    var PedidoMcurativaAddComponent =
    /*#__PURE__*/
    function () {
      function PedidoMcurativaAddComponent(pedidoService, fb, ngZone, router, actRoute) {
        _classCallCheck(this, PedidoMcurativaAddComponent);

        this.pedidoService = pedidoService;
        this.fb = fb;
        this.ngZone = ngZone;
        this.router = router;
        this.actRoute = actRoute;
        this.gruposMaquinaList = [];
        this.equipamentosList = [];
        this.equipamentosFiltrados = [];
      }

      _createClass(PedidoMcurativaAddComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.addPedido();
          this.loadGrupoMaquinas();
          this.loadEquipamentos();
        }
      }, {
        key: "listJustgroupmachine",
        value: function listJustgroupmachine() {
          this.gmID = this.selectedOption;

          if (this.equipamentosFiltrados.length > 0) {
            this.equipamentosFiltrados.length = 0;
          }

          for (var j = 0; j < this.equipamentosList.length; j++) {
            if (this.gmID == this.equipamentosList[j].IDGrupoM) {
              this.equipamentosFiltrados.push(this.equipamentosList[j]);
            }
          }
        }
      }, {
        key: "loadEquipamentos",
        value: function loadEquipamentos() {
          var _this33 = this;

          return this.pedidoService.GetEquipamentosObser().subscribe(function (data) {
            _this33.equipamentosList = data;
          });
        } // lista equipamentos 

      }, {
        key: "loadGrupoMaquinas",
        value: function loadGrupoMaquinas() {
          var _this34 = this;

          return this.pedidoService.GetGruposMaquina().subscribe(function (data) {
            _this34.gruposMaquinaList = data;
            console.log(_this34.gruposMaquinaList);
          });
        }
      }, {
        key: "addPedido",
        value: function addPedido() {
          this.pedidoForm = this.fb.group({
            IDEquipamento: [0],
            Descricao: ['']
          });
        }
      }, {
        key: "submitForm",
        value: function submitForm() {
          this.pedidoService.postPedido(this.pedidoForm.value);
          this.router.navigateByUrl('/pedido-mcurativa-list-teste');
        }
      }]);

      return PedidoMcurativaAddComponent;
    }();

    PedidoMcurativaAddComponent.ɵfac = function PedidoMcurativaAddComponent_Factory(t) {
      return new (t || PedidoMcurativaAddComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_pedidoMcurativa_teste_pedidoMcurativa_service__WEBPACK_IMPORTED_MODULE_1__["PedidosService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]));
    };

    PedidoMcurativaAddComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: PedidoMcurativaAddComponent,
      selectors: [["app-pedido-mcurativa-add"]],
      decls: 30,
      vars: 4,
      consts: [[1, "container", "wrapper", "wrapper2"], [1, "row"], [1, "col-md-12"], [1, "td"], [3, "ngModel", "ngModelChange", "click"], [3, "value", 4, "ngFor", "ngForOf"], ["novalidate", "", 3, "formGroup", "ngSubmit"], ["formControlName", "IDEquipamento", 1, "form-group"], ["value", "0"], [1, "form-group"], ["type", "text", "formControlName", "Descricao", "maxlength", "100", 1, "myText"], ["type", "submit", 1, "btn", "btn-primary"], [3, "value"]],
      template: function PedidoMcurativaAddComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Novo pedido curativo");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Grupo de m\xE1quina");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "select", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function PedidoMcurativaAddComponent_Template_select_ngModelChange_11_listener($event) {
            return ctx.selectedOption = $event;
          })("click", function PedidoMcurativaAddComponent_Template_select_click_11_listener() {
            return ctx.listJustgroupmachine();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, PedidoMcurativaAddComponent_option_12_Template, 2, 3, "option", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "form", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function PedidoMcurativaAddComponent_Template_form_ngSubmit_14_listener() {
            return ctx.submitForm();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Equipamento");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "select", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "option", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Selecione o equipamento");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, PedidoMcurativaAddComponent_option_22_Template, 2, 4, "option", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Descri\xE7\xE3o");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "input", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "button", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Submeter");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.selectedOption);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.gruposMaquinaList);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.pedidoForm);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.equipamentosFiltrados);
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_x"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["MaxLengthValidator"]],
      styles: [".myText[_ngcontent-%COMP%]{\r\n    width: 400px;\r\n    height: 100px\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wZWRpZG8tbWN1cmF0aXZhLWFkZC9wZWRpZG8tbWN1cmF0aXZhLWFkZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksWUFBWTtJQUNaO0FBQ0oiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3BlZGlkby1tY3VyYXRpdmEtYWRkL3BlZGlkby1tY3VyYXRpdmEtYWRkLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubXlUZXh0e1xyXG4gICAgd2lkdGg6IDQwMHB4O1xyXG4gICAgaGVpZ2h0OiAxMDBweFxyXG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PedidoMcurativaAddComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-pedido-mcurativa-add',
          templateUrl: './pedido-mcurativa-add.component.html',
          styleUrls: ['./pedido-mcurativa-add.component.css']
        }]
      }], function () {
        return [{
          type: _shared_pedidoMcurativa_teste_pedidoMcurativa_service__WEBPACK_IMPORTED_MODULE_1__["PedidosService"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/pedido-mcurativa-list/pedido-mcurativa-list-teste.component.ts":
  /*!*******************************************************************************************!*\
    !*** ./src/app/components/pedido-mcurativa-list/pedido-mcurativa-list-teste.component.ts ***!
    \*******************************************************************************************/

  /*! exports provided: PedidoMcurativaListTesteComponent */

  /***/
  function srcAppComponentsPedidoMcurativaListPedidoMcurativaListTesteComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PedidoMcurativaListTesteComponent", function () {
      return PedidoMcurativaListTesteComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var print_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! print-js */
    "./node_modules/print-js/dist/print.js");
    /* harmony import */


    var print_js__WEBPACK_IMPORTED_MODULE_1___default =
    /*#__PURE__*/
    __webpack_require__.n(print_js__WEBPACK_IMPORTED_MODULE_1__);
    /* harmony import */


    var _intervencao_curativa_add_intervencao_curativa_add_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../intervencao-curativa-add/intervencao-curativa-add.component */
    "./src/app/components/intervencao-curativa-add/intervencao-curativa-add.component.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _shared_pedidoMcurativa_teste_pedidoMcurativa_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../shared/pedidoMcurativa-teste/pedidoMcurativa.service */
    "./src/app/shared/pedidoMcurativa-teste/pedidoMcurativa.service.ts");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
    /* harmony import */


    var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/material/expansion */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/expansion.js");
    /* harmony import */


    var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/material/progress-spinner */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-spinner.js");
    /* harmony import */


    var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/material/paginator */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/paginator.js");

    function PedidoMcurativaListTesteComponent_mat_spinner_0_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mat-spinner", 22);
      }
    }

    function PedidoMcurativaListTesteComponent_p_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "aguarde ...");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function PedidoMcurativaListTesteComponent_option_22_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var item_r40 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", item_r40.IDGrupoMaquinas);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", item_r40.CodigoInterno, " - ", item_r40.Descr, "");
      }
    }

    function PedidoMcurativaListTesteComponent_ng_container_46_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "strong");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "SEM RESULTADOS");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }
    }

    function PedidoMcurativaListTesteComponent_div_47_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "table", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "thead");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "th", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Utilizador");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "th", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Equipamento");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "th", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Descri\xE7\xE3o");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "th", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Data de avaria");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "th", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Estado");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", ctx_r37.isLoading);
      }
    }

    function PedidoMcurativaListTesteComponent_mat_expansion_panel_49_tr_40_ng_container_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r49 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "th", 43);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td", 34);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td", 36);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "td", 44);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](11, "date");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "td", 44);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](14, "date");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "td", 45);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "button", 46);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PedidoMcurativaListTesteComponent_mat_expansion_panel_49_tr_40_ng_container_1_Template_button_click_18_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r49);

          var inter_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          var ctx_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r47.deleteIntervencao(inter_r44.ID);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "mat-icon", 47);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "delete");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var ctx_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        var inter_r44 = ctx_r50.$implicit;
        var j_r45 = ctx_r50.index;

        var ctx_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](inter_r44.ID);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", inter_r44.UtilizadorIDUser, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](inter_r44.Descricao);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r46.changeIDtoDescription(j_r45), " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](11, 7, inter_r44.DataInicioIntervencao, "dd/MM/yyyy HH:mm"), " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](14, 10, inter_r44.DataFimIntervencao, "dd/MM/yyyy HH:mm"), " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r46.getTimeDiff(inter_r44.ID), " ");
      }
    }

    function PedidoMcurativaListTesteComponent_mat_expansion_panel_49_tr_40_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PedidoMcurativaListTesteComponent_mat_expansion_panel_49_tr_40_ng_container_1_Template, 21, 13, "ng-container", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var inter_r44 = ctx.$implicit;

        var item_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", inter_r44.IDPedido == item_r41.IDPedido);
      }
    }

    function PedidoMcurativaListTesteComponent_mat_expansion_panel_49_Template(rf, ctx) {
      if (rf & 1) {
        var _r53 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-expansion-panel");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-expansion-panel-header", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "table", 32);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "tbody");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td", 34);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "td", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "td", 36);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](13, "date");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "td", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "body", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "table", 37);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "thead");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "th", 38);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "#");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "th", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Utilizador");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "th", 39);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Descri\xE7\xE3o");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "th", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Estado");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "th", 40);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Inicio da interven\xE7\xE3o");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "th", 40);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Fim da interven\xE7\xE3o");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "th", 41);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Dura\xE7\xE3o");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "button", 42);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PedidoMcurativaListTesteComponent_mat_expansion_panel_49_Template_button_click_36_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r53);

          var item_r41 = ctx.$implicit;

          var ctx_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r52.openDialog(item_r41.IDPedido);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, " + ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "tbody");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](40, PedidoMcurativaListTesteComponent_mat_expansion_panel_49_tr_40_Template, 2, 1, "tr", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var item_r41 = ctx.$implicit;
        var i_r42 = ctx.index;

        var ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r41.UtilizadorIDUser);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r38.changeIDtoInternalCode(i_r42), " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r41.Descricao);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](13, 6, item_r41.DataPedido, "dd/MM/yyyy HH:mm"), " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r38.checkStateOfIntervention(i_r42), " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r38.intervencoes);
      }
    }

    function PedidoMcurativaListTesteComponent_mat_paginator_50_Template(rf, ctx) {
      if (rf & 1) {
        var _r55 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-paginator", 48);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("page", function PedidoMcurativaListTesteComponent_mat_paginator_50_Template_mat_paginator_page_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r55);

          var ctx_r54 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r54.onChangedPage($event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("length", ctx_r39.totalPedidos)("pageSize", ctx_r39.pedidosPerPage)("pageSizeOptions", ctx_r39.pageSizeOptions);
      }
    }

    var _c0 = function _c0() {
      return ["/pedido-mcurativa-add"];
    };

    var PedidoMcurativaListTesteComponent =
    /*#__PURE__*/
    function () {
      function PedidoMcurativaListTesteComponent(pedidosService, dialog, route) {
        _classCallCheck(this, PedidoMcurativaListTesteComponent);

        this.pedidosService = pedidosService;
        this.dialog = dialog;
        this.route = route;
        this.isLoading = false;
        this.pedidos = [];
        this.equipamentosList = [];
        this.estadoIntervencaoList = [];
        this.intervencoes = [];
        this.intervencoesFiltradas = [];
        this.gruposMaquinaList = [];
        this.pageSizeOptions = [5, 8, 12];
        this.totalPedidos = 0;
        this.pedidosPerPage = 2;
        this.currentPage = 1;
        this.selectedOptionGrupo = 0;
        this.selectedOptionDateInicio = "01-01-1990";
        this.selectedOptionDateFim = "01-01-1990";
      }

      _createClass(PedidoMcurativaListTesteComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this35 = this;

          this.isLoading = true;
          this.pedidosService.getPedidos(this.pedidosPerPage, this.currentPage, 0, "01-01-1990", "01-01-1990");
          this.pedidosSub = this.pedidosService.getPedidoUpdateListener().subscribe(function (pedidoData) {
            _this35.isLoading = false;
            _this35.pedidos = pedidoData.pedidos;
            _this35.totalPedidos = pedidoData.CountPedidos;
          });
          this.pedidosService.getIntervencoes();
          this.intervencoesSub = this.pedidosService.getIntervencaoUpdateListener().subscribe(function (intervencoes) {
            _this35.intervencoes = intervencoes;
          }); //Carregamento de outros métodos.

          this.loadEstadosIntervencao();
          this.loadEquip();
          this.loadGrupoMaquinas();
        }
      }, {
        key: "printPedidos",
        value: function printPedidos() {
          var myArray = [];
          console.log("Pedidos ", this.pedidos);

          for (var i = 0; i < this.pedidos.length; i++) {
            var pedidoPrint = {};
            var datepipe = new _angular_common__WEBPACK_IMPORTED_MODULE_3__["DatePipe"]('en-US');
            /* IDPedido: number;
            UtilizadorIDUser: string;
            IDEquipamento: number;
            Descricao: string;
            DataPedido: string; */
            //let convertedDataLimite = new Date(dataPedidoFormatada);

            var dataPedidoFormatada = datepipe.transform(this.pedidos[i].DataPedido, 'dd-MM-yyyy HH:mm'); //let convertedDataPedidoFormatada = new Date(dataPedidoFormatada);

            pedidoPrint.DataPedido = '';
            pedidoPrint.Descricao = '';
            pedidoPrint.UtilizadorIDUser = '';
            pedidoPrint.IDEquipamento = '';
            pedidoPrint.DataPedido = dataPedidoFormatada;
            pedidoPrint.Descricao = this.pedidos[i].Descricao;
            pedidoPrint.UtilizadorIDUser = this.pedidos[i].UtilizadorIDUser;

            for (var j = 0; j < this.equipamentosList.length; j++) {
              if (this.pedidos[i].IDEquipamento == this.equipamentosList[j].IDEquipamento) {
                pedidoPrint.IDEquipamento = this.equipamentosList[j].Marca + " " + this.equipamentosList[j].Descr;
              }
            }

            myArray.push(pedidoPrint);
            console.log(myArray);
          }

          print_js__WEBPACK_IMPORTED_MODULE_1__({
            printable: myArray,
            properties: [{
              field: 'UtilizadorIDUser',
              displayName: '#'
            }, {
              field: 'IDEquipamento',
              displayName: 'Equipamento'
            }, {
              field: 'Descricao',
              displayName: 'Descrição'
            }, {
              field: 'DataPedido',
              displayName: 'Data pedido'
            }],
            type: 'json',
            header: 'ACATEL - Pedidos curativos'
          });
        }
      }, {
        key: "limparFiltros",
        value: function limparFiltros() {
          this.ngOnInit();
          this.selectedOptionGrupo = 0;
          this.selectedOptionDateInicio = "01-01-1990";
          this.selectedOptionDateFim = "01-01-1990";
        }
      }, {
        key: "procuraAvancada",
        value: function procuraAvancada() {
          var _this36 = this;

          console.log(this.selectedOptionGrupo, "Grupo selecionado");
          this.isLoading = true;
          this.pedidosService.getPedidos(this.pedidosPerPage, this.currentPage, this.selectedOptionGrupo, this.selectedOptionDateInicio, this.selectedOptionDateFim);
          this.pedidosSub = this.pedidosService.getPedidoUpdateListener().subscribe(function (pedidoData) {
            _this36.isLoading = false;
            _this36.pedidos = pedidoData.pedidos;
            _this36.totalPedidos = pedidoData.CountPedidos;
          });
        }
      }, {
        key: "getTimeDiff",
        value: function getTimeDiff(a) {
          for (var j = 0; j < this.intervencoes.length; j++) {
            if (this.intervencoes[j].ID == a) {
              var endDate = new Date();
              endDate = new Date(this.intervencoes[j].DataFimIntervencao);
              var beginDate = new Date();
              beginDate = new Date(this.intervencoes[j].DataInicioIntervencao);
              var diffMs = endDate.getTime() - beginDate.getTime(); // milliseconds

              var diffMinutos = Math.round(diffMs / 60000);
              var hours = diffMinutos / 60;
              var rhours = Math.floor(hours);
              var minutes = (hours - rhours) * 60;
              var rminutes = Math.round(minutes);
            }
          }

          if (rhours == 0) {
            return rminutes + "minuto(s)";
          }

          if (rhours >= 1 && rminutes == 0) return rhours + "h";
          if (rhours >= 1 && rminutes > 0) return rhours + " h:" + rminutes + "m";
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.pedidosSub.unsubscribe();
          this.intervencoesSub.unsubscribe();
        }
      }, {
        key: "onChangedPage",
        value: function onChangedPage(pageData) {
          this.currentPage = pageData.pageIndex + 1;
          this.pedidosPerPage = pageData.pageSize;
          this.pedidosService.getPedidos(this.pedidosPerPage, this.currentPage, this.selectedOptionGrupo, this.selectedOptionDateInicio, this.selectedOptionDateFim);
        }
      }, {
        key: "openDialog",
        value: function openDialog(idPedido) {
          this.dialog.open(_intervencao_curativa_add_intervencao_curativa_add_component__WEBPACK_IMPORTED_MODULE_2__["IntervencaoCurativaAddComponent"], {
            data: {
              idPedido: idPedido
            }
          });
        }
      }, {
        key: "deleteIntervencao",
        value: function deleteIntervencao(ID) {
          return this.pedidosService.DeleteIntervencao(ID).subscribe(function (res) {});
        }
      }, {
        key: "loadGrupoMaquinas",
        value: function loadGrupoMaquinas() {
          var _this37 = this;

          return this.pedidosService.GetGruposMaquina().subscribe(function (data) {
            _this37.gruposMaquinaList = data;
            console.log(_this37.gruposMaquinaList);
          });
        } //## MÉTODOS ## //
        //Troca no front-end, o ID do equipamento pelo código interno da empresa

      }, {
        key: "changeIDtoInternalCode",
        value: function changeIDtoInternalCode(equip) {
          for (var j = 0; j < this.equipamentosList.length; j++) {
            if (this.pedidos[equip].IDEquipamento == this.equipamentosList[j].IDEquipamento) {
              return this.equipamentosList[j].CodigoInterno + " - " + this.equipamentosList[j].Marca // +
              ;
            }
          }
        } //Mostra os estados de intervenção ## melhorar esta parte.

      }, {
        key: "checkStateOfIntervention",
        value: function checkStateOfIntervention(a) {
          if (this.intervencoesFiltradas.length > 0) {
            this.intervencoesFiltradas.length = 0;
          }

          for (var j = 0; j < this.intervencoes.length; j++) {
            if (this.pedidos[a].IDPedido == this.intervencoes[j].IDPedido) {
              this.intervencoesFiltradas.push(this.intervencoes[j]);
            }
          }

          if (this.intervencoesFiltradas.length > 0) {
            var maxI = this.intervencoesFiltradas.reduce(function (prev, current) {
              return prev.IDPedido > current.IDPedido ? prev : current;
            });
          }

          if (this.intervencoesFiltradas.length == 0) return "S/I";else if (maxI.IDEstadoIntervencao == 2) return "Aguarda";else if (maxI.IDEstadoIntervencao == 3) return "Fechado";
        } //Troca o ID do estado de intervenção, pela sua descrição correspondente.

      }, {
        key: "changeIDtoDescription",
        value: function changeIDtoDescription(estado) {
          for (var j = 0; j < this.equipamentosList.length; j++) {
            if (this.intervencoes[estado].IDEstadoIntervencao == this.estadoIntervencaoList[j].ID) {
              return this.estadoIntervencaoList[j].Descr;
            }
          }
        } //lista estados de intervenção.

      }, {
        key: "loadEstadosIntervencao",
        value: function loadEstadosIntervencao() {
          var _this38 = this;

          return this.pedidosService.GetEstadosIntervencao().subscribe(function (data) {
            _this38.estadoIntervencaoList = data;
          });
        } // lista equipamentos.

      }, {
        key: "loadEquip",
        value: function loadEquip() {
          var _this39 = this;

          return this.pedidosService.GetEquipamentosObser().subscribe(function (data) {
            _this39.equipamentosList = data;
          });
        }
      }]);

      return PedidoMcurativaListTesteComponent;
    }();

    PedidoMcurativaListTesteComponent.ɵfac = function PedidoMcurativaListTesteComponent_Factory(t) {
      return new (t || PedidoMcurativaListTesteComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_pedidoMcurativa_teste_pedidoMcurativa_service__WEBPACK_IMPORTED_MODULE_4__["PedidosService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"]));
    };

    PedidoMcurativaListTesteComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: PedidoMcurativaListTesteComponent,
      selectors: [["app-pedido-mcurativa-list-teste"]],
      decls: 51,
      vars: 12,
      consts: [["style", "margin: 0 auto;", "mode", "indeterminate", "color", "accent", 4, "ngIf"], ["style", "text-align: center;", 4, "ngIf"], [1, "inner"], ["id", "main"], ["id", "side_bar"], [1, "formatH5", 2, "text-align", "right"], ["type", "button", 1, "btn", "btn-outline-primary", 2, "float", "right", 3, "routerLink"], ["type", "button", 1, "btn", "btn-outline-primary", 2, "float", "right", 3, "click"], [1, "rowSelectTags"], [1, "column"], ["for", "AlignFilter", 1, "AlignFilter"], ["id", "AlignFilter", 1, "AlignFilter", 2, "width", "180px", 3, "ngModel", "ngModelChange"], ["selected", ""], [3, "value", 4, "ngFor", "ngForOf"], ["type", "Date", "select", "", "id", "AlignFilter", 1, "AlignFilter", 2, "width", "180px", 3, "ngModel", "ngModelChange"], [1, "column2"], ["mat-icon-button", "", 1, "AlignFilter", 3, "click"], ["mat-icon-button", "", 3, "click"], [4, "ngIf"], ["multi", "false"], [4, "ngFor", "ngForOf"], ["class", "col", 3, "length", "pageSize", "pageSizeOptions", "page", 4, "ngIf"], ["mode", "indeterminate", "color", "accent", 2, "margin", "0 auto"], [2, "text-align", "center"], [3, "value"], [1, "table-responsive"], [1, "table", "table-bordered", 2, "width", "100%", 3, "hidden"], ["scope", "col", "width", "80"], ["scope", "col", "width", "220"], ["scope", "col", "width", "320"], ["scope", "col", "width", "150"], ["collapsedHeight", "*", "expandedHeight", "*"], [1, "table"], ["width", "80", 1, "tb-td-txt"], ["width", "250", 1, "tb-td-txt"], ["width", "375", 1, "tb-td-txt"], ["width", "150", 1, "tb-td-txt"], [1, "table", 2, "width", "80%"], ["scope", "col", "width", "25"], ["scope", "col", "width", "250"], ["scope", "col", "width", "170"], ["scope", "col", "width", "100"], ["type", "button", 1, "btn", "btn-success", "btn-sm", "move-right", 2, "position", "absolute", "right", "0", "height", "30px", "width", "30px", 3, "click"], ["scope", "row", "width", "25"], ["width", "170", 1, "tb-td-txt"], ["width", "100", 1, "tb-td-txt"], ["type", "button", "color", "accent", 3, "click"], ["_ngcontent-oax-c0", "", "role", "img", "aria-hidden", "true", 1, "mat-icon", "notranslate", "material-icons", "mat-icon-no-color"], [1, "col", 3, "length", "pageSize", "pageSizeOptions", "page"]],
      template: function PedidoMcurativaListTesteComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, PedidoMcurativaListTesteComponent_mat_spinner_0_Template, 1, 0, "mat-spinner", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PedidoMcurativaListTesteComponent_p_1_Template, 2, 0, "p", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h5", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Pedidos curativos");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " Novo pedido ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PedidoMcurativaListTesteComponent_Template_button_click_11_listener() {
            return ctx.printPedidos();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " Imprimir ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "label", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Grupo de m\xE1quina:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "select", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function PedidoMcurativaListTesteComponent_Template_select_ngModelChange_19_listener($event) {
            return ctx.selectedOptionGrupo = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "option", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "0");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, PedidoMcurativaListTesteComponent_option_22_Template, 2, 3, "option", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "label", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "de:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "input", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function PedidoMcurativaListTesteComponent_Template_input_ngModelChange_27_listener($event) {
            return ctx.selectedOptionDateInicio = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "label", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "at\xE9:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "input", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function PedidoMcurativaListTesteComponent_Template_input_ngModelChange_32_listener($event) {
            return ctx.selectedOptionDateFim = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "button", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PedidoMcurativaListTesteComponent_Template_button_click_35_listener() {
            return ctx.procuraAvancada();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "search");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "button", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PedidoMcurativaListTesteComponent_Template_button_click_40_listener() {
            return ctx.limparFiltros();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "delete_sweep");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](46, PedidoMcurativaListTesteComponent_ng_container_46_Template, 10, 0, "ng-container", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](47, PedidoMcurativaListTesteComponent_div_47_Template, 15, 1, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "mat-accordion", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](49, PedidoMcurativaListTesteComponent_mat_expansion_panel_49_Template, 41, 9, "mat-expansion-panel", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](50, PedidoMcurativaListTesteComponent_mat_paginator_50_Template, 1, 3, "mat-paginator", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isLoading);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isLoading);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](11, _c0));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.selectedOptionGrupo);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.gruposMaquinaList);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.selectedOptionDateInicio);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.selectedOptionDateFim);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.totalPedidos == 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.totalPedidos > 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.pedidos);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.pedidos.length > 0);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterLink"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵangular_packages_forms_forms_x"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["DefaultValueAccessor"], _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__["MatIcon"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_10__["MatAccordion"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_11__["MatSpinner"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_10__["MatExpansionPanel"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_10__["MatExpansionPanelHeader"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_12__["MatPaginator"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["DatePipe"]],
      styles: ["mat-paginator[_ngcontent-%COMP%] {\r\n  margin-top: 1rem;\r\n}\r\n\r\n  .mat-form-field-appearance-legacy .mat-form-field-underline {\r\n  background-color: transparent;\r\n}\r\n\r\nh5[_ngcontent-%COMP%] {\r\n  margin-left: 10px;\r\n  display: inline-block;\r\n}\r\n\r\nbutton[_ngcontent-%COMP%] {\r\n  margin-right: 30px;\r\n}\r\n\r\n.disable_ripple[_ngcontent-%COMP%]:hover {\r\n  background: currentColor !important;\r\n}\r\n\r\n.mat-expansion-panel-header[_ngcontent-%COMP%]   .mat-expanded[_ngcontent-%COMP%] {\r\n  background-color: none;\r\n}\r\n\r\ntd[_ngcontent-%COMP%] {\r\n  border: 0px solid white;\r\n}\r\n\r\n.table-responsive[_ngcontent-%COMP%]    > .table[_ngcontent-%COMP%] {\r\n  padding: 0 32px 0 24px;\r\n}\r\n\r\nmat-expansion-panel-header[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\r\n  text-align: left;\r\n}\r\n\r\n.mat-expansion-panel-header-label.mat-expanded[_ngcontent-%COMP%]:hover {\r\n  background: rgb(255, 255, 255);\r\n}\r\n\r\n.mat-expansion-panel-header[_ngcontent-%COMP%] {\r\n  background-color: white;\r\n}\r\n\r\n.formatH5[_ngcontent-%COMP%]{\r\n  margin-left: 40px;\r\n}\r\n\r\n.column[_ngcontent-%COMP%] {\r\n  float: left;\r\n  width: 15%;\r\n  padding: 1px;\r\n}\r\n\r\n.column2[_ngcontent-%COMP%]{\r\n  float: left;\r\n  width: 6%;\r\n  padding: 1px;\r\n}\r\n\r\n\r\n\r\n.row[_ngcontent-%COMP%]::after {\r\n  content: \"\";\r\n  clear: both;\r\n  display: table;\r\n}\r\n\r\n.AlignFilter[_ngcontent-%COMP%]{\r\n  margin-left: 40px;\r\n}\r\n\r\n.AlignFilter1[_ngcontent-%COMP%]{\r\n  margin-left:40px;\r\n}\r\n\r\n.col[_ngcontent-%COMP%]{\r\n  height: 50px;\r\n  background-color: slategrey;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wZWRpZG8tbWN1cmF0aXZhLWxpc3QvcGVkaWRvLW1jdXJhdGl2YS1saXN0LXRlc3RlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSw2QkFBNkI7QUFDL0I7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIscUJBQXFCO0FBQ3ZCOztBQUdBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsbUNBQW1DO0FBQ3JDOztBQUVBO0VBQ0Usc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsdUJBQXVCO0FBQ3pCOztBQUNBO0VBQ0Usc0JBQXNCO0FBQ3hCOztBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsOEJBQThCO0FBQ2hDOztBQUVBO0VBQ0UsdUJBQXVCO0FBQ3pCOztBQUdBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUlBO0VBQ0UsV0FBVztFQUNYLFVBQVU7RUFDVixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsU0FBUztFQUNULFlBQVk7QUFDZDs7QUFFQSx3Q0FBd0M7O0FBQ3hDO0VBQ0UsV0FBVztFQUNYLFdBQVc7RUFDWCxjQUFjO0FBQ2hCOztBQUdBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUdBO0VBQ0UsWUFBWTtFQUNaLDJCQUEyQjtBQUM3Qjs7QUFDQTs7Ozs7Ozs7O0VBU0UiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3BlZGlkby1tY3VyYXRpdmEtbGlzdC9wZWRpZG8tbWN1cmF0aXZhLWxpc3QtdGVzdGUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIm1hdC1wYWdpbmF0b3Ige1xyXG4gIG1hcmdpbi10b3A6IDFyZW07XHJcbn1cclxuXHJcbjo6bmctZGVlcCAubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1sZWdhY3kgLm1hdC1mb3JtLWZpZWxkLXVuZGVybGluZSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbn1cclxuXHJcbmg1IHtcclxuICBtYXJnaW4tbGVmdDogMTBweDtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbn1cclxuXHJcblxyXG5idXR0b24ge1xyXG4gIG1hcmdpbi1yaWdodDogMzBweDtcclxufVxyXG5cclxuLmRpc2FibGVfcmlwcGxlOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kOiBjdXJyZW50Q29sb3IgIWltcG9ydGFudDtcclxufVxyXG5cclxuLm1hdC1leHBhbnNpb24tcGFuZWwtaGVhZGVyIC5tYXQtZXhwYW5kZWQge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IG5vbmU7XHJcbn1cclxuXHJcbnRkIHtcclxuICBib3JkZXI6IDBweCBzb2xpZCB3aGl0ZTtcclxufVxyXG4udGFibGUtcmVzcG9uc2l2ZSA+IC50YWJsZSB7XHJcbiAgcGFkZGluZzogMCAzMnB4IDAgMjRweDtcclxufVxyXG5tYXQtZXhwYW5zaW9uLXBhbmVsLWhlYWRlciAudGFibGUgdGQge1xyXG4gIHRleHQtYWxpZ246IGxlZnQ7XHJcbn1cclxuXHJcbi5tYXQtZXhwYW5zaW9uLXBhbmVsLWhlYWRlci1sYWJlbC5tYXQtZXhwYW5kZWQ6aG92ZXIge1xyXG4gIGJhY2tncm91bmQ6IHJnYigyNTUsIDI1NSwgMjU1KTtcclxufVxyXG5cclxuLm1hdC1leHBhbnNpb24tcGFuZWwtaGVhZGVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuXHJcbi5mb3JtYXRINXtcclxuICBtYXJnaW4tbGVmdDogNDBweDtcclxufVxyXG5cclxuXHJcblxyXG4uY29sdW1uIHtcclxuICBmbG9hdDogbGVmdDtcclxuICB3aWR0aDogMTUlO1xyXG4gIHBhZGRpbmc6IDFweDtcclxufVxyXG5cclxuLmNvbHVtbjJ7XHJcbiAgZmxvYXQ6IGxlZnQ7XHJcbiAgd2lkdGg6IDYlO1xyXG4gIHBhZGRpbmc6IDFweDtcclxufVxyXG5cclxuLyogQ2xlYXIgZmxvYXRzIGFmdGVyIGltYWdlIGNvbnRhaW5lcnMgKi9cclxuLnJvdzo6YWZ0ZXIge1xyXG4gIGNvbnRlbnQ6IFwiXCI7XHJcbiAgY2xlYXI6IGJvdGg7XHJcbiAgZGlzcGxheTogdGFibGU7XHJcbn1cclxuXHJcblxyXG4uQWxpZ25GaWx0ZXJ7XHJcbiAgbWFyZ2luLWxlZnQ6IDQwcHg7XHJcbn1cclxuXHJcbi5BbGlnbkZpbHRlcjF7XHJcbiAgbWFyZ2luLWxlZnQ6NDBweDtcclxufVxyXG5cclxuXHJcbi5jb2x7XHJcbiAgaGVpZ2h0OiA1MHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHNsYXRlZ3JleTtcclxufVxyXG4vKlxyXG5tYXQtZXhwYW5zaW9uLXBhbmVsLWhlYWRlciB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1hcmdpbjogYXV0bztcclxuXHJcbn1cclxubWF0LWV4cGFuc2lvbi1wYW5lbHtcclxuICAgIHdpZHRoOiA5MCU7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbn0qL1xyXG4iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PedidoMcurativaListTesteComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: "app-pedido-mcurativa-list-teste",
          templateUrl: "./pedido-mcurativa-list-teste.component.html",
          styleUrls: ["./pedido-mcurativa-list-teste.component.css"]
        }]
      }], function () {
        return [{
          type: _shared_pedidoMcurativa_teste_pedidoMcurativa_service__WEBPACK_IMPORTED_MODULE_4__["PedidosService"]
        }, {
          type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialog"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/pedido-mpreventiva-add/pedido-mpreventiva-add.component.ts":
  /*!***************************************************************************************!*\
    !*** ./src/app/components/pedido-mpreventiva-add/pedido-mpreventiva-add.component.ts ***!
    \***************************************************************************************/

  /*! exports provided: PedidoMpreventivaAddComponent */

  /***/
  function srcAppComponentsPedidoMpreventivaAddPedidoMpreventivaAddComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PedidoMpreventivaAddComponent", function () {
      return PedidoMpreventivaAddComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _shared_pedidoMpreventiva_pedidoMpreventiva_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../shared/pedidoMpreventiva/pedidoMpreventiva.service */
    "./src/app/shared/pedidoMpreventiva/pedidoMpreventiva.service.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function PedidoMpreventivaAddComponent_option_12_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var item_r93 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", item_r93.IDGrupoMaquinas);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", item_r93.CodigoInterno, "-", item_r93.Descr, "");
      }
    }

    function PedidoMpreventivaAddComponent_option_22_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var item_r94 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", item_r94.IDEquipamento);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate3"]("", item_r94.CodigoInterno, "-", item_r94.Marca, " ", item_r94.Descr, "");
      }
    }

    var PedidoMpreventivaAddComponent =
    /*#__PURE__*/
    function () {
      function PedidoMpreventivaAddComponent(pedidoService, fb, ngZone, router, actRoute) {
        _classCallCheck(this, PedidoMpreventivaAddComponent);

        this.pedidoService = pedidoService;
        this.fb = fb;
        this.ngZone = ngZone;
        this.router = router;
        this.actRoute = actRoute;
        this.gruposMaquinaList = [];
        this.equipamentosList = [];
        this.equipamentosFiltrados = [];
      }

      _createClass(PedidoMpreventivaAddComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.addPedido();
          this.loadGrupoMaquinas();
          this.loadEquipamentos();
        }
      }, {
        key: "listJustgroupmachine",
        value: function listJustgroupmachine() {
          this.gmID = this.selectedOption;

          if (this.equipamentosFiltrados.length > 0) {
            this.equipamentosFiltrados.length = 0;
          }

          for (var j = 0; j < this.equipamentosList.length; j++) {
            if (this.gmID == this.equipamentosList[j].IDGrupoM) {
              this.equipamentosFiltrados.push(this.equipamentosList[j]);
            }
          }
        }
      }, {
        key: "loadEquipamentos",
        value: function loadEquipamentos() {
          var _this40 = this;

          return this.pedidoService.GetEquipamentosObser().subscribe(function (data) {
            _this40.equipamentosList = data;
          });
        }
      }, {
        key: "loadGrupoMaquinas",
        value: function loadGrupoMaquinas() {
          var _this41 = this;

          return this.pedidoService.GetGruposMaquina().subscribe(function (data) {
            _this41.gruposMaquinaList = data;
            console.log(_this41.gruposMaquinaList);
          });
        }
      }, {
        key: "addPedido",
        value: function addPedido() {
          this.pedidoForm = this.fb.group({
            IDEquipamento: [0],
            Descricao: ['']
          });
        }
      }, {
        key: "submitForm",
        value: function submitForm() {
          this.pedidoService.postPedido(this.pedidoForm.value);
          this.router.navigateByUrl('/pedido-preventiva-list');
        }
      }]);

      return PedidoMpreventivaAddComponent;
    }();

    PedidoMpreventivaAddComponent.ɵfac = function PedidoMpreventivaAddComponent_Factory(t) {
      return new (t || PedidoMpreventivaAddComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_pedidoMpreventiva_pedidoMpreventiva_service__WEBPACK_IMPORTED_MODULE_1__["PedidosPreventivosService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]));
    };

    PedidoMpreventivaAddComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: PedidoMpreventivaAddComponent,
      selectors: [["app-pedido-mpreventiva-add"]],
      decls: 30,
      vars: 4,
      consts: [[1, "container", "wrapper", "wrapper2"], [1, "row"], [1, "col-md-12"], [1, "td"], [3, "ngModel", "ngModelChange", "click"], [3, "value", 4, "ngFor", "ngForOf"], ["novalidate", "", 3, "formGroup", "ngSubmit"], ["formControlName", "IDEquipamento", 1, "form-group"], ["value", "0"], [1, "form-group"], ["type", "text", "formControlName", "Descricao", "maxlength", "100", 1, "myText"], ["type", "submit", 1, "btn", "btn-primary"], [3, "value"]],
      template: function PedidoMpreventivaAddComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Novo pedido preventivo");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Grupo de m\xE1quina");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "select", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function PedidoMpreventivaAddComponent_Template_select_ngModelChange_11_listener($event) {
            return ctx.selectedOption = $event;
          })("click", function PedidoMpreventivaAddComponent_Template_select_click_11_listener() {
            return ctx.listJustgroupmachine();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, PedidoMpreventivaAddComponent_option_12_Template, 2, 3, "option", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "form", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function PedidoMpreventivaAddComponent_Template_form_ngSubmit_14_listener() {
            return ctx.submitForm();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Equipamento");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "select", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "option", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Selecione o equipamento");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, PedidoMpreventivaAddComponent_option_22_Template, 2, 4, "option", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Descri\xE7\xE3o");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "input", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "button", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Submeter");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.selectedOption);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.gruposMaquinaList);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.pedidoForm);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.equipamentosFiltrados);
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_x"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["MaxLengthValidator"]],
      styles: [".myText[_ngcontent-%COMP%]{\r\n    width: 400px;\r\n    height: 100px\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wZWRpZG8tbXByZXZlbnRpdmEtYWRkL3BlZGlkby1tcHJldmVudGl2YS1hZGQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFlBQVk7SUFDWjtBQUNKIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9wZWRpZG8tbXByZXZlbnRpdmEtYWRkL3BlZGlkby1tcHJldmVudGl2YS1hZGQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5teVRleHR7XHJcbiAgICB3aWR0aDogNDAwcHg7XHJcbiAgICBoZWlnaHQ6IDEwMHB4XHJcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PedidoMpreventivaAddComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-pedido-mpreventiva-add',
          templateUrl: './pedido-mpreventiva-add.component.html',
          styleUrls: ['./pedido-mpreventiva-add.component.css']
        }]
      }], function () {
        return [{
          type: _shared_pedidoMpreventiva_pedidoMpreventiva_service__WEBPACK_IMPORTED_MODULE_1__["PedidosPreventivosService"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/pedido-preventiva-list/pedido-preventiva-list.component.ts":
  /*!***************************************************************************************!*\
    !*** ./src/app/components/pedido-preventiva-list/pedido-preventiva-list.component.ts ***!
    \***************************************************************************************/

  /*! exports provided: PedidoPreventivaListComponent */

  /***/
  function srcAppComponentsPedidoPreventivaListPedidoPreventivaListComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PedidoPreventivaListComponent", function () {
      return PedidoPreventivaListComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var print_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! print-js */
    "./node_modules/print-js/dist/print.js");
    /* harmony import */


    var print_js__WEBPACK_IMPORTED_MODULE_2___default =
    /*#__PURE__*/
    __webpack_require__.n(print_js__WEBPACK_IMPORTED_MODULE_2__);
    /* harmony import */


    var _intervencao_preventiva_add_intervencao_preventiva_add_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../intervencao-preventiva-add/intervencao-preventiva-add.component */
    "./src/app/components/intervencao-preventiva-add/intervencao-preventiva-add.component.ts");
    /* harmony import */


    var _shared_pedidoMpreventiva_pedidoMpreventiva_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../shared/pedidoMpreventiva/pedidoMpreventiva.service */
    "./src/app/shared/pedidoMpreventiva/pedidoMpreventiva.service.ts");
    /* harmony import */


    var _shared_tipoUtilizador_tipoUtilizador_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../shared/tipoUtilizador/tipoUtilizador.service */
    "./src/app/shared/tipoUtilizador/tipoUtilizador.service.ts");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
    /* harmony import */


    var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/material/expansion */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/expansion.js");
    /* harmony import */


    var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/material/progress-spinner */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-spinner.js");
    /* harmony import */


    var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @angular/material/paginator */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/paginator.js");

    function PedidoPreventivaListComponent_mat_spinner_0_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mat-spinner", 22);
      }
    }

    function PedidoPreventivaListComponent_p_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "aguarde ...");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function PedidoPreventivaListComponent_option_24_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var item_r75 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", item_r75.IDGrupoMaquinas);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", item_r75.CodigoInterno, " - ", item_r75.Descr, " ");
      }
    }

    function PedidoPreventivaListComponent_ng_container_48_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "strong");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "SEM RESULTADOS");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }
    }

    function PedidoPreventivaListComponent_div_49_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "table", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "thead");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "th", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "User");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "th", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Equipamento");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "th", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Descri\xE7\xE3o");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "th", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Data");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "th", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Limite");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "th", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Estado");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r72 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", ctx_r72.isLoading);
      }
    }

    function PedidoPreventivaListComponent_mat_expansion_panel_51_tr_43_ng_container_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r84 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "th", 43);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td", 44);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td", 36);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "td", 45);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](11, "date");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "td", 45);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](14, "date");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "td", 46);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "button", 47);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PedidoPreventivaListComponent_mat_expansion_panel_51_tr_43_ng_container_1_Template_button_click_18_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r84);

          var inter_r79 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          var ctx_r82 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r82.deleteIntervencao(inter_r79.ID);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "mat-icon", 48);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "delete");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var ctx_r85 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        var inter_r79 = ctx_r85.$implicit;
        var j_r80 = ctx_r85.index;

        var ctx_r81 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](inter_r79.ID);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", inter_r79.UtilizadorIDUser, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](inter_r79.Observacoes);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r81.changeIDtoDescription(j_r80), " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](11, 7, inter_r79.DataInicioIntervencao, "dd/MM/yyyy HH:mm"), " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](14, 10, inter_r79.DataFimIntervencao, "dd/MM/yyyy HH:mm"), " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r81.getTimeDiff(inter_r79.ID), " ");
      }
    }

    function PedidoPreventivaListComponent_mat_expansion_panel_51_tr_43_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PedidoPreventivaListComponent_mat_expansion_panel_51_tr_43_ng_container_1_Template, 21, 13, "ng-container", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var inter_r79 = ctx.$implicit;

        var item_r76 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", inter_r79.PedidoManutPreventivaID == item_r76.IDPedido);
      }
    }

    function PedidoPreventivaListComponent_mat_expansion_panel_51_Template(rf, ctx) {
      if (rf & 1) {
        var _r88 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-expansion-panel");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-expansion-panel-header", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "table", 32);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "tbody");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td", 34);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "td", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "td", 36);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](13, "date");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "td", 36);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](16, "date");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "td", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "body", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "table", 37);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "thead");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "th", 38);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "#");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "th", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Utilizador");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "th", 39);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Descri\xE7\xE3o");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "th", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Estado");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "th", 40);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Inicio da interven\xE7\xE3o");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "th", 40);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Fim da interven\xE7\xE3o");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "th", 41);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Dura\xE7\xE3o");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "button", 42);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PedidoPreventivaListComponent_mat_expansion_panel_51_Template_button_click_39_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r88);

          var item_r76 = ctx.$implicit;

          var ctx_r87 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r87.openDialog(item_r76.IDPedido);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, " + ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "tbody");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](43, PedidoPreventivaListComponent_mat_expansion_panel_51_tr_43_Template, 2, 1, "tr", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var item_r76 = ctx.$implicit;
        var i_r77 = ctx.index;

        var ctx_r73 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r76.UtilizadorIDUser);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r73.changeIDtoInternalCode(i_r77), " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r76.Descricao);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](13, 7, item_r76.DataPedido, "dd/MM/yyyy HH:mm"), " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](16, 10, item_r76.DataLimiteManutencaoPrev, "dd/MM/yyyy"), " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r73.checkStateOfIntervention(i_r77), " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r73.intervencoes);
      }
    }

    function PedidoPreventivaListComponent_mat_paginator_52_Template(rf, ctx) {
      if (rf & 1) {
        var _r90 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-paginator", 49);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("page", function PedidoPreventivaListComponent_mat_paginator_52_Template_mat_paginator_page_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r90);

          var ctx_r89 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r89.onChangedPage($event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r74 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("length", ctx_r74.totalPedidos)("pageSize", ctx_r74.pedidosPerPage)("pageSizeOptions", ctx_r74.pageSizeOptions);
      }
    }

    var _c0 = function _c0() {
      return ["/pedido-mpreventiva-add"];
    };

    var _c1 = function _c1() {
      return ["/manutencao-preventiva-programada"];
    };

    var PedidoPreventivaListComponent =
    /*#__PURE__*/
    function () {
      function PedidoPreventivaListComponent(pedidosService, tipoUtilizadorService, dialog, route) {
        _classCallCheck(this, PedidoPreventivaListComponent);

        this.pedidosService = pedidosService;
        this.tipoUtilizadorService = tipoUtilizadorService;
        this.dialog = dialog;
        this.route = route;
        this.isLoading = false;
        this.pedidos = [];
        this.equipamentosList = [];
        this.estadoIntervencaoList = [];
        this.intervencoesFiltradas = [];
        this.intervencoes = [];
        this.gruposMaquinaList = [];
        this.equipamentosFiltrados = [];
        this.aspNetUsersList = [];
        this.tipoUtilizadorList = [];
        this.pedidosImprimir = [];
        this.pageSizeOptions = [5, 8, 12, 20, 25];
        this.totalPedidos = 0;
        this.pedidosPerPage = 2;
        this.currentPage = 1;
        this.selectedOptionGrupo = 0;
        this.selectedOptionDateInicio = "01-01-1990";
        this.selectedOptionDateFim = "01-01-1990";
        this.model = {};
      }

      _createClass(PedidoPreventivaListComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this42 = this;

          this.isLoading = true;
          this.pedidosService.getPedidos(this.pedidosPerPage, this.currentPage, 0, "01-01-1990", "01-01-1990");
          this.pedidosSub = this.pedidosService.getPedidoUpdateListener().subscribe(function (pedidoData) {
            _this42.isLoading = false;
            _this42.pedidos = pedidoData.pedidos;
            _this42.totalPedidos = pedidoData.CountPedidos;
          });
          this.pedidosService.getIntervencoes();
          this.intervencoesSub = this.pedidosService.getIntervencaoUpdateListener().subscribe(function (intervencoes) {
            _this42.intervencoes = intervencoes;
          }); //Carregamento de outros métodos.

          this.loadEstadosIntervencao();
          this.loadEquip();
          this.loadGrupoMaquinas(); //this.loadAspNetUsers();

          this.loadTiposUtilizador();
        }
      }, {
        key: "limparFiltros",
        value: function limparFiltros() {
          this.ngOnInit();
          this.selectedOptionGrupo = 0;
          this.selectedOptionDateInicio = "01-01-1990";
          this.selectedOptionDateFim = "01-01-1990";
        }
      }, {
        key: "printPedidos",
        value: function printPedidos() {
          var myArray = [];
          console.log("Pedidos ", this.pedidos);

          for (var i = 0; i < this.pedidos.length; i++) {
            var pedidoPrint = {};
            var datepipe = new _angular_common__WEBPACK_IMPORTED_MODULE_1__["DatePipe"]('en-US');
            var dataLimiteFormatada = datepipe.transform(this.pedidos[i].DataLimiteManutencaoPrev, 'dd-MM-yyyy'); //let convertedDataLimite = new Date(dataPedidoFormatada);

            var dataPedidoFormatada = datepipe.transform(this.pedidos[i].DataPedido, 'dd-MM-yyyy HH:mm'); //let convertedDataPedidoFormatada = new Date(dataPedidoFormatada);

            pedidoPrint.DataPedido = '';
            pedidoPrint.DataLimiteManutencaoPrev = '';
            pedidoPrint.Descricao = '';
            pedidoPrint.UtilizadorIDUser = '';
            pedidoPrint.IDEquipamento = '';
            pedidoPrint.DataPedido = dataPedidoFormatada;

            if (dataLimiteFormatada == null) {
              dataLimiteFormatada = '';
            }

            if (dataLimiteFormatada != null) {
              pedidoPrint.DataLimiteManutencaoPrev = dataLimiteFormatada;
            }

            pedidoPrint.Descricao = this.pedidos[i].Descricao;
            pedidoPrint.UtilizadorIDUser = this.pedidos[i].UtilizadorIDUser;

            for (var j = 0; j < this.equipamentosList.length; j++) {
              if (this.pedidos[i].IDEquipamento == this.equipamentosList[j].IDEquipamento) {
                pedidoPrint.IDEquipamento = this.equipamentosList[j].Marca + " " + this.equipamentosList[j].Descr;
              }
            }

            myArray.push(pedidoPrint);
            console.log(myArray);
          }

          print_js__WEBPACK_IMPORTED_MODULE_2__({
            printable: myArray,
            properties: [{
              field: 'UtilizadorIDUser',
              displayName: '#'
            }, {
              field: 'IDEquipamento',
              displayName: 'Equipamento'
            }, {
              field: 'Descricao',
              displayName: 'Descrição'
            }, {
              field: 'DataLimiteManutencaoPrev',
              displayName: 'Data limite'
            }, {
              field: 'DataPedido',
              displayName: 'Data pedido'
            }],
            type: 'json',
            header: 'ACATEL - Pedidos preventivos'
          });
        }
      }, {
        key: "procuraAvancada",
        value: function procuraAvancada() {
          var _this43 = this;

          console.log(this.selectedOptionGrupo, "Grupo selecionado");
          this.isLoading = true;
          this.pedidosService.getPedidos(this.pedidosPerPage, this.currentPage, this.selectedOptionGrupo, this.selectedOptionDateInicio, this.selectedOptionDateFim);
          this.pedidosSub = this.pedidosService.getPedidoUpdateListener().subscribe(function (pedidoData) {
            _this43.isLoading = false;
            _this43.pedidos = pedidoData.pedidos;
            _this43.totalPedidos = pedidoData.CountPedidos;
          });
        } //load tipos de utilizador da DB

      }, {
        key: "loadTiposUtilizador",
        value: function loadTiposUtilizador() {
          var _this44 = this;

          return this.tipoUtilizadorService.GetTiposUtilizador().subscribe(function (data) {
            _this44.tipoUtilizadorList = data;
          });
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.pedidosSub.unsubscribe();
          this.intervencoesSub.unsubscribe();
        } //MAT paginator

      }, {
        key: "onChangedPage",
        value: function onChangedPage(pageData) {
          this.currentPage = pageData.pageIndex + 1;
          this.pedidosPerPage = pageData.pageSize;
          this.pedidosService.getPedidos(this.pedidosPerPage, this.currentPage, this.selectedOptionGrupo, this.selectedOptionDateInicio, this.selectedOptionDateFim);
        }
      }, {
        key: "loadGrupoMaquinas",
        value: function loadGrupoMaquinas() {
          var _this45 = this;

          return this.pedidosService.GetGruposMaquina().subscribe(function (data) {
            _this45.gruposMaquinaList = data;
          });
        }
      }, {
        key: "openDialog",
        value: function openDialog(idPedido) {
          console.log(idPedido, "Passou na componente, ID do Pedido");
          this.dialog.open(_intervencao_preventiva_add_intervencao_preventiva_add_component__WEBPACK_IMPORTED_MODULE_3__["IntervencaoPreventivaAddComponent"], {
            data: {
              idPedido: idPedido
            }
          });
        } //## MÉTODOS ## //
        //Delete intervenção, somente se o User registado na intervencao, for o mesmo da sessão em aberto

      }, {
        key: "deleteIntervencao",
        value: function deleteIntervencao(ID) {
          return this.pedidosService.DeleteIntervencao(ID).subscribe(function (res) {});
        }
      }, {
        key: "getTimeDiff",
        value: function getTimeDiff(a) {
          for (var j = 0; j < this.intervencoes.length; j++) {
            if (this.intervencoes[j].ID == a) {
              var endDate = new Date();
              endDate = new Date(this.intervencoes[j].DataFimIntervencao);
              var beginDate = new Date();
              beginDate = new Date(this.intervencoes[j].DataInicioIntervencao);
              var diffMs = endDate.getTime() - beginDate.getTime(); // milliseconds

              var diffMinutos = Math.round(diffMs / 60000);
              var hours = diffMinutos / 60;
              var rhours = Math.floor(hours);
              var minutes = (hours - rhours) * 60;
              var rminutes = Math.round(minutes);
            }
          }

          if (rhours == 0) {
            return rminutes + "minuto(s)";
          }

          if (rhours >= 1 && rminutes == 0) return rhours + "h";
          if (rhours >= 1 && rminutes > 0) return rhours + " h:" + rminutes + "m";
        } //Troca no front-end, o ID do equipamento pelo código interno da empresa

      }, {
        key: "changeIDtoInternalCode",
        value: function changeIDtoInternalCode(equip) {
          for (var j = 0; j < this.equipamentosList.length; j++) {
            if (this.pedidos[equip].IDEquipamento == this.equipamentosList[j].IDEquipamento) {
              return this.equipamentosList[j].CodigoInterno + " - " + this.equipamentosList[j].Marca + " " + this.equipamentosList[j].Descr;
            }
          }
        } //Mostra os estados de intervenção ## melhorar esta parte.

      }, {
        key: "checkStateOfIntervention",
        value: function checkStateOfIntervention(a) {
          if (this.intervencoesFiltradas.length > 0) {
            this.intervencoesFiltradas.length = 0;
          }

          for (var j = 0; j < this.intervencoes.length; j++) {
            if (this.pedidos[a].IDPedido == this.intervencoes[j].PedidoManutPreventivaID) {
              this.intervencoesFiltradas.push(this.intervencoes[j]);
            }
          }

          if (this.intervencoesFiltradas.length > 0) {
            var maxI = this.intervencoesFiltradas.reduce(function (prev, current) {
              return prev.PedidoManutPreventivaID > current.PedidoManutPreventivaID ? prev : current;
            });
          }

          if (this.intervencoesFiltradas.length == 0) return "S/I";else if (maxI.IDEstadoIntervencao == 2) return "Aguarda";else if (maxI.IDEstadoIntervencao == 3) return "Fechado";
        } //lista estados de intervenção.

      }, {
        key: "loadEstadosIntervencao",
        value: function loadEstadosIntervencao() {
          var _this46 = this;

          return this.pedidosService.GetEstadosIntervencao().subscribe(function (data) {
            _this46.estadoIntervencaoList = data;
          });
        } // lista equipamentos.

      }, {
        key: "loadEquip",
        value: function loadEquip() {
          var _this47 = this;

          return this.pedidosService.GetEquipamentosObser().subscribe(function (data) {
            _this47.equipamentosList = data;
          });
        } //Troca o ID do estado de intervenção, pela sua descrição correspondente.

      }, {
        key: "changeIDtoDescription",
        value: function changeIDtoDescription(estado) {
          for (var j = 0; j < this.equipamentosList.length; j++) {
            if (this.intervencoes[estado].IDEstadoIntervencao == this.estadoIntervencaoList[j].ID) {
              return this.estadoIntervencaoList[j].Descr;
            }
          }
        }
      }]);

      return PedidoPreventivaListComponent;
    }();

    PedidoPreventivaListComponent.ɵfac = function PedidoPreventivaListComponent_Factory(t) {
      return new (t || PedidoPreventivaListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_pedidoMpreventiva_pedidoMpreventiva_service__WEBPACK_IMPORTED_MODULE_4__["PedidosPreventivosService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_tipoUtilizador_tipoUtilizador_service__WEBPACK_IMPORTED_MODULE_5__["TipoUtilizadorService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"]));
    };

    PedidoPreventivaListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: PedidoPreventivaListComponent,
      selectors: [["app-pedido-preventiva-list"]],
      decls: 53,
      vars: 14,
      consts: [["style", "margin: 0 auto", "mode", "indeterminate", "color", "accent", 4, "ngIf"], ["style", "text-align: center", 4, "ngIf"], [1, "inner"], ["id", "main"], ["id", "side_bar"], [1, "formatH5", 2, "text-align", "right"], ["type", "button", 1, "btn", "btn-outline-primary", 2, "float", "right", 3, "routerLink"], ["type", "button", 1, "btn", "btn-outline-primary", 2, "float", "right", 3, "click"], [1, "rowSelectTags"], [1, "column"], ["for", "AlignFilter", 1, "AlignFilter"], ["id", "AlignFilter", 1, "AlignFilter", 2, "width", "180px", 3, "ngModel", "ngModelChange"], ["selected", ""], [3, "value", 4, "ngFor", "ngForOf"], ["type", "Date", "select", "", "id", "AlignFilter", 1, "AlignFilter", 2, "width", "180px", 3, "ngModel", "ngModelChange"], [1, "column2"], ["mat-icon-button", "", 1, "AlignFilter", 3, "click"], ["mat-icon-button", "", 3, "click"], [4, "ngIf"], ["multi", "false"], [4, "ngFor", "ngForOf"], ["class", "col", 3, "length", "pageSize", "pageSizeOptions", "page", 4, "ngIf"], ["mode", "indeterminate", "color", "accent", 2, "margin", "0 auto"], [2, "text-align", "center"], [3, "value"], [1, "table-responsive"], [1, "table", "table-bordered", 2, "width", "100%", 3, "hidden"], ["scope", "col", "width", "80"], ["scope", "col", "width", "375"], ["scope", "col", "width", "400"], ["scope", "col", "width", "150"], ["collapsedHeight", "*", "expandedHeight", "*"], [1, "table"], ["width", "80", 1, "tb-td-txt"], ["width", "375", 1, "tb-td-txt"], ["width", "400", 1, "tb-td-txt"], ["width", "150", 1, "tb-td-txt"], [1, "table", 2, "width", "80%"], ["scope", "col", "width", "25"], ["scope", "col", "width", "250"], ["scope", "col", "width", "170"], ["scope", "col", "width", "100"], ["type", "button", 1, "btn", "btn-success", "btn-sm", "move-right", 2, "position", "absolute", "right", "0", "height", "30px", "width", "30px", 3, "click"], ["scope", "row", "width", "25"], ["width", "250", 1, "tb-td-txt"], ["width", "170", 1, "tb-td-txt"], ["width", "100", 1, "tb-td-txt"], ["type", "button", "color", "accent", 3, "click"], ["_ngcontent-oax-c0", "", "role", "img", "aria-hidden", "true", 1, "mat-icon", "notranslate", "material-icons", "mat-icon-no-color"], [1, "col", 3, "length", "pageSize", "pageSizeOptions", "page"]],
      template: function PedidoPreventivaListComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, PedidoPreventivaListComponent_mat_spinner_0_Template, 1, 0, "mat-spinner", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PedidoPreventivaListComponent_p_1_Template, 2, 0, "p", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h5", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Pedidos preventivos");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " Pedido individual ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " Pedido em grupo ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PedidoPreventivaListComponent_Template_button_click_13_listener() {
            return ctx.printPedidos();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " Imprimir ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "label", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Grupo de m\xE1quina:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "select", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function PedidoPreventivaListComponent_Template_select_ngModelChange_21_listener($event) {
            return ctx.selectedOptionGrupo = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "option", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "0");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, PedidoPreventivaListComponent_option_24_Template, 2, 3, "option", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "label", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "de:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "input", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function PedidoPreventivaListComponent_Template_input_ngModelChange_29_listener($event) {
            return ctx.selectedOptionDateInicio = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "label", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "at\xE9:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "input", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function PedidoPreventivaListComponent_Template_input_ngModelChange_34_listener($event) {
            return ctx.selectedOptionDateFim = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "button", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PedidoPreventivaListComponent_Template_button_click_37_listener() {
            return ctx.procuraAvancada();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "search");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "button", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PedidoPreventivaListComponent_Template_button_click_42_listener() {
            return ctx.limparFiltros();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "delete_sweep");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](48, PedidoPreventivaListComponent_ng_container_48_Template, 10, 0, "ng-container", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](49, PedidoPreventivaListComponent_div_49_Template, 17, 1, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "mat-accordion", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](51, PedidoPreventivaListComponent_mat_expansion_panel_51_Template, 44, 13, "mat-expansion-panel", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](52, PedidoPreventivaListComponent_mat_paginator_52_Template, 1, 3, "mat-paginator", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isLoading);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isLoading);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](12, _c0));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](13, _c1));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.selectedOptionGrupo);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.gruposMaquinaList);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.selectedOptionDateInicio);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.selectedOptionDateFim);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.totalPedidos == 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.totalPedidos > 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.pedidos);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.pedidos.length > 0);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterLink"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ɵangular_packages_forms_forms_x"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["DefaultValueAccessor"], _angular_material_button__WEBPACK_IMPORTED_MODULE_9__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__["MatIcon"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_11__["MatAccordion"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_12__["MatSpinner"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_11__["MatExpansionPanel"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_11__["MatExpansionPanelHeader"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_13__["MatPaginator"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["DatePipe"]],
      styles: ["mat-paginator[_ngcontent-%COMP%] {\r\n    margin-top: 1rem;\r\n  }\r\n  \r\n    .mat-form-field-appearance-legacy .mat-form-field-underline {\r\n    background-color: transparent;\r\n  }\r\n  \r\n  h5[_ngcontent-%COMP%] {\r\n    margin-left: 10px;\r\n    display: inline-block;\r\n  }\r\n  \r\n  button[_ngcontent-%COMP%] {\r\n    margin-right: 30px;\r\n  }\r\n  \r\n  .disable_ripple[_ngcontent-%COMP%]:hover {\r\n    background: currentColor !important;\r\n  }\r\n  \r\n  .mat-expansion-panel-header[_ngcontent-%COMP%]   .mat-expanded[_ngcontent-%COMP%] {\r\n    background-color: none;\r\n  }\r\n  \r\n  td[_ngcontent-%COMP%] {\r\n    border: 0px solid white;\r\n  }\r\n  \r\n  .table-responsive[_ngcontent-%COMP%]    > .table[_ngcontent-%COMP%] {\r\n    padding: 0 32px 0 24px;\r\n  }\r\n  \r\n  mat-expansion-panel-header[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\r\n    text-align: left;\r\n  }\r\n  \r\n  .mat-expansion-panel-header-label.mat-expanded[_ngcontent-%COMP%]:hover {\r\n    background: rgb(255, 255, 255);\r\n  }\r\n  \r\n  .mat-expansion-panel-header[_ngcontent-%COMP%] {\r\n    background-color: white;\r\n  }\r\n  \r\n  .formatH5[_ngcontent-%COMP%]{\r\n    margin-left: 40px;\r\n  }\r\n  \r\n  .column[_ngcontent-%COMP%] {\r\n    float: left;\r\n    width: 15%;\r\n    padding: 1px;\r\n  }\r\n  \r\n  .column2[_ngcontent-%COMP%]{\r\n    float: left;\r\n    width: 6%;\r\n    padding: 1px;\r\n  }\r\n  \r\n  \r\n  \r\n  .row[_ngcontent-%COMP%]::after {\r\n    content: \"\";\r\n    clear: both;\r\n    display: table;\r\n  }\r\n  \r\n  .AlignFilter[_ngcontent-%COMP%]{\r\n    margin-left: 40px;\r\n  }\r\n  \r\n  .AlignFilter1[_ngcontent-%COMP%]{\r\n    margin-left:40px;\r\n  }\r\n  \r\n  .col[_ngcontent-%COMP%]{\r\n    height: 50px;\r\n    background-color: slategrey;\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wZWRpZG8tcHJldmVudGl2YS1saXN0L3BlZGlkby1wcmV2ZW50aXZhLWxpc3QuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGdCQUFnQjtFQUNsQjs7RUFFQTtJQUNFLDZCQUE2QjtFQUMvQjs7RUFJQTtJQUNFLGlCQUFpQjtJQUNqQixxQkFBcUI7RUFDdkI7O0VBRUE7SUFDRSxrQkFBa0I7RUFDcEI7O0VBRUE7SUFDRSxtQ0FBbUM7RUFDckM7O0VBRUE7SUFDRSxzQkFBc0I7RUFDeEI7O0VBRUE7SUFDRSx1QkFBdUI7RUFDekI7O0VBQ0E7SUFDRSxzQkFBc0I7RUFDeEI7O0VBQ0E7SUFDRSxnQkFBZ0I7RUFDbEI7O0VBRUE7SUFDRSw4QkFBOEI7RUFDaEM7O0VBRUE7SUFDRSx1QkFBdUI7RUFDekI7O0VBR0E7SUFDRSxpQkFBaUI7RUFDbkI7O0VBRUE7SUFDRSxXQUFXO0lBQ1gsVUFBVTtJQUNWLFlBQVk7RUFDZDs7RUFFQTtJQUNFLFdBQVc7SUFDWCxTQUFTO0lBQ1QsWUFBWTtFQUNkOztFQUVBLHdDQUF3Qzs7RUFDeEM7SUFDRSxXQUFXO0lBQ1gsV0FBVztJQUNYLGNBQWM7RUFDaEI7O0VBR0E7SUFDRSxpQkFBaUI7RUFDbkI7O0VBRUE7SUFDRSxnQkFBZ0I7RUFDbEI7O0VBR0E7SUFDRSxZQUFZO0lBQ1osMkJBQTJCO0VBQzdCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9wZWRpZG8tcHJldmVudGl2YS1saXN0L3BlZGlkby1wcmV2ZW50aXZhLWxpc3QuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIm1hdC1wYWdpbmF0b3Ige1xyXG4gICAgbWFyZ2luLXRvcDogMXJlbTtcclxuICB9XHJcbiAgXHJcbiAgOjpuZy1kZWVwIC5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLWxlZ2FjeSAubWF0LWZvcm0tZmllbGQtdW5kZXJsaW5lIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gIH1cclxuXHJcbiBcclxuICBcclxuICBoNSB7XHJcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICB9XHJcbiAgXHJcbiAgYnV0dG9uIHtcclxuICAgIG1hcmdpbi1yaWdodDogMzBweDtcclxuICB9XHJcbiAgXHJcbiAgLmRpc2FibGVfcmlwcGxlOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQ6IGN1cnJlbnRDb2xvciAhaW1wb3J0YW50O1xyXG4gIH1cclxuICBcclxuICAubWF0LWV4cGFuc2lvbi1wYW5lbC1oZWFkZXIgLm1hdC1leHBhbmRlZCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBub25lO1xyXG4gIH1cclxuICBcclxuICB0ZCB7XHJcbiAgICBib3JkZXI6IDBweCBzb2xpZCB3aGl0ZTtcclxuICB9XHJcbiAgLnRhYmxlLXJlc3BvbnNpdmUgPiAudGFibGUge1xyXG4gICAgcGFkZGluZzogMCAzMnB4IDAgMjRweDtcclxuICB9XHJcbiAgbWF0LWV4cGFuc2lvbi1wYW5lbC1oZWFkZXIgLnRhYmxlIHRkIHtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgfVxyXG4gIFxyXG4gIC5tYXQtZXhwYW5zaW9uLXBhbmVsLWhlYWRlci1sYWJlbC5tYXQtZXhwYW5kZWQ6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZDogcmdiKDI1NSwgMjU1LCAyNTUpO1xyXG4gIH1cclxuICBcclxuICAubWF0LWV4cGFuc2lvbi1wYW5lbC1oZWFkZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgfVxyXG4gIFxyXG4gIFxyXG4gIC5mb3JtYXRINXtcclxuICAgIG1hcmdpbi1sZWZ0OiA0MHB4O1xyXG4gIH1cclxuXHJcbiAgLmNvbHVtbiB7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIHdpZHRoOiAxNSU7XHJcbiAgICBwYWRkaW5nOiAxcHg7XHJcbiAgfVxyXG5cclxuICAuY29sdW1uMntcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgd2lkdGg6IDYlO1xyXG4gICAgcGFkZGluZzogMXB4O1xyXG4gIH1cclxuICBcclxuICAvKiBDbGVhciBmbG9hdHMgYWZ0ZXIgaW1hZ2UgY29udGFpbmVycyAqL1xyXG4gIC5yb3c6OmFmdGVyIHtcclxuICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICBjbGVhcjogYm90aDtcclxuICAgIGRpc3BsYXk6IHRhYmxlO1xyXG4gIH1cclxuXHJcbiAgXHJcbiAgLkFsaWduRmlsdGVye1xyXG4gICAgbWFyZ2luLWxlZnQ6IDQwcHg7XHJcbiAgfVxyXG5cclxuICAuQWxpZ25GaWx0ZXIxe1xyXG4gICAgbWFyZ2luLWxlZnQ6NDBweDtcclxuICB9XHJcbiAgXHJcbiAgXHJcbiAgLmNvbHtcclxuICAgIGhlaWdodDogNTBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHNsYXRlZ3JleTtcclxuICB9XHJcblxyXG4iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PedidoPreventivaListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: "app-pedido-preventiva-list",
          templateUrl: "./pedido-preventiva-list.component.html",
          styleUrls: ["./pedido-preventiva-list.component.css"]
        }]
      }], function () {
        return [{
          type: _shared_pedidoMpreventiva_pedidoMpreventiva_service__WEBPACK_IMPORTED_MODULE_4__["PedidosPreventivosService"]
        }, {
          type: _shared_tipoUtilizador_tipoUtilizador_service__WEBPACK_IMPORTED_MODULE_5__["TipoUtilizadorService"]
        }, {
          type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialog"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/register-add/register-add.component.ts":
  /*!*******************************************************************!*\
    !*** ./src/app/components/register-add/register-add.component.ts ***!
    \*******************************************************************/

  /*! exports provided: RegisterComponent */

  /***/
  function srcAppComponentsRegisterAddRegisterAddComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RegisterComponent", function () {
      return RegisterComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _shared_register_register_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../shared/register/register.service */
    "./src/app/shared/register/register.service.ts");
    /* harmony import */


    var _shared_tipoUtilizador_tipoUtilizador_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../shared/tipoUtilizador/tipoUtilizador.service */
    "./src/app/shared/tipoUtilizador/tipoUtilizador.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function RegisterComponent_option_22_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var item_r17 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", item_r17.IDTipo);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r17.TipoDescr);
      }
    }

    var RegisterComponent =
    /*#__PURE__*/
    function () {
      function RegisterComponent(fb, ngZone, router, registerService, tipoUtilizadorService, actRoute) {
        _classCallCheck(this, RegisterComponent);

        this.fb = fb;
        this.ngZone = ngZone;
        this.router = router;
        this.registerService = registerService;
        this.tipoUtilizadorService = tipoUtilizadorService;
        this.actRoute = actRoute;
        this.tipoUtilizadorList = [];
      }

      _createClass(RegisterComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.addRegister();
          this.loadTiposUtilizador();
        }
      }, {
        key: "addRegister",
        value: function addRegister() {
          this.equipForm = this.fb.group({
            Email: [''],
            Password: [''],
            ConfirmPassword: [''],
            IDTipo: [0],
            NumeroUtilizador: [0],
            Nome: ['']
          });
        }
      }, {
        key: "loadTiposUtilizador",
        value: function loadTiposUtilizador() {
          var _this48 = this;

          return this.tipoUtilizadorService.GetTiposUtilizador().subscribe(function (data) {
            _this48.tipoUtilizadorList = data;
          });
        }
      }, {
        key: "submitForm",
        value: function submitForm() {
          var _this49 = this;

          this.registerService.CreateRegisto(this.equipForm.value).subscribe(function (res) {
            console.log('Registo adicionado!');

            _this49.ngZone.run(function () {
              return _this49.router.navigateByUrl('');
            });
          });
        }
      }]);

      return RegisterComponent;
    }();

    RegisterComponent.ɵfac = function RegisterComponent_Factory(t) {
      return new (t || RegisterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_register_register_service__WEBPACK_IMPORTED_MODULE_3__["RegisterService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_tipoUtilizador_tipoUtilizador_service__WEBPACK_IMPORTED_MODULE_4__["TipoUtilizadorService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]));
    };

    RegisterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: RegisterComponent,
      selectors: [["app-add-register"]],
      decls: 39,
      vars: 2,
      consts: [[1, "centerScreen"], [1, "container", "wrapper", "wrapper2"], [1, "row"], [1, "col-md-12"], ["novalidate", "", 3, "formGroup", "ngSubmit"], [1, "form-group"], ["type", "text", "formControlName", "Nome", 1, "form-control"], ["type", "text", "formControlName", "NumeroUtilizador", 1, "form-control"], ["formControlName", "IDTipo", 1, "form-group"], ["value", "0"], [3, "value", 4, "ngFor", "ngForOf"], ["type", "text", "formControlName", "Email", 1, "form-control"], ["type", "text", "formControlName", "Password", "type", "password", 1, "form-control"], ["type", "text", "formControlName", "ConfirmPassword", "type", "password", 1, "form-control"], ["type", "submit", 1, "btn", "btn-primary"], [3, "value"]],
      template: function RegisterComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Ficha de novo utilizador");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "form", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function RegisterComponent_Template_form_ngSubmit_7_listener() {
            return ctx.submitForm();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Nome");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "input", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "N\xBA de funcion\xE1rio");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "input", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Tipo de cargo");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "select", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "option", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Selecione");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, RegisterComponent_option_22_Template, 2, 2, "option", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Email");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "input", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Password");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "input", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Confirmar password");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "input", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "button", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Submeter");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.equipForm);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.tipoUtilizadorList);
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_x"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"]],
      styles: [".form-control[_ngcontent-%COMP%]{\r\n        width: 400px;\r\n        \r\n\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9yZWdpc3Rlci1hZGQvcmVnaXN0ZXItYWRkLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7UUFDUSxZQUFZOzs7QUFHcEI7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQW1CRyIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcmVnaXN0ZXItYWRkL3JlZ2lzdGVyLWFkZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZvcm0tY29udHJvbHtcclxuICAgICAgICB3aWR0aDogNDAwcHg7XHJcbiAgICAgICAgXHJcblxyXG59XHJcbi8qIC5jZW50ZXJTY3JlZW57XHJcbiAgIFxyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBtaW4taGVpZ2h0OiAxMDB2aDtcclxuICAgICAgXHJcbn1cclxuXHJcbi5jZW50ZXJJbnB1dHNcclxue1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xyXG59ICovXHJcblxyXG4iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RegisterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-add-register',
          templateUrl: './register-add.component.html',
          styleUrls: ['./register-add.component.css']
        }]
      }], function () {
        return [{
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }, {
          type: _shared_register_register_service__WEBPACK_IMPORTED_MODULE_3__["RegisterService"]
        }, {
          type: _shared_tipoUtilizador_tipoUtilizador_service__WEBPACK_IMPORTED_MODULE_4__["TipoUtilizadorService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/shared/AspNetUsers/aspNetUsers.service.ts":
  /*!***********************************************************!*\
    !*** ./src/app/shared/AspNetUsers/aspNetUsers.service.ts ***!
    \***********************************************************/

  /*! exports provided: AspNetUsersService */

  /***/
  function srcAppSharedAspNetUsersAspNetUsersServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AspNetUsersService", function () {
      return AspNetUsersService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _environments_environments__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./../environments/environments */
    "./src/app/shared/environments/environments.ts");

    var BACKEND_URL = _environments_environments__WEBPACK_IMPORTED_MODULE_4__["environment"].apiUrl;

    var AspNetUsersService =
    /*#__PURE__*/
    function () {
      function AspNetUsersService(http) {
        _classCallCheck(this, AspNetUsersService);

        this.http = http;
        this.baseurl = "http://localhost:44334/api"; // Http Headers

        /*httpOptions = {
          headers: new HttpHeaders({
            'Content-Type': 'application/json'
          })
        }*/

        this.httpOptions = {
          headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
            "Content-Type": "application/json",
            Authorization: "Bearer " + localStorage.getItem("token")
          }),
          withCredentials: true
        };
      } // GET


      _createClass(AspNetUsersService, [{
        key: "GetAspNetUsers",
        value: function GetAspNetUsers() {
          return this.http.get(BACKEND_URL + "/AspNetUsers", this.httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.errorHandl));
        } //GET ONE

      }, {
        key: "GetOneUser",
        value: function GetOneUser(id) {
          return this.http.get(BACKEND_URL + "/AspNetUsers?UserName=" + id, this.httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.errorHandl));
        } //PUT

      }, {
        key: "UpdateAspNetUser",
        value: function UpdateAspNetUser(id, data) {
          return this.http.put(BACKEND_URL + "/AspNetUsers?Username=" + id, JSON.stringify(data), this.httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.errorHandl));
        }
      }, {
        key: "errorHandl",
        value: function errorHandl(error) {
          var errorMessage = "";

          if (error.error instanceof ErrorEvent) {
            // Get erro lado cliente
            errorMessage = error.error.message;
          } else {
            // Get erro lado servidor
            errorMessage = "Error Code: ".concat(error.status, "\nMessage: ").concat(error.message);
          }

          console.log(errorMessage);
          return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(errorMessage);
        }
      }]);

      return AspNetUsersService;
    }();

    AspNetUsersService.ɵfac = function AspNetUsersService_Factory(t) {
      return new (t || AspNetUsersService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]));
    };

    AspNetUsersService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: AspNetUsersService,
      factory: AspNetUsersService.ɵfac,
      providedIn: "root"
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AspNetUsersService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: "root"
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
  "./src/app/shared/Constantes/userRoles.ts":
  /*!************************************************!*\
    !*** ./src/app/shared/Constantes/userRoles.ts ***!
    \************************************************/

  /*! exports provided: UserRoles */

  /***/
  function srcAppSharedConstantesUserRolesTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserRoles", function () {
      return UserRoles;
    });

    var UserRoles;

    (function (UserRoles) {
      UserRoles[UserRoles["Admin"] = 1] = "Admin";
      UserRoles[UserRoles["Utilizador"] = 2] = "Utilizador";
      UserRoles[UserRoles["Convidado"] = 3] = "Convidado";
    })(UserRoles || (UserRoles = {}));
    /***/

  },

  /***/
  "./src/app/shared/aspNetRoles/aspNetRoles.service.ts":
  /*!***********************************************************!*\
    !*** ./src/app/shared/aspNetRoles/aspNetRoles.service.ts ***!
    \***********************************************************/

  /*! exports provided: AspNetRolesService */

  /***/
  function srcAppSharedAspNetRolesAspNetRolesServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AspNetRolesService", function () {
      return AspNetRolesService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _environments_environments__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../environments/environments */
    "./src/app/shared/environments/environments.ts");

    var BACKEND_URL = _environments_environments__WEBPACK_IMPORTED_MODULE_4__["environment"].apiUrl;

    var AspNetRolesService =
    /*#__PURE__*/
    function () {
      function AspNetRolesService(http) {
        _classCallCheck(this, AspNetRolesService);

        this.http = http;
        this.baseurl = "http://localhost:44334/api";
        this.httpOptions = {
          headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
            "Content-Type": "application/json",
            Authorization: "Bearer " + localStorage.getItem("token")
          }),
          withCredentials: true
        };
      } // GET


      _createClass(AspNetRolesService, [{
        key: "GetAspNetUsers",
        value: function GetAspNetUsers() {
          return this.http.get(BACKEND_URL + "/AspNetRoles", this.httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.errorHandl));
        } //GET ONE

      }, {
        key: "GetOneUser",
        value: function GetOneUser(email) {
          return this.http.get(BACKEND_URL + "/AspNetRoles?email=" + email, this.httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.errorHandl));
        } //PUT

      }, {
        key: "UpdateAspNetRole",
        value: function UpdateAspNetRole(userName, roleName, oldRoleName, data) {
          return this.http.put(BACKEND_URL + "/AspNetRoles?userName=" + userName + "&roleName=" + roleName + "&oldRoleName=" + oldRoleName, JSON.stringify(data), this.httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.errorHandl));
        }
      }, {
        key: "errorHandl",
        value: function errorHandl(error) {
          var errorMessage = "";

          if (error.error instanceof ErrorEvent) {
            // Get erro lado cliente
            errorMessage = error.error.message;
          } else {
            // Get erro lado servidor
            errorMessage = "Error Code: ".concat(error.status, "\nMessage: ").concat(error.message);
          }

          console.log(errorMessage);
          return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(errorMessage);
        }
      }]);

      return AspNetRolesService;
    }();

    AspNetRolesService.ɵfac = function AspNetRolesService_Factory(t) {
      return new (t || AspNetRolesService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]));
    };

    AspNetRolesService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: AspNetRolesService,
      factory: AspNetRolesService.ɵfac,
      providedIn: "root"
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AspNetRolesService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: "root"
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
  "./src/app/shared/aspNetUsers/aspNetUsers.service.ts":
  /*!***********************************************************!*\
    !*** ./src/app/shared/aspNetUsers/aspNetUsers.service.ts ***!
    \***********************************************************/

  /*! exports provided: AspNetUsersService */

  /***/
  function srcAppSharedAspNetUsersAspNetUsersServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AspNetUsersService", function () {
      return AspNetUsersService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _environments_environments__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./../environments/environments */
    "./src/app/shared/environments/environments.ts");

    var BACKEND_URL = _environments_environments__WEBPACK_IMPORTED_MODULE_4__["environment"].apiUrl;

    var AspNetUsersService =
    /*#__PURE__*/
    function () {
      function AspNetUsersService(http) {
        _classCallCheck(this, AspNetUsersService);

        this.http = http;
        this.baseurl = "http://localhost:44334/api"; // Http Headers

        /*httpOptions = {
          headers: new HttpHeaders({
            'Content-Type': 'application/json'
          })
        }*/

        this.httpOptions = {
          headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
            "Content-Type": "application/json",
            Authorization: "Bearer " + localStorage.getItem("token")
          }),
          withCredentials: true
        };
      } // GET


      _createClass(AspNetUsersService, [{
        key: "GetAspNetUsers",
        value: function GetAspNetUsers() {
          return this.http.get(BACKEND_URL + "/AspNetUsers", this.httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.errorHandl));
        } //GET ONE

      }, {
        key: "GetOneUser",
        value: function GetOneUser(id) {
          return this.http.get(BACKEND_URL + "/AspNetUsers?UserName=" + id, this.httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.errorHandl));
        } //PUT

      }, {
        key: "UpdateAspNetUser",
        value: function UpdateAspNetUser(id, data) {
          return this.http.put(BACKEND_URL + "/AspNetUsers?Username=" + id, JSON.stringify(data), this.httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.errorHandl));
        }
      }, {
        key: "errorHandl",
        value: function errorHandl(error) {
          var errorMessage = "";

          if (error.error instanceof ErrorEvent) {
            // Get erro lado cliente
            errorMessage = error.error.message;
          } else {
            // Get erro lado servidor
            errorMessage = "Error Code: ".concat(error.status, "\nMessage: ").concat(error.message);
          }

          console.log(errorMessage);
          return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(errorMessage);
        }
      }]);

      return AspNetUsersService;
    }();

    AspNetUsersService.ɵfac = function AspNetUsersService_Factory(t) {
      return new (t || AspNetUsersService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]));
    };

    AspNetUsersService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: AspNetUsersService,
      factory: AspNetUsersService.ɵfac,
      providedIn: "root"
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AspNetUsersService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: "root"
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
  "./src/app/shared/environments/environments.ts":
  /*!*****************************************************!*\
    !*** ./src/app/shared/environments/environments.ts ***!
    \*****************************************************/

  /*! exports provided: environment */

  /***/
  function srcAppSharedEnvironmentsEnvironmentsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    });

    var environment = {
      production: false,
      apiUrl: "http://192.168.0.49:8006/api"
    };
    /* export const environment = {
      production: false,
      apiUrl: "http://localhost:44334/api",
    };
     */

    /***/
  },

  /***/
  "./src/app/shared/equipamento/equipamento.service.ts":
  /*!***********************************************************!*\
    !*** ./src/app/shared/equipamento/equipamento.service.ts ***!
    \***********************************************************/

  /*! exports provided: EquipamentoService */

  /***/
  function srcAppSharedEquipamentoEquipamentoServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EquipamentoService", function () {
      return EquipamentoService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _environments_environments__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./../environments/environments */
    "./src/app/shared/environments/environments.ts");

    var BACKEND_URL = _environments_environments__WEBPACK_IMPORTED_MODULE_4__["environment"].apiUrl;

    var EquipamentoService =
    /*#__PURE__*/
    function () {
      function EquipamentoService(http) {
        _classCallCheck(this, EquipamentoService);

        this.http = http;
        this.baseurl = "http://localhost:44334/api"; // Http Headers

        this.httpOptions = {
          headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
            "Content-Type": "application/json",
            Authorization: "Bearer " + localStorage.getItem("token")
          }),
          withCredentials: true
        };
      } // POST


      _createClass(EquipamentoService, [{
        key: "CreateEquip",
        value: function CreateEquip(data) {
          return this.http.post(BACKEND_URL + "/Equipamentoes", JSON.stringify(data), this.httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.errorHandl));
        } // GET

      }, {
        key: "GetOneEquip",
        value: function GetOneEquip(id) {
          return this.http.get(BACKEND_URL + "/Equipamentoes/" + id, this.httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.errorHandl));
        } // GET

      }, {
        key: "GetEquipamentos",
        value: function GetEquipamentos() {
          return this.http.get(BACKEND_URL + "/Equipamentoes", this.httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.errorHandl));
        } // PUT

      }, {
        key: "UpdateEquipamento",
        value: function UpdateEquipamento(id, data) {
          return this.http.put(BACKEND_URL + "/Equipamentoes/" + id, JSON.stringify(data), this.httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.errorHandl));
        }
      }, {
        key: "errorHandl",
        value: function errorHandl(error) {
          var errorMessage = "";

          if (error.error instanceof ErrorEvent) {
            // Get erro lado cliente
            errorMessage = error.error.message;
          } else {
            // Get erro lado servidor
            errorMessage = "Error Code: ".concat(error.status, "\nMessage: ").concat(error.message);
          }

          console.log(errorMessage);
          return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(errorMessage);
        }
      }]);

      return EquipamentoService;
    }();

    EquipamentoService.ɵfac = function EquipamentoService_Factory(t) {
      return new (t || EquipamentoService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]));
    };

    EquipamentoService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: EquipamentoService,
      factory: EquipamentoService.ɵfac,
      providedIn: "root"
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EquipamentoService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: "root"
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
  "./src/app/shared/gruposmaquina/grupomaquina.service.ts":
  /*!**************************************************************!*\
    !*** ./src/app/shared/gruposmaquina/grupomaquina.service.ts ***!
    \**************************************************************/

  /*! exports provided: GrupoMaquinaService */

  /***/
  function srcAppSharedGruposmaquinaGrupomaquinaServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GrupoMaquinaService", function () {
      return GrupoMaquinaService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _environments_environments__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./../environments/environments */
    "./src/app/shared/environments/environments.ts");

    var BACKEND_URL = _environments_environments__WEBPACK_IMPORTED_MODULE_4__["environment"].apiUrl;

    var GrupoMaquinaService =
    /*#__PURE__*/
    function () {
      function GrupoMaquinaService(http) {
        _classCallCheck(this, GrupoMaquinaService);

        this.http = http;
        this.baseurl = "http://localhost:44334/api"; // Http Headers

        /* httpOptions = {
          headers: new HttpHeaders({
            'Content-Type': 'application/json'
          })
        }
        */

        this.httpOptions = {
          headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
            "Content-Type": "application/json",
            Authorization: "Bearer " + localStorage.getItem("token")
          }),
          withCredentials: true
        };
      } // GET por IDS


      _createClass(GrupoMaquinaService, [{
        key: "GetOneGrupoMaquina",
        value: function GetOneGrupoMaquina(id) {
          return this.http.get(BACKEND_URL + "/GrupoMaquinas/" + id, this.httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.errorHandl));
        } // GET all

      }, {
        key: "GetGruposMaquina",
        value: function GetGruposMaquina() {
          return this.http.get(BACKEND_URL + "/GrupoMaquinas", this.httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.errorHandl));
        } // Error handling

      }, {
        key: "errorHandl",
        value: function errorHandl(error) {
          var errorMessage = "";

          if (error.error instanceof ErrorEvent) {
            // Get client-side error
            errorMessage = error.error.message;
          } else {
            // Get server-side error
            errorMessage = "Error Code: ".concat(error.status, "\nMessage: ").concat(error.message);
          }

          console.log(errorMessage);
          return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(errorMessage);
        }
      }]);

      return GrupoMaquinaService;
    }();

    GrupoMaquinaService.ɵfac = function GrupoMaquinaService_Factory(t) {
      return new (t || GrupoMaquinaService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]));
    };

    GrupoMaquinaService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: GrupoMaquinaService,
      factory: GrupoMaquinaService.ɵfac,
      providedIn: "root"
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GrupoMaquinaService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: "root"
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
  "./src/app/shared/pedidoMcurativa-teste/pedidoMcurativa.service.ts":
  /*!*************************************************************************!*\
    !*** ./src/app/shared/pedidoMcurativa-teste/pedidoMcurativa.service.ts ***!
    \*************************************************************************/

  /*! exports provided: PedidosService */

  /***/
  function srcAppSharedPedidoMcurativaTestePedidoMcurativaServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PedidosService", function () {
      return PedidosService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _environments_environments__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./../environments/environments */
    "./src/app/shared/environments/environments.ts");

    var BACKEND_URL = _environments_environments__WEBPACK_IMPORTED_MODULE_4__["environment"].apiUrl;

    var PedidosService =
    /*#__PURE__*/
    function () {
      function PedidosService(httpClient) {
        _classCallCheck(this, PedidosService);

        this.httpClient = httpClient; // Http Headers

        this.httpOptions = {
          headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            "Content-Type": "application/json",
            Authorization: "Bearer " + localStorage.getItem("token")
          }),
          withCredentials: true
        };
        this.pedidos = []; //private pedidosUpdated = new Subject<PedidoManutCurativaTeste[]>();

        this.pedidosUpdated = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.intervencoes = [];
        this.intervencoesUpdated = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
      }

      _createClass(PedidosService, [{
        key: "getPedidos",
        value: function getPedidos(pedidosPerPage, currentPage, selectOptionGrupo, selectedOptionDateInicio, selectedOptionDateFim) {
          var _this50 = this;

          var queryParms = "?pedidosPerPage=".concat(pedidosPerPage, "&currentPage=").concat(currentPage, "&grupoMaquina=").concat(selectOptionGrupo, "&dataInicio=").concat(selectedOptionDateInicio, "&dataFim=").concat(selectedOptionDateFim);
          this.httpClient.get(BACKEND_URL + "/PedidoManutCurativas" + queryParms, this.httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (pedidoCurativaData) {
            return {
              PedidoManutCurativaList: pedidoCurativaData.PedidoManutCurativaList.map(function (pedidoCurativo) {
                return {
                  IDPedido: pedidoCurativo.IDPedido,
                  UtilizadorIDUser: pedidoCurativo.UtilizadorIDUser,
                  IDEquipamento: pedidoCurativo.IDEquipamento,
                  Descricao: pedidoCurativo.Descricao,
                  DataPedido: pedidoCurativo.DataPedido
                };
              }),
              pedidoCurativoCount: pedidoCurativaData.CountPedidos
            };
          })).subscribe(function (pedidosCurativa) {
            _this50.countPedidos = pedidosCurativa.pedidoCurativoCount;
            console.log("numero de pedidos", pedidosCurativa.pedidoCurativoCount);
            _this50.pedidos = pedidosCurativa.PedidoManutCurativaList;

            _this50.pedidosUpdated.next({
              pedidos: _toConsumableArray(_this50.pedidos),
              CountPedidos: _this50.countPedidos
            });
          });
        }
      }, {
        key: "getIntervencoes",
        value: function getIntervencoes() {
          var _this51 = this;

          this.httpClient.get(BACKEND_URL + "/IntervencaoCurativas", this.httpOptions).subscribe(function (intervencoes) {
            var transformedintervencoes = [];

            for (var x = 0; x < intervencoes.length; x++) {
              var transformedIntervencao = {
                ID: intervencoes[x].ID,
                IDPedido: intervencoes[x].IDPedido,
                UtilizadorIDUser: intervencoes[x].UtilizadorIDUser,
                Descricao: intervencoes[x].Descricao,
                IDEstadoIntervencao: intervencoes[x].IDEstadoIntervencao,
                DataFimIntervencao: intervencoes[x].DataFimIntervencao,
                DataInicioIntervencao: intervencoes[x].DataInicioIntervencao
              };
              transformedintervencoes.push(transformedIntervencao);
            }

            _this51.intervencoes = transformedintervencoes;

            _this51.intervencoesUpdated.next(_toConsumableArray(_this51.intervencoes));
          });
        }
      }, {
        key: "getPedidoUpdateListener",
        value: function getPedidoUpdateListener() {
          return this.pedidosUpdated.asObservable();
        } //POST PEDIDO

      }, {
        key: "postPedido",
        value: function postPedido(data) {
          this.httpClient.post(BACKEND_URL + "/PedidoManutCurativas", JSON.stringify(data), this.httpOptions).toPromise();
          this.pedidos.push(data);
          this.countPedidos = this.countPedidos + 1;
          this.pedidosUpdated.next({
            pedidos: _toConsumableArray(this.pedidos),
            CountPedidos: this.countPedidos
          });
        }
      }, {
        key: "postIntervencao",
        value: function postIntervencao(data) {
          var _this52 = this;

          this.httpClient.post(BACKEND_URL + "/IntervencaoCurativas", JSON.stringify(data), this.httpOptions).toPromise().then(function (res) {
            console.log(res);

            _this52.intervencoes.push(res);

            _this52.intervencoesUpdated.next(_toConsumableArray(_this52.intervencoes));
          })["catch"](function (err) {});
        }
      }, {
        key: "getIntervencaoUpdateListener",
        value: function getIntervencaoUpdateListener() {
          return this.intervencoesUpdated.asObservable();
        }
      }, {
        key: "errorHandl",
        value: function errorHandl(error) {
          var errorMessage = "";

          if (error.error instanceof ErrorEvent) {
            // Get erro lado cliente
            errorMessage = error.error.message;
          } else {
            // Get erro lado servidor
            errorMessage = "Error Code: ".concat(error.status, "\nMessage: ").concat(error.message);
          }

          console.log(errorMessage);
          return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(errorMessage);
        } // DELETE

      }, {
        key: "DeleteIntervencao",
        value: function DeleteIntervencao(id) {
          console.log(id, "cheguei ao metodo");
          return this.httpClient["delete"](BACKEND_URL + "/IntervencaoCurativas/" + id, this.httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.errorHandl));
        } // GET

      }, {
        key: "GetEquipamentosObser",
        value: function GetEquipamentosObser() {
          return this.httpClient.get(BACKEND_URL + "/Equipamentoes", this.httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(1));
        } // GET

      }, {
        key: "GetEstadosIntervencao",
        value: function GetEstadosIntervencao() {
          return this.httpClient.get(BACKEND_URL + "/EstadoIntervencaos", this.httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(1));
        } //GET grupos de máquinas

      }, {
        key: "GetGruposMaquina",
        value: function GetGruposMaquina() {
          return this.httpClient.get(BACKEND_URL + "/GrupoMaquinas", this.httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(1));
        }
      }]);

      return PedidosService;
    }();

    PedidosService.ɵfac = function PedidosService_Factory(t) {
      return new (t || PedidosService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]));
    };

    PedidosService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: PedidosService,
      factory: PedidosService.ɵfac,
      providedIn: "root"
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PedidosService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: "root"
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/shared/pedidoMpreventiva/pedidoMpreventiva.service.ts":
  /*!***********************************************************************!*\
    !*** ./src/app/shared/pedidoMpreventiva/pedidoMpreventiva.service.ts ***!
    \***********************************************************************/

  /*! exports provided: PedidosPreventivosService */

  /***/
  function srcAppSharedPedidoMpreventivaPedidoMpreventivaServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PedidosPreventivosService", function () {
      return PedidosPreventivosService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _environments_environments__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./../environments/environments */
    "./src/app/shared/environments/environments.ts");

    var BACKEND_URL = _environments_environments__WEBPACK_IMPORTED_MODULE_4__["environment"].apiUrl;

    var PedidosPreventivosService =
    /*#__PURE__*/
    function () {
      function PedidosPreventivosService(httpClient) {
        _classCallCheck(this, PedidosPreventivosService);

        this.httpClient = httpClient; // Http Headers

        this.httpOptions = {
          headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            "Content-Type": "application/json",
            Authorization: "Bearer " + localStorage.getItem("token")
          }),
          withCredentials: true
        };
        this.pedidos = [];
        this.pedidosUser = [];
        this.pedidosUpdated = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.intervencoes = [];
        this.usersList = [];
        this.intervencoesUpdated = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.pedidosUserUpdated = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
      }

      _createClass(PedidosPreventivosService, [{
        key: "getPedidosUserUpdateListener",
        value: function getPedidosUserUpdateListener() {
          return this.pedidosUserUpdated.asObservable();
        } //POST: manutenção em grupo, através do IdGrupoMaquina via link.

      }, {
        key: "postPedidoPerGrupoMaquinas",
        value: function postPedidoPerGrupoMaquinas(idGrupoMaquina, data) {
          this.httpClient.post(BACKEND_URL + "/PedidosPreventivas?grupoMaquina=" + idGrupoMaquina, JSON.stringify(data), this.httpOptions).toPromise();
          this.pedidos.push(data);
          this.countPedidos = this.countPedidos + 1;
          this.pedidosUpdated.next({
            pedidos: _toConsumableArray(this.pedidos),
            CountPedidos: this.countPedidos
          });
        }
      }, {
        key: "getPedidoUpdateListener",
        value: function getPedidoUpdateListener() {
          return this.pedidosUpdated.asObservable();
        } //POST PEDIDO

      }, {
        key: "postPedido",
        value: function postPedido(data) {
          this.httpClient.post(BACKEND_URL + "/PedidosPreventivas", JSON.stringify(data), this.httpOptions).toPromise();
          this.pedidos.push(data);
          this.countPedidos = this.countPedidos + 1;
          this.pedidosUpdated.next({
            pedidos: _toConsumableArray(this.pedidos),
            CountPedidos: this.countPedidos
          });
        }
      }, {
        key: "getPedidos",
        value: function getPedidos(pedidosPerPage, currentPage, selectOptionGrupo, selectedOptionDateInicio, selectedOptionDateFim) {
          var _this53 = this;

          var queryParms = "?pedidosPerPage=".concat(pedidosPerPage, "&currentPage=").concat(currentPage, "&grupoMaquina=").concat(selectOptionGrupo, "&dataInicio=").concat(selectedOptionDateInicio, "&dataFim=").concat(selectedOptionDateFim);
          this.httpClient.get(BACKEND_URL + "/PedidosPreventivas" + queryParms, this.httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (pedidoPreventivoData) {
            return {
              PedidoManutPreventivoList: pedidoPreventivoData.PedidoManutPreventivoList.map(function (pedidoPreventivo) {
                return {
                  IDPedido: pedidoPreventivo.IDPedido,
                  UtilizadorIDUser: pedidoPreventivo.UtilizadorIDUser,
                  IDEquipamento: pedidoPreventivo.IDEquipamento,
                  Descricao: pedidoPreventivo.Descricao,
                  DataPedido: pedidoPreventivo.DataPedido,
                  FichaManutencaoID: pedidoPreventivo.FichaManutencaoID,
                  DataLimiteManutencaoPrev: pedidoPreventivo.DataLimiteManutencaoPrev
                };
              }),
              pedidoPreventivoCount: pedidoPreventivoData.CountPedidos
            };
          })).subscribe(function (pedidosPreventiva) {
            _this53.countPedidos = pedidosPreventiva.pedidoPreventivoCount;
            console.log("numero de pedidos", pedidosPreventiva.pedidoPreventivoCount);
            _this53.pedidos = pedidosPreventiva.PedidoManutPreventivoList;

            _this53.pedidosUpdated.next({
              pedidos: _toConsumableArray(_this53.pedidos),
              CountPedidos: _this53.countPedidos
            });
          });
        }
      }, {
        key: "getIntervencoes",
        value: function getIntervencoes() {
          var _this54 = this;

          this.httpClient.get(BACKEND_URL + "/IntervencaoPreventivas", this.httpOptions).subscribe(function (intervencoes) {
            var transformedintervencoes = [];

            for (var x = 0; x < intervencoes.length; x++) {
              var transformedIntervencao = {
                ID: intervencoes[x].ID,
                PedidoManutPreventivaID: intervencoes[x].PedidoManutPreventivaID,
                UtilizadorIDUser: intervencoes[x].UtilizadorIDUser,
                Observacoes: intervencoes[x].Observacoes,
                IDEstadoIntervencao: intervencoes[x].IDEstadoIntervencao,
                DataFimIntervencao: intervencoes[x].DataFimIntervencao,
                DataInicioIntervencao: intervencoes[x].DataInicioIntervencao
              };
              transformedintervencoes.push(transformedIntervencao);
            }

            _this54.intervencoes = transformedintervencoes;

            _this54.intervencoesUpdated.next(_toConsumableArray(_this54.intervencoes));
          });
        }
      }, {
        key: "postIntervencao",
        value: function postIntervencao(data) {
          var _this55 = this;

          this.httpClient.post(BACKEND_URL + "/IntervencaoPreventivas", JSON.stringify(data), this.httpOptions).toPromise().then(function (res) {
            console.log(res);

            _this55.intervencoes.push(res);

            _this55.intervencoesUpdated.next(_toConsumableArray(_this55.intervencoes));
          })["catch"](function (err) {});
        }
      }, {
        key: "getIntervencaoUpdateListener",
        value: function getIntervencaoUpdateListener() {
          return this.intervencoesUpdated.asObservable();
        }
      }, {
        key: "errorHandl",
        value: function errorHandl(error) {
          var errorMessage = "";

          if (error.error instanceof ErrorEvent) {
            // Get erro lado cliente
            errorMessage = error.error.message;
          } else {
            // Get erro lado servidor
            errorMessage = "Error Code: ".concat(error.status, "\nMessage: ").concat(error.message);
          }

          console.log(errorMessage);
          return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(errorMessage);
        } // GET

      }, {
        key: "GetEquipamentosObser",
        value: function GetEquipamentosObser() {
          return this.httpClient.get(BACKEND_URL + "/Equipamentoes", this.httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(1));
        } // GET

      }, {
        key: "GetAspNetUsers",
        value: function GetAspNetUsers() {
          return this.httpClient.get(BACKEND_URL + "/AspNetUsers", this.httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.errorHandl));
        }
      }, {
        key: "getPedidosUser",
        value: function getPedidosUser() {
          var _this56 = this;

          this.httpClient.get(BACKEND_URL + "/PedidosPreventivas", this.httpOptions).subscribe(function (pedidos) {
            var transformedpedidos = [];

            for (var x = 0; x < pedidos.length; x++) {
              var transformedPedido = {
                IDPedido: pedidos[x].ID,
                UtilizadorIDUser: pedidos[x].UtilizadorIDUser,
                IDEquipamento: pedidos[x].IDEquipamento,
                Descricao: pedidos[x].Descricao,
                DataPedido: pedidos[x].DataPedido,
                FichaManutencaoID: pedidos[x].FichaManutencaoID,
                DataLimiteManutencaoPrev: pedidos[x].DataLimiteManutencaoPrev
              };
              transformedpedidos.push(transformedPedido);
            }

            _this56.pedidosUser = transformedpedidos;

            _this56.pedidosUserUpdated.next(_toConsumableArray(_this56.pedidosUser));
          });
        }
      }, {
        key: "GetPedidosEmEsperaUser",
        value: function GetPedidosEmEsperaUser() {
          return this.httpClient.get(BACKEND_URL + "/PedidosPreventivas", this.httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.errorHandl));
        } // GET

      }, {
        key: "GetEstadosIntervencao",
        value: function GetEstadosIntervencao() {
          return this.httpClient.get(BACKEND_URL + "/EstadoIntervencaos", this.httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(1));
        } //GET grupos de máquinas

      }, {
        key: "GetGruposMaquina",
        value: function GetGruposMaquina() {
          return this.httpClient.get(BACKEND_URL + "/GrupoMaquinas", this.httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(1));
        } // DELETE

      }, {
        key: "DeleteIntervencao",
        value: function DeleteIntervencao(id) {
          return this.httpClient["delete"](BACKEND_URL + "/IntervencaoPreventivas/" + id, this.httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.errorHandl));
        }
      }]);

      return PedidosPreventivosService;
    }();

    PedidosPreventivosService.ɵfac = function PedidosPreventivosService_Factory(t) {
      return new (t || PedidosPreventivosService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]));
    };

    PedidosPreventivosService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: PedidosPreventivosService,
      factory: PedidosPreventivosService.ɵfac,
      providedIn: "root"
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PedidosPreventivosService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: "root"
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/shared/register/register.service.ts":
  /*!*****************************************************!*\
    !*** ./src/app/shared/register/register.service.ts ***!
    \*****************************************************/

  /*! exports provided: RegisterService */

  /***/
  function srcAppSharedRegisterRegisterServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RegisterService", function () {
      return RegisterService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _environments_environments__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./../environments/environments */
    "./src/app/shared/environments/environments.ts");

    var BACKEND_URL = _environments_environments__WEBPACK_IMPORTED_MODULE_4__["environment"].apiUrl;

    var RegisterService =
    /*#__PURE__*/
    function () {
      function RegisterService(http) {
        _classCallCheck(this, RegisterService);

        this.http = http;
        this.baseurl = "http://localhost:44334/api"; // Http Headers

        this.httpOptions = {
          headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
            "Content-Type": "application/json"
          })
        };
      } // POST


      _createClass(RegisterService, [{
        key: "CreateRegisto",
        value: function CreateRegisto(data) {
          return this.http.post(BACKEND_URL + "/Account/Register", JSON.stringify(data), this.httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.errorHandl));
        } // Error handling

      }, {
        key: "errorHandl",
        value: function errorHandl(error) {
          var errorMessage = "";

          if (error.error instanceof ErrorEvent) {
            // Get client-side error
            errorMessage = error.error.message;
          } else {
            // Get server-side error
            errorMessage = "Error Code: ".concat(error.status, "\nMessage: ").concat(error.message);
          }

          console.log(errorMessage);
          return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(errorMessage);
        }
      }]);

      return RegisterService;
    }();

    RegisterService.ɵfac = function RegisterService_Factory(t) {
      return new (t || RegisterService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]));
    };

    RegisterService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: RegisterService,
      factory: RegisterService.ɵfac,
      providedIn: "root"
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RegisterService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: "root"
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
  "./src/app/shared/tipoUtilizador/tipoUtilizador.service.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/shared/tipoUtilizador/tipoUtilizador.service.ts ***!
    \*****************************************************************/

  /*! exports provided: TipoUtilizadorService */

  /***/
  function srcAppSharedTipoUtilizadorTipoUtilizadorServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TipoUtilizadorService", function () {
      return TipoUtilizadorService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _environments_environments__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./../environments/environments */
    "./src/app/shared/environments/environments.ts");

    var BACKEND_URL = _environments_environments__WEBPACK_IMPORTED_MODULE_4__["environment"].apiUrl;

    var TipoUtilizadorService =
    /*#__PURE__*/
    function () {
      function TipoUtilizadorService(http) {
        _classCallCheck(this, TipoUtilizadorService);

        this.http = http;
        this.baseurl = 'http://localhost:44334/api'; // Http Headers

        /* httpOptions = {
           headers: new HttpHeaders({
             'Content-Type': 'application/json'
           })
         }
        */

        this.httpOptions = {
          headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + localStorage.getItem('token')
          }),
          withCredentials: true
        };
      } // GET por IDS


      _createClass(TipoUtilizadorService, [{
        key: "GetOneTipoUtilizador",
        value: function GetOneTipoUtilizador(IDTipo) {
          return this.http.get(BACKEND_URL + '/TipoUtilizadors/' + IDTipo, this.httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.errorHandl));
        } // GET all 

      }, {
        key: "GetTiposUtilizador",
        value: function GetTiposUtilizador() {
          return this.http.get(BACKEND_URL + '/TipoUtilizadors', this.httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.errorHandl));
        } // Error handling

      }, {
        key: "errorHandl",
        value: function errorHandl(error) {
          var errorMessage = '';

          if (error.error instanceof ErrorEvent) {
            // Get client-side error
            errorMessage = error.error.message;
          } else {
            // Get server-side error
            errorMessage = "Error Code: ".concat(error.status, "\nMessage: ").concat(error.message);
          }

          console.log(errorMessage);
          return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(errorMessage);
        }
      }]);

      return TipoUtilizadorService;
    }();

    TipoUtilizadorService.ɵfac = function TipoUtilizadorService_Factory(t) {
      return new (t || TipoUtilizadorService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]));
    };

    TipoUtilizadorService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: TipoUtilizadorService,
      factory: TipoUtilizadorService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TipoUtilizadorService, [{
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
    /*! C:\Users\José Carlos\Documents\GitHub\ProjetoGestaoManuntencao\GM_Client\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map