import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TarefaService } from '../../services/task';
import { Tarefa } from '../../models/task';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './task-list.html',
  styleUrl: './task-list.css'
})
export class TaskList implements OnInit {

  tarefas: Tarefa[] = [];
  editingId: number | null = null;

  editedTask: Tarefa = {
  title: '',
  description: '',
  status: 'Pendente'
};

  constructor(private tarefaService: TarefaService) {}

  ngOnInit(): void {
    this.loadTarefas();
  }

  loadTarefas(): void {
    this.tarefaService.getTarefas().subscribe({
      next: (data) => {
        this.tarefas = data;
      },
      error: (err) => {
        console.error('Erro ao buscar tarefas', err);
      }
    });
  }

  deleteTarefa(id: number): void {

  const confirmDelete = confirm('Deseja excluir esta tarefa?');

  if (!confirmDelete) return;

  this.tarefaService.deleteTarefa(id).subscribe({
    next: () => {

      this.tarefas = this.tarefas.filter(t => t.id !== id);

      alert('Tarefa excluída com sucesso');
    },

    error: (err) => {
      console.error(err);
      alert('Erro ao excluir tarefa');
    }
  });

  
}

concluirTarefa(tarefa: Tarefa): void {

  const tarefaAtualizada: Tarefa = {
    ...tarefa,
    status: 'Concluída'
  };

  this.tarefaService.updateTarefa(tarefa.id!, tarefaAtualizada)
    .subscribe({

      next: () => {

        tarefa.status = 'Concluída';

        alert('Tarefa concluída');
      },

      error: (err) => {
        console.error(err);
        alert('Erro ao atualizar tarefa');
      }
    });
}

editTask(tarefa: Tarefa): void {

  this.editingId = tarefa.id!;

  this.editedTask = {
    ...tarefa
  };
}


saveEdit(): void {

  if (!this.editingId) return;

  const tarefaAtualizada = {
    ...this.editedTask,
    id: this.editingId
  };

  this.tarefaService
    .updateTarefa(this.editingId, tarefaAtualizada)
    .subscribe({

      next: () => {

        const index = this.tarefas.findIndex(
          t => t.id === this.editingId
        );

        if (index !== -1) {

          this.tarefas[index] = tarefaAtualizada;
        }

        this.editingId = null;

        alert('Tarefa atualizada');
      },

      error: (err) => {

        console.error(err);

        alert('Erro ao atualizar');
      }
    });
}

cancelEdit(): void {
  this.editingId = null;
}
}