import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppState } from './models/AppState.model';
import * as QuizSelector from '@pages/quiz/store/quiz-selector.store';
import { Store } from '@ngrx/store';
import { QuizService } from './services/quiz.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-quiz',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss'],
})
export class QuizComponent {
  quizzes$ = this.store.select(QuizSelector.SelectQuizzes);

  constructor(
    private readonly store: Store<AppState>,
    private readonly quizService: QuizService
  ) {}

  RemoveQuiz(id: number): void {
    this.quizService.removeQuiz(id);
  }
}
