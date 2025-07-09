import express from 'express';
import taskRoutes from './routes/taskroutes.js';

const app = express();
app.use(express.json());
app.use('/tasks', taskRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Servidor corriendo en puerto ${PORT}`));
