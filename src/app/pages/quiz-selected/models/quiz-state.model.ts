import { QuizBlock } from './quiz-block.model';

export interface QuizState {
  quizBlock: QuizBlock | undefined;
  loading: boolean;
}
