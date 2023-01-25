import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import galleryRoutes from './routes/gallery.js';
import dotenv from 'dotenv';
dotenv.config();

const app = express();

//API Routes

app.use(cors());

app.use(express.json());

app.use('/api/gallery', galleryRoutes);

app.use(express.json());

const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.MONGODB_URL, ()=>{
    console.log('Connected to MongoDB');
})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});