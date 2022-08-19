import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileimgComponent } from './profileimg.component';

describe('ProfileimgComponent', () => {
  let component: ProfileimgComponent;
  let fixture: ComponentFixture<ProfileimgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfileimgComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfileimgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
