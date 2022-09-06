import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StadiumFormComponent } from './stadium-form.component';

describe('StadiumFormComponent', () => {
  let component: StadiumFormComponent;
  let fixture: ComponentFixture<StadiumFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StadiumFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StadiumFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
