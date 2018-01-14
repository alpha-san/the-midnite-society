import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { AlbumService } from '../album.service';
import { AlbumMockService } from '../album-mock.service';
import { UserService } from '../../users/user.service';
import { UserMockService } from '../../users/user-mock.service';
import { MultiselectDropdownModule, IMultiSelectOption, IMultiSelectSettings } from 'angular-2-dropdown-multiselect';

import { AlbumDetailsComponent } from './album-details.component';

describe('AlbumDetailsComponent', () => {
  let component: AlbumDetailsComponent;
  let fixture: ComponentFixture<AlbumDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ 
        FormsModule, 
        MultiselectDropdownModule
      ],
      declarations: [ AlbumDetailsComponent ],
      providers: [
        {
          provide: AlbumService,
          useClass: AlbumMockService
        },
        {
          provide: UserService,
          useClass: UserMockService
        }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlbumDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
