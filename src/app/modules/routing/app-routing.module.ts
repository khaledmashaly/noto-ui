import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NoteListComponent } from '../../components/note/note-list/note-list.component';
import { NoteEditorComponent } from '../../components/note/note-editor/note-editor.component';
import { LoginComponent } from '../../components/login/login.component';
import { ProfileComponent } from '../../components/profile/profile.component';
import { RegisterComponent } from '../../components/register/register.component';
import { HomeComponent } from '../../components/core/home/home.component';
import { AuthGuard } from '../../services/auth-guard.service';
import { NoteEditorType } from '../../components/note/note-editor/note-editor-type.enum';

const routes: Routes = [
	/* authentication routes */
	{
		path: 'login',
		component: LoginComponent
	},
	{
		path: 'register',
		component: RegisterComponent
	},
	{
		path: 'profile',
		component: ProfileComponent,
		canActivate: [AuthGuard]
	},


	/* note routes */
	{
		path: 'note/list',
		component: NoteListComponent,
		canActivate: [AuthGuard]
	},
	{
		path: 'note/:id',
		component: NoteEditorComponent,
		canActivate: [AuthGuard],
		data: {
			editorType: NoteEditorType.View
		}
	},
	{
		path: 'note',
		component: NoteEditorComponent,
		canActivate: [AuthGuard],
		data: {
			editorType: NoteEditorType.Create
		}
	},

	/* general routes */
	{ path: '', component: HomeComponent },
	{ path: '**', redirectTo: '' }
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
