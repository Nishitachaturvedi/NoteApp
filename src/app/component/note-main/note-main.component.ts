import { Component, OnInit } from '@angular/core';
import { NotesService } from 'src/app/services/notes.service';
import { INote } from 'src/app/models/note.interface'; 

@Component({
  selector: 'app-note-main',
  templateUrl: './note-main.component.html',
  styleUrls: ['./note-main.component.css']
})
export class NoteMainComponent implements OnInit {

  private data : INote = {
    
    title : "Angular Study",
    content : "I want to study angular and become pro in it",
    severity : 1,
    importance : false,
    deleted : false

  }


  

  constructor(private notesService : NotesService) { }

  ngOnInit(): void {

   
      console.log(this.notesService.getAllNotes());
    
  }

createNote(){

this.notesService.createNote(this.data);
}

}
