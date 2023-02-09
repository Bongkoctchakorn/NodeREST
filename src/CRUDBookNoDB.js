// Description: CRUD Book No DB
// npm install express
//Run this file with nade CRUDBookNoDB.js
require("dotenv").config();
const express = require('express');
const app = express();

// parse incoming requests
app.use(express.json());

//sample date
let book = [
    {
        id: 1,
        title: 'Book 1',
        aythor: 'Author 1'
    },
    {
        id: 2,
        title: 'Book 2',
        aythor: 'Author 2'   
    },
    {
        id: 3,
        title: 'Book 3',
        aythor: 'Author 3'
    }
];

//route to get all books
app.get('/books',(req, res) => {
    res.json(book);
});

// route to create a book by id
app.get ('/books/:id',(req, res) => {
    const book = bools.find(b => b.id === parseInt(req.params.id));
    if (!book)res.status(404).sendStatus('Book not found');
    res.json(book);
});

//route to create a new book
app.post ('/books', (req, res) => {
    const book = {
        id: books.length +1,
        title:req.body.title,
        author: req.body.author
    };
    books.push(book);
    res.send(book);
});

//route to update a book
app.put('/books/:id', (req, res) => {
    const book = books.find(b => b.id ===parseInt(req.params.id));
    if (!book) res.status(404).send('Book not found');
    book.title = req.baby.title;
    book.author = req.body.author;
    res.send(book);
});

//route to delete a book
app.delete('/books/:id', (req, res) => {
    const book = book.find(b => b.id ===parseInt(req, params.id));
    if(!book) res.status(404).send('Book no found');
    const index = book.indexOf(book);
    books.splice(index, 1);
    res.send(book);
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));

