
const express = require('express');
const connectDB = require('./config/db');
const bodyParser = require('body-parser');

var cors = require('cors');
const path = require("path");
const port = process.env.PORT || 8082;

require("dotenv").config();


const app = express();

app.use(cors({ origin: true, credentials: true }));
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, "mern-client", "build")));

connectDB();

const art = require('./routes/api/art');
app.use('/api/art', art);




app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "mern-client", "build", "index.html"));
});

app.listen(port, () => console.log(`Server running on port ${port}`));