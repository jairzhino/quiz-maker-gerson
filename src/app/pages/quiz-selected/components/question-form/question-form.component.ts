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
import { AppState } from '@pages/quiz/models/AppState.model';
import { Store } from '@ngrx/store';
import * as ActionsQuiz from '@pages/quiz/store/quiz-selector.store';

@Component({
  selector: 'app-question-form',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
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

  categories$ = this.store.select(ActionsQuiz.SelectCategories);

  categories: string[] = [];
  difficultList: string[] = [];
  types: string[] = [];
  typeQuiz = TypeQuiz;

  constructor(private readonly store: Store<AppState>) {}

  ngOnInit(): void {
    const categoriesNames = Object.keys(Category);
    const difficultNames = Object.keys(Difficulty);
    const typesNames = Object.keys(TypeQuiz);
    this.categories = categoriesNames.slice(categoriesNames.length / 2);
    this.difficultList = difficultNames.slice(difficultNames.length / 2);
    this.types = typesNames.slice(typesNames.length / 2);
    this.LoadPage();
    console.log(this.question);
  }

  LoadPage(): void {
    this.formQuestion.controls['category'].setValue(this.question.category);
    this.formQuestion.controls['type'].setValue(this.question.type);
    this.formQuestion.controls['difficulty'].setValue(this.question.difficulty);
    this.formQuestion.controls['question'].setValue(this.question.question);

    this.formQuestion.controls['incorrect_answers'].setValue(
      this.question.incorrect_answers
    );
    this.formQuestion.controls['correct_answer'].setValue([
      this.question.correct_answer,
    ]);

    this.formQuestion.controls['category'].disable();
    this.formQuestion.controls['type'].disable();
    this.formQuestion.controls['difficulty'].disable();
    this.formQuestion.controls['question'].disable();

    this.formQuestion.controls['incorrect_answers'].disable();
    this.formQuestion.controls['correct_answer'].disable();
  }

  Save(): void {
    const categoryParsed = parseInt(this.formQuestion.value.category + '');
    const difficultyParsed = this.formQuestion.value.difficulty + '';
    const typeParsed = this.formQuestion.value.type + '';
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
}
