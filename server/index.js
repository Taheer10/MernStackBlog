const express = require("express");
const bodyParser = require("body-parser");
const mongoose =require("mongoose");
const cors =require('cors');
require('dotenv').config()

const postRoutes = require('./routes/posts')

const app = express();

app.use('/posts', postRoutes);

app.use(bodyParser.json({ limit: "30mb", extended: true}));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true}));
app.use(cors());




mongoose.connect(process.env.CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true})
.then(() => app.listen(process.env.PORT, ()=> {
    console.log(`Db connected and server running on port ${process.env.PORT}`);
}))
.catch((error) => {
    console.log(error.message);
    
})





