import { Component, OnInit } from '@angular/core';
import { Note } from '../shared/note';
import { NotesService } from '../notes.service';
import { jsf } from 'json-schema-faker';

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

  createNote(): void {
    const newNote: Note = {
      id: this.noteList[this.noteList.length - 1].id + 1,
      title: 'title of the new note',
      body: 'Quasi necessitatibus fugiat ad autem similique. In consequatur nemo ut velit maxime ut minus nemo. Ea libero ut quia. Qui ea tempora non. Ullam non ut. Deserunt facilis repellendus. Similique soluta dolor accusantium et. Omnis eos et id. Dolorem eos sit a veritatis repellendus qui. Illum voluptates exercitationem et iusto explicabo beatae iure. Sed delectus ut vero et temporibus reiciendis molestiae ea ut.'
    };
    this.notesService.createNote(newNote).subscribe();
    this.noteList.push(newNote);
  }

}
