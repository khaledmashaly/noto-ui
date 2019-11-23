import { Component, OnInit } from '@angular/core';
import { Note } from '../../shared/note';
import { NoteService } from '../../services/note.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
	templateUrl: './edit-note.component.html',
	styleUrls: ['./edit-note.component.sass']
})
export class EditNoteComponent implements OnInit {

	note: Note = {
		title: '',
		body: ''
	};

	constructor(
		private noteService: NoteService,
		private route: ActivatedRoute,
		private location: Location
	) { }

	ngOnInit() {
		const id = this.route.snapshot.paramMap.get('id');
		this.noteService
			.getNote(id)
			.subscribe(note => this.note = note);
	}

	editNote(note: Note): void {
		this.noteService
			.editNote(note)
			.subscribe(() => this.goBack());
	}

	goBack(): void {
		this.location.back();
	}
}
