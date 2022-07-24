import { Component, OnInit } from '@angular/core';
import TasksFile from '../tasks.json';

interface task {
  id: number;
  descripcion: string;
  estado: boolean;
}
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  Tasks: task[] = TasksFile;

  constructor() {
    console.log(this.Tasks);
  }

  ngOnInit(): void {
    console.log("Appliction started successfully!");
  }

  addTask(): void {
    let newTaskDesc = prompt("Descripción de la nueva tarea:");
    let newTask = {
      id: 1,
      descripcion: newTaskDesc,
      estado: true
    }
    let stringifiedNewTask = JSON.stringify(newTask);
    TasksFile.join(stringifiedNewTask);
  }
}
