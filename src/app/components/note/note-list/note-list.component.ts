import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Note } from '../../../shared/note';
import { NoteService } from '../../../services/note.service';

@Component({
	templateUrl: './note-list.component.html',
	styleUrls: ['./note-list.component.sass']
})
export class NoteListComponent implements OnInit {
	noteList: Note[] = [];
	loading = true;

	constructor(
		private noteService: NoteService,
		private router: Router
	) { }

	ngOnInit() {
		this.getNotes();
	}

	getNotes() {
		this.noteService.getNotes()
			.subscribe(
				(notes) => {
					this.noteList = notes;
					this.loading = false;
				},
				(error) => {
					console.log('note-list, getNotes error:', error);
				}
			);
	}

	deleteNote(id: string) {
		this.noteList = this.noteList.filter(note => note._id !== id);
		this.noteService.deleteNote(id).subscribe();
	}

	createNote() {
		this.router.navigateByUrl('/note');
	}

	editNote(id: string) {
		this.router.navigate(['/note', id]);
	}
}
