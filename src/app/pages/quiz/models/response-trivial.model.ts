import { Question } from './question.model';

export interface ResponseTrivial {
  response_code: number;
  results: Question[];
}
