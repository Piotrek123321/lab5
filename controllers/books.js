const express = require('express');
const Author = require('../models/book');
const router = express.Router();


let Book=[
    {id:1,title:"tytul1",publishingYear:2000,authorId:1}
];

exports.getBooksList = (req, res) => {
    res.render('books', { books:books });
};

