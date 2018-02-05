import { Component, OnInit } from '@angular/core';
import { Track } from '../track';
import { Album } from '../../albums/album';
import { TrackService } from '../track.service';
import { TrackDetailsComponent } from '../track-details/track-details.component';

@Component({
  selector: 'app-track-list',
  templateUrl: './track-list.component.html',
  styleUrls: ['./track-list.component.css']
})
export class TrackListComponent implements OnInit {

  tracks: Track[];
  albums: Album[];
  selectedTrack: Track;

  constructor(private trackService: TrackService) { }

  ngOnInit() {
    this.trackService
      .getTracks()
      .then((tracks: Track[]) => {
        this.tracks = tracks.map(track => track);
      });
  }

  private getIndexOfTrack = (trackId: String) => {
    return this.tracks.findIndex((track) => {
      return track._id === trackId;
    })
  }

  selectTrack(track: Track | null) {
    this.selectedTrack = track;
  }

  createNewTrack() {
    var track: Track = {
      name: '',
      albumId: '',
      albumNumber: 0,
      mainArtistId: '',
      artistsIds: [],
      youtubeUrl: '',
      soundcloudUrl: '',
      trackImageUrl: '',
      description: ''
    }

    this.selectTrack(track);
  }

  deleteTrack = (trackId: String) => {
    var idx = this.getIndexOfTrack(trackId);
    if (idx !== -1) {
      this.tracks.splice(idx, 1);
      this.selectTrack(null);
    }
    return this.tracks;
  }

  addTrack = (track: Track) => {
    this.tracks.push(track);
    this.selectTrack(track);
    return this.tracks;
  }

  updateTrack = (track: Track) => {
    var idx = this.getIndexOfTrack(track._id);
    if (idx !== -1) {
      this.tracks[idx] = track;
      this.selectTrack(track);
    }
    return this.tracks;
  }
}
