import { Component, OnInit } from '@angular/core';
import { Note } from '../shared/note';
import { NotesService } from '../notes.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-note-list',
  templateUrl: './note-list.component.html',
  styleUrls: ['./note-list.component.sass']
})
export class NoteListComponent implements OnInit {
  noteList: Note[];
  constructor(private notesService: NotesService) { }

  ngOnInit() {
    this.getNotes();
  }

  getNotes(): void {
    this.notesService.getNotes()
                     .subscribe(notes => this.noteList = notes);
  }

  deleteNote(id: number): void {
    this.noteList = this.noteList.filter(note => note.id !== id);
    this.notesService.deleteNote(id).subscribe();
  }

}
