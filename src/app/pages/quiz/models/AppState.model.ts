import { QuizState } from '@pages/quiz-selected/models/quiz-state.model';
import { AppQuiz } from './app-quiz.model';

export interface AppState {
  AppQuiz: AppQuiz;
  QuizBlock: QuizState;
}
