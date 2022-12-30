import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  keyArray = []
  dataArray = []
  cols: number
  rows: number
  objId: number
  showForm: number
  edit: number
  constructor(private _data: DataService) { }

  ngOnInit(): void {
    this.keyArray = this._data.keyArray
    this.dataArray = this._data.dataArray
    this.cols = this.keyArray.length 
    this.rows = this.dataArray.length + 1
    this._data.objId.subscribe(data => this.objId = data)
    this._data.showForm.subscribe(data => this.showForm = data)
    this._data.edit.subscribe(data => this.edit = data)
  }

  deleteObj(i) {
    this.dataArray.splice(i, 1)
  }

  changeShowForm() {
   this._data.changeShowForm(1)
  }
  changeObj(id){
    console.log(id)
    this._data.changeObjId(id)
  }
  changeEdit(data) {
    this._data.changeEdit(data)
  }

}
