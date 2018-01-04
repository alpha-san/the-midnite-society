import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtistDetialsComponent } from './artist-detials.component';

describe('ArtistDetialsComponent', () => {
  let component: ArtistDetialsComponent;
  let fixture: ComponentFixture<ArtistDetialsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArtistDetialsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtistDetialsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
