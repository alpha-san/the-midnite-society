import { Component, OnInit, Input } from '@angular/core';
import { Album } from '../album';
import { User } from '../../users/user';
import { AlbumService } from '../album.service';
import { UserService } from '../../users/user.service';
import { IMultiSelectOption, IMultiSelectSettings } from 'angular-2-dropdown-multiselect';

@Component({
  selector: 'album-details',
  templateUrl: './album-details.component.html',
  styleUrls: ['./album-details.component.css']
})
export class AlbumDetailsComponent implements OnInit {
  @Input() album: Album;

  @Input() createHandler: Function;
  @Input() updateHandler: Function;
  @Input() deleteHandler: Function;

  users: User[]
  selectedUser: string
  selectUserOptions: IMultiSelectOption[]
  mySettings: IMultiSelectSettings = {
    selectionLimit: 1
  }

  constructor(private albumService: AlbumService, private userService: UserService) { }

  ngOnInit() {
    this.userService
      .getUsers()
      .then((users: User[]) => {
        if (users !== undefined) {
          this.users = users.map((user) => {
            return user;
          });

          this.selectUserOptions = users.map((user) => {
            return { id: user._id, name: user.firstName + ' ' + user.lastName }
          })
        }
      })
  }

  createAlbum(album: Album) {
    album.artist_id = this.selectedUser[0]
    this.albumService.createAlbum(album).then((newAlbum: Album) => {
      this.createHandler(newAlbum);
    })
  }

  updateAlbum(album: Album) {
    this.albumService.updateAlbum(album).then((updatedAlbum: Album) => {
      this.updateHandler(updatedAlbum);
    })
  }

  deleteAlbum(albumId: String): void {
    this.albumService.deleteAlbum(albumId).then((deletedAlbumId: String) => {
      this.deleteHandler(deletedAlbumId);
    })
  }

}
