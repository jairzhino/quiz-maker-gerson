import { createSelector } from '@ngrx/store';
import { AppState } from '@pages/quiz/models/AppState.model';
import { AppQuiz } from '../models/app-quiz.model';
import { Quiz } from '../models/quiz.model';
import { QuizBlock } from '../../quiz-selected/models/quiz-block.model';

export const SelectAppQuiz = (state: AppState) => state.AppQuiz;

export const SelectQuizzes = createSelector(SelectAppQuiz, (state: AppQuiz) => {
  return state.quizzes;
});

export const SelectCategories = createSelector(
  SelectAppQuiz,
  (state: AppQuiz) => state.categories
);

export const SelectQuiz = (id: number) =>
  createSelector(SelectQuizzes, (quizzes: Quiz[]) => {
    const quiz = quizzes.find(quiz => quiz.id === id);
    if (!quiz) {
      return null;
    }
    const quizBlock: QuizBlock = {
      id: quiz.id,
      question1: {
        isDirty: false,
        question: quiz.questions[0],
      },
      question2: {
        isDirty: false,
        question: quiz.questions[1],
      },
      question3: {
        isDirty: false,
        question: quiz.questions[2],
      },
      question4: {
        isDirty: false,
        question: quiz.questions[3],
      },
      question5: {
        isDirty: false,
        question: quiz.questions[4],
      },
    };
    return quizBlock;
  });
