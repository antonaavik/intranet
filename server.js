const express = require('express');
const app = express();

const port = process.env.PORT || 1234;
const static = __dirname + '/static';

app.use(express.static(static));

app.get('/', (req, res) => {
    res.sendFile('index.html');
});

app.listen(port, () => {
    console.log(`running on port ${port}`);
});