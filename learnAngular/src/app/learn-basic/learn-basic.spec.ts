import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LearnBasic } from './learn-basic';

describe('LearnBasic', () => {
  let component: LearnBasic;
  let fixture: ComponentFixture<LearnBasic>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LearnBasic],
    }).compileComponents();

    fixture = TestBed.createComponent(LearnBasic);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
