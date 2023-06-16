import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuestionBlock } from '@pages/quiz-selected/models/quiz-block.model';
import { TypeQuiz } from '@pages/quiz/enums/type.enum';
import { Category } from '@pages/quiz/enums/category.enum';
import { Difficulty } from '@pages/quiz/enums/difficulty.enum';

@Component({
  selector: 'app-question-view',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './question-view.component.html',
  styleUrls: ['./question-view.component.scss'],
})
export class QuestionViewComponent {
  @Input() questionBlock!: QuestionBlock;
  typeQuiz = TypeQuiz;
  category = Category;
  difficulty = Difficulty;
}
