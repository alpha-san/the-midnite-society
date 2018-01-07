"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var album_service_1 = require("./album.service");
var http_1 = require("@angular/http");
describe('Album.ServiceService', function () {
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({
            imports: [http_1.HttpModule],
            providers: [album_service_1.AlbumService]
        });
    });
    it('should be created', testing_1.inject([album_service_1.AlbumService], function (service) {
        expect(service).toBeTruthy();
    }));
});
//# sourceMappingURL=album.service.spec.js.map