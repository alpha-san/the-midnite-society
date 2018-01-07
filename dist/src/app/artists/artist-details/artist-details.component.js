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
var artist_1 = require("../artist");
var artist_service_1 = require("../artist.service");
var ArtistDetailsComponent = /** @class */ (function () {
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
        core_1.Input(),
        __metadata("design:type", artist_1.Artist)
    ], ArtistDetailsComponent.prototype, "artist", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Function)
    ], ArtistDetailsComponent.prototype, "createHandler", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Function)
    ], ArtistDetailsComponent.prototype, "updateHandler", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Function)
    ], ArtistDetailsComponent.prototype, "deleteHandler", void 0);
    ArtistDetailsComponent = __decorate([
        core_1.Component({
            selector: 'artist-details',
            templateUrl: './artist-details.component.html',
            styleUrls: ['./artist-details.component.css']
        }),
        __metadata("design:paramtypes", [artist_service_1.ArtistService])
    ], ArtistDetailsComponent);
    return ArtistDetailsComponent;
}());
exports.ArtistDetailsComponent = ArtistDetailsComponent;
//# sourceMappingURL=artist-details.component.js.map