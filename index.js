const express = require('express');
const app = express();
const cors = require('cors')
const port = process.env.PORT || 5000;
const chef = require('./Data/chef.json');
const recepis = require('./Data/ViewRecepi.json')

app.use(cors())
app.get('/', (req, res) =>{
    res.send('Food is running')
});

app.get('/chef',(req, res) =>{
    res.send(chef)
})
app.get('/recepis',(req, res) => {
    res.send(recepis)
})
app.get('/recepis/:id',(req,res)=>{
    const id = req.params.id;
    const selectedrecepis = recepis.find(n => n.id == id)
    res.send(selectedrecepis)
})
app.listen(port, () => {
    console.log(`food API is running on port: ${port}`)
})