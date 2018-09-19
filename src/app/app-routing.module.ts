import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NoteListComponent } from './note-list/note-list.component';
import { EditNoteComponent } from './edit-note/edit-note.component';
import { SignFormComponent } from './sign-form/sign-form.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
	{ path: 'form', component: SignFormComponent },
	{ path: 'profile', component: ProfileComponent },
	{ path: 'edit-note/:id', component: EditNoteComponent },
	{ path: '', component: NoteListComponent },
	{ path: '**', redirectTo: '' }
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
