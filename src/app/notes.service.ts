import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Note, HttpOptions } from './shared/note';
import { AuthService } from './auth.service';

const api = '/api/notes';

@Injectable({
	providedIn: 'root'
})
export class NotesService {

	constructor(private http: HttpClient, private auth: AuthService) { }

	/**
	 * set headers for http requests
	 * @param body true if request has a body e.g. POST, PUT requests
	 */
	private setHeaders(body: boolean = false): HttpOptions {
		const token = this.auth.getToken();
		let headers: any = { 'Authorization': `Bearer ${token}` };
		if (body) {
			headers = {
				...headers,
				'Content-Type': 'application/json'
			};
		}
		return { headers: new HttpHeaders(headers)};
	}

	getNotes(): Observable<Note[]> {
		const options = this.setHeaders();
		return this.http.get<Note[]>(api, options)
			.pipe(catchError(this.handleError('getNotes', [])));
	}

	getNote(id: string): Observable<Note> {
		const options = this.setHeaders();
		const url = `${api}/${id}`;
		return this.http.get<Note>(url, options)
			.pipe( catchError(this.handleError<Note>(`getNote id=${id}`)) );
	}

	deleteNote(id: string): Observable<{}> {
		const options = this.setHeaders();
		const url = `${api}/${id}`;
		return this.http.delete(url, options)
			.pipe( catchError(this.handleError('deleteNote', [])) );
	}

	createNote(): Observable<any> {
		const options = this.setHeaders();
		return this.http.post(api, options)
			.pipe( catchError(this.handleError('createNote', 'some fake id')) );
	}

	editNote(note: Note): Observable<any> {
		const options = this.setHeaders(true);
		const url = `${api}/${note._id}`;
		return this.http.put(url, note, options)
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
