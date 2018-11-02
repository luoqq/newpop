import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotographicComponent } from './photographic.component';

describe('PhotographicComponent', () => {
  let component: PhotographicComponent;
  let fixture: ComponentFixture<PhotographicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhotographicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhotographicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
