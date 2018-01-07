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
var album_service_1 = require("../album.service");
var AlbumsListComponent = /** @class */ (function () {
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
        core_1.Component({
            selector: 'app-albums-list',
            templateUrl: './albums-list.component.html',
            styleUrls: ['./albums-list.component.css'],
            providers: [album_service_1.AlbumService]
        }),
        __metadata("design:paramtypes", [album_service_1.AlbumService])
    ], AlbumsListComponent);
    return AlbumsListComponent;
}());
exports.AlbumsListComponent = AlbumsListComponent;
//# sourceMappingURL=albums-list.component.js.map