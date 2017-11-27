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

import { UserService } from './users/user.service';
import { AlbumService } from './albums/album.service';

import { MultiselectDropdownModule } from 'angular-2-dropdown-multiselect';

// define routes
const appRoutes: Routes = [
  { 
    path: 'artists', 
    component: UserListComponent ,
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
    TrackDetailsComponent
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
  providers: [UserService, AlbumService],
  bootstrap: [AppComponent]
})
export class AppModule { }
