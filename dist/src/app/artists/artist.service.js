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
var ArtistService = /** @class */ (function () {
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
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.Http])
    ], ArtistService);
    return ArtistService;
}());
exports.ArtistService = ArtistService;
//# sourceMappingURL=artist.service.js.map