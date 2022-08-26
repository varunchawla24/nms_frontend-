import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PendingDownlineComponent } from './pending-downline.component';

describe('PendingDownlineComponent', () => {
  let component: PendingDownlineComponent;
  let fixture: ComponentFixture<PendingDownlineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PendingDownlineComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PendingDownlineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
