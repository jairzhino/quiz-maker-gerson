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
import * as ActionQuizBlock from '@pages/quiz-selected/store/quiz-selector.store';

@Component({
  selector: 'app-question-form',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './question-form.component.html',
  styleUrls: ['./question-form.component.scss'],
})
export class QuestionFormComponent implements OnInit {
  @Input() question!: Question;
  @Input() answerQuestion!: string;

  @Output() changeQuestion: EventEmitter<string> = new EventEmitter<string>();

  formQuestion: FormGroup = new FormGroup({
    category: new FormControl<Category>(Category['General Knowledge'], [
      Validators.required,
    ]),
    type: new FormControl<TypeQuiz>(TypeQuiz.multiple, [Validators.required]),
    difficulty: new FormControl<Difficulty>(Difficulty.easy, [
      Validators.required,
    ]),
    question: new FormControl<string>('', [Validators.required]),
    answerSelected: new FormControl<string>('', [Validators.required]),
  });

  categories$ = this.store.select(ActionsQuiz.SelectCategories);
  quizNotSubmitted$ = this.store.select(ActionQuizBlock.QuizBlockNotSubmitted);
  quizSubmitted$ = this.store.select(ActionQuizBlock.QuizBlockSubmitted);
  answers: string[] = [];

  categories: string[] = [];
  difficultList: string[] = [];
  types: string[] = [];

  constructor(private readonly store: Store<AppState>) {}

  ngOnInit(): void {
    const categoriesNames = Object.keys(Category);
    const difficultNames = Object.keys(Difficulty);
    const typesNames = Object.keys(TypeQuiz);
    this.categories = categoriesNames.slice(categoriesNames.length / 2);
    this.difficultList = difficultNames.slice(difficultNames.length / 2);
    this.types = typesNames.slice(typesNames.length / 2);

    this.answers = [...this.question.incorrect_answers];
    const index = Math.floor(Math.random() * (this.answers.length + 1));
    this.answers.splice(index, 0, this.question.correct_answer);

    this.LoadPage();
  }

  LoadPage(): void {
    this.formQuestion.controls['category'].setValue(this.question.category);
    this.formQuestion.controls['type'].setValue(this.question.type);
    this.formQuestion.controls['difficulty'].setValue(this.question.difficulty);
    this.formQuestion.controls['question'].setValue(this.question.question);

    this.formQuestion.controls['answerSelected'].setValue(this.answerQuestion);

    this.formQuestion.controls['category'].disable();
    this.formQuestion.controls['type'].disable();
    this.formQuestion.controls['difficulty'].disable();
    this.formQuestion.controls['question'].disable();
  }

  SelectAnswer(answer: string): void {
    this.formQuestion.controls['answerSelected'].setValue(answer);
  }

  Save(): void {
    this.changeQuestion.emit(this.formQuestion.value.answerSelected);
  }
}
