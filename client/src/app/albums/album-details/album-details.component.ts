import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Album } from '../album';
import { Artist } from '../../artists/artist';
import { AlbumService } from '../album.service';
import { ArtistService } from '../../artists/artist.service';
import { IMultiSelectOption, IMultiSelectSettings } from 'angular-2-dropdown-multiselect';

@Component({
  selector: 'album-details',
  templateUrl: './album-details.component.html',
  styleUrls: ['./album-details.component.css']
})
export class AlbumDetailsComponent implements OnInit, OnChanges {
  @Input() album: Album;

  @Input() createHandler: Function;
  @Input() updateHandler: Function;
  @Input() deleteHandler: Function;

  artists: Artist[]
  selectedUser: string
  selectUserOptions: IMultiSelectOption[]
  mySettings: IMultiSelectSettings = {
    selectionLimit: 1
  }

  constructor(private albumService: AlbumService, private artistService: ArtistService) { }

  ngOnInit() {
    if (this.album) {
      this.selectedUser = this.album.artistId;
    }

    this.artistService
      .getArtists()
      .then((artists: Artist[]) => {
        if (artists) {
          console.log('response', artists);
          this.artists = artists;

          this.selectUserOptions = artists.map((artist) => {
            return { id: artist._id, name: artist.artistName }
          })
        }
      })
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('changes',  changes);
    if (changes.album.currentValue) {
      if (this.album.artistId.length)
        this.selectedUser = this.album.artistId;
    } else {
      this.selectedUser = null;
    }
  }

  createAlbum(album: Album) {
    album.artistId = this.selectedUser[0]
    this.albumService.createAlbum(album).then((newAlbum: Album) => {
      this.createHandler(newAlbum);
    })
  }

  updateAlbum(album: Album) {
    this.albumService.updateAlbum(album).then((updatedAlbum: Album) => {
      this.updateHandler(updatedAlbum);
    })
  }

  deleteAlbum(albumId: String): void {
    this.albumService.deleteAlbum(albumId).then((deletedAlbumId: String) => {
      this.deleteHandler(deletedAlbumId);
    })
  }
}
