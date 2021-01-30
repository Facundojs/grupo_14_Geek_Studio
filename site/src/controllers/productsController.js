const express = require('express');

const productos = require('../database/products');
const { login } = require('./userController');

module.exports = {
    products: (req, res) => {
        res.render('products', {productos})
    },
    detalle: (req, res) => {
        let productToShow = productos.find(elemento => {
            return elemento.id == req.params.id
        });
        res.render('detalle', {productToShow});
    },
    create: (req, res) => {
        res.render('createProduct')
    },
    store: (req, res) => {
        let form = req.body;
        res.send('store')
    },
    edit: (req, res) => {
        let productToEdit = productos.find(elemento => {
            return elemento.id == req.params.id
        });
        //console.log(productToEdit)
        res.render('edit', { productToEdit });
    },
    update: (req, res) => {
        console.log(1);
        res.send('Estoy en el edit')
    },
    destroy: (req, res) => {
        console.log(2)
        res.send('Estoy en el send')
    },
    carro: (req, res) => {
            res.render('carro', {productos})
    },
}