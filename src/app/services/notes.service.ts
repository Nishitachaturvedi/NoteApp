import { Injectable } from '@angular/core';
import { INote } from 'src/app/models/note.interface';

@Injectable({
  providedIn: 'root'
})
export class NotesService {
  
  


  constructor() { }


  createNote (data : INote ) {


    let appData : string | null = localStorage.getItem('app_data'); // getting the value of key "app_data from localstorage and saving it in a variable"
  
    if( appData != null){     // checking if appData is not null meaning if appData already has a value in it then this if block runs.


    const parsedAppDataArray = JSON.parse(appData); // parsing the data meaning converting the value in it's original array of objects format.
    let largest = 0;
    parsedAppDataArray.forEach((element: INote) => {  // here we are checking if the largest ID in the array that exists and saving it to avariable and then assigning the largest + 1 as new id.
      
      if(element.id != null){
      if(element.id > largest ){
        largest = element.id;         // It ensures that you are assiging the correct value to id.
      }
    
    }
      
    }
  );
  data.id = largest + 1; // assigning the largest + 1 as new id to the new array which will be generated after clicking on create note botton.
  parsedAppDataArray.push(data); // pushing the data into the array of old values with the new id value.


  const newAppDataJson = JSON.stringify(parsedAppDataArray); // now we are converting the array in JSON format so that it can be stored in the local storage as a value to it's key app_data.

  localStorage.setItem("app_data", newAppDataJson); // we are stting the new data (newAppDataJson) corresponding to the key in local storage.
  
    }
    else {        // this code is to add the first object to app_data since it was null at the very starting.
      const arrForFirstItem  = [
        {
          id : 1, // we manually assigned an id to the object and added a spread operator so that the rest of the data is copied in the array of object (arrForFirstItem).
          ... data

        }
      ]; 
      const arrForFirstItemJson = JSON.stringify(arrForFirstItem); // we then converted the array of object into JSON format so that it can be stored in locals torage as our first value.
   
      
      localStorage.setItem("app_data" ,arrForFirstItemJson ); // here we are setting the very first value of oue Key app_data in localStorage.

       

    }

  


  



  }

  getAllNotes () {



  }
}
