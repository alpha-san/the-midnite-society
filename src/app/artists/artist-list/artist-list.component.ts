import { Component, OnInit } from '@angular/core';
import { Artist } from '../artist';
import { ArtistService } from '../artist.service';
import { ArtistDetailsComponent } from '../artist-details/artist-details.component';

@Component({
  selector: 'artist-list',
  templateUrl: './artist-list.component.html',
  styleUrls: ['./artist-list.component.css'],
  providers: [ArtistService]
})
export class ArtistListComponent implements OnInit {

  artists: Artist[]
  selectedArtist: Artist

  constructor(private artistService: ArtistService) { }

  ngOnInit() {
    this.artistService
      .getArtists()
      .then((artists: Artist[]) => {
        if (artists !== undefined) {
          this.artists = artists.map((artist) => {
            return artist;
          });
        }
      })
  }

  private getIndexOfArtist = (artistId: String) => {
    return this.artists.findIndex((artist) => {
      return artist._id === artistId;
    })
  }

  selectArtist(artist: Artist | null) {
    this.selectedArtist = artist;
  }

  createNewArtist() {
    var artist: Artist = {
      firstName: '',
      lastName: '',
      details: '',
      email: '',
      phone: '',
      artistName: '',
      soundcloudUrl: '',
      twitterUrl: '',
      facebookUrl: '',
      instagramUrl: '',
      snapchatUrl: '',
      tagLine: '',
      biography: '',
      isAdmin: false
    }

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
    var idx = this.getIndexOfArtist(artist._id);
    if (idx !== -1) {
      this.artists[idx] = artist;
      this.selectArtist(artist);
    }
    return this.artists;
  }

}