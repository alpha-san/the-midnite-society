import { Injectable } from '@angular/core';
import { Album } from './album';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class AlbumService {
  private albumsUrl = '/api/albums';

  constructor(private http: Http) { }

  getAlbums(): Promise<void | Album[]> {
    return this.http.get(this.albumsUrl)
      .toPromise()
      .then(response => response.json() as Album[])
      .catch(this.handleError);
  }

  createAlbum(newAlbum: Album): Promise<void | Album> {
    return this.http.post(this.albumsUrl, newAlbum)
      .toPromise()
      .then(response => response.json() as Album)
      .catch(this.handleError);
  }

  deleteAlbum(delAlbumId: String): Promise<void | String> {
    return this.http.delete(this.albumsUrl + '/' + delAlbumId)
      .toPromise()
      .then(response => response.json() as String)
      .catch(this.handleError);
  }

  updateAlbum(putAlbum: Album): Promise<void | Album> {
    var putUrl = this.albumsUrl + '/' + putAlbum._id;
    return this.http.put(putUrl, putAlbum)
      .toPromise()
      .then(response => response.json() as Album)
      .catch(this.handleError)
  }

  private handleError(error: any) {
    let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
  }

}
