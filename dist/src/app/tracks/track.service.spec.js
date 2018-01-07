"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var track_service_1 = require("./track.service");
describe('TrackService', function () {
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({
            providers: [track_service_1.TrackService]
        });
    });
    it('should be created', testing_1.inject([track_service_1.TrackService], function (service) {
        expect(service).toBeTruthy();
    }));
});
//# sourceMappingURL=track.service.spec.js.map