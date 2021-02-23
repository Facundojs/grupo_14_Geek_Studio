const express = require('express');
const jsonTable = require("../database/jsonTable");
const productsTable = jsonTable("products");
const shuffle = require('lodash.shuffle');

module.exports = {
    index: (req, res) => {
        let products = shuffle(productsTable.all());
        //let revueltos = shuffle(products)
        res.render('home', {products})
    }
}