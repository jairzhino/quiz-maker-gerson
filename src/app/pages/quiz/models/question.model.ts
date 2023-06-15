import { Category } from '@pages/quiz/enums/category.enum';
import { TypeQuiz } from '../enums/type.enum';
import { Difficulty } from '../enums/difficulty.enum';

export interface Question {
  category: Category;
  type: TypeQuiz;
  difficulty: Difficulty;
  question: string;
  correct_answer: string;
  incorrect_answers: string[];
}
