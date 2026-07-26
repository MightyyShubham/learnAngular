import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LearnForms } from './learn-forms';

describe('LearnForms', () => {
  let component: LearnForms;
  let fixture: ComponentFixture<LearnForms>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LearnForms],
    }).compileComponents();

    fixture = TestBed.createComponent(LearnForms);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
