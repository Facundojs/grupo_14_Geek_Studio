const express = require('express');

const productos = require('../database/products')

module.exports = {
    products: (req, res) => {
        res.render('products', {productos})
    },
    carro: (req, res) => {
        res.render('carro', {productos})
    },
    detalle: (req, res) => {
        res.render('detalle');
        
    },
    create: (req, res) => {
        res.render('createProduct')
    }
    // productscrud: (req, res) => {
    //     res.render('productscrud')
    // },
}