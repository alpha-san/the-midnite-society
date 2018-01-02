import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';
import { AlbumService } from '../album.service';
import { AlbumMockService } from '../album-mock.service';

import { AlbumsListComponent } from './albums-list.component';

describe('AlbumsListComponent', () => {
  let component: AlbumsListComponent;
  let fixture: ComponentFixture<AlbumsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlbumsListComponent ],
      providers: [
        {
          provide: AlbumService,
          use: AlbumMockService
        }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlbumsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should...', inject([AlbumMockService], (service: AlbumService) => {
    expect(service).toBeTruthy();
  }));
});
