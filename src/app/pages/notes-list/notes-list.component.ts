import { Component, OnInit } from '@angular/core';
import { Note } from 'src/app/Shared/note.model';
import { NotesService } from 'src/app/Shared/notes.service';

@Component({
  selector: 'app-notes-list',
  templateUrl: './notes-list.component.html',
  styleUrls: ['./notes-list.component.scss'],
})
export class NotesListComponent implements OnInit {
  notes: Note[] = new Array<Note>();

  constructor(private notesservice: NotesService) {}

  ngOnInit(): void {
    //we want to retrieve  all notes from notes Service
    this.notes = this.notesservice.getAll();
  }

  deleteNote(id: number) {
    this.notesservice.delete(id);
  }
}
