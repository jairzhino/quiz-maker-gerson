import { Component, OnInit } from '@angular/core';
import { QuizService } from '@pages/quiz/services/quiz.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'quiz-maker-gerson';
  constructor(private readonly quizService: QuizService) {}
  ngOnInit(): void {
    this.quizService.getCategories();
  }
}
