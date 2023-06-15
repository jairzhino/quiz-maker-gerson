import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizSelectedComponent } from './quiz-selected.component';

describe('QuizSelectedComponent', () => {
  let component: QuizSelectedComponent;
  let fixture: ComponentFixture<QuizSelectedComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [QuizSelectedComponent]
    });
    fixture = TestBed.createComponent(QuizSelectedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
