import { Component, OnInit, Input } from '@angular/core';
import { Artist } from '../artist';
import { ArtistService } from '../artist.service';

@Component({
  selector: 'artist-details',
  templateUrl: './artist-details.component.html',
  styleUrls: ['./artist-details.component.css']
})
export class ArtistDetailsComponent implements OnInit {
  @Input() artist: Artist;

  @Input() createHandler: Function;
  @Input() updateHandler: Function;
  @Input() deleteHandler: Function;

  constructor(private artistService: ArtistService) { }

  ngOnInit() {
  }

  createArtist(artist: Artist) {
    this.artistService.createArtist(artist).then((newArtist: Artist) => {
      this.createHandler(newArtist);
    });
  }

  updateArtist(artist: Artist) {
    this.artistService.updateArtist(artist).then((updatedArtist: Artist) => {
      this.updateHandler(updatedArtist);
    });
  }

  deleteArtist(artistId: String): void {
    this.artistService.deleteArtist(artistId).then((deletedArtistId: String) => {
      this.deleteHandler(deletedArtistId);
    });
  }

}
