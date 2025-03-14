import { Component, OnInit } from '@angular/core';
import { NotesService } from 'src/app/services/notes.service';
import { INote } from 'src/app/models/note.interface'; 

@Component({
  selector: 'app-note-main',
  templateUrl: './note-main.component.html',
  styleUrls: ['./note-main.component.css']
})
export class NoteMainComponent implements OnInit {

  public data : INote = {
    
    title : "",
    content : "",
    severity : 3,
    importance : false,
    deleted : false

  }

  public notesData : INote[] = [];
  public pinnedTasks : INote[] = [];
  public unpinnedTask :INote[] = [];


  

  constructor(private notesService : NotesService) { }

  ngOnInit(): void {

    this.getAllNote ();

   
      console.log(this.notesService.getAllNotes());
    
  }

createNote(severity : number){

this.data.severity = severity;
this.notesService.createNote(this.data);
this.getAllNote ();

}

getAllNote ()
{
  this.notesData = this.notesService.getAllNotes();

this.pinnedTasks = this.notesData.filter((element)=>{

  return element.importance == true;


})

 this.unpinnedTask = this.notesData.filter((element)=>{

  return element.importance == false;

})


}

deleteNote(id : number | undefined ){
  if (id != undefined){
  this.notesService.deleteNote(id);
  this.getAllNote();
  }
}


updateNote(data : INote){

  this.notesService.updateNotes(data);


}


pinNote(id : number | undefined){

  if(id != undefined){

  this.notesService.pinnedNote(id);
  this.getAllNote();
  }



}


}
