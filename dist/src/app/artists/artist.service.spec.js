"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var artist_service_1 = require("./artist.service");
describe('ArtistService', function () {
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({
            providers: [artist_service_1.ArtistService]
        });
    });
    it('should be created', testing_1.inject([artist_service_1.ArtistService], function (service) {
        expect(service).toBeTruthy();
    }));
});
//# sourceMappingURL=artist.service.spec.js.map