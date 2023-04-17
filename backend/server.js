const express = require('express');
 const cors = require('cors');
 const mongoose = require('mongoose');
//  const {MongoClient} = require('mongodb');
 require('dotenv').config();

 const app = express();
 const port = process.env.PORT || 5000;

 app.use(cors());
 app.use(express.json());

 const connectDB = async () => {
   const conn = await mongoose.connect(process.env.ATLAS_URI)
   console.log(`MongoDB Connected: ${conn.connection.host}`)
}

const exercisesRouter = require('./routes/exercises');
const usersRouter = require('./routes/users');

//  const uri = process.env.ATLAS_URI;
//  console.log(uri);
// mongoose.connect(uri);
// const connection = mongoose.connection;
// connection.once('open', () => {
//   console.log("MongoDB database connection established successfully");
// })
app.use('/exercises',exercisesRouter);
app.use('/users', usersRouter);
connectDB();

 app.listen(port,() =>{
    console.log(`Server is running on port: ${port}`)
 });