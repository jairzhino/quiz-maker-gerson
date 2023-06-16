import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '@pages/quiz/models/AppState.model';
import { Quiz } from '@pages/quiz/models/quiz.model';
import * as Actions from '@pages/quiz/store/quiz-action.store';

@Injectable({
  providedIn: 'root',
})
export class QuizService {
  constructor(private readonly store: Store<AppState>) {}

  createQuiz(quiz: Quiz) {
    this.store.dispatch(Actions.CreateQuiz({ quiz }));
  }

  updateQuiz(quiz: Quiz, id: number) {
    this.store.dispatch(Actions.SetQuiz({ quiz, id }));
  }

  removeQuiz(id: number) {
    this.store.dispatch(Actions.RemoveQuiz({ id }));
  }
}
