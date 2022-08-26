import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateDownlineComponent } from './create-downline.component';

describe('CreateDownlineComponent', () => {
  let component: CreateDownlineComponent;
  let fixture: ComponentFixture<CreateDownlineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateDownlineComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateDownlineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
