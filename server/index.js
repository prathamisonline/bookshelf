import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import bookRouter from "./routes/books.js"
const app = express();
dotenv.config();

app.use(express.json());

app.use(cors());

app.get('/', (req, res) => {
    return res.status(234).json({
        message: 'Hello World!',
    });
});

app.use('/books', bookRouter);

const PORT = process.env.PORT || 5000;
const connect = async () => {
    try {
        await mongoose.connect(process.env.MONGO);
        console.log("connected to mongodb");
    } catch (error) {
        throw error;
    }

};



app.listen(PORT, () => {
    connect();
    console.log("connected to backend");
})
