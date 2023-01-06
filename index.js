const express = require("express");
const app = express();
const authRouter = require("./routes/auth");
const LinksRouter = require("./routes/sociallinks");
const BlogsRouter = require("./routes/blogs");
const SubsRouter = require("./routes/subscriber");
var cors = require('cors');
require('dotenv').config();

const ConnectDB = require("./database/db");
const PORT = process.env.PORT || 1000;
ConnectDB ();

app.use(cors());
app.use(express.json());

app.use("/api/auth",authRouter);
app.use("/api/links",LinksRouter);
app.use("/api/blogs",BlogsRouter);
app.use("/api/subscriber",SubsRouter);

if(process.env.NODE_ENV == 'production'){
    app.use(express.static("frontend/build"));
    const path = require("path");
    app.get("*",(req,res)=>{
        res.sendFile(path.resolve(__dirname , 'frontend','build','index.html'));
    })
}

app.listen(PORT,()=>{
    console.log(`App is Running on on http://localhost:${PORT}`)
})