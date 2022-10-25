const express = require('express')
const app = express()
const cors = require('cors')
const port = process.env.PORT || 5000;

app.use(cors())
const categories = require('./loadData/category.json');
const details = require('./loadData/news.json')
app.get('/', (req, res) => {
    res.send('server is running');
})

app.get('/categories', (req, res) => {
    res.send(categories);
})

app.get('/details', (req, res) => {
    res.send(details);
})

app.listen(port, () => {
    console.log('listening on port', port);
})