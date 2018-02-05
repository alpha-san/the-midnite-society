import { Component, OnInit, Input, SimpleChanges } from '@angular/core';
import { Track } from '../track';
import { Album } from '../../albums/album';
import { TrackService } from '../track.service';
import { AlbumService } from '../../albums/album.service';
import { IMultiSelectOption, IMultiSelectSettings } from 'angular-2-dropdown-multiselect';

@Component({
  selector: 'track-details',
  templateUrl: './track-details.component.html',
  styleUrls: ['./track-details.component.css']
})
export class TrackDetailsComponent implements OnInit {

  @Input() track: Track;

  @Input() createHandler: Function;
  @Input() updateHandler: Function;
  @Input() deleteHandler: Function;

  albums: Album[]
  selectedAlbum: string
  selectedAlbumOptions: IMultiSelectOption[]
  mySettings: IMultiSelectSettings = {
    selectionLimit: 1
  }

  constructor(private albumService: AlbumService, private trackService: TrackService) {}

  ngOnInit() {
    if (this.track) {
      this.selectedAlbum = this.track.album_id;
    }

    this.albumService
      .getAlbums()
      .then((albums: Album[]) => {
        if (albums) {
          console.log('response', albums);
          this.albums = albums;

          this.selectedAlbumOptions = albums.map((album) => {
            return { id: album._id, name: album.name }
          })
        }
      })
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('changes',  changes);
    if (changes.track.currentValue) {
      if (this.track.album_id.length)
        this.selectedAlbum = this.track.album_id;
    } else {
      this.selectedAlbum = null;
    }
  }

  createTrack(track: Track) {
    // track.album_id = this.selectedAlbum[0]
    this.trackService.createTrack(track).then((newTrack: Track) => {
      this.createHandler(newTrack);
    })
  }

  updateTrack(track: Track) {
    this.trackService.updateTrack(track).then((updatedTrack: Track) => {
      this.updateHandler(updatedTrack);
    })
  }

  deleteTrack(trackId: String): void {
    this.trackService.deleteTrack(trackId).then((deletedTrackId: String) => {
      this.deleteHandler(deletedTrackId);
    })
  }

}
