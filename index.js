const express = require('express');
const app = express();
const cors = require('cors')
const port = process.env.PORT || 5000;
const chef = require('./Data/chef.json');

app.use(cors())
app.get('/', (req, res) =>{
    res.send('Food is running')
});

app.get('/chef',(req, res) =>{
    res.send(chef)
})

app.listen(port, () => {
    console.log(`food API is running on port: ${port}`)
})