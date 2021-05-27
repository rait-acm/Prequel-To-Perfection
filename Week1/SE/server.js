const express = require('express');
const app = express();
const mongoose = require('mongoose');
const env=require("dotenv");
const cors = require('cors');

const userRoute= require('./user.routes');

app.use(cors())
app.use(express.json());
app.use('/api',userRoute);

env.config();
mongoose.connect(`${process.env.MONGO_URI}`, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false 
})
    .then(() => console.log("Connected to Database"))
    .catch(err => console.error("An error has occured", err));

app.listen(
    process.env.PORT || 2000, 
    console.log("Server started on port 2000 ")
);
