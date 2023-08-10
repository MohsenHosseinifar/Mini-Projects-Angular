import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LackOfEmploymentComponent } from './lack-of-employment.component';

describe('LackOfEmploymentComponent', () => {
  let component: LackOfEmploymentComponent;
  let fixture: ComponentFixture<LackOfEmploymentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LackOfEmploymentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LackOfEmploymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
