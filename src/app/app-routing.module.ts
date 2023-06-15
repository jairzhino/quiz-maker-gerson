import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    loadComponent: () =>
      import('@pages/home/home.component').then(
        component => component.HomeComponent
      ),
    title: 'Home',
  },
  {
    path: 'quiz',
    loadComponent: () =>
      import('@pages/quiz/quiz.component').then(
        component => component.QuizComponent
      ),
    title: 'Quiz',
  },
  {
    path: 'quiz/:id',
    loadComponent: () =>
      import('@pages/quiz-selected/quiz-selected.component').then(
        component => component.QuizSelectedComponent
      ),
    title: 'Quiz',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
