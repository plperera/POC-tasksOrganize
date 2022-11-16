# POC-tasksOrganize

Esse é um projeto simples em TypeScript com intuito de aplicar o que estou aprendendo.

Rotas: 
  
  GET ( /tasks ) > busca todas as tasks pendentes
  GET ( /tasks/done ) > busca todas as tasks feitas
  GET ( /tasks/all ) > busca todas as tasks
  GET ( /tasks/:answerable ) > busca todas as tasks da pessoa cujo nome foi passado (params)
  
  POST ( /tasks ) > cria uma nova tarefa atraves do body em JSON ({ "description": string, "answerable": string,"until": string })
  PUT ( /tasks ) > atualiza o status de uma task (passada pelo id)
  DELETE ( /tasks ) > deleta uma task pelo id (query)
