webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/albums/album-details/album-details.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/albums/album-details/album-details.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"album\" class=\"row\">\n  <div class=\"col-md-12\">\n    <h2 *ngIf=\"album._id\">Album Details</h2>\n    <h2 *ngIf=\"!album._id\">New Album</h2>\n  </div>\n</div>\n<!-- selectedUsers: string[]\nselectUserOptions: IMultiSelectOption[] -->\n<div *ngIf=\"album\" class=\"row\">\n  <form class=\"col-md-12\">\n    <div class=\"form-group\">\n      <label for=\"album-name\">Album Name</label>\n      <input class=\"form-control\" name=\"album-name\" [(ngModel)]=\"album.name\" placeholder=\"Album Name\"/>\n    </div>\n    <div class=\"form-group\">\n      <label for=\"album-artists\">Artist</label>\n      <ss-multiselect-dropdown name=\"album-aritsts\" [options]=\"selectUserOptions\" [(ngModel)]=\"selectedUser\" [settings]=\"mySettings\"></ss-multiselect-dropdown>\n    </div>\n    <div class=\"form-group\">\n      <label for=\"album-image-url\">Album Image Url</label>\n      <input class=\"form-control\" name=\"album-image-url\" [(ngModel)]=\"album.albumImageUrl\" placeholder=\"Album Image URL\"/>\n    </div>\n    <div class=\"form-group\">\n      <label for=\"album-description\">Album Description</label>\n      <input class=\"form-control\" name=\"album-description\" [(ngModel)]=\"album.description\" placeholder=\"Album Description\"/>\n    </div>\n    <div class=\"form-group\">\n      <label for=\"album-soundcloud-url\">Soundcloud Url</label>\n      <input class=\"form-control\" name=\"album-soundcloud-url\" [(ngModel)]=\"album.soundcloudUrl\" placeholder=\"Album Soundcloud URL\"/>\n    </div>\n    <div class=\"form-group\">\n      <label for=\"album-youtube-url\">Youtube Url</label>\n      <input class=\"form-control\" name=\"album-youtube-url\" [(ngModel)]=\"album.youtubeUrl\" placeholder=\"Youtube URL\"/>\n    </div>\n    <button class=\"btn btn-primary\" *ngIf=\"!album._id\" (click)=\"createAlbum(album)\">Create</button>\n    <button class=\"btn btn-info\" *ngIf=\"album._id\" (click)=\"updateAlbum(album)\">Update</button>\n    <button class=\"btn btn-danger\" *ngIf=\"album._id\" (click)=\"deleteAlbum(album._id)\">Delete</button>\n  </form>\n</div>"

/***/ }),

/***/ "../../../../../src/app/albums/album-details/album-details.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AlbumDetailsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__album__ = __webpack_require__("../../../../../src/app/albums/album.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__album_service__ = __webpack_require__("../../../../../src/app/albums/album.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__users_user_service__ = __webpack_require__("../../../../../src/app/users/user.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AlbumDetailsComponent = (function () {
    function AlbumDetailsComponent(albumService, userService) {
        this.albumService = albumService;
        this.userService = userService;
        this.mySettings = {
            selectionLimit: 1
        };
    }
    AlbumDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userService
            .getUsers()
            .then(function (users) {
            if (users !== undefined) {
                _this.users = users.map(function (user) {
                    return user;
                });
                _this.selectUserOptions = users.map(function (user) {
                    return { id: user._id, name: user.firstName + ' ' + user.lastName };
                });
            }
        });
        console.log('details:ngOnInit', this.album);
    };
    AlbumDetailsComponent.prototype.createAlbum = function (album) {
        var _this = this;
        album.artist_id = this.selectedUser[0];
        this.albumService.createAlbum(album).then(function (newAlbum) {
            _this.createHandler(newAlbum);
        });
    };
    AlbumDetailsComponent.prototype.updateAlbum = function (album) {
        var _this = this;
        console.log('details:updateAlbum', album);
        this.albumService.updateAlbum(album).then(function (updatedAlbum) {
            _this.updateHandler(updatedAlbum);
        });
    };
    AlbumDetailsComponent.prototype.deleteAlbum = function (albumId) {
        var _this = this;
        this.albumService.deleteAlbum(albumId).then(function (deletedAlbumId) {
            _this.deleteHandler(deletedAlbumId);
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__album__["a" /* Album */])
    ], AlbumDetailsComponent.prototype, "album", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Function)
    ], AlbumDetailsComponent.prototype, "createHandler", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Function)
    ], AlbumDetailsComponent.prototype, "updateHandler", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Function)
    ], AlbumDetailsComponent.prototype, "deleteHandler", void 0);
    AlbumDetailsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'album-details',
            template: __webpack_require__("../../../../../src/app/albums/album-details/album-details.component.html"),
            styles: [__webpack_require__("../../../../../src/app/albums/album-details/album-details.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__album_service__["a" /* AlbumService */], __WEBPACK_IMPORTED_MODULE_3__users_user_service__["a" /* UserService */]])
    ], AlbumDetailsComponent);
    return AlbumDetailsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/albums/album.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AlbumService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AlbumService = (function () {
    function AlbumService(http) {
        this.http = http;
        this.albumsUrl = '/api/albums';
    }
    AlbumService.prototype.getAlbums = function () {
        return this.http.get(this.albumsUrl)
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    AlbumService.prototype.createAlbum = function (newAlbum) {
        return this.http.post(this.albumsUrl, newAlbum)
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    AlbumService.prototype.deleteAlbum = function (delAlbumId) {
        return this.http.delete(this.albumsUrl + '/' + delAlbumId)
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    AlbumService.prototype.updateAlbum = function (putAlbum) {
        console.log('service:updateAlubm', putAlbum);
        var putUrl = this.albumsUrl + '/' + putAlbum._id;
        console.log('putUrl', putUrl);
        return this.http.put(putUrl, putAlbum)
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    AlbumService.prototype.handleError = function (error) {
        var errMsg = (error.message) ? error.message :
            error.status ? error.status + " - " + error.statusText : 'Server error';
    };
    AlbumService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
    ], AlbumService);
    return AlbumService;
}());



/***/ }),

/***/ "../../../../../src/app/albums/album.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Album; });
var Album = (function () {
    function Album(values) {
        if (values === void 0) { values = {}; }
        Object.assign(this, values);
    }
    return Album;
}());



/***/ }),

/***/ "../../../../../src/app/albums/albums-list/albums-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/albums/albums-list/albums-list.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-md-5\">\n    <h2>Albums</h2>\n    <ul class=\"list-group\">\n      <li class=\"list-group-item\"\n        *ngFor=\"let album of albums\"\n        (click)=\"selectAlbum(album)\"\n        [class.active]=\"album === selectedAlbum\">\n        {{album.name}}\n      </li>\n    </ul>\n    <button class=\"btn btn-warning\" (click)=\"createNewAlbum()\">New</button>\n  </div>\n  <div class=\"col-md-5 col-md-offset-2\">\n    <album-details\n      [album]=\"selectedAlbum\"\n      [createHandler]=\"addAlbum\"\n      [updateHandler]=\"updateAlbum\"\n      [deleteHandler]=\"deleteAlbum\">\n    </album-details>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/albums/albums-list/albums-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AlbumsListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__album_service__ = __webpack_require__("../../../../../src/app/albums/album.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AlbumsListComponent = (function () {
    function AlbumsListComponent(albumService) {
        var _this = this;
        this.albumService = albumService;
        this.getIndexOfAlbum = function (albumId) {
            return _this.albums.findIndex(function (album) {
                return album._id === albumId;
            });
        };
        this.deleteAlbum = function (albumId) {
            var idx = _this.getIndexOfAlbum(albumId);
            if (idx !== -1) {
                _this.albums.splice(idx, 1);
                _this.selectAlbum(null);
            }
            return _this.albums;
        };
        this.addAlbum = function (album) {
            _this.albums.push(album);
            _this.selectAlbum(album);
            return _this.albums;
        };
        this.updateAlbum = function (album) {
            console.log('updateAlubm', album);
            var idx = _this.getIndexOfAlbum(album._id);
            if (idx !== -1) {
                _this.albums[idx] = album;
                _this.selectAlbum(album);
            }
            return _this.albums;
        };
    }
    AlbumsListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.albumService
            .getAlbums()
            .then(function (albums) {
            _this.albums = albums.map(function (album) { return album; });
        });
    };
    AlbumsListComponent.prototype.selectAlbum = function (album) {
        this.selectedAlbum = album;
    };
    AlbumsListComponent.prototype.createNewAlbum = function () {
        var album = {
            name: '',
            artist_id: '',
            albumImageUrl: '',
            description: '',
            soundcloudUrl: '',
            youtubeUrl: '',
        };
        this.selectAlbum(album);
    };
    AlbumsListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-albums-list',
            template: __webpack_require__("../../../../../src/app/albums/albums-list/albums-list.component.html"),
            styles: [__webpack_require__("../../../../../src/app/albums/albums-list/albums-list.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_1__album_service__["a" /* AlbumService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__album_service__["a" /* AlbumService */]])
    ], AlbumsListComponent);
    return AlbumsListComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-inverse navbar-fixed-top\">\n  <div class=\"container\">\n    <div class=\"navbar-header\">\n      <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#navbar\" aria-expanded=\"false\"\n        aria-controls=\"navbar\">\n        <span class=\"sr-only\">Toggle navigation</span>\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n      </button>\n      <a class=\"navbar-brand\" href=\"#\">The Midnite Society</a>\n    </div>\n    <div id=\"navbar\" class=\"collapse navbar-collapse\">\n      <ul class=\"nav navbar-nav\">\n        <li class=\"active\">\n          <a routerLink=\"/\" routerlinkActive=\"active\">Home</a>\n        </li>\n        <li>\n          <a routerLink=\"/work\" routerLinkActive=\"active\">Creations</a>\n        </li>\n        <li>\n          <a routerLink=\"/artist/all\" routerLinkActive=\"active\">Artists</a>\n        </li>\n        <li>\n          <a routerLink=\"/blog\" routerLinkActive=\"active\">Blog</a>\n        </li>\n        <li>\n          <a routerLink=\"/store\" routerLinkActive=\"active\">Shop</a>\n        </li>\n        <li>\n          <a href=\"#contact\">Contact</a>\n        </li>\n        <li class=\"dropdown\">\n          <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\" role=\"button\" aria-haspopup=\"true\" aria-expanded=\"false\">Admin Menu\n            <span class=\"caret\"></span>\n          </a>\n          <ul class=\"dropdown-menu\">\n            <li>\n              <a routerLink=\"/users\" routerLinkActive=\"active\">Users</a>\n            </li>\n            <li>\n              <a routerLink=\"/artists\" routerLinkActive=\"active\">Artists</a>\n            </li>\n            <li>\n              <a routerLink=\"/albums\" routerLinkActive=\"active\">Albums</a>\n            </li>\n            <li>\n              <a routerLink=\"/tracks\" routerLinkActive=\"active\">Tracks</a>\n            </li>\n            <li>\n              <a routerLink=\"/blogs\" routerLinkActive=\"active\">Blogs</a>\n            </li>\n          </ul>\n        </li>\n      </ul>\n    </div>\n    <!--/.nav-collapse -->\n  </div>\n</nav>\n\n<!-- <nav>\n  <a routerLink=\"/artists\" routerLinkActive=\"active\">Artists</a>\n  <a routerLink=\"/albums\" routerLinkActive=\"active\">Albums</a>\n  <a routerLink=\"/tracks\" routerLinkActive=\"active\">Tracks</a>\n  <a routerLink=\"/blog\" routerLinkActive=\"active\">Blog</a>\n  <a routerLink=\"/store\" routerLinkActive=\"active\">Store</a>\n</nav> -->\n\n<div class=\"container\">\n  <div>\n    <button class=\"btn btn-primary btn-margin\" routerLink=\"/\">\n      Home\n    </button>\n\n    <button class=\"btn btn-primary btn-margin\" *ngIf=\"!auth.isAuthenticated()\" (click)=\"auth.login()\">\n      Log In\n    </button>\n\n    <button class=\"btn btn-primary btn-margin\" *ngIf=\"auth.isAuthenticated()\" (click)=\"auth.logout()\">\n      Log Out\n    </button>\n  </div>\n  <h1>{{ title }}</h1>\n  <router-outlet></router-outlet>\n</div>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__auth_auth_service__ = __webpack_require__("../../../../../src/app/auth/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// access environment variables from here
// ex: environment.foo
var AppComponent = (function () {
    function AppComponent(authService) {
        this.authService = authService;
        this.title = 'The Midnite Society';
        this.auth = authService;
        this.auth.handleAuthentication();
        console.log('we out here', mongoose);
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__auth_auth_service__["a" /* AuthService */]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__users_user_details_user_details_component__ = __webpack_require__("../../../../../src/app/users/user-details/user-details.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__users_user_list_user_list_component__ = __webpack_require__("../../../../../src/app/users/user-list/user-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__albums_albums_list_albums_list_component__ = __webpack_require__("../../../../../src/app/albums/albums-list/albums-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__albums_album_details_album_details_component__ = __webpack_require__("../../../../../src/app/albums/album-details/album-details.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__tracks_track_list_track_list_component__ = __webpack_require__("../../../../../src/app/tracks/track-list/track-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__tracks_track_details_track_details_component__ = __webpack_require__("../../../../../src/app/tracks/track-details/track-details.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__auth_auth_service__ = __webpack_require__("../../../../../src/app/auth/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__users_user_service__ = __webpack_require__("../../../../../src/app/users/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__albums_album_service__ = __webpack_require__("../../../../../src/app/albums/album.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__artists_artist_service__ = __webpack_require__("../../../../../src/app/artists/artist.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_angular_2_dropdown_multiselect__ = __webpack_require__("../../../../angular-2-dropdown-multiselect/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__call_back_call_back_component__ = __webpack_require__("../../../../../src/app/call-back/call-back.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__artists_artist_show_artist_show_component__ = __webpack_require__("../../../../../src/app/artists/artist-show/artist-show.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__artists_artist_list_artist_list_component__ = __webpack_require__("../../../../../src/app/artists/artist-list/artist-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__artists_artist_details_artist_details_component__ = __webpack_require__("../../../../../src/app/artists/artist-details/artist-details.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__artists_artist_admin_list_artist_admin_list_component__ = __webpack_require__("../../../../../src/app/artists/artist-admin-list/artist-admin-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__home_home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
























// define routes
var appRoutes = [
    // public routes
    {
        path: 'artist/all',
        component: __WEBPACK_IMPORTED_MODULE_20__artists_artist_list_artist_list_component__["a" /* ArtistListComponent */],
        data: { title: 'Artists' }
    },
    {
        path: 'artists/show',
        component: __WEBPACK_IMPORTED_MODULE_19__artists_artist_show_artist_show_component__["a" /* ArtistShowComponent */],
        data: { title: 'Artists' }
    },
    {
        path: 'callback',
        component: __WEBPACK_IMPORTED_MODULE_18__call_back_call_back_component__["a" /* CallBackComponent */],
        data: { title: 'Loading' }
    },
    // admin routes
    {
        path: 'users',
        component: __WEBPACK_IMPORTED_MODULE_8__users_user_list_user_list_component__["a" /* UserListComponent */],
        data: { title: 'Users' }
    },
    {
        path: 'artists',
        component: __WEBPACK_IMPORTED_MODULE_22__artists_artist_admin_list_artist_admin_list_component__["a" /* ArtistAdminListComponent */],
        data: { title: 'Artists' }
    },
    {
        path: 'albums',
        component: __WEBPACK_IMPORTED_MODULE_9__albums_albums_list_albums_list_component__["a" /* AlbumsListComponent */],
        data: { title: 'Albums' }
    },
    {
        path: 'tracks',
        component: __WEBPACK_IMPORTED_MODULE_11__tracks_track_list_track_list_component__["a" /* TrackListComponent */],
        data: { title: 'Tracks' }
    }
];
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_7__users_user_details_user_details_component__["a" /* UserDetailsComponent */],
                __WEBPACK_IMPORTED_MODULE_8__users_user_list_user_list_component__["a" /* UserListComponent */],
                __WEBPACK_IMPORTED_MODULE_9__albums_albums_list_albums_list_component__["a" /* AlbumsListComponent */],
                __WEBPACK_IMPORTED_MODULE_10__albums_album_details_album_details_component__["a" /* AlbumDetailsComponent */],
                __WEBPACK_IMPORTED_MODULE_11__tracks_track_list_track_list_component__["a" /* TrackListComponent */],
                __WEBPACK_IMPORTED_MODULE_12__tracks_track_details_track_details_component__["a" /* TrackDetailsComponent */],
                __WEBPACK_IMPORTED_MODULE_18__call_back_call_back_component__["a" /* CallBackComponent */],
                __WEBPACK_IMPORTED_MODULE_19__artists_artist_show_artist_show_component__["a" /* ArtistShowComponent */],
                __WEBPACK_IMPORTED_MODULE_20__artists_artist_list_artist_list_component__["a" /* ArtistListComponent */],
                __WEBPACK_IMPORTED_MODULE_22__artists_artist_admin_list_artist_admin_list_component__["a" /* ArtistAdminListComponent */],
                __WEBPACK_IMPORTED_MODULE_21__artists_artist_details_artist_details_component__["a" /* ArtistDetailsComponent */],
                __WEBPACK_IMPORTED_MODULE_23__home_home_component__["a" /* HomeComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* RouterModule */].forRoot(appRoutes, { enableTracing: true }),
                __WEBPACK_IMPORTED_MODULE_17_angular_2_dropdown_multiselect__["a" /* MultiselectDropdownModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_common_http__["a" /* HttpClientModule */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_13__auth_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_14__users_user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_15__albums_album_service__["a" /* AlbumService */], __WEBPACK_IMPORTED_MODULE_16__artists_artist_service__["a" /* ArtistService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/artists/artist-admin-list/artist-admin-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/artists/artist-admin-list/artist-admin-list.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  artist-admin-list works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/artists/artist-admin-list/artist-admin-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ArtistAdminListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ArtistAdminListComponent = (function () {
    function ArtistAdminListComponent() {
    }
    ArtistAdminListComponent.prototype.ngOnInit = function () {
    };
    ArtistAdminListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-artist-admin-list',
            template: __webpack_require__("../../../../../src/app/artists/artist-admin-list/artist-admin-list.component.html"),
            styles: [__webpack_require__("../../../../../src/app/artists/artist-admin-list/artist-admin-list.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ArtistAdminListComponent);
    return ArtistAdminListComponent;
}());



/***/ }),

/***/ "../../../../../src/app/artists/artist-details/artist-details.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/artists/artist-details/artist-details.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"artist\" class=\"row\">\n  <div class=\"col-md-12\">\n    <h2 *ngIf=\"artist._id\">Artist Details</h2>\n    <h2 *ngIf=\"!artist._id\">New Artist</h2>\n  </div>\n</div>\n<div *ngIf=\"artist\" class=\"row\">\n  <form class=\"col-md-12\">\n    <div class=\"form-group\">\n      <label for=\"artist-firstname\">First Name</label>\n      <input class=\"form-control\" name=\"artist-firstname\" [(ngModel)]=\"artist.firstName\" placeholder=\"First Name\"/>\n    </div>\n    <div class=\"form-group\">\n      <label for=\"artist-lastname\">Last Name</label>\n      <input class=\"form-control\" name=\"artist-lastname\" [(ngModel)]=\"artist.lastName\" placeholder=\"Last Name\"/>\n    </div>\n    <div class=\"form-group\">\n      <label for=\"artist-artistname\">Artist Name</label>\n      <input class=\"form-control\" name=\"artist-artistname\" [(ngModel)]=\"artist.artistName\" placeholder=\"diplo\"/>\n    </div>\n    <div class=\"form-group\">\n      <label for=\"artist-details\">Details</label>\n      <input class=\"form-control\" name=\"artist-details\" [(ngModel)]=\"artist.details\" placeholder=\"Details\"/>\n    </div>\n    <div class=\"form-group\">\n      <label for=\"artist-email\">Email</label>\n      <input class=\"form-control\" name=\"artist-email\" [(ngModel)]=\"artist.email\" placeholder=\"meh@meh.com\"/>\n    </div>\n    <div class=\"form-group\">\n      <label for=\"artist-soundcloud-url\">Soundcloud URL</label>\n      <input class=\"form-control\" name=\"artist-soundcloud-url\" [(ngModel)]=\"artist.soundcloudUrl\" placeholder=\"soundcloud.com/dopeartistzcollective\"/>\n    </div>\n    <div class=\"form-group\">\n      <label for=\"artist-twitter-url\">Twitter URL</label>\n      <input class=\"form-control\" name=\"artist-twitter-url\" [(ngModel)]=\"artist.twitterUrl\" placeholder=\"twitter.com/the_donald\"/>\n    </div>\n    <div class=\"form-group\">\n      <label for=\"artist-facebook-url\">Facebook URL</label>\n      <input class=\"form-control\" name=\"artist-facebook-url\" [(ngModel)]=\"artist.facebookUrl\" placeholder=\"facebook.com/\"/>\n    </div>\n    <div class=\"form-group\">\n      <label for=\"artist-instagram-url\">Instagram URL</label>\n      <input class=\"form-control\" name=\"artist-instagram-url\" [(ngModel)]=\"artist.instagramUrl\" placeholder=\"instagram.com/\"/>\n    </div>\n    <div class=\"form-group\">\n      <label for=\"artist-snapchat-url\">Snapchat ID</label>\n      <input class=\"form-control\" name=\"artist-snapchat-url\" [(ngModel)]=\"artist.snapchatUrl\" placeholder=\"snapchat.com/\"/>\n    </div>\n    <div class=\"form-group\">\n      <label for=\"artist-phone-number\">Phone Number</label>\n      <input class=\"form-control\" name=\"artist-phone-number\" [(ngModel)]=\"artist.phone\" placeholder=\"(800)888-8888\"/>\n    </div>\n    <button class=\"btn btn-primary\" *ngIf=\"!artist._id\" (click)=\"createArtist(artist)\">Create</button>\n    <button class=\"btn btn-info\" *ngIf=\"artist._id\" (click)=\"updateArtist(artist)\">Update</button>\n    <button class=\"btn btn-danger\" *ngIf=\"artist._id\" (click)=\"deleteArtist(artist._id)\">Delete</button>\n  </form>\n</div>"

/***/ }),

/***/ "../../../../../src/app/artists/artist-details/artist-details.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ArtistDetailsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__artist__ = __webpack_require__("../../../../../src/app/artists/artist.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__artist_service__ = __webpack_require__("../../../../../src/app/artists/artist.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ArtistDetailsComponent = (function () {
    function ArtistDetailsComponent(artistService) {
        this.artistService = artistService;
    }
    ArtistDetailsComponent.prototype.ngOnInit = function () {
    };
    ArtistDetailsComponent.prototype.createArtist = function (artist) {
        var _this = this;
        this.artistService.createArtist(artist).then(function (newArtist) {
            _this.createHandler(newArtist);
        });
    };
    ArtistDetailsComponent.prototype.updateArtist = function (artist) {
        var _this = this;
        this.artistService.updateArtist(artist).then(function (updatedArtist) {
            _this.updateHandler(updatedArtist);
        });
    };
    ArtistDetailsComponent.prototype.deleteArtist = function (artistId) {
        var _this = this;
        this.artistService.deleteArtist(artistId).then(function (deletedArtistId) {
            _this.deleteHandler(deletedArtistId);
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__artist__["a" /* Artist */])
    ], ArtistDetailsComponent.prototype, "artist", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Function)
    ], ArtistDetailsComponent.prototype, "createHandler", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Function)
    ], ArtistDetailsComponent.prototype, "updateHandler", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Function)
    ], ArtistDetailsComponent.prototype, "deleteHandler", void 0);
    ArtistDetailsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'artist-details',
            template: __webpack_require__("../../../../../src/app/artists/artist-details/artist-details.component.html"),
            styles: [__webpack_require__("../../../../../src/app/artists/artist-details/artist-details.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__artist_service__["a" /* ArtistService */]])
    ], ArtistDetailsComponent);
    return ArtistDetailsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/artists/artist-list/artist-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/artists/artist-list/artist-list.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-md-5\">\n    <h2>Artists</h2>\n    <ul class=\"list-group\">\n      <li class=\"list-group-item\" *ngFor=\"let artists of artists\" (click)=\"selectArtist(artist)\" [class.active]=\"artist === selectedArtist\">\n        {{artist.firstName}} {{artist.lastName}}\n      </li>\n    </ul>\n    <button class=\"btn btn-warning\" (click)=\"createNewArtist()\">New</button>\n  </div>\n  <div class=\"col-md-5 col-md-offset-2\">\n    <artist-details \n      [artist]=\"selectedArtist\" \n      [createHandler]=\"createNewArtist\" \n      [updateHandler]=\"updateArtist\" \n      [deleteHandler]=\"deleteArtist\">\n    </artist-details>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/artists/artist-list/artist-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ArtistListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__artist_service__ = __webpack_require__("../../../../../src/app/artists/artist.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ArtistListComponent = (function () {
    function ArtistListComponent(artistService) {
        var _this = this;
        this.artistService = artistService;
        this.getIndexOfArtist = function (artistId) {
            return _this.artists.findIndex(function (artist) {
                return artist._id === artistId;
            });
        };
        this.deleteArtist = function (artistId) {
            var idx = _this.getIndexOfArtist(artistId);
            if (idx !== -1) {
                _this.artists.splice(idx, 1);
                _this.selectArtist(null);
            }
            return _this.artists;
        };
        this.addArtist = function (artist) {
            _this.artists.push(artist);
            _this.selectArtist(artist);
            return _this.artists;
        };
        this.updateArtist = function (artist) {
            var idx = _this.getIndexOfArtist(artist._id);
            if (idx !== -1) {
                _this.artists[idx] = artist;
                _this.selectArtist(artist);
            }
            return _this.artists;
        };
    }
    ArtistListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.artistService
            .getArtists()
            .then(function (artists) {
            if (artists !== undefined) {
                _this.artists = artists.map(function (artist) {
                    return artist;
                });
            }
        });
    };
    ArtistListComponent.prototype.selectArtist = function (artist) {
        this.selectedArtist = artist;
    };
    ArtistListComponent.prototype.createNewArtist = function () {
        var artist = {
            firstName: '',
            lastName: '',
            details: '',
            email: '',
            phone: '',
            artistName: '',
            soundcloudUrl: '',
            twitterUrl: '',
            facebookUrl: '',
            instagramUrl: '',
            snapchatUrl: '',
            tagLine: '',
            biography: '',
            isAdmin: false
        };
        this.selectArtist(artist);
    };
    ArtistListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'artist-list',
            template: __webpack_require__("../../../../../src/app/artists/artist-list/artist-list.component.html"),
            styles: [__webpack_require__("../../../../../src/app/artists/artist-list/artist-list.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_1__artist_service__["a" /* ArtistService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__artist_service__["a" /* ArtistService */]])
    ], ArtistListComponent);
    return ArtistListComponent;
}());



/***/ }),

/***/ "../../../../../src/app/artists/artist-show/artist-show.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/artists/artist-show/artist-show.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  artist-show works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/artists/artist-show/artist-show.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ArtistShowComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ArtistShowComponent = (function () {
    function ArtistShowComponent() {
    }
    ArtistShowComponent.prototype.ngOnInit = function () {
    };
    ArtistShowComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-artist-show',
            template: __webpack_require__("../../../../../src/app/artists/artist-show/artist-show.component.html"),
            styles: [__webpack_require__("../../../../../src/app/artists/artist-show/artist-show.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ArtistShowComponent);
    return ArtistShowComponent;
}());



/***/ }),

/***/ "../../../../../src/app/artists/artist.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ArtistService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ArtistService = (function () {
    function ArtistService(http) {
        this.http = http;
        this.artistsUrl = '/api/artists';
    }
    // get('/api/artists')
    ArtistService.prototype.getArtists = function () {
        return this.http.get(this.artistsUrl)
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    // post("/api/artists")
    ArtistService.prototype.createArtist = function (newArtist) {
        return this.http.post(this.artistsUrl, newArtist)
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    // get("/api/contacts/:id") endpoint not used by Angular app
    // delete("/api/contacts/:id")
    ArtistService.prototype.deleteArtist = function (delArtistId) {
        return this.http.delete(this.artistsUrl + '/' + delArtistId)
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    // put("/api/contacts/:id")
    ArtistService.prototype.updateArtist = function (putArtist) {
        var putUrl = this.artistsUrl + '/' + putArtist._id;
        return this.http.put(putUrl, putArtist)
            .toPromise()
            .then(function (response) {
            return response.json();
        })
            .catch(this.handleError);
    };
    ArtistService.prototype.handleError = function (error) {
        var errMsg = (error.message) ? error.message :
            error.status ? error.status + " - " + error.statusText : 'Server error';
        console.error(errMsg); // log to console instead
    };
    ArtistService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
    ], ArtistService);
    return ArtistService;
}());



/***/ }),

/***/ "../../../../../src/app/artists/artist.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Artist; });
var Artist = (function () {
    function Artist(values) {
        if (values === void 0) { values = {}; }
        Object.assign(this, values);
    }
    return Artist;
}());



/***/ }),

/***/ "../../../../../src/app/auth/auth.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_filter__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/filter.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_auth0_js__ = __webpack_require__("../../../../auth0-js/src/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_auth0_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_auth0_js__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthService = (function () {
    function AuthService(router) {
        this.router = router;
        this.auth0 = new __WEBPACK_IMPORTED_MODULE_3_auth0_js__["WebAuth"]({
            clientID: 'YfSxnJ0UEBPNggkB91LRFo3pCfnA2Yzk',
            domain: 'the-midnite-society.auth0.com',
            responseType: 'token id_token',
            audience: 'https://the-midnite-society.auth0.com/userinfo',
            redirectUri: 'http://localhost:8080/callback',
            scope: 'openid'
        });
    }
    AuthService.prototype.login = function () {
        this.auth0.authorize();
    };
    AuthService.prototype.handleAuthentication = function () {
        var _this = this;
        // add new users here!
        this.auth0.parseHash(function (err, authResult) {
            if (authResult && authResult.accessToken && authResult.idToken) {
                window.location.hash = '';
                _this.setSession(authResult);
                // this.router.navigate(['/home']);
                _this.router.navigate(['/']);
            }
            else if (err) {
                // this.router.navigate(['/home']);
                _this.router.navigate(['/']);
                console.log(err);
            }
        });
    };
    AuthService.prototype.setSession = function (authResult) {
        // Set the time that the access token will expire at
        var expiresAt = JSON.stringify((authResult.expiresIn * 1000) + new Date().getTime());
        localStorage.setItem('access_token', authResult.accessToken);
        localStorage.setItem('id_token', authResult.idToken);
        localStorage.setItem('expires_at', expiresAt);
    };
    AuthService.prototype.logout = function () {
        // Remove tokens and expiry time from localStorage
        localStorage.removeItem('access_token');
        localStorage.removeItem('id_token');
        localStorage.removeItem('expires_at');
        // Go back to the home route
        this.router.navigate(['/']);
    };
    AuthService.prototype.isAuthenticated = function () {
        // Check whether the current time is past the
        // access token's expiry time
        var expiresAt = JSON.parse(localStorage.getItem('expires_at'));
        return new Date().getTime() < expiresAt;
    };
    AuthService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "../../../../../src/app/call-back/call-back.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/call-back/call-back.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"loading\">\n  <img src=\"assets/loading.svg\" alt=\"loading\">\n</div>"

/***/ }),

/***/ "../../../../../src/app/call-back/call-back.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CallBackComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CallBackComponent = (function () {
    function CallBackComponent() {
    }
    CallBackComponent.prototype.ngOnInit = function () {
    };
    CallBackComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-call-back',
            template: __webpack_require__("../../../../../src/app/call-back/call-back.component.html"),
            styles: [__webpack_require__("../../../../../src/app/call-back/call-back.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], CallBackComponent);
    return CallBackComponent;
}());



/***/ }),

/***/ "../../../../../src/app/home/home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  home works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-home',
            template: __webpack_require__("../../../../../src/app/home/home.component.html"),
            styles: [__webpack_require__("../../../../../src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "../../../../../src/app/tracks/track-details/track-details.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/tracks/track-details/track-details.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  track-details works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/tracks/track-details/track-details.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TrackDetailsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TrackDetailsComponent = (function () {
    function TrackDetailsComponent() {
    }
    TrackDetailsComponent.prototype.ngOnInit = function () {
    };
    TrackDetailsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-track-details',
            template: __webpack_require__("../../../../../src/app/tracks/track-details/track-details.component.html"),
            styles: [__webpack_require__("../../../../../src/app/tracks/track-details/track-details.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], TrackDetailsComponent);
    return TrackDetailsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/tracks/track-list/track-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/tracks/track-list/track-list.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  track-list works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/tracks/track-list/track-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TrackListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TrackListComponent = (function () {
    function TrackListComponent() {
    }
    TrackListComponent.prototype.ngOnInit = function () {
    };
    TrackListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-track-list',
            template: __webpack_require__("../../../../../src/app/tracks/track-list/track-list.component.html"),
            styles: [__webpack_require__("../../../../../src/app/tracks/track-list/track-list.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], TrackListComponent);
    return TrackListComponent;
}());



/***/ }),

/***/ "../../../../../src/app/users/user-details/user-details.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/users/user-details/user-details.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"user\" class=\"row\">\n  <div class=\"col-md-12\">\n    <h2 *ngIf=\"user._id\">User Details</h2>\n    <h2 *ngIf=\"!user._id\">New User</h2>\n  </div>\n</div>\n<div *ngIf=\"user\" class=\"row\">\n  <form class=\"col-md-12\">\n    <div class=\"form-group\">\n      <label for=\"user-firstname\">First Name</label>\n      <input class=\"form-control\" name=\"user-firstname\" [(ngModel)]=\"user.firstName\" placeholder=\"First Name\"/>\n    </div>\n    <div class=\"form-group\">\n      <label for=\"user-lastname\">Last Name</label>\n      <input class=\"form-control\" name=\"user-lastname\" [(ngModel)]=\"user.lastName\" placeholder=\"Last Name\"/>\n    </div>\n    <div class=\"form-group\">\n      <label for=\"user-details\">Details</label>\n      <input class=\"form-control\" name=\"user-details\" [(ngModel)]=\"user.details\" placeholder=\"Details\"/>\n    </div>\n    <div class=\"form-group\">\n      <label for=\"user-email\">Email</label>\n      <input class=\"form-control\" name=\"user-email\" [(ngModel)]=\"user.email\" placeholder=\"meh@meh.com\"/>\n    </div>\n    <div class=\"form-group\">\n      <label for=\"user-instagram-url\">Instagram URL</label>\n      <input class=\"form-control\" name=\"user-instagram-url\" [(ngModel)]=\"user.instagramUrl\" placeholder=\"instagram.com/\"/>\n    </div>\n    <div class=\"form-group\">\n      <label for=\"user-phone-number\">Phone Number</label>\n      <input class=\"form-control\" name=\"user-phone-number\" [(ngModel)]=\"user.phone\" placeholder=\"(800)888-8888\"/>\n    </div>\n    <button class=\"btn btn-primary\" *ngIf=\"!user._id\" (click)=\"createUser(user)\">Create</button>\n    <button class=\"btn btn-info\" *ngIf=\"user._id\" (click)=\"updateUser(user)\">Update</button>\n    <button class=\"btn btn-danger\" *ngIf=\"user._id\" (click)=\"deleteUser(user._id)\">Delete</button>\n  </form>\n</div>"

/***/ }),

/***/ "../../../../../src/app/users/user-details/user-details.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserDetailsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__user__ = __webpack_require__("../../../../../src/app/users/user.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__user_service__ = __webpack_require__("../../../../../src/app/users/user.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UserDetailsComponent = (function () {
    function UserDetailsComponent(userService) {
        this.userService = userService;
    }
    UserDetailsComponent.prototype.ngOnInit = function () {
        var t = new __WEBPACK_IMPORTED_MODULE_1__user__["a" /* TestMongoose */]();
        t.sumthin();
        this.validationTest();
    };
    UserDetailsComponent.prototype.createUser = function (user) {
        var _this = this;
        if (this.validateUser(user)) {
            this.userService.createUser(user).then(function (newUser) {
                _this.createHandler(newUser);
            });
        }
    };
    UserDetailsComponent.prototype.updateUser = function (user) {
        var _this = this;
        this.userService.updateUser(user).then(function (updatedUser) {
            _this.updateHandler(updatedUser);
        });
    };
    UserDetailsComponent.prototype.deleteUser = function (userId) {
        var _this = this;
        this.userService.deleteUser(userId).then(function (deletedUserId) {
            _this.deleteHandler(deletedUserId);
        });
    };
    UserDetailsComponent.prototype.validationTest = function () {
        var foodSchema = new mongoose.Schema({ name: { type: String, required: true } });
        var doc = new mongoose.Document({}, foodSchema);
        doc.validate(function (error) {
            console.log('error', error);
        });
    };
    UserDetailsComponent.prototype.validateUser = function (user) {
        // let doc = new mongoose.Document({}, UserSchema);
        // doc.validate((error) => {
        //   assert.ok(error);
        //   assert.equal('Path `firstName` is required', error.errors['firstName'].message);
        //   console.log('validating', error);
        //   return false;
        // });
        return true;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], UserDetailsComponent.prototype, "user", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Function)
    ], UserDetailsComponent.prototype, "createHandler", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Function)
    ], UserDetailsComponent.prototype, "updateHandler", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Function)
    ], UserDetailsComponent.prototype, "deleteHandler", void 0);
    UserDetailsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'user-details',
            template: __webpack_require__("../../../../../src/app/users/user-details/user-details.component.html"),
            styles: [__webpack_require__("../../../../../src/app/users/user-details/user-details.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__user_service__["a" /* UserService */]])
    ], UserDetailsComponent);
    return UserDetailsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/users/user-list/user-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/users/user-list/user-list.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-md-5\">\n    <h2>Users</h2>\n    <ul class=\"list-group\">\n      <li class=\"list-group-item\"\n        *ngFor=\"let user of users\"\n        (click)=\"selectUser(user)\"\n        [class.active]=\"user === selectedUser\">\n        {{user.firstName}} {{user.lastName}}\n      </li>\n    </ul>\n    <button class=\"btn btn-warning\" (click)=\"createNewUser()\">New</button>\n  </div>\n  <div class=\"col-md-5 col-md-offset-2\">\n    <user-details\n      [user]=\"selectedUser\"\n      [createHandler]=\"addUser\"\n      [updateHandler]=\"updateUser\"\n      [deleteHandler]=\"deleteUser\">\n    </user-details>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/users/user-list/user-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__user_service__ = __webpack_require__("../../../../../src/app/users/user.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UserListComponent = (function () {
    function UserListComponent(userService) {
        var _this = this;
        this.userService = userService;
        this.getIndexOfUser = function (userId) {
            return _this.users.findIndex(function (user) {
                return user._id === userId;
            });
        };
        this.deleteUser = function (userId) {
            var idx = _this.getIndexOfUser(userId);
            if (idx !== -1) {
                _this.users.splice(idx, 1);
                _this.selectUser(null);
            }
            return _this.users;
        };
        this.addUser = function (user) {
            _this.users.push(user);
            _this.selectUser(user);
            return _this.users;
        };
        this.updateUser = function (user) {
            var idx = _this.getIndexOfUser(user._id);
            if (idx !== -1) {
                _this.users[idx] = user;
                _this.selectUser(user);
            }
            return _this.users;
        };
    }
    UserListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userService
            .getUsers()
            .then(function (users) {
            if (users !== undefined) {
                _this.users = users.map(function (user) {
                    return user;
                });
            }
        });
    };
    UserListComponent.prototype.selectUser = function (user) {
        this.selectedUser = user;
    };
    UserListComponent.prototype.createNewUser = function () {
        var user = {
            _id: '',
            firstName: '',
            lastName: '',
            details: '',
            email: '',
            phone: '',
            createdAt: new Date(),
            modifiedAt: new Date()
        };
        this.selectUser(user);
        // UserModel.createUser('', '', '', '', '').then(res => {
        //   this.selectUser(<IUserModel>res);
        // }, err => {
        //   if (err) { 
        //     console.log(err.message);
        //   }
        // });
        // var user: User = {
        //   firstName: '',
        //   lastName: '',
        //   details: '',
        //   email: '',
        //   phone: ''
        // }
    };
    UserListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'user-list',
            template: __webpack_require__("../../../../../src/app/users/user-list/user-list.component.html"),
            styles: [__webpack_require__("../../../../../src/app/users/user-list/user-list.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_1__user_service__["a" /* UserService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__user_service__["a" /* UserService */]])
    ], UserListComponent);
    return UserListComponent;
}());



/***/ }),

/***/ "../../../../../src/app/users/user.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UserService = (function () {
    function UserService(http) {
        this.http = http;
        this.usersUrl = '/api/users';
    }
    // get('/api/users')
    UserService.prototype.getUsers = function () {
        return this.http.get(this.usersUrl)
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    // post("/api/users")
    UserService.prototype.createUser = function (newUser) {
        return this.http.post(this.usersUrl, newUser)
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    // get("/api/contacts/:id") endpoint not used by Angular app
    // delete("/api/contacts/:id")
    UserService.prototype.deleteUser = function (delUserId) {
        return this.http.delete(this.usersUrl + '/' + delUserId)
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    // put("/api/contacts/:id")
    UserService.prototype.updateUser = function (putUser) {
        var putUrl = this.usersUrl + '/' + putUser._id;
        return this.http.put(putUrl, putUser)
            .toPromise()
            .then(function (response) {
            return response.json();
        })
            .catch(this.handleError);
    };
    UserService.prototype.handleError = function (error) {
        var errMsg = (error.message) ? error.message :
            error.status ? error.status + " - " + error.statusText : 'Server error';
        console.error(errMsg); // log to console instead
    };
    UserService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "../../../../../src/app/users/user.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export Schema */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TestMongoose; });
/* unused harmony export UserSchema */
/* unused harmony export UserModel */
var Schema = mongoose.Schema;
var schema = new Schema({
    firstName: {
        type: String,
        require: true
    },
    lastName: {
        type: String,
        require: true
    },
    details: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true,
        lowercase: true,
        unique: true,
        required: 'Email address is required',
        validate: {
            validator: function (email) {
                var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
                return re.test(email);
            },
            message: 'Please fill a valid email address'
        },
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
    },
    phone: {
        type: String,
        validate: {
            validator: function (v) {
                return /\d{3}-\d{3}-\d{4}/.test(v);
            },
            message: '{VALUE} is not a valid phone number!'
        },
        required: [true, 'User phone number required']
    },
    createdAt: {
        type: Date,
        required: false
    },
    modifiedAt: {
        type: Date,
        required: false
    }
}).pre('save', function (next) {
    if (this._doc) {
        var doc = this._doc;
        var now = new Date();
        if (!doc.createdAt) {
            doc.createdAt = now;
        }
        doc.modifiedAt = now;
    }
    next();
    return this;
});
var TestMongoose = (function () {
    function TestMongoose() {
    }
    TestMongoose.prototype.sumthin = function () { console.log('mongoose'); };
    return TestMongoose;
}());

// export let UserSchema = mongoose.model<IUserModel>('user', schema, 'users', true);
var UserSchema = schema;
var UserModel = (function () {
    function UserModel(userModel) {
        this._userModel = userModel;
    }
    Object.defineProperty(UserModel.prototype, "firstName", {
        get: function () {
            return this._userModel.firstName;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UserModel.prototype, "lastName", {
        get: function () {
            return this._userModel.lastName;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UserModel.prototype, "email", {
        get: function () {
            return this._userModel.email;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UserModel.prototype, "phone", {
        get: function () {
            return this._userModel.phone;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UserModel.prototype, "details", {
        get: function () {
            return this._userModel.details;
        },
        enumerable: true,
        configurable: true
    });
    return UserModel;
}());

Object.seal(UserModel);
// export class User {
//     _id?: string;
//     firstName: string;
//     lastName: string;
//     details: string;
//     email: string;
//     phone: string;
//     constructor(values: Object = {}) {
//         Object.assign(this, values);
//     }
// }


/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false,
    mongodbUri: 'mongodb://localhost/themidnitesociety'
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__polyfills_ts__ = __webpack_require__("../../../../../src/polyfills.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");





if (__WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["_13" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_2__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_3__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ "../../../../../src/polyfills.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es7_reflect__ = __webpack_require__("../../../../core-js/es7/reflect.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es7_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_core_js_es7_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_zone_js_dist_zone__ = __webpack_require__("../../../../zone.js/dist/zone.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_zone_js_dist_zone___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_zone_js_dist_zone__);
/**
 * This file includes polyfills needed by Angular and is loaded before the app.
 * You can add your own extra polyfills to this file.
 *
 * This file is divided into 2 sections:
 *   1. Browser polyfills. These are applied before loading ZoneJS and are sorted by browsers.
 *   2. Application imports. Files imported after ZoneJS that should be loaded before your main
 *      file.
 *
 * The current setup is for so-called "evergreen" browsers; the last versions of browsers that
 * automatically update themselves. This includes Safari >= 10, Chrome >= 55 (including Opera),
 * Edge >= 13 on the desktop, and iOS 10 and Chrome on mobile.
 *
 * Learn more in https://angular.io/docs/ts/latest/guide/browser-support.html
 */
/***************************************************************************************************
 * BROWSER POLYFILLS
 */
/** IE9, IE10 and IE11 requires all of the following polyfills. **/
// import 'core-js/es6/symbol';
// import 'core-js/es6/object';
// import 'core-js/es6/function';
// import 'core-js/es6/parse-int';
// import 'core-js/es6/parse-float';
// import 'core-js/es6/number';
// import 'core-js/es6/math';
// import 'core-js/es6/string';
// import 'core-js/es6/date';
// import 'core-js/es6/array';
// import 'core-js/es6/regexp';
// import 'core-js/es6/map';
// import 'core-js/es6/weak-map';
// import 'core-js/es6/set';
/** IE10 and IE11 requires the following for NgClass support on SVG elements */
// import 'classlist.js';  // Run `npm install --save classlist.js`.
/** IE10 and IE11 requires the following for the Reflect API. */
// import 'core-js/es6/reflect';
/** Evergreen browsers require these. **/
// Used for reflect-metadata in JIT. If you use AOT (and only Angular decorators), you can remove.

/**
 * Required to support Web Animations `@angular/platform-browser/animations`.
 * Needed for: All but Chrome, Firefox and Opera. http://caniuse.com/#feat=web-animation
 **/
// import 'web-animations-js';  // Run `npm install --save web-animations-js`.
/***************************************************************************************************
 * Zone JS is required by Angular itself.
 */
 // Included with Angular CLI.
/***************************************************************************************************
 * APPLICATION IMPORTS
 */
/**
 * Date, currency, decimal and percent pipes.
 * Needed for: All but Chrome, Firefox, Edge, IE11 and Safari 10
 */
// import 'intl';  // Run `npm install --save intl`.
/**
 * Need to import at least one locale-data with intl.
 */
// import 'intl/locale-data/jsonp/en';


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map