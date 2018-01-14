import { TestBed, async, inject } from '@angular/core/testing';

import { Album } from './album';
import { AlbumService } from './album.service';
import { HttpModule } from '@angular/http';

describe('Album.ServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpModule ],
      providers: [ AlbumService ]
    });
  });

  it('should be created', inject([AlbumService], (service: AlbumService) => {
    expect(service).toBeTruthy();
  }));
});
