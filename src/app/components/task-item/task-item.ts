import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Tarefa } from '../../../Tarefa';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-task-item',
  imports: [FontAwesomeModule, CommonModule],
  templateUrl: './task-item.html',
  styleUrl: './task-item.css'
})
export class TaskItem {
  @Input() tarefa!: Tarefa;
  @Output() onDeleteTask = new EventEmitter<Tarefa>();
  @Output() onToggleConcluido = new EventEmitter<Tarefa>();
  

  faTimes = faTimes



  onDelete(tarefa: Tarefa) {
    this.onDeleteTask.emit(tarefa);
  }
  
  onToggle(tarefa: Tarefa) {
    this.onToggleConcluido.emit(tarefa);
  }
}
