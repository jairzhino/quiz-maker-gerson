import { createSelector } from '@ngrx/store';
import { AppState } from '@pages/quiz/models/AppState.model';
import { AppQuiz } from '../models/app-quiz.model';
import { Quiz } from '../models/quiz.model';
import { QuizBlock } from '../../quiz-selected/models/quiz-block.model';
import { Question } from '../models/question.model';
import { TypeQuiz } from '../enums/type.enum';
import { Category } from '../enums/category.enum';
import { Difficulty } from '../enums/difficulty.enum';

export const SelectAppQuiz = (state: AppState) => state.AppQuiz;

export const SelectQuizzes = createSelector(
  SelectAppQuiz,
  (state: AppQuiz) => state.quizzes
);

export const SelectQuiz = (id: number) =>
  createSelector(SelectQuizzes, (quizzes: Quiz[]) => {
    const quiz = quizzes.find(quiz => quiz.id === id);
    if (!quiz) {
      return {
        id: 0,
        question1: {
          isDirty: true,
          question: {
            question: '',
            correct_answer: '',
            incorrect_answers: [],
            type: TypeQuiz.multiple,
            category: Category['General Knowledge'],
            difficulty: Difficulty.easy,
          } as Question,
        },
        question2: {
          isDirty: true,
          question: {
            question: '',
            correct_answer: '',
            incorrect_answers: [],
            type: TypeQuiz.multiple,
            category: Category['General Knowledge'],
            difficulty: Difficulty.easy,
          } as Question,
        },
        question3: {
          isDirty: true,
          question: {
            question: '',
            correct_answer: '',
            incorrect_answers: [],
            type: TypeQuiz.multiple,
            category: Category['General Knowledge'],
            difficulty: Difficulty.easy,
          } as Question,
        },
        question4: {
          isDirty: true,
          question: {
            question: '',
            correct_answer: '',
            incorrect_answers: [],
            type: TypeQuiz.multiple,
            category: Category['General Knowledge'],
            difficulty: Difficulty.easy,
          } as Question,
        },
        question5: {
          isDirty: true,
          question: {
            question: '',
            correct_answer: '',
            incorrect_answers: [],
            type: TypeQuiz.multiple,
            category: Category['General Knowledge'],
            difficulty: Difficulty.easy,
          } as Question,
        },
      } as QuizBlock;
    }
    const quizBlock: QuizBlock = {
      id: quiz.id,
      question1: {
        isDirty: true,
        question: quiz.questions[0],
      },
      question2: {
        isDirty: true,
        question: quiz.questions[1],
      },
      question3: {
        isDirty: true,
        question: quiz.questions[2],
      },
      question4: {
        isDirty: true,
        question: quiz.questions[3],
      },
      question5: {
        isDirty: true,
        question: quiz.questions[4],
      },
    };
    return quizBlock;
  });
