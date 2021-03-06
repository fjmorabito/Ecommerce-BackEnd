import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import productRouter from './routes/productRouter.js';
import userRouter from './routes/userRouter.js';

dotenv.config();

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true}));
mongoose.connect(process.env.MONGODB_URL || 'mongodb://localhost/freemarket', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
});

app.use('/api/users', userRouter);

app.use('/api/products', productRouter);

app.get('/', (req, res) => {
    res.send('Server is ready');
});

app.use((err, req, res, next) => {
    res.status(500).send({message: err.message})
});

const port = process.env.PORT || 8000;

app.listen(port, () => {
    console.log(`Serve at http://localhost:${port}`);
});  