const express = require('express');
const Author = require('../models/book');
const router = express.Router();


let Book=[
    {id:1,title:"tytul1",publishingYear:2000,authorId:1}
];

const getBooksList = (req, res) => {
    res.render('books', { books:books });
};

const addBook = (req, res) => {

    const { title } = req.body;
    const id = books.length > 0 ? books[books.length - 1].id + 1 : 1;
    books.push({ id, title });
    res.redirect('/book/list');
};

const deleteBook = (req, res) => {
    const { id } = req.params;
    const index = books.findIndex(book => book.id === parseInt(id));
    if (index !== -1) {
        books.splice(index, 1);
    }
    res.redirect('/book/list');
};
module.exports = { getBooksList, addBook, deleteBook };