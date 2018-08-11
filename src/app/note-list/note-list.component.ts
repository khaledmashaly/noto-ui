import { Component, OnInit } from '@angular/core';
import { Note } from '../shared/note';

@Component({
  selector: 'app-note-list',
  templateUrl: './note-list.component.html',
  styleUrls: ['./note-list.component.sass']
})
export class NoteListComponent implements OnInit {
  note: Note = {
    title: 'sdfffff sdfffffffs dsssssssss sdddddd',
    body: 'sdfsdfs sddfssd sdfsfsdf sfsfsdf sdfsfsdfs sdfsfsdf sfsfsfsd sd sdfksjfb sjdkfnpoaf lasjdfn lss flsl najask nljsdfpo slf sl sdjlkf ljsf[oiwejasdlkdfm[oiwefnsladf nlscnzx,cnsoid lkclsdn lks lsjcnlsnlc lksnlsn  nsldk nsd;lka;ls n'
  }

  constructor() { }

  ngOnInit() {
  }

}
