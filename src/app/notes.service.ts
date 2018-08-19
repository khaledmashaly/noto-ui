import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { Note } from './shared/note';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const api = 'http://localhost:3000/notes';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class NotesService {
  constructor(private http: HttpClient) { }

  getNote(id: number): Observable<Note> {
    const url = `${api}/${id}`;
    return this.http.get<Note>(url)
                    .pipe(
                      catchError(this.handleError<Note>(`getNote id=${id}`))
                    );
  }

  getNotes(): Observable<Note[]> {
    return this.http.get<Note[]>(api)
                    .pipe(
                      catchError(this.handleError('getNotes', []))
                    );
  }

  deleteNote(id: number): Observable<Note[]> {
    const url = `${api}/${id}`;
    console.log(`deleted note id ${id}`);
    return this.http.delete<Note[]>(url, httpOptions)
                    .pipe(
                      catchError(this.handleError('deleteNote', []))
                    );
  }

  createNote(note: Note): Observable<Note[]> {
    return this.http.post<Note[]>(api, note, httpOptions)
      .pipe(
        catchError(this.handleError('createNote', []))
      );
  }

  editNote(note: Note): Observable<Note[]> {
    const url = `${api}/${note.id}`;
    return this.http.post<Note[]>(api, note, httpOptions)
      .pipe(
        catchError(this.handleError('deleteNote', []))
      );
  }

  /**
 * Handle Http operation that failed.
 * Let the app continue.
 * @param operation - name of the operation that failed
 * @param result - optional value to return as the observable result
 */
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
