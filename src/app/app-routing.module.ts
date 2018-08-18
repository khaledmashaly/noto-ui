import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NoteListComponent } from './note-list/note-list.component';
import { EditNoteComponent } from './edit-note/edit-note.component';

const routes: Routes = [
  { path: '', component: NoteListComponent },
  { path: 'edit-note/:id', component: EditNoteComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
