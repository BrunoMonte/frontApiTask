import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TarefaService } from '../../services/task';
import { Tarefa } from '../../models/task';

@Component({
  selector: 'app-task-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './task-form.html',
  styleUrls: ['./task-form.css']
})
export class TaskForm {

  tarefa: Tarefa = {
    title: '',
    description: '',
    status: 'Pendente'
  };

  constructor(private tarefaService: TarefaService) {}

  createTarefa(): void {

    if (!this.tarefa.title.trim()) {
      alert('Título obrigatório');
      return;
    }

    this.tarefaService.createTarefa(this.tarefa).subscribe({
      next: () => {

        alert('Tarefa criada com sucesso');

        this.tarefa = {
          title: '',
          description: '',
          status: 'Pendente'
        };

        window.location.reload();
      },

      error: (err) => {
        console.error(err);
        alert('Erro ao criar tarefa');
      }
    });
  }
}