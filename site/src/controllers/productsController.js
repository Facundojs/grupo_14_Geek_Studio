const express = require('express');
const fs = require('fs');
const path = require('path');
// const productos = require('../database/products');
const products = require('../database/products.json');
const jsonTable = require('../database/jsonTable');
const model = require('../database/jsonTable');

module.exports = {
    products: (req, res) => {
        jsonTable().readFile;
        res.render('products', {productos: products})
    },
    detalle: (req, res) => {
        jsonTable().readFile;
        let productToShow = products.find(elemento => {
            return elemento.id == req.params.id
        });
        console.log(productToShow);
        res.render('detalle', {productToShow});
    },
    create: (req, res) => {
        res.render('createProduct')
    },
    store: (req, res) => {
        let form = req.body;
        console.table(form);
        //jsonTable().create(form);
        res.send(form)
    },
    edit: (req, res) => {
        jsonTable().readFile;
        let productToEdit = products.find(elemento => {
            return elemento.id == req.params.id
        });
        console.log(productToEdit)
        res.render('edit', { productToEdit });
    },
    update: (req, res) => {
        console.log(1);
        res.send('Estoy en el edit')
    },
    destroy: (req, res) => {
        console.log(2)
        res.send('Estoy en el destroy')
    },
    carro: (req, res) => {
        res.render('carro', {productos})
    },
}