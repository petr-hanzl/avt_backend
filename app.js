const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');

const corsOptions = {
    origin: [
        "http://localhost:8080",
        "http://localhost:8000",
        "http://172.20.10.3:8080/",
        "127.0.0.1"
    ]
}

app.use(cors(corsOptions));
app.use(bodyParser.json());

//Import routes
const userRoutes = require('./routes/users');

app.use('/users', userRoutes);



//Routes
app.get('/',(req, res) => {
    res.send('We are on home');
});

//DB connection
mongoose.connect('mongodb://admin:admin@localhost:27017',
    { useNewUrlParser:true, useUnifiedTopology: true },
    () => console.log('Connected to DB')
);

app.listen(3001);

