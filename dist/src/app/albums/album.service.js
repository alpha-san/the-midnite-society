"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
require("rxjs/add/operator/toPromise");
var AlbumService = /** @class */ (function () {
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
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.Http])
    ], AlbumService);
    return AlbumService;
}());
exports.AlbumService = AlbumService;
//# sourceMappingURL=album.service.js.map