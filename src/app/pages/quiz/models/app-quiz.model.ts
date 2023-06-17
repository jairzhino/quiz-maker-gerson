import { Quiz } from './quiz.model';
import { TriviaCategory } from './trivia-categories.model';

export interface AppQuiz {
  quizzes: Quiz[];
  idCounter: number;
  categories: TriviaCategory[];
  loading: boolean;
}
