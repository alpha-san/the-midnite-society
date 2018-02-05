import { Injectable } from '@angular/core';
import { Artist } from './artist';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/toPromise';


@Injectable()
export class ArtistService {
  private artistsUrl = '/api/artists';

  constructor(private http: Http) { }

  // get('/api/artists')
  getArtists(include: String = null): Promise<void | Artist[]> {

    // return this.http.get(this.artistsUrl)
    return this.http.get(this.artistsUrl, {
        body: {
          "include": include
        }
      })
      .toPromise()
      .then(response => response.json() as Artist[])
      .catch(this.handleError);
  }

  // post("/api/artists")
  createArtist(newArtist: Artist): Promise<void | Artist> {
    return this.http.post(this.artistsUrl, newArtist)
      .toPromise()
      .then(response => response.json() as Artist)
      .catch(this.handleError);
  }

  // get("/api/contacts/:id") endpoint not used by Angular app

  // delete("/api/contacts/:id")
  deleteArtist(delArtistId: String): Promise<void | String> {
    return this.http.delete(this.artistsUrl + '/' + delArtistId)
      .toPromise()
      .then(response => response.json() as String)
      .catch(this.handleError);
  }

  // put("/api/contacts/:id")
  updateArtist(putArtist: Artist): Promise<void | Artist> {
    var putUrl = this.artistsUrl + '/' + putArtist._id;
    return this.http.put(putUrl, putArtist)
      .toPromise()
      .then(function(response) {
        return response.json() as Artist;
      })
      .catch(this.handleError);
  }

  private handleError(error: any) {
    let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg); // log to console instead
  }
}
