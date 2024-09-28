const express = require('express');
const app = express();
const mongoose = require('mongoose');
const routes = require('./FormRouter');

const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({extended: true}))

mongoose.set("strictQuery", false);
mongoose.connect('mongodb+srv://egorovaelenadev:1oCifreaijYsNPCq@cluster0.umzma.mongodb.net/Form');

app.use(routes)

app.listen(8000, () => {
    console.log('Server is listenning on port 8000')
})