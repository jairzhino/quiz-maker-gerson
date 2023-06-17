import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule, Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from '@pages/quiz/models/AppState.model';
import * as QuizSelector from '@pages/quiz/store/quiz-selector.store';
import * as QuizBlockSelector from '@pages/quiz-selected/store/quiz-selector.store';
import { QuestionComponent } from '@pages/quiz-selected/components/question/question.component';
import { Observable, Subscription } from 'rxjs';
import { QuizBlockService } from './services/quiz-block.service';
import { QuizBlock } from './models/quiz-block.model';

@Component({
  selector: 'app-quiz-selected',
  standalone: true,
  imports: [CommonModule, QuestionComponent],
  templateUrl: './quiz-selected.component.html',
  styleUrls: ['./quiz-selected.component.scss'],
})
export class QuizSelectedComponent implements OnInit, OnDestroy {
  id = 0;
  quiz$!: Observable<QuizBlock | null>;

  quizBlock$ = this.store.select(QuizBlockSelector.SelectQuizBlock);

  quizNotSubmitted$ = this.store.select(
    QuizBlockSelector.QuizBlockNotSubmitted
  );
  quizSubmitted$ = this.store.select(QuizBlockSelector.QuizBlockSubmitted);
  quizCorrectAnwser$ = this.store.select(QuizBlockSelector.QuizAnswerCorrect);

  quizBlockIncomplete$ = this.store.select(
    QuizBlockSelector.QuizBlockIncomplete
  );
  quizSubscription!: Subscription;

  constructor(
    private readonly route: ActivatedRoute,
    private readonly store: Store<AppState>,
    private readonly quizBlockService: QuizBlockService,
    private readonly location: Location
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe({
      next: param => {
        const idParam = parseInt(param['id']);

        this.id = idParam;
        this.LoadPage();
      },
    });
  }
  private LoadPage(): void {
    this.quiz$ = this.store.select(QuizSelector.SelectQuiz(this.id));
    this.quizSubscription = this.quiz$.subscribe({
      next: quizBlock => {
        if (quizBlock) {
          this.quizBlockService.updateQuiz(quizBlock);
        }
      },
    });
  }
  GoBack(): void {
    this.location.back();
  }
  SaveQuiz(): void {
    this.quizBlockService.submitGame();
  }

  ngOnDestroy(): void {
    this.quizSubscription.unsubscribe();
    this.quizBlockService.updateQuiz(undefined);
  }
}
