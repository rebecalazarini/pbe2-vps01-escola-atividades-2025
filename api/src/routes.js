const express = require('express');
const routes = express.Router();

const Aluno = require('./controllers/aluno.js');
const Telefone = require('./controllers/telefone.js');
const Atividade = require('./controllers/atividade.js');


routes.get('/', (req, res) => {
  return res.json({ titulo: 'Escola ACME' });
});

routes.post('/a', Aluno.create);
routes.get('/a', Aluno.read);
routes.get('/a/:id', Aluno.readOne);
routes.patch('/a/:id', Aluno.update);
routes.delete('/a/:id', Aluno.remove);

routes.post('/t', Telefone.create);
routes.get('/t', Telefone.read);
routes.get('/t/:id', Telefone.readOne);
routes.patch('/t/:id', Telefone.update);
routes.delete('/t/:id', Telefone.remove);

routes.post('/at', Atividade.create);
routes.get('/at', Atividade.read);
routes.get('/at/:id', Atividade.readOne);
routes.patch('/at/:id', Atividade.update);
routes.delete('/at/:id', Atividade.remove);



module.exports = routes;