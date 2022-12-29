import { EventEmitter, Injectable } from '@angular/core';
import { Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  keyObj = {
    first_name : ['', [Validators.required, Validators.minLength(4)]],
    last_name: ['', [Validators.required, Validators.minLength(4)]],
    age: [, [Validators.min(2), Validators.required]],
    languages: ['', [Validators.required, Validators.minLength(3)]],
    city: ['', Validators.required]
  }
  keyArray= [
    {key: "first_name", name: "First Name", type: "text"},
    {key: "last_name", name: "Last Name", type: "text"},
    {key: "age", name: "Age", type: "number"},
    {key: "languages", name: "Languages", type: "text"},
    {key: "city", name: "City", type: "text"}
  ]
  dataArray= [
    {city: "", first_name: "", last_name: "", age: '', languages: ""},
    {city: "Rawalpindi", first_name: "Muhammad", last_name: "Owais", age: 27, languages: "Angular JS"},
    {last_name: "Owais", city: "Rawalpindi", first_name: "Muhammad", age: 27, languages: "Node JS"},
    {first_name: "Muhammad", age: 27, languages: "Vue JS",city: "Rawalpindi", last_name: "Owais"},
    {languages: "React JS", first_name: "Muhammad", last_name: "Owais", age: 27,city: "Rawalpindi"},
    {first_name: "Muhammad",city: "Rawalpindi", last_name: "Owais", age: 27, languages: "Nest JS"},
  ]
  showForm= new EventEmitter<number>()
  objId= new EventEmitter<number>()
  edit= new EventEmitter<number>()

  constructor() {
  }
  changeShowForm(data) {
    this.showForm.emit(data)
  }
  changeObjId(data) {
    this.objId.emit(data)
  }
  changeEdit(data) {
    this.edit.emit(data)
  }
}
