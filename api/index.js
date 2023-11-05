import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

const { DB_USER, DB_PASSWORD, DB_NAME } = process.env;
const password = encodeURIComponent(DB_PASSWORD);


mongoose.connect(`mongodb+srv://${DB_USER}:${password}@mern-estate.erp2ou1.mongodb.net/${DB_NAME}?retryWrites=true&w=majority`, {
})
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch(error => {
    console.error('Error connecting to MongoDB:', error);
  });

const app = express();

app.listen(3000, () => {
    console.log('Server is running on port 3000');
})