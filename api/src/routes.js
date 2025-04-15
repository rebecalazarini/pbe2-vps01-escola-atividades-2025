const express = require('express');
const routes = express.Router();

const Aluno = require('./controllers/aluno.js');
const Aluno = require('./controllers/telefone.js');
const Aluno = require('./controllers/atividade.js');


routes.get('/', (req, res) => {
  return res.json({ titulo: 'Escola ACME' });
});

module.exports = routes;