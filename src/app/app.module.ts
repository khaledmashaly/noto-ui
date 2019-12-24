import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './modules/routing/app-routing.module';
import { httpInterceptorProviders } from './interceptors/index';

import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatListModule } from '@angular/material/list';
import { MatDividerModule } from '@angular/material/divider';
import { MatTooltipModule } from '@angular/material/tooltip';

import { AppComponent } from './components/core/app/app.component';
import { HeaderComponent } from './components/core/header/header.component';
import { NoteListComponent } from './components/note/note-list/note-list.component';
import { LoginComponent } from './components/auth/login/login.component';
import { ProfileComponent } from './components/auth/profile/profile.component';
import { RegisterComponent } from './components/auth/register/register.component';
import { HomeComponent } from './components/core/home/home.component';
import { NoteEditorComponent } from './components/note/note-editor/note-editor.component';
import { FloatingActionComponent } from './components/core/floating-action/floating-action.component';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EntityDataModule, DefaultDataServiceConfig } from '@ngrx/data';
import { reducerMap } from './store/reducres';
import { storeConfig } from './store';
import { UserEffects } from './store/effects/user.effects';
import { entityConfig } from './store/data/entity-metadata';
import { defaultDataServiceConfig } from './store/data/default-data-service-config';

import { environment } from '../environments/environment';

@NgModule({
	declarations: [
		AppComponent,
		HeaderComponent,
		NoteListComponent,
		LoginComponent,
		ProfileComponent,
		RegisterComponent,
		HomeComponent,
		NoteEditorComponent,
		FloatingActionComponent
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
		EntityDataModule.forRoot(entityConfig),
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
		MatProgressSpinnerModule,
		MatListModule,
		MatDividerModule,
		MatTooltipModule
	],
	providers: [
		httpInterceptorProviders,
		{ provide: DefaultDataServiceConfig, useValue: defaultDataServiceConfig }
	],
	bootstrap: [AppComponent]
})
export class AppModule { }
