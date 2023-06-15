import { createSelector } from '@ngrx/store';
import { AppState } from '@pages/quiz/models/AppState.model';
import { QuizState } from '../models/quiz-state.model';

export const SelectQuizBlock = (state: AppState) => state.QuizBlock;

export const SelectQuiz = createSelector(
  SelectQuizBlock,
  (state: QuizState) => state.quizBlock
);
