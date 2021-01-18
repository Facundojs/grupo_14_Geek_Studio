const express = require('express');

const productos = require('../database/products')

module.exports = {
    products: (req, res) => {
        res.render('products', {productos})
    },
    carro: (req, res) => {
        res.render('carro', {productos})
    },
    create: (req, res) => {
        res.render('createProduct')
    },
    detalle: (req, res) => {
        res.render('detalle')
    },
    productscrud: (req, res) => {
        res.render('productscrud')
    },
}