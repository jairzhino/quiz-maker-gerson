import { createAction, props } from '@ngrx/store';
import { QuizBlock } from '@pages/quiz-selected/models/quiz-block.model';
import { Question } from '@pages/quiz/models/question.model';

export const SetQuizBlock = createAction(
  '[Set-QuizBlock]',
  props<{ quiz: QuizBlock | undefined }>()
);

export const SetQuestion = createAction(
  '[Set-Question]',
  props<{ question: Question; index: number; answer: string }>()
);

export const Submitted = createAction('[Submitted]');

export const LoadingOn = createAction('[QuizBlock-Loading-On]');
export const LoadingOff = createAction('[QuizBlock-Loading-Off]');
