const express = require('express');
const mongoose = require('mongoose');
const jobRouter = require('./routes/job');

const app = express();

//JSON parsing middleware
app.use(express.json());

//MongoDB Connection
//mongodb://localhost:27017/jobapp
mongoose
.connect("mongodb+srv://adityawakarekar:Sumit@7447@cluster0.vn0i3.mongodb.net/")
.then(() => console.log('Connection with Database is successfully established...'))
.catch((err) => console.log("### ERROR CONNECTING WITH DATABASE : ", err));

app.use(jobRouter);
app.listen(10000, () => console.log("Server is started at the port 10000"));

