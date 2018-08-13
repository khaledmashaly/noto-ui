import { Component, OnInit } from '@angular/core';
import { Note } from '../shared/note';
import { NotesService } from '../notes.service';

@Component({
  selector: 'app-note-list',
  templateUrl: './note-list.component.html',
  styleUrls: ['./note-list.component.sass']
})
export class NoteListComponent implements OnInit {
  noteList: Note[];
  constructor(private notesService: NotesService) { }

  ngOnInit() {
    this.notesService.getNotes()
      .subscribe(notes => this.noteList = notes);
  }

}
