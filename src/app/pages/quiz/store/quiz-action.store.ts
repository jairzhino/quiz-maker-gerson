import { createAction, props } from '@ngrx/store';
import { Question } from '@pages/quiz/models/question.model';
import { Quiz } from '../models/quiz.model';

export const SetQuestions = createAction(
  '[Set-Questions]',
  props<{ questions: Question[]; id: number }>()
);

export const SetQuiz = createAction(
  '[Set-Quiz]',
  props<{ quiz: Quiz; id: number }>()
);

export const CreateQuiz = createAction(
  '[Create-Quiz]',
  props<{ quiz: Quiz }>()
);

export const RemoveQuiz = createAction(
  '[Remove-Quiz]',
  props<{ id: number }>()
);
