const express = require('express');
const path = require('path');
const router = express.Router();
const fs = require('fs');

const dataPath = './data/list.json';

const app = express();

const createTodo = (isDone, description) => {
    return {
        isDone,
        description
    }
}

const getList = () => JSON.parse(fs.readFileSync(dataPath));

app.set('views', path.resolve('src/views')); // this directs the rendering to the views folder
app.set('view engine', 'pug'); // with this I don't need to add the '.pug' extension in the render target 
app.get('/', (req, res) => {
    res.render('index', { title: 'Hey', message: 'Hello there!', list: getList() })
  })

app.post('/todo', (req, res) => {
    
});

const port = process.env.PORT || 3000;
const server = app.listen(port, () => {
    console.log('Server is up and running on port ' + port);
});
