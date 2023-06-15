import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from '@pages/quiz/models/AppState.model';
import * as QuizSelector from '@pages/quiz/store/quiz-selector.store';
import * as QuizBlockSelector from '@pages/quiz-selected/store/quiz-selector.store';
import { QuestionComponent } from '@pages/quiz-selected/components/question/question.component';
import { Subscription } from 'rxjs';
import { QuizBlockService } from './services/quiz-block.service';

@Component({
  selector: 'app-quiz-selected',
  standalone: true,
  imports: [CommonModule, QuestionComponent],
  templateUrl: './quiz-selected.component.html',
  styleUrls: ['./quiz-selected.component.scss'],
})
export class QuizSelectedComponent implements OnInit, OnDestroy {
  id = 0;
  quiz$ = this.store.select(QuizSelector.SelectQuiz(this.id));
  quizBlock$ = this.store.select(QuizBlockSelector.SelectQuizBlock);
  quizSubscription!: Subscription;
  quizBlockSubscription!: Subscription;
  isDisableButton = true;
  constructor(
    private readonly route: ActivatedRoute,
    private readonly store: Store<AppState>,
    private readonly quizBlockService: QuizBlockService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe({
      next: param => {
        const idParam = parseInt(param['id']);

        this.id = idParam;
      },
    });
    this.quizSubscription = this.quiz$.subscribe({
      next: quizBlock => {
        this.quizBlockService.updateQuiz(quizBlock);
      },
    });
    this.quizBlockSubscription = this.quizBlock$.subscribe({
      next: quizBlock => {
        console.log('quizBlock', quizBlock);
      },
    });
  }
  ngOnDestroy(): void {
    this.quizSubscription.unsubscribe();
    this.quizBlockSubscription.unsubscribe();
    this.quizBlockService.updateQuiz(undefined);
  }
}
