import express from 'express';
import usuarioRoutes from './routes/usuarioRoutes';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use(usuarioRoutes);

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});