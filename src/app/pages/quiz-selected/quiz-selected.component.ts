import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule, Location } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from '@pages/quiz/models/AppState.model';
import * as QuizSelector from '@pages/quiz/store/quiz-selector.store';
import * as QuizBlockSelector from '@pages/quiz-selected/store/quiz-selector.store';
import { QuestionComponent } from '@pages/quiz-selected/components/question/question.component';
import { Observable, Subscription } from 'rxjs';
import { QuizBlockService } from './services/quiz-block.service';
import { QuizService } from '@pages/quiz/services/quiz.service';
import { QuizBlock } from './models/quiz-block.model';
import { Quiz } from '@pages/quiz/models/quiz.model';

@Component({
  selector: 'app-quiz-selected',
  standalone: true,
  imports: [CommonModule, QuestionComponent],
  templateUrl: './quiz-selected.component.html',
  styleUrls: ['./quiz-selected.component.scss'],
})
export class QuizSelectedComponent implements OnInit, OnDestroy {
  id = 0;
  quiz$!: Observable<QuizBlock>;
  quizBlock$ = this.store.select(QuizBlockSelector.SelectQuizBlock);
  private quizBlock!: QuizBlock;
  quizBlockIncomplete$ = this.store.select(
    QuizBlockSelector.QuizBlockIncomplete
  );
  quizSubscription!: Subscription;
  quizBlockSubscription!: Subscription;
  isDisableButton = true;
  constructor(
    private readonly route: ActivatedRoute,
    private readonly store: Store<AppState>,
    private readonly quizBlockService: QuizBlockService,
    private readonly quizService: QuizService,
    private readonly router: Router,
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
        this.quizBlockService.updateQuiz(quizBlock);
      },
    });
    this.quizBlockSubscription = this.quizBlock$.subscribe({
      next: quizBlock => {
        this.quizBlock = quizBlock.quizBlock ?? ({} as QuizBlock);
      },
    });
  }
  GoBack(): void {
    this.location.back();
  }
  SaveQuiz(): void {
    const payload: Quiz = {
      id: this.quizBlock.id,
      questions: [
        this.quizBlock.question1.question,
        this.quizBlock.question2.question,
        this.quizBlock.question3.question,
        this.quizBlock.question4.question,
        this.quizBlock.question5.question,
      ],
    };
    if (this.quizBlock.id === 0) {
      this.quizService.createQuiz(payload);
    } else {
      this.quizService.updateQuiz(payload, payload.id);
    }
    this.router.navigate(['quiz']);
  }

  ngOnDestroy(): void {
    this.quizSubscription.unsubscribe();
    this.quizBlockSubscription.unsubscribe();
    this.quizBlockService.updateQuiz(undefined);
  }
}
