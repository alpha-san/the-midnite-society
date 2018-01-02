import { Injectable } from '@angular/core';
import { Album } from './album';

@Injectable()
export class AlbumMockService {

  constructor() { }

  getAlbums(): Promise<void | Album[]> {
    let promise: Promise<void | Album[]> = new Promise((resolve, reject) => {
      let result: Album[] = [new Album(), new Album()];
      resolve(result);
    });
    return promise;
  }

  createAlbum(newAlbum: Album): Promise<void | Album> {
    let promise: Promise<void | Album> = new Promise((resolve, reject) => {
      resolve(new Album(newAlbum));
    });
    return promise;
  }

  deleteAlbum(delAlbumId: String): Promise<void | String> {
    let promise: Promise<void | String> = new Promise((resolve, reject) => {
      resolve(delAlbumId);
    });
    return promise;
  }

  updateAlbum(putAlbum: Album): Promise<void | Album> {
    let promise: Promise<void | Album> = new Promise((resolve, reject) => {
      resolve(new Album(putAlbum));
    });
    return promise;
  }

}
