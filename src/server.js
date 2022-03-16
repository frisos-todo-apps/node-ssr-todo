const express = require('express');
const path = require('path');
const router = express.Router();

const app = express();

const createTodo = (isDone, description) => {
    return {
        isDone,
        description
    }
}

const todoList = [
    createTodo(true, 'setup project'),
    createTodo(true, 'mock todo list'),
    createTodo(false, 'create pug page'),
    createTodo(false, 'use express for POST and put'),
    createTodo(false, 'save list to and get from file'),
    createTodo(false, 'prettify with bootstrap'),
]

app.set('views', path.resolve('src/views')); // this directs the rendering to the views folder
app.set('view engine', 'pug'); // with this I don't need to add the '.pug' extension in the render target 
app.get('/', (req, res) => {
    res.render('index', { title: 'Hey', message: 'Hello there!', list: todoList })
  })

const port = process.env.PORT || 3000;
const server = app.listen(port, () => {
    console.log('Server is up and running on port ' + port);
});
