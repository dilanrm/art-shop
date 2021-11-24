require('dotenv').config()
const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT||3000;

app.use(cors({origin: "http://localhost:3000"}));
app.use(express.urlencoded({extended: true}))
app.use(express.json())

const routes = require('./routes');
app.use(routes);

app.listen(port, () => {
    console.log("App Listening on port", port);
})
