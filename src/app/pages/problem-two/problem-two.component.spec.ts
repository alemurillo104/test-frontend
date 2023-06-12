import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProblemTwoComponent } from './problem-two.component';

describe('ProblemTwoComponent', () => {
  let component: ProblemTwoComponent;
  let fixture: ComponentFixture<ProblemTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProblemTwoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProblemTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
