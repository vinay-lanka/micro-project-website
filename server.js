const express = require('express');
const fs = require('fs');
const app = express();
const port = 3000;

app.use(express.static(__dirname + '/public/'));

app.get('/', (req,res)=>{
    // res.send("helloworld");
    res.sendFile('/public/pages/index.html', {'root': './'});
});

app.get('/refresh', (req,res)=>{
    let file = fs.readFileSync('values.json');
    let data = JSON.parse(file);
    res.send(data);
});

app.listen(port);