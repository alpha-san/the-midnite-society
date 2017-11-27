import { Injectable } from '@angular/core';
import { Track } from './track';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class TrackService {
  private tracksUrl = '/api/Tracks';

  constructor(private http: Http) { }

  getTracks(): Promise<void | Track[]> {
    return this.http.get(this.tracksUrl)
      .toPromise()
      .then(response => response.json() as Track[])
      .catch(this.handleError);
  }

  createTrack(newTrack: Track): Promise<void | Track> {
    return this.http.post(this.tracksUrl, newTrack)
      .toPromise()
      .then(response => response.json() as Track)
      .catch(this.handleError);
  }

  deleteTrack(delTrackId: String): Promise<void | String> {
    return this.http.delete(this.tracksUrl + '/' + delTrackId)
      .toPromise()
      .then(response => response.json() as String)
      .catch(this.handleError);
  }

  updateTrack(putTrack: Track): Promise<void | Track> {
    var putUrl = this.tracksUrl + '/' + putTrack._id;
    return this.http.put(putUrl, putTrack)
      .toPromise()
      .then(response => response.json() as Track)
      .catch(this.handleError)
  }

  private handleError(error: any) {
    let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
  }

}
