import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { UserDetailsComponent } from './users/user-details/user-details.component';
import { UserListComponent } from './users/user-list/user-list.component';
import { AlbumsListComponent } from './albums/albums-list/albums-list.component';
import { AlbumDetailsComponent } from './albums/album-details/album-details.component';
import { TrackListComponent } from './tracks/track-list/track-list.component';
import { TrackDetailsComponent } from './tracks/track-details/track-details.component';

import { AuthService } from './auth/auth.service';
import { UserService } from './users/user.service';
import { AlbumService } from './albums/album.service';
import { ArtistService } from './artists/artist.service';

import { MultiselectDropdownModule } from 'angular-2-dropdown-multiselect';
import { CallBackComponent } from './call-back/call-back.component';
import { ArtistShowComponent } from './artists/artist-show/artist-show.component';
import { ArtistListComponent } from './artists/artist-list/artist-list.component';
import { ArtistDetailsComponent } from './artists/artist-details/artist-details.component';
import { ArtistAdminListComponent } from './artists/artist-admin-list/artist-admin-list.component';
import { HomeComponent } from './home/home.component';

// define routes
const appRoutes: Routes = [
  // public routes
  { 
    path: 'artist/all', 
    component: ArtistListComponent ,
    data: { title: 'Artists' }
  },
  { 
    path: 'artists/show', 
    component: ArtistShowComponent ,
    data: { title: 'Artists' }
  },
  {
    path: 'callback',
    component: CallBackComponent,
    data: { title: 'Loading'}
  },
  // admin routes
  { 
    path: 'users', 
    component: UserListComponent ,
    data: { title: 'Users' }
  },
  { 
    path: 'artists', 
    component: ArtistAdminListComponent ,
    data: { title: 'Artists' }
  },
  {
    path: 'albums',
    component: AlbumsListComponent,
    data: { title: 'Albums'}
  },
  {
    path: 'tracks',
    component: TrackListComponent,
    data: { title: 'Tracks'}
  }
];

@NgModule({
  declarations: [
    AppComponent,
    UserDetailsComponent,
    UserListComponent,
    AlbumsListComponent,
    AlbumDetailsComponent,
    TrackListComponent,
    TrackDetailsComponent,
    CallBackComponent,
    ArtistShowComponent,
    ArtistListComponent,
    ArtistAdminListComponent,
    ArtistDetailsComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true }
    ),
    MultiselectDropdownModule,
    HttpClientModule
  ],
  providers: [AuthService, UserService, AlbumService, ArtistService],
  bootstrap: [AppComponent]
})
export class AppModule { }
