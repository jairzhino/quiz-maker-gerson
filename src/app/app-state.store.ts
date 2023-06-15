import { QuizBlockReducer } from '@pages/quiz-selected/store/quiz-reducer.store';
import { QuizReducer } from '@pages/quiz/store/quiz-reducer.store';

export const AppState = {
  AppQuiz: QuizReducer,
  QuizBlock: QuizBlockReducer,
};
