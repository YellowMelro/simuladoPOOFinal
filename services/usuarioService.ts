import * as usuarioController from '../controllers/usuarioController';

export const criarNovoUsuario = async (nome: string, email: string) => {
  return await usuarioController.criarUsuario(nome, email);
};