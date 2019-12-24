import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { NoteService } from '../../../services/note.service';
import { Note } from 'src/app/entities/Note';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { NoteEditorType } from './note-editor-type.enum';
import { switchMap } from 'rxjs/operators';
import { of } from 'rxjs';

@Component({
	selector: 'app-note-editor',
	templateUrl: './note-editor.component.html',
	styleUrls: ['./note-editor.component.sass']
})
export class NoteEditorComponent implements OnInit {
	editorType: NoteEditorType;
	noteForm = this.fb.group({
		title: ['Title', Validators.required],
		body: ['body']
	});

	constructor(
		private fb: FormBuilder,
		private route: ActivatedRoute,
		private noteService: NoteService
	) { }

	ngOnInit() {
		this.route.data.subscribe(
			(data) => this.editorType = data.editorType
		);
		this.route.paramMap.pipe(
			switchMap(
				(params: ParamMap) => {
					if (this.editorType === NoteEditorType.Create) {
						return of({
							title: '',
							body: ''
						} as Note);
					}
					if (this.editorType === NoteEditorType.View) {
						const noteID = params.get('id');
						return this.noteService.getByKey(noteID);
					}
					throw new Error('ValueError: editorType is not defined');
				}
			)
		).subscribe(
			(note) => {
				this.title.setValue(note.title);
				this.body.setValue(note.body);
			},
			(error) => {
				console.log('note-editor, getNote error:', error);
			}
		);
	}

	saveNote() {
		if (this.editorType === NoteEditorType.Create) {
			return this.createNote();
		}
		if (this.editorType === NoteEditorType.View) {
			return this.updateNote();
		}
	}

	createNote() {
		const note: Note = {
			title: this.title.value,
			body: this.body.value
		};
		this.noteService.add(note)
			.subscribe(console.log, console.error);
	}

	updateNote() {
		const note: Note = {
			_id: this.route.snapshot.paramMap.get('id'),
			title: this.title.value,
			body: this.body.value
		};
		this.noteService.update(note)
			.subscribe(console.log, console.error);
	}

	get title() { return this.noteForm.get('title'); }

	get body() { return this.noteForm.get('body'); }

}
