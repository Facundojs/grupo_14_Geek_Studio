const express = require('express');

module.exports = {
    products: (req, res) => {
        res.render('products')
    },
    carro: (req, res) => {
        res.render('carro')
    },
    detalle: (req, res) => {
        res.render('detalle')
    },
    productscrud: (req, res) => {
        res.render('productscrud')
    },
}