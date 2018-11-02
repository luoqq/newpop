import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenudesignDetailComponent } from './menudesign-detail.component';

describe('MenudesignDetailComponent', () => {
  let component: MenudesignDetailComponent;
  let fixture: ComponentFixture<MenudesignDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenudesignDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenudesignDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
