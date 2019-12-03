import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
	selector: 'app-note-editor',
	templateUrl: './note-editor.component.html',
	styleUrls: ['./note-editor.component.sass']
})
export class NoteEditorComponent implements OnInit {

	constructor(private fb: FormBuilder) { }

	ngOnInit() {
	}

}
