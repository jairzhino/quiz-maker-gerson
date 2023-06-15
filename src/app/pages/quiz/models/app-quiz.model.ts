import { Quiz } from './quiz.model';

export interface AppQuiz {
  quizzes: Quiz[];
  idCounter: number;
}
