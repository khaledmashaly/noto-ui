import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Note } from '../../../shared/note';
import { NoteService } from '../../../services/note.service';

@Component({
	templateUrl: './note-list.component.html',
	styleUrls: ['./note-list.component.sass']
})
export class NoteListComponent implements OnInit {
	noteList: Note[];
	constructor(
		private noteService: NoteService,
		private router: Router
	) { }

	ngOnInit() {
		this.getNotes();
	}

	getNotes(): void {
		this.noteService.getNotes()
			.subscribe(notes => this.noteList = notes);
	}

	deleteNote(id: string): void {
		this.noteList = this.noteList.filter(note => note._id !== id);
		this.noteService.deleteNote(id).subscribe();
	}

	createNote(): void {
		// this.notesService.createNote()
		// 	.subscribe(res => this.editNote(res.id));
	}

	editNote(id: string): void {
		this.router.navigate(['/edit-note', id]);
	}
}
