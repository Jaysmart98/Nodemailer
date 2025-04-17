const express = require('express');
const app = express();
const dotenv = require('dotenv');
dotenv.config();
const port = process.env.PORT || 5200;
const Mailer = require('./controllers/sendMail');
const texted = require('./controllers/indexx');
const imgs = require('./controllers/ourImages');


const bodyParser = require('body-parser');
app.use(express.json()); // post request
app.use(bodyParser.urlencoded({ extended: true }));

const nodemailer = require('nodemailer');

app.get('/mail', Mailer);



app.listen(port, () => console.log(`Server started at port: ${port}`));