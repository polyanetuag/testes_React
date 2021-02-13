const { response } = require('express');
const express = require('express');

const app = express();

app.use(express.json());

app.get('/projects', (request, response) => {
  const query = request.query

  return response.json([
    'Project 1',
    'Project 2',
  ]);
})

app.post('/projects', (request, response) => {
  const query = request.query
  
  return response.json([
    'Project 1',
    'Project 2',
    'Project 3',
  ])
})

app.put('/projects/:id', (request, response) => {
  const params = request.params

  return response.json([
    'Project 4',
    'Project 2',
    'Project 3',
  ])
})

app.delete('/projects/:id', (request, response) => {
  const params = request.params

  return response.json([
    'Project 4',
    'Project 2',
  ])
})

app.listen(5000, () => {
  console.log("🚀 Back-end started!")
});