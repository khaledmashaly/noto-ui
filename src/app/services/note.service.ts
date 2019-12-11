import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Note } from '../shared/note';

@Injectable({
	providedIn: 'root'
})
export class NoteService {
	private API_URL = 'note';

	constructor(private http: HttpClient) { }

	getNotes() {
		return this.http.get<Note[]>(this.API_URL);
	}

	getNote(id: string) {
		return this.http.get<Note>(`${this.API_URL}/${id}`);
	}

	deleteNote(id: string) {
		return this.http.delete(`${this.API_URL}/${id}`);
	}

	createNote(note: Note) {
		return this.http.post(this.API_URL, note);
	}

	editNote(note: Note) {
		return this.http.put(`${this.API_URL}/${note._id}`, note);
	}
}
