const express = require('express');

const app = express();

app.get('/', (req, res) => {
    return res.send('Teste');
})

app.listen(80);