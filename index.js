const express = require('express')
const app = express()
const cors = require('cors')
const port = process.env.PORT || 5000;

app.use(cors())
const categories = require('./loadData/category.json');
const news = require('./loadData/news.json')

app.get('/', (req, res) => {
    res.send('server is running');
})

app.get('/categories', (req, res) => {
    res.send(categories);
})

app.get('/categories/:id', (req, res) => {
    const id = req.params.id;
    const selectCategory = news.filter(n => n.category_id == id)
    res.send(selectCategory)
})

app.get('/news', (req, res) => {
    res.send(news)
})

app.get('/news/:id', (req, res) => {
    const id = req.params.id;
    // console.log(id)
    const selectDetails = news.find(n => n.id === id)
    res.send(selectDetails);
    // res.send(details)
})

app.listen(port, () => {
    console.log('listening on port', port);
})