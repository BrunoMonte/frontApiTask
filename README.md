#  Task Manager Frontend

Frontend da aplicação de gerenciamento de tarefas desenvolvido com Angular e TypeScript, consumindo uma API REST em .NET.

---

#  Tecnologias utilizadas

- Angular
- TypeScript
- HTML5
- CSS3
- Angular HttpClient

---

#  Funcionalidades

- ✅ Criar tarefas
- ✅ Listar tarefas
- ✅ Editar tarefas
- ✅ Excluir tarefas
- ✅ Atualizar status da tarefa
- ✅ Integração com API .NET

---

#  Pré-requisitos

Antes de iniciar o projeto, você precisa ter instalado:

- Node.js
- Angular CLI
- Git

---

#  Instalando Angular CLI

Caso não tenha instalado:

```bash
npm install -g @angular/cli
```

---

#  Clonando o repositório

Via GitHub CLI:

```bash
gh repo clone BrunoMonte/task-manager-frontend
```

Ou via Git:

```bash
git clone https://github.com/BrunoMonte/task-manager-frontend.git
```

---

#  Acesse a pasta do projeto

```bash
cd task-manager-frontend
```

---

#  Instalando dependências

```bash
npm install
```

---

#  Executando o projeto

```bash
ng serve
```

---

#  Acessando aplicação

Após iniciar o projeto, abra no navegador:

```bash
http://localhost:4200
```

---

# 🔗 Integração com API

O frontend consome a API backend localmente através da rota:

```bash
http://localhost:5212/swagger/index.html
```

---

# 📌 Estrutura do projeto

```bash
src/
 ├── app/
 │   ├── components/
 │   ├── services/
 │   ├── models/
 │   ├── app.ts
 │   └── app.html
```

---

#  CRUD disponível

| Método | Funcionalidade |
|---|---|
| GET | Listar tarefas |
| POST | Criar tarefa |
| PUT | Atualizar tarefa |
| DELETE | Excluir tarefa |

---

#  Autor

Desenvolvido por Bruno Monte 