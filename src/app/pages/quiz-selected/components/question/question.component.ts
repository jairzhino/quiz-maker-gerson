import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuestionBlock } from '@pages/quiz-selected/models/quiz-block.model';
import { QuestionFormComponent } from '@pages/quiz-selected/components/question-form/question-form.component';
import { QuestionViewComponent } from '@pages/quiz-selected/components/question-view/question-view.component';
import { Question } from '@pages/quiz/models/question.model';
import { QuizBlockService } from '@pages/quiz-selected/services/quiz-block.service';

@Component({
  selector: 'app-question',
  standalone: true,
  imports: [CommonModule, QuestionFormComponent, QuestionViewComponent],
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss'],
})
export class QuestionComponent {
  isOpen = false;
  @Input() questionBlock!: QuestionBlock;
  @Input() questionNumber!: number;

  constructor(private readonly quizBlockService: QuizBlockService) {}
  OpenClose(): void {
    this.isOpen = !this.isOpen;
  }
  ChangeQuestion(question: Question): void {
    this.quizBlockService.updateQuestion(question, this.questionNumber);
    this.isOpen = false;
  }
}
