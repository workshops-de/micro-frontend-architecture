import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { loadRemoteModule } from '@angular-architects/module-federation';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  {
    path: 'books',
    loadChildren: () =>
      loadRemoteModule({
        type: 'manifest',
        remoteName: 'books',
        exposedModule: './Module',
      }).then((m) => m.BooksModule),
  },
  {
    path: 'todos',
    loadChildren: () =>
      loadRemoteModule({
        type: 'manifest',
        remoteName: 'todos',
        exposedModule: './Module',
      }).then((m) => m.TodosModule),
  },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
