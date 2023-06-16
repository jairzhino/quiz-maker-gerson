import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Question } from '@pages/quiz/models/question.model';
import { Category } from '@pages/quiz/enums/category.enum';
import { Difficulty } from '@pages/quiz/enums/difficulty.enum';
import { TypeQuiz } from '@pages/quiz/enums/type.enum';
import { AnswerModalComponent } from '../answer-modal/answer-modal.component';

@Component({
  selector: 'app-question-form',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AnswerModalComponent,
  ],
  templateUrl: './question-form.component.html',
  styleUrls: ['./question-form.component.scss'],
})
export class QuestionFormComponent implements OnInit {
  @Input() question!: Question;

  @Output() changeQuestion: EventEmitter<Question> =
    new EventEmitter<Question>();

  formQuestion: FormGroup = new FormGroup({
    category: new FormControl<Category>(Category['General Knowledge'], [
      Validators.required,
    ]),
    type: new FormControl<TypeQuiz>(TypeQuiz.multiple, [Validators.required]),
    difficulty: new FormControl<Difficulty>(Difficulty.easy, [
      Validators.required,
    ]),
    question: new FormControl<string>('', [Validators.required]),
    correct_answer: new FormControl<string[]>(
      [],
      [Validators.required, Validators.minLength(1)]
    ),
    incorrect_answers: new FormControl<string[]>(
      [],
      [Validators.required, Validators.minLength(1)]
    ),
  });

  categories: string[] = [];
  difficultList: string[] = [];
  types: string[] = [];
  isOpenCorrectAnswer = false;
  isOpenIncorrectAnswer = false;
  typeQuiz = TypeQuiz;

  ngOnInit(): void {
    const categoriesNames = Object.keys(Category);
    const difficultNames = Object.keys(Difficulty);
    const typesNames = Object.keys(TypeQuiz);
    this.categories = categoriesNames.slice(categoriesNames.length / 2);
    this.difficultList = difficultNames.slice(difficultNames.length / 2);
    this.types = typesNames.slice(typesNames.length / 2);
    this.LoadPage();
  }

  LoadPage(): void {
    this.formQuestion.controls['category'].setValue(this.question.category);
    this.formQuestion.controls['type'].setValue(this.question.type);
    this.formQuestion.controls['difficulty'].setValue(this.question.difficulty);
    this.formQuestion.controls['question'].setValue(this.question.question);

    this.formQuestion.controls['incorrect_answers'].setValue(
      this.question.incorrect_answers
    );
    if (this.question.correct_answer.length) {
      this.formQuestion.controls['correct_answer'].setValue(
        this.question.correct_answer.split(' ')
      );
    }
  }

  Save(): void {
    const categoryParsed = parseInt(this.formQuestion.value.category + '');
    const difficultyParsed = parseInt(this.formQuestion.value.difficulty + '');
    const typeParsed = parseInt(this.formQuestion.value.type + '');
    const payload: Question = {
      category: categoryParsed,
      difficulty: difficultyParsed,
      type: typeParsed,
      question: this.formQuestion.value.question,
      incorrect_answers: this.formQuestion.value.incorrect_answers,
      correct_answer: this.formQuestion.value.correct_answer.join(' '),
    };
    this.changeQuestion.emit(payload);
  }

  AddAnswer(text: string | undefined | null): void {
    if (!text) {
      this.isOpenCorrectAnswer = false;
      this.isOpenIncorrectAnswer = false;
      return;
    }
    if (this.isOpenCorrectAnswer) {
      const values: string[] = this.formQuestion.value.correct_answer;
      this.formQuestion.controls['correct_answer'].setValue([...values, text]);
      this.isOpenCorrectAnswer = false;
    }
    if (this.isOpenIncorrectAnswer) {
      const values: string[] = this.formQuestion.value.incorrect_answers;
      this.formQuestion.controls['incorrect_answers'].setValue([
        ...values,
        text,
      ]);
      this.isOpenIncorrectAnswer = false;
    }
  }

  OpenCorrectModal(): void {
    this.isOpenCorrectAnswer = true;
  }

  OpenIncorrectModal(): void {
    this.isOpenIncorrectAnswer = true;
  }

  ChangeSelecte(): void {
    this.formQuestion.controls['correct_answer'].setValue([]);
    this.formQuestion.controls['incorrect_answers'].setValue([]);
  }

  CorrectBooleanChoised(isTrue: boolean): void {
    if (isTrue) {
      this.formQuestion.controls['correct_answer'].setValue(['TRUE']);
      this.formQuestion.controls['incorrect_answers'].setValue(['FALSE']);
    } else {
      this.formQuestion.controls['correct_answer'].setValue(['FALSE']);
      this.formQuestion.controls['incorrect_answers'].setValue(['TRUE']);
    }
  }

  RemoveCorrectAnswer(text: string): void {
    const values: string[] = this.formQuestion.value.correct_answer.filter(
      (value: string) => value !== text
    );
    this.formQuestion.controls['correct_answer'].setValue(values);
  }

  RemoveIncorrectAnswer(text: string): void {
    const values: string[] = this.formQuestion.value.incorrect_answers.filter(
      (value: string) => value !== text
    );
    this.formQuestion.controls['incorrect_answers'].setValue(values);
  }
}
