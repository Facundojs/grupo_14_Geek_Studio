const express = require('express');

const productos = require('../database/products')

module.exports = {
    products: (req, res) => {
        res.render('products', {productos})
    },
    carro: (req, res) => {
        res.render('carro')
    },
    create: (req, res) => {
        res.render('createProduct')
    },
    detalle: (req, res) => {
        res.render('detalle')
    },
}