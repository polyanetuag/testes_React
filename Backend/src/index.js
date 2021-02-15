const { response } = require('express');
const express = require('express');
const { v4: uuidv4 } = require('uuid');

const app = express();

app.use(express.json());

const projects = [];

function logRequests(request, response, next) {
  const { method, url } = request;

  const logLabel = `[${method.toUpperCase()}] ${url}`;
  console.log(logLabel);
}

function validateProjectId(request, response, next) {
  
}

app.get('/projects', (request, response) => {
  const { title } = request.query

  const results = title
    ? projects.filter(project => project.title.includes(title))
    : projects;

  return response.json(results);     //listando todos os projetos
})

app.post('/projects', (request, response) => {
  const { title, owner } = request.body;

  const project = { id: uuid(), title, owner };       //criando um projeto

  projects.push(project);       //atualizar e colocar o novo projeto na ultima posição
  
  return response.json(project)     //exibe o projeto recém criado
})

app.put('/projects/:id', (request, response) => {
  const { id } = request.params;
  const { title, owner } = request.body;

  const projectIndex = projects.findIndex(project => project.id === id);

  if(projectIndex < 0) {
    return response.status(400).json({error: 'Project not found.'})
  }

  const project = {
    id, 
    title, 
    owner,
  } 

  projects[projectIndex] = project; 
  return response.json(project)     //retorna o array atualizado e não a lista completa

})

app.delete('/projects/:id', (request, response) => {
  const { id } = request.params

  const projectIndex = projects.findIndex(project => project.id === id);

  if(projectIndex < 0) {
    return response.status(400).json({error: 'Project not found.'})
  }

  projects.splice(projectIndex,1)

  return response.status(204).send();
})

app.listen(5000, () => {
  console.log("🚀 Back-end started!")
});