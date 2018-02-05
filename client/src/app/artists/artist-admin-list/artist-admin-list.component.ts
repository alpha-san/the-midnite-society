import { Component, OnInit } from '@angular/core';
import { Artist } from '../artist';
import { ArtistService } from '../artist.service';
import { ArtistDetailsComponent } from '../artist-details/artist-details.component';

@Component({
  selector: 'app-artist-admin-list',
  templateUrl: './artist-admin-list.component.html',
  styleUrls: ['./artist-admin-list.component.css']
})
export class ArtistAdminListComponent implements OnInit {

  artists: Artist[];
  selectedArtist: Artist;

  constructor(private artistService: ArtistService) { }

  ngOnInit() {
    this.artistService
      .getArtists()
      .then((artists: Artist[]) => {
        if (artists !== undefined) {
          this.artists = artists.map((artist) => {
            return artist;
          })
        }
      })
  }

  private getIndexOfArtist = (artistId: String) => {
    return this.artists.findIndex((artist) => {
      return artist._id === artistId;
    });
  }

  selectArtist(artist: Artist | null) {
    this.selectedArtist = artist;
  }
  // _id?: string;
  // firstName: string;
  // lastName: string;
  // details: string;
  // email: string;
  // phone: string;
  // artistUrl: string;
  // artistName: string;
  // soundcloudUrl: string;
  // twitterUrl: string;
  // facebookUrl: string;
  // instagramUrl: string;
  // youtubeUrl: string;
  // snapchatUrl: string;
  // tagLine: string;
  // biography: string;
  // isAdmin: boolean;

  createNewArtist() {
    var artist: Artist = {
      _id: '',
      firstName: '',
      lastName: '',
      details: '',
      email: '',
      phone: '',
      artistUrl: '',
      artistName: '',
      soundcloudUrl: '',
      twitterUrl: '',
      facebookUrl: '',
      instagramUrl: '',
      snapchatUrl: '',
      youtubeUrl: '',
      tagLine: '',
      biography: '',
      isAdmin: false,
      albums: []
    };

    this.selectArtist(artist);
  }

  deleteArtist = (artistId: String) => {
    var idx = this.getIndexOfArtist(artistId);
    if (idx !== -1) {
      this.artists.splice(idx, 1);
      this.selectArtist(null);
    }
    return this.artists;
  }

  addArtist = (artist: Artist) => {
    this.artists.push(artist);
    this.selectArtist(artist);
    return this.artists;
  }

  updateArtist = (artist: Artist) => {
    console.log('updateArtist', artist);
    var idx = this.getIndexOfArtist(artist._id);
    if (idx !== -1) {
      this.artists[idx] = artist;
      this.selectArtist(artist);
    }
    return this.artists;
  }

}
