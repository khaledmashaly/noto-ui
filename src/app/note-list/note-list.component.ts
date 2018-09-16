import { Component, OnInit } from '@angular/core';
import { Note } from '../shared/note';
import { NotesService } from '../notes.service';
import { Router } from '@angular/router';

@Component({
	selector: 'app-note-list',
	templateUrl: './note-list.component.html',
	styleUrls: ['./note-list.component.sass']
})
export class NoteListComponent implements OnInit {
	noteList: Note[];
	constructor(
		private notesService: NotesService,
		private router: Router
	) { }

	ngOnInit() {
		this.getNotes();
	}

	getNotes(): void {
		this.notesService.getNotes()
			.subscribe(notes => this.noteList = notes);
	}

	deleteNote(_id: string): void {
		this.noteList = this.noteList.filter(note => note._id !== _id);
		this.notesService.deleteNote(_id).subscribe();
	}

	createNote(): void {
		this.notesService.createNote({ title: '', body: '' })
			.subscribe(res => {
				const id = res.replace(/"/g, '');
				this.editNote(id);
			});
	}

	editNote(id: string): void {
		this.router.navigate(['/edit-note/', id]);
	}
}
