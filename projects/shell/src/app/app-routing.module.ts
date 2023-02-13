import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  {
    path: 'books',
    loadChildren: () => import('books/Module').then((m) => m.BooksModule),
  },
  {
    path: 'todos',
    loadChildren: () => import('todos/Module').then((m) => m.TodosModule),
  },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
