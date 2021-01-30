const express = require('express');

const productos = require('../database/products')

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
        res.render('edit', { productToEdit });
    },
    update: () => {
        console.log(1);
    },
    destroy: () => {
        console.log(2)
    },






















    carro: (req, res) => {
            res.render('carro', {productos})
    },
}