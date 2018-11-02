import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BranddesignDetailComponent } from './branddesign-detail.component';

describe('BranddesignDetailComponent', () => {
  let component: BranddesignDetailComponent;
  let fixture: ComponentFixture<BranddesignDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BranddesignDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BranddesignDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
