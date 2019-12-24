import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Note } from '../../../entities/Note';
import { NoteService } from '../../../services/note.service';
import { ROUTE_NAMES } from 'src/app/modules/routing/routes-names';
import { Observable } from 'rxjs';

@Component({
	templateUrl: './note-list.component.html',
	styleUrls: ['./note-list.component.sass']
})
export class NoteListComponent implements OnInit {
	noteList$: Observable<Note[]>;
	loading$: Observable<boolean>;
	routes = ROUTE_NAMES;

	constructor(
		private noteService: NoteService,
		private router: Router
	) {
		this.noteList$ = noteService.entities$;
		this.loading$ = noteService.loading$;
	}

	ngOnInit() {
		this.getNotes();
	}

	getNotes() {
		this.noteService.getAll();
	}

	deleteNote(note: Note) {
		this.noteService.delete(note).subscribe();
	}

	createNote() {
		this.router.navigate([this.routes.noteCreate]);
	}

	editNote(note: Note) {
		this.router.navigate([this.routes.noteEdit, note._id]);
	}
}
