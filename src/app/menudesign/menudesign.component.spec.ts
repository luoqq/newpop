import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenudesignComponent } from './menudesign.component';

describe('MenudesignComponent', () => {
  let component: MenudesignComponent;
  let fixture: ComponentFixture<MenudesignComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenudesignComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenudesignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
