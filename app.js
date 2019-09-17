
const express = require('express');
const connectDB = require('./config/db');
const bodyParser = require('body-parser');
const path = require("path");
const port = process.env.PORT || 8082;






const app = express();
const http = require('http');
var cors = require('cors');

var server = http.createServer(app);

require("dotenv").config();



app.use(cors({ origin: true, credentials: true }));
app.use(bodyParser.json());

connectDB();

const art = require('./routes/api/art');
app.use('/api/art', art);

function startServer() {
app.mernsite = server.listen(port, () => console.log(`Server running on port ${port}`));

}
setImmediate(startServer);



exports = module.exports = app;