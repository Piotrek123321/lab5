const express = require('express');
const Author = require('../models/author');
const router = express.Router();

let authors=[
    {id:1,name:"autor1"}
];

exports.getAuthorsList = (req, res) => {
    res.render('authors', { authors:authors });
};