import { Question } from '@pages/quiz/models/question.model';

export interface QuizBlock {
  id: number;
  question1: QuestionBlock;
  question2: QuestionBlock;
  question3: QuestionBlock;
  question4: QuestionBlock;
  question5: QuestionBlock;
  submitted: boolean;
}

export interface QuestionBlock {
  question: Question;
  isDirty: boolean;
  answer: string;
}
