import { createReducer, on } from '@ngrx/store';
import * as Actions from './quiz-action.store';
import { QuizState } from '@pages/quiz-selected/models/quiz-state.model';
import { QuizBlock } from '../models/quiz-block.model';

export const INITIAL_STATE: QuizState = {
  quizBlock: undefined,
};

export const QuizBlockReducer = createReducer(
  INITIAL_STATE,
  on(Actions.SetQuizBlock, (state, { quiz }) => ({
    ...state,
    quizBlock: quiz,
  })),
  on(Actions.SetQuestion, (state, { question, index }) => {
    if (!state.quizBlock) {
      return state;
    }
    if (index === 1) {
      const value1: QuizBlock = {
        ...state.quizBlock,
        question1: {
          isDirty: false,
          question,
        },
      };
      return { ...state, quizBlock: value1 };
    }
    if (index === 2) {
      const value2: QuizBlock = {
        ...state.quizBlock,
        question2: {
          isDirty: false,
          question,
        },
      };
      return { ...state, quizBlock: value2 };
    }
    if (index === 3) {
      const value3: QuizBlock = {
        ...state.quizBlock,
        question3: {
          isDirty: false,
          question,
        },
      };
      return { ...state, quizBlock: value3 };
    }
    if (index === 4) {
      const value4: QuizBlock = {
        ...state.quizBlock,
        question4: {
          isDirty: false,
          question,
        },
      };
      return { ...state, quizBlock: value4 };
    }
    if (index === 5) {
      const value5: QuizBlock = {
        ...state.quizBlock,
        question5: {
          isDirty: false,
          question,
        },
      };
      return { ...state, quizBlock: value5 };
    }
    return state;
  })
);
