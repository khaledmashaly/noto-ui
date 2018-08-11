import { Component, OnInit, Input } from '@angular/core';
import { Note } from '../shared/note';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.sass']
})
export class NoteComponent implements OnInit {
  note: Note = {
    title: 'The title of the damn note',
    body: 'The absolutely massive body of this freaking awesome note, oh yeahhhhhhhh!!!!!!!!!'
  };

  constructor() { }

  ngOnInit() {
  }

}
