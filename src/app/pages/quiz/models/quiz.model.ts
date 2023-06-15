import { Question } from './question.model';

export interface Quiz {
  id: number;
  questions: Question[];
}
