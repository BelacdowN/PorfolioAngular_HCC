import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EdicionComponent } from './edicion.component';

describe('EdicionComponent', () => {
  let component: EdicionComponent;
  let fixture: ComponentFixture<EdicionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EdicionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EdicionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
