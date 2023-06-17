import { createSelector } from '@ngrx/store';
import { AppState } from '@pages/quiz/models/AppState.model';
import { QuizState } from '../models/quiz-state.model';
import { QuestionBlock } from '../models/quiz-block.model';

export const SelectQuizBlock = (state: AppState) => state.QuizBlock;

export const SelectQuiz = createSelector(
  SelectQuizBlock,
  (state: QuizState) => state.quizBlock
);

export const SelectQuestion = (id: number) =>
  createSelector(SelectQuizBlock, state => {
    if (!state.quizBlock) {
      return { isDirty: true } as QuestionBlock;
    }
    if (id === 1) {
      return state.quizBlock.question1;
    }
    if (id === 2) {
      return state.quizBlock.question2;
    }
    if (id === 3) {
      return state.quizBlock.question3;
    }
    if (id === 4) {
      return state.quizBlock.question4;
    }
    return state.quizBlock.question5;
  });

export const QuizBlockIncomplete = createSelector(
  SelectQuizBlock,
  (state: QuizState) => {
    if (!state.quizBlock) {
      return true;
    }
    const question1 = state.quizBlock.question1.isDirty;
    const question2 = state.quizBlock.question2.isDirty;
    const question3 = state.quizBlock.question3.isDirty;
    const question4 = state.quizBlock.question4.isDirty;
    const question5 = state.quizBlock.question5.isDirty;

    return question1 || question2 || question3 || question4 || question5;
  }
);

export const QuizBlockSubmitted = createSelector(SelectQuizBlock, state => {
  if (!state.quizBlock) {
    return false;
  }
  return state.quizBlock.submitted;
});
export const QuizBlockNotSubmitted = createSelector(SelectQuizBlock, state => {
  if (!state.quizBlock) {
    return false;
  }
  return !state.quizBlock.submitted;
});

export const QuizAnswerCorrect = createSelector(SelectQuizBlock, state => {
  if (!state.quizBlock || !state.quizBlock.submitted) {
    return -1;
  }
  let count = 0;
  if (
    state.quizBlock.question1.answer ===
    state.quizBlock.question1.question.correct_answer
  ) {
    count = count + 1;
  }
  if (
    state.quizBlock.question2.answer ===
    state.quizBlock.question2.question.correct_answer
  ) {
    count = count + 1;
  }
  if (
    state.quizBlock.question3.answer ===
    state.quizBlock.question3.question.correct_answer
  ) {
    count = count + 1;
  }
  if (
    state.quizBlock.question4.answer ===
    state.quizBlock.question4.question.correct_answer
  ) {
    count = count + 1;
  }
  if (
    state.quizBlock.question5.answer ===
    state.quizBlock.question5.question.correct_answer
  ) {
    count = count + 1;
  }
  return count + 1;
});
