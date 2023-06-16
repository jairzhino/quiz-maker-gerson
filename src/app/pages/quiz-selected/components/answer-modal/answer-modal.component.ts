import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-answer-modal',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './answer-modal.component.html',
  styleUrls: ['./answer-modal.component.scss'],
})
export class AnswerModalComponent {
  @Output() AddAnswer = new EventEmitter<string | undefined | null>();

  formAnswer = new FormGroup({
    text: new FormControl<string>('', [Validators.required]),
  });

  SaveAnswer(): void {
    this.AddAnswer.emit(this.formAnswer.value.text);
  }
  CloseModal(): void {
    this.AddAnswer.emit();
  }
}
