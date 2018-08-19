import { Component, OnInit } from '@angular/core';
import { Note } from '../shared/note';
import { NotesService } from '../notes.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-edit-note',
  templateUrl: './edit-note.component.html',
  styleUrls: ['./edit-note.component.sass']
})
export class EditNoteComponent implements OnInit {

  note: Note = {
    id: 0,
    title: '',
    body: ''
  };

  constructor(
    private noteService: NotesService,
    private route: ActivatedRoute,
    private location: Location
  ) { }

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.noteService.getNote(id)
                    .subscribe(note => this.note = note);
  }

}
