const express = require('express');
const dotenv = require('dotenv').config();
const mongoose = require('mongoose');
const cors = require('cors')

mongoose.connect('mongodb+srv://farhanghafoor61:dbudi8G52iZWWSJg@cluster0.gvqgz3h.mongodb.net/8_ionic-first-app');

const app = express();


const port = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());

app.use("/api", require("./routes/userRoutes"));
error404Handler();
handleErrors();

app.listen(port, ()=> {
    console.log(`server running on port ${port}`)
});


function error404Handler () {
    app.use( (req, res) => {
        res.status(404).json({
            message: "Not Found",
            status_code: 404
        })
    })
}

function handleErrors () {
    app.use( (error, req, res, next) => {
        const errorStatus = req.errorStatus || 500;
        res.status(errorStatus).json({
            message: error.msg || 'Something went wrong. Please try again!',
            status_code: errorStatus,
            
        })
    })
}




