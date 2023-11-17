// arquivo: routes/leilaoRoutes.ts

import express, { Request, Response } from 'express';
import * as leilaoService from '../services/leilaoService';

const router = express.Router();

router.post('/leiloes', async (req: Request, res: Response) => {
  const { produto, preco, datalimite, donoId } = req.body;

  try {
    const novoLeilao = await leilaoService.criarNovoLeilao(produto, preco, datalimite, donoId);
    res.status(201).json(novoLeilao);
  } catch (error:any) {
    res.status(500).json({ error: error.message });
  }
});

router.put('/leiloes/:id', async (req: Request, res: Response) => {
  const { id } = req.params;
  const { produto, preco, datalimite } = req.body;

  try {
    const leilaoAtualizado = await leilaoService.atualizarLeilao(Number(id), produto, preco, datalimite);
    res.status(200).json(leilaoAtualizado);
  } catch (error:any) {
    res.status(500).json({ error: error.message });
  }
});

router.delete('/leiloes/:id', async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const leilaoDeletado = await leilaoService.deletarLeilao(Number(id));
    res.status(200).json(leilaoDeletado);
  } catch (error:any) {
    res.status(500).json({ error: error.message });
  }
});

router.get('/leiloes', async (_req: Request, res: Response) => {
  try {
    const leiloes = await leilaoService.listarLeiloes();
    res.status(200).json(leiloes);
  } catch (error:any) {
    res.status(500).json({ error: error.message });
  }
});

export default router;
