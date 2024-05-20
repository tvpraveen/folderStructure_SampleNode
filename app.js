const express = require('express')
const app = express()
const mongoose = require('mongoose');

app.use(express.json());
mongoose.connect("mongodb://localhost:27017/sampleProject11")
app.get('/api/ping', (req, res) => {
    res.status(200).send('Application Started Pong!');
});

app.use('/api', require('./route'))
app.listen(3000, (err)=>{
    if(err) console.log(err);
    else console.log("Server Connected!");
})


