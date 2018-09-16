import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import {
	MatToolbarModule,
	MatIconModule,
	MatButtonModule,
	MatCardModule,
	MatInputModule,
	MatMenuModule
} from '@angular/material';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NoteListComponent } from './note-list/note-list.component';
import { EditNoteComponent } from './edit-note/edit-note.component';
import { SignFormComponent } from './sign-form/sign-form.component';

@NgModule({
	declarations: [
		AppComponent,
		HeaderComponent,
		NoteListComponent,
		EditNoteComponent,
		SignFormComponent
	],
	imports: [
		BrowserModule,
		BrowserAnimationsModule,
		AppRoutingModule,
		HttpClientModule,
		FormsModule,
		MatToolbarModule,
		MatIconModule,
		MatButtonModule,
		MatCardModule,
		MatInputModule,
		MatMenuModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
