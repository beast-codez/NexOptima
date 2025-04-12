const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser')
const authRouter = require("./Routers/authRouter");

require('dotenv').config();
require('./Models/database');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use('/auth' , authRouter);




const PORT = process.env.PORT || 5018;
app.listen(PORT, ()=>[
    console.log(`Server running on port ${PORT}`)
])