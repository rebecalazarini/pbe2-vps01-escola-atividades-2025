const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const create = async (req, res) => {
    try {
        const atividade = await prisma.atividade.create({
            data: req.body
        });
        res.status(201).json(atividade);
    } catch (e) {
        res.status(400).json({ error: e.message });
    }
}

const read = async (req, res) => {
    const atividades = await prisma.atividade.findMany({
        include: {
            aluno_ra: true
        }
    });
    res.json(atividades);
}

const readOne = async (req, res) => {
    const atividade = await prisma.atividade.findUnique({
        where: {
            id: Number(req.params.id)
        },
        include: {
            aluno_ra: true
        }
    });
    if (atividade) res.json(atividade);
    else res.status(404).json({ error: 'Atividade não encontrada' });
}

const update = async (req, res) => {
    try {
        const atividade = await prisma.atividade.update({
            where: {
                id: Number(req.params.id)
            },
            data: req.body
        });
        res.status(200).json(atividade);
    } catch (e) {
        res.status(400).json({ error: e.message });
    }
}

const remove = async (req, res) => {
    try {
        await prisma.atividade.delete({
            where: {
                id: Number(req.params.id)
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
