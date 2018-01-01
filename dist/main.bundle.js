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
    function Album() {
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

module.exports = "<h1>The Midnite Society</h1>\n<nav>\n  <a routerLink=\"/artists\" routerLinkActive=\"active\">Artists</a>\n  <a routerLink=\"/albums\" routerLinkActive=\"active\">Albums</a>\n  <a routerLink=\"/tracks\" routerLinkActive=\"active\">Tracks</a>\n  <a routerLink=\"/blog\" routerLinkActive=\"active\">Blog</a>\n  <a routerLink=\"/store\" routerLinkActive=\"active\">Store</a>\n</nav>\n<router-outlet></router-outlet>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        })
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__users_user_service__ = __webpack_require__("../../../../../src/app/users/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__albums_album_service__ = __webpack_require__("../../../../../src/app/albums/album.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_angular_2_dropdown_multiselect__ = __webpack_require__("../../../../angular-2-dropdown-multiselect/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
















// define routes
var appRoutes = [
    {
        path: 'artists',
        component: __WEBPACK_IMPORTED_MODULE_8__users_user_list_user_list_component__["a" /* UserListComponent */],
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
                __WEBPACK_IMPORTED_MODULE_12__tracks_track_details_track_details_component__["a" /* TrackDetailsComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* RouterModule */].forRoot(appRoutes, { enableTracing: true }),
                __WEBPACK_IMPORTED_MODULE_15_angular_2_dropdown_multiselect__["a" /* MultiselectDropdownModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_common_http__["a" /* HttpClientModule */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_13__users_user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_14__albums_album_service__["a" /* AlbumService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
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

module.exports = "<div *ngIf=\"user\" class=\"row\">\n  <div class=\"col-md-12\">\n    <h2 *ngIf=\"user._id\">User Details</h2>\n    <h2 *ngIf=\"!user._id\">New User</h2>\n  </div>\n</div>\n<div *ngIf=\"user\" class=\"row\">\n  <form class=\"col-md-12\">\n    <div class=\"form-group\">\n      <label for=\"user-firstname\">First Name</label>\n      <input class=\"form-control\" name=\"user-firstname\" [(ngModel)]=\"user.firstName\" placeholder=\"First Name\"/>\n    </div>\n    <div class=\"form-group\">\n      <label for=\"user-lastname\">Last Name</label>\n      <input class=\"form-control\" name=\"user-lastname\" [(ngModel)]=\"user.lastName\" placeholder=\"Last Name\"/>\n    </div>\n    <div class=\"form-group\">\n      <label for=\"user-artistname\">Artist Name</label>\n      <input class=\"form-control\" name=\"user-artistname\" [(ngModel)]=\"user.artistName\" placeholder=\"diplo\"/>\n    </div>\n    <div class=\"form-group\">\n      <label for=\"user-details\">Details</label>\n      <input class=\"form-control\" name=\"user-details\" [(ngModel)]=\"user.details\" placeholder=\"Details\"/>\n    </div>\n    <div class=\"form-group\">\n      <label for=\"user-email\">Email</label>\n      <input class=\"form-control\" name=\"user-email\" [(ngModel)]=\"user.email\" placeholder=\"meh@meh.com\"/>\n    </div>\n    <div class=\"form-group\">\n      <label for=\"user-soundcloud-url\">Soundcloud URL</label>\n      <input class=\"form-control\" name=\"user-soundcloud-url\" [(ngModel)]=\"user.soundcloudUrl\" placeholder=\"soundcloud.com/dopeartistzcollective\"/>\n    </div>\n    <div class=\"form-group\">\n      <label for=\"user-twitter-url\">Twitter URL</label>\n      <input class=\"form-control\" name=\"user-twitter-url\" [(ngModel)]=\"user.twitterUrl\" placeholder=\"twitter.com/the_donald\"/>\n    </div>\n    <div class=\"form-group\">\n      <label for=\"user-facebook-url\">Facebook URL</label>\n      <input class=\"form-control\" name=\"user-facebook-url\" [(ngModel)]=\"user.facebookUrl\" placeholder=\"facebook.com/\"/>\n    </div>\n    <div class=\"form-group\">\n      <label for=\"user-instagram-url\">Instagram URL</label>\n      <input class=\"form-control\" name=\"user-instagram-url\" [(ngModel)]=\"user.instagramUrl\" placeholder=\"instagram.com/\"/>\n    </div>\n    <div class=\"form-group\">\n      <label for=\"user-snapchat-url\">Snapchat ID</label>\n      <input class=\"form-control\" name=\"user-snapchat-url\" [(ngModel)]=\"user.snapchatUrl\" placeholder=\"snapchat.com/\"/>\n    </div>\n    <div class=\"form-group\">\n      <label for=\"user-phone-number\">Phone Number</label>\n      <input class=\"form-control\" name=\"user-phone-number\" [(ngModel)]=\"user.phone\" placeholder=\"(800)888-8888\"/>\n    </div>\n    <button class=\"btn btn-primary\" *ngIf=\"!user._id\" (click)=\"createUser(user)\">Create</button>\n    <button class=\"btn btn-info\" *ngIf=\"user._id\" (click)=\"updateUser(user)\">Update</button>\n    <button class=\"btn btn-danger\" *ngIf=\"user._id\" (click)=\"deleteUser(user._id)\">Delete</button>\n  </form>\n</div>"

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
    };
    UserDetailsComponent.prototype.createUser = function (user) {
        var _this = this;
        this.userService.createUser(user).then(function (newUser) {
            _this.createHandler(newUser);
        });
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
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__user__["a" /* User */])
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
            firstName: '',
            lastName: '',
            artistName: '',
            details: '',
            email: '',
            soundcloudUrl: '',
            twitterUrl: '',
            facebookUrl: '',
            instagramUrl: '',
            snapchatUrl: '',
            phone: ''
        };
        this.selectUser(user);
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return User; });
var User = (function () {
    function User() {
    }
    return User;
}());



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
    production: false
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