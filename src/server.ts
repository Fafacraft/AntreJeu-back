import app from './app.js';
import dotenv from 'dotenv';

dotenv.config();

if (!process.env.BACKEND_PORT) {
  throw new Error('Missing env variable : BACKEND_PORT');
}
const PORT = process.env.BACKEND_PORT;

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
