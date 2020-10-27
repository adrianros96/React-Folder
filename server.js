const express = require('express');
const mongoose = require('mongoose');
const items = require('./routes/api/items');


const app = express();

// BodyParser
app.use(express.json());

// db Config

const db = require('./config/keys').mongoURI;

// db connect

mongoose.connect(db, {useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err));

    app.use('/api/items', items);

    const port = process.env.PORT || 5000;

    app.listen(port, () => console.log(`Server started on port ${port}`));