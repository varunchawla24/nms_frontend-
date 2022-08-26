import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YourDownlineComponent } from './your-downline.component';

describe('YourDownlineComponent', () => {
  let component: YourDownlineComponent;
  let fixture: ComponentFixture<YourDownlineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ YourDownlineComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(YourDownlineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
