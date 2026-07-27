import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LearnRouting } from './learn-routing';

describe('LearnRouting', () => {
  let component: LearnRouting;
  let fixture: ComponentFixture<LearnRouting>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LearnRouting],
    }).compileComponents();

    fixture = TestBed.createComponent(LearnRouting);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
