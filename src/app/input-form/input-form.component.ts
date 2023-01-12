import { Component, OnChanges, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { DataService } from '../data.service';

@Component({
  selector: 'app-input-form',
  templateUrl: './input-form.component.html',
  styleUrls: ['./input-form.component.css']
})
export class InputFormComponent implements OnInit, OnChanges {
  keyArray
  dataArray
  showForm
  objId
  edit
  constructor(private _data: DataService, private _fb: FormBuilder) {
    
  }

  ngOnInit(): void {
    this.keyArray = this._data.keyArray
    this.dataArray = this._data.dataArray
    this._data.showForm.subscribe(data => this.showForm = data)
    this._data.objId.subscribe(data => this.objId = data)
    this._data.edit.subscribe(data => {
      this.edit = data
      data ? this.fillForm(this.objId): this.fillForm(0)
    })
    console.log(this.dataForm)
  }


  dataForm = this._fb.group(this._data.keyObj)

  changeShowForm() {
    !this.showForm ? this._data.changeShowForm(1) : this._data.changeShowForm(0)
    !this._data.changeEdit ? this._data.changeEdit(1) : this._data.changeEdit(0)
  }
  onSubmit() {
    this.dataArray.push(this.dataForm.value)
    this.dataForm.reset()
    this._data.changeShowForm(0)
  }

  fillForm(id:number) {
    this.dataForm.setValue(this.dataArray[id])
  }

  update() {
    this.dataArray[this.objId] = (this.dataForm.value)
    this.dataForm.reset()
    this._data.changeShowForm(0)
    this._data.changeEdit(0)
  }
  
  ngOnChanges(): void {
    console.log(this.dataForm)
  }


}
