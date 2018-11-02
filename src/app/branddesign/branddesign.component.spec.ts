import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BranddesignComponent } from './branddesign.component';

describe('BranddesignComponent', () => {
  let component: BranddesignComponent;
  let fixture: ComponentFixture<BranddesignComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BranddesignComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BranddesignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
