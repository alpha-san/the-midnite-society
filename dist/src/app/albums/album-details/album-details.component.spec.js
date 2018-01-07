"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var forms_1 = require("@angular/forms");
var album_service_1 = require("../album.service");
var album_mock_service_1 = require("../album-mock.service");
var user_service_1 = require("../../users/user.service");
var user_mock_service_1 = require("../../users/user-mock.service");
var angular_2_dropdown_multiselect_1 = require("angular-2-dropdown-multiselect");
var album_details_component_1 = require("./album-details.component");
describe('AlbumDetailsComponent', function () {
    var component;
    var fixture;
    beforeEach(testing_1.async(function () {
        testing_1.TestBed.configureTestingModule({
            imports: [
                forms_1.FormsModule,
                angular_2_dropdown_multiselect_1.MultiselectDropdownModule
            ],
            declarations: [album_details_component_1.AlbumDetailsComponent],
            providers: [
                {
                    provide: album_service_1.AlbumService,
                    useClass: album_mock_service_1.AlbumMockService
                },
                {
                    provide: user_service_1.UserService,
                    useClass: user_mock_service_1.UserMockService
                }
            ]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = testing_1.TestBed.createComponent(album_details_component_1.AlbumDetailsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=album-details.component.spec.js.map