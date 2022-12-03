const express = require("express");
const app = express();
const authRouter = require("./routes/auth");
const LinksRouter = require("./routes/sociallinks");
var cors = require('cors');

const ConnectDB = require("./database/db");
const PORT = process.env.PORT || 1000;
ConnectDB ();

app.use(cors());
app.use(express.json());

app.use("/auth",authRouter);
app.use("/links",LinksRouter);

app.listen(PORT,()=>{
    console.log(`App is Running on on http://localhost:${PORT}`)
})