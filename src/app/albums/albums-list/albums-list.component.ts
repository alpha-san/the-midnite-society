import { Component, OnInit } from '@angular/core';
import { Album } from '../album';
import { AlbumService } from '../album.service';
// import { User } from '../../users/user';
import { AlbumDetailsComponent } from '../album-details/album-details.component';

@Component({
  selector: 'app-albums-list',
  templateUrl: './albums-list.component.html',
  styleUrls: ['./albums-list.component.css'],
  providers: [AlbumService]
})
export class AlbumsListComponent implements OnInit {

  albums: Album[]
  selectedAlbum: Album

  constructor(private albumService: AlbumService) { }

  ngOnInit() {
    this.albumService
      .getAlbums()
      .then((albums: Album[]) => {
        this.albums = albums.map((album) => album)
      })
    }

    private getIndexOfAlbum = (albumId: String) => {
      return this.albums.findIndex((album) => {
        return album._id === albumId;
      })
    }

    selectAlbum(album: Album | null) {
      this.selectedAlbum = album;
    }

    createNewAlbum() {
      var album: Album = {
        name: '',
        artist_id: '',
        albumImageUrl: '',
        description: '',
        soundcloudUrl: '',
        youtubeUrl: '',
      }

      this.selectAlbum(album);
    }

    deleteAlbum = (albumId: String) => {
      var idx = this.getIndexOfAlbum(albumId);
      if (idx !== -1) {
        this.albums.splice(idx, 1);
        this.selectAlbum(null);
      }
      return this.albums;
    }

    addAlbum = (album: Album) => {
      this.albums.push(album);
      this.selectAlbum(album);
      return this.albums;
    }

    updateAlbum = (album: Album) => {
      console.log('updateAlubm', album);
      var idx = this.getIndexOfAlbum(album._id);
      if (idx !== -1) {
        this.albums[idx] = album;
        this.selectAlbum(album);
      }
      return this.albums;
    }

}
