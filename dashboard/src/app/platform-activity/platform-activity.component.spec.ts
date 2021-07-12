import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlatformActivityComponent } from './platform-activity.component';

describe('PlatformActivityComponent', () => {
  let component: PlatformActivityComponent;
  let fixture: ComponentFixture<PlatformActivityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlatformActivityComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlatformActivityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
