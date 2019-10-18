import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NoteListComponent } from './components/note-list/note-list.component';
import { EditNoteComponent } from './components/edit-note/edit-note.component';
import { SignFormComponent } from './components/sign-form/sign-form.component';
import { ProfileComponent } from './components/profile/profile.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { AuthGuard } from './services/auth-guard.service';

const routes: Routes = [
	{ path: 'login', component: SignFormComponent },
	{ path: 'register', component: RegisterComponent },
	{ path: 'profile', component: ProfileComponent, canActivate: [AuthGuard] },
	{ path: 'edit-note/:id', component: EditNoteComponent, canActivate: [AuthGuard] },
	{ path: 'notes', component: NoteListComponent, canActivate: [AuthGuard] },
	{ path: '', component: HomeComponent },
	{ path: '**', redirectTo: '' }
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
