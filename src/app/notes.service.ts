import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Note } from './shared/note';
import { AuthService } from './auth.service';

const api = 'http://localhost:3000/api/notes';
const httpOptions = {
	headers: new HttpHeaders({ 'Content-Type': 'application/json'})
};

@Injectable({
	providedIn: 'root'
})
export class NotesService {
	constructor(private http: HttpClient, private auth: AuthService) { }

	getNote(id: string): Observable<Note> {
		const url = `${api}/${id}`;
		return this.http.get<Note>(url)
			.pipe( catchError(this.handleError<Note>(`getNote _id=${id}`)) );
	}

	getNotes(): Observable<Note[]> {
		const token = this.auth.getToken();
		const options = {
			headers: new HttpHeaders({ 'Authorization': `Bearer ${token}` })
		};
		return this.http.get<Note[]>(api, options)
			.pipe( catchError(this.handleError('getNotes', [])) );
	}

	deleteNote(id: string): Observable<{}> {
		const url = `${api}/${id}`;
		console.log(`deleted note _id ${id}`);
		return this.http.delete(url)
			.pipe( catchError(this.handleError('deleteNote', [])) );
	}

	createNote(note: Note): Observable<string> {
		return this.http.post(api, note, { ...httpOptions, responseType: 'text' })
			.pipe( catchError(this.handleError('createNote', 'some fake id')) );
	}

	editNote(note: Note): Observable<any> {
		const url = `${api}/${note._id}`;
		return this.http.put(url, note, httpOptions)
			.pipe( catchError(this.handleError<any>('editNote')) );
	}

	private handleError<T>(operation = 'operation', result?: T) {
		return (error: any): Observable<T> => {
			// TODO: send the error to remote logging infrastructure
			console.error(error); // log to console instead

			// TODO: better job of transforming error for user consumption
			console.error(`${operation} failed: ${error.message}`);

			// Let the app keep running by returning an empty result.
			return of(result as T);
		};
	}
}
