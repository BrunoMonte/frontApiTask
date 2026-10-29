export interface Tarefa {
  id?: number;

  title: string;

  description: string;

  status: 'Em Espera' | 'Em Andamento' | 'Em Teste' | 'Concluída';

  dataCriacao?: string;
}

export interface getTarefasPorStatus {
  (status: 'Em Espera' | 'Em Andamento' | 'Em Teste' | 'Concluída'): Tarefa[];
}
