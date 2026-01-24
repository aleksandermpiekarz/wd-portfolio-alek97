import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuStartNestedListComponent } from './menu-start-nested-list.component';

describe('MenuStartListComponent', () => {
  let component: MenuStartNestedListComponent;
  let fixture: ComponentFixture<MenuStartNestedListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MenuStartNestedListComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(MenuStartNestedListComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
