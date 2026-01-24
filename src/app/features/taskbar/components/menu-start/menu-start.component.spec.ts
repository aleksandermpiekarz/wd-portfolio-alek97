import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuStartComponent } from './menu-start.component';

describe('MenuStartComponent', () => {
  let component: MenuStartComponent;
  let fixture: ComponentFixture<MenuStartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MenuStartComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(MenuStartComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
