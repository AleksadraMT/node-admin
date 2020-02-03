const express = require('express')
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
require('dotenv/config')

app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(bodyParser.json());

// IMPORT ROUTES

const postsRoutes = require('./routes/posts')

app.use('/posts', postsRoutes)

// ROUTES

app.get('/', (req, res) => {
  res.send('it is a home page');
});

// db connect

mongoose.connect(process.env.DB_CONNECTION, { 
  useNewUrlParser: true,
  useUnifiedTopology: true,
}, () => {
  console.log('connected to db');
})

// LISTENING SERVER

app.listen(3000);