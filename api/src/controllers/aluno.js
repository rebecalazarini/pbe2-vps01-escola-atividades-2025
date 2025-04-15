const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const create = async (req, res) => {
    try {
        const aluno = await prisma.aluno.create({
            data: req.body
        });
        res.status(201).json(aluno);
    } catch (e) {
        res.status(400).json({ error: e.message });
    }
}

const read = async (req, res) => {
    const alunos = await prisma.aluno.findMany({
        include: {
            telefone: true,
            atividade: true
        }
    });
    res.json(alunos);
}

const readOne = async (req, res) => {
    const aluno = await prisma.aluno.findUnique({
        where: {
            ra: req.params.id
        },
        include: {
            telefone: true,
            atividade: true
        }
    });
    if (aluno) res.json(aluno);
    else res.status(404).json({ error: 'Aluno não encontrado' });
}

const update = async (req, res) => {
    try {
        const aluno = await prisma.aluno.update({
            where: {
                ra: req.params.id
            },
            data: req.body
        });
        res.status(200).json(aluno);
    } catch (e) {
        res.status(400).json({ error: e.message });
    }
}

const remove = async (req, res) => {
    try {
        await prisma.aluno.delete({
            where: {
                ra: req.params.id
            }
        });
        res.status(204).end();
    } catch (e) {
        res.status(400).json({ error: e.message });
    }
}

module.exports = {
    create,
    read,
    readOne,
    update,
    remove
}
