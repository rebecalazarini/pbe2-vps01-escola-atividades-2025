const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const create = async (req, res) => {
    try {
        const atividade = await prisma.atividade.create({
            data: req.body
        });
        res.status(201).json(atividade).end();
    } catch (e) {
        res.status(400).json(e).end();
    }
}

const read = async (req, res) => {
    const atividades = await prisma.atividade.findMany();
    res.json(atividades);
}

const readOne = async (req, res) => {
    const atividade = await prisma.atividade.findFirst({
        where: {
            atividade_id: Number(req.params.id)
        },
        include: {
            pedidos: true
        }
    });
    res.json(atividade);
}

const update = async (req, res) => {
    try {
        const atividade = await prisma.atividade.update({
            data: req.body,
            where: {
                atividade_id: Number(req.params.id)
            }
        });
        res.status(202).json(atividade).end();
    } catch (e) {
        res.status(400).json(e).end();
    }
}

const remove = async (req, res) => {
    try {
        const atividade = await prisma.atividade.delete({
            where: {
                atividade_id: Number(req.params.id)
            }
        });
        res.status(204).json(atividade).end();
    } catch (e) {
        res.status(400).json(e).end();
    }
}

module.exports = {
    create,
    read,
    readOne,
    update,
    remove
}