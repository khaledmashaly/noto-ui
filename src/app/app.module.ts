import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { httpInterceptorProviders } from './interceptors/index';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';

import { AppComponent } from './components/app/app.component';
import { HeaderComponent } from './components/header/header.component';
import { NoteListComponent } from './components/note-list/note-list.component';
import { EditNoteComponent } from './components/edit-note/edit-note.component';
import { SignFormComponent } from './components/sign-form/sign-form.component';
import { ProfileComponent } from './components/profile/profile.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';

import { StoreModule } from '@ngrx/store';
import { reducerMap } from './store/reducres';
import { storeConfig } from './store';

@NgModule({
	declarations: [
		AppComponent,
		HeaderComponent,
		NoteListComponent,
		EditNoteComponent,
		SignFormComponent,
		ProfileComponent,
		RegisterComponent,
		HomeComponent
	],
	imports: [
		BrowserModule,
		BrowserAnimationsModule,
		AppRoutingModule,
		HttpClientModule,
		FormsModule,

		StoreModule.forRoot(reducerMap, storeConfig),

		MatToolbarModule,
		MatIconModule,
		MatButtonModule,
		MatCardModule,
		MatInputModule,
		MatMenuModule
	],
	providers: [
		httpInterceptorProviders
	],
	bootstrap: [AppComponent]
})
export class AppModule { }
