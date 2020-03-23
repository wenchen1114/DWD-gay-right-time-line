const fs = require('fs');
const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const config = require('./config');
// read in mongoose library
const mongoose = require('mongoose');
// read in the URI to our MongoDB Atlas 
const MONGODB_URI = config.MONGODB_URI;
// Use mongoose to connect to our MongoDB Atlas server
mongoose.connect(MONGODB_URI, {useNewUrlParser: true});
const signups = require('./models/signups');

const PORT = config.PORT;
const publicURL = path.resolve(`${__dirname}/public`);

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use(express.static(publicURL));

app.get("/",(req,res)=>{
    res.sendFile(path.resolve(__dirname, './public/site.html'));
});

app.get("/api/v1/signups",async(req,res)=>{
    try{
        const data = await signups.find();
        res.json(data);
      } catch(error){
        console.error(error);
        res.json(error);
      }
})

app.post("/api/v1/signups", async(req,res)=>{
    try{
        const newData = {
          name: req.body.name,
          email: req.body.email
        }
        const data = await signups.create(newData);
        res.json(data);
      } catch(error){
        console.error(error);
        res.json(error);
      }
})



app.listen(PORT, () => {
    console.log(`https://wenchen1114-dwd-gay-right-time-line.glitch.me/`)
  });
