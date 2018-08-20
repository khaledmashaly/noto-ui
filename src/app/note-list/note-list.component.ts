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

  deleteNote(id: number): void {
    this.noteList = this.noteList.filter(note => note.id !== id);
    this.notesService.deleteNote(id).subscribe();
  }

  createNote(): void {
    const newNote: Note = {
      id: this.noteList[this.noteList.length - 1].id + 1,
      title: '',
      body: ''
    };
    this.notesService.createNote(newNote)
                      .subscribe(() => this.editNote(newNote.id));
  }

  editNote(id: number): void {
    this.router.navigate(['/edit-note/', id]);
  }

}
