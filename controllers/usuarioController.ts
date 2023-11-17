// arquivo: controllers/usuarioController.ts

import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const criarUsuario = async (nome: string, email: string) => {
  try {
    const usuario = await prisma.usuario.create({
      data: { nome, email },
    });
    return usuario;
  } catch (error: any) {
    throw new Error(`Erro ao criar usuário: ${error.message}`);
  }
};

export const atualizarUsuario = async (id: number, nome: string, email: string) => {
  try {
    const usuario = await prisma.usuario.update({
      where: { id },
      data: { nome, email },
    });
    return usuario;
  } catch (error: any) {
    throw new Error(`Erro ao atualizar usuário: ${error.message}`);
  }
};

export const deletarUsuario = async (id: number) => {
  try {
    const usuario = await prisma.usuario.delete({
      where: { id },
    });
    return usuario;
  } catch (error: any) {
    throw new Error(`Erro ao deletar usuário: ${error.message}`);
  }
};

export const listarUsuarios = async () => {
  try {
    const usuarios = await prisma.usuario.findMany();
    return usuarios;
  } catch (error: any) {
    throw new Error(`Erro ao listar usuários: ${error.message}`);
  }
};
