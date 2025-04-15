const express = require('express');
const routes = express.Router();

const Aluno = require('./controllers/aluno.js');
const Telefone = require('./controllers/telefone.js');
const Atividade = require('./controllers/atividade.js');


routes.get('/', (req, res) => {
  return res.json({ titulo: 'Escola ACME' });
});


router.post('/a',Aluno.create);
router.get('/a',Aluno.read);
router.get('/a/:id',Aluno.readOne);
router.patch('/a/:id',Aluno.update);
router.delete('/a/:id',Aluno.remove);

router.post('/t',Telefone.create);
router.get('/t',Telefone.read);
router.get('/t/:id',Telefone.readOne);
router.patch('/t/:id',Telefone.update);
router.delete('/t/:id',Telefone.remove);

router.post('/at',Atividade.create);
router.get('/at',Atividade.read);
router.get('/at/:id',Atividade.readOne);
router.patch('/at/:id',Atividade.update);
router.delete('/at/:id',Atividade.remove);


module.exports = routes;