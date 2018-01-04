import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtistAdminListComponent } from './artist-admin-list.component';

describe('ArtistAdminListComponent', () => {
  let component: ArtistAdminListComponent;
  let fixture: ComponentFixture<ArtistAdminListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArtistAdminListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtistAdminListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
