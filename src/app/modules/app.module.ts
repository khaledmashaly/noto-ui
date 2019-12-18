import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppRoutingModule } from './routing/app-routing.module';
import { httpInterceptorProviders } from '../interceptors/index';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import { AppComponent } from '../components/core/app/app.component';
import { HeaderComponent } from '../components/core/header/header.component';
import { NoteListComponent } from '../components/note/note-list/note-list.component';
import { LoginComponent } from '../components/auth/login/login.component';
import { ProfileComponent } from '../components/auth/profile/profile.component';
import { RegisterComponent } from '../components/auth/register/register.component';
import { HomeComponent } from '../components/core/home/home.component';

import { StoreModule } from '@ngrx/store';
import { reducerMap } from '../store/reducres';
import { storeConfig } from '../store';
import { EffectsModule } from '@ngrx/effects';
import { UserEffects } from '../store/effects/user.effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../../environments/environment';
import { NoteEditorComponent } from '../components/note/note-editor/note-editor.component';

@NgModule({
	declarations: [
		AppComponent,
		HeaderComponent,
		NoteListComponent,
		LoginComponent,
		ProfileComponent,
		RegisterComponent,
		HomeComponent,
		NoteEditorComponent
	],
	imports: [
		BrowserModule,
		BrowserAnimationsModule,
		AppRoutingModule,
		HttpClientModule,
		FormsModule,
		ReactiveFormsModule,

		StoreModule.forRoot(reducerMap, storeConfig),
		EffectsModule.forRoot([UserEffects]),
		StoreDevtoolsModule.instrument({
			maxAge: 25, // Retains last 25 states
			logOnly: environment.production,
		}),

		MatToolbarModule,
		MatIconModule,
		MatButtonModule,
		MatCardModule,
		MatInputModule,
		MatMenuModule,
		MatProgressSpinnerModule
	],
	providers: [
		httpInterceptorProviders
	],
	bootstrap: [AppComponent]
})
export class AppModule { }
