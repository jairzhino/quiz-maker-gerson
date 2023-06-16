import { createReducer, on } from '@ngrx/store';
import { AppQuiz } from '@pages/quiz/models/app-quiz.model';
import * as Actions from './quiz-action.store';

export const INITIAL_STATE: AppQuiz = {
  quizzes: [],
  idCounter: 1,
};

export const QuizReducer = createReducer(
  INITIAL_STATE,
  on(Actions.CreateQuiz, (state, { quiz }) => {
    return {
      quizzes: [...state.quizzes, { ...quiz, id: state.idCounter }],
      idCounter: state.idCounter + 1,
    };
  }),
  on(Actions.SetQuestions, (state, { questions, id }) => {
    const quiz = state.quizzes.find(quiz => quiz.id === id);
    if (!quiz) {
      return { ...state };
    }
    const quizzes = state.quizzes.map(quiz => {
      if (quiz.id === id) {
        return { ...quiz, questions };
      }
      return quiz;
    });

    return { ...state, quizzes };
  }),
  on(Actions.SetQuiz, (state, { quiz, id }) => {
    const quizzes = state.quizzes.map(value =>
      value.id === id ? quiz : value
    );
    return { ...state, quizzes };
  }),
  on(Actions.RemoveQuiz, (state, { id }) => {
    const quizzes = state.quizzes.filter(quiz => quiz.id !== id);
    return { ...state, quizzes };
  })
);
