import { Component, OnInit } from '@angular/core';
import { TaskService } from '../../services/task-service';
import { Tarefa } from '../../../Tarefa';
import { CommonModule } from '@angular/common';
import { TaskItem } from "../task-item/task-item";
import { AddTask } from "../add-task/add-task";

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [CommonModule, TaskItem, AddTask],
  templateUrl: './tasks.html',
  styleUrl: './tasks.css'
})
export class Tasks implements OnInit {

  tarefas: Tarefa[] = [];

  constructor(private taskService: TaskService) { }

  ngOnInit(): void {
    this.taskService.getTasks().subscribe((dado) => {
      this.tarefas = dado;
      console.log(this.tarefas);
    });
  }

  addTask(tarefa: Tarefa) {
    this.taskService.addTask(tarefa).subscribe((tarefa) => {
      this.tarefas.push(tarefa);
    });
  }

  deleteTask(tarefa: Tarefa) {
    this.taskService.deleteTask(tarefa).subscribe(() => {
      this.tarefas = this.tarefas.filter(t => t.id !== tarefa.id);
    });
  }
  
  toggleConcluida(tarefa: Tarefa) {
    tarefa.concluido = !tarefa.concluido;
    this.taskService.updateTask(tarefa).subscribe();
  }

} 
