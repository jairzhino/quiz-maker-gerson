import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '@pages/quiz/models/AppState.model';
import { Quiz } from '@pages/quiz/models/quiz.model';
import * as Actions from '@pages/quiz/store/quiz-action.store';
import { Observable, map, tap } from 'rxjs';
import { ResponseTrivial } from '../models/response-trivial.model';
import { TriviaCategoriResponse } from '../models/trivia-categories.model';

@Injectable({
  providedIn: 'root',
})
export class QuizService {
  constructor(
    private readonly store: Store<AppState>,
    private readonly http: HttpClient
  ) {}

  createQuiz(quiz: Quiz) {
    this.store.dispatch(Actions.CreateQuiz({ quiz }));
  }

  updateQuiz(quiz: Quiz, id: number) {
    this.store.dispatch(Actions.SetQuiz({ quiz, id }));
  }

  removeQuiz(id: number) {
    this.store.dispatch(Actions.RemoveQuiz({ id }));
  }

  getCategories() {
    this.http
      .get<TriviaCategoriResponse>('https://opentdb.com/api_category.php')
      .pipe(
        tap({
          next: data => {
            this.store.dispatch(
              Actions.AddCategories({ categories: data.trivia_categories })
            );
          },
        })
      )
      .subscribe();
  }
  //https://opentdb.com/api.php?amount=10&category=10&difficulty=easy&type=multiple
  generateQuiz(
    quantity: number,
    category: number | null,
    difficulty: string | null,
    type: string | null
  ): Observable<Quiz> {
    const paramCategory = `${category ? `&category=${category}` : ''}`;
    const paramDifficulty = `${difficulty ? `&difficulty=${difficulty}` : ''}`;
    const paramType = `${type ? `&type=${type}` : ''}`;
    const paramQuantity = `amount=${quantity}`;

    return this.http
      .get<ResponseTrivial>(
        `https://opentdb.com/api.php?${paramQuantity}${paramCategory}${paramDifficulty}${paramType}`
      )
      .pipe(
        map(data => {
          const quiz: Quiz = {
            id: 0,
            questions: data.results,
          };
          return quiz;
        }),
        tap({
          next: data => {
            this.createQuiz(data);
          },
        })
      );
  }
}
