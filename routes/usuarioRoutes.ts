import express, { Request, Response } from 'express';
import * as usuarioService from '../services/usuarioService';

const router = express.Router();

router.post('/usuarios', async (req: Request, res: Response) => {
  const { nome, email } = req.body;

  try {
    const novoUsuario = await usuarioService.criarNovoUsuario(nome, email);
    res.status(201).json(novoUsuario);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.put('/usuarios/:id', async (req: Request, res: Response) => {
  const { id } = req.params;
  const { nome, email } = req.body;

  try {
    const usuarioAtualizado = await usuarioService.atualizarUsuario(Number(id), nome, email);
    res.status(200).json(usuarioAtualizado);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.delete('/usuarios/:id', async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const usuarioDeletado = await usuarioService.deletarUsuario(Number(id));
    res.status(200).json(usuarioDeletado);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.get('/usuarios', async (_req: Request, res: Response) => {
  try {
    const usuarios = await usuarioService.listarUsuarios();
    res.status(200).json(usuarios);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

export default router;