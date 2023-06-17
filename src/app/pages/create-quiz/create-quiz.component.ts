import { Component, OnInit } from '@angular/core';
import { CommonModule, Location } from '@angular/common';
import { RouterModule } from '@angular/router';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Difficulty } from '@pages/quiz/enums/difficulty.enum';
import { TypeQuiz } from '@pages/quiz/enums/type.enum';
import { QuizService } from '@pages/quiz/services/quiz.service';
import * as ActionsQuiz from '@pages/quiz/store/quiz-selector.store';
import { AppState } from '@pages/quiz/models/AppState.model';
import { Store } from '@ngrx/store';
import { LoadingComponent } from 'src/app/components/loading/loading.component';

@Component({
  selector: 'app-create-quiz',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    LoadingComponent,
  ],
  templateUrl: './create-quiz.component.html',
  styleUrls: ['./create-quiz.component.scss'],
})
export class CreateQuizComponent implements OnInit {
  formQuiz = new FormGroup({
    numberQuestion: new FormControl<number>(5, [Validators.required]),
    category: new FormControl<number>(-1),
    difficulty: new FormControl<number>(-1),
    type: new FormControl(-1),
  });

  categories$ = this.store.select(ActionsQuiz.SelectCategories);

  loading$ = this.store.select(ActionsQuiz.SelectLoading);

  difficulty = Difficulty;
  typeQuiz = TypeQuiz;
  difficultList: string[] = [];
  types: string[] = [];

  constructor(
    private readonly quizService: QuizService,
    private readonly store: Store<AppState>,
    private readonly location: Location
  ) {}

  ngOnInit(): void {
    const difficultNames = Object.keys(Difficulty);
    const typesNames = Object.keys(TypeQuiz);
    this.difficultList = difficultNames.slice(difficultNames.length / 2);
    this.types = typesNames.slice(typesNames.length / 2);
  }

  GenerateQuiz(): void {
    let difficulty: string | null = null;
    let type: string | null = null;
    let category: number | null = null;

    if (this.formQuiz.value.difficulty) {
      difficulty =
        this.formQuiz.value.difficulty > -1
          ? Difficulty[this.formQuiz.value.difficulty]
          : null;
    }
    if (this.formQuiz.value.type) {
      type =
        this.formQuiz.value.type > -1
          ? TypeQuiz[this.formQuiz.value.type]
          : null;
    }
    if (this.formQuiz.value.category) {
      category =
        this.formQuiz.value.category > 0 ? this.formQuiz.value.category : null;
    }
    this.quizService
      .generateQuiz(
        this.formQuiz.value.numberQuestion ?? 5,
        category,
        difficulty,
        type
      )
      .subscribe({
        next: () => {
          this.location.back();
        },
      });
  }
}
