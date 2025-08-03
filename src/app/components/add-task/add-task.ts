import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Tarefa } from '../../../Tarefa';
import { Button } from "../button/button";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-add-task',
  standalone: true,
  imports: [FormsModule, Button, CommonModule],
  templateUrl: './add-task.html',
  styleUrl: './add-task.css'
})

export class AddTask {
  @Output() onAddTask = new EventEmitter<Tarefa>();

  tarefa: string = '';
  categoria: string = '';
  concluido: boolean = false;
  mostrarAddTarefa: boolean = false;

  alteraExibicao() {
    this.mostrarAddTarefa = !this.mostrarAddTarefa;
  }

  onSubmit() {

    if (!this.tarefa) {
      alert(`Adicione uma tarefa`);
      return;
    }

    if (!this.categoria) {
      alert(`Adicione uma categoria`);
      return;
    }

    const novaTarefa = {
      tarefa: this.tarefa,
      categoria: this.categoria,
      concluido: this.concluido
    };

    this.onAddTask.emit(novaTarefa);

    this.tarefa = '';
    this.categoria = '';
    this.concluido = false;
    this.mostrarAddTarefa = false;
    alert(`Tarefa adicionada com sucesso!`);

  }

}
