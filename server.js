import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const app = express();
const PORT = process.env.PORT || process.env.port || 6003;

// Serve arquivos estáticos da pasta 'dist'
app.use(express.static(path.join(__dirname, 'dist')));

// Sempre retornar o index.html principal para que o roteador do React possa funcionar
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

// Inicia o servidor
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
