"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var album_service_1 = require("../album.service");
var album_mock_service_1 = require("../album-mock.service");
var albums_list_component_1 = require("./albums-list.component");
describe('AlbumsListComponent', function () {
    var component;
    var fixture;
    beforeEach(testing_1.async(function () {
        testing_1.TestBed.configureTestingModule({
            declarations: [albums_list_component_1.AlbumsListComponent],
            providers: [
                {
                    provide: album_service_1.AlbumService,
                    use: album_mock_service_1.AlbumMockService
                }
            ]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = testing_1.TestBed.createComponent(albums_list_component_1.AlbumsListComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
    it('should...', testing_1.inject([album_mock_service_1.AlbumMockService], function (service) {
        expect(service).toBeTruthy();
    }));
});
//# sourceMappingURL=albums-list.component.spec.js.map