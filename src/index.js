import express from 'express';
import morgan from 'morgan';
import { PORT } from './config/serverConfig.js';
import apiRouter from './routes/apiRoutes.js';
import connectDB from './config/dbConfig.js';

const app = express();

app.use(morgan('combined'));

app.use(express.json());
app.use(express.text());
app.use(express.urlencoded());


app.use('/api',apiRouter);

app.get('/ping', (req, res) => {
    return res.json({
        message: 'pong'
    });
});


app.all('/*splat', (req, res) => {
  return res.status(404).json({ message: 'Not found' });
});

app.listen(PORT, (req,res) => {
    console.log(`Server is running on http://localhost:${PORT}`);
    connectDB(); 
});
export default app;