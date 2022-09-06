import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StadiaTableComponent } from './stadia-table.component';

describe('StadiaTableComponent', () => {
  let component: StadiaTableComponent;
  let fixture: ComponentFixture<StadiaTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StadiaTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StadiaTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
