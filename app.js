const express = require("express");
const helmet = require('helmet');
const path = require('path');
const bodyparser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
const api = require('./routes/api');
const auth =require('./routes/auth');
const home =require('./routes/home');


app.use(helmet());

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended: true}));
app.use(cors());

app.use(express.static(path.join(__dirname, 'public/loginapp')));

const options = require('./src/opt/options');
mongoose.connect(options.HOST_FULL,
    { useNewUrlParser: true, useUnifiedTopology: true });

app.use('/api', api);
app.use('/auth', auth);
app.use('/', home);

app.use(function(req, res, next) {
    res.status(404).send('Not found');
});

let _port = process.env.PORT || 3000;
console.log(_port+' teste');
app.listen(_port);

