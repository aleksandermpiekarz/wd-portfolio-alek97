import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WindowsGeneratorComponent } from './windows-generator.component';

describe('WindowsGeneratorComponent', () => {
  let component: WindowsGeneratorComponent;
  let fixture: ComponentFixture<WindowsGeneratorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WindowsGeneratorComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(WindowsGeneratorComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
