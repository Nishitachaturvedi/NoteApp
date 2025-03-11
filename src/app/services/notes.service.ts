import { Injectable } from '@angular/core';
import { INote } from 'src/app/models/note.interface';

@Injectable({
  providedIn: 'root'
})
export class NotesService {
  
  


  constructor() { }


  createNote (data : INote ) {


    let appData : string | null = localStorage.getItem('app_data');
  
    if( appData != null){

    const x = JSON.parse(appData);
   
    }
    else {
      const arrForFirstItem  = [
        {
          id : 1,
          ... data

        }
      ]; 
      const arrForFirstItemJson = JSON.stringify(arrForFirstItem);
   
      
      localStorage.setItem("app_data" ,arrForFirstItemJson );

       

    }

  


  



  }

  getAllNotes () {



  }
}
