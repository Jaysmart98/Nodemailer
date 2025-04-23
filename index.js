const express = require('express')
const app = require('express')()
require('dotenv').config()


const multer = require('multer')
const upload = multer({ dest: 'uploads/'})

const bodyParser = require('body-parser')

const Mailer = require('./controllers/sendMail')
const clientSide = require('./controllers/clients')

require('ejs')
app.set('view engine', 'ejs')
app.use(express.json())
app.use(bodyParser.urlencoded({ extended: true }))

const port = process.env.PORT || 5400
const URI = process.env.uri || undefined




app.get('/files', (req,res)=>{
    res.render('pages/upload')
})
app.get('/mail', Mailer)
app.post('/upload', upload.single('media'), clientSide)


app.listen(port, () => {
    console.log(`server started at port: ${port}`);
})