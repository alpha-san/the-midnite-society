import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import 'rxjs/add/operator/switchMap';
import { Observable } from 'rxjs/Observable';
import { Artist } from '../artist';
import { ArtistService } from '../artist.service';

@Component({
  selector: 'app-artist-show',
  templateUrl: './artist-show.component.html',
  styleUrls: ['./artist-show.component.css']
})
export class ArtistShowComponent implements OnInit {
  artist$: Artist;
  loaded: boolean;
  artistExists: boolean;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private artistService: ArtistService
  ) { 
    this.loaded = false;
    this.artistExists = false;
  }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.artistService
        .getArtists()
        .then((artists: Artist[]) => {
          if (artists !== undefined) {
            this.artist$ = artists.find(artist => artist.artistUrl === params.get('artistname'))
          } 
          this.artistExists = this.artist$ !== undefined;
          this.loaded = true;
        });
    });
  }

}
