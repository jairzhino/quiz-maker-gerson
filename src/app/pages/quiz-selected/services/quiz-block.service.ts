import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '@pages/quiz/models/AppState.model';
import * as Actions from '@pages/quiz-selected/store/quiz-action.store';
import { QuizBlock } from '../models/quiz-block.model';
import { Question } from '@pages/quiz/models/question.model';

@Injectable({
  providedIn: 'root',
})
export class QuizBlockService {
  constructor(private readonly store: Store<AppState>) {}

  updateQuiz(quiz: QuizBlock | undefined) {
    this.store.dispatch(Actions.SetQuizBlock({ quiz }));
  }
  updateQuestion(question: Question, questionNumber: number): void {
    this.store.dispatch(
      Actions.SetQuestion({ question, index: questionNumber })
    );
  }
}
