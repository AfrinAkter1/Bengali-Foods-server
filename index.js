const express = require('express');
const app = express();
const port = process.env.PORT || 5000;



app.get('/', (req, res) =>{
    res.send('Food is running')
});

app.listen(port, () => {
    console.log(`food API is running on port: ${port}`)
})