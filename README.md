# Desafio Back End IK Tech

Projeto de API NodeJS criado com o framework ExpressJS, Prisma ORM, PostgreSQL, Nodemon e Typescript;

O API já está hospedada no [Heroku](https://www.heroku.com/) e pode ser acessada [CLICANDO AQUI](https://ik-test-api.herokuapp.com/task);

## End-Points

A API possui uma rota /task que atende os chamados do tipo GET, POST, PATCH e DELETE:

   - GET: Retorna uma lista com todos os compromissos cadastrados; 
```bash
 [
   {
     "id": "186f336b-a08d-4dd8-9cce-3b283d49d346",
     "name": "Vinicius Dias",
     "title": "Finalizar Componentes",
     "description": "Finalizar todos os componentes",
     "date": "2022-08-08",
     "hour": "15:00",
     "created_at": "2022-08-07T16:35:11.387Z",
     "updated_at": "2022-08-07T16:35:11.388Z"
   },
   {
     "id": "12c1e16e-2937-44ac-9d79-2462782b03f8",
     "name": "Vinicius Dias",
     "title": "Abstrair componetes",
     "description": "Abstrair componentes reutilizáveis",
     "date": "2022-07-31",
     "hour": "15:00",
     "created_at": "2022-08-07T16:35:56.620Z",
     "updated_at": "2022-08-07T16:35:56.621Z"
   },
 ]
```
   - POST: Recebe um objeto no body com as chaves name, title, description, date, hour. E retorna um objeto com as chaves message e task, caso obtenha sucesso e um objeto de erro com status e message indicando qual campo não foi enviado:<br>
 body
   ```bash
 {
    "name": "João Costa Filho", 
    "title": "finalizar página de cadastro", 
    "description": "Messagem de detalhe sobre o compromisso", 
    "date": "2022-08-05", 
    "hour": "18:39"
}
```
resposta

```bash
 {
    "message": "Task created successfully",
    "task": {
        "id": "48e2b742-d5d6-443e-9f1b-dcfdd80b3a5f",
        "name": "João Costa Filho",
        "title": "finalizar página de cadastro",
        "description": "Messagem de detalhe sobre o compromisso",
        "date": "2022-08-05",
        "hour": "18:39",
        "created_at": "2022-08-07T17:44:36.084Z",
        "updated_at": "2022-08-07T17:44:36.084Z"
    }
  }
```
   - PATCH: Recebe o id do compromisso como parâmetro na rota e os dados a serem alterado no body da requisição /task/${id} e responde um objeto com message e task com o compromisso alterada;<br>
   body
   
```bash
 {
    "name": "Cesar Filho",
    "title": "Criar Rota Patch",
    "description": "criar rota patch sem erros dessa vez",
    "date": "2022-05-08",
    "hour": "20:55"
}
```
resposta

```bash
 {
    "message": "Task updated sucefully!",
    "task": {
        "id": "3df103aa-5487-46a3-83ec-02587e257bfb",
        "name": "Cesar Filho",
        "title": "Criar Rota Patch",
        "description": "criar rota patch sem erros dessa vez",
        "date": "2022-05-08",
        "hour": "20:55",
        "created_at": "2022-08-07T17:42:31.807Z",
        "updated_at": "2022-08-07T17:50:57.654Z"
    }
}
```
- DELETE: Recebe o id do compromisso como parâmetro na rota /task/${id}, exlcui esse compromisso e responde um objeto com message e deleted, com a task que foi removida;<br>

resposta 

```bash
 {
    "message": "Task deleted sucefully!",
    "deleted": {
        "id": "3df103aa-5487-46a3-83ec-02587e257bfb",
        "name": "Cesar Filho",
        "title": "Criar Rota Patch",
        "description": "criar rota patch sem erros dessa vez",
        "date": "2022-05-08",
        "hour": "20:55",
        "created_at": "2022-08-07T17:42:31.807Z",
        "updated_at": "2022-08-07T17:50:57.654Z"
    }
}
```

## Bibliotecas e tecnologias

- [NodeJS](https://nodejs.org/en/)
- [Express JS](https://expressjs.com/)
- [Prisma ORM](https://www.prisma.io/)
- [PostgreSQL](https://www.postgresql.org/)
- [Cors](https://www.npmjs.com/package/cors)
- [Nodemon](https://nodemon.io/)
- [Typescript](https://www.typescriptlang.org/)
- [Heroku](https://www.heroku.com/)
