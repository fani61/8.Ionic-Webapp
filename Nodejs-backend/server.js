const express = require('express');
const dotenv = require('dotenv').config();
const mongoose = require('mongoose');
const cors = require('cors')

mongoose.connect(process.env.mongoConnection);

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




