// arquivo: routes/lanceRoutes.ts

import express, { Request, Response } from 'express';
import * as lanceService from '../services/lanceService';

const router = express.Router();

router.post('/lances', async (req: Request, res: Response) => {
  const { valor, compradorId, leilaoId } = req.body;

  try {
    const novoLance = await lanceService.criarNovoLance(valor, compradorId, leilaoId);
    res.status(201).json(novoLance);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
});

router.put('/lances/:id', async (req: Request, res: Response) => {
  const { id } = req.params;
  const { valor } = req.body;

  try {
    const lanceAtualizado = await lanceService.atualizarLance(Number(id), valor);
    res.status(200).json(lanceAtualizado);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
});

router.delete('/lances/:id', async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const lanceDeletado = await lanceService.deletarLance(Number(id));
    res.status(200).json(lanceDeletado);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
});

router.get('/lances', async (_req: Request, res: Response) => {
  try {
    const lances = await lanceService.listarLances();
    res.status(200).json(lances);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
});

export default router;
