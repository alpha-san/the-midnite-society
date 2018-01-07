"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var platform_browser_1 = require("@angular/platform-browser");
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/http");
var router_1 = require("@angular/router");
var http_2 = require("@angular/common/http");
var app_component_1 = require("./app.component");
var user_details_component_1 = require("./users/user-details/user-details.component");
var user_list_component_1 = require("./users/user-list/user-list.component");
var albums_list_component_1 = require("./albums/albums-list/albums-list.component");
var album_details_component_1 = require("./albums/album-details/album-details.component");
var track_list_component_1 = require("./tracks/track-list/track-list.component");
var track_details_component_1 = require("./tracks/track-details/track-details.component");
var auth_service_1 = require("./auth/auth.service");
var user_service_1 = require("./users/user.service");
var album_service_1 = require("./albums/album.service");
var artist_service_1 = require("./artists/artist.service");
var angular_2_dropdown_multiselect_1 = require("angular-2-dropdown-multiselect");
var call_back_component_1 = require("./call-back/call-back.component");
var artist_show_component_1 = require("./artists/artist-show/artist-show.component");
var artist_list_component_1 = require("./artists/artist-list/artist-list.component");
var artist_details_component_1 = require("./artists/artist-details/artist-details.component");
var artist_admin_list_component_1 = require("./artists/artist-admin-list/artist-admin-list.component");
var home_component_1 = require("./home/home.component");
// define routes
var appRoutes = [
    // public routes
    {
        path: 'artist/all',
        component: artist_list_component_1.ArtistListComponent,
        data: { title: 'Artists' }
    },
    {
        path: 'artists/show',
        component: artist_show_component_1.ArtistShowComponent,
        data: { title: 'Artists' }
    },
    {
        path: 'callback',
        component: call_back_component_1.CallBackComponent,
        data: { title: 'Loading' }
    },
    // admin routes
    {
        path: 'users',
        component: user_list_component_1.UserListComponent,
        data: { title: 'Users' }
    },
    {
        path: 'artists',
        component: artist_admin_list_component_1.ArtistAdminListComponent,
        data: { title: 'Artists' }
    },
    {
        path: 'albums',
        component: albums_list_component_1.AlbumsListComponent,
        data: { title: 'Albums' }
    },
    {
        path: 'tracks',
        component: track_list_component_1.TrackListComponent,
        data: { title: 'Tracks' }
    }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                user_details_component_1.UserDetailsComponent,
                user_list_component_1.UserListComponent,
                albums_list_component_1.AlbumsListComponent,
                album_details_component_1.AlbumDetailsComponent,
                track_list_component_1.TrackListComponent,
                track_details_component_1.TrackDetailsComponent,
                call_back_component_1.CallBackComponent,
                artist_show_component_1.ArtistShowComponent,
                artist_list_component_1.ArtistListComponent,
                artist_admin_list_component_1.ArtistAdminListComponent,
                artist_details_component_1.ArtistDetailsComponent,
                home_component_1.HomeComponent
            ],
            imports: [
                platform_browser_1.BrowserModule,
                forms_1.FormsModule,
                http_1.HttpModule,
                router_1.RouterModule.forRoot(appRoutes, { enableTracing: true }),
                angular_2_dropdown_multiselect_1.MultiselectDropdownModule,
                http_2.HttpClientModule
            ],
            providers: [auth_service_1.AuthService, user_service_1.UserService, album_service_1.AlbumService, artist_service_1.ArtistService],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map