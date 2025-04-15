const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const create = async (req, res) => {
    try {
        const telefone = await prisma.telefone.create({
            data: req.body
        });
        res.status(201).json(telefone);
    } catch (e) {
        res.status(400).json({ error: e.message });
    }
}

const read = async (req, res) => {
    const telefones = await prisma.telefone.findMany({
        include: {
            aluno_ra: true
        }
    });
    res.json(telefones);
}

const readOne = async (req, res) => {
    const telefone = await prisma.telefone.findUnique({
        where: {
            id: Number(req.params.id)
        },
        include: {
            aluno_ra: true
        }
    });
    if (telefone) res.json(telefone);
    else res.status(404).json({ error: 'Telefone não encontrado' });
}

const update = async (req, res) => {
    try {
        const telefone = await prisma.telefone.update({
            where: {
                id: Number(req.params.id)
            },
            data: req.body
        });
        res.status(200).json(telefone);
    } catch (e) {
        res.status(400).json({ error: e.message });
    }
}

const remove = async (req, res) => {
    try {
        await prisma.telefone.delete({
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
