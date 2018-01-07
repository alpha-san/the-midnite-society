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
var album_1 = require("../album");
var album_service_1 = require("../album.service");
var user_service_1 = require("../../users/user.service");
var AlbumDetailsComponent = /** @class */ (function () {
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
        core_1.Input(),
        __metadata("design:type", album_1.Album)
    ], AlbumDetailsComponent.prototype, "album", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Function)
    ], AlbumDetailsComponent.prototype, "createHandler", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Function)
    ], AlbumDetailsComponent.prototype, "updateHandler", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Function)
    ], AlbumDetailsComponent.prototype, "deleteHandler", void 0);
    AlbumDetailsComponent = __decorate([
        core_1.Component({
            selector: 'album-details',
            templateUrl: './album-details.component.html',
            styleUrls: ['./album-details.component.css']
        }),
        __metadata("design:paramtypes", [album_service_1.AlbumService, user_service_1.UserService])
    ], AlbumDetailsComponent);
    return AlbumDetailsComponent;
}());
exports.AlbumDetailsComponent = AlbumDetailsComponent;
//# sourceMappingURL=album-details.component.js.map