import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { NoteService } from '../../../services/note.service';
import { Note } from 'src/app/shared/note';
import { catchError } from 'rxjs/operators';

@Component({
	selector: 'app-note-editor',
	templateUrl: './note-editor.component.html',
	styleUrls: ['./note-editor.component.sass']
})
export class NoteEditorComponent implements OnInit {
	noteForm = this.fb.group({
		title: ['Title', Validators.required],
		body: ['body']
	});

	constructor(
		private fb: FormBuilder,
		private noteService: NoteService
	) { }

	ngOnInit() {
	}

	createNote() {
		const note: Note = {
			title: this.title.value,
			body: this.body.value
		};
		this.noteService.createNote(note)
			.subscribe(console.log);
	}

	get title() { return this.noteForm.get('title'); }

	get body() { return this.noteForm.get('body'); }

}
