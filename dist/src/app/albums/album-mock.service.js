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
var album_1 = require("./album");
var AlbumMockService = /** @class */ (function () {
    function AlbumMockService() {
    }
    AlbumMockService.prototype.getAlbums = function () {
        var promise = new Promise(function (resolve, reject) {
            var result = [new album_1.Album(), new album_1.Album()];
            resolve(result);
        });
        return promise;
    };
    AlbumMockService.prototype.createAlbum = function (newAlbum) {
        var promise = new Promise(function (resolve, reject) {
            resolve(new album_1.Album(newAlbum));
        });
        return promise;
    };
    AlbumMockService.prototype.deleteAlbum = function (delAlbumId) {
        var promise = new Promise(function (resolve, reject) {
            resolve(delAlbumId);
        });
        return promise;
    };
    AlbumMockService.prototype.updateAlbum = function (putAlbum) {
        var promise = new Promise(function (resolve, reject) {
            resolve(new album_1.Album(putAlbum));
        });
        return promise;
    };
    AlbumMockService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [])
    ], AlbumMockService);
    return AlbumMockService;
}());
exports.AlbumMockService = AlbumMockService;
//# sourceMappingURL=album-mock.service.js.map