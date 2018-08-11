import { Component, OnInit, Input } from '@angular/core';
import { Note } from '../shared/note';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.sass']
})
export class NoteComponent implements OnInit {
  @Input() note: Note;

  constructor() { }

  ngOnInit() {
  }

}
